import React from "react"

interface Houses58ReplicaProps {
  pageNumber: number
}

export function Houses58Replica({ pageNumber }: Houses58ReplicaProps) {
  return (
    <div className="h-full bg-black text-amber-100 flex flex-col justify-center relative">
      <div className="px-8 py-8">
        {/* Houses Grid Layout */}
        <div className="grid grid-cols-2 gap-x-10 gap-y-8 max-w-5xl mx-auto">
          {/* Left Column */}
          <div className="space-y-8">
            {/* House 5 */}
            <div className="flex items-start">
              <div className="text-5xl font-light text-amber-300 mr-6 leading-none mt-1">5</div>
              <div className="flex-1">
                <h2 className="text-xl font-medium text-amber-200 mb-2 leading-tight">
                  5<sup>TH</sup> HOUSE<br />
                  <span className="text-lg font-light">THE HOUSE OF<br />PLEASURE</span><br />
                  <span className="text-base italic text-amber-300">(Leo Energy)</span>
                </h2>
                <p className="text-sm leading-relaxed text-white/90">
                  Associated with creativity, romance, and children, the 5<sup>th</sup> house governs 
                  self-expression, leisure activities, and the things that bring us joy. 
                  It's the field of love affairs, artistic pursuits, and all forms of personal 
                  creativity, including procreation. This house reflects how we take 
                  risks, express our individuality, and pursue pleasure.
                </p>
              </div>
            </div>

            {/* House 7 */}
            <div className="flex items-start">
              <div className="text-5xl font-light text-amber-300 mr-6 leading-none mt-1">7</div>
              <div className="flex-1">
                <h2 className="text-xl font-medium text-amber-200 mb-2 leading-tight">
                  7<sup>TH</sup> HOUSE<br />
                  <span className="text-lg font-light">THE HOUSE OF<br />PARTNERSHIPS</span><br />
                  <span className="text-base italic text-amber-300">(Libra Energy)</span>
                </h2>
                <p className="text-sm leading-relaxed text-white/90">
                  This house rules personal relationships, including marriage, business partnerships, and known 
                  adversaries. It symbolizes the qualities we seek in close relationships and our approach to commitment and cooperation. The 7<sup>th</sup> house reflects our negotiating 
                  skills, legal matters, and how we handle conflict and partnership.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* House 6 */}
            <div className="flex items-start">
              <div className="text-5xl font-light text-amber-300 mr-6 leading-none mt-1">6</div>
              <div className="flex-1">
                <h2 className="text-xl font-medium text-amber-200 mb-2 leading-tight">
                  6<sup>TH</sup> HOUSE<br />
                  <span className="text-lg font-light">THE HOUSE OF<br />HEALTH & SERVICE</span><br />
                  <span className="text-base italic text-amber-300">(Virgo Energy)</span>
                </h2>
                <p className="text-sm leading-relaxed text-white/90">
                  The 6<sup>th</sup> house pertains to daily routines, health, service, and 
                  attitude toward work and duties. It covers employment, co-workers, and pets. It also reflects how 
                  we manage our day-to-day lives and approach to wellness and 
                  self-improvement. This house also deals with our ability to 
                  adapt and serve others.
                </p>
              </div>
            </div>

            {/* House 8 */}
            <div className="flex items-start">
              <div className="text-5xl font-light text-amber-300 mr-6 leading-none mt-1">8</div>
              <div className="flex-1">
                <h2 className="text-xl font-medium text-amber-200 mb-2 leading-tight">
                  8<sup>TH</sup> HOUSE<br />
                  <span className="text-lg font-light">THE HOUSE OF<br />TRANSFORMATION</span><br />
                  <span className="text-base italic text-amber-300">(Scorpio Energy)</span>
                </h2>
                <p className="text-sm leading-relaxed text-white/90">
                  Governing death, rebirth, and shared resources, the 8<sup>th</sup> house 
                  is about transformation and change. It deals with inheritance, 
                  taxes, debts, and other people's money, as well as intimacy and 
                  sexual relationships. This house challenges us to grow through 
                  change, addressing the deeper aspects of existence and our 
                  capacity for regeneration.
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
