import React from "react"

export function PersonalizedCrystalCharts({ pageNumber }: { pageNumber: number }) {
  return (
    <div className="h-full bg-gradient-to-br from-[#b89968] via-[#c4a484] to-[#b89968] flex flex-col flex-1 relative px-12 py-10">
      {/* Title */}
      <div className="text-center mb-10">
        <h1 className="text-5xl md:text-6xl font-light tracking-[0.15em] font-serif text-white mb-2">
          PERSONALIZED
        </h1>
        <h1 className="text-5xl md:text-6xl font-light tracking-[0.15em] font-serif text-white">
          CRYSTAL CHARTS
        </h1>
      </div>

      {/* Decorative ornament above title */}
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 flex items-center gap-3">
        <div className="w-12 h-px bg-white/40"></div>
        <svg viewBox="0 0 24 24" className="w-6 h-6 text-white fill-current opacity-50">
          <path d="M12 2L14 10L22 12L14 14L12 22L10 14L2 12L10 10Z" />
        </svg>
        <div className="w-12 h-px bg-white/40"></div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col items-center justify-center max-w-4xl mx-auto">
        {/* Left content - main text */}
        <div className="mb-8">
          <p className="text-white leading-relaxed text-base mb-6 font-medium">
            <span className="font-bold">Integrating crystals into your astrological practice opens a door to deep personal transformation and heightened cosmic connection.</span>
          </p>

          <p className="text-white leading-relaxed text-base font-medium">
            Create a personalized crystal chart by aligning your astrological birth chart with corresponding crystals. Identify not only your Sun sign crystal but also those linked to your Moon sign for emotional balance, your Mercury sign for communication, Venus for love and relationships, and Mars for energy and drive. This holistic approach ensures a comprehensive resonance with your astrological blueprint.
          </p>
        </div>

        {/* Right content box - Crystal Cleansing section */}
        <div className="border-2 border-white/50 rounded-lg p-8 bg-[#a08566]/30 backdrop-blur-sm max-w-2xl">
          {/* Decorative ornament */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <svg viewBox="0 0 80 80" className="w-16 h-16 text-white fill-current opacity-60">
                <path d="M40 10L48 30L68 38L48 46L40 66L32 46L12 38L32 30Z" stroke="currentColor" strokeWidth="2" fill="none" />
                <path d="M40 20L45 35L60 40L45 45L40 60L35 45L20 40L35 35Z" stroke="currentColor" strokeWidth="1" fill="none" />
              </svg>
              {/* Decorative stars */}
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-white rounded-full opacity-50"></div>
              <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-white rounded-full opacity-40"></div>
            </div>
          </div>

          <h2 className="text-2xl font-serif text-white tracking-wider mb-6 text-center">
            CRYSTAL CLEANSING & CHARGING<br />
            WITH CELESTIAL EVENTS
          </h2>

          <p className="text-white text-sm leading-relaxed mb-5 font-medium">
            To maximize the potential of your crystals, cleanse and charge them under significant celestial events such as new moons, full moons, eclipses, or planetary alignments. Each event carries a unique energy that can be harnessed to clear your crystals of any stagnant energy and infuse them with fresh cosmic vibrations. For instance, charging a Garnet under a Capricorn new moon amplifies intentions related to ambition and discipline, while cleansing an Amethyst during a Pisces full moon can deepen spiritual insights and intuition.
          </p>

          <p className="text-white text-sm leading-relaxed font-medium">
            Crystal cleansing is a practice used to clear crystals of any negative or stagnant energy they have absorbed, restoring them to their natural state. This is essential for maintaining the effectiveness and purity of your crystals, especially if they are used frequently in healing, meditation, or personal spaces. Here's a step-by-step guide on how to cleanse your crystals effectively.
          </p>

          {/* Decorative bottom elements */}
          <div className="flex justify-center mt-6 gap-3">
            <div className="w-8 h-8 border border-white/40 rounded-full flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-full opacity-50"></div>
            </div>
            <div className="w-6 h-6 border border-white/40 rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full opacity-40"></div>
            </div>
          </div>
        </div>

        {/* Decorative crystal illustration at bottom */}
        <div className="mt-8 flex justify-center">
          <svg viewBox="0 0 120 60" className="w-32 h-16 text-white fill-current opacity-40">
            <path d="M20 50l20-40 20 10 20-30 20 40-40 20z" stroke="currentColor" strokeWidth="1.5" fill="none" />
            <path d="M30 40l10-20 10 5 10-15" stroke="currentColor" strokeWidth="0.8" />
          </svg>
        </div>
      </div>

      {/* Page Number */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white text-sm">
        {pageNumber}
      </div>

      {/* Decorative ornament at bottom */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center gap-2 opacity-40">
        <div className="w-8 h-px bg-white"></div>
        <div className="w-1 h-1 bg-white rounded-full"></div>
        <div className="w-8 h-px bg-white"></div>
      </div>
    </div>
  )
}
