"use client"

import { AuraShell } from "@/components/aura/AuraShell"
import { AuraCard } from "@/components/aura/AuraCard"
import { PageHeader } from "@/components/aura/PageHeader"
import { PillBadge } from "@/components/aura/PillBadge"
import { Smile, TrendingUp } from "lucide-react"

export default function MoodPage() {
  // Mock weekly mood data (replace with API once ready)
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
    <AuraShell title="Mood" activeTab="mood">
      <div className="px-4 pb-10 space-y-5">
        <PageHeader
          title="Mood"
          subtitle="Your emotional rhythm this week"
          badge={<PillBadge tone="amber">Balanced</PillBadge>}
        />

        <AuraCard title="Today's mood" eyebrow="Now">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-12 w-12 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center">
              <Smile className="w-6 h-6" />
            </div>
            <div>
              <div className="text-3xl font-semibold text-slate-900">{todayMood.mood}%</div>
              <p className="text-sm text-slate-500">{todayMood.label}</p>
            </div>
          </div>
          <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full bg-gradient-to-r from-[#0d9488] via-[#22c55e] to-[#86efac]"
              style={{ width: `${todayMood.mood}%` }}
            />
          </div>
        </AuraCard>

        <AuraCard title="Weekly mood">
          <div className="space-y-3">
            {weeklyMoods.map((mood, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-12 text-sm text-slate-500">{mood.day}</div>
                <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#0d9488] to-[#22d3ee]"
                    style={{ width: `${mood.mood}%` }}
                  />
                </div>
                <div className="w-12 text-right text-sm font-semibold text-slate-800">{mood.mood}%</div>
              </div>
            ))}
          </div>
        </AuraCard>

        <AuraCard title="Insights" eyebrow="Guidance">
          <p className="text-sm leading-6 text-slate-700 mb-3">
            Your mood patterns show a positive trend this week. Peaks of joy and optimism are balanced by calm reflection—keep leaning into
            routines that help you recharge.
          </p>
          <div className="rounded-xl bg-slate-50 border border-slate-100 p-4 flex items-start gap-3">
            <div className="h-9 w-9 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center">
              <TrendingUp className="w-4 h-4" />
            </div>
            <div>
              <p className="text-sm text-slate-600">
                Tip: Stay connected with supportive people and schedule one energizing activity mid-week to keep momentum.
              </p>
            </div>
          </div>
        </AuraCard>
      </div>
    </AuraShell>
  )
}
