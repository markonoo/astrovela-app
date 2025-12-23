import React from "react"

interface Calendar2026Part2ReplicaProps {
  pageNumber: number
}

export function Calendar2026Part2Replica({ pageNumber }: Calendar2026Part2ReplicaProps) {
  return (
    <div className="h-full bg-stone-100 text-gray-800 flex flex-col flex-1 relative px-12 py-10">
      {/* Year Header */}
      <div className="text-center mb-10">
        <h1 className="text-7xl md:text-8xl font-light tracking-[0.15em] font-serif">2026</h1>
      </div>

      {/* Two Column Layout - Part 2 (June-Dec) */}
      <div className="grid grid-cols-2 gap-x-12 gap-y-7 text-sm leading-relaxed flex-1">
        {/* Left Column */}
        <div className="space-y-7">
          <div>
            <h3 className="font-heading font-semibold text-base mb-3 tracking-wide">JUNE</h3>
            <p className="mb-2 text-justify"><strong>June 29:</strong> Full Moon in Capricorn. Highlights the balance between personal ambitions and responsibilities, pushing for achievement and structure.</p>
            <p className="mb-2 text-justify"><strong>June 30:</strong> Jupiter enters Leo. Expands creativity, joy, and dramatic expression, encouraging boldness and generosity.</p>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-base mb-3 tracking-wide">JULY</h3>
            <p className="mb-2 text-justify"><strong>July 14:</strong> New Moon in Cancer. A fresh start in emotional security, family matters, and nurturing.</p>
            <p className="mb-2 text-justify"><strong>July 22:</strong> Sun enters Leo. Focuses on self-expression, creativity, and playful enjoyment, encouraging us to shine.</p>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-base mb-3 tracking-wide">AUGUST</h3>
            <p className="mb-2 text-justify"><strong>August 12:</strong> New Moon Total SOLAR Eclipse in Leo. Marks significant new beginnings in self-expression, leadership, and creativity.</p>
            <p className="mb-2 text-justify"><strong>August 28:</strong> Full Moon Partial LUNAR Eclipse in Pisces. Highlights letting go, forgiveness, and spiritual growth.</p>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-base mb-3 tracking-wide">SEPTEMBER</h3>
            <p className="mb-2 text-justify"><strong>September 10:</strong> New Moon in Virgo. It is a time for practical beginnings, focusing on health, work, and daily routines.</p>
            <p className="mb-2 text-justify"><strong>September 22:</strong> Sun enters Libra (Autumnal Equinox). A focus on balance, relationships, and seeking harmony and fairness.</p>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-7">
          <div>
            <h3 className="font-heading font-semibold text-base mb-3 tracking-wide">OCTOBER</h3>
            <p className="mb-2 text-justify"><strong>October 23:</strong> Sun enters Scorpio. Focuses on transformation, deep connections, and uncovering hidden truths.</p>
            <p className="mb-2 text-justify"><strong>October 26:</strong> Full Moon in Taurus. Illuminates issues around security, value, and material possessions, urging us to find balance and grounding.</p>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-base mb-3 tracking-wide">NOVEMBER</h3>
            <p className="mb-2 text-justify"><strong>November 9:</strong> New Moon in Scorpio. A powerful time for new beginnings in transformation, deep emotional connections, and personal mastery.</p>
            <p className="mb-2 text-justify"><strong>November 24:</strong> Full Moon in Gemini. Highlights communication, flexibility, and curiosity, urging us to exchange ideas and stay adaptable.</p>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-base mb-3 tracking-wide">DECEMBER</h3>
            <p className="mb-2 text-justify"><strong>December 8:</strong> New Moon in Sagittarius. Encourages new adventures, learning, and expanding our horizons.</p>
            <p className="mb-2 text-justify"><strong>December 21:</strong> Sun enters Capricorn (Winter Solstice). Focuses on responsibility, ambition, and achieving goals.</p>
            <p className="mb-2 text-justify"><strong>December 23:</strong> Full Moon in Cancer. Emphasizes emotional fulfillment, home, and family, urging us to nurture ourselves and our loved ones.</p>
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

