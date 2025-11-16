# Remaining TODOs - AstroVela Project

## 🎯 Current Status: ~85% Complete

### ✅ Recently Completed
- ✅ Apple-style design system implementation
- ✅ Mobile responsiveness fixes
- ✅ Safe area insets for iOS
- ✅ Variable alignment across codebase
- ✅ Quiz-to-report data linkage
- ✅ PDF generation with cover colors
- ✅ Design system documentation

---

## 🔴 HIGH PRIORITY (Before Production)

### 1. Code Cleanup & Logging
**Status:** 🟡 In Progress  
**Priority:** HIGH  
**Estimated Time:** 2-3 hours

- [ ] **Remove all `console.log` statements** (50+ found)
  - Replace with `logger.info()` or `logger.error()` from `utils/logger.ts`
  - Files with most console.log:
    - `components/quiz/quiz-controller.tsx`
    - `contexts/quiz-context.tsx`
    - `app/api/astrology/route.ts`
    - Various API routes
- [ ] **Remove debug code from production**
  - Remove `devLog()` and `devError()` calls in production builds
  - Use environment checks: `if (process.env.NODE_ENV === 'development')`
- [ ] **Clean up commented code**
  - Remove old backup files (`.backup`, `.backup2`)
  - Remove commented-out code blocks

**Files to Update:**
- `components/quiz/quiz-controller.tsx`
- `contexts/quiz-context.tsx`
- `app/api/astrology/route.ts`
- `app/api/chart-image/route.ts`
- `services/astrology-api-service.ts`

---

### 2. Post‑Purchase Email Service Implementation
**Status:** ❌ Not Started  
**Priority:** HIGH  
**Estimated Time:** 2-3 hours

- [ ] **Create email sending service (`lib/email-service.ts`)**
  - Use Resend (recommended) or SendGrid
  - Function: `sendCompanionAppWelcomeEmail(...)` as per `EMAIL_NOTIFICATION_SPEC.md`
- [ ] **Add environment keys**
  - `RESEND_API_KEY` or `SENDGRID_API_KEY`, and from-address
- [ ] **Wire into Shopify webhook**
  - Call after entitlement creation in `app/api/shopify/webhook/route.ts`
- [ ] **Test end-to-end**
  - Make test purchase → verify email receipt

**References:**
- `EMAIL_NOTIFICATION_SPEC.md`
- `email-templates/` (7 HTML templates + guide)
- `ENV_TEMPLATE.md` (email keys included)

---

### 3. Environment Variables Template
**Status:** ✅ Complete  
**Priority:** HIGH  
**Estimated Time:** 30 minutes (consumer action: copy template → `.env.local`)

- [x] **Template available**
  - `ENV_TEMPLATE.md` documents all required variables with sources
- [x] **Environment validation present**
  - `utils/environment.ts` validates critical variables in production
- [ ] **Create `.env.local` from template**
  - Populate values locally and in deployment platform

**Template Should Include:**
```env
# Database
DATABASE_URL=postgresql://...

# Supabase
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=

# Astrology API
ASTROLOGY_API_USER_ID=
ASTROLOGY_API_API_KEY=

# Shopify
SHOPIFY_STORE_DOMAIN=
SHOPIFY_STOREFRONT_ACCESS_TOKEN=
SHOPIFY_ADMIN_ACCESS_TOKEN=

# Stripe (Optional)
STRIPE_SECRET_KEY=
STRIPE_PUBLISHABLE_KEY=

# Sentry (Optional)
SENTRY_DSN=
SENTRY_AUTH_TOKEN=
```

---

### 4. Testing Setup
**Status:** ❌ Not Started  
**Priority:** MEDIUM  
**Estimated Time:** 4-6 hours

- [ ] **Configure test framework**
  - Set up Jest or Vitest
  - Configure React Testing Library
  - Set up test coverage reporting
- [ ] **Add critical path tests**
  - Authentication flow tests
  - Entitlement check tests
  - API route tests
  - Component rendering tests
- [ ] **Integration tests**
  - End-to-end user flow tests
  - Webhook handler tests
  - Database operation tests

**Test Files to Create:**
- `__tests__/api/companion/entitlement.test.ts`
- `__tests__/lib/entitlements.test.ts`
- `__tests__/components/companion/paywall.test.tsx`
- `__tests__/utils/birth-date.test.ts`

