import React from "react"
import { Section } from "./base/Section"

interface AstrologicalEventsIntroProps {
  pageNumber: number
}

export function AstrologicalEventsIntro({ pageNumber }: AstrologicalEventsIntroProps) {
  return (
    <div className="h-full bg-gradient-to-br from-purple-50 to-indigo-100 flex flex-col flex-1 relative">
      <Section className="page-light flex flex-col justify-between p-6">
        <div>
          <div className="text-center mb-6">
            <h1 className="text-4xl font-light mb-4 tracking-[0.15em] font-serif text-purple-800">
              COSMIC EVENTS & CYCLES
            </h1>
            <div className="w-32 h-px bg-purple-600 mx-auto mb-6"></div>
            <p className="text-xl italic text-purple-600 font-light mb-8">
              "When Heaven Moves, Earth Responds"
            </p>
          </div>

          <div className="space-y-6 text-sm leading-relaxed">
            <div className="bg-white/60 p-6 rounded-lg border border-purple-200">
              <h2 className="text-lg font-medium mb-4 text-purple-700">The Dance of Celestial Bodies</h2>
              <p className="mb-4">
                Throughout history, humans have observed the heavens and recognized that celestial movements
                correspond with earthly events. These cosmic rhythms—from daily planetary motions to
                once-in-a-lifetime planetary alignments—create a divine symphony that influences our lives.
              </p>
              <p>
                Understanding these astrological events empowers us to align with cosmic timing,
                making informed decisions and recognizing the greater patterns at work in our lives.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 text-xs">
              <div className="bg-blue-100 p-4 rounded-lg border border-blue-200">
                <h3 className="font-medium mb-2 text-blue-700">Lunar Cycles</h3>
                <p>New Moons for beginnings, Full Moons for culmination, and the waxing/waning phases that guide natural rhythms.</p>
              </div>
              <div className="bg-green-100 p-4 rounded-lg border border-green-200">
                <h3 className="font-medium mb-2 text-green-700">Planetary Transits</h3>
                <p>Current planetary positions affecting your natal chart, creating opportunities and challenges for growth.</p>
              </div>
              <div className="bg-red-100 p-4 rounded-lg border border-red-200">
                <h3 className="font-medium mb-2 text-red-700">Eclipses</h3>
                <p>Powerful portal moments that accelerate change, bringing fated events and major life transitions.</p>
              </div>
              <div className="bg-orange-100 p-4 rounded-lg border border-orange-200">
                <h3 className="font-medium mb-2 text-orange-700">Retrogrades</h3>
                <p>Periods of review, revision, and internal processing when planets appear to move backward.</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-100 to-indigo-100 p-6 rounded-lg border border-purple-300">
              <h3 className="font-medium mb-3 text-purple-700">Working with Cosmic Timing</h3>
              <div className="space-y-2 text-xs">
                <p><strong>Observation:</strong> Notice how planetary events correlate with your personal experiences</p>
                <p><strong>Preparation:</strong> Use advance knowledge of cosmic events to plan important activities</p>
                <p><strong>Alignment:</strong> Flow with cosmic currents rather than fighting against them</p>
                <p><strong>Integration:</strong> Reflect on how celestial cycles support your growth and evolution</p>
              </div>
            </div>

            <div className="text-center bg-white/60 p-4 rounded-lg border border-indigo-200">
              <h3 className="font-medium mb-2 text-indigo-700">The Eternal Cosmic Clock</h3>
              <p className="text-xs italic">
                "As above, so below. The movements of the planets create a cosmic clock that has been
                ticking since time immemorial, marking the moments when heaven touches earth
                and transforms the ordinary into the extraordinary."
              </p>
            </div>

            <div className="grid grid-cols-4 gap-3 text-center text-xs">
              <div className="bg-purple-50 p-3 rounded border border-purple-200">
                <div className="text-2xl mb-2">🌑</div>
                <strong>New Moon</strong><br/>
                New Beginnings
              </div>
              <div className="bg-blue-50 p-3 rounded border border-blue-200">
                <div className="text-2xl mb-2">🌕</div>
                <strong>Full Moon</strong><br/>
                Culmination
              </div>
              <div className="bg-indigo-50 p-3 rounded border border-indigo-200">
                <div className="text-2xl mb-2">🌒</div>
                <strong>Eclipse</strong><br/>
                Transformation
              </div>
              <div className="bg-violet-50 p-3 rounded border border-violet-200">
                <div className="text-2xl mb-2">☉️</div>
                <strong>Transit</strong><br/>
                Evolution
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}