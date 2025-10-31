# M'Cube Website - Full Stack Application

A modern, professional corporate website for M'Cube, built with Next.js 14, TypeScript, and Express.js backend.

## 🏗️ Project Structure

```
M'Cube Website/
├── frontend/                 # Next.js 14 Frontend Application
│   ├── src/
│   │   ├── app/             # App Router pages
│   │   ├── components/      # React components
│   │   └── lib/            # Utilities
│   ├── public/             # Static assets & company logos
│   └── package.json
├── backend/                 # Express.js Backend API
│   ├── src/
│   │   ├── routes/         # API routes
│   │   ├── middleware/     # Express middleware
│   │   ├── models/         # Database models
│   │   └── controllers/    # Route controllers
│   └── package.json
├── docs/                   # Documentation
└── package.json           # Root monorepo configuration
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn
- MongoDB (for backend features)

### Installation

1. **Clone and install dependencies:**
```bash
cd "/Users/kingsley/Desktop/Mcube General Website"
npm run install:all
```

2. **Start development servers:**
```bash
# Start both frontend and backend
npm run dev

# Or start individually
npm run dev:frontend  # Frontend only (http://localhost:3000)
npm run dev:backend   # Backend only (http://localhost:5000)
```

3. **Open your browser:**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000

## 🎨 Features Implemented

### ✅ Frontend (Production Ready)
- **Modern Design**: Professional corporate website with M'Cube branding
- **Responsive**: Mobile-first design working on all devices
- **Performance**: Optimized images, code splitting, fast loading
- **SEO**: Complete meta tags, Open Graph, Twitter Cards
- **Accessibility**: WCAG 2.1 AA compliant design patterns
- **Professional Images**: High-quality stock photos via CDN
- **Company Logos**: Actual M'Cube subsidiary logos integrated

### 🏠 Pages Completed
- **Home**: Hero section, companies showcase, stats, news, careers, newsletter
- **About Us**: Company story, mission, vision, values
- **Our Companies**: Detailed portfolio with M'Cube Collections, Plus, Investment, Global
- **Contact**: Interactive form with company information
- **Careers**: Benefits showcase (ready for CMS integration)
- **News & Insights**: Preview structure (ready for CMS integration)
- **Events**: Event types and preview (ready for CMS integration)

### 🏢 Company Information Updated
- **M'Cube Collections**: E-commerce & Retail platform
- **M'Cube Plus**: Professional services and consulting
- **M'Cube Investment**: Property rental and real estate investment
- **M'Cube Global**: Upcoming remittance & fintech platform

### 🎯 Backend (Framework Ready)
- **Express.js API**: RESTful API structure
- **TypeScript**: Full type safety
- **Security**: Helmet, CORS, rate limiting
- **Email**: Contact form with nodemailer
- **Database**: MongoDB with Mongoose (ready for data)
- **Authentication**: JWT framework (ready for implementation)
- **File Upload**: Multer integration (ready for implementation)

## 🛠️ Technology Stack

### Frontend
- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: TailwindCSS v4 with shadcn/ui components
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Images**: Next.js Image optimization with CDN support

### Backend
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT (ready for implementation)
- **Email**: Nodemailer
- **Security**: Helmet, CORS, rate limiting
- **Validation**: Joi and express-validator

## 📱 Brand Integration

### Logo Implementation
- ✅ M'Cube main logo integrated as favicon and header
- ✅ M'Cube Collections logo
- ✅ M'Cube Plus logo  
- ✅ M'Cube Investment logo
- 🔄 M'Cube Global logo (coming soon)

### Color Scheme
- **Primary**: Deep Purple (#4A1A5C)
- **Secondary**: Magenta (#E91E63)
- **Gradient**: Purple to Magenta (matching logo)
- **Supporting**: Gold (#B8860B)

### Professional Media
- ✅ High-quality business photography via Unsplash CDN
- ✅ Professional stock images for each company
- ✅ Optimized loading with fallbacks
- ✅ Brand-consistent overlays and treatments

## 🚀 Deployment

### Frontend Deployment (Vercel - Recommended)
```bash
cd frontend
npm run build
vercel --prod
```

### Backend Deployment (Railway/Heroku)
```bash
cd backend
npm run build
# Deploy to your preferred platform
```

### Environment Variables

**Frontend (.env.local):**
```env
NEXT_PUBLIC_API_URL=http://localhost:5000
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

**Backend (.env):**
```env
NODE_ENV=development
PORT=5000
FRONTEND_URL=http://localhost:3000
MONGODB_URI=mongodb://localhost:27017/mcube_website
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
FROM_EMAIL=noreply@mcube.com
ADMIN_EMAIL=admin@mcube.com
JWT_SECRET=your-super-secret-jwt-key
```

## 📋 Available Scripts

### Root Level
```bash
npm run dev              # Start both frontend and backend
npm run build            # Build both applications
npm run start            # Start both applications in production
npm run install:all      # Install all dependencies
npm run clean            # Clean all node_modules and build files
npm run lint             # Lint both applications
npm run test             # Run tests for both applications
```

### Frontend
```bash
npm run dev              # Development server
npm run build            # Production build
npm run start            # Production server
npm run lint             # ESLint
npm run type-check       # TypeScript check
```

### Backend
```bash
npm run dev              # Development server with nodemon
npm run build            # TypeScript compilation
npm run start            # Production server
npm run lint             # ESLint
npm run test             # Jest tests
```

## 🔧 Development

### Adding New Features
1. **Frontend components**: Add to `frontend/src/components/`
2. **Backend routes**: Add to `backend/src/routes/`
3. **Database models**: Add to `backend/src/models/`
4. **Middleware**: Add to `backend/src/middleware/`

### Code Quality
- **TypeScript**: Full type safety across the stack
- **ESLint**: Consistent code formatting
- **Prettier**: Code formatting (configured)
- **Husky**: Git hooks for quality checks (ready to setup)

## 🎯 Future Implementation (Ready)

### Phase 2: CMS Backend
- **Admin Dashboard**: User authentication and content management
- **Blog System**: Full blog with categories, tags, and SEO
- **Job Portal**: Job posting, application tracking, and management
- **Event Management**: Event creation, registration, and tracking
- **Newsletter**: Email campaigns and subscriber management

### Phase 3: Advanced Features
- **File Upload**: Resume uploads, document management
- **Search**: Full-text search across content
- **Analytics**: Detailed visitor and conversion tracking
- **Multi-language**: Internationalization support
- **API Integration**: Third-party service integrations

## 📞 Support

### Development Team
- **Frontend**: Next.js, React, TypeScript specialists
- **Backend**: Node.js, Express, MongoDB specialists
- **DevOps**: Deployment and infrastructure specialists

### Documentation
- **Setup Guide**: `docs/setup-guide.md`
- **Deployment Guide**: `docs/deployment-guide.md`
- **Future Features**: `docs/future-features.md`
- **API Documentation**: Available when backend is fully implemented

## 🎉 Status

### ✅ Completed (Production Ready)
- Modern, professional corporate website
- Full responsive design and mobile optimization
- SEO optimization with complete meta tags
- Professional branding with actual company logos
- High-quality professional photography
- Contact form functionality (ready for backend)
- Newsletter signup (ready for backend)
- All public-facing pages implemented
- Backend API framework ready for future features

### 🔄 Ready for Implementation
- CMS backend for content management
- Job application system
- Blog and news management
- Event management system
- User authentication and admin dashboard
- Email automation workflows

**The M'Cube website is now production-ready and can be deployed immediately while being fully prepared for future CMS integration!**
