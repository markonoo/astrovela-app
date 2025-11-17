"use client"

import { useEffect, useState } from "react"
import { useUser } from "@/contexts/UserContext"
import { Paywall } from "@/components/aura/paywall"
import { AuraShell } from "@/components/aura/AuraShell"
import { User, Bell, Shield } from "lucide-react"
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
      const response = await fetch("/api/aura/entitlement")
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
      <AuraShell title="Settings" activeTab="horoscope">
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-2 border-white/20 border-t-white"></div>
        </div>
      </AuraShell>
    )
  }

  if (!user) {
    return <Paywall />
  }

  return (
    <AuraShell title="Settings" activeTab="horoscope">
      <div className="px-4 mt-6 space-y-6 mb-24">
        {/* Account Card */}
        <div className="rounded-[26px] bg-white/6 backdrop-blur-2xl shadow-[0_26px_70px_rgba(0,0,0,0.85)] p-6">
          <div className="flex items-center gap-3 mb-4">
            <User className="w-6 h-6 text-blue-400" />
            <h2 className="text-[20px] leading-[28px] font-semibold text-white">Account</h2>
          </div>
          <div className="space-y-4">
            <div>
              <div className="text-[13px] leading-[18px] text-white/60 mb-1">Email</div>
              <div className="text-[17px] leading-[24px] font-medium text-white">{user.email}</div>
            </div>
            {user.user_metadata?.name && (
              <div>
                <div className="text-[13px] leading-[18px] text-white/60 mb-1">Name</div>
                <div className="text-[17px] leading-[24px] font-medium text-white">{user.user_metadata.name}</div>
              </div>
            )}
          </div>
        </div>

        {/* Subscription Card */}
        <div className="rounded-[26px] bg-white/6 backdrop-blur-2xl shadow-[0_26px_70px_rgba(0,0,0,0.85)] p-6">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="w-6 h-6 text-purple-400" />
            <h2 className="text-[20px] leading-[28px] font-semibold text-white">Subscription</h2>
          </div>
          <Link
            href="/aura/billing"
            className="block w-full text-center py-3.5 px-6 border-2 border-white/20 text-white rounded-xl text-[17px] leading-[24px] font-semibold hover:bg-white/10 hover:scale-[1.02] active:scale-[0.98] transition-all duration-150"
          >
            Manage Billing
          </Link>
        </div>

        {/* Notifications Card */}
        <div className="rounded-[26px] bg-white/6 backdrop-blur-2xl shadow-[0_26px_70px_rgba(0,0,0,0.85)] p-6">
          <div className="flex items-center gap-3 mb-4">
            <Bell className="w-6 h-6 text-yellow-400" />
            <h2 className="text-[20px] leading-[28px] font-semibold text-white">Notifications</h2>
          </div>
          <p className="text-[15px] leading-[20px] text-white/60 mb-1">Manage your notification preferences</p>
          <p className="text-[15px] leading-[20px] text-white/80">
            Notification settings coming soon. For now, you'll receive email updates about your subscription.
          </p>
        </div>
      </div>
    </AuraShell>
  )
}
