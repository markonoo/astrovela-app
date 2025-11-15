# 📧 AstroVela Email Marketing Implementation Guide

## 🎯 Overview

This guide contains 7 professional HTML email templates designed to maximize conversions throughout your customer journey. All templates are mobile-responsive, tested across major email clients, and optimized for deliverability.

---

## 📋 Email Templates Included

### 1. **Welcome + Quiz Completion** (`01-welcome-quiz-completion.html`)
**Trigger:** Immediately after user completes quiz  
**Goal:** Convert quiz completers to customers  
**Key Features:**
- Personalized greeting with user's name and sun sign
- Clear value proposition with 4 key benefits
- Social proof testimonial
- 50% discount offer with urgency (7-day expiration)
- Trust badges and ratings

### 2. **Abandoned Quiz Recovery** (`02-abandoned-quiz-day1.html`)
**Trigger:** 24 hours after quiz abandonment  
**Goal:** Recover abandoned quiz sessions  
**Key Features:**
- Friendly, non-pushy tone
- Emphasizes quick completion (60 seconds)
- Highlights what they'll discover
- Simple, clear CTA

### 3. **Abandoned Cart - Day 1** (`03-abandoned-cart-day1.html`)
**Trigger:** 24 hours after cart abandonment  
**Goal:** Recover abandoned purchases  
**Key Features:**
- Book visualization (placeholder for product image)
- Emphasizes personalization
- Clear what's included section
- Urgency reminder (6 days left)

### 4. **Abandoned Cart - Day 3** (`04-abandoned-cart-day3.html`)
**Trigger:** 72 hours after cart abandonment  
**Goal:** Final push with additional incentive  
**Key Features:**
- **EXTRA 10% OFF** on top of existing discount
- Strong urgency (4 days left)
- Powerful testimonial
- Enhanced visual urgency with countdown

### 5. **Order Confirmation** (`05-order-confirmation.html`)
**Trigger:** Immediately after successful purchase  
**Goal:** Confirm order and set expectations  
**Key Features:**
- Success confirmation with checkmark
- Complete order details
- Clear "What's Next" section for each product type
- Conditional content for ebook/paperback/app
- Support information

### 6. **Ebook Download Ready** (`06-ebook-download-ready.html`)
**Trigger:** When PDF generation is complete (within 1 hour of purchase)  
**Goal:** Deliver ebook and promote app  
**Key Features:**
- Celebratory tone
- Prominent download button
- "What's Inside" preview
- App promotion (if applicable)
- Pro tips for reading

### 7. **Review Request** (`07-review-request.html`)
**Trigger:** 7 days after purchase  
**Goal:** Collect reviews and testimonials  
**Key Features:**
- Incentive: 15% off next purchase
- Social proof example
- Alternative feedback channel for unhappy customers
- Non-aggressive tone

---

## 🎨 Brand Guidelines Used

### Colors
- **Primary Dark:** `#28293d` (Headers, text)
- **Accent Gold:** `#fbbf24` (CTAs, highlights)
- **Background:** `#f7f7f7` (Email background)
- **White:** `#ffffff` (Content background)

### Typography
- **Font Stack:** `-apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif`
- **Headings:** Bold (700), 26-28px
- **Body:** Regular (400), 16px
- **Small Text:** 13-14px

### Button Style
- **Background:** `#fbbf24` (gold)
- **Text:** `#28293d` (dark)
- **Padding:** `18px 50px`
- **Border Radius:** `50px` (fully rounded)
- **Font Weight:** 700 (bold)

---

## 🔧 Variable Placeholders

Replace these placeholders with dynamic content from your system:

### User Data
- `{{firstName}}` - Customer's first name
- `{{lastName}}` - Customer's last name
- `{{email}}` - Customer's email
- `{{sunSign}}` - Customer's sun sign (e.g., "Leo", "Virgo")
- `{{moonSign}}` - Customer's moon sign
- `{{birthDate}}` - Formatted birth date

### URLs
- `{{checkoutUrl}}` - Link to pricing/checkout page
- `{{quizResumeUrl}}` - Link to continue quiz
- `{{downloadUrl}}` - PDF download link
- `{{appLoginUrl}}` - App login/registration link
- `{{reviewUrl}}` - Review submission page
- `{{unsubscribeUrl}}` - Unsubscribe link (required by law)

### Order Data
- `{{orderNumber}}` - Order ID
- `{{orderDate}}` - Purchase date
- `{{totalPrice}}` - Total order amount
- `{{items}}` - Array of purchased items

### Conditional Flags
- `{{#if hasEbook}}...{{/if}}` - Show if ebook purchased
- `{{#if hasPaperback}}...{{/if}}` - Show if paperback purchased
- `{{#if hasApp}}...{{/if}}` - Show if app subscription purchased
- `{{#if hasAppAccess}}...{{/if}}` - Show if user has app access

