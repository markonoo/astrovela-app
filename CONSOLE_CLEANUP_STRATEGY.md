# Console.log Cleanup Strategy

**Total Statements:** 334 across 70 files  
**Estimated Time:** 2-3 hours  
**Status:** In Progress

---

## 📋 Breakdown by Category

### Phase 1: API Routes (Priority: CRITICAL)
**Files:** 21 files in `app/api/*`  
**Statements:** ~50  
**Why First:** Production APIs should never have console.logs

**Files to Clean:**
- `app/api/test-email/route.ts` (1)
- `app/api/test-zodiac-insert/route.ts` (9)
- `app/api/test-session-tracking/route.ts` (9)
- `app/api/test-quiz-responses/route.ts` (8)
- `app/api/test-bundle-checkout/route.ts` (4)
- `app/api/test-shopify/route.ts` (1)
- `app/api/test-storage-migration/route.ts` (4)
- `app/api/session-merge/route.ts` (6)
- And more...

---

### Phase 2: Quiz Components (Priority: HIGH)
**Files:** ~10 files in `components/quiz/*`  
**Statements:** ~10  
**Why:** User-facing, critical flow

**Files to Clean:**
- `components/quiz/detailed-natal-chart.tsx` (4)
- `components/quiz/personalized-landing.tsx` (1)
- `components/quiz/email-collection.tsx` (1)
- `components/quiz/enhanced-book-cover.tsx` (1)
- `components/quiz/combined-birth-details.tsx` (1)
- `components/quiz/daily-horoscope.tsx` (1)

---

### Phase 3: Utilities (Priority: HIGH)
**Files:** ~15 files in `utils/*`  
**Statements:** ~100  
**Why:** Core functionality, used everywhere

**Files to Clean:**
- `utils/marketing-tracking.ts` (23)
- `utils/session-merge.ts` (15)
- `utils/storage-migration.ts` (17)
- `utils/debug-helpers.ts` (10)
- `utils/error-monitoring.ts` (8)
- `utils/performance.ts` (6)
- `utils/safe-storage.ts` (6)
- `utils/chart-utils.ts` (5)
- `utils/logger.ts` (5)
- `utils/fallback-chart.ts` (4)
- `utils/storage.ts` (4)
- `utils/shopify-bundle-discounts.ts` (3)
- `utils/environment.ts` (3)
- And more...

---

### Phase 4: Services (Priority: MEDIUM)
**Files:** ~5 files in `services/*`  
**Statements:** ~10  

**Files to Clean:**
- `services/astrology-service.ts` (6)
- `services/document-maker/components/sections/ContentRenderer.tsx` (1)
- `services/document-maker/lib/content.ts` (1)
- `services/document-maker/app/report/page.tsx` (1)

---

### Phase 5: Components (Priority: MEDIUM)
**Files:** ~10 files in `components/*`  
**Statements:** ~30  

**Files to Clean:**
- `components/book-cover-designer.tsx` (5)
- `components/example-book/premium-book-cover.tsx` (5)
- `components/example-book/example-book-cover.tsx` (9)
- `components/book/book-cover.tsx` (2)
- `components/document-maker/sections/ContentRenderer.tsx` (1)
- And more...

---

### Phase 6: App Pages (Priority: MEDIUM)
**Files:** ~10 files in `app/*`  
**Statements:** ~50  

**Files to Clean:**
- `app/dashboard/monitoring/page.tsx` (24)
- `app/pricing/page.tsx` (18)
- `app/quiz/[step]/page.tsx` (3)
- `app/debug/page.tsx` (4)
- `app/hard-reset/page.tsx` (2)
- `app/reset-quiz/page.tsx` (2)
- `app/thank-you/page.tsx` (2)
- And more...

---

### Phase 7: Scripts & Misc (Priority: LOW)
**Files:** ~10 files  
**Statements:** ~50  

**Files to Clean:**
- `scripts/setup-admin-password.ts` (14)
- `scripts/check-env-vars.ts` (31)
- `lib/email-service.ts` (3)
- `lib/recovery-codes.ts` (4)
- `lib/storage-security.ts` (2)
- `lib/document-maker/content.ts` (1)
- And more...

---

## 🎯 Replacement Strategy

### Mapping Rules:

**Development/Debug Logs:**
```typescript
// BEFORE:
console.log("User data:", userData);

// AFTER:
logger.debug("User data", { userData });
```

**Informational Logs:**
```typescript
// BEFORE:
console.log("Starting process...");

// AFTER:
logger.info("Starting process");
```

**Warnings:**
```typescript
// BEFORE:
console.warn("Missing field:", field);

// AFTER:
logger.warn("Missing field", { field });
```

**Errors:**
```typescript
// BEFORE:
console.error("API failed:", error);

// AFTER:
logger.error("API failed", error);
```

**API-Specific:**
```typescript
// BEFORE:
console.log("[API] Processing request");

// AFTER:
logger.api("endpoint-name", "Processing request");
```

**Security Events:**
```typescript
// BEFORE:
console.log("Invalid login attempt");

// AFTER:
logger.security("Invalid login attempt", { context });
```

---

## ⚠️ Special Cases

### 1. Test Files
**Keep console.log in:**
- `scripts/check-env-vars.ts` - CLI script
- `scripts/setup-admin-password.ts` - CLI script
- Test endpoints that are for debugging

**Reason:** These are meant to output to console

### 2. Logger Utility Itself
**Keep console.* in:**
- `utils/logger.ts` - It's the logger implementation

### 3. Error Boundaries
**Be careful with:**
- Error handling code
- Make sure errors still get logged

---

## 🧪 Testing Strategy

After each phase:
1. Run `npm run build` - Check for TypeScript errors
2. Check imports are added
3. Spot-check a few files manually

After all phases:
1. Full build test
2. Test quiz flow
3. Test API endpoints
4. Check error logging still works

---

## 📊 Progress Tracking

- [ ] Phase 1: API Routes (50 statements)
- [ ] Phase 2: Quiz Components (10 statements)
- [ ] Phase 3: Utilities (100 statements)
- [ ] Phase 4: Services (10 statements)
- [ ] Phase 5: Components (30 statements)
- [ ] Phase 6: App Pages (50 statements)
- [ ] Phase 7: Scripts & Misc (50 statements)
- [ ] Phase 8: Build verification
- [ ] Phase 9: Testing
- [ ] Phase 10: Commit & deploy

**Total:** 300 statements (excluding test scripts)

---

## 🎯 Success Criteria

- ✅ All production code uses logger utility
- ✅ No console.log/error/warn in production files
- ✅ Build passes without errors
- ✅ Critical flows still work
- ✅ Error logging still functional
- ✅ Code committed and deployed

---

**Starting Phase 1: API Routes...**
