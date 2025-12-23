import React from "react"

interface GuideToAstrologyTitleProps {
  pageNumber: number
}

export function GuideToAstrologyTitle({ pageNumber }: GuideToAstrologyTitleProps) {
  return (
    <div className="h-full text-white flex flex-col flex-1 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/guide-to-astrology-title.png)' }}
      />
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/40 via-indigo-950/40 to-purple-950/40" />

      {/* Decorative star and lines */}
      <div className="flex-1 flex flex-col items-center justify-center relative z-10">
        {/* Top decorative line with star */}
        <div className="flex items-center mb-16">
          <div className="w-32 h-px bg-amber-300"></div>
          <div className="mx-6 relative">
            <div className="w-8 h-8 relative">
              {/* 8-pointed star */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-8 h-px bg-amber-300"></div>
                <div className="absolute w-px h-8 bg-amber-300"></div>
                <div className="absolute w-6 h-px bg-amber-300 transform rotate-45"></div>
                <div className="absolute w-6 h-px bg-amber-300 transform -rotate-45"></div>
              </div>
            </div>
          </div>
          <div className="w-32 h-px bg-amber-300"></div>
        </div>

        {/* Main title */}
        <div className="text-center mb-16">
          <h1 className="text-7xl md:text-8xl font-light tracking-[0.15em] font-serif text-amber-300 mb-4">
            GUIDE TO
          </h1>
          <h1 className="text-7xl md:text-8xl font-light tracking-[0.15em] font-serif text-amber-300">
            ASTROLOGY
          </h1>
        </div>

        {/* Bottom decorative line */}
        <div className="w-full max-w-2xl h-px bg-amber-300"></div>
      </div>

      {/* Page number */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="text-amber-300 text-lg font-light">{pageNumber}</div>
      </div>
    </div>
  )
}
