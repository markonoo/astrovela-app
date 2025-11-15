import { NextRequest, NextResponse } from "next/server"
import { logger } from "@/utils/logger"
import { verifyTOTP, getAdmin2FASecret, is2FAEnabled } from "@/lib/admin-2fa"
import { adminLoginLimiter, getClientIP } from "@/lib/rate-limit"
import { verifyPassword } from "@/lib/password"
import { createAdminSession, setAdminSessionCookie, verifyAdminSession, getAdminSessionCookie } from "@/lib/admin-session"

/**
 * Admin Authentication API
 * Supports password + 2FA authentication with rate limiting and secure sessions
 * Route: /api/admin/auth (POST, GET)
 * 
 * TEMPORARY: Database features (audit logging, recovery codes) disabled for debugging
 */

interface LoginRequest {
  password: string
  totpCode?: string
  step?: 'password' | '2fa'
}

export async function POST(request: NextRequest) {
  try {
    // Log incoming request
    logger.info("Admin auth request received", {
      method: request.method,
      url: request.url,
      headers: Object.fromEntries(request.headers.entries())
    })

    const clientIP = getClientIP(request)
    
    // Rate limiting: 5 attempts per 15 minutes
    try {
      await adminLoginLimiter.check(5, clientIP)
    } catch (rateLimitResult: any) {
      logger.warn("Admin login rate limited", { ip: clientIP })
      return NextResponse.json(
        { error: "Too many login attempts. Please try again later." },
        { 
          status: 429,
          headers: {
            'X-RateLimit-Limit': String(rateLimitResult.limit || 5),
            'X-RateLimit-Remaining': String(rateLimitResult.remaining || 0),
            'X-RateLimit-Reset': new Date(rateLimitResult.reset || Date.now()).toISOString()
          }
        }
      )
    }

    // Parse request body
    let body: LoginRequest
    try {
      body = await request.json()
      logger.info("Parsed request body", { step: body.step, hasPassword: !!body.password, hasTotpCode: !!body.totpCode })
    } catch (parseError) {
      logger.error("Failed to parse request body", { error: String(parseError) })
      return NextResponse.json(
        { error: "Invalid request format" },
        { status: 400 }
      )
    }

    const { password, totpCode, step = 'password' } = body

    // Step 1: Password verification
    if (step === 'password') {
      if (!password) {
        return NextResponse.json(
          { error: "Password is required" },
          { status: 400 }
        )
      }

      const adminPasswordHash = process.env.ADMIN_PASSWORD_HASH
      if (!adminPasswordHash) {
        logger.error("ADMIN_PASSWORD_HASH not configured")
        return NextResponse.json(
          { error: "Admin authentication not configured" },
          { status: 500 }
        )
      }

      const passwordValid = await verifyPassword(password, adminPasswordHash)
      
      if (!passwordValid) {
        logger.warn("Invalid password attempt", { clientIP })
        return NextResponse.json(
          { error: "Invalid credentials" },
          { status: 401 }
        )
      }

      // Check if 2FA is enabled
      const twoFAEnabled = is2FAEnabled()
      
      if (!twoFAEnabled && process.env.NODE_ENV === 'production') {
        logger.error("2FA not configured in production", { clientIP })
        return NextResponse.json(
          { error: "2FA must be configured for admin access in production" },
          { status: 403 }
        )
      }

      if (twoFAEnabled) {
        // Require 2FA step
        logger.info("Password valid, requesting 2FA", { clientIP })
        return NextResponse.json({
          requiresTwoFactor: true,
          message: "Please enter your 2FA code"
        })
      } else {
        // Development mode without 2FA - create session directly
        logger.warn("Login without 2FA (development mode)", { clientIP })
        const sessionToken = createAdminSession()

        const response = NextResponse.json({
          success: true,
          message: "Login successful (development mode - no 2FA)"
        })

        await setAdminSessionCookie(sessionToken)
        return response
      }
    }

    // Step 2: 2FA verification
    if (step === '2fa') {
      if (!totpCode) {
        return NextResponse.json(
          { error: "2FA code is required" },
          { status: 400 }
        )
      }

      // Verify TOTP code
      const secret = getAdmin2FASecret()
      if (!secret) {
        logger.error("2FA secret not configured", { clientIP })
        return NextResponse.json(
          { error: "2FA is not properly configured" },
          { status: 500 }
        )
      }

      const isValidTOTP = verifyTOTP(totpCode, secret)

      if (!isValidTOTP) {
        logger.warn("Invalid 2FA code", { clientIP })
        return NextResponse.json(
          { error: "Invalid 2FA code" },
          { status: 401 }
        )
      }

      // Create admin session
      logger.info("2FA successful, creating session", { clientIP })
      const sessionToken = createAdminSession()

      const response = NextResponse.json({
        success: true,
        message: "Login successful",
        remainingRecoveryCodes: 0, // Disabled for debugging
        lowRecoveryCodes: false
      })

      await setAdminSessionCookie(sessionToken)
      
      logger.info("Admin login successful", { clientIP, method: "2FA" })
      return response
    }

    return NextResponse.json(
      { error: "Invalid request" },
      { status: 400 }
    )

  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : String(error)
    const errorStack = error instanceof Error ? error.stack : undefined
    
    logger.error("Admin auth error", { 
      error: errorMessage,
      stack: errorStack,
      env: process.env.NODE_ENV
    })
    
    // Return detailed error in non-production
    if (process.env.NODE_ENV !== 'production') {
      return NextResponse.json(
        { 
          error: "Authentication failed", 
          details: errorMessage,
          stack: errorStack
        },
        { status: 500 }
      )
    }
    
    return NextResponse.json(
      { error: "Authentication failed" },
      { status: 500 }
    )
  }
}

/**
 * GET /api/admin/auth
 * Check authentication status
 */
export async function GET(request: NextRequest) {
  try {
    const sessionToken = getAdminSessionCookie(request)
    
    if (!sessionToken) {
      return NextResponse.json(
        { authenticated: false },
        { status: 401 }
      )
    }

    const session = await verifyAdminSession(sessionToken)
    
    if (!session) {
      return NextResponse.json(
        { authenticated: false },
        { status: 401 }
      )
    }

    return NextResponse.json({
      authenticated: true,
      adminId: session.adminId,
      expiresAt: session.expiresAt
    })

  } catch (error) {
    logger.error("Session verification error", { error: String(error) })
    return NextResponse.json(
      { authenticated: false, error: "Session verification failed" },
      { status: 500 }
    )
  }
}
