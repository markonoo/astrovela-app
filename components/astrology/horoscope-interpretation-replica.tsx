import React from "react"

interface HoroscopeInterpretationReplicaProps {
  pageNumber: number
}

export function HoroscopeInterpretationReplica({ pageNumber }: HoroscopeInterpretationReplicaProps) {
  return (
    <div className="h-full bg-gradient-to-br from-green-50 to-teal-50 text-gray-800 flex flex-col flex-1 relative p-12">
      {/* Title section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-light tracking-[0.15em] font-serif text-teal-700 mb-3">
          HOROSCOPE INTERPRETATION
        </h1>
        <p className="text-sm text-teal-600 tracking-wide">
          Understanding the language of the stars
        </p>
      </div>

      {/* Main content */}
      <div className="flex-1 space-y-8">
        {/* Reading Your Birth Chart */}
        <div className="bg-white/70 backdrop-blur-sm rounded-lg p-6 border border-teal-200">
          <h2 className="text-xl font-semibold mb-4 text-teal-800">Reading Your Birth Chart</h2>
          <p className="text-sm leading-relaxed text-gray-700">
            A birth chart is a snapshot of the heavens at the exact moment of your birth. Each planet's position in a zodiac sign and house creates a unique cosmic fingerprint that reveals your personality, potential challenges, and life path.
          </p>
        </div>

        {/* Grid of interpretation elements */}
        <div className="grid grid-cols-2 gap-6">
          {/* Planetary Influences */}
          <div className="bg-white/70 backdrop-blur-sm rounded-lg p-5 border border-teal-200">
            <h3 className="text-lg font-semibold mb-3 text-teal-800">Planetary Influences</h3>
            <p className="text-sm leading-relaxed text-gray-700">
              Each planet represents different aspects of your personality. The Sun is your core self, the Moon your emotions, Mercury your communication style, and so on.
            </p>
          </div>

          {/* Zodiac Signs */}
          <div className="bg-white/70 backdrop-blur-sm rounded-lg p-5 border border-teal-200">
            <h3 className="text-lg font-semibold mb-3 text-teal-800">Zodiac Signs</h3>
            <p className="text-sm leading-relaxed text-gray-700">
              The zodiac sign a planet occupies colors how that planetary energy expresses itself, adding specific qualities and characteristics to its influence.
            </p>
          </div>

          {/* Houses */}
          <div className="bg-white/70 backdrop-blur-sm rounded-lg p-5 border border-teal-200">
            <h3 className="text-lg font-semibold mb-3 text-teal-800">Houses</h3>
            <p className="text-sm leading-relaxed text-gray-700">
              The twelve houses represent different life areas where planetary energies manifest, from relationships and career to health and spirituality.
            </p>
          </div>

          {/* Aspects */}
          <div className="bg-white/70 backdrop-blur-sm rounded-lg p-5 border border-teal-200">
            <h3 className="text-lg font-semibold mb-3 text-teal-800">Aspects</h3>
            <p className="text-sm leading-relaxed text-gray-700">
              Aspects are the angles between planets that create dynamic relationships, showing how different parts of your personality interact and influence each other.
            </p>
          </div>
        </div>

        {/* The Art of Synthesis */}
        <div className="bg-gradient-to-r from-teal-100 to-green-100 rounded-lg p-6 border border-teal-200">
          <h2 className="text-xl font-semibold mb-4 text-teal-800 text-center">
            The Art of Synthesis
          </h2>
          <p className="text-sm leading-relaxed text-gray-700 text-center">
            True horoscope interpretation involves weaving together all these elements - planets, signs, houses, and aspects - to create a comprehensive understanding of the individual. It's both an art and a science that requires intuition, knowledge, and practice.
          </p>
        </div>
      </div>

      {/* Page number */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="text-teal-600 text-sm font-medium">{pageNumber}</div>
      </div>
    </div>
  )
}

