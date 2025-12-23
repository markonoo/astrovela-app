import React from "react"

interface PlanetaryRetrogrades2025ReplicaProps {
  pageNumber: number
}

export function PlanetaryRetrogrades2025Replica({ pageNumber }: PlanetaryRetrogrades2025ReplicaProps) {
  return (
    <div className="h-full bg-stone-100 text-gray-800 flex flex-col flex-1 relative px-10 py-10">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-serif font-normal tracking-wider mb-6">PLANETARY<br />RETROGRADES</h1>
      </div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-2 gap-x-12 text-sm leading-relaxed flex-1">
        {/* Left Column */}
        <div className="space-y-6">
          {/* Mercury Retrograde */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-6 h-6 rounded-full border-2 border-gray-400 flex items-center justify-center">
                <span className="text-xs">☿</span>
              </div>
              <h3 className="font-bold text-lg">MERCURY RETROGRADE</h3>
            </div>
            <div className="space-y-2">
              <p className="text-justify">
                <strong>March 15, 2025 to April 7, 2025:</strong><br />
                Begins in Aries, ends in Pisces
              </p>
              <p className="text-justify">
                <strong>July 18, 2025 to August 11, 2025:</strong><br />
                Entirely in Leo
              </p>
              <p className="text-justify">
                <strong>November 9, 2025 to November 29, 2025:</strong><br />
                Starts in Sagittarius, ends in Scorpio
              </p>
            </div>
          </div>

          {/* Venus Retrograde */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-6 h-6 rounded-full border-2 border-gray-400 flex items-center justify-center">
                <span className="text-xs">♀</span>
              </div>
              <h3 className="font-bold text-lg">VENUS RETROGRADE</h3>
            </div>
            <div className="space-y-2">
              <p className="text-justify">
                <strong>March 2, 2025 to April 13, 2025:</strong><br />
                Begins in Aries, ends in Pisces
              </p>
            </div>
          </div>

          {/* Mars Retrograde */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-6 h-6 rounded-full border-2 border-gray-400 flex items-center justify-center">
                <span className="text-xs">♂</span>
              </div>
              <h3 className="font-bold text-lg">MARS RETROGRADE</h3>
            </div>
            <div className="space-y-2">
              <p className="text-justify">
                <strong>December 6, 2024 to Feb 24, 2025:</strong><br />
                Begins in Leo, ends in Cancer
              </p>
            </div>
          </div>

          {/* Jupiter Retrograde */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-6 h-6 rounded-full border-2 border-gray-400 flex items-center justify-center">
                <span className="text-xs">♃</span>
              </div>
              <h3 className="font-bold text-lg">JUPITER RETROGRADE</h3>
            </div>
            <div className="space-y-2">
              <p className="text-justify">
                <strong>October 9, 2024 to February 4, 2025:</strong><br />
                Entirely in Gemini
              </p>
              <p className="text-justify">
                <strong>November 11, 2025 to March 11, 2026:</strong><br />
                Entirely in Cancer
              </p>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Saturn Retrograde */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-6 h-6 rounded-full border-2 border-gray-400 flex items-center justify-center">
                <span className="text-xs">♄</span>
              </div>
              <h3 className="font-bold text-lg">SATURN RETROGRADE</h3>
            </div>
            <div className="space-y-2">
              <p className="text-justify">
                <strong>July 13, 2025 to November 28, 2025:</strong><br />
                Begins in Aries, ends in Pisces
              </p>
            </div>
          </div>

          {/* Uranus Retrograde */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-6 h-6 rounded-full border-2 border-gray-400 flex items-center justify-center">
                <span className="text-xs">♅</span>
              </div>
              <h3 className="font-bold text-lg">URANUS RETROGRADE</h3>
            </div>
            <div className="space-y-2">
              <p className="text-justify">
                <strong>September 1, 2024 to January 30, 2025:</strong><br />
                Entirely in Taurus
              </p>
              <p className="text-justify">
                <strong>September 6, 2025 to February 4, 2026:</strong><br />
                Begins in Gemini, ends in Taurus
              </p>
            </div>
          </div>

          {/* Neptune Retrograde */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-6 h-6 rounded-full border-2 border-gray-400 flex items-center justify-center">
                <span className="text-xs">♆</span>
              </div>
              <h3 className="font-bold text-lg">NEPTUNE RETROGRADE</h3>
            </div>
            <div className="space-y-2">
              <p className="text-justify">
                <strong>July 4, 2025 to December 10, 2025:</strong><br />
                Begins in Aries, ends in Pisces
              </p>
            </div>
          </div>

          {/* Pluto Retrograde */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-6 h-6 rounded-full border-2 border-gray-400 flex items-center justify-center">
                <span className="text-xs">♇</span>
              </div>
              <h3 className="font-bold text-lg">PLUTO RETROGRADE</h3>
            </div>
            <div className="space-y-2">
              <p className="text-justify">
                <strong>May 4, 2025 to October 14, 2025:</strong><br />
                Entirely in Aquarius
              </p>
            </div>
          </div>

          {/* Chiron Retrograde */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-6 h-6 rounded-full border-2 border-gray-400 flex items-center justify-center">
                <span className="text-xs">⚷</span>
              </div>
              <h3 className="font-bold text-lg">CHIRON RETROGRADE</h3>
            </div>
            <div className="space-y-2">
              <p className="text-justify">
                <strong>July 30, 2025 to January 2, 2026:</strong><br />
                Entirely in Aries
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Page number */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-gray-600 text-lg">
        {pageNumber}
      </div>
    </div>
  )
}
