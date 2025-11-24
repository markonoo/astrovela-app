# Plain Text Email Versions

For better deliverability, always send both HTML and plain text versions. Below are plain text versions of all 7 emails.

---

## 1. Welcome + Quiz Completion

```
Subject: ✨ {{firstName}}, Your Personalized Astrology Reading Awaits

Hi {{firstName}},

Congratulations on completing your astrology quiz! You've taken the first step toward understanding your unique cosmic blueprint.

Based on your birth chart, we've discovered something extraordinary about you, {{sunSign}}. Your personalized 200+ page astrology book is ready to reveal:

✓ Your Life Path & Purpose - Discover what you're truly meant to do
✓ Relationship Compatibility - Find your perfect match and improve existing relationships  
✓ Career & Success Guidance - Unlock your professional potential
✓ Personal Growth Roadmap - Transform challenges into opportunities

"This book changed everything for me. The insights were so accurate, it felt like someone finally understood me." — Sarah M., verified customer ⭐⭐⭐⭐⭐

🎁 SPECIAL WELCOME OFFER
Save 50% - Exclusive discount expires in 7 days

Get Your Personalized Book Now:
{{checkoutUrl}}

🔒 Secure checkout • 30-day money-back guarantee

Trusted by over 2 million people worldwide
⭐⭐⭐⭐⭐ 4.8/5 from 50,000+ reviews

Questions? Email us at hello@astrovela.de

Nova Ventures UG
Gandersheimer Weg 20, 22459 Hamburg, Germany

Unsubscribe: {{unsubscribeUrl}}
```

---

## 2. Abandoned Quiz Recovery

```
Subject: {{firstName}}, You're 60 Seconds Away from Life-Changing Insights

Hi {{firstName}},

We noticed you started your astrology quiz but didn't finish. That's okay—life gets busy!

But here's the thing: You're just 60 seconds away from discovering insights that could transform your relationships, career, and personal growth.

Complete your quiz to discover:
• Your unique life purpose and path
• Who you're most compatible with
• Your hidden strengths and talents
• The best career direction for you

Complete My Quiz Now:
{{quizResumeUrl}}

⏱️ Takes only 60 seconds to complete

Join over 2 million people who discovered their true potential
⭐⭐⭐⭐⭐

Questions? hello@astrovela.de

Nova Ventures UG • Gandersheimer Weg 20, 22459 Hamburg, Germany
Unsubscribe: {{unsubscribeUrl}}
```

---

## 3. Abandoned Cart - Day 1

```
Subject: {{firstName}}, Your Personalized Book is Waiting

Hi {{firstName}},

We've reserved your personalized astrology book, but it won't last forever.

Your unique 200+ page book is ready, customized specifically for your birth chart.

What's Inside Your Book:
✓ Complete birth chart analysis
✓ Relationship compatibility guide
✓ Career & life path insights
✓ Personal growth roadmap

⏰ Your 50% discount expires in 6 days

Complete My Order:
{{checkoutUrl}}

🔒 30-day money-back guarantee • Free shipping

Questions? hello@astrovela.de

Nova Ventures UG • Gandersheimer Weg 20, 22459 Hamburg, Germany
Unsubscribe: {{unsubscribeUrl}}
```

---

## 4. Abandoned Cart - Day 3

```
Subject: 🎁 EXTRA 10% OFF Your Astrology Book, {{firstName}}

Hi {{firstName}},

We Really Want You to Have This

Your personalized astrology book is still waiting, and we've added an EXTRA 10% DISCOUNT to make it even easier for you to start your transformation journey.

That's 60% OFF TOTAL - our biggest discount ever!

"I was hesitant at first, but this book has been life-changing. It helped me understand why certain relationships weren't working and guided me to my perfect partner. Worth every penny!" — Emma L. ⭐⭐⭐⭐⭐

⏰ THIS OFFER EXPIRES IN 4 DAYS

Claim My 60% Discount Now:
{{checkoutUrl}}

🔒 Secure checkout • 30-day guarantee • Free shipping

Questions? hello@astrovela.de

Nova Ventures UG • Gandersheimer Weg 20, 22459 Hamburg, Germany
Unsubscribe: {{unsubscribeUrl}}
```

---

## 5. Order Confirmation

