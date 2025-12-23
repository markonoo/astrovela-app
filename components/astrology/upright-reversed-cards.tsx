export function UprightReversedCards({ pageNumber }: { pageNumber: number }) {
  return (
    <div className="h-full bg-gradient-to-br from-slate-900 via-purple-950 to-black text-amber-100 flex flex-col relative px-10 py-8">
      {/* Top Section with Cards */}
      <div className="grid grid-cols-2 gap-12 mb-10">
        {/* Left: Judgement Card */}
        <div className="flex flex-col items-center">
          <div className="bg-stone-200 rounded-lg p-3 mb-3 w-32 aspect-[2/3] overflow-hidden">
            <img 
              src="/tarot-20-judgement.png" 
              alt="Judgement tarot card" 
              className="w-full h-full object-cover rounded"
            />
          </div>
          <h3 className="text-base font-bold text-amber-200 mb-1">JUDGEMENT</h3>
          <p className="text-sm text-amber-300 mb-2 italic">(XX)</p>
          <p className="text-xs text-center text-amber-100">Judgement, rebirth, inner calling.</p>
          <p className="text-xs text-center text-amber-300 mt-1 italic">Reversed: Self-doubt, lack of self-awareness, failure to learn lessons.</p>
        </div>

        {/* Right: The World Card */}
        <div className="flex flex-col items-center">
          <div className="bg-stone-200 rounded-lg p-3 mb-3 w-32 aspect-[2/3] overflow-hidden">
            <img 
              src="/tarot-21-world.png" 
              alt="The World tarot card" 
              className="w-full h-full object-cover rounded"
            />
          </div>
          <h3 className="text-base font-bold text-amber-200 mb-1">THE WORLD</h3>
          <p className="text-sm text-amber-300 mb-2 italic">(XXI)</p>
          <p className="text-xs text-center text-amber-100">Completion, accomplishment, travel.</p>
          <p className="text-xs text-center text-amber-300 mt-1 italic">Reversed: Incompletion, lack of closure, delays.</p>
        </div>
      </div>

      {/* Text with Star Icon */}
      <div className="flex items-start justify-center mb-8 max-w-3xl mx-auto">
        <svg viewBox="0 0 40 40" className="w-10 h-10 text-amber-400 mr-4 mt-1 flex-shrink-0">
          <path d="M20 5 L22 15 L30 10 L25 18 L35 20 L25 22 L30 30 L22 25 L20 35 L18 25 L10 30 L15 22 L5 20 L15 18 L10 10 L18 15 Z" fill="currentColor"/>
        </svg>
        <p className="text-sm leading-relaxed text-amber-100 flex-1 pt-1">
          Upright tarot cards typically represent the positive or straightforward aspects of a card's meaning, while reversed tarot cards often indicate challenges, delays, or an inverted interpretation of the card's traditional symbolism.
        </p>
      </div>

      {/* Bottom Two Sections */}
      <div className="grid grid-cols-2 gap-10 max-w-5xl mx-auto">
        {/* Upright */}
        <div>
          <h2 className="text-2xl font-light text-center text-amber-200 mb-4 tracking-wide">
            UPRIGHT<br />TAROT CARDS
          </h2>
          <p className="text-xs leading-relaxed text-amber-100">
            Upright tarot cards generally represent the positive, direct, and straightforward meanings of each card. They often signify clarity, growth, and the expected outcomes based on the card's symbolism. When cards appear upright in a reading, they suggest that the energies and influences are aligned and flowing naturally. These interpretations often highlight areas where the querent can expect progress, understanding, and favorable developments.
          </p>
        </div>

        {/* Reversed */}
        <div>
          <h2 className="text-2xl font-light text-center text-amber-200 mb-4 tracking-wide">
            REVERSED<br />TAROT CARDS
          </h2>
          <p className="text-xs leading-relaxed text-amber-100">
            Reversed tarot cards usually reflect the opposite or a more challenging aspect of the card's meaning. They can indicate delays, blockages, and areas that need attention or reevaluation. The reversed meanings might highlight internal struggles, missed opportunities, or unresolved issues. When cards appear reversed, they suggest that the energies are obstructed or misaligned, requiring the querent to look deeper into the situation.
          </p>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-amber-200 text-lg">
        {pageNumber}
      </div>
    </div>
  )
}
