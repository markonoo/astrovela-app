import React from "react"

interface Calendar2027ReplicaProps {
  pageNumber: number
}

export function Calendar2027Replica({ pageNumber }: Calendar2027ReplicaProps) {
  return (
    <div className="h-full bg-stone-100 text-gray-800 flex flex-col flex-1 relative px-10 py-8">
      {/* Year Header */}
      <div className="text-center mb-8">
        <h1 className="text-7xl md:text-8xl font-light tracking-[0.15em] font-serif">2027</h1>
      </div>

      {/* Two Column Layout for Months */}
      <div className="grid grid-cols-2 gap-x-12 gap-y-6 text-sm leading-relaxed flex-1">
        {/* Left Column */}
        <div className="space-y-6">
          <div>
            <h3 className="font-bold text-base mb-3">JANUARY</h3>
            <p className="mb-2 text-justify"><strong>January 7:</strong> Venus enters Sagittarius. Focus shifts towards seeking truth, adventure, and expanding horizons in love and finances.</p>
            <p className="mb-2 text-justify"><strong>January 13:</strong> Mercury enters Aquarius. Communication and thinking turn towards innovation, community, and futuristic ideas.</p>
            <p className="mb-2 text-justify"><strong>January 20:</strong> Sun enters Aquarius. Emphasis on individuality, humanitarian efforts, and breaking the mold.</p>
          </div>

          <div>
            <h3 className="font-bold text-base mb-3">FEBRUARY</h3>
            <p className="mb-2 text-justify"><strong>February 1:</strong> Mercury enters Pisces. Thinking and communication become more intuitive, emotional, and imaginative.</p>
            <p className="mb-2 text-justify"><strong>February 3:</strong> Venus enters Capricorn. Love and values become practical, seeking stability and commitment.</p>
            <p className="mb-2 text-justify"><strong>February 18:</strong> Sun enters Pisces. Focus on compassion, creativity, and connecting with the collective unconscious.</p>
          </div>

          <div>
            <h3 className="font-bold text-base mb-3">MARCH</h3>
            <p className="mb-2 text-justify"><strong>March 1:</strong> Venus enters Aquarius. Values and affections are progressive, favoring uniqueness and friendship.</p>
            <p className="mb-2 text-justify"><strong>March 18:</strong> Mercury re-enters Pisces. A return to imaginative and empathetic communication.</p>
            <p className="mb-2 text-justify"><strong>March 20:</strong> Sun enters Aries (Spring Equinox). A focus on new beginnings, self-assertion, and initiative.</p>
          </div>

          <div>
            <h3 className="font-bold text-base mb-3">APRIL</h3>
            <p className="mb-2 text-justify"><strong>April 8:</strong> Mercury enters Aries. Communication becomes direct, quick, and competitive.</p>
            <p className="mb-2 text-justify"><strong>April 14:</strong> Chiron enters Taurus. Healing focuses on self-worth, material security, and enjoyment of life's pleasures.</p>
            <p className="mb-2 text-justify"><strong>April 20:</strong> Venus enters Aries. Love is passionate, impulsive, and oriented towards action.</p>
          </div>

          <div>
            <h3 className="font-bold text-base mb-3">MAY</h3>
            <p className="mb-2 text-justify"><strong>May 9:</strong> Mercury enters Gemini. Communication and thought processes are quick, curious, and multifaceted.</p>
            <p className="mb-2 text-justify"><strong>May 14:</strong> Mars enters Virgo. Actions become meticulous, focusing on efficiency and service.</p>
            <p className="mb-2 text-justify"><strong>May 21:</strong> Sun enters Gemini. A time for adaptability, learning, and social connections.</p>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          <div>
            <h3 className="font-bold text-base mb-3">JUNE</h3>
            <p className="mb-2 text-justify"><strong>June 8:</strong> Venus enters Gemini. Relationships are driven by curiosity, variety, and communication.</p>
            <p className="mb-2 text-justify"><strong>June 21:</strong> Sun enters Cancer (Summer Solstice). Emphasis on home, family, and emotional security.</p>
          </div>

          <div>
            <h3 className="font-bold text-base mb-3">JULY</h3>
            <p className="mb-2 text-justify"><strong>July 3:</strong> Venus enters Cancer. Affections are nurturing, protective, and tied to home and family.</p>
            <p className="mb-2 text-justify"><strong>July 15:</strong> Mars enters Libra. Efforts are directed towards harmony, partnerships, and fairness.</p>
            <p className="mb-2 text-justify"><strong>July 23:</strong> Sun enters Leo. Focus on self-expression, creativity, and playfulness, encouraging us to shine.</p>
          </div>

          <div>
            <h3 className="font-bold text-base mb-3">AUGUST</h3>
            <p className="mb-2 text-justify"><strong>August 2:</strong> Mercury enters Leo. Thinking and communication become creative, dramatic, and enthusiastic.</p>
            <p className="mb-2 text-justify"><strong>August 20:</strong> Venus enters Virgo. Love expresses itself through practicality, helpfulness, and attention to details.</p>
          </div>

          <div>
            <h3 className="font-bold text-base mb-3">SEPTEMBER</h3>
            <p className="mb-2 text-justify"><strong>September 2:</strong> Mars enters Scorpio. Actions are driven by intensity, depth, and the desire to transform.</p>
            <p className="mb-2 text-justify"><strong>September 23:</strong> Sun enters Libra (Autumnal Equinox). A focus on balance, relationships, and seeking harmony and fairness.</p>
          </div>

          <div>
            <h3 className="font-bold text-base mb-3">OCTOBER</h3>
            <p className="mb-2 text-justify"><strong>October 8:</strong> Venus enters Scorpio. Relationships dive into deeper emotional waters, valuing intimacy and transformation.</p>
            <p className="mb-2 text-justify"><strong>October 23:</strong> Sun enters Scorpio. Emphasis on depth, secrets, and personal transformation.</p>
          </div>

          <div>
            <h3 className="font-bold text-base mb-3">NOVEMBER</h3>
            <p className="mb-2 text-justify"><strong>November 1:</strong> Venus enters Sagittarius. Love seeks meaning, adventure, and experiences that expand the horizons.</p>
            <p className="mb-2 text-justify"><strong>November 22:</strong> Sun enters Sagittarius. Focus shifts to exploration, philosophy, and the pursuit of truth.</p>
          </div>

          <div>
            <h3 className="font-bold text-base mb-3">DECEMBER</h3>
            <p className="mb-2 text-justify"><strong>December 18:</strong> Mercury enters Capricorn. Communication becomes focused on practical matters, structure, and long-term planning.</p>
            <p className="mb-2 text-justify"><strong>December 22:</strong> Sun enters Capricorn (Winter Solstice). Emphasis on discipline, ambition, and responsibility.</p>
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
