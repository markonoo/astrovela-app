# Test Account Creation & Testing Guide

## Overview
This guide explains how to create test accounts and verify all Aura app functionality.

---

## Creating a Test Account

### Method 1: Via Admin Dashboard (Recommended)

1. **Log into Admin Dashboard**
   - Go to `/olivialimon-admin/login`
   - Enter admin credentials

2. **Create Test User**
   - Click "Create Test User" button in Quick Actions section
   - A test user will be created with:
     - Prisma User record
     - AppEntitlement (30-day trial, active access)
     - QuizResponse (with birth data)
     - NatalChartInterpretation (with sun/moon signs)
   - You'll see an alert with the test email

3. **Sign Up as Test User**
   - Go to `/login`
   - Sign up with the test email shown in the alert
   - Use any password (or use Google OAuth)
   - The Prisma user will automatically link to your Supabase account

4. **Access Aura App**
   - You'll be redirected to `/aura`
   - Full access to all features

### Method 2: Via API Endpoint

```bash
curl -X POST http://localhost:3000/api/admin/create-test-user \
  -H "Content-Type: application/json" \
  -H "Cookie: admin-auth=your-admin-session-cookie" \
  -d '{
    "email": "test@example.com",
    "name": "Test User",
    "sunSign": "capricorn",
    "moonSign": "scorpio",
    "birthDate": { "day": 15, "month": 3, "year": 1990 },
    "birthTime": "14:30",
    "birthPlace": "New York, NY"
  }'
```

---

## Test Account Defaults

When creating a test account, the following defaults are used:

- **Email**: `test-{timestamp}@example.com` (or custom)
- **Name**: "Test User" (or custom)
- **Sun Sign**: Capricorn (or custom)
- **Moon Sign**: Scorpio (or custom)
- **Birth Date**: March 15, 1990 (or custom)
- **Birth Time**: 14:30 (or custom)
- **Birth Place**: "New York, NY" (or custom)
- **Entitlement**: 30-day trial, active access
- **Has Report**: true

---

## Testing Checklist

### ✅ Authentication & Access

- [ ] Test user can sign up with email/password
- [ ] Test user can sign in with Google OAuth
- [ ] Test user has active entitlement
- [ ] Test user can access `/aura` pages
- [ ] Test user sees paywall if entitlement expires

### ✅ API Endpoints

#### `/api/aura/entitlement`
- [ ] Returns `hasAccess: true` for test user
- [ ] Returns entitlement details
- [ ] Creates Prisma user if doesn't exist

#### `/api/aura/today`
- [ ] Returns daily horoscope data
- [ ] Uses user's sun sign from chart interpretation
- [ ] Returns energy, love, career, transits

#### `/api/aura/user-sign`
- [ ] Returns user's sun/moon signs
- [ ] Pulls from NatalChartInterpretation

#### `/api/aura/weekly`
- [ ] Returns weekly forecast
- [ ] Personalized based on sun sign

#### `/api/aura/report`
- [ ] Returns report data
- [ ] Includes birth date, time, place
- [ ] Includes chart summary

### ✅ User-Facing Pages

#### `/aura` (Horoscope/Today)
- [ ] Displays welcome message with user name
- [ ] Shows zodiac sign card
- [ ] Shows period selector (today/tomorrow/week/month)
- [ ] Shows metrics bars (love/work/mood)
- [ ] Displays daily insights
- [ ] Shows love and career cards
- [ ] Shows current transits

#### `/aura/love` (Compatibility)
- [ ] Shows sign selector
- [ ] Displays compatibility results
- [ ] Shows green/red flags
- [ ] Shows date ideas
- [ ] Shows compatibility metrics

#### `/aura/weekly`
- [ ] Displays weekly outlook
- [ ] Shows emotions, relationships, money/career, spiritual themes

#### `/aura/report/viewer`
- [ ] Displays interactive report
- [ ] Shows personalized pages
- [ ] Allows navigation between pages

### ✅ Data Flow Verification

1. **User Creation Flow**
   ```
   Supabase Auth → Prisma User → AppEntitlement → Access Granted
   ```

2. **Horoscope Data Flow**
   ```
   User Login → Check Entitlement → Fetch Chart Data → Get Sun Sign → Fetch Horoscope API → Display
   ```

3. **Report Data Flow**
   ```
   User Login → Check Entitlement → Fetch QuizResponse → Fetch ChartInterpretation → Display Report
   ```

---

## Common Issues & Solutions

### Issue: "No active access" error
**Solution**: Ensure AppEntitlement exists with `plan: 'trial'` or `plan: 'active'` and `freeUntil` is in the future

### Issue: "Not authenticated" error
**Solution**: User must be logged in via Supabase. Check session cookie.

### Issue: Horoscope shows default "Aries"
**Solution**: Ensure NatalChartInterpretation exists with `sun_sign` set correctly

### Issue: Report shows no birth data
**Solution**: Ensure QuizResponse exists with `birthDate`, `birthTime`, `birthPlace` fields

### Issue: API returns 403 Forbidden
**Solution**: Check `hasActiveAccess()` function - entitlement must be active and not expired

---

## Test User Data Structure

```typescript
{
  // Prisma User
  user: {
    id: 1,
    email: "test@example.com",
    name: "Test User"
  },
  
  // AppEntitlement
  entitlement: {
    id: "ent_123",
    userId: 1,
    email: "test@example.com",
    plan: "trial",
    freeUntil: "2024-02-15T00:00:00Z", // 30 days from now
    hasReport: true
  },
  
  // QuizResponse
  quizResponse: {
    id: "quiz_123",
    userId: 1,
    email: "test@example.com",
    birthDate: { day: 15, month: 3, year: 1990 },
    birthTime: "14:30",
    birthPlace: "New York, NY",
    firstName: "Test",
    lastName: "User",
    gender: "non-binary"
  },
  
  // NatalChartInterpretation
  chartInterpretation: {
    id: "chart_123",
    userId: 1,
    sun_sign: "Capricorn",
    moon_sign: "Scorpio"
  }
}
```

---

## API Testing Commands

### Check Entitlement
```bash
curl http://localhost:3000/api/aura/entitlement \
  -H "Cookie: sb-access-token=your-session-cookie"
```

### Get Today's Horoscope
```bash
curl http://localhost:3000/api/aura/today \
  -H "Cookie: sb-access-token=your-session-cookie"
```

### Get User Sign
```bash
curl http://localhost:3000/api/aura/user-sign \
  -H "Cookie: sb-access-token=your-session-cookie"
```

### Get Weekly Forecast
```bash
curl http://localhost:3000/api/aura/weekly \
  -H "Cookie: sb-access-token=your-session-cookie"
```

### Get Report Data
```bash
curl http://localhost:3000/api/aura/report \
  -H "Cookie: sb-access-token=your-session-cookie"
```

---

## Next Steps

1. Create test account via admin dashboard
2. Sign up with test email
3. Navigate through all Aura app pages
4. Verify all API calls succeed
5. Check browser console for errors
6. Verify data displays correctly
7. Test responsive design on mobile

---

## Notes

- Test accounts are created with 30-day trial access
- All test data is stored in your database
- You can create multiple test accounts with different zodiac signs
- Test accounts can be deleted via admin panel or database cleanup



