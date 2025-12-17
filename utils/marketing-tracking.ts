// Marketing Tracking Utilities
// Supports Meta Pixel, Google Analytics 4, Google Ads, TikTok, and more

'use client';

import { logger } from './logger';

// TypeScript interfaces for marketing events
export interface MarketingEventData {
  event_name: string;
  event_id?: string;
  value?: number;
  currency?: string;
  content_ids?: string[];
  content_type?: string;
  content_name?: string;
  content_category?: string;
  num_items?: number;
  search_string?: string;
  custom_data?: Record<string, any>;
  user_data?: {
    email?: string;
    phone?: string;
    first_name?: string;
    last_name?: string;
    city?: string;
    state?: string;
    country?: string;
    zip_code?: string;
  };
}

export interface GAEventData {
  action: string;
  category: string;
  label?: string;
  value?: number;
  custom_parameters?: Record<string, any>;
}

export interface ConversionEventData {
  conversion_id: string;
  conversion_label?: string;
  value?: number;
  currency?: string;
  transaction_id?: string;
}

// Marketing Platform Status
export interface MarketingPlatformStatus {
  platform: string;
  status: 'connected' | 'disconnected' | 'error';
  pixel_id?: string;
  measurement_id?: string;
  last_event?: string;
  last_event_time?: number;
  events_today?: number;
  error_message?: string;
}

// Environment variable helpers
const getEnvVar = (key: string): string | undefined => {
  if (typeof window !== 'undefined') {
    return (window as any)?.__ENV__?.[key] || process.env[key];
  }
  return process.env[key];
};

// Platform IDs
const META_PIXEL_ID = getEnvVar('NEXT_PUBLIC_META_PIXEL_ID');
const GA_MEASUREMENT_ID = getEnvVar('NEXT_PUBLIC_GA_MEASUREMENT_ID');
const GOOGLE_ADS_ID = getEnvVar('NEXT_PUBLIC_GOOGLE_ADS_ID');
const TIKTOK_PIXEL_ID = getEnvVar('NEXT_PUBLIC_TIKTOK_PIXEL_ID');
const PINTEREST_TAG_ID = getEnvVar('NEXT_PUBLIC_PINTEREST_TAG_ID');
const TWITTER_PIXEL_ID = getEnvVar('NEXT_PUBLIC_TWITTER_PIXEL_ID');

// Global tracking state
let trackingInitialized = false;
let lastEventTimes: Record<string, number> = {};
let eventCounts: Record<string, number> = {};

/**
 * Initialize all marketing tracking pixels
 */
export function initializeMarketingTracking(): void {
  if (typeof window === 'undefined' || trackingInitialized) return;

  logger.info('Initializing marketing tracking');

  // Initialize Meta Pixel (Facebook/Instagram)
  if (META_PIXEL_ID) {
    initializeMetaPixel();
  }

  // Initialize Google Analytics 4
  if (GA_MEASUREMENT_ID) {
    initializeGoogleAnalytics();
  }

  // Initialize Google Ads
  if (GOOGLE_ADS_ID) {
    initializeGoogleAds();
  }

  // Initialize TikTok Pixel
  if (TIKTOK_PIXEL_ID) {
    initializeTikTokPixel();
  }

  // Initialize Pinterest Tag
  if (PINTEREST_TAG_ID) {
    initializePinterestTag();
  }

  // Initialize Twitter Pixel
  if (TWITTER_PIXEL_ID) {
    initializeTwitterPixel();
  }

  trackingInitialized = true;
  logger.info('Marketing tracking initialized');
}

/**
 * Meta Pixel (Facebook/Instagram Ads) Implementation
 */
