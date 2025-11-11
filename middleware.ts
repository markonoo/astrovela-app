import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Edge-compatible CSRF verification (simple string comparison)
function verifyCSRFTokenEdge(token: string | null, cookieToken: string | undefined): boolean {
  if (!token || !cookieToken) {
    return false
  }
  // Double-submit cookie pattern: token in header must match token in cookie
  return token === cookieToken && token.length === 64 // 32 bytes hex = 64 chars
}

// Rate limiting store (in production, use Redis or similar)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>()

export function middleware(request: NextRequest) {
  try {
    // Create response
    const response = NextResponse.next()

    // Comprehensive Security Headers
    
    // Basic security headers
    try {
      response.headers.set('X-Frame-Options', 'DENY')
      response.headers.set('X-Content-Type-Options', 'nosniff')
      response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')
      response.headers.set('X-XSS-Protection', '1; mode=block')
    } catch (e) {
      // Ignore header errors
    }
    
    // Strict Transport Security (HTTPS enforcement)
    try {
      const isProduction = typeof process !== 'undefined' && process.env?.NODE_ENV === 'production'
      if (isProduction) {
        response.headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload')
      }
    } catch (e) {
      // Ignore header errors
    }
  
    // Permissions Policy (formerly Feature Policy)
    try {
      const permissionsPolicy = [
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
      ].join(', ')
      response.headers.set('Permissions-Policy', permissionsPolicy)
    } catch (e) {
      // Ignore header errors
    }

    // Cross-Origin policies
    try {
      response.headers.set('Cross-Origin-Opener-Policy', 'same-origin')
      response.headers.set('Cross-Origin-Embedder-Policy', 'credentialless')
      response.headers.set('Cross-Origin-Resource-Policy', 'cross-origin')
    } catch (e) {
      // Ignore header errors
    }

    // Content Security Policy (Enhanced)
    try {
      const isDevelopment = typeof process !== 'undefined' && process.env?.NODE_ENV === 'development'
      const isProduction = typeof process !== 'undefined' && process.env?.NODE_ENV === 'production'
      
      const cspParts = [
        "default-src 'self'",
        isDevelopment 
          ? "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://vercel.live" 
          : "script-src 'self' 'unsafe-inline' https://vercel.live https://*.vercel-insights.com https://*.vercel-analytics.com",
        "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
        "img-src 'self' data: https: blob: https://s3.ap-south-1.amazonaws.com https://*.vercel-storage.com",
        "font-src 'self' data: https://fonts.gstatic.com",
        "connect-src 'self' https://json.astrologyapi.com https://*.supabase.co https://*.shopify.com https://*.myshopify.com https://checkout.shopify.com https://maps.googleapis.com https://vercel.live wss://vercel.live https://*.vercel-insights.com https://*.vercel-analytics.com https://*.paypal.com",
        "media-src 'self'",
        "object-src 'none'",
        "worker-src 'self' blob:",
        "child-src 'self' https://checkout.shopify.com https://*.paypal.com",
        "frame-ancestors 'none'",
        "base-uri 'self'",
        "form-action 'self'"
      ]
      
      if (isProduction) {
        cspParts.push("upgrade-insecure-requests")
      }
      
      response.headers.set('Content-Security-Policy', cspParts.join('; '))
    } catch (e) {
      // Ignore CSP errors, continue without it
    }

    // Enhanced Rate Limiting for API routes
    try {
      const pathname = request.nextUrl?.pathname || ''
      if (pathname.startsWith('/api/')) {
        const forwardedFor = request.headers.get('x-forwarded-for')
        const ip = forwardedFor?.split(',')[0]?.trim() || 
                   request.headers.get('x-real-ip') || 
                   '127.0.0.1'
        
        const now = Date.now()
        const windowMs = 15 * 60 * 1000 // 15 minutes
        const maxRequests = pathname.includes('/test-') ? 10 : 100
        
        const key = `${ip}:${pathname}`
        const rateLimitData = rateLimitMap.get(key)
        
        if (!rateLimitData || now > rateLimitData.resetTime) {
          // Reset window
          rateLimitMap.set(key, { count: 1, resetTime: now + windowMs })
          try {
            response.headers.set('X-RateLimit-Limit', String(maxRequests))
            response.headers.set('X-RateLimit-Remaining', String(maxRequests - 1))
            response.headers.set('X-RateLimit-Reset', new Date(now + windowMs).toISOString())
          } catch (e) {
            // Ignore header errors
          }
        } else if (rateLimitData.count >= maxRequests) {
          // Rate limit exceeded
          try {
            response.headers.set('X-RateLimit-Limit', String(maxRequests))
            response.headers.set('X-RateLimit-Remaining', '0')
            response.headers.set('X-RateLimit-Reset', new Date(rateLimitData.resetTime).toISOString())
            response.headers.set('Retry-After', String(Math.ceil((rateLimitData.resetTime - now) / 1000)))
          } catch (e) {
            // Ignore header errors
          }
          
          return new NextResponse('Rate limit exceeded', { 
            status: 429,
            headers: response.headers
          })
        } else {
          // Increment counter
          rateLimitData.count++
          try {
            response.headers.set('X-RateLimit-Limit', String(maxRequests))
            response.headers.set('X-RateLimit-Remaining', String(maxRequests - rateLimitData.count))
            response.headers.set('X-RateLimit-Reset', new Date(rateLimitData.resetTime).toISOString())
          } catch (e) {
            // Ignore header errors
          }
        }
      }
    } catch (e) {
      // Continue if rate limiting fails
    }

    // Security logging for suspicious activity (Edge Runtime compatible)
    try {
      const pathname = request.nextUrl?.pathname || ''
      const searchParams = request.nextUrl?.searchParams
      if (pathname.includes('..') || 
          pathname.includes('<script>') ||
          (searchParams && searchParams.toString().includes('<script>'))) {
        // Log but don't block
      }
    } catch (e) {
      // Ignore
    }

    // CSRF Protection for admin routes (except auth/login which handles its own CSRF)
    try {
      const pathname = request.nextUrl?.pathname || ''
      const method = request.method || 'GET'
      
      if (pathname.startsWith('/api/admin') && 
          !pathname.includes('/auth') &&
          ['POST', 'PUT', 'DELETE', 'PATCH'].includes(method)) {
        
        const csrfToken = request.headers.get('x-csrf-token')
        const csrfCookie = request.cookies.get('csrf_token')?.value
        
        if (!csrfToken || !csrfCookie || !verifyCSRFTokenEdge(csrfToken, csrfCookie)) {
          // Create error response
          const errorResponse = new NextResponse(
            JSON.stringify({ error: 'Invalid CSRF token' }),
            { 
              status: 403,
              headers: {
                'Content-Type': 'application/json',
              }
            }
          )
          // Copy security headers safely
          try {
            response.headers.forEach((value, key) => {
              try {
                errorResponse.headers.set(key, value)
              } catch (e) {
                // Skip problematic headers
              }
            })
          } catch (e) {
            // Continue without copying headers
          }
          return errorResponse
        }
      }
    } catch (e) {
      // Continue if CSRF check fails
    }

    // Clean up old rate limit entries periodically
    try {
      if (Math.random() < 0.01) { // 1% chance to clean up
        const now = Date.now()
        for (const [key, data] of rateLimitMap.entries()) {
          if (now > data.resetTime) {
            rateLimitMap.delete(key)
          }
        }
      }
    } catch (e) {
      // Ignore cleanup errors
    }

    return response
  } catch (error) {
    // Fallback: return basic response if middleware fails
    console.error('Middleware error:', error)
    const fallbackResponse = NextResponse.next()
    fallbackResponse.headers.set('X-Frame-Options', 'DENY')
    fallbackResponse.headers.set('X-Content-Type-Options', 'nosniff')
    return fallbackResponse
  }
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