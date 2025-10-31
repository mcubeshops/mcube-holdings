# M'Cube Website - Future Features Implementation Guide

## Overview
This document outlines the implementation roadmap for future features that were designed but not yet implemented in the current version of the M'Cube website.

## Phase 2: CMS Backend Implementation

### 1. Database Setup

#### Database Schema
```sql
-- Users table for admin authentication
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  name VARCHAR(255) NOT NULL,
  role VARCHAR(50) NOT NULL DEFAULT 'editor',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Blog posts table
CREATE TABLE blog_posts (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  excerpt TEXT,
  content TEXT NOT NULL,
  featured_image VARCHAR(255),
  category VARCHAR(100),
  tags TEXT[],
  author_id INTEGER REFERENCES users(id),
  status VARCHAR(20) DEFAULT 'draft',
  published_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Job postings table
CREATE TABLE job_postings (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  department VARCHAR(100) NOT NULL,
  location VARCHAR(255) NOT NULL,
  job_type VARCHAR(50) NOT NULL,
  company VARCHAR(100) NOT NULL,
  salary_range VARCHAR(100),
  description TEXT NOT NULL,
  responsibilities TEXT NOT NULL,
  requirements TEXT NOT NULL,
  benefits TEXT,
  custom_questions JSONB,
  status VARCHAR(20) DEFAULT 'active',
  application_deadline DATE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Job applications table
CREATE TABLE job_applications (
  id SERIAL PRIMARY KEY,
  job_posting_id INTEGER REFERENCES job_postings(id),
  applicant_name VARCHAR(255) NOT NULL,
  applicant_email VARCHAR(255) NOT NULL,
  applicant_phone VARCHAR(50),
  current_company VARCHAR(255),
  years_experience INTEGER,
  linkedin_url VARCHAR(255),
  portfolio_url VARCHAR(255),
  resume_url VARCHAR(255) NOT NULL,
  cover_letter_url VARCHAR(255),
  additional_documents JSONB,
  application_responses JSONB,
  status VARCHAR(50) DEFAULT 'new',
  notes TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Events table
CREATE TABLE events (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  event_date TIMESTAMP NOT NULL,
  end_date TIMESTAMP,
  location VARCHAR(255),
  event_type VARCHAR(50) NOT NULL,
  registration_url VARCHAR(255),
  max_attendees INTEGER,
  status VARCHAR(20) DEFAULT 'upcoming',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

#### Prisma Schema
```prisma
// prisma/schema.prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model User {
  id        Int      @id @default(autoincrement())
  email     String   @unique
  password  String
  name      String
  role      Role     @default(EDITOR)
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  
  blogPosts BlogPost[]
  
  @@map("users")
}

model BlogPost {
  id          Int       @id @default(autoincrement())
  title       String
  slug        String    @unique
  excerpt     String?
  content     String
  featuredImage String?
  category    String?
  tags        String[]
  authorId    Int
  status      PostStatus @default(DRAFT)
  publishedAt DateTime?
  createdAt   DateTime  @default(now())
  updatedAt   DateTime  @updatedAt
  
  author      User      @relation(fields: [authorId], references: [id])
  
  @@map("blog_posts")
}

enum Role {
  SUPER_ADMIN
  ADMIN
  EDITOR
  HR_MANAGER
}

