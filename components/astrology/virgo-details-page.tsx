import React from "react"

interface VirgoDetailsPageProps {
  pageNumber: number
}

export function VirgoDetailsPage({ pageNumber }: VirgoDetailsPageProps) {
  return (
    <div className="h-full bg-[#F5F1E8] text-gray-800 flex flex-col flex-1 relative overflow-hidden">
      {/* Virgo Constellation Image */}
      <div className="flex justify-center mt-6 mb-3">
        <img 
          src="/constellations/virgo-constellation.png" 
          alt="Virgo Constellation" 
          className="w-[196px] h-[52px] object-contain"
        />
      </div>

      {/* Title */}
      <div className="text-center mb-4">
        <h1 className="text-7xl md:text-8xl font-light tracking-[0.15em] font-serif text-gray-800 mb-2">VIRGO</h1>
        <p className="text-sm tracking-wider text-gray-600 text-center">(AUGUST 23 – SEPTEMBER 22)</p>
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
              FUNDAMENTAL<br />TRAITS OF VIRGO
            </h2>

            <div className="space-y-2 text-sm">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <h3 className="text-sm font-semibold text-gray-800 mb-0.5">DUALITY:</h3>
                  <p className="text-sm text-gray-600">Feminine</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-800 mb-0.5">ELEMENT:</h3>
                  <p className="text-sm text-gray-600">Earth</p>
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
                      Representing a maiden carrying a sheaf of wheat, the symbol signifies Virgo's connection to harvest, symbolizing productivity and the reaping of rewards through hard work.
                    </p>
                  </div>
                  <div className="flex flex-col items-center">
                    <h3 className="text-sm font-semibold text-gray-800 mb-0.5">SYMBOL:</h3>
                    <div className="text-sm text-gray-600">The Virgin</div>
                    <svg viewBox="0 0 40 40" className="w-7 h-7 text-amber-600 mt-1">
                      <circle cx="20" cy="16" r="4" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                      <path d="M20 20 L20 28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                      <path d="M16 12 Q14 10 16 8" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                      <path d="M24 12 Q26 10 24 8" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                      <path d="M16 28 L20 28 L24 28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="border-t border-amber-200/40 pt-2">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <h3 className="text-sm font-semibold text-gray-800 mb-0.5">RULING PLANET:</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Mercury. The planet of communication and intellect influences Virgos to be thoughtful and detail-oriented in their thoughts and expressions.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-800 mb-0.5">DOMINANT KEYWORD:</h3>
                    <p className="text-sm text-gray-600">"I Analyze"</p>
                  </div>
                </div>
              </div>

              <div className="border-t border-amber-200/40 pt-2">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <h3 className="text-sm font-semibold text-gray-800 mb-0.5">LUCKY NUMBER:</h3>
                    <p className="text-sm text-gray-600">
                      5, 14, and any combination.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-800 mb-0.5 text-right">BODY PART RULED:</h3>
                    <p className="text-sm text-gray-600 text-right">Digestive system</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right column - Description - no scroll, consistent font size */}
        <div className="space-y-4 flex flex-col">
          <p className="text-sm leading-relaxed text-gray-700">
            Virgos are deeply compassionate, offering service to others as a key aspect of their personality. They are modest and humble, often working quietly behind the scenes to support and improve situations. However, their perfectionist tendencies can lead to self-criticism and a focus on minor flaws. Virgos find joy in organization and purity, seeking to bring order to chaos.
          </p>

          <p className="text-sm leading-relaxed text-gray-700">
            Virgo portrays consciousness, intelligence, and a constant need for improvement. Governed by a deep sense of duty, those born under the Virgo sun sign navigate life with precision and practicality.
          </p>

          {/* Compatibility box */}
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
