import { NextRequest, NextResponse } from "next/server"
import { clearAdminSessionCookie } from "@/lib/admin-session"
import { logger } from "@/utils/logger"

/**
 * Admin Logout API
 * Clears admin session cookie
 */
export async function POST(request: NextRequest) {
  try {
    await clearAdminSessionCookie()
    
    logger.info("Admin logout successful")
    
    return NextResponse.json({
      success: true,
      message: "Logged out successfully"
    })
  } catch (error) {
    logger.error("Admin logout error", error)
    return NextResponse.json(
      { success: false, error: "Logout failed" },
      { status: 500 }
    )
  }
}

