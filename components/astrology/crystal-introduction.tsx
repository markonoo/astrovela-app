import React from "react"
import { PageNumber } from "./page-number"

export function CrystalIntroduction({ pageNumber }: { pageNumber: number }) {
  return (
    <div className="h-full relative overflow-hidden">
      {/* Crystal background */}
      <div className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-08-23%20at%2019.00.13-LVb4D0BPSKXpKjnwK3cojuOEEAmSlj.png')`,
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Content overlay */}
      <div className="relative z-10 flex flex-col justify-between items-center h-full p-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-7xl md:text-8xl font-light tracking-[0.15em] font-serif text-white mb-8">
            CRYSTALS IN
            <br />
            ASTROLOGY
          </h1>

          {/* Decorative divider */}
          <div className="flex items-center justify-center mb-8">
            <div className="w-16 h-0.5 bg-white opacity-60"></div>
            <div className="mx-4">
              <svg viewBox="0 0 24 24" className="w-8 h-8 text-white fill-current opacity-70">
                <path d="M12 2l3 6 6 3-6 3-3 6-3-6-6-3 6-3z" stroke="currentColor" strokeWidth="1" fill="none" />
              </svg>
            </div>
            <div className="w-16 h-0.5 bg-white opacity-60"></div>
          </div>

          <div className="flex items-start">
            <div className="text-8xl font-serif text-white opacity-70 mr-6 leading-none">I</div>
            <div className="flex-1 text-left">
              <p className="text-white text-lg leading-relaxed">
                n the mystical world where astrology meets crystal healing, each zodiac sign finds its resonance withspecific crystals. These stones, forged in the heart of the Earth, carry the universe's vibrations,
                offering a unique bridge between the celestial and the terrestrial.
              </p>
            </div>
          </div>
        </div>
      </div>

      <PageNumber pageNumber={pageNumber} />
    </div>
  )
}
