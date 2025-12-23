import React from "react"

export function InnerPlanetsPageNew({ pageNumber }: { pageNumber: number }) {
  return (
    <div className="h-full bg-black text-amber-200 flex flex-col">
      <div className="flex-1 px-12 py-12 max-w-5xl mx-auto flex items-center">
        <div className="flex justify-center w-full">
          {/* Mercury - Single centered card */}
          <div className="max-w-md">
            {/* Mercury image */}
            <div className="w-40 h-40 mx-auto mb-6 relative">
              <img src="/mercury-cover.png" alt="Mercury" className="w-full h-full object-cover shadow-2xl" />
            </div>

            {/* Mercury content box */}
            <div className="border border-amber-400 rounded-lg p-6 relative bg-black bg-opacity-40">
              {/* Decorative corner elements */}
              <div className="absolute top-4 left-4 w-4 h-4 border-l-2 border-t-2 border-amber-400"></div>
              <div className="absolute top-4 right-4 w-4 h-4 border-r-2 border-t-2 border-amber-400"></div>
              <div className="absolute bottom-4 left-4 w-4 h-4 border-l-2 border-b-2 border-amber-400"></div>
              <div className="absolute bottom-4 right-4 w-4 h-4 border-r-2 border-b-2 border-amber-400"></div>

              <h2 className="text-3xl font-light text-center mb-4 tracking-[0.15em] font-serif">MERCURY</h2>
              
              <div className="space-y-3 text-amber-100 text-sm leading-relaxed">
                <p>
                  <span className="font-semibold">MERCURY</span> is responsible not only for how we communicate with words but also for our ability to perceive and process the world around us. It manages logical thinking, as well as our curiosity and capacity to learn. Mercury also influences our non-verbal communication, the way we gesture, write, and think. It's also the ruler of technology and travel, which helps the exchange of ideas and information. The sign Mercury occupies influences whether our communication style is assertive, passive, detailed, or big-picture-oriented, affecting everything from our humor to our negotiation skills.
                </p>
                <p>
                  Mercury approximately stays 3-4 weeks in each sign. However, due to its retrograde motion, it can stay in a single sign for up to 8 weeks. Mercury's transitions influence shifts in our thinking and communication.
                </p>
              </div>

              {/* Mercury symbol at bottom */}
              <div className="flex justify-center mt-4">
                <div className="w-8 h-8 border border-amber-400 rounded-full flex items-center justify-center">
                  <div className="text-amber-400 text-sm">☿</div>
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
