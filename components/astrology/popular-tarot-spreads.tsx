export function PopularTarotSpreads({ pageNumber }: { pageNumber: number }) {
  return (
    <div className="h-full bg-gradient-to-br from-slate-900 via-purple-950 to-black text-amber-100 flex flex-col justify-center relative px-16 py-10">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-semibold tracking-wider text-amber-200">
          POPULAR<br />TAROT SPREADS
        </h1>
      </div>

      <div className="flex-1 flex flex-col justify-center max-w-4xl mx-auto">
        {/* Three-Card Spread Header */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-center text-amber-200 mb-4 tracking-wide">
            THE THREE-CARD SPREAD
          </h2>
          <p className="text-sm leading-relaxed text-amber-100 text-center max-w-3xl mx-auto font-medium">
            Represents past influences and experiences related to the question or situation, the current situation, potential outcomes and future developments.
          </p>
        </div>

        {/* Three Cards Layout */}
        <div className="flex justify-center gap-8 mb-8">
          <div className="text-center">
            <div className="bg-stone-200 rounded-xl p-4 w-32 aspect-[2/3] mb-3">
              <div className="w-full h-full flex items-center justify-center text-amber-900 text-6xl font-light">1</div>
            </div>
            <p className="text-sm text-amber-200 font-medium">Past</p>
          </div>

          <div className="text-center">
            <div className="bg-stone-200 rounded-xl p-4 w-32 aspect-[2/3] mb-3">
              <div className="w-full h-full flex items-center justify-center text-amber-900 text-6xl font-light">2</div>
            </div>
            <p className="text-sm text-amber-200 font-medium">Present</p>
          </div>

          <div className="text-center">
            <div className="bg-stone-200 rounded-xl p-4 w-32 aspect-[2/3] mb-3">
              <div className="w-full h-full flex items-center justify-center text-amber-900 text-6xl font-light">3</div>
            </div>
            <p className="text-sm text-amber-200 font-medium">Future</p>
          </div>
        </div>

        {/* Mystical Hands Illustration */}
        <div className="flex justify-center">
          <img 
            src="/tarot-symbol.png" 
            alt="Mystical Tarot Symbol"
            className="w-48 h-24 object-contain"
          />
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-amber-200 text-lg">
        {pageNumber}
      </div>
    </div>
  )
}
