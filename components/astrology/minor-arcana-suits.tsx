export function MinorArcanaSuits({ pageNumber }: { pageNumber: number }) {
  return (
    <div className="h-full bg-gradient-to-br from-slate-900 via-purple-950 to-black text-amber-100 flex flex-col relative px-10 py-8">
      <div className="text-center mb-6">
        <p className="text-sm tracking-[0.15em] font-serif text-amber-300 mb-2">THE STRUCTURE OF THE TAROT DECK</p>
        <h1 className="text-5xl md:text-6xl font-light tracking-[0.15em] font-serif text-amber-200">
          THE MINOR<br />ARCANA
        </h1>
      </div>

      <p className="text-sm leading-relaxed text-amber-100 text-center mb-8 max-w-4xl mx-auto">
        The Minor Arcana consists of 56 cards divided into four suits: Cups, Pentacles, Swords, and Wands, each associated with an element and aspect of life. Each suit contains ten numbered cards and four court cards (Page, Knight, Queen, and King), representing everyday situations, emotions, thoughts, and challenges.
      </p>

      {/* Four Suits Grid */}
      <div className="grid grid-cols-4 gap-6">
        {/* Cups */}
        <div className="text-center">
          <div className="rounded-lg mb-3 aspect-[2/3] flex items-center justify-center overflow-hidden">
            <img 
              src="/tarot-suit-cups.png" 
              alt="Cups Suit Card" 
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-base font-bold text-amber-200 mb-1">CUPS</h3>
          <p className="text-sm text-amber-300 mb-2 italic">(Water)</p>
          <p className="text-xs text-amber-100">Emotions, relationships, intuition.</p>
        </div>

        {/* Pentacles */}
        <div className="text-center">
          <div className="rounded-lg mb-3 aspect-[2/3] flex items-center justify-center overflow-hidden">
            <img 
              src="/tarot-suit-pentacles.png" 
              alt="Pentacles Suit Card" 
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-base font-bold text-amber-200 mb-1">PENTACLES</h3>
          <p className="text-sm text-amber-300 mb-2 italic">(Earth)</p>
          <p className="text-xs text-amber-100">Material aspects, career, finances.</p>
        </div>

        {/* Swords */}
        <div className="text-center">
          <div className="rounded-lg mb-3 aspect-[2/3] flex items-center justify-center overflow-hidden">
            <img 
              src="/tarot-suit-swords.png" 
              alt="Swords Suit Card" 
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-base font-bold text-amber-200 mb-1">SWORDS</h3>
          <p className="text-sm text-amber-300 mb-2 italic">(Air)</p>
          <p className="text-xs text-amber-100">Intellect, conflict, power.</p>
        </div>

        {/* Wands */}
        <div className="text-center">
          <div className="rounded-lg mb-3 aspect-[2/3] flex items-center justify-center overflow-hidden">
            <img 
              src="/tarot-suit-wands.png" 
              alt="Wands Suit Card" 
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-base font-bold text-amber-200 mb-1">WANDS</h3>
          <p className="text-sm text-amber-300 mb-2 italic">(Fire)</p>
          <p className="text-xs text-amber-100">Creativity, action, ambition.</p>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-amber-200 text-lg">
        {pageNumber}
      </div>
    </div>
  )
}
