export function TarotSuperstitions({ pageNumber }: { pageNumber: number }) {
  return (
    <div className="h-full bg-gradient-to-br from-slate-900 via-purple-950 to-black text-amber-100 flex flex-col relative px-12 py-10">
      {/* Ornate Frame Header */}
      <div className="relative max-w-4xl mx-auto mb-8">
        <div className="border-2 border-amber-600/50 rounded-2xl p-6 bg-slate-900/50">
          <div className="absolute -top-1 -left-1 w-6 h-6 border-t-2 border-l-2 border-amber-600 rounded-tl-lg"></div>
          <div className="absolute -top-1 -right-1 w-6 h-6 border-t-2 border-r-2 border-amber-600 rounded-tr-lg"></div>
          <div className="absolute -bottom-1 -left-1 w-6 h-6 border-b-2 border-l-2 border-amber-600 rounded-bl-lg"></div>
          <div className="absolute -bottom-1 -right-1 w-6 h-6 border-b-2 border-r-2 border-amber-600 rounded-br-lg"></div>

          <h1 className="text-center text-3xl font-light tracking-wider text-amber-200 mb-3">
            SUPERSTITIONS<br />ABOUT TAROT CARDS
          </h1>
          <p className="text-center text-sm text-amber-100">
            Tarot cards are surrounded by a host of superstitions, reflecting their mysterious and occult nature. Some of the most common include:
          </p>
        </div>
      </div>

      {/* Superstitions Grid */}
      <div className="grid grid-cols-3 gap-x-8 gap-y-6 max-w-6xl mx-auto">
        {/* Never Buy Your Own Deck */}
        <div>
          <h3 className="text-sm font-bold text-amber-200 mb-2 tracking-wide">
            NEVER BUY YOUR<br />OWN DECK
          </h3>
          <p className="text-xs leading-relaxed text-amber-100">
            A popular belief suggests that your first tarot deck should be a gift, to ensure good luck and a stronger connection to the cards.
          </p>
        </div>

        {/* Don't Ask Same Question Twice */}
        <div>
          <h3 className="text-sm font-bold text-amber-200 mb-2 tracking-wide">
            DON'T ASK THE SAME<br />QUESTION TWICE
          </h3>
          <p className="text-xs leading-relaxed text-amber-100">
            It's believed that asking the same question multiple times can confuse the cards and lead to inaccurate or misleading readings.
          </p>
        </div>

        {/* Cleanse Your Cards Regularly */}
        <div>
          <h3 className="text-sm font-bold text-amber-200 mb-2 tracking-wide">
            CLEANSE YOUR CARDS<br />REGULARLY
          </h3>
          <p className="text-xs leading-relaxed text-amber-100">
            It's a common practice to cleanse tarot cards to remove any residual negative energy. Methods include passing them through incense smoke, placing them under moonlight, or using crystals like clear quartz or selenite.
          </p>
        </div>

        {/* Wrap Your Cards in Silk */}
        <div>
          <h3 className="text-sm font-bold text-amber-200 mb-2 tracking-wide">
            WRAP YOUR CARDS<br />IN SILK
          </h3>
          <p className="text-xs leading-relaxed text-amber-100">
            Storing or wrapping tarot cards in silk is said to protect their energy and enhance psychic connection.
          </p>
        </div>

        {/* Cards Have a Spirit */}
        <div>
          <h3 className="text-sm font-bold text-amber-200 mb-2 tracking-wide">
            CARDS HAVE A SPIRIT
          </h3>
          <p className="text-xs leading-relaxed text-amber-100">
            Some traditions believe that each tarot deck has its own spirit or energy, and it's important to form a respectful relationship with your cards to get accurate readings.
          </p>
        </div>

        {/* Don't Read When Emotionally Distressed */}
        <div>
          <h3 className="text-sm font-bold text-amber-200 mb-2 tracking-wide">
            DON'T READ FOR YOURSELF WHEN EMOTIONALLY DISTRESSED
          </h3>
          <p className="text-xs leading-relaxed text-amber-100">
            Reading your own cards when highly emotional or distressed is thought to cloud your judgment and intuition, leading to biased or inaccurate interpretations.
          </p>
        </div>

        {/* Don't Let Others Touch Your Cards */}
        <div>
          <h3 className="text-sm font-bold text-amber-200 mb-2 tracking-wide">
            DON'T LET OTHERS<br />TOUCH YOUR CARDS
          </h3>
          <p className="text-xs leading-relaxed text-amber-100">
            This superstition comes from the idea that other people's energies may contaminate your deck, affecting the accuracy of readings.
          </p>
        </div>

        {/* Always Cut Deck with Left Hand */}
        <div>
          <h3 className="text-sm font-bold text-amber-200 mb-2 tracking-wide">
            ALWAYS CUT THE DECK<br />WITH YOUR LEFT HAND
          </h3>
          <p className="text-xs leading-relaxed text-amber-100">
            The left hand is traditionally associated with intuition and the subconscious mind, so cutting the deck with the left hand is believed to enhance the reader's connection to their intuitive powers.
          </p>
        </div>

        {/* Hand Illustration */}
        <div className="flex items-end justify-center">
          <svg viewBox="0 0 80 100" className="w-20 h-24 text-amber-600">
            <path d="M40 90 L40 50 L35 45 L30 50 L30 70 M40 50 L45 40 L50 45 L50 65" stroke="currentColor" strokeWidth="1.5" fill="none"/>
            <circle cx="40" cy="35" r="3" fill="currentColor"/>
            <path d="M35 30 L40 25 L45 30" stroke="currentColor" strokeWidth="1.5" fill="none"/>
          </svg>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-amber-200 text-lg">
        {pageNumber}
      </div>
    </div>
  )
}
