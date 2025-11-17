import { NextRequest, NextResponse } from "next/server"
import { supabase } from "@/lib/supabaseClient"
import { prisma } from "@/lib/prisma"
import { createDeletionRequest, processDeletionRequest } from "@/lib/user-deletion"
import { logger } from "@/utils/logger"

/**
 * User Account Deletion API - GDPR Right to Deletion (Article 17)
 * Deletes user account and all associated data
 */
export async function POST(request: NextRequest) {
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

    const { reason, confirm } = await request.json()

    // Require explicit confirmation
    if (confirm !== 'DELETE') {
      return NextResponse.json(
        { error: "Deletion requires explicit confirmation. Send { confirm: 'DELETE' }" },
        { status: 400 }
      )
    }

    // Check if deletion already requested
    const existingRequest = await prisma.deletionRequest.findFirst({
      where: {
        userId: dbUser.id,
        status: { in: ['pending', 'processing'] },
      },
    })

    if (existingRequest) {
      return NextResponse.json(
        { 
          error: "Deletion request already pending",
          requestId: existingRequest.id,
          scheduledAt: existingRequest.scheduledAt,
        },
        { status: 400 }
      )
    }

    // Create deletion request
    const requestId = await createDeletionRequest(dbUser.id, reason)

    // Process deletion immediately (or schedule for later)
    // For GDPR compliance, we can process immediately or schedule
    const result = await processDeletionRequest(requestId)

    logger.info("User account deletion requested", {
      userId: dbUser.id,
      email: dbUser.email,
      requestId,
      success: result.success,
    })

    if (result.success) {
      return NextResponse.json({
        success: true,
        message: "Account and all data have been deleted",
        requestId,
        deletedAt: new Date().toISOString(),
      })
    } else {
      return NextResponse.json({
        success: false,
        message: "Account deletion completed with some errors",
        requestId,
        errors: result.errors,
      }, { status: 207 }) // 207 Multi-Status
    }
  } catch (error) {
    logger.error("Account deletion error", error)
    return NextResponse.json(
      { error: "Failed to delete account" },
      { status: 500 }
    )
  }
}

/**
 * Get deletion request status
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

    const dbUser = await prisma.user.findUnique({
      where: { email: user.email },
    })

    if (!dbUser) {
      return NextResponse.json(
        { error: "User not found" },
        { status: 404 }
      )
    }

    // Get deletion requests
    const deletionRequests = await prisma.deletionRequest.findMany({
      where: { userId: dbUser.id },
      orderBy: { createdAt: 'desc' },
    })

    return NextResponse.json({
      success: true,
      deletionRequests,
    })
  } catch (error) {
    logger.error("Failed to get deletion requests", error)
    return NextResponse.json(
      { error: "Failed to get deletion requests" },
      { status: 500 }
    )
  }
}











