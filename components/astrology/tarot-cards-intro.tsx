export function TarotCardsIntro({ pageNumber }: { pageNumber: number }) {
  return (
    <div className="h-full bg-gradient-to-br from-slate-900 via-purple-950 to-black text-amber-100 flex flex-col justify-center relative px-16 py-10">
      <div className="text-center mb-8">
        <h1 className="text-5xl font-semibold tracking-[0.15em] font-serif text-amber-200">
          TAROT CARDS
        </h1>
      </div>

      <div className="flex items-start max-w-3xl mx-auto">
        <div className="text-8xl font-serif text-amber-300 mr-4 leading-none">T</div>
        <p className="text-base leading-relaxed text-amber-100 pt-6 font-medium">
          arot reading serves as a mirror to the soul, offering insights into one's deep thoughts, feelings, and the energies surrounding their life. Originating in Italy in the 15<sup>th</sup> century as a card game, it evolved into a tool of divination and self-reflection by the 18<sup>th</sup> century. The tarot deck, rich with symbolism and imagery, consists of 78 cards divided into two main categories: the Major Arcana and the Minor Arcana, each offering unique insights and guidance.
        </p>
      </div>

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-amber-200 text-lg">
        {pageNumber}
      </div>
    </div>
  )
}
