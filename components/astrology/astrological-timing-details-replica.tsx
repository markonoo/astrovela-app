export function AstrologicalTimingDetailsReplica({ pageNumber }: { pageNumber: number }) {
  return (
    <div className="h-full bg-gradient-to-br from-rose-950 via-red-950 to-rose-900 text-amber-100 flex flex-col justify-center relative px-16 py-10">
      {/* Decorative stars and hearts background - placeholder */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-amber-400/30 text-xs">
            Background Pattern
          </div>
        </div>
      </div>

      <div className="relative z-10 grid grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Full Moons & New Moons */}
        <div>
          <div className="flex items-center justify-center mb-3">
            <img 
              src="/moon-phases-icon.png" 
              alt="Moon Phases Icon"
              className="w-10 h-10 object-contain"
            />
          </div>
          <h3 className="text-lg font-bold text-amber-200 mb-3 text-center">FULL MOONS &<br />NEW MOONS</h3>
          <p className="text-sm leading-relaxed text-amber-100 mb-3 font-medium">
            <span className="font-bold italic">Full Moon:</span> Full moons are times of culmination and illumination. They often bring clarity to relationship matters and can highlight areas of tension that need resolution.
          </p>
          <p className="text-sm leading-relaxed text-amber-100 font-medium">
            <span className="font-bold italic">New Moon:</span> New moons are times for new beginnings and setting intentions. This is an excellent time to start new relationships or set goals for existing ones.
          </p>
        </div>

        {/* Venus Transits */}
        <div>
          <div className="flex items-center justify-center mb-3">
            <img 
              src="/mandala-icon.png" 
              alt="Mandala Icon"
              className="w-10 h-10 object-contain"
            />
          </div>
          <h3 className="text-lg font-bold text-amber-200 mb-3 text-center">VENUS TRANSITS</h3>
          <p className="text-sm leading-relaxed text-amber-100 mb-3 font-medium">
            <span className="font-bold italic">Venus Retrograde:</span> Venus retrograde periods, occurring approximately every 18 months, can bring past lovers back into your life and prompt reevaluation of current relationships. It's a time for introspection and reassessment rather than starting new relationships.
          </p>
          <p className="text-sm leading-relaxed text-amber-100 font-medium">
            <span className="font-bold italic">Venus Direct:</span> When Venus is direct, it's an ideal time to pursue new romantic opportunities, enhance your social life, and express love and affection.
          </p>
        </div>

        {/* Eclipses */}
        <div>
          <div className="flex items-center justify-center mb-3">
            <div className="w-10 h-10 bg-amber-500/20 rounded-full flex items-center justify-center">
              <div className="text-xl text-amber-400">◐</div>
            </div>
          </div>
          <h3 className="text-lg font-bold text-amber-200 mb-3 text-center">ECLIPSES</h3>
          <p className="text-sm leading-relaxed text-amber-100 mb-3 font-medium">
            <span className="font-bold italic">Solar Eclipses:</span> Solar eclipses can bring sudden changes and new beginnings in your love life. They can signal significant turning points and new opportunities.
          </p>
          <p className="text-sm leading-relaxed text-amber-100 font-medium">
            <span className="font-bold italic">Lunar Eclipses:</span> Lunar eclipses often bring endings or culminations in relationships. They can reveal hidden truths and prompt necessary changes.
          </p>
        </div>

        {/* Mars Transits + Jupiter */}
        <div>
          <div className="flex items-center justify-center mb-3">
            <div className="w-10 h-10 bg-amber-500/20 rounded-full flex items-center justify-center">
              <div className="text-xl text-amber-400">♂</div>
            </div>
          </div>
          <h3 className="text-lg font-bold text-amber-200 mb-3 text-center">MARS TRANSITS</h3>
          <p className="text-sm leading-relaxed text-amber-100 mb-3 font-medium">
            <span className="font-bold italic">Mars Retrograde:</span> Mars retrograde, occurring approximately every two years, can slow down the pace of your love life and bring unresolved issues to the surface. It's a time for patience and reflection.
          </p>
          <p className="text-sm leading-relaxed text-amber-100 mb-4 font-medium">
            <span className="font-bold italic">Mars Direct:</span> When Mars is direct, it's a time for action and pursuing your desires with confidence and energy.
          </p>

          <div className="flex items-center justify-center mb-2">
            <div className="w-8 h-8 bg-amber-500/20 rounded-full flex items-center justify-center">
              <div className="text-lg text-amber-400">♃</div>
            </div>
          </div>
          <h3 className="text-base font-bold text-amber-200 mb-2 text-center">JUPITER TRANSITS</h3>
          <p className="text-xs leading-relaxed text-amber-100 font-medium">
            <span className="font-bold italic">Jupiter in Your Relationship Houses:</span> Jupiter transits can bring growth, optimism, and expansion to your love life. When Jupiter transits your 5<sup>th</sup> (romance) or 7<sup>th</sup> (partnerships) house, it's a favorable time for love and relationships.
          </p>
        </div>
      </div>

      {/* Hand illustration placeholder */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-20 h-16 border-2 border-dashed border-amber-500 rounded flex items-center justify-center">
          <div className="text-xs text-amber-400/70">Hand</div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-amber-200 text-lg z-10">
        {pageNumber}
      </div>
    </div>
  )
}
