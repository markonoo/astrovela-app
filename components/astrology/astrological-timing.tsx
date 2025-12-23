import React from "react"
import { Section } from "./base/Section"

interface AstrologicalTimingProps {
  pageNumber: number
}

export function AstrologicalTiming({ pageNumber }: AstrologicalTimingProps) {
  return (
    <div className="h-full bg-gradient-to-br from-indigo-50 to-purple-50">
      <Section className="page-light max-w-4xl overflow-hidden">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-light mb-6 tracking-[0.15em] font-serif text-indigo-800">
            ASTROLOGICAL TIMING
          </h1>
          <div className="text-sm text-indigo-600 mb-8">
            Harnessing cosmic rhythms for optimal life decisions
          </div>
        </div>

        <div className="space-y-8 text-indigo-900">
          <div className="bg-white/70 backdrop-blur-sm rounded-lg p-6 shadow-sm border border-indigo-200">
            <h2 className="text-xl font-medium mb-4 text-indigo-800">The Art of Cosmic Timing</h2>
            <p className="text-sm leading-relaxed">
              Astrological timing, also known as electional astrology, is the practice of choosing optimal 
              moments for important activities based on planetary positions and cosmic cycles. By aligning 
              our actions with celestial rhythms, we can enhance the likelihood of success and positive outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/70 backdrop-blur-sm rounded-lg p-6 shadow-sm border border-indigo-200">
              <h3 className="text-lg font-medium mb-3 text-indigo-800">Lunar Cycles</h3>
              <p className="text-sm leading-relaxed">
                New Moon: Ideal for new beginnings, setting intentions, and planting seeds.<br/>
                Waxing Moon: Growth, building, and expansion of projects.<br/>
                Full Moon: Culmination, manifestation, and releasing what no longer serves.<br/>
                Waning Moon: Reflection, release, and clearing away obstacles.
              </p>
            </div>

            <div className="bg-white/70 backdrop-blur-sm rounded-lg p-6 shadow-sm border border-indigo-200">
              <h3 className="text-lg font-medium mb-3 text-indigo-800">Planetary Hours</h3>
              <p className="text-sm leading-relaxed">
                Each hour of the day is ruled by a different planet, creating specific energetic qualities:
                Sun hours for leadership, Moon for intuition, Mercury for communication, Venus for love, 
                Mars for action, Jupiter for expansion, and Saturn for structure and discipline.
              </p>
            </div>

            <div className="bg-white/70 backdrop-blur-sm rounded-lg p-6 shadow-sm border border-indigo-200">
              <h3 className="text-lg font-medium mb-3 text-indigo-800">Mercury Retrograde</h3>
              <p className="text-sm leading-relaxed">
                Avoid signing contracts, starting new projects, or making major purchases. 
                Instead, use this time for review, revision, and reconnecting with past opportunities. 
                Perfect for introspection and completing unfinished business.
              </p>
            </div>

            <div className="bg-white/70 backdrop-blur-sm rounded-lg p-6 shadow-sm border border-indigo-200">
              <h3 className="text-lg font-medium mb-3 text-indigo-800">Void of Course Moon</h3>
              <p className="text-sm leading-relaxed">
                When the Moon makes no major aspects before changing signs, it's "void of course." 
                Avoid making important decisions or starting new ventures during these periods. 
                Use this time for routine tasks and introspection.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-indigo-100 to-purple-100 rounded-lg p-6 border border-indigo-200">
            <h2 className="text-xl font-medium mb-4 text-indigo-800 text-center">Practical Applications</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div>
                <h4 className="font-medium text-indigo-700 mb-2">Business & Career</h4>
                <p className="text-indigo-800">Launch products during favorable Jupiter aspects, sign contracts when Mercury is direct.</p>
              </div>
              <div>
                <h4 className="font-medium text-indigo-700 mb-2">Relationships</h4>
                <p className="text-indigo-800">Plan weddings during Venus in strong aspects, avoid relationship talks during Mercury retrograde.</p>
              </div>
              <div>
                <h4 className="font-medium text-indigo-700 mb-2">Health & Wellness</h4>
                <p className="text-indigo-800">Start fitness routines during Mars-Sun aspects, begin healing work during Water sign seasons.</p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}