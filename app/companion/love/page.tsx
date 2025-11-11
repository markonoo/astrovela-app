"use client"

import { useEffect, useState } from "react"
import { useUser } from "@/contexts/UserContext"
import { Paywall } from "@/components/companion/paywall"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Heart, CheckCircle, XCircle, Calendar } from "lucide-react"
import { compatibilityData, getCompatibility } from "@/lib/zodiac-compatibility"
import { EntitlementData } from "@/types/api"
import { logger } from "@/utils/logger"

interface CompatibilityResult {
  score: number
  overview: string
  greenFlags: string[]
  redFlags: string[]
  dateIdeas?: string[]
}

export default function LovePage() {
  const { user, loading } = useUser()
  const [entitlement, setEntitlement] = useState<EntitlementData | null>(null)
  const [userSign, setUserSign] = useState<string>("")
  const [partnerSign, setPartnerSign] = useState<string>("aries")
  const [compatibility, setCompatibility] = useState<CompatibilityResult | null>(null)
  const [loadingData, setLoadingData] = useState(true)

  useEffect(() => {
    if (!loading && user) {
      checkAccess()
    }
  }, [user, loading])

  useEffect(() => {
    if (userSign && partnerSign) {
      loadCompatibility()
    }
  }, [userSign, partnerSign])

  const checkAccess = async () => {
    try {
      const response = await fetch("/api/companion/entitlement")
      if (response.ok) {
        const data = await response.json()
        if (data.hasAccess) {
          setEntitlement(data.entitlement)
          fetchUserSign()
        } else {
          setLoadingData(false)
        }
      }
    } catch (error) {
      logger.error("Failed to check access", error)
      setLoadingData(false)
    }
  }

  const fetchUserSign = async () => {
    try {
      const response = await fetch("/api/companion/user-sign")
      if (response.ok) {
        const data = await response.json()
        setUserSign(data.sunSign || "aries")
      }
    } catch (error) {
      logger.error("Failed to fetch user sign", error)
      setUserSign("aries")
    } finally {
      setLoadingData(false)
    }
  }

  const loadCompatibility = () => {
    const compat = getCompatibility(userSign, partnerSign)
    setCompatibility(compat)
  }

  if (loading || loadingData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-apple-gray-5 to-apple-gray-6">
        <div className="animate-spin rounded-full h-12 w-12 border-2 border-apple-gray-4 border-t-apple-gray-1"></div>
      </div>
    )
  }

  if (!user || !entitlement) {
    return <Paywall />
  }

  const zodiacSigns = [
    "aries", "taurus", "gemini", "cancer", "leo", "virgo",
    "libra", "scorpio", "sagittarius", "capricorn", "aquarius", "pisces"
  ]

  return (
    <div className="container mx-auto px-6 py-8 md:px-8 md:py-12 md:pt-32">
      <h1 className="text-[36px] leading-[44px] font-bold text-apple-gray-1 mb-10 animate-fadeIn">Love & Compatibility</h1>

      {/* Sign Selector */}
      <Card className="mb-8 border-0 shadow-apple-md rounded-apple-lg bg-white hover:shadow-apple-lg transition-shadow duration-250 animate-spring">
        <CardHeader className="px-6 py-5">
          <CardTitle className="text-[20px] leading-[28px] font-semibold text-apple-gray-1">Compare Signs</CardTitle>
          <CardDescription className="text-[15px] leading-[20px] text-apple-gray-2 mt-1">Select your sign and your partner's sign</CardDescription>
        </CardHeader>
        <CardContent className="px-6 py-6 space-y-5">
          <div>
            <label className="text-[15px] leading-[20px] font-medium text-apple-gray-1 mb-3 block">Your Sign</label>
            <Select value={userSign} onValueChange={setUserSign}>
              <SelectTrigger className="rounded-apple-md border-apple-gray-4 h-11">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="rounded-apple-md">
                {zodiacSigns.map((sign) => (
                  <SelectItem key={sign} value={sign} className="text-[15px]">
                    {sign.charAt(0).toUpperCase() + sign.slice(1)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className="text-[15px] leading-[20px] font-medium text-apple-gray-1 mb-3 block">Their Sign</label>
            <Select value={partnerSign} onValueChange={setPartnerSign}>
              <SelectTrigger className="rounded-apple-md border-apple-gray-4 h-11">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="rounded-apple-md">
                {zodiacSigns.map((sign) => (
                  <SelectItem key={sign} value={sign} className="text-[15px]">
                    {sign.charAt(0).toUpperCase() + sign.slice(1)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Compatibility Results */}
      {compatibility && (
        <div className="space-y-6">
          <Card className="border-0 shadow-apple-md rounded-apple-lg bg-white hover:shadow-apple-lg transition-shadow duration-250 animate-spring">
            <CardHeader className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-t-apple-lg px-6 py-5">
              <div className="flex items-center space-x-3">
                <Heart className="w-5 h-5 text-pink-500" />
                <CardTitle className="text-[20px] leading-[28px] font-semibold text-apple-gray-1">Compatibility</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="px-6 py-6">
              <div className="mb-4">
                <div className="text-[32px] leading-[40px] font-bold text-apple-gray-1 mb-3">
                  {compatibility.score}/10
                </div>
                <p className="text-[17px] leading-[24px] text-apple-gray-2">{compatibility.overview}</p>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-0 shadow-apple-md rounded-apple-lg bg-white hover:shadow-apple-lg transition-shadow duration-250 animate-spring">
              <CardHeader className="px-6 py-5">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-apple-green-DEFAULT" />
                  <CardTitle className="text-[20px] leading-[28px] font-semibold text-apple-gray-1">Green Flags</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="px-6 py-6">
                <ul className="space-y-3">
                  {compatibility.greenFlags.map((flag: string, i: number) => (
                    <li key={i} className="flex items-start">
                      <span className="text-apple-green-DEFAULT mr-3 text-lg">✓</span>
                      <span className="text-[15px] leading-[20px] text-apple-gray-2">{flag}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-apple-md rounded-apple-lg bg-white hover:shadow-apple-lg transition-shadow duration-250 animate-spring">
              <CardHeader className="px-6 py-5">
                <div className="flex items-center space-x-3">
                  <XCircle className="w-5 h-5 text-apple-red-DEFAULT" />
                  <CardTitle className="text-[20px] leading-[28px] font-semibold text-apple-gray-1">Red Flags</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="px-6 py-6">
                <ul className="space-y-3">
                  {compatibility.redFlags.map((flag: string, i: number) => (
                    <li key={i} className="flex items-start">
                      <span className="text-apple-red-DEFAULT mr-3 text-lg">⚠</span>
                      <span className="text-[15px] leading-[20px] text-apple-gray-2">{flag}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {compatibility.dateIdeas && (
            <Card className="border-0 shadow-apple-md rounded-apple-lg bg-white hover:shadow-apple-lg transition-shadow duration-250 animate-spring">
              <CardHeader className="bg-gradient-to-r from-purple-50 to-violet-50 rounded-t-apple-lg px-6 py-5">
                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-purple-500" />
                  <CardTitle className="text-[20px] leading-[28px] font-semibold text-apple-gray-1">Ideal Date Ideas</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="px-6 py-6">
                <ul className="space-y-3">
                  {compatibility.dateIdeas.map((idea: string, i: number) => (
                    <li key={i} className="flex items-start">
                      <span className="text-purple-500 mr-3 text-lg">💫</span>
                      <span className="text-[15px] leading-[20px] text-apple-gray-2">{idea}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )}
        </div>
      )}

      {/* This Week in Love */}
      <Card className="mt-8 border-0 shadow-apple-md rounded-apple-lg bg-white hover:shadow-apple-lg transition-shadow duration-250 animate-spring">
        <CardHeader className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-t-apple-lg px-6 py-5">
          <CardTitle className="text-[20px] leading-[28px] font-semibold text-apple-gray-1">This Week in Love</CardTitle>
        </CardHeader>
        <CardContent className="px-6 py-6">
          <p className="text-[17px] leading-[24px] text-apple-gray-2">
            Venus transits bring harmony to relationships this week. Single? This is a favorable time for new connections. 
            In a relationship? Focus on quality time and open communication.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
