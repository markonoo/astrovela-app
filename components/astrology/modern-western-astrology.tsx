import React from "react"

interface ModernWesternAstrologyProps {
  pageNumber: number
}

export function ModernWesternAstrology({ pageNumber }: ModernWesternAstrologyProps) {
  return (
    <div className="h-full bg-gradient-to-br from-stone-100 to-stone-200 text-gray-800 flex flex-col relative justify-center">
      {/* Zodiac Wheel Image */}
      <div className="flex items-center justify-center pt-8 pb-6">
        <div className="relative w-[450px] h-[450px] flex items-center justify-center">
          <img 
            src="/modern-western-astrology.png" 
            alt="Modern Western Astrology Zodiac Wheel" 
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      {/* Title and description - narrower text */}
      <div className="px-20 pb-8">
        <h1 className="text-2xl font-light tracking-wider text-center text-gray-800 mb-6">
          MODERN WESTERN ASTROLOGY
        </h1>
        <div className="max-w-3xl mx-auto text-sm leading-relaxed text-gray-700 space-y-4">
          <p>
            Today, Western astrology is characterized by its focus on the natal chart, planetary positions, and aspects, and the use of the tropical zodiac, which is aligned with the Earth's seasons rather than constellations. It is practiced as a form of personal insight, psychological tool, and spiritual exploration, reflecting the multifaceted nature of human life and consciousness.
          </p>
          <p>
            Modern Western astrology, while often regarded skeptically by the scientific community, continues to thrive as a cultural and spiritual practice, with a broad appeal that spans demographics and geographies. Its evolution from ancient roots to contemporary practice highlights the enduring human desire to seek meaning in the cosmos and understand our place within it.
          </p>
          <p>
            Modern astrology operates as a complex system of symbolic language, intertwining the movements and positions of celestial bodies, the twelve astrological signs, and the houses in a birth chart to offer insights into an individual's personality, life events, and potential future paths.
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
