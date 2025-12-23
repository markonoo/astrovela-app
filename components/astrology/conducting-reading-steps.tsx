export function ConductingReadingSteps({ pageNumber }: { pageNumber: number }) {
  return (
    <div className="h-full bg-gradient-to-br from-slate-900 via-purple-950 to-black text-amber-100 flex flex-col relative px-12 py-10">
      {/* Ornate Frame Header */}
      <div className="relative max-w-3xl mx-auto mb-10">
        <div className="border-2 border-amber-600/50 rounded-2xl p-8 bg-slate-900/50">
          <div className="absolute -top-1 -left-1 w-6 h-6 border-t-2 border-l-2 border-amber-600 rounded-tl-lg"></div>
          <div className="absolute -top-1 -right-1 w-6 h-6 border-t-2 border-r-2 border-amber-600 rounded-tr-lg"></div>
          <div className="absolute -bottom-1 -left-1 w-6 h-6 border-b-2 border-l-2 border-amber-600 rounded-bl-lg"></div>
          <div className="absolute -bottom-1 -right-1 w-6 h-6 border-b-2 border-r-2 border-amber-600 rounded-br-lg"></div>

          <h1 className="text-center text-3xl font-light tracking-wider text-amber-200 mb-4">
            CONDUCTING<br />A READING
          </h1>
          <p className="text-center text-sm text-amber-100">To conduct a tarot reading:</p>
        </div>
      </div>

      {/* Steps Grid */}
      <div className="grid grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Step 1 */}
        <div className="text-center">
          <div className="text-7xl font-light text-amber-600/30 mb-3">1</div>
          <h3 className="text-sm font-bold text-amber-200 mb-3 tracking-wide">
            FORMULATE<br />A QUESTION
          </h3>
          <p className="text-xs leading-relaxed text-amber-100">
            Think of a question or area of your life you want insight into.
          </p>
        </div>

        {/* Step 2 */}
        <div className="text-center">
          <div className="text-7xl font-light text-amber-600/30 mb-3">2</div>
          <h3 className="text-sm font-bold text-amber-200 mb-3 tracking-wide">
            SHUFFLE<br />THE DECK
          </h3>
          <p className="text-xs leading-relaxed text-amber-100">
            Focus on your question while shuffling.
          </p>
        </div>

        {/* Step 3 */}
        <div className="text-center">
          <div className="text-7xl font-light text-amber-600/30 mb-3">3</div>
          <h3 className="text-sm font-bold text-amber-200 mb-3 tracking-wide">
            DRAW CARDS
          </h3>
          <p className="text-xs leading-relaxed text-amber-100">
            Draw the number of cards your chosen spread requires.
          </p>
        </div>
      </div>

      {/* Bottom Steps */}
      <div className="grid grid-cols-2 gap-12 max-w-5xl mx-auto mt-8">
        {/* Step 4 */}
        <div className="text-center">
          <div className="text-7xl font-light text-amber-600/30 mb-3">4</div>
          <h3 className="text-sm font-bold text-amber-200 mb-3 tracking-wide">
            LAY OUT<br />THE CARDS
          </h3>
          <p className="text-xs leading-relaxed text-amber-100">
            Place the cards face down in the spread layout, then turn them over one by one to reveal them.
          </p>
        </div>

        {/* Step 5 */}
        <div className="text-center">
          <div className="text-7xl font-light text-amber-600/30 mb-3">5</div>
          <h3 className="text-sm font-bold text-amber-200 mb-3 tracking-wide">
            INTERPRET
          </h3>
          <p className="text-xs leading-relaxed text-amber-100">
            Use your knowledge of the card meanings and your intuition to interpret the messages.
          </p>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-amber-200 text-lg">
        {pageNumber}
      </div>
    </div>
  )
}
