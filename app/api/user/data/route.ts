import { NextRequest, NextResponse } from "next/server"
import { supabase } from "@/lib/supabaseClient"
import { prisma } from "@/lib/prisma"
import { getUserDataSummary } from "@/lib/user-data"
import { logger } from "@/utils/logger"

/**
 * User Data API - GDPR Right to Access (Article 15)
 * Returns all user data stored in the system
 */
export async function GET(request: NextRequest) {
  try {
    // Verify user authentication
    const { data: { user } } = await supabase.auth.getUser()
    if (!user || !user.email) {
      return NextResponse.json(
        { error: "Not authenticated" },
        { status: 401 }
      )
    }

    // Find user in database
    const dbUser = await prisma.user.findUnique({
      where: { email: user.email },
    })

    if (!dbUser) {
      return NextResponse.json(
        { error: "User not found" },
        { status: 404 }
      )
    }

    // Get all user data
    const userData = await getUserDataSummary(dbUser.id)

    if (!userData) {
      return NextResponse.json(
        { error: "Failed to retrieve user data" },
        { status: 500 }
      )
    }

    logger.info("User data accessed", { userId: dbUser.id, email: dbUser.email })

    return NextResponse.json({
      success: true,
      data: userData,
      accessedAt: new Date().toISOString(),
    })
  } catch (error) {
    logger.error("Failed to retrieve user data", error)
    return NextResponse.json(
      { error: "Failed to retrieve user data" },
      { status: 500 }
    )
  }
}










