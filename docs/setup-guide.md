# M'Cube Website Development Setup Guide

## Prerequisites
- Node.js 18+ installed
- npm or yarn package manager
- Git for version control
- VS Code (recommended) with extensions:
  - ES7+ React/Redux/React-Native snippets
  - Tailwind CSS IntelliSense
  - TypeScript Importer

## Initial Setup Steps

### 1. Create Next.js Project
```bash
cd "/Users/kingsley/Desktop/Mcube General Website"
npx create-next-app@latest mcube-website --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
```

### 2. Install Additional Dependencies
```bash
cd mcube-website
npm install @radix-ui/react-slot class-variance-authority clsx tailwind-merge lucide-react framer-motion react-hook-form @hookform/resolvers zod
npm install -D @types/node
```

### 3. Setup shadcn/ui
```bash
npx shadcn-ui@latest init
```

### 4. Install Core Components
```bash
npx shadcn-ui@latest add button card input textarea label select
```

## Project Structure After Setup
```
mcube-website/
├── src/
│   ├── app/                    # App Router pages
│   │   ├── globals.css        # Global styles
│   │   ├── layout.tsx         # Root layout
│   │   └── page.tsx           # Home page
│   ├── components/            # Reusable components
│   │   ├── ui/               # shadcn/ui components
│   │   ├── layout/           # Layout components
│   │   └── sections/         # Page sections
│   ├── lib/                  # Utilities and configurations
│   └── assets/               # Static assets
├── public/                   # Public assets
│   ├── logo.png             # M'Cube logo
│   └── favicon.ico          # Generated favicon
├── tailwind.config.js       # Tailwind configuration
├── next.config.js           # Next.js configuration
└── package.json             # Dependencies
```

## Brand Colors Configuration
Add to `tailwind.config.js`:
```javascript
colors: {
  'mcube-purple': '#4A1A5C',
  'mcube-magenta': '#E91E63',
  'mcube-gradient-start': '#6A1B9A',
  'mcube-gradient-end': '#E91E63',
  'mcube-dark': '#2D1B3D',
  'mcube-light': '#8E24AA',
}
```

## Development Commands
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

## Asset Management
- Logo files stored in `/public/` directory
- Favicon generated from logo
- Images optimized using Next.js Image component

## Environment Setup
Create `.env.local` for environment variables:
```
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## Future Implementation Preparation
- Database schema documented in `/docs/database-schema.md`
- API routes structure in `/docs/api-structure.md`
- CMS integration guide in `/docs/cms-integration.md`

## Deployment Preparation
- Vercel deployment configuration
- Environment variables setup
- Domain configuration
- SSL certificate setup

## Development Workflow
1. Create feature branch
2. Develop component/page
3. Test locally
4. Commit changes
5. Deploy to staging
6. Review and merge

## Troubleshooting
Common issues and solutions documented as they arise during development.
