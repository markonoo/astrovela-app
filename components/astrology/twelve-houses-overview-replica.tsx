import React from "react"

interface TwelveHousesOverviewReplicaProps {
  pageNumber: number
}

export function TwelveHousesOverviewReplica({ pageNumber }: TwelveHousesOverviewReplicaProps) {
  return (
    <div className="h-full bg-black text-amber-100 flex flex-col justify-center relative">
      <div className="px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-light tracking-[0.15em] font-serif text-amber-200">
            THE TWELVE HOUSES<br />
            OF ASTROLOGY
          </h1>
        </div>

        {/* Houses Grid Layout - Only 1-4 */}
        <div className="grid grid-cols-2 gap-x-10 gap-y-8 max-w-5xl mx-auto">
          {/* Left Column */}
          <div className="space-y-8">
            {/* House 1 */}
            <div className="flex items-start">
              <div className="text-5xl font-light text-amber-300 mr-6 leading-none mt-1">1</div>
              <div className="flex-1">
                <h2 className="text-xl font-medium text-amber-200 mb-2 leading-tight">
                  1<sup>ST</sup> HOUSE<br />
                  <span className="text-lg font-light">THE HOUSE OF SELF</span><br />
                  <span className="text-base italic text-amber-300">(Aries Energy)</span>
                </h2>
                <p className="text-sm leading-relaxed text-white/90">
                  The 1<sup>st</sup> house is the most personal house, representing the self, including our physical body, personality, and overall disposition in life. 
                  It's where the individual's journey begins, influencing personal initiatives, self-expression, and the 
                  approach to life's challenges. Planets in the 1<sup>st</sup> house greatly affect one's 
                  personality, making their traits prominent in how others perceive them.
                </p>
              </div>
            </div>

            {/* House 3 */}
            <div className="flex items-start">
              <div className="text-5xl font-light text-amber-300 mr-6 leading-none mt-1">3</div>
              <div className="flex-1">
                <h2 className="text-xl font-medium text-amber-200 mb-2 leading-tight">
                  3<sup>RD</sup> HOUSE<br />
                  <span className="text-lg font-light">THE HOUSE OF<br />COMMUNICATION</span><br />
                  <span className="text-base italic text-amber-300">(Gemini Energy)</span>
                </h2>
                <p className="text-sm leading-relaxed text-white/90">
                  Communication and thinking fall under the 3<sup>rd</sup> house. It covers early 
                  education, siblings, neighbors, and daily interactions. This house influences how we learn, process information, and express our thoughts. 
                  It also relates to short trips, transportation, and our immediate surroundings, shaping our interaction 
                  with the world.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* House 2 */}
            <div className="flex items-start">
              <div className="text-5xl font-light text-amber-300 mr-6 leading-none mt-1">2</div>
              <div className="flex-1">
                <h2 className="text-xl font-medium text-amber-200 mb-2 leading-tight">
                  2<sup>ND</sup> HOUSE<br />
                  <span className="text-lg font-light">THE HOUSE OF VALUE</span><br />
                  <span className="text-base italic text-amber-300">(Taurus Energy)</span>
                </h2>
                <p className="text-sm leading-relaxed text-white/90">
                  This house governs material possessions, personal finances, and 
                  everything we value, including self-worth. It reflects our earning potential, spending habits, 
                  and how we manage resources. The 2<sup>nd</sup> house also applies to our 
                  talents and what we consider valuable, influencing our priorities and sense of security.
                </p>
              </div>
            </div>

            {/* House 4 */}
            <div className="flex items-start">
              <div className="text-5xl font-light text-amber-300 mr-6 leading-none mt-1">4</div>
              <div className="flex-1">
                <h2 className="text-xl font-medium text-amber-200 mb-2 leading-tight">
                  4<sup>TH</sup> HOUSE<br />
                  <span className="text-lg font-light">THE HOUSE OF<br />HOME & FAMILY</span><br />
                  <span className="text-base italic text-amber-300">(Cancer Energy)</span>
                </h2>
                <p className="text-sm leading-relaxed text-white/90">
                  The 4<sup>th</sup> house sits at the base of the chart, representing our home, 
                  family, roots, and inner self. It's associated with our parents, 
                  upbringing, and the environment that shapes our emotional foundation. This house reflects our 
                  need for security, how we nurture others, and our private life away 
                  from the public eye.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Page number */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-amber-200 text-lg">
        {pageNumber}
      </div>
    </div>
  )
}
