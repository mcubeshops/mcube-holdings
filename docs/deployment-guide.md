# M'Cube Website Deployment Guide

## Overview
This guide covers the deployment process for the M'Cube corporate website built with Next.js 14, TypeScript, and TailwindCSS.

## Prerequisites
- Node.js 18+ installed
- Git repository setup
- Vercel account (recommended) or alternative hosting platform
- Domain name (optional)

## Deployment Options

### Option 1: Vercel (Recommended)

#### Step 1: Prepare for Deployment
```bash
cd "/Users/kingsley/Desktop/Mcube General Website/mcube-website"
npm run build
npm run start # Test production build locally
```

#### Step 2: Deploy to Vercel
1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel:**
   ```bash
   vercel login
   ```

3. **Deploy:**
   ```bash
   vercel --prod
   ```

4. **Follow the prompts:**
   - Set up and deploy? Yes
   - Which scope? Select your account
   - Link to existing project? No (for first deployment)
   - Project name: mcube-website
   - Directory: ./
   - Override settings? No

#### Step 3: Configure Domain (Optional)
1. Go to Vercel dashboard
2. Select your project
3. Go to Settings > Domains
4. Add your custom domain (e.g., mcube.com)
5. Configure DNS records as instructed

### Option 2: Netlify

#### Step 1: Build Configuration
Create `netlify.toml` in project root:
```toml
[build]
  command = "npm run build"
  publish = ".next"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

#### Step 2: Deploy
1. Connect GitHub repository to Netlify
2. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
3. Deploy

### Option 3: Traditional Hosting

#### Step 1: Build Static Export
Update `next.config.ts`:
```typescript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
```

#### Step 2: Build and Export
```bash
npm run build
```

#### Step 3: Upload
Upload the `out` folder contents to your web server.

## Environment Variables

### Production Environment Variables
Create `.env.production` file:
```
NEXT_PUBLIC_SITE_URL=https://mcube.com
NEXT_PUBLIC_CONTACT_EMAIL=info@mcube.com
NEXT_PUBLIC_ANALYTICS_ID=your-analytics-id
```

### Required Environment Variables
- `NEXT_PUBLIC_SITE_URL`: Your website URL
- `NEXT_PUBLIC_CONTACT_EMAIL`: Contact email for forms
- `NEXT_PUBLIC_ANALYTICS_ID`: Google Analytics ID (optional)

## Performance Optimization

### Image Optimization
- Logo and images are already optimized
- Next.js Image component used throughout
- WebP format recommended for new images

### Caching Strategy
- Static assets cached for 1 year
- HTML pages cached for 1 hour
- API routes cached based on content

### CDN Configuration
- Enable Vercel Edge Network (automatic with Vercel)
- Configure Cloudflare for additional optimization (optional)

## SEO Configuration

### Sitemap Generation
The website automatically generates sitemaps. Ensure these URLs are accessible:
- `/sitemap.xml`
- `/robots.txt`

### Meta Tags
All pages include proper meta tags:
- Title tags
- Meta descriptions
- Open Graph tags
- Twitter Card tags

## Monitoring and Analytics

### Google Analytics Setup
1. Create Google Analytics 4 property
2. Add tracking ID to environment variables
3. Verify tracking is working

### Performance Monitoring
- Use Vercel Analytics (built-in)
- Monitor Core Web Vitals
- Set up error tracking with Sentry (optional)

### Uptime Monitoring
- Configure UptimeRobot or similar service
- Monitor main pages: /, /about, /companies, /contact

## Security Considerations

### HTTPS
- Automatic with Vercel/Netlify
- Ensure all external links use HTTPS
- Configure HSTS headers

### Content Security Policy
Add to `next.config.ts`:
```typescript
const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on'
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload'
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block'
  },
  {
    key: 'X-Frame-Options',
    value: 'DENY'
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  }
]
```

## Post-Deployment Checklist

### Functionality Testing
- [ ] All pages load correctly
- [ ] Navigation works properly
- [ ] Contact form submits (when backend is implemented)
- [ ] Newsletter signup works (when backend is implemented)
- [ ] Mobile responsiveness
- [ ] Cross-browser compatibility

### SEO Testing
- [ ] All meta tags present
- [ ] Sitemap accessible
- [ ] Robots.txt configured
- [ ] Page speed scores > 90
- [ ] Core Web Vitals pass

### Performance Testing
- [ ] Lighthouse scores > 90
- [ ] Images load properly
- [ ] Fonts load correctly
- [ ] No console errors

### Analytics Setup
- [ ] Google Analytics tracking
- [ ] Google Search Console setup
- [ ] Conversion tracking (when forms are active)

## Maintenance

### Regular Updates
- Update dependencies monthly
- Monitor security vulnerabilities
- Update content as needed
- Review performance metrics

### Backup Strategy
- Git repository serves as code backup
- Export content regularly (when CMS is implemented)
- Database backups (when backend is implemented)

## Troubleshooting

### Common Issues

#### Build Failures
```bash
# Clear cache and reinstall
rm -rf .next node_modules package-lock.json
npm install
npm run build
```

#### Image Loading Issues
- Verify image paths are correct
- Check image file sizes (< 5MB recommended)
- Ensure images are in public directory

#### Styling Issues
- Clear browser cache
- Check Tailwind CSS compilation
- Verify custom CSS imports

### Support Contacts
- **Technical Issues:** Development team
- **Domain/DNS Issues:** IT administrator
- **Content Updates:** Marketing team

## Future Enhancements

### Phase 2 Implementation
When implementing the CMS and backend features:

1. **Database Setup:**
   - PostgreSQL database
   - Prisma ORM configuration
   - Environment variables for database connection

2. **Authentication:**
   - Admin authentication system
   - Role-based access control
   - Session management

3. **Email Integration:**
   - SMTP configuration
   - Email templates
   - Automated email workflows

4. **CMS Integration:**
   - Content management interface
   - Job posting system
   - Application tracking system

### Monitoring Enhancements
- Error tracking with Sentry
- Performance monitoring with LogRocket
- User behavior analytics with Hotjar

## Conclusion
The M'Cube website is now ready for production deployment. Follow this guide for a smooth deployment process and ongoing maintenance.

For questions or issues, refer to the development team or create an issue in the project repository.
