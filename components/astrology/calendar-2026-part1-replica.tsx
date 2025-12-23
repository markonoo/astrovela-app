import React from "react"

interface Calendar2026Part1ReplicaProps {
  pageNumber: number
}

export function Calendar2026Part1Replica({ pageNumber }: Calendar2026Part1ReplicaProps) {
  return (
    <div className="h-full bg-stone-100 text-gray-800 flex flex-col flex-1 relative px-12 py-10">
      {/* Year Header */}
      <div className="text-center mb-10">
        <h1 className="text-7xl md:text-8xl font-light tracking-[0.15em] font-serif">2026</h1>
      </div>

      {/* Two Column Layout - Part 1 (Jan-June) */}
      <div className="grid grid-cols-2 gap-x-12 gap-y-7 text-sm leading-relaxed flex-1">
        {/* Left Column */}
        <div className="space-y-7">
          <div>
            <h3 className="font-heading font-semibold text-base mb-3 tracking-wide">JANUARY</h3>
            <p className="mb-2 text-justify"><strong>January 1:</strong> Mercury enters Capricorn. Communication becomes practical and serious, focusing on goals and responsibilities.</p>
            <p className="mb-2 text-justify"><strong>January 2:</strong> Chiron Direct. Healing processes and personal growth areas that were stalled can now move forward.</p>
            <p className="mb-2 text-justify"><strong>January 3:</strong> Full Moon in Cancer. Emotions and domestic matters come to a head, urging us to balance our career and home life.</p>
            <p className="mb-2 text-justify"><strong>January 18:</strong> New Moon in Capricorn. A time to set intentions related to career, discipline, and long-term goals.</p>
            <p className="mb-2 text-justify"><strong>January 19:</strong> Sun enters Aquarius. Focus shifts to innovation, friendship, and collective well-being.</p>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-base mb-3 tracking-wide">FEBRUARY</h3>
            <p className="mb-2 text-justify"><strong>February 1:</strong> Full Moon in Leo. Highlights creativity, romance, and self-expression, asking us to find joy and share our unique light.</p>
            <p className="mb-2 text-justify"><strong>February 3:</strong> Uranus Direct. Progress resumes in areas of change, freedom, and disruption after a period of internal review.</p>
            <p className="mb-2 text-justify"><strong>February 13:</strong> Saturn enters Aries. A new cycle of building structures and facing responsibilities with courage begins.</p>
            <p className="mb-2 text-justify"><strong>February 17:</strong> New Moon Annular SOLAR Eclipse in Aquarius. A powerful time for new beginnings in community involvement, innovation, and embracing uniqueness.</p>
          </div>

        </div>

        {/* Right Column */}
        <div className="space-y-7">
          <div>
            <h3 className="font-heading font-semibold text-base mb-3 tracking-wide">MARCH</h3>
            <p className="mb-2 text-justify"><strong>March 3:</strong> Full Moon Total LUNAR Eclipse in Virgo. Emphasizes the need for practical adjustments, health, and service, pushing for purification and efficiency.</p>
            <p className="mb-2 text-justify"><strong>March 18:</strong> New Moon in Pisces. A period for starting fresh with compassion, healing, and tapping into the collective unconscious.</p>
            <p className="mb-2 text-justify"><strong>March 20:</strong> Sun enters Aries. The astrological new year begins, encouraging initiative, identity, and assertiveness.</p>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-base mb-3 tracking-wide">APRIL</h3>
            <p className="mb-2 text-justify"><strong>April 1:</strong> Full Moon in Libra. Focuses on relationships, balance, and harmony, highlighting the need for diplomacy and fairness.</p>
            <p className="mb-2 text-justify"><strong>April 17:</strong> New Moon in Aries. A time for new beginnings in self-discovery, bravery, and individuality.</p>
            <p className="mb-2 text-justify"><strong>April 19:</strong> Sun enters Taurus. Shifts the focus to stability, pleasure, and enjoying the sensual aspects of life.</p>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-base mb-3 tracking-wide">MAY</h3>
            <p className="mb-2 text-justify"><strong>May 1:</strong> Full Moon in Scorpio. Brings intensity, transformation, and deep emotional insights to the surface.</p>
            <p className="mb-2 text-justify"><strong>May 6:</strong> Pluto Retrograde. A period to revisit issues of power, transformation, and deep internal changes.</p>
            <p className="mb-2 text-justify"><strong>May 16:</strong> New Moon in Taurus. Encourages planting seeds for financial and material security, and appreciating the simple pleasures.</p>
          </div>
        </div>
      </div>

      {/* Page number */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-600 text-base font-serif">
        {pageNumber}
      </div>
    </div>
  )
}

