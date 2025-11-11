import { NextRequest, NextResponse } from "next/server"
import { supabase } from "@/lib/supabaseClient"
import { getUserEntitlement, hasActiveAccess } from "@/lib/entitlements"
import { prisma } from "@/lib/prisma"
import { EntitlementResponse } from "@/types/api"
import { logger } from "@/utils/logger"

export async function GET(request: NextRequest) {
  try {
    // Get user from Supabase auth
    const authHeader = request.headers.get("authorization")
    let user = null

    if (authHeader) {
      const token = authHeader.replace("Bearer ", "")
      const { data } = await supabase.auth.getUser(token)
      user = data.user
    } else {
      // Try to get from session cookie
      const { data } = await supabase.auth.getUser()
      user = data.user
    }

    if (!user || !user.email) {
      return NextResponse.json(
        { hasAccess: false, error: "Not authenticated" },
        { status: 401 }
      )
    }

    // Find or create user in Prisma
    let dbUser = await prisma.user.findUnique({
      where: { email: user.email },
    })

    if (!dbUser) {
      // Create user if doesn't exist
      dbUser = await prisma.user.create({
        data: {
          email: user.email,
          name: user.user_metadata?.name || null,
        },
      })
    }

    // Check entitlement
    const entitlement = await getUserEntitlement(dbUser.id)
    const hasAccess = await hasActiveAccess(dbUser.id)

    const response: EntitlementResponse = {
      hasAccess,
      entitlement: entitlement
        ? {
            id: entitlement.id,
            plan: entitlement.plan,
            freeUntil: entitlement.freeUntil.toISOString(),
            hasReport: entitlement.hasReport,
            purchaseDate: entitlement.purchaseDate?.toISOString() || null,
            shopifyOrderId: entitlement.shopifyOrderId || null,
            daysRemaining: Math.ceil(
              (new Date(entitlement.freeUntil).getTime() - Date.now()) / (1000 * 60 * 60 * 24)
            ),
          }
        : null,
    }

    return NextResponse.json(response)
  } catch (error) {
    logger.error("Failed to check entitlement", error)
    return NextResponse.json(
      { hasAccess: false, error: "Internal server error" },
      { status: 500 }
    )
  }
}

