import React from "react"

interface GlossaryACReplicaProps {
  pageNumber: number
}

export function GlossaryACReplica({ pageNumber }: GlossaryACReplicaProps) {
  return (
    <div className="h-full bg-stone-100 text-gray-800 flex flex-col flex-1 relative px-12 py-10">
      {/* Letter Headers and Terms - 2 Column Layout */}
      <div className="grid grid-cols-2 gap-x-16 gap-y-4 text-sm leading-relaxed">
        {/* Left Column */}
        <div className="space-y-4">
          {/* A */}
          <div>
            <h2 className="text-5xl font-light mb-4">A</h2>
            <div className="space-y-3">
              <p>
                <strong>Ascendant (Rising Sign)</strong> - The zodiac sign that was rising on the eastern horizon at the time of your birth. It represents your outward personality and physical appearance.
              </p>
              <p>
                <strong>Aspect</strong> - The angular relationship between planets in a horoscope, indicating how their energies interact with each other.
              </p>
              <p>
                <strong>Astrology</strong> - The study of the movements and relative positions of celestial bodies interpreted as having an influence on human affairs and the natural world.
              </p>
              <p>
                <strong>Air Signs</strong> - Gemini, Libra, Aquarius. These signs are associated with intellect, communication, and flexibility.
              </p>
              <p>
                <strong>Angular Houses</strong> - The 1<sup>st</sup>, 4<sup>th</sup>, 7<sup>th</sup>, and 10<sup>th</sup> houses in a chart, which are pivotal in understanding one's identity, home life, relationships, and career.
              </p>
              <p>
                <strong>Apogee</strong> - The point in the Moon's orbit farthest from the Earth, related to emotional detachment and perspective.
              </p>
            </div>
          </div>

          {/* B */}
          <div>
            <h2 className="text-5xl font-light mb-4">B</h2>
            <div className="space-y-3">
              <p>
                <strong>Birth Chart (Natal Chart)</strong> - A map of where all the planets were in their journey around the Sun, from our perspective on Earth, at the exact moment you were born.
              </p>
              <p>
                <strong>Benefic</strong> - Planets that traditionally bring about positive influences, namely Venus and Jupiter.
              </p>
              <p>
                <strong>Benefic Planets</strong> - Traditionally, Venus and Jupiter, are considered to bring good fortune and beneficial influences.
              </p>
              <p>
                <strong>Biquintile</strong> - An aspect formed when two planets are 144 degrees apart, associated with creative talent and genius.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-4">
          {/* C */}
          <div>
            <h2 className="text-5xl font-light mb-4">C</h2>
            <div className="space-y-3">
              <p>
                <strong>Conjunction</strong> - An aspect formed when two or more planets are positioned very close together in the zodiac, signifying blending, strengthening, or intensification of their energies.
              </p>
              <p>
                <strong>Cusp</strong> - The boundary between two zodiac signs or houses in a natal chart.
              </p>
              <p>
                <strong>Cadent Houses</strong> - The 3rd, 6th, 9th, and 12th houses, associated with learning, health, exploration, and the subconscious.
              </p>
              <p>
                <strong>Cardinal Signs</strong> - Aries, Cancer, Libra, Capricorn. These signs initiate action and symbolize new beginnings and leadership.
              </p>
            </div>
          </div>

          {/* D */}
          <div>
            <h2 className="text-5xl font-light mb-4 mt-8">D</h2>
            <div className="space-y-3">
              <p>
                <strong>Descendant</strong> - The point directly across from the Ascendant in the natal chart. It represents relationships and the qualities we attract in others.
              </p>
              <p>
                <strong>Detriment</strong> - A planet placed in the zodiac sign opposite the one it rules, considered to be in a challenging position that weakens its expression.
              </p>
              <p>
                <strong>Decan</strong> - Each zodiac sign is divided into three decans, each covering 10 degrees of the zodiac, adding layers of complexity to the sign's characteristics.
              </p>
              <p>
                <strong>Dignity</strong> - A planet's strength or weakness in a particular sign, with rulership being the strongest position.
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
