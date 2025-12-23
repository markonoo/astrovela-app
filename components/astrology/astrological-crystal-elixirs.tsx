import React from "react"

interface AstrologicalCrystalElixirsProps {
  pageNumber: number
}

export function AstrologicalCrystalElixirs({ pageNumber }: AstrologicalCrystalElixirsProps) {
  return (
    <div className="h-full bg-gradient-to-br from-amber-200 via-stone-300 to-amber-300 text-gray-800 flex flex-col flex-1 relative">
      <div className="px-12 py-10 flex flex-col justify-center">
        {/* Ornate Frame */}
        <div className="relative max-w-3xl mx-auto">
          {/* Top decorative elements */}
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
            <svg viewBox="0 0 60 40" className="w-16 h-10 text-amber-700" fill="currentColor">
              <circle cx="30" cy="20" r="3"/>
              <path d="M15 15 L20 20 L15 25" fill="none" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M45 15 L40 20 L45 25" fill="none" stroke="currentColor" strokeWidth="1.5"/>
              <circle cx="10" cy="20" r="1.5"/>
              <circle cx="50" cy="20" r="1.5"/>
            </svg>
          </div>

          {/* Main ornate border */}
          <div className="border-2 border-amber-700/60 rounded-2xl p-10 bg-amber-100/30 relative">
            {/* Corner decorations */}
            <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-amber-700 rounded-tl-lg"></div>
            <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-amber-700 rounded-tr-lg"></div>
            <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-amber-700 rounded-bl-lg"></div>
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-amber-700 rounded-br-lg"></div>

            {/* Content */}
            <div className="text-center mb-8">
              <h1 className="text-3xl font-light tracking-wider text-gray-800 mb-6">
                ASTROLOGICAL<br />CRYSTAL ELIXIRS
              </h1>
            </div>

            <p className="text-sm leading-relaxed text-gray-800 text-center mb-6">
              Create astrological crystal elixirs by infusing water with the vibrational essence of your chosen crystals under specific astrological conditions. Drinking these elixirs can subtly align your internal energy with your astrological intentions and the healing properties of the crystals. Ensure the crystals you use are safe for elixir preparation, and consider the astrological timing for imbuing the water with celestial energies. Here's how you can create your own astrological crystal elixirs safely and effectively.
            </p>
          </div>

          {/* Bottom decorative elements */}
          <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
            <svg viewBox="0 0 60 30" className="w-16 h-8 text-amber-700" fill="currentColor">
              <circle cx="20" cy="15" r="1.5"/>
              <circle cx="30" cy="15" r="2"/>
              <circle cx="40" cy="15" r="1.5"/>
            </svg>
          </div>
        </div>

        {/* Numbers section below */}
        <div className="grid grid-cols-2 gap-12 mt-16 max-w-4xl mx-auto">
          {/* 1 - Select Your Crystals */}
          <div className="text-center">
            <div className="text-6xl font-light text-amber-700/40 mb-3">1</div>
            <h3 className="text-sm font-bold text-gray-800 mb-2 tracking-wide">
              SELECT YOUR<br />CRYSTALS
            </h3>
            <p className="text-xs leading-relaxed text-gray-800">
              Choose crystals that align with your astrological intentions or personal healing needs. Each crystal has specific properties that can be amplified by corresponding astrological conditions. Ensure the crystals you select are non-toxic and safe for use in elixirs. Some crystals contain harmful elements like aluminum or copper, which can leach into water.
            </p>
          </div>

          {/* 2 - Cleanse Your Crystals */}
          <div className="text-center">
            <div className="text-6xl font-light text-amber-700/40 mb-3">2</div>
            <h3 className="text-sm font-bold text-gray-800 mb-2 tracking-wide">
              CLEANSE YOUR<br />CRYSTALS
            </h3>
            <p className="text-xs leading-relaxed text-gray-800">
              Before using your crystals, cleanse them to clear any absorbed energies. You can cleanse them through smudging, moonlight, or sound vibrations, ensuring they are pure and ready to use.
            </p>
            <div className="flex justify-center mt-3 space-x-2">
              <div className="w-2 h-2 rounded-full bg-amber-700/30"></div>
              <div className="w-2 h-2 rounded-full bg-amber-700/30"></div>
              <div className="w-2 h-2 rounded-full bg-amber-700/30"></div>
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
