# 🔄 JWT Secret Updated - Session Reset Required

## **Issue**
After updating `ADMIN_JWT_SECRET` in Vercel, you're still getting 500 errors:
```
/api/admin/aura-stats → 500
/api/admin/pdf-stats → 500
```

## **Why This Happens**

When you update `ADMIN_JWT_SECRET`:
1. All existing admin session tokens were signed with the **old secret**
2. The server now tries to verify them with the **new secret**
3. JWT verification fails → tokens are invalid
4. Auth system rejects the request → 500 error

**You need to clear your session and log in again with the new secret!**

---

## 🔧 **Solution: Clear Admin Session**

### **Option 1: Log Out & Log Back In (Recommended)**

1. Go to: https://www.tryastrovela.com/olivialimon-admin
2. If you see a logout button, click it
3. Clear your browser cookies for the site:
   - **Chrome/Edge:** Settings → Privacy → Clear browsing data → Cookies
   - **Safari:** Preferences → Privacy → Manage Website Data → Remove tryastrovela.com
   - **Firefox:** Settings → Privacy → Clear Cookies and Site Data
4. Go to: https://www.tryastrovela.com/olivialimon-admin/login
5. Log in again with your admin credentials

### **Option 2: Clear Cookie via DevTools (Faster)**

1. Open your browser DevTools (F12)
2. Go to **Application** tab (Chrome) or **Storage** tab (Firefox)
3. Expand **Cookies** → **https://www.tryastrovela.com**
4. Find and delete: `admin_session` cookie
5. Refresh the page
6. Log in again

### **Option 3: Incognito/Private Window (Quick Test)**

1. Open an incognito/private window
2. Go to: https://www.tryastrovela.com/olivialimon-admin/login
3. Log in with admin credentials
4. Test the admin dashboard

---

## ✅ **After Clearing Session**

The flow should work:
```
1. Clear admin_session cookie
2. Go to /olivialimon-admin/login
3. Enter credentials
4. New JWT token signed with NEW secret
5. Admin dashboard loads
6. /api/admin/aura-stats → 200 OK ✅
7. /api/admin/pdf-stats → 200 OK ✅
```

---

## 🔍 **If Still Getting 500 Errors**

If clearing session doesn't fix it, there might be another issue:

### **Check 1: Verify Vercel Redeployed**
1. Go to Vercel dashboard → Deployments
2. Check if deployment completed after adding the env var
3. Redeploy if needed: Deployments → Latest → ⋮ → Redeploy

### **Check 2: Verify All Required Env Vars**
Make sure these are set in Vercel:
- ✅ `DATABASE_URL`
- ✅ `ADMIN_JWT_SECRET` (just updated)
- ✅ `NEXT_PUBLIC_SUPABASE_URL`
- ✅ `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- ✅ `SUPABASE_SERVICE_ROLE_KEY` (if used)

### **Check 3: View Production Logs**
1. Go to Vercel dashboard → Your project
2. Click on **Logs** or **Functions**
3. Look for errors from `/api/admin/aura-stats`
4. Share the actual error message

---

## 💡 **Why JWT Secrets Can't Be Changed Easily**

JWT tokens are cryptographically signed. When you change the secret:
- ✅ Old tokens are automatically invalidated (good for security)
- ❌ All users need to log in again (expected behavior)
- 🔐 This is by design - ensures old sessions can't be reused

---

## 🎯 **Most Likely Fix**

**Clear your browser's `admin_session` cookie and log in again.**

This will create a new JWT token signed with the new secret, and everything should work!

---

## 📞 **If This Doesn't Work**

Try these debugging steps:
1. Open browser console and check for error details
2. Check Vercel logs for the actual error message
3. Verify the DATABASE_URL is still correct (not overwritten)
4. Try hitting the API directly: `https://www.tryastrovela.com/api/admin/aura-stats`
5. Share the actual error response (not just "500")

Let me know what happens after clearing the session! 🚀
