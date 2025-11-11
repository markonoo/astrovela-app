import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { logger } from "@/utils/logger"
import { requireAdminAuth } from "@/lib/admin-auth"

// Force dynamic rendering (uses cookies for auth)
export const dynamic = 'force-dynamic'

/**
 * Admin API: Get Companion App Statistics
 * Returns metrics about companion app usage, entitlements, and subscriptions
 */
export async function GET(request: NextRequest) {
  try {
    // Verify admin authentication and log access
    const auth = await requireAdminAuth(request, '/api/admin/companion-stats')
    if (!auth.authenticated || auth.response) {
      return auth.response || NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    // Get total entitlements
    const totalEntitlements = await prisma.appEntitlement.count()

    // Get entitlements by plan
    const entitlementsByPlan = await prisma.appEntitlement.groupBy({
      by: ['plan'],
      _count: true,
    })

    // Get active subscriptions (trial + active)
    const activeSubscriptions = await prisma.appEntitlement.count({
      where: {
        OR: [
          { plan: 'trial' },
          { plan: 'active' },
        ],
      },
    })

    // Get expired trials
    const expiredTrials = await prisma.appEntitlement.count({
      where: {
        plan: 'expired',
      },
    })

    // Get users with reports
    const usersWithReports = await prisma.appEntitlement.count({
      where: {
        hasReport: true,
      },
    })

    // Get recent entitlements (last 30 days)
    const recentEntitlements = await prisma.appEntitlement.count({
      where: {
        createdAt: {
          gte: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
        },
      },
    })

    // Get entitlements expiring soon (next 7 days)
    const expiringSoon = await prisma.appEntitlement.count({
      where: {
        freeUntil: {
          gte: new Date(),
          lte: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        },
        plan: 'trial',
      },
    })

    // Calculate conversion rate (active subscriptions / total)
    const conversionRate = totalEntitlements > 0
      ? ((activeSubscriptions / totalEntitlements) * 100).toFixed(1)
      : '0'

    return NextResponse.json({
      summary: {
        totalEntitlements,
        activeSubscriptions,
        expiredTrials,
        usersWithReports,
        recentEntitlements,
        expiringSoon,
        conversionRate: `${conversionRate}%`,
      },
      byPlan: entitlementsByPlan.map((item: { plan: string; _count: number }) => ({
        plan: item.plan,
        count: item._count,
      })),
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    logger.error("Failed to fetch companion app stats", error)
    return NextResponse.json(
      { error: "Failed to fetch companion app statistics" },
      { status: 500 }
    )
  }
}


