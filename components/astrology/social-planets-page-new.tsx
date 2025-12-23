import React from "react"

export function SocialPlanetsPageNew({ pageNumber }: { pageNumber: number }) {
  return (
    <div className="h-full bg-black text-amber-200 flex flex-col">
      <div className="flex-1 px-12 py-10 max-w-6xl mx-auto flex items-center">
        

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Jupiter */}
          <div className="flex flex-col items-center h-full">
            {/* Jupiter image */}
            <div className="w-[134px] h-[134px] mb-6 relative">
              <img src="/jupiter-cover.png" alt="Jupiter" className="w-full h-full object-cover shadow-2xl" />
            </div>

            {/* Jupiter content box */}
            <div className="border border-amber-400 rounded-lg p-5 w-full relative flex flex-col bg-black bg-opacity-40 flex-1">
              {/* Decorative corner elements */}
              <div className="absolute top-4 left-4 w-4 h-4 border-l-2 border-t-2 border-amber-400"></div>
              <div className="absolute top-4 right-4 w-4 h-4 border-r-2 border-t-2 border-amber-400"></div>
              <div className="absolute bottom-4 left-4 w-4 h-4 border-l-2 border-b-2 border-amber-400"></div>
              <div className="absolute bottom-4 right-4 w-4 h-4 border-r-2 border-b-2 border-amber-400"></div>

              <h2 className="text-3xl font-light text-center mb-3 tracking-[0.15em] font-serif">JUPITER</h2>
              
              <div className="flex-1 space-y-2.5 text-amber-100 text-sm leading-relaxed">
                <p>
                  <span className="font-semibold">JUPITER</span> reflects our capacity for joy, growth, and expansion in the material and spiritual spheres. It is the planet of fortune, which shows where we may find success and abundance in our lives. Jupiter encourages us to reach beyond our current limitations, to learn, grow, find meaning and purpose. It's associated with the law, ethics, and higher learning. Jupiter's transit through the zodiac can mean times of prosperity, learning, and taking risks.
                </p>
                <p>
                  Jupiter approximately remains 12-13 months in each sign, completing its cycle in 12 years. Jupiter's transitions bring growth, expansion, and opportunities in the areas it touches.
                </p>
              </div>

              {/* Jupiter symbol at bottom */}
              <div className="flex justify-center mt-4">
                <div className="w-8 h-8 border border-amber-400 rounded-full flex items-center justify-center">
                  <div className="text-amber-400 text-sm">♃</div>
                </div>
              </div>
            </div>
          </div>

          {/* Saturn */}
          <div className="flex flex-col items-center h-full">
            {/* Saturn image */}
            <div className="w-[134px] h-[134px] mb-6 relative">
              <img src="/saturn-cover.png" alt="Saturn" className="w-full h-full object-cover shadow-2xl" />
            </div>

            {/* Saturn content box */}
            <div className="border border-amber-400 rounded-lg p-5 w-full relative flex flex-col bg-black bg-opacity-40 flex-1">
              {/* Decorative corner elements */}
              <div className="absolute top-4 left-4 w-4 h-4 border-l-2 border-t-2 border-amber-400"></div>
              <div className="absolute top-4 right-4 w-4 h-4 border-r-2 border-t-2 border-amber-400"></div>
              <div className="absolute bottom-4 left-4 w-4 h-4 border-l-2 border-b-2 border-amber-400"></div>
              <div className="absolute bottom-4 right-4 w-4 h-4 border-r-2 border-b-2 border-amber-400"></div>

              <h2 className="text-3xl font-light text-center mb-3 tracking-[0.15em] font-serif">SATURN</h2>
              
              <div className="flex-1 space-y-2.5 text-amber-100 text-sm leading-relaxed">
                <p>
                  <span className="font-semibold">SATURN</span> embodies the principle of limitation and structure, teaching us the value of discipline, patience, and hard work. It represents time, karma, and the lessons we must learn to mature and grow. Saturn's placement in our chart indicates where we may encounter obstacles, duties, and responsibilities. In addition, Saturn shows us where we can achieve our greatest accomplishments through perseverance. It governs our ambitions, our fears, and the structures we build in our lives, including careers, reputations, and roles in society.
                </p>
                <p>
                  In about 2.5 years in each sign, Saturn takes 29.5 years to complete a full cycle. Its movements are associated with significant life lessons, challenges, and structures we need to build or redefine.
                </p>
              </div>

              {/* Saturn symbol at bottom */}
              <div className="flex justify-center mt-4">
                <div className="w-8 h-8 border border-amber-400 rounded-full flex items-center justify-center">
                  <div className="text-amber-400 text-sm">♄</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Page number */}
      <div className="text-center text-amber-200 text-lg font-light pb-6">
        76
      </div>
    </div>
  )
}
