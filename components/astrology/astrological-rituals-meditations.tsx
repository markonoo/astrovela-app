import React from "react"

interface AstrologicalRitualsMeditationsProps {
  pageNumber: number
}

export function AstrologicalRitualsMeditations({ pageNumber }: AstrologicalRitualsMeditationsProps) {
  return (
    <div className="h-full bg-gradient-to-br from-amber-200 via-stone-300 to-amber-300 text-gray-800 flex flex-col flex-1 relative">
      <div className="px-12 py-10">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-light tracking-wider text-gray-800 mb-8">
            ASTROLOGICAL RITUALS<br />
            & MEDITATIONS
          </h1>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-6">
            <p className="text-sm leading-relaxed text-gray-800">
              Incorporate crystals into your astrological rituals and meditations. Holding or placing crystals on your body as you meditate can enhance your connection to the specific energies you wish to attract or balance. For example, meditating with Bloodstone can ignite the pioneering spirit of Aries, fostering courage and action, while Aquamarine can deepen Pisces' access to intuition and creativity. Align these practices with the lunar cycle or transits that highlight your natal chart's specific aspects for tailored spiritual work.
            </p>

            {/* Crystal illustration on right */}
            <div className="flex justify-end">
              <svg viewBox="0 0 200 200" className="w-40 h-40 text-amber-700/30" fill="currentColor" stroke="currentColor" strokeWidth="1">
                {/* Geometric crystals illustration */}
                <path d="M100 40 L120 80 L100 120 L80 80 Z" fill="none" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M140 90 L160 110 L140 150 L120 130 Z" fill="none" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M60 110 L80 130 L60 170 L40 150 Z" fill="none" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M100 50 L108 58 L100 66 L92 58 Z" fill="none" stroke="currentColor" strokeWidth="1"/>
                <path d="M145 105 L150 110 L145 115 L140 110 Z" fill="none" stroke="currentColor" strokeWidth="1"/>
                <circle cx="70" cy="95" r="2" />
                <circle cx="130" cy="75" r="2" />
                <circle cx="110" cy="135" r="2" />
                <path d="M95 45 L97 43" stroke="currentColor" strokeWidth="1"/>
                <path d="M105 45 L107 43" stroke="currentColor" strokeWidth="1"/>
                <path d="M100 40 L100 38" stroke="currentColor" strokeWidth="1"/>
              </svg>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Crystal Grids Section */}
            <div>
              <h2 className="text-base font-bold text-gray-800 mb-3 tracking-wide">
                CRYSTAL GRIDS FOR<br />MANIFESTATION
              </h2>
              <p className="text-sm leading-relaxed text-gray-800">
                Design crystal grids based on astrological symbols such as your Sun sign, Moon sign, or personal planets. Crystal grids are powerful tools for manifestation, healing, and protection. By arranging crystals in geometric patterns that resonate with your astrological energies, you create a focused vortex for your intentions. This practice amplifies your desires and draws in the corresponding planetary energies, aiding in the manifestation of personal or spiritual goals.
              </p>
            </div>

            {/* Wearable Crystal Talismans */}
            <div>
              <h2 className="text-base font-bold text-gray-800 mb-3 tracking-wide">
                WEARABLE CRYSTAL<br />TALISMANS
              </h2>
              <p className="text-sm leading-relaxed text-gray-800">
                Wearable crystal talismans, such as jewelry, offer a constant vibrational boost and protection aligned with your astrological energies. Choose jewelry set with your sign's crystals or those that support specific areas highlighted in your birth chart. Wearing these pieces acts as a reminder of your intentions and goals, providing continuous energetic support throughout the day.
              </p>
            </div>

            {/* Seasonal Section */}
            <div>
              <h2 className="text-base font-bold text-gray-800 mb-3 tracking-wide">
                SEASONAL AND TRANSITIONAL<br />CRYSTAL SELECTION
              </h2>
              <p className="text-sm leading-relaxed text-gray-800">
                Adjust your crystal selection with the changing seasons or during significant life transitions, aligning with the zodiac's shifting energies. For instance, as the Sun moves into Aries marking the astrological new year, harness the initiating energy with crystals like Bloodstone or Carnelian. During personal transitions such as career changes or moving homes, lean on stabilizing stones like Moss Agate or Garnet to ground and support you through the change.
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
