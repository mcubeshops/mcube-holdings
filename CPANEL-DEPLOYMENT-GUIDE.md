# 🚀 cPanel Deployment Guide - M'Cube Website (mcubeholdings.com)

**Date**: October 31, 2025  
**Domain**: mcubeholdings.com  
**Platform**: cPanel Hosting  
**Status**: Ready for Deployment

---

## 📋 **Pre-Deployment Checklist**

Before starting, ensure you have:
- [ ] cPanel access credentials
- [ ] FTP/SFTP credentials
- [ ] Domain mcubeholdings.com registered
- [ ] Domain pointing to your cPanel server
- [ ] Node.js support enabled on hosting (check with provider)
- [ ] MongoDB access (local or Atlas)
- [ ] SSL certificate (usually auto-provided by cPanel)

---

## ⚠️ **Important: cPanel Limitations**

**Standard cPanel hosting typically does NOT support:**
- ❌ Node.js applications directly
- ❌ Express.js backend servers
- ❌ Custom ports (3000, 5000, etc.)

**Recommended Solutions:**
1. **Option A**: Use a Node.js-compatible hosting (Recommended)
   - Railway, Heroku, DigitalOcean, Render, Linode
2. **Option B**: Use cPanel for static frontend only + separate backend hosting
3. **Option C**: Upgrade to VPS/Dedicated server with Node.js support

---

## 🔄 **Option A: Recommended - Separate Frontend & Backend Hosting**

### **Frontend Deployment (Static Build)**

#### **Step 1: Build the Next.js Frontend**

```bash
cd frontend
npm install
npm run build
```

This creates an optimized static build in `frontend/.next/`

#### **Step 2: Export Static Site (if needed)**

For maximum cPanel compatibility, create a static export:

```bash
# Update frontend/next.config.ts to include:
# output: 'export'
```

Then rebuild:
```bash
npm run build
```

#### **Step 3: Upload to cPanel via FTP**

**Using FileZilla or cPanel File Manager:**

1. Connect to your cPanel FTP:
   - **Host**: mcubeholdings.com (or your cPanel IP)
   - **Username**: Your cPanel FTP username
   - **Password**: Your cPanel FTP password
   - **Port**: 21 (or 22 for SFTP)

2. Navigate to: `public_html/` folder

3. Upload the build files:
   ```
   frontend/.next/static/    → public_html/
   frontend/public/          → public_html/
   frontend/package.json     → public_html/
   ```

#### **Step 4: Configure cPanel for Next.js**

If your cPanel supports Node.js:

1. Go to **cPanel → Setup Node.js App**
2. Create new application:
   - **Node.js version**: 18+ (select latest)
   - **Application root**: public_html
   - **Application URL**: mcubeholdings.com
   - **Application startup file**: server.js or next.js

3. Click **Create**

---

### **Backend Deployment (Separate Server)**

#### **Option A1: Deploy Backend to Railway (Recommended)**

**Step 1: Create Railway Account**
- Go to https://railway.app
- Sign up with GitHub
- Create new project

**Step 2: Connect GitHub Repository**
```bash
# In Railway dashboard:
1. Click "New Project"
2. Select "Deploy from GitHub"
3. Connect your mcube-holdings repository
4. Select the backend folder
```

**Step 3: Configure Environment Variables**

In Railway dashboard, add:
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/mcube_website
FRONTEND_URL=https://mcubeholdings.com
NODE_ENV=production
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
```

**Step 4: Deploy**
- Railway auto-deploys on git push
- Get your backend URL (e.g., `https://mcube-backend.railway.app`)

**Step 5: Update Frontend API Calls**

In `frontend/.env.production`:
```
NEXT_PUBLIC_API_URL=https://mcube-backend.railway.app
```

---

#### **Option A2: Deploy Backend to Render**

**Step 1: Create Render Account**
- Go to https://render.com
- Sign up with GitHub

**Step 2: Create New Web Service**
```
1. Dashboard → New → Web Service
2. Connect GitHub repository
3. Select backend folder
4. Runtime: Node
5. Build command: npm install
6. Start command: npm run dev
```

