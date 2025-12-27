"use client"

import { useEffect, useState } from "react"
import { useUser } from "@/contexts/UserContext"
import { AuraShell } from "@/components/aura/AuraShell"
import { AuraCard } from "@/components/aura/AuraCard"
import { PageHeader } from "@/components/aura/PageHeader"
import { PillBadge } from "@/components/aura/PillBadge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Heart, CheckCircle, XCircle, Calendar } from "lucide-react"
import { getCompatibility } from "@/lib/zodiac-compatibility-complete"
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
  const [userSign, setUserSign] = useState<string>("")
  const [partnerSign, setPartnerSign] = useState<string>("aries")
  const [compatibility, setCompatibility] = useState<CompatibilityResult | null>(null)
  const [loadingData, setLoadingData] = useState(true)

  useEffect(() => {
    if (!loading && user) {
      fetchUserSign()
    }
  }, [user, loading])

  useEffect(() => {
    if (userSign && partnerSign) {
      loadCompatibility()
    }
  }, [userSign, partnerSign])

  const fetchUserSign = async () => {
    try {
      const response = await fetch("/api/aura/user-sign")
      if (response.ok) {
        const data = await response.json()
        setUserSign(data.sunSign || "aries")
      } else {
        setUserSign("aries")
      }
    } catch (error) {
      logger.error("Failed to fetch user sign", error)
      setUserSign("aries")
    } finally {
      setLoadingData(false)
    }
  }

  const loadCompatibility = () => {
    const compat = getCompatibility(userSign as any, partnerSign as any)
    if (!compat) return

    setCompatibility({
      score: compat.score,
      overview: compat.summary,
      greenFlags: compat.love.strengths,
      redFlags: compat.love.challenges,
      dateIdeas: compat.dateIdeas,
    })
  }

  const zodiacSigns = [
    "aries", "taurus", "gemini", "cancer", "leo", "virgo",
    "libra", "scorpio", "sagittarius", "capricorn", "aquarius", "pisces",
  ]

  if (loading || loadingData) {
    return (
      <AuraShell title="Compatibility" activeTab="compatibility">
        <div className="min-h-[50vh] flex items-center justify-center">
          <div className="h-10 w-10 rounded-full border-2 border-slate-200 border-t-[#0d9488] animate-spin" />
        </div>
      </AuraShell>
    )
  }

  return (
    <AuraShell title="Compatibility" activeTab="compatibility">
      <div className="px-4 pb-10 space-y-5">
        <PageHeader
          title="Love compatibility"
          subtitle="Compare your sign with a partner"
          badge={<PillBadge tone="rose">Live</PillBadge>}
        />

        <AuraCard title="Select signs" eyebrow="Inputs">
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-slate-700 mb-2 block">Your sign</label>
              <Select value={userSign} onValueChange={setUserSign}>
                <SelectTrigger className="h-11 rounded-xl border-slate-200 bg-white text-slate-800">
                  <SelectValue placeholder="Choose your sign" />
                </SelectTrigger>
                <SelectContent className="rounded-xl border-slate-200 bg-white">
                  {zodiacSigns.map((sign) => (
                    <SelectItem key={sign} value={sign} className="text-sm">
                      {sign.charAt(0).toUpperCase() + sign.slice(1)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="text-sm font-medium text-slate-700 mb-2 block">Their sign</label>
              <Select value={partnerSign} onValueChange={setPartnerSign}>
                <SelectTrigger className="h-11 rounded-xl border-slate-200 bg-white text-slate-800">
                  <SelectValue placeholder="Choose partner sign" />
                </SelectTrigger>
                <SelectContent className="rounded-xl border-slate-200 bg-white">
                  {zodiacSigns.map((sign) => (
                    <SelectItem key={sign} value={sign} className="text-sm">
                      {sign.charAt(0).toUpperCase() + sign.slice(1)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </AuraCard>

        {compatibility && (
          <div className="space-y-4">
            <AuraCard
              title="Compatibility score"
              eyebrow="Overview"
              action={<PillBadge tone="teal">{compatibility.score}/10</PillBadge>}
            >
              <div className="flex items-start gap-3">
                <div className="h-11 w-11 rounded-full bg-rose-50 text-rose-600 flex items-center justify-center">
                  <Heart className="w-5 h-5" />
                </div>
                <p className="text-sm leading-6 text-slate-700">{compatibility.overview}</p>
              </div>
            </AuraCard>

            <AuraCard title="Green flags" eyebrow="Strengths" action={<PillBadge tone="teal">Good</PillBadge>}>
              <ul className="space-y-3 text-sm text-slate-700">
                {compatibility.greenFlags.map((flag, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5" />
                    <span>{flag}</span>
                  </li>
                ))}
              </ul>
            </AuraCard>

            <AuraCard title="Watch outs" eyebrow="Tensions" action={<PillBadge tone="amber">Mindful</PillBadge>}>
              <ul className="space-y-3 text-sm text-slate-700">
                {compatibility.redFlags.map((flag, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <XCircle className="w-4 h-4 text-amber-500 mt-0.5" />
                    <span>{flag}</span>
                  </li>
                ))}
              </ul>
            </AuraCard>

            {compatibility.dateIdeas && compatibility.dateIdeas.length > 0 && (
              <AuraCard title="Date ideas" eyebrow="Connection" action={<PillBadge tone="blue">Try</PillBadge>}>
                <ul className="space-y-3 text-sm text-slate-700">
                  {compatibility.dateIdeas.map((idea, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Calendar className="w-4 h-4 text-sky-500 mt-0.5" />
                      <span>{idea}</span>
                    </li>
                  ))}
                </ul>
              </AuraCard>
            )}
          </div>
        )}
      </div>
    </AuraShell>
  )
}