enum PostStatus {
  DRAFT
  PUBLISHED
  SCHEDULED
}
```

### 2. Authentication System

#### NextAuth.js Configuration
```typescript
// lib/auth.ts
import { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { prisma } from "@/lib/prisma"
import bcrypt from "bcryptjs"

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null
        }

        const user = await prisma.user.findUnique({
          where: { email: credentials.email }
        })

        if (!user) {
          return null
        }

        const isPasswordValid = await bcrypt.compare(
          credentials.password,
          user.password
        )

        if (!isPasswordValid) {
          return null
        }

        return {
          id: user.id.toString(),
          email: user.email,
          name: user.name,
          role: user.role,
        }
      }
    })
  ],
  session: {
    strategy: "jwt"
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role
      }
      return token
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.sub
        session.user.role = token.role
      }
      return session
    }
  },
  pages: {
    signIn: "/admin/login",
  }
}
```

### 3. Admin Dashboard

#### Dashboard Layout
```typescript
// app/admin/layout.tsx
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"
import { redirect } from "next/navigation"
import AdminSidebar from "@/components/admin/sidebar"
import AdminHeader from "@/components/admin/header"

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect("/admin/login")
  }

  return (
    <div className="flex h-screen bg-gray-100">
      <AdminSidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <AdminHeader />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          {children}
        </main>
      </div>
    </div>
  )
}
```

#### Blog Management Interface
```typescript
// app/admin/blog/page.tsx
import { prisma } from "@/lib/prisma"
import BlogPostsList from "@/components/admin/blog-posts-list"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default async function BlogPage() {
  const posts = await prisma.blogPost.findMany({
    include: {
      author: {
        select: {
          name: true,
          email: true
        }
      }
    },
    orderBy: {
      createdAt: 'desc'
    }
  })

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Blog Posts</h1>
        <Button asChild>
          <Link href="/admin/blog/new">Create New Post</Link>
        </Button>
      </div>
      <BlogPostsList posts={posts} />
    </div>
  )
}
```

### 4. Email Automation System

#### Email Service Setup
```typescript
// lib/email.ts
import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransporter({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

export interface EmailTemplate {
  to: string
  subject: string
  html: string
  text?: string
}

export async function sendEmail(template: EmailTemplate) {
  try {
    const info = await transporter.sendMail({
      from: process.env.FROM_EMAIL,
      ...template,
    })
    
    console.log('Email sent:', info.messageId)
    return { success: true, messageId: info.messageId }
  } catch (error) {
    console.error('Email error:', error)
    return { success: false, error }
  }
}

// Email templates
export const emailTemplates = {
  applicationReceived: (applicantName: string, jobTitle: string, applicationId: string) => ({
    subject: `Application Received - ${jobTitle} at M'Cube`,
    html: `
      <h2>Thank you for your application!</h2>
      <p>Dear ${applicantName},</p>
      <p>We have received your application for the <strong>${jobTitle}</strong> position at M'Cube.</p>
      <p><strong>Application ID:</strong> ${applicationId}</p>
      <p>We will review your application and get back to you within 5-7 business days.</p>
      <p>Best regards,<br>M'Cube HR Team</p>
    `,
  }),
  
  applicationShortlisted: (applicantName: string, jobTitle: string) => ({
    subject: `Congratulations! You've Been Shortlisted - ${jobTitle} at M'Cube`,
    html: `
      <h2>Congratulations!</h2>
      <p>Dear ${applicantName},</p>
      <p>We're pleased to inform you that you've been shortlisted for the <strong>${jobTitle}</strong> position.</p>
      <p>Our HR team will contact you soon to schedule an interview.</p>
      <p>Best regards,<br>M'Cube HR Team</p>
    `,
  }),
}
```

#### Automated Email Triggers
```typescript
// lib/email-automation.ts
import { sendEmail, emailTemplates } from './email'
import { prisma } from './prisma'

export async function triggerApplicationEmails(applicationId: number) {
  const application = await prisma.jobApplication.findUnique({
    where: { id: applicationId },
    include: {
      jobPosting: true
    }
  })

  if (!application) return

  // Send confirmation email to applicant
  await sendEmail({
    to: application.applicantEmail,
    ...emailTemplates.applicationReceived(
      application.applicantName,
      application.jobPosting.title,
      application.id.toString()
    )
  })

  // Send notification to HR
  await sendEmail({
    to: process.env.HR_EMAIL!,
    subject: `New Application - ${application.jobPosting.title}`,
    html: `
      <h2>New Job Application</h2>
      <p><strong>Position:</strong> ${application.jobPosting.title}</p>
      <p><strong>Applicant:</strong> ${application.applicantName}</p>
      <p><strong>Email:</strong> ${application.applicantEmail}</p>
      <p><a href="${process.env.ADMIN_URL}/applications/${application.id}">View Application</a></p>
    `
  })
}

export async function updateApplicationStatus(applicationId: number, status: string) {
  const application = await prisma.jobApplication.update({
    where: { id: applicationId },
    data: { status },
    include: { jobPosting: true }
  })

  // Send email based on status change
  if (status === 'shortlisted') {
    await sendEmail({
      to: application.applicantEmail,
      ...emailTemplates.applicationShortlisted(
        application.applicantName,
        application.jobPosting.title
      )
    })
  }
}
```

## Phase 3: Advanced Features

### 1. File Upload System

#### File Storage Configuration
```typescript
// lib/file-upload.ts
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3"
import { getSignedUrl } from "@aws-sdk/s3-request-presigner"

const s3Client = new S3Client({
  region: process.env.AWS_REGION!,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
})

export async function generateUploadUrl(fileName: string, fileType: string) {
  const key = `uploads/${Date.now()}-${fileName}`
  
  const command = new PutObjectCommand({
    Bucket: process.env.S3_BUCKET_NAME!,
    Key: key,
    ContentType: fileType,
  })

  const uploadUrl = await getSignedUrl(s3Client, command, { expiresIn: 3600 })
  
  return {
    uploadUrl,
    key,
    fileUrl: `https://${process.env.S3_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${key}`
  }
}
```

### 2. Search and Filtering

#### Search API
```typescript
// app/api/search/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const query = searchParams.get('q')
  const type = searchParams.get('type') || 'all'

  if (!query) {
    return NextResponse.json({ results: [] })
  }

  const results = []

  if (type === 'all' || type === 'blog') {
    const blogPosts = await prisma.blogPost.findMany({
      where: {
        OR: [
          { title: { contains: query, mode: 'insensitive' } },
          { content: { contains: query, mode: 'insensitive' } },
          { excerpt: { contains: query, mode: 'insensitive' } },
        ],
        status: 'PUBLISHED'
      },
      select: {
        id: true,
        title: true,
        slug: true,
        excerpt: true,
        publishedAt: true,
      },
      take: 10
    })

    results.push(...blogPosts.map(post => ({
      ...post,
      type: 'blog',
      url: `/news/${post.slug}`
    })))
  }

  if (type === 'all' || type === 'jobs') {
    const jobs = await prisma.jobPosting.findMany({
      where: {
        OR: [
          { title: { contains: query, mode: 'insensitive' } },
          { description: { contains: query, mode: 'insensitive' } },
          { department: { contains: query, mode: 'insensitive' } },
        ],
        status: 'active'
      },
      select: {
        id: true,
        title: true,
        department: true,
        location: true,
        company: true,
      },
      take: 10
    })

    results.push(...jobs.map(job => ({
      ...job,
      type: 'job',
      url: `/careers/${job.id}`
    })))
  }

  return NextResponse.json({ results })
}
```

### 3. Analytics Integration

#### Analytics Setup
```typescript
// lib/analytics.ts
import { GoogleAnalytics } from '@next/third-parties/google'

export function trackEvent(eventName: string, parameters?: Record<string, any>) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters)
  }
}

