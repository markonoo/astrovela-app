# Admin Access Guide

Complete guide to accessing and managing the AstroBook admin panel with mandatory 2FA security.

---

## 🔐 Security Overview

The admin panel uses **enterprise-grade security** with:
- ✅ Password authentication (bcrypt hashed)
- ✅ **Mandatory 2FA (TOTP)** in production
- ✅ Recovery codes for backup access
- ✅ Rate limiting (5 attempts per 15 minutes)
- ✅ CSRF protection
- ✅ Secure JWT sessions (httpOnly cookies)
- ✅ Complete audit logging

---

## 📍 Admin URLs

### Production
```
https://your-domain.com/admin/login          - Login page
https://your-domain.com/admin/preview        - Dashboard
https://your-domain.com/admin/2fa-setup      - Configure 2FA
https://your-domain.com/admin/recovery-codes - Manage recovery codes
https://your-domain.com/admin/audit          - View audit logs
```

### Development
```
http://localhost:3000/admin/login
http://localhost:3000/admin/preview
http://localhost:3000/admin/2fa-setup
http://localhost:3000/admin/recovery-codes
http://localhost:3000/admin/audit
```

---

## 🚀 Initial Setup (First Time)

### Step 1: Set Admin Password

**Option A: Using Setup Script (Recommended)**
```bash
cd /path/to/AstroBook
npm run setup-admin-password
# Enter your desired password when prompted
# Copy the generated hash
```

**Option B: Manual Hash Generation**
```bash
node -e "const bcrypt = require('bcrypt'); bcrypt.hash('YourPassword123', 12, (e,h) => console.log(h))"
```

Add to `.env.local` or deployment environment:
```env
ADMIN_PASSWORD_HASH=your_generated_hash_here
```

### Step 2: Set Required Secrets

Generate random secrets:
```bash
# JWT Secret (32+ characters)
openssl rand -base64 32

# CSRF Secret (32+ characters)
openssl rand -base64 32
```

Add to `.env.local`:
```env
ADMIN_JWT_SECRET=your_jwt_secret_here
CSRF_SECRET=your_csrf_secret_here
```

### Step 3: Setup 2FA (MANDATORY in Production)

1. **Start your application:**
   ```bash
   npm run dev
   ```

2. **Visit 2FA setup page:**
   ```
   http://localhost:3000/admin/2fa-setup
   ```

3. **Authenticate with password:**
   - Enter your admin password (the one you used to generate the hash)

4. **Scan QR code:**
   - Open Google Authenticator, Authy, or similar app
   - Scan the displayed QR code
   - Or manually enter the secret key

5. **Verify 2FA:**
   - Enter the 6-digit code from your authenticator app
   - System will verify it works

6. **Save the secret:**
   - Copy the `ADMIN_2FA_SECRET` value shown
   - Add to your `.env.local`:
     ```env
     ADMIN_2FA_SECRET=your_2fa_secret_here
     ```

7. **Restart application:**
   ```bash
   # Stop the dev server (Ctrl+C)
   npm run dev
   ```

### Step 4: Generate Recovery Codes

1. **Login to admin panel:**
   ```
   http://localhost:3000/admin/login
   ```

2. **Navigate to recovery codes:**
   ```
   http://localhost:3000/admin/recovery-codes
   ```

3. **Generate codes:**
   - Click "Generate Recovery Codes"
   - **IMPORTANT:** Save these codes immediately!
   - Each code can only be used once

4. **Store securely:**
   - **Recommended:** Password manager (1Password, LastPass, Bitwarden)
   - **Alternative:** Encrypted file or secure physical location
   - **Download:** Use the download button to save as text file

### Step 5: Deploy to Production

Add all environment variables to your deployment platform (Vercel, etc.):
```env
ADMIN_PASSWORD_HASH=your_hash
ADMIN_JWT_SECRET=your_jwt_secret
CSRF_SECRET=your_csrf_secret
ADMIN_2FA_SECRET=your_2fa_secret
```

