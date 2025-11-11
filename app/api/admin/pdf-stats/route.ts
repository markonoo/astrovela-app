import { NextRequest, NextResponse } from "next/server"
import { supabase } from "@/lib/supabaseClient"
import { prisma } from "@/lib/prisma"
import { logger } from "@/utils/logger"

/**
 * Admin API: Get PDF/Document Maker Statistics
 * Returns metrics about PDF generation and document maker usage
 */
export async function GET(request: NextRequest) {
  try {
    // TODO: Add admin authentication check
    // const { data: { user } } = await supabase.auth.getUser()
    // if (!user || !isAdmin(user)) {
    //   return NextResponse.json({ error: "Unauthorized" }, { status: 403 })
    // }

    // Get total users with reports (potential PDF downloads)
    const usersWithReports = await prisma.appEntitlement.count({
      where: {
        hasReport: true,
      },
    })

    // Get total chart interpretations (potential for PDF generation)
    const totalChartInterpretations = await prisma.natalChartInterpretation.count()

    // Get chart interpretations by date (last 30 days)
    const recentCharts = await prisma.natalChartInterpretation.count({
      where: {
        created_at: {
          gte: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
        },
      },
    })

    // Get chart images stored (related to document generation)
    const totalChartImages = await prisma.chartImage.count()

    // Get recent chart images (last 30 days)
    const recentChartImages = await prisma.chartImage.count({
      where: {
        createdAt: {
          gte: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
        },
      },
    })

    // Calculate potential PDF generation rate
    // (users with reports / total chart interpretations)
    const pdfGenerationRate = totalChartInterpretations > 0
      ? ((usersWithReports / totalChartInterpretations) * 100).toFixed(1)
      : '0'

    return NextResponse.json({
      summary: {
        usersWithReports,
        totalChartInterpretations,
        recentCharts,
        totalChartImages,
        recentChartImages,
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
      { error: "Failed to fetch PDF statistics" },
      { status: 500 }
    )
  }
}


