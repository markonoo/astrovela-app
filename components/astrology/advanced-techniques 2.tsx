import React from "react"
import { Section } from "./base/Section"

interface AdvancedTechniquesProps {
  pageNumber: number
}

export function AdvancedTechniques({ pageNumber }: AdvancedTechniquesProps) {
  return (
    <div className="h-full bg-amber-50 text-amber-900 flex flex-col flex-1 relative">
      {/* Decorative Stars */}
      <div className="absolute top-12 left-20 text-amber-400 text-xs">✦</div>
      <div className="absolute top-24 right-28 text-amber-400 text-sm">✧</div>
      <div className="absolute top-36 left-36 text-amber-400 text-xs">✦</div>
      <div className="absolute top-20 right-20 text-amber-400 text-xs">✧</div>
      <div className="absolute bottom-36 left-24 text-amber-400 text-sm">✦</div>
      <div className="absolute bottom-24 right-36 text-amber-400 text-xs">✧</div>
      <div className="absolute top-44 right-44 text-amber-400 text-xs">✦</div>
      <div className="absolute bottom-44 left-44 text-amber-400 text-sm">✧</div>

      <Section className="page-light relative">
        <div className="text-center mb-8">
          <div className="text-xs text-amber-700 mb-2 tracking-widest">MASTER TECHNIQUES</div>
          <h1 className="text-2xl md:text-3xl font-light mb-4 tracking-wide">
            ADVANCED ASTROLOGY TECHNIQUES
          </h1>
          <div className="text-sm text-amber-700 mb-8">
            Deepening Your Astrological Understanding
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Main Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10 flex-1">
            {/* Lunar Nodes */}
            <div className="text-center">
              <div className="bg-white/60 backdrop-blur-sm rounded-lg p-6 shadow-sm h-full">
                <h3 className="text-lg font-medium mb-4 tracking-[0.15em] font-serif text-amber-800">
                  THE LUNAR NODES
                  <br />& YOUR DESTINY
                </h3>
                <p className="text-sm leading-relaxed text-amber-900">
                  The North Node and South Node of the Moon hold keys to your karmic path and soul's evolution.
                  Understanding the signs and houses they occupy can provide profound insights into your life's purpose and past-life baggage.
                </p>
              </div>
            </div>

            {/* Asteroids */}
            <div className="text-center">
              <div className="bg-white/60 backdrop-blur-sm rounded-lg p-6 shadow-sm h-full">
                <h3 className="text-lg font-medium mb-4 tracking-[0.15em] font-serif text-amber-800">
                  ASTEROIDS &
                  <br />FIXED STARS
                </h3>
                <p className="text-sm leading-relaxed text-amber-900">
                  Incorporating asteroids like Chiron (the Wounded Healer) and fixed stars into your interpretation can add
                  layers of meaning to your astrological analysis, shedding light on your healing journey and unique talents.
                </p>
              </div>
            </div>

            {/* Timing */}
            <div className="text-center">
              <div className="bg-white/60 backdrop-blur-sm rounded-lg p-6 shadow-sm h-full">
                <h3 className="text-lg font-medium mb-4 tracking-[0.15em] font-serif text-amber-800">
                  THE IMPORTANCE
                  <br />OF TIMING
                </h3>
                <p className="text-sm leading-relaxed text-amber-900">
                  Eclipses, retrogrades, and significant planetary alignments all play a crucial role in timing life events
                  and understanding their potential impact. Learning to navigate these cosmic tides can empower you to make
                  more informed decisions and harness the energy of the universe.
                </p>
              </div>
            </div>
          </div>

          {/* Additional Techniques */}
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-amber-100 to-yellow-100 rounded-lg p-6">
              <h3 className="text-lg font-medium mb-3 text-amber-800 text-center">
                Advanced Chart Interpretation
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-medium text-amber-700 mb-2">Synastry Analysis</h4>
                  <p className="text-amber-800">Compare two charts to understand relationship dynamics and compatibility.</p>
                </div>
                <div>
                  <h4 className="font-medium text-amber-700 mb-2">Solar Arc Directions</h4>
                  <p className="text-amber-800">Track how planets move through time to predict life changes and developments.</p>
                </div>
                <div>
                  <h4 className="font-medium text-amber-700 mb-2">Harmonic Charts</h4>
                  <p className="text-amber-800">Divide the chart into harmonics to reveal hidden patterns and themes.</p>
                </div>
                <div>
                  <h4 className="font-medium text-amber-700 mb-2">Midpoint Analysis</h4>
                  <p className="text-amber-800">Examine planetary midpoints for additional insights into chart dynamics.</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-white/60 backdrop-blur-sm rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-medium mb-3 text-amber-800">The Journey Continues</h3>
                <p className="text-sm leading-relaxed text-amber-900 italic">
                  Astrology is a lifelong study, where each horoscope, transit, and planetary movement presents an
                  opportunity for growth and self-discovery. The more you work with these advanced techniques,
                  the deeper your understanding becomes.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Page Number */}
      </Section>
    </div>
  )
}