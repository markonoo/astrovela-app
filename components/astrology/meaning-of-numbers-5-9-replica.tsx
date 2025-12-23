export function MeaningOfNumbers59Replica({ pageNumber }: { pageNumber: number }) {
  return (
    <div className="h-full bg-gradient-to-br from-slate-800 via-blue-900 to-indigo-950 text-amber-100 flex flex-col justify-center relative px-16 py-10">
      {/* Numbers Grid */}
      <div className="grid grid-cols-2 gap-x-12 gap-y-8 max-w-4xl mx-auto pt-4">
        {/* Number 5 */}
        <div>
          <div className="text-8xl font-light text-amber-400/40 mb-2">5</div>
          <h3 className="text-xl font-bold text-amber-200 mb-2">THE ADVENTURER</h3>
          <p className="text-sm text-amber-100 mb-2 font-medium"><span className="font-bold italic">Traits:</span> Adventurous, dynamic, unpredictable, progressive, curious</p>
          <p className="text-sm text-amber-100 mb-2 font-medium"><span className="font-bold italic">Challenges:</span> Restlessness, discontent, impulsiveness, dissatisfaction</p>
          <p className="text-sm text-amber-100 font-medium"><span className="font-bold italic">Opportunities:</span> Travel, sales, marketing, media, public relations</p>
        </div>

        {/* Number 6 */}
        <div className="relative">
          <img 
            src="/numerology-icon.png" 
            alt="Numerology Icon"
            className="absolute right-0 top-0 w-16 h-20 object-contain"
          />
          <div className="text-8xl font-light text-amber-400/40 mb-2">6</div>
          <h3 className="text-xl font-bold text-amber-200 mb-2">THE NURTURER</h3>
          <p className="text-sm text-amber-100 mb-2 font-medium"><span className="font-bold italic">Traits:</span> Responsibility, protection, caregiving, community, balance</p>
          <p className="text-sm text-amber-100 mb-2 font-medium"><span className="font-bold italic">Challenges:</span> Self-righteousness, meddling, impractical idealism</p>
          <p className="text-sm text-amber-100 font-medium"><span className="font-bold italic">Opportunities:</span> Teaching, healing, counseling, interior design, social work</p>
        </div>

        {/* Number 7 */}
        <div>
          <div className="text-8xl font-light text-amber-400/40 mb-2">7</div>
          <h3 className="text-xl font-bold text-amber-200 mb-2">THE SEEKER</h3>
          <p className="text-sm text-amber-100 mb-2 font-medium"><span className="font-bold italic">Traits:</span> Analysis, understanding, knowledge, awareness</p>
          <p className="text-sm text-amber-100 mb-2 font-medium"><span className="font-bold italic">Challenges:</span> Secretiveness, cynicism, isolation, detachment</p>
          <p className="text-sm text-amber-100 font-medium"><span className="font-bold italic">Opportunities:</span> Scientific research, spirituality, academia, analytics</p>
        </div>

        {/* Number 8 */}
        <div>
          <div className="text-8xl font-light text-amber-400/40 mb-2">8</div>
          <h3 className="text-xl font-bold text-amber-200 mb-2">THE POWERHOUSE</h3>
          <p className="text-sm text-amber-100 mb-2 font-medium"><span className="font-bold italic">Traits:</span> Authority, goal-oriented, good judgment, financial success</p>
          <p className="text-sm text-amber-100 mb-2 font-medium"><span className="font-bold italic">Challenges:</span> Materialism, workaholic tendencies, stress</p>
          <p className="text-sm text-amber-100 font-medium"><span className="font-bold italic">Opportunities:</span> Business ventures, high-ranking positions in business or government, financial services</p>
        </div>

        {/* Number 9 */}
        <div className="col-span-2">
          <div className="text-8xl font-light text-amber-400/40 mb-2">9</div>
          <h3 className="text-xl font-bold text-amber-200 mb-2">THE HUMANITARIAN</h3>
          <p className="text-sm text-amber-100 mb-2 font-medium"><span className="font-bold italic">Traits:</span> Compassion, generosity, selflessness</p>
          <p className="text-sm text-amber-100 mb-2 font-medium"><span className="font-bold italic">Challenges:</span> Emotional instability, loss of focus, mood swings</p>
          <p className="text-sm text-amber-100 font-medium"><span className="font-bold italic">Opportunities:</span> Philanthropy, arts, medicine, diplomacy</p>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-amber-200 text-lg">
        {pageNumber}
      </div>
    </div>
  )
}
