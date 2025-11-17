import { NextRequest, NextResponse } from "next/server"
import { requireAdminAuth } from "@/lib/admin-auth"
import { logBreachEvent, generateBreachNotification, requiresBreachNotification } from "@/lib/breach-detection"
import { logger } from "@/utils/logger"

/**
 * Admin Breach Reporting API
 * GDPR Article 33 - Breach Notification
 */
export async function POST(request: NextRequest) {
  try {
    // Verify admin authentication
    const auth = await requireAdminAuth(request, '/api/admin/breach')
    if (!auth.authenticated || auth.response) {
      return auth.response || NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const body = await request.json()
    const {
      type,
      description,
      affectedUsers,
      dataTypes,
      severity,
    } = body

    const breachEvent = {
      type: type || 'other',
      description,
      affectedUsers,
      dataTypes,
      detectedAt: new Date(),
      severity: severity || 'medium',
    }

    // Log breach event
    logBreachEvent(breachEvent)

    // Generate notification if required
    let notification = null
    if (requiresBreachNotification(breachEvent)) {
      notification = generateBreachNotification(breachEvent)
      
      // In production, send notifications here
      logger.warn('Breach notification required', {
        notification: notification.subject,
        recipients: notification.recipients.length,
      })
    }

    return NextResponse.json({
      success: true,
      breachEvent,
      notificationRequired: requiresBreachNotification(breachEvent),
      notification,
      message: "Breach event logged. Notification procedures initiated if required.",
    })
  } catch (error) {
    logger.error("Breach reporting error", error)
    return NextResponse.json(
      { error: "Failed to report breach" },
      { status: 500 }
    )
  }
}











