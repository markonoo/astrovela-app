import React from "react"

interface Calendar2028Part2ReplicaProps {
  pageNumber: number
}

export function Calendar2028Part2Replica({ pageNumber }: Calendar2028Part2ReplicaProps) {
  return (
    <div className="h-full bg-stone-100 text-gray-800 flex flex-col flex-1 relative px-12 py-10">
      {/* Year Header */}
      <div className="text-center mb-10">
        <h1 className="text-7xl md:text-8xl font-light tracking-[0.15em] font-serif">2028</h1>
      </div>

      {/* Two Column Layout - Part 2 (July-Dec) */}
      <div className="grid grid-cols-2 gap-x-12 gap-y-7 text-sm leading-relaxed flex-1">
        {/* Left Column */}
        <div className="space-y-7">
          <div>
            <h3 className="font-heading font-semibold text-base mb-3 tracking-wide">JULY</h3>
            <p className="mb-2 text-justify"><strong>July 22:</strong> Sun enters Leo. Focus shifts towards self-expression, creativity, and enjoyment.</p>
            <p className="mb-2 text-justify"><strong>July 22:</strong> New Moon in Cancer. Encourages nurturing, emotional starts, and focusing on home life.</p>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-base mb-3 tracking-wide">AUGUST</h3>
            <p className="mb-2 text-justify"><strong>August 7:</strong> Venus enters Cancer. Deepens emotional connections in love and enhances caring in financial matters.</p>
            <p className="mb-2 text-justify"><strong>August 22:</strong> Sun enters Virgo. A period for practicality, health, and service to others.</p>
            <p className="mb-2 text-justify"><strong>August 24:</strong> Jupiter enters Libra. Expands harmony, relationships, and artistic pursuits.</p>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-base mb-3 tracking-wide">SEPTEMBER</h3>
            <p className="mb-2 text-justify"><strong>September 18:</strong> New Moon in Virgo. Perfect for starting health routines, organizational tasks, and practical affairs.</p>
            <p className="mb-2 text-justify"><strong>September 22:</strong> Sun enters Libra (Autumnal Equinox). Enhances focus on relationships, balance, and fairness.</p>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-7">
          <div>
            <h3 className="font-heading font-semibold text-base mb-3 tracking-wide">OCTOBER</h3>
            <p className="mb-2 text-justify"><strong>October 18:</strong> New Moon in Libra. Encourages new beginnings in partnerships, contracts, and seeking balance.</p>
            <p className="mb-2 text-justify"><strong>October 22:</strong> Sun enters Scorpio. Deepens focus on transformation, mysteries, and shared resources.</p>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-base mb-3 tracking-wide">NOVEMBER</h3>
            <p className="mb-2 text-justify"><strong>November 16:</strong> New Moon in Scorpio. Supports intentions related to deep emotional healing and transformation.</p>
            <p className="mb-2 text-justify"><strong>November 21:</strong> Sun enters Sagittarius. Expands focus on adventure, learning, and seeking truth.</p>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-base mb-3 tracking-wide">DECEMBER</h3>
            <p className="mb-2 text-justify"><strong>December 16:</strong> New Moon in Sagittarius. Ideal for setting goals related to expansion, education, and exploration.</p>
            <p className="mb-2 text-justify"><strong>December 21:</strong> Sun enters Capricorn (Winter Solstice). Focuses on ambition, structure, and discipline.</p>
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