**IMPORTANT:** 2FA is MANDATORY in production. The app will throw an error if `ADMIN_2FA_SECRET` is not set when `NODE_ENV=production`.

---

## 🔑 How to Login

### Normal Login (with 2FA device)

1. **Go to login page:**
   ```
   https://your-domain.com/admin/login
   ```

2. **Enter password:**
   - Enter your admin password
   - Click "Continue"

3. **Enter 2FA code:**
   - Open your authenticator app
   - Enter the current 6-digit code
   - Click "Verify & Login"

4. **Success!**
   - You'll be redirected to the admin dashboard

### Login with Recovery Code (if 2FA device unavailable)

1. **Go to login page:**
   ```
   https://your-domain.com/admin/login
   ```

2. **Enter password:**
   - Enter your admin password
   - Click "Continue"

3. **Switch to recovery code:**
   - Click "Use recovery code instead"

4. **Enter recovery code:**
   - Enter one of your saved recovery codes (format: XXXX-XXXX-XX)
   - Click "Verify & Login"

5. **Success!**
   - You'll be redirected to the admin dashboard
   - **Note:** That recovery code is now used and cannot be reused

6. **Generate new codes:**
   - If you have less than 3 codes remaining, generate new ones
   - Go to `/admin/recovery-codes`

---

## 🛡️ Security Best Practices

### Password Management
- ✅ Use a strong, unique password (16+ characters)
- ✅ Store password hash in environment variables, never in code
- ✅ Use different passwords for development and production
- ✅ Rotate password periodically (every 90 days)

### 2FA Management
- ✅ Use a reputable authenticator app (Google Authenticator, Authy, Microsoft Authenticator)
- ✅ Back up your 2FA secret securely
- ✅ Never share your 2FA secret or QR code
- ✅ Test 2FA before deploying to production

### Recovery Codes
- ✅ Generate recovery codes immediately after 2FA setup
- ✅ Store codes in a password manager (recommended)
- ✅ Keep a backup in a secure physical location
- ✅ Regenerate codes when you have less than 3 remaining
- ✅ Each code is single-use - mark them as used
- ✅ Never share recovery codes with anyone

### Session Management
- ✅ Sessions expire after inactivity
- ✅ Always logout when done (`/admin/preview` → Logout button)
- ✅ Don't use admin panel on public/shared computers
- ✅ Clear browser cookies if you suspect compromise

### Environment Variables
- ✅ Never commit `.env.local` to git
- ✅ Use different secrets for dev/staging/production
- ✅ Rotate secrets periodically
- ✅ Use strong random values (32+ characters)

---

## 🔧 Troubleshooting

### "Invalid password" error
- ✅ Verify `ADMIN_PASSWORD_HASH` is set correctly
- ✅ Regenerate hash using setup script
- ✅ Ensure you're using the correct password
- ✅ Check for typos in environment variables

### "Invalid 2FA code" error
- ✅ Verify time is synced on your device
- ✅ Try the next code (codes refresh every 30 seconds)
- ✅ Verify `ADMIN_2FA_SECRET` matches your authenticator app
- ✅ Use a recovery code if 2FA device is unavailable

### "2FA is required but not configured" error
- ✅ Visit `/admin/2fa-setup` to configure 2FA
- ✅ Add `ADMIN_2FA_SECRET` to environment variables
- ✅ Restart application after adding secret

### "Rate limit exceeded" error
- ✅ Wait 15 minutes before trying again
- ✅ Check audit logs for suspicious activity
- ✅ Verify you're using correct credentials

### "CSRF token not ready" error
- ✅ Refresh the page
- ✅ Clear browser cookies
- ✅ Verify `CSRF_SECRET` is set in environment

### Recovery code not working
- ✅ Verify code format: XXXX-XXXX-XX (10 characters + hyphens)
- ✅ Check if code was already used
- ✅ Generate new recovery codes if all are used
- ✅ Contact system administrator if locked out

