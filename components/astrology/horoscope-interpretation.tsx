import React from "react"
import { Section } from "./base/Section"

interface HoroscopeInterpretationProps {
  pageNumber: number
}

export function HoroscopeInterpretation({ pageNumber }: HoroscopeInterpretationProps) {
  return (
    <div className="h-full bg-gradient-to-br from-emerald-50 to-teal-50">
      <Section className="page-light max-w-4xl overflow-hidden">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-light mb-6 tracking-[0.15em] font-serif text-emerald-800">
            HOROSCOPE INTERPRETATION
          </h1>
          <div className="text-sm text-emerald-600 mb-8">
            Understanding the language of the stars
          </div>
        </div>

        <div className="space-y-8 text-emerald-900">
          <div className="bg-white/70 backdrop-blur-sm rounded-lg p-6 shadow-sm border border-emerald-200">
            <h2 className="text-xl font-medium mb-4 text-emerald-800">Reading Your Birth Chart</h2>
            <p className="text-sm leading-relaxed">
              A birth chart is a snapshot of the heavens at the exact moment of your birth. Each planet's 
              position in a zodiac sign and house creates a unique cosmic fingerprint that reveals your 
              personality, potential challenges, and life path.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/70 backdrop-blur-sm rounded-lg p-6 shadow-sm border border-emerald-200">
              <h3 className="text-lg font-medium mb-3 text-emerald-800">Planetary Influences</h3>
              <p className="text-sm leading-relaxed">
                Each planet represents different aspects of your personality. The Sun is your core self, 
                the Moon your emotions, Mercury your communication style, and so on.
              </p>
            </div>

            <div className="bg-white/70 backdrop-blur-sm rounded-lg p-6 shadow-sm border border-emerald-200">
              <h3 className="text-lg font-medium mb-3 text-emerald-800">Zodiac Signs</h3>
              <p className="text-sm leading-relaxed">
                The zodiac sign a planet occupies colors how that planetary energy expresses itself, 
                adding specific qualities and characteristics to its influence.
              </p>
            </div>

            <div className="bg-white/70 backdrop-blur-sm rounded-lg p-6 shadow-sm border border-emerald-200">
              <h3 className="text-lg font-medium mb-3 text-emerald-800">Houses</h3>
              <p className="text-sm leading-relaxed">
                The twelve houses represent different life areas where planetary energies manifest, 
                from relationships and career to health and spirituality.
              </p>
            </div>

            <div className="bg-white/70 backdrop-blur-sm rounded-lg p-6 shadow-sm border border-emerald-200">
              <h3 className="text-lg font-medium mb-3 text-emerald-800">Aspects</h3>
              <p className="text-sm leading-relaxed">
                Aspects are the angles between planets that create dynamic relationships, 
                showing how different parts of your personality interact and influence each other.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-emerald-100 to-teal-100 rounded-lg p-6 border border-emerald-200">
            <h2 className="text-xl font-medium mb-4 text-emerald-800 text-center">The Art of Synthesis</h2>
            <p className="text-sm leading-relaxed text-center">
              True horoscope interpretation involves weaving together all these elements - planets, signs, 
              houses, and aspects - to create a comprehensive understanding of the individual. It's both 
              an art and a science that requires intuition, knowledge, and practice.
            </p>
          </div>
        </div>
      </Section>
    </div>
  )
}