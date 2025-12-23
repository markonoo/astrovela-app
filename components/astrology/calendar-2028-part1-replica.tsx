import React from "react"

interface Calendar2028Part1ReplicaProps {
  pageNumber: number
}

export function Calendar2028Part1Replica({ pageNumber }: Calendar2028Part1ReplicaProps) {
  return (
    <div className="h-full bg-stone-100 text-gray-800 flex flex-col flex-1 relative px-12 py-10">
      {/* Year Header */}
      <div className="text-center mb-10">
        <h1 className="text-7xl md:text-8xl font-light tracking-[0.15em] font-serif">2028</h1>
      </div>

      {/* Two Column Layout - Part 1 (Jan-June) */}
      <div className="grid grid-cols-2 gap-x-12 gap-y-7 text-sm leading-relaxed flex-1">
        {/* Left Column */}
        <div className="space-y-7">
          <div>
            <h3 className="font-heading font-semibold text-base mb-3 tracking-wide">JANUARY</h3>
            <p className="mb-2 text-justify"><strong>January 13:</strong> Venus enters Pisces. Enhances compassion and empathy in relationships.</p>
            <p className="mb-2 text-justify"><strong>January 20:</strong> Sun enters Aquarius. Focus shifts towards innovation, community, and freedom.</p>
            <p className="mb-2 text-justify"><strong>January 26:</strong> New Moon in Aquarius. Ideal for intentions related to innovation, friendships, and social causes.</p>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-base mb-3 tracking-wide">FEBRUARY</h3>
            <p className="mb-2 text-justify"><strong>February 7:</strong> Venus enters Aries. Brings energy and enthusiasm to love and financial pursuits.</p>
            <p className="mb-2 text-justify"><strong>February 19:</strong> Sun enters Pisces. A time for introspection, creativity, and embracing empathy.</p>
            <p className="mb-2 text-justify"><strong>February 25:</strong> New Moon in Pisces. Supports new beginnings in spiritual growth, compassion, and artistic endeavors.</p>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-base mb-3 tracking-wide">MARCH</h3>
            <p className="mb-2 text-justify"><strong>March 4:</strong> Venus enters Taurus. Favors stability and pleasure in love and finances.</p>
            <p className="mb-2 text-justify"><strong>March 20:</strong> Sun enters Aries (Spring Equinox). Marks the astrological new year, encouraging bold starts and self-focus.</p>
            <p className="mb-2 text-justify"><strong>March 26:</strong> New Moon in Aries. A powerful time for initiating new projects and personal reinvention.</p>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-7">
          <div>
            <h3 className="font-heading font-semibold text-base mb-3 tracking-wide">APRIL</h3>
            <p className="mb-2 text-justify"><strong>April 13:</strong> Saturn enters Taurus. Brings a period of redefining our values and resources.</p>
            <p className="mb-2 text-justify"><strong>April 19:</strong> Sun enters Taurus. Focus on material security, comfort, and enjoyment of life's pleasures.</p>
            <p className="mb-2 text-justify"><strong>April 24:</strong> New Moon in Taurus. Good for setting intentions related to financial stability and physical pleasures.</p>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-base mb-3 tracking-wide">MAY</h3>
            <p className="mb-2 text-justify"><strong>May 1:</strong> Mercury enters Gemini. Encourages communication, learning, and adaptability.</p>
            <p className="mb-2 text-justify"><strong>May 20:</strong> Sun enters Gemini. A time for social connections, curiosity, and exploring new ideas.</p>
            <p className="mb-2 text-justify"><strong>May 24:</strong> New Moon in Gemini. Ideal for intentions related to communication, learning, and short trips.</p>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-base mb-3 tracking-wide">JUNE</h3>
            <p className="mb-2 text-justify"><strong>June 20:</strong> Sun enters Cancer (Summer Solstice). Emphasizes emotional security, family, and home life.</p>
            <p className="mb-2 text-justify"><strong>June 22:</strong> New Moon in Cancer. Supports new beginnings in family matters, emotional well-being, and domestic affairs.</p>
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

