import React from "react"

interface Calendar2027Part2ReplicaProps {
  pageNumber: number
}

export function Calendar2027Part2Replica({ pageNumber }: Calendar2027Part2ReplicaProps) {
  return (
    <div className="h-full bg-stone-100 text-gray-800 flex flex-col flex-1 relative px-12 py-10">
      {/* Year Header */}
      <div className="text-center mb-10">
        <h1 className="text-7xl md:text-8xl font-light tracking-[0.15em] font-serif">2027</h1>
      </div>

      {/* Two Column Layout - Part 2 (July-Dec) */}
      <div className="grid grid-cols-2 gap-x-12 gap-y-7 text-sm leading-relaxed flex-1">
        {/* Left Column */}
        <div className="space-y-7">
          <div>
            <h3 className="font-heading font-semibold text-base mb-3 tracking-wide">JULY</h3>
            <p className="mb-2 text-justify"><strong>July 3:</strong> Venus enters Cancer. Affections are nurturing, protective, and tied to home and family.</p>
            <p className="mb-2 text-justify"><strong>July 15:</strong> Mars enters Libra. Efforts are directed towards harmony, partnerships, and fairness.</p>
            <p className="mb-2 text-justify"><strong>July 23:</strong> Sun enters Leo. Focus on self-expression, creativity, and playfulness, encouraging us to shine.</p>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-base mb-3 tracking-wide">AUGUST</h3>
            <p className="mb-2 text-justify"><strong>August 2:</strong> Mercury enters Leo. Thinking and communication become creative, dramatic, and enthusiastic.</p>
            <p className="mb-2 text-justify"><strong>August 20:</strong> Venus enters Virgo. Love expresses itself through practicality, helpfulness, and attention to details.</p>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-base mb-3 tracking-wide">SEPTEMBER</h3>
            <p className="mb-2 text-justify"><strong>September 2:</strong> Mars enters Scorpio. Actions are driven by intensity, depth, and the desire to transform.</p>
            <p className="mb-2 text-justify"><strong>September 23:</strong> Sun enters Libra (Autumnal Equinox). A focus on balance, relationships, and seeking harmony and fairness.</p>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-7">
          <div>
            <h3 className="font-heading font-semibold text-base mb-3 tracking-wide">OCTOBER</h3>
            <p className="mb-2 text-justify"><strong>October 8:</strong> Venus enters Scorpio. Relationships dive into deeper emotional waters, valuing intimacy and transformation.</p>
            <p className="mb-2 text-justify"><strong>October 23:</strong> Sun enters Scorpio. Emphasis on depth, secrets, and personal transformation.</p>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-base mb-3 tracking-wide">NOVEMBER</h3>
            <p className="mb-2 text-justify"><strong>November 1:</strong> Venus enters Sagittarius. Love seeks meaning, adventure, and experiences that expand the horizons.</p>
            <p className="mb-2 text-justify"><strong>November 22:</strong> Sun enters Sagittarius. Focus shifts to exploration, philosophy, and the pursuit of truth.</p>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-base mb-3 tracking-wide">DECEMBER</h3>
            <p className="mb-2 text-justify"><strong>December 18:</strong> Mercury enters Capricorn. Communication becomes focused on practical matters, structure, and long-term planning.</p>
            <p className="mb-2 text-justify"><strong>December 22:</strong> Sun enters Capricorn (Winter Solstice). Emphasis on discipline, ambition, and responsibility.</p>
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

