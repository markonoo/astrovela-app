import React from "react"

export function VenusMarsPageNew({ pageNumber }: { pageNumber: number }) {
  return (
    <div className="h-full bg-black text-amber-200 flex flex-col">
      <div className="flex-1 px-12 py-10 max-w-6xl mx-auto flex items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full items-start">
          {/* Venus */}
          <div className="flex flex-col items-center h-full">
            {/* Venus image */}
            <div className="w-[134px] h-[134px] mb-6 relative">
              <img src="/venus-cover.png" alt="Venus" className="w-full h-full object-cover shadow-2xl" />
            </div>

            {/* Venus content box */}
            <div className="border border-amber-400 rounded-lg p-5 w-full relative flex flex-col bg-black bg-opacity-40 flex-1">
              {/* Decorative corner elements */}
              <div className="absolute top-4 left-4 w-4 h-4 border-l-2 border-t-2 border-amber-400"></div>
              <div className="absolute top-4 right-4 w-4 h-4 border-r-2 border-t-2 border-amber-400"></div>
              <div className="absolute bottom-4 left-4 w-4 h-4 border-l-2 border-b-2 border-amber-400"></div>
              <div className="absolute bottom-4 right-4 w-4 h-4 border-r-2 border-b-2 border-amber-400"></div>

              <h2 className="text-3xl font-light text-center mb-3 tracking-[0.15em] font-serif">VENUS</h2>
              
              <div className="space-y-2.5 text-amber-100 text-sm leading-relaxed">
                <p>
                  <span className="font-semibold">VENUS</span> embodies the attraction principle, dictating who, what, and why we love. It represents our taste, sense of beauty, and financial inclinations. It also reflects our pursuit of harmony in relationships and environments. Venus's influence extends to our social life, the pleasure we derive from our senses, and our native charm. It also touches upon the creation and appreciation of art, music, and all forms of beauty, highlighting the importance of balance, partnership, and the sharing of affection.
                </p>
                <p>
                  Venus stays about 4-5 weeks in each sign, though its retrograde period can extend its stay to about 4 months. Venus governs our love life, pleasures, and finances, with its transitions marking periods of harmony or reassessment in these areas.
                </p>
              </div>

              {/* Venus symbol at bottom */}
              <div className="flex justify-center mt-4">
                <div className="w-8 h-8 border border-amber-400 rounded-full flex items-center justify-center">
                  <div className="text-amber-400 text-sm">♀</div>
                </div>
              </div>
            </div>
          </div>

          {/* Mars */}
          <div className="flex flex-col items-center h-full">
            {/* Mars image */}
            <div className="w-[134px] h-[134px] mb-6 relative">
              <img src="/mars-cover.png" alt="Mars" className="w-full h-full object-cover shadow-2xl" />
            </div>

            {/* Mars content box */}
            <div className="border border-amber-400 rounded-lg p-5 w-full relative flex flex-col bg-black bg-opacity-40 flex-1">
              {/* Decorative corner elements */}
              <div className="absolute top-4 left-4 w-4 h-4 border-l-2 border-t-2 border-amber-400"></div>
              <div className="absolute top-4 right-4 w-4 h-4 border-r-2 border-t-2 border-amber-400"></div>
              <div className="absolute bottom-4 left-4 w-4 h-4 border-l-2 border-b-2 border-amber-400"></div>
              <div className="absolute bottom-4 right-4 w-4 h-4 border-r-2 border-b-2 border-amber-400"></div>

              <h2 className="text-3xl font-light text-center mb-3 tracking-[0.15em] font-serif">MARS</h2>
              
              <div className="space-y-2.5 text-amber-100 text-sm leading-relaxed">
                <p>
                  <span className="font-semibold">MARS</span> brings out assertive energy, courage to take risks, and a deep drive to assert individuality and independence. Mars's placement in our chart reveals our approach to conflict, competition, and the pursuit of our desires. It speaks to the raw energy that pushes us forward, the anger that flares, and the sexual drive that seeks satisfaction. Mars is our survival instinct, the fight response in case of a challenge, and the determination to overcome obstacles.
                </p>
                <p>
                  Mars spends about 6-7 weeks in a sign, however, but can change for up to 8 months if it goes retrograde. Its movement affects our energy levels, passions, and how we assert ourselves.
                </p>
              </div>

              {/* Mars symbol at bottom */}
              <div className="flex justify-center mt-4">
                <div className="w-8 h-8 border border-amber-400 rounded-full flex items-center justify-center">
                  <div className="text-amber-400 text-sm">♂</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Page number */}
      <div className="text-center text-amber-200 text-lg font-light pb-6">
        {pageNumber}
      </div>
    </div>
  )
}