```
Subject: ✓ Order Confirmed: Your AstroVela Book is On Its Way!

Thank You, {{firstName}}!

Your order has been confirmed.

ORDER DETAILS
Order Number: #{{orderNumber}}
Order Date: {{orderDate}}

Items Ordered:
{{#each items}}
- {{this.name}} - €{{this.price}}
{{/each}}

Total: €{{totalPrice}}

WHAT HAPPENS NEXT?

{{#if hasEbook}}
📖 Your Ebook
Your personalized ebook is being prepared and will be delivered to {{email}} within the next hour.
{{/if}}

{{#if hasPaperback}}
📦 Your Paperback
Your physical book will be printed and shipped within 3-5 business days. You'll receive tracking information via email.
{{/if}}

{{#if hasApp}}
📱 Your App Access
Your AstroVela app account is ready! Access daily horoscopes, compatibility reports, and more.
Access App: {{appLoginUrl}}
{{/if}}

NEED HELP?
Our support team is here for you!
Email: hello@astrovela.de
Response time: Within 24 hours

Thank you for choosing AstroVela! 🌟

Nova Ventures UG
Gandersheimer Weg 20, 22459 Hamburg, Germany
Unsubscribe: {{unsubscribeUrl}}
```

---

## 6. Ebook Download Ready

```
Subject: 📥 {{firstName}}, Your Ebook is Ready to Download!

🎉 Your Personalized Ebook is Ready to Download!

Hi {{firstName}}, your cosmic journey begins now! We've created your unique 200+ page astrology book based on your exact birth chart.

DOWNLOAD YOUR EBOOK NOW:
{{downloadUrl}}

Download link expires in 30 days

WHAT'S INSIDE YOUR BOOK

✨ Your Birth Chart Analysis
Complete breakdown of your cosmic blueprint

💕 Relationship Insights
Compatibility guide and love forecast

🎯 Career & Life Path
Professional guidance tailored to you

🌱 Personal Growth Guide
Transform challenges into opportunities

{{#if hasAppAccess}}
📱 DON'T FORGET YOUR APP ACCESS!
Get daily horoscopes, compatibility reports, and personalized insights on the go.
Access App: {{appLoginUrl}}
{{/if}}

💡 PRO TIP
Read your book in a quiet space where you can reflect. Take notes on insights that resonate with you—they're your roadmap to transformation!

NEED HELP DOWNLOADING?
Having trouble? Contact us at hello@astrovela.de
We'll respond within 24 hours.

Enjoy your cosmic journey! 🌟

Nova Ventures UG
Gandersheimer Weg 20, 22459 Hamburg, Germany
Unsubscribe: {{unsubscribeUrl}}
```

---

## 7. Review Request

```
Subject: {{firstName}}, How's Your AstroVela Experience? (Get 15% OFF)

⭐ How's Your Journey Going, {{firstName}}?

It's been a week since you received your personalized astrology book. We'd love to hear about your experience!

SHARE YOUR EXPERIENCE AND GET 15% OFF YOUR NEXT PURCHASE!

Leave a Review:
{{reviewUrl}}

Takes only 2 minutes • Get instant discount code

YOUR VOICE MATTERS
Your honest feedback helps others discover how astrology can transform their lives, just like it may have transformed yours.

"This book gave me clarity I've been searching for my entire life. The relationship insights alone were worth 10x the price!" — Rachel W. ⭐⭐⭐⭐⭐

Not satisfied with your experience?
We want to make it right. Contact our support team at hello@astrovela.de and we'll help you out.

Thank you for being part of the AstroVela community! 💛

Nova Ventures UG
Gandersheimer Weg 20, 22459 Hamburg, Germany
Unsubscribe: {{unsubscribeUrl}}
```

---

## Implementation Notes

### Why Plain Text Matters:
1. **Deliverability:** Many spam filters prefer multipart emails (HTML + plain text)
2. **Accessibility:** Screen readers work better with plain text
3. **Email Clients:** Some users prefer plain text or have HTML disabled
4. **Fallback:** If HTML fails to render, plain text displays

### How to Send Both Versions:
Most email services support multipart MIME:

```javascript
{
  to: 'customer@example.com',
  subject: 'Your Subject',
  html: htmlContent,
  text: plainTextContent
}
```

### Shopify Email:
Shopify automatically generates plain text from HTML, but you can customize it in the email editor.

### Klaviyo:
1. Create HTML template
2. Click "Plain Text" tab
3. Paste plain text version
4. Klaviyo will send both versions

---

**Best Practice:** Always test both HTML and plain text versions before sending to customers.







