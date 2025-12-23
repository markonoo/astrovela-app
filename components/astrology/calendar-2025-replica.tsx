import React from "react"

interface Calendar2025ReplicaProps {
  pageNumber: number
}

export function Calendar2025Replica({ pageNumber }: Calendar2025ReplicaProps) {
  return (
    <div className="h-full bg-stone-100 text-gray-800 flex flex-col flex-1 relative px-10 py-8">
      {/* Year Header */}
      <div className="text-center mb-8">
        <h1 className="text-7xl md:text-8xl font-light tracking-[0.15em] font-serif">2025</h1>
      </div>

      {/* Three Column Layout for Months */}
      <div className="grid grid-cols-3 gap-x-12 gap-y-6 text-sm leading-relaxed flex-1">
        {/* Column 1 - January to April */}
        <div className="space-y-6">
          <div>
            <h3 className="font-bold text-base mb-3">JANUARY</h3>
            <p className="mb-2"><strong>January 26:</strong> Saturn semi-square Pluto. This aspect can lead to tension and challenges that demand transformation and reevaluation of structures and power dynamics.</p>
          </div>

          <div>
            <h3 className="font-bold text-base mb-3">FEBRUARY</h3>
            <p className="mb-2"><strong>February 7:</strong> Neptune conjunct True Node. A potentially karmic time that emphasizes spirituality, dreams, and collective consciousness.</p>
          </div>

          <div>
            <h3 className="font-bold text-base mb-3">APRIL</h3>
            <p className="mb-2"><strong>April 4:</strong> Saturn sextile Uranus. An opportunity for blending tradition with innovation, encouraging practical changes and the stabilization of reforms.</p>
            <p className="mb-2"><strong>April 17:</strong> Jupiter sesquiquadrate Pluto. This aspect may bring growth and expansion in power dynamics, but with the potential for overreach.</p>
          </div>

          <div>
            <h3 className="font-bold text-base mb-3">MAY</h3>
            <p className="mb-2"><strong>May 18:</strong> Jupiter square True Node. A time to align your path with your truth, though it may come with challenges.</p>
          </div>

          <div>
            <h3 className="font-bold text-base mb-3">JUNE</h3>
            <p className="mb-2"><strong>June 15:</strong> Jupiter square Saturn. Calls for a balance between growth and discipline, highlighting the tension between optimism and realism.</p>
          </div>
        </div>

        {/* Column 2 - June to September */}
        <div className="space-y-6">
          <div>
            <h3 className="font-bold text-base mb-3">JUNE</h3>
            <p className="mb-2"><strong>June 17:</strong> Mars enters Virgo. A time for detailed work and health matters.</p>
            <p className="mb-2"><strong>June 18:</strong> Jupiter square Neptune. Creativity and spirituality are heightened, but be cautious of unrealistic expectations.</p>
          </div>

          <div>
            <h3 className="font-bold text-base mb-3">AUGUST</h3>
            <p className="mb-2"><strong>August 11:</strong> Saturn sextile Uranus. Encourages the integration of new ideas with established structures.</p>
            <p className="mb-2"><strong>August 25:</strong> Venus enters Leo. This period energizes creative expression, romance, and leisure activities, emphasizing a desire for recognition in love and artistic endeavors.</p>
          </div>

          <div>
            <h3 className="font-bold text-base mb-3">SEPTEMBER</h3>
            <p className="mb-2"><strong>September 1:</strong> Saturn retrogrades back into Pisces, revisiting themes of boundaries, spirituality, and collective responsibility. This is a time to finalize lessons learned about compassion, healing, and universal connection before Saturn fully commits to its journey through Aries.</p>
            <p className="mb-2"><strong>September 22:</strong> Mars enters Scorpio, intensifying desires, willpower, and the drive to investigate the hidden aspects of life. This placement emphasizes deep emotional and transformative experiences.</p>
          </div>

          <div>
            <h3 className="font-bold text-base mb-3">OCTOBER</h3>
            <p className="mb-2"><strong>October 22:</strong> Neptune retrogrades back into Pisces, urging a reassessment of our spiritual beliefs, creativity, and how we connect with the collective unconscious. This period might bring unresolved spiritual matters to the surface for one last review before Neptune moves forward.</p>
          </div>
        </div>

        {/* Column 3 - November to December */}
        <div className="space-y-6">
          <div>
            <h3 className="font-bold text-base mb-3">NOVEMBER</h3>
            <p className="mb-2"><strong>November 4:</strong> Mars enters Sagittarius, energizing pursuits of knowledge, adventure, and understanding of life's bigger picture. This period favors exploration, travel, and philosophical inquiries.</p>
            <p className="mb-2"><strong>November 6:</strong> Venus enters Scorpio, deepening emotional connections and desires for intimacy. Venus in Scorpio seeks profound and transformative relationships.</p>
            <p className="mb-2"><strong>November 7:</strong> Uranus retrogrades enters Taurus, revisiting themes around personal values, resources, and changes in financial matters. This period asks us to reconsider our approach to security and innovation in how we build and maintain resources.</p>
          </div>

          <div>
            <h3 className="font-bold text-base mb-3">DECEMBER</h3>
            <p className="mb-2"><strong>December 11:</strong> Mercury enters Sagittarius, encouraging broad thinking, optimism, and interest in philosophical or cultural exploration. This transit supports speaking and thinking with honesty and directness.</p>
            <p className="mb-2"><strong>December 15:</strong> Mars enters Capricorn, focusing energy on ambition, structure, and achieving goals with discipline and persistence. Mars in Capricorn supports efforts that require determination and responsibility.</p>
            <p className="mb-2"><strong>December 21:</strong> Sun enters Capricorn, marking the Winter Solstice. This transit emphasizes hard work, discipline, and the foundations of our lives. Capricorn season is a time for setting goals for the new year and working diligently towards them.</p>
            <p className="mb-2"><strong>December 24:</strong> Venus enters Capricorn, valuing stability, loyalty, and long-term commitments in relationships. Venus in Capricorn encourages a practical approach to love and appreciation for traditional values.</p>
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
