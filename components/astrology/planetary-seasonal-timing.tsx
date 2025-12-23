import React from "react"

interface PlanetarySeasonalTimingProps {
  pageNumber: number
}

export function PlanetarySeasonalTiming({ pageNumber }: PlanetarySeasonalTimingProps) {
  return (
    <div className="h-full bg-gradient-to-br from-amber-200 via-stone-300 to-amber-300 text-gray-800 flex flex-col flex-1 relative">
      <div className="px-12 py-8">
        <div className="grid grid-cols-2 gap-10 max-w-6xl mx-auto">
          {/* Left Column - Planetary Hours */}
          <div>
            <h2 className="text-base font-bold text-gray-800 mb-6 tracking-wider">
              PLANETARY HOURS<br />& THEIR INFLUENCE
            </h2>
            
            <p className="text-sm leading-relaxed text-gray-800 mb-6">
              Incorporating planetary hours into the timing of elixir creation can align the elixir with specific planetary energies, each offering distinct benefits:
            </p>

            <div className="space-y-4">
              {/* Sun Hours */}
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <svg viewBox="0 0 30 30" className="w-8 h-8 text-amber-700">
                    <circle cx="15" cy="15" r="8" fill="none" stroke="currentColor" strokeWidth="1.5"/>
                    <circle cx="15" cy="15" r="3" fill="currentColor"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-gray-800 mb-1">SUN HOURS</h3>
                  <p className="text-xs leading-relaxed text-gray-800">
                    Ideal for elixirs that promote vitality, leadership, and success.
                  </p>
                </div>
              </div>

              {/* Moon Hours */}
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <svg viewBox="0 0 30 30" className="w-8 h-8 text-amber-700">
                    <path d="M15 5 C10 8, 10 22, 15 25 C20 22, 20 8, 15 5" fill="none" stroke="currentColor" strokeWidth="1.5"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-gray-800 mb-1">MOON HOURS</h3>
                  <p className="text-xs leading-relaxed text-gray-800">
                    Best for elixirs that enhance emotional balance, intuition, and healing.
                  </p>
                </div>
              </div>

              {/* Mercury Hours */}
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <svg viewBox="0 0 30 30" className="w-8 h-8 text-amber-700">
                    <circle cx="15" cy="12" r="5" fill="none" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M15 17 L15 25 M10 22 L20 22" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-gray-800 mb-1">MERCURY HOURS</h3>
                  <p className="text-xs leading-relaxed text-gray-800">
                    Suitable for elixirs intended to improve communication, intellect, and travel.
                  </p>
                </div>
              </div>

              {/* Venus Hours */}
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <svg viewBox="0 0 30 30" className="w-8 h-8 text-amber-700">
                    <circle cx="15" cy="10" r="5" fill="none" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M15 15 L15 25 M10 20 L20 20" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-gray-800 mb-1">VENUS HOURS</h3>
                  <p className="text-xs leading-relaxed text-gray-800">
                    Perfect for love, friendship, and artistic expression elixirs.
                  </p>
                </div>
              </div>

              {/* Mars Hours */}
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <svg viewBox="0 0 30 30" className="w-8 h-8 text-amber-700">
                    <circle cx="12" cy="15" r="5" fill="none" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M17 10 L25 2 M20 2 L25 2 L25 7" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-gray-800 mb-1">MARS HOURS</h3>
                  <p className="text-xs leading-relaxed text-gray-800">
                    Optimal for elixirs that encourage strength, courage, and protection.
                  </p>
                </div>
              </div>

              {/* Jupiter Hours */}
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <svg viewBox="0 0 30 30" className="w-8 h-8 text-amber-700">
                    <path d="M8 8 L8 22 M8 15 L18 15 C20 15, 20 8, 18 8 L8 8" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-gray-800 mb-1">JUPITER HOURS</h3>
                  <p className="text-xs leading-relaxed text-gray-800">
                    Great for elixirs aiming to increase luck, prosperity, and spiritual growth.
                  </p>
                </div>
              </div>

              {/* Saturn Hours */}
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <svg viewBox="0 0 30 30" className="w-8 h-8 text-amber-700">
                    <path d="M15 8 C12 8, 10 10, 10 12 C10 18, 20 18, 20 12 C20 10, 18 8, 15 8 M5 15 L25 15" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-gray-800 mb-1">SATURN HOURS</h3>
                  <p className="text-xs leading-relaxed text-gray-800">
                    Ideal for elixirs that provide structure, discipline, and grounding.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Seasonal Considerations */}
          <div>
            <h2 className="text-base font-bold text-gray-800 mb-6 tracking-wider">
              SEASONAL<br />CONSIDERATIONS
            </h2>
            
            <p className="text-sm leading-relaxed text-gray-800 mb-6">
              Seasons also play a crucial role in the creation of elixirs. Each season corresponds to different elements and energies, which can be harnessed to enhance the effectiveness of elixirs:
            </p>

            <div className="space-y-5">
              {/* Spring */}
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <svg viewBox="0 0 30 30" className="w-8 h-8 text-amber-700">
                    <path d="M15 25 L15 10 M10 15 Q15 10, 20 15" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-gray-800 mb-1">SPRING</h3>
                  <p className="text-xs leading-relaxed text-gray-800">
                    A time of renewal and growth, perfect for elixirs that aim to spark creativity or initiate new projects.
                  </p>
                </div>
              </div>

              {/* Summer */}
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <svg viewBox="0 0 30 30" className="w-8 h-8 text-amber-700">
                    <circle cx="15" cy="15" r="5" fill="none" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M15 5 L15 8 M15 22 L15 25 M5 15 L8 15 M22 15 L25 15 M8 8 L10 10 M20 20 L22 22 M8 22 L10 20 M20 10 L22 8" stroke="currentColor" strokeWidth="1.5"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-gray-800 mb-1">SUMMER</h3>
                  <p className="text-xs leading-relaxed text-gray-800">
                    With its association with fire and energy, summer is ideal for elixirs that boost passion, joy, and strength.
                  </p>
                </div>
              </div>

              {/* Autumn */}
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <svg viewBox="0 0 30 30" className="w-8 h-8 text-amber-700">
                    <path d="M15 5 C10 10, 12 15, 15 20 C18 15, 20 10, 15 5 M10 18 L20 22" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-gray-800 mb-1">AUTUMN</h3>
                  <p className="text-xs leading-relaxed text-gray-800">
                    Reflects a time of harvest and reflection, suitable for elixirs that focus on abundance and gratitude.
                  </p>
                </div>
              </div>

              {/* Winter */}
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <svg viewBox="0 0 30 30" className="w-8 h-8 text-amber-700">
                    <path d="M15 5 L15 25 M5 15 L25 15 M8 8 L22 22 M22 8 L8 22" stroke="currentColor" strokeWidth="1.5"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-gray-800 mb-1">WINTER</h3>
                  <p className="text-xs leading-relaxed text-gray-800">
                    A period of rest and introspection, winter is favorable for elixirs that encourage inner peace, clarity, and spiritual insight.
                  </p>
                </div>
              </div>
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
