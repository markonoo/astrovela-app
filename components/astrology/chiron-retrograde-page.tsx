import React from "react"
import { Section } from "./base/Section"

interface ChironRetrogradePageProps {
  pageNumber: number
}

export function ChironRetrogradePage({ pageNumber }: ChironRetrogradePageProps) {
  return (
    <div className="h-full bg-black text-[#D4AF37] flex flex-col flex-1">
      <Section className="page-dark flex flex-col justify-between p-4">
        <div>
          <div className="text-center mb-6">
            <h1 className="text-3xl font-light mb-4 tracking-[0.15em] font-serif text-[#D4AF37]">
              CHIRON RETROGRADE
            </h1>
            <div className="w-24 h-px bg-[#D4AF37] mx-auto mb-6"></div>
            <p className="text-lg italic text-yellow-300 font-light mb-6">
              "The Wounded Healer's Journey to Inner Wholeness"
            </p>
          </div>

          <div className="space-y-6 text-sm leading-relaxed">
            <div>
              <h2 className="text-lg font-medium mb-3 text-[#D4AF37]">Understanding Chiron Retrograde</h2>
              <p className="mb-3 text-xs text-yellow-100">Chiron retrogrades for approximately 5 months each year, turning our deepest wounds inward for profound healing and wisdom.</p>
              <div className="bg-white/10 p-3 rounded">
                <div className="grid grid-cols-2 gap-3 text-xs text-yellow-100">
                  <div>
                    <strong className="text-[#D4AF37]">Duration:</strong> 5 months annually
                  </div>
                  <div>
                    <strong className="text-[#D4AF37]">Energy:</strong> Inner healing journey
                  </div>
                  <div>
                    <strong className="text-[#D4AF37]">Focus:</strong> Wound recognition and healing
                  </div>
                  <div>
                    <strong className="text-[#D4AF37]">Gift:</strong> Wisdom through healing
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-medium mb-3 text-[#D4AF37]">The Chiron Wound Themes</h2>
              <div className="space-y-3 text-xs text-yellow-100">
                <div className="bg-yellow-900/30 p-3 rounded">
                  <strong className="text-yellow-300">Rejection & Abandonment:</strong> Healing from feeling unwanted, not belonging, or being cast out from groups.
                </div>
                <div className="bg-amber-900/30 p-3 rounded">
                  <strong className="text-amber-300">Inadequacy & Shame:</strong> Transforming deep feelings of not being good enough into self-acceptance.
                </div>
                <div className="bg-orange-900/30 p-3 rounded">
                  <strong className="text-orange-300">Betrayal & Trust:</strong> Learning to trust again after deep betrayals, especially from mentors or healers.
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-medium mb-3 text-[#D4AF37]">Chiron Retrograde Effects</h2>
              <div className="grid grid-cols-2 gap-4 text-xs text-yellow-100">
                <div>
                  <h3 className="font-medium mb-2 text-yellow-300">Healing Opportunities</h3>
                  <ul className="space-y-1">
                    <li>• Deep wound recognition</li>
                    <li>• Compassion development</li>
                    <li>• Healing gift activation</li>
                    <li>• Wisdom through pain</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium mb-2 text-[#D4AF37]">Challenges</h3>
                  <ul className="space-y-1">
                    <li>• Old wounds reopening</li>
                    <li>• Victim mentality surfacing</li>
                    <li>• Healing crisis periods</li>
                    <li>• Teacher/student conflicts</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-medium mb-3 text-[#D4AF37]">Chiron by Zodiac Sign Wounds</h2>
              <div className="grid grid-cols-2 gap-2 text-xs text-yellow-100">
                <div className="bg-red-900/20 p-2 rounded">
                  <strong className="text-red-300">Aries:</strong> Identity wounds, leadership struggles
                </div>
                <div className="bg-green-900/20 p-2 rounded">
                  <strong className="text-green-300">Taurus:</strong> Self-worth, material security fears
                </div>
                <div className="bg-blue-900/20 p-2 rounded">
                  <strong className="text-blue-300">Gemini:</strong> Communication, being heard
                </div>
                <div className="bg-purple-900/20 p-2 rounded">
                  <strong className="text-purple-300">Cancer:</strong> Emotional safety, nurturing
                </div>
                <div className="bg-yellow-900/20 p-2 rounded">
                  <strong className="text-yellow-300">Leo:</strong> Recognition, creative expression
                </div>
                <div className="bg-indigo-900/20 p-2 rounded">
                  <strong className="text-indigo-300">Virgo:</strong> Perfectionism, service wounds
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-medium mb-3 text-[#D4AF37]">The Wounded Healer Path</h2>
              <div className="space-y-2 text-xs text-yellow-100">
                <div className="bg-gradient-to-r from-yellow-900/40 to-amber-900/40 p-3 rounded">
                  <strong className="text-yellow-300">Recognition:</strong> Acknowledging your deepest wound without shame or blame
                </div>
                <div className="bg-gradient-to-r from-amber-900/40 to-orange-900/40 p-3 rounded">
                  <strong className="text-amber-300">Integration:</strong> Learning to live with the wound while not being defined by it
                </div>
                <div className="bg-gradient-to-r from-orange-900/40 to-red-900/40 p-3 rounded">
                  <strong className="text-orange-300">Service:</strong> Using your wound wisdom to help others heal similar pain
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}