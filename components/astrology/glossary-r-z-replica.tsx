import React from "react"

interface GlossaryRZReplicaProps {
  pageNumber: number
}

export function GlossaryRZReplica({ pageNumber }: GlossaryRZReplicaProps) {
  return (
    <div className="h-full bg-stone-100 text-gray-800 flex flex-col flex-1 relative px-12 py-10">
      {/* Letter Headers and Terms - 2 Column Layout */}
      <div className="grid grid-cols-2 gap-x-16 gap-y-4 text-sm leading-relaxed">
        {/* Left Column */}
        <div className="space-y-4">
          {/* R */}
          <div>
            <h2 className="text-5xl font-light mb-4">R</h2>
            <div className="space-y-3">
              <p>
                <strong>Retrograde</strong> - When a planet appears to be moving backward in the sky due to the relative positions of the Earth and that planet. Astrologically, it signifies a period of review, reflection, and revisiting of areas represented by the retrograde planet.
              </p>
              <p>
                <strong>Ruler</strong> - A planet that governs a particular zodiac sign, strongly influencing the expression of that sign's qualities.
              </p>
            </div>
          </div>

          {/* S */}
          <div>
            <h2 className="text-5xl font-light mb-4">S</h2>
            <div className="space-y-3">
              <p>
                <strong>Saturn</strong> - Planet associated with discipline, responsibility, limitations, and lessons.
              </p>
              <p>
                <strong>Signs</strong> - The 12 segments of the zodiac, each representing different personality traits, tendencies, and life themes.
              </p>
              <p>
                <strong>Saturn Return</strong> - A significant astrological transit that occurs when Saturn returns to the same position in the sky as at the time of birth, marking major life shifts and maturity around ages 29, 58, and 87.
              </p>
            </div>
          </div>

          {/* T */}
          <div>
            <h2 className="text-5xl font-light mb-4">T</h2>
            <div className="space-y-3">
              <p>
                <strong>Trine</strong> - An aspect formed when two planets are about 120 degrees apart, indicating harmony, talent, and ease in the areas represented by the planets involved.
              </p>
              <p>
                <strong>Transits</strong> - The movement of planets across the sky and their interaction with the positions of the planets in the natal chart, indicating current influences and events.
              </p>
            </div>
          </div>

          {/* U */}
          <div>
            <h2 className="text-5xl font-light mb-4">U</h2>
            <div className="space-y-3">
              <p>
                <strong>Uranus</strong> - Associated with innovation, rebellion, and unexpected changes, representing the drive for freedom and originality.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-4">
          {/* V */}
          <div>
            <h2 className="text-5xl font-light mb-4">V</h2>
            <div className="space-y-3">
              <p>
                <strong>Venus</strong> - The planet of love, beauty, and harmony, influencing relationships, artistic expression, and values.
              </p>
              <p>
                <strong>Vedic Astrology</strong> - Also known as Jyotish, an ancient form of astrology from India that uses the sidereal zodiac, which is aligned with the fixed stars.
              </p>
            </div>
          </div>

          {/* W */}
          <div>
            <h2 className="text-5xl font-light mb-4">W</h2>
            <div className="space-y-3">
              <p>
                <strong>Water Signs</strong> - Cancer, Scorpio, Pisces. These signs are associated with emotions, intuition, and depth.
              </p>
            </div>
          </div>

          {/* X */}
          <div>
            <h2 className="text-5xl font-light mb-4">X</h2>
            <div className="space-y-3">
              <p>
                <strong>Xenial Aspect</strong> - A term not commonly used in traditional astrology, relating to hospitable or friendly aspects between planets (e.g., sextile or trine).
              </p>
              <p>
                <strong>Xenial</strong> - A term not traditionally used in astrology, often confused with sextile, meaning an aspect of harmony and cooperation between planets 60 degrees apart.
              </p>
            </div>
          </div>

          {/* Y */}
          <div>
            <h2 className="text-5xl font-light mb-4">Y</h2>
            <div className="space-y-3">
              <p>
                <strong>Yod</strong> - Also known as the "Finger of God," a rare aspect pattern formed by two planets in sextile aspect to each other, both quincunx (150 degrees) to a third planet. It indicates a special task or karmic mission.
              </p>
            </div>
          </div>

          {/* Z */}
          <div>
            <h2 className="text-5xl font-light mb-4">Z</h2>
            <div className="space-y-3">
              <p>
                <strong>Zenith</strong> - The point in the sky directly above the observer. In astrology, it relates to the Midheaven (MC), representing career, status, and public image.
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