function initializeMetaPixel(): void {
  try {
    // Load Facebook Pixel
    (function(f: any, b: any, e: any, v: any, n?: any, t?: any, s?: any) {
      if (f.fbq) return;
      n = f.fbq = function() {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = !0;
      n.version = '2.0';
      n.queue = [];
      t = b.createElement(e);
      t.async = !0;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');

    // Initialize pixel
    (window as any).fbq('init', META_PIXEL_ID);
    (window as any).fbq('track', 'PageView');

    logger.info('Meta Pixel initialized', { pixelId: META_PIXEL_ID });
  } catch (error) {
    logger.error('Meta Pixel initialization failed', error);
  }
}

/**
 * Google Analytics 4 Implementation
 */
function initializeGoogleAnalytics(): void {
  try {
    // Load Google Analytics
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script1);

    // Initialize gtag
    (window as any).dataLayer = (window as any).dataLayer || [];
    function gtag(...args: any[]) {
      (window as any).dataLayer.push(args);
    }
    (window as any).gtag = gtag;

    gtag('js', new Date());
    gtag('config', GA_MEASUREMENT_ID, {
      page_title: document.title,
      page_location: window.location.href,
    });

    logger.info('Google Analytics 4 initialized', { measurementId: GA_MEASUREMENT_ID });
  } catch (error) {
    logger.error('Google Analytics initialization failed', error);
  }
}

/**
 * Google Ads Conversion Tracking
 */
function initializeGoogleAds(): void {
  try {
    // Load Google Ads conversion tracking
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`;
    document.head.appendChild(script);

    // Configure Google Ads
    if (!(window as any).gtag) {
      (window as any).dataLayer = (window as any).dataLayer || [];
      function gtag(...args: any[]) {
        (window as any).dataLayer.push(args);
      }
      (window as any).gtag = gtag;
    }

    (window as any).gtag('config', GOOGLE_ADS_ID);

    logger.info('Google Ads initialized', { adsId: GOOGLE_ADS_ID });
  } catch (error) {
    logger.error('Google Ads initialization failed', error);
  }
}

/**
 * TikTok Pixel Implementation
 */
function initializeTikTokPixel(): void {
  try {
    // Load TikTok Pixel
    (function (w: any, d: any, t: any) {
      w.TiktokAnalyticsObject = t;
      var ttq = w[t] = w[t] || [];
      ttq.methods = ["page", "track", "identify", "instances", "debug", "on", "off", "once", "ready", "alias", "group", "enableCookie", "disableCookie"];
      ttq.setAndDefer = function (t: any, e: any) {
        t[e] = function () {
          t.push([e].concat(Array.prototype.slice.call(arguments, 0)));
        };
      };
      for (var i = 0; i < ttq.methods.length; i++) ttq.setAndDefer(ttq, ttq.methods[i]);
      ttq.instance = function (t: any) {
        for (var e = ttq._i[t] || [], n = 0; n < ttq.methods.length; n++) ttq.setAndDefer(e, ttq.methods[n]);
        return e;
      };
      ttq.load = function (e: any, n: any) {
        var i = "https://analytics.tiktok.com/i18n/pixel/events.js";
        ttq._i = ttq._i || {};
        ttq._i[e] = [];
        ttq._i[e]._u = i;
        ttq._t = ttq._t || {};
        ttq._t[e] = +new Date();
        ttq._o = ttq._o || {};
        ttq._o[e] = n || {};
        var o = document.createElement("script");
        o.type = "text/javascript";
        o.async = !0;
        o.src = i + "?sdkid=" + e + "&lib=" + t;
        var a = document.getElementsByTagName("script")[0];
        a.parentNode!.insertBefore(o, a);
      };

      ttq.load(TIKTOK_PIXEL_ID);
      ttq.page();
    })(window, document, 'ttq');

    logger.info('TikTok Pixel initialized', { pixelId: TIKTOK_PIXEL_ID });
  } catch (error) {
    logger.error('TikTok Pixel initialization failed', error);
  }
}

/**
 * Pinterest Tag Implementation
 */
function initializePinterestTag(): void {
  try {
    (function(e: any) {
      if (!(window as any).pintrk) {
        (window as any).pintrk = function() {
          (window as any).pintrk.queue.push(Array.prototype.slice.call(arguments));
        };
        var n = (window as any).pintrk;
        n.queue = [];
        n.version = "3.0";
        var t = document.createElement("script");
        t.async = !0;
        t.src = e;
        var r = document.getElementsByTagName("script")[0];
        r.parentNode!.insertBefore(t, r);
      }
    })("https://s.pinimg.com/ct/core.js");

    (window as any).pintrk('load', PINTEREST_TAG_ID);
    (window as any).pintrk('page');

    logger.info('Pinterest Tag initialized', { tagId: PINTEREST_TAG_ID });
  } catch (error) {
    logger.error('Pinterest Tag initialization failed', error);
  }
}

/**
 * Twitter Pixel Implementation
 */
function initializeTwitterPixel(): void {
  try {
    (function(e: any, t: any, n: any, s: any, u: any, a: any) {
      e.twq || (s = e.twq = function() {
        s.exe ? s.exe.apply(s, arguments) : s.queue.push(arguments);
      }, s.version = '1.1', s.queue = [], u = t.createElement(n), u.async = !0, u.src = '//static.ads-twitter.com/uwt.js',
      a = t.getElementsByTagName(n)[0], a.parentNode.insertBefore(u, a));
    })(window, document, 'script', undefined, undefined, undefined);

    (window as any).twq('init', TWITTER_PIXEL_ID);
    (window as any).twq('track', 'PageView');

    logger.info('Twitter Pixel initialized', { pixelId: TWITTER_PIXEL_ID });
  } catch (error) {
    logger.error('Twitter Pixel initialization failed', error);
  }
}

/**
 * Track standard marketing events across all platforms
 */
export function trackMarketingEvent(eventData: MarketingEventData): void {
  if (typeof window === 'undefined') return;

  const { event_name, value, currency = 'USD', content_ids, content_type, custom_data, user_data } = eventData;
  
  // Update tracking state
  lastEventTimes[event_name] = Date.now();
  eventCounts[event_name] = (eventCounts[event_name] || 0) + 1;

  // Track to Meta Pixel
  if (META_PIXEL_ID && (window as any).fbq) {
    try {
      const metaEventData: any = {};
      if (value !== undefined) metaEventData.value = value;
      if (currency) metaEventData.currency = currency;
      if (content_ids) metaEventData.content_ids = content_ids;
      if (content_type) metaEventData.content_type = content_type;
      if (custom_data) Object.assign(metaEventData, custom_data);

      (window as any).fbq('track', event_name, metaEventData);
    } catch (error) {
      logger.error('Meta Pixel tracking error', error);
    }
  }

  // Track to Google Analytics 4
  if (GA_MEASUREMENT_ID && (window as any).gtag) {
    try {
      const gaEventData: any = {};
      if (value !== undefined) gaEventData.value = value;
      if (currency) gaEventData.currency = currency;
      if (custom_data) Object.assign(gaEventData, custom_data);

      (window as any).gtag('event', event_name, gaEventData);
    } catch (error) {
      logger.error('Google Analytics tracking error', error);
    }
  }

  // Track to TikTok Pixel
  if (TIKTOK_PIXEL_ID && (window as any).ttq) {
    try {
      const tiktokEventData: any = {};
      if (value !== undefined) tiktokEventData.value = value;
      if (currency) tiktokEventData.currency = currency;
      if (content_ids) tiktokEventData.content_ids = content_ids;
      if (custom_data) Object.assign(tiktokEventData, custom_data);

      (window as any).ttq.track(event_name, tiktokEventData);
    } catch (error) {
      logger.error('TikTok Pixel tracking error', error);
    }
  }

  // Track to Pinterest
  if (PINTEREST_TAG_ID && (window as any).pintrk) {
    try {
      const pinterestEventData: any = {};
      if (value !== undefined) pinterestEventData.value = value;
      if (currency) pinterestEventData.currency = currency;
      if (custom_data) Object.assign(pinterestEventData, custom_data);

      (window as any).pintrk('track', event_name, pinterestEventData);
    } catch (error) {
      logger.error('Pinterest tracking error', error);
    }
  }

  // Track to Twitter
  if (TWITTER_PIXEL_ID && (window as any).twq) {
    try {
      const twitterEventData: any = {};
      if (value !== undefined) twitterEventData.value = value;
      if (currency) twitterEventData.currency = currency;
      if (custom_data) Object.assign(twitterEventData, custom_data);

      (window as any).twq('track', event_name, twitterEventData);
    } catch (error) {
      logger.error('Twitter tracking error', error);
    }
  }

  // Log in development
  if (process.env.NODE_ENV === 'development') {
    logger.debug(`Marketing Event: ${event_name}`, { eventData });
  }
}

/**
 * Track Google Ads conversions
 */
export function trackGoogleAdsConversion(conversionData: ConversionEventData): void {
  if (typeof window === 'undefined' || !GOOGLE_ADS_ID || !(window as any).gtag) return;

  try {
    (window as any).gtag('event', 'conversion', {
      send_to: `${GOOGLE_ADS_ID}/${conversionData.conversion_label}`,
      value: conversionData.value,
      currency: conversionData.currency || 'USD',
      transaction_id: conversionData.transaction_id,
    });

    logger.debug('Google Ads Conversion tracked', { conversionData });
  } catch (error) {
    logger.error('Google Ads conversion tracking error', error);
  }
}

/**
 * Enhanced commerce tracking for purchases
 */
export function trackPurchase(purchaseData: {
  transaction_id: string;
  value: number;
  currency: string;
  items: Array<{
    item_id: string;
    item_name: string;
    category: string;
    quantity: number;
    price: number;
  }>;
  user_data?: any;
}): void {
  // Track as marketing event
  trackMarketingEvent({
    event_name: 'Purchase',
    value: purchaseData.value,
    currency: purchaseData.currency,
    content_ids: purchaseData.items.map(item => item.item_id),
    content_type: 'product',
    custom_data: {
      transaction_id: purchaseData.transaction_id,
      num_items: purchaseData.items.length,
      items: purchaseData.items,
    },
    user_data: purchaseData.user_data,
  });

  // Enhanced ecommerce for Google Analytics
  if (GA_MEASUREMENT_ID && (window as any).gtag) {
    try {
      (window as any).gtag('event', 'purchase', {
        transaction_id: purchaseData.transaction_id,
        value: purchaseData.value,
        currency: purchaseData.currency,
        items: purchaseData.items.map(item => ({
          item_id: item.item_id,
          item_name: item.item_name,
          item_category: item.category,
          quantity: item.quantity,
          price: item.price,
        })),
      });
    } catch (error) {
      logger.error('Enhanced ecommerce tracking error', error);
    }
  }
}

/**
 * Get marketing platform status for monitoring
 */
export function getMarketingPlatformStatus(): MarketingPlatformStatus[] {
  const platforms: MarketingPlatformStatus[] = [];

  // Meta Pixel status
  platforms.push({
    platform: 'Meta Pixel',
    status: META_PIXEL_ID && (window as any)?.fbq ? 'connected' : 'disconnected',
    pixel_id: META_PIXEL_ID,
    last_event: getLastEvent('meta'),
    last_event_time: lastEventTimes['Purchase'] || lastEventTimes['PageView'],
    events_today: getTodayEventCount(),
  });

  // Google Analytics 4 status
  platforms.push({
    platform: 'Google Analytics 4',
    status: GA_MEASUREMENT_ID && (window as any)?.gtag ? 'connected' : 'disconnected',
    measurement_id: GA_MEASUREMENT_ID,
    last_event: getLastEvent('ga'),
    last_event_time: lastEventTimes['page_view'],
    events_today: getTodayEventCount(),
  });

  // Google Ads status
  platforms.push({
    platform: 'Google Ads',
    status: GOOGLE_ADS_ID && (window as any)?.gtag ? 'connected' : 'disconnected',
    measurement_id: GOOGLE_ADS_ID,
    last_event: getLastEvent('google_ads'),
    last_event_time: lastEventTimes['conversion'],
    events_today: getTodayEventCount(),
  });

  // TikTok Pixel status
  platforms.push({
    platform: 'TikTok Pixel',
    status: TIKTOK_PIXEL_ID && (window as any)?.ttq ? 'connected' : 'disconnected',
    pixel_id: TIKTOK_PIXEL_ID,
    last_event: getLastEvent('tiktok'),
    last_event_time: lastEventTimes['CompletePayment'],
    events_today: getTodayEventCount(),
  });

  // Pinterest Tag status
  platforms.push({
    platform: 'Pinterest Tag',
    status: PINTEREST_TAG_ID && (window as any)?.pintrk ? 'connected' : 'disconnected',
    pixel_id: PINTEREST_TAG_ID,
    last_event: getLastEvent('pinterest'),
    last_event_time: lastEventTimes['checkout'],
    events_today: getTodayEventCount(),
  });

  // Twitter Pixel status
  platforms.push({
    platform: 'Twitter Pixel',
    status: TWITTER_PIXEL_ID && (window as any)?.twq ? 'connected' : 'disconnected',
    pixel_id: TWITTER_PIXEL_ID,
    last_event: getLastEvent('twitter'),
    last_event_time: lastEventTimes['PageView'],
    events_today: getTodayEventCount(),
  });

  return platforms;
}

// Helper functions
function getLastEvent(platform: string): string {
  // This would typically come from stored analytics data
  return 'PageView';
}

function getTodayEventCount(): number {
  // Sum up today's events across all types
  return Object.values(eventCounts).reduce((sum, count) => sum + count, 0);
}

// Predefined marketing events for easy use
export const MarketingEvents = {
  // Standard events
  PAGE_VIEW: 'PageView',
  VIEW_CONTENT: 'ViewContent',
  SEARCH: 'Search',
  ADD_TO_CART: 'AddToCart',
  ADD_TO_WISHLIST: 'AddToWishlist',
  INITIATE_CHECKOUT: 'InitiateCheckout',
  ADD_PAYMENT_INFO: 'AddPaymentInfo',
  PURCHASE: 'Purchase',
  LEAD: 'Lead',
  COMPLETE_REGISTRATION: 'CompleteRegistration',
  
  // Custom AstroBook events
  QUIZ_STARTED: 'QuizStarted',
  QUIZ_STEP_COMPLETED: 'QuizStepCompleted',
  QUIZ_COMPLETED: 'QuizCompleted',
  NATAL_CHART_GENERATED: 'NatalChartGenerated',
  BOOK_CUSTOMIZED: 'BookCustomized',
  EMAIL_COLLECTED: 'EmailCollected',
  PRODUCT_VIEWED: 'ProductViewed',
  CHECKOUT_STARTED: 'CheckoutStarted',
  PAYMENT_METHOD_SELECTED: 'PaymentMethodSelected',
  ORDER_COMPLETED: 'OrderCompleted',
} as const;

// Export types
export type MarketingEventName = typeof MarketingEvents[keyof typeof MarketingEvents]; 