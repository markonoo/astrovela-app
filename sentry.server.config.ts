import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  
  // Performance Monitoring
  tracesSampleRate: process.env.NODE_ENV === 'production' ? 0.1 : 1.0,
  
  // Debug mode
  debug: process.env.NODE_ENV === 'development',
  
  // Environment
  environment: process.env.NODE_ENV,
  
  // Release tracking
  release: process.env.VERCEL_GIT_COMMIT_SHA || 'development',
  
  // Server-specific integrations
  integrations: [
    // Add HTTP integration for API monitoring
    Sentry.httpIntegration(),
  ],
  
  // Filter server-side errors
  beforeSend(event, hint) {
    // Don't send errors in development unless explicitly enabled
    if (process.env.NODE_ENV === 'development' && !process.env.SENTRY_DEVELOPMENT) {
      return null;
    }
    
    // Filter out known non-critical server errors
    const error = hint.originalException;
    if (error && typeof error === 'object' && 'message' in error) {
      const message = error.message as string;
      if (
        message.includes('ECONNRESET') ||
        message.includes('socket hang up') ||
        message.includes('timeout')
      ) {
        return null;
      }
    }
    
    return event;
  },
}); 