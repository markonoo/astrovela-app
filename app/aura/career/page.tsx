"use client"

import { useEffect, useState } from "react"
import { AuraShell } from "@/components/aura/AuraShell"
import { AuraCard } from "@/components/aura/AuraCard"
import { PageHeader } from "@/components/aura/PageHeader"
import { PillBadge } from "@/components/aura/PillBadge"
import { Briefcase, TrendingUp, Calendar, AlertCircle } from "lucide-react"
import { CareerDataResponse } from "@/types/api"
import { logger } from "@/utils/logger"

export default function CareerPage() {
  return (
    <AuraShell title="Career" activeTab="mood">
      <CareerContent />
    </AuraShell>
  )
}

function CareerContent() {
  const [careerData, setCareerData] = useState<CareerDataResponse | null>(null)
  const [loadingData, setLoadingData] = useState(true)

  useEffect(() => {
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

    fetchCareerData()
  }, [])

  if (loadingData) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center">
        <div className="h-10 w-10 rounded-full border-2 border-slate-200 border-t-[#0d9488] animate-spin" />
      </div>
    )
  }

  return (
    <div className="px-4 pb-10 space-y-5">
      <PageHeader
        title="Career & timing"
        subtitle="Best moments to move"
        badge={<PillBadge tone="teal">Today</PillBadge>}
      />

      <AuraCard title="Today’s energy" eyebrow="Career" action={<PillBadge tone="blue">Focus</PillBadge>}>
        <div className="flex items-start gap-3">
          <div className="h-11 w-11 rounded-full bg-sky-50 text-sky-600 flex items-center justify-center">
            <Briefcase className="w-5 h-5" />
          </div>
          <div className="space-y-2">
            <p className="text-sm text-slate-700">{careerData?.today.energy}</p>
            <div className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-800">
              {careerData?.today.advice}
            </div>
          </div>
        </div>
      </AuraCard>

      {careerData?.timing && (
        <AuraCard title="Timing signals" eyebrow="This week" action={<PillBadge tone="amber">Plan</PillBadge>}>
          <div className="space-y-4 text-sm text-slate-700">
            {careerData.timing.bestDays?.length ? (
              <div>
                <p className="font-semibold text-slate-900 mb-2">Best days to act</p>
                <ul className="space-y-1">
                  {careerData.timing.bestDays.map((day, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-emerald-500" />
                      <span>{day}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
            {careerData.timing.visibilityDays?.length ? (
              <div>
                <p className="font-semibold text-slate-900 mb-2">Visibility days</p>
                <ul className="space-y-1">
                  {careerData.timing.visibilityDays.map((day, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-sky-500" />
                      <span>{day}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </AuraCard>
      )}

      {careerData?.timing?.bestDays?.length ? (
        <AuraCard title="Top pick" eyebrow="Best day" action={<PillBadge tone="teal">Go</PillBadge>}>
          <div className="space-y-2 text-sm text-slate-700">
            {careerData.timing.bestDays.slice(0, 3).map((day, i) => (
              <div key={i} className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-emerald-500" />
                <span>{day}</span>
              </div>
            ))}
          </div>
        </AuraCard>
      ) : null}

      {careerData?.insights?.length ? (
        <AuraCard title="Signals to note" eyebrow="Warnings" action={<PillBadge tone="gray">Heads up</PillBadge>}>
          <ul className="space-y-3 text-sm text-slate-700">
            {careerData.insights.map((insight, i) => (
              <li key={i} className="flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-amber-500 mt-0.5" />
                <span>{insight}</span>
              </li>
            ))}
          </ul>
        </AuraCard>
      ) : null}
    </div>
  )
}
