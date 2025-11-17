import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { requireAdminAuth } from "@/lib/admin-auth"
import { createOrUpdateEntitlement, calculateFreeUntil } from "@/lib/entitlements"
import { logger } from "@/utils/logger"

export const dynamic = 'force-dynamic'

/**
 * Admin API: Create a test user account with full setup
 * This creates:
 * - Prisma User record
 * - AppEntitlement with active access
 * - QuizResponse with sample birth data
 * - NatalChartInterpretation with zodiac signs
 */
export async function POST(request: NextRequest) {
  try {
    // Verify admin authentication
    const auth = await requireAdminAuth(request, '/api/admin/create-test-user')
    if (!auth.authenticated || auth.response) {
      return auth.response || NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const body = await request.json()
    const { 
      email = `test-${Date.now()}@example.com`,
      name = "Test User",
      sunSign = "capricorn",
      moonSign = "scorpio",
      birthDate = { day: 15, month: 3, year: 1990 },
      birthTime = "14:30",
      birthPlace = "New York, NY",
      firstName = "Test",
      lastName = "User",
      gender = "non-binary"
    } = body

    // Step 1: Create or find Prisma User
    let user = await prisma.user.findUnique({
      where: { email },
    })

    if (!user) {
      user = await prisma.user.create({
        data: {
          email,
          name,
        },
      })
      logger.info(`Created new user: ${email} (ID: ${user.id})`)
    } else {
      logger.info(`Using existing user: ${email} (ID: ${user.id})`)
    }

    // Step 2: Create or update AppEntitlement (30 days trial)
    const freeUntil = calculateFreeUntil()
    const entitlement = await createOrUpdateEntitlement({
      userId: user.id,
      email: user.email,
      plan: 'trial',
      freeUntil,
      hasReport: true,
    })
    logger.info(`Created/updated entitlement for user ${user.id}`)

    // Step 3: Create QuizResponse with birth data
    const quizResponse = await prisma.quizResponse.create({
      data: {
        email: user.email,
        userId: user.id,
        answers: {
          // Sample quiz answers
          step1: { name: firstName, email: user.email },
          step2: { birthDate },
          step3: { birthTime, birthPlace },
          step4: { gender },
        },
        birthDate: birthDate as any,
        birthTime,
        birthPlace,
        firstName,
        lastName,
        gender,
        coverDesign: "blue",
      },
    })
    logger.info(`Created quiz response for user ${user.id}`)

    // Step 4: Create NatalChartInterpretation with zodiac signs
    const chartInterpretation = await prisma.natalChartInterpretation.create({
      data: {
        userId: user.id,
        sun_sign: sunSign.charAt(0).toUpperCase() + sunSign.slice(1),
        moon_sign: moonSign.charAt(0).toUpperCase() + moonSign.slice(1),
        planets: {
          sun: { sign: sunSign, degree: 15 },
          moon: { sign: moonSign, degree: 25 },
        },
        houses: {},
        aspects: {},
        elements: {},
        modes: {},
      },
    })
    logger.info(`Created chart interpretation for user ${user.id}`)

    return NextResponse.json({
      success: true,
      message: "Test user created successfully",
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
      },
      entitlement: {
        id: entitlement.id,
        plan: entitlement.plan,
        freeUntil: entitlement.freeUntil.toISOString(),
        hasReport: entitlement.hasReport,
      },
      quizResponse: {
        id: quizResponse.id,
        sunSign,
        moonSign,
      },
      chartInterpretation: {
        id: chartInterpretation.id,
        sunSign: chartInterpretation.sun_sign,
        moonSign: chartInterpretation.moon_sign,
      },
      loginInstructions: {
        note: "To log in as this user:",
        steps: [
          "1. Go to /login page",
          `2. Sign up with email: ${email}`,
          "3. Use any password (or use Google OAuth)",
          "4. The Prisma user record will be linked automatically",
          "5. You'll have full access to the Aura app",
        ],
      },
    })
  } catch (error) {
    logger.error("Failed to create test user", error)
    return NextResponse.json(
      { 
        error: "Failed to create test user",
        details: error instanceof Error ? error.message : String(error)
      },
      { status: 500 }
    )
  }
}

