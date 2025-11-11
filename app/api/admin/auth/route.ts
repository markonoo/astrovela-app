import { NextRequest, NextResponse } from "next/server"
import { logger } from "@/utils/logger"
import { verifyTOTP, getAdmin2FASecret, is2FAEnabled, generateQRCode, generate2FASecret } from "@/lib/admin-2fa"

/**
 * Admin Authentication API
 * Supports password + 2FA authentication
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

    // Get admin password from environment variable
    const adminPassword = process.env.ADMIN_PASSWORD || "admin123" // Default for development

    if (step === 'password') {
      // Step 1: Verify password
      if (!password || password !== adminPassword) {
        logger.warn("Admin login attempt failed - invalid password")
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
        // No 2FA enabled, login successful
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

      // Verify password was already checked (in a real app, use session tokens)
      if (!password || password !== adminPassword) {
        return NextResponse.json(
          { success: false, error: "Invalid password", step: 'password' },
          { status: 401 }
        )
      }

      try {
        const secret = getAdmin2FASecret()
        const isValid = verifyTOTP(totpCode, secret)

        if (isValid) {
          logger.info("Admin login successful with 2FA")
          return NextResponse.json({
            success: true,
            step: 'complete',
            message: "Authentication successful",
            requires2FA: true,
          })
        } else {
          logger.warn("Admin login attempt failed - invalid 2FA code")
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

    // Verify admin session
    const sessionToken = request.headers.get("x-admin-session")

    if (sessionToken === "authenticated") {
      return NextResponse.json({ authenticated: true })
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
