# AstroBook Codebase Inventory

## Overview
This document provides a comprehensive inventory of the existing AstroBook codebase before implementing the AstroVela Companion App.

## Tech Stack

### Core Framework
- **Next.js 14.2.18** (App Router)
- **React 18.3.1**
- **TypeScript 5**
- **TailwindCSS 3.4.17** (with tailwindcss-animate)

### Database & Backend
- **Prisma 6.10.1** (PostgreSQL)
- **Supabase** (@supabase/supabase-js 2.50.0)
  - Authentication (magic link)
  - Database storage
  - Client configured in `lib/supabaseClient.ts`

### External Services
- **AstrologyAPI** (json.astrologyapi.com)
  - Service: `services/astrology-api-service.ts`
  - Endpoints: natal chart, horoscopes, transits, geocoding
  - Auth: Basic Auth with USER_ID and API_KEY from env
- **Shopify**
  - Services: `services/shopify-service.tsx`, `services/enhanced-shopify-service.ts`
  - Products: ebook, paperback, app-subscription
  - Checkout: Headless checkout via `/api/shopify/checkout`
  - Subscription: Selling plans for app subscription

### UI Components
- **Radix UI** (comprehensive component library)
- **Lucide React** (icons)
- **Sonner** (toast notifications)
- **Recharts** (charts)
- Custom components in `components/` directory

### Monitoring & Analytics
- **Sentry** (@sentry/nextjs 9.32.0)
- **Vercel Analytics** (@vercel/analytics, @vercel/speed-insights)
- Custom marketing tracking in `utils/marketing-tracking.ts`

## Database Schema (Prisma)

### Models

#### User
```prisma
- id: Int (auto-increment)
- email: String (unique)
- name: String?
- createdAt: DateTime
- Relations: chartImages[], NatalChartInterpretation[], quizResponses[]
```

#### QuizResponse
```prisma
- id: String (cuid)
- email: String
- answers: Json
- birthDate: Json
- birthPlace: String?
- birthTime: String?
- firstName: String?
- lastName: String?
- gender: String?
- createdAt: DateTime
- coverDesign: String?
- session_id: String? (indexed)
- userId: Int? (FK to User, indexed)
```

#### ChartImage
```prisma
- id: String (cuid)
- userId: Int? (FK to User)
- imageUrl: String
- birthData: Json
- chartType: String?
- createdAt: DateTime
- email: String?
- session_id: String?
```

#### NatalChartInterpretation
```prisma
- id: String (UUID)
- userId: Int? (FK to User)
- chartImageId: String? (FK to ChartImage)
- session_id: String?
- planets: Json?
- houses: Json?
- ascendant: Float?
- midheaven: Float?
- vertex: Float?
- lilith: Json?
- aspects: Json?
- moon_phase_name: String?
- moon_phase_description: String?
- hemisphere_east_west: String?
- hemisphere_north_south: String?
- elements: Json?
- elements_description: String?
- modes: Json?
- modes_description: String?
- dominant_sign: Json?
- created_at: DateTime
- sun_sign: String?
- moon_sign: String?
```

## Key Features Already Implemented

### 1. Quiz Flow
- **Location**: `app/quiz/`, `contexts/quiz-context.tsx`
- Multi-step quiz collecting:
  - Birth data (date, time, place)
  - Personal info (name, email, gender)
  - Quiz answers (stored as JSON)
- Session tracking via `session_id`
- Data stored in `QuizResponse` table

### 2. Natal Chart Generation
- **Service**: `services/astrology-api-service.ts`
- **API Routes**: `/api/natal-wheel-chart`, `/api/chart-image`
- Features:
  - Fetches natal chart from AstrologyAPI
  - Generates chart images
  - Stores chart data in `ChartImage` and `NatalChartInterpretation`
- Fallback SVG charts if API fails

### 3. Book Cover Designer
- **Location**: `app/book-designer/`, `components/book-cover-designer.tsx`
- Customizable book covers
- Theme colors, icons, curved text
- Preview functionality

### 4. Purchase Flow
- **Pricing Page**: `app/pricing/page.tsx`
- **Checkout**: `services/shopify-service.tsx`, `/api/shopify/checkout`
- Products:
  - Ebook (€49.99)
  - Paperback (€55.99)
  - App Subscription (€30.99/month, with 1-month free trial)
