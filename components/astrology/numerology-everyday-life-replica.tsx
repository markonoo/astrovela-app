export function NumerologyEverydayLifeReplica({ pageNumber }: { pageNumber: number }) {
  return (
    <div className="h-full bg-gradient-to-br from-slate-800 via-blue-900 to-indigo-950 text-amber-100 flex flex-col justify-center relative px-16 py-10">
      {/* Letter-Number Chart */}
      <div className="mb-8 flex justify-center">
        <img 
          src="/numerology-chart.png" 
          alt="Letter-Number Numerology Conversion Chart"
          className="max-w-4xl w-full object-contain"
        />
      </div>

      {/* Title and Content */}
      <div className="text-center mb-6">
        <h1 className="text-3xl font-semibold tracking-wider text-amber-200">
          NUMEROLOGY IN<br />EVERYDAY LIFE
        </h1>
        <p className="text-sm text-amber-100 mt-3 max-w-2xl mx-auto font-medium">
          Numerology can be applied in various aspects of daily life:
        </p>
      </div>

      {/* Three Applications */}
      <div className="grid grid-cols-3 gap-8 max-w-4xl mx-auto">
        <div className="text-center">
          <div className="text-7xl font-light text-amber-400/40 mb-2">1</div>
          <h3 className="text-sm font-bold text-amber-200 mb-2">PERSONAL GROWTH:</h3>
          <p className="text-xs leading-relaxed text-amber-100 font-medium">
            Understanding your core numbers can help clarify your life goals and the areas in which personal growth can be most effectively focused.
          </p>
        </div>

        <div className="text-center">
          <div className="text-7xl font-light text-amber-400/40 mb-2">2</div>
          <h3 className="text-sm font-bold text-amber-200 mb-2">RELATIONSHIPS:</h3>
          <p className="text-xs leading-relaxed text-amber-100 font-medium">
            Compatibility can be assessed through numerology by comparing life path numbers, to predict potential challenges and natural affinities.
          </p>
        </div>

        <div className="text-center">
          <div className="text-7xl font-light text-amber-400/40 mb-2">3</div>
          <h3 className="text-sm font-bold text-amber-200 mb-2">CAREER GUIDANCE:</h3>
          <p className="text-xs leading-relaxed text-amber-100 font-medium">
            Your Destiny Number can provide insights into your professional life and help you find a career path that aligns with your natural abilities and passions.
          </p>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-amber-200 text-lg">
        {pageNumber}
      </div>
    </div>
  )
}