---

## 🟡 MEDIUM PRIORITY (Nice to Have)

### 5. Documentation
**Status:** 🟡 Partial  
**Priority:** MEDIUM  
**Estimated Time:** 2-3 hours

- [ ] **Add JSDoc comments to public APIs**
  - Document all API routes in `app/api/`
  - Add parameter descriptions
  - Document return types
- [ ] **Document complex functions**
  - `lib/entitlements.ts` functions
  - `utils/session-merge.ts` functions
  - `lib/document-maker/personalize.ts` functions
- [ ] **Add inline comments for business logic**
  - Quiz flow logic
  - Entitlement calculation logic
  - PDF generation logic

**Files Needing Documentation:**
- `app/api/companion/*/route.ts` (all API routes)
- `lib/entitlements.ts`
- `utils/session-merge.ts`
- `lib/document-maker/personalize.ts`

---

### 6. Code Refactoring
**Status:** 🟡 Partial  
**Priority:** MEDIUM  
**Estimated Time:** 3-4 hours

- [ ] **Split large files**
  - `app/pricing/page.tsx` (very large, needs splitting)
  - `components/quiz/quiz-controller.tsx` (complex, could be split)
- [ ] **Extract duplicate code**
  - Loading state components (repeated across pages)
  - Card components (similar patterns)
  - Form validation logic
- [ ] **Improve code organization**
  - Group related utilities
  - Organize component folders better

**Files to Refactor:**
- `app/pricing/page.tsx` (~1000+ lines)
- `components/quiz/quiz-controller.tsx` (~800+ lines)

---

### 7. Transit API Enhancement
**Status:** ⚠️ Simplified (Hardcoded)  
**Priority:** LOW  
**Estimated Time:** 2-3 hours

- [ ] **Implement real transit calculations**
  - Currently hardcoded in `app/api/companion/today/route.ts`
  - Research AstrologyAPI transit endpoints
  - Or implement fallback calculation logic
- [ ] **Add transit data caching**
  - Cache daily transit data (changes once per day)
  - Reduce API calls

**Current State:**
- `app/api/companion/today/route.ts` has hardcoded transit data
- Comment says "This would come from transit API"
- Needs real implementation or better fallback

---

## 🟢 LOW PRIORITY (Future Enhancements)

### 8. Performance Optimizations
**Status:** 🟡 Partial  
**Priority:** LOW  
**Estimated Time:** 2-3 hours

- [ ] **Bundle size analysis**
  - Run `ANALYZE=true npm run build`
  - Identify large dependencies
  - Optimize imports
- [ ] **Code splitting**
  - Lazy load companion app routes
  - Lazy load heavy components
- [ ] **Image optimization**
  - Remove `unoptimized: true` flags
  - Use Next.js Image component properly
- [ ] **Caching headers**
  - Add proper cache headers for static assets
  - Implement API response caching

---

### 9. Advanced Features (Phase 2)
**Status:** 📋 Documented  
**Priority:** LOW  
**Estimated Time:** Varies

- [ ] **Real-time transits**
  - Live transit calculations
  - Push notifications for important transits
- [ ] **Email digests**
  - Weekly summary emails
  - Daily horoscope emails
- [ ] **Social features**
  - Share insights
  - Compare charts with friends
- [ ] **Calendar integration**
  - Add astrology events to calendar
  - Best timing reminders
- [ ] **Advanced compatibility**
  - Synastry charts
  - Composite charts
  - Full compatibility reports

**See:** `COMPANION_APP_IMPLEMENTATION.md` lines 169-184

---

### 10. Monitoring & Analytics
**Status:** ✅ Infrastructure Ready  
**Priority:** LOW  
**Estimated Time:** 1-2 hours

- [ ] **Configure Sentry**
  - Currently disabled due to React version conflicts
  - Resolve conflicts and enable
  - Set up error alerting
- [ ] **Set up external monitoring**
  - UptimeRobot or Pingdom
  - Monitor API endpoints
  - Set up alerts

**Current State:**
- Error monitoring infrastructure exists (`utils/error-monitoring.ts`)
- Sentry config files exist but disabled
- Monitoring dashboard exists (`/dashboard/monitoring`)

