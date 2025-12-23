import React from "react"

interface InterpretingDailyHoroscopesReplicaProps {
  pageNumber: number
}

export function InterpretingDailyHoroscopesReplica({ pageNumber }: InterpretingDailyHoroscopesReplicaProps) {
  return (
    <div className="h-full bg-gradient-to-br from-stone-100 to-stone-200 text-gray-800 flex flex-col flex-1 relative px-16 py-12">
      {/* Decorative stars - matching page 106 style */}
      <div className="absolute top-8 left-12 text-amber-600 opacity-40">✦</div>
      <div className="absolute top-20 right-16 text-amber-600 opacity-30">✧</div>
      <div className="absolute top-32 left-24 text-amber-600 opacity-40">✦</div>
      <div className="absolute top-16 right-32 text-amber-600 opacity-30">✧</div>
      <div className="absolute top-12 left-40 text-amber-600 opacity-40">✦</div>
      <div className="absolute top-24 right-48 text-amber-600 opacity-30">✧</div>

      {/* Title */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-serif font-normal tracking-[0.15em] font-serif text-gray-800 mb-3">
          INTERPRETING DAILY,
        </h1>
        <h1 className="text-3xl md:text-4xl font-serif font-normal tracking-[0.15em] font-serif text-gray-800 mb-6">
          WEEKLY, AND MONTHLY
        </h1>
        <h1 className="text-3xl md:text-4xl font-serif font-normal tracking-[0.15em] font-serif text-gray-800">
          HOROSCOPES
        </h1>
      </div>

      {/* Intro paragraph - narrower and bolder */}
      <div className="mb-8 max-w-xl mx-auto">
        <p className="text-base leading-relaxed text-gray-700 text-center font-semibold">
          Daily, weekly, and monthly horoscopes are often based on <span className="italic">transits & progressions</span>—
          the movements of planets in the current sky in relation to your birth chart.
        </p>
      </div>

      {/* Hand with zodiac wheel illustration - increased by 20% */}
      <div className="flex justify-center mb-10">
        <img 
          src="/hand-zodiac-wheel.png" 
          alt="Hand holding zodiac wheel" 
          className="w-48 h-auto object-contain"
        />
      </div>

      {/* To Apply These Predictions section - narrower */}
      <div className="mb-8">
        <h2 className="text-center text-base font-bold tracking-[0.15em] font-serif text-gray-800 mb-6">
          TO APPLY THESE PREDICTIONS<br />
          EFFECTIVELY:
        </h2>

        <div className="space-y-6 max-w-xl mx-auto">
          {/* Point 1 */}
          <div className="flex gap-4">
            <div className="text-6xl font-light text-amber-600/30 leading-none mt-1">1</div>
            <p className="flex-1 text-base leading-relaxed text-gray-700 pt-2 font-medium">
              Remember that horoscopes are generally based on your Sun sign, and might not be as 
              personalized as a reading from your full birth chart. For more personalized guidance, consider your Moon and Ascendant signs as well.
            </p>
          </div>

          {/* Point 2 */}
          <div className="flex gap-4">
            <div className="text-6xl font-light text-amber-600/30 leading-none mt-1">2</div>
            <p className="flex-1 text-base leading-relaxed text-gray-700 pt-2 font-medium">
              Always use critical thinking when interpreting horoscopes. Not all advice will apply directly 
              to you every day, week, or month—select what resonates and leave what does not.
            </p>
          </div>

          {/* Point 3 */}
          <div className="flex gap-4">
            <div className="text-6xl font-light text-amber-600/30 leading-none mt-1">3</div>
            <p className="flex-1 text-base leading-relaxed text-gray-700 pt-2 font-medium">
              Consider horoscopes as a tool for self-reflection rather than a deterministic forecast. 
              They can offer insights and perspectives that might not have been considered otherwise.
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
