/**
 * Centralized logging utility for AstroVela
 * Replaces console.log/error/warn with proper logging levels
 */

type LogLevel = 'debug' | 'info' | 'warn' | 'error'

interface LogContext {
  [key: string]: any
}

class Logger {
  private isDevelopment = process.env.NODE_ENV === 'development'
  private isProduction = process.env.NODE_ENV === 'production'

  /**
   * Log debug messages (only in development)
   */
  debug(message: string, context?: LogContext): void {
    if (this.isDevelopment) {
      console.debug(`[DEBUG] ${message}`, context || '')
    }
  }

  /**
   * Log informational messages
   */
  info(message: string, context?: LogContext): void {
    if (this.isDevelopment || this.isProduction) {
      console.info(`[INFO] ${message}`, context || '')
    }
  }

  /**
   * Log warning messages
   */
  warn(message: string, context?: LogContext): void {
    console.warn(`[WARN] ${message}`, context || '')
    
    // In production, could send to monitoring service
    if (this.isProduction) {
      // TODO: Send to error monitoring service
    }
  }

  /**
   * Log error messages
   */
  error(message: string, error?: Error | unknown, context?: LogContext): void {
    const errorObj = error instanceof Error ? error : new Error(String(error))
    
    console.error(`[ERROR] ${message}`, {
      error: errorObj.message,
      stack: errorObj.stack,
      ...context
    })

    // In production, send to error monitoring service
    if (this.isProduction) {
      // TODO: Integrate with Sentry or error monitoring service
      // ErrorMonitor.captureError(errorObj, context)
    }
  }

  /**
   * Log pricing page specific debug messages
   */
  pricing(message: string, context?: LogContext): void {
    if (this.isDevelopment) {
      this.debug(`[PRICING] ${message}`, context)
    }
  }

  /**
   * Log API route specific messages
   */
  api(route: string, message: string, context?: LogContext): void {
    if (this.isDevelopment) {
      this.debug(`[API:${route}] ${message}`, context)
    }
  }

  /**
   * Log quiz flow specific messages
   */
  quiz(message: string, context?: LogContext): void {
    if (this.isDevelopment) {
      this.debug(`[QUIZ] ${message}`, context)
    }
  }

  /**
   * Log security events
   */
  security(event: string, context?: LogContext): void {
    this.warn(`[SECURITY] ${event}`, context)
    
    // Always log security events, even in production
    if (this.isProduction) {
      // TODO: Send to security monitoring service
    }
  }
}

// Export singleton instance
export const logger = new Logger()

// Export for convenience
export default logger








