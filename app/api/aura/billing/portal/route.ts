import { NextRequest, NextResponse } from "next/server"
import { supabase } from "@/lib/supabaseClient"
import { prisma } from "@/lib/prisma"
import { logger } from "@/utils/logger"

/**
 * Creates a billing portal session for managing subscriptions
 * In production, this would integrate with Stripe or Shopify customer portal
 */

export async function POST(request: NextRequest) {
  try {
    const { data: { user } } = await supabase.auth.getUser()
    if (!user || !user.email) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 })
    }

    const dbUser = await prisma.user.findUnique({
      where: { email: user.email },
    })

    if (!dbUser) {
      return NextResponse.json({ error: "User not found" }, { status: 404 })
    }

    // Get entitlement
    const entitlement = await prisma.appEntitlement.findUnique({
      where: { userId: dbUser.id },
    })

    // In production, create Stripe billing portal session or Shopify customer portal link
    // For now, return a placeholder URL
    const shopifyStoreUrl = process.env.NEXT_PUBLIC_SHOPIFY_STORE_URL || "https://tryastrovela.myshopify.com"
    const portalUrl = `${shopifyStoreUrl}/account`

    // Alternative: If using Stripe
    // const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)
    // const session = await stripe.billingPortal.sessions.create({
    //   customer: entitlement?.stripeCustomerId,
    //   return_url: `${process.env.NEXT_PUBLIC_APP_URL}/aura/billing`,
    // })
    // return NextResponse.json({ url: session.url })

    return NextResponse.json({
      url: portalUrl,
      message: "Redirect to Shopify customer portal",
    })
  } catch (error) {
    logger.error("Error creating billing portal", error, { endpoint: "/api/aura/billing/portal" })
    return NextResponse.json(
      { error: "Failed to create billing portal session" },
      { status: 500 }
    )
  }
}












