// AstroBook Marketing Event Helpers
// Predefined event triggers for the quiz and e-commerce flow

'use client';

import { trackMarketingEvent, trackPurchase, MarketingEvents } from './marketing-tracking';

/**
 * Quiz Flow Marketing Events
 */

export function trackQuizStarted(data: {
  quiz_type?: string;
  landing_source?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
}) {
  trackMarketingEvent({
    event_name: MarketingEvents.QUIZ_STARTED,
    custom_data: {
      quiz_type: data.quiz_type || 'astrology_reading',
      landing_source: data.landing_source,
      utm_source: data.utm_source,
      utm_medium: data.utm_medium,
      utm_campaign: data.utm_campaign,
      timestamp: Date.now(),
    },
  });
}

export function trackQuizStepCompleted(data: {
  step_number: number;
  step_name: string;
  total_steps: number;
  completion_percentage: number;
  time_spent_seconds?: number;
}) {
  trackMarketingEvent({
    event_name: MarketingEvents.QUIZ_STEP_COMPLETED,
    custom_data: {
      step_number: data.step_number,
      step_name: data.step_name,
      total_steps: data.total_steps,
      completion_percentage: data.completion_percentage,
      time_spent_seconds: data.time_spent_seconds,
      progress: `${data.step_number}/${data.total_steps}`,
    },
  });
}

export function trackQuizCompleted(data: {
  total_steps: number;
  completion_time_seconds: number;
  zodiac_sign?: string;
  birth_location?: string;
  user_type?: 'returning' | 'new';
}) {
  trackMarketingEvent({
    event_name: MarketingEvents.QUIZ_COMPLETED,
    value: 1, // Completion value
    custom_data: {
      total_steps: data.total_steps,
      completion_time_seconds: data.completion_time_seconds,
      completion_time_minutes: Math.round(data.completion_time_seconds / 60),
      zodiac_sign: data.zodiac_sign,
      birth_location: data.birth_location,
      user_type: data.user_type,
      quiz_completion_rate: 100,
    },
  });

  // Also track as Lead event for marketing platforms
  trackMarketingEvent({
    event_name: MarketingEvents.LEAD,
    value: 25, // Lead value
    currency: 'USD',
    custom_data: {
      lead_type: 'quiz_completion',
      zodiac_sign: data.zodiac_sign,
      quality_score: 'high', // Quiz completions are high quality leads
    },
  });
}

/**
 * Content Generation Events
 */

export function trackNatalChartGenerated(data: {
  chart_type: string;
  processing_time_seconds?: number;
  chart_complexity?: 'basic' | 'detailed' | 'premium';
  birth_data_provided: boolean;
}) {
  trackMarketingEvent({
    event_name: MarketingEvents.NATAL_CHART_GENERATED,
    custom_data: {
      chart_type: data.chart_type,
      processing_time_seconds: data.processing_time_seconds,
      chart_complexity: data.chart_complexity,
      birth_data_provided: data.birth_data_provided,
      content_generation: 'success',
    },
  });

  // Track as ViewContent for marketing optimization
  trackMarketingEvent({
    event_name: MarketingEvents.VIEW_CONTENT,
    content_type: 'natal_chart',
    content_name: `${data.chart_type} Natal Chart`,
    custom_data: {
      content_category: 'astrology',
      chart_complexity: data.chart_complexity,
    },
  });
}

export function trackBookCustomized(data: {
  customization_type: string;
  design_choices: string[];
  time_spent_seconds?: number;
  satisfaction_rating?: number;
}) {
  trackMarketingEvent({
    event_name: MarketingEvents.BOOK_CUSTOMIZED,
    custom_data: {
      customization_type: data.customization_type,
      design_choices: data.design_choices,
      num_design_choices: data.design_choices.length,
      time_spent_seconds: data.time_spent_seconds,
      satisfaction_rating: data.satisfaction_rating,
      engagement_level: data.time_spent_seconds && data.time_spent_seconds > 120 ? 'high' : 'normal',
    },
  });
}

/**
 * User Data Collection Events
 */