export function trackJobApplication(jobTitle: string, company: string) {
  trackEvent('job_application_submitted', {
    job_title: jobTitle,
    company: company,
  })
}

export function trackNewsletterSignup(source: string) {
  trackEvent('newsletter_signup', {
    source: source,
  })
}
```

## Implementation Timeline

### Month 1: Database and Authentication
- Set up PostgreSQL database
- Implement Prisma schema
- Configure NextAuth.js
- Create admin authentication system

### Month 2: CMS Backend
- Build admin dashboard
- Implement blog post management
- Create job posting system
- Set up file upload functionality

### Month 3: Email and Applications
- Configure email service
- Implement automated email workflows
- Build job application system
- Create application tracking interface

### Month 4: Advanced Features
- Add search functionality
- Implement analytics tracking
- Create reporting dashboard
- Performance optimization

## Environment Variables Required

```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/mcube_website"

# Authentication
NEXTAUTH_SECRET="your-secret-key"
NEXTAUTH_URL="http://localhost:3000"

# Email
SMTP_HOST="smtp.gmail.com"
SMTP_PORT="587"
SMTP_USER="your-email@gmail.com"
SMTP_PASS="your-app-password"
FROM_EMAIL="noreply@mcube.com"
HR_EMAIL="hr@mcube.com"

# File Storage
AWS_REGION="us-east-1"
AWS_ACCESS_KEY_ID="your-access-key"
AWS_SECRET_ACCESS_KEY="your-secret-key"
S3_BUCKET_NAME="mcube-uploads"

# Analytics
NEXT_PUBLIC_GA_ID="G-XXXXXXXXXX"

# Admin
ADMIN_URL="https://mcube.com/admin"
```

## Testing Strategy

### Unit Tests
```typescript
// __tests__/email.test.ts
import { sendEmail } from '@/lib/email'

describe('Email Service', () => {
  it('should send email successfully', async () => {
    const result = await sendEmail({
      to: 'test@example.com',
      subject: 'Test Email',
      html: '<p>Test content</p>'
    })
    
    expect(result.success).toBe(true)
  })
})
```

### Integration Tests
```typescript
// __tests__/api/applications.test.ts
import { POST } from '@/app/api/applications/route'

describe('/api/applications', () => {
  it('should create job application', async () => {
    const request = new Request('http://localhost:3000/api/applications', {
      method: 'POST',
      body: JSON.stringify({
        jobPostingId: 1,
        applicantName: 'John Doe',
        applicantEmail: 'john@example.com',
        // ... other fields
      })
    })
    
    const response = await POST(request)
    expect(response.status).toBe(201)
  })
})
```

## Security Considerations

### Data Protection
- Encrypt sensitive data at rest
- Use HTTPS for all communications
- Implement rate limiting on API endpoints
- Validate and sanitize all user inputs

### Access Control
- Role-based permissions system
- Session management with secure cookies
- API authentication with JWT tokens
- File upload restrictions and virus scanning

### Compliance
- GDPR compliance for EU users
- Data retention policies
- Right to deletion implementation
- Privacy policy updates

## Conclusion

This implementation guide provides a comprehensive roadmap for adding CMS and backend functionality to the M'Cube website. The modular approach ensures that features can be implemented incrementally while maintaining the existing public-facing website functionality.

Each phase builds upon the previous one, allowing for iterative development and testing. The documented structure ensures that future developers can easily understand and extend the system.
