"use client"

import { useEffect, useState } from "react"
import { useUser } from "@/contexts/UserContext"
import { Paywall } from "@/components/companion/paywall"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Settings as SettingsIcon, User, Bell, Shield } from "lucide-react"
import Link from "next/link"
import { EntitlementData } from "@/types/api"
import { logger } from "@/utils/logger"

export default function SettingsPage() {
  const { user, loading } = useUser()
  const [entitlement, setEntitlement] = useState<EntitlementData | null>(null)

  useEffect(() => {
    if (!loading && user) {
      checkAccess()
    }
  }, [user, loading])

  const checkAccess = async () => {
    try {
      const response = await fetch("/api/companion/entitlement")
      if (response.ok) {
        const data = await response.json()
        setEntitlement(data.entitlement)
      }
    } catch (error) {
      logger.error("Failed to check access", error)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-apple-gray-5 to-apple-gray-6">
        <div className="animate-spin rounded-full h-12 w-12 border-2 border-apple-gray-4 border-t-apple-gray-1"></div>
      </div>
    )
  }

  if (!user) {
    return <Paywall />
  }

  return (
    <div className="container mx-auto px-6 py-8 md:px-8 md:py-12 md:pt-32">
      <h1 className="text-[36px] leading-[44px] font-bold text-apple-gray-1 mb-10 animate-fadeIn">Settings</h1>

      <div className="space-y-6">
        <Card className="border-0 shadow-apple-md rounded-apple-lg bg-white hover:shadow-apple-lg transition-shadow duration-250 animate-spring">
          <CardHeader className="px-6 py-5">
            <div className="flex items-center space-x-3">
              <User className="w-5 h-5 text-apple-gray-2" />
              <CardTitle className="text-[20px] leading-[28px] font-semibold text-apple-gray-1">Account</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="px-6 py-6">
            <div className="space-y-4">
              <div>
                <div className="text-[13px] leading-[18px] text-apple-gray-2 mb-1">Email</div>
                <div className="text-[17px] leading-[24px] font-medium text-apple-gray-1">{user.email}</div>
              </div>
              {user.user_metadata?.name && (
                <div>
                  <div className="text-[13px] leading-[18px] text-apple-gray-2 mb-1">Name</div>
                  <div className="text-[17px] leading-[24px] font-medium text-apple-gray-1">{user.user_metadata.name}</div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-apple-md rounded-apple-lg bg-white hover:shadow-apple-lg transition-shadow duration-250 animate-spring">
          <CardHeader className="px-6 py-5">
            <div className="flex items-center space-x-3">
              <Shield className="w-5 h-5 text-apple-gray-2" />
              <CardTitle className="text-[20px] leading-[28px] font-semibold text-apple-gray-1">Subscription</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="px-6 py-6">
            <Link
              href="/companion/billing"
              className="block w-full text-center py-3.5 px-6 border-2 border-apple-gray-1 text-apple-gray-1 rounded-apple-md text-[17px] leading-[24px] font-semibold hover:bg-apple-gray-5 hover:scale-[1.02] active:scale-[0.98] transition-all duration-150"
            >
              Manage Billing
            </Link>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-apple-md rounded-apple-lg bg-white hover:shadow-apple-lg transition-shadow duration-250 animate-spring">
          <CardHeader className="px-6 py-5">
            <div className="flex items-center space-x-3">
              <Bell className="w-5 h-5 text-apple-gray-2" />
              <CardTitle className="text-[20px] leading-[28px] font-semibold text-apple-gray-1">Notifications</CardTitle>
            </div>
            <CardDescription className="text-[15px] leading-[20px] text-apple-gray-2 mt-1">Manage your notification preferences</CardDescription>
          </CardHeader>
          <CardContent className="px-6 py-6">
            <p className="text-[15px] leading-[20px] text-apple-gray-2">
              Notification settings coming soon. For now, you'll receive email updates about your subscription.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
