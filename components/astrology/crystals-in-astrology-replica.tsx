import React from "react"

interface CrystalsInAstrologyReplicaProps {
  pageNumber: number
}

export function CrystalsInAstrologyReplica({ pageNumber }: CrystalsInAstrologyReplicaProps) {
  return (
    <div className="h-full relative overflow-hidden">
      {/* Full-page crystal background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/crystals-in-astrology-background.jpg)' }}
      />
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content overlay */}
      <div className="relative h-full flex flex-col items-center justify-center p-12 text-white z-10">
        {/* Title - reduced by 30% */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-light tracking-[0.15em] font-serif mb-6">
            CRYSTALS IN
          </h1>
          <h1 className="text-4xl md:text-5xl font-light tracking-[0.15em] font-serif mb-8">
            ASTROLOGY
          </h1>
          
          {/* Decorative divider with star */}
          <div className="flex items-center justify-center mb-8">
            <div className="w-32 h-px bg-white/60"></div>
            <div className="mx-4">
              <div className="relative w-6 h-6">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-6 h-px bg-white/60"></div>
                  <div className="absolute w-px h-6 bg-white/60"></div>
                  <div className="absolute w-4 h-px bg-white/60 transform rotate-45"></div>
                  <div className="absolute w-4 h-px bg-white/60 transform -rotate-45"></div>
                </div>
              </div>
            </div>
            <div className="w-32 h-px bg-white/60"></div>
          </div>
        </div>

        {/* Large decorative 'I' initial */}
        <div className="text-center mb-8">
          <div className="text-8xl font-serif text-white leading-none">
            I
          </div>
        </div>

        {/* Main text */}
        <div className="max-w-2xl text-center">
          <p className="text-base leading-relaxed text-white/90">
            n the mystical world where astrology meets crystal healing, each zodiac sign finds its resonance with specific crystals. These stones, forged in the heart of the Earth, carry the universe's vibrations, offering a unique bridge between the celestial and the terrestrial.
          </p>
        </div>
      </div>

      {/* Page number */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="text-white text-sm font-medium">{pageNumber}</div>
      </div>
    </div>
  )
}
