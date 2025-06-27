// Temporarily using fallback implementation since web-vitals may have compatibility issues
// import { getCLS, getFID, getFCP, getLCP, getTTFB, onCLS, onFID, onFCP, onLCP, onTTFB } from 'web-vitals';

export interface PerformanceMetric {
  name: string;
  value: number;
  id: string;
  delta: number;
  navigationType?: string;
  timestamp: number;
  url?: string;
}

export interface CustomEventData {
  event: string;
  properties: Record<string, any>;
  timestamp: number;
  url?: string;
  userAgent?: string;
  sessionId?: string;
  userId?: string;
}

/**
 * Track Core Web Vitals and send to analytics
 */
export function trackWebVitals() {
  if (typeof window === 'undefined') return;

  try {
    // Try to import web-vitals dynamically
    import('web-vitals').then(({ onCLS, onFID, onFCP, onLCP, onTTFB }) => {
      // Cumulative Layout Shift
      onCLS(metric => {
        sendPerformanceMetric('CLS', metric);
      });
      
      // First Input Delay
      onFID(metric => {
        sendPerformanceMetric('FID', metric);
      });
      
      // First Contentful Paint
      onFCP(metric => {
        sendPerformanceMetric('FCP', metric);
      });
      
      // Largest Contentful Paint
      onLCP(metric => {
        sendPerformanceMetric('LCP', metric);
      });
      
      // Time to First Byte
      onTTFB(metric => {
        sendPerformanceMetric('TTFB', metric);
      });
    }).catch(error => {
      console.warn('Web Vitals not available:', error);
      // Fallback to basic performance monitoring
      trackBasicPerformance();
    });
  } catch (error) {
    console.warn('Failed to load web-vitals:', error);
    trackBasicPerformance();
  }
}

/**
 * Fallback performance tracking without web-vitals
 */
function trackBasicPerformance() {
  if (typeof window === 'undefined') return;
  
  // Track basic timing metrics using Performance API
  window.addEventListener('load', () => {
    setTimeout(() => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigation) {
        // Simulate LCP with load time
        sendPerformanceMetric('LCP', {
          value: navigation.loadEventEnd - navigation.loadEventStart,
          id: 'basic-lcp',
          delta: 0,
          navigationType: 'navigate'
        });
        
        // Simulate TTFB
        sendPerformanceMetric('TTFB', {
          value: navigation.responseStart - navigation.requestStart,
          id: 'basic-ttfb',
          delta: 0,
          navigationType: 'navigate'
        });
      }
    }, 0);
  });
}

/**
 * Send performance metric to analytics endpoint
 */
function sendPerformanceMetric(metricName: string, metric: any) {
  const performanceData: PerformanceMetric = {
    name: metricName,
    value: metric.value,
    id: metric.id,
    delta: metric.delta,
    navigationType: metric.navigationType,
    timestamp: Date.now(),
    url: window.location.href
  };
  
  if (process.env.NODE_ENV === 'production') {
    // Send to analytics in production
    fetch('/api/analytics/performance', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(performanceData),
      keepalive: true // Ensure request completes even if user navigates away
    }).catch(error => {
      console.warn('Failed to send performance metric:', error);
    });
  } else {
    // Log in development
    console.log(`📊 Performance ${metricName}:`, performanceData);
  }
}

/**
 * Track custom business events
 */
export function trackCustomEvent(eventName: string, properties: Record<string, any> = {}) {
  if (typeof window === 'undefined') return;
  
  const eventData: CustomEventData = {
    event: eventName,
    properties,
    timestamp: Date.now(),
    url: window.location.href,
    userAgent: navigator.userAgent,
    sessionId: getSessionId(),
    userId: getUserId()
  };
  
  if (process.env.NODE_ENV === 'production') {
    fetch('/api/analytics/events', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(eventData),
      keepalive: true
    }).catch(error => {
      console.warn('Failed to send custom event:', error);
    });
  } else {
    console.log(`📈 Custom Event ${eventName}:`, eventData);
  }
}

/**
 * Track page views
 */
export function trackPageView(path: string, title?: string) {
  trackCustomEvent('page_view', {
    path,
    title: title || document.title,
    referrer: document.referrer,
    timestamp: Date.now()
  });
}

/**
 * Track user interactions
 */
export function trackUserInteraction(action: string, element?: string, properties?: Record<string, any>) {
  trackCustomEvent('user_interaction', {
    action,
    element,
    ...properties
  });
}

/**
 * Track quiz progression
 */
export function trackQuizStep(step: number, stepName: string, completionRate?: number) {
  trackCustomEvent('quiz_step', {
    step,
    stepName,
    completionRate,
    timestamp: Date.now()
  });
}

/**
 * Track conversion events
 */
export function trackConversion(type: 'quiz_completed' | 'payment_started' | 'payment_completed', value?: number) {
  trackCustomEvent('conversion', {
    type,
    value,
    timestamp: Date.now()
  });
}

/**
 * Get or generate session ID
 */
function getSessionId(): string {
  if (typeof window === 'undefined') return 'server';
  
  let sessionId = sessionStorage.getItem('analytics_session_id');
  if (!sessionId) {
    sessionId = `session_${Date.now()}_${Math.random().toString(36).substring(2)}`;
    sessionStorage.setItem('analytics_session_id', sessionId);
  }
  return sessionId;
}

/**
 * Get user ID if available
 */
function getUserId(): string | undefined {
  if (typeof window === 'undefined') return undefined;
  
  // Try to get from local storage or your auth system
  return localStorage.getItem('user_id') || undefined;
}

/**
 * Monitor page load performance
 */
export function monitorPageLoad() {
  if (typeof window === 'undefined') return;
  
  window.addEventListener('load', () => {
    // Track total page load time
    const loadTime = performance.now();
    trackCustomEvent('page_load', {
      loadTime: Math.round(loadTime),
      timestamp: Date.now()
    });
    
    // Track resource loading times
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigation) {
      trackCustomEvent('navigation_timing', {
        domContentLoaded: Math.round(navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart),
        loadComplete: Math.round(navigation.loadEventEnd - navigation.loadEventStart),
        responseTime: Math.round(navigation.responseEnd - navigation.requestStart),
        timestamp: Date.now()
      });
    }
  });
} 