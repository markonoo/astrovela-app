/**
 * CSRF Protection Utilities
 * Prevents Cross-Site Request Forgery attacks
 */

import { randomBytes, createHmac } from 'crypto'

const CSRF_SECRET = process.env.CSRF_SECRET || 'change-me-in-production-use-strong-secret'

/**
 * Generate a new CSRF token
 * Client-safe version (doesn't use server-only APIs)
 */
export function generateCSRFToken(): string {
  // Use crypto.randomBytes if available (Node.js), otherwise use browser crypto
  if (typeof window === 'undefined') {
    // Server-side: use Node.js crypto
    try {
      return randomBytes(32).toString('hex')
    } catch {
      // Fallback if crypto not available (Edge Runtime)
      const array = new Uint8Array(32)
      if (typeof globalThis.crypto !== 'undefined' && globalThis.crypto.getRandomValues) {
        globalThis.crypto.getRandomValues(array)
      } else {
        // Last resort: use Math.random (less secure but works everywhere)
        for (let i = 0; i < 32; i++) {
          array[i] = Math.floor(Math.random() * 256)
        }
      }
      return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('')
    }
  } else {
    // Browser environment - use Web Crypto API
    const array = new Uint8Array(32)
    crypto.getRandomValues(array)
    return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('')
  }
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
 * Get CSRF token from cookie (server-only)
 */
export async function getCSRFTokenFromCookie(): Promise<string | null> {
  // Dynamic import to avoid pulling in next/headers during build
  const { cookies } = await import('next/headers')
  const cookieStore = await cookies()
  return cookieStore.get('csrf_token')?.value || null
}

/**
 * Set CSRF token in cookie (server-only)
 */
export async function setCSRFTokenCookie(token: string): Promise<void> {
  // Dynamic import to avoid pulling in next/headers during build
  const { cookies } = await import('next/headers')
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
 * Clear CSRF token cookie (server-only)
 */
export async function clearCSRFTokenCookie(): Promise<void> {
  // Dynamic import to avoid pulling in next/headers during build
  const { cookies } = await import('next/headers')
  const cookieStore = await cookies()
  cookieStore.delete('csrf_token')
}

/**
 * Generate and set CSRF token (for initial page load) (server-only)
 */
export async function initializeCSRF(): Promise<string> {
  const token = generateCSRFToken()
  await setCSRFTokenCookie(token)
  return token
}

