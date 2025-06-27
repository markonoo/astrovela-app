# 🛍️ Shopify Integration Setup Guide for AstroBook

## Overview

This guide will help you set up your new Shopify store integration with the AstroBook application, including comprehensive monitoring, analytics, and e-commerce functionality.

## 🎯 Features Implemented

✅ **Shopify Analytics Monitoring**
- Revenue tracking (today, week, month)
- Conversion rate analytics
- Product inventory monitoring
- Real-time connection status

✅ **Enhanced Monitoring Dashboard**
- Shopify e-commerce metrics
- Store health checks
- Performance monitoring
- Error tracking

✅ **Comprehensive Shopify Services**
- Admin API integration
- Storefront API integration
- Product management
- Order tracking

## 🚀 Quick Start

### 1. Create Your Shopify Store

1. Go to [Shopify Partners](https://partners.shopify.com/) or [Shopify](https://www.shopify.com/)
2. Create a new store for AstroBook
3. Choose a store name like `astrobook-store` or `your-brand-astrobook`
4. Complete the store setup

### 2. Generate API Credentials

#### Storefront API (Public - for customer operations)
1. In your Shopify admin, go to **Settings > Apps and sales channels**
2. Click **Develop apps for your store**
3. Create a new app called "AstroBook Frontend"
4. Configure **Storefront API access**:
   - `unauthenticated_read_product_listings`
   - `unauthenticated_read_products`
   - `unauthenticated_read_checkouts`
   - `unauthenticated_write_checkouts`
5. Generate and save the **Storefront access token**

#### Admin API (Private - for backend operations)
1. In the same app, configure **Admin API access**:
   - `read_products`
   - `write_products`
   - `read_orders`
   - `write_orders`
   - `read_customers`
   - `write_customers`
   - `read_analytics`
2. Generate and save the **Admin API access token**

### 3. Configure Environment Variables

Create or update your `.env.local` file with:

```env
# Shopify Store Configuration
NEXT_PUBLIC_SHOPIFY_SHOP_DOMAIN=your-store-name.myshopify.com

# Storefront API (Public)
NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN=your_storefront_token_here

# Admin API (Keep Secret!)
SHOPIFY_ADMIN_ACCESS_TOKEN=your_admin_token_here

# Webhook Secret (Optional - for webhooks)
SHOPIFY_WEBHOOK_SECRET=your_webhook_secret_here
```

### 4. Test the Integration

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Visit the monitoring dashboard:
   ```
   http://localhost:3000/dashboard/monitoring
   ```

3. Check the Shopify section - you should see:
   - ✅ Connected status
   - Store information
   - Analytics data
   - Product inventory

## 📊 Monitoring Dashboard Features

The enhanced monitoring dashboard now includes:

### 🛍️ Shopify E-commerce Overview
- **Revenue Analytics**: Today, week, month tracking
- **Conversion Analytics**: Visitors, checkouts, completion rates
- **Product Inventory**: Total, published, out-of-stock counts
- **Connection Status**: Real-time health checks

### 🔌 Connection Health Checks
- Endpoint configuration validation
- Access token verification  
- Network connectivity testing
- Authentication status

### 📈 Real-time Metrics
- Response time monitoring
- Auto-refresh every 30 seconds
- Error handling and fallbacks
- Performance tracking

## 🛠️ API Endpoints

The integration provides these new endpoints:

### Analytics
```
GET /api/shopify/analytics
```
Returns comprehensive analytics data including revenue, orders, conversion rates.

### Connection Status  
```
GET /api/shopify/connection
```
Tests and returns Shopify connection health and store information.

## 🏗️ Architecture

### Enhanced Shopify Configuration (`utils/shopify-config.ts`)
- Centralized configuration management
- Multiple API version support
- Environment-based settings
- Validation helpers

### Comprehensive Services (`services/enhanced-shopify-service.ts`)
- **ShopifyAdminService**: Backend operations
- **ShopifyStorefrontService**: Customer-facing operations
- Full TypeScript support
- Error handling and monitoring

## 🎨 Products Setup

### 1. Create Your First Product

1. In Shopify admin, go to **Products > Add product**
2. Create an "Astrology Book" product:
   - **Title**: "Personalized Astrology Book"
   - **Description**: "Get your custom astrology book with natal chart"
   - **Price**: Set your desired price (e.g., $29.99)
   - **SKU**: "ASTRO-BOOK-001"
3. Add product images
4. Set availability and inventory
5. Save and publish

### 2. Configure Product Variants (Optional)

Create variants for different book types:
- **Basic Astrology Report** ($19.99)
- **Premium Astrology Book** ($29.99)
- **Deluxe Package with Charts** ($39.99)

## 🔄 Webhooks Setup (Optional)

For real-time updates, set up webhooks:

1. In your Shopify app settings, go to **Webhooks**
2. Add webhook endpoints:
   - `https://yourdomain.com/api/shopify/webhooks`
3. Subscribe to events:
   - `orders/create`
   - `orders/paid`
   - `orders/fulfilled`
   - `products/create`
   - `products/update`

## 🚀 Production Deployment

### 1. Environment Variables

Update your production environment with:
- Live Shopify store domain
- Production API tokens
- Webhook secrets
- Error monitoring keys

### 2. Domain Configuration

1. Set up your custom domain in Shopify
2. Update environment variables
3. Configure SSL certificates
4. Test all endpoints

### 3. Monitoring Setup

The monitoring dashboard will automatically work in production with:
- Real-time analytics
- Error tracking
- Performance monitoring
- Security monitoring

## 🔍 Testing

### Manual Testing
1. Visit `/dashboard/monitoring`
2. Check Shopify section status
3. Verify all metrics are loading
4. Test API endpoints directly

### API Testing
```bash
# Test connection
curl https://yourdomain.com/api/shopify/connection

# Test analytics  
curl https://yourdomain.com/api/shopify/analytics
```

## 🛡️ Security Best Practices

1. **API Tokens**: Never commit tokens to Git
2. **Environment Variables**: Use `.env.local` for local development
3. **Admin API**: Keep admin tokens server-side only
4. **Webhooks**: Verify webhook signatures
5. **HTTPS**: Always use HTTPS in production

## 📚 Next Steps

1. **Product Integration**: Connect quiz results to product purchases
2. **Custom Checkout**: Implement custom checkout flow
3. **Order Management**: Add order tracking and fulfillment
4. **Customer Accounts**: Integrate customer management
5. **Analytics Enhancement**: Add custom analytics tracking

## 🆘 Troubleshooting

### Common Issues

**404 Errors from Shopify API**
- Verify your store domain is correct
- Check API tokens are valid
- Ensure app permissions are set correctly

**Connection Timeouts**
- Check network connectivity
- Verify API endpoints
- Check rate limiting

**Permission Errors**
- Verify app has required scopes
- Check token permissions
- Ensure tokens are not expired

### Debug Mode

Enable debug logging by setting:
```env
DEBUG=true
VERBOSE_LOGGING=true
```

## 📞 Support

For issues with this integration:
1. Check the monitoring dashboard for connection status
2. Review console logs for errors
3. Test API endpoints directly
4. Verify environment configuration

---

**Your Shopify integration is now ready! 🎉**

Visit `/dashboard/monitoring` to see your store analytics in real-time. 