import React from "react"

interface GlossaryKQReplicaProps {
  pageNumber: number
}

export function GlossaryKQReplica({ pageNumber }: GlossaryKQReplicaProps) {
  return (
    <div className="h-full bg-stone-100 text-gray-800 flex flex-col flex-1 relative px-12 py-10">
      {/* Letter Headers and Terms - 2 Column Layout */}
      <div className="grid grid-cols-2 gap-x-16 gap-y-4 text-sm leading-relaxed">
        {/* Left Column */}
        <div className="space-y-4">
          {/* K */}
          <div>
            <h2 className="text-5xl font-light mb-4">K</h2>
            <div className="space-y-3">
              <p>
                <strong>Kite</strong> - A planetary aspect pattern resembling a kite, formed by a grand trine, an opposition, and two sextiles. It indicates talents and opportunities for growth.
              </p>
              <p>
                <strong>Karmic Astrology</strong> - A branch of astrology focused on the soul's growth and evolution, often through the study of the lunar nodes and reincarnation.
              </p>
            </div>
          </div>

          {/* L */}
          <div>
            <h2 className="text-5xl font-light mb-4">L</h2>
            <div className="space-y-3">
              <p>
                <strong>Lunar Nodes</strong> - The points where the Moon's orbit crosses the ecliptic. The North Node (Dragon's Head) represents where we are heading, while the South Node (Dragon's Tail) represents past karmic influences.
              </p>
              <p>
                <strong>Lilith (Black Moon Lilith)</strong> - A mathematical point that represents the Moon's apogee, associated with the darker, hidden aspects of one's personality or femininity.
              </p>
            </div>
          </div>

          {/* M */}
          <div>
            <h2 className="text-5xl font-light mb-4">M</h2>
            <div className="space-y-3">
              <p>
                <strong>Mutable Signs</strong> - Gemini, Virgo, Sagittarius, Pisces. These signs are associated with adaptability, flexibility, and change.
              </p>
              <p>
                <strong>MC (Medium Coeli or Midheaven)</strong> - The highest point in a chart, representing career, public image, and aspirations.
              </p>
              <p>
                <strong>Mercury</strong> - The planet of communication, intellect, and travel, influencing how we think, communicate, and learn.
              </p>
            </div>
          </div>

          {/* N */}
          <div>
            <h2 className="text-5xl font-light mb-4">N</h2>
            <div className="space-y-3">
              <p>
                <strong>Neptune</strong> - The planet associated with dreams, illusions, spirituality, and confusion, highlighting areas of life where we may experience disillusionment or inspiration.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-4">
          {/* O */}
          <div>
            <h2 className="text-5xl font-light mb-4">O</h2>
            <div className="space-y-3">
              <p>
                <strong>Opposition</strong> - An aspect formed when two planets are about 180 degrees apart, indicating tension, conflict, or complementarity between the energies of the planets involved.
              </p>
              <p>
                <strong>Out-of-Bounds Planets</strong> - Planets that are beyond the Sun's maximum declination north or south of the equator, indicating unconventional or extraordinary expressions of the planet's energy.
              </p>
            </div>
          </div>

          {/* P */}
          <div>
            <h2 className="text-5xl font-light mb-4">P</h2>
            <div className="space-y-3">
              <p>
                <strong>Planets</strong> - In astrology, planets (including the Sun and Moon) represent different facets of personality and life areas. Their placement in the zodiac influences individual characteristics and life events.
              </p>
              <p>
                <strong>Pluto</strong> - Planet associated with transformation, power, death, and rebirth, reflecting deep changes and growth processes.
              </p>
              <p>
                <strong>Part of Fortune</strong> - A calculated point in the chart that indicates an area of life where one can find happiness and fulfillment.
              </p>
              <p>
                <strong>Peregrine</strong> - A planet lacking essential dignity or connection, suggesting it operates freely but potentially without direction.
              </p>
            </div>
          </div>

          {/* Q */}
          <div>
            <h2 className="text-5xl font-light mb-4">Q</h2>
            <div className="space-y-3">
              <p>
                <strong>Quadrants</strong> - The four sections of an astrological chart, divided by the Ascendant-Descendant and MC-IC axes, representing different areas of life and personality aspects.
              </p>
              <p>
                <strong>Quincunx (Inconjunct)</strong> - An aspect formed when two planets are approximately 150 degrees apart, indicating misalignment or adjustment between their energies.
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
