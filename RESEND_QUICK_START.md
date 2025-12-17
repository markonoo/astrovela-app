# Resend Email - Quick Start Guide 🚀

**Status:** ✅ Implemented & Deployed  
**Time to Test:** 2 minutes

---

## 🧪 Test It Now

### Option 1: Test Endpoint (Fastest)

```bash
# Replace YOUR_EMAIL with your actual email
curl -X POST https://astrovela.com/api/test-email \
  -H "Content-Type: application/json" \
  -d '{"email":"YOUR_EMAIL@gmail.com"}'
```

**Expected:** Email arrives in 10-30 seconds

---

### Option 2: Local Test

```bash
# Start dev server
npm run dev

# In another terminal:
curl -X POST http://localhost:3000/api/test-email \
  -H "Content-Type: application/json" \
  -d '{"email":"YOUR_EMAIL@gmail.com"}'
```

---

## 📧 What the Email Looks Like

**Subject:** Welcome to AstroVela Companion - Your 30-Day Free Trial Starts Now! 🌟

**From:** `onboarding@resend.dev` (until domain verified)

**Content:**
- Personalized greeting
- Purchase confirmation
- 30-day trial announcement
- Feature list
- CTA button to access app
- Trial expiration date

---

## 🔧 Tomorrow: Domain Verification

### Step 1: Add DNS Records

Go to your domain registrar (GoDaddy, Cloudflare, etc.) and add:

**TXT Record:**
```
Name: _resend
Value: [Get from Resend dashboard]
```

**MX Record:**
```
Name: @
Value: feedback-smtp.resend.com
Priority: 10
```

### Step 2: Verify in Resend

1. Go to https://resend.com/domains
2. Click "Add Domain"
3. Enter: `astrovela.com`
4. Copy DNS records shown
5. Add to your domain registrar
6. Wait 5-10 minutes
7. Click "Verify" in Resend

### Step 3: Update Code

In `lib/email-service.ts`, line 24:

```typescript
// Change from:
from: 'onboarding@resend.dev',

// To:
from: 'AstroVela <hello@tryastrovela.com>',
```

Then commit and push:
```bash
git add lib/email-service.ts
git commit -m "Update email from address to verified domain"
git push
```

---

## 📊 Monitor Emails

**Resend Dashboard:** https://resend.com/emails

Check:
- ✅ Delivery status
- 📊 Open rates
- 🖱️ Click rates
- ⚠️ Bounces/spam

---

## 🐛 Troubleshooting

**Email not received?**
1. Check spam folder
2. Check Resend dashboard
3. Verify API key in Vercel

**Test endpoint not working?**
1. Check Vercel deployment
2. Verify `RESEND_API_KEY` environment variable
3. Check Vercel logs

---

## ✅ Checklist

- [x] Resend account created
- [x] API key added to Vercel
- [x] Code deployed
- [ ] Test email sent (do this now!)
- [ ] Domain verified (tomorrow)
- [ ] Update from address (tomorrow)
- [ ] Test with real purchase (after domain)

---

**Ready?** Run the test command above! 🚀
