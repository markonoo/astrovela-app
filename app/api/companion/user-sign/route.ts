import { NextRequest, NextResponse } from "next/server"
import { supabase } from "@/lib/supabaseClient"
import { hasActiveAccess } from "@/lib/entitlements"
import { prisma } from "@/lib/prisma"
import { UserSignResponse } from "@/types/api"
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

    const userSignData: UserSignResponse = {
      sunSign: chartInterpretation?.sun_sign?.toLowerCase() || "aries",
      moonSign: chartInterpretation?.moon_sign?.toLowerCase() || null,
      risingSign: null, // Would need to calculate from ascendant
    }

    return NextResponse.json(userSignData)
  } catch (error) {
    logger.error("Failed to fetch user sign", error)
    return NextResponse.json(
      { error: "Failed to fetch user sign" },
      { status: 500 }
    )
  }
}

