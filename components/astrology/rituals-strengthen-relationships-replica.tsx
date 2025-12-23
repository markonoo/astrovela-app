export function RitualsStrengthenRelationshipsReplica({ pageNumber }: { pageNumber: number }) {
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

      <div className="relative z-10">
        <h1 className="text-center text-2xl font-semibold tracking-wider text-amber-200 mb-6">
          RITUALS TO STRENGTHEN<br />RELATIONSHIPS
        </h1>

        <div className="grid grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Couple's Unity Candle Ritual */}
          <div>
            <h3 className="text-base font-bold text-amber-200 mb-2">
              COUPLE'S UNITY<br />CANDLE RITUAL
            </h3>
            <p className="text-xs text-amber-100 mb-2 font-medium"><span className="font-bold italic">Materials:</span> Two white candles, a red or pink candle, and a lighter or matches.</p>
            <p className="text-xs leading-relaxed text-amber-100 font-medium">
              <span className="font-bold italic">Instructions:</span> Sit with your partner in a quiet, comfortable space. Each of you should hold a white candle. Light your candles and, together, use them to light the red or pink candle, symbolizing your united love. As the central candle burns, share your intentions and desires for your relationship. Let the candle burn down completely, or extinguish it and relight it during future rituals.
            </p>
          </div>

          {/* Love Knot Ritual */}
          <div>
            <h3 className="text-base font-bold text-amber-200 mb-2">
              LOVE KNOT RITUAL
            </h3>
            <p className="text-xs text-amber-100 mb-2 font-medium"><span className="font-bold italic">Materials:</span> A length of red or pink ribbon, and two small objects that represent each of you (such as charms or rings).</p>
            <p className="text-xs leading-relaxed text-amber-100 font-medium">
              <span className="font-bold italic">Instructions:</span> Tie one end of the ribbon to one of the objects, and the other end to the second object, creating a knot in the center. As you tie the knot, say together, "With this knot, we strengthen our bond and deepen our love." Keep the ribbon in a special place as a symbol of your connection.
            </p>
          </div>

          {/* Heart Connection Meditation */}
          <div>
            <h3 className="text-base font-bold text-amber-200 mb-2">
              HEART CONNECTION<br />MEDITATION
            </h3>
            <p className="text-xs text-amber-100 mb-2 font-medium"><span className="font-bold italic">Materials:</span> None, just a quiet space where you can sit together.</p>
            <p className="text-xs leading-relaxed text-amber-100 font-medium">
              <span className="font-bold italic">Instructions:</span> Sit facing each other, holding hands. Close your eyes and take deep breaths together, synchronizing your breathing. Visualize a warm, glowing light emanating from your heart and flowing into your partner's heart. Feel this energy connecting you, growing stronger with each breath. After a few minutes, open your eyes and share your feelings with each other.
            </p>
          </div>

          {/* Daily Gratitude Ritual */}
          <div>
            <h3 className="text-base font-bold text-amber-200 mb-2">
              DAILY GRATITUDE RITUAL
            </h3>
            <p className="text-xs text-amber-100 mb-2 font-medium"><span className="font-bold italic">Materials:</span> None, just a few minutes of your time each day.</p>
            <p className="text-xs leading-relaxed text-amber-100 font-medium">
              <span className="font-bold italic">Instructions:</span> Each day, take a moment to express gratitude for your partner. You can do this verbally, by writing a note, or simply by thinking about the things you appreciate about them. This practice helps to keep the positive energy flowing in your relationship and reminds you both of the love and support you share.
            </p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-amber-200 text-lg z-10">
        {pageNumber}
      </div>
    </div>
  )
}
