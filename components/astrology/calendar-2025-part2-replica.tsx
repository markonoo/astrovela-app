import React from "react"

interface Calendar2025Part2ReplicaProps {
  pageNumber: number
}

export function Calendar2025Part2Replica({ pageNumber }: Calendar2025Part2ReplicaProps) {
  return (
    <div className="h-full bg-stone-100 text-gray-800 flex flex-col flex-1 relative px-12 py-10">
      {/* Year Header */}
      <div className="text-center mb-10">
        <h1 className="text-7xl md:text-8xl font-light tracking-[0.15em] font-serif">2025</h1>
      </div>

      {/* Three Column Layout for Months - Part 2 (Sep-Dec) */}
      <div className="grid grid-cols-3 gap-x-10 gap-y-8 text-sm leading-relaxed flex-1">
        {/* Column 1 */}
        <div className="space-y-7">
          <div>
            <h3 className="font-heading font-semibold text-base mb-3 tracking-wide">SEPTEMBER</h3>
            <p className="mb-3 text-justify"><strong>September 1:</strong> Saturn retrogrades back into Pisces, revisiting themes of boundaries, spirituality, and collective responsibility. This is a time to finalize lessons learned about compassion, healing, and universal connection before Saturn fully commits to its journey through Aries.</p>
            <p className="mb-3 text-justify"><strong>September 22:</strong> Mars enters Scorpio, intensifying desires, willpower, and the drive to investigate the hidden aspects of life. This placement emphasizes deep emotional and transformative experiences.</p>
          </div>
        </div>

        {/* Column 2 */}
        <div className="space-y-7">
          <div>
            <h3 className="font-heading font-semibold text-base mb-3 tracking-wide">OCTOBER</h3>
            <p className="mb-3 text-justify"><strong>October 22:</strong> Neptune retrogrades back into Pisces, urging a reassessment of our spiritual beliefs, creativity, and how we connect with the collective unconscious. This period might bring unresolved spiritual matters to the surface for one last review before Neptune moves forward.</p>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-base mb-3 tracking-wide">NOVEMBER</h3>
            <p className="mb-3 text-justify"><strong>November 4:</strong> Mars enters Sagittarius, energizing pursuits of knowledge, adventure, and understanding of life's bigger picture. This period favors exploration, travel, and philosophical inquiries.</p>
            <p className="mb-3 text-justify"><strong>November 6:</strong> Venus enters Scorpio, deepening emotional connections and desires for intimacy. Venus in Scorpio seeks profound and transformative relationships.</p>
            <p className="mb-3 text-justify"><strong>November 7:</strong> Uranus retrogrades enters Taurus, revisiting themes around personal values, resources, and changes in financial matters. This period asks us to reconsider our approach to security and innovation in how we build and maintain resources.</p>
          </div>
        </div>

        {/* Column 3 */}
        <div className="space-y-7">
          <div>
            <h3 className="font-heading font-semibold text-base mb-3 tracking-wide">DECEMBER</h3>
            <p className="mb-3 text-justify"><strong>December 11:</strong> Mercury enters Sagittarius, encouraging broad thinking, optimism, and interest in philosophical or cultural exploration. This transit supports speaking and thinking with honesty and directness.</p>
            <p className="mb-3 text-justify"><strong>December 15:</strong> Mars enters Capricorn, focusing energy on ambition, structure, and achieving goals with discipline and persistence. Mars in Capricorn supports efforts that require determination and responsibility.</p>
            <p className="mb-3 text-justify"><strong>December 21:</strong> Sun enters Capricorn (Winter Solstice). Emphasizes hard work, discipline, and the foundations of our lives. Capricorn season is a time for setting goals for the new year and working diligently towards them.</p>
            <p className="mb-3 text-justify"><strong>December 24:</strong> Venus enters Capricorn, valuing stability, loyalty, and long-term commitments in relationships. Venus in Capricorn encourages a practical approach to love and appreciation for traditional values.</p>
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

