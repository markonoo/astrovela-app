import React from "react"

interface GeminiDetailsPageProps {
  pageNumber: number
}

export function GeminiDetailsPage({ pageNumber }: GeminiDetailsPageProps) {
  return (
    <div className="h-full bg-[#F5F1E8] text-gray-800 flex flex-col flex-1 relative overflow-hidden">
      {/* Gemini Constellation Image */}
      <div className="flex justify-center mt-6 mb-3">
        <img 
          src="/constellations/gemini-constellation.png" 
          alt="Gemini Constellation" 
          className="w-[196px] h-[52px] object-contain"
        />
      </div>

      {/* Title */}
      <div className="text-center mb-4">
        <h1 className="text-7xl md:text-8xl font-light tracking-[0.15em] font-serif text-gray-800 mb-2">GEMINI</h1>
        <p className="text-sm tracking-wider text-gray-600 text-center">(MAY 21 – JUNE 20)</p>
      </div>

      {/* Main content grid */}
      <div className="flex-1 px-8 grid grid-cols-2 gap-8 pb-12 overflow-hidden">
        {/* Left column - Fundamental Traits - longer box, no scroll, consistent fonts */}
        <div className="bg-white/60 backdrop-blur-sm border border-amber-200/40 rounded-lg shadow-sm p-2.5 flex flex-col">
          {/* Decorative corners */}
          <div className="relative">
            <div className="absolute -top-3 -left-3 w-4 h-4">
              <svg viewBox="0 0 16 16" className="w-full h-full text-amber-600">
                <path d="M0 8 L8 0 L8 4 L4 4 L4 8 Z" fill="currentColor"/>
              </svg>
            </div>
            <div className="absolute -top-3 -right-3 w-4 h-4">
              <svg viewBox="0 0 16 16" className="w-full h-full text-amber-600">
                <path d="M16 8 L8 0 L8 4 L12 4 L12 8 Z" fill="currentColor"/>
              </svg>
            </div>
            <div className="absolute -bottom-3 -left-3 w-4 h-4">
              <svg viewBox="0 0 16 16" className="w-full h-full text-amber-600">
                <path d="M0 8 L8 16 L8 12 L4 12 L4 8 Z" fill="currentColor"/>
              </svg>
            </div>
            <div className="absolute -bottom-3 -right-3 w-4 h-4">
              <svg viewBox="0 0 16 16" className="w-full h-full text-amber-600">
                <path d="M16 8 L8 16 L8 12 L12 12 L12 8 Z" fill="currentColor"/>
              </svg>
            </div>

            <h2 className="text-sm font-semibold text-center text-gray-800 mb-3 tracking-wide">
              FUNDAMENTAL<br />TRAITS OF GEMINI
            </h2>

            <div className="space-y-2 text-sm">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <h3 className="text-sm font-semibold text-gray-800 mb-0.5">DUALITY:</h3>
                  <p className="text-sm text-gray-600">Masculine</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-800 mb-0.5">ELEMENT:</h3>
                  <p className="text-sm text-gray-600">Air</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <h3 className="text-sm font-semibold text-gray-800 mb-0.5">QUALITY:</h3>
                  <p className="text-sm text-gray-600">Mutable</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-800 mb-0.5">LUCKY DAY:</h3>
                  <p className="text-sm text-gray-600">Wednesday</p>
                </div>
              </div>

              <div className="border-t border-amber-200/40 pt-2">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <h3 className="text-sm font-semibold text-gray-800 mb-0.5">WRITTEN SYMBOL:</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      By representing two pillars united at the top and base, it signifies the connection and communication between dual entities.
                    </p>
                  </div>
                  <div className="flex flex-col items-center">
                    <h3 className="text-sm font-semibold text-gray-800 mb-0.5">SYMBOL:</h3>
                    <div className="text-sm text-gray-600">The Twins</div>
                    <svg viewBox="0 0 40 40" className="w-7 h-7 text-amber-600 mt-1">
                      <path d="M12 12 L12 28 M28 12 L28 28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                      <path d="M8 12 L16 12 M24 12 L32 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                      <path d="M8 28 L16 28 M24 28 L32 28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="border-t border-amber-200/40 pt-2">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <h3 className="text-sm font-semibold text-gray-800 mb-0.5">RULING PLANET:</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Mercury. The planet of communication influences Gemini to be curious, expressive, and skilled in expressing their thoughts and ideas.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-800 mb-0.5">DOMINANT KEYWORD:</h3>
                    <p className="text-sm text-gray-600">"I Think"</p>
                  </div>
                </div>
              </div>

              <div className="border-t border-amber-200/40 pt-2">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <h3 className="text-sm font-semibold text-gray-800 mb-0.5">LUCKY NUMBER:</h3>
                    <p className="text-sm text-gray-600">
                      5, 7, and any combination of them
                    </p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-800 mb-0.5 text-right">BODY PART RULED:</h3>
                    <p className="text-sm text-gray-600 text-right">Arms, shoulders, hands, and lungs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right column - Description - no scroll, consistent font size */}
        <div className="space-y-4 flex flex-col">
          <p className="text-sm leading-relaxed text-gray-700">
            Gemini, an air sign symbolized by the celestial twins, embodies dual aspects of personality, offering a mix of yin and yang energy. This sign is characterized by its vibrant, dynamic, and communicative nature. Geminis are curious and intellectual, with a constant thirst for knowledge and experiences. Their ability to exchange ideas and indulge in conversations makes them excellent communicators and friends. However, their dual nature can sometimes lead to indecisiveness and inconsistency, as they attempt to explore multiple interests simultaneously. Geminis are adaptable and outgoing, often thriving in fast-paced, varied environments. Their wit and humor, combined with their intellectual curiosity, make them fascinating and lively companions.
          </p>

          <p className="text-sm leading-relaxed text-gray-700">
            Gemini represents the dual nature and inherent versatility of those born under this sign. They navigate life through communication and are also known for their wit, intellect, and dynamic personalities.
          </p>

          {/* Compatibility box */}
          <div className="bg-white/60 backdrop-blur-sm border border-amber-200/40 rounded-lg shadow-sm p-2.5 mt-auto">
            <h3 className="text-sm font-semibold text-gray-800 mb-1.5 text-center">BEST COMPATIBLE WITH:</h3>
            <p className="text-sm text-gray-600 text-center">Aries, Leo, Libra, Aquarius</p>
            <div className="flex justify-center mt-1.5">
              <svg viewBox="0 0 24 24" className="w-6 h-6 text-amber-600">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Page number */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
        <div className="text-gray-600 text-lg font-light">{pageNumber}</div>
      </div>
    </div>
  )
}
