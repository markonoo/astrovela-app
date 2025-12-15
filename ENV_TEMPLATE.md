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

### Email Service (IMPLEMENTED - Resend)
```env
# Resend API Key (REQUIRED for email functionality)
RESEND_API_KEY=re_...
```
**Source:** https://resend.com → API Keys  
**Required:** Yes (for welcome emails after purchase)  
**Status:** ✅ Implemented

**Setup Instructions:**
1. Sign up at https://resend.com
2. Generate API key in dashboard
3. Add to `.env.local` and Vercel environment variables
4. Verify custom domain (astrovela.com) in Resend dashboard
5. Until domain verified, emails send from `onboarding@resend.dev`
6. After verification, update `lib/email-service.ts` to use `hello@astrovela.com`

**Testing:**
```bash
# Test email sending
curl -X POST http://localhost:3000/api/test-email \
  -H "Content-Type: application/json" \
  -d '{"email":"your-email@gmail.com"}'
```

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

### Admin Authentication
```env
# Admin password (plain text - for backward compatibility)
# DEPRECATED: Use ADMIN_PASSWORD_HASH instead
ADMIN_PASSWORD=your_secure_admin_password_here

# Admin password hash (recommended - use setup script to generate)
# Run: npm run setup-admin-password
ADMIN_PASSWORD_HASH=bcrypt_hash_here

# Admin JWT secret for session tokens (generate random 32+ character string)
ADMIN_JWT_SECRET=generate-random-32-character-secret-here

# CSRF secret for token generation (generate random 32+ character string)
CSRF_SECRET=generate-random-32-character-secret-here

# Admin 2FA Secret (REQUIRED in production)
# Generate via /admin/2fa-setup endpoint, then add here
ADMIN_2FA_SECRET=your_2fa_secret_key_here
```
**Source:** 
- Password Hash: Run `npm run setup-admin-password` to generate
- JWT Secret: Generate random string (32+ characters)
- CSRF Secret: Generate random string (32+ characters)
- 2FA Secret: Visit `/admin/2fa-setup` to generate

**Required:** 
- `ADMIN_PASSWORD` or `ADMIN_PASSWORD_HASH`: Yes (hash recommended)
- `ADMIN_JWT_SECRET`: Yes (for secure sessions)
- `CSRF_SECRET`: Yes (for CSRF protection)
- `ADMIN_2FA_SECRET`: **YES in production** (optional in development)

**Security Notes:**
- Use `ADMIN_PASSWORD_HASH` instead of plain `ADMIN_PASSWORD` in production
- Generate strong random secrets for JWT and CSRF (32+ characters)
- **2FA is MANDATORY in production** - The app will throw an error if not configured
- Recovery codes are automatically generated after 2FA setup
- Store recovery codes securely (password manager recommended)
- Never commit these values to git
- Rotate secrets periodically
- Use different secrets for development and production

**2FA Setup Process:**
1. Set `ADMIN_PASSWORD` or `ADMIN_PASSWORD_HASH` in environment
2. Visit `/admin/2fa-setup` (requires password authentication)
3. Scan QR code with Google Authenticator, Authy, or similar app
4. Save the generated `ADMIN_2FA_SECRET` to your environment variables
5. Generate recovery codes at `/admin/recovery-codes`
6. Store recovery codes securely (each code is single-use)
7. Redeploy with `ADMIN_2FA_SECRET` set

**Recovery Codes:**
- Generated at `/admin/recovery-codes` (requires admin authentication)
- 10 codes per generation, each single-use
- Use when 2FA device is unavailable
- Regenerate when running low (< 3 remaining)
- Stored securely hashed in database

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
- `SUPABASE_SERVICE_ROLE_KEY` - For admin operations (user deletion, signed URLs)
- `USE_SIGNED_URLS` - Set to "true" when storage buckets are private (default: "false")
- `ENCRYPT_SENSITIVE_DATA` - Set to "true" to encrypt birth data (default: "false")
- `DATA_ENCRYPTION_KEY` - 32-byte hex key for AES-256 encryption (generate with: `openssl rand -hex 32`)
- `CRON_SECRET` - Secret for cron job authentication (optional)
- `REQUIRE_AGE_VERIFICATION` - Set to "false" to disable age checks (default: "true")

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


