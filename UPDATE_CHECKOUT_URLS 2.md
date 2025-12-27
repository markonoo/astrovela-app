# 🔄 Update Checkout URLs for Custom Domain

**Goal:** Make checkout URLs use `shop.tryastrovela.com` instead of `0w4zgg-vx.myshopify.com`

---

## 📊 Current Situation

### **How Checkout URLs Are Generated:**

Your codebase dynamically creates checkout URLs in:
- `app/api/shopify/checkout/route.ts`
- Uses: `SHOPIFY_CONFIG.SHOP_DOMAIN` from environment variables

**Current flow:**
```
User clicks "Order Now"
  ↓
API creates checkout URL: https://0w4zgg-vx.myshopify.com/cart/...
  ↓
User redirected to Shopify checkout
```

**After update:**
```
User clicks "Order Now"
  ↓
API creates checkout URL: https://shop.tryastrovela.com/cart/...
  ↓
User redirected to Shopify checkout (with custom domain!)
```

---

## ✅ Solution: Two Approaches

### **Option A: Environment Variable (Recommended)**

Add a new environment variable for the custom storefront URL:

```bash
# In .env and Vercel
NEXT_PUBLIC_SHOPIFY_STORE_URL=https://shop.tryastrovela.com
```

**Pros:**
- Easy to configure
- No code changes needed
- Can switch domains easily

**Cons:**
- Requires Vercel env update
- Need to redeploy

---

### **Option B: Code Update (Immediate)**

Update the checkout route to use custom domain when available:

**File:** `app/api/shopify/checkout/route.ts`

**Change:**
```typescript
// OLD:
checkoutUrl = `https://${SHOPIFY_CONFIG.SHOP_DOMAIN}/cart/${variantIdNumber}:${lineItem.quantity}`;

// NEW:
const storeDomain = process.env.NEXT_PUBLIC_SHOPIFY_STORE_URL 
  ? new URL(process.env.NEXT_PUBLIC_SHOPIFY_STORE_URL).hostname
  : SHOPIFY_CONFIG.SHOP_DOMAIN;
checkoutUrl = `https://${storeDomain}/cart/${variantIdNumber}:${lineItem.quantity}`;
```

**Pros:**
- Works immediately
- Fallback to myshopify domain if custom domain not set

**Cons:**
- Requires code deployment

---

## 🎯 Recommended Implementation Plan

### **Phase 1: Add Environment Variable**

1. **Local (.env):**
   ```bash
   NEXT_PUBLIC_SHOPIFY_STORE_URL=https://shop.tryastrovela.com
   ```

2. **Vercel (Production):**
   - Go to: Vercel Dashboard → Project → Settings → Environment Variables
   - Add: `NEXT_PUBLIC_SHOPIFY_STORE_URL` = `https://shop.tryastrovela.com`
   - Scope: Production, Preview, Development

### **Phase 2: Update Code**

Modify `app/api/shopify/checkout/route.ts` to use the custom domain.

### **Phase 3: Update Billing Portal**

File: `app/api/aura/billing/portal/route.ts`

Currently:
```typescript
const shopifyStoreUrl = process.env.NEXT_PUBLIC_SHOPIFY_STORE_URL || "https://tryastrovela.myshopify.com"
```

Should be:
```typescript
const shopifyStoreUrl = process.env.NEXT_PUBLIC_SHOPIFY_STORE_URL || "https://shop.tryastrovela.com"
```

---

## 📝 Files That Need Updates

### **1. Environment Files**
- `.env` (local)
- Vercel environment variables (production)

### **2. Code Files**
- `app/api/shopify/checkout/route.ts` - Main checkout URL generation
- `app/api/aura/billing/portal/route.ts` - Billing portal URL
- `utils/shopify-config.ts` - Add custom domain config (optional)

### **3. Documentation Files** (optional)
- `ENV_TEMPLATE.md`
- `VERCEL_ENV_CHECKLIST.md`
- `SHOPIFY_SETUP_COMPLETE.md`

---

## 🧪 Testing Plan

After implementing changes:

### **Test 1: Checkout URL**
1. Go to: `https://tryastrovela.com/pricing`
2. Select "astrovela app"
3. Click "Order Now"
4. **Verify:** URL shows `shop.tryastrovela.com` (not `0w4zgg-vx.myshopify.com`)

### **Test 2: Billing Portal**
1. Log into Aura app
2. Go to: Settings → Billing
3. Click "Manage Subscription"
4. **Verify:** Redirects to `shop.tryastrovela.com/account`

### **Test 3: Complete Purchase**
1. Add product to cart
2. Go through checkout
3. Complete test purchase
4. **Verify:** All URLs use custom domain

---

## ⚠️ Important Notes

### **Timing:**
- **Wait for Shopify domain verification** before updating code
- If you update code before Shopify is ready, checkouts will fail
- Test in development first

### **Fallback:**
- Keep the myshopify domain as fallback
- This ensures checkout works even if custom domain has issues

### **API Calls:**
- API calls to Shopify Admin/Storefront APIs still use `0w4zgg-vx.myshopify.com`
- Only customer-facing checkout URLs should use custom domain

---

## 🚀 Ready to Implement?

Once you've confirmed the domain is connected in Shopify Admin:
1. I'll update the environment variables
2. I'll modify the code files
3. I'll commit and push to GitHub
4. Vercel will auto-deploy
5. We'll test the checkout flow

**Status Check:**
- [ ] DNS configured in IONOS ✅
- [ ] Domain connected in Shopify Admin (waiting for you)
- [ ] SSL certificate active in Shopify (after domain connected)
- [ ] Ready to update codebase

Let me know when the domain is verified in Shopify, and I'll proceed with the code updates!
