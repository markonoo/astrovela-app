# Vercel Environment Variables - Complete Checklist

**Status:** In Progress  
**Last Updated:** 2024

---

## ✅ COMPLETED

### Supabase (3/3) ✅
- ✅ `NEXT_PUBLIC_SUPABASE_URL`
- ✅ `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- ✅ `DATABASE_URL`

### Admin Security (3/3) ✅
- ✅ `ADMIN_PASSWORD_HASH`
- ✅ `ADMIN_JWT_SECRET`
- ✅ `CSRF_SECRET`

### Astrology API (2/2) ✅
- ✅ `USER_ID`
- ✅ `API_KEY`

### App Configuration (1/1) ✅
- ✅ `NEXT_PUBLIC_APP_URL`

**Total Completed: 9/9 core variables** 🎉

---

## ⚠️ PARTIALLY COMPLETED - Shopify

You mentioned "partially included" - here's what you need:

### Required Shopify Variables (7 total):

#### 1. Shop Domain
```env
NEXT_PUBLIC_SHOPIFY_SHOP_DOMAIN=your-store.myshopify.com
```
**OR (legacy format):**
```env
SHOPIFY_SHOP_URL=https://your-store.myshopify.com
```
**Status:** ❓ Check if added

---

#### 2. Storefront API Endpoint
```env
NEXT_PUBLIC_SHOPIFY_STOREFRONT_API_ENDPOINT=https://your-store.myshopify.com/api/2024-01/graphql.json
```
**Status:** ❓ Check if added

---

#### 3. Storefront Access Token
```env
NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN=your_storefront_token
```
**Status:** ❓ Check if added

---

#### 4. Admin API Access Token
```env
SHOPIFY_ADMIN_ACCESS_TOKEN=your_admin_token
```
**OR (legacy format):**
```env
SHOPIFY_ACCESS_TOKEN=your_admin_token
```
**Status:** ❓ Check if added

---

#### 5. Webhook Secret
```env
SHOPIFY_WEBHOOK_SECRET=your_webhook_secret
```
**Status:** ❓ Check if added

---

#### 6. Store URL (for customer portal)
```env
NEXT_PUBLIC_SHOPIFY_STORE_URL=https://your-store.myshopify.com
```
**Status:** ❓ Check if added

---

#### 7. Selling Plan ID (for subscriptions)
```env
SHOPIFY_APP_SELLING_PLAN_ID=gid://shopify/SellingPlan/your-id
```
**Status:** ❓ Check if added

---

## 🔵 OPTIONAL - Security Enhancements

### Recommended for Production:
```env
# Supabase Service Role (for admin operations)
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

# Data Encryption
ENCRYPT_SENSITIVE_DATA=true
DATA_ENCRYPTION_KEY=generate_with_openssl_rand_hex_32

# Storage Security
USE_SIGNED_URLS=false  # Set to true if buckets are private

# Age Verification
REQUIRE_AGE_VERIFICATION=true
```

---

## ⏳ AFTER FIRST DEPLOY

### 2FA Setup (MANDATORY in production):
```env
ADMIN_2FA_SECRET=get_from_admin_2fa_setup_page
```

**Steps:**
1. Deploy to Vercel with current variables
2. Visit: `https://your-app.vercel.app/admin/2fa-setup`
3. Login with your admin password
4. Scan QR code with authenticator app
5. Copy the `ADMIN_2FA_SECRET` shown
6. Add to Vercel environment variables
7. Redeploy

**⚠️ IMPORTANT:** The app will throw an error in production if `ADMIN_2FA_SECRET` is not set!

---

## 📊 Deployment Readiness

| Feature | Status | Can Deploy? |
|---------|--------|-------------|
| Database | ✅ Ready | Yes |
| Admin Panel | ✅ Ready | Yes (need 2FA after) |
| Astrology Charts | ✅ Ready | Yes |
| Quiz & Reports | ✅ Ready | Yes |
| Payments/Checkout | ⚠️ Partial | Depends on Shopify |
| Full Production | ⏳ Pending | Need 2FA + Shopify |

---

## 🎯 What You Can Do Right Now

### Option 1: Deploy for Testing (Recommended)
**Current Status:** You can deploy NOW!
- ✅ All core features work
- ✅ Admin panel works (will need 2FA setup after)
- ✅ Natal charts generate
- ✅ Quiz works
- ✅ Reports generate
- ⚠️ Checkout may not work (depends on Shopify completion)

