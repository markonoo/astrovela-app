export function FengShuiRomanticProsperityReplica({ pageNumber }: { pageNumber: number }) {
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

      {/* Ornate Frame */}
      <div className="relative max-w-2xl mx-auto mb-8 z-10">
        <div className="border-2 border-amber-400/30 rounded-3xl p-6 bg-rose-950/40">
          <img 
            src="/palmistry-decorative.png" 
            alt="Decorative Frame"
            className="w-full h-8 object-cover mb-3"
          />

          {/* Feng Shui icon */}
          <div className="flex justify-center mb-4">
            <img 
              src="/feng-shui-icon.png" 
              alt="Feng Shui Icon"
              className="w-10 h-10 object-contain"
            />
          </div>

          <h1 className="text-center text-2xl font-semibold tracking-wider text-amber-200 mb-4">
            FENG SHUI FOR<br />ROMANTIC<br />PROSPERITY
          </h1>
          <p className="text-center text-sm text-amber-100 font-medium">
            Feng Shui, the ancient Chinese practice of arranging your environment to promote harmony and balance, can be a powerful tool in attracting and nurturing love. By thoughtfully organizing your space, you can create an atmosphere that enhances romantic energy and invites loving relationships into your life.
          </p>
        </div>
      </div>

      {/* Tips 1-2 */}
      <div className="relative z-10 grid grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div className="text-center">
          <div className="text-7xl font-light text-amber-400/40 mb-2">1</div>
          <h3 className="text-sm font-bold text-amber-200 mb-3">CREATE A HARMONIOUS<br />BEDROOM</h3>
          <p className="text-xs leading-relaxed text-amber-100 font-medium">
            The bedroom is the most important space for romantic energy. Ensure your bed is accessible from both sides, symbolizing openness to a partner. Use pairs of items, such as two bedside tables and lamps, to promote balance and partnership.
          </p>
        </div>

        <div className="text-center">
          <div className="text-7xl font-light text-amber-400/40 mb-2">2</div>
          <h3 className="text-sm font-bold text-amber-200 mb-3">CLEAR CLUTTER</h3>
          <p className="text-xs leading-relaxed text-amber-100 font-medium">
            Clutter can block the flow of positive energy. Keep your home tidy and free of unnecessary items, particularly in your bedroom. A clear, open space invites new energy and opportunities for love.
          </p>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-amber-200 text-lg z-10">
        {pageNumber}
      </div>
    </div>
  )
}
