import { NextRequest, NextResponse } from "next/server"
import { supabase } from "@/lib/supabaseClient"
import { hasActiveAccess } from "@/lib/entitlements"
import { prisma } from "@/lib/prisma"
import { MonthlyDataResponse } from "@/types/api"
import { logger } from "@/utils/logger"

export async function GET(request: NextRequest) {
  try {
    const { data: { user } } = await supabase.auth.getUser()
    if (!user || !user.email) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 })
    }

    const dbUser = await prisma.user.findUnique({
      where: { email: user.email },
    })

    if (!dbUser || !(await hasActiveAccess(dbUser.id))) {
      return NextResponse.json({ error: "No active access" }, { status: 403 })
    }

    // Get user's chart data
    const chartInterpretation = await prisma.natalChartInterpretation.findFirst({
      where: { userId: dbUser.id },
      orderBy: { created_at: "desc" },
    })

    const sunSign = chartInterpretation?.sun_sign?.toLowerCase() || "aries"
    const currentMonth = new Date().toLocaleString("default", { month: "long" })

    // Monthly forecast
    const monthlyData: MonthlyDataResponse = {
      overview: `This month, ${sunSign} energy guides you toward personal growth and new beginnings. Focus on your goals and trust the journey.`,
      keyDates: [
        `${currentMonth} 5th - New opportunities arise`,
        `${currentMonth} 12th - Important decisions`,
        `${currentMonth} 20th - Transformation period`,
      ],
      focusAreas: [
        `Career advancement and creative projects`,
        `Meaningful relationships`,
        `Personal growth and self-discovery`,
      ],
    }

    return NextResponse.json(monthlyData)
  } catch (error) {
    logger.error("Failed to fetch monthly data", error)
    return NextResponse.json(
      { error: "Failed to fetch monthly data" },
      { status: 500 }
    )
  }
}

