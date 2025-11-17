/**
 * Admin Session Management
 * Secure session handling using JWT tokens and httpOnly cookies
 * Compatible with Vercel Edge Runtime
 */

import jwt from 'jsonwebtoken'
import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

const JWT_SECRET = process.env.ADMIN_JWT_SECRET || 'change-me-in-production-use-strong-secret'
const SESSION_DURATION = 4 * 60 * 60 * 1000 // 4 hours in milliseconds

export interface AdminSession {
  authenticated: boolean
  expiresAt: number
  issuedAt: number
}

/**
 * Create a new admin session token
 */
export function createAdminSession(): string {
  const now = Date.now()
  const expiresAt = now + SESSION_DURATION
  
  const token = jwt.sign(
    { 
      authenticated: true, 
      expiresAt,
      issuedAt: now,
      type: 'admin'
    },
    JWT_SECRET,
    { expiresIn: '4h' }
  )
  
  return token
}

/**
 * Verify an admin session token
 */
export function verifyAdminSession(token: string): AdminSession | null {
  try {
    const decoded = jwt.verify(token, JWT_SECRET) as any
    
    // Additional validation
    if (decoded.type !== 'admin' || decoded.authenticated !== true) {
      return null
    }
    
    // Check expiration
    if (decoded.expiresAt && Date.now() > decoded.expiresAt) {
      return null
    }
    
    return {
      authenticated: true,
      expiresAt: decoded.expiresAt || Date.now() + SESSION_DURATION,
      issuedAt: decoded.issuedAt || Date.now()
    }
  } catch (error) {
    // Token invalid, expired, or malformed
    return null
  }
}

/**
 * Add session cookie to a NextResponse
 * Use this in API routes to set the cookie on the response
 */
export function addSessionCookie(response: NextResponse, token: string): NextResponse {
  response.cookies.set('admin_session', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: SESSION_DURATION / 1000, // Convert to seconds
    path: '/'
  })
  return response
}

/**
 * Get admin session cookie from request
 */
export function getSessionCookieFromRequest(request: Request): string | null {
  const cookieHeader = request.headers.get('cookie')
  if (!cookieHeader) return null
  
  const cookies = cookieHeader.split(';').map(c => c.trim())
  const sessionCookie = cookies.find(c => c.startsWith('admin_session='))
  
  if (!sessionCookie) return null
  
  return sessionCookie.split('=')[1] || null
}

/**
 * Get admin session cookie (for server components using cookies())
 */
export async function getAdminSessionCookie(): Promise<string | null> {
  try {
    const cookieStore = await cookies()
    return cookieStore.get('admin_session')?.value || null
  } catch (error) {
    return null
  }
}

/**
 * Clear admin session cookie on a NextResponse
 */
export function clearSessionCookie(response: NextResponse): NextResponse {
  response.cookies.delete('admin_session')
  return response
}

/**
 * Clear admin session cookie (for server components)
 */
export async function clearAdminSessionCookie(): Promise<void> {
  try {
    const cookieStore = await cookies()
    cookieStore.delete('admin_session')
  } catch (error) {
    // Ignore errors in edge runtime
  }
}

/**
 * Check if admin session is valid
 */
export async function isAdminSessionValid(): Promise<boolean> {
  const token = await getAdminSessionCookie()
  if (!token) {
    return false
  }
  
  const session = verifyAdminSession(token)
  return session !== null && session.authenticated
}

/**
 * Get current admin session (for server components)
 */
export async function getAdminSession(): Promise<AdminSession | null> {
  const token = await getAdminSessionCookie()
  if (!token) {
    return null
  }
  
  return verifyAdminSession(token)
}





