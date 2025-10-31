# M'Cube General Website - Product Requirements Document

**Version:** 1.0 | **Date:** October 28, 2024 | **For:** Development Team & Claude Sonnet 4.5

---

## 1. Executive Summary

### Project Overview
M'Cube is a holding company with multiple subsidiaries. This website serves as the central hub showcasing the M'Cube brand, its portfolio companies, career opportunities, and corporate content.

### Objectives
- Create a professional corporate website representing M'Cube
- Showcase all subsidiary companies with navigation to their websites
- Implement a careers portal with automated application management
- Provide a CMS backend for content management (blogs, news, events)
- Enable seamless stakeholder communication

### Success Metrics
- Page load time < 3 seconds
- Mobile responsiveness > 95%
- Career application completion rate > 60%
- SEO ranking in top 10 for relevant keywords within 6 months

---

## 2. Brand Identity & Design System

### 2.1 Color Palette

#### Primary Colors (from logo analysis)
- **Deep Purple (Primary):** `#4A1A5C` - Main brand color from logo cube
- **Magenta/Pink (Secondary):** `#E91E63` - Gradient accent from logo cube
- **Purple Gradient:** `#6A1B9A` to `#E91E63` - 3D cube gradient effect

#### Supporting Colors
- **Gold/Bronze:** `#B8860B` - For M'Cube Plus references
- **Dark Purple:** `#2D1B3D` - Darker variant for headers/footers
- **Light Purple:** `#8E24AA` - Medium variant for highlights

#### Neutral Colors
- White: `#FFFFFF`
- Light Gray: `#F5F7FA`
- Medium Gray: `#8B95A5`
- Dark Gray: `#2D3748`
- Charcoal: `#1A202C`

**Semantic Colors**
- Success: `#10B981`
- Warning: `#F59E0B`
- Error: `#EF4444`
- Info: `#3B82F6`

### Typography
- **Primary Font:** Inter or Poppins
- **Headings:** Bold (600-700 weight)
- **Body:** Regular (400 weight)

### Design Principles
- Clean, modern, professional aesthetic
- Generous white space
- Card-based layouts
- Smooth animations
- WCAG 2.1 AA compliance
- Mobile-first responsive design

---

## 3. Site Architecture

```
M'Cube Website
├── Home
├── About Us
│   ├── Our Story
│   ├── Mission & Vision
│   ├── Core Values
│   └── Leadership Team
├── Our Companies
│   ├── M'Cube Collections (https://mcubecollections.com/)
│   ├── M'Cube Plus (https://mcubeplus.com/)
│   ├── M'Cube Investment (https://mcubeinvestment.com/)
│   └── M'Cube Global (Coming Soon - Remittance)
├── Careers
│   ├── Why Join Us
│   ├── Open Positions
│   ├── Job Details (Dynamic)
│   └── Application Form
├── News & Insights
│   ├── Blog
│   ├── Press Releases
│   ├── Events
│   └── Industry Insights
├── Contact Us
└── Admin/CMS Backend
    ├── Dashboard
    ├── Content Management (Blog, News, Events)
    ├── Career Management (Jobs, Applications, ATS)
    ├── User Management
    └── Settings
```

---

## 4. Page Requirements

### 4.1 Home Page

**Hero Section**
- Full-width hero with animated background
- Headline: "Building Tomorrow's Leading Businesses"
- Subheadline describing M'Cube
- CTA: "Explore Our Companies" | "View Careers"
- **Visual:** 3D cube animation with purple-to-magenta gradient matching logo design

**Our Companies Section**
- 4-card grid layout
- Each card: Logo, name, description, industry tag, "Learn More" CTA
- Hover effects with purple/magenta gradient matching logo colors

**Stats Section**
- 4 animated metrics: Years in Business, Employees, Portfolio Companies, Countries Served

**Latest News**
- 3-column grid of recent posts
- Featured image, title, excerpt, date, "Read More"

**Careers Highlight**
- Banner promoting opportunities
- "View Open Positions" CTA

**Newsletter Signup**
- Email capture form

**Footer**
- Logo, quick links, social media, copyright, legal links

### 4.2 About Us Page

- Company story timeline
- Mission & Vision statements
- Core Values (4-6 with icons)
- Leadership team profiles (photo, name, title, bio, LinkedIn)
- Company culture section with photos/testimonials

### 4.3 Our Companies Page

**M'Cube Collections**
- Industry: E-commerce/Retail
- Description, key offerings
- Link: https://mcubecollections.com/

**M'Cube Plus**
- Industry: Professional Services
- Gold/bronze branding
- Link: https://mcubeplus.com/

**M'Cube Investment**
- Industry: Financial Services
- Investment focus areas
- Link: https://mcubeinvestment.com/

**M'Cube Global** (Coming Soon)
- Industry: Remittance/FinTech
- "Launching Soon" badge
- Email signup for updates