**Step 3: Add Environment Variables**
```
MONGODB_URI=mongodb+srv://...
FRONTEND_URL=https://mcubeholdings.com
NODE_ENV=production
```

**Step 4: Deploy & Get URL**
- Render provides: `https://mcube-backend.onrender.com`

---

## 🗄️ **Database Setup (MongoDB)**

### **Option 1: MongoDB Atlas (Cloud - Recommended)**

**Step 1: Create MongoDB Atlas Account**
- Go to https://www.mongodb.com/cloud/atlas
- Sign up (free tier available)

**Step 2: Create Cluster**
```
1. Create new project
2. Create new cluster (free M0 tier)
3. Choose region closest to your users
4. Create database user
5. Get connection string
```

**Step 3: Whitelist IP Addresses**
```
1. Go to Network Access
2. Add IP addresses:
   - Your cPanel server IP
   - Your backend server IP
   - 0.0.0.0/0 (allow all - less secure)
```

**Step 4: Get Connection String**
```
mongodb+srv://username:password@cluster.mongodb.net/mcube_website
```

### **Option 2: Local MongoDB on cPanel**

If your cPanel supports MongoDB:
```bash
# SSH into cPanel
ssh user@mcubeholdings.com

# Install MongoDB (if not already installed)
# Contact your hosting provider for installation

# Start MongoDB
mongod --dbpath /home/username/mongodb/data

# Connection string:
mongodb://localhost:27017/mcube_website
```

---

## 🔐 **SSL Certificate Setup**

### **cPanel AutoSSL (Automatic)**

1. Go to **cPanel → AutoSSL**
2. Click **Check for new certificates**
3. Wait for automatic installation
4. Verify: https://mcubeholdings.com (should show green lock)

### **Manual SSL Installation**

