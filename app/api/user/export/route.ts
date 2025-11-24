import { NextRequest, NextResponse } from "next/server"
import { supabase } from "@/lib/supabaseClient"
import { prisma } from "@/lib/prisma"
import { exportUserDataJSON, exportUserDataCSV, createExportRequest } from "@/lib/user-export"
import { logger } from "@/utils/logger"

/**
 * User Data Export API - GDPR Right to Data Portability (Article 20)
 * Exports user data in JSON or CSV format
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

    const { format = 'json' } = await request.json()

    if (format !== 'json' && format !== 'csv') {
      return NextResponse.json(
        { error: "Invalid format. Use 'json' or 'csv'" },
        { status: 400 }
      )
    }

    // Create export request
    const requestId = await createExportRequest(dbUser.id, format)

    // Generate export data
    let exportData: string
    let contentType: string
    let filename: string

    try {
      if (format === 'json') {
        exportData = await exportUserDataJSON(dbUser.id)
        contentType = 'application/json'
        filename = `user-data-${dbUser.id}-${Date.now()}.json`
      } else {
        exportData = await exportUserDataCSV(dbUser.id)
        contentType = 'text/csv'
        filename = `user-data-${dbUser.id}-${Date.now()}.csv`
      }

      // Update export request as completed
      await prisma.dataExportRequest.update({
        where: { id: requestId },
        data: {
          status: 'completed',
          fileUrl: `data:${contentType};base64,${Buffer.from(exportData).toString('base64')}`,
        },
      })

      logger.info("User data exported", { 
        userId: dbUser.id, 
        format,
        requestId 
      })

      // Return file as download
      return new NextResponse(exportData, {
        headers: {
          'Content-Type': contentType,
          'Content-Disposition': `attachment; filename="${filename}"`,
          'Cache-Control': 'no-cache',
        },
      })
    } catch (error) {
      // Update export request as failed
      await prisma.dataExportRequest.update({
        where: { id: requestId },
        data: {
          status: 'failed',
        },
      })

      logger.error("Failed to export user data", error)
      return NextResponse.json(
        { error: "Failed to export user data" },
        { status: 500 }
      )
    }
  } catch (error) {
    logger.error("Export request error", error)
    return NextResponse.json(
      { error: "Failed to process export request" },
      { status: 500 }
    )
  }
}

/**
 * Get export request status
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

    // Get recent export requests
    const exportRequests = await prisma.dataExportRequest.findMany({
      where: { userId: dbUser.id },
      orderBy: { createdAt: 'desc' },
      take: 10,
    })

    return NextResponse.json({
      success: true,
      exportRequests,
    })
  } catch (error) {
    logger.error("Failed to get export requests", error)
    return NextResponse.json(
      { error: "Failed to get export requests" },
      { status: 500 }
    )
  }
}













