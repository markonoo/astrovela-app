import React from "react"

interface Houses912ReplicaProps {
  pageNumber: number
}

export function Houses912Replica({ pageNumber }: Houses912ReplicaProps) {
  return (
    <div className="h-full bg-black text-amber-100 flex flex-col justify-center relative">
      <div className="px-8 py-8">
        {/* Houses Grid Layout */}
        <div className="grid grid-cols-2 gap-x-10 gap-y-8 max-w-5xl mx-auto">
          {/* Left Column */}
          <div className="space-y-8">
            {/* House 9 */}
            <div className="flex items-start">
              <div className="text-5xl font-light text-amber-300 mr-6 leading-none mt-1">9</div>
              <div className="flex-1">
                <h2 className="text-xl font-medium text-amber-200 mb-2 leading-tight">
                  9<sup>TH</sup> HOUSE<br />
                  <span className="text-lg font-light">THE HOUSE OF<br />PHILOSOPHY</span><br />
                  <span className="text-base italic text-amber-300">(Sagittarius Energy)</span>
                </h2>
                <p className="text-sm leading-relaxed text-white/90">
                  The 9<sup>th</sup> house is responsible for higher learning, philosophy, ethics, and long-distance travel. It 
                  reflects our search for meaning, belief systems, and the expansion of our mental and physical 
                  horizons. This house is associated with foreign cultures, spiritual 
                  journeys, and the pursuit of knowledge, shaping our worldview and sense of adventure.
                </p>
              </div>
            </div>

            {/* House 11 */}
            <div className="flex items-start">
              <div className="text-5xl font-light text-amber-300 mr-6 leading-none mt-1">11</div>
              <div className="flex-1">
                <h2 className="text-xl font-medium text-amber-200 mb-2 leading-tight">
                  11<sup>TH</sup> HOUSE<br />
                  <span className="text-lg font-light">THE HOUSE OF<br />FRIENDSHIPS</span><br />
                  <span className="text-base italic text-amber-300">(Aquarius Energy)</span>
                </h2>
                <p className="text-sm leading-relaxed text-white/90">
                  Focusing on friendships, groups, and communal interests, the 11<sup>th</sup> 
                  house governs our social connections and aspirations. It pertains 
                  to our involvement in groups, clubs, and organizations, and 
                  reflects our hopes, dreams, and the way we engage with social 
                  causes. This house also deals with the rewards we receive from our 
                  career or societal contributions.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* House 10 */}
            <div className="flex items-start">
              <div className="text-5xl font-light text-amber-300 mr-6 leading-none mt-1">10</div>
              <div className="flex-1">
                <h2 className="text-xl font-medium text-amber-200 mb-2 leading-tight">
                  10<sup>TH</sup> HOUSE<br />
                  <span className="text-lg font-light">THE HOUSE OF<br />CAREER</span><br />
                  <span className="text-base italic text-amber-300">(Capricorn Energy)</span>
                </h2>
                <p className="text-sm leading-relaxed text-white/90">
                  Also known as the Midheaven, the 10<sup>th</sup> house represents our 
                  public life, career, and reputation. It signifies our ambitions, 
                  achievements, and the status we aspire to in society. This 
                  house deals with authority figures, career goals, and our contributions to the world, reflecting how we build our legacy.
                </p>
              </div>
            </div>

            {/* House 12 */}
            <div className="flex items-start">
              <div className="text-5xl font-light text-amber-300 mr-6 leading-none mt-1">12</div>
              <div className="flex-1">
                <h2 className="text-xl font-medium text-amber-200 mb-2 leading-tight">
                  12<sup>TH</sup> HOUSE<br />
                  <span className="text-lg font-light">THE HOUSE OF THE<br />UNCONSCIOUS</span><br />
                  <span className="text-base italic text-amber-300">(Pisces Energy)</span>
                </h2>
                <p className="text-sm leading-relaxed text-white/90">
                  The last house represents the unconscious mind, hidden fears, 
                  secrets, and karmic debts. It covers solitude, spiritual growth, 
                  and the things we do in private. The 12<sup>th</sup> house is associated with 
                  institutions such as hospitals, prisons, and places of retreat. It 
                  reflects our deepest fears, hidden strengths, and the capacity 
                  for transcendence, urging us to confront and heal from our past.
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
