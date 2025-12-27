export function AstrologyRelationshipTimingReplica({ pageNumber }: { pageNumber: number }) {
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

      {/* Ornate Frame Placeholder */}
      <div className="relative max-w-2xl mx-auto mb-8 z-10">
        <div className="border-2 border-dashed border-amber-400 rounded-3xl p-6 bg-rose-950/40">
          <img 
            src="/palmistry-decorative.png" 
            alt="Decorative Frame"
            className="w-full h-8 object-cover mb-3"
          />

          {/* Celestial icon */}
          <div className="flex justify-center mb-4">
            <img 
              src="/celestial-icon.png" 
              alt="Celestial Icon"
              className="w-8 h-8 object-contain"
            />
          </div>

          <h1 className="text-center text-2xl font-semibold tracking-wider text-amber-200 mb-4">
            ASTROLOGY &<br />RELATIONSHIP<br />TIMING
          </h1>
          <p className="text-center text-sm text-amber-100 font-medium">
            Astrology provides valuable insights into the timing and dynamics of relationships. By understanding key astrological events, you can determine the best times for dates or starting new relationships.
          </p>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-amber-200 text-lg z-10">
        {pageNumber}
      </div>
    </div>
  )
}