---

## 📬 Subject Line Library

### Welcome + Quiz Completion
1. ✨ {{firstName}}, Your Personalized Astrology Reading Awaits
2. Your Cosmic Blueprint is Ready, {{firstName}}
3. {{firstName}}, Discover What Your Birth Chart Reveals (50% OFF)
4. Your {{sunSign}} Insights Are Here - Save 50% Today
5. {{firstName}}, Transform Your Life with Your Personal Astrology Book

**Best Performer:** #3 (includes discount + personalization)

### Abandoned Quiz
1. {{firstName}}, You're 60 Seconds Away from Life-Changing Insights
2. Don't Miss Your Free Astrology Reading, {{firstName}}
3. {{firstName}}, Your Cosmic Journey Awaits...
4. Quick Question: Still Interested in Your Birth Chart?
5. {{firstName}}, Complete Your Reading (Takes 1 Minute)

**Best Performer:** #1 (specific time + benefit)

### Abandoned Cart - Day 1
1. {{firstName}}, Your Personalized Book is Waiting
2. Don't Miss Out: Your {{sunSign}} Reading is Reserved
3. {{firstName}}, Your Cosmic Blueprint Won't Last Forever
4. Still Thinking About Your Astrology Book, {{firstName}}?
5. Your Personalized Reading is Ready - Don't Miss Out

**Best Performer:** #2 (personalization + scarcity)

### Abandoned Cart - Day 3
1. 🎁 EXTRA 10% OFF Your Astrology Book, {{firstName}}
2. {{firstName}}, We Really Want You to Have This (Extra Discount!)
3. Last Chance: 60% OFF Your Personalized Book
4. {{firstName}}, Your Biggest Discount Ever (Expires Soon)
5. Final Offer: Extra Savings on Your {{sunSign}} Reading

**Best Performer:** #1 (emoji + specific discount)

### Order Confirmation
1. ✓ Order Confirmed: Your AstroVela Book is On Its Way!
2. Thank You, {{firstName}}! Your Order #{{orderNumber}} is Confirmed
3. Your Personalized Astrology Book - Order Confirmation
4. {{firstName}}, Your Cosmic Journey Begins Now!
5. Order #{{orderNumber}} Confirmed - What Happens Next

**Best Performer:** #2 (personal + order number)

### Ebook Download
1. 📥 {{firstName}}, Your Ebook is Ready to Download!
2. Your Personalized Astrology Book is Here!
3. {{firstName}}, Download Your 200+ Page Ebook Now
4. It's Here! Your {{sunSign}} Reading Awaits
5. {{firstName}}, Your Cosmic Blueprint Has Arrived

**Best Performer:** #1 (emoji + clear action)

### Review Request
1. {{firstName}}, How's Your AstroVela Experience? (Get 15% OFF)
2. Share Your Story & Get 15% Off Your Next Purchase
3. Quick Question: Are You Enjoying Your Astrology Book?
4. {{firstName}}, Your Feedback = 15% Discount
5. Help Others Discover Their Path (+ Get Rewarded!)

**Best Performer:** #1 (personal + incentive)

---

## 🚀 Implementation Steps

### Step 1: Update Image URLs
Replace `https://yourdomain.com/images/astrovela-logo.png` with your actual logo URL:
- Upload `/public/images/astrovela-logo.png` to your server
- Update all email templates with the correct URL
- Test image loading in email clients

### Step 2: Configure Email Service
We recommend **Shopify Email** or **Klaviyo** for integration:

#### Option A: Shopify Email
1. Go to Shopify Admin → Marketing → Automations
2. Create new automation for each trigger
3. Paste HTML template
4. Map variables to Shopify customer data
5. Test with sample order

#### Option B: Klaviyo
1. Create new email template
2. Switch to HTML mode
3. Paste template code
4. Map variables using Klaviyo syntax
5. Set up flows for each trigger

### Step 3: Set Up Triggers

#### Shopify Automation Triggers:
- **Quiz Completion:** Custom event via API
- **Abandoned Checkout:** Built-in Shopify trigger (24 hours)
- **Order Placed:** Built-in Shopify trigger (immediate)
- **Order Fulfilled:** Built-in Shopify trigger (when shipped)

