import React from "react"

interface AstrologyConceptsProps {
  pageNumber: number
}

export function AstrologyConcepts({ pageNumber }: AstrologyConceptsProps) {
  return (
    <div className="h-full bg-gradient-to-br from-stone-100 to-stone-200 text-gray-800 flex flex-col justify-center relative">
      {/* Content grid - narrower text */}
      <div className="px-16 pt-16 pb-8 max-w-4xl mx-auto grid grid-cols-2 gap-x-10 gap-y-8">
        {/* Left column */}
        <div className="space-y-8">
          {/* Signs */}
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-3 tracking-wide">SIGNS</h2>
            <p className="text-sm leading-relaxed text-gray-700">
              The zodiac signs represent twelve distinct segments of the sky, each associated with specific characteristics, energies, and traits. The signs are categorized by elements (Fire, Earth, Air, Water) and modality (Cardinal, Fixed, Mutable), which contribute to their unique expressions. A planet positioned in a sign is colored by that sign's characteristics, influencing how the planet's energy is expressed.
            </p>
          </div>

          {/* Planets */}
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-3 tracking-wide">PLANETS</h2>
            <p className="text-sm leading-relaxed text-gray-700">
              In astrology, planets are considered the primary actors or energies that influence various aspects of our lives. Each planet represents different facets of the human experience. Planetary influences are modified by their positions in signs and houses, as well as the relationships, otherwise known as aspects, they form with each other in a person's birth chart.
            </p>
          </div>

          {/* Houses */}
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-3 tracking-wide">HOUSES</h2>
            <p className="text-sm leading-relaxed text-gray-700">
              The houses in a birth chart represent different areas of life, where the action of the planets and signs plays out. There are 12 houses, each associated with various domains. The placement of planets within these houses indicates where in life these planetary energies are most likely to manifest.
            </p>
          </div>
        </div>

        {/* Right column */}
        <div className="space-y-8">
          {/* Aspects */}
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-3 tracking-wide">ASPECTS</h2>
            <p className="text-sm leading-relaxed text-gray-700">
              Aspects are the angular relationships between planets in the birth chart, indicating how their energies combine and interact. Major aspects include conjunctions (blend energy), oppositions (create tension), squares (indicate challenges), trines (harmonious flow), and sextiles (opportunities).
            </p>
          </div>

          {/* Synthesis */}
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-3 tracking-wide">SYNTHESIS</h2>
            <p className="text-sm leading-relaxed text-gray-700">
              In modern astrology, a practitioner synthesizes the meanings of the planets, signs, houses, and aspects to create a holistic interpretation of the birth chart. This interpretation can provide insights into an individual's personality traits, tendencies, and potential life paths. Astrology is seen as a tool for self-awareness, offering a unique perspective on personal growth and life's challenges.
            </p>
          </div>

          {/* Mystical hands illustration - increased by 30% and lowered by 8% */}
          <div className="flex justify-center mt-12">
            <img 
              src="/mystical-hands.png" 
              alt="Mystical hands" 
              className="w-[325px] h-auto object-contain"
            />
          </div>
        </div>
      </div>

      {/* Page number */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="text-gray-600 text-lg font-light">{pageNumber}</div>
      </div>
    </div>
  )
}
