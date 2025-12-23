import React from "react"
import { Section } from "./base/Section"

interface YearlyForecast2026Part2Props {
  pageNumber: number
}

export function YearlyForecast2026Part2({ pageNumber }: YearlyForecast2026Part2Props) {
  return (
    <div className="h-full bg-gradient-to-br from-green-50 to-teal-100 flex flex-col flex-1 relative">
      <Section className="page-light flex flex-col justify-between p-4">
        <div>
          <div className="text-center mb-4">
            <h1 className="text-3xl font-light mb-3 tracking-[0.15em] font-serif text-green-800">
              2026 COSMIC FORECAST - PART II
            </h1>
            <div className="w-24 h-px bg-green-600 mx-auto mb-4"></div>
            <p className="text-lg italic text-green-600 font-light mb-4">
              "Eclipse Cycles & Transformational Gateways"
            </p>
          </div>

          <div className="space-y-4 text-sm leading-relaxed">
            <div className="bg-white/60 p-4 rounded-lg border border-green-200">
              <h2 className="text-lg font-medium mb-3 text-green-700">2026 Eclipse Seasons</h2>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="bg-blue-100 p-3 rounded">
                  <strong className="text-blue-700">March Eclipse Season</strong><br/>
                  Virgo/Pisces Axis<br/>
                  Service vs. Spirituality themes
                </div>
                <div className="bg-purple-100 p-3 rounded">
                  <strong className="text-purple-700">September Eclipse Season</strong><br/>
                  Virgo/Pisces Axis<br/>
                  Healing & Integration focus
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="bg-yellow-100 p-3 rounded border border-yellow-200">
                <h3 className="font-medium mb-2 text-yellow-700">Fire Signs (Aries, Leo, Sagittarius)</h3>
                <p><strong>Theme:</strong> Leadership Evolution</p>
                <p>Opportunities in creative projects, teaching roles, and inspirational work. Focus on authentic self-expression.</p>
              </div>
              
              <div className="bg-blue-100 p-3 rounded border border-blue-200">
                <h3 className="font-medium mb-2 text-blue-700">Earth Signs (Taurus, Virgo, Capricorn)</h3>
                <p><strong>Theme:</strong> Material Mastery</p>
                <p>Financial stability through practical innovation. Career advancement through disciplined effort.</p>
              </div>
              
              <div className="bg-green-100 p-3 rounded border border-green-200">
                <h3 className="font-medium mb-2 text-green-700">Air Signs (Gemini, Libra, Aquarius)</h3>
                <p><strong>Theme:</strong> Communication Revolution</p>
                <p>Network expansion, intellectual pursuits, and social influence. Technology and media opportunities.</p>
              </div>
              
              <div className="bg-purple-100 p-3 rounded border border-purple-200">
                <h3 className="font-medium mb-2 text-purple-700">Water Signs (Cancer, Scorpio, Pisces)</h3>
                <p><strong>Theme:</strong> Emotional Wisdom</p>
                <p>Healing work, artistic expression, and spiritual development. Intuition guides major decisions.</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-indigo-100 to-purple-100 p-4 rounded-lg border border-indigo-200">
              <h3 className="font-medium mb-2 text-indigo-700">Key Astrological Events 2026</h3>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div><strong>Jupiter-Saturn Sextile:</strong> Growth through structure</div>
                <div><strong>Venus-Mars Conjunction:</strong> Passion projects flourish</div>
                <div><strong>Mercury-Uranus Trine:</strong> Innovative communications</div>
                <div><strong>Sun-Pluto Square:</strong> Power transformation</div>
                <div><strong>Moon Nodes Shift:</strong> Karmic rebalancing</div>
                <div><strong>Equinox Alignments:</strong> Seasonal attunement</div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-100 to-teal-100 p-4 rounded-lg border border-green-300">
              <h3 className="font-medium mb-2 text-green-700">Monthly Cosmic Highlights</h3>
              <div className="grid grid-cols-3 gap-2 text-xs">
                <div><strong>Jan-Apr:</strong> Foundation building, career focus</div>
                <div><strong>May-Aug:</strong> Relationship revolution, creativity</div>
                <div><strong>Sep-Dec:</strong> Spiritual integration, wisdom sharing</div>
              </div>
            </div>

            <div className="bg-white/60 p-4 rounded border border-teal-200">
              <h3 className="font-medium mb-2 text-teal-700">2026 Manifestation Tips</h3>
              <div className="text-xs space-y-2">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <strong>Q1 Focus:</strong> Set clear intentions, build foundations
                  </div>
                  <div>
                    <strong>Q2 Focus:</strong> Creative expansion, relationship harmony
                  </div>
                  <div>
                    <strong>Q3 Focus:</strong> Spiritual practices, healing work
                  </div>
                  <div>
                    <strong>Q4 Focus:</strong> Integration, future planning
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-teal-100 to-cyan-100 p-3 rounded border border-teal-300">
              <h4 className="font-medium mb-2 text-teal-700 text-sm">2026 Affirmation</h4>
              <p className="text-xs italic text-center">
                "I embrace the cosmic currents of 2026, allowing Jupiter's wisdom to expand my mind,
                Saturn's discipline to strengthen my foundation, and the eclipses to illuminate my highest path."
              </p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}