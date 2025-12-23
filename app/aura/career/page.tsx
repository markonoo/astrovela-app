"use client"

import { useEffect, useState } from "react"
import { useUser } from "@/contexts/UserContext"
import { Paywall } from "@/components/aura/paywall"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Briefcase, TrendingUp, Calendar, AlertCircle } from "lucide-react"
import { format } from "date-fns"
import { EntitlementData, CareerDataResponse } from "@/types/api"
import { logger } from "@/utils/logger"

export default function CareerPage() {
  const { user, loading } = useUser()
  const [careerData, setCareerData] = useState<CareerDataResponse | null>(null)
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
        if (data.hasAccess) {
          setEntitlement(data.entitlement)
          fetchCareerData()
        } else {
          setLoadingData(false)
        }
      }
    } catch (error) {
      logger.error("Failed to check access", error)
      setLoadingData(false)
    }
  }

  const fetchCareerData = async () => {
    try {
      const response = await fetch("/api/aura/career")
      if (response.ok) {
        setCareerData(await response.json())
      }
    } catch (error) {
      logger.error("Failed to fetch career data", error)
    } finally {
      setLoadingData(false)
    }
  }

  if (loading || loadingData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-2 border-white/20 border-t-white"></div>
      </div>
    )
  }

  if (!user || !entitlement) {
    return <Paywall />
  }

  return (
    <div className="px-4 mt-6 space-y-6 mb-24">
      <h1 className="text-[28px] leading-[36px] font-bold text-white mb-6">Career & Timing</h1>

      {/* Career Today */}
      <Card className="mb-8 border-0 shadow-apple-md rounded-apple-lg bg-white hover:shadow-apple-lg transition-shadow duration-250 animate-spring">
        <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-t-apple-lg px-6 py-5">
          <div className="flex items-center space-x-3">
            <Briefcase className="w-6 h-6 text-blue-500" />
            <CardTitle className="text-[20px] leading-[28px] font-semibold text-apple-gray-1">Career Energy Today</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="px-6 py-6">
          <p className="text-[17px] leading-[24px] text-apple-gray-2 mb-4">{careerData?.today.energy}</p>
          <div className="bg-blue-50 rounded-apple-md p-4">
            <p className="text-[15px] leading-[20px] font-semibold text-apple-gray-1">{careerData?.today.advice}</p>
          </div>
        </CardContent>
      </Card>

      {/* Timing Insights */}
      {careerData?.timing && (
        <Card className="mb-8 border-0 shadow-apple-md rounded-apple-lg bg-white hover:shadow-apple-lg transition-shadow duration-250 animate-spring">
          <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-t-apple-lg px-6 py-5">
            <div className="flex items-center space-x-3">
              <TrendingUp className="w-6 h-6 text-green-500" />
              <CardTitle className="text-[20px] leading-[28px] font-semibold text-apple-gray-1">Career Timing</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="px-6 py-6">
            <div className="space-y-5">
              {careerData.timing.bestDays && careerData.timing.bestDays.length > 0 && (
                <div>
                  <p className="text-[15px] leading-[20px] font-semibold text-apple-gray-1 mb-3">Best Days to Act:</p>
                  <ul className="space-y-2">
                    {careerData.timing.bestDays.map((day, i) => (
                      <li key={i} className="text-[15px] leading-[20px] text-apple-gray-2">• {day}</li>
                    ))}
                  </ul>
                </div>
              )}
              {careerData.timing.visibilityDays && careerData.timing.visibilityDays.length > 0 && (
                <div>
                  <p className="text-[15px] leading-[20px] font-semibold text-apple-gray-1 mb-3">Visibility Days:</p>
                  <ul className="space-y-2">
                    {careerData.timing.visibilityDays.map((day, i) => (
                      <li key={i} className="text-[15px] leading-[20px] text-apple-gray-2">• {day}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Best Days to Act */}
      {careerData?.timing?.bestDays && careerData.timing.bestDays.length > 0 && (
        <Card className="mb-8 border-0 shadow-apple-md rounded-apple-lg bg-white hover:shadow-apple-lg transition-shadow duration-250 animate-spring">
          <CardHeader className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-t-apple-lg px-6 py-5">
            <div className="flex items-center space-x-3">
              <Calendar className="w-6 h-6 text-yellow-500" />
              <CardTitle className="text-[20px] leading-[28px] font-semibold text-apple-gray-1">Best Days to Act</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="px-6 py-6">
            <ul className="space-y-3">
              {careerData.timing.bestDays.map((day, i) => (
                <li key={i} className="flex items-center">
                  <span className="text-yellow-500 mr-3 text-lg">⭐</span>
                  <span className="text-[15px] leading-[20px] text-apple-gray-2">{day}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}

      {/* Career Insights */}
      {careerData?.insights && careerData.insights.length > 0 && (
        <Card className="mb-8 border-0 shadow-apple-md rounded-apple-lg bg-white hover:shadow-apple-lg transition-shadow duration-250 animate-spring">
          <CardHeader className="bg-gradient-to-r from-red-50 to-pink-50 rounded-t-apple-lg px-6 py-5">
            <div className="flex items-center space-x-3">
              <AlertCircle className="w-6 h-6 text-red-500" />
              <CardTitle className="text-[20px] leading-[28px] font-semibold text-apple-gray-1">Retrograde Warnings</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="px-6 py-6">
            <ul className="space-y-3">
              {careerData.insights.map((insight, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-blue-500 mr-3 text-lg">💡</span>
                  <span className="text-[15px] leading-[20px] text-apple-gray-2">{insight}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}

      {/* Evergreen Career Advice */}
      <Card className="border-0 shadow-apple-md rounded-apple-lg bg-white hover:shadow-apple-lg transition-shadow duration-250 animate-spring">
        <CardHeader className="px-6 py-5">
          <CardTitle className="text-[20px] leading-[28px] font-semibold text-apple-gray-1">Career Archetype Guidance</CardTitle>
          <CardDescription className="text-[15px] leading-[20px] text-apple-gray-2 mt-1">Based on your natal chart</CardDescription>
        </CardHeader>
        <CardContent className="px-6 py-6">
          <p className="text-[17px] leading-[24px] text-apple-gray-2">
            Your career path is influenced by your Midheaven (MC) and Saturn placement. 
            Focus on areas that align with your natural talents and long-term goals. 
            Patience and persistence will lead to success.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
