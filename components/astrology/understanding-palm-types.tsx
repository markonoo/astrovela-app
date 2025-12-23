import Image from "next/image"

export function UnderstandingPalmTypes({ pageNumber }: { pageNumber: number }) {
  return (
    <div className="h-full bg-gradient-to-br from-stone-100 to-amber-50 text-gray-900 flex flex-col relative px-16 py-8">
      {/* Title section - aligned with document design */}
      <div className="text-center mb-6 max-w-3xl mx-auto">
        <h1 className="text-3xl font-light tracking-[0.15em] font-serif text-gray-800 mb-4">
          UNDERSTANDING THE PALM
        </h1>
        <h2 className="text-xl font-light tracking-[0.15em] font-serif text-gray-800 mb-3">
          THE FOUR TYPES OF HANDS
        </h2>
        <p className="text-base text-gray-700 leading-relaxed max-w-xl mx-auto">
          Palmistry categorizes hands into four elemental types, each associated with different character traits:
        </p>
      </div>

      {/* 2x2 grid with actual hand images */}
      <div className="grid grid-cols-2 gap-x-10 gap-y-6 max-w-4xl mx-auto">
        <div className="text-center">
          <div className="w-32 h-40 mx-auto mb-3 relative">
            <Image
              src="/fire-hands.png"
              alt="Fire hands - square palm with short fingers"
              fill
              className="object-contain"
              priority
            />
          </div>
          <h3 className="text-base font-bold text-gray-800 mb-2">FIRE HANDS</h3>
          <p className="text-sm leading-relaxed text-gray-700 font-medium">
            Characterized by a square or rectangular palm, short fingers, and prominent lines, fire hands symbolize leadership, ambition, and restlessness.
          </p>
        </div>

        <div className="text-center">
          <div className="w-32 h-40 mx-auto mb-3 relative">
            <Image
              src="/earth-hands.png"
              alt="Earth hands - square palm with thick skin"
              fill
              className="object-contain"
              priority
            />
          </div>
          <h3 className="text-base font-bold text-gray-800 mb-2">EARTH HANDS</h3>
          <p className="text-sm leading-relaxed text-gray-700 font-medium">
            Featuring a square palm, thick skin, and shorter fingers, earth hands denote practicality, stability, and a down-to-earth nature.
          </p>
        </div>

        <div className="text-center">
          <div className="w-32 h-40 mx-auto mb-3 relative">
            <Image
              src="/air-hands.png"
              alt="Air hands - square palm with long fingers"
              fill
              className="object-contain"
              priority
            />
          </div>
          <h3 className="text-base font-bold text-gray-800 mb-2">AIR HANDS</h3>
          <p className="text-sm leading-relaxed text-gray-700 font-medium">
            With a square or rectangular palm, long fingers, and abundant lines, air hands represent intellectualism, curiosity, and sociability.
          </p>
        </div>

        <div className="text-center">
          <div className="w-32 h-40 mx-auto mb-3 relative">
            <Image
              src="/water-hands.png"
              alt="Water hands - long palm with long fingers"
              fill
              className="object-contain"
              priority
            />
          </div>
          <h3 className="text-base font-bold text-gray-800 mb-2">WATER HANDS</h3>
          <p className="text-sm leading-relaxed text-gray-700 font-medium">
            Recognized by a long palm, long fingers, and fewer, but deeper lines, water hands symbolize creativity, sensitivity, and intuition.
          </p>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-gray-700 text-lg">
        {pageNumber}
      </div>
    </div>
  )
}
