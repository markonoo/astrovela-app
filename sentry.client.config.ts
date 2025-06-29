import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  
  integrations: [
    Sentry.replayIntegration({
      // Mask all text content for privacy
      maskAllText: true,
      // Block all media recording
      blockAllMedia: true,
    }),
  ],
  
  // Performance Monitoring
  tracesSampleRate: process.env.NODE_ENV === 'production' ? 0.1 : 1.0,
  
  // Session Replay
  replaysSessionSampleRate: 0.1, // 10% of sessions will be recorded
  replaysOnErrorSampleRate: 1.0, // 100% of sessions with errors will be recorded
  
  // Debug mode
  debug: process.env.NODE_ENV === 'development',
  
  // Environment
  environment: process.env.NODE_ENV,
  
  // Release tracking
  release: process.env.VERCEL_GIT_COMMIT_SHA || 'development',
  
  // Filter out development errors
  beforeSend(event, hint) {
    // Don't send errors in development unless explicitly enabled
    if (process.env.NODE_ENV === 'development' && !process.env.SENTRY_DEVELOPMENT) {
      return null;
    }
    
    // Filter out known non-critical errors
    const error = hint.originalException;
    if (error && typeof error === 'object' && 'message' in error) {
      const message = error.message as string;
      if (
        message.includes('ResizeObserver loop limit exceeded') ||
        message.includes('Non-Error promise rejection captured') ||
        message.includes('ChunkLoadError') ||
        message.includes('Failed to fetch') ||
        message.includes('BreadcrumbsPluginFetchError') ||
        message.includes('OpenTelemetry metrics')
      ) {
        return null;
      }
    }
    
    return event;
  },
}); 