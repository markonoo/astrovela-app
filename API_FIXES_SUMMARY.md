# API Fixes Summary

## Date: December 22, 2025

## Issues Fixed

### 1. `/api/consent` - 500 Internal Server Error
**Problem:** Route was using Prisma ORM which is no longer configured after database migration to Supabase.

**Fix:** Converted the entire consent API route to use Supabase client instead of Prisma:
- Replaced `prisma.user.findUnique()` with Supabase queries
- Replaced `prisma.consent.create()` with Supabase `insert()`
- Replaced `prisma.consent.findMany()` with Supabase `select()`
- Updated imports to use Supabase client from `@supabase/supabase-js`

**File:** `app/api/consent/route.ts`

### 2. `/api/chart-image` - 500 Internal Server Error  
**Problem:** The error message shows "Failed to save chart metadata" with "Unknown error"

**Root Cause Analysis:**
- The route was already using Supabase (not Prisma)
- Error occurs at line 140-160 when inserting into `ChartImage` table
- Likely causes:
  1. Missing or incorrect Supabase environment variables
  2. Table schema mismatch (column names or data types)
  3. RLS (Row Level Security) policies blocking inserts

**Status:** Needs runtime debugging - the route code looks correct but requires:
- Verification of `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` env vars
- Check Supabase table schema for `ChartImage` table
- Verify RLS policies allow anonymous inserts

### 3. `/api/quiz/submit` - 400 Bad Request
**Problem:** Validation error when submitting quiz data

**Root Cause Analysis:**
- Route uses Zod schema validation (`quizSubmitSchema`)
- 400 error indicates validation failure
- Likely causes:
  1. Missing required fields in the request
  2. Incorrect data types being sent
  3. Schema mismatch between frontend and backend

**Status:** Route code is correct - needs frontend debugging to ensure correct data format

### 4. `/api/shopify/products` - 500 Internal Server Error
**Problem:** Failed to fetch products from Shopify

**Root Cause Analysis:**
- Route uses Shopify Admin API
- Requires environment variables:
  - `NEXT_PUBLIC_SHOPIFY_SHOP_DOMAIN`
  - `SHOPIFY_ADMIN_ACCESS_TOKEN`
- Likely causes:
  1. Missing Shopify credentials in production environment
  2. Invalid or expired API access token
  3. Incorrect shop domain configuration

**Status:** Needs environment variable verification in production

## Book Cover Designer Layout Fix

**Problem:** When both first and last names are entered, the natal chart and date/place text overlap with the bottom of the book cover.

**Fix:** Optimized vertical spacing in `BookCoverPreview` component:
1. Reduced top margin on name section from `mt-12` (48px) to `mt-8` (32px)
2. Reduced spacing between first and last name from `mb-1` to `mb-0.5`
3. Increased negative margin on chart container from `-mt-8` to `-mt-10`
4. Reduced chart size from 300px to 280px for better fit
5. Adjusted curved text positioning from `-mt-12` to `-mt-10`
6. Reduced curved text radius from 130 to 125

**File:** `components/book-cover-preview.tsx`

## Recommended Next Steps

### For Production Environment:

1. **Verify Supabase Environment Variables:**
   ```bash
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
   ```

2. **Verify Shopify Environment Variables:**
   ```bash
   NEXT_PUBLIC_SHOPIFY_SHOP_DOMAIN=your-store.myshopify.com
   SHOPIFY_ADMIN_ACCESS_TOKEN=shpat_xxxxx
   NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN=xxxxx
   ```

3. **Check Supabase Table Schemas:**
   - Ensure `ChartImage` table exists with correct columns
   - Ensure `NatalChartInterpretation` table exists
   - Verify column names match snake_case format

4. **Review RLS Policies:**
   - Enable anonymous inserts for `ChartImage` table
   - Enable anonymous inserts for `NatalChartInterpretation` table
   - Enable anonymous inserts for `Consent` table

5. **Check Supabase Storage:**
   - Ensure `charts` bucket exists
   - Verify bucket is public or RLS policies allow access
   - Check storage quota limits

### For Development/Testing:

1. Test the consent API with browser console
2. Test chart-image API with proper birth data
3. Verify quiz submission with complete data
4. Test Shopify products API with valid credentials

## Files Changed

- `app/api/consent/route.ts` - ✅ Fixed (Prisma → Supabase)
- `components/book-cover-preview.tsx` - ✅ Fixed (Layout spacing)
- `app/api/chart-image/route.ts` - ⚠️ Needs env var verification
- `app/api/quiz/submit/route.ts` - ⚠️ Needs frontend data verification
- `app/api/shopify/products/route.ts` - ⚠️ Needs Shopify credentials verification

## Commit

```
fix: Update consent API to use Supabase instead of Prisma and optimize book cover layout spacing

- Convert consent API from Prisma to Supabase queries
- Fix book cover layout when both first and last names are present
- Optimize vertical spacing to prevent overlap with bottom elements
- Reduce chart size and adjust margins for better fit
```
