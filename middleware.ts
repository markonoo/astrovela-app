import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { SecurityMonitor, SECURITY_HEADERS, RATE_LIMITS } from '@/utils/security'
import { verifyCSRFToken } from '@/lib/csrf'

// Rate limiting store (in production, use Redis or similar)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>()

export function middleware(request: NextRequest) {
  // Create response
  const response = NextResponse.next()

  // Comprehensive Security Headers
  
  // Basic security headers
  response.headers.set('X-Frame-Options', 'DENY')
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')
  response.headers.set('X-XSS-Protection', '1; mode=block')
  
  // Strict Transport Security (HTTPS enforcement)
  if (process.env.NODE_ENV === 'production') {
    response.headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload')
  }
  
  // Permissions Policy (formerly Feature Policy)
  response.headers.set('Permissions-Policy', [
    'camera=()',
    'microphone=()',
    'geolocation=(self)',
    'interest-cohort=()',
    'payment=(self)',
    'usb=()',
    'magnetometer=()',
    'gyroscope=()',
    'accelerometer=()',
    'autoplay=()'
  ].join(', '))

  // Cross-Origin policies - Modified to allow external chart SVGs
  response.headers.set('Cross-Origin-Opener-Policy', 'same-origin')
  // Allow external resources from astrology API for chart SVGs
  response.headers.set('Cross-Origin-Embedder-Policy', 'credentialless')
  response.headers.set('Cross-Origin-Resource-Policy', 'cross-origin')

  // Content Security Policy (Enhanced)
  const isDevelopment = process.env.NODE_ENV === 'development'
  const csp = [
    "default-src 'self'",
    // Scripts: Allow self, necessary external scripts, and unsafe-inline for Vercel Analytics
    isDevelopment 
      ? "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://vercel.live" 
      : "script-src 'self' 'unsafe-inline' https://vercel.live https://*.vercel-insights.com https://*.vercel-analytics.com",
    // Styles: Allow self and inline styles (needed for dynamic theming)
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
    // Images: Allow data URLs, HTTPS sources, and astrology API S3, plus Vercel storage
    "img-src 'self' data: https: blob: https://s3.ap-south-1.amazonaws.com https://*.vercel-storage.com",
    // Fonts: Allow self, data URLs, and Google Fonts
    "font-src 'self' data: https://fonts.gstatic.com",
    // Connections: API endpoints and external services
    "connect-src 'self' https://json.astrologyapi.com https://*.supabase.co https://*.shopify.com https://*.myshopify.com https://checkout.shopify.com https://maps.googleapis.com https://vercel.live wss://vercel.live https://*.vercel-insights.com https://*.vercel-analytics.com https://*.paypal.com",
    // Media: Self only
    "media-src 'self'",
    // Objects: None allowed
    "object-src 'none'",
    // Workers: Self only
    "worker-src 'self' blob:",
    // Child frames: Allow Shopify checkout and PayPal
    "child-src 'self' https://checkout.shopify.com https://*.paypal.com",
    // Frame ancestors: None
    "frame-ancestors 'none'",
    // Base URI: Self only
    "base-uri 'self'",
    // Form actions: Self only
    "form-action 'self'",
    // Upgrade insecure requests in production
    ...(process.env.NODE_ENV === 'production' ? ["upgrade-insecure-requests"] : [])
  ].join('; ')
  
  response.headers.set('Content-Security-Policy', csp)

  // Enhanced Rate Limiting for API routes
  if (request.nextUrl.pathname.startsWith('/api/')) {
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0] ?? 
               request.headers.get('x-real-ip') ?? 
               '127.0.0.1'
    
    const now = Date.now()
    const windowMs = 15 * 60 * 1000 // 15 minutes
    const maxRequests = request.nextUrl.pathname.includes('/test-') ? 10 : 100 // Lower limit for test endpoints
    
    const key = `${ip}:${request.nextUrl.pathname}`
    const rateLimitData = rateLimitMap.get(key)
    
    if (!rateLimitData || now > rateLimitData.resetTime) {
      // Reset window
      rateLimitMap.set(key, { count: 1, resetTime: now + windowMs })
      response.headers.set('X-RateLimit-Limit', maxRequests.toString())
      response.headers.set('X-RateLimit-Remaining', (maxRequests - 1).toString())
      response.headers.set('X-RateLimit-Reset', new Date(now + windowMs).toISOString())
         } else if (rateLimitData.count >= maxRequests) {
       // Rate limit exceeded - log security event
       SecurityMonitor.logEvent({
         type: 'rate_limit_exceeded',
         ip,
         path: request.nextUrl.pathname,
         userAgent: request.headers.get('user-agent') ?? undefined,
         details: {
           maxRequests,
           currentCount: rateLimitData.count,
           windowMs
         }
       })
       
       response.headers.set('X-RateLimit-Limit', maxRequests.toString())
       response.headers.set('X-RateLimit-Remaining', '0')
       response.headers.set('X-RateLimit-Reset', new Date(rateLimitData.resetTime).toISOString())
       response.headers.set('Retry-After', Math.ceil((rateLimitData.resetTime - now) / 1000).toString())
       
       return new NextResponse('Rate limit exceeded', { 
         status: 429,
         headers: response.headers
       })
    } else {
      // Increment counter
      rateLimitData.count++
      response.headers.set('X-RateLimit-Limit', maxRequests.toString())
      response.headers.set('X-RateLimit-Remaining', (maxRequests - rateLimitData.count).toString())
      response.headers.set('X-RateLimit-Reset', new Date(rateLimitData.resetTime).toISOString())
    }
  }

  // Security logging for suspicious activity
  if (request.nextUrl.pathname.includes('..') || 
      request.nextUrl.pathname.includes('<script>') ||
      request.nextUrl.searchParams.toString().includes('<script>')) {
    
    SecurityMonitor.logEvent({
      type: 'suspicious_request',
      ip: request.headers.get('x-forwarded-for') ?? 'unknown',
      path: request.nextUrl.pathname,
      userAgent: request.headers.get('user-agent') ?? undefined,
      details: {
        searchParams: request.nextUrl.searchParams.toString(),
        method: request.method
      }
    })
  }

  // CSRF Protection for admin routes (except auth/login which handles its own CSRF)
  if (request.nextUrl.pathname.startsWith('/api/admin') && 
      !request.nextUrl.pathname.includes('/auth') &&
      ['POST', 'PUT', 'DELETE', 'PATCH'].includes(request.method)) {
    
    const csrfToken = request.headers.get('x-csrf-token')
    const csrfCookie = request.cookies.get('csrf_token')?.value
    
    if (!csrfToken || !csrfCookie || !verifyCSRFToken(csrfToken, csrfCookie)) {
      SecurityMonitor.logEvent({
        type: 'csrf_validation_failed',
        ip: request.headers.get('x-forwarded-for') ?? 'unknown',
        path: request.nextUrl.pathname,
        userAgent: request.headers.get('user-agent') ?? undefined,
        details: {
          method: request.method,
          hasToken: !!csrfToken,
          hasCookie: !!csrfCookie
        }
      })
      
      return new NextResponse(
        JSON.stringify({ error: 'Invalid CSRF token' }),
        { 
          status: 403,
          headers: {
            'Content-Type': 'application/json',
            ...Object.fromEntries(response.headers.entries())
          }
        }
      )
    }
  }

  // Clean up old rate limit entries periodically
  if (Math.random() < 0.01) { // 1% chance to clean up
    const now = Date.now()
    for (const [key, data] of rateLimitMap.entries()) {
      if (now > data.resetTime) {
        rateLimitMap.delete(key)
      }
    }
  }

  return response
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
} 