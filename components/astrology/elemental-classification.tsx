import React from "react"

interface ElementalClassificationProps {
  pageNumber: number
}

export function ElementalClassification({ pageNumber }: ElementalClassificationProps) {
  return (
    <div className="h-full bg-gradient-to-br from-stone-100 to-stone-200 text-gray-800 flex flex-col justify-center relative">
      {/* Title section - narrower */}
      <div className="mb-8 px-16">
        <div className="flex items-start gap-6 max-w-4xl mx-auto">
          <div className="text-7xl font-serif text-amber-600 leading-none mt-1 select-none">1</div>
          <div className="flex-1">
            <h1 className="text-3xl font-light tracking-wider text-gray-800 mb-4">
              THE ELEMENTAL<br />CLASSIFICATION
            </h1>
            <p className="text-sm leading-relaxed text-gray-700 max-w-lg">
              The twelve zodiac signs are categorized into four elements: Fire, Earth, Air, and Water. These elements represent the essential types of energy that manifest in our personalities, life experiences. This categorization reveals the temperament and basic nature of the signs within each element.
            </p>
          </div>
        </div>
      </div>

      {/* Elements grid - narrower text */}
      <div className="px-16 pb-6 grid grid-cols-2 gap-x-10 gap-y-8 max-w-4xl mx-auto">
        {/* Fire Signs */}
        <div className="space-y-3">
          <div className="flex flex-col items-center mb-4">
            <div className="w-14 h-14 mb-3 flex items-center justify-center">
              {/* Fire triangle - pointing up */}
              <svg viewBox="0 0 60 60" className="w-full h-full text-amber-600">
                <path d="M30 10 L50 45 L10 45 Z" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h2 className="text-lg font-semibold tracking-[0.15em] font-serif text-gray-800 mb-1">FIRE SIGNS</h2>
            <p className="text-sm text-gray-600 italic">Aries, Leo, Sagittarius</p>
          </div>
          <p className="text-sm leading-relaxed text-gray-700">
            are passionate, dynamic, and energetic. They are known for their enthusiasm, courage, and inspiration. Fire signs are action-oriented, often driven by the desire for self-expression and the pursuit of their passions.
          </p>
        </div>

        {/* Earth Signs - SWAPPED ICON WITH WATER */}
        <div className="space-y-4">
          <div className="flex flex-col items-center mb-6">
            <div className="w-14 h-14 mb-3 flex items-center justify-center">
              {/* Earth triangle - pointing down WITH LINE (was water's icon) */}
              <svg viewBox="0 0 60 60" className="w-full h-full text-amber-600">
                <path d="M30 50 L10 15 L50 15 Z" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M20 25 L40 25" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <h2 className="text-lg font-semibold tracking-[0.15em] font-serif text-gray-800 mb-1">EARTH SIGNS</h2>
            <p className="text-sm text-gray-600 italic">Taurus, Virgo, Capricorn</p>
          </div>
          <p className="text-sm leading-relaxed text-gray-700">
            are practical, grounded, and reliable. These signs value stability, hard work, and tangible results. Earth signs are focused on material achievements and practicality, embodying resilience and patience.
          </p>
        </div>

        {/* Air Signs */}
        <div className="space-y-4">
          <div className="flex flex-col items-center mb-6">
            <div className="w-14 h-14 mb-3 flex items-center justify-center">
              {/* Air triangle - pointing up with line */}
              <svg viewBox="0 0 60 60" className="w-full h-full text-amber-600">
                <path d="M30 10 L50 45 L10 45 Z" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M20 35 L40 35" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <h2 className="text-lg font-semibold tracking-[0.15em] font-serif text-gray-800 mb-1">AIR SIGNS</h2>
            <p className="text-sm text-gray-600 italic">Gemini, Libra, Aquarius</p>
          </div>
          <p className="text-sm leading-relaxed text-gray-700">
            are intellectual, communicative, and social. They thrive on ideas, information, and interaction. Air signs are known for their curiosity, adaptability, and analytical skills, often seeking to understand and connect with the world through thought and communication.
          </p>
        </div>

        {/* Water Signs - SWAPPED ICON WITH EARTH */}
        <div className="space-y-4">
          <div className="flex flex-col items-center mb-6">
            <div className="w-14 h-14 mb-3 flex items-center justify-center">
              {/* Water triangle - pointing down WITHOUT LINE (was earth's icon) */}
              <svg viewBox="0 0 60 60" className="w-full h-full text-amber-600">
                <path d="M30 50 L10 15 L50 15 Z" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h2 className="text-lg font-semibold tracking-[0.15em] font-serif text-gray-800 mb-1">WATER SIGNS</h2>
            <p className="text-sm text-gray-600 italic">Cancer, Scorpio, Pisces</p>
          </div>
          <p className="text-sm leading-relaxed text-gray-700">
            are intuitive, emotional, and sensitive. They navigate the world through their feelings, forming deep connections with others. Water signs are known for their empathy, depth, and capacity for healing, often possessing a strong sense of intuition and artistic creativity.
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