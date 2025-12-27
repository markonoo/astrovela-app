import React from "react"

export function AstrologicalEventsElixirs({ pageNumber }: { pageNumber: number }) {
  return (
    <div className="h-full bg-gradient-to-br from-amber-200 via-stone-300 to-amber-300 text-gray-800 flex flex-col flex-1 relative">
      <div className="px-12 py-10">
        {/* Top Ornate Frame with Number 4 & Text */}
        <div className="relative max-w-3xl mx-auto mb-10">
          <div className="border-2 border-amber-700/60 rounded-2xl p-8 bg-amber-100/30">
            <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-amber-700"></div>
            <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-amber-700"></div>
            <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-amber-700"></div>
            <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-amber-700"></div>

            <h2 className="text-center text-xl font-light tracking-wider text-gray-800 mb-6">
              ASTROLOGICAL<br />EVENTS
            </h2>

            <p className="text-sm leading-relaxed text-gray-800 text-center">
              Astrological events like eclipses, planetary alignments, and retrogrades can significantly affect the energy available for elixirs. Eclipses, for instance, can be powerful times for transformation and should be used with caution. Planetary alignments might amplify or moderate certain energies, and retrogrades might be times for revisiting issues rather than moving forward.
            </p>
          </div>
        </div>

        {/* Bottom Grid - Numbered 4 and 5 */}
        <div className="grid grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* 4 - Prepare Your Elixir */}
          <div className="text-center">
            <div className="text-7xl font-light text-amber-700/30 mb-4">4</div>
            <h3 className="text-sm font-bold text-gray-800 mb-3 tracking-wider">
              PREPARE YOUR ELIXIR
            </h3>
            <p className="text-sm leading-relaxed text-gray-800">
              Place your cleansed crystals in a glass container filled with pure water. Cover the container to prevent contaminants. Set it outside or on a windowsill where it can be exposed to the celestial energies you wish to capture. Let the elixir infuse for a few hours to overnight, depending on your specific astrological timing.
            </p>
          </div>

          {/* 5 - Strain & Store the Elixir */}
          <div className="text-center">
            <div className="text-7xl font-light text-amber-700/30 mb-4">5</div>
            <h3 className="text-sm font-bold text-gray-800 mb-3 tracking-wider">
              STRAIN & STORE<br />THE ELIXIR
            </h3>
            <p className="text-sm leading-relaxed text-gray-800">
              Once the infusion process is complete, carefully remove the crystals. Strain the water through a non-metallic sieve to remove any small particles. Store the elixir in a glass bottle in the refrigerator. You can add a few drops of brandy or apple cider vinegar as a natural preservative.
            </p>
          </div>
        </div>

        {/* Bottom Numbered Sections */}
        <div className="grid grid-cols-2 gap-12 max-w-5xl mx-auto mt-10">
          {/* 6 - Use the Elixir */}
          <div className="text-center">
            <div className="text-7xl font-light text-amber-700/30 mb-4">6</div>
            <h3 className="text-sm font-bold text-gray-800 mb-3 tracking-wider">
              USE THE ELIXIR
            </h3>
            <p className="text-sm leading-relaxed text-gray-800">
              Drink the elixir directly or add a few drops to your daily water intake. Use it to align with your set intentions, whether for healing, meditation, or personal growth. Remember, the changes induced by crystal elixirs are subtle and work over time.
            </p>
          </div>

          {/* 7 - Reflect & Journal */}
          <div className="text-center">
            <div className="text-7xl font-light text-amber-700/30 mb-4">7</div>
            <h3 className="text-sm font-bold text-gray-800 mb-3 tracking-wider">
              REFLECT & JOURNAL
            </h3>
            <p className="text-sm leading-relaxed text-gray-800">
              Keep a journal of your experiences with different elixirs. Note any changes in your feelings, insights, or circumstances that may relate to your use of the elixir. This can help you refine your practices and deepen your understanding of the effects of astrological crystal elixirs.
            </p>
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
