import React from "react"

interface AstrologyIntroductionPageProps {
  pageNumber: number
}

export function AstrologyIntroductionPage({ pageNumber }: AstrologyIntroductionPageProps) {
  return (
    <div className="h-full bg-black text-white flex flex-col flex-1 relative">
      {/* Sun/Moon symbol at top */}
      <div className="flex justify-center mt-16 mb-12">
        <div className="w-48 h-48 relative">
          {/* Sun and Moon combined symbol */}
          <svg viewBox="0 0 200 200" className="w-full h-full text-amber-300">
            {/* Sun outer rays */}
            <g stroke="currentColor" strokeWidth="2" fill="none">
              {Array.from({ length: 16 }).map((_, i) => {
                const angle = (i * 22.5) * Math.PI / 180;
                const innerR = 70;
                const outerR = 90;
                const x1 = 100 + Math.cos(angle) * innerR;
                const y1 = 100 + Math.sin(angle) * innerR;
                const x2 = 100 + Math.cos(angle) * outerR;
                const y2 = 100 + Math.sin(angle) * outerR;
                return (
                  <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />
                );
              })}
            </g>
            
            {/* Sun circle */}
            <circle cx="100" cy="100" r="60" stroke="currentColor" strokeWidth="2" fill="none" />
            
            {/* Sun face */}
            <circle cx="85" cy="85" r="4" fill="currentColor" />
            <circle cx="115" cy="85" r="4" fill="currentColor" />
            <path d="M 90 110 Q 100 120 110 110" stroke="currentColor" strokeWidth="2" fill="none" />
            <circle cx="100" cy="95" r="2" fill="currentColor" />
            
            {/* Moon crescent inside */}
            <path d="M 75 100 Q 90 80 90 100 Q 90 120 75 100" stroke="currentColor" strokeWidth="2" fill="none" />
            
            {/* Small star */}
            <g transform="translate(130, 70)">
              <path d="M 0 -8 L 2 -2 L 8 -2 L 3 2 L 5 8 L 0 4 L -5 8 L -3 2 L -8 -2 L -2 -2 Z" fill="currentColor" />
            </g>
          </svg>
        </div>
      </div>

      {/* Large decorative A and text */}
      <div className="flex items-start gap-6 max-w-4xl mx-auto px-8">
        <div className="text-9xl font-serif text-amber-300 leading-none mt-4">A</div>
        <div className="flex-1 text-white text-lg leading-relaxed">
          <p>
            strology is an ancient practice that interprets the influence of stars and planets on human affairs. A birth chart, also known as a natal chart, is a map of where all the major celestial bodies were located in the sky at the exact moment of your birth. Each position has a specific meaning that can affect different aspects of your life
          </p>
        </div>
      </div>

      {/* Decorative divider */}
      <div className="flex justify-center my-12">
        <div className="flex items-center gap-4">
          <div className="w-24 h-px bg-amber-300"></div>
          <div className="w-2 h-2 bg-amber-300 rounded-full"></div>
          <div className="w-24 h-px bg-amber-300"></div>
        </div>
      </div>

      {/* Bottom text */}
      <div className="max-w-4xl mx-auto px-8 text-white text-base leading-relaxed">
        <p className="mb-6">
          In this section, we will navigate through each planet that appears in your birth chart. This section is dedicated to describing each of your celestial bodies, starting from the Sun, moving through the Moon, Rising, Mercury, Venus, Mars, Jupiter, Saturn, Uranus, Neptune, to Pluto and Chiron. Each of these celestial bodies has a story to tell about you. Whether it's a fiery Aries Sun, a cautious Virgo Mercury, or a dreamy Pisces Venus, each placement has a profound impact on your personality and how you interact with the world.
        </p>
        <p>
          This is a tool for your personal reflection and growth. By understanding the nuances of your birth chart, you can begin to understand the dynamics of your personality, how you best interact with others, and what your potentials are. We hope this section will provide you with valuable insights and a clearer understanding of your path in life.
        </p>
      </div>

      {/* Page number */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="text-amber-300 text-lg font-light">{pageNumber}</div>
      </div>
    </div>
  )
}
