import React from "react"

interface ZodiacSignsOverviewPageProps {
  pageNumber: number
}

export function ZodiacSignsOverviewPage({ pageNumber }: ZodiacSignsOverviewPageProps) {
  return (
    <div className="h-full bg-gradient-to-br from-stone-100 to-stone-200 text-gray-800 flex flex-col justify-center relative">
      {/* Title - increased size and bold */}
      <div className="text-center mb-12">
        <h1 className="text-5xl md:text-6xl font-light tracking-[0.15em] font-serif text-gray-800">THE ZODIAC</h1>
        <h1 className="text-5xl md:text-6xl font-light tracking-[0.15em] font-serif text-gray-800">SIGNS</h1>
      </div>

      {/* Zodiac Icons Grid - with actual round zodiac icons */}
      <div className="px-16 mb-12">
        <div className="grid grid-cols-4 gap-6 max-w-4xl mx-auto mb-10">
          {/* Row 1 */}
          <div className="flex flex-col items-center">
            <img 
              src="/aries-round.png" 
              alt="Aries zodiac sign" 
              className="w-24 h-24 rounded-full object-contain"
            />
          </div>

          <div className="flex flex-col items-center">
            <img 
              src="/taurus-round.png" 
              alt="Taurus zodiac sign" 
              className="w-24 h-24 rounded-full object-contain"
            />
          </div>

          <div className="flex flex-col items-center">
            <img 
              src="/gemini-round.png" 
              alt="Gemini zodiac sign" 
              className="w-24 h-24 rounded-full object-contain"
            />
          </div>

          <div className="flex flex-col items-center">
            <img 
              src="/cancer-round.png" 
              alt="Cancer zodiac sign" 
              className="w-24 h-24 rounded-full object-contain"
            />
          </div>

          {/* Row 2 */}
          <div className="flex flex-col items-center">
            <img 
              src="/leo-round.png" 
              alt="Leo zodiac sign" 
              className="w-24 h-24 rounded-full object-contain"
            />
          </div>

          <div className="flex flex-col items-center">
            <img 
              src="/virgo-round.png" 
              alt="Virgo zodiac sign" 
              className="w-24 h-24 rounded-full object-contain"
            />
          </div>

          <div className="flex flex-col items-center">
            <img 
              src="/libra-round.png" 
              alt="Libra zodiac sign" 
              className="w-24 h-24 rounded-full object-contain"
            />
          </div>

          <div className="flex flex-col items-center">
            <img 
              src="/scorpio-round.png" 
              alt="Scorpio zodiac sign" 
              className="w-24 h-24 rounded-full object-contain"
            />
          </div>

          {/* Row 3 */}
          <div className="flex flex-col items-center">
            <img 
              src="/sagittarius-round.png" 
              alt="Sagittarius zodiac sign" 
              className="w-24 h-24 rounded-full object-contain"
            />
          </div>

          <div className="flex flex-col items-center">
            <img 
              src="/capricorn-round.png" 
              alt="Capricorn zodiac sign" 
              className="w-24 h-24 rounded-full object-contain"
            />
          </div>

          <div className="flex flex-col items-center">
            <img 
              src="/aquarius-round.png" 
              alt="Aquarius zodiac sign" 
              className="w-24 h-24 rounded-full object-contain"
            />
          </div>

          <div className="flex flex-col items-center">
            <img 
              src="/pisces-round.png" 
              alt="Pisces zodiac sign" 
              className="w-24 h-24 rounded-full object-contain"
            />
          </div>
        </div>

        {/* Description - narrower text */}
        <div className="max-w-4xl mx-auto">
          <div className="flex items-start gap-6">
            <div className="text-8xl font-serif text-gray-800 leading-none mt-1 select-none">Z</div>
            <div className="flex-1 text-gray-700 text-base leading-relaxed pt-5">
              <p>
                odiac signs, the celestial coordinates that divide the sky into twelve equal parts, are at the heart of astrology's symbolic language. Each sign represents a unique segment of the ecliptic, complete with its own characteristics, energies, and traits.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Page number */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="text-gray-600 text-lg font-light">{pageNumber}</div>
      </div>
    </div>
  )
}
