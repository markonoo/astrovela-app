# Diagnose 500 Error - Admin Login

## 🔍 **Step 1: Run Health Check**

Wait 2-3 minutes for Vercel to deploy, then visit:

```
https://your-domain.com/api/admin/health
```

This will show you **exactly** what's failing.

---

## 📋 **What to Look For**

The health check will show:

### **Environment Variables:**
- ✅ All should be `true`
- ❌ If any are `false`, that variable is missing in Vercel

### **Password Hash Format:**
- ✅ `startsWithBcrypt: true`
- ✅ `length: 60`
- ❌ If these are wrong, the hash is incorrectly formatted

### **Module Imports:**
- ✅ All should say `"OK"`
- ❌ If any show errors, that module is failing to load

### **Errors Array:**
- ✅ Should be empty `[]`
- ❌ If it has items, those are the actual errors causing the crash

---

## 🚀 **Step 2: Share the Results**

Copy the entire JSON output from `/api/admin/health` and share it with me.

I'll be able to see exactly what's failing and fix it immediately.

---

## 💡 **Common Issues**

| Issue | Solution |
|-------|----------|
| `ADMIN_PASSWORD_HASH_SET: false` | Add the hash to Vercel environment variables |
| `startsWithBcrypt: false` | Hash is corrupted, needs to be reset |
| `length: 10` (not 60) | Hash was truncated, check for escaping issues |
| `DATABASE_URL_SET: false` | Add DATABASE_URL to Vercel |
| `prisma: error` | Prisma initialization failed |

---

## 📝 **Quick Test**

After Vercel deploys (2-3 min), visit:

```
https://your-domain.com/api/admin/health
```

Then share the output with me!

---

**This will tell us exactly what's wrong.** 🎯




