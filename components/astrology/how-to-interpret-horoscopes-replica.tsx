import React from "react"

interface HowToInterpretHoroscopesReplicaProps {
  pageNumber: number
}

export function HowToInterpretHoroscopesReplica({ pageNumber }: HowToInterpretHoroscopesReplicaProps) {
  return (
    <div className="h-full bg-gradient-to-br from-stone-100 to-stone-200 text-gray-800 flex flex-col flex-1 relative px-16 py-12">
      {/* Title section */}
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-serif font-normal tracking-[0.15em] font-serif text-gray-800 mb-4">
          HOW TO INTERPRET
        </h1>
        <h1 className="text-4xl md:text-5xl font-serif font-normal tracking-[0.15em] font-serif text-gray-800">
          HOROSCOPE PREDICTIONS
        </h1>
      </div>

      {/* Intro paragraph - narrower and bolder */}
      <div className="mb-10">
        <p className="text-base leading-relaxed text-gray-700 max-w-3xl mx-auto font-medium">
          <span className="font-bold">Diving deeper into horoscope interpretation gives a basic understanding of zodiac signs, unfolding a complex interplay of planetary movements, houses, and aspects.</span> This approach offers a more personalized and profound insight into our lives, relationships, and the world around us. Let's explore the sophisticated elements of astrology that enhance our ability to interpret horoscope predictions with precision and depth.
        </p>
      </div>

      {/* Decorative divider */}
      <div className="flex items-center justify-center mb-10">
        <img 
          src="/divider-sun-icon.png" 
          alt="Decorative sun divider"
          className="h-8 object-contain"
        />
      </div>

      {/* Two-column content - narrower */}
      <div className="flex-1 grid grid-cols-2 gap-10 max-w-4xl mx-auto">
        {/* Left column */}
        <div className="space-y-8">
          {/* The Birth Chart */}
          <div>
            <h2 className="text-xl font-bold mb-4 text-gray-800 tracking-wide">THE BIRTH CHART</h2>
            <p className="text-base leading-relaxed text-gray-700 mb-4 font-medium">
              A birth chart, or natal chart, describes the positions of the planets, the sun, and the moon at the time of your birth. This celestial map serves as the foundation for understanding your personality, life path, and potential. Interpreting a birth chart requires a synthesis of its components.
            </p>
            {/* Hand holding celestial symbols illustration - increased by 150% (50% more) */}
            <div className="flex justify-center my-6">
              <img 
                src="/hand-celestial-symbols.png" 
                alt="Hand with celestial symbols"
                className="w-96 h-96 object-contain"
              />
            </div>
          </div>
        </div>

        {/* Right column */}
        <div className="space-y-8">
          {/* Understanding Relationships */}
          <div>
            <p className="text-base leading-relaxed text-gray-700 mb-4 font-medium">
              Understanding the relationship between planets and houses in your birth chart is crucial. For example, Venus in the 7th house might indicate a harmonious love life, while Mars in the 10th house could suggest a career driven by ambition and competition.
            </p>
            <p className="text-base leading-relaxed text-gray-700 font-medium">
              Aspects reveal the dynamic interplay between the different energies in your chart. In this case, a conjunction between Mercury and Venus could denote a talent for diplomacy and communication, whereas a square between the Moon and Mars might point to emotional conflicts or impulsiveness.
            </p>
          </div>
        </div>
      </div>

      {/* Page number */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="text-gray-800 text-sm font-medium">{pageNumber}</div>
      </div>
    </div>
  )
}
