# Debugging 405 Error - Simplified Route Deployed

## Current Status

**Deployed:** Simplified version of `/api/admin/auth` without database dependencies

## What Was Changed

### Removed (Temporarily)
- ❌ Audit logging (`logAdminLogin`, `logAdminLogout`)
- ❌ Recovery codes (`verifyRecoveryCode`, `getRemainingRecoveryCodesCount`)
- ❌ All Prisma database calls

### Kept (Core Functionality)
- ✅ Password verification
- ✅ 2FA/TOTP verification
- ✅ Rate limiting
- ✅ Session management
- ✅ JWT tokens

## Testing Instructions

### Wait for Vercel Deployment
1. Wait 2-3 minutes for Vercel to deploy
2. Check deployment status at: https://vercel.com/dashboard

### Test the Simplified Route

**Test 1: Check if POST works**
```bash
curl -X POST https://astrovela-app.vercel.app/api/admin/auth \
  -H "Content-Type: application/json" \
  -d '{"password":"AdminSecure2024!","step":"password"}'
```

**Expected Response (if working):**
```json
{
  "requiresTwoFactor": true,
  "message": "Please enter your 2FA code"
}
```

**Test 2: Full Login Flow**
1. Go to: https://astrovela-app.vercel.app/olivialimon-admin/login
2. Enter password: `AdminSecure2024!`
3. Enter 6-digit code from authenticator app
4. Should successfully log in

## Possible Outcomes

### ✅ If It Works Now
**Problem:** Database imports were causing the route to crash on load
**Solution:** 
- Re-enable database features one by one
- Ensure Prisma lazy-loading works correctly
- Verify `DATABASE_URL` is set in Vercel

### ❌ If It Still Shows 405
**Problem:** Something else is wrong (not database-related)
**Next Steps:**
1. Check if `/api/test-post` works (also deployed)
2. Check Vercel build logs for errors
3. Check Vercel function logs for runtime errors
4. Verify Next.js version compatibility

### ⚠️ If It Shows Different Error
**Problem:** New issue revealed
**Action:** Check the error message and logs

## Environment Variables to Verify in Vercel

### Required for Current Simplified Version
- ✅ `ADMIN_PASSWORD_HASH`
- ✅ `ADMIN_2FA_SECRET`
- ✅ `ADMIN_JWT_SECRET`
- ✅ `CSRF_SECRET`

### NOT Required for Current Version (Database Disabled)
- ⚠️ `DATABASE_URL` (not used in simplified version)

## Rollback Plan

If the simplified version works, we'll gradually re-enable features:

1. **Phase 1:** Add audit logging back (with try-catch)
2. **Phase 2:** Add recovery codes back (with try-catch)
3. **Phase 3:** Test full functionality

## Files Modified

- `app/api/admin/auth/route.ts` - Simplified version (no database)
- `app/api/admin/auth/route-backup-full.ts` - Full backup of original

## Next Steps After Testing

Once you test and report results, I'll know whether:
- The database imports were the problem → Re-enable with proper error handling
- Something else is the problem → Investigate further

---

**Commit:** `fbf05840` - "fix: Simplify admin auth route - remove database dependencies for debugging 405 error"
**Deployed:** Waiting for Vercel (~2-3 minutes)






