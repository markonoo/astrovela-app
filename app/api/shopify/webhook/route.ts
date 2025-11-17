import { NextRequest, NextResponse } from "next/server"
import { createOrUpdateEntitlement, calculateFreeUntil } from "@/lib/entitlements"
import { prisma } from "@/lib/prisma"
import crypto from "crypto"

/**
 * Shopify webhook handler for order completion
 * Creates app entitlements when users purchase PDF/book
 * 
 * Webhook URL: /api/shopify/webhook
 * Event: orders/create or orders/paid
 */

const SHOPIFY_WEBHOOK_SECRET = process.env.SHOPIFY_WEBHOOK_SECRET || ""

function verifyWebhook(data: string, hmac: string): boolean {
  if (!SHOPIFY_WEBHOOK_SECRET) {
    console.warn("SHOPIFY_WEBHOOK_SECRET not set, skipping verification")
    return true // Allow in development
  }

  const hash = crypto
    .createHmac("sha256", SHOPIFY_WEBHOOK_SECRET)
    .update(data, "utf8")
    .digest("base64")

  return hash === hmac
}

export async function POST(request: NextRequest) {
  try {
    const hmac = request.headers.get("x-shopify-hmac-sha256")
    const rawBody = await request.text()

    // Verify webhook authenticity
    if (hmac && !verifyWebhook(rawBody, hmac)) {
      console.error("Invalid webhook signature")
      return NextResponse.json(
        { error: "Invalid signature" },
        { status: 401 }
      )
    }

    const order = JSON.parse(rawBody)

    // Check if order contains app subscription, ebook, or paperback
    const lineItems = order.line_items || []
    const hasApp = lineItems.some((item: any) =>
      item.product_id && item.title?.toLowerCase().includes("app")
    )
    const hasEbook = lineItems.some((item: any) =>
      item.product_id && item.title?.toLowerCase().includes("ebook")
    )
    const hasPaperback = lineItems.some((item: any) =>
      item.product_id && item.title?.toLowerCase().includes("paperback")
    )

    // Only create entitlement if user purchased something that includes app access
    if (!hasApp && !hasEbook && !hasPaperback) {
      return NextResponse.json({
        success: true,
        message: "Order does not include app entitlement",
      })
    }

    const customerEmail = order.email || order.customer?.email
    if (!customerEmail) {
      return NextResponse.json(
        { error: "No email found in order" },
        { status: 400 }
      )
    }

    // Find or create user
    let user = await prisma.user.findUnique({
      where: { email: customerEmail },
    })

    if (!user) {
      user = await prisma.user.create({
        data: {
          email: customerEmail,
          name: order.customer?.first_name
            ? `${order.customer.first_name} ${order.customer.last_name || ""}`.trim()
            : null,
        },
      })
    }

    // Calculate free until date (30 days from purchase)
    const purchaseDate = new Date(order.created_at || order.updated_at || Date.now())
    const freeUntil = calculateFreeUntil()

    // Create or update entitlement
    await createOrUpdateEntitlement({
      userId: user.id,
      email: customerEmail,
      plan: "trial",
      freeUntil,
      hasReport: hasEbook || hasPaperback,
      purchaseDate,
      shopifyOrderId: order.id?.toString() || order.order_number?.toString(),
    })

    console.log(`✅ Created entitlement for user ${customerEmail} (order ${order.order_number || order.id})`)

    return NextResponse.json({
      success: true,
      message: "Entitlement created",
      userId: user.id,
      email: customerEmail,
    })
  } catch (error) {
    console.error("Error processing Shopify webhook:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}

// Handle GET for webhook verification (Shopify sometimes sends GET)
export async function GET(request: NextRequest) {
  return NextResponse.json({ message: "Shopify webhook endpoint" })
}













