import React from "react"

export function LuminariesPageNew({ pageNumber }: { pageNumber: number}) {
  return (
    <div className="h-full bg-black text-amber-200 flex flex-col">
      <div className="flex-1 px-12 py-10 max-w-6xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-light text-center mb-10 tracking-[0.15em] font-serif">
          THE<br />
          LUMINARIES
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Sun */}
          <div className="flex flex-col items-center h-full">
            {/* Sun image - increased by 5%, removed round border */}
            <div className="w-[134px] h-[134px] mb-6 relative">
              <img src="/sun-sign-cover.png" alt="Sun" className="w-full h-full object-cover shadow-2xl" />
            </div>

            {/* Sun content box */}
            <div className="border border-amber-400 rounded-lg p-5 w-full relative flex flex-col bg-black bg-opacity-40 flex-1">
              {/* Decorative corner elements */}
              <div className="absolute top-4 left-4 w-4 h-4 border-l-2 border-t-2 border-amber-400"></div>
              <div className="absolute top-4 right-4 w-4 h-4 border-r-2 border-t-2 border-amber-400"></div>
              <div className="absolute bottom-4 left-4 w-4 h-4 border-l-2 border-b-2 border-amber-400"></div>
              <div className="absolute bottom-4 right-4 w-4 h-4 border-r-2 border-b-2 border-amber-400"></div>

              <h2 className="text-3xl font-light text-center mb-3 tracking-[0.15em] font-serif">SUN</h2>
              
              <div className="space-y-2.5 text-amber-100 text-sm leading-relaxed">
                <p>
                  <span className="font-semibold">THE SUN</span> not only symbolizes our ego and will, but it also illuminates our creative force, the raw energy that fuels our passions, ambitions, and the pursuit of our true selves. The Sun's position by sign, house, and aspect in our natal chart is a guide to understanding our potential for achievement, leadership, and the way we radiate our power. It shapes our personality, influencing everything from our approach to life's challenges to how we express our individuality. The Sun's transit through the sky marks significant cycles, offering opportunities for growth, self-expression, and the realization of our deepest desires. The Sun is also the most widely-known planet, often associated with the term "Zodiac Sign".
                </p>
                <p>
                  The Sun usually takes approximately 1 month in each sign. The Sun's journey through the zodiac takes about a year, symbolizing the cycle of personal growth and evolution over a year.
                </p>
              </div>

              {/* Sun symbol at bottom */}
              <div className="flex justify-center mt-4">
                <div className="w-8 h-8 border border-amber-400 rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-amber-400 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Moon */}
          <div className="flex flex-col items-center h-full">
            {/* Moon image - increased by 5%, removed round border */}
            <div className="w-[134px] h-[134px] mb-6 relative">
              <img src="/moon-sign-cover.png" alt="Moon" className="w-full h-full object-cover shadow-2xl" />
            </div>

            {/* Moon content box */}
            <div className="border border-amber-400 rounded-lg p-5 w-full relative flex flex-col bg-black bg-opacity-40 flex-1">
              {/* Decorative corner elements */}
              <div className="absolute top-4 left-4 w-4 h-4 border-l-2 border-t-2 border-amber-400"></div>
              <div className="absolute top-4 right-4 w-4 h-4 border-r-2 border-t-2 border-amber-400"></div>
              <div className="absolute bottom-4 left-4 w-4 h-4 border-l-2 border-b-2 border-amber-400"></div>
              <div className="absolute bottom-4 right-4 w-4 h-4 border-r-2 border-b-2 border-amber-400"></div>

              <h2 className="text-3xl font-light text-center mb-3 tracking-[0.15em] font-serif">MOON</h2>
              
              <div className="space-y-2.5 text-amber-100 text-sm leading-relaxed">
                <p>
                  <span className="font-semibold">THE MOON</span> reflects the moods and emotions that flow through us. It represents our instinctual self, our memory, and the subconscious layers that are responsible for our habits and attachments. Its placement in our birth chart speaks to our intuitive sense and the way we seek comfort and security in the world. The Moon's phases, from new to full, symbolize the cyclical nature of our lives, reminding us of the constant change and the need to adapt emotionally to the world's rhythms.
                </p>
                <p>
                  The Moon stays in each sign for approximately 2.5 days. Its rapid movement reflects the changing landscape of our emotions and moods.
                </p>
              </div>

              {/* Moon symbol at bottom */}
              <div className="flex justify-center mt-4">
                <div className="w-8 h-8 border border-amber-400 rounded-full flex items-center justify-center">
                  <div className="w-3 h-6 border-l-2 border-amber-400 rounded-l-full"></div>
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
