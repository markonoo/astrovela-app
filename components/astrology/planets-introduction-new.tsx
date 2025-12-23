import React from "react"
import Image from "next/image"

export function PlanetsIntroductionNew({ pageNumber }: { pageNumber: number }) {
  return (
    <div className="h-full bg-black text-amber-200 relative overflow-hidden">
      {/* Full-page background image - Cosmic planets scene */}
      <div className="absolute inset-0">
        <Image
          src="/planets-introduction-bg.png"
          alt="Cosmic planets background with solar system"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Main content - will overlay on background image */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-12 max-w-5xl mx-auto">
        <h1 className="text-7xl md:text-8xl font-light text-center mb-12 tracking-[0.15em] font-serif">
          THE<br />
          PLANETS
        </h1>

        <div className="flex items-start gap-6 max-w-4xl">
          {/* Large decorative A */}
          <div className="text-9xl font-serif text-amber-300 leading-none mt-2">
            A
          </div>
          
          {/* Body text */}
          <div className="flex-1 text-amber-100 text-lg leading-relaxed pt-6">
            <p>
              strology has long fascinated humanity with its promise of insight and understanding into our lives, personalities, and futures. Planets in astrology are considered the primary symbols through which cosmic energies manifest in our lives. The movements and positions of the planets at the time of our birth are believed to shape our character, emotions, and life paths.
            </p>
          </div>
        </div>
      </div>

      {/* Page number */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-amber-200 text-lg font-light">
        {pageNumber}
      </div>
    </div>
  )
}
