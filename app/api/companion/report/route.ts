import { NextRequest, NextResponse } from "next/server"
import { supabase } from "@/lib/supabaseClient"
import { hasActiveAccess } from "@/lib/entitlements"
import { prisma } from "@/lib/prisma"
import { ReportDataResponse } from "@/types/api"
import { logger } from "@/utils/logger"
import { formatBirthDateDisplay, formatBirthDateString } from "@/utils/birth-date"

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

    // Get quiz response for birth data
    const quizResponse = await prisma.quizResponse.findFirst({
      where: { userId: dbUser.id },
      orderBy: { createdAt: "desc" },
    })

    // Get chart interpretation
    const chartInterpretation = await prisma.natalChartInterpretation.findFirst({
      where: { userId: dbUser.id },
      orderBy: { created_at: "desc" },
    })

    // Safely extract and format birth date
    const birthDateFormatted = quizResponse?.birthDate
      ? formatBirthDateDisplay(quizResponse.birthDate)
      : null

    const reportData: ReportDataResponse = {
      birthDate: birthDateFormatted,
      birthTime: quizResponse?.birthTime || null,
      birthPlace: quizResponse?.birthPlace || null,
      coverColor: quizResponse?.coverDesign || null,
      firstName: quizResponse?.firstName || null,
      lastName: quizResponse?.lastName || null,
      gender: quizResponse?.gender || null,
      chartSummary: {
        sunSign: chartInterpretation?.sun_sign || null,
        moonSign: chartInterpretation?.moon_sign || null,
        risingSign: null, // Would need to calculate from ascendant
      },
    }

    return NextResponse.json(reportData)
  } catch (error) {
    logger.error("Failed to fetch report data", error)
    return NextResponse.json(
      { error: "Failed to fetch report data" },
      { status: 500 }
    )
  }
}

