export function CelticCrossSpread({ pageNumber }: { pageNumber: number }) {
  return (
    <div className="h-full bg-gradient-to-br from-slate-900 via-purple-950 to-black text-amber-100 flex flex-col relative px-12 py-8">
      <div className="text-center mb-6">
        <h1 className="text-3xl font-light tracking-wider text-amber-200 mb-3">
          THE CELTIC CROSS
        </h1>
        <p className="text-sm text-amber-100 max-w-2xl mx-auto">
          Offers a detailed view of the situation, challenges, and potential outcomes.
        </p>
      </div>

      {/* Spread Layout */}
      <div className="flex justify-center items-center gap-6 flex-1">
        {/* Left Side - Cards 5, 1, 2, 6, 4 */}
        <div className="flex flex-col items-center gap-4">
          <div className="bg-stone-200 rounded-lg w-20 aspect-[2/3] flex items-center justify-center text-amber-900 text-2xl font-light">5</div>
          <div className="flex gap-4 items-center">
            <div className="bg-stone-200 rounded-lg w-20 aspect-[2/3] flex items-center justify-center text-amber-900 text-2xl font-light">1</div>
            <div className="bg-stone-200 rounded-xl w-28 aspect-[3/2] flex items-center justify-center text-amber-900 text-2xl font-light">2</div>
            <div className="bg-stone-200 rounded-lg w-20 aspect-[2/3] flex items-center justify-center text-amber-900 text-2xl font-light">6</div>
          </div>
          <div className="bg-stone-200 rounded-lg w-20 aspect-[2/3] flex items-center justify-center text-amber-900 text-2xl font-light">4</div>
        </div>

        {/* Center - Card 3 on top */}
        <div className="flex flex-col gap-4">
          <div className="bg-stone-200 rounded-lg w-20 aspect-[2/3] flex items-center justify-center text-amber-900 text-2xl font-light mb-20">3</div>
        </div>

        {/* Right Side - Cards 10, 9, 8, 7 (stacked vertically) */}
        <div className="flex flex-col gap-3">
          <div className="bg-stone-200 rounded-lg w-20 aspect-[2/3] flex items-center justify-center text-amber-900 text-xl font-light">10</div>
          <div className="bg-stone-200 rounded-lg w-20 aspect-[2/3] flex items-center justify-center text-amber-900 text-xl font-light">9</div>
          <div className="bg-stone-200 rounded-lg w-20 aspect-[2/3] flex items-center justify-center text-amber-900 text-xl font-light">8</div>
          <div className="bg-stone-200 rounded-lg w-20 aspect-[2/3] flex items-center justify-center text-amber-900 text-xl font-light">7</div>
        </div>
      </div>

      {/* Legend */}
      <div className="grid grid-cols-2 gap-x-8 gap-y-1 text-xs max-w-2xl mx-auto mt-4">
        <p><span className="font-bold">1.</span> This is you</p>
        <p><span className="font-bold">6.</span> This is before you</p>
        <p><span className="font-bold">2.</span> This crosses you</p>
        <p><span className="font-bold">7.</span> Your attitude</p>
        <p><span className="font-bold">3.</span> This crowns you</p>
        <p><span className="font-bold">8.</span> People influencing you or the situation</p>
        <p><span className="font-bold">4.</span> This is beneath you</p>
        <p><span className="font-bold">9.</span> Your hopes and fears</p>
        <p><span className="font-bold">5.</span> This is behind you</p>
        <p><span className="font-bold">10.</span> Outcome</p>
      </div>

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-amber-200 text-lg">
        {pageNumber}
      </div>
    </div>
  )
}
