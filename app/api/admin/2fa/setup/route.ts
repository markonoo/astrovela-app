import { NextRequest, NextResponse } from "next/server"
import { generateQRCode, generate2FASecret } from "@/lib/admin-2fa"
import { logger } from "@/utils/logger"

/**
 * 2FA Setup API
 * Generates a new 2FA secret and QR code for initial setup
 * 
 * IMPORTANT: After generating, save the secret to ADMIN_2FA_SECRET environment variable
 * The secret should only be shown once and stored securely
 */
export async function GET(request: NextRequest) {
  try {
    // Check if 2FA is already configured
    if (process.env.ADMIN_2FA_SECRET) {
      return NextResponse.json(
        { 
          success: false, 
          error: "2FA is already configured. To reset, remove ADMIN_2FA_SECRET from environment variables first." 
        },
        { status: 400 }
      )
    }

    // Generate new secret
    const secret = generate2FASecret()
    
    // Generate QR code
    const qrCode = await generateQRCode(secret, 'admin@astrovela.com')

    logger.info("2FA setup secret generated")

    return NextResponse.json({
      success: true,
      secret, // IMPORTANT: Save this to ADMIN_2FA_SECRET environment variable
      qrCode,
      instructions: [
        "1. Scan the QR code with your authenticator app (Google Authenticator, Authy, etc.)",
        "2. Save the secret key below securely",
        "3. Add ADMIN_2FA_SECRET to your environment variables with the secret value",
        "4. After setting the environment variable, restart your application",
        "5. You can then use the 6-digit codes from your authenticator app to login"
      ],
      warning: "This secret will only be shown once. Make sure to save it securely!"
    })
  } catch (error) {
    logger.error("2FA setup error", error)
    return NextResponse.json(
      { success: false, error: "Failed to generate 2FA setup" },
      { status: 500 }
    )
  }
}













