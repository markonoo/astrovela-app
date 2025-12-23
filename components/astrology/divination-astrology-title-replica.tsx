import React from "react"

interface DivinationAstrologyTitleReplicaProps {
  pageNumber: number
}

export function DivinationAstrologyTitleReplica({ pageNumber }: DivinationAstrologyTitleReplicaProps) {
  return (
    <div className="h-full bg-black text-white flex flex-col flex-1 relative overflow-hidden">
      {/* Full-page background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/divination-background.png)' }}
      />

      {/* Main content */}
      <div className="flex-1 flex flex-col items-center justify-center relative z-10 px-8">
        {/* Decorative T initial */}
        <div className="mb-8">
          <div className="text-8xl font-serif text-amber-300">
            T
          </div>
        </div>

        {/* Main title - reduced by 30% */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-light tracking-[0.15em] font-serif text-amber-300 mb-4">
            DIVINATION &
          </h1>
          <h1 className="text-4xl md:text-5xl font-light tracking-[0.15em] font-serif text-amber-300">
            ASTROLOGY
          </h1>
        </div>

        {/* Subtitle */}
        <div className="max-w-3xl text-center">
          <p className="text-base leading-relaxed text-gray-200">
            <span className="text-lg">This chapter invites you to learn about divi-</span>
          </p>
          <p className="text-base leading-relaxed text-gray-200 mt-2">
            natory practices that have illuminated the
          </p>
          <p className="text-base leading-relaxed text-gray-200">
            human experience for centuries. As you delve
          </p>
          <p className="text-base leading-relaxed text-gray-200">
            into this mystic territory, you will discover
          </p>
          <p className="text-base leading-relaxed text-gray-200">
            powerful tools for understanding not just your future,
          </p>
          <p className="text-base leading-relaxed text-gray-200">
            but also your deepest self. Embrace this adventure into
          </p>
          <p className="text-base leading-relaxed text-gray-200">
            self-discovery, and unlock the secrets the future holds.
          </p>
        </div>
      </div>

      {/* Page number */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="text-gray-400 text-sm font-medium">{pageNumber}</div>
      </div>
    </div>
  )
}
