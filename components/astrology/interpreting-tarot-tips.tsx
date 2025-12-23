export function InterpretingTarotTips({ pageNumber }: { pageNumber: number }) {
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
            INTERPRETING<br />TAROT CARDS
          </h1>
          <p className="text-center text-sm text-amber-100">
            Interpreting tarot cards involves understanding their meanings and how they relate to one another in a spread. Tips for beginners:
          </p>
        </div>
      </div>

      {/* Tips Grid */}
      <div className="grid grid-cols-2 gap-x-16 gap-y-10 max-w-5xl mx-auto">
        {/* Tip 1 */}
        <div>
          <div className="text-7xl font-light text-amber-600/30 mb-3">1</div>
          <h3 className="text-base font-bold text-amber-200 mb-3 tracking-wide">
            START WITH INTUITION
          </h3>
          <p className="text-xs leading-relaxed text-amber-100">
            Look at the card and pay attention to how it makes you feel or what thoughts it brings to mind before looking up its meaning.
          </p>
        </div>

        {/* Tip 2 */}
        <div>
          <div className="text-7xl font-light text-amber-600/30 mb-3">2</div>
          <h3 className="text-base font-bold text-amber-200 mb-3 tracking-wide">
            CONSIDER THE POSITION
          </h3>
          <p className="text-xs leading-relaxed text-amber-100">
            The meaning of a card can change depending on its position in a spread (e.g., past, present, future).
          </p>
        </div>

        {/* Tip 3 */}
        <div>
          <div className="text-7xl font-light text-amber-600/30 mb-3">3</div>
          <h3 className="text-base font-bold text-amber-200 mb-3 tracking-wide">
            LOOK AT THE<br />BIG PICTURE
          </h3>
          <p className="text-xs leading-relaxed text-amber-100">
            See how the cards interact with each other. Is there more of a certain suit or number? Do the themes of the Major Arcana cards present in the reading offer a broader lesson or challenge?
          </p>
        </div>

        {/* Tip 4 */}
        <div>
          <div className="text-7xl font-light text-amber-600/30 mb-3">4</div>
          <h3 className="text-base font-bold text-amber-200 mb-3 tracking-wide">
            PRACTICE
          </h3>
          <p className="text-xs leading-relaxed text-amber-100">
            The more you work with the cards, the more intuitive your readings will become.
          </p>
        </div>

        {/* Tip 5 */}
        <div className="col-span-2 flex justify-center">
          <div className="max-w-md text-center">
            <div className="text-7xl font-light text-amber-600/30 mb-3">5</div>
            <h3 className="text-base font-bold text-amber-200 mb-3 tracking-wide">
              ETHICS IN TAROT
            </h3>
            <p className="text-xs leading-relaxed text-amber-100">
              Tarot reading comes with a responsibility to handle the querent's questions with sensitivity and care. It's crucial to maintain an ethical approach, ensuring confidentiality, avoiding fatalistic predictions, and empowering the querent to make their own decisions.
            </p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-amber-200 text-lg">
        {pageNumber}
      </div>
    </div>
  )
}