### Locked out completely
If you've lost both 2FA device and recovery codes:

1. **Access your database** (Supabase, etc.)
2. **Clear recovery codes:**
   ```sql
   DELETE FROM "AdminRecoveryCode";
   ```
3. **Remove 2FA secret from environment variables**
4. **Restart application**
5. **Setup 2FA again** at `/admin/2fa-setup`
6. **Generate new recovery codes**

---

## 📊 Admin Features

### Dashboard (`/admin/preview`)
- View all application features
- Access document generator
- View statistics
- Manage system

### Audit Logs (`/admin/audit`)
- View all admin actions
- Filter by action type, status, date
- Export logs for compliance
- Monitor security events

### Recovery Codes (`/admin/recovery-codes`)
- View remaining codes count
- Generate new codes (invalidates old ones)
- Download codes as text file
- Copy codes to clipboard

### 2FA Setup (`/admin/2fa-setup`)
- Configure 2FA for first time
- Regenerate QR code
- Test 2FA verification
- View setup instructions

---

## 🔍 Audit Trail

All admin actions are logged:
- ✅ Login attempts (success/failure)
- ✅ 2FA verifications
- ✅ Recovery code usage
- ✅ Resource access
- ✅ Configuration changes

View logs at: `/admin/audit`

---

## 📱 Supported Authenticator Apps

### Recommended
- **Google Authenticator** (iOS/Android)
- **Authy** (iOS/Android/Desktop) - Supports cloud backup
- **Microsoft Authenticator** (iOS/Android)

### Also Compatible
- 1Password (with TOTP support)
- LastPass Authenticator
- Duo Mobile
- Any TOTP-compatible app

---

## 🆘 Emergency Access

### Lost 2FA Device
1. Use a recovery code to login
2. Go to `/admin/2fa-setup`
3. Setup 2FA with new device
4. Generate new recovery codes

### Lost Recovery Codes
1. Login with 2FA (if device available)
2. Go to `/admin/recovery-codes`
3. Generate new codes
4. Store securely

### Lost Both
- Contact system administrator
- Requires database access to reset
- Follow "Locked out completely" procedure above

---

## 📝 Environment Variables Reference

```env
# Required
ADMIN_PASSWORD_HASH=bcrypt_hash_from_setup_script
ADMIN_JWT_SECRET=random_32_char_string
CSRF_SECRET=random_32_char_string

# Required in Production
ADMIN_2FA_SECRET=secret_from_2fa_setup

# Optional (for backward compatibility)
ADMIN_PASSWORD=plain_text_password  # DEPRECATED
```

---

## ✅ Security Checklist

Before deploying to production:

- [ ] Admin password hash generated and set
- [ ] JWT secret generated and set (32+ characters)
- [ ] CSRF secret generated and set (32+ characters)
- [ ] 2FA configured and tested
- [ ] `ADMIN_2FA_SECRET` set in production environment
- [ ] Recovery codes generated and stored securely
- [ ] Tested login flow with 2FA
- [ ] Tested login flow with recovery code
- [ ] Audit logs working
- [ ] Different secrets for dev/staging/production
- [ ] `.env.local` not committed to git
- [ ] Admin access documented for team

---

## 🎓 Training Resources

### For Administrators
1. Read this guide completely
2. Practice login flow in development
3. Test recovery code flow
4. Familiarize with audit logs
5. Know emergency procedures

### For Team Members
- Only authorized personnel should have admin access
- Each admin should have their own credentials (future enhancement)
- Document all admin actions
- Report suspicious activity immediately

---

## 📞 Support

For issues or questions:
1. Check troubleshooting section above
2. Review audit logs for errors
3. Check application logs (Vercel, Sentry, etc.)
4. Contact system administrator

---

**Last Updated:** 2024  
**Security Level:** Enterprise-Grade  
**Compliance:** GDPR/CCPA Compliant  
**Status:** Production Ready ✅








