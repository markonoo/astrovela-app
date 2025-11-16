/**
 * Admin 2FA Utilities
 * Handles TOTP (Time-based One-Time Password) generation and verification
 * Compatible with Google Authenticator and other TOTP apps
 */

import { authenticator } from 'otplib'
import QRCode from 'qrcode'

// Service name for the authenticator app
const SERVICE_NAME = 'AstroVela Admin'
const ISSUER = 'AstroVela'

/**
 * Generate a new 2FA secret for admin
 */
export function generate2FASecret(): string {
  return authenticator.generateSecret()
}

/**
 * Generate a TOTP token from a secret
 */
export function generateTOTP(secret: string): string {
  return authenticator.generate(secret)
}

/**
 * Verify a TOTP token
 */
export function verifyTOTP(token: string, secret: string): boolean {
  try {
    return authenticator.verify({ token, secret })
  } catch (error) {
    return false
  }
}

/**
 * Generate QR code data URL for 2FA setup
 */
export async function generateQRCode(secret: string, email: string = 'admin'): Promise<string> {
  const otpauthUrl = authenticator.keyuri(email, ISSUER, secret)
  
  try {
    const qrCodeDataUrl = await QRCode.toDataURL(otpauthUrl, {
      errorCorrectionLevel: 'M',
      type: 'image/png',
      width: 300,
      margin: 1,
    })
    return qrCodeDataUrl
  } catch (error) {
    throw new Error('Failed to generate QR code')
  }
}

/**
 * Get the admin 2FA secret from environment variable
 * In production, this should be stored encrypted in a database
 */
export function getAdmin2FASecret(): string {
  const secret = process.env.ADMIN_2FA_SECRET
  
  if (!secret) {
    // Generate a new secret if not set (for first-time setup)
    // In production, this should be set in environment variables
    throw new Error('ADMIN_2FA_SECRET not configured. Please set it in environment variables.')
  }
  
  return secret
}

/**
 * Check if 2FA is enabled for admin
 * Returns false if not configured, allowing the route to handle it gracefully
 */
export function is2FAEnabled(): boolean {
  const enabled = !!process.env.ADMIN_2FA_SECRET
  return enabled
}

/**
 * Check if 2FA is properly configured for production
 * This should be called separately to validate configuration
 */
export function validate2FAConfig(): { valid: boolean; error?: string } {
  const enabled = is2FAEnabled()
  
  // SECURITY: In production, 2FA MUST be configured
  if (process.env.NODE_ENV === 'production' && !enabled) {
    return {
      valid: false,
      error: 'CRITICAL SECURITY ERROR: 2FA must be configured in production environment. Set ADMIN_2FA_SECRET in environment variables.'
    }
  }
  
  return { valid: true }
}



