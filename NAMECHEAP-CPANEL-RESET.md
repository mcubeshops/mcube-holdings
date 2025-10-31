# 🔐 Reset cPanel Credentials - Namecheap

**Hosting Provider**: Namecheap  
**Domain**: mcubeholdings.com  
**Goal**: Reset FTP/cPanel credentials for FileZilla upload

---

## 📋 Step-by-Step Guide

### **Step 1: Log into Namecheap Account**

1. Go to: https://www.namecheap.com
2. Click **Sign In** (top right)
3. Enter your Namecheap email and password
4. Click **Sign In**

---

### **Step 2: Access Your Hosting Account**

1. In your Namecheap dashboard, look for **"Hosting"** section
2. Click **"Manage All"** or find your hosting account
3. Look for your domain: **mcubeholdings.com**
4. Click **"Manage"** next to your hosting account

---

### **Step 3: Access cPanel**

**Option A: Direct cPanel Access**
1. In the hosting management page, look for **"cPanel Login"** button
2. Click it to open cPanel directly
3. You may be auto-logged in

**Option B: Get cPanel URL**
1. Look for **"cPanel URL"** or **"Access cPanel"**
2. It should look like: `https://mcubeholdings.com:2083` or `https://[IP]:2083`
3. Note this URL

---

### **Step 4: Reset FTP Password in cPanel**

**If you're already in cPanel:**

1. Look for **"FTP Accounts"** or **"FTP"** in cPanel
2. Click on it
3. You should see your FTP account (usually `username@mcubeholdings.com`)
4. Click **"Change Password"** or the account name
5. Enter a new password (make it strong):
   - At least 8 characters
   - Mix of uppercase, lowercase, numbers, symbols
   - Example: `McubeHost2025!`
6. Click **"Change Password"** or **"Update"**

---

### **Step 5: Get Your FTP Credentials**

In the FTP Accounts section, you should see:

- **FTP Username**: Usually `username` or `username@mcubeholdings.com`
- **FTP Host**: `mcubeholdings.com` or your server IP
- **FTP Port**: `21` (standard FTP) or `22` (SFTP)
- **Password**: The one you just set

**Write these down:**
```
FTP Username: ___________________
FTP Password: ___________________
FTP Host: mcubeholdings.com
FTP Port: 21
```

---

### **Step 6: Alternative - Reset via Namecheap Support**

If you can't access cPanel:

1. Go to: https://www.namecheap.com/support/
2. Click **"Contact Support"**
3. Select **"Hosting"** as category
4. Explain: "I need to reset my cPanel/FTP password for mcubeholdings.com"
5. Namecheap support will help you reset it
6. They'll email you new credentials

---

## 🔑 FileZilla Setup with Your Credentials

Once you have your credentials:

1. **Open FileZilla**
2. Go to **File → Site Manager**
3. Click **"New Site"**
4. Enter:
   - **Protocol**: FTP
   - **Host**: mcubeholdings.com
   - **Port**: 21
   - **Logon Type**: Normal
   - **User**: Your FTP username
   - **Password**: Your new FTP password

5. Click **"Connect"**

---

## ✅ Verify Connection

After connecting in FileZilla:

1. You should see folders on the right side
2. Look for **"public_html"** folder
3. Double-click to enter it
4. This is where you'll upload your files

---

## 🚀 Next Steps After Getting Credentials

1. **Connect via FileZilla** with your new credentials
2. **Navigate to public_html** folder
3. **Upload:**
   - `frontend/.next/static/` → `public_html/static/`
   - `frontend/public/` → `public_html/public/`
4. **Create .htaccess** file in `public_html/`
5. **Test** at https://mcubeholdings.com

---

## 🆘 Troubleshooting

### **Can't Find FTP Accounts in cPanel**

1. Look for **"File Manager"** instead
2. Or search for **"FTP"** in cPanel search bar
3. Or contact Namecheap support

### **Connection Refused in FileZilla**

- Check FTP port (usually 21)
- Try SFTP port 22 instead
- Verify username and password are correct
- Wait 5 minutes for password change to take effect

### **"Access Denied" Error**

- Double-check your username (might need full email)
- Verify password is correct
- Try resetting password again

### **Can't Find public_html Folder**

- It should be visible immediately after connecting
- If not, you may be in the wrong directory
- Ask Namecheap support for the correct path

---

## 📞 Namecheap Support

If you get stuck:

- **Live Chat**: https://www.namecheap.com/support/
- **Email**: support@namecheap.com
- **Phone**: Available on support page
- **Ticket**: Create support ticket in your account

**Tell them:**
- Domain: mcubeholdings.com
- Issue: Need to reset FTP/cPanel password
- They'll help within 24 hours

---

## ✨ Summary

1. Log into Namecheap
2. Go to Hosting → Manage
3. Access cPanel
4. Reset FTP password
5. Get your credentials
6. Use in FileZilla
7. Upload files to public_html
8. Done!

**Total Time**: 10-15 minutes

---

**Once you have your credentials, let me know and I'll help you upload your files! 🚀**
