export function FindingMountsSteps({ pageNumber }: { pageNumber: number }) {
  return (
    <div className="h-full bg-gradient-to-br from-stone-100 to-amber-50 text-gray-900 flex flex-col relative px-10 py-8">
      <div className="relative max-w-3xl mx-auto mb-8 mt-[4%]">
        <div className="border-2 border-amber-700/40 rounded-xl p-6 bg-white/50">
          <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-amber-700"></div>
          <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-amber-700"></div>
          <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-amber-700"></div>
          <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-amber-700"></div>

          <p className="text-sm leading-relaxed text-gray-800 text-center">
            Finding and interpreting the mounts on your palm in palmistry involves examining the fleshy pads on various parts of your palm. Each mount is located below each of the fingers and at specific areas on your palm. To figure out your mounts, follow these steps:
          </p>
        </div>
      </div>

      {/* Reduced spacing to prevent page number overlap */}
      <div className="grid grid-cols-2 gap-x-12 gap-y-6 max-w-5xl mx-auto mt-[12%]">
        <div className="text-center">
          <div className="text-6xl font-light text-amber-700/30 mb-2">1</div>
          <h3 className="text-sm font-bold text-gray-800 mb-1 tracking-wide">CLEAN AND DRY<br />YOUR HANDS</h3>
          <p className="text-xs leading-relaxed text-gray-700">
            Make sure your hands are clean and dry to see the lines and mounts clearly.
          </p>
        </div>

        <div className="text-center">
          <div className="text-6xl font-light text-amber-700/30 mb-2">2</div>
          <h3 className="text-sm font-bold text-gray-800 mb-1 tracking-wide">SPREAD YOUR<br />HAND</h3>
          <p className="text-xs leading-relaxed text-gray-700">
            Open your hand naturally on a flat surface or hold it up to the light. This makes it easier to see the mounts and their development.
          </p>
        </div>

        <div className="text-center">
          <div className="text-6xl font-light text-amber-700/30 mb-2">3</div>
          <h3 className="text-sm font-bold text-gray-800 mb-1 tracking-wide">EXAMINE THE<br />PROMINENCE OF<br />EACH MOUNT</h3>
          <p className="text-xs leading-relaxed text-gray-700">
            Feel each mount with your fingers. A mount's prominence can be raised, flat, or sunken. The prominence of each mount can give clues to specific personality traits:
          </p>
          <div className="mt-2 text-left max-w-xs mx-auto space-y-0.5">
            <p className="text-xs italic text-gray-700"><span className="font-semibold">A raised mount</span> indicates strong characteristics associated with that mount.</p>
            <p className="text-xs italic text-gray-700"><span className="font-semibold">A flat mount</span> might suggest less influence or a more balanced aspect in those areas.</p>
            <p className="text-xs italic text-gray-700"><span className="font-semibold">A sunken mount</span> could indicate a lack of certain qualities or underdeveloped aspects related to that mount.</p>
          </div>
        </div>

        <div className="text-center">
          <div className="text-6xl font-light text-amber-700/30 mb-2">4</div>
          <h3 className="text-sm font-bold text-gray-800 mb-1 tracking-wide">LOOK FOR<br />MARKINGS</h3>
          <p className="text-xs leading-relaxed text-gray-700">
            Besides the prominence, also observe any markings, cross lines, or signs which can provide further insights.
          </p>
        </div>

        <div className="text-center col-span-2">
          <div className="text-6xl font-light text-amber-700/30 mb-2">5</div>
          <h3 className="text-sm font-bold text-gray-800 mb-1 tracking-wide">COMPARE BOTH<br />HANDS</h3>
          <p className="text-xs leading-relaxed text-gray-700 max-w-md mx-auto">
            If you're studying your own palms, compare the same mount on both hands as this can indicate traits that were developed over time (dominant hand) versus natural inclinations (non-dominant hand).
          </p>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-gray-700 text-lg">
        {pageNumber}
      </div>
    </div>
  )
}
