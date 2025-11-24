# Vercel Admin Panel - Complete Fix Guide

**Date:** November 17, 2025  
**Status:** 🔴 Admin panel not working on Vercel

---

## 🐛 Current Errors

```
❌ /api/admin/auth:1         - 401 (Unauthorized)
❌ /api/admin/aura-stats:1   - 500 (Internal Server Error)
❌ /api/admin/pdf-stats:1    - 500 (Internal Server Error)
❌ /api/admin/create-test-user:1 - 500 (Internal Server Error)
```

---

## 🔍 Root Causes

### Issue 1: Password Authentication (401 Error)
**Problem:** You're entering the plain password `AdminSecure2024!` but it's being compared incorrectly.

**How It Works:**
- You type: `AdminSecure2024!` (plain password)
- System reads: `$2b$12$MW9odM18YvA6w16yghWNZOexzvplzb2z6iMjGZ0rgR3/6eKYDIcx.` (hash from env)
- Bcrypt compares them: `bcrypt.compare(plainPassword, hash)`

**Solution:** The code is correct. The issue is likely:
1. The hash in Vercel doesn't match the password
2. OR there's a typo in the password/hash

### Issue 2: Database Connection (500 Errors)
**Problem:** All admin routes use Prisma, which requires `DATABASE_URL`.

**Error in Prisma:**
```typescript
if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL is not set. Cannot initialize Prisma.')
}
```

---

## ✅ Step-by-Step Fix

### Step 1: Verify DATABASE_URL in Vercel

1. Go to Vercel Dashboard
2. Select your project
3. Go to **Settings** → **Environment Variables**
4. Find `DATABASE_URL`

**It should look like this:**
```
postgresql://postgres.[PROJECT-REF]:[PASSWORD]@aws-0-us-east-1.pooler.supabase.com:6543/postgres?pgbouncer=true
```

**Your Supabase Project:**
- Project URL: `https://zzkvjfqjojerhwmkfdfn.supabase.co`
- Project Ref: `zzkvjfqjojerhwmkfdfn`

**To get the correct DATABASE_URL:**

#### Option A: From Supabase Dashboard
1. Go to https://supabase.com/dashboard/project/zzkvjfqjojerhwmkfdfn
2. Click **Settings** (gear icon in sidebar)
3. Click **Database**
4. Scroll to **Connection string**
5. Select **URI** format
6. Click **Copy**
7. **IMPORTANT:** Replace `[YOUR-PASSWORD]` with your actual database password

#### Option B: Use This Format
```
postgresql://postgres.zzkvjfqjojerhwmkfdfn:[YOUR-DB-PASSWORD]@aws-0-us-east-1.pooler.supabase.com:6543/postgres?pgbouncer=true
```

**⚠️ Common Mistakes:**
- ❌ Using the Supabase URL instead of the connection string
- ❌ Forgetting to replace `[YOUR-PASSWORD]`
- ❌ Using the wrong pooler port (should be `6543` not `5432`)

---

### Step 2: Verify ADMIN_PASSWORD_HASH

The hash in Vercel should be:
```
$2b$12$MW9odM18YvA6w16yghWNZOexzvplzb2z6iMjGZ0rgR3/6eKYDIcx.
```

This hash corresponds to password: `AdminSecure2024!`

**To verify it's correct:**

1. In Vercel: Settings → Environment Variables
2. Find `ADMIN_PASSWORD_HASH`
3. Click to reveal the value
4. It should match exactly: `$2b$12$MW9odM18YvA6w16yghWNZOexzvplzb2z6iMjGZ0rgR3/6eKYDIcx.`

**If it doesn't match:**
1. Delete the existing variable
2. Add a new one:
   - Name: `ADMIN_PASSWORD_HASH`
   - Value: `$2b$12$MW9odM18YvA6w16yghWNZOexzvplzb2z6iMjGZ0rgR3/6eKYDIcx.`
   - Environment: Production, Preview, Development (select all)

---

### Step 3: Redeploy

After updating the environment variables:

1. Go to **Deployments** tab in Vercel
2. Click on the latest deployment
3. Click **⋯** (three dots)
4. Click **Redeploy**
5. Select **Use existing Build Cache** (optional, faster)
6. Click **Redeploy**

**OR** push a small change to trigger auto-deploy:
```bash
cd "/Users/mnovakovski/Documents/Visual Code/App AstroBook/AstroBook"
git commit --allow-empty -m "chore: Trigger redeploy after env var update"
git push origin main
```

---

### Step 4: Test Admin Login

1. Go to: `https://astrovela-app.vercel.app/olivialimon-admin/login`
2. Enter password: `AdminSecure2024!`
3. Should see: "Please enter your 2FA code" (if 2FA is enabled)
   OR: Redirect to admin dashboard (if 2FA is disabled)

**Expected Behavior:**
- ✅ No 401 error
- ✅ Password accepted
- ✅ Either prompts for 2FA or logs in

---

### Step 5: Test Admin Dashboard

After successful login:

1. Dashboard should load: `https://astrovela-app.vercel.app/olivialimon-admin`
2. Check that stats load:
   - ✅ Aura Stats card shows data (not 500 error)
   - ✅ PDF Stats card shows data (not 500 error)
   - ✅ User stats display correctly

