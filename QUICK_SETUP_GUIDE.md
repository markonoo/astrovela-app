# Quick Setup Guide - Create Admin Tables

## 🚀 **2-Minute Setup**

### **Step 1: Open Supabase SQL Editor**

Click this link (opens in new tab):
👉 **https://supabase.com/dashboard/project/zzkvjfqjojerhwmkfdfn/sql**

### **Step 2: Create New Query**

1. Click **"New query"** button (top right)
2. You'll see an empty SQL editor

### **Step 3: Copy & Paste**

Open the file `CREATE_ADMIN_TABLES.sql` in this folder and copy all the SQL, then paste it into the Supabase SQL editor.

Or copy this:

```sql
-- Create AdminAuditLog table
CREATE TABLE IF NOT EXISTS "AdminAuditLog" (
    "id" TEXT NOT NULL PRIMARY KEY DEFAULT gen_random_uuid()::text,
    "adminId" TEXT,
    "action" TEXT NOT NULL,
    "resource" TEXT,
    "ipAddress" TEXT,
    "userAgent" TEXT,
    "success" BOOLEAN NOT NULL,
    "details" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Create indexes for AdminAuditLog
CREATE INDEX IF NOT EXISTS "AdminAuditLog_action_idx" ON "AdminAuditLog"("action");
CREATE INDEX IF NOT EXISTS "AdminAuditLog_adminId_idx" ON "AdminAuditLog"("adminId");
CREATE INDEX IF NOT EXISTS "AdminAuditLog_createdAt_idx" ON "AdminAuditLog"("createdAt");
CREATE INDEX IF NOT EXISTS "AdminAuditLog_success_idx" ON "AdminAuditLog"("success");

-- Create AdminRecoveryCode table
CREATE TABLE IF NOT EXISTS "AdminRecoveryCode" (
    "id" TEXT NOT NULL PRIMARY KEY DEFAULT gen_random_uuid()::text,
    "code" TEXT NOT NULL UNIQUE,
    "used" BOOLEAN NOT NULL DEFAULT false,
    "usedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Create index for AdminRecoveryCode
CREATE INDEX IF NOT EXISTS "AdminRecoveryCode_used_idx" ON "AdminRecoveryCode"("used");
```

### **Step 4: Click "Run" (or press Cmd/Ctrl + Enter)**

You should see:
✅ **Success. No rows returned**

### **Step 5: Verify Tables Were Created**

Run this query to verify:

```sql
SELECT table_name 
FROM information_schema.tables 
WHERE table_schema = 'public' 
AND table_name IN ('AdminAuditLog', 'AdminRecoveryCode');
```

You should see:
```
AdminAuditLog
AdminRecoveryCode
```

### **Step 6: Test Admin Login**

1. Visit: `https://your-domain.com/olivialimon-admin/login`
2. Enter password: `AdminSecure2024!`
3. Enter 6-digit 2FA code from your authenticator app
4. Click "Sign In"
5. ✅ **Success!**

---

## 🎉 **That's It!**

Your admin login should now work perfectly with:
- ✅ Audit logging (tracks all admin actions)
- ✅ Recovery codes (backup 2FA)
- ✅ No more 500 errors

---

## 🔍 **Troubleshooting**

### **If you get "table already exists" error:**
That's fine! It means the tables are already there. Just continue to Step 6.

### **If admin login still doesn't work:**
1. Check Vercel deployment is complete (wait 2-3 min after latest push)
2. Clear browser cache or use incognito mode
3. Check Vercel logs for any errors

---

## 📝 **What These Tables Do**

| Table | Purpose |
|-------|---------|
| `AdminAuditLog` | Tracks all admin actions (login, data access, etc.) for security |
| `AdminRecoveryCode` | Stores backup 2FA codes in case you lose your authenticator app |

---

**Total Time: 2 minutes** ⏱️






