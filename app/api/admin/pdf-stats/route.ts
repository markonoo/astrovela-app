import { NextRequest, NextResponse } from "next/server"
import { createSupabaseAdmin } from "@/lib/supabase-admin"
import { logger } from "@/utils/logger"
import { requireAdminAuth } from "@/lib/admin-auth"

// Force dynamic rendering (uses cookies for auth)
export const dynamic = 'force-dynamic'

/**
 * Admin API: Get PDF/Document Maker Statistics
 * Returns metrics about PDF generation and document maker usage
 */
export async function GET(request: NextRequest) {
  try {
    // Verify admin authentication and log access
    const auth = await requireAdminAuth(request, '/api/admin/pdf-stats')
    if (!auth.authenticated || auth.response) {
      return auth.response || NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    // Create Supabase admin client (uses REST API)
    const supabase = createSupabaseAdmin()

    // Get total users with reports (potential PDF downloads)
    const { count: usersWithReports } = await supabase
      .from('AppEntitlement')
      .select('*', { count: 'exact', head: true })
      .eq('hasReport', true)

    // Get total chart interpretations (potential for PDF generation)
    const { count: totalChartInterpretations } = await supabase
      .from('NatalChartInterpretation')
      .select('*', { count: 'exact', head: true })

    // Get chart interpretations by date (last 30 days)
    const thirtyDaysAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString()
    const { count: recentCharts } = await supabase
      .from('NatalChartInterpretation')
      .select('*', { count: 'exact', head: true })
      .gte('created_at', thirtyDaysAgo)

    // Get chart images stored (related to document generation)
    const { count: totalChartImages } = await supabase
      .from('ChartImage')
      .select('*', { count: 'exact', head: true })

    // Get recent chart images (last 30 days)
    const { count: recentChartImages } = await supabase
      .from('ChartImage')
      .select('*', { count: 'exact', head: true })
      .gte('createdAt', thirtyDaysAgo)

    // Calculate potential PDF generation rate
    // (users with reports / total chart interpretations)
    const pdfGenerationRate = totalChartInterpretations && totalChartInterpretations > 0
      ? ((usersWithReports! / totalChartInterpretations) * 100).toFixed(1)
      : '0'

    return NextResponse.json({
      summary: {
        usersWithReports: usersWithReports || 0,
        totalChartInterpretations: totalChartInterpretations || 0,
        recentCharts: recentCharts || 0,
        totalChartImages: totalChartImages || 0,
        recentChartImages: recentChartImages || 0,
        pdfGenerationRate: `${pdfGenerationRate}%`,
      },
      documentMaker: {
        // Available pages in document maker
        totalPages: 24, // Based on getAvailablePages() in content.ts
        pagesWithContent: 24,
      },
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    logger.error("Failed to fetch PDF stats", error)
    return NextResponse.json(
      { error: "Failed to fetch PDF statistics", details: error instanceof Error ? error.message : String(error) },
      { status: 500 }
    )
  }
}


