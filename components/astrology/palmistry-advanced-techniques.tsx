import React from "react"
import { Section } from "./base/Section"

interface PalmistryAdvancedTechniquesProps {
  pageNumber: number
}

export function PalmistryAdvancedTechniques({ pageNumber }: PalmistryAdvancedTechniquesProps) {
  return (
    <div className="h-full bg-gradient-to-br from-indigo-50 to-violet-100 flex flex-col flex-1 relative">
      <Section className="page-light flex flex-col justify-between p-4">
        <div>
          <div className="text-center mb-6">
            <h1 className="text-3xl font-light mb-4 tracking-[0.15em] font-serif text-indigo-800">
              ADVANCED PALMISTRY
            </h1>
            <div className="w-24 h-px bg-indigo-600 mx-auto mb-6"></div>
          </div>

          <div className="space-y-6 text-sm leading-relaxed">
            <div>
              <h2 className="text-lg font-medium mb-3 text-indigo-700">Minor Lines & Their Meanings</h2>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="bg-white/60 p-3 rounded">
                  <strong className="text-blue-600">Apollo Line:</strong> Success, fame, artistic talent, creativity
                </div>
                <div className="bg-indigo-50 p-3 rounded">
                  <strong className="text-indigo-600">Mercury Line:</strong> Health, intuition, business acumen
                </div>
                <div className="bg-violet-50 p-3 rounded">
                  <strong className="text-violet-600">Marriage Lines:</strong> Significant relationships, partnerships
                </div>
                <div className="bg-purple-50 p-3 rounded">
                  <strong className="text-purple-600">Travel Lines:</strong> Major journeys, relocations, adventures
                </div>
                <div className="bg-pink-50 p-3 rounded">
                  <strong className="text-pink-600">Children Lines:</strong> Potential for children, nurturing nature
                </div>
                <div className="bg-blue-50 p-3 rounded">
                  <strong className="text-blue-600">Intuition Line:</strong> Psychic abilities, spiritual connection
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-medium mb-3 text-indigo-700">Special Markings & Symbols</h2>
              <div className="space-y-3 text-xs">
                <div className="bg-yellow-100 p-3 rounded">
                  <div className="flex items-center mb-2">
                    <div className="text-lg mr-2">⭐</div>
                    <strong className="text-yellow-700">Stars:</strong>
                  </div>
                  <p>Exceptional talent, fame potential, or significant events. Location determines the area of influence.</p>
                </div>
                <div className="bg-green-100 p-3 rounded">
                  <div className="flex items-center mb-2">
                    <div className="text-lg mr-2">△</div>
                    <strong className="text-green-700">Triangles:</strong>
                  </div>
                  <p>Harmonious energy, protection, wisdom. Indicates favorable outcomes in that life area.</p>
                </div>
                <div className="bg-red-100 p-3 rounded">
                  <div className="flex items-center mb-2">
                    <div className="text-lg mr-2">✕</div>
                    <strong className="text-red-700">Crosses:</strong>
                  </div>
                  <p>Challenges, obstacles, or major decisions. Not necessarily negative - often growth opportunities.</p>
                </div>
                <div className="bg-blue-100 p-3 rounded">
                  <div className="flex items-center mb-2">
                    <div className="text-lg mr-2">◯</div>
                    <strong className="text-blue-700">Islands:</strong>
                  </div>
                  <p>Temporary obstacles, health concerns, or periods of uncertainty that eventually resolve.</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-medium mb-3 text-indigo-700">Timing in Palmistry</h2>
              <div className="space-y-2 text-xs">
                <div className="bg-gradient-to-r from-indigo-100 to-violet-100 p-3 rounded">
                  <strong>Life Line Timing:</strong> Divide into 7-year segments from thumb base. Each section represents approximately 10-15 years.
                </div>
                <div className="bg-gradient-to-r from-violet-100 to-purple-100 p-3 rounded">
                  <strong>Fate Line Timing:</strong> Wrist = birth, intersection with head line = mid-30s, base of fingers = later life.
                </div>
                <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-3 rounded">
                  <strong>Heart Line Timing:</strong> Start from pinky side - early relationships to index finger - mature love.
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-medium mb-3 text-indigo-700">Hand Texture Analysis</h2>
              <div className="grid grid-cols-2 gap-4 text-xs">
                <div>
                  <h3 className="font-medium mb-2 text-purple-600">Skin Characteristics</h3>
                  <ul className="space-y-1">
                    <li>• Smooth skin: Refined, gentle nature</li>
                    <li>• Rough skin: Practical, hardworking</li>
                    <li>• Soft hands: Sensitive, artistic</li>
                    <li>• Firm hands: Energetic, determined</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium mb-2 text-indigo-600">Temperature & Color</h3>
                  <ul className="space-y-1">
                    <li>• Warm hands: Enthusiastic, generous</li>
                    <li>• Cool hands: Calm, reserved nature</li>
                    <li>• Pink color: Good circulation, vitality</li>
                    <li>• Pale color: Introspective, spiritual</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-medium mb-3 text-indigo-700">Comparing Both Hands</h2>
              <div className="space-y-2 text-xs">
                <div className="bg-white/60 p-3 rounded">
                  <strong className="text-green-600">Non-Dominant Hand:</strong> Natural potential, inherited traits, subconscious patterns
                </div>
                <div className="bg-indigo-50 p-3 rounded">
                  <strong className="text-indigo-600">Dominant Hand:</strong> Conscious choices, developed traits, current life direction
                </div>
                <div className="bg-violet-50 p-3 rounded">
                  <strong className="text-violet-600">Significant Differences:</strong> Major life changes, conscious development, overcoming challenges
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-indigo-100 to-violet-100 p-4 rounded-lg">
              <h3 className="font-medium mb-2 text-indigo-700">Master Palmist Techniques</h3>
              <div className="text-xs space-y-1">
                <p>• Study hand proportions and overall balance first</p>
                <p>• Look for dominant themes across multiple indicators</p>
                <p>• Consider contradictions as internal conflicts to explore</p>
                <p>• Use palmistry as counseling tool, not fortune telling</p>
                <p>• Always emphasize free will and personal growth potential</p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}