export function trackEmailCollected(data: {
  email: string;
  collection_method: 'quiz' | 'newsletter' | 'checkout' | 'lead_magnet';
  step_in_flow?: string;
  incentive_offered?: string;
}) {
  // Hash email for privacy in tracking
  const emailHash = btoa(data.email).substring(0, 16);

  trackMarketingEvent({
    event_name: MarketingEvents.EMAIL_COLLECTED,
    custom_data: {
      email_hash: emailHash,
      collection_method: data.collection_method,
      step_in_flow: data.step_in_flow,
      incentive_offered: data.incentive_offered,
      lead_quality: data.collection_method === 'quiz' ? 'high' : 'medium',
    },
  });

  // Track as Lead for marketing platforms
  trackMarketingEvent({
    event_name: MarketingEvents.LEAD,
    value: 15, // Email lead value
    currency: 'USD',
    custom_data: {
      lead_type: 'email_collection',
      collection_method: data.collection_method,
    },
  });
}

export function trackUserRegistration(data: {
  registration_method: 'email' | 'social' | 'guest';
  user_source?: string;
  has_completed_quiz: boolean;
}) {
  trackMarketingEvent({
    event_name: MarketingEvents.COMPLETE_REGISTRATION,
    value: 30, // Registration value
    currency: 'USD',
    custom_data: {
      registration_method: data.registration_method,
      user_source: data.user_source,
      has_completed_quiz: data.has_completed_quiz,
      user_quality: data.has_completed_quiz ? 'high' : 'medium',
    },
  });
}

/**
 * E-commerce Events
 */

export function trackProductViewed(data: {
  product_id: string;
  product_name: string;
  product_type: 'ebook' | 'paperback' | 'subscription';
  price: number;
  currency: string;
  source?: string;
}) {
  trackMarketingEvent({
    event_name: MarketingEvents.PRODUCT_VIEWED,
    content_type: 'product',
    content_ids: [data.product_id],
    content_name: data.product_name,
    value: data.price,
    currency: data.currency,
    custom_data: {
      product_type: data.product_type,
      source: data.source,
      viewing_timestamp: Date.now(),
    },
  });

  // Also track as ViewContent
  trackMarketingEvent({
    event_name: MarketingEvents.VIEW_CONTENT,
    content_type: 'product',
    content_name: data.product_name,
    content_category: 'astrology_books',
    value: data.price,
    currency: data.currency,
    custom_data: {
      product_id: data.product_id,
      product_type: data.product_type,
    },
  });
}

export function trackAddToCart(data: {
  product_id: string;
  product_name: string;
  product_type: string;
  price: number;
  currency: string;
  quantity?: number;
}) {
  trackMarketingEvent({
    event_name: MarketingEvents.ADD_TO_CART,
    content_type: 'product',
    content_ids: [data.product_id],
    content_name: data.product_name,
    value: data.price * (data.quantity || 1),
    currency: data.currency,
    custom_data: {
      product_type: data.product_type,
      quantity: data.quantity || 1,
      cart_value: data.price * (data.quantity || 1),
    },
  });
}

export function trackCheckoutStarted(data: {
  product_ids: string[];
  product_names: string[];
  total_value: number;
  currency: string;
  num_items: number;
  checkout_method?: 'shopify' | 'direct';
}) {
  trackMarketingEvent({
    event_name: MarketingEvents.INITIATE_CHECKOUT,
    content_type: 'product',
    content_ids: data.product_ids,
    value: data.total_value,
    currency: data.currency,
    num_items: data.num_items,
    custom_data: {
      product_names: data.product_names,
      checkout_method: data.checkout_method,
      cart_size: data.num_items,
      average_item_value: data.total_value / data.num_items,
    },
  });

  // Track as CheckoutStarted for specific platforms
  trackMarketingEvent({
    event_name: MarketingEvents.CHECKOUT_STARTED,
    value: data.total_value,
    currency: data.currency,
    custom_data: {
      num_items: data.num_items,
      checkout_method: data.checkout_method,
    },
  });
}

export function trackPaymentMethodSelected(data: {
  payment_method: string;
  total_value: number;
  currency: string;
}) {
  trackMarketingEvent({
    event_name: MarketingEvents.ADD_PAYMENT_INFO,
    value: data.total_value,
    currency: data.currency,
    custom_data: {
      payment_method: data.payment_method,
      checkout_step: 'payment_method_selected',
    },
  });

  trackMarketingEvent({
    event_name: MarketingEvents.PAYMENT_METHOD_SELECTED,
    value: data.total_value,
    currency: data.currency,
    custom_data: {
      payment_method: data.payment_method,
    },
  });
}

