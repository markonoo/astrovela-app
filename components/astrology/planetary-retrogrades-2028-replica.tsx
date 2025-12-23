import React from "react"

interface PlanetaryRetrogrades2028ReplicaProps {
  pageNumber: number
}

export function PlanetaryRetrogrades2028Replica({ pageNumber }: PlanetaryRetrogrades2028ReplicaProps) {
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
          <div className="space-y-2">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-6 h-6 rounded-full border-2 border-gray-400 flex items-center justify-center">
                <span className="text-xs">☿</span>
              </div>
              <h3 className="font-bold text-lg">MERCURY RETROGRADE</h3>
            </div>
            <div className="space-y-2">
              <p className="text-justify">
                <strong>January 24, 2028 to February 14, 2028:</strong><br />
                Entirely in Aquarius
              </p>
              <p className="text-justify">
                <strong>May 21, 2028 to June 14, 2028:</strong><br />
                Entirely in Gemini
              </p>
              <p className="text-justify">
                <strong>September 19, 2028 to October 11, 2028:</strong><br />
                Entirely in Libra
              </p>
            </div>
          </div>

          {/* Venus Retrograde */}
          <div className="space-y-2">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-6 h-6 rounded-full border-2 border-gray-400 flex items-center justify-center">
                <span className="text-xs">♀</span>
              </div>
              <h3 className="font-bold text-lg">VENUS RETROGRADE</h3>
            </div>
            <div className="space-y-2">
              <p className="text-justify">
                <strong>May 10, 2028 to June 2, 2028:</strong><br />
                Entirely in Gemini
              </p>
            </div>
          </div>

          {/* Mars Retrograde */}
          <div className="space-y-2">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-6 h-6 rounded-full border-2 border-gray-400 flex items-center justify-center">
                <span className="text-xs">♂</span>
              </div>
              <h3 className="font-bold text-lg">MARS RETROGRADE</h3>
            </div>
            <div className="space-y-2">
              <p className="text-justify">No Retrograde this year</p>
            </div>
          </div>

          {/* Jupiter Retrograde */}
          <div className="space-y-2">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-6 h-6 rounded-full border-2 border-gray-400 flex items-center justify-center">
                <span className="text-xs">♃</span>
              </div>
              <h3 className="font-bold text-lg">JUPITER RETROGRADE</h3>
            </div>
            <div className="space-y-2">
              <p className="text-justify">
                <strong>January 12, 2028 to May 13, 2028:</strong><br />
                Entirely in Virgo
              </p>
            </div>
          </div>

          {/* Saturn Retrograde */}
          <div className="space-y-2">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-6 h-6 rounded-full border-2 border-gray-400 flex items-center justify-center">
                <span className="text-xs">♄</span>
              </div>
              <h3 className="font-bold text-lg">SATURN RETROGRADE</h3>
            </div>
            <div className="space-y-2">
              <p className="text-justify">
                <strong>August 22, 2028 to January 5, 2029:</strong><br />
                Entirely in Taurus
              </p>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Uranus Retrograde */}
          <div className="space-y-2">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-6 h-6 rounded-full border-2 border-gray-400 flex items-center justify-center">
                <span className="text-xs">♅</span>
              </div>
              <h3 className="font-bold text-lg">URANUS RETROGRADE</h3>
            </div>
            <div className="space-y-2">
              <p className="text-justify">
                <strong>September 15, 2027 to February 12, 2028:</strong><br />
                Entirely in Gemini
              </p>
              <p className="text-justify">
                <strong>September 19, 2028 to February 16, 2029:</strong><br />
                Entirely in Gemini
              </p>
            </div>
          </div>

          {/* Neptune Retrograde */}
          <div className="space-y-2">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-6 h-6 rounded-full border-2 border-gray-400 flex items-center justify-center">
                <span className="text-xs">♆</span>
              </div>
              <h3 className="font-bold text-lg">NEPTUNE RETROGRADE</h3>
            </div>
            <div className="space-y-2">
              <p className="text-justify">
                <strong>July 11, 2028 to December 16, 2028:</strong><br />
                Entirely in Aries
              </p>
            </div>
          </div>

          {/* Pluto Retrograde */}
          <div className="space-y-2">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-6 h-6 rounded-full border-2 border-gray-400 flex items-center justify-center">
                <span className="text-xs">♇</span>
              </div>
              <h3 className="font-bold text-lg">PLUTO RETROGRADE</h3>
            </div>
            <div className="space-y-2">
              <p className="text-justify">
                <strong>May 9, 2028 to October 19, 2028:</strong><br />
                Entirely in Aquarius
              </p>
            </div>
          </div>

          {/* Chiron Retrograde */}
          <div className="space-y-2">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-6 h-6 rounded-full border-2 border-gray-400 flex items-center justify-center">
                <span className="text-xs">⚷</span>
              </div>
              <h3 className="font-bold text-lg">CHIRON RETROGRADE</h3>
            </div>
            <div className="space-y-2">
              <p className="text-justify">
                <strong>August 8, 2027 to January 10, 2028:</strong><br />
                Entirely In Taurus
              </p>
              <p className="text-justify">
                <strong>August 11, 2028 to January 13, 2029:</strong><br />
                Entirely in Taurus
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