- Bundle pricing:
  - Paperback includes free ebook + app trial
  - Ebook includes free app trial
- Shopify headless checkout integration
- Thank you page: `app/thank-you/page.tsx`

### 5. Authentication
- **Provider**: `contexts/UserContext.tsx`
- Supabase magic link authentication
- User session management
- Session merging for anonymous → registered users

### 6. Marketing & Analytics
- **Tracking**: `utils/marketing-tracking.ts`, `utils/marketing-events.ts`
- Events tracked:
  - Page views
  - Quiz completion
  - Checkout initiation
  - Purchase completion
  - Product views
- Platforms: Facebook Pixel, Google Analytics, Google Ads

## API Routes

### Existing Routes
- `/api/quiz/submit` - Submit quiz responses
- `/api/shopify/checkout` - Create Shopify checkout
- `/api/shopify/products` - Get Shopify products
- `/api/natal-wheel-chart` - Generate natal wheel chart
- `/api/chart-image` - Generate chart image
- `/api/astrology` - Astrology API wrapper
- `/api/geocode` - Geocode locations
- `/api/analytics/events` - Track analytics events
- `/api/session-merge` - Merge anonymous sessions with user accounts

## Missing Components (For Companion App)

### 1. Subscription/Entitlement Management
- ❌ No `app_entitlements` table
- ❌ No trial period tracking
- ❌ No subscription status management
- ❌ No webhook handlers for Shopify purchase completion

### 2. Companion App Features
- ❌ Daily astrology feed
- ❌ Weekly/monthly outlooks
- ❌ Zodiac encyclopedia
- ❌ Love compatibility
- ❌ Career guidance
- ❌ My Report page (linking to PDF)

### 3. Access Control
- ❌ No entitlement middleware
- ❌ No paywall component
- ❌ No trial countdown

## Data Available for Companion App

### From QuizResponse
- Email
- Birth date, time, place
- Name (first, last)
- Gender
- Quiz answers

### From NatalChartInterpretation
- Sun sign
- Moon sign
- Planets positions
- Houses
- Aspects
- Elements, modes
- Dominant sign

### From Purchase Flow
- Email (from checkout)
- Product type (ebook/paperback/app)
- Purchase date (can be tracked via Shopify webhook)

## Environment Variables Needed

### Existing
- `DATABASE_URL` - PostgreSQL connection
- `NEXT_PUBLIC_SUPABASE_URL` - Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Supabase anon key
- `USER_ID` - AstrologyAPI user ID
- `API_KEY` - AstrologyAPI key
- Shopify config (SHOPIFY_STOREFRONT_API_ENDPOINT, etc.)

### Needed for Companion App
- `SHOPIFY_WEBHOOK_SECRET` - For webhook verification
- `STRIPE_SECRET_KEY` (if using Stripe for subscriptions)
- `STRIPE_WEBHOOK_SECRET` (if using Stripe)

## File Structure

```
AstroBook/
├── app/                    # Next.js App Router pages
│   ├── api/               # API routes
│   ├── quiz/              # Quiz flow
│   ├── pricing/           # Pricing page
│   ├── book-designer/     # Book cover designer
│   └── thank-you/         # Post-purchase page
├── components/            # React components
│   ├── ui/                # Radix UI components
│   ├── quiz/              # Quiz-specific components
│   └── book-cover/        # Book cover components
├── contexts/              # React contexts
│   ├── UserContext.tsx    # User auth context
│   └── quiz-context.tsx   # Quiz state context
├── services/              # External service integrations
│   ├── astrology-api-service.ts
│   └── shopify-service.tsx
├── lib/                   # Utilities
│   ├── supabaseClient.ts
│   └── prisma.ts
├── utils/                 # Helper functions
│   ├── marketing-tracking.ts
│   └── marketing-events.ts
└── prisma/
    └── schema.prisma      # Database schema
```

## Next Steps for Companion App

1. Create `app_entitlements` table in Supabase
2. Create Shopify webhook handler for purchase → entitlement
3. Build companion app pages (Today, Weekly, Monthly, Love, Career, Report)
4. Create entitlement middleware
5. Build API endpoints for astrology content
6. Add PWA support
7. Create billing/subscription management page

