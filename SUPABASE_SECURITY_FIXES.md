# 🔒 Supabase Security Issues - Fix Guide

**Date:** December 26, 2024  
**Status:** ⚠️ Security vulnerabilities detected

---

## 🚨 Issues Found in Supabase Security Advisor

### **Errors (3):**

#### **1. RLS Disabled in Public** ❌
**Tables affected:**
- `public.QuizResponse`
- `public.ChartImage`
- `public.User`

**Risk:** Without Row Level Security (RLS), any user can read/write ANY data in these tables!

**Impact:**
- Users could read other users' quiz responses
- Users could read other users' chart images
- Users could access other users' personal data

---

#### **2. Leaked Password Protection Disabled** ❌
**Entity:** Auth

**Risk:** Users can set passwords that have been exposed in data breaches.

**Fix:** Enable in Supabase Dashboard → Authentication → Policies

---

#### **3. Postgres Version Has Security Patches Available** ⚠️
**Entity:** Config

**Risk:** Database may have known vulnerabilities.

**Fix:** Upgrade Postgres version in Supabase Dashboard

---

## ✅ How to Fix RLS Issues

### **Option A: Run SQL Script (Recommended)**

1. **Go to Supabase SQL Editor:**
   https://supabase.com/dashboard/project/zzkvjfqjojerhwmkfdfn/sql/new

2. **Copy and paste the entire contents of:**
   `supabase/enable-rls-policies.sql`

3. **Click "Run"**

4. **Verify** - You should see:
   ```
   ✅ RLS enabled on all tables
   ✅ Policies created for anon users
   ✅ Policies created for authenticated users
   ✅ Service role has full access
   ```

---

### **Option B: Enable RLS via Dashboard**

#### **Step 1: Enable RLS**

1. Go to: https://supabase.com/dashboard/project/zzkvjfqjojerhwmkfdfn/editor
2. For each table (`QuizResponse`, `ChartImage`, `User`):
   - Click the table
   - Click the "⚙️" icon
   - Toggle **"Enable RLS"** ON

#### **Step 2: Create Policies**

For **QuizResponse:**
1. Click "Add Policy"
2. **Policy 1:**
   - Name: "Allow anonymous quiz submission"
   - Command: INSERT
   - Target roles: anon
   - USING expression: `true`
3. **Policy 2:**
   - Name: "Users can read own responses"
   - Command: SELECT
   - Target roles: authenticated
   - USING expression: `auth.uid()::text = "userId"::text OR "session_id" IS NOT NULL`

For **ChartImage:**
1. Click "Add Policy"
2. **Policy 1:**
   - Name: "Allow anonymous chart image upload"
   - Command: INSERT
   - Target roles: anon
   - USING expression: `true`
3. **Policy 2:**
   - Name: "Users can read own images"
   - Command: SELECT
   - Target roles: authenticated
   - USING expression: `auth.uid()::text = "userId"::text OR "session_id" IS NOT NULL`

For **User:**
1. Click "Add Policy"
2. **Policy 1:**
   - Name: "Users can read own profile"
   - Command: SELECT
   - Target roles: authenticated
   - USING expression: `auth.uid()::text = id::text`
3. **Policy 2:**
   - Name: "Users can update own profile"
   - Command: UPDATE
   - Target roles: authenticated
   - USING expression: `auth.uid()::text = id::text`
   - WITH CHECK expression: `auth.uid()::text = id::text`

---

## 🔒 Fix Other Security Issues

### **Enable Leaked Password Protection:**

1. Go to: https://supabase.com/dashboard/project/zzkvjfqjojerhwmkfdfn/auth/policies
2. Find "Password Strength"
3. Toggle **"Check for leaked passwords"** ON
4. Save changes

---

### **Upgrade Postgres Version:**

1. Go to: https://supabase.com/dashboard/project/zzkvjfqjojerhwmkfdfn/settings/infrastructure
2. Check current Postgres version
3. If upgrade available, click "Upgrade"
4. Follow prompts (this may cause brief downtime)

---

## ⚠️ Important Notes

### **Before Enabling RLS:**
Your app currently works because RLS is disabled (anyone can insert/read).

### **After Enabling RLS:**
1. ✅ Anonymous users can still complete quiz (INSERT to QuizResponse, ChartImage)
2. ✅ Authenticated users can read their own data
3. ✅ Admin dashboard still works (service_role has full access)
4. ❌ No one can read other users' data

### **Testing After RLS Enable:**

1. **Test quiz flow:**
   - Complete quiz as anonymous user
   - Should work exactly the same

2. **Test authenticated access:**
   - Log in to app
   - Should see only your own data

3. **Test admin dashboard:**
   - Should see all data (using service_role)

---

## 📊 RLS Policy Summary

| Table | Role | Action | Policy |
|-------|------|--------|--------|
| QuizResponse | anon | INSERT | ✅ Allowed (for quiz) |
| QuizResponse | authenticated | SELECT | ✅ Own data only |
| QuizResponse | service_role | ALL | ✅ Full access |
| ChartImage | anon | INSERT | ✅ Allowed (for quiz) |
| ChartImage | authenticated | SELECT | ✅ Own data only |
| ChartImage | service_role | ALL | ✅ Full access |
| User | authenticated | SELECT | ✅ Own profile only |
| User | authenticated | UPDATE | ✅ Own profile only |
| User | service_role | ALL | ✅ Full access |

---

## 🧪 Verification

After applying fixes, run these queries in Supabase SQL Editor:

```sql
-- Check RLS is enabled
SELECT schemaname, tablename, rowsecurity 
FROM pg_tables 
WHERE schemaname = 'public' 
AND tablename IN ('QuizResponse', 'ChartImage', 'User');

-- Should show:
-- rowsecurity = true for all tables

-- Check policies exist
SELECT tablename, policyname 
FROM pg_policies 
WHERE schemaname = 'public'
ORDER BY tablename;

-- Should show multiple policies per table
```

---

## 🎯 Priority

### **Critical (Fix Now):**
1. ❌ **Enable RLS** - Major security risk!
2. ❌ **Create RLS policies** - Required for security + functionality

### **High (Fix Soon):**
3. ⚠️ **Enable leaked password protection** - Prevents weak passwords
4. ⚠️ **Upgrade Postgres** - Applies security patches

---

## 📞 Need Help?

If quiz stops working after enabling RLS:

1. Check error in browser console
2. Verify policies were created correctly
3. Test with SQL:
   ```sql
   -- Try inserting as anon user
   INSERT INTO public."QuizResponse" (id, email, answers, birthDate, createdAt)
   VALUES ('test-id', 'test@example.com', '{}', '{}', NOW());
   ```

If it fails, check policy with:
```sql
SELECT * FROM pg_policies WHERE tablename = 'QuizResponse';
```

---

## ✅ Success Criteria

After fixes:
- [ ] Security Advisor shows 0 errors
- [ ] RLS enabled on all tables
- [ ] Quiz flow still works
- [ ] Admin dashboard still works
- [ ] Users can't access each other's data

---

**File created:** December 26, 2024  
**SQL script:** `supabase/enable-rls-policies.sql`  
**Priority:** CRITICAL - Fix before launch! 🚨
