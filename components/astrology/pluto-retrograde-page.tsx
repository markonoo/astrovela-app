import React from "react"
import { Section } from "./base/Section"

interface PlutoRetrogradePageProps {
  pageNumber: number
}

export function PlutoRetrogradePage({ pageNumber }: PlutoRetrogradePageProps) {
  return (
    <div className="h-full bg-gradient-to-br from-gray-900 to-black flex flex-col flex-1 relative">
      <Section className="page-dark flex flex-col justify-between p-4">
        <div>
          <div className="text-center mb-6">
            <h1 className="text-3xl font-light mb-4 tracking-[0.15em] font-serif text-red-400">
              PLUTO RETROGRADE
            </h1>
            <div className="w-24 h-px bg-red-400 mx-auto mb-6"></div>
            <p className="text-lg italic text-red-300 font-light mb-6">
              "The Lord of the Underworld's Journey to Inner Transformation"
            </p>
          </div>

          <div className="space-y-6 text-sm leading-relaxed text-gray-100">
            <div>
              <h2 className="text-lg font-medium mb-3 text-red-300">Understanding Pluto Retrograde</h2>
              <p className="mb-3 text-xs">Pluto retrogrades for approximately 5-6 months each year, intensifying themes of death, rebirth, and deep psychological transformation.</p>
              <div className="bg-white/10 p-3 rounded">
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div>
                    <strong className="text-red-300">Duration:</strong> 5-6 months annually
                  </div>
                  <div>
                    <strong className="text-red-300">Energy:</strong> Deep psychological excavation
                  </div>
                  <div>
                    <strong className="text-red-300">Focus:</strong> Shadow work and transformation
                  </div>
                  <div>
                    <strong className="text-red-300">Themes:</strong> Power, control, rebirth
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-medium mb-3 text-red-300">Key Effects During Pluto Retrograde</h2>
              <div className="space-y-3 text-xs">
                <div className="bg-red-900/30 p-3 rounded">
                  <strong className="text-red-300">Shadow Work:</strong> Unconscious patterns surface for healing, deep psychological insights emerge from the depths.
                </div>
                <div className="bg-purple-900/30 p-3 rounded">
                  <strong className="text-purple-300">Power Dynamics:</strong> Reviewing control issues, power struggles, and manipulation patterns in relationships and career.
                </div>
                <div className="bg-gray-800/60 p-3 rounded">
                  <strong className="text-gray-300">Transformation:</strong> Intense inner alchemy, death of old identity aspects, preparation for rebirth.
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-medium mb-3 text-red-300">What to Expect</h2>
              <div className="grid grid-cols-2 gap-4 text-xs">
                <div>
                  <h3 className="font-medium mb-2 text-purple-300">Transformative Opportunities</h3>
                  <ul className="space-y-1">
                    <li>• Deep psychological healing</li>
                    <li>• Release of toxic patterns</li>
                    <li>• Authentic power reclamation</li>
                    <li>• Spiritual regeneration</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium mb-2 text-red-300">Challenges</h3>
                  <ul className="space-y-1">
                    <li>• Intense emotional upheaval</li>
                    <li>• Power struggles and control issues</li>
                    <li>• Compulsive behaviors surfacing</li>
                    <li>• Resistance to change</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-medium mb-3 text-red-300">Pluto Retrograde by Zodiac Sign</h2>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="bg-red-900/20 p-3 rounded">
                  <strong className="text-red-300">Fire Signs:</strong> Transforming leadership and identity
                </div>
                <div className="bg-green-900/20 p-3 rounded">
                  <strong className="text-green-300">Earth Signs:</strong> Material and security metamorphosis
                </div>
                <div className="bg-blue-900/20 p-3 rounded">
                  <strong className="text-blue-300">Air Signs:</strong> Mental patterns and communication power
                </div>
                <div className="bg-purple-900/20 p-3 rounded">
                  <strong className="text-purple-300">Water Signs:</strong> Emotional depths and psychic transformation
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-medium mb-3 text-red-300">Areas of Deep Transformation</h2>
              <div className="space-y-2 text-xs">
                <div className="bg-gradient-to-r from-red-900/40 to-purple-900/40 p-3 rounded">
                  <strong className="text-red-300">Sexuality & Intimacy:</strong> Healing sexual trauma, exploring taboo desires, authentic intimacy
                </div>
                <div className="bg-gradient-to-r from-purple-900/40 to-indigo-900/40 p-3 rounded">
                  <strong className="text-purple-300">Finances & Resources:</strong> Power dynamics around money, shared resources, investments
                </div>
                <div className="bg-gradient-to-r from-gray-900/60 to-red-900/40 p-3 rounded">
                  <strong className="text-gray-300">Death & Rebirth:</strong> Spiritual transformation, past-life work, metaphysical studies
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}