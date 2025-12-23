export function MeaningOfNumbers14Replica({ pageNumber }: { pageNumber: number }) {
  return (
    <div className="h-full bg-gradient-to-br from-slate-800 via-blue-900 to-indigo-950 text-amber-100 flex flex-col justify-center relative px-16 py-10">
      {/* Title Frame */}
      <div className="border-2 border-dashed border-amber-400 rounded-lg p-5 mb-8 max-w-3xl mx-auto bg-blue-900/20">
        <img 
          src="/numerology-frame.png" 
          alt="Decorative Frame"
          className="w-full h-6 object-cover mb-3"
        />
        <h1 className="text-3xl font-semibold text-center text-amber-200 mb-3">THE MEANING<br />OF NUMBERS</h1>
        <p className="text-sm text-center text-amber-100 max-w-3xl mx-auto font-medium">
          In numerology, each number from 1 to 9 has its own distinct characteristics and influences. These numbers help define a person's traits, strengths, challenges, and the overall course of their lives. Here's a brief overview of what each number typically represents in numerology:
        </p>
      </div>

      {/* Numbers Grid */}
      <div className="grid grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Number 1 */}
        <div>
          <div className="text-8xl font-light text-amber-400/40 mb-2">1</div>
          <h3 className="text-xl font-bold text-amber-200 mb-2">THE LEADER</h3>
          <p className="text-sm text-amber-100 mb-2 font-medium"><span className="font-bold italic">Traits:</span> Independence, ambition, originality, courage, initiative</p>
          <p className="text-sm text-amber-100 mb-2 font-medium"><span className="font-bold italic">Challenges:</span> Stubbornness, aggression, selfishness, impatience, arrogance</p>
          <p className="text-sm text-amber-100 font-medium"><span className="font-bold italic">Opportunities:</span> Leadership roles, cutting-edge work, self-employment</p>
        </div>

        {/* Number 2 */}
        <div>
          <div className="text-8xl font-light text-amber-400/40 mb-2">2</div>
          <h3 className="text-xl font-bold text-amber-200 mb-2">THE DIPLOMAT</h3>
          <p className="text-sm text-amber-100 mb-2 font-medium"><span className="font-bold italic">Traits:</span> Diplomacy, friendliness, sensitivity, partnership, grace</p>
          <p className="text-sm text-amber-100 mb-2 font-medium"><span className="font-bold italic">Challenges:</span> Indecisiveness, oversensitivity, dependency, self-doubt</p>
          <p className="text-sm text-amber-100 font-medium"><span className="font-bold italic">Opportunities:</span> Negotiation, counseling, cooperation in team environments</p>
        </div>

        {/* Number 3 */}
        <div>
          <div className="text-8xl font-light text-amber-400/40 mb-2">3</div>
          <h3 className="text-xl font-bold text-amber-200 mb-2">THE COMMUNICATOR</h3>
          <p className="text-sm text-amber-100 mb-2 font-medium"><span className="font-bold italic">Traits:</span> Creativity, sociability, expression, joyfulness, imagination</p>
          <p className="text-sm text-amber-100 mb-2 font-medium"><span className="font-bold italic">Challenges:</span> Exaggeration, disorganization, procrastination</p>
          <p className="text-sm text-amber-100 font-medium"><span className="font-bold italic">Opportunities:</span> Fields in writing, speaking, acting, art, music</p>
        </div>

        {/* Number 4 */}
        <div>
          <div className="text-8xl font-light text-amber-400/40 mb-2">4</div>
          <h3 className="text-xl font-bold text-amber-200 mb-2">THE ORGANIZER</h3>
          <p className="text-sm text-amber-100 mb-2 font-medium"><span className="font-bold italic">Traits:</span> Discipline, loyalty, stability, pragmatism</p>
          <p className="text-sm text-amber-100 mb-2 font-medium"><span className="font-bold italic">Challenges:</span> Harshness, compulsiveness, restrictiveness</p>
          <p className="text-sm text-amber-100 font-medium"><span className="font-bold italic">Opportunities:</span> Business management, administration, construction, engineering</p>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-amber-200 text-lg">
        {pageNumber}
      </div>
    </div>
  )
}
