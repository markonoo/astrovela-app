import React from "react"

interface HistoryOfCrystalsAstrologyReplicaProps {
  pageNumber: number
}

export function HistoryOfCrystalsAstrologyReplica({ pageNumber }: HistoryOfCrystalsAstrologyReplicaProps) {
  return (
    <div className="h-full bg-gradient-to-br from-stone-100 to-stone-200 text-gray-800 flex flex-col flex-1 relative p-12">
      {/* Decorative header illustration */}
      <div className="flex items-center justify-center mb-10">
        <img 
          src="/crystals-history-header.png" 
          alt="Crystal history decorative header" 
          className="w-64 h-24 object-contain"
        />
      </div>

      {/* Title */}
      <div className="text-center mb-10">
        <h1 className="text-2xl font-semibold tracking-wider text-gray-800 mb-2">
          THE HISTORY OF CRYSTALS
        </h1>
        <h2 className="text-2xl font-semibold tracking-wider text-gray-800">
          AND ASTROLOGY
        </h2>
      </div>

      {/* First paragraph */}
      <div className="max-w-3xl mx-auto mb-8">
        <p className="text-sm leading-relaxed text-gray-700">
          The intertwining of crystals and astrology stretches back to ancient civilizations, where stones 
          were believed to be physical manifestations of the divine. The Sumerians, Egyptians, Greeks, and 
          Romans all incorporated crystals into their daily lives and spiritual practices, often associating 
          them with gods, planets, and zodiac signs. For instance, the Ancient Greeks wore amethyst to 
          prevent intoxication, believing it was connected to Bacchus, the god of wine, reflecting an early 
          understanding of crystal vibrations aligning with celestial energies.
        </p>
      </div>

      <div className="max-w-3xl mx-auto mb-10">
        <p className="text-sm leading-relaxed text-gray-700">
          Astrology and crystal healing share a foundational belief in the influence of cosmic forces on 
          terrestrial life. Just as astrologers look to the stars for guidance, crystal healers turn to the 
          Earth's gems for balance, healing, and transformation.
        </p>
      </div>

      {/* Section title */}
      <div className="text-center mb-8">
        <h2 className="text-xl font-semibold tracking-wider text-gray-800 mb-1">
          CRYSTALS AND THEIR ASTROLOGICAL
        </h2>
        <h2 className="text-xl font-semibold tracking-wider text-gray-800">
          SIGNIFICANCE
        </h2>
      </div>

      {/* Final paragraph */}
      <div className="max-w-3xl mx-auto mb-8">
        <p className="text-sm leading-relaxed text-gray-700">
          Each crystal vibrates with a unique frequency that can harmonize with the energy of the zodiac 
          signs, planets, and houses in astrology. Here are the crystals for you based on your Sun sign.
        </p>
      </div>

      {/* Decorative divider */}
      <div className="flex items-center justify-center mt-auto">
        <div className="w-48 h-px bg-gradient-to-r from-transparent via-amber-600/30 to-transparent"></div>
        <div className="mx-4 text-amber-600 opacity-40">✦</div>
        <div className="w-48 h-px bg-gradient-to-r from-transparent via-amber-600/30 to-transparent"></div>
      </div>

      {/* Page number */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="text-gray-800 text-sm font-medium">{pageNumber}</div>
      </div>
    </div>
  )
}

