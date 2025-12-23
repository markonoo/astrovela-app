export function MajorArcanaCards1({ pageNumber }: { pageNumber: number }) {
  const cards = [
    { num: 4, file: "tarot-04-emperor", name: "THE EMPEROR", meaning: "Authority, structure, control.", reversed: "Domination, rigidity, inflexibility." },
    { num: 5, file: "tarot-05-hierophant", name: "THE HIEROPHANT", meaning: "Tradition, conformity, morality.", reversed: "Rebellion, subversiveness, new approaches." },
    { num: 6, file: "tarot-06-lovers", name: "THE LOVERS", meaning: "Love, harmony, relationships, important choices.", reversed: "Disharmony, imbalance, misalignment of values." },
    { num: 7, file: "tarot-07-chariot", name: "THE CHARIOT", meaning: "Willpower, victory, determination.", reversed: "Lack of control, aggression, scattered energy." },
    { num: 8, file: "tarot-08-strength", name: "STRENGTH", meaning: "Courage, inner strength, patience.", reversed: "Self-doubt, weakness, insecurity." },
    { num: 9, file: "tarot-09-hermit", name: "THE HERMIT", meaning: "Solitude, introspection, wisdom.", reversed: "Isolation, loneliness, withdrawal." },
    { num: 10, file: "tarot-10-wheel", name: "WHEEL OF FORTUNE", meaning: "Change, cycles, fate.", reversed: "Bad luck, resistance to change, external forces." },
    { num: 11, file: "tarot-11-justice", name: "JUSTICE", meaning: "Fairness, truth, law.", reversed: "Injustice, unfairness, lack of accountability." }
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
