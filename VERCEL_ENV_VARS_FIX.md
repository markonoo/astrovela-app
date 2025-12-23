# 🚨 Production 500 Errors - Missing Environment Variables

## **Root Cause Identified**

Your production site is failing because **Vercel is missing the `ADMIN_JWT_SECRET` environment variable**.

### Error Flow:
1. Admin dashboard calls `/api/admin/aura-stats`
2. API route calls `requireAdminAuth()` 
3. Auth system uses JWT tokens with `ADMIN_JWT_SECRET`
4. **Production doesn't have `ADMIN_JWT_SECRET`** → JWT verification fails
5. Audit logging tries to write to database → 500 error

---

## ✅ **Solution: Add Missing Environment Variables to Vercel**

### **Step 1: Go to Vercel Dashboard**

1. Visit: https://vercel.com/dashboard
2. Select your **astrovela-app** project
3. Go to: **Settings** → **Environment Variables**

### **Step 2: Add These Required Variables**

Add the following environment variables (all environments: Production, Preview, Development):

#### **1. ADMIN_JWT_SECRET** (CRITICAL - Missing!)
```
ADMIN_JWT_SECRET=your-super-secret-admin-jwt-key-change-this-in-production-min-32-chars
```
**Value:** Generate a strong random string (32+ characters)
**Used for:** Admin session JWT token signing/verification

#### **2. DATABASE_URL** (Already configured but verify)
```
DATABASE_URL=postgresql://postgres:[YOUR_PASSWORD]@db.zzkvjfqjojerhwmkfdfn.supabase.co:5432/postgres
```
**Used for:** Database connection

#### **3. Supabase Variables** (Should already exist)
```
NEXT_PUBLIC_SUPABASE_URL=https://zzkvjfqjojerhwmkfdfn.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=[your-anon-key]
SUPABASE_SERVICE_ROLE_KEY=[your-service-role-key]
```

---

## 🔐 **How to Generate ADMIN_JWT_SECRET**

Use one of these methods:

### Method 1: OpenSSL (Mac/Linux)
```bash
openssl rand -base64 48
```

### Method 2: Node.js
```bash
node -e "console.log(require('crypto').randomBytes(48).toString('base64'))"
```

### Method 3: Online Generator
- Visit: https://generate-secret.vercel.app/
- Copy a 64-character string

**Example (DO NOT USE THIS, GENERATE YOUR OWN):**
```
xK9mP2nQ7rT8sU1vW4xY5zB6cD7eF8gH9iJ0kL1mN2oP3qR4sT5uV6wX7yZ8aB9c
```

---

## 📋 **Step-by-Step Vercel Configuration**

### **In Vercel Dashboard:**

1. **Environment Variables Page**
   - Click "Add New" for each variable below

2. **Add ADMIN_JWT_SECRET:**
   ```
   Key:   ADMIN_JWT_SECRET
   Value: [paste your generated secret]
   Environments: ✅ Production ✅ Preview ✅ Development
   ```

3. **Verify DATABASE_URL:**
   ```
   Key:   DATABASE_URL
   Value: postgresql://postgres:***@db.zzkvjfqjojerhwmkfdfn.supabase.co:5432/postgres
   Environments: ✅ Production ✅ Preview ✅ Development
   ```

4. **Verify Supabase Keys:**
   - Check these exist and are correct
   - Get them from: https://supabase.com/dashboard/project/zzkvjfqjojerhwmkfdfn/settings/api

5. **Save & Redeploy**
   - After adding variables, click "Redeploy" 
   - OR: Make a small commit to trigger auto-deploy

---

## ✅ **Verification Steps**

After redeploying:

### 1. Test Admin Login
```
https://www.tryastrovela.com/olivialimon-admin/login
```
Should work without errors

### 2. Test Admin Stats API
```
https://www.tryastrovela.com/api/admin/aura-stats
```
Should return JSON (or 401 if not logged in)

### 3. Check Admin Dashboard
```
https://www.tryastrovela.com/olivialimon-admin
```
Stats should load without 500 errors

---

## 🔍 **Why This Happened**

1. ✅ Your local `.env` has `ADMIN_JWT_SECRET`
2. ❌ Vercel production environment **doesn't have it**
3. ✅ DATABASE_URL is correct in both places
4. 🐛 Missing JWT secret causes auth failures → audit log errors → 500

**The code is correct. Just need the environment variable in production!**

---

## 📝 **Summary**

| Variable | Local | Vercel | Status |
|----------|-------|--------|--------|
| DATABASE_URL | ✅ | ✅ | OK |
| ADMIN_JWT_SECRET | ✅ | ❌ | **MISSING** |
| SUPABASE_URL | ✅ | ✅? | Verify |
| SUPABASE_ANON_KEY | ✅ | ✅? | Verify |

---

## 🚀 **Next Steps**

1. Generate `ADMIN_JWT_SECRET` (use method above)
2. Add it to Vercel environment variables
3. Verify other Supabase variables exist
4. Redeploy your application
5. Test the admin dashboard

**After this, production should work perfectly!** 🎉
