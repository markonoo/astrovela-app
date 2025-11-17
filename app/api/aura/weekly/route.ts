import { NextRequest, NextResponse } from "next/server"
import { supabase } from "@/lib/supabaseClient"
import { hasActiveAccess } from "@/lib/entitlements"
import { prisma } from "@/lib/prisma"
import { WeeklyDataResponse } from "@/types/api"
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

    // Get user's sun sign for personalized content
    const chartInterpretation = await prisma.natalChartInterpretation.findFirst({
      where: { userId: dbUser.id },
      orderBy: { created_at: "desc" },
    })

    const sunSign = chartInterpretation?.sun_sign?.toLowerCase() || "aries"

    // Weekly forecast (simplified - in production, fetch from API or use AI)
    const weeklyData: WeeklyDataResponse = {
      emotions: `This week brings ${sunSign} energy to your emotional landscape. Trust your intuition and allow yourself to feel deeply. The stars encourage emotional authenticity and self-expression.`,
      relationships: `Venus influences your relationships this week, bringing harmony and understanding. Open communication will strengthen your connections. Single? This week favors new connections.`,
      moneyCareer: `Financial opportunities arise mid-week. Focus on long-term planning rather than impulsive decisions. Your career sector is active - consider new projects or collaborations.`,
      spiritualTheme: `This week's spiritual theme centers on growth and transformation. Take time for reflection and meditation. The universe is guiding you toward your highest path.`,
    }

    return NextResponse.json(weeklyData)
  } catch (error) {
    logger.error("Failed to fetch weekly data", error)
    return NextResponse.json(
      { error: "Failed to fetch weekly data" },
      { status: 500 }
    )
  }
}

