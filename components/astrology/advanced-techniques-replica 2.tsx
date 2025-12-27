import React from "react"

interface AdvancedTechniquesReplicaProps {
  pageNumber: number
}

export function AdvancedTechniquesReplica({ pageNumber }: AdvancedTechniquesReplicaProps) {
  return (
    <div className="h-full bg-gradient-to-br from-stone-100 to-stone-200 text-gray-800 flex flex-col flex-1 relative p-12 justify-center">
      {/* Decorative stars */}
      <div className="absolute top-8 left-12 text-amber-600 opacity-40">✦</div>
      <div className="absolute top-20 right-16 text-amber-600 opacity-30">✧</div>
      <div className="absolute top-32 left-24 text-amber-600 opacity-40">✦</div>
      <div className="absolute top-16 right-32 text-amber-600 opacity-30">✧</div>
      <div className="absolute top-12 left-40 text-amber-600 opacity-40">✦</div>
      <div className="absolute top-24 right-48 text-amber-600 opacity-30">✧</div>

      {/* Title - harmonized with page 105 style */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-serif font-normal tracking-[0.15em] font-serif text-gray-800 mb-2">
          ADVANCED TECHNIQUES FOR
        </h1>
        <h1 className="text-3xl md:text-4xl font-serif font-normal tracking-[0.15em] font-serif text-gray-800">
          A DEEPER UNDERSTANDING
        </h1>
      </div>

      {/* Top three columns */}
      <div className="grid grid-cols-3 gap-8 mb-12">
        {/* The Lunar Nodes */}
        <div>
          <h3 className="text-sm font-semibold mb-3 text-gray-800 tracking-wide">
            THE LUNAR NODES<br />AND YOUR DESTINY
          </h3>
          <p className="text-xs leading-relaxed text-gray-700">
            The North Node and South Node of the Moon hold keys to your karmic path and soul's evolution. 
            Understanding the signs and houses they occupy can provide profound insights into your life's 
            purpose and past-life baggage.
          </p>
        </div>

        {/* Asteroids */}
        <div>
          <h3 className="text-sm font-semibold mb-3 text-gray-800 tracking-wide">
            ASTEROIDS AND<br />FIXED STARS
          </h3>
          <p className="text-xs leading-relaxed text-gray-700">
            Incorporating asteroids like Chiron (the Wounded Healer) and fixed stars into your interpretation 
            can add layers of meaning to your astrological analysis, shedding light on your healing journey 
            and unique talents.
          </p>
        </div>

        {/* The Importance of Timing */}
        <div>
          <h3 className="text-sm font-semibold mb-3 text-gray-800 tracking-wide">
            THE IMPORTANCE<br />OF TIMING
          </h3>
          <p className="text-xs leading-relaxed text-gray-700">
            Eclipses, retrogrades, and significant planetary alignments all play a crucial role in timing life 
            events and understanding their potential impact. Learning to navigate these cosmic tides can empower 
            you to make more informed decisions and harness the energy of the universe.
          </p>
        </div>
      </div>

      {/* Decorative divider */}
      <div className="flex items-center justify-center mb-10">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-amber-600/30 to-transparent"></div>
        <div className="mx-6">
          <div className="relative w-8 h-8">
            {/* 8-pointed star */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-8 h-px bg-amber-600/40"></div>
              <div className="absolute w-px h-8 bg-amber-600/40"></div>
              <div className="absolute w-6 h-px bg-amber-600/40 transform rotate-45"></div>
              <div className="absolute w-6 h-px bg-amber-600/40 transform -rotate-45"></div>
            </div>
          </div>
        </div>
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-amber-600/30 to-transparent"></div>
      </div>

      {/* Practical Tips Section */}
      <div className="mb-10">
        <h2 className="text-center text-xl font-light tracking-wider text-gray-800 mb-8">
          PRACTICAL TIPS FOR EFFECTIVE INTERPRETATION
        </h2>

        <div className="grid grid-cols-2 gap-8 mb-6">
          {/* Holistic Approach */}
          <div>
            <h3 className="text-sm font-semibold mb-3 text-gray-800 tracking-wide">
              HOLISTIC<br />APPROACH
            </h3>
            <p className="text-xs leading-relaxed text-gray-700">
              Always consider the birth chart as a whole rather than focusing too narrowly on one aspect.
            </p>
          </div>

          {/* Continuous Learning */}
          <div>
            <h3 className="text-sm font-semibold mb-3 text-gray-800 tracking-wide">
              CONTINUOUS<br />LEARNING
            </h3>
            <p className="text-xs leading-relaxed text-gray-700">
              Astrology is a vast field—stay curious and open to exploring new concepts and techniques.
            </p>
          </div>

          {/* Intuition & Experience */}
          <div>
            <h3 className="text-sm font-semibold mb-3 text-gray-800 tracking-wide">
              INTUITION &<br />EXPERIENCE
            </h3>
            <p className="text-xs leading-relaxed text-gray-700">
              Allow your intuition to guide you as you gain more experience with interpreting charts.
            </p>
          </div>

          {/* Personal Reflection */}
          <div>
            <h3 className="text-sm font-semibold mb-3 text-gray-800 tracking-wide">
              PERSONAL<br />REFLECTION
            </h3>
            <p className="text-xs leading-relaxed text-gray-700">
              Use your horoscope as a tool for personal growth, reflecting on how its themes resonate with 
              your life and aspirations.
            </p>
          </div>
        </div>
      </div>

      {/* Quote on the right */}
      <div className="absolute right-12 bottom-32 max-w-xs italic text-sm leading-relaxed text-gray-700 text-right">
        Astrology is a life-long study, where each horoscope, transit, and planetary movement presents an 
        opportunity for growth and self-discovery.
      </div>

      {/* Page number */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="text-gray-800 text-sm font-medium">{pageNumber}</div>
      </div>
    </div>
  )
}

