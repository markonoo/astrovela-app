# Environment Variables Template

This file documents all required environment variables for the AstroVela Companion App.

**Note:** Create a `.env.local` file in the root directory with these variables (do not commit `.env.local` to git).

---

## Required Environment Variables

### Database
```env
DATABASE_URL=postgresql://user:password@host:port/database
```
**Source:** Supabase project settings → Database → Connection string  
**Required:** Yes

---

### Supabase
```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
```
**Source:** Supabase project settings → API  
**Required:** Yes

---

### AstrologyAPI
```env
USER_ID=your_astrology_api_user_id
API_KEY=your_astrology_api_key
```
**Source:** https://astrologyapi.com → Dashboard  
**Required:** Yes (for real astrology data, fallback works without)

---

### Shopify - Storefront API (Public)
```env
NEXT_PUBLIC_SHOPIFY_STOREFRONT_API_ENDPOINT=https://your-store.myshopify.com/api/2024-01/graphql.json
NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN=your_storefront_access_token
```
**Source:** Shopify Admin → Apps → Develop apps → Storefront API  
**Required:** Yes

---

### Shopify - Admin API (Private)
```env
SHOPIFY_ADMIN_API_ACCESS_TOKEN=your_admin_api_access_token
SHOPIFY_SHOP_DOMAIN=your-store.myshopify.com
```
**Source:** Shopify Admin → Apps → Develop apps → Admin API  
**Required:** Yes (for webhook processing)

---

### Shopify - App Subscription
```env
SHOPIFY_APP_SELLING_PLAN_ID=gid://shopify/SellingPlan/your-selling-plan-id
```
**Source:** Shopify Admin → Products → App Subscription → Selling Plans  
**Required:** Yes (for app subscription checkout)

---

### Shopify - Webhook
```env
SHOPIFY_WEBHOOK_SECRET=your_webhook_secret_here
```
**Source:** Shopify Admin → Settings → Notifications → Webhooks → Create webhook → Copy secret  
**Required:** Yes (for webhook verification)

---

### Shopify - Store URL
```env
NEXT_PUBLIC_SHOPIFY_STORE_URL=https://your-store.myshopify.com
```
**Source:** Your Shopify store URL  
**Required:** Yes (for customer portal links)

---

## Optional Environment Variables

### Stripe (Phase 2 - Optional)
```env
STRIPE_SECRET_KEY=sk_live_...
STRIPE_PUBLISHABLE_KEY=pk_live_...
STRIPE_WEBHOOK_SECRET=whsec_...
```
**Source:** Stripe Dashboard → Developers → API keys  
**Required:** No (MVP uses Shopify customer portal)

---

### Email Service (Recommended)
```env
# Option 1: Resend (Recommended)
RESEND_API_KEY=re_...
RESEND_FROM_EMAIL=noreply@astrovela.com

# Option 2: SendGrid
SENDGRID_API_KEY=SG....
SENDGRID_FROM_EMAIL=noreply@astrovela.com
```
**Source:** Resend.com or SendGrid.com dashboard  
**Required:** No (can use placeholder for MVP)

---

### Monitoring (Optional)
```env
SENTRY_DSN=https://...
SENTRY_AUTH_TOKEN=...
```
**Source:** Sentry.io project settings  
**Required:** No (already configured if using Sentry)

---

### Application URL
```env
# Development
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Production (set in Vercel/deployment platform)
NEXT_PUBLIC_APP_URL=https://astrovela.com
```
**Required:** Yes (for email links, redirects)

---

## Environment Variable Validation

The app validates required environment variables in production:

**File:** `utils/environment.ts`

**Required for Production:**
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `DATABASE_URL`
- `USER_ID`
- `API_KEY`

**Optional (with fallbacks):**
- Shopify variables (app works without, but checkout won't function)
- Email service (can use placeholder)
- Stripe (not required for MVP)

---

## Setup Instructions

1. Copy this template to `.env.local`
2. Fill in your actual values
3. Never commit `.env.local` to git
4. For production, set variables in your deployment platform (Vercel, etc.)

---

## Testing Environment Variables

Test your configuration:

```bash
# Check AstrologyAPI
curl http://localhost:3000/api/astrology-debug

# Check Shopify connection
curl http://localhost:3000/api/shopify/connection

# Check Supabase (requires auth)
# Test via login flow
```

---

**Last Updated:** During implementation review  
**Status:** Complete template

