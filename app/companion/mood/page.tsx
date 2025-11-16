"use client"

import { useEffect, useState } from "react"
import { useUser } from "@/contexts/UserContext"
import { Paywall } from "@/components/companion/paywall"
import { CompanionShell } from "@/components/companion/CompanionShell"
import { Smile, TrendingUp } from "lucide-react"
import { EntitlementData } from "@/types/api"
import { logger } from "@/utils/logger"

export default function MoodPage() {
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
      <CompanionShell title="Mood" activeTab="mood">
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-2 border-white/20 border-t-white"></div>
        </div>
      </CompanionShell>
    )
  }

  if (!user || !entitlement) {
    return <Paywall />
  }

  // Mock weekly mood data
  const weeklyMoods = [
    { day: "Mon", mood: 75, label: "Energetic" },
    { day: "Tue", mood: 82, label: "Optimistic" },
    { day: "Wed", mood: 68, label: "Calm" },
    { day: "Thu", mood: 90, label: "Joyful" },
    { day: "Fri", mood: 85, label: "Excited" },
    { day: "Sat", mood: 78, label: "Relaxed" },
    { day: "Sun", mood: 80, label: "Content" },
  ]

  const todayMood = weeklyMoods[new Date().getDay() === 0 ? 6 : new Date().getDay() - 1]

  return (
    <CompanionShell title="Mood" activeTab="mood">
      <div className="px-4 mt-6 space-y-6 mb-24">
        {/* Today's Mood Summary */}
        <div className="rounded-[26px] bg-white/6 backdrop-blur-2xl shadow-[0_26px_70px_rgba(0,0,0,0.85)] p-6">
          <div className="flex items-center gap-3 mb-4">
            <Smile className="w-6 h-6 text-yellow-400" />
            <h2 className="text-[20px] leading-[28px] font-semibold text-white">Today's Mood</h2>
          </div>
          <div className="text-center mb-4">
            <div className="text-[64px] leading-[72px] font-bold text-white mb-2">{todayMood.mood}%</div>
            <p className="text-[18px] leading-[24px] text-white/80">{todayMood.label}</p>
          </div>
          <div className="h-3 bg-white/10 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-[#7a5bff] to-[#ff4de1] rounded-full transition-all"
              style={{ width: `${todayMood.mood}%` }}
            />
          </div>
        </div>

        {/* Weekly Mood Chart */}
        <div className="rounded-[26px] bg-white/6 backdrop-blur-2xl shadow-[0_26px_70px_rgba(0,0,0,0.85)] p-6">
          <div className="flex items-center gap-3 mb-6">
            <TrendingUp className="w-6 h-6 text-blue-400" />
            <h3 className="text-[20px] leading-[28px] font-semibold text-white">Weekly Mood</h3>
          </div>
          <div className="space-y-4">
            {weeklyMoods.map((mood, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="w-12 text-[15px] leading-[20px] text-white/60">{mood.day}</div>
                <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-[#7a5bff] to-[#ff4de1] rounded-full transition-all"
                    style={{ width: `${mood.mood}%` }}
                  />
                </div>
                <div className="w-16 text-right">
                  <span className="text-[15px] leading-[20px] font-semibold text-white">{mood.mood}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mood Insights */}
        <div className="rounded-[26px] bg-white/6 backdrop-blur-2xl shadow-[0_26px_70px_rgba(0,0,0,0.85)] p-6">
          <h3 className="text-[20px] leading-[28px] font-semibold text-white mb-4">Mood Insights</h3>
          <p className="text-[17px] leading-[24px] text-white/80 mb-4">
            Your mood patterns show a generally positive trend this week. The cosmic energies are supporting your emotional well-being, 
            with peaks of joy and optimism balanced by moments of calm reflection.
          </p>
          <div className="bg-white/8 rounded-xl p-4">
            <p className="text-[15px] leading-[20px] text-white/80">
              <span className="font-semibold text-white">Tip:</span> Maintain this positive energy by staying connected with loved ones 
              and engaging in activities that bring you joy.
            </p>
          </div>
        </div>
      </div>
    </CompanionShell>
  )
}