### 4.4 Careers Page

**Why Join Us**
- Employee value proposition
- Benefits cards: Compensation, Health, Development, Work-life balance, Culture, Growth

**Open Positions**
- Search and filter: keyword, department, location, job type, company
- Job cards: Title, department, location, type badge, company badge, date, description, "Apply Now"
- Empty state with email alert signup

**Company Culture**
- Photos, videos, testimonials

### 4.5 Job Details Page

**Header**
- Job title, department, location, type, company badge, posted date
- Sticky "Apply Now" CTA

**Content**
- Description, Responsibilities, Requirements, Benefits, About Company

**Application Form**
- Personal: Name*, Email*, Phone*, Location*
- Professional: LinkedIn, Portfolio, Current Company, Years Experience
- Documents: Resume* (PDF/DOC, 5MB), Cover Letter, Additional docs
- Questions: "Why join M'Cube?", Custom questions
- Consent: Privacy policy*, Newsletter opt-in
- Submit button with success confirmation

**Related Jobs**
- 3-4 similar recommendations

### 4.6 News & Insights Page

- Filter by: All, Blog, Press Releases, Events, Industry Insights
- 3-column card grid
- Cards: Image, category badge, title, excerpt, author, date, read time
- Pagination or infinite scroll

### 4.7 Blog Post Page

- Featured image, category, title, author info, date, read time, social share
- Rich text content with formatting
- Related articles (3)
- Optional comments section

### 4.8 Events Page

- Upcoming events cards: Image, date/time, title, location, description, "Register" CTA
- Past events archive
- Optional calendar view

### 4.9 Contact Page

- Contact form: Name*, Email*, Phone, Company, Subject dropdown, Message*
- Contact info: Address, phone, email, business hours
- Office locations with map
- Social media links

---

## 5. CMS Backend Requirements

### 5.1 Dashboard
- Metrics: Total posts, applications (by status), active jobs, upcoming events
- Quick actions: Create post, create job, view applications

### 5.2 Content Management

**Blog Posts**
- List view: Title, author, status, date, actions
- Editor: Title, slug, featured image, category, tags, rich text editor, SEO fields, author, status, publish scheduler

**News/Events**
- Similar to blog with additional fields
- Events: Date/time picker, location, event type, registration link

### 5.3 Career Management

**Job Postings**
- List: Title, department, location, company, status, applications count, date
- Editor: Title*, department, location, type, company, salary range, description*, responsibilities*, requirements*, benefits, custom questions, status, deadline

**Applications Management**
- List with filters: Job, status, date range, search
- Detail view: All info, resume viewer, status updates, notes, email button, activity log

**Status Flow**
- New → Reviewed → Shortlisted/Rejected
- Shortlisted → Interview Scheduled/Rejected

### 5.4 Automated Email System

**Email Templates:**

1. **Application Received** (Immediate)
   - Subject: "Application Received - [Job Title] at M'Cube"
   - Content: Thank you, reference number, next steps

2. **Application Under Review** (Status: Reviewed)
   - Subject: "Application Update - [Job Title]"
   - Content: Review status, timeline

3. **Shortlisted** (Status: Shortlisted)
   - Subject: "Congratulations! You've Been Shortlisted"
   - Content: Next steps, interview scheduling

4. **Interview Invitation** (Manual)
   - Subject: "Interview Invitation - [Job Title]"
   - Content: Date, time, location, interviewer, preparation

5. **Rejection** (Status: Rejected)
   - Subject: "Application Update"
   - Content: Polite rejection, future opportunities

6. **Internal Notification** (New application)
   - To: HR team
   - Content: Applicant info, link to CMS

**Email Configuration**
- SMTP settings
- Template editor with preview
- Test functionality
- Delivery logs

### 5.5 User Management

**Roles & Permissions**
- **Super Admin:** Full access
- **Admin:** Content + career management
- **Editor:** Content only
- **HR Manager:** Career only

**User Interface**
- List: Name, email, role, last login, status
- Create/Edit: Name, email, password, role, status

### 5.6 Settings

- General: Site info, logos, contact, social media, analytics
- Email: SMTP config, templates
- SEO: Meta templates, social preview, robots.txt, sitemap
- Career: File limits, allowed types, retention, notifications

---

## 6. Technical Requirements

### 6.1 Technology Stack

**Frontend**
- React.js with Next.js (SSR/SSG)
- TailwindCSS + shadcn/ui
- Lucide React icons
- Framer Motion animations
- React Hook Form + Zod validation

**Backend**
- Node.js with Express.js OR Next.js API routes
- PostgreSQL database
- Prisma ORM
- AWS S3/Cloudinary for file storage
- SendGrid/AWS SES/Resend for email

**CMS**
- Strapi, Sanity, Contentful, OR custom with React Admin

**Authentication**
- NextAuth.js or Clerk
- JWT tokens, RBAC

