import React from "react"

interface GlossaryEJReplicaProps {
  pageNumber: number
}

export function GlossaryEJReplica({ pageNumber }: GlossaryEJReplicaProps) {
  return (
    <div className="h-full bg-stone-100 text-gray-800 flex flex-col flex-1 relative px-12 py-10">
      {/* Letter Headers and Terms - 2 Column Layout */}
      <div className="grid grid-cols-2 gap-x-16 gap-y-4 text-sm leading-relaxed">
        {/* Left Column */}
        <div className="space-y-4">
          {/* E */}
          <div>
            <h2 className="text-5xl font-light mb-4">E</h2>
            <div className="space-y-3">
              <p>
                <strong>Eclipse</strong> - A celestial event where the Sun, Moon, and Earth align, with the Moon blocking the Sun (solar eclipse) or the Earth casting a shadow on the Moon (lunar eclipse). Eclipses in astrology signify significant beginnings, endings, and transformations.
              </p>
              <p>
                <strong>Element</strong> - The four elements (Fire, Earth, Air, Water) represent different temperaments and personality traits, with each zodiac sign associated with one of these elements.
              </p>
              <p>
                <strong>Earth Signs</strong> - Taurus, Virgo, Capricorn. These signs are practical, grounded, and reliable.
              </p>
              <p>
                <strong>Ecliptic</strong> - The apparent path of the Sun across the sky, which forms the basis of the zodiac.
              </p>
            </div>
          </div>

          {/* F */}
          <div>
            <h2 className="text-5xl font-light mb-4">F</h2>
            <div className="space-y-3">
              <p>
                <strong>Fire Signs</strong> - Aries, Leo, Sagittarius. These signs are associated with action, passion, and energy.
              </p>
              <p>
                <strong>Fixed Signs</strong> - Taurus, Leo, Scorpio, Aquarius. These signs are associated with stability, determination, and depth.
              </p>
            </div>
          </div>

          {/* G */}
          <div>
            <h2 className="text-5xl font-light mb-4">G</h2>
            <div className="space-y-3">
              <p>
                <strong>Grand Trine</strong> - A harmonious aspect pattern formed when three planets are in a trine (120 degrees apart) with each other, creating an equilateral triangle. It signifies ease and flow in the areas affected.
              </p>
              <p>
                <strong>Grand Cross</strong> - A tense aspect pattern formed by four planets in square aspect (90 degrees apart) and opposition (180 degrees apart), indicating challenge and conflict that demands action.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-4">
          {/* H */}
          <div>
            <h2 className="text-5xl font-light mb-4">H</h2>
            <div className="space-y-3">
              <p>
                <strong>House</strong> - One of the twelve segments of the celestial sphere that divide the horoscope, each representing different areas of life.
              </p>
              <p>
                <strong>Horoscope</strong> - A chart or diagram representing the positions of the planets, aspects, and zodiac signs at a specific time and place, used for interpreting celestial influences.
              </p>
              <p>
                <strong>Harmonic Aspects</strong> - Aspects that are divisions of the 360-degree circle by numbers, revealing subtle but significant energies between planets.
              </p>
              <p>
                <strong>Horary Astrology</strong> - A branch of astrology that answers specific questions by examining the chart of the moment the question is understood by the astrologer.
              </p>
            </div>
          </div>

          {/* I */}
          <div>
            <h2 className="text-5xl font-light mb-4">I</h2>
            <div className="space-y-3">
              <p>
                <strong>Intercepted Signs</strong> - When a sign does not rule a house due to uneven house divisions but is fully contained within a house. This can indicate delayed development or hidden strengths related to the sign's qualities.
              </p>
              <p>
                <strong>Imum Coeli (IC)</strong> - The bottom of the sky in a chart, opposite the Midheaven, representing home, roots, and the foundation of one's life.
              </p>
            </div>
          </div>

          {/* J */}
          <div>
            <h2 className="text-5xl font-light mb-4">J</h2>
            <div className="space-y-3">
              <p>
                <strong>Jupiter</strong> - The largest planet in the solar system, associated with growth, expansion, prosperity, and good fortune in astrology.
              </p>
              <p>
                <strong>Juno</strong> - An asteroid representing partnership, marriage, and commitment in astrological interpretations.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Page number */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-gray-600 text-lg">
        {pageNumber}
      </div>
    </div>
  )
}
