/**
 * Admin Authentication Utilities
 * Helper functions to verify admin sessions and get admin info
 */

import { NextRequest } from 'next/server'
import { getAdminSessionCookie, verifyAdminSession } from './admin-session'
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
  const sessionToken = await getAdminSessionCookie()
  
  if (!sessionToken) {
    return { authenticated: false }
  }
  
  const session = verifyAdminSession(sessionToken)
  
  if (!session || !session.authenticated) {
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
  const auth = await verifyAdminAuth(request)
  
  if (!auth || !auth.authenticated) {
    return {
      authenticated: false,
      response: new Response(
        JSON.stringify({ error: 'Unauthorized' }),
        { status: 401, headers: { 'Content-Type': 'application/json' } }
      ),
    }
  }
  
  // Log data access
  await logAdminDataAccess(
    resource,
    auth.adminId,
    getClientIP(request),
    request.headers.get('user-agent') || undefined
  )
  
  return auth
}







