import React from "react"

interface CancerDetailsPageProps {
  pageNumber: number
}

export function CancerDetailsPage({ pageNumber }: CancerDetailsPageProps) {
  return (
    <div className="h-full bg-[#F5F1E8] text-gray-800 flex flex-col flex-1 relative overflow-hidden">
      {/* Cancer Constellation Image */}
      <div className="flex justify-center mt-6 mb-3">
        <img 
          src="/constellations/cancer-constellation.png" 
          alt="Cancer Constellation" 
          className="w-[196px] h-[52px] object-contain"
        />
      </div>

      {/* Title */}
      <div className="text-center mb-4">
        <h1 className="text-7xl md:text-8xl font-light tracking-[0.15em] font-serif text-gray-800 mb-2">CANCER</h1>
        <p className="text-sm tracking-wider text-gray-600 text-center">(JUNE 21 – JULY 22)</p>
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
              FUNDAMENTAL<br />TRAITS OF CANCER
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
                  <p className="text-sm text-gray-600">Cardinal</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-800 mb-0.5">LUCKY DAY:</h3>
                  <p className="text-sm text-gray-600">Monday</p>
                </div>
              </div>

              <div className="border-t border-amber-200/40 pt-2">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <h3 className="text-sm font-semibold text-gray-800 mb-0.5">WRITTEN SYMBOL:</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      The symbol represents the crab's claws, signifying Cancer's ability to hold onto what they cherish.
                    </p>
                  </div>
                  <div className="flex flex-col items-center">
                    <h3 className="text-sm font-semibold text-gray-800 mb-0.5">SYMBOL:</h3>
                    <div className="text-sm text-gray-600">The Crab</div>
                    <svg viewBox="0 0 40 40" className="w-7 h-7 text-amber-600 mt-1">
                      <ellipse cx="20" cy="20" rx="8" ry="6" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                      <path d="M12 16 Q8 14 6 16 Q8 18 12 16" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                      <path d="M28 16 Q32 14 34 16 Q32 18 28 16" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="border-t border-amber-200/40 pt-2">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <h3 className="text-sm font-semibold text-gray-800 mb-0.5">RULING PLANET:</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Moon. The Moon phases influence Cancer and reflect their fluctuating moods and deep connection to feelings and comfort.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-800 mb-0.5">DOMINANT KEYWORD:</h3>
                    <p className="text-sm text-gray-600">"I Feel"</p>
                  </div>
                </div>
              </div>

              <div className="border-t border-amber-200/40 pt-2">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <h3 className="text-sm font-semibold text-gray-800 mb-0.5">LUCKY NUMBER:</h3>
                    <p className="text-sm text-gray-600">
                      2, 3, and any combination of them.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-800 mb-0.5 text-right">BODY PART RULED:</h3>
                    <p className="text-sm text-gray-600 text-right">Chest, breasts, and stomach.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right column - Description - no scroll, consistent font size */}
        <div className="space-y-4 flex flex-col">
          <p className="text-sm leading-relaxed text-gray-700">
            Cancers are protective of their loved ones and can be incredibly nurturing, offering warmth and comfort. Their intuition is their guiding force, often understanding the emotional undercurrents of situations without the need for words. However, their sensitivity can lead them to be overly protective or moody, as they internalize the emotions and energies around them. Cancers value security and comfort, creating cozy, safe spaces that serve as their sanctuary from the outside world.
          </p>

          <p className="text-sm leading-relaxed text-gray-700">
            Cancers pay more attention to emotions and represent the nurturing essence and the depth of feelings. Known for their empathy, intuition, and protective instincts, those born under the Cancer sun sign navigate life through their hearts and closely held bonds.
          </p>

          {/* Compatibility box */}
          <div className="bg-white/60 backdrop-blur-sm border border-amber-200/40 rounded-lg shadow-sm p-2.5 mt-auto">
            <h3 className="text-sm font-semibold text-gray-800 mb-1.5 text-center">BEST COMPATIBLE WITH:</h3>
            <p className="text-sm text-gray-600 text-center">Taurus, Virgo, Scorpio, Pisces</p>
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
