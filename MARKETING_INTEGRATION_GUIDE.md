# Marketing Tracking Integration Guide

This guide explains how to integrate comprehensive marketing tracking into AstroBook using the implemented tracking system.

## 📋 Overview

The marketing tracking system supports:
- **Meta Pixel** (Facebook/Instagram Ads)
- **Google Analytics 4**
- **Google Ads Conversion Tracking**
- **TikTok Pixel**
- **Pinterest Tag**
- **Twitter Pixel**

## 🔧 Setup

### 1. Environment Variables

Add these variables to your `.env.local` file:

```bash
# Marketing Tracking - Meta (Facebook/Instagram Ads)
NEXT_PUBLIC_META_PIXEL_ID="your_meta_pixel_id"

# Marketing Tracking - Google Analytics 4
NEXT_PUBLIC_GA_MEASUREMENT_ID="G-XXXXXXXXXX"

# Marketing Tracking - Google Ads
NEXT_PUBLIC_GOOGLE_ADS_ID="AW-XXXXXXXXX"

# Marketing Tracking - TikTok Pixel
NEXT_PUBLIC_TIKTOK_PIXEL_ID="your_tiktok_pixel_id"

# Marketing Tracking - Pinterest Tag
NEXT_PUBLIC_PINTEREST_TAG_ID="your_pinterest_tag_id"

# Marketing Tracking - Twitter Pixel
NEXT_PUBLIC_TWITTER_PIXEL_ID="your_twitter_pixel_id"
```

### 2. Automatic Initialization

Marketing tracking is automatically initialized in the root layout via `AnalyticsSetup` component. No additional setup required.

## 🎯 Usage Examples

### Quiz Flow Tracking

```typescript
import { 
  trackQuizStarted, 
  trackQuizStepCompleted, 
  trackQuizCompleted 
} from '@/utils/marketing-events';

// Track quiz start
trackQuizStarted({
  quiz_type: 'astrology_reading',
  landing_source: 'homepage',
  utm_source: 'google',
  utm_medium: 'cpc',
  utm_campaign: 'astrology_quiz'
});

// Track each step completion
trackQuizStepCompleted({
  step_number: 3,
  step_name: 'birth_details',
  total_steps: 12,
  completion_percentage: 25,
  time_spent_seconds: 45
});

// Track quiz completion
trackQuizCompleted({
  total_steps: 12,
  completion_time_seconds: 480,
  zodiac_sign: 'leo',
  birth_location: 'New York',
  user_type: 'new'
});
```

### E-commerce Tracking

```typescript
import { 
  trackProductViewed,
  trackAddToCart,
  trackCheckoutStarted,
  trackPurchaseCompleted 
} from '@/utils/marketing-events';

// Track product view
trackProductViewed({
  product_id: 'ebook_astrovela',
  product_name: 'AstroVela eBook',
  product_type: 'ebook',
  price: 49.99,
  currency: 'EUR',
  source: 'quiz_results'
});

// Track add to cart
trackAddToCart({
  product_id: 'ebook_astrovela',
  product_name: 'AstroVela eBook',
  product_type: 'ebook',
  price: 49.99,
  currency: 'EUR',
  quantity: 1
});

// Track checkout initiation
trackCheckoutStarted({
  product_ids: ['ebook_astrovela'],
  product_names: ['AstroVela eBook'],
  total_value: 49.99,
  currency: 'EUR',
  num_items: 1,
  checkout_method: 'shopify'
});

// Track purchase completion
trackPurchaseCompleted({
  transaction_id: 'order_123456',
  total_value: 49.99,
  currency: 'EUR',
  items: [{
    product_id: 'ebook_astrovela',
    product_name: 'AstroVela eBook',
    product_type: 'ebook',
    price: 49.99,
    quantity: 1
  }],
  customer_email: 'user@example.com',
  customer_type: 'new',
  payment_method: 'credit_card'
});
```

### Lead Generation Tracking

```typescript
import { trackEmailCollected, trackUserRegistration } from '@/utils/marketing-events';

// Track email collection
trackEmailCollected({
  email: 'user@example.com',
  collection_method: 'quiz',
  step_in_flow: 'email_question',
  incentive_offered: 'free_natal_chart'
});

// Track user registration
trackUserRegistration({
  registration_method: 'email',
  user_source: 'quiz_completion',
  has_completed_quiz: true
});
```

### Content Engagement Tracking

```typescript
import { 
  trackNatalChartGenerated,
  trackBookCustomized,
  trackContentEngagement 
} from '@/utils/marketing-events';

// Track natal chart generation
trackNatalChartGenerated({
  chart_type: 'detailed_natal_chart',
  processing_time_seconds: 12,
  chart_complexity: 'detailed',
  birth_data_provided: true
});

// Track book customization
trackBookCustomized({
  customization_type: 'cover_design',
  design_choices: ['mystical_theme', 'gold_accents', 'custom_name'],
  time_spent_seconds: 180,
  satisfaction_rating: 5
});

// Track content engagement
trackContentEngagement({
  content_type: 'natal_chart',
  content_name: 'Personalized Natal Chart',
  engagement_time_seconds: 120,
  scroll_percentage: 85,
  interactions: 3
});
```

## 🔄 Integration Points

### 1. Quiz Component Integration

