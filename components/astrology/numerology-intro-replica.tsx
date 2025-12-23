export function NumerologyIntroReplica({ pageNumber }: { pageNumber: number }) {
  return (
    <div className="h-full bg-gradient-to-br from-slate-800 via-blue-900 to-indigo-950 text-amber-100 flex flex-col justify-center relative px-16 py-10">
      <div className="relative z-10">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-semibold tracking-[0.15em] font-serif text-amber-200">
            NUMEROLOGY
          </h1>
        </div>

        <div className="flex items-start max-w-3xl mx-auto">
          <div className="text-8xl font-serif text-amber-300 mr-4 leading-none">N</div>
          <p className="text-base leading-relaxed text-amber-100 pt-6 font-medium">
            umerology is an ancient metaphysical science similar to astrology, but instead of celestial bodies, it uses numbers to reveal and influence the course of human lives. Rooted in the idea that numbers have unique vibrations that can impact the material and spiritual world, numerology provides insight into one's life path, personality, and destiny.
          </p>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-amber-200 text-lg">
        {pageNumber}
      </div>
    </div>
  )
}