export function trackPurchaseCompleted(data: {
  transaction_id: string;
  total_value: number;
  currency: string;
  items: Array<{
    product_id: string;
    product_name: string;
    product_type: string;
    price: number;
    quantity: number;
  }>;
  customer_email?: string;
  customer_type?: 'new' | 'returning';
  payment_method?: string;
}) {
  // Track the main purchase event
  trackPurchase({
    transaction_id: data.transaction_id,
    value: data.total_value,
    currency: data.currency,
    items: data.items.map(item => ({
      item_id: item.product_id,
      item_name: item.product_name,
      category: item.product_type,
      quantity: item.quantity,
      price: item.price,
    })),
    user_data: data.customer_email ? {
      email: data.customer_email,
    } : undefined,
  });

  // Track as OrderCompleted for internal analytics
  trackMarketingEvent({
    event_name: MarketingEvents.ORDER_COMPLETED,
    value: data.total_value,
    currency: data.currency,
    custom_data: {
      transaction_id: data.transaction_id,
      num_items: data.items.length,
      customer_type: data.customer_type,
      payment_method: data.payment_method,
      average_order_value: data.total_value,
      order_items: data.items.map(item => item.product_type),
    },
  });
}

/**
 * Engagement Events
 */

export function trackSearchPerformed(data: {
  search_string: string;
  search_category?: string;
  results_count?: number;
}) {
  trackMarketingEvent({
    event_name: MarketingEvents.SEARCH,
    search_string: data.search_string,
    custom_data: {
      search_category: data.search_category,
      results_count: data.results_count,
      search_length: data.search_string.length,
    },
  });
}

export function trackContentEngagement(data: {
  content_type: string;
  content_name: string;
  engagement_time_seconds: number;
  scroll_percentage?: number;
  interactions?: number;
}) {
  trackMarketingEvent({
    event_name: 'ContentEngagement',
    content_type: data.content_type,
    content_name: data.content_name,
    custom_data: {
      engagement_time_seconds: data.engagement_time_seconds,
      scroll_percentage: data.scroll_percentage,
      interactions: data.interactions,
      engagement_quality: data.engagement_time_seconds > 60 ? 'high' : 'low',
    },
  });
}

/**
 * Social and Sharing Events
 */

export function trackSocialShare(data: {
  platform: 'facebook' | 'twitter' | 'instagram' | 'tiktok' | 'pinterest';
  content_type: string;
  content_name: string;
}) {
  trackMarketingEvent({
    event_name: 'SocialShare',
    content_type: data.content_type,
    content_name: data.content_name,
    custom_data: {
      platform: data.platform,
      share_type: 'organic',
    },
  });
}

export function trackReferralGenerated(data: {
  referral_code: string;
  referrer_type: 'customer' | 'influencer' | 'affiliate';
}) {
  trackMarketingEvent({
    event_name: 'ReferralGenerated',
    custom_data: {
      referral_code: data.referral_code,
      referrer_type: data.referrer_type,
    },
  });
}

// Utility function to track all events in a quiz session
export function trackQuizSession(sessionData: {
  steps_completed: Array<{
    step_number: number;
    step_name: string;
    time_spent_seconds: number;
  }>;
  total_completion_time: number;
  final_result?: any;
  dropped_at_step?: number;
}) {
  // Track individual steps
  sessionData.steps_completed.forEach(step => {
    trackQuizStepCompleted({
      step_number: step.step_number,
      step_name: step.step_name,
      total_steps: sessionData.steps_completed.length,
      completion_percentage: (step.step_number / sessionData.steps_completed.length) * 100,
      time_spent_seconds: step.time_spent_seconds,
    });
  });

  // Track completion or abandonment
  if (sessionData.final_result) {
    trackQuizCompleted({
      total_steps: sessionData.steps_completed.length,
      completion_time_seconds: sessionData.total_completion_time,
      zodiac_sign: sessionData.final_result.zodiac_sign,
      birth_location: sessionData.final_result.birth_location,
    });
  } else if (sessionData.dropped_at_step) {
    trackMarketingEvent({
      event_name: 'QuizAbandoned',
      custom_data: {
        dropped_at_step: sessionData.dropped_at_step,
        completion_percentage: (sessionData.dropped_at_step / sessionData.steps_completed.length) * 100,
        time_before_drop: sessionData.total_completion_time,
      },
    });
  }
} 