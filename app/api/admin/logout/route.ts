import { NextRequest, NextResponse } from "next/server"
import { clearSessionCookie, getSessionCookieFromRequest } from "@/lib/admin-session"
import { logger } from "@/utils/logger"
import { logAdminLogout } from "@/lib/admin-audit"
import { getClientIP } from "@/lib/rate-limit"

/**
 * Admin Logout API
 * Clears admin session cookie and logs logout
 */
export async function POST(request: NextRequest) {
  try {
    const clientIP = getClientIP(request)
    const userAgent = request.headers.get('user-agent') || undefined
    
    // Get session before clearing (for logging)
    const sessionToken = getSessionCookieFromRequest(request)
    
    // Log logout
    await logAdminLogout(
      sessionToken ? 'admin' : undefined,
      clientIP,
      userAgent
    )
    
    logger.info("Admin logout successful")
    
    const response = NextResponse.json({
      success: true,
      message: "Logged out successfully"
    })
    
    return clearSessionCookie(response)
  } catch (error) {
    logger.error("Admin logout error", error)
    return NextResponse.json(
      { success: false, error: "Logout failed" },
      { status: 500 }
    )
  }
}

