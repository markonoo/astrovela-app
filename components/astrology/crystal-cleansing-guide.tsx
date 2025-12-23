import React from "react"

export function CrystalCleansingGuide({ pageNumber }: { pageNumber: number }) {
  return (
    <div className="h-full bg-gradient-to-br from-[#b89968] via-[#c4a484] to-[#b89968] flex flex-col flex-1 relative px-16 py-10">
      {/* Step 1 */}
      <div className="text-center mb-10">
        <div className="flex items-center justify-center mb-6">
          <div className="text-7xl font-serif text-white/50 mr-6">1</div>
          <div className="w-16 h-16 relative">
            <svg viewBox="0 0 64 64" className="w-full h-full text-white fill-current opacity-50">
              <path d="M32 8l8 16-8 32-8-32z" stroke="currentColor" strokeWidth="1.5" fill="none" />
              <path d="M24 24l16 0" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="40" cy="20" r="2" fill="currentColor" />
              <circle cx="44" cy="24" r="1" fill="currentColor" />
            </svg>
          </div>
        </div>

        <h2 className="text-2xl font-serif text-white tracking-wider mb-6">CHOOSE YOUR METHOD</h2>

        <p className="text-white leading-relaxed text-base mb-8 max-w-2xl mx-auto font-medium">
          Several methods can be used for cleansing crystals, each suitable for different types of crystals:
        </p>

        <div className="grid grid-cols-2 gap-x-10 gap-y-6 text-left max-w-4xl mx-auto">
          <div>
            <h3 className="text-white font-bold mb-2 text-sm tracking-wider">WATER CLEANSING:</h3>
            <p className="text-white text-sm leading-relaxed mb-5 font-medium">
              Run fresh water over your crystals or soak them in a bowl of water. This method is ideal for hard stones like quartz and amethyst but avoid it for softer or porous stones like selenite, which can dissolve in water.
            </p>

            <h3 className="text-white font-bold mb-2 text-sm tracking-wider">SALT WATER CLEANSING:</h3>
            <p className="text-white text-sm leading-relaxed mb-5 font-medium">
              Soak your crystals in a bowl of salt water. Use this method cautiously as salt can damage certain types of crystals like metallic ones or those with a high Mohs hardness.
            </p>

            <h3 className="text-white font-bold mb-2 text-sm tracking-wider">SMUDGING:</h3>
            <p className="text-white text-sm leading-relaxed font-medium">
              Use smudge sticks made from herbs like sage, cedar, or lavender. Pass your crystals through the smoke to cleanse them of negative energy. This is safe for all types of crystals.
            </p>
          </div>

          <div>
            <h3 className="text-white font-bold mb-2 text-sm tracking-wider">SOUND CLEANSING:</h3>
            <p className="text-white text-sm leading-relaxed mb-5 font-medium">
              Use chanting, singing bowls, or bells to create vibrations that will cleanse your crystals. This method is gentle and can be effective for large collections of crystals without needing to handle them individually.
            </p>

            <h3 className="text-white font-bold mb-2 text-sm tracking-wider">MOONLIGHT CLEANSING:</h3>
            <p className="text-white text-sm leading-relaxed mb-5 font-medium">
              Place your crystals outside or on a windowsill during a full moon. The light from the moon is believed to cleanse and recharge the crystals, making this a gentle and effective method.
            </p>

            <h3 className="text-white font-bold mb-2 text-sm tracking-wider">SUNLIGHT CLEANSING:</h3>
            <p className="text-white text-sm leading-relaxed font-medium">
              Expose your crystals to sunlight to energize and cleanse them. Be cautious as prolonged exposure can fade some crystals like amethyst and rose quartz.
            </p>
          </div>
        </div>
      </div>

      {/* Step 2 */}
      <div className="text-center mt-auto">
        <div className="flex items-center justify-center mb-6">
          <div className="text-7xl font-serif text-white/50 mr-6">2</div>
          <div className="w-16 h-16 relative">
            <svg viewBox="0 0 64 64" className="w-full h-full text-white fill-current opacity-50">
              <path d="M20 32l12-12 12 12-12 12z" stroke="currentColor" strokeWidth="1.5" fill="none" />
              <circle cx="32" cy="32" r="4" stroke="currentColor" strokeWidth="1.5" fill="none" />
              <circle cx="28" cy="28" r="1" fill="currentColor" />
              <circle cx="36" cy="36" r="1" fill="currentColor" />
            </svg>
          </div>
        </div>

        <h2 className="text-2xl font-serif text-white tracking-wider mb-6">PREPARE YOUR CRYSTALS</h2>

        <p className="text-white leading-relaxed text-base max-w-2xl mx-auto font-medium">
          Before cleansing, physically clean your crystals to remove any dirt or debris. This can be done with a soft brush or cloth. Ensure they are physically clean so that the energy cleansing methods are more effective.
        </p>
      </div>

      {/* Page Number */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white text-sm">
        {pageNumber}
      </div>
    </div>
  )
}
