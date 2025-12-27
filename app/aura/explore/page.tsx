"use client"

import { useState } from "react"
import { AuraShell } from "@/components/aura/AuraShell"
import { AuraCard } from "@/components/aura/AuraCard"
import { PageHeader } from "@/components/aura/PageHeader"
import { PillBadge } from "@/components/aura/PillBadge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Sparkles } from "lucide-react"
import { zodiacSignsData } from "@/lib/zodiac-data"

export default function ExplorePage() {
  const [selectedSign, setSelectedSign] = useState<string>("aries")

  const signs = [
    "aries", "taurus", "gemini", "cancer", "leo", "virgo",
    "libra", "scorpio", "sagittarius", "capricorn", "aquarius", "pisces"
  ]

  const selectedSignData = zodiacSignsData[selectedSign] || zodiacSignsData.aries

  return (
    <AuraShell title="Explore" activeTab="ask-ai">
      <div className="px-4 pb-10 space-y-5">
        <PageHeader
          title="Explore astrology"
          subtitle="Quick guides for signs, planets, and houses"
          badge={<PillBadge tone="teal">Library</PillBadge>}
        />

        <Tabs defaultValue="signs" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-4 rounded-full bg-slate-100 p-1">
            <TabsTrigger value="signs" className="rounded-full data-[state=active]:bg-white data-[state=active]:shadow-sm text-sm">
              Signs
            </TabsTrigger>
            <TabsTrigger value="planets" className="rounded-full data-[state=active]:bg-white data-[state=active]:shadow-sm text-sm">
              Planets
            </TabsTrigger>
            <TabsTrigger value="houses" className="rounded-full data-[state=active]:bg-white data-[state=active]:shadow-sm text-sm">
              Houses
            </TabsTrigger>
          </TabsList>

          <TabsContent value="signs">
            <div className="grid md:grid-cols-2 gap-4">
              <AuraCard title="Select a sign" eyebrow="Zodiac">
                <div className="grid grid-cols-3 gap-2">
                  {signs.map((sign) => (
                    <button
                      key={sign}
                      onClick={() => setSelectedSign(sign)}
                      className={`rounded-xl px-3 py-2 text-sm font-medium transition-all ${
                        selectedSign === sign
                          ? "bg-[#0d9488] text-white shadow-sm"
                          : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                      }`}
                    >
                      {sign.charAt(0).toUpperCase() + sign.slice(1)}
                    </button>
                  ))}
                </div>
              </AuraCard>

              <AuraCard
                title={selectedSign.charAt(0).toUpperCase() + selectedSign.slice(1)}
                eyebrow={`${selectedSignData.element} • ${selectedSignData.modality}`}
                action={<PillBadge tone="amber">Sign traits</PillBadge>}
              >
                <InfoBlock label="Strengths" text={selectedSignData.strengths} />
                <InfoBlock label="Shadows" text={selectedSignData.shadows} />
                <InfoBlock label="Love style" text={selectedSignData.loveStyle} />
                <InfoBlock label="Communication" text={selectedSignData.communication} />
              </AuraCard>
            </div>
          </TabsContent>

          <TabsContent value="planets" className="space-y-3">
            <AuraCard title="Planets in signs" eyebrow="Foundations" action={<PillBadge tone="blue">Essentials</PillBadge>}>
              <p className="text-sm text-slate-700 mb-4">
                Each planet represents a facet of your life. In a sign, it takes on that sign's qualities.
              </p>
              <div className="space-y-3 text-sm text-slate-700">
                <InfoBlock label="Sun" text="Core identity and purpose" />
                <InfoBlock label="Moon" text="Emotional nature and inner self" />
                <InfoBlock label="Venus" text="Love, attraction, and what you value" />
                <InfoBlock label="Mars" text="Drive, energy, and how you take action" />
              </div>
            </AuraCard>
          </TabsContent>

          <TabsContent value="houses" className="space-y-3">
            <AuraCard title="The 12 houses" eyebrow="Life areas" action={<PillBadge tone="gray">Reference</PillBadge>}>
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  { num: 1, name: "Self", desc: "Identity and appearance" },
                  { num: 2, name: "Resources", desc: "Money and possessions" },
                  { num: 3, name: "Communication", desc: "Learning and siblings" },
                  { num: 4, name: "Home", desc: "Family and roots" },
                  { num: 5, name: "Creativity", desc: "Self-expression and children" },
                  { num: 6, name: "Health", desc: "Work and daily routines" },
                  { num: 7, name: "Partnerships", desc: "Relationships and marriage" },
                  { num: 8, name: "Transformation", desc: "Shared resources and rebirth" },
                  { num: 9, name: "Philosophy", desc: "Higher learning and travel" },
                  { num: 10, name: "Career", desc: "Public image and ambition" },
                  { num: 11, name: "Community", desc: "Friends and aspirations" },
                  { num: 12, name: "Subconscious", desc: "Spirituality and hidden matters" },
                ].map((house) => (
                  <div key={house.num} className="rounded-lg border border-slate-200 bg-white px-4 py-3 shadow-sm">
                    <div className="text-sm font-semibold text-slate-900 mb-1">
                      {house.num}. {house.name} House
                    </div>
                    <div className="text-xs text-slate-600">{house.desc}</div>
                  </div>
                ))}
              </div>
            </AuraCard>
          </TabsContent>
        </Tabs>
      </div>
    </AuraShell>
  )
}

function InfoBlock({ label, text }: { label: string; text: string }) {
  return (
    <div className="mb-3 last:mb-0">
      <p className="text-xs uppercase tracking-[0.08em] text-slate-400 mb-1">{label}</p>
      <p className="text-sm text-slate-700">{text}</p>
    </div>
  )
}
