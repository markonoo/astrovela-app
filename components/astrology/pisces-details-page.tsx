import React from "react"

interface PiscesDetailsPageImprovedProps {
  pageNumber: number
}

export function PiscesDetailsPage({ pageNumber }: PiscesDetailsPageImprovedProps) {
  return (
    <div className="h-full bg-[#F5F1E8] text-gray-800 flex flex-col flex-1 relative overflow-hidden">
      {/* Pisces Constellation Image */}
      <div className="flex justify-center mt-6 mb-3">
        <img 
          src="/constellations/pisces-constellation.png" 
          alt="Pisces Constellation" 
          className="w-[196px] h-[52px] object-contain"
        />
      </div>

      <div className="text-center mb-4">
        <h1 className="text-7xl md:text-8xl font-light tracking-[0.15em] font-serif text-gray-800 mb-2">PISCES</h1>
        <p className="text-sm tracking-wider text-gray-600 text-center">(FEBRUARY 19 – MARCH 20)</p>
      </div>

      {/* Main content grid - with max-height to prevent overflow */}
      <div className="flex-1 px-8 grid grid-cols-2 gap-8 pb-12 overflow-hidden">
        {/* Left column - Fundamental Traits Box */}
        <div className="bg-white/60 backdrop-blur-sm border border-amber-200/40 rounded-lg shadow-sm p-2.5 flex flex-col">
          <div className="relative">
            {/* Decorative corners */}
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
              FUNDAMENTAL<br />TRAITS OF PISCES
            </h2>

            <div className="space-y-2 text-sm">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <h3 className="text-sm font-semibold text-gray-800 mb-0.5">DUALITY:</h3>
                  <p className="text-sm text-gray-600">Feminine</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-800 mb-0.5">ELEMENT:</h3>
                  <p className="text-sm text-gray-600">Water</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <h3 className="text-sm font-semibold text-gray-800 mb-0.5">QUALITY:</h3>
                  <p className="text-sm text-gray-600">Mutable</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-800 mb-0.5">LUCKY DAY:</h3>
                  <p className="text-sm text-gray-600">Thursday</p>
                </div>
              </div>

              <div className="border-t border-amber-200/40 pt-2">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <h3 className="text-sm font-semibold text-gray-800 mb-0.5">WRITTEN SYMBOL:</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Representing two fish swimming in opposite directions, it signifies Pisces's duality and the balance between external reality and the inner emotional world.
                    </p>
                  </div>
                  <div className="flex flex-col items-center">
                    <h3 className="text-sm font-semibold text-gray-800 mb-0.5">SYMBOL:</h3>
                    <div className="text-sm text-gray-600">The Fish</div>
                    <svg viewBox="0 0 40 40" className="w-7 h-7 text-amber-600 mt-1">
                      <path d="M8 16 Q12 12 16 16 Q20 20 24 16 Q28 12 32 16" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                      <path d="M8 24 Q12 28 16 24 Q20 20 24 24 Q28 28 32 24" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                      <path d="M20 16 L20 24" stroke="currentColor" strokeWidth="1.5"/>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="border-t border-amber-200/40 pt-2">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <h3 className="text-sm font-semibold text-gray-800 mb-0.5">RULING PLANET:</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Neptune (traditional ruler Jupiter). Neptune represents spirituality, dreams, and illusions, influencing Pisceans to be imaginative, creative, and connected to the divine. Jupiter adds a layer of philosophy, expansion, and the search for meaning.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-800 mb-0.5">DOMINANT KEYWORD:</h3>
                    <p className="text-sm text-gray-600">"I Believe"</p>
                  </div>
                </div>
              </div>

              <div className="border-t border-amber-200/40 pt-2">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <h3 className="text-sm font-semibold text-gray-800 mb-0.5">LUCKY NUMBER:</h3>
                    <p className="text-sm text-gray-600">
                      3, 7 and their combinations.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-800 mb-0.5 text-right">BODY PART RULED:</h3>
                    <p className="text-sm text-gray-600 text-right">Feet, lymphatic system, and immune system</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right column - Description and Compatibility */}
        <div className="space-y-4 flex flex-col">
          <p className="text-sm leading-relaxed text-gray-700">
            Pisces have a rich inner life, filled with dreams and fantasies, which often find expression through creative endeavors. However, their sensitivity can sometimes lead to feelings of vulnerability and a desire to escape reality. Pisces are adaptable and can be the chameleons of the zodiac, reflecting the qualities of those around them. Their empathy and understanding make them deeply connected to the emotional world, offering solace and comfort to those in need.
          </p>

          <p className="text-sm leading-relaxed text-gray-700">
            Pisces symbolizes the culmination of all other signs' experiences, offering wisdom, empathy, and a deep connection. They have an artistic sensibility, intuitive nature, and compassionate demeanor, and navigate life with gentle strength and an open heart.
          </p>

          <div className="bg-white/60 backdrop-blur-sm border border-amber-200/40 rounded-lg shadow-sm p-2.5 mt-auto">
            <h3 className="text-sm font-semibold text-gray-800 mb-1.5 text-center">BEST COMPATIBLE WITH:</h3>
            <p className="text-sm text-gray-600 text-center">Taurus, Cancer, Scorpio, Capricorn</p>
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
