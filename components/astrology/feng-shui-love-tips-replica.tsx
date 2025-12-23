export function FengShuiLoveTipsReplica({ pageNumber }: { pageNumber: number }) {
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

      <div className="relative z-10 grid grid-cols-2 gap-6 max-w-4xl mx-auto">
        {/* Tip 3 */}
        <div className="text-center">
          <div className="text-7xl font-light text-amber-400/40 mb-2">3</div>
          <h3 className="text-sm font-bold text-amber-200 mb-2">POSITION YOUR<br />BED CORRECTLY</h3>
          <p className="text-xs leading-relaxed text-amber-100 font-medium">
            Place your bed in the "commanding position," where you can see the door while lying in bed, but are not directly in line with it. This position offers a sense of security and control, fostering a safe space for romance.
          </p>
        </div>

        {/* Tip 4 */}
        <div className="text-center">
          <div className="text-7xl font-light text-amber-400/40 mb-2">4</div>
          <h3 className="text-sm font-bold text-amber-200 mb-2">USE SOOTHING<br />COLORS</h3>
          <p className="text-xs leading-relaxed text-amber-100 font-medium">
            Soft, warm colors like pink, peach, and red are associated with love and romance. Incorporate these colors into your bedroom decor to create a calming and inviting atmosphere.
          </p>
        </div>

        {/* Tip 5 */}
        <div className="text-center">
          <div className="text-7xl font-light text-amber-400/40 mb-2">5</div>
          <h3 className="text-sm font-bold text-amber-200 mb-2">ACTIVATE THE<br />SOUTHWEST CORNER</h3>
          <p className="text-xs leading-relaxed text-amber-100 font-medium">
            In Feng Shui, the southwest corner of your home represents love and marriage. Enhance this area with crystals, candles, or artwork that symbolizes love.
          </p>
        </div>

        {/* Tip 6 */}
        <div className="text-center">
          <div className="text-7xl font-light text-amber-400/40 mb-2">6</div>
          <h3 className="text-sm font-bold text-amber-200 mb-2">BALANCE YIN & YANG<br />ENERGIES</h3>
          <p className="text-xs leading-relaxed text-amber-100 font-medium">
            Ensure your home has a balance of yin (feminine) and yang (masculine) energies. Too much of either can create an imbalance. Soft lighting, flowing fabrics, and gentle music can enhance yin energy, while bold colors, angular shapes, and active spaces can boost yang energy.
          </p>
        </div>

        {/* Tip 7 */}
        <div className="text-center">
          <div className="text-7xl font-light text-amber-400/40 mb-2">7</div>
          <h3 className="text-sm font-bold text-amber-200 mb-2">USE MIRRORS WISELY</h3>
          <p className="text-xs leading-relaxed text-amber-100 font-medium">
            Mirrors can amplify energy, but they should be used thoughtfully. Avoid placing mirrors directly across from the bed, as this can disrupt the peaceful energy needed for rest and romance. Instead, use mirrors to reflect beautiful views or objects that symbolize love.
          </p>
        </div>

        {/* Tip 8 */}
        <div className="text-center">
          <div className="text-7xl font-light text-amber-400/40 mb-2">8</div>
          <h3 className="text-sm font-bold text-amber-200 mb-2">ENHANCE THE LOVE AREA<br />IN THE BAGUA MAP</h3>
          <p className="text-xs leading-relaxed text-amber-100 font-medium">
            The Bagua Map is a Feng Shui tool that divides your space into different areas associated with various aspects of life. Enhance the love area (the far right corner from your entry) with items that promote love, such as flowers, artwork, or meaningful objects.
          </p>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-amber-200 text-lg z-10">
        {pageNumber}
      </div>
    </div>
  )
}
