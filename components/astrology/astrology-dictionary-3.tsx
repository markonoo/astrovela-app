import React from "react"
import { Section } from "./base/Section"

interface AstrologyDictionary3Props {
  pageNumber: number
}

export function AstrologyDictionary3({ pageNumber }: AstrologyDictionary3Props) {
  return (
    <div className="h-full bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col flex-1 relative">
      <Section className="page-light flex flex-col justify-between p-4">
        <div>
          <div className="text-center mb-4">
            <h1 className="text-2xl font-light mb-3 tracking-[0.15em] font-serif text-blue-800">
              ASTROLOGY DICTIONARY Q-T
            </h1>
            <div className="w-24 h-px bg-blue-600 mx-auto mb-4"></div>
          </div>

          <div className="space-y-3 text-xs leading-relaxed">
            <div className="grid grid-cols-1 gap-2">
              <div className="bg-white/60 p-3 rounded border border-blue-200">
                <strong className="text-blue-700">Quadruplicity:</strong> The three modes of expression - Cardinal (initiating), Fixed (sustaining), and Mutable (adapting). Also called modalities.
              </div>
              
              <div className="bg-indigo-50 p-3 rounded border border-indigo-200">
                <strong className="text-indigo-700">Retrograde:</strong> Apparent backward motion of a planet from Earth's perspective. Indicates internalized or delayed expression of planetary energy.
              </div>
              
              <div className="bg-purple-50 p-3 rounded border border-purple-200">
                <strong className="text-purple-700">Ruler:</strong> The planet that governs a particular zodiac sign. Mars rules Aries, Venus rules Taurus and Libra, etc.
              </div>
              
              <div className="bg-violet-50 p-3 rounded border border-violet-200">
                <strong className="text-violet-700">Sect:</strong> Ancient concept dividing planets into day (Sun, Jupiter, Saturn) and night (Moon, Venus, Mars) groups based on chart timing.
              </div>
              
              <div className="bg-pink-50 p-3 rounded border border-pink-200">
                <strong className="text-pink-700">Sidereal Zodiac:</strong> Zodiac system based on actual star positions, accounting for precession. Differs from tropical zodiac by about 24 degrees.
              </div>
              
              <div className="bg-red-50 p-3 rounded border border-red-200">
                <strong className="text-red-700">Solar Return:</strong> Annual chart cast for the moment the Sun returns to its exact natal position, used for yearly forecasting.
              </div>
              
              <div className="bg-orange-50 p-3 rounded border border-orange-200">
                <strong className="text-orange-700">Stellium:</strong> A concentration of three or more planets in the same sign or house, creating intense focus in that life area.
              </div>
              
              <div className="bg-yellow-50 p-3 rounded border border-yellow-200">
                <strong className="text-yellow-700">Synastry:</strong> The comparison of two birth charts to analyze relationship compatibility and dynamics between individuals.
              </div>
              
              <div className="bg-green-50 p-3 rounded border border-green-200">
                <strong className="text-green-700">T-Square:</strong> An aspect pattern involving two planets in opposition with a third planet square to both, creating dynamic tension and drive.
              </div>
              
              <div className="bg-teal-50 p-3 rounded border border-teal-200">
                <strong className="text-teal-700">Transit:</strong> The movement of current planets through the zodiac and their aspects to natal chart positions. Used for timing predictions.
              </div>
              
              <div className="bg-cyan-50 p-3 rounded border border-cyan-200">
                <strong className="text-cyan-700">Triplicity:</strong> Ancient term for the four elements (Fire, Earth, Air, Water) and their associated planetary rulers by day and night.
              </div>
              
              <div className="bg-blue-50 p-3 rounded border border-blue-200">
                <strong className="text-blue-700">Tropical Zodiac:</strong> Zodiac system based on the seasons, starting with Aries at the spring equinox. Most commonly used in Western astrology.
              </div>
              
              <div className="bg-indigo-50 p-3 rounded border border-indigo-200">
                <strong className="text-indigo-700">Void of Course:</strong> Moon's state when it makes no more major aspects before changing signs. Traditionally considered unfavorable for new beginnings.
              </div>
              
              <div className="bg-purple-50 p-3 rounded border border-purple-200">
                <strong className="text-purple-700">Yod:</strong> Aspect pattern involving two planets in sextile with both quincunx to a third planet, creating a "finger of God" pointing to destiny.
              </div>
              
              <div className="bg-violet-50 p-3 rounded border border-violet-200">
                <strong className="text-violet-700">Zenith:</strong> The highest point directly overhead in the celestial sphere. In astrology, often refers to the Midheaven or 10th house cusp.
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-100 to-indigo-100 p-3 rounded border border-blue-300">
              <h3 className="font-medium mb-2 text-blue-700 text-sm">Essential Dignities Summary</h3>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div><strong>Domicile:</strong> Planet in its own sign</div>
                <div><strong>Exaltation:</strong> Planet in its exalted sign</div>
                <div><strong>Detriment:</strong> Planet opposite its rulership</div>
                <div><strong>Fall:</strong> Planet opposite its exaltation</div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-indigo-100 to-purple-100 p-3 rounded border border-indigo-300">
              <h3 className="font-medium mb-2 text-indigo-700 text-sm">House Systems</h3>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div><strong>Placidus:</strong> Most popular system</div>
                <div><strong>Whole Sign:</strong> Ancient system</div>
                <div><strong>Equal House:</strong> 30° divisions from ASC</div>
                <div><strong>Koch:</strong> Birth-place focused</div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}