---

## 🔧 Troubleshooting

### Still Getting 401 on Login?

**Check 1: Password is correct**
```bash
# Test locally first
cd "/Users/mnovakovski/Documents/Visual Code/App AstroBook/AstroBook"
npm run dev

# Visit: http://localhost:3001/olivialimon-admin/login
# Try password: AdminSecure2024!
```

If it works locally but not on Vercel:
- The hash in Vercel is different
- Re-add the `ADMIN_PASSWORD_HASH` variable

**Check 2: Hash format**
- Must start with `$2b$12$`
- Must be exactly 60 characters long
- No extra spaces or newlines

---

### Still Getting 500 on Admin Routes?

**Check 1: DATABASE_URL is set**
```bash
# In Vercel dashboard, verify:
DATABASE_URL=postgresql://postgres.zzkvjfqjojerhwmkfdfn:...
```

**Check 2: DATABASE_URL format is correct**
- Should use `pooler.supabase.com` (not `db.supabase.co`)
- Should use port `6543` (not `5432`)
- Should include `?pgbouncer=true` at the end

**Check 3: Database password is correct**
- The `[YOUR-PASSWORD]` part must be your actual Supabase database password
- Not your Supabase account password
- Not the anon key

**To reset your database password:**
1. Go to Supabase Dashboard
2. Settings → Database
3. Click "Reset database password"
4. Copy the new password
5. Update `DATABASE_URL` in Vercel with the new password

---

### Check Vercel Logs

1. Go to Vercel Dashboard
2. Click on your project
3. Go to **Deployments**
4. Click on the latest deployment
5. Click **View Function Logs**
6. Look for errors related to:
   - `DATABASE_URL is not set`
   - `Prisma Client initialization failed`
   - `bcrypt compare failed`

---

## 📋 Environment Variables Checklist

Make sure ALL of these are set in Vercel:

### Required for Admin Panel:
- [ ] `DATABASE_URL` - Supabase connection string
- [ ] `ADMIN_PASSWORD_HASH` - `$2b$12$MW9odM18YvA6w16yghWNZOexzvplzb2z6iMjGZ0rgR3/6eKYDIcx.`
- [ ] `ADMIN_JWT_SECRET` - Any secure random string
- [ ] `CSRF_SECRET` - Any secure random string

### Required for Supabase:
- [ ] `NEXT_PUBLIC_SUPABASE_URL` - `https://zzkvjfqjojerhwmkfdfn.supabase.co`
- [ ] `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Your Supabase anon key

### Optional (for 2FA):
- [ ] `ADMIN_2FA_SECRET` - Generated after first login

---

## 🎯 Quick Fix Summary

1. **Fix DATABASE_URL:**
   - Get connection string from Supabase
   - Add to Vercel with correct password
   - Format: `postgresql://postgres.zzkvjfqjojerhwmkfdfn:[PASSWORD]@aws-0-us-east-1.pooler.supabase.com:6543/postgres?pgbouncer=true`

2. **Fix ADMIN_PASSWORD_HASH:**
   - Verify it's: `$2b$12$MW9odM18YvA6w16yghWNZOexzvplzb2z6iMjGZ0rgR3/6eKYDIcx.`
   - This matches password: `AdminSecure2024!`

3. **Redeploy:**
   - Trigger a new deployment after updating env vars

4. **Test:**
   - Login with `AdminSecure2024!`
   - Verify dashboard loads without 500 errors

---

## 🔐 Security Notes

### About Password Hashing

**You type:** `AdminSecure2024!` (plain password)  
**System stores:** `$2b$12$MW9odM18YvA6w16yghWNZOexzvplzb2z6iMjGZ0rgR3/6eKYDIcx.` (hash)

**How it works:**
```typescript
// When you login:
const password = "AdminSecure2024!"  // What you type
const hash = process.env.ADMIN_PASSWORD_HASH  // From Vercel

// Bcrypt compares them:
const isValid = await bcrypt.compare(password, hash)
// Returns: true ✅ or false ❌
```

**Why we use hashing:**
- Even if someone sees the hash, they can't get your password
- Hashing is one-way (can't reverse it)
- Industry standard for password storage

---

## ✅ Success Criteria

After following this guide, you should have:

1. ✅ Admin login works (no 401 error)
2. ✅ Dashboard loads (no 500 errors)
3. ✅ Aura stats display correctly
4. ✅ PDF stats display correctly
5. ✅ Create test user button works
6. ✅ All admin features functional

---

## 📞 Next Steps After Fix

Once admin panel works:

1. **Setup 2FA (if not already done):**
   - Visit: `/olivialimon-admin/2fa-setup`
   - Scan QR code with authenticator app
   - Add `ADMIN_2FA_SECRET` to Vercel

2. **Generate Recovery Codes:**
   - Visit: `/olivialimon-admin/recovery-codes`
   - Save codes securely

3. **Test All Admin Features:**
   - Create test user
   - View audit logs
   - Check all stats cards
   - Test preview functionality

---

**Status:** Ready to fix! Follow steps 1-4 above. 🚀


