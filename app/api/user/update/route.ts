import { NextRequest, NextResponse } from "next/server"
import { supabase } from "@/lib/supabaseClient"
import { prisma } from "@/lib/prisma"
import { logger } from "@/utils/logger"
import { validateRequest, userUpdateSchema, sanitizeString } from "@/lib/validation"

/**
 * User Data Update API - GDPR Right to Rectification (Article 16)
 * Allows users to update their personal information
 */
export async function PUT(request: NextRequest) {
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

    const rawBody = await request.json()
    
    // Validate input
    const validation = validateRequest(userUpdateSchema, rawBody)
    if (!validation.success) {
      return NextResponse.json(
        { 
          error: 'Invalid input data',
          details: validation.details?.errors.map(e => `${e.path.join('.')}: ${e.message}`).join(', ')
        },
        { status: 400 }
      )
    }
    
    const { name, email } = validation.data

    // Validate input
    if (email && email !== user.email) {
      // Email change requires verification
      return NextResponse.json(
        { error: "Email changes require verification. Please contact support." },
        { status: 400 }
      )
    }

    // Sanitize and update user data
    const updatedUser = await prisma.user.update({
      where: { id: dbUser.id },
      data: {
        ...(name !== undefined && { name: sanitizeString(name) }),
      },
    })

    logger.info("User data updated", {
      userId: dbUser.id,
      changes: { name },
    })

    return NextResponse.json({
      success: true,
      user: {
        id: updatedUser.id,
        email: updatedUser.email,
        name: updatedUser.name,
      },
    })
  } catch (error) {
    logger.error("Failed to update user data", error)
    return NextResponse.json(
      { error: "Failed to update user data" },
      { status: 500 }
    )
  }
}

