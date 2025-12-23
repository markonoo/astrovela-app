/**
 * Admin Authentication Utilities
 * Helper functions to verify admin sessions and get admin info
 */

import { NextRequest } from 'next/server'
import { verifyAdminSession } from './admin-session'
import { logAdminDataAccess } from './admin-audit'
import { getClientIP } from './rate-limit'

/**
 * Verify admin is authenticated
 * Returns admin session info or null
 */
export async function verifyAdminAuth(request: NextRequest): Promise<{
  authenticated: boolean
  adminId?: string
} | null> {
  // Use request.cookies directly in route handlers (not cookies() helper)
  const sessionToken = request.cookies.get('admin_session')?.value
  
  if (!sessionToken) {
    console.log('[verifyAdminAuth] No session token found in cookies')
    return { authenticated: false }
  }
  
  const session = verifyAdminSession(sessionToken)
  
  if (!session || !session.authenticated) {
    console.log('[verifyAdminAuth] Session validation failed')
    return { authenticated: false }
  }
  
  return {
    authenticated: true,
    adminId: 'admin', // In future, can extract from session token
  }
}

/**
 * Middleware helper: Require admin authentication
 * Logs data access and returns 401 if not authenticated
 */
export async function requireAdminAuth(
  request: NextRequest,
  resource: string
): Promise<{
  authenticated: boolean
  adminId?: string
  response?: Response
}> {
  try {
    const auth = await verifyAdminAuth(request)
    
    if (!auth || !auth.authenticated) {
      console.log('[requireAdminAuth] Auth failed', { 
        hasAuth: !!auth, 
        authenticated: auth?.authenticated 
      })
      return {
        authenticated: false,
        response: new Response(
          JSON.stringify({ error: 'Unauthorized', reason: 'Invalid or expired session' }),
          { status: 401, headers: { 'Content-Type': 'application/json' } }
        ),
      }
    }
    
    // Log data access (don't let this fail the request)
    try {
      await logAdminDataAccess(
        resource,
        auth.adminId,
        getClientIP(request),
        request.headers.get('user-agent') || undefined
      )
    } catch (auditError) {
      console.warn('[requireAdminAuth] Audit logging failed (non-fatal)', auditError)
    }
    
    return auth
  } catch (error) {
    console.error('[requireAdminAuth] Unexpected error', error)
    return {
      authenticated: false,
      response: new Response(
        JSON.stringify({ 
          error: 'Authentication error', 
          details: error instanceof Error ? error.message : String(error)
        }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      ),
    }
  }
}













