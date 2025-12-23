import React from "react"

export function OuterPlanetsPageNew({ pageNumber }: { pageNumber: number }) {
  return (
    <div className="h-full bg-black text-amber-200 flex flex-col">
      <div className="flex-1 px-12 py-12 max-w-6xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-light text-center mb-10 tracking-[0.15em] font-serif">
          THE OUTER<br />
          PLANETS
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 h-full items-start">
          {/* Uranus */}
          <div className="flex flex-col items-center h-full">
            {/* Uranus image */}
            <div className="w-40 h-40 mb-8 relative">
              <img src="/uranus-cover.png" alt="Uranus" className="w-full h-full object-cover shadow-2xl" />
            </div>

            {/* Uranus content box */}
            <div className="border border-amber-400 rounded-lg p-6 w-full relative min-h-[320px] flex flex-col bg-black bg-opacity-40 flex-1">
              {/* Decorative corner elements */}
              <div className="absolute top-4 left-4 w-4 h-4 border-l-2 border-t-2 border-amber-400"></div>
              <div className="absolute top-4 right-4 w-4 h-4 border-r-2 border-t-2 border-amber-400"></div>
              <div className="absolute bottom-4 left-4 w-4 h-4 border-l-2 border-b-2 border-amber-400"></div>
              <div className="absolute bottom-4 right-4 w-4 h-4 border-r-2 border-b-2 border-amber-400"></div>

              <h2 className="text-3xl font-light text-center mb-4 tracking-[0.15em] font-serif">URANUS</h2>
              
              <div className="flex-1 space-y-3 text-amber-100 text-sm leading-relaxed">
                <p>
                  <span className="font-semibold">URANUS</span> brings disruption with its energy of innovation, revolution, and change. It symbolizes the breaking of boundaries, the spark of genius, and the sudden changes that change our paths. Uranus points to where we seek freedom and individuality, often through unconventional means. It governs technology, originality, and the collective movements that shape changes in society. Uranus's transits can bring unexpected events, awakening us to new possibilities and realities.
                </p>
                <p>
                  Uranus spends around 7 years in each sign, taking 84 years to orbit the Sun. Its transitions signal major shifts in consciousness, innovation, and revolutions in the aspects of life it influences.
                </p>
              </div>

              {/* Uranus symbol at bottom */}
              <div className="flex justify-center mt-6">
                <div className="w-8 h-8 border border-amber-400 rounded-full flex items-center justify-center">
                  <div className="text-amber-400 text-sm">♅</div>
                </div>
              </div>
            </div>
          </div>

          {/* Neptune */}
          <div className="flex flex-col items-center h-full">
            {/* Neptune image */}
            <div className="w-40 h-40 mb-8 relative">
              <img src="/neptune-cover.png" alt="Neptune" className="w-full h-full object-cover shadow-2xl" />
            </div>

            {/* Neptune content box */}
            <div className="border border-amber-400 rounded-lg p-6 w-full relative min-h-[320px] flex flex-col bg-black bg-opacity-40 flex-1">
              {/* Decorative corner elements */}
              <div className="absolute top-4 left-4 w-4 h-4 border-l-2 border-t-2 border-amber-400"></div>
              <div className="absolute top-4 right-4 w-4 h-4 border-r-2 border-t-2 border-amber-400"></div>
              <div className="absolute bottom-4 left-4 w-4 h-4 border-l-2 border-b-2 border-amber-400"></div>
              <div className="absolute bottom-4 right-4 w-4 h-4 border-r-2 border-b-2 border-amber-400"></div>

              <h2 className="text-3xl font-light text-center mb-4 tracking-[0.15em] font-serif">NEPTUNE</h2>
              
              <div className="flex-1 space-y-3 text-amber-100 text-sm leading-relaxed">
                <p>
                  <span className="font-semibold">NEPTUNE</span> Neptune invites us into the ethereal side, where dreams, illusions, and mysticism come to life. It represents our connection to the universal consciousness, our empathy, and our capacity for self-sacrifice. Neptune's placement in the chart highlights areas where we wish to connect with something greater than ourselves through artistic expression, spirituality, or the pursuit of ideals. It protects our dreams, our delusions, and the places we escape to, challenging us to navigate between inspiration and illusion.
                </p>
                <p>
                  With roughly 14 years in each sign, Neptune completes its cycle in about 165 years. Neptune's slow movement brings gradual but profound changes in spirituality, creativity, and collective trends.
                </p>
              </div>

              {/* Neptune symbol at bottom */}
              <div className="flex justify-center mt-6">
                <div className="w-8 h-8 border border-amber-400 rounded-full flex items-center justify-center">
                  <div className="text-amber-400 text-sm">♆</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Page number */}
      <div className="text-center text-amber-200 text-lg font-light pb-8">
        {pageNumber}
      </div>
    </div>
  )
}
