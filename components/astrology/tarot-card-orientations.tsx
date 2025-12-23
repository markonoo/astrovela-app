import React from "react"
import { Section } from "./base/Section"

interface TarotCardOrientationsProps {
  pageNumber: number
}

export function TarotCardOrientations({ pageNumber }: TarotCardOrientationsProps) {
  return (
    <div className="h-full bg-gradient-to-br from-indigo-900 to-purple-900 text-white">
      <Section className="page-dark max-w-4xl overflow-hidden">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-light mb-6 tracking-[0.15em] font-serif text-indigo-200">
            CARD ORIENTATIONS
          </h1>
          <div className="text-sm text-indigo-300 mb-8">
            Understanding upright and reversed meanings
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 shadow-sm border border-indigo-400/30">
            <h2 className="text-2xl font-medium mb-4 text-indigo-200">The Language of Position</h2>
            <p className="text-sm leading-relaxed text-indigo-100">
              In Tarot, the orientation of a card significantly affects its meaning. Whether a card appears 
              upright or reversed (upside-down) provides important nuance to the reading and helps create 
              a more complete picture of the situation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Upright Cards */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 shadow-sm border border-indigo-400/30">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-24 bg-gradient-to-br from-indigo-600 to-purple-700 rounded-lg flex items-center justify-center text-white text-2xl font-bold">
                  ↑
                </div>
              </div>
              <h3 className="text-xl font-medium mb-4 text-indigo-200 text-center">Upright Cards</h3>
              <div className="space-y-3 text-sm text-indigo-100">
                <p><strong>Meaning:</strong> Direct, external manifestation of the card's energy</p>
                <p><strong>Energy:</strong> Active, conscious, manifested in the physical world</p>
                <p><strong>Interpretation:</strong> Traditional meanings, positive aspects</p>
                <p><strong>Action:</strong> Take direct action, embrace the energy</p>
              </div>
            </div>

            {/* Reversed Cards */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 shadow-sm border border-indigo-400/30">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-24 bg-gradient-to-br from-purple-600 to-indigo-700 rounded-lg flex items-center justify-center text-white text-2xl font-bold transform rotate-180">
                  ↑
                </div>
              </div>
              <h3 className="text-xl font-medium mb-4 text-indigo-200 text-center">Reversed Cards</h3>
              <div className="space-y-3 text-sm text-indigo-100">
                <p><strong>Meaning:</strong> Internal, blocked, or shadow aspects of the card</p>
                <p><strong>Energy:</strong> Passive, subconscious, needing attention</p>
                <p><strong>Interpretation:</strong> Hidden meanings, challenges, or delays</p>
                <p><strong>Action:</strong> Look within, address blocks, or release</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-indigo-800/50 to-purple-800/50 rounded-lg p-6 border border-indigo-400/30">
            <h2 className="text-xl font-medium mb-4 text-indigo-200 text-center">Interpreting Reversed Cards</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div>
                <h4 className="font-medium text-indigo-200 mb-2">Blocked Energy</h4>
                <p className="text-indigo-300">The card's positive qualities are being hindered or suppressed</p>
              </div>
              <div>
                <h4 className="font-medium text-indigo-200 mb-2">Internal Work</h4>
                <p className="text-indigo-300">The energy is working on a subconscious or spiritual level</p>
              </div>
              <div>
                <h4 className="font-medium text-indigo-200 mb-2">Shadow Aspects</h4>
                <p className="text-indigo-300">Hidden or negative aspects of the card's meaning are prominent</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 shadow-sm border border-indigo-400/30">
              <h3 className="text-lg font-medium mb-3 text-indigo-200">Reading Approach</h3>
              <div className="space-y-2 text-sm text-indigo-100">
                <p>• Consider both orientations as equally valid</p>
                <p>• Reversed doesn't always mean "bad"</p>
                <p>• Look for patterns in orientation across the spread</p>
                <p>• Trust your intuitive response to the card's position</p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 shadow-sm border border-indigo-400/30">
              <h3 className="text-lg font-medium mb-3 text-indigo-200">Common Interpretations</h3>
              <div className="space-y-2 text-sm text-indigo-100">
                <p>• <strong>Delays:</strong> Timing is not right for action</p>
                <p>• <strong>Inner work:</strong> Focus on personal growth</p>
                <p>• <strong>Release:</strong> Let go of something</p>
                <p>• <strong>Resistance:</strong> Fighting against natural flow</p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}