**Hosting**
- Frontend: Vercel/Netlify
- Backend: Vercel/Railway/AWS
- Database: Supabase/PlanetScale/AWS RDS
- CDN: Cloudinary

### 6.2 Performance
- Page load < 3s (desktop), < 4s (mobile)
- TTI < 5s, FCP < 1.5s
- Lighthouse score > 90
- WebP images, lazy loading, code splitting

### 6.3 Security
- HTTPS with SSL
- Data encryption
- SQL injection prevention
- XSS/CSRF protection
- Rate limiting
- File upload security (type validation, virus scanning, size limits)
- Password hashing (bcrypt)
- Optional 2FA for admins
- GDPR compliance

### 6.4 SEO
- Semantic HTML5
- Proper heading hierarchy
- Meta tags (title, description, OG, Twitter cards)
- JSON-LD structured data
- XML sitemap, robots.txt
- Canonical URLs, 301 redirects
- Mobile-first indexing

### 6.5 Accessibility
- WCAG 2.1 AA compliance
- Keyboard navigation
- Screen reader compatible
- ARIA labels
- 4.5:1 color contrast
- Focus indicators
- Accessible forms

### 6.6 Browser Support
- Chrome, Firefox, Safari, Edge (last 2 versions)
- Responsive: Desktop (1920px, 1440px, 1280px), Tablet (768px, 1024px), Mobile (375px, 414px, 390px)

### 6.7 Analytics
- Google Analytics 4
- Google Search Console
- Error tracking (Sentry/LogRocket)
- Uptime monitoring
- Web Vitals tracking

---

## 7. User Flows

### Job Application Flow
1. User browses careers page → 2. Filters/searches jobs → 3. Clicks job → 4. Reads details → 5. Clicks "Apply Now" → 6. Fills form → 7. Uploads documents → 8. Submits → 9. Sees confirmation → 10. Receives email → 11. HR notified → 12. HR reviews → 13. Status updates → 14. Automated emails sent

### Content Publishing Flow
1. Admin logs in → 2. Creates post → 3. Fills content → 4. Saves draft → 5. Previews → 6. Schedules/publishes → 7. Goes live → 8. Indexed by search engines

---

## 8. Development Phases

**Phase 1: Foundation** (Weeks 1-2)
- Setup, design system, components, database, auth

**Phase 2: Frontend Core** (Weeks 3-4)
- Home, About, Companies, Contact pages

**Phase 3: Careers Module** (Weeks 5-6)
- Careers page, job listing, details, application form

**Phase 4: Content Management** (Weeks 7-8)
- Blog, events, news pages

**Phase 5: CMS Backend** (Weeks 9-11)
- Dashboard, content management, job/application management, users

**Phase 6: Email Automation** (Week 12)
- Templates, SMTP, triggers, testing

**Phase 7: Testing & Optimization** (Weeks 13-14)
- Testing, performance, SEO, accessibility

**Phase 8: Deployment** (Week 15)
- Production deployment, DNS, SSL, analytics, launch

**Phase 9: Post-Launch** (Week 16+)
- Monitoring, feedback, iterations

---

## 9. Testing Requirements

- **Functional:** Forms, uploads, emails, CMS, auth, search
- **Cross-Browser:** Chrome, Firefox, Safari, Edge
- **Responsive:** All screen sizes and orientations
- **Performance:** Load, stress testing
- **Security:** Penetration, vulnerability scanning
- **Accessibility:** Screen readers, keyboard nav, WCAG audit
- **UAT:** Stakeholder and user testing

---

## 10. Content Requirements

### Initial Content Needed
- Company history, mission, vision, values
- Leadership bios and photos
- Subsidiary descriptions and logos
- Employee value proposition and benefits
- Office info and contact details
- Privacy Policy, Terms of Service, Cookie Policy

### Ongoing Content
- Blog posts (2-4/month)
- News/press releases (as needed)
- Job postings (as needed)
- Events (as scheduled)

---

## 11. Maintenance & Support

- Regular security and dependency updates
- Bug fixes and performance monitoring
- Content updates via CMS
- Monthly analytics review
- Quarterly SEO audit
- Annual accessibility audit

---

## 12. Success Criteria

- Website launches on time and within budget
- All functional requirements met
- Performance metrics achieved
- Positive user feedback
- Successful job applications processed
- Content publishing workflow smooth
- Zero critical security vulnerabilities

---

## Appendix

### Inspiration Sites
- Berkshire Hathaway (holding structure)
- SoftBank Group (portfolio showcase)
- Alphabet Inc. (clean design)
- Prosus (engaging presentation)

### Key Stakeholders
- M'Cube Leadership Team
- HR Department
- Marketing Team
- IT/Development Team

### Project Timeline
- **Total Duration:** 15-16 weeks
- **Soft Launch:** Week 15
- **Public Launch:** Week 16

---

**Document prepared for Claude Sonnet 4.5 Co-pilot and development team**
