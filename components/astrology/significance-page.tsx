import React from "react"

interface SignificancePageProps {
  pageNumber: number
}

export function SignificancePage({ pageNumber }: SignificancePageProps) {
  return (
    <div className="h-full bg-gradient-to-br from-stone-100 to-stone-200 text-gray-800 flex flex-col justify-center relative">
      {/* Title section - narrower */}
      <div className="mb-8 px-16">
        <div className="flex items-start gap-6 max-w-4xl mx-auto">
          <div className="text-7xl font-serif text-amber-600 leading-none mt-1 select-none">4</div>
          <div className="flex-1">
            <h1 className="text-3xl font-light tracking-wider text-gray-800 mb-4">
              THE<br />SIGNIFICANCE
            </h1>
          </div>
        </div>
      </div>

      {/* Content - narrower */}
      <div className="px-16 pb-4">
        <div className="max-w-3xl mx-auto space-y-6">
          <p className="text-base leading-relaxed text-gray-700">
            Each zodiac sign is ruled by a specific planet, which greatly influences the sign's characteristics and energy. The planetary ruler adds another layer of depth to the sign's traits, coloring its expression with the planet's symbolic qualities.
          </p>

          <p className="text-base leading-relaxed text-gray-700">
            Zodiac signs also play a crucial role in the astrological houses, with each house associated with a specific area of life. The sign that governs a house in a natal chart further defines how the energies of that house are expressed in an individual's life.
          </p>

          {/* Decorative divider with star */}
          <div className="flex items-center justify-center my-8">
            <div className="flex items-center">
              <div className="w-16 h-px bg-amber-600"></div>
              <div className="mx-6 relative">
                <div className="w-6 h-6 relative">
                  {/* 8-pointed star */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-6 h-px bg-amber-600"></div>
                    <div className="absolute w-px h-6 bg-amber-600"></div>
                    <div className="absolute w-5 h-px bg-amber-600 transform rotate-45"></div>
                    <div className="absolute w-5 h-px bg-amber-600 transform -rotate-45"></div>
                  </div>
                </div>
              </div>
              <div className="w-16 h-px bg-amber-600"></div>
            </div>
          </div>

          {/* Quote */}
          <div className="text-center">
            <p className="text-base leading-relaxed text-gray-700 italic max-w-3xl mx-auto">
              The sign that governs a house in a natal chart further defines how the energies of that house are expressed in an individual's life.
            </p>
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