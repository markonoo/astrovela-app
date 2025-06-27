/**
 * Security utilities for monitoring and protection
 */

export interface SecurityEvent {
  type: 'rate_limit_exceeded' | 'suspicious_request' | 'invalid_input' | 'unauthorized_access'
  ip: string
  userAgent?: string
  path: string
  timestamp: string
  details?: Record<string, any>
}

export class SecurityMonitor {
  private static events: SecurityEvent[] = []
  private static readonly MAX_EVENTS = 1000

  /**
   * Log a security event
   */
  static logEvent(event: Omit<SecurityEvent, 'timestamp'>) {
    const securityEvent: SecurityEvent = {
      ...event,
      timestamp: new Date().toISOString()
    }

    this.events.push(securityEvent)

    // Keep only the most recent events
    if (this.events.length > this.MAX_EVENTS) {
      this.events = this.events.slice(-this.MAX_EVENTS)
    }

    // Log critical events
    if (event.type === 'suspicious_request') {
      console.warn('🚨 Security Alert:', securityEvent)
    }

    // In production, you might want to send this to an external monitoring service
    if (process.env.NODE_ENV === 'production') {
      // TODO: Send to monitoring service (Sentry, DataDog, etc.)
    }
  }

  /**
   * Get recent security events
   */
  static getRecentEvents(limit = 50): SecurityEvent[] {
    return this.events.slice(-limit)
  }

  /**
   * Get events by type
   */
  static getEventsByType(type: SecurityEvent['type']): SecurityEvent[] {
    return this.events.filter(event => event.type === type)
  }

  /**
   * Clear all events (for testing)
   */
  static clearEvents() {
    this.events = []
  }
}

/**
 * Validate and sanitize request parameters
 */
export function sanitizeRequestParams(params: Record<string, any>): Record<string, any> {
  const sanitized: Record<string, any> = {}

  for (const [key, value] of Object.entries(params)) {
    if (typeof value === 'string') {
      // Remove potentially dangerous characters
      const cleanValue = value
        .replace(/<script[^>]*>.*?<\/script>/gi, '')
        .replace(/<[^>]*>/g, '')
        .replace(/javascript:/gi, '')
        .replace(/on\w+\s*=/gi, '')
        .trim()

      if (cleanValue.length > 0 && cleanValue.length <= 1000) {
        sanitized[key] = cleanValue
      }
    } else if (typeof value === 'number' && isFinite(value)) {
      sanitized[key] = value
    } else if (typeof value === 'boolean') {
      sanitized[key] = value
    }
    // Skip other types or invalid values
  }

  return sanitized
}

/**
 * Check if an IP address is suspicious
 */
export function isSuspiciousIP(ip: string): boolean {
  // Basic checks for obviously malicious patterns
  const suspiciousPatterns = [
    /^0\.0\.0\.0$/,
    /^127\.0\.0\.1$/,
    /^192\.168\./,
    /^10\./,
    /^172\.(1[6-9]|2[0-9]|3[0-1])\./
  ]

  return suspiciousPatterns.some(pattern => pattern.test(ip))
}

/**
 * Generate a secure nonce for CSP
 */
export function generateNonce(): string {
  if (typeof crypto !== 'undefined' && crypto.randomUUID) {
    return crypto.randomUUID().replace(/-/g, '')
  }
  
  // Fallback for environments without crypto.randomUUID
  return Math.random().toString(36).substring(2, 15) + 
         Math.random().toString(36).substring(2, 15)
}

/**
 * Security headers configuration
 */
export const SECURITY_HEADERS = {
  development: {
    'Content-Security-Policy': [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://vercel.live",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "img-src 'self' data: https: blob:",
      "font-src 'self' data: https://fonts.gstatic.com",
      "connect-src 'self' https://json.astrologyapi.com https://*.supabase.co https://*.shopify.com https://*.myshopify.com https://maps.googleapis.com https://vercel.live wss://vercel.live",
      "media-src 'self'",
      "object-src 'none'",
      "worker-src 'self' blob:",
      "child-src 'none'",
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "form-action 'self'"
    ].join('; ')
  },
  production: {
    'Content-Security-Policy': [
      "default-src 'self'",
      "script-src 'self' https://vercel.live https://*.vercel-insights.com",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "img-src 'self' data: https: blob:",
      "font-src 'self' data: https://fonts.gstatic.com",
      "connect-src 'self' https://json.astrologyapi.com https://*.supabase.co https://*.shopify.com https://*.myshopify.com https://maps.googleapis.com https://vercel.live wss://vercel.live https://*.vercel-insights.com",
      "media-src 'self'",
      "object-src 'none'",
      "worker-src 'self' blob:",
      "child-src 'none'",
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "upgrade-insecure-requests"
    ].join('; ')
  }
} as const

/**
 * Rate limiting configuration
 */
export const RATE_LIMITS = {
  api: {
    windowMs: 15 * 60 * 1000, // 15 minutes
    maxRequests: 100
  },
  apiTest: {
    windowMs: 15 * 60 * 1000, // 15 minutes
    maxRequests: 10
  },
  auth: {
    windowMs: 15 * 60 * 1000, // 15 minutes
    maxRequests: 5
  }
} as const 