import { NextRequest, NextResponse } from "next/server"
import { createSupabaseAdmin } from "@/lib/supabase-admin"
import { logger } from "@/utils/logger"
import { requireAdminAuth } from "@/lib/admin-auth"

// Force dynamic rendering (uses cookies for auth)
export const dynamic = 'force-dynamic'

/**
 * Admin API: Get aura App Statistics
 * Returns metrics about aura app usage, entitlements, and subscriptions
 */
export async function GET(request: NextRequest) {
  try {
    logger.info("Aura stats API called", {
      hasAuthCookie: request.cookies.has('admin_session'),
      userAgent: request.headers.get('user-agent'),
    })
    
    // Verify admin authentication and log access
    const auth = await requireAdminAuth(request, '/api/admin/aura-stats')
    if (!auth.authenticated || auth.response) {
      logger.info("Auth failed or response returned", { 
        authenticated: auth.authenticated,
        hasResponse: !!auth.response 
      })
      return auth.response || NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }
    logger.info("Auth successful, fetching stats")

    // Create Supabase admin client (uses REST API)
    const supabase = createSupabaseAdmin()

    // Get total entitlements
    const { count: totalEntitlements } = await supabase
      .from('AppEntitlement')
      .select('*', { count: 'exact', head: true })

    // Get entitlements by plan (manual grouping)
    const { data: allEntitlements } = await supabase
      .from('AppEntitlement')
      .select('plan')
    
    const planCounts = (allEntitlements || []).reduce((acc, item) => {
      acc[item.plan] = (acc[item.plan] || 0) + 1
      return acc
    }, {} as Record<string, number>)

    const entitlementsByPlan = Object.entries(planCounts).map(([plan, count]) => ({
      plan,
      count
    }))

    // Get active subscriptions (trial + active)
    const { count: activeSubscriptions } = await supabase
      .from('AppEntitlement')
      .select('*', { count: 'exact', head: true })
      .in('plan', ['trial', 'active'])

    // Get expired trials
    const { count: expiredTrials } = await supabase
      .from('AppEntitlement')
      .select('*', { count: 'exact', head: true })
      .eq('plan', 'expired')

    // Get users with reports
    const { count: usersWithReports } = await supabase
      .from('AppEntitlement')
      .select('*', { count: 'exact', head: true })
      .eq('hasReport', true)

    // Get recent entitlements (last 30 days)
    const thirtyDaysAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString()
    const { count: recentEntitlements } = await supabase
      .from('AppEntitlement')
      .select('*', { count: 'exact', head: true })
      .gte('createdAt', thirtyDaysAgo)

    // Get entitlements expiring soon (next 7 days)
    const now = new Date().toISOString()
    const sevenDaysLater = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString()
    const { count: expiringSoon } = await supabase
      .from('AppEntitlement')
      .select('*', { count: 'exact', head: true })
      .eq('plan', 'trial')
      .gte('freeUntil', now)
      .lte('freeUntil', sevenDaysLater)

    // Calculate conversion rate (active subscriptions / total)
    const conversionRate = totalEntitlements && totalEntitlements > 0
      ? ((activeSubscriptions! / totalEntitlements) * 100).toFixed(1)
      : '0'

    return NextResponse.json({
      summary: {
        totalEntitlements: totalEntitlements || 0,
        activeSubscriptions: activeSubscriptions || 0,
        expiredTrials: expiredTrials || 0,
        usersWithReports: usersWithReports || 0,
        recentEntitlements: recentEntitlements || 0,
        expiringSoon: expiringSoon || 0,
        conversionRate: `${conversionRate}%`,
      },
      byPlan: entitlementsByPlan,
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    logger.error("Failed to fetch aura app stats", error)
    console.error("Detailed error in aura-stats:", error)
    return NextResponse.json(
      { error: "Failed to fetch aura app statistics", details: error instanceof Error ? error.message : String(error) },
      { status: 500 }
    )
  }
}


