import React from "react"

interface HistoryOfAstrologyPageProps {
  pageNumber: number
}

export function HistoryOfAstrologyPage({ pageNumber }: HistoryOfAstrologyPageProps) {
  return (
    <div className="h-full bg-gradient-to-br from-stone-100 to-stone-200 text-gray-800 flex flex-col flex-1 relative">
      {/* Title */}
      <div className="text-center mt-12 mb-12">
        <h1 className="text-5xl md:text-6xl font-light tracking-[0.15em] font-serif text-gray-800">HISTORY OF</h1>
        <h1 className="text-5xl md:text-6xl font-light tracking-[0.15em] font-serif text-gray-800">ASTROLOGY</h1>
      </div>

      {/* Content with decorative A - narrower text */}
      <div className="flex-1 px-16">
        <div className="flex items-start gap-8 max-w-4xl mx-auto">
          <div className="text-8xl font-serif text-amber-600 leading-none mt-2 select-none">A</div>
          <div className="flex-1 text-gray-700 text-base leading-relaxed pt-4">
            <p className="mb-6">
              strology has evolved through different cultures and civilizations, all contributing their unique perspective and practices to the astrological tradition. From Vedic India's lunar mansions to the Mayan calendars, each culture enriched astrology with its practices and beliefs. This vibrant legacy continues to inspire modern astrology, offering to explore the mysteries of the cosmos.
            </p>
          </div>
        </div>

        {/* Decorative divider with star */}
        <div className="flex items-center justify-center my-8">
          <div className="flex items-center">
            <div className="w-16 h-px bg-amber-600"></div>
            <div className="mx-4 relative">
              <div className="w-6 h-6 relative">
                {/* 8-pointed star */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-6 h-px bg-amber-600"></div>
                  <div className="absolute w-px h-6 bg-amber-600"></div>
                  <div className="absolute w-4 h-px bg-amber-600 transform rotate-45"></div>
                  <div className="absolute w-4 h-px bg-amber-600 transform -rotate-45"></div>
                </div>
              </div>
            </div>
            <div className="w-16 h-px bg-amber-600"></div>
          </div>
        </div>

        {/* Two column content - narrower */}
        <div className="grid grid-cols-2 gap-10 max-w-4xl mx-auto">
          {/* Left column */}
          <div className="space-y-6">
            <div>
              <h2 className="text-lg font-semibold text-gray-800 mb-3 tracking-wide">BABYLONIAN ASTROLOGY</h2>
              <p className="text-sm text-gray-600 mb-2">(C. 1800 BCE)</p>
              <p className="text-sm leading-relaxed text-gray-700">
                Babylonian astrology is considered one of the earliest forms of astrology. It originated in Mesopotamia, where the Babylonians developed a sophisticated system that included the division of the sky into 12 sections, corresponding to the zodiac signs we know today. They used astrology primarily for divinatory purposes and to predict celestial events.
              </p>
            </div>
          </div>

          {/* Right column */}
          <div className="space-y-6">
            <div>
              <h2 className="text-lg font-semibold text-gray-800 mb-3 tracking-wide">EGYPTIAN ASTROLOGY</h2>
              <p className="text-sm text-gray-600 mb-2">(C. 4000 BCE - 1ST CENTURY BCE)</p>
              <p className="text-sm leading-relaxed text-gray-700">
                The ancient Egyptians contributed to astrology's evolution by integrating their beliefs in gods and the afterlife. They used a system based on decans, which were 36 groups of stars, used to mark the hours of the night and determine the most favorable times for rituals and events. The Dendera Zodiac, a famous bas-relief from the 1st century BCE, reflects the sophistication of Egyptian astronomical knowledge.
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
