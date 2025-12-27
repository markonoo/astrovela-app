"use client"

import { useEffect, useState } from "react"
import { AuraShell } from "@/components/aura/AuraShell"
import { PageHeader } from "@/components/aura/PageHeader"
import { AuraCard } from "@/components/aura/AuraCard"
import { PillBadge } from "@/components/aura/PillBadge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Heart, Briefcase, Sparkles, Moon, Sun } from "lucide-react"
import { WeeklyDataResponse, MonthlyDataResponse } from "@/types/api"
import { logger } from "@/utils/logger"

export default function WeeklyMonthlyPage() {
  return (
    <AuraShell title="Outlook" activeTab="horoscope">
      <WeeklyContent />
    </AuraShell>
  )
}

function WeeklyContent() {
  const [weeklyData, setWeeklyData] = useState<WeeklyDataResponse | null>(null)
  const [monthlyData, setMonthlyData] = useState<MonthlyDataResponse | null>(null)
  const [loadingData, setLoadingData] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [weeklyRes, monthlyRes] = await Promise.all([
          fetch("/api/aura/weekly"),
          fetch("/api/aura/monthly"),
        ])
        if (weeklyRes.ok) {
          setWeeklyData(await weeklyRes.json())
        }
        if (monthlyRes.ok) {
          setMonthlyData(await monthlyRes.json())
        }
      } catch (error) {
        logger.error("Failed to fetch weekly/monthly data", error)
      } finally {
        setLoadingData(false)
      }
    }

    fetchData()
  }, [])

  if (loadingData) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center">
        <div className="h-10 w-10 rounded-full border-2 border-slate-200 border-t-[#0d9488] animate-spin" />
      </div>
    )
  }

  return (
    <div className="px-4 pb-10 space-y-6">
      <PageHeader
        title="Your week & month"
        subtitle="Personalized rhythms, updated daily"
        badge={<PillBadge tone="teal">Fresh</PillBadge>}
      />

      <Tabs defaultValue="weekly" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-4 rounded-full bg-slate-100 p-1">
          <TabsTrigger
            value="weekly"
            className="rounded-full data-[state=active]:bg-white data-[state=active]:shadow-sm text-sm"
          >
            This week
          </TabsTrigger>
          <TabsTrigger
            value="monthly"
            className="rounded-full data-[state=active]:bg-white data-[state=active]:shadow-sm text-sm"
          >
            This month
          </TabsTrigger>
        </TabsList>

        <TabsContent value="weekly" className="space-y-4">
          {weeklyData ? (
            <>
              <AuraCard
                title="Emotions"
                eyebrow="Weekly"
                action={<PillBadge tone="rose">Heart</PillBadge>}
              >
                <SectionRow icon={<Heart className="w-5 h-5 text-rose-500" />} text={weeklyData.emotions} />
              </AuraCard>

              <AuraCard
                title="Relationships"
                eyebrow="Weekly"
                action={<PillBadge tone="teal">Connection</PillBadge>}
              >
                <SectionRow icon={<Sparkles className="w-5 h-5 text-purple-500" />} text={weeklyData.relationships} />
              </AuraCard>

              <AuraCard
                title="Money & career"
                eyebrow="Weekly"
                action={<PillBadge tone="blue">Momentum</PillBadge>}
              >
                <SectionRow icon={<Briefcase className="w-5 h-5 text-sky-500" />} text={weeklyData.moneyCareer} />
              </AuraCard>

              <AuraCard
                title="Spiritual theme"
                eyebrow="Weekly"
                action={<PillBadge tone="amber">Inner</PillBadge>}
              >
                <SectionRow icon={<Moon className="w-5 h-5 text-indigo-500" />} text={weeklyData.spiritualTheme} />
              </AuraCard>
            </>
          ) : (
            <div className="rounded-xl border border-slate-200 bg-white p-6 text-center text-slate-500">
              Weekly forecast not available right now.
            </div>
          )}
        </TabsContent>

        <TabsContent value="monthly" className="space-y-4">
          {monthlyData ? (
            <>
              <AuraCard title="Monthly theme" eyebrow="Overview">
                <SectionRow icon={<Sun className="w-5 h-5 text-amber-500" />} text={monthlyData.overview} />
              </AuraCard>

              <AuraCard title="Opportunities" eyebrow="Focus areas">
                <ul className="space-y-2 text-sm text-slate-700">
                  {monthlyData.focusAreas.map((area, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-emerald-500">•</span>
                      <span>{area}</span>
                    </li>
                  ))}
                </ul>
              </AuraCard>
            </>
          ) : (
            <div className="rounded-xl border border-slate-200 bg-white p-6 text-center text-slate-500">
              Monthly outlook not available right now.
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}

function SectionRow({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex gap-3">
      <span className="h-10 w-10 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center">
        {icon}
      </span>
      <p className="text-sm leading-6 text-slate-700">{text}</p>
    </div>
  )
}
