# Email Notification Specification - Companion App

## Overview

This document specifies the email notification flow for the AstroVela Companion App, triggered when users purchase a PDF/book and receive their 30-day free trial.

---

## Email Trigger Points

### 1. Purchase Confirmation + Companion App Access
**Trigger:** Shopify webhook receives order completion  
**When:** Immediately after purchase  
**Recipient:** Customer email from order

**Email Type:** Welcome + Access Grant

---

## Email Service Recommendation

### Option 1: Resend (Recommended)
- **Why:** Modern, developer-friendly, great Next.js integration
- **Setup:** Simple API key authentication
- **Cost:** Free tier: 3,000 emails/month
- **Integration:** `@resend/react` package

### Option 2: SendGrid
- **Why:** Enterprise-grade, reliable
- **Setup:** API key authentication
- **Cost:** Free tier: 100 emails/day
- **Integration:** `@sendgrid/mail` package

### Option 3: Supabase Email (If using Supabase Auth)
- **Why:** Already integrated, no additional service
- **Setup:** Configured in Supabase dashboard
- **Cost:** Included in Supabase plan
- **Limitation:** Less customization

**Recommendation:** Use **Resend** for MVP (easiest setup, best DX)

---

## Email Template Structure

### Email 1: Welcome to Companion App

**Subject:** `Welcome to AstroVela Companion - Your 30-Day Free Trial Starts Now!`

**From:** `noreply@astrovela.com` or `hello@astrovela.com`

**Content Structure:**

```
Header:
- AstroVela logo
- "Welcome to Your Personal Astrology Companion"

Body:
1. Greeting: "Hi {firstName},"

2. Purchase Confirmation:
   - "Thank you for purchasing {productName}!"
   - Order confirmation details

3. Companion App Access:
   - "As a thank you, you now have 30 days of free access to AstroVela Companion"
   - "Your personal astrology control center with daily insights, weekly forecasts, and more"

4. What You Get:
   - Daily personalized horoscopes
   - Weekly & monthly forecasts
   - Love compatibility insights
   - Career timing guidance
   - Zodiac encyclopedia access

5. Call to Action:
   - Button: "Access Your Companion App"
   - Link: https://astrovela.com/companion

6. Trial Information:
   - "Your free trial expires on {freeUntilDate}"
   - "After 30 days, continue for €30.99/month"

Footer:
- Support: help@astrovela.com
- Unsubscribe link
- Company info
```

**HTML Template Variables:**
- `{firstName}` - Customer first name
- `{productName}` - Ebook/Paperback/App
- `{orderNumber}` - Shopify order number
- `{freeUntilDate}` - Trial expiration date (formatted)
- `{companionAppUrl}` - Link to companion app

---

## Implementation Location

### Email Sending Function
**File:** `lib/email-service.ts` (to be created)

**Function Signature:**
```typescript
export async function sendCompanionAppWelcomeEmail(data: {
  email: string
  firstName?: string
  productName: string
  orderNumber: string
  freeUntilDate: Date
}): Promise<void>
```

### Webhook Integration
**File:** `app/api/shopify/webhook/route.ts`

**Add after entitlement creation:**
```typescript
// After creating entitlement
await sendCompanionAppWelcomeEmail({
  email: customerEmail,
  firstName: order.customer?.first_name,
  productName: hasPaperback ? "Paperback Book" : hasEbook ? "Ebook" : "App Subscription",
  orderNumber: order.order_number?.toString() || order.id?.toString(),
  freeUntilDate: freeUntil,
})
```

---

## Email Service Setup

### Resend Setup (Recommended)

1. **Install Package:**
```bash
npm install resend
```

2. **Create Service File:**
```typescript
// lib/email-service.ts
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendCompanionAppWelcomeEmail(data: {
  email: string
  firstName?: string
  productName: string
  orderNumber: string
  freeUntilDate: Date
}) {
  await resend.emails.send({
    from: 'AstroVela <noreply@astrovela.com>',
    to: data.email,
    subject: 'Welcome to AstroVela Companion - Your 30-Day Free Trial Starts Now!',
    html: generateWelcomeEmailHTML(data),
  })
}
```

3. **Add Environment Variable:**
```env
RESEND_API_KEY=re_...
```

---

## Future Email Types (Phase 2)

### Daily Digest Email
- **Trigger:** Daily at user's preferred time
- **Content:** Today's energy summary, love tip, career insight
- **Frequency:** Daily (opt-in)

### Weekly Summary Email
- **Trigger:** Every Monday
- **Content:** Week ahead forecast, key dates, opportunities
- **Frequency:** Weekly (opt-in)

### Trial Expiring Reminder
- **Trigger:** 3 days before trial expires
- **Content:** Reminder to subscribe, benefits recap
- **Frequency:** One-time

### Subscription Confirmation
- **Trigger:** After successful subscription
- **Content:** Welcome to paid subscription, billing details
- **Frequency:** One-time

---

## Email Preferences

**Future Enhancement:** Allow users to manage email preferences in Settings page:
- Daily digest: On/Off
- Weekly summary: On/Off
- Promotional emails: On/Off

**Storage:** Add to `AppEntitlement` model or create separate `UserPreferences` table

---

## Testing

### Test Email Flow
1. Make test purchase in Shopify
2. Verify webhook creates entitlement
3. Check email sent to test address
4. Verify email content and links work
5. Test email rendering in different clients (Gmail, Outlook, etc.)

### Email Template Testing
- Use Resend's email preview
- Test responsive design (mobile/desktop)
- Verify all links work
- Check spam score

---

## Status

**Current:** ⚠️ Not implemented (mentioned in user flow but not spec'd)

**Priority:** Medium (can use placeholder for MVP, implement in Phase 1.5)

**Estimated Implementation Time:** 2-3 hours

---

## Notes

- Email sending is **non-blocking** - webhook should succeed even if email fails
- Use try/catch around email sending
- Log email failures for debugging
- Consider email queue for production (e.g., BullMQ with Redis)














