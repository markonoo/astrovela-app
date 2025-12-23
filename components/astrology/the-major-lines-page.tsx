export function TheMajorLinesPage({ pageNumber }: { pageNumber: number }) {
  return (
    <div className="h-full bg-gradient-to-br from-stone-100 to-amber-50 text-gray-900 flex flex-col relative px-16 py-8">
      <div className="text-center mb-8 mt-[4%]">
        <h1 className="text-4xl font-semibold tracking-wider text-gray-800">THE MAJOR LINES</h1>
      </div>

      <div className="grid grid-cols-2 gap-10 max-w-4xl mx-auto flex-1 mt-[15%]">
        {/* Left: Hand Diagram */}
        <div className="flex flex-col justify-center">
          <img 
            src="/palmistry-hand-lines.png" 
            alt="Hand diagram showing major palmistry lines"
            className="w-full max-w-sm mx-auto object-contain"
          />
        </div>

        {/* Right: Descriptions */}
        <div className="space-y-5">
          <div>
            <h3 className="font-bold text-gray-800 mb-2 tracking-wide">THE HEAD LINE</h3>
            <p className="text-sm leading-relaxed text-gray-700 font-medium">
              Stretching across the palm from the edge below the index finger towards the outside edge, it signifies intellectual tendencies, mental attitude, and psychological strengths.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-gray-800 mb-2 tracking-wide">THE HEART LINE</h3>
            <p className="text-sm leading-relaxed text-gray-700 font-medium">
              Running horizontally across the upper palm, the heart line reveals emotional stability, romantic perspectives, and cardiac health.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-gray-800 mb-2 tracking-wide">THE LIFE LINE</h3>
            <p className="text-sm leading-relaxed text-gray-700 font-medium">
              Curving around the base of the thumb to the wrist, the lifeline represents vitality, physical health, and major life changes.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-gray-800 mb-2 tracking-wide">THE FATE LINE</h3>
            <p className="text-sm leading-relaxed text-gray-700 font-medium">
              Not present in all hands, this vertical line indicates the degree to which a person's life is affected by external circumstances beyond their control.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto mt-6">
        <div className="flex items-center justify-center mb-4">
          <img 
            src="/palmistry-divider.png" 
            alt="Decorative divider"
            className="w-48 h-8 object-contain"
          />
        </div>
        <p className="text-xs text-gray-600 text-center font-medium italic">
          The lines on one's hand are believed to offer insights into their personality traits, emotional tendencies, intellectual capabilities, and life experiences.
        </p>
      </div>

      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-gray-700 text-lg">
        {pageNumber}
      </div>
    </div>
  )
}
