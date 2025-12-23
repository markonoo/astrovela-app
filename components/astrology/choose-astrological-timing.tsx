import React from "react"

interface ChooseAstrologicalTimingProps {
  pageNumber: number
}

export function ChooseAstrologicalTiming({ pageNumber }: ChooseAstrologicalTimingProps) {
  return (
    <div className="h-full bg-gradient-to-br from-amber-200 via-stone-300 to-amber-300 text-gray-800 flex flex-col flex-1 relative">
      <div className="px-12 py-10">
        {/* Ornate Frame with Number 3 */}
        <div className="relative max-w-2xl mx-auto mb-12">
          {/* Top crescent moon decoration */}
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
            <svg viewBox="0 0 60 40" className="w-16 h-10 text-amber-700" fill="currentColor">
              <path d="M30 10 C25 15, 25 25, 30 30 C35 25, 35 15, 30 10" fill="none" stroke="currentColor" strokeWidth="1.5"/>
            </svg>
          </div>

          <div className="border-2 border-amber-700/60 rounded-2xl p-8 bg-amber-100/30 relative">
            {/* Corner decorations */}
            <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-amber-700"></div>
            <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-amber-700"></div>
            <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-amber-700"></div>
            <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-amber-700"></div>

            {/* Large Number 3 */}
            <div className="text-8xl font-light text-amber-700/30 text-center mb-4">3</div>

            <h2 className="text-center text-base font-bold text-gray-800 mb-4 tracking-wide">
              CHOOSE THE RIGHT<br />ASTROLOGICAL TIMING
            </h2>

            <p className="text-sm leading-relaxed text-gray-800 text-center">
              The creation of crystal elixirs demands careful timing to maximize their energetic potential. The significance of timing lies in aligning with celestial energies and personal intentions.
            </p>
          </div>

          {/* Bottom moon decoration */}
          <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
            <svg viewBox="0 0 40 20" className="w-10 h-5 text-amber-700" fill="currentColor">
              <path d="M20 5 C18 8, 18 12, 20 15 C22 12, 22 8, 20 5" fill="currentColor"/>
            </svg>
          </div>
        </div>

        {/* Lunar Phases Section */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-center text-base font-bold text-gray-800 mb-8 tracking-wider">
            LUNAR PHASES
          </h3>

          <p className="text-sm text-gray-800 text-center mb-8">
            The moon exerts a powerful influence on the Earth, affecting everything from the tides to human emotions. Each phase of the moon offers unique energies that can enhance the properties of crystal elixirs:
          </p>

          {/* Lunar Phases Grid */}
          <div className="grid grid-cols-2 gap-6">
            {/* New Moon */}
            <div className="text-center">
              <div className="mb-3">
                <svg viewBox="0 0 60 60" className="w-12 h-12 mx-auto">
                  <circle cx="30" cy="30" r="20" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-800"/>
                </svg>
              </div>
              <h4 className="text-sm font-bold text-gray-800 mb-2 tracking-wide">NEW MOON</h4>
              <p className="text-xs leading-relaxed text-gray-800">
                This phase represents beginnings and is ideal for creating elixirs intended to foster new ventures or start fresh chapters in life. Elixirs made during the new moon can help set intentions and plant seeds for future growth.
              </p>
            </div>

            {/* Waxing Moon */}
            <div className="text-center">
              <div className="mb-3">
                <svg viewBox="0 0 60 60" className="w-12 h-12 mx-auto">
                  <path d="M30 10 A20 20 0 0 1 30 50 A20 20 0 0 0 30 10" fill="currentColor" className="text-gray-800"/>
                </svg>
              </div>
              <h4 className="text-sm font-bold text-gray-800 mb-2 tracking-wide">WAXING MOON</h4>
              <p className="text-xs leading-relaxed text-gray-800">
                As the moon grows fuller, it symbolizes growth and accumulation. This is a perfect time for elixirs aimed at increasing things like wealth, health, or love.
              </p>
            </div>

            {/* Full Moon */}
            <div className="text-center">
              <div className="mb-3">
                <svg viewBox="0 0 60 60" className="w-12 h-12 mx-auto">
                  <circle cx="30" cy="30" r="20" fill="currentColor" className="text-gray-800"/>
                </svg>
              </div>
              <h4 className="text-sm font-bold text-gray-800 mb-2 tracking-wide">FULL MOON</h4>
              <p className="text-xs leading-relaxed text-gray-800">
                The full moon's energy is potent and ideal for charging crystals. Elixirs prepared during the full moon benefit from heightened clarity and intensity, making this the optimal time for creating elixirs that require strong, transformative energies.
              </p>
            </div>

            {/* Waning Moon */}
            <div className="text-center">
              <div className="mb-3">
                <svg viewBox="0 0 60 60" className="w-12 h-12 mx-auto">
                  <path d="M30 10 A20 20 0 0 0 30 50 A20 20 0 0 1 30 10" fill="currentColor" className="text-gray-800"/>
                </svg>
              </div>
              <h4 className="text-sm font-bold text-gray-800 mb-2 tracking-wide">WANING MOON</h4>
              <p className="text-xs leading-relaxed text-gray-800">
                During the waning phase, the moon's light diminishes, which is symbolic of release and letting go. Elixirs made during this time can support detoxification, the release of negative emotions, or the ending of undesirable patterns.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Page number */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-gray-700 text-lg">
        {pageNumber}
      </div>
    </div>
  )
}
