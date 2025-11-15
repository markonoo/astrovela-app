import { NextRequest, NextResponse } from "next/server"
import { requireAdminAuth } from "@/lib/admin-auth"
import { runDataRetentionCleanup } from "@/lib/data-retention"
import { logger } from "@/utils/logger"

/**
 * Admin Data Cleanup API
 * Runs data retention cleanup tasks
 */
export async function POST(request: NextRequest) {
  try {
    // Verify admin authentication
    const auth = await requireAdminAuth(request, '/api/admin/cleanup')
    if (!auth.authenticated || auth.response) {
      return auth.response || NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const result = await runDataRetentionCleanup()

    logger.info("Data retention cleanup executed", result)

    return NextResponse.json({
      success: true,
      cleanup: result,
      executedAt: new Date().toISOString(),
    })
  } catch (error) {
    logger.error("Data retention cleanup error", error)
    return NextResponse.json(
      { error: "Failed to run cleanup" },
      { status: 500 }
    )
  }
}





