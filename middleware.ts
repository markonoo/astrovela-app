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

export function middleware(request: NextRequest) {
  // Create response first
  const response = NextResponse.next()

  // Set basic security headers (most important ones)
  try {
    response.headers.set('X-Frame-Options', 'DENY')
    response.headers.set('X-Content-Type-Options', 'nosniff')
    response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')
  } catch (e) {
    // Continue if headers fail
  }

  // CSRF Protection for admin routes only (simplified)
  try {
    const pathname = request.nextUrl?.pathname || ''
    const method = request.method || 'GET'
    
    if (pathname.startsWith('/api/admin') && 
        !pathname.includes('/auth') &&
        (method === 'POST' || method === 'PUT' || method === 'DELETE' || method === 'PATCH')) {
      
      const csrfToken = request.headers.get('x-csrf-token')
      const csrfCookie = request.cookies.get('csrf_token')?.value
      
      if (!csrfToken || !csrfCookie || !verifyCSRFTokenEdge(csrfToken, csrfCookie)) {
        return new NextResponse(
          JSON.stringify({ error: 'Invalid CSRF token' }),
          { 
            status: 403,
            headers: {
              'Content-Type': 'application/json',
            }
          }
        )
      }
    }
  } catch (e) {
    // Continue if CSRF check fails
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
