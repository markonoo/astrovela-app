'use client';

import { useEffect } from 'react';
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
// import { trackWebVitals, monitorPageLoad, trackPageView } from '@/utils/performance';
// import { initializeMarketingTracking, trackMarketingEvent, MarketingEvents } from '@/utils/marketing-tracking';
import { usePathname } from 'next/navigation';

/**
 * Analytics setup component - should be included in the root layout
 * Includes Vercel Analytics, Speed Insights, and custom tracking (when re-enabled)
 */
export function AnalyticsSetup() {
  const pathname = usePathname();

  useEffect(() => {
    // TODO: Re-enable performance monitoring
    // trackWebVitals();
    // monitorPageLoad();
    
    // TODO: Re-enable marketing tracking
    // initializeMarketingTracking();
    
    // Track initial page view
    if (pathname) {
      // trackPageView(pathname);
      
      // Track marketing page view
      // trackMarketingEvent({
      //   event_name: MarketingEvents.PAGE_VIEW,
      //   custom_data: {
      //     page_path: pathname,
      //     page_title: typeof document !== 'undefined' ? document.title : 'Unknown',
      //   },
      // });
    }
  }, []);

  // Track page changes
  useEffect(() => {
    if (pathname) {
      // trackPageView(pathname);
      
      // Track marketing page view for route changes
      // trackMarketingEvent({
      //   event_name: MarketingEvents.PAGE_VIEW,
      //   custom_data: {
      //     page_path: pathname,
      //     page_title: typeof document !== 'undefined' ? document.title : 'Unknown',
      //   },
      // });
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
      }).catch(() => {
        // Fallback if error monitoring fails
        console.error('Analytics error:', event.message);
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
      }).catch(() => {
        // Fallback if error monitoring fails
        console.error('Analytics promise rejection:', event.reason);
      });
    };

    window.addEventListener('error', handleUnhandledError);
    window.addEventListener('unhandledrejection', handleUnhandledRejection);

    return () => {
      window.removeEventListener('error', handleUnhandledError);
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
    };
  }, []);

  // Return Vercel Analytics and Speed Insights components
  return (
    <>
      <Analytics />
      <SpeedInsights />
    </>
  );
} 