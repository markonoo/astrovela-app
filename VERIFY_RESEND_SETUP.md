# 🔍 Verify Resend Setup

## Current Status: ❌ Email Sending Failed

The API endpoint is working, but email sending is failing. This means the `RESEND_API_KEY` is either:
- Not set in Vercel
- Invalid/incorrect
- Not picked up by the deployment yet

---

## ✅ Step-by-Step Verification

### 1. Verify API Key in Resend Dashboard

**Go to:** https://resend.com/api-keys

**Check:**
- [ ] You have an API key created
- [ ] The key starts with `re_`
- [ ] The key is not deleted or expired

**If no key exists:**
1. Click "Create API Key"
2. Name: "AstroVela Production"
3. Copy the key (you'll only see it once!)

---

### 2. Verify API Key in Vercel

**Go to:** https://vercel.com → Your Project → Settings → Environment Variables

**Check:**
- [ ] `RESEND_API_KEY` exists in the list
- [ ] Value shows as `***` (hidden)
- [ ] All environments are checked (Production, Preview, Development)

**If missing or wrong:**
1. Click "Add New" (or "Edit" if exists)
2. Name: `RESEND_API_KEY`
3. Value: `re_your_actual_key_from_resend`
4. Check all environments
5. Click "Save"

---

### 3. Force Redeploy in Vercel

**Important:** After adding/updating environment variables, you MUST redeploy!

**Go to:** https://vercel.com → Your Project → Deployments

**Steps:**
1. Find the latest deployment (top of list)
2. Click the **"..."** (three dots) menu
3. Click **"Redeploy"**
4. Wait 30-60 seconds for deployment to complete
5. Look for green checkmark ✅

---

### 4. Test Again

After redeployment completes:

```bash
curl -X POST https://astrovela-app.vercel.app/api/test-email \
  -H "Content-Type: application/json" \
  -d '{"email":"marko_no@me.com"}'
```

**Expected Success Response:**
```json
{
  "success": true,
  "message": "Test email sent successfully",
  "emailId": "abc123...",
  "recipient": "marko_no@me.com"
}
```

**If still failing:**
```json
{
  "error": "Failed to send email - check server logs"
}
```

---

## 🐛 If Still Not Working

### Check Vercel Logs

**Go to:** https://vercel.com → Your Project → Deployments → Latest → Logs

**Look for:**
- `Error in sendCompanionAppWelcomeEmail`
- `Failed to send welcome email`
- `Resend` or `API key` errors

**Common errors:**
- `Invalid API key` → Wrong key, regenerate in Resend
- `Unauthorized` → API key not set or incorrect
- `Rate limit exceeded` → Too many test emails (wait 1 minute)

---

### Verify API Key Format

**Correct format:**
```
RESEND_API_KEY=re_123abc456def789ghi
```

**Incorrect formats:**
```
RESEND_API_KEY="re_123abc456def789ghi"  ❌ (no quotes)
RESEND_API_KEY=your_key_here            ❌ (placeholder)
RESEND_API_KEY=                         ❌ (empty)
```

---

### Test API Key Directly

You can test if your API key works using curl:

```bash
curl -X POST https://api.resend.com/emails \
  -H "Authorization: Bearer re_YOUR_ACTUAL_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "from": "onboarding@resend.dev",
    "to": "marko_no@me.com",
    "subject": "Test from curl",
    "html": "<p>Testing API key</p>"
  }'
```

**If this works:** API key is valid, issue is with Vercel config  
**If this fails:** API key is invalid, regenerate in Resend

---

## 📋 Checklist

Before asking for help, verify:

- [ ] Resend account is active
- [ ] API key exists in Resend dashboard
- [ ] API key copied correctly (no spaces, complete)
- [ ] API key added to Vercel environment variables
- [ ] All environments selected (Production, Preview, Development)
- [ ] Redeployed after adding environment variable
- [ ] Waited for deployment to complete (green checkmark)
- [ ] Tested after deployment completed

---

## ✅ Once Working

You should see:

1. **Success response** from curl command
2. **Email in inbox** at marko_no@me.com (check spam folder)
3. **Email from:** `onboarding@resend.dev`
4. **Subject:** "Welcome to AstroVela Companion - Your 30-Day Free Trial Starts Now! 🌟"

---

## 🎯 Next Steps After Email Works

1. ✅ Verify email looks good on mobile/desktop
2. ✅ Click the CTA button to test link
3. ✅ Make a test Shopify purchase to verify full flow
4. ✅ Tomorrow: Verify custom domain in Resend
5. ✅ Update `from` address to `hello@tryastrovela.com`

---

**Need help?** Share:
1. Screenshot of Vercel environment variables page
2. Screenshot of Resend API keys page
3. Vercel deployment logs (if available)
