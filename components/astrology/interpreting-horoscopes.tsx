import React from "react"
import { Section } from "./base/Section"

interface InterpretingHoroscopesProps {
  pageNumber: number
}

export function InterpretingHoroscopes({ pageNumber }: InterpretingHoroscopesProps) {
  return (
    <div className="h-full bg-gradient-to-br from-amber-50 to-orange-100 flex flex-col flex-1 relative">
      <Section className="page-light flex flex-col justify-between p-4">
        <div>
          <div className="text-center mb-6">
            <h1 className="text-3xl font-light mb-4 tracking-[0.15em] font-serif text-amber-800">
              INTERPRETING HOROSCOPES
            </h1>
            <div className="w-24 h-px bg-amber-600 mx-auto mb-6"></div>
            <p className="text-lg italic text-amber-700 font-light mb-6">
              "Reading the Cosmic Messages in Your Birth Chart"
            </p>
          </div>

          <div className="space-y-6 text-sm leading-relaxed">
            <div>
              <h2 className="text-lg font-medium mb-3 text-amber-700">Understanding Your Birth Chart</h2>
              <p className="mb-3 text-xs">Your horoscope is a cosmic snapshot of the exact moment you were born, revealing your soul's blueprint and life purpose.</p>
              <div className="bg-white/60 p-3 rounded">
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div>
                    <strong>Birth Date:</strong> Determines Sun sign and major planetary positions
                  </div>
                  <div>
                    <strong>Birth Time:</strong> Essential for accurate house cusps and Rising sign
                  </div>
                  <div>
                    <strong>Birth Location:</strong> Affects house positions and planetary aspects
                  </div>
                  <div>
                    <strong>Cosmic Timing:</strong> Universal energies at your birth moment
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-medium mb-3 text-amber-700">The Big Three: Core Personality</h2>
              <div className="space-y-3 text-xs">
                <div className="bg-orange-50 p-3 rounded">
                  <strong className="text-orange-700">Sun Sign (Your Essence):</strong> Core identity, ego, life purpose, and the hero's journey of your soul.
                </div>
                <div className="bg-amber-50 p-3 rounded">
                  <strong className="text-amber-700">Moon Sign (Your Soul):</strong> Emotional nature, instincts, subconscious patterns, and inner needs.
                </div>
                <div className="bg-yellow-50 p-3 rounded">
                  <strong className="text-yellow-700">Rising Sign (Your Mask):</strong> How others see you, first impressions, and your approach to life.
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-medium mb-3 text-amber-700">Reading Planetary Placements</h2>
              <div className="grid grid-cols-2 gap-4 text-xs">
                <div>
                  <h3 className="font-medium mb-2 text-orange-600">Personal Planets</h3>
                  <ul className="space-y-1">
                    <li>• <strong>Mercury:</strong> Communication & thinking</li>
                    <li>• <strong>Venus:</strong> Love & values</li>
                    <li>• <strong>Mars:</strong> Action & desire</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium mb-2 text-amber-600">Outer Planets</h3>
                  <ul className="space-y-1">
                    <li>• <strong>Jupiter:</strong> Growth & expansion</li>
                    <li>• <strong>Saturn:</strong> Lessons & discipline</li>
                    <li>• <strong>Uranus/Neptune/Pluto:</strong> Generational themes</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-medium mb-3 text-amber-700">House Meanings at a Glance</h2>
              <div className="grid grid-cols-3 gap-2 text-xs">
                <div className="bg-red-100 p-2 rounded text-center">
                  <strong>1st-4th:</strong> Self & Foundation
                </div>
                <div className="bg-green-100 p-2 rounded text-center">
                  <strong>5th-8th:</strong> Creation & Transformation
                </div>
                <div className="bg-blue-100 p-2 rounded text-center">
                  <strong>9th-12th:</strong> Expansion & Transcendence
                </div>
              </div>
              <div className="grid grid-cols-4 gap-1 text-xs mt-3">
                <div className="bg-white/60 p-2 rounded text-center">1st: Identity</div>
                <div className="bg-white/60 p-2 rounded text-center">2nd: Values</div>
                <div className="bg-white/60 p-2 rounded text-center">3rd: Communication</div>
                <div className="bg-white/60 p-2 rounded text-center">4th: Home</div>
                <div className="bg-white/60 p-2 rounded text-center">5th: Creativity</div>
                <div className="bg-white/60 p-2 rounded text-center">6th: Service</div>
                <div className="bg-white/60 p-2 rounded text-center">7th: Partnership</div>
                <div className="bg-white/60 p-2 rounded text-center">8th: Transformation</div>
                <div className="bg-white/60 p-2 rounded text-center">9th: Wisdom</div>
                <div className="bg-white/60 p-2 rounded text-center">10th: Career</div>
                <div className="bg-white/60 p-2 rounded text-center">11th: Community</div>
                <div className="bg-white/60 p-2 rounded text-center">12th: Spirituality</div>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-medium mb-3 text-amber-700">Aspect Interpretation</h2>
              <div className="space-y-2 text-xs">
                <div className="bg-gradient-to-r from-green-100 to-blue-100 p-3 rounded">
                  <strong>Harmonious (Trine, Sextile):</strong> Natural talents, easy energy flow, gifts to develop
                </div>
                <div className="bg-gradient-to-r from-orange-100 to-red-100 p-3 rounded">
                  <strong>Challenging (Square, Opposition):</strong> Growth opportunities, dynamic tension, lessons to master
                </div>
                <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-3 rounded">
                  <strong>Conjunction:</strong> Intensified energy, planets working as one, major life themes
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-amber-100 to-orange-100 p-4 rounded-lg">
              <h3 className="font-medium mb-2 text-amber-700">Reading Your Chart</h3>
              <div className="text-xs space-y-1">
                <p>1. Start with your Big Three (Sun, Moon, Rising)</p>
                <p>2. Look at personal planets in signs and houses</p>
                <p>3. Notice major aspects and patterns</p>
                <p>4. Consider the overall chart balance and emphasis</p>
                <p>5. Trust your intuition as you explore the cosmic story</p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}