Add to `components/quiz/quiz-controller.tsx`:

```typescript
import { trackQuizStarted, trackQuizStepCompleted } from '@/utils/marketing-events';

export function QuizController() {
  const { currentStep } = useQuiz();
  
  // Track quiz start
  useEffect(() => {
    if (currentStep === 1) {
      trackQuizStarted({
        quiz_type: 'astrology_reading',
        landing_source: 'website'
      });
    }
  }, []);

  // Track step completions
  useEffect(() => {
    if (currentStep > 1) {
      trackQuizStepCompleted({
        step_number: currentStep - 1,
        step_name: getStepName(currentStep - 1),
        total_steps: 12,
        completion_percentage: ((currentStep - 1) / 12) * 100
      });
    }
  }, [currentStep]);
  
  // ... rest of component
}
```

### 2. Pricing Page Integration

Add to `app/pricing/page.tsx`:

```typescript
import { trackProductViewed } from '@/utils/marketing-events';

export default function PricingPage() {
  useEffect(() => {
    // Track product views when pricing page loads
    const products = [
      { id: 'ebook', name: 'AstroVela eBook', price: 49.99 },
      { id: 'paperback', name: 'AstroVela Paperback', price: 55.99 },
      { id: 'subscription', name: 'AstroVela Subscription', price: 30.99 }
    ];
    
    products.forEach(product => {
      trackProductViewed({
        product_id: product.id,
        product_name: product.name,
        product_type: product.id as 'ebook' | 'paperback' | 'subscription',
        price: product.price,
        currency: 'EUR',
        source: 'pricing_page'
      });
    });
  }, []);
  
  // ... rest of component
}
```

### 3. Shopify Checkout Integration

Add to checkout flow:

```typescript
import { trackCheckoutStarted, trackPurchaseCompleted } from '@/utils/marketing-events';

// When redirecting to Shopify checkout
const handleCheckout = async (cartItems) => {
  trackCheckoutStarted({
    product_ids: cartItems.map(item => item.id),
    product_names: cartItems.map(item => item.name),
    total_value: cartItems.reduce((sum, item) => sum + item.price, 0),
    currency: 'EUR',
    num_items: cartItems.length,
    checkout_method: 'shopify'
  });
  
  // Redirect to Shopify...
};

// On successful purchase (webhook/return page)
const handlePurchaseSuccess = (orderData) => {
  trackPurchaseCompleted({
    transaction_id: orderData.id,
    total_value: orderData.total_price,
    currency: orderData.currency,
    items: orderData.line_items.map(item => ({
      product_id: item.variant_id,
      product_name: item.title,
      product_type: item.properties?.type || 'unknown',
      price: item.price,
      quantity: item.quantity
    })),
    customer_email: orderData.email,
    customer_type: orderData.customer?.orders_count > 1 ? 'returning' : 'new'
  });
};
```

## 📊 Monitoring

### Dashboard Access

Visit `/dashboard/monitoring` to see:
- Marketing platform connection status
- Configuration completeness
- Platform-specific pixel IDs
- Recent event tracking
- Setup instructions for missing platforms

### API Endpoints

- **Marketing Status**: `GET /api/marketing/status`
- **Analytics Events**: `POST /api/analytics/events`

### Status Indicators

The monitoring dashboard shows:
- 🟢 **Configured**: Platform ID is set and tracking is active
- 🟡 **Partial**: Some platforms configured, others missing
- 🔴 **Not Configured**: No platform IDs set

## 🚀 Advanced Features

### Custom Event Tracking

```typescript
import { trackMarketingEvent, MarketingEvents } from '@/utils/marketing-tracking';

// Track custom events
trackMarketingEvent({
  event_name: 'CustomEvent',
  value: 10,
  currency: 'USD',
  custom_data: {
    custom_property: 'value',
    user_segment: 'premium'
  }
});
```

### Google Ads Conversion Tracking

```typescript
import { trackGoogleAdsConversion } from '@/utils/marketing-tracking';

trackGoogleAdsConversion({
  conversion_id: 'AW-123456789',
  conversion_label: 'purchase_conversion',
  value: 49.99,
  currency: 'EUR',
  transaction_id: 'order_123'
});
```

### UTM Parameter Tracking

The system automatically captures UTM parameters from URLs and includes them in event tracking for campaign attribution.

## ✅ Best Practices

1. **Privacy Compliance**: Email addresses are hashed before tracking
2. **Error Handling**: Failed tracking calls won't break user experience
3. **Development Mode**: Events are logged to console in development
4. **Performance**: All tracking is asynchronous and non-blocking
5. **Data Quality**: Validate data before tracking to ensure accuracy

## 🔧 Troubleshooting

### Common Issues

1. **Events not firing**: Check browser console for errors
2. **Platform not showing as connected**: Verify environment variables are set correctly
3. **Tracking not working**: Ensure ad blockers aren't interfering
4. **Data not appearing in platforms**: Allow 15-30 minutes for data to appear

### Debug Mode

Set `localStorage.setItem('marketing_debug', 'true')` in browser console to enable detailed logging.

## 📈 Performance Impact

- **Bundle size**: ~15KB additional JavaScript
- **Runtime impact**: Minimal, all tracking is asynchronous
- **Page load**: No blocking impact on page load times
- **Error resilience**: Failed tracking won't affect user experience 