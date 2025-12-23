import React from "react"
import { Section } from "./base/Section"

interface NeptuneRetrogradePageProps {
  pageNumber: number
}

export function NeptuneRetrogradePage({ pageNumber }: NeptuneRetrogradePageProps) {
  return (
    <div className="h-full bg-gradient-to-br from-indigo-50 to-purple-100 flex flex-col flex-1 relative">
      <Section className="page-light flex flex-col justify-between p-4">
        <div>
          <div className="text-center mb-6">
            <h1 className="text-3xl font-light mb-4 tracking-[0.15em] font-serif text-indigo-800">
              NEPTUNE RETROGRADE
            </h1>
            <div className="w-24 h-px bg-indigo-600 mx-auto mb-6"></div>
            <p className="text-lg italic text-indigo-700 font-light mb-6">
              "The Mystic Planet's Journey to Inner Truth"
            </p>
          </div>

          <div className="space-y-6 text-sm leading-relaxed">
            <div>
              <h2 className="text-lg font-medium mb-3 text-indigo-700">Understanding Neptune Retrograde</h2>
              <p className="mb-3 text-xs">Neptune retrogrades for approximately 5-6 months annually, turning our spiritual and intuitive focus inward for deeper understanding.</p>
              <div className="bg-white/60 p-3 rounded">
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div>
                    <strong>Duration:</strong> 5-6 months yearly
                  </div>
                  <div>
                    <strong>Energy:</strong> Inward spiritual journey
                  </div>
                  <div>
                    <strong>Focus:</strong> Dissolving illusions, seeking truth
                  </div>
                  <div>
                    <strong>Themes:</strong> Intuition, dreams, spirituality
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-medium mb-3 text-indigo-700">Key Effects During Neptune Retrograde</h2>
              <div className="space-y-3 text-xs">
                <div className="bg-indigo-50 p-3 rounded">
                  <strong>Spiritual Awakening:</strong> Deeper connection to intuition, enhanced psychic abilities, and clearer spiritual vision.
                </div>
                <div className="bg-purple-50 p-3 rounded">
                  <strong>Dissolving Illusions:</strong> Seeing through deceptions, fantasy relationships, and unrealistic expectations become clear.
                </div>
                <div className="bg-white/60 p-3 rounded">
                  <strong>Creative Inspiration:</strong> Enhanced artistic vision, deeper access to subconscious creativity and imagination.
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-medium mb-3 text-indigo-700">What to Expect</h2>
              <div className="grid grid-cols-2 gap-4 text-xs">
                <div>
                  <h3 className="font-medium mb-2 text-purple-600">Positive Manifestations</h3>
                  <ul className="space-y-1">
                    <li>• Heightened intuition and psychic gifts</li>
                    <li>• Spiritual clarity and awakening</li>
                    <li>• Creative breakthroughs</li>
                    <li>• Compassion and empathy expansion</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium mb-2 text-indigo-600">Challenges</h3>
                  <ul className="space-y-1">
                    <li>• Confusion and mental fog</li>
                    <li>• Disillusionment in relationships</li>
                    <li>• Escapism tendencies</li>
                    <li>• Boundary dissolution issues</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-medium mb-3 text-indigo-700">Neptune Retrograde by Element</h2>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="bg-red-50 p-3 rounded">
                  <strong>Fire Signs:</strong> Spiritual passion and inspired action
                </div>
                <div className="bg-green-50 p-3 rounded">
                  <strong>Earth Signs:</strong> Grounding spiritual insights practically
                </div>
                <div className="bg-blue-50 p-3 rounded">
                  <strong>Air Signs:</strong> Mental clarity through meditation
                </div>
                <div className="bg-purple-50 p-3 rounded">
                  <strong>Water Signs:</strong> Deep emotional and psychic awakening
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-medium mb-3 text-indigo-700">Areas Most Affected</h2>
              <div className="space-y-2 text-xs">
                <div className="bg-gradient-to-r from-indigo-100 to-purple-100 p-3 rounded">
                  <strong>Dreams & Intuition:</strong> Enhanced dream recall, prophetic dreams, stronger intuitive guidance
                </div>
                <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-3 rounded">
                  <strong>Relationships:</strong> Seeing partners more clearly, release of fantasy projections
                </div>
                <div className="bg-gradient-to-r from-blue-100 to-indigo-100 p-3 rounded">
                  <strong>Creativity:</strong> Access to deeper artistic inspiration and spiritual themes
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}