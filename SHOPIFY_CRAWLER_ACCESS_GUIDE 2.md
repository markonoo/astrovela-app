# 🤖 Shopify Crawler Access Setup Guide

**Store:** 0w4zgg-vx.myshopify.com  
**Plan:** Basic  
**Purpose:** Enable external tools to crawl your Shopify store

---

## 📋 What is Crawler Access?

Crawler access allows external tools (like SEO crawlers, monitoring tools, or custom scripts) to access your Shopify store using HTTP Message Signatures. These include:

- **Signature:** Cryptographic signature for request authentication
- **Signature-Input:** Parameters used to create the signature
- **Signature-Agent:** Identifier for the crawling agent

---

## 🎯 Step-by-Step Setup

### **Method 1: Via Shopify Admin** (Recommended)

#### **Step 1: Access Settings**
1. Go to: https://0w4zgg-vx.myshopify.com/admin
2. Click: **Settings** (bottom left, gear icon)
3. Navigate to: **Apps and sales channels**

#### **Step 2: Find Crawler Access**
Look for one of these options:
- **"Crawler access"** section
- **"API access"** or **"Custom apps"**
- **"Develop apps"** (if available)

#### **Step 3: Generate Credentials**
1. Click: **"Enable crawler access"** or **"Generate credentials"**
2. Copy the three values:
   - `Signature`
   - `Signature-Input`
   - `Signature-Agent`
3. Save these securely

---

### **Method 2: Using Your Admin API Token**

You already have Admin API access! Use these credentials:

#### **Your Current Credentials:**
```bash
Store Domain: 0w4zgg-vx.myshopify.com
Access Token: [See .env file - SHOPIFY_ADMIN_ACCESS_TOKEN]
API Version: 2024-01
```

#### **For HTTP Requests:**
```bash
curl -X GET "https://0w4zgg-vx.myshopify.com/admin/api/2024-01/products.json" \
  -H "X-Shopify-Access-Token: YOUR_ADMIN_TOKEN_HERE" \
  -H "Content-Type: application/json"
```

#### **For Storefront Access:**
```bash
Store URL: https://0w4zgg-vx.myshopify.com
Storefront Token: [See .env file - SHOPIFY_STOREFRONT_ACCESS_TOKEN]
```

---

### **Method 3: For SEO Crawlers (Google, Bing)**

#### **Step 1: Remove Password Protection**
1. Go to: **Settings → Online Store → Preferences**
2. Scroll to: **Password protection**
3. Uncheck: **"Restrict access to visitors with the password"**
4. Click: **Save**

#### **Step 2: Enable Search Engine Indexing**
1. In the same page, scroll to: **Search engine listing**
2. Ensure: **"Hide your store from search engines"** is UNCHECKED
3. Click: **Save**

This allows Google and other search engines to crawl your store freely.

---

## 🔧 Using Crawler Access

### **Example 1: Fetch Products**
```bash
curl -X GET "https://0w4zgg-vx.myshopify.com/admin/api/2024-01/products.json" \
  -H "X-Shopify-Access-Token: YOUR_ADMIN_TOKEN_HERE"
```

### **Example 2: Get Shop Info**
```bash
curl -X GET "https://0w4zgg-vx.myshopify.com/admin/api/2024-01/shop.json" \
  -H "X-Shopify-Access-Token: YOUR_ADMIN_TOKEN_HERE"
```

### **Example 3: GraphQL Query**
```bash
curl -X POST "https://0w4zgg-vx.myshopify.com/admin/api/2024-01/graphql.json" \
  -H "X-Shopify-Access-Token: YOUR_ADMIN_TOKEN_HERE" \
  -H "Content-Type: application/json" \
  -d '{
    "query": "{ shop { name url } }"
  }'
```

---

## 📊 Available Endpoints

### **Admin API Endpoints:**
```
Base URL: https://0w4zgg-vx.myshopify.com/admin/api/2024-01/

Products:     /products.json
Orders:       /orders.json
Customers:    /customers.json
Shop:         /shop.json
Themes:       /themes.json
```

### **Storefront API:**
```
Base URL: https://0w4zgg-vx.myshopify.com/api/2024-01/graphql.json

Use Storefront Access Token: [See .env - SHOPIFY_STOREFRONT_ACCESS_TOKEN]
```

---

## 🔐 Security Best Practices

### **Protect Your Tokens:**
1. ✅ Never commit tokens to Git
2. ✅ Use environment variables
3. ✅ Rotate tokens periodically
4. ✅ Limit token scopes if possible

### **Current Token Storage:**
```bash
# In .env file (already configured)
SHOPIFY_ADMIN_ACCESS_TOKEN=[Your admin token]
SHOPIFY_STOREFRONT_ACCESS_TOKEN=[Your storefront token]
```

---

## 🎯 Common Use Cases

### **1. SEO Monitoring**
- Allow Google Search Console to crawl
- Enable Bing Webmaster Tools
- Use SEO tools like Screaming Frog

**Setup:** Remove password protection (Method 3)

### **2. Custom Integrations**
- Build custom apps
- Sync data with external systems
- Automate product updates

**Setup:** Use Admin API token (Method 2)

### **3. Third-Party Tools**
- Analytics platforms
- Inventory management
- Marketing automation

**Setup:** Generate app-specific credentials (Method 1)

---

## 🔍 Troubleshooting

### **Issue: "Crawler access not found"**
**Solution:**
- Crawler access might be called "API access" or "Custom apps"
- Check: Settings → Apps and sales channels → Develop apps
- Your plan (Basic) may have limited features

### **Issue: "Access denied"**
**Solution:**
- Verify your access token is correct
- Check token hasn't expired
- Ensure you have the right permissions

### **Issue: "Password protected store"**
**Solution:**
- Go to: Settings → Online Store → Preferences
- Disable password protection
- Save changes

---

## 📝 Quick Reference

### **Your Store Details:**
```
Store Name: My Store
Store URL: https://0w4zgg-vx.myshopify.com
Custom Domain: shop.tryastrovela.com (pending connection)
Plan: Basic
API Version: 2024-01
```

### **Your API Credentials:**
```
Admin Token: [See .env file - SHOPIFY_ADMIN_ACCESS_TOKEN]
Storefront Token: [See .env file - SHOPIFY_STOREFRONT_ACCESS_TOKEN]
```

### **Quick Test:**
```bash
# Test if your token works
curl "https://0w4zgg-vx.myshopify.com/admin/api/2024-01/shop.json" \
  -H "X-Shopify-Access-Token: YOUR_ADMIN_TOKEN_HERE"
```

---

## 🎓 Additional Resources

### **Shopify Documentation:**
- Admin API: https://shopify.dev/docs/api/admin
- Storefront API: https://shopify.dev/docs/api/storefront
- Authentication: https://shopify.dev/docs/apps/auth

### **Support:**
- Shopify Help Center: https://help.shopify.com/
- API Status: https://www.shopifystatus.com/
- Community: https://community.shopify.com/

---

## ✅ Summary

**What You Have:**
- ✅ Admin API access token
- ✅ Storefront API access token
- ✅ Full API access to your store
- ✅ Ability to crawl and integrate

**What You Can Do:**
- ✅ Make API requests to Shopify
- ✅ Build custom integrations
- ✅ Allow SEO crawlers (after removing password)
- ✅ Use third-party tools

**Next Steps:**
1. If you need SEO access → Remove password protection
2. If you need custom app → Use your Admin API token
3. If you need specific signatures → Check Settings → Apps

---

**Your store is ready for crawler access using the Admin API token!** 🚀

If you need help with a specific crawling use case, let me know what you're trying to accomplish.
