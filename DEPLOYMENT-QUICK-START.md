# ⚡ Quick Start - Deploy M'Cube to mcubeholdings.com

**Time Required**: 30-60 minutes  
**Difficulty**: Intermediate  
**Domain**: mcubeholdings.com

---

## 🎯 Quick Overview

Your website will be deployed in 3 parts:

```
Frontend (cPanel) → Backend (Railway) → Database (MongoDB Atlas)
```

---

## ✅ Pre-Flight Checklist

- [ ] cPanel access credentials ready
- [ ] FTP credentials ready
- [ ] GitHub account with repository pushed
- [ ] Email account for SMTP (Gmail recommended)
- [ ] 30-60 minutes of time

---

## 🚀 Deployment Steps

### **Step 1: Build Frontend (5 minutes)**

```bash
cd frontend
npm install
npm run build
```

**Output**: Creates `frontend/.next/` folder with optimized build

---

### **Step 2: Deploy Backend to Railway (10 minutes)**

1. Go to https://railway.app
2. Sign up with GitHub
3. Click "New Project" → "Deploy from GitHub"
4. Select `mcube-holdings` repository
5. Select `backend` folder
6. Add environment variables:
   ```
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/mcube_website
   FRONTEND_URL=https://mcubeholdings.com
   NODE_ENV=production
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=your-app-password
   ```
7. Click "Deploy"
8. **Copy your backend URL** (e.g., `https://mcube-backend.railway.app`)

---

### **Step 3: Setup MongoDB Atlas (10 minutes)**

1. Go to https://www.mongodb.com/cloud/atlas
2. Sign up (free tier available)
3. Create new project
4. Create new cluster (free M0 tier)
5. Create database user
6. Go to "Network Access" → Add your cPanel server IP
7. **Copy connection string**: `mongodb+srv://username:password@cluster.mongodb.net/mcube_website`

---

### **Step 4: Upload Frontend to cPanel (10 minutes)**

**Option A: Using FTP (FileZilla)**

1. Download FileZilla: https://filezilla-project.org
2. Connect:
   - Host: `mcubeholdings.com` or your cPanel IP
   - Username: Your FTP username
   - Password: Your FTP password
   - Port: 21

3. Navigate to `public_html` folder
4. Upload these files from `frontend/.next/`:
   ```
   frontend/.next/static/    → public_html/
   frontend/public/          → public_html/
   frontend/package.json     → public_html/
   ```

**Option B: Using cPanel File Manager**

1. Go to cPanel → File Manager
2. Navigate to `public_html`
3. Upload files from `frontend/.next/`

---

### **Step 5: Configure Domain in cPanel (5 minutes)**

1. Go to cPanel → Addon Domains
2. Add domain: `mcubeholdings.com`
3. Document root: `public_html`
4. Click "Add Domain"

---

### **Step 6: Setup SSL Certificate (2 minutes)**

1. Go to cPanel → AutoSSL
2. Click "Check for new certificates"
3. Wait for installation
4. Verify: Visit https://mcubeholdings.com (should show green lock)

---

### **Step 7: Update Frontend API URL (2 minutes)**

Create `frontend/.env.production`:

```env
NEXT_PUBLIC_API_URL=https://mcube-backend.railway.app
NEXT_PUBLIC_SITE_URL=https://mcubeholdings.com
NODE_ENV=production
```

Re-upload to cPanel.

---

## 🔗 DNS Configuration

In your domain registrar (GoDaddy, Namecheap, etc.):

| Type | Name | Value |
|------|------|-------|
| A | mcubeholdings.com | [Your cPanel IP] |
| CNAME | www | mcubeholdings.com |

---

## ✨ Verify Deployment

**Test Frontend:**
```bash
curl https://mcubeholdings.com
```

**Test Backend:**
```bash
curl https://mcube-backend.railway.app/health
```

**Test API:**
```bash
curl https://mcube-backend.railway.app/api/contact
```

---

## 🎉 You're Live!

Your website is now deployed at:
- **Frontend**: https://mcubeholdings.com
- **Backend**: https://mcube-backend.railway.app
- **Database**: MongoDB Atlas (cloud)

---

## 📞 Troubleshooting

### Frontend Not Loading
```bash
# Check file permissions
chmod 755 public_html
chmod 644 public_html/*
```

### API Calls Failing
- Verify backend URL in `.env.production`
- Check backend is running: `curl https://mcube-backend.railway.app/health`
- Check CORS settings in backend

### SSL Certificate Issues
- Go to cPanel → Domains
- Enable "Force HTTPS Redirect"

---

## 📚 Full Documentation

For detailed instructions, see: `CPANEL-DEPLOYMENT-GUIDE.md`

---

## 🚨 Important Notes

⚠️ **Standard cPanel does NOT support Node.js directly**
- Frontend: Deployed to cPanel (static files)
- Backend: Deployed to Railway (Node.js server)
- Database: MongoDB Atlas (cloud)

This is the recommended architecture for cPanel hosting.

---

## 💰 Cost Estimate

| Service | Cost | Notes |
|---------|------|-------|
| cPanel Hosting | $5-15/mo | Already have |
| Railway Backend | Free-$5/mo | Free tier available |
| MongoDB Atlas | Free | Free tier (512MB) |
| Domain | $10-15/yr | Already have |
| **Total** | **$15-35/mo** | Very affordable |

---

## ✅ Final Checklist

- [ ] Frontend built successfully
- [ ] Backend deployed to Railway
- [ ] MongoDB Atlas cluster created
- [ ] Files uploaded to cPanel
- [ ] Domain configured
- [ ] SSL certificate installed
- [ ] Frontend loads at https://mcubeholdings.com
- [ ] API calls work
- [ ] Contact form sends emails
- [ ] All pages accessible

---

**🎊 Congratulations! Your M'Cube website is now live on mcubeholdings.com!**

For questions, refer to the full deployment guide or contact your hosting provider.
