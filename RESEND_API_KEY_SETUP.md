# ⚠️ Resend API Key Setup Required

## Issue
The email test is failing because `RESEND_API_KEY` is not configured properly.

---

## ✅ Quick Fix (2 minutes)

### Step 1: Get Your Resend API Key

1. Go to: https://resend.com/api-keys
2. Click "Create API Key"
3. Name it: "AstroVela Production"
4. Copy the key (starts with `re_`)

---

### Step 2: Add to Local Environment

Open or create `.env.local` in your project root:

```bash
# In: /Users/mnovakovski/Documents/Visual Code/App AstroBook/AstroBook/.env.local

# Add this line:
RESEND_API_KEY=re_your_actual_key_here
```

**Important:** Replace `re_your_actual_key_here` with your actual API key from Resend!

---

### Step 3: Add to Vercel (Production)

**Option A: Via Vercel Dashboard**
1. Go to: https://vercel.com/markonoo/astrovela-app/settings/environment-variables
2. Click "Add New"
3. Name: `RESEND_API_KEY`
4. Value: `re_your_actual_key_here`
5. Environments: Check all (Production, Preview, Development)
6. Click "Save"
7. Redeploy: Go to Deployments → Click "..." → "Redeploy"

**Option B: Via Vercel CLI**
```bash
vercel env add RESEND_API_KEY
# Paste your API key when prompted
# Select: Production, Preview, Development (all)
```

---

### Step 4: Restart Dev Server

```bash
# Stop the current dev server (Ctrl+C)
# Then restart:
npm run dev
```

---

### Step 5: Test Again

```bash
curl -X POST http://localhost:3000/api/test-email \
  -H "Content-Type: application/json" \
  -d '{"email":"marko_no@me.com"}'
```

**Expected Response:**
```json
{
  "success": true,
  "message": "Test email sent successfully",
  "emailId": "...",
  "recipient": "marko_no@me.com"
}
```

**Check your inbox:** Email should arrive in 10-30 seconds!

---

## 🔍 Verify Setup

### Check Local Environment
```bash
# This should show your API key:
grep RESEND_API_KEY .env.local
```

### Check Vercel Environment
```bash
# Login to Vercel CLI:
vercel login

# List environment variables:
vercel env ls
```

---

## 🐛 Troubleshooting

### "Failed to send email - check server logs"

**Cause:** API key is missing or invalid

**Fix:**
1. Check `.env.local` has `RESEND_API_KEY=re_...`
2. Restart dev server
3. Verify API key is correct in Resend dashboard

---

### "Invalid API key"

**Cause:** Wrong API key or typo

**Fix:**
1. Go to https://resend.com/api-keys
2. Create a new API key
3. Update `.env.local` and Vercel
4. Restart dev server

---

### Email not received

**Cause:** Email sent successfully but not delivered

**Fix:**
1. Check spam folder
2. Check Resend dashboard: https://resend.com/emails
3. Verify email address is correct
4. Try different email address (Gmail, etc.)

---

## ✅ Once Working

After you confirm the test email works:

1. ✅ Test locally (localhost)
2. ✅ Deploy to Vercel (automatic on push)
3. ✅ Test production (https://astrovela-app.vercel.app/api/test-email)
4. ✅ Make test purchase to verify end-to-end flow

---

## 📝 Summary

**What you need:**
1. Resend API key from https://resend.com/api-keys
2. Add to `.env.local` for local testing
3. Add to Vercel for production
4. Restart dev server

**Time:** 2 minutes  
**Then:** Email will work! 🎉
