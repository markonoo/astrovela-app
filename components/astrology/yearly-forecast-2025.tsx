import React from "react"
import { Section } from "./base/Section"

interface YearlyForecast2025Props {
  pageNumber: number
}

export function YearlyForecast2025({ pageNumber }: YearlyForecast2025Props) {
  return (
    <div className="h-full bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white flex flex-col flex-1 relative">
      {/* Cosmic Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-2 h-2 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-1 h-1 bg-blue-300 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-20 w-1.5 h-1.5 bg-purple-300 rounded-full animate-pulse delay-500"></div>
        <div className="absolute top-40 right-10 w-1 h-1 bg-pink-300 rounded-full animate-pulse delay-1500"></div>
      </div>

      <Section className="page-dark relative z-10">
        <div className="text-center mb-8">
          <div className="mb-6">
            <div className="text-xs text-purple-300 mb-2 tracking-widest">ASTROLOGY FORECAST</div>
            <h1 className="text-2xl md:text-3xl font-light mb-4 tracking-wide">
              2025 YEARLY FORECAST
            </h1>
            <div className="text-sm text-purple-200 mb-6">
              A Year of Transformation & Cosmic Awakening
            </div>
          </div>

          {/* Main Forecast Content */}
          <div className="max-w-4xl mx-auto space-y-8 text-left">
            {/* Introduction */}
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-purple-500/20">
              <h2 className="text-lg font-medium mb-4 text-center text-purple-200">
                The Grand Awakening of 2025
              </h2>
              <p className="text-sm leading-relaxed text-gray-200 mb-4">
                As we step into 2025, the cosmos presents us with unprecedented opportunities for growth,
                transformation, and spiritual awakening. This year carries the energy of profound change,
                urging us to embrace our authentic selves and align with our soul's highest purpose.
              </p>
              <p className="text-sm leading-relaxed text-gray-200">
                The planetary alignments suggest a year where intuition becomes our greatest guide,
                and courage becomes our most valuable companion. It's time to release old patterns
                and step into the fullness of who we are meant to be.
              </p>
            </div>

            {/* Key Themes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-900/50 to-cyan-900/50 rounded-lg p-6 border border-blue-500/30">
                <h3 className="text-lg font-medium mb-3 text-blue-200">Spiritual Awakening</h3>
                <p className="text-sm text-gray-200">
                  Neptune's influence brings heightened intuition and spiritual insights.
                  Dreams become more vivid, synchronicities more frequent.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 rounded-lg p-6 border border-purple-500/30">
                <h3 className="text-lg font-medium mb-3 text-purple-200">Personal Transformation</h3>
                <p className="text-sm text-gray-200">
                  Pluto's powerful energy supports deep inner work and profound personal
                  changes. What emerges is more authentic and empowered.
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-900/50 to-emerald-900/50 rounded-lg p-6 border border-green-500/30">
                <h3 className="text-lg font-medium mb-3 text-green-200">Heart-Centered Living</h3>
                <p className="text-sm text-gray-200">
                  Venus's benevolent presence encourages us to lead with love,
                  compassion, and authentic connection with others.
                </p>
              </div>

              <div className="bg-gradient-to-br from-orange-900/50 to-red-900/50 rounded-lg p-6 border border-orange-500/30">
                <h3 className="text-lg font-medium mb-3 text-orange-200">Creative Expression</h3>
                <p className="text-sm text-gray-200">
                  Jupiter expands our creative potential, encouraging us to express
                  our unique gifts and share our authentic voice with the world.
                </p>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center mt-8">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg p-6">
                <h3 className="text-lg font-medium mb-2">Your 2025 Journey Awaits</h3>
                <p className="text-sm text-purple-100">
                  Explore the detailed forecasts for your specific zodiac sign to understand
                  how these cosmic energies will manifest in your personal life.
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