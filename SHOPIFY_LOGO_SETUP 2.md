# 🎨 Add AstroVela Logo to Shopify Cart/Checkout

**Goal:** Display the AstroVela logo at the top of Shopify cart and checkout pages  
**Status:** Requires Shopify Admin access (Theme API has limitations)

---

## 📋 What You Need

### **Logo Files Available:**
1. **SVG Logo:** `/public/favicon.svg` (vector, scalable)
2. **Icon Component:** Uses AstroVela sun icon
3. **Colors:** Gold (#f7c800) on navy (#28293d) background

---

## 🎯 Step-by-Step Guide

### **Option 1: Upload Logo via Shopify Admin** (Recommended)

#### **Step 1: Access Theme Settings**
1. Go to: https://0w4zgg-vx.myshopify.com/admin
2. Click: **Online Store** (left sidebar)
3. Click: **Themes**
4. Click: **Customize** on your active theme

#### **Step 2: Add Logo to Header**
1. In the theme editor, click: **Header** section
2. Look for: **Logo** or **Logo image** setting
3. Click: **Select image**
4. Upload: `/public/favicon.svg` from your computer
5. Adjust size if needed (recommended: 40-60px height)
6. Click: **Save**

#### **Step 3: Configure Checkout Branding**
1. Go back to Shopify Admin
2. Navigate to: **Settings** → **Checkout**
3. Scroll to: **Checkout branding** section
4. Click: **Customize**
5. Upload logo in the **Logo** section
6. Adjust size and positioning
7. Click: **Save**

---

### **Option 2: Add Logo via Theme Code** (Advanced)

If you have access to theme files:

#### **Step 1: Upload Logo File**
1. Go to: **Online Store** → **Themes**
2. Click: **Actions** → **Edit code**
3. In the **Assets** folder, click: **Add a new asset**
4. Upload: `favicon.svg` or create `astrovela-logo.svg`

#### **Step 2: Edit Header Template**
1. Find: `sections/header.liquid` or `snippets/header.liquid`
2. Add this code in the header section:

```liquid
<div class="header__logo">
  <a href="/" class="logo-link">
    <img 
      src="{{ 'astrovela-logo.svg' | asset_url }}" 
      alt="AstroVela" 
      class="logo-image"
      style="height: 50px; width: auto;"
    />
  </a>
</div>
```

#### **Step 3: Add CSS Styling**
Add to `assets/theme.css` or `assets/custom.css`:

```css
.header__logo {
  display: flex;
  align-items: center;
  padding: 10px 0;
}

.logo-image {
  max-height: 50px;
  width: auto;
  object-fit: contain;
}

/* Checkout page specific */
.checkout-header .logo {
  max-height: 60px;
}
```

---

### **Option 3: Shopify Plus Checkout Customization**

If you have Shopify Plus:

1. Go to: **Settings** → **Checkout**
2. Scroll to: **Checkout language**
3. Click: **Customize checkout**
4. Add custom CSS and HTML for logo
5. Upload logo to **Files** section first

---

## 🎨 Logo Specifications

### **Recommended Sizes:**
- **Header:** 40-60px height
- **Checkout:** 50-80px height
- **Mobile:** 30-40px height
- **Format:** SVG (scalable) or PNG (high-res)

### **Logo File to Use:**
```
Source: /public/favicon.svg
Colors: Gold sun (#f7c800) on transparent
Size: Scalable SVG
```

---

## 📍 Where Logo Should Appear

### **1. Store Header** (All Pages)
```
┌─────────────────────────────────────────┐
│  ☀️ AstroVela        [Cart] [Account]  │
└─────────────────────────────────────────┘
```

### **2. Cart Page**
```
┌─────────────────────────────────────────┐
│  ☀️ AstroVela                           │
│                                         │
│  Your Cart                              │
│  ├─ Product 1                           │
│  └─ Product 2                           │
└─────────────────────────────────────────┘
```

### **3. Checkout Page**
```
┌─────────────────────────────────────────┐
│  ☀️ AstroVela                           │
│                                         │
│  Checkout                               │
│  ├─ Contact Information                 │
│  ├─ Shipping                            │
│  └─ Payment                             │
└─────────────────────────────────────────┘
```

---

## 🔍 Current Status Check

### **Domain Configuration:** ✅
- CNAME record: `shop` → `shops.myshopify.com`
- Configuration is correct
- Ready for custom domain connection

### **What's Working:**
- ✅ Product images uploaded
- ✅ Pricing correct (ebook: €29.99, app: €14.99)
- ✅ All products active
- ✅ Domain DNS configured

### **What Needs Manual Setup:**
- 🔴 Logo upload to Shopify theme
- 🔴 Checkout branding configuration
- ⏳ Custom domain connection (waiting for your action)

---

## 📝 Quick Checklist

- [ ] Log into Shopify Admin
- [ ] Navigate to Online Store → Themes
- [ ] Click Customize on active theme
- [ ] Go to Header section
- [ ] Upload logo image (favicon.svg)
- [ ] Adjust logo size (40-60px)
- [ ] Save theme changes
- [ ] Go to Settings → Checkout
- [ ] Customize checkout branding
- [ ] Upload logo for checkout
- [ ] Save checkout settings
- [ ] Test cart page
- [ ] Test checkout page
- [ ] Verify logo displays correctly

---

## 🎯 Expected Result

After setup, customers will see:
- **AstroVela logo** in store header
- **Branded checkout** with logo
- **Professional appearance** throughout
- **Consistent branding** from website to checkout

---

## ⚠️ Important Notes

### **Why Manual Upload?**
- Shopify's Theme API has limited access for security
- Logo/branding requires theme editor or admin access
- Cannot be fully automated via API
- One-time setup (5 minutes)

### **Logo File Location:**
```
Local: /public/favicon.svg
Format: SVG (scalable vector)
Colors: Gold (#f7c800) sun icon
Background: Transparent
```

### **Alternative:**
If you can't access theme settings, you can:
1. Contact Shopify support
2. Hire a Shopify expert
3. Use a different theme with easier logo upload

---

## 📞 Need Help?

### **Shopify Support:**
- Chat: Available in Shopify Admin (bottom right)
- Email: support@shopify.com
- Phone: 1-888-746-7439

### **Common Request:**
> "I need to add my company logo to the header and checkout pages. Can you help me upload it?"

---

## ✅ Summary

**Completed:**
- ✅ Ebook pricing fixed (€29.99)
- ✅ Testimonial name updated (Emily L.)
- ✅ Domain configuration verified (shops.myshopify.com)
- ✅ All product images uploaded
- ✅ Pricing consistent across platform

**Requires Your Action:**
- 🔴 Upload logo via Shopify Admin (5 minutes)
- 🔴 Configure checkout branding
- ⏳ Connect custom domain (shop.tryastrovela.com)

---

**The logo file is ready - just needs to be uploaded through Shopify Admin!** 🚀
