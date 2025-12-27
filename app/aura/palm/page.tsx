"use client"

import { AuraShell } from "@/components/aura/AuraShell"
import { PageHeader } from "@/components/aura/PageHeader"
import { AuraCard } from "@/components/aura/AuraCard"
import { PillBadge } from "@/components/aura/PillBadge"
import { Hand, Sparkles } from "lucide-react"

export default function PalmPage() {
  return (
    <AuraShell title="Palm Reading" activeTab="palm">
      <div className="px-4 pb-10 space-y-5">
        <PageHeader
          title="Palm insights"
          subtitle="Upload soon — for now, learn the basics"
          badge={<PillBadge tone="blue">Preview</PillBadge>}
        />

        <AuraCard title="Your palm" eyebrow="Overview">
          <div className="aspect-square rounded-2xl border border-dashed border-slate-200 bg-slate-50 flex items-center justify-center mb-4">
            <div className="h-16 w-16 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500">
              <Hand className="w-7 h-7" />
            </div>
          </div>
          <p className="text-sm text-slate-600 text-center">
            Upload a photo of your palm to begin your reading. We’ll map your major lines and give you clear guidance.
          </p>
        </AuraCard>

        <AuraCard title="Life line" eyebrow="Vitality">
          <p className="text-sm leading-6 text-slate-700 mb-3">
            Your life line indicates vitality and life force. A long, deep line suggests strong physical energy and resilience.
          </p>
          <InfoBlock icon={<Hand className="w-4 h-4" />} text="Strong foundation with potential for longevity and robust health." />
        </AuraCard>

        <AuraCard title="Heart line" eyebrow="Emotions">
          <p className="text-sm leading-6 text-slate-700 mb-3">
            The heart line reveals your emotional nature and how you express love. It reflects your capacity for emotional connection.
          </p>
          <InfoBlock icon={<Sparkles className="w-4 h-4" />} text="Deep emotional capacity and meaningful relationships." />
        </AuraCard>

        <AuraCard title="Head line" eyebrow="Mind">
          <p className="text-sm leading-6 text-slate-700 mb-3">
            Your head line represents your intellectual approach, communication style, and how you process information and make decisions.
          </p>
          <InfoBlock icon={<Sparkles className="w-4 h-4" />} text="Analytical thinking with a balanced approach to problem-solving." />
        </AuraCard>

        <AuraCard title="Overall reading" eyebrow="Balance">
          <p className="text-sm leading-6 text-slate-700">
            Your palm suggests a harmony between emotion, intellect, and vitality. Trust your intuition and maintain balance in all areas of your life.
          </p>
        </AuraCard>
      </div>
    </AuraShell>
  )
}

function InfoBlock({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="rounded-xl bg-slate-50 border border-slate-100 p-4 flex items-start gap-3">
      <div className="h-9 w-9 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600">
        {icon}
      </div>
      <p className="text-sm text-slate-700">{text}</p>
    </div>
  )
}
