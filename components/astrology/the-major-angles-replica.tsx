import React from "react"

interface TheMajorAnglesReplicaProps {
  pageNumber: number
}

export function TheMajorAnglesReplica({ pageNumber }: TheMajorAnglesReplicaProps) {
  return (
    <div className="h-full bg-gradient-to-br from-stone-100 to-stone-200 text-gray-800 flex flex-col flex-1 relative px-8 py-6">
      {/* Title - harmonized with page 105 style */}
      <div className="text-center mb-6">
        <h1 className="text-3xl md:text-4xl font-serif font-normal tracking-[0.15em] font-serif text-gray-800">
          THE MAJOR ANGLES
        </h1>
      </div>

      {/* 1. Major Angles - moved above picture */}
      <div className="mb-2">
        <div className="flex items-center mb-1">
          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center mr-2">
            <span className="text-white font-bold text-xs">1</span>
          </div>
          <h3 className="text-xs font-bold text-gray-800 tracking-wide">MAJOR ANGLES</h3>
        </div>
        <p className="text-xs leading-snug text-gray-700 font-medium ml-8">
          The major angles of a birth chart define core aspects of personal identity and life path. 
          The Ascendant reflects your outward persona and approach to life, the Descendant relates to 
          partnerships, the Midheaven indicates career aspirations.
        </p>
      </div>

      {/* Birth Chart Diagram - increased by 50% from 400px to 600px */}
      <div className="flex justify-center mb-2">
        <img 
          src="/birth-chart-angles.png" 
          alt="Birth Chart Diagram showing Major Angles, Zodiac Signs, Houses, Aspects, and Planetary Positions" 
          className="max-w-[600px] max-h-[576px] w-full object-contain"
        />
      </div>

      {/* Numbered sections matching reference bubbles in image */}
      <div className="space-y-1.5">
        {/* Bottom three-column descriptions */}
        <div className="grid grid-cols-3 gap-3">
          {/* 2. Zodiac Sign */}
          <div>
            <div className="flex items-center mb-1">
              <div className="w-5 h-5 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center mr-1.5 flex-shrink-0">
                <span className="text-white font-bold text-[10px]">2</span>
              </div>
              <h3 className="text-[11px] font-bold text-gray-800 tracking-wide">ZODIAC SIGN</h3>
            </div>
            <p className="text-[10px] leading-tight text-gray-700 font-medium">
              The zodiac signs divide the sky into twelve sectors, each associated with unique traits and tendencies.
            </p>
          </div>

          {/* 3. Houses */}
          <div>
            <div className="flex items-center mb-1">
              <div className="w-5 h-5 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center mr-1.5 flex-shrink-0">
                <span className="text-white font-bold text-[10px]">3</span>
              </div>
              <h3 className="text-[11px] font-bold text-gray-800 tracking-wide">HOUSES</h3>
            </div>
            <p className="text-[10px] leading-tight text-gray-700 font-medium">
              The birth chart is divided into 12 houses, each representing different life areas, influenced by signs and planets.
            </p>
          </div>

          {/* 4. Aspects */}
          <div>
            <div className="flex items-center mb-1">
              <div className="w-5 h-5 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center mr-1.5 flex-shrink-0">
                <span className="text-white font-bold text-[10px]">4</span>
              </div>
              <h3 className="text-[11px] font-bold text-gray-800 tracking-wide">ASPECTS</h3>
            </div>
            <p className="text-[10px] leading-tight text-gray-700 font-medium">
              The angles planets form with each other, revealing how these energies work together or challenge one another.
            </p>
          </div>
        </div>

        {/* 5. Planetary Positions */}
        <div className="mt-1.5">
          <div className="flex items-center mb-1">
            <div className="w-5 h-5 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center mr-1.5">
              <span className="text-white font-bold text-[10px]">5</span>
            </div>
            <h3 className="text-[11px] font-bold text-gray-800 tracking-wide">PLANETARY POSITIONS</h3>
          </div>
          <p className="text-[10px] leading-tight text-gray-700 font-medium ml-6">
            Each planet was in a specific sign and house at your birth, influencing various aspects of your life.
          </p>
        </div>
      </div>

      {/* Page number */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
        <div className="text-gray-800 text-sm font-medium">{pageNumber}</div>
      </div>
    </div>
  )
}
