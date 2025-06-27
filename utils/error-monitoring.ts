// import * as Sentry from '@sentry/nextjs'; // Temporarily disabled due to React version conflicts

export interface ErrorEvent {
  error: Error;
  errorInfo?: any;
  context?: Record<string, any>;
  userId?: string;
  sessionId?: string;
  severity?: 'low' | 'medium' | 'high' | 'critical';
}

export interface ErrorContext {
  userId?: string;
  sessionId?: string;
  userAgent?: string;
  url?: string;
  timestamp: number;
  buildId?: string;
  environment: string;
}

export class ErrorMonitor {
  /**
   * Capture and report an error with full context
   */
  static captureError(event: ErrorEvent) {
    const { error, errorInfo, context, userId, sessionId, severity = 'medium' } = event;
    
    // TODO: Add Sentry integration when React version conflicts are resolved
    // For now, we'll use console logging and our security monitoring system
    
    const errorData = {
      error: {
        message: error.message,
        stack: error.stack,
        name: error.name
      },
      userId,
      sessionId,
      severity,
      errorInfo,
      context,
      environment: {
        timestamp: Date.now(),
        url: typeof window !== 'undefined' ? window.location.href : 'server',
        userAgent: typeof window !== 'undefined' ? navigator.userAgent : 'server',
        buildId: process.env.VERCEL_GIT_COMMIT_SHA || 'development',
        environment: process.env.NODE_ENV
      }
    };
    
    // Log the error
    console.error('🚨 Error captured:', errorData);
    
    // Also log to our security monitor for security-related errors
    if (this.isSecurityError(error)) {
      this.logSecurityError(error, context, userId, sessionId);
    }
    
    // Log critical errors to console in development
    if (process.env.NODE_ENV === 'development' || severity === 'critical') {
      console.error('🚨 Error captured:', {
        message: error.message,
        stack: error.stack,
        context,
        severity,
        timestamp: new Date().toISOString()
      });
    }
  }
  
  /**
   * Capture a message with context
   */
  static captureMessage(message: string, level: 'info' | 'warning' | 'error' = 'info', context?: Record<string, any>) {
    const messageData = {
      message,
      level,
      context,
      timestamp: Date.now(),
      url: typeof window !== 'undefined' ? window.location.href : 'server'
    };
    
    console.log(`📝 Message captured [${level}]:`, messageData);
    
    // TODO: Send to external monitoring service when available
  }
  
  /**
   * Add breadcrumb for debugging
   */
  static addBreadcrumb(message: string, category: string = 'custom', data?: any, level: 'info' | 'warning' | 'error' = 'info') {
    const breadcrumb = {
      message,
      category,
      data,
      level,
      timestamp: Date.now()
    };
    
    if (process.env.NODE_ENV === 'development') {
      console.log('🍞 Breadcrumb:', breadcrumb);
    }
    
    // TODO: Store breadcrumbs for error context when Sentry is available
  }
  
  /**
   * Set user context for all subsequent errors
   */
  static setUser(userId: string, email?: string, username?: string) {
    // TODO: Set user context in Sentry when available
    console.log('👤 User context set:', { id: userId, email, username });
  }
  
  /**
   * Set custom tags for filtering
   */
  static setTag(key: string, value: string) {
    // TODO: Set tags in Sentry when available
    console.log('🏷️ Tag set:', { key, value });
  }
  
  /**
   * Track performance issues
   */
  static trackPerformanceIssue(name: string, duration: number, context?: Record<string, any>) {
    const performanceData = {
      name,
      duration,
      context,
      timestamp: Date.now(),
      severity: duration > 3000 ? 'warning' : 'info'
    };
    
    console.log('⚡ Performance issue:', performanceData);
    
    // Also track as custom event if duration is concerning
    if (duration > 3000) { // More than 3 seconds
      this.captureMessage(`Performance issue: ${name} took ${duration}ms`, 'warning', {
        duration,
        ...context
      });
    }
  }
  
  /**
   * Check if error is security-related
   */
  private static isSecurityError(error: Error): boolean {
    const securityKeywords = [
      'security', 'unauthorized', 'forbidden', 'csrf', 'xss', 
      'injection', 'authentication', 'permission', 'token'
    ];
    
    const errorMessage = error.message.toLowerCase();
    const errorName = error.name.toLowerCase();
    
    return securityKeywords.some(keyword => 
      errorMessage.includes(keyword) || errorName.includes(keyword)
    );
  }
  
  /**
   * Log security errors to our security monitoring system
   */
  private static logSecurityError(error: Error, context?: Record<string, any>, userId?: string, sessionId?: string) {
    try {
      // Import SecurityMonitor dynamically to avoid circular dependencies
      import('./security').then(({ SecurityMonitor }) => {
        SecurityMonitor.logEvent({
          type: 'security_error',
          ip: 'client',
          path: context?.path || (typeof window !== 'undefined' ? window.location.pathname : 'unknown'),
          userAgent: typeof window !== 'undefined' ? navigator.userAgent : undefined,
          details: {
            error: error.message,
            stack: error.stack,
            userId,
            sessionId,
            context
          }
        });
      });
    } catch (e) {
      console.warn('Failed to log security error to SecurityMonitor:', e);
    }
  }
}

/**
 * React Error Boundary helper
 */
export function withErrorBoundary<P extends object>(
  Component: React.ComponentType<P>,
  fallback?: React.ComponentType<{ error: Error; resetError: () => void }>
) {
  // TODO: Implement proper error boundary with Sentry when available
  // For now, return the component as-is
  return Component;
}

/**
 * API route error handler
 */
export function handleApiError(error: unknown, context?: Record<string, any>): Response {
  const errorObj = error instanceof Error ? error : new Error(String(error));
  
  ErrorMonitor.captureError({
    error: errorObj,
    context: {
      ...context,
      type: 'api_error'
    },
    severity: 'high'
  });
  
  return new Response(
    JSON.stringify({
      error: 'Internal server error',
      message: process.env.NODE_ENV === 'development' ? errorObj.message : 'Something went wrong',
      timestamp: new Date().toISOString()
    }),
    {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    }
  );
} 