If AutoSSL doesn't work:
1. Go to **cPanel → SSL/TLS**
2. Generate CSR (Certificate Signing Request)
3. Use free provider (Let's Encrypt) or purchase certificate
4. Install in cPanel

---

## 📝 **Step-by-Step Deployment Process**

### **Complete Deployment Workflow**

```
1. Prepare Frontend
   ├─ npm run build
   ├─ Test locally
   └─ Create .env.production

2. Setup Backend (Railway/Render)
   ├─ Connect GitHub
   ├─ Add environment variables
   ├─ Deploy
   └─ Get backend URL

3. Setup Database (MongoDB Atlas)
   ├─ Create cluster
   ├─ Create user
   ├─ Whitelist IPs
   └─ Get connection string

4. Deploy Frontend to cPanel
   ├─ Build Next.js
   ├─ Upload via FTP
   ├─ Configure domain
   └─ Test

5. Connect Everything
   ├─ Update API URLs
   ├─ Test API calls
   ├─ Verify SSL
   └─ Go live!
```

---

## 🔧 **Configuration Files**

### **frontend/.env.production**

```env
NEXT_PUBLIC_API_URL=https://mcube-backend.railway.app
NEXT_PUBLIC_SITE_URL=https://mcubeholdings.com
NODE_ENV=production
```

### **backend/.env**

```env
PORT=5000
NODE_ENV=production
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/mcube_website
FRONTEND_URL=https://mcubeholdings.com
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
```

---

## 🚀 **Deployment Commands**

### **Frontend Build**
```bash
cd frontend
npm install
npm run build
```

### **Backend Deployment (Railway)**
```bash
# Push to GitHub (auto-deploys)
git add .
git commit -m "Deploy to production"
git push origin main
```

### **Verify Deployment**
```bash
# Test frontend
curl https://mcubeholdings.com

# Test backend
curl https://mcube-backend.railway.app/health

# Test API
curl https://mcube-backend.railway.app/api/contact
```

---

## 🔗 **Domain Configuration**

### **DNS Records Setup**

In your domain registrar (GoDaddy, Namecheap, etc.):

```
Type    Name              Value
A       mcubeholdings.com [Your cPanel Server IP]
CNAME   www               mcubeholdings.com
MX      @                 mail.mcubeholdings.com
TXT     @                 [SPF record from cPanel]
```

### **cPanel Domain Setup**

1. Go to **cPanel → Addon Domains**
2. Add domain: `mcubeholdings.com`
3. Document root: `public_html`
4. Create

---

## ✅ **Post-Deployment Checklist**

- [ ] Frontend loads at https://mcubeholdings.com
- [ ] SSL certificate shows green lock
- [ ] All pages are accessible
- [ ] Contact form works
- [ ] API calls reach backend
- [ ] Database connections work
- [ ] Email notifications send
- [ ] Mobile responsive works
- [ ] Performance is acceptable
- [ ] No console errors

---

## 🐛 **Troubleshooting**

### **Frontend Not Loading**

```bash
# Check file permissions
chmod 755 public_html
chmod 644 public_html/*

# Check .htaccess for Next.js routing
# Add to public_html/.htaccess:
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

### **API Calls Failing**

```bash
# Check CORS settings in backend
# Ensure FRONTEND_URL is correct
# Verify backend is running
curl https://mcube-backend.railway.app/health
```

### **Database Connection Issues**

```bash
# Test MongoDB connection
mongosh "mongodb+srv://username:password@cluster.mongodb.net/mcube_website"

# Check whitelist in MongoDB Atlas
# Verify connection string format
```

### **SSL Certificate Issues**

```bash
# Force HTTPS redirect in cPanel
# Go to cPanel → Domains
# Enable "Force HTTPS Redirect"
```

---

## 📊 **Recommended Architecture**

```
┌─────────────────────────────────────────────────────────┐
│                    mcubeholdings.com                     │
│                    (cPanel Hosting)                      │
│                   Frontend (Static)                      │
│              Next.js Build Output (.next/)               │
└────────────────────┬────────────────────────────────────┘
                     │
                     │ API Calls
                     ▼
┌─────────────────────────────────────────────────────────┐
│              Backend (Railway/Render)                    │
│            Express.js + TypeScript                       │
│         mcube-backend.railway.app:443                    │
└────────────────────┬────────────────────────────────────┘
                     │
                     │ Database Queries
                     ▼
┌─────────────────────────────────────────────────────────┐
│           MongoDB Atlas (Cloud Database)                 │
│         cluster.mongodb.net:27017                        │
│              mcube_website database                      │
└─────────────────────────────────────────────────────────┘
```

---

## 💡 **Performance Optimization**

### **Frontend Optimization**
```bash
# Enable compression
# Add to frontend/next.config.ts:
compress: true

# Enable image optimization
# Already configured in Next.js
```

### **Backend Optimization**
```bash
# Enable compression
# Already in backend/src/server.ts:
app.use(compression());

# Enable caching
# Add cache headers for static assets
```

---

## 📞 **Support Resources**

### **cPanel Help**
- cPanel Documentation: https://documentation.cpanel.net
- cPanel Support: Contact your hosting provider

### **Deployment Platforms**
- Railway: https://railway.app/docs
- Render: https://render.com/docs
- MongoDB Atlas: https://docs.atlas.mongodb.com

### **Domain Management**
- GoDaddy: https://www.godaddy.com/help
- Namecheap: https://www.namecheap.com/support/

---

## 🎯 **Next Steps**

1. **Choose Backend Hosting**: Railway (recommended) or Render
2. **Setup MongoDB Atlas**: Create free cluster
3. **Deploy Backend**: Connect GitHub repository
4. **Build Frontend**: Run `npm run build`
5. **Upload to cPanel**: Via FTP
6. **Configure Domain**: Point DNS to cPanel
7. **Setup SSL**: Enable AutoSSL
8. **Test Everything**: Verify all functionality
9. **Go Live**: Monitor and maintain

---

## ✨ **Summary**

Your M'Cube website will be deployed as:

| Component | Location | URL |
|-----------|----------|-----|
| **Frontend** | cPanel | https://mcubeholdings.com |
| **Backend** | Railway | https://mcube-backend.railway.app |
| **Database** | MongoDB Atlas | Cloud hosted |
| **SSL** | cPanel AutoSSL | Automatic |

**Total Setup Time**: 30-60 minutes  
**Cost**: $0-50/month (depending on traffic)  
**Maintenance**: Minimal (auto-scaling, auto-backups)

---

**Ready to deploy? Follow the steps above and your website will be live! 🚀**

**Questions? Contact your hosting provider or deployment platform support.**
