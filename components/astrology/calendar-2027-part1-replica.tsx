import React from "react"

interface Calendar2027Part1ReplicaProps {
  pageNumber: number
}

export function Calendar2027Part1Replica({ pageNumber }: Calendar2027Part1ReplicaProps) {
  return (
    <div className="h-full bg-stone-100 text-gray-800 flex flex-col flex-1 relative px-12 py-10">
      {/* Year Header */}
      <div className="text-center mb-10">
        <h1 className="text-7xl md:text-8xl font-light tracking-[0.15em] font-serif">2027</h1>
      </div>

      {/* Two Column Layout - Part 1 (Jan-June) */}
      <div className="grid grid-cols-2 gap-x-12 gap-y-7 text-sm leading-relaxed flex-1">
        {/* Left Column */}
        <div className="space-y-7">
          <div>
            <h3 className="font-heading font-semibold text-base mb-3 tracking-wide">JANUARY</h3>
            <p className="mb-2 text-justify"><strong>January 7:</strong> Venus enters Sagittarius. Focus shifts towards seeking truth, adventure, and expanding horizons in love and finances.</p>
            <p className="mb-2 text-justify"><strong>January 13:</strong> Mercury enters Aquarius. Communication and thinking turn towards innovation, community, and futuristic ideas.</p>
            <p className="mb-2 text-justify"><strong>January 20:</strong> Sun enters Aquarius. Emphasis on individuality, humanitarian efforts, and breaking the mold.</p>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-base mb-3 tracking-wide">FEBRUARY</h3>
            <p className="mb-2 text-justify"><strong>February 1:</strong> Mercury enters Pisces. Thinking and communication become more intuitive, emotional, and imaginative.</p>
            <p className="mb-2 text-justify"><strong>February 3:</strong> Venus enters Capricorn. Love and values become practical, seeking stability and commitment.</p>
            <p className="mb-2 text-justify"><strong>February 18:</strong> Sun enters Pisces. Focus on compassion, creativity, and connecting with the collective unconscious.</p>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-base mb-3 tracking-wide">MARCH</h3>
            <p className="mb-2 text-justify"><strong>March 1:</strong> Venus enters Aquarius. Values and affections are progressive, favoring uniqueness and friendship.</p>
            <p className="mb-2 text-justify"><strong>March 18:</strong> Mercury re-enters Pisces. A return to imaginative and empathetic communication.</p>
            <p className="mb-2 text-justify"><strong>March 20:</strong> Sun enters Aries (Spring Equinox). A focus on new beginnings, self-assertion, and initiative.</p>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-7">
          <div>
            <h3 className="font-heading font-semibold text-base mb-3 tracking-wide">APRIL</h3>
            <p className="mb-2 text-justify"><strong>April 8:</strong> Mercury enters Aries. Communication becomes direct, quick, and competitive.</p>
            <p className="mb-2 text-justify"><strong>April 14:</strong> Chiron enters Taurus. Healing focuses on self-worth, material security, and enjoyment of life's pleasures.</p>
            <p className="mb-2 text-justify"><strong>April 20:</strong> Venus enters Aries. Love is passionate, impulsive, and oriented towards action.</p>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-base mb-3 tracking-wide">MAY</h3>
            <p className="mb-2 text-justify"><strong>May 9:</strong> Mercury enters Gemini. Communication and thought processes are quick, curious, and multifaceted.</p>
            <p className="mb-2 text-justify"><strong>May 14:</strong> Mars enters Virgo. Actions become meticulous, focusing on efficiency and service.</p>
            <p className="mb-2 text-justify"><strong>May 21:</strong> Sun enters Gemini. A time for adaptability, learning, and social connections.</p>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-base mb-3 tracking-wide">JUNE</h3>
            <p className="mb-2 text-justify"><strong>June 8:</strong> Venus enters Gemini. Relationships are driven by curiosity, variety, and communication.</p>
            <p className="mb-2 text-justify"><strong>June 21:</strong> Sun enters Cancer (Summer Solstice). Emphasis on home, family, and emotional security.</p>
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

