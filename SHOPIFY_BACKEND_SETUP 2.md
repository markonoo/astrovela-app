# Shopify Backend Setup Instructions

This guide walks you through updating your Shopify store with the correct images, logo, and pricing.

## ✅ Code Changes Completed

The following have been updated in the codebase:
- ✅ App subscription price changed from €30.99 to **€14.99/month** across all files
- ✅ Quiz testimonial z-index fixed (stars now render behind image)
- ✅ Astrologer image replaced with quiz testimonial image
- ✅ All pushed to GitHub (commit: `f32f5f6c`)

---

## 🛒 Shopify Backend Tasks (Requires Admin Access)

### 1. Upload Product Images

**Location:** Shopify Admin → Products → [Select Product] → Media

Upload the same images used in your funnel:

#### **Paperback Book Product**
- Image: `/public/images/products/paperback-book.jpg`
- Product handle: `paperback-book`
- Upload as primary product image

#### **Ebook Product**
- Image: `/public/images/products/ebook-digital.jpg`
- Product handle: `ebook`
- Upload as primary product image

#### **App Subscription Product**
- Image: `/public/images/products/app-interface.jpg`
- Product handle: `app-subscription`
- Upload as primary product image

---

### 2. Upload AstroVela Logo

**Option A: Store Logo (Header)**
1. Go to: **Shopify Admin → Online Store → Themes → Customize**
2. Click **Header** section
3. Upload logo image (use your AstroVela logo file)
4. Adjust logo size/positioning as needed
5. Click **Save**

**Option B: Favicon**
1. Go to: **Shopify Admin → Online Store → Themes → Customize**
2. Click **Theme settings** → **Logo**
3. Upload favicon (square version of logo, recommended 32x32 or 64x64px)
4. Click **Save**

**Option C: Checkout Branding**
1. Go to: **Shopify Admin → Settings → Checkout**
2. Scroll to **Branding** section
3. Upload logo
4. Click **Save**

---

### 3. Update App Subscription Pricing to €14.99/month

**CRITICAL: This must match the codebase pricing!**

#### Step 1: Update Product Price
1. Go to: **Shopify Admin → Products**
2. Find: **"AstroVela Aura - Monthly Subscription"** (handle: `app-subscription`)
3. Click to edit
4. Update **Price** to: `€14.99` (or `14.99 EUR`)
5. Click **Save**

#### Step 2: Verify Subscription Plan (If using Shopify Subscriptions App)

If you're using a subscription app (e.g., Recharge, Seal Subscriptions, or native Shopify Subscriptions):

1. Go to: **Apps → [Your Subscription App]**
2. Find the subscription plan for AstroVela Aura
3. Verify/Update:
   - **Billing Frequency:** Every 1 month
   - **Price:** €14.99
   - **Trial Period:** 1 month (30 days) FREE
   - **Trial then:** €14.99/month until canceled
4. Click **Save**

#### Step 3: Check Shopify Checkout Settings
1. Go to: **Shopify Admin → Settings → Checkout**
2. Verify that subscriptions are enabled
3. Test the checkout flow:
   - Add the app subscription to cart
   - Verify price shows as **€14.99** (not €30.99 or €9.99)
   - Verify trial terms are correct

---

### 4. Verify Pricing Consistency

After making changes, test the entire flow:

#### Test Checklist:
- [ ] Visit your storefront pricing page: `tryastrovela.com/pricing`
- [ ] Select "astrovela app" option
- [ ] Price should display: **€14.99** (not €30.99)
- [ ] Click "Order Now"
- [ ] In Shopify checkout, verify:
  - [ ] Product name: "AstroVela Aura - Monthly Subscription"
  - [ ] Price: **€14.99** (or shows as FREE for 1-month trial, then €14.99)
  - [ ] Product image displays correctly
  - [ ] AstroVela logo/branding visible
- [ ] Complete a test purchase (or use Shopify test orders)
- [ ] Verify email confirmation shows €14.99/month pricing

---

## 🔗 Quick Reference Links

- **Shopify Admin:** `https://[your-store].myshopify.com/admin`
- **Products:** `https://[your-store].myshopify.com/admin/products`
- **Checkout Settings:** `https://[your-store].myshopify.com/admin/settings/checkout`
- **Online Store Themes:** `https://[your-store].myshopify.com/admin/themes`

---

## 📸 Image Files Location

All product images are stored in:
```
/Users/mnovakovski/Documents/Visual Code/App AstroBook/AstroBook/public/images/
```

- `/public/images/products/paperback-book.jpg`
- `/public/images/products/ebook-digital.jpg`
- `/public/images/products/app-interface.jpg`

---

## ⚠️ Important Notes

1. **Pricing Mismatch:** Your screenshot showed the app costing €30.99 on the pricing page but €9.99 in cart. The codebase is now updated to €14.99 everywhere. **You MUST update Shopify to match €14.99.**

2. **Subscription Setup:** Make sure your subscription app (if using one) is configured for:
   - 30-day FREE trial
   - Then €14.99/month recurring
   - Customer can cancel anytime

3. **Testing:** Always test the full checkout flow after making changes to ensure pricing displays correctly.

4. **Image Formats:** Shopify accepts JPG, PNG, GIF, WEBP. Your images are JPG/JPEG format which is perfect.

---

## ✅ When Complete

Once you've finished these Shopify backend tasks:
1. Test the full purchase flow from pricing page → checkout → confirmation
2. Verify all images display correctly
3. Verify pricing is €14.99 everywhere
4. Share any issues or confirm completion

The codebase is fully updated and pushed to GitHub - Vercel will auto-deploy these changes!