**Action:** Deploy to Vercel, then setup 2FA

---

### Option 2: Complete Shopify First
**If you want full payment functionality:**
1. Verify all 7 Shopify variables are in Vercel
2. Test Shopify connection
3. Then deploy

---

## 🔍 How to Check What's Missing

### In Vercel Dashboard:
1. Go to your project
2. Settings → Environment Variables
3. Compare against this checklist

### Quick Check - Count Your Variables:
- **Core (9):** Should all be ✅
- **Shopify (7):** Check which ones you added
- **2FA (1):** Will add after first deploy
- **Optional:** Add as needed

---

## 🚀 Recommended Next Steps

### Step 1: Verify Shopify Variables
Check your Vercel dashboard and mark which Shopify variables you've added:
- [ ] `NEXT_PUBLIC_SHOPIFY_SHOP_DOMAIN` or `SHOPIFY_SHOP_URL`
- [ ] `NEXT_PUBLIC_SHOPIFY_STOREFRONT_API_ENDPOINT`
- [ ] `NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN`
- [ ] `SHOPIFY_ADMIN_ACCESS_TOKEN` or `SHOPIFY_ACCESS_TOKEN`
- [ ] `SHOPIFY_WEBHOOK_SECRET`
- [ ] `NEXT_PUBLIC_SHOPIFY_STORE_URL`
- [ ] `SHOPIFY_APP_SELLING_PLAN_ID`

### Step 2: Deploy to Vercel
```bash
# If deploying via CLI:
vercel --prod

# Or push to main branch if auto-deploy is enabled
```

### Step 3: Setup 2FA
1. Visit: `https://your-app.vercel.app/admin/2fa-setup`
2. Complete setup
3. Add `ADMIN_2FA_SECRET` to Vercel
4. Redeploy

### Step 4: Generate Recovery Codes
1. Login to admin panel
2. Visit: `/admin/recovery-codes`
3. Generate and save codes securely

---

## 📝 Environment Variable Format Reference

### Shopify Variables - Where to Find:

**Shopify Admin → Apps → Develop apps → Your App:**

1. **Shop Domain:**
   - Format: `your-store.myshopify.com`
   - Found: In your Shopify admin URL

2. **Storefront API:**
   - Click "Storefront API" tab
   - Copy "Access token" → `NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN`
   - Endpoint format: `https://your-store.myshopify.com/api/2024-01/graphql.json`

3. **Admin API:**
   - Click "Admin API" tab
   - Copy "Access token" → `SHOPIFY_ADMIN_ACCESS_TOKEN`

4. **Webhook Secret:**
   - Settings → Notifications → Webhooks
   - When creating webhook, copy the secret

5. **Selling Plan ID:**
   - Products → Your subscription product → Selling plans
   - Copy the GID (format: `gid://shopify/SellingPlan/123456789`)

---

## ✅ Final Checklist Before Going Live

- [ ] All core variables added (9/9)
- [ ] Shopify variables verified (7/7 if using payments)
- [ ] Deployed to Vercel successfully
- [ ] 2FA configured and `ADMIN_2FA_SECRET` added
- [ ] Recovery codes generated and saved
- [ ] Tested admin login with 2FA
- [ ] Tested quiz submission
- [ ] Tested natal chart generation
- [ ] Tested checkout flow (if using Shopify)
- [ ] Verified all features work in production

---

## 🆘 Troubleshooting

### Build Fails:
- Check Vercel build logs
- Verify all `NEXT_PUBLIC_*` variables are set
- Ensure `DATABASE_URL` is correct

### Admin Login Fails:
- Verify `ADMIN_PASSWORD_HASH`, `ADMIN_JWT_SECRET`, `CSRF_SECRET` are set
- Check if `ADMIN_2FA_SECRET` is required (production only)

### Charts Don't Generate:
- Verify `USER_ID` and `API_KEY` are set
- Check AstrologyAPI.com account status

### Checkout Fails:
- Verify all 7 Shopify variables are set correctly
- Test Shopify connection at `/api/shopify/connection`

---

**Status:** Ready to deploy for testing! 🚀  
**Next Action:** Verify Shopify variables, then deploy to Vercel








