'use client';

import { useEffect } from 'react';
import { trackWebVitals, monitorPageLoad, trackPageView } from '@/utils/performance';
import { initializeMarketingTracking, trackMarketingEvent, MarketingEvents } from '@/utils/marketing-tracking';
import { usePathname } from 'next/navigation';

/**
 * Analytics setup component - should be included in the root layout
 */
export function AnalyticsSetup() {
  const pathname = usePathname();

  useEffect(() => {
    // Initialize performance monitoring
    trackWebVitals();
    monitorPageLoad();
    
    // Initialize marketing tracking (Meta Pixel, Google Analytics, etc.)
    initializeMarketingTracking();
    
    // Track initial page view
    if (pathname) {
      trackPageView(pathname);
      
      // Track marketing page view
      trackMarketingEvent({
        event_name: MarketingEvents.PAGE_VIEW,
        custom_data: {
          page_path: pathname,
          page_title: typeof document !== 'undefined' ? document.title : 'Unknown',
        },
      });
    }
  }, []);

  // Track page changes
  useEffect(() => {
    if (pathname) {
      trackPageView(pathname);
      
      // Track marketing page view for route changes
      trackMarketingEvent({
        event_name: MarketingEvents.PAGE_VIEW,
        custom_data: {
          page_path: pathname,
          page_title: typeof document !== 'undefined' ? document.title : 'Unknown',
        },
      });
    }
  }, [pathname]);

  // Global error handler for unhandled errors
  useEffect(() => {
    const handleUnhandledError = (event: ErrorEvent) => {
      // Import ErrorMonitor dynamically to avoid SSR issues
      import('@/utils/error-monitoring').then(({ ErrorMonitor }) => {
        ErrorMonitor.captureError({
          error: new Error(event.message),
          context: {
            filename: event.filename,
            lineno: event.lineno,
            colno: event.colno,
            type: 'unhandled_error'
          },
          severity: 'high'
        });
      });
    };

    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      import('@/utils/error-monitoring').then(({ ErrorMonitor }) => {
        ErrorMonitor.captureError({
          error: new Error(String(event.reason)),
          context: {
            type: 'unhandled_promise_rejection'
          },
          severity: 'medium'
        });
      });
    };

    window.addEventListener('error', handleUnhandledError);
    window.addEventListener('unhandledrejection', handleUnhandledRejection);

    return () => {
      window.removeEventListener('error', handleUnhandledError);
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
    };
  }, []);

  // This component doesn't render anything
  return null;
} 