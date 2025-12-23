export function LoveSpreadLayout({ pageNumber }: { pageNumber: number }) {
  return (
    <div className="h-full bg-gradient-to-br from-slate-900 via-purple-950 to-black text-amber-100 flex flex-col justify-center relative px-16 py-10">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-semibold tracking-wider text-amber-200 mb-3">
          THE LOVE SPREAD
        </h1>
        <p className="text-sm text-amber-100 max-w-2xl mx-auto font-medium">
          Focuses on the querent's love life, relationships, and emotional connections.
        </p>
      </div>

      {/* Spread Layout */}
      <div className="flex-1 flex items-center justify-center">
        <div className="relative">
          {/* Card 5 - Top */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
            <div className="bg-stone-200 rounded-lg w-28 aspect-[2/3] flex items-center justify-center text-amber-900 text-3xl font-light">5</div>
          </div>

          {/* Card 1 - Left */}
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
            <div className="bg-stone-200 rounded-lg w-28 aspect-[2/3] flex items-center justify-center text-amber-900 text-3xl font-light">1</div>
          </div>

          {/* Card 3 - Center */}
          <div className="flex items-center justify-center" style={{ width: '400px', height: '300px' }}>
            <div className="bg-stone-200 rounded-xl w-36 aspect-[3/2] flex items-center justify-center text-amber-900 text-3xl font-light">3</div>
          </div>

          {/* Card 2 - Right */}
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
            <div className="bg-stone-200 rounded-lg w-28 aspect-[2/3] flex items-center justify-center text-amber-900 text-3xl font-light">2</div>
          </div>

          {/* Card 4 - Bottom */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
            <div className="bg-stone-200 rounded-lg w-28 aspect-[2/3] flex items-center justify-center text-amber-900 text-3xl font-light">4</div>
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="grid grid-cols-3 gap-x-8 gap-y-2 text-sm max-w-3xl mx-auto text-center font-medium">
        <p><span className="font-bold">1.</span> You</p>
        <p><span className="font-bold">3.</span> The Relationship</p>
        <p><span className="font-bold">5.</span> The Future</p>
        <p><span className="font-bold">2.</span> The Other Person</p>
        <p><span className="font-bold">4.</span> The Past</p>
        <p></p>
      </div>

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-amber-200 text-lg">
        {pageNumber}
      </div>
    </div>
  )
}
