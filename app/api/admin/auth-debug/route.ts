import { NextRequest, NextResponse } from "next/server"

/**
 * Test route - incrementally add imports to find the problematic one
 */

// Test 1: Basic route
export async function POST(request: NextRequest) {
  try {
    const step = 1
    
    // Step 1: Basic response
    if (step === 1) {
      return NextResponse.json({ step: 1, message: "Basic route works" })
    }
    
    // Step 2: Import logger
    const { logger } = await import("@/utils/logger")
    if (step === 2) {
      logger.info("Logger works")
      return NextResponse.json({ step: 2, message: "Logger works" })
    }
    
    // Step 3: Import admin-2fa
    const { is2FAEnabled } = await import("@/lib/admin-2fa")
    if (step === 3) {
      const enabled = is2FAEnabled()
      return NextResponse.json({ step: 3, message: "2FA check works", enabled })
    }
    
    // Step 4: Import rate-limit
    const { getClientIP } = await import("@/lib/rate-limit")
    if (step === 4) {
      const ip = getClientIP(request)
      return NextResponse.json({ step: 4, message: "Rate limit works", ip })
    }
    
    // Step 5: Import password
    const { verifyPassword } = await import("@/lib/password")
    if (step === 5) {
      return NextResponse.json({ step: 5, message: "Password module works" })
    }
    
    // Step 6: Import admin-session
    const { createAdminSession } = await import("@/lib/admin-session")
    if (step === 6) {
      const token = createAdminSession()
      return NextResponse.json({ step: 6, message: "Session creation works", hasToken: !!token })
    }
    
    return NextResponse.json({ message: "All imports successful" })
    
  } catch (error) {
    return NextResponse.json({ 
      error: error instanceof Error ? error.message : String(error),
      stack: error instanceof Error ? error.stack : undefined
    }, { status: 500 })
  }
}

export async function GET() {
  return NextResponse.json({ message: "Test route GET" })
}

