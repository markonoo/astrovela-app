# 🔧 Fix Database Connection - Step by Step

## **Debug Results Show:**
```json
"database": {
  "connected": false,
  "error": "Can't reach database server at `db.zzkvjfqjojerhwmkfdfn.supabase.co:5432`"
}
```

**Everything else works, but Vercel can't connect to your database.**

---

## ✅ **Solution: Update DATABASE_URL in Vercel**

### **Step 1: Get Correct Connection String from Supabase**

1. Go to: https://supabase.com/dashboard/project/zzkvjfqjojerhwmkfdfn/settings/database
2. Scroll to **"Connection string"** section
3. **IMPORTANT:** Select **"Transaction"** mode (Supavisor) - **NOT** "Session"
4. Copy the connection string - should look like:

**Option A: Transaction Pooler (RECOMMENDED for Vercel):**
```
postgresql://postgres.zzkvjfqjojerhwmkfdfn:[YOUR-PASSWORD]@aws-0-eu-central-1.pooler.supabase.com:6543/postgres?pgbouncer=true
```

**Option B: Direct Connection:**
```
postgresql://postgres:[YOUR-PASSWORD]@db.zzkvjfqjojerhwmkfdfn.supabase.co:5432/postgres
```

5. **Replace `[YOUR-PASSWORD]` with your actual database password!**
   - If you don't know it, click "Reset database password" first

---

### **Step 2: Check if Database is Paused**

On the same page, check:
- Is there a message saying "Database is paused"?
- If yes, click **"Resume"** or **"Restore"**
- Wait for it to become active

---

### **Step 3: Update Vercel Environment Variable**

1. Go to: https://vercel.com/dashboard
2. Select your project (astrovela)
3. Go to: **Settings** → **Environment Variables**
4. Find `DATABASE_URL`
5. Click **"Edit"** (pencil icon)
6. **Paste the COMPLETE connection string** from Step 1
7. **Make sure password is correct!**
8. Select environments: **Production**, **Preview**, **Development**
9. Click **"Save"**

---

### **Step 4: Redeploy**

After saving the environment variable:
1. Go to **Deployments** tab
2. Click on the latest deployment
3. Click **⋮** (three dots) → **"Redeploy"**
4. Wait 2-3 minutes

---

### **Step 5: Test the Fix**

After redeployment:
1. Visit: https://www.tryastrovela.com/api/admin/debug
2. Check the response:

**If fixed, you'll see:**
```json
"database": {
  "connected": true,
  "entitlementCount": 15
}
```

**If still broken:**
```json
"database": {
  "connected": false,
  "error": "..."
}
```

---

## 🚨 **Common Mistakes**

### **Mistake 1: Password Not Replaced**
```
postgresql://postgres.zzkvjfqjojerhwmkfdfn:[YOUR-PASSWORD]@...
                                          ^^^^^^^^^^^^
                                          MUST REPLACE THIS!
```

### **Mistake 2: Wrong Connection Mode**
- ❌ Session mode (port 5432 to pooler) - Doesn't work well with serverless
- ✅ Transaction mode (port 6543) - Works with Vercel
- ✅ Direct connection (port 5432 to db) - Also works

### **Mistake 3: Missing `pgbouncer=true` Parameter**
If using pooler, the URL should end with:
```
?pgbouncer=true
```

### **Mistake 4: Database Paused**
Free tier Supabase databases pause after inactivity. Check if it needs to be resumed.

---

## 🔍 **How to Get Your Database Password**

If you don't know your database password:

1. Go to: https://supabase.com/dashboard/project/zzkvjfqjojerhwmkfdfn/settings/database
2. Click **"Reset database password"**
3. **Copy the new password** (you won't see it again!)
4. Update your connection string with the new password
5. Update `DATABASE_URL` in Vercel

---

## ✅ **Recommended Connection String**

**Use Transaction Pooler (best for Vercel):**
```
postgresql://postgres.zzkvjfqjojerhwmkfdfn:YOUR_ACTUAL_PASSWORD@aws-0-eu-central-1.pooler.supabase.com:6543/postgres?pgbouncer=true
```

**Key points:**
- ✅ Port `6543` (transaction pooler)
- ✅ `pgbouncer=true` at the end
- ✅ Replace `YOUR_ACTUAL_PASSWORD` with real password
- ✅ No spaces or line breaks

---

## 📊 **After Fix:**

Once the database connects:
1. ✅ `/api/admin/debug` shows `connected: true`
2. ✅ Admin dashboard loads without 500 errors
3. ✅ Stats APIs return data
4. ✅ Everything works! 🎉

---

## 💡 **Why This Happened**

The DATABASE_URL in Vercel either:
1. Has wrong password
2. Is using wrong connection mode (Session vs Transaction)
3. Database is paused
4. Network issue (rare)

**Most common:** Wrong password or wrong connection mode.

---

**Go to Supabase → Get connection string → Update Vercel → Redeploy → Test!** 🚀
