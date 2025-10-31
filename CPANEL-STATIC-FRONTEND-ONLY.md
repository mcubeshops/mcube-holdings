# 🌐 cPanel Static Frontend Deployment - mcubeholdings.com

**Approach**: Static Next.js frontend only on cPanel  
**Domain**: mcubeholdings.com  
**Time**: 20-30 minutes  
**Difficulty**: Easy

---

## 📋 Architecture

```
┌─────────────────────────────────┐
│   mcubeholdings.com (cPanel)    │
│   Static Next.js Build Files    │
│   HTML, CSS, JS, Images         │
└────────────┬────────────────────┘
             │
             │ API Calls
             ▼
┌─────────────────────────────────┐
│   Backend (Separate Server)     │
│   Express.js + Node.js          │
│   (Railway, Render, etc.)       │
└─────────────────────────────────┘
```

---

## ✅ Step-by-Step Guide

### **Step 1: Build Static Next.js Frontend**

```bash
cd frontend
npm install
npm run build
```

**Output**: Creates optimized build in `frontend/.next/`

---

### **Step 2: Prepare Files for cPanel**

The files you need to upload:

```
frontend/
├── .next/
│   ├── static/          ← Upload this
│   └── public/          ← Upload this
├── public/              ← Upload this
│   ├── logo.png
│   ├── favicon.ico
│   └── other assets
└── package.json         ← Upload this
```

---

### **Step 3: Connect to cPanel via FTP**

**Using FileZilla:**

1. Download: https://filezilla-project.org
2. Open FileZilla
3. Go to **File → Site Manager**
4. Create new site:
   - **Protocol**: FTP
   - **Host**: mcubeholdings.com (or your cPanel IP)
   - **Username**: Your FTP username
   - **Password**: Your FTP password
   - **Port**: 21
5. Click **Connect**

---

### **Step 4: Upload to cPanel**

1. Navigate to `public_html` folder on server
2. Upload these files from your local `frontend/` folder:

```
Local: frontend/.next/static/
→ Server: public_html/static/

Local: frontend/public/
→ Server: public_html/public/

Local: frontend/package.json
→ Server: public_html/package.json
```

**File Structure on Server:**
```
public_html/
├── static/              (from .next/static/)
├── public/              (logos, images, etc.)
├── package.json
└── index.html           (Next.js creates this)
```

---

### **Step 5: Configure Domain in cPanel**

1. Go to **cPanel → Addon Domains**
2. Add domain:
   - **Domain**: mcubeholdings.com
   - **Document Root**: public_html
3. Click **Add Domain**

---

### **Step 6: Setup SSL Certificate**

1. Go to **cPanel → AutoSSL**
2. Click **Check for new certificates**
3. Wait for installation (usually 5-10 minutes)
4. Verify: Visit https://mcubeholdings.com (green lock = success)

---

### **Step 7: Configure .htaccess for Next.js Routing**

Create file: `public_html/.htaccess`

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  
  # Don't rewrite if it's a real file
  RewriteCond %{REQUEST_FILENAME} !-f
  # Don't rewrite if it's a real directory
  RewriteCond %{REQUEST_FILENAME} !-d
  
  # Rewrite everything else to index.html
  RewriteRule ^(.*)$ index.html [L]
</IfModule>
```

**Upload this file to `public_html/`**

---

### **Step 8: Update Frontend API Configuration**

Create file: `frontend/.env.production`

```env
NEXT_PUBLIC_API_URL=https://your-backend-url.com
NEXT_PUBLIC_SITE_URL=https://mcubeholdings.com
NODE_ENV=production
```

**Example Backend URLs:**
- Railway: `https://mcube-backend.railway.app`
- Render: `https://mcube-backend.onrender.com`
- Heroku: `https://mcube-backend.herokuapp.com`

---

### **Step 9: Rebuild with API URL**

```bash
cd frontend
npm run build
```

Re-upload the new build files to cPanel.

---

## 🔧 File Permissions

In cPanel File Manager, set permissions:

```bash
# Directories: 755
chmod 755 public_html
chmod 755 public_html/static
chmod 755 public_html/public

# Files: 644
chmod 644 public_html/*
chmod 644 public_html/static/*
chmod 644 public_html/public/*
```

---

