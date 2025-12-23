import React from "react"
import { Section } from "./base/Section"

interface AstrologicalEventsLoveProps {
  pageNumber: number
}

export function AstrologicalEventsLove({ pageNumber }: AstrologicalEventsLoveProps) {
  return (
    <div className="h-full bg-gradient-to-br from-pink-50 to-rose-100 flex flex-col flex-1 relative">
      <Section className="page-light flex flex-col justify-between p-4">
        <div>
          <div className="text-center mb-6">
            <h1 className="text-3xl font-light mb-4 tracking-[0.15em] font-serif text-pink-800">
              COSMIC LOVE TIMING
            </h1>
            <div className="w-24 h-px bg-pink-600 mx-auto mb-6"></div>
          </div>

          <div className="space-y-5 text-sm leading-relaxed">
            <div>
              <h2 className="text-lg font-medium mb-3 text-pink-700">Venus Retrograde</h2>
              <div className="bg-white/60 p-3 rounded mb-3">
                <p className="text-xs mb-2">Occurs every 18 months for about 40 days. A time for reviewing past relationships and reassessing values.</p>
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div>
                    <strong>Do:</strong> Reconnect with old friends, reflect on past loves, beautify your space
                  </div>
                  <div>
                    <strong>Avoid:</strong> Starting new relationships, making major purchases, cosmetic procedures
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-medium mb-3 text-pink-700">Full Moon in Libra</h2>
              <p className="text-xs mb-3">The relationship moon illuminates partnership dynamics and brings commitment or completion to romantic situations.</p>
              <div className="bg-rose-50 p-3 rounded text-xs">
                <strong>Ritual:</strong> Write down relationship goals under the Libra Full Moon for enhanced partnership manifestation.
              </div>
            </div>

            <div>
              <h2 className="text-lg font-medium mb-3 text-pink-700">Jupiter in the 7th House</h2>
              <div className="space-y-2 text-xs">
                <p>Jupiter's 12-year cycle brings one year of expansion to partnerships when transiting your 7th house.</p>
                <div className="bg-white/60 p-3 rounded">
                  <strong>Benefits:</strong> Marriage opportunities, meeting significant others, legal partnerships, business collaborations
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-medium mb-3 text-pink-700">Mars-Venus Conjunctions</h2>
              <p className="text-xs mb-3">When the planets of desire and love meet, passionate attractions and romantic opportunities intensify.</p>
              <div className="grid grid-cols-3 gap-2 text-xs">
                <div className="bg-red-50 p-2 rounded text-center">
                  <strong>In Aries:</strong> Instant attraction
                </div>
                <div className="bg-green-50 p-2 rounded text-center">
                  <strong>In Taurus:</strong> Sensual bonds
                </div>
                <div className="bg-blue-50 p-2 rounded text-center">
                  <strong>In Gemini:</strong> Mental connection
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-medium mb-3 text-pink-700">Eclipse Seasons & Love</h2>
              <div className="space-y-2 text-xs">
                <div className="bg-white/60 p-3 rounded">
                  <strong>Solar Eclipse in 5th House:</strong> New creative projects, children, or romantic beginnings
                </div>
                <div className="bg-white/60 p-3 rounded">
                  <strong>Lunar Eclipse in 7th House:</strong> Relationship endings or major commitments
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-medium mb-3 text-pink-700">Annual Love Forecast</h2>
              <div className="grid grid-cols-4 gap-2 text-xs text-center">
                <div className="bg-pink-100 p-2 rounded">
                  <strong>Spring:</strong> New beginnings
                </div>
                <div className="bg-rose-100 p-2 rounded">
                  <strong>Summer:</strong> Passion peaks
                </div>
                <div className="bg-orange-100 p-2 rounded">
                  <strong>Autumn:</strong> Commitment time
                </div>
                <div className="bg-purple-100 p-2 rounded">
                  <strong>Winter:</strong> Reflection & renewal
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}