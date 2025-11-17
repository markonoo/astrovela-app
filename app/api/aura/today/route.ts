import { NextRequest, NextResponse } from "next/server"
import { supabase } from "@/lib/supabaseClient"
import { hasActiveAccess } from "@/lib/entitlements"
import { prisma } from "@/lib/prisma"
import { getDailyHoroscope } from "@/services/astrology-api-service"
import { TodayDataResponse } from "@/types/api"
import { logger } from "@/utils/logger"

export async function GET(request: NextRequest) {
  try {
    // Check authentication
    const { data: { user } } = await supabase.auth.getUser()
    if (!user || !user.email) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 })
    }

    // Check access
    const dbUser = await prisma.user.findUnique({
      where: { email: user.email },
    })

    if (!dbUser || !(await hasActiveAccess(dbUser.id))) {
      return NextResponse.json({ error: "No active access" }, { status: 403 })
    }

    // Get user's chart data to determine sun sign
    const chartInterpretation = await prisma.natalChartInterpretation.findFirst({
      where: { userId: dbUser.id },
      orderBy: { created_at: "desc" },
    })

    const sunSign = chartInterpretation?.sun_sign?.toLowerCase() || "aries"

    // Fetch daily horoscope from API
    let horoscopeData = null
    try {
      horoscopeData = await getDailyHoroscope(sunSign as any)
    } catch (error) {
      logger.warn("Failed to fetch horoscope from API, using fallback", { error })
      // Fallback to static content
    }

    // Get today's date info
    const today = new Date()
    const dayOfWeek = today.getDay()
    const isWeekend = dayOfWeek === 0 || dayOfWeek === 6

    // Generate today's energy based on horoscope or fallback
    const energy = {
      title: horoscopeData?.prediction
        ? "Today's Cosmic Energy"
        : isWeekend
        ? "Weekend Reflection Time"
        : "New Beginnings Await",
      description:
        horoscopeData?.prediction ||
        "The stars align to bring you opportunities for growth and reflection. Trust your intuition and embrace the day's energy.",
      mood: horoscopeData?.mood || (isWeekend ? "Relaxed" : "Motivated"),
    }

    // Love insights
    const love = {
      title: "Love & Relationships",
      description:
        horoscopeData?.compatibility
          ? `Today favors connections with ${horoscopeData.compatibility} energy. Open your heart to meaningful conversations.`
          : "Today's energy supports deep connections. Be open to meaningful conversations with loved ones.",
      bestTime: isWeekend ? "Evening (6-9 PM)" : "Afternoon (2-5 PM)",
    }

    // Career insights
    const career = {
      title: "Career & Ambition",
      description:
        isWeekend
          ? "Use this time to reflect on your career goals and plan for the week ahead."
          : "Today presents opportunities for professional growth. Trust your instincts when making decisions.",
      actionAdvice: isWeekend
        ? "Plan and reflect"
        : "Take initiative on important projects",
    }

    // Transits (simplified - in production, fetch from API)
    const transits = {
      moonSign: "Scorpio", // This would come from transit API
      keyAspect: "Moon trine Venus brings harmony to relationships today.",
    }

    const todayData: TodayDataResponse = {
      energy,
      love,
      career,
      transits,
    }

    return NextResponse.json(todayData)
  } catch (error) {
    logger.error("Failed to fetch today data", error)
    return NextResponse.json(
      { error: "Failed to fetch today's data" },
      { status: 500 }
    )
  }
}

