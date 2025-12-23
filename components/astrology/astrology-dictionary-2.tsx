import React from "react"
import { Section } from "./base/Section"

interface AstrologyDictionary2Props {
  pageNumber: number
}

export function AstrologyDictionary2({ pageNumber }: AstrologyDictionary2Props) {
  return (
    <div className="h-full bg-gradient-to-br from-purple-50 to-pink-100 flex flex-col flex-1 relative">
      <Section className="page-light flex flex-col justify-between p-4">
        <div>
          <div className="text-center mb-4">
            <h1 className="text-2xl font-light mb-3 tracking-[0.15em] font-serif text-purple-800">
              ASTROLOGY DICTIONARY F-M
          </h1>
            <div className="w-24 h-px bg-purple-600 mx-auto mb-4"></div>
          </div>

          <div className="space-y-3 text-xs leading-relaxed">
            <div className="grid grid-cols-1 gap-2">
              <div className="bg-white/60 p-3 rounded border border-purple-200">
                <strong className="text-purple-700">Fixed Signs:</strong> Taurus, Leo, Scorpio, and Aquarius. These signs occur in the middle of seasons and represent stability, determination, and sustained effort.
              </div>
              
              <div className="bg-pink-50 p-3 rounded border border-pink-200">
                <strong className="text-pink-700">Grand Trine:</strong> Three planets forming perfect 120-degree angles, creating a triangle of harmonious energy. Indicates natural talents and ease.
              </div>
              
              <div className="bg-red-50 p-3 rounded border border-red-200">
                <strong className="text-red-700">Grand Cross:</strong> Four planets forming 90-degree angles, creating a cross pattern. Indicates significant challenges but great potential for growth.
              </div>
              
              <div className="bg-orange-50 p-3 rounded border border-orange-200">
                <strong className="text-orange-700">Horary Astrology:</strong> The practice of answering specific questions by casting a chart for the moment the question is asked.
              </div>
              
              <div className="bg-yellow-50 p-3 rounded border border-yellow-200">
                <strong className="text-yellow-700">Intercepted Sign:</strong> A zodiac sign that is completely contained within a house, not appearing on any house cusp. Indicates hidden or delayed expression.
              </div>
              
              <div className="bg-green-50 p-3 rounded border border-green-200">
                <strong className="text-green-700">Lunar Nodes:</strong> Mathematical points where the Moon's orbit crosses the ecliptic. North Node represents karmic goals, South Node represents past-life talents.
              </div>
              
              <div className="bg-teal-50 p-3 rounded border border-teal-200">
                <strong className="text-teal-700">Midheaven (MC):</strong> The highest point in the chart, representing career, reputation, and life direction. Usually the cusp of the 10th house.
              </div>
              
              <div className="bg-cyan-50 p-3 rounded border border-cyan-200">
                <strong className="text-cyan-700">Midpoint:</strong> The exact center point between two planets or points in a chart. Used in advanced interpretation techniques.
              </div>
              
              <div className="bg-blue-50 p-3 rounded border border-blue-200">
                <strong className="text-blue-700">Mundane Astrology:</strong> The application of astrology to world events, countries, and collective human experiences.
              </div>
              
              <div className="bg-indigo-50 p-3 rounded border border-indigo-200">
                <strong className="text-indigo-700">Mutable Signs:</strong> Gemini, Virgo, Sagittarius, and Pisces. These signs end the seasons and represent adaptability, flexibility, and transition.
              </div>
              
              <div className="bg-violet-50 p-3 rounded border border-violet-200">
                <strong className="text-violet-700">Natal Chart:</strong> The astrological chart cast for the exact moment and location of birth, showing planetary positions and house placements.
              </div>
              
              <div className="bg-purple-50 p-3 rounded border border-purple-200">
                <strong className="text-purple-700">Orb:</strong> The allowable degree range within which an aspect is considered valid. Varies by aspect type and personal preference (typically 6-10 degrees).
              </div>
              
              <div className="bg-pink-50 p-3 rounded border border-pink-200">
                <strong className="text-pink-700">Outer Planets:</strong> Uranus, Neptune, and Pluto. These slow-moving planets represent generational influences and transformation.
              </div>
              
              <div className="bg-red-50 p-3 rounded border border-red-200">
                <strong className="text-red-700">Peregrine:</strong> A planet with no essential dignity in its current sign, neither exalted nor in its own sign, and not in detriment or fall.
              </div>
              
              <div className="bg-orange-50 p-3 rounded border border-orange-200">
                <strong className="text-orange-700">Precession:</strong> The slow wobble of Earth's axis causing the spring equinox to shift backward through the zodiac over approximately 26,000 years.
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-3 rounded border border-purple-300">
              <h3 className="font-medium mb-2 text-purple-700 text-sm">Planetary Aspects at a Glance</h3>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div><strong>Conjunction (0°):</strong> Fusion of energies</div>
                <div><strong>Sextile (60°):</strong> Harmonious opportunity</div>
                <div><strong>Square (90°):</strong> Dynamic tension</div>
                <div><strong>Trine (120°):</strong> Flowing harmony</div>
                <div><strong>Opposition (180°):</strong> Polarity & balance</div>
                <div><strong>Quincunx (150°):</strong> Adjustment needed</div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}