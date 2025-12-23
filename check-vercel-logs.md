# 🔍 How to Check Vercel Logs for 500 Errors

Since we're still getting 500 errors, we need to see the actual error messages from production.

## **Step 1: Access Vercel Logs**

1. Go to: https://vercel.com/dashboard
2. Select your project (astrovela-app or similar)
3. Click on **"Logs"** in the left sidebar
   - OR click on the latest deployment → **"Functions"** tab

## **Step 2: Filter for Admin API Errors**

In the logs search/filter:
- Look for: `/api/admin/aura-stats`
- Look for: `/api/admin/pdf-stats`
- Filter by: **Errors** or **500** status codes

## **Step 3: Find the Error Message**

You should see log entries like:
```
[ERROR] /api/admin/aura-stats
Error: [actual error message here]
  at ...
```

## **What to Look For:**

### **Possible Error 1: Database Connection**
```
Error: Can't reach database server
FATAL: Tenant or user not found
```
→ DATABASE_URL is wrong

### **Possible Error 2: Prisma Client**
```
Error: Prisma Client is not initialized
PrismaClientInitializationError
```
→ Need to run `npx prisma generate` in build

### **Possible Error 3: Missing Environment Variable**
```
Error: DATABASE_URL is not set
```
→ Environment variable missing

### **Possible Error 4: Module Not Found**
```
Error: Cannot find module '@/lib/prisma'
```
→ Build issue

### **Possible Error 5: JWT/Auth Error**
```
JsonWebTokenError: invalid signature
TokenExpiredError: jwt expired
```
→ Session/token issue (should return 401, not 500)

## **Step 4: Share the Error**

Copy the exact error message and stack trace and share it with me.

---

## **Quick Alternative: Test API Directly**

You can also test the API endpoint directly in your browser:

1. Open a new tab
2. Go to: `https://www.tryastrovela.com/api/admin/aura-stats`
3. You should see either:
   - JSON error message (good - tells us what's wrong)
   - Blank page with 500 (bad - need logs)

---

## **Most Likely Issues:**

Based on persistent 500 errors despite fixes:

1. **Prisma Client not generated in production build**
   - Vercel needs to run `npx prisma generate` during build
   - Check if `postinstall` script exists in package.json

2. **Database connection failing**
   - DATABASE_URL in Vercel might be incorrect
   - Connection timeout or network issue

3. **Environment variable mismatch**
   - Some env var is missing or wrong in production

---

**Please check the Vercel logs and share what error you see!** 🔍
