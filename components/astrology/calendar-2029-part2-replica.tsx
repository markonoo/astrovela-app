import React from "react"

interface Calendar2029Part2ReplicaProps {
  pageNumber: number
}

export function Calendar2029Part2Replica({ pageNumber }: Calendar2029Part2ReplicaProps) {
  return (
    <div className="h-full bg-stone-100 text-gray-800 flex flex-col flex-1 relative px-12 py-10">
      {/* Year Header */}
      <div className="text-center mb-10">
        <h1 className="text-7xl md:text-8xl font-light tracking-[0.15em] font-serif">2029</h1>
      </div>

      {/* Two Column Layout - Part 2 (June-Dec) */}
      <div className="grid grid-cols-2 gap-x-12 gap-y-7 text-sm leading-relaxed flex-1">
        {/* Left Column */}
        <div className="space-y-7">
          <div>
            <h3 className="font-heading font-semibold text-base mb-3 tracking-wide">JUNE</h3>
            <p className="mb-2 text-justify"><strong>June 2:</strong> Venus enters Cancer. Emotional intimacy and nurturing relationships take precedence. It's a time to focus on family and creating a supportive environment.</p>
            <p className="mb-2 text-justify"><strong>June 5:</strong> Mars enters Libra. Actions are geared towards creating harmony and balance. This is a favorable period for diplomacy and working towards equitable solutions in conflicts.</p>
            <p className="mb-2 text-justify"><strong>June 13:</strong> Mercury enters Gemini. Quick thinking and adaptability define this transit. It's a favorable time for learning, teaching, and short-term projects.</p>
            <p className="mb-2 text-justify"><strong>June 21:</strong> Sun enters Cancer (Summer Solstice). Focus shifts to emotional security, family, and home life. This is an ideal period for reconnecting with your roots and creating a nurturing space.</p>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-base mb-3 tracking-wide">JULY</h3>
            <p className="mb-2 text-justify"><strong>July 1:</strong> Mercury enters Cancer. Communication takes on a more emotional and intuitive tone. It's a time to share feelings and strengthen bonds with loved ones.</p>
            <p className="mb-2 text-justify"><strong>July 15:</strong> Mercury enters Leo. Confidence and creativity infuse conversations. It's an excellent time for public speaking, storytelling, and self-expression.</p>
            <p className="mb-2 text-justify"><strong>July 22:</strong> Sun enters Leo. Self-expression, creativity, and joy are in the spotlight. This is a time to shine, celebrate your unique talents, and focus on personal fulfillment.</p>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-base mb-3 tracking-wide">SEPTEMBER</h3>
            <p className="mb-2 text-justify"><strong>September 22:</strong> Sun enters Libra (Autumnal Equinox). Balance, fairness, and relationships take center stage. It's a time for collaboration, compromise, and creating harmony in all areas of life.</p>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-7">
          <div>
            <h3 className="font-heading font-semibold text-base mb-3 tracking-wide">AUGUST</h3>
            <p className="mb-2 text-justify"><strong>August 7:</strong> Venus enters Virgo. Attention to detail and acts of service define relationships during this transit. Practicality and thoughtfulness enhance connections with others.</p>
            <p className="mb-2 text-justify"><strong>August 22:</strong> Sun enters Virgo. A time for prioritizing health, organization, and self-improvement. The energy supports refining routines and focusing on productive efforts.</p>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-base mb-3 tracking-wide">OCTOBER</h3>
            <p className="mb-2 text-justify"><strong>October 23:</strong> Sun enters Scorpio. A transformative energy brings focus to deep emotional healing and uncovering hidden truths. This is a powerful time for introspection and regeneration.</p>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-base mb-3 tracking-wide">NOVEMBER</h3>
            <p className="mb-2 text-justify"><strong>November 22:</strong> Sun enters Sagittarius. Optimism, exploration, and a thirst for knowledge take the lead. It's a great time for travel, higher learning, and pursuing broader perspectives.</p>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-base mb-3 tracking-wide">DECEMBER</h3>
            <p className="mb-2 text-justify"><strong>December 21:</strong> Sun enters Capricorn (Winter Solstice). The focus shifts to ambition, structure, and long-term goals. It's a time for assessing achievements and setting plans for future success.</p>
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











