export function LoveAffirmationsMantrasReplica({ pageNumber }: { pageNumber: number }) {
  return (
    <div className="h-full bg-gradient-to-br from-rose-950 via-red-950 to-rose-900 text-amber-100 flex flex-col justify-center relative px-16 py-10 mt-[10%]">
      {/* Decorative stars and hearts background - placeholder */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-amber-400/30 text-xs">
            Background Pattern
          </div>
        </div>
      </div>

      {/* Ornate Frame */}
      <div className="relative max-w-2xl mx-auto mb-6 z-10">
        <div className="border-2 border-amber-400/30 rounded-3xl p-6 bg-rose-950/40">
          <img 
            src="/palmistry-decorative.png" 
            alt="Decorative Frame"
            className="w-full h-6 object-cover mb-3"
          />

          {/* Heart icons */}
          <div className="flex justify-center gap-3 mb-4">
            <img src="/love-heart-icon.png" alt="Heart" className="w-6 h-6 object-contain" />
            <img src="/love-heart-icon.png" alt="Heart" className="w-5 h-5 object-contain" />
            <img src="/love-heart-icon.png" alt="Heart" className="w-6 h-6 object-contain" />
          </div>

          <h1 className="text-center text-3xl font-semibold tracking-wider text-amber-200 mb-4">
            LOVE AFFIRMATIONS<br />& MANTRAS
          </h1>
          <p className="text-center text-sm text-amber-100 font-medium">
            Affirmations and mantras are powerful tools that can help shift your mindset and energy to attract and maintain love. By repeating positive statements and sacred sounds, you can align your thoughts and emotions with the vibration of love, making it easier to manifest a loving and fulfilling relationship.
          </p>
        </div>
      </div>

      {/* Affirmations Section - Restructured: 1-2 left, 3-5 right */}
      <div className="relative z-10 grid grid-cols-2 gap-8 max-w-5xl mx-auto">
        <div>
          <h3 className="text-lg font-bold text-amber-200 mb-3">LOVE AFFIRMATIONS</h3>
          <p className="text-sm text-amber-100 mb-4 font-medium">
            Love affirmations are positive statements that you repeat regularly to yourself. They help reprogram your subconscious mind to believe in the possibility of love and to open your heart to romantic opportunities. Here's how to make effective love affirmations:
          </p>

          {/* Steps 1 and 2 */}
          <div className="space-y-4">
            <div>
              <div className="text-7xl font-light text-amber-400/40 mb-2">1</div>
              <p className="text-sm text-amber-100 font-medium">
                <span className="font-bold italic">Be Specific:</span> Your affirmations should clearly state what you want to attract. Instead of saying, "I want love," try, "I am attracting a loving, supportive partner who respects and cherishes me."
              </p>
            </div>

            <div>
              <div className="text-7xl font-light text-amber-400/40 mb-2">2</div>
              <p className="text-sm text-amber-100 font-medium">
                <span className="font-bold italic">Use Present Tense:</span> Phrase your affirmations as if they are already true. This helps your mind accept them more readily. For example, say, "I am in a happy and fulfilling relationship," rather than "I will be in a happy and fulfilling relationship."
              </p>
            </div>
          </div>
        </div>

        <div>
          {/* Steps 3, 4, and 5 */}
          <div className="space-y-4">
            <div>
              <div className="text-7xl font-light text-amber-400/40 mb-2">3</div>
              <p className="text-sm text-amber-100 font-medium">
                <span className="font-bold italic">Keep It Positive:</span> Focus on what you want, not what you don't want. Positive affirmations keep your energy focused on your desires. Avoid negative words or phrases like "I don't want to be lonely."
              </p>
            </div>

            <div>
              <div className="text-7xl font-light text-amber-400/40 mb-2">4</div>
              <p className="text-sm text-amber-100 font-medium">
                <span className="font-bold italic">Make It Believable:</span> Choose affirmations that resonate with you and feel realistic. If saying "I am in the most amazing relationship" feels too far-fetched, start with "I am open to attracting a wonderful partner."
              </p>
            </div>

            <div>
              <div className="text-7xl font-light text-amber-400/40 mb-2">5</div>
              <p className="text-sm text-amber-100 font-medium">
                <span className="font-bold italic">Feel the Emotion:</span> As you repeat your affirmations, try to feel the emotions they evoke. Imagine the joy, love, and fulfillment you will feel when your affirmation becomes a reality.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-amber-200 text-lg z-10">
        {pageNumber}
      </div>
    </div>
  )
}
