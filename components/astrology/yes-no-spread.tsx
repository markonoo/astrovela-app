export function YesNoSpread({ pageNumber }: { pageNumber: number }) {
  return (
    <div className="h-full bg-gradient-to-br from-slate-900 via-purple-950 to-black text-amber-100 flex flex-col relative px-12 py-10 mt-[10%]">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-light tracking-wider text-amber-200">
          YES OR NO
        </h1>
      </div>

      <p className="text-sm leading-relaxed text-amber-100 text-center max-w-3xl mx-auto mb-10">
        This spread is a straightforward and popular method used to get quick answers to specific questions. It typically involves drawing a single Tarot card to answer a yes or no question. If the card is upright, the answer is "yes." If the card is reversed, the answer is "no." Additionally, the meaning of the card provides further insights and details about the question or situation.
      </p>

      {/* Two Cards */}
      <div className="flex justify-center gap-16 mb-10">
        {/* Yes - Upright */}
        <div className="text-center">
          <div className="rounded-lg w-36 aspect-[2/3] mb-4 overflow-hidden bg-gradient-to-br from-purple-900/50 to-purple-950/50 flex items-center justify-center border border-amber-500/30">
            <div className="text-center text-amber-300 p-4">
              <div className="text-5xl mb-3">✨</div>
              <div className="text-sm font-medium">Upright</div>
            </div>
          </div>
          <h3 className="text-2xl font-light text-amber-200 tracking-wider">YES</h3>
        </div>

        {/* No - Reversed */}
        <div className="text-center">
          <div className="rounded-lg w-36 aspect-[2/3] mb-4 overflow-hidden bg-gradient-to-br from-purple-950/50 to-black/50 flex items-center justify-center border border-amber-500/30">
            <div className="text-center text-amber-300 p-4 transform rotate-180">
              <div className="text-5xl mb-3">✨</div>
              <div className="text-sm font-medium">Reversed</div>
            </div>
          </div>
          <h3 className="text-2xl font-light text-amber-200 tracking-wider">NO</h3>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-amber-200 text-lg">
        {pageNumber}
      </div>
    </div>
  )
}
