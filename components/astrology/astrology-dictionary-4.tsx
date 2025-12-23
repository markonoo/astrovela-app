import React from "react"
import { Section } from "./base/Section"

interface AstrologyDictionary4Props {
  pageNumber: number
}

export function AstrologyDictionary4({ pageNumber }: AstrologyDictionary4Props) {
  return (
    <div className="h-full bg-gradient-to-br from-green-50 to-teal-100 flex flex-col flex-1 relative">
      <Section className="page-light flex flex-col justify-between p-4">
        <div>
          <div className="text-center mb-4">
            <h1 className="text-2xl font-light mb-3 tracking-[0.15em] font-serif text-green-800">
              SPECIALIZED TERMS & CONCEPTS
            </h1>
            <div className="w-24 h-px bg-green-600 mx-auto mb-4"></div>
          </div>

          <div className="space-y-3 text-xs leading-relaxed">
            <div className="grid grid-cols-1 gap-2">
              <div className="bg-white/60 p-3 rounded border border-green-200">
                <strong className="text-green-700">Antiscia:</strong> Mirror points across the Cancer-Capricorn axis where planets have equal power. Used in classical astrology for hidden connections.
              </div>
              
              <div className="bg-teal-50 p-3 rounded border border-teal-200">
                <strong className="text-teal-700">Arabic Parts:</strong> Calculated points based on planetary positions. Most famous is Part of Fortune (ASC + Moon - Sun). Used for specific life themes.
              </div>
              
              <div className="bg-cyan-50 p-3 rounded border border-cyan-200">
                <strong className="text-cyan-700">Combust:</strong> When a planet is too close to the Sun (within 8 degrees), said to be "burned up" and weakened in traditional astrology.
              </div>
              
              <div className="bg-blue-50 p-3 rounded border border-blue-200">
                <strong className="text-blue-700">Composite Chart:</strong> A single chart created by finding the midpoints between two people's planets, representing the relationship itself.
              </div>
              
              <div className="bg-indigo-50 p-3 rounded border border-indigo-200">
                <strong className="text-indigo-700">Davison Chart:</strong> Relationship chart cast for the midpoint in time and space between two birth charts. Alternative to composite charts.
              </div>
              
              <div className="bg-purple-50 p-3 rounded border border-purple-200">
                <strong className="text-purple-700">Electional Astrology:</strong> Choosing the most auspicious time to begin important activities or events based on planetary positions.
              </div>
              
              <div className="bg-violet-50 p-3 rounded border border-violet-200">
                <strong className="text-violet-700">Harmonics:</strong> Mathematical divisions of the chart (4th, 5th, 7th harmonic, etc.) revealing hidden patterns and talents.
              </div>
              
              <div className="bg-pink-50 p-3 rounded border border-pink-200">
                <strong className="text-pink-700">Heliacal Rising:</strong> When a star or planet first becomes visible before dawn after a period of invisibility. Marks important astrological cycles.
              </div>
              
              <div className="bg-red-50 p-3 rounded border border-red-200">
                <strong className="text-red-700">Ingress:</strong> The moment a planet enters a new sign or house. Particularly significant for outer planets and luminaries.
              </div>
              
              <div className="bg-orange-50 p-3 rounded border border-orange-200">
                <strong className="text-orange-700">Planetary Hours:</strong> Ancient system dividing each day into planetary periods, used for timing magical and mundane activities.
              </div>
              
              <div className="bg-yellow-50 p-3 rounded border border-yellow-200">
                <strong className="text-yellow-700">Progressed Chart:</strong> Technique where each day after birth represents one year of life, used for long-term personality development.
              </div>
              
              <div className="bg-green-50 p-3 rounded border border-green-200">
                <strong className="text-green-700">Rectification:</strong> Process of correcting an uncertain birth time by working backward from known life events to find accurate chart.
              </div>
              
              <div className="bg-teal-50 p-3 rounded border border-teal-200">
                <strong className="text-teal-700">Saros Cycle:</strong> 18-year eclipse cycle used for understanding long-term eclipse patterns and their astrological significance.
              </div>
              
              <div className="bg-cyan-50 p-3 rounded border border-cyan-200">
                <strong className="text-cyan-700">Solar Arc:</strong> Predictive technique moving all chart points by the Sun's degree of progression, often used for timing major life events.
              </div>
              
              <div className="bg-blue-50 p-3 rounded border border-blue-200">
                <strong className="text-blue-700">Vertex:</strong> Sensitive point in the western hemisphere of the chart, often called the "point of fate" in relationship astrology.
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-100 to-teal-100 p-3 rounded border border-green-300">
              <h3 className="font-medium mb-2 text-green-700 text-sm">Classical Aspects (Ptolemaic)</h3>
              <div className="grid grid-cols-3 gap-2 text-xs">
                <div><strong>0°:</strong> Conjunction</div>
                <div><strong>60°:</strong> Sextile</div>
                <div><strong>90°:</strong> Square</div>
                <div><strong>120°:</strong> Trine</div>
                <div><strong>180°:</strong> Opposition</div>
                <div><strong>Modern:</strong> +Quincunx (150°)</div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-teal-100 to-cyan-100 p-3 rounded border border-teal-300">
              <h3 className="font-medium mb-2 text-teal-700 text-sm">Advanced Techniques</h3>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div><strong>Horary:</strong> Question charts</div>
                <div><strong>Electional:</strong> Timing selection</div>
                <div><strong>Mundane:</strong> World events</div>
                <div><strong>Medical:</strong> Health astrology</div>
                <div><strong>Financial:</strong> Market timing</div>
                <div><strong>Locational:</strong> Astrocartography</div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}