export function MajorArcanaCards2({ pageNumber }: { pageNumber: number }) {
  const cards = [
    { num: 12, file: "tarot-12-hanged-man", name: "THE HANGED MAN", meaning: "Suspension, letting go, new perspectives.", reversed: "Stalling, indecision, resistance to change." },
    { num: 13, file: "tarot-13-death", name: "DEATH", meaning: "Endings, transformation, transition.", reversed: "Resistance to change, personal transformation, inner purging." },
    { num: 14, file: "tarot-14-temperance", name: "TEMPERANCE", meaning: "Balance, moderation, harmony.", reversed: "Imbalance, excess, lack of long-term vision." },
    { num: 15, file: "tarot-15-devil", name: "THE DEVIL", meaning: "Bondage, materialism, shadow self.", reversed: "Breaking free, detachment, overcoming addiction." },
    { num: 16, file: "tarot-16-tower", name: "THE TOWER", meaning: "Sudden change, upheaval, chaos.", reversed: "Avoidance of disaster, fear of change, delayed crisis." },
    { num: 17, file: "tarot-17-star", name: "THE STAR", meaning: "Hope, faith, rejuvenation.", reversed: "Lack of faith, despair, discouragement." },
    { num: 18, file: "tarot-18-moon", name: "THE MOON", meaning: "Illusion, fear, anxiety.", reversed: "Clarity, release of fear, unveiling of secrets." },
    { num: 19, file: "tarot-19-sun", name: "THE SUN", meaning: "Success, vitality, joy.", reversed: "Temporary depression, lack of success, clouded truth." }
  ]

  return (
    <div className="h-full bg-gradient-to-br from-slate-900 via-purple-950 to-black text-amber-100 flex flex-col relative px-8 py-6">
      <div className="grid grid-cols-4 gap-4">
        {cards.map((card, idx) => (
          <div key={idx} className="text-center">
            <div className="bg-stone-200 rounded-lg p-2 mb-2 aspect-[2/3] flex items-center justify-center overflow-hidden">
              <img 
                src={`/${card.file}.png`}
                alt={`${card.name} tarot card`}
                className="w-full h-full object-cover rounded"
              />
            </div>
            <h3 className="text-xs font-bold text-amber-200 mb-1">{card.name}</h3>
            <p className="text-xs text-amber-300 mb-1 italic">({card.num})</p>
            <p className="text-[10px] text-amber-100 leading-tight">{card.meaning}</p>
            <p className="text-[10px] text-amber-300 mt-1 italic leading-tight">Reversed: {card.reversed}</p>
          </div>
        ))}
      </div>

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-amber-200 text-lg">
        {pageNumber}
      </div>
    </div>
  )
}
