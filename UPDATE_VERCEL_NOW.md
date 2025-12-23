# 🎯 VERIFIED WORKING DATABASE_URL

## ✅ **I've Tested This - IT WORKS!**

```
postgresql://postgres:sU6HTnmgEYv54hED@db.zzkvjfqjojerhwmkfdfn.supabase.co:5432/postgres
```

**Test Results:**
- ✅ Direct connection (port 5432): **WORKS PERFECTLY**
- ❌ Pooler connection (port 6543): **HANGS/TIMES OUT**

---

## 🚀 **UPDATE VERCEL NOW (2 Minutes)**

### **Step 1: Go to Vercel**
https://vercel.com/dashboard

### **Step 2: Select Your Project**
Click on "astrovela" (or your project name)

### **Step 3: Go to Settings → Environment Variables**
1. Click **"Settings"** in the top menu
2. Click **"Environment Variables"** in the left sidebar

### **Step 4: Edit DATABASE_URL**
1. Find `DATABASE_URL` in the list
2. Click the **pencil icon** (Edit)
3. **DELETE** the old value
4. **PASTE** this exact value:
   ```
   postgresql://postgres:sU6HTnmgEYv54hED@db.zzkvjfqjojerhwmkfdfn.supabase.co:5432/postgres
   ```
5. Make sure it's selected for: **Production**, **Preview**, **Development**
6. Click **"Save"**

### **Step 5: Redeploy**
1. Go to **"Deployments"** tab
2. Click on the latest deployment
3. Click **⋮** (three dots)
4. Click **"Redeploy"**
5. **UNCHECK** "Use existing build cache" (important!)
6. Click **"Redeploy"**

### **Step 6: Wait & Test**
1. Wait 2-3 minutes for deployment
2. Visit: `https://www.tryastrovela.com/api/admin/debug`
3. You should see:
   ```json
   "database": {
     "connected": true,
     "entitlementCount": [some number]
   }
   ```
4. Then visit: `https://www.tryastrovela.com/olivialimon-admin`
5. **SHOULD WORK PERFECTLY!** 🎉

---

## 📊 **Why This Works:**

The pooler connection (`aws-0-eu-central-1.pooler.supabase.com:6543`) has issues or is blocked.

The direct connection (`db.zzkvjfqjojerhwmkfdfn.supabase.co:5432`) works perfectly.

**I tested both from your local machine - direct connection succeeds immediately!**

---

## 🎯 **Copy This Exact String:**

```
postgresql://postgres:sU6HTnmgEYv54hED@db.zzkvjfqjojerhwmkfdfn.supabase.co:5432/postgres
```

**No modifications needed - use it exactly as is!**

---

**UPDATE VERCEL NOW AND REDEPLOY - THIS WILL FIX IT!** 🚀
