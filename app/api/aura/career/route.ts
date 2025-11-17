import { NextRequest, NextResponse } from "next/server"
import { supabase } from "@/lib/supabaseClient"
import { hasActiveAccess } from "@/lib/entitlements"
import { prisma } from "@/lib/prisma"
import { format, addDays } from "date-fns"
import { CareerDataResponse } from "@/types/api"
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

    const chartInterpretation = await prisma.natalChartInterpretation.findFirst({
      where: { userId: dbUser.id },
      orderBy: { created_at: "desc" },
    })

    const today = new Date()
    const dayOfWeek = today.getDay()

    // Career today
    const careerToday = {
      energy: dayOfWeek === 1 // Monday
        ? "New week brings fresh opportunities. Start strong with clear goals."
        : dayOfWeek === 5 // Friday
        ? "Weekend approaches - wrap up projects and plan for next week."
        : "Steady progress is favored today. Focus on completing tasks.",
      advice: dayOfWeek === 1 || dayOfWeek === 3
        ? "Best time to initiate new projects or have important meetings"
        : "Focus on follow-up and completion of existing work",
    }

    // This week
    const thisWeek = {
      focus: "Mars energy supports taking action on career goals. Be proactive and assertive.",
      opportunities: "Networking events, new project proposals, and collaboration opportunities",
    }

    // Best days (simplified - in production, calculate based on transits)
    const bestDays = [
      format(addDays(today, 2), "EEEE, MMMM d"),
      format(addDays(today, 5), "EEEE, MMMM d"),
    ]

    // Visibility days (days when career actions are most visible)
    const visibilityDays = [
      format(addDays(today, 3), "EEEE, MMMM d"),
      format(addDays(today, 7), "EEEE, MMMM d"),
    ]

    // Career insights
    const insights = [
      "Saturn's influence suggests focusing on long-term career goals",
      "Mercury retrograde periods may cause communication delays - double-check important emails",
      "Your Midheaven (MC) placement indicates natural career strengths",
    ]

    const careerData: CareerDataResponse = {
      today: careerToday,
      timing: {
        bestDays,
        visibilityDays,
      },
      insights,
    }

    return NextResponse.json(careerData)
  } catch (error) {
    logger.error("Failed to fetch career data", error)
    return NextResponse.json(
      { error: "Failed to fetch career data" },
      { status: 500 }
    )
  }
}

