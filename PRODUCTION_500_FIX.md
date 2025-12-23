# 🔧 Fix Production 500 Errors - Admin APIs

**Issue:** Production site (tryastrovela.com) returns 500 errors on:
- `/api/admin/aura-stats`
- `/api/admin/pdf-stats`

**Root Cause:** Incorrect `DATABASE_URL` environment variable in production pointing to wrong/expired Supabase credentials.

---

## 🎯 **Solution:**

Your hosting platform (Vercel/Netlify/etc.) needs the correct `DATABASE_URL` from your `.env` file.

### **Step 1: Get Correct DATABASE_URL**

From your local `.env` file:
```bash
DATABASE_URL=postgresql://postgres:***@db.zzkvjfqjojerhwmkfdfn.supabase.co:5432/postgres
```

### **Step 2: Update Production Environment Variables**

#### **If using Vercel:**
1. Go to https://vercel.com/dashboard
2. Select your `astrovela-app` project
3. Go to **Settings** → **Environment Variables**
4. Find `DATABASE_URL`
5. **Update** it to match your `.env` (NOT `.env.local`)
6. **Save** and **Redeploy**

#### **If using another platform:**
- Update the `DATABASE_URL` environment variable in your hosting dashboard
- Ensure it points to: `db.zzkvjfqjojerhwmkfdfn.supabase.co` (correct)
- NOT: `aws-0-eu-central-1.pooler.supabase.com` (wrong/expired)

### **Step 3: Redeploy**

After updating the environment variable:
1. Trigger a new deployment (or it may auto-deploy)
2. Wait for build to complete
3. Test the admin APIs

---

## ✅ **Verify Fix:**

After redeployment, test:
```
https://www.tryastrovela.com/api/admin/aura-stats
https://www.tryastrovela.com/api/admin/pdf-stats
```

Should return JSON data instead of 500 errors.

---

## 📝 **What We Fixed Locally:**

1. ✅ Removed conflicting `.env.local` with wrong credentials
2. ✅ Now using correct `DATABASE_URL` from `.env`
3. ✅ Enhanced error logging
4. ✅ Restored UUID defaults in Prisma schema
5. ✅ Committed and pushed to GitHub main branch

**Production just needs to be redeployed with correct environment variables!**

---

## 🚨 **Important:**

- The fix is already in your GitHub `main` branch
- Your local dev server works correctly
- Production needs the environment variable update + redeploy
- This is a **hosting configuration issue**, not a code issue

---

## 💡 **How to Prevent This:**

1. Always use the correct DATABASE_URL from Supabase dashboard
2. Don't use `.env.local` for different database credentials
3. Keep production and development using the same database (or clearly separated)
4. Document which DATABASE_URL is for which environment

---

**Next Step:** Update `DATABASE_URL` in your production hosting platform!
