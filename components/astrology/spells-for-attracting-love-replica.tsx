export function SpellsForAttractingLoveReplica({ pageNumber }: { pageNumber: number }) {
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
          SPELLS FOR<br />ATTRACTING LOVE
        </h1>

        <div className="grid grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Rose Quartz Attraction Spell */}
          <div>
            <h3 className="text-base font-bold text-amber-200 mb-2">
              ROSE QUARTZ<br />ATTRACTION SPELL
            </h3>
            <p className="text-xs text-amber-100 mb-2 font-medium"><span className="font-bold italic">Materials:</span> A piece of rose quartz, a pink candle, and a small piece of paper.</p>
            <p className="text-xs leading-relaxed text-amber-100 font-medium">
              <span className="font-bold italic">Instructions:</span> Write down the qualities you desire in a partner on the paper. Light the pink candle and hold the rose quartz in your hand. Visualize yourself with your ideal partner, feeling loved and happy. Read your list aloud, then fold the paper and place it under the candle. Let the candle burn for at least 30 minutes while you meditate on your intention. Keep the rose quartz with you as a reminder of your goal.
            </p>
          </div>

          {/* Honey Jar Love Spell */}
          <div>
            <h3 className="text-base font-bold text-amber-200 mb-2">
              HONEY JAR<br />LOVE SPELL
            </h3>
            <p className="text-xs text-amber-100 mb-2 font-medium"><span className="font-bold italic">Materials:</span> A small jar, honey, a piece of paper, and a pink or red ribbon.</p>
            <p className="text-xs leading-relaxed text-amber-100 font-medium">
              <span className="font-bold italic">Instructions:</span> Write your name and the name of the person you wish to attract on the paper. Fold the paper and place it in the jar. Fill the jar with honey, symbolizing sweetness and attraction. Seal the jar and wrap it with the ribbon, tying it in a bow. Place the jar on your love altar or in a special place, and every day, hold the jar and visualize love flowing into your life.
            </p>
          </div>

          {/* Full Moon Love Spell */}
          <div>
            <h3 className="text-base font-bold text-amber-200 mb-2">
              FULL MOON<br />LOVE SPELL
            </h3>
            <p className="text-xs text-amber-100 mb-2 font-medium"><span className="font-bold italic">Materials:</span> A bowl of water, a silver coin, and a white candle.</p>
            <p className="text-xs leading-relaxed text-amber-100 font-medium">
              <span className="font-bold italic">Instructions:</span> On the night of a full moon, fill the bowl with water and place the silver coin at the bottom. Light the white candle and hold it so the flame reflects on the surface of the water. As you gaze into the water, visualize the face of your ideal partner. Whisper your desire for love to the moon, asking for its guidance and blessing. Leave the bowl outside under the moonlight overnight. In the morning, pour the water into the earth and keep the coin as a charm.
            </p>
          </div>

          {/* Red Ribbon Attraction Spell */}
          <div>
            <h3 className="text-base font-bold text-amber-200 mb-2">
              RED RIBBON<br />ATTRACTION SPELL
            </h3>
            <p className="text-xs text-amber-100 mb-2 font-medium"><span className="font-bold italic">Materials:</span> A red ribbon, a pink candle, and a piece of paper.</p>
            <p className="text-xs leading-relaxed text-amber-100 font-medium">
              <span className="font-bold italic">Instructions:</span> Write your name and the qualities you seek in a partner on the paper. Light the pink candle and hold the red ribbon in your hands, focusing on your intention to attract love. Tie the ribbon around the paper, knotting it securely. As you tie the knot, say, "With this ribbon, I attract love and joy into my life." Keep the ribbon and paper in a safe place, and revisit it whenever you need a reminder of your intention.
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
