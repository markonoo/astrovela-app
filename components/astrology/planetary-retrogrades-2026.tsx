import React from "react"
import { Section } from "./base/Section"

interface PlanetaryRetrogrades2026Props {
  pageNumber: number
}

export function PlanetaryRetrogrades2026({ pageNumber }: PlanetaryRetrogrades2026Props) {
  return (
    <div className="h-full bg-gradient-to-br from-purple-50 to-pink-100 flex flex-col flex-1 relative">
      <Section className="page-light flex flex-col justify-between p-4">
        <div>
          <div className="text-center mb-4">
            <h1 className="text-3xl font-light mb-3 tracking-[0.15em] font-serif text-purple-800">
              2026 PLANETARY RETROGRADES
            </h1>
            <div className="w-24 h-px bg-purple-600 mx-auto mb-4"></div>
            <p className="text-lg italic text-purple-600 font-light mb-4">
              "Cosmic Pause Points for Reflection & Realignment"
            </p>
          </div>

          <div className="space-y-4 text-sm leading-relaxed">
            <div className="bg-white/60 p-4 rounded-lg border border-purple-200">
              <h2 className="text-lg font-medium mb-3 text-purple-700">Mercury Retrogrades 2026</h2>
              <div className="grid grid-cols-3 gap-3 text-xs">
                <div className="bg-blue-100 p-3 rounded">
                  <strong className="text-blue-700">April 1 - April 25</strong><br/>
                  Aries/Pisces<br/>
                  Leadership & spiritual balance
                </div>
                <div className="bg-green-100 p-3 rounded">
                  <strong className="text-green-700">August 5 - August 28</strong><br/>
                  Virgo/Leo<br/>
                  Service & creative expression
                </div>
                <div className="bg-orange-100 p-3 rounded">
                  <strong className="text-orange-700">November 26 - December 15</strong><br/>
                  Sagittarius<br/>
                  Higher learning & philosophy
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="bg-blue-50 p-3 rounded border border-blue-200">
                <strong className="text-blue-700">Jupiter Retrograde</strong><br/>
                November 4 - March 11, 2027<br/>
                Cancer: Family & emotional wisdom
              </div>
              <div className="bg-indigo-50 p-3 rounded border border-indigo-200">
                <strong className="text-indigo-700">Saturn Retrograde</strong><br/>
                July 13 - November 28<br/>
                Pisces: Spiritual restructuring continues
              </div>
              <div className="bg-purple-50 p-3 rounded border border-purple-200">
                <strong className="text-purple-700">Uranus Retrograde</strong><br/>
                September 14 - February 13, 2027<br/>
                Taurus: Material innovation review
              </div>
              <div className="bg-pink-50 p-3 rounded border border-pink-200">
                <strong className="text-pink-700">Neptune Retrograde</strong><br/>
                July 17 - December 23<br/>
                Pisces: Deep spiritual insights
              </div>
              <div className="bg-red-50 p-3 rounded border border-red-200">
                <strong className="text-red-700">Pluto Retrograde</strong><br/>
                May 18 - October 27<br/>
                Aquarius: Social transformation deepens
              </div>
              <div className="bg-green-50 p-3 rounded border border-green-200">
                <strong className="text-green-700">Chiron Retrograde</strong><br/>
                August 8 - January 10, 2027<br/>
                Aries: Leadership wound healing
              </div>
            </div>

            <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-4 rounded-lg border border-yellow-200">
              <h3 className="font-medium mb-2 text-yellow-700">Special Note: No Venus or Mars Retrogrades in 2026</h3>
              <p className="text-xs">
                2026 is unique as it features no Venus or Mars retrograde periods, making it an excellent year for 
                relationships, creative projects, and taking decisive action. The absence of these personal planet 
                retrogrades suggests smoother progress in love and ambition.
              </p>
            </div>

            <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-4 rounded-lg border border-purple-300">
              <h3 className="font-medium mb-2 text-purple-700">2026 Retrograde Themes</h3>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div>
                  <strong>Spring:</strong> Leadership reflection, spiritual grounding
                </div>
                <div>
                  <strong>Summer:</strong> Service refinement, creative review
                </div>
                <div>
                  <strong>Fall:</strong> Social transformation, wisdom integration
                </div>
                <div>
                  <strong>Winter:</strong> Philosophical expansion, future visioning
                </div>
              </div>
            </div>

            <div className="bg-white/60 p-4 rounded border border-pink-200">
              <h3 className="font-medium mb-2 text-pink-700">2026 Retrograde Opportunities</h3>
              <div className="text-xs space-y-2">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <strong>Mercury Rx:</strong> Communication refinement, technology updates
                  </div>
                  <div>
                    <strong>Jupiter Rx:</strong> Belief system evolution, wisdom integration
                  </div>
                  <div>
                    <strong>Saturn Rx:</strong> Spiritual discipline, emotional mastery
                  </div>
                  <div>
                    <strong>Outer Planet Rx:</strong> Deep transformation, karmic healing
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-pink-100 to-red-100 p-3 rounded border border-pink-300">
              <h4 className="font-medium mb-2 text-pink-700 text-sm">2026 Retrograde Mantra</h4>
              <p className="text-xs italic text-center">
                "In the cosmic pause of retrograde motion, I find clarity, wisdom, and the perfect timing 
                for my soul's evolution. I trust the universe's rhythm and my inner guidance."
              </p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}