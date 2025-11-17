"use client"

import { useEffect, useState } from "react"
import { useUser } from "@/contexts/UserContext"
import { Paywall } from "@/components/aura/paywall"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CreditCard, Calendar, AlertCircle, CheckCircle } from "lucide-react"
import { format } from "date-fns"
import Link from "next/link"
import { EntitlementData } from "@/types/api"
import { logger } from "@/utils/logger"

export default function BillingPage() {
  const { user, loading } = useUser()
  const [entitlement, setEntitlement] = useState<EntitlementData | null>(null)
  const [loadingData, setLoadingData] = useState(true)

  useEffect(() => {
    if (!loading && user) {
      checkAccess()
    }
  }, [user, loading])

  const checkAccess = async () => {
    try {
      const response = await fetch("/api/aura/entitlement")
      if (response.ok) {
        const data = await response.json()
        setEntitlement(data.entitlement)
      }
    } catch (error) {
      logger.error("Failed to check access", error)
    } finally {
      setLoadingData(false)
    }
  }

  const handleManageSubscription = async () => {
    try {
      const response = await fetch("/api/aura/billing/portal", {
        method: "POST",
      })
      if (response.ok) {
        const data = await response.json()
        if (data.url) {
          window.location.href = data.url
        }
      } else {
        alert("Unable to open billing portal. Please contact support at help@astrovela.com")
      }
    } catch (error) {
      logger.error("Failed to open billing portal", error)
      alert("Unable to open billing portal. Please contact support at help@astrovela.com")
    }
  }

  if (loading || loadingData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-apple-gray-5 to-apple-gray-6">
        <div className="animate-spin rounded-full h-12 w-12 border-2 border-apple-gray-4 border-t-apple-gray-1"></div>
      </div>
    )
  }

  if (!user) {
    return <Paywall />
  }

  const daysRemaining = entitlement?.freeUntil
    ? Math.ceil((new Date(entitlement.freeUntil).getTime() - Date.now()) / (1000 * 60 * 60 * 24))
    : 0

  const isTrial = entitlement?.plan === "trial"
  const isActive = entitlement?.plan === "active"
  const isExpired = entitlement?.plan === "expired" || daysRemaining <= 0

  return (
    <div className="container mx-auto px-6 py-8 md:px-8 md:py-12 md:pt-32">
      <h1 className="text-[36px] leading-[44px] font-bold text-apple-gray-1 mb-10 animate-fadeIn">Manage Subscription</h1>

      {/* Current Status */}
      <Card className="mb-8 border-0 shadow-apple-md rounded-apple-lg bg-white hover:shadow-apple-lg transition-shadow duration-250 animate-spring">
        <CardHeader className="px-6 py-5">
          <CardTitle className="text-[20px] leading-[28px] font-semibold text-apple-gray-1">Current Plan</CardTitle>
          <CardDescription className="text-[15px] leading-[20px] text-apple-gray-2 mt-1">Your subscription status</CardDescription>
        </CardHeader>
        <CardContent className="px-6 py-6">
          <div className="space-y-5">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[20px] leading-[28px] font-semibold text-apple-gray-1">
                  {isTrial ? "Free Trial" : isActive ? "Active Subscription" : "Expired"}
                </div>
                <div className="text-[15px] leading-[20px] text-apple-gray-2 mt-1">
                  {isTrial && daysRemaining > 0
                    ? `${daysRemaining} ${daysRemaining === 1 ? "day" : "days"} remaining`
                    : isExpired
                    ? "Your trial has ended"
                    : "Active subscription"}
                </div>
              </div>
              {isTrial && daysRemaining > 0 ? (
                <CheckCircle className="w-8 h-8 text-apple-green-DEFAULT" />
              ) : isExpired ? (
                <AlertCircle className="w-8 h-8 text-apple-red-DEFAULT" />
              ) : (
                <CheckCircle className="w-8 h-8 text-apple-green-DEFAULT" />
              )}
            </div>

            {entitlement?.freeUntil && (
              <div className="flex items-center space-x-2 text-[15px] leading-[20px] text-apple-gray-2">
                <Calendar className="w-4 h-4" />
                <span>
                  {isTrial ? "Trial ends" : "Next billing"} on{" "}
                  {format(new Date(entitlement.freeUntil), "MMMM d, yyyy")}
                </span>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Subscription Actions */}
      {isExpired ? (
        <Card className="mb-8 border-0 shadow-apple-md rounded-apple-lg bg-white hover:shadow-apple-lg transition-shadow duration-250 animate-spring">
          <CardHeader className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-t-apple-lg px-6 py-5">
            <CardTitle className="text-[20px] leading-[28px] font-semibold text-apple-gray-1">Continue Your Journey</CardTitle>
            <CardDescription className="text-[15px] leading-[20px] text-apple-gray-2 mt-1">Subscribe to keep accessing daily insights</CardDescription>
          </CardHeader>
          <CardContent className="px-6 py-6">
            <div className="space-y-5">
              <div className="bg-white rounded-apple-lg p-5 border-2 border-apple-gray-1">
                <div className="text-[32px] leading-[40px] font-bold text-apple-gray-1 mb-1">€30.99</div>
                <div className="text-[15px] leading-[20px] text-apple-gray-2">per month</div>
              </div>
              <Link
                href="/pricing"
                className="block w-full text-center py-3.5 px-6 bg-apple-gray-1 text-white rounded-apple-md text-[17px] leading-[24px] font-semibold hover:bg-apple-gray-2 hover:scale-[1.02] active:scale-[0.98] transition-all duration-150 shadow-apple-sm"
              >
                Subscribe Now
              </Link>
            </div>
          </CardContent>
        </Card>
      ) : (
        <Card className="mb-8 border-0 shadow-apple-md rounded-apple-lg bg-white hover:shadow-apple-lg transition-shadow duration-250 animate-spring">
          <CardHeader className="px-6 py-5">
            <CardTitle className="text-[20px] leading-[28px] font-semibold text-apple-gray-1">Manage Subscription</CardTitle>
            <CardDescription className="text-[15px] leading-[20px] text-apple-gray-2 mt-1">Update payment method or cancel</CardDescription>
          </CardHeader>
          <CardContent className="px-6 py-6">
            <button
              onClick={handleManageSubscription}
              className="w-full flex items-center justify-center space-x-2 py-3.5 px-6 border-2 border-apple-gray-1 text-apple-gray-1 rounded-apple-md text-[17px] leading-[24px] font-semibold hover:bg-apple-gray-5 hover:scale-[1.02] active:scale-[0.98] transition-all duration-150"
            >
              <CreditCard className="w-5 h-5" />
              <span>Manage Billing</span>
            </button>
            <p className="text-[13px] leading-[18px] text-apple-gray-3 mt-4 text-center">
              Opens Shopify customer portal
            </p>
          </CardContent>
        </Card>
      )}

      {/* Billing History */}
      <Card className="border-0 shadow-apple-md rounded-apple-lg bg-white hover:shadow-apple-lg transition-shadow duration-250 animate-spring">
        <CardHeader className="px-6 py-5">
          <CardTitle className="text-[20px] leading-[28px] font-semibold text-apple-gray-1">Billing Information</CardTitle>
        </CardHeader>
        <CardContent className="px-6 py-6">
          <div className="space-y-4 text-[15px] leading-[20px]">
            <div className="flex justify-between">
              <span className="text-apple-gray-2">Email:</span>
              <span className="font-semibold text-apple-gray-1">{user.email}</span>
            </div>
            {entitlement?.purchaseDate && (
              <div className="flex justify-between">
                <span className="text-apple-gray-2">Purchase Date:</span>
                <span className="font-semibold text-apple-gray-1">
                  {format(new Date(entitlement.purchaseDate), "MMMM d, yyyy")}
                </span>
              </div>
            )}
            {entitlement?.shopifyOrderId && (
              <div className="flex justify-between">
                <span className="text-apple-gray-2">Order ID:</span>
                <span className="font-semibold text-apple-gray-1">{entitlement.shopifyOrderId}</span>
              </div>
            )}
          </div>
          <div className="mt-6 pt-6 border-t border-apple-gray-4">
            <p className="text-[13px] leading-[18px] text-apple-gray-3">
              Need help? Contact us at{" "}
              <a href="mailto:help@astrovela.com" className="text-apple-gray-1 underline hover:text-apple-gray-2 transition-colors duration-150">
                help@astrovela.com
              </a>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
