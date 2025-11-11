import { NextRequest, NextResponse } from "next/server"
import { logger } from "@/utils/logger"
import { verifyTOTP, getAdmin2FASecret, is2FAEnabled, generateQRCode, generate2FASecret } from "@/lib/admin-2fa"
import { adminLoginLimiter, getClientIP } from "@/lib/rate-limit"
import { verifyPassword } from "@/lib/password"
import { createAdminSession, setAdminSessionCookie, verifyAdminSession, getAdminSessionCookie } from "@/lib/admin-session"
import { logAdminLogin, logAdminLogout } from "@/lib/admin-audit"

/**
 * Admin Authentication API
 * Supports password + 2FA authentication with rate limiting and secure sessions
 */

interface LoginRequest {
  password: string
  totpCode?: string
  step?: 'password' | '2fa'
}

export async function POST(request: NextRequest) {
  try {
    const body: LoginRequest = await request.json()
    const { password, totpCode, step = 'password' } = body

    // Get client IP for rate limiting
    const clientIP = getClientIP(request)

    // Apply rate limiting
    try {
      await adminLoginLimiter.check(5, clientIP) // 5 attempts per 15 minutes
    } catch (rateLimitResult: any) {
      logger.warn("Admin login rate limited", { ip: clientIP })
      return NextResponse.json(
        { 
          success: false, 
          error: 'Too many login attempts. Please try again in 15 minutes.',
          rateLimited: true,
          retryAfter: Math.ceil((rateLimitResult.reset - Date.now()) / 1000)
        },
        { 
          status: 429,
          headers: {
            'X-RateLimit-Limit': '5',
            'X-RateLimit-Remaining': '0',
            'Retry-After': String(Math.ceil((rateLimitResult.reset - Date.now()) / 1000))
          }
        }
      )
    }

    // Get admin password hash from environment variable
    // If ADMIN_PASSWORD_HASH is set, use it; otherwise fall back to plain password for backward compatibility
    const adminPasswordHash = process.env.ADMIN_PASSWORD_HASH
    const adminPassword = process.env.ADMIN_PASSWORD || "admin123" // Fallback for development

    if (step === 'password') {
      // Step 1: Verify password
      let passwordValid = false
      
      if (adminPasswordHash) {
        // Use password hashing if hash is configured
        passwordValid = await verifyPassword(password, adminPasswordHash)
      } else {
        // Fallback to plain password comparison (for backward compatibility)
        passwordValid = password === adminPassword
      }

      if (!password || !passwordValid) {
        logger.warn("Admin login attempt failed - invalid password", { ip: clientIP })
        
        // Log failed login attempt
        await logAdminLogin(
          false,
          clientIP,
          request.headers.get('user-agent') || undefined,
          { step: 'password', reason: 'invalid_password' }
        )
        
        return NextResponse.json(
          { success: false, error: "Invalid password", step: 'password' },
          { status: 401 }
        )
      }

      // Check if 2FA is enabled
      const twoFAEnabled = is2FAEnabled()

      if (twoFAEnabled) {
        // Return success but require 2FA
        return NextResponse.json({
          success: true,
          step: '2fa',
          message: "Password verified. Please enter your 2FA code.",
          requires2FA: true,
        })
      } else {
        // No 2FA enabled, login successful - create secure session
        const sessionToken = createAdminSession()
        await setAdminSessionCookie(sessionToken)
        
        // Log successful login
        await logAdminLogin(
          true,
          clientIP,
          request.headers.get('user-agent') || undefined,
          { step: 'password', requires2FA: false }
        )
        
        logger.info("Admin login successful", { ip: clientIP })
        return NextResponse.json({
          success: true,
          step: 'complete',
          message: "Authentication successful",
          requires2FA: false,
        })
      }
    } else if (step === '2fa') {
      // Step 2: Verify 2FA code
      if (!totpCode) {
        return NextResponse.json(
          { success: false, error: "2FA code is required", step: '2fa' },
          { status: 400 }
        )
      }

      // Verify password was already checked
      let passwordValid = false
      
      if (adminPasswordHash) {
        passwordValid = await verifyPassword(password, adminPasswordHash)
      } else {
        passwordValid = password === adminPassword
      }

      if (!password || !passwordValid) {
        logger.warn("Admin login attempt failed - invalid password in 2FA step", { ip: clientIP })
        return NextResponse.json(
          { success: false, error: "Invalid password", step: 'password' },
          { status: 401 }
        )
      }

      try {
        const secret = getAdmin2FASecret()
        const isValid = verifyTOTP(totpCode, secret)

        if (isValid) {
          // Create secure session
          const sessionToken = createAdminSession()
          await setAdminSessionCookie(sessionToken)
          
          // Log successful login with 2FA
          await logAdminLogin(
            true,
            clientIP,
            request.headers.get('user-agent') || undefined,
            { step: '2fa', requires2FA: true }
          )
          
          logger.info("Admin login successful with 2FA", { ip: clientIP })
          return NextResponse.json({
            success: true,
            step: 'complete',
            message: "Authentication successful",
            requires2FA: true,
          })
        } else {
          logger.warn("Admin login attempt failed - invalid 2FA code", { ip: clientIP })
          
          // Log failed 2FA attempt
          await logAdminLogin(
            false,
            clientIP,
            request.headers.get('user-agent') || undefined,
            { step: '2fa', reason: 'invalid_2fa_code' }
          )
          
          return NextResponse.json(
            { success: false, error: "Invalid 2FA code", step: '2fa' },
            { status: 401 }
          )
        }
      } catch (error) {
        logger.error("2FA verification error", error)
        return NextResponse.json(
          { success: false, error: "2FA verification failed", step: '2fa' },
          { status: 500 }
        )
      }
    }

    return NextResponse.json(
      { success: false, error: "Invalid request" },
      { status: 400 }
    )
  } catch (error) {
    logger.error("Admin auth error", error)
    return NextResponse.json(
      { success: false, error: "Authentication failed" },
      { status: 500 }
    )
  }
}

/**
 * Setup 2FA - Generate secret and QR code
 * This should be called once to set up 2FA, then the secret should be stored in ADMIN_2FA_SECRET
 */
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const action = searchParams.get('action')

    if (action === 'setup') {
      // Generate new secret and QR code for setup
      const secret = generate2FASecret()
      const qrCode = await generateQRCode(secret, 'admin@astrovela.com')

      return NextResponse.json({
        success: true,
        secret, // In production, this should be shown only once and then stored securely
        qrCode,
        message: "Save this secret securely. Add it to your environment variables as ADMIN_2FA_SECRET",
      })
    }

    // Verify admin session using secure cookie-based session
    const sessionToken = await getAdminSessionCookie()
    
    if (sessionToken) {
      const session = verifyAdminSession(sessionToken)
      if (session && session.authenticated) {
        return NextResponse.json({ 
          authenticated: true,
          expiresAt: session.expiresAt
        })
      }
    }

    return NextResponse.json(
      { authenticated: false },
      { status: 401 }
    )
  } catch (error) {
    logger.error("Admin session verification error", error)
    return NextResponse.json(
      { authenticated: false },
      { status: 500 }
    )
  }
}
