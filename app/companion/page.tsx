"use client"

import { useEffect, useState } from "react"
import { useUser } from "@/contexts/UserContext"
import { Paywall } from "@/components/companion/paywall"
import { CompanionShell } from "@/components/companion/CompanionShell"
import { Sun, Moon, Sparkles, Calendar, TrendingUp } from "lucide-react"
import { format } from "date-fns"
import { EntitlementData, TodayDataResponse } from "@/types/api"
import { logger } from "@/utils/logger"
import { cn } from "@/lib/utils"

export default function CompanionTodayPage() {
  const { user, loading } = useUser()
  const [todayData, setTodayData] = useState<TodayDataResponse | null>(null)
  const [entitlement, setEntitlement] = useState<EntitlementData | null>(null)
  const [loadingData, setLoadingData] = useState(true)
  const [selectedPeriod, setSelectedPeriod] = useState<"today" | "tomorrow" | "week" | "month">("today")

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
          fetchTodayData()
        } else {
          setLoadingData(false)
        }
      } else {
        setLoadingData(false)
      }
    } catch (error) {
      logger.error("Failed to check access", error)
      setLoadingData(false)
    }
  }

  const fetchTodayData = async () => {
    try {
      const response = await fetch("/api/companion/today")
      if (response.ok) {
        const data = await response.json()
        setTodayData(data)
      }
    } catch (error) {
      logger.error("Failed to fetch today data", error)
    } finally {
      setLoadingData(false)
    }
  }

  if (loading || loadingData) {
    return (
      <CompanionShell title="Horoscope" activeTab="horoscope">
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-2 border-white/20 border-t-white"></div>
        </div>
      </CompanionShell>
    )
  }

  if (!user) {
    return <Paywall />
  }

  if (!entitlement) {
    return <Paywall />
  }

  if (!todayData) {
    return (
      <CompanionShell title="Horoscope" activeTab="horoscope">
        <div className="px-4 mt-6">
          <div className="text-center text-[17px] leading-[24px] text-white/60">Loading today's insights...</div>
        </div>
      </CompanionShell>
    )
  }

  const daysRemaining = entitlement.freeUntil
    ? Math.ceil((new Date(entitlement.freeUntil).getTime() - Date.now()) / (1000 * 60 * 60 * 24))
    : 0

  // Mock data for different periods (in real app, fetch based on selectedPeriod)
  const loveScore = 80
  const workScore = 64
  const moodScore = 80

  return (
    <CompanionShell title="Horoscope" activeTab="horoscope">
      <div className="px-4 mt-6 space-y-6 mb-24">
        {/* About Me Hero Card */}
        <div className="rounded-[26px] bg-white/6 backdrop-blur-2xl shadow-[0_26px_70px_rgba(0,0,0,0.85)] p-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#7a5bff] to-[#ff4de1] flex items-center justify-center text-2xl">
              {user.email ? user.email.charAt(0).toUpperCase() : "☺︎"}
            </div>
            <div>
              <h2 className="text-[20px] leading-[28px] font-semibold text-white">
                Good {new Date().getHours() < 12 ? "Morning" : new Date().getHours() < 18 ? "Afternoon" : "Evening"}
                {user.email && `, ${user.email.split("@")[0]}`}
              </h2>
              <p className="text-[15px] leading-[20px] text-white/60">{format(new Date(), "EEEE, MMMM d, yyyy")}</p>
            </div>
          </div>
          {daysRemaining > 0 && daysRemaining <= 30 && (
            <div className="text-[13px] leading-[18px] text-white/80 bg-white/8 rounded-xl px-3 py-2 inline-block">
              {daysRemaining} {daysRemaining === 1 ? "day" : "days"} left in your free trial
            </div>
          )}
        </div>

        {/* Zodiac Sign Card */}
        <div className="rounded-[26px] bg-white/6 backdrop-blur-2xl shadow-[0_26px_70px_rgba(0,0,0,0.85)] p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-[13px] leading-[18px] text-white/60 mb-1">Your Sign</p>
              <h3 className="text-[24px] leading-[32px] font-bold text-white">Capricorn</h3>
            </div>
            <div className="text-right">
              <p className="text-[13px] leading-[18px] text-white/60 mb-1">Ruler</p>
              <p className="text-[18px] leading-[24px] font-semibold text-white">Saturn</p>
            </div>
            <div className="text-right">
              <p className="text-[13px] leading-[18px] text-white/60 mb-1">Element</p>
              <p className="text-[18px] leading-[24px] font-semibold text-white">Earth</p>
            </div>
          </div>
        </div>

        {/* Period Selector */}
        <div className="flex gap-2 bg-white/6 backdrop-blur-2xl rounded-2xl p-1">
          {(["today", "tomorrow", "week", "month"] as const).map((period) => (
            <button
              key={period}
              onClick={() => setSelectedPeriod(period)}
              className={cn(
                "flex-1 py-2.5 px-4 rounded-xl text-[15px] leading-[20px] font-medium transition-all",
                selectedPeriod === period
                  ? "bg-gradient-to-br from-[#7a5bff] to-[#ff4de1] text-white shadow-[0_0_16px_rgba(122,91,255,0.5)]"
                  : "text-white/60 hover:text-white/80"
              )}
            >
              {period.charAt(0).toUpperCase() + period.slice(1)}
            </button>
          ))}
        </div>

        {/* Metrics Bars */}
        <div className="space-y-4">
          <div className="rounded-[26px] bg-white/6 backdrop-blur-2xl shadow-[0_26px_70px_rgba(0,0,0,0.85)] p-6">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[15px] leading-[20px] text-white/80">Love</span>
              <span className="text-[15px] leading-[20px] font-semibold text-white">{loveScore}%</span>
            </div>
            <div className="h-2 bg-white/10 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-[#ff4de1] to-[#7a5bff] rounded-full transition-all"
                style={{ width: `${loveScore}%` }}
              />
            </div>
          </div>

          <div className="rounded-[26px] bg-white/6 backdrop-blur-2xl shadow-[0_26px_70px_rgba(0,0,0,0.85)] p-6">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[15px] leading-[20px] text-white/80">Work</span>
              <span className="text-[15px] leading-[20px] font-semibold text-white">{workScore}%</span>
            </div>
            <div className="h-2 bg-white/10 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-[#7a5bff] to-[#4dabf7] rounded-full transition-all"
                style={{ width: `${workScore}%` }}
              />
            </div>
          </div>

          <div className="rounded-[26px] bg-white/6 backdrop-blur-2xl shadow-[0_26px_70px_rgba(0,0,0,0.85)] p-6">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[15px] leading-[20px] text-white/80">Mood</span>
              <span className="text-[15px] leading-[20px] font-semibold text-white">{moodScore}%</span>
            </div>
            <div className="h-2 bg-white/10 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-[#ff4de1] to-[#ff6b9d] rounded-full transition-all"
                style={{ width: `${moodScore}%` }}
              />
            </div>
          </div>
        </div>

        {/* General Description Card */}
        <div className="rounded-[26px] bg-white/6 backdrop-blur-2xl shadow-[0_26px_70px_rgba(0,0,0,0.85)] p-6">
          <div className="flex items-center gap-3 mb-4">
            <Sun className="w-6 h-6 text-yellow-400" />
            <h3 className="text-[20px] leading-[28px] font-semibold text-white">{todayData.energy.title}</h3>
          </div>
          <p className="text-[15px] leading-[20px] text-white/60 mb-3">{todayData.energy.mood}</p>
          <p className="text-[17px] leading-[24px] text-white/80">{todayData.energy.description}</p>
        </div>

        {/* Love Today Card */}
        <div className="rounded-[26px] bg-white/6 backdrop-blur-2xl shadow-[0_26px_70px_rgba(0,0,0,0.85)] p-6">
          <div className="flex items-center gap-3 mb-4">
            <Sparkles className="w-6 h-6 text-pink-400" />
            <h3 className="text-[20px] leading-[28px] font-semibold text-white">{todayData.love.title}</h3>
          </div>
          <p className="text-[17px] leading-[24px] text-white/80 mb-4">{todayData.love.description}</p>
          <div className="bg-white/8 rounded-xl p-4">
            <p className="text-[15px] leading-[20px] text-white/80">
              <span className="font-semibold text-white">Best time to connect:</span> {todayData.love.bestTime}
            </p>
          </div>
        </div>

        {/* Career Today Card */}
        <div className="rounded-[26px] bg-white/6 backdrop-blur-2xl shadow-[0_26px_70px_rgba(0,0,0,0.85)] p-6">
          <div className="flex items-center gap-3 mb-4">
            <TrendingUp className="w-6 h-6 text-blue-400" />
            <h3 className="text-[20px] leading-[28px] font-semibold text-white">{todayData.career.title}</h3>
          </div>
          <p className="text-[17px] leading-[24px] text-white/80 mb-4">{todayData.career.description}</p>
          <div className="bg-white/8 rounded-xl p-4">
            <p className="text-[15px] leading-[20px] text-white/80">
              <span className="font-semibold text-white">Action advice:</span> {todayData.career.actionAdvice}
            </p>
          </div>
        </div>

        {/* Current Transits Card */}
        <div className="rounded-[26px] bg-white/6 backdrop-blur-2xl shadow-[0_26px_70px_rgba(0,0,0,0.85)] p-6">
          <div className="flex items-center gap-3 mb-4">
            <Moon className="w-6 h-6 text-purple-400" />
            <h3 className="text-[20px] leading-[28px] font-semibold text-white">Current Transits</h3>
          </div>
          <div className="space-y-3">
            <p className="text-[15px] leading-[20px] text-white/80">
              <span className="font-semibold text-white">Moon in:</span> {todayData.transits.moonSign}
            </p>
            <p className="text-[15px] leading-[20px] text-white/80">{todayData.transits.keyAspect}</p>
          </div>
        </div>
      </div>
    </CompanionShell>
  )
}

