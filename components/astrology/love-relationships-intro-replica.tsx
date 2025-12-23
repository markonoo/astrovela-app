export function LoveRelationshipsIntroReplica({ pageNumber }: { pageNumber: number }) {
  return (
    <div className="h-full bg-gradient-to-br from-rose-950 via-red-950 to-rose-900 text-amber-100 flex flex-col justify-center relative px-16 py-10">
      <div className="text-center mb-10">
        <h1 className="text-5xl font-semibold tracking-[0.15em] font-serif text-amber-200">
          LOVE &<br />RELATIONSHIPS
        </h1>
      </div>

      <div className="flex items-start max-w-3xl mx-auto">
        <div className="text-9xl font-serif text-amber-300 mr-6 leading-none">F</div>
        <p className="text-base leading-relaxed text-amber-100 pt-8 font-medium">
          or ages, people have sought ways to attract love and maintain healthy, happy relationships. Across cultures and throughout history, various traditions and practices have emerged to help individuals connect with their ideal partners and foster deep emotional bonds. Whether you are seeking new romance or looking to strengthen an existing relationship, these pages offer guidance and inspiration for your personal journey toward a fulfilling and loving partnership.
        </p>
      </div>

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-amber-200 text-lg">
        {pageNumber}
      </div>
    </div>
  )
}
