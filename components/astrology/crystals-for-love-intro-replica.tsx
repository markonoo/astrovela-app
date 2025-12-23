export function CrystalsForLoveIntroReplica({ pageNumber }: { pageNumber: number }) {
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

          {/* Crystal icon */}
          <div className="flex justify-center mb-4">
            <img 
              src="/love-crystal-icon.png" 
              alt="Crystal Icon"
              className="w-10 h-10 object-contain"
            />
          </div>

          <h1 className="text-center text-3xl font-semibold tracking-wider text-amber-200 mb-4">
            CRYSTALS &<br />GEMSTONES<br />FOR LOVE
          </h1>
          <p className="text-center text-sm text-amber-100 font-medium">
            Crystals and gemstones have long been used as powerful tools to attract love and enhance relationships. Each crystal carries its own unique energy and properties that can help open your heart, attract romance, and strengthen emotional connections.
          </p>
        </div>
      </div>

      {/* Rose Quartz Image and Description */}
      <div className="relative z-10 max-w-2xl mx-auto text-center">
        {/* Actual Rose Quartz Crystal Image */}
        <div className="mb-6 flex justify-center">
          <img src="/rose-quartz.png" alt="Rose Quartz" className="w-32 h-36 object-contain" />
        </div>

        <h2 className="text-2xl font-semibold text-amber-200 mb-3">ROSE QUARTZ</h2>
        <p className="text-sm leading-relaxed text-amber-100 font-medium">
          Known as the stone of unconditional love, rose quartz is one of the most popular crystals for attracting and enhancing love. Its gentle, soothing energy opens the heart chakra, promoting self-love, forgiveness, and compassion. Keeping rose quartz close can help you attract new romantic opportunities and deepen your existing relationships.
        </p>
      </div>

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-amber-200 text-lg z-10">
        {pageNumber}
      </div>
    </div>
  )
}
