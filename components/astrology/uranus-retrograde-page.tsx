import React from "react"
import { Section } from "./base/Section"

interface UranusRetrogradePageProps {
  pageNumber: number
}

export function UranusRetrogradePage({ pageNumber }: UranusRetrogradePageProps) {
  return (
    <div className="h-full bg-gradient-to-br from-cyan-50 to-blue-100 flex flex-col flex-1 relative">
      <Section className="page-light flex flex-col justify-between p-4">
        <div>
          <div className="text-center mb-6">
            <h1 className="text-3xl font-light mb-4 tracking-[0.15em] font-serif text-cyan-800">
              URANUS RETROGRADE
            </h1>
            <div className="w-24 h-px bg-cyan-600 mx-auto mb-6"></div>
            <p className="text-lg italic text-cyan-700 font-light mb-6">
              "The Revolutionary Planet's Inward Journey"
            </p>
          </div>

          <div className="space-y-6 text-sm leading-relaxed">
            <div>
              <h2 className="text-lg font-medium mb-3 text-cyan-700">Understanding Uranus Retrograde</h2>
              <p className="mb-3 text-xs">Uranus goes retrograde for approximately 5 months each year, affecting our relationship with innovation, freedom, and sudden change.</p>
              <div className="bg-white/60 p-3 rounded">
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div>
                    <strong>Frequency:</strong> Annual, 5 months duration
                  </div>
                  <div>
                    <strong>Energy:</strong> Inward revolution and awakening
                  </div>
                  <div>
                    <strong>Focus:</strong> Internal transformation and authenticity
                  </div>
                  <div>
                    <strong>Themes:</strong> Breaking free from limitations
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-medium mb-3 text-cyan-700">Key Effects During Uranus Retrograde</h2>
              <div className="space-y-3 text-xs">
                <div className="bg-cyan-50 p-3 rounded">
                  <strong>Personal Revolution:</strong> Internal awakening to authentic self, breaking free from societal expectations and limiting beliefs.
                </div>
                <div className="bg-blue-50 p-3 rounded">
                  <strong>Technology & Innovation:</strong> Reviewing past innovations, debugging systems, refining technological approaches.
                </div>
                <div className="bg-white/60 p-3 rounded">
                  <strong>Relationships:</strong> Reassessing friendships and group dynamics, seeking more authentic connections.
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-medium mb-3 text-cyan-700">What to Expect</h2>
              <div className="grid grid-cols-2 gap-4 text-xs">
                <div>
                  <h3 className="font-medium mb-2 text-blue-600">Positive Manifestations</h3>
                  <ul className="space-y-1">
                    <li>• Inner breakthroughs and realizations</li>
                    <li>• Liberation from past patterns</li>
                    <li>• Authentic self-expression</li>
                    <li>• Innovative problem-solving</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium mb-2 text-cyan-600">Challenges</h3>
                  <ul className="space-y-1">
                    <li>• Restlessness and impatience</li>
                    <li>• Technology glitches</li>
                    <li>• Sudden disruptions</li>
                    <li>• Rebellion against authority</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-medium mb-3 text-cyan-700">By Zodiac Sign</h2>
              <div className="grid grid-cols-3 gap-2 text-xs">
                <div className="bg-red-50 p-2 rounded text-center">
                  <strong>Fire Signs:</strong> Revolutionary leadership
                </div>
                <div className="bg-green-50 p-2 rounded text-center">
                  <strong>Earth Signs:</strong> Practical innovation
                </div>
                <div className="bg-blue-50 p-2 rounded text-center">
                  <strong>Air Signs:</strong> Mental breakthroughs
                </div>
                <div className="bg-purple-50 p-2 rounded text-center" style={{gridColumn: 'span 3'}}>
                  <strong>Water Signs:</strong> Emotional liberation and intuitive insights
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}