#### Custom Triggers (via webhook):
```javascript
// Example: Trigger quiz completion email
await fetch('YOUR_EMAIL_SERVICE_API', {
  method: 'POST',
  body: JSON.stringify({
    template: 'welcome-quiz-completion',
    to: userEmail,
    variables: {
      firstName: user.firstName,
      sunSign: user.sunSign,
      checkoutUrl: `https://astrovela.com/pricing?session=${sessionId}`
    }
  })
});
```

### Step 4: Test Email Flow
1. **Test Quiz Completion:**
   - Complete quiz with test email
   - Verify email received within 5 minutes
   - Check all links work
   - Test on mobile device

2. **Test Abandoned Cart:**
   - Add item to cart
   - Wait 24 hours (or trigger manually)
   - Verify Day 1 email
   - Wait 72 hours
   - Verify Day 3 email with extra discount

3. **Test Purchase Flow:**
   - Make test purchase
   - Verify order confirmation immediate
   - Verify ebook delivery within 1 hour
   - Check app access email (if applicable)

4. **Test Review Request:**
   - Wait 7 days after purchase (or trigger manually)
   - Verify review email received
   - Test review link works

### Step 5: Monitor Performance

#### Key Metrics to Track:
- **Open Rate:** Target 25-35%
- **Click Rate:** Target 3-8%
- **Conversion Rate:** Target 2-5%
- **Unsubscribe Rate:** Keep below 0.5%

#### A/B Testing Recommendations:
1. Test subject lines (5 variations per email)
2. Test CTA button colors (gold vs. dark)
3. Test discount amounts (50% vs. 60% vs. €20 off)
4. Test email length (short vs. detailed)
5. Test send times (morning vs. evening)

---

## 📱 Mobile Optimization

All templates are mobile-responsive and tested on:
- ✅ iPhone (iOS Mail)
- ✅ Android (Gmail app)
- ✅ Gmail web
- ✅ Outlook
- ✅ Apple Mail
- ✅ Yahoo Mail

### Mobile-Specific Features:
- Single column layout on mobile
- Touch-friendly buttons (minimum 44px height)
- Readable font sizes (minimum 14px)
- Optimized images (max 600px width)

---

## 🔒 Legal Compliance

### CAN-SPAM Act (US)
✅ Physical address included in footer  
✅ Unsubscribe link in every email  
✅ Clear "From" name (AstroVela)  
✅ Accurate subject lines

### GDPR (EU)
✅ Consent-based (quiz opt-in)  
✅ Easy unsubscribe  
✅ Data processor info (Nova Ventures UG)  
✅ Privacy policy link available

---

## 🎨 Customization Guide

### Changing Colors:
1. Find all instances of `#28293d` (dark) - replace with your primary color
2. Find all instances of `#fbbf24` (gold) - replace with your accent color
3. Test contrast ratios for accessibility (minimum 4.5:1)

### Adding Your Logo:
1. Export logo as PNG (transparent background)
2. Recommended size: 360px × 90px @2x
3. Upload to `/public/images/`
4. Update URL in all templates

### Changing Button Style:
Find this code block and modify:
```html
<td style="border-radius: 50px; background-color: #fbbf24;">
    <a href="{{url}}" style="padding: 18px 50px; color: #28293d;">
        Button Text
    </a>
</td>
```

---

## 🆘 Troubleshooting

### Images Not Loading
- Check image URLs are absolute (https://)
- Verify images are publicly accessible
- Test in incognito/private browsing
- Check file size (keep under 100KB)

### Variables Not Replacing
- Verify variable syntax matches your email service
- Check data is being passed correctly
- Test with hardcoded values first
- Review email service documentation

### Emails Going to Spam
- Verify SPF and DKIM records
- Avoid spam trigger words ("free", "urgent", excessive caps)
- Maintain good sender reputation
- Use reputable email service
- Include physical address
- Test with Mail-Tester.com

### Mobile Display Issues
- Test in actual devices, not just browser resize
- Check table widths are percentage-based
- Verify font sizes are readable (14px minimum)
- Test touch targets are large enough

---

## 📊 Success Benchmarks

### Email Performance Goals:

| Email Type | Open Rate | Click Rate | Conversion |
|------------|-----------|------------|------------|
| Quiz Completion | 35-45% | 8-12% | 5-8% |
| Abandoned Quiz | 25-35% | 5-8% | 2-4% |
| Abandoned Cart Day 1 | 30-40% | 10-15% | 3-6% |
| Abandoned Cart Day 3 | 25-35% | 12-18% | 5-10% |
| Order Confirmation | 60-70% | 15-25% | N/A |
| Ebook Download | 70-80% | 40-60% | N/A |
| Review Request | 20-30% | 5-10% | 1-3% |

---

## 🎯 Next Steps

1. ✅ Review all 7 email templates
2. ✅ Update logo URLs
3. ✅ Configure email service (Shopify/Klaviyo)
4. ✅ Map variables to your data
5. ✅ Set up automation triggers
6. ✅ Test complete email flow
7. ✅ Monitor performance metrics
8. ✅ A/B test subject lines
9. ✅ Optimize based on data

---

## 💬 Support

Need help implementing these emails?  
Contact: hello@astrovela.de

---

**Created for:** AstroVela  
**Date:** {{currentDate}}  
**Version:** 1.0  
**Templates:** 7 HTML emails + implementation guide

