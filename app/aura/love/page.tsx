"use client"

import { useEffect, useState } from "react"
import { useUser } from "@/contexts/UserContext"
import { Paywall } from "@/components/aura/paywall"
import { AuraShell } from "@/components/aura/AuraShell"
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
      const response = await fetch("/api/aura/entitlement")
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
      const response = await fetch("/api/aura/user-sign")
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
      <AuraShell title="Compatibility" activeTab="compatibility">
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-2 border-white/20 border-t-white"></div>
        </div>
      </AuraShell>
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
    <AuraShell title="Compatibility" activeTab="compatibility">
      <div className="px-4 mt-6 space-y-6 mb-24">
        {/* Sign Selector */}
        <div className="rounded-[26px] bg-white/6 backdrop-blur-2xl shadow-[0_26px_70px_rgba(0,0,0,0.85)] p-6">
          <h2 className="text-[20px] leading-[28px] font-semibold text-white mb-1">Compare Signs</h2>
          <p className="text-[15px] leading-[20px] text-white/60 mb-5">Select your sign and your partner's sign</p>
          <div className="space-y-4">
            <div>
              <label className="text-[15px] leading-[20px] font-medium text-white/80 mb-2 block">Your Sign</label>
              <Select value={userSign} onValueChange={setUserSign}>
                <SelectTrigger className="rounded-xl border-white/20 bg-white/8 text-white h-12">
                  <SelectValue className="text-white" />
                </SelectTrigger>
                <SelectContent className="rounded-xl border-white/20 bg-[#0b0e2e]">
                  {zodiacSigns.map((sign) => (
                    <SelectItem key={sign} value={sign} className="text-[15px] text-white focus:bg-white/10">
                      {sign.charAt(0).toUpperCase() + sign.slice(1)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="text-[15px] leading-[20px] font-medium text-white/80 mb-2 block">Their Sign</label>
              <Select value={partnerSign} onValueChange={setPartnerSign}>
                <SelectTrigger className="rounded-xl border-white/20 bg-white/8 text-white h-12">
                  <SelectValue className="text-white" />
                </SelectTrigger>
                <SelectContent className="rounded-xl border-white/20 bg-[#0b0e2e]">
                  {zodiacSigns.map((sign) => (
                    <SelectItem key={sign} value={sign} className="text-[15px] text-white focus:bg-white/10">
                      {sign.charAt(0).toUpperCase() + sign.slice(1)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Compatibility Results */}
        {compatibility && (
          <div className="space-y-6">
            {/* Overall Compatibility Score */}
            <div className="rounded-[26px] bg-white/6 backdrop-blur-2xl shadow-[0_26px_70px_rgba(0,0,0,0.85)] p-6">
              <div className="flex items-center gap-3 mb-4">
                <Heart className="w-6 h-6 text-pink-400" />
                <h3 className="text-[20px] leading-[28px] font-semibold text-white">Compatibility</h3>
              </div>
              <div className="mb-4">
                <div className="text-[48px] leading-[56px] font-bold text-white mb-3">
                  {compatibility.score}/10
                </div>
                <p className="text-[17px] leading-[24px] text-white/80">{compatibility.overview}</p>
              </div>
            </div>

            {/* Green Flags */}
            <div className="rounded-[26px] bg-white/6 backdrop-blur-2xl shadow-[0_26px_70px_rgba(0,0,0,0.85)] p-6">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="w-6 h-6 text-green-400" />
                <h3 className="text-[20px] leading-[28px] font-semibold text-white">Green Flags</h3>
              </div>
              <ul className="space-y-3">
                {compatibility.greenFlags.map((flag: string, i: number) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-green-400 text-lg mt-0.5">✓</span>
                    <span className="text-[15px] leading-[20px] text-white/80 flex-1">{flag}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Red Flags */}
            <div className="rounded-[26px] bg-white/6 backdrop-blur-2xl shadow-[0_26px_70px_rgba(0,0,0,0.85)] p-6">
              <div className="flex items-center gap-3 mb-4">
                <XCircle className="w-6 h-6 text-red-400" />
                <h3 className="text-[20px] leading-[28px] font-semibold text-white">Red Flags</h3>
              </div>
              <ul className="space-y-3">
                {compatibility.redFlags.map((flag: string, i: number) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-red-400 text-lg mt-0.5">⚠</span>
                    <span className="text-[15px] leading-[20px] text-white/80 flex-1">{flag}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Date Ideas */}
            {compatibility.dateIdeas && compatibility.dateIdeas.length > 0 && (
              <div className="rounded-[26px] bg-white/6 backdrop-blur-2xl shadow-[0_26px_70px_rgba(0,0,0,0.85)] p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Calendar className="w-6 h-6 text-purple-400" />
                  <h3 className="text-[20px] leading-[28px] font-semibold text-white">Ideal Date Ideas</h3>
                </div>
                <ul className="space-y-3">
                  {compatibility.dateIdeas.map((idea: string, i: number) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-purple-400 text-lg mt-0.5">💫</span>
                      <span className="text-[15px] leading-[20px] text-white/80 flex-1">{idea}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Compatibility Metrics */}
            <div className="grid grid-cols-3 gap-4">
              <div className="rounded-[20px] bg-white/6 backdrop-blur-2xl shadow-[0_26px_70px_rgba(0,0,0,0.85)] p-4 text-center">
                <p className="text-[13px] leading-[18px] text-white/60 mb-2">Communication</p>
                <p className="text-[24px] leading-[32px] font-bold text-white">85%</p>
              </div>
              <div className="rounded-[20px] bg-white/6 backdrop-blur-2xl shadow-[0_26px_70px_rgba(0,0,0,0.85)] p-4 text-center">
                <p className="text-[13px] leading-[18px] text-white/60 mb-2">Emotional</p>
                <p className="text-[24px] leading-[32px] font-bold text-white">72%</p>
              </div>
              <div className="rounded-[20px] bg-white/6 backdrop-blur-2xl shadow-[0_26px_70px_rgba(0,0,0,0.85)] p-4 text-center">
                <p className="text-[13px] leading-[18px] text-white/60 mb-2">Physical</p>
                <p className="text-[24px] leading-[32px] font-bold text-white">90%</p>
              </div>
            </div>
          </div>
        )}

        {/* This Week in Love */}
        <div className="rounded-[26px] bg-white/6 backdrop-blur-2xl shadow-[0_26px_70px_rgba(0,0,0,0.85)] p-6">
          <h3 className="text-[20px] leading-[28px] font-semibold text-white mb-4">This Week in Love</h3>
          <p className="text-[17px] leading-[24px] text-white/80">
            Venus transits bring harmony to relationships this week. Single? This is a favorable time for new connections. 
            In a relationship? Focus on quality time and open communication.
          </p>
        </div>
      </div>
    </AuraShell>
  )
}
