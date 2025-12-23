import React from "react"

interface Calendar2025Part1ReplicaProps {
  pageNumber: number
}

export function Calendar2025Part1Replica({ pageNumber }: Calendar2025Part1ReplicaProps) {
  return (
    <div className="h-full bg-stone-100 text-gray-800 flex flex-col flex-1 relative px-12 py-10">
      {/* Year Header */}
      <div className="text-center mb-10">
        <h1 className="text-7xl md:text-8xl font-light tracking-[0.15em] font-serif">2025</h1>
      </div>

      {/* Three Column Layout for Months - Part 1 (Jan-Aug) */}
      <div className="grid grid-cols-3 gap-x-10 gap-y-8 text-sm leading-relaxed flex-1">
        {/* Column 1 */}
        <div className="space-y-7">
          <div>
            <h3 className="font-heading font-semibold text-base mb-3 tracking-wide">JANUARY</h3>
            <p className="mb-3 text-justify"><strong>January 26:</strong> Saturn semi-square Pluto. This aspect can lead to tension and challenges that demand transformation and reevaluation of structures and power dynamics.</p>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-base mb-3 tracking-wide">FEBRUARY</h3>
            <p className="mb-3 text-justify"><strong>February 7:</strong> Neptune conjunct True Node. A potentially karmic time that emphasizes spirituality, dreams, and collective consciousness.</p>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-base mb-3 tracking-wide">APRIL</h3>
            <p className="mb-3 text-justify"><strong>April 4:</strong> Saturn sextile Uranus. An opportunity for blending tradition with innovation, encouraging practical changes and the stabilization of reforms.</p>
            <p className="mb-3 text-justify"><strong>April 17:</strong> Jupiter sesquiquadrate Pluto. This aspect may bring growth and expansion in power dynamics, but with the potential for overreach.</p>
          </div>
        </div>

        {/* Column 2 */}
        <div className="space-y-7">
          <div>
            <h3 className="font-heading font-semibold text-base mb-3 tracking-wide">MAY</h3>
            <p className="mb-3 text-justify"><strong>May 18:</strong> Jupiter square True Node. A time to align your path with your truth, though it may come with challenges.</p>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-base mb-3 tracking-wide">JUNE</h3>
            <p className="mb-3 text-justify"><strong>June 15:</strong> Jupiter square Saturn. Calls for a balance between growth and discipline, highlighting the tension between optimism and realism.</p>
            <p className="mb-3 text-justify"><strong>June 17:</strong> Mars enters Virgo. A time for detailed work and health matters.</p>
            <p className="mb-3 text-justify"><strong>June 18:</strong> Jupiter square Neptune. Creativity and spirituality are heightened, but be cautious of unrealistic expectations.</p>
          </div>
        </div>

        {/* Column 3 */}
        <div className="space-y-7">
          <div>
            <h3 className="font-heading font-semibold text-base mb-3 tracking-wide">AUGUST</h3>
            <p className="mb-3 text-justify"><strong>August 11:</strong> Saturn sextile Uranus. Encourages the integration of new ideas with established structures.</p>
            <p className="mb-3 text-justify"><strong>August 25:</strong> Venus enters Leo. This period energizes creative expression, romance, and leisure activities, emphasizing a desire for recognition in love and artistic endeavors.</p>
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

