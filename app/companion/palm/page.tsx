"use client"

import { useEffect, useState } from "react"
import { useUser } from "@/contexts/UserContext"
import { Paywall } from "@/components/companion/paywall"
import { CompanionShell } from "@/components/companion/CompanionShell"
import { Hand, Sparkles } from "lucide-react"
import { EntitlementData } from "@/types/api"
import { logger } from "@/utils/logger"

export default function PalmPage() {
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
      const response = await fetch("/api/companion/entitlement")
      if (response.ok) {
        const data = await response.json()
        if (data.hasAccess) {
          setEntitlement(data.entitlement)
        } else {
          setLoadingData(false)
        }
      }
    } catch (error) {
      logger.error("Failed to check access", error)
      setLoadingData(false)
    }
  }

  if (loading || loadingData) {
    return (
      <CompanionShell title="Palm Reading" activeTab="palm">
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-2 border-white/20 border-t-white"></div>
        </div>
      </CompanionShell>
    )
  }

  if (!user || !entitlement) {
    return <Paywall />
  }

  return (
    <CompanionShell title="Palm Reading" activeTab="palm">
      <div className="px-4 mt-6 space-y-6 mb-24">
        {/* Palm Illustration Card */}
        <div className="rounded-[26px] bg-white/6 backdrop-blur-2xl shadow-[0_26px_70px_rgba(0,0,0,0.85)] p-6">
          <div className="flex items-center gap-3 mb-4">
            <Hand className="w-6 h-6 text-purple-400" />
            <h2 className="text-[20px] leading-[28px] font-semibold text-white">Your Palm</h2>
          </div>
          <div className="aspect-square bg-white/8 rounded-2xl flex items-center justify-center mb-4">
            <Hand className="w-24 h-24 text-white/40" />
          </div>
          <p className="text-[15px] leading-[20px] text-white/60 text-center">
            Upload a photo of your palm to begin your reading
          </p>
        </div>

        {/* Life Line Card */}
        <div className="rounded-[26px] bg-white/6 backdrop-blur-2xl shadow-[0_26px_70px_rgba(0,0,0,0.85)] p-6">
          <h3 className="text-[20px] leading-[28px] font-semibold text-white mb-4">Life Line</h3>
          <p className="text-[17px] leading-[24px] text-white/80 mb-3">
            Your life line indicates vitality and life force. A long, deep line suggests strong physical energy and resilience.
          </p>
          <div className="bg-white/8 rounded-xl p-4">
            <p className="text-[15px] leading-[20px] text-white/80">
              <span className="font-semibold text-white">Interpretation:</span> Your life line shows a strong foundation with potential for longevity and robust health.
            </p>
          </div>
        </div>

        {/* Heart Line Card */}
        <div className="rounded-[26px] bg-white/6 backdrop-blur-2xl shadow-[0_26px_70px_rgba(0,0,0,0.85)] p-6">
          <h3 className="text-[20px] leading-[28px] font-semibold text-white mb-4">Heart Line</h3>
          <p className="text-[17px] leading-[24px] text-white/80 mb-3">
            The heart line reveals your emotional nature, relationships, and how you express love. It reflects your capacity for emotional connection.
          </p>
          <div className="bg-white/8 rounded-xl p-4">
            <p className="text-[15px] leading-[20px] text-white/80">
              <span className="font-semibold text-white">Interpretation:</span> Your heart line suggests deep emotional capacity and meaningful relationships.
            </p>
          </div>
        </div>

        {/* Head Line Card */}
        <div className="rounded-[26px] bg-white/6 backdrop-blur-2xl shadow-[0_26px_70px_rgba(0,0,0,0.85)] p-6">
          <h3 className="text-[20px] leading-[28px] font-semibold text-white mb-4">Head Line</h3>
          <p className="text-[17px] leading-[24px] text-white/80 mb-3">
            Your head line represents your intellectual approach, communication style, and how you process information and make decisions.
          </p>
          <div className="bg-white/8 rounded-xl p-4">
            <p className="text-[15px] leading-[20px] text-white/80">
              <span className="font-semibold text-white">Interpretation:</span> Your head line indicates analytical thinking and a balanced approach to problem-solving.
            </p>
          </div>
        </div>

        {/* Focus Description */}
        <div className="rounded-[26px] bg-white/6 backdrop-blur-2xl shadow-[0_26px_70px_rgba(0,0,0,0.85)] p-6">
          <div className="flex items-center gap-3 mb-4">
            <Sparkles className="w-6 h-6 text-yellow-400" />
            <h3 className="text-[20px] leading-[28px] font-semibold text-white">Overall Reading</h3>
          </div>
          <p className="text-[17px] leading-[24px] text-white/80">
            Your palm reveals a harmonious balance between emotion, intellect, and vitality. You have the potential for deep connections, 
            clear thinking, and a strong life force. Trust your intuition and maintain balance in all areas of your life.
          </p>
        </div>
      </div>
    </CompanionShell>
  )
}

