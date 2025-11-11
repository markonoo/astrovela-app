import { NextRequest, NextResponse } from "next/server"
import { requireAdminAuth } from "@/lib/admin-auth"
import { getAuditLogs, getAuditStatistics } from "@/lib/admin-audit"
import { logger } from "@/utils/logger"

/**
 * Admin Audit Log API
 * Returns audit logs with filtering and pagination
 */
export async function GET(request: NextRequest) {
  try {
    // Verify admin authentication
    const auth = await requireAdminAuth(request, '/api/admin/audit')
    if (!auth.authenticated || auth.response) {
      return auth.response || NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { searchParams } = new URL(request.url)
    
    // Parse query parameters
    const adminId = searchParams.get('adminId') || undefined
    const action = searchParams.get('action') || undefined
    const startDate = searchParams.get('startDate') ? new Date(searchParams.get('startDate')!) : undefined
    const endDate = searchParams.get('endDate') ? new Date(searchParams.get('endDate')!) : undefined
    const limit = searchParams.get('limit') ? parseInt(searchParams.get('limit')!) : 100
    const offset = searchParams.get('offset') ? parseInt(searchParams.get('offset')!) : 0
    const stats = searchParams.get('stats') === 'true'
    const days = searchParams.get('days') ? parseInt(searchParams.get('days')!) : 30

    if (stats) {
      // Return statistics
      const statistics = await getAuditStatistics(days)
      return NextResponse.json(statistics)
    }

    // Return audit logs
    const result = await getAuditLogs({
      adminId,
      action: action as any,
      startDate,
      endDate,
      limit,
      offset,
    })

    return NextResponse.json(result)
  } catch (error) {
    logger.error("Failed to fetch audit logs", error)
    return NextResponse.json(
      { error: "Failed to fetch audit logs" },
      { status: 500 }
    )
  }
}


