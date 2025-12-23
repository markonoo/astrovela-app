export function MajorArcanaStructure({ pageNumber }: { pageNumber: number }) {
  return (
    <div className="h-full bg-gradient-to-br from-slate-900 via-purple-950 to-black text-amber-100 flex flex-col justify-center relative px-16 py-8">
      <div className="text-center mb-6">
        <p className="text-sm tracking-[0.15em] font-serif text-amber-300 mb-2 font-semibold">THE STRUCTURE OF THE TAROT DECK</p>
        <h1 className="text-5xl md:text-6xl font-light tracking-[0.15em] font-serif text-amber-200">
          THE MAJOR<br />ARCANA
        </h1>
      </div>

      <div className="flex-1 flex flex-col justify-center max-w-4xl mx-auto">
        <p className="text-sm leading-relaxed text-amber-100 text-center mb-8 font-medium">
          The Major Arcana consists of 22 cards that represent significant life events, lessons, and archetypes. These cards are numbered from 0 to 21 and tell the story of The Fool's Journey—an allegory depicting The Fool (the main character symbolized by the 0 card) undergoing challenges, learning lessons, and achieving personal growth. The Major Arcana influences the reading by highlighting important life changes, spiritual lessons, or karmic influences.
        </p>

        {/* Card Grid - First 4 cards */}
        <div className="grid grid-cols-4 gap-6 mb-8">
          {/* The Fool */}
          <div className="text-center">
            <div className="bg-stone-200 rounded-lg p-3 mb-3 aspect-[2/3] flex items-center justify-center overflow-hidden">
              <img 
                src="/tarot-00-fool.png" 
                alt="The Fool tarot card" 
                className="w-full h-full object-cover rounded"
              />
            </div>
            <h3 className="text-sm font-bold text-amber-200 mb-1">THE FOOL</h3>
            <p className="text-xs text-amber-300 mb-2 italic">(0)</p>
            <p className="text-xs text-amber-100">New beginnings, innocence, adventure without fear.</p>
            <p className="text-xs text-amber-300 mt-1 italic">Reversed: Recklessness, risk-taking, naivety.</p>
          </div>

          {/* The Magician */}
          <div className="text-center">
            <div className="bg-stone-200 rounded-lg p-3 mb-3 aspect-[2/3] flex items-center justify-center overflow-hidden">
              <img 
                src="/tarot-01-magician.png" 
                alt="The Magician tarot card" 
                className="w-full h-full object-cover rounded"
              />
            </div>
            <h3 className="text-sm font-bold text-amber-200 mb-1">THE MAGICIAN</h3>
            <p className="text-xs text-amber-300 mb-2 italic">(I)</p>
            <p className="text-xs text-amber-100">Manifestation, resourcefulness, power.</p>
            <p className="text-xs text-amber-300 mt-1 italic">Reversed: Manipulation, poor planning, untapped potential.</p>
          </div>

          {/* The High Priestess */}
          <div className="text-center">
            <div className="bg-stone-200 rounded-lg p-3 mb-3 aspect-[2/3] flex items-center justify-center overflow-hidden">
              <img 
                src="/tarot-02-high-priestess.png" 
                alt="The High Priestess tarot card" 
                className="w-full h-full object-cover rounded"
              />
            </div>
            <h3 className="text-sm font-bold text-amber-200 mb-1">THE HIGH PRIESTESS</h3>
            <p className="text-xs text-amber-300 mb-2 italic">(II)</p>
            <p className="text-xs text-amber-100">Intuition, unconscious knowledge, mystery.</p>
            <p className="text-xs text-amber-300 mt-1 italic">Reversed: Secrets, disconnected from intuition, withdrawal.</p>
          </div>

          {/* The Empress */}
          <div className="text-center">
            <div className="bg-stone-200 rounded-lg p-3 mb-3 aspect-[2/3] flex items-center justify-center overflow-hidden">
              <img 
                src="/tarot-03-empress.png" 
                alt="The Empress tarot card" 
                className="w-full h-full object-cover rounded"
              />
            </div>
            <h3 className="text-sm font-bold text-amber-200 mb-1">THE EMPRESS</h3>
            <p className="text-xs text-amber-300 mb-2 italic">(III)</p>
            <p className="text-xs text-amber-100">Fertility, creativity, abundance.</p>
            <p className="text-xs text-amber-300 mt-1 italic">Reversed: Dependency, creative block, smothering.</p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-amber-200 text-lg">
        {pageNumber}
      </div>
    </div>
  )
}