---

### 11. Accessibility
**Status:** 🟡 Partial  
**Priority:** LOW  
**Estimated Time:** 2-3 hours

- [ ] **Run accessibility audit**
  - Use Lighthouse accessibility audit
  - Fix identified issues
- [ ] **Test with screen readers**
  - Test navigation
  - Test forms
  - Test interactive elements
- [ ] **Verify keyboard navigation**
  - All interactive elements accessible via keyboard
  - Focus indicators visible
- [ ] **Check color contrast**
  - Verify WCAG AA compliance
  - Fix any contrast issues

---

## 📋 Deployment Checklist Items

### Pre-Deployment
- [ ] **Run database migration**
  - Test migration on staging
  - Verify rollback procedure
- [ ] **Set environment variables**
  - Configure all production variables
  - Verify no fallback values
- [ ] **Configure Shopify webhook**
  - Set up webhook endpoint
  - Test webhook signature verification
- [ ] **Test purchase flow**
  - End-to-end purchase test
  - Verify entitlement creation
  - Verify email notifications

### Post-Deployment
- [ ] **Monitor error rates**
  - Check Sentry/error logs
  - Monitor API errors
- [ ] **Monitor performance**
  - Check page load times
  - Monitor API response times
  - Check mobile performance
- [ ] **User acceptance testing**
  - Test all user flows
  - Verify mobile experience
  - Test subscription flow

---

## 🎯 Summary

### Critical (Must Do Before Production)
1. ✅ **Design System** - COMPLETE
2. ✅ **Mobile Responsiveness** - COMPLETE
3. ⚠️ **Code Cleanup** - Remove console.log (50+ instances)
4. ⚠️ **Email Service Implementation** - Post‑purchase welcome email via webhook
5. ✅ **Environment Template** - COMPLETE (`ENV_TEMPLATE.md` + validation present)

### Important (Should Do Soon)
6. 📋 **Testing Setup** - Add test framework and critical tests
7. 📋 **Documentation** - Add JSDoc comments
8. 📋 **Code Refactoring** - Split large files

### Nice to Have (Future)
9. 📋 **Transit API** - Real implementation vs hardcoded
10. 📋 **Performance** - Bundle optimization
11. 📋 **Advanced Features** - Phase 2 features

---

## 📊 Progress Tracking

**Overall Completion:** ~85%

- ✅ **Core Features:** 100% (All companion app features implemented)
- ✅ **Design & UX:** 100% (Apple-style design complete)
- ✅ **Mobile:** 100% (Fully responsive, safe areas)
- ⚠️ **Code Quality:** 70% (Needs cleanup)
- ⚠️ **Testing:** 0% (No tests yet)
- ⚠️ **Documentation:** 60% (Needs JSDoc)
- ✅ **Security:** 95% (All critical security done)

---

## 🚀 Next Immediate Steps

1. **Remove console.log statements** (2-3 hours)
   - Highest impact, quick win
   - Improves production readiness

2. **Implement post‑purchase email service** (2-3 hours)
   - Add `lib/email-service.ts` (Resend/SendGrid)
   - Wire into `app/api/shopify/webhook/route.ts`
   - Test with a sandbox purchase

3. **Create `.env.local` from `ENV_TEMPLATE.md`** (30 minutes)
   - Ensure Shopify + email keys present for local/dev

4. **Set up basic testing** (4-6 hours)
   - Critical path tests first
   - Expand later

---

**Last Updated:** 2025-11-16  
**Status:** Code cleanup in progress (~10% complete); Email service not started

## ✅ Recent Progress

### Code Cleanup (In Progress)
- ✅ **contexts/quiz-context.tsx** - Replaced 25 console.log/error statements
- ✅ **components/quiz/quiz-controller.tsx** - Replaced 9 console.log/error statements  
- ✅ **app/api/astrology/route.ts** - Replaced 10 console.log/error statements
- 📋 **Remaining:** ~73 console.log statements across 21 API route files + 25 component files

### Environment Template
- ✅ `ENV_TEMPLATE.md` created and complete (use to create `.env.local`; `.env.example` is gitignored by design)

See `CLEANUP_PROGRESS.md` for detailed progress tracking.

