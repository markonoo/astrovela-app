"use client"

import { useEffect, useMemo, useState, type ReactNode } from "react"
import { format } from "date-fns"
import Link from "next/link"
import { Sun, Heart, Briefcase, BookOpen, Calendar, Moon, Sparkles } from "lucide-react"
import { useUser } from "@/contexts/UserContext"
import { AuraShell, useEntitlement } from "@/components/aura/AuraShell"
import { AuraCard } from "@/components/aura/AuraCard"
import { StatTile } from "@/components/aura/StatTile"
import { PageHeader } from "@/components/aura/PageHeader"
import { PillBadge } from "@/components/aura/PillBadge"
import { TodayDataResponse } from "@/types/api"
import { logger } from "@/utils/logger"

export default function AuraTodayPage() {
  return (
    <AuraShell title="Aura Today" activeTab="horoscope">
      <AuraTodayContent />
    </AuraShell>
  )
}

function AuraTodayContent() {
  const { user } = useUser()
  const entitlement = useEntitlement()
  const [todayData, setTodayData] = useState<TodayDataResponse | null>(null)
  const [loadingData, setLoadingData] = useState(true)

  useEffect(() => {
    const fetchTodayData = async () => {
      try {
        const response = await fetch("/api/aura/today")
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

    fetchTodayData()
  }, [])

  const greeting = useMemo(() => {
    const hour = new Date().getHours()
    if (hour < 12) return "Good morning"
    if (hour < 18) return "Good afternoon"
    return "Good evening"
  }, [])

  const name = useMemo(() => user?.email?.split("@")[0] ?? "there", [user?.email])
  const daysLeft = entitlement?.daysLeft ?? 0
  const showTrial = entitlement?.plan === "trial" && daysLeft > 0

  if (loadingData) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center">
        <div className="h-10 w-10 rounded-full border-2 border-slate-200 border-t-[#0d9488] animate-spin" />
      </div>
    )
  }

  if (!todayData) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center text-slate-500">
        Unable to load today&apos;s insights right now.
      </div>
    )
  }

  return (
    <div className="space-y-5 pb-6">
      <PageHeader
        title={`${greeting}, ${name}`}
        subtitle={format(new Date(), "EEEE, MMM d")}
        badge={
          showTrial ? (
            <PillBadge tone="teal">{daysLeft} {daysLeft === 1 ? "day" : "days"} left</PillBadge>
          ) : (
            <PillBadge tone="gray">{entitlement?.plan === "active" ? "Member" : entitlement?.plan}</PillBadge>
          )
        }
      />

      <AuraCard title="Today’s Snapshot" className="bg-white">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <StatTile
            label="Energy"
            value={todayData.energy.title}
            subLabel={todayData.energy.mood}
            icon={<Sun className="w-5 h-5" />}
            tone="amber"
          />
          <StatTile
            label="Love"
            value={todayData.love.title}
            subLabel={`Best time: ${todayData.love.bestTime}`}
            icon={<Heart className="w-5 h-5" />}
            tone="rose"
          />
          <StatTile
            label="Career"
            value={todayData.career.title}
            subLabel="Action ready"
            icon={<Briefcase className="w-5 h-5" />}
            tone="blue"
          />
        </div>
      </AuraCard>

      <AuraCard title="Focus for today">
        <div className="space-y-3 text-slate-700">
          <p className="text-sm text-slate-500">{todayData.energy.mood}</p>
          <p className="text-base leading-relaxed">{todayData.energy.description}</p>
        </div>
      </AuraCard>

      <AuraCard title="Love" action={<Link href="/aura/love" className="text-sm text-[#0d9488] font-medium">Open love</Link>}>
        <p className="text-base leading-relaxed text-slate-700 mb-3">{todayData.love.description}</p>
        <PillBadge tone="rose">Best time: {todayData.love.bestTime}</PillBadge>
      </AuraCard>

      <AuraCard title="Career" action={<Link href="/aura/career" className="text-sm text-[#0d9488] font-medium">Open career</Link>}>
        <p className="text-base leading-relaxed text-slate-700 mb-3">{todayData.career.description}</p>
        <PillBadge tone="blue">Action: {todayData.career.actionAdvice}</PillBadge>
      </AuraCard>

      <AuraCard title="Current transits" className="bg-slate-50 border-slate-200">
        <div className="flex items-center gap-4 text-slate-800">
          <span className="h-10 w-10 rounded-full bg-white border border-slate-200 flex items-center justify-center">
            <Moon className="w-5 h-5" />
          </span>
          <div className="space-y-1">
            <p className="text-sm font-medium">Moon in {todayData.transits.moonSign}</p>
            <p className="text-sm text-slate-600">{todayData.transits.keyAspect}</p>
          </div>
        </div>
      </AuraCard>

      <AuraCard title="Explore more">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <ExploreLink
            href="/aura/weekly"
            title="Weekly outlook"
            subtitle="See the week ahead"
            icon={<Calendar className="w-5 h-5" />}
          />
          <ExploreLink
            href="/aura/explore"
            title="Astrology library"
            subtitle="Learn signs & planets"
            icon={<BookOpen className="w-5 h-5" />}
          />
          <ExploreLink
            href="/aura/love"
            title="Love compatibility"
            subtitle="See your match scores"
            icon={<Heart className="w-5 h-5" />}
          />
          <ExploreLink
            href="/aura/ask-ai"
            title="Guided coach"
            subtitle="Ask for tailored advice"
            icon={<Sparkles className="w-5 h-5" />}
          />
        </div>
      </AuraCard>
    </div>
  )
}

interface ExploreLinkProps {
  href: string
  title: string
  subtitle: string
  icon: ReactNode
}

function ExploreLink({ href, title, subtitle, icon }: ExploreLinkProps) {
  return (
    <Link
      href={href}
      className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
    >
      <span className="h-10 w-10 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center">
        {icon}
      </span>
      <div>
        <p className="text-sm font-semibold text-slate-900">{title}</p>
        <p className="text-xs text-slate-500">{subtitle}</p>
      </div>
    </Link>
  )
}
