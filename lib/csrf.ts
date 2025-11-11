/**
 * CSRF Protection Utilities
 * Prevents Cross-Site Request Forgery attacks
 */

import { randomBytes, createHmac } from 'crypto'
import { cookies } from 'next/headers'

const CSRF_SECRET = process.env.CSRF_SECRET || 'change-me-in-production-use-strong-secret'

/**
 * Generate a new CSRF token
 */
export function generateCSRFToken(): string {
  return randomBytes(32).toString('hex')
}

/**
 * Create a CSRF token for a session (HMAC-based)
 */
export function createCSRFToken(sessionId: string): string {
  const hmac = createHmac('sha256', CSRF_SECRET)
  hmac.update(sessionId)
  return hmac.digest('hex')
}

/**
 * Verify a CSRF token using double-submit cookie pattern
 * Token in header must match token in cookie
 */
export function verifyCSRFToken(token: string, cookieToken: string): boolean {
  if (!token || !cookieToken) {
    return false
  }
  
  // Double-submit cookie pattern: token in header must match token in cookie
  // Both are generated randomly, so they must be identical
  return token === cookieToken && token.length === 64 // 32 bytes hex = 64 chars
}

/**
 * Get CSRF token from cookie
 */
export async function getCSRFTokenFromCookie(): Promise<string | null> {
  const cookieStore = await cookies()
  return cookieStore.get('csrf_token')?.value || null
}

/**
 * Set CSRF token in cookie
 */
export async function setCSRFTokenCookie(token: string): Promise<void> {
  const cookieStore = await cookies()
  
  cookieStore.set('csrf_token', token, {
    httpOnly: false, // Must be accessible to JavaScript for double-submit pattern
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 60 * 60, // 1 hour
    path: '/'
  })
}

/**
 * Clear CSRF token cookie
 */
export async function clearCSRFTokenCookie(): Promise<void> {
  const cookieStore = await cookies()
  cookieStore.delete('csrf_token')
}

/**
 * Generate and set CSRF token (for initial page load)
 */
export async function initializeCSRF(): Promise<string> {
  const token = generateCSRFToken()
  await setCSRFTokenCookie(token)
  return token
}

