import React from "react"
import { Section } from "./base/Section"

interface PlanetaryRetrogrades2027Props {
  pageNumber: number
}

export function PlanetaryRetrogrades2027({ pageNumber }: PlanetaryRetrogrades2027Props) {
  return (
    <div className="h-full bg-gradient-to-br from-indigo-50 to-purple-100 flex flex-col flex-1 relative">
      <Section className="page-light flex flex-col justify-between p-4">
        <div>
          <div className="text-center mb-4">
            <h1 className="text-3xl font-light mb-3 tracking-[0.15em] font-serif text-indigo-800">
              2027 PLANETARY RETROGRADES
            </h1>
            <div className="w-24 h-px bg-indigo-600 mx-auto mb-4"></div>
            <p className="text-lg italic text-indigo-600 font-light mb-4">
              "Emotional Depth & Inner Wisdom Cycles"
            </p>
          </div>

          <div className="space-y-4 text-sm leading-relaxed">
            <div className="bg-white/60 p-4 rounded-lg border border-indigo-200">
              <h2 className="text-lg font-medium mb-3 text-indigo-700">Mercury Retrogrades 2027</h2>
              <div className="grid grid-cols-3 gap-3 text-xs">
                <div className="bg-blue-100 p-3 rounded">
                  <strong className="text-blue-700">March 20 - April 13</strong><br/>
                  Aries: Leadership reflection
                </div>
                <div className="bg-green-100 p-3 rounded">
                  <strong className="text-green-700">July 26 - August 18</strong><br/>
                  Leo/Virgo: Creative refinement
                </div>
                <div className="bg-orange-100 p-3 rounded">
                  <strong className="text-orange-700">November 9 - November 29</strong><br/>
                  Sagittarius: Wisdom integration
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-red-100 to-pink-100 p-4 rounded-lg border border-red-200">
              <h3 className="font-medium mb-2 text-red-700">Venus Retrograde 2027</h3>
              <div className="text-xs">
                <strong>October 3 - November 14 in Scorpio/Libra:</strong> Deep relationship transformation, 
                emotional intimacy review, shadow work in partnerships, financial regeneration.
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="bg-cyan-50 p-3 rounded border border-cyan-200">
                <strong className="text-cyan-700">Jupiter Retrograde</strong><br/>
                July 28 - December 1<br/>
                Cancer: Family healing & inner nurturing
              </div>
              <div className="bg-blue-50 p-3 rounded border border-blue-200">
                <strong className="text-blue-700">Saturn Retrograde</strong><br/>
                July 26 - December 12<br/>
                Aries: Leadership discipline & courage
              </div>
              <div className="bg-purple-50 p-3 rounded border border-purple-200">
                <strong className="text-purple-700">Uranus Retrograde</strong><br/>
                September 28 - February 25, 2028<br/>
                Gemini: Communication revolution
              </div>
              <div className="bg-pink-50 p-3 rounded border border-pink-200">
                <strong className="text-pink-700">Neptune Retrograde</strong><br/>
                July 30 - January 7, 2028<br/>
                Aries: Spiritual warrior awakening
              </div>
            </div>

            <div className="bg-gradient-to-r from-indigo-100 to-purple-100 p-4 rounded-lg border border-indigo-300">
              <h3 className="font-medium mb-2 text-indigo-700">2027 Retrograde Themes</h3>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div><strong>Emotional Mastery:</strong> Processing feelings deeply</div>
                <div><strong>Family Healing:</strong> Generational pattern work</div>
                <div><strong>Leadership Review:</strong> Authentic authority development</div>
                <div><strong>Creative Refinement:</strong> Artistic skill perfection</div>
              </div>
            </div>

            <div className="bg-white/60 p-3 rounded border border-purple-200">
              <h4 className="font-medium mb-2 text-purple-700 text-sm">2027 Retrograde Wisdom</h4>
              <p className="text-xs italic text-center">
                "In retrograde's gentle pause, I discover the emotional wisdom needed 
                to lead with compassion and create lasting positive change."
              </p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}