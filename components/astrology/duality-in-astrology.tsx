import React from "react"

interface DualityInAstrologyProps {
  pageNumber: number
}

export function DualityInAstrology({ pageNumber }: DualityInAstrologyProps) {
  return (
    <div className="h-full bg-gradient-to-br from-stone-100 to-stone-200 text-gray-800 flex flex-col justify-center relative">
      {/* Title section - narrower */}
      <div className="mb-8 px-16">
        <div className="flex items-start gap-6 max-w-4xl mx-auto">
          <div className="text-7xl font-serif text-amber-600 leading-none mt-1 select-none">3</div>
          <div className="flex-1">
            <h1 className="text-3xl font-light tracking-wider text-gray-800 mb-4">
              DUALITY IN<br />ASTROLOGY
            </h1>
            <p className="text-sm leading-relaxed text-gray-700 max-w-lg">
              Duality, also known as polarity, divides the twelve zodiac signs into two groups: masculine (active) and feminine (passive). This division is not about gender but rather about the yin and yang of the universe, representing a fundamental balance in astrological philosophy.
            </p>
          </div>
        </div>
      </div>

      {/* Duality grid - narrower */}
      <div className="px-16 pb-4 grid grid-cols-2 gap-x-10 gap-y-6 max-w-4xl mx-auto">
        {/* Masculine Signs */}
        <div className="space-y-3">
          <div className="flex flex-col items-center mb-4">
            <div className="w-14 h-14 mb-3 flex items-center justify-center">
              {/* Mars symbol */}
              <svg viewBox="0 0 60 60" className="w-12 h-12 text-amber-600">
                <circle cx="25" cy="35" r="15" stroke="currentColor" strokeWidth="2.5" fill="none"/>
                <path d="M35 25 L45 15" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
                <path d="M35 15 L45 15 L45 25" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h2 className="text-lg font-semibold tracking-[0.15em] font-serif text-gray-800 mb-1">MASCULINE SIGNS</h2>
            <p className="text-sm text-gray-600 italic">Aries, Gemini, Leo, Libra, Sagittarius, Aquarius</p>
          </div>
          <p className="text-sm leading-relaxed text-gray-700">
            are focused, action-oriented, and confident. They symbolize the yang aspect, associated with extraversion, initiation, and directness. These signs are more inclined towards engaging with the world through action and exploration.
          </p>
        </div>

        {/* Feminine Signs */}
        <div className="space-y-3">
          <div className="flex flex-col items-center mb-4">
            <div className="w-14 h-14 mb-3 flex items-center justify-center">
              {/* Venus symbol */}
              <svg viewBox="0 0 60 60" className="w-12 h-12 text-amber-600">
                <circle cx="30" cy="25" r="12" stroke="currentColor" strokeWidth="2.5" fill="none"/>
                <path d="M30 37 L30 50" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
                <path d="M22 45 L38 45" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
              </svg>
            </div>
            <h2 className="text-lg font-semibold tracking-[0.15em] font-serif text-gray-800 mb-1">FEMININE SIGNS</h2>
            <p className="text-sm text-gray-600 italic">Taurus, Cancer, Virgo, Scorpio, Capricorn, Pisces</p>
          </div>
          <p className="text-sm leading-relaxed text-gray-700">
            embody the yin aspect, focusing on receptivity, introspection, and nurturing. These signs are more about internal processing, intuition, and developing emotional and spiritual depth. They tend to approach life through reflection and absorbing influences from their surroundings.
          </p>
        </div>
      </div>

      {/* Quote section - narrower */}
      <div className="px-16 mt-4 mb-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Decorative star */}
          <div className="flex justify-center mb-3">
            <div className="w-6 h-6 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-6 h-px bg-amber-600"></div>
                <div className="absolute w-px h-6 bg-amber-600"></div>
                <div className="absolute w-5 h-px bg-amber-600 transform rotate-45"></div>
                <div className="absolute w-5 h-px bg-amber-600 transform -rotate-45"></div>
              </div>
            </div>
          </div>
          <p className="text-base leading-relaxed text-gray-700 italic max-w-3xl mx-auto">
            Duality in astrology highlights the balance of active and passive energies within the zodiac, emphasizing the need for harmony between taking action and reflection.
          </p>
        </div>
      </div>

      {/* Page number */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="text-gray-600 text-lg font-light">{pageNumber}</div>
      </div>
    </div>
  )
}
