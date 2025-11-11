"use client"

import { useEffect, useState } from "react"
import { useUser } from "@/contexts/UserContext"
import { Paywall } from "@/components/companion/paywall"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Sun, Moon, Sparkles, Calendar, TrendingUp } from "lucide-react"
import { format } from "date-fns"
import { EntitlementData, TodayDataResponse } from "@/types/api"
import { logger } from "@/utils/logger"

export default function CompanionTodayPage() {
  const { user, loading } = useUser()
  const [todayData, setTodayData] = useState<TodayDataResponse | null>(null)
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
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-apple-gray-5 to-apple-gray-6">
        <div className="animate-spin rounded-full h-12 w-12 border-2 border-apple-gray-4 border-t-apple-gray-1"></div>
      </div>
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
      <div className="container mx-auto px-6 py-8 md:px-8 md:py-12">
        <div className="text-center text-[17px] leading-[24px] text-apple-gray-2">Loading today's insights...</div>
      </div>
    )
  }

  const daysRemaining = entitlement.freeUntil
    ? Math.ceil((new Date(entitlement.freeUntil).getTime() - Date.now()) / (1000 * 60 * 60 * 24))
    : 0

  return (
    <div className="container mx-auto px-6 py-8 md:px-8 md:py-12 md:pt-32">
      {/* Header */}
      <div className="mb-10 animate-fadeIn">
        <h1 className="text-[36px] leading-[44px] font-bold text-apple-gray-1 mb-3">
          Good {new Date().getHours() < 12 ? "Morning" : new Date().getHours() < 18 ? "Afternoon" : "Evening"}
          {user.email && `, ${user.email.split("@")[0]}`}
        </h1>
        <p className="text-[17px] leading-[24px] text-apple-gray-2">{format(new Date(), "EEEE, MMMM d, yyyy")}</p>
        {daysRemaining > 0 && daysRemaining <= 30 && (
          <div className="mt-3 text-[15px] leading-[20px] text-apple-orange-DEFAULT font-medium">
            {daysRemaining} {daysRemaining === 1 ? "day" : "days"} left in your free trial
          </div>
        )}
      </div>

      {/* Today's Energy */}
      <Card className="mb-8 border-0 shadow-apple-md rounded-apple-lg bg-white hover:shadow-apple-lg transition-shadow duration-250 animate-spring">
        <CardHeader className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-t-apple-lg px-6 py-5">
          <div className="flex items-center space-x-3">
            <Sun className="w-6 h-6 text-yellow-500" />
            <CardTitle className="text-[20px] leading-[28px] font-semibold text-apple-gray-1">Today's Energy</CardTitle>
          </div>
          <CardDescription className="text-[15px] leading-[20px] text-apple-gray-2 mt-1">{todayData.energy.mood}</CardDescription>
        </CardHeader>
        <CardContent className="px-6 py-6">
          <h3 className="text-[18px] leading-[24px] font-semibold text-apple-gray-1 mb-3">{todayData.energy.title}</h3>
          <p className="text-[17px] leading-[24px] text-apple-gray-2">{todayData.energy.description}</p>
        </CardContent>
      </Card>

      {/* Love Today */}
      <Card className="mb-8 border-0 shadow-apple-md rounded-apple-lg bg-white hover:shadow-apple-lg transition-shadow duration-250 animate-spring">
        <CardHeader className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-t-apple-lg px-6 py-5">
          <div className="flex items-center space-x-3">
            <Sparkles className="w-6 h-6 text-pink-500" />
            <CardTitle className="text-[20px] leading-[28px] font-semibold text-apple-gray-1">Love Today</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="px-6 py-6">
          <h3 className="text-[18px] leading-[24px] font-semibold text-apple-gray-1 mb-3">{todayData.love.title}</h3>
          <p className="text-[17px] leading-[24px] text-apple-gray-2 mb-4">{todayData.love.description}</p>
          <div className="bg-pink-50 rounded-apple-md p-4">
            <p className="text-[15px] leading-[20px] text-apple-gray-2">
              <span className="font-semibold text-apple-gray-1">Best time to connect:</span> {todayData.love.bestTime}
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Career Today */}
      <Card className="mb-8 border-0 shadow-apple-md rounded-apple-lg bg-white hover:shadow-apple-lg transition-shadow duration-250 animate-spring">
        <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-t-apple-lg px-6 py-5">
          <div className="flex items-center space-x-3">
            <TrendingUp className="w-6 h-6 text-blue-500" />
            <CardTitle className="text-[20px] leading-[28px] font-semibold text-apple-gray-1">Career Today</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="px-6 py-6">
          <h3 className="text-[18px] leading-[24px] font-semibold text-apple-gray-1 mb-3">{todayData.career.title}</h3>
          <p className="text-[17px] leading-[24px] text-apple-gray-2 mb-4">{todayData.career.description}</p>
          <div className="bg-blue-50 rounded-apple-md p-4">
            <p className="text-[15px] leading-[20px] text-apple-gray-2">
              <span className="font-semibold text-apple-gray-1">Action advice:</span> {todayData.career.actionAdvice}
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Quick Transit Note */}
      <Card className="border-0 shadow-apple-md rounded-apple-lg bg-white hover:shadow-apple-lg transition-shadow duration-250 animate-spring">
        <CardHeader className="bg-gradient-to-r from-purple-50 to-violet-50 rounded-t-apple-lg px-6 py-5">
          <div className="flex items-center space-x-3">
            <Moon className="w-6 h-6 text-purple-500" />
            <CardTitle className="text-[20px] leading-[28px] font-semibold text-apple-gray-1">Current Transits</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="px-6 py-6">
          <div className="space-y-3">
            <p className="text-[15px] leading-[20px] text-apple-gray-2">
              <span className="font-semibold text-apple-gray-1">Moon in:</span> {todayData.transits.moonSign}
            </p>
            <p className="text-[15px] leading-[20px] text-apple-gray-2">{todayData.transits.keyAspect}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

