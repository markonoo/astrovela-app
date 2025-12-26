# 🌐 Shopify Custom Domain Setup - Complete Guide

**Status:** DNS configured in IONOS ✅  
**Next:** Connect domain in Shopify Admin

---

## ✅ What You've Already Done

1. ✅ Added CNAME record in IONOS:
   - `shop` → `shops.myshopify.com`
2. ✅ DNS is propagating (10-30 minutes)

---

## 🔧 Step-by-Step: Connect Domain in Shopify

### **Step 1: Access Shopify Admin**

1. Go to: https://0w4zgg-vx.myshopify.com/admin
2. Or: https://admin.shopify.com/store/0w4zgg-vx
3. Log in with your Shopify credentials

---

### **Step 2: Navigate to Domains**

1. Click: **Settings** (bottom left, gear icon ⚙️)
2. Click: **Domains** (in the left sidebar)
3. You should see your current domain: `0w4zgg-vx.myshopify.com`

---

### **Step 3: Connect Your Custom Domain**

1. Click: **"Connect existing domain"** button
2. In the popup, enter: `shop.tryastrovela.com`
3. Click: **"Next"** or **"Verify connection"**

---

### **Step 4: DNS Verification**

Shopify will now check your DNS records:

**If verification succeeds:**
- ✅ You'll see a green checkmark
- ✅ Domain status: "Connected"
- ✅ SSL certificate will be automatically provisioned (takes 5-10 minutes)

**If verification fails:**
- ⏳ Wait 10-15 more minutes for DNS propagation
- 🔄 Click "Retry verification"
- 🔍 Double-check IONOS DNS record:
  - Type: `CNAME`
  - Host: `shop`
  - Value: `shops.myshopify.com`

---

### **Step 5: Make Primary Domain (Recommended)**

Once connected:

1. Find `shop.tryastrovela.com` in your domains list
2. Click the **"..."** (three dots) next to it
3. Select: **"Make primary"**
4. Confirm the change

**Why make it primary?**
- All checkout links will use `shop.tryastrovela.com`
- Better branding for customers
- Professional appearance

---

### **Step 6: Wait for SSL Certificate**

After connecting:
- Shopify automatically provisions an SSL certificate
- This takes 5-10 minutes
- Status will show: "SSL pending" → "SSL active"
- Once active, your store will be accessible at: `https://shop.tryastrovela.com`

---

## 🧪 Testing After Setup

### **Test 1: Visit the Domain**
```
https://shop.tryastrovela.com
```
Should show your Shopify store (or redirect to a product/checkout)

### **Test 2: Check SSL**
- Look for the padlock 🔒 in the browser
- Click it to verify certificate is issued by Shopify

### **Test 3: Test Checkout Flow**
1. Go to: `https://tryastrovela.com/pricing`
2. Select a product
3. Click "Order Now"
4. Verify checkout URL shows: `shop.tryastrovela.com`

---

## 📋 Shopify Admin Screenshots Guide

### **What You'll See:**

#### **Before connecting:**
```
┌─────────────────────────────────────────────────────┐
│ Domains                                             │
├─────────────────────────────────────────────────────┤
│ Primary domain                                      │
│ 0w4zgg-vx.myshopify.com                            │
│                                                     │
│ [+ Connect existing domain]                         │
└─────────────────────────────────────────────────────┘
```

#### **After connecting:**
```
┌─────────────────────────────────────────────────────┐
│ Domains                                             │
├─────────────────────────────────────────────────────┤
│ Primary domain                                      │
│ shop.tryastrovela.com                    [Primary] │
│ SSL: Active ✅                                      │
│                                                     │
│ Other domains                                       │
│ 0w4zgg-vx.myshopify.com                            │
│                                                     │
│ [+ Connect existing domain]                         │
└─────────────────────────────────────────────────────┘
```

---

## ⚠️ Troubleshooting

### **Problem: "Domain not found" or "DNS verification failed"**

**Solution:**
1. Check DNS propagation: https://dnschecker.org/#CNAME/shop.tryastrovela.com
2. Verify IONOS record is correct:
   - Must be `shops.myshopify.com` (with 's')
   - No `http://` or `https://`
   - No trailing `/`
3. Wait 30 minutes and try again
4. Clear browser cache

---

### **Problem: "This domain is already connected to another store"**

**Solution:**
- You may have previously connected this domain
- Contact Shopify support to release it
- Or use a different subdomain: `store.tryastrovela.com`

---

### **Problem: SSL certificate not activating**

**Solution:**
- Wait up to 24 hours (usually 10 minutes)
- Ensure DNS is fully propagated
- Check Shopify status page: https://www.shopifystatus.com/
- Contact Shopify support if it takes longer than 24 hours

---

### **Problem: Redirects to wrong domain**

**Solution:**
- Make sure you set `shop.tryastrovela.com` as **Primary**
- Clear browser cookies and cache
- Test in incognito/private mode

---

## 🔄 What Happens After Domain is Connected

### **Automatic Changes:**

1. **Checkout URLs** will use: `shop.tryastrovela.com`
2. **SSL certificate** will be issued automatically
3. **Old domain** (`0w4zgg-vx.myshopify.com`) will still work but redirect
4. **Email notifications** from Shopify will use new domain

### **Manual Changes Needed:**

You'll need to update your codebase to use the new domain for checkout redirects. I'll create a script for this next.

---

## 📞 Need Help?

### **Shopify Support:**
- Chat: Available in Shopify Admin (bottom right)
- Email: support@shopify.com
- Phone: 1-888-746-7439

### **Common Support Request:**
> "I'm trying to connect my custom domain shop.tryastrovela.com to my Shopify store. I've added the CNAME record in my DNS, but verification is failing. Can you help?"

---

## ✅ Completion Checklist

After completing all steps, verify:

- [ ] Logged into Shopify Admin
- [ ] Navigated to Settings → Domains
- [ ] Clicked "Connect existing domain"
- [ ] Entered: `shop.tryastrovela.com`
- [ ] DNS verification passed ✅
- [ ] Domain shows as "Connected"
- [ ] Made domain "Primary" (recommended)
- [ ] SSL certificate status: "Active" ✅
- [ ] Tested: `https://shop.tryastrovela.com` loads
- [ ] Tested: SSL padlock appears in browser
- [ ] Ready to update codebase checkout URLs

---

## 🚀 Next Steps

Once the domain is connected in Shopify:

1. ✅ Domain is live at `shop.tryastrovela.com`
2. 🔄 Update codebase to use new checkout URLs
3. 🧪 Test full purchase flow
4. 📧 Update any hardcoded Shopify URLs in emails/docs

I'll create the codebase update script next!

---

**Estimated Time:** 10-15 minutes (+ DNS propagation wait)
