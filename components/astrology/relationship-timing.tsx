import React from "react"
import { Section } from "./base/Section"

interface RelationshipTimingProps {
  pageNumber: number
}

export function RelationshipTiming({ pageNumber }: RelationshipTimingProps) {
  const timingFactors = [
    {
      factor: "Venus Cycles",
      timing: "Venus Direct",
      description: "Best time for new relationships, proposals, and romantic gestures. Venus energy flows freely.",
      avoid: "Avoid during Venus retrograde for new commitments"
    },
    {
      factor: "New Moon in Libra",
      timing: "September/October",
      description: "Ideal for setting relationship intentions, creating harmony, and focusing on partnership goals.",
      avoid: "Don't force decisions during this introspective time"
    },
    {
      factor: "Jupiter Transits",
      timing: "Jupiter in 5th or 7th House",
      description: "Expansive periods for love and marriage. Jupiter brings growth and good fortune to relationships.",
      avoid: "Overexpansion or unrealistic expectations"
    },
    {
      factor: "Eclipse Seasons",
      timing: "2-4 weeks after Eclipse",
      description: "Eclipses bring relationship changes. Wait for dust to settle before making major decisions.",
      avoid: "Avoid major relationship decisions during eclipse season"
    }
  ]

  return (
    <div className="h-full bg-gradient-to-br from-rose-50 to-pink-50">
      <Section className="page-light max-w-4xl overflow-hidden">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-light mb-6 tracking-[0.15em] font-serif text-rose-800">
            RELATIONSHIP TIMING
          </h1>
          <div className="text-sm text-rose-600 mb-8">
            Cosmic guidance for love and partnerships
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-white/70 backdrop-blur-sm rounded-lg p-6 shadow-sm border border-rose-200">
            <h2 className="text-xl font-medium mb-4 text-rose-800">Astrological Love Timing</h2>
            <p className="text-sm leading-relaxed text-rose-900">
              The cosmos provides powerful guidance for relationship timing. By understanding planetary 
              cycles and celestial events, we can choose optimal moments for proposals, weddings, 
              important conversations, and relationship decisions.
            </p>
          </div>

          <div className="space-y-6">
            {timingFactors.map((factor, index) => (
              <div key={index} className="bg-white/70 backdrop-blur-sm rounded-lg p-6 shadow-sm border border-rose-200">
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 bg-rose-500 rounded-full mr-3"></div>
                  <h3 className="text-lg font-medium text-rose-800">{factor.factor}</h3>
                  <span className="ml-auto text-sm text-rose-600 bg-rose-100 px-3 py-1 rounded-full">
                    {factor.timing}
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-rose-900 mb-3">{factor.description}</p>
                <p className="text-xs text-rose-700 italic">⚠️ {factor.avoid}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-rose-100 to-pink-100 rounded-lg p-6 border border-rose-200">
            <h2 className="text-xl font-medium mb-4 text-rose-800 text-center">Monthly Love Calendar</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div>
                <h4 className="font-medium text-rose-700 mb-2">Spring (Aries Season)</h4>
                <p className="text-rose-800">New beginnings, passionate encounters, bold romantic gestures</p>
              </div>
              <div>
                <h4 className="font-medium text-rose-700 mb-2">Summer (Cancer Season)</h4>
                <p className="text-rose-800">Emotional depth, family meetings, creating home together</p>
              </div>
              <div>
                <h4 className="font-medium text-rose-700 mb-2">Autumn (Libra Season)</h4>
                <p className="text-rose-800">Partnerships, balance, ideal time for engagements and weddings</p>
              </div>
              <div>
                <h4 className="font-medium text-rose-700 mb-2">Winter (Capricorn Season)</h4>
                <p className="text-rose-800">Commitment, practical decisions, long-term planning</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/70 backdrop-blur-sm rounded-lg p-6 shadow-sm border border-rose-200">
              <h3 className="text-lg font-medium mb-3 text-rose-800">Best Times for Love</h3>
              <div className="space-y-2 text-sm text-rose-900">
                <p>• Venus in harmonious signs (Taurus, Libra, Pisces)</p>
                <p>• New Moon in your 5th or 7th house</p>
                <p>• Jupiter trine your Venus or Descendant</p>
                <p>• Friday evenings (Venus day)</p>
                <p>• Spring and early summer months</p>
              </div>
            </div>

            <div className="bg-white/70 backdrop-blur-sm rounded-lg p-6 shadow-sm border border-rose-200">
              <h3 className="text-lg font-medium mb-3 text-rose-800">Times to Avoid</h3>
              <div className="space-y-2 text-sm text-rose-900">
                <p>• Venus retrograde periods</p>
                <p>• Mercury retrograde for communication</p>
                <p>• Mars retrograde for passion/sexuality</p>
                <p>• During eclipse seasons (2 weeks)</p>
                <p>• Void of course Moon periods</p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}