## ✅ Verification Checklist

- [ ] Files uploaded to `public_html/`
- [ ] Domain configured in cPanel
- [ ] SSL certificate installed
- [ ] `.htaccess` file created
- [ ] Visit https://mcubeholdings.com loads
- [ ] All pages accessible (click around)
- [ ] Images load correctly
- [ ] No 404 errors
- [ ] Green lock shows (HTTPS)

---

## 🧪 Test Your Deployment

### **Test Frontend Loading**
```bash
curl https://mcubeholdings.com
```

### **Test Specific Pages**
- Home: https://mcubeholdings.com/
- About: https://mcubeholdings.com/about
- Companies: https://mcubeholdings.com/companies
- Contact: https://mcubeholdings.com/contact
- News: https://mcubeholdings.com/news
- Careers: https://mcubeholdings.com/careers

### **Test API Calls**
Open browser console and check:
```javascript
// Should show API calls to your backend
fetch('https://your-backend-url.com/api/contact')
```

---

## 🐛 Troubleshooting

### **Pages Show 404**

**Solution**: Check `.htaccess` file
```bash
# Verify .htaccess exists in public_html/
# Check RewriteEngine is On
# Check RewriteBase is /
```

### **Images Not Loading**

**Solution**: Check public folder
```bash
# Verify public_html/public/ exists
# Check file permissions (644)
# Verify image files uploaded
```

### **API Calls Failing**

**Solution**: Check environment variables
```bash
# Verify NEXT_PUBLIC_API_URL in .env.production
# Rebuild: npm run build
# Re-upload files
```

### **SSL Certificate Not Working**

**Solution**: Force HTTPS
```bash
# In cPanel → Domains
# Enable "Force HTTPS Redirect"
```

---

## 📊 What's Deployed

| Component | Location | URL |
|-----------|----------|-----|
| **Frontend** | cPanel | https://mcubeholdings.com |
| **Static Files** | public_html/ | Served directly |
| **SSL** | cPanel AutoSSL | Automatic |
| **API Calls** | To backend | https://your-backend-url.com |

---

## 💡 Important Notes

✅ **What Works:**
- All static pages
- Images and assets
- CSS and JavaScript
- Contact form (sends to backend)
- Newsletter signup (sends to backend)
- All frontend functionality

❌ **What Doesn't Work:**
- Backend API (hosted separately)
- Database (hosted separately)
- Email sending (backend handles)
- Authentication (backend handles)

---

## 🚀 Complete Workflow

```
1. Build Frontend
   npm run build

2. Upload to cPanel
   - .next/static/ → public_html/static/
   - public/ → public_html/public/
   - package.json → public_html/

3. Configure cPanel
   - Add domain
   - Setup SSL
   - Create .htaccess

4. Test
   - Visit https://mcubeholdings.com
   - Check all pages load
   - Verify SSL works

5. Go Live!
   - Your static site is live
   - Backend handles API calls
```

---

## 📝 Quick Reference

### **Build Command**
```bash
cd frontend && npm run build
```

### **Files to Upload**
```
frontend/.next/static/     → public_html/static/
frontend/public/           → public_html/public/
frontend/package.json      → public_html/
```

### **cPanel Settings**
- Domain: mcubeholdings.com
- Document Root: public_html
- SSL: AutoSSL enabled
- .htaccess: Configured

### **Backend Configuration**
- API URL: https://your-backend-url.com
- Environment: .env.production
- Rebuild after changes

---

## ✨ Summary

Your M'Cube website is now deployed as:

**Frontend**: Static files on cPanel (mcubeholdings.com)  
**Backend**: Separate Node.js server (your backend URL)  
**Database**: MongoDB (your database URL)  
**SSL**: Automatic HTTPS with green lock  

**Total Setup Time**: 20-30 minutes  
**Maintenance**: Minimal (just rebuild and re-upload when changes needed)  
**Cost**: Just your cPanel hosting fee  

---

## 🎉 You're Live!

Your M'Cube website is now accessible at:
### **https://mcubeholdings.com**

**Next Steps:**
1. Share the URL with your team
2. Test all functionality
3. Monitor performance
4. Deploy backend separately (if not done)

---

**Questions? Refer to CPANEL-DEPLOYMENT-GUIDE.md for more details.**
