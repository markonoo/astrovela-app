import { Section } from "./base/Section"

interface YearlyForecast2029Part2Props {
  pageNumber: number
}

export function YearlyForecast2029Part2({ pageNumber }: YearlyForecast2029Part2Props) {
  return (
    <div className="h-full bg-stone-100 flex flex-col flex-1">
      <Section className="page-light max-w-4xl flex flex-col">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-stone-700 flex-1">
          <div>
            <h2 className="text-xl font-semibold mb-4 text-stone-800 tracking-wider">JUNE</h2>
            <div className="space-y-4 flex-1 text-sm leading-relaxed">
              <p>
                <span className="font-medium">June 2:</span> Venus enters Cancer. Emotional intimacy and nurturingrelationships take precedence. It's a time to focus on family and creating a supportive environment.
              </p>
              <p>
                <span className="font-medium">June 5:</span> Mars enters Libra. Actions are geared towards creatingharmony and balance. This is a favorable period for diplomacy and working towards equitable solutions inconflicts.
              </p>
              <p>
                <span className="font-medium">June 13:</span> Mercury enters Gemini. Quick thinking and adaptabilitydefine this transit. It's a favorable time for learning, teaching, and short-term projects.
              </p>
              <p>
                <span className="font-medium">June 21:</span> Sun enters Cancer (Summer Solstice). Focus shifts toemotional security, family, and home life. This is an ideal period for reconnecting with your roots andcreating a nurturing space.
              </p>
            </div>

            <h2 className="text-xl font-semibold mb-4 mt-8 text-stone-800 tracking-wider">JULY</h2>
            <div className="space-y-4 flex-1 text-sm leading-relaxed">
              <p>
                <span className="font-medium">July 1:</span> Mercury enters Cancer. Communication takes on a moreemotional and intuitive tone. It's a time to share feelings and strengthen bonds with loved ones.
              </p>
              <p>
                <span className="font-medium">July 15:</span> Mercury enters Leo. Confidence and creativity infuseconversations. It's an excellent time for public speaking, storytelling, and self-expression.
              </p>
              <p>
                <span className="font-medium">July 22:</span> Sun enters Leo. Self-expression, creativity, and joy arein the spotlight. This is a time to shine, celebrate your unique talents, and focus on personalfulfillment.
              </p>
            </div>

            <h2 className="text-xl font-semibold mb-4 mt-8 text-stone-800 tracking-wider">AUGUST</h2>
            <div className="space-y-4 flex-1 text-sm leading-relaxed">
              <p>
                <span className="font-medium">August 7:</span> Venus enters Virgo. Attention to detail and acts ofservice define relationships during this transit. Practicality and thoughtfulness enhance connectionswith others.
              </p>
              <p>
                <span className="font-medium">August 22:</span> Sun enters Virgo. A time for prioritizing health,
                organization, and self-improvement. The energy supports refining routines and focusing on productiveefforts.
              </p>
            </div>

            <h2 className="text-xl font-semibold mb-4 mt-8 text-stone-800 tracking-wider">SEPTEMBER</h2>
            <div className="space-y-4 flex-1 text-sm leading-relaxed">
              <p>
                <span className="font-medium">September 22:</span> Sun enters Libra (Autumnal Equinox). Balance,
                fairness, and relationships take center stage. It's a time for collaboration, compromise, and creatingharmony in all areas of life.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4 text-stone-800 tracking-wider">OCTOBER</h2>
            <div className="space-y-4 flex-1 text-sm leading-relaxed">
              <p>
                <span className="font-medium">October 23:</span> Sun enters Scorpio. A transformative energy bringsfocus to deep emotional healing and uncovering hidden truths. This is a powerful time for introspectionand regeneration.
              </p>
            </div>

            <h2 className="text-xl font-semibold mb-4 mt-8 text-stone-800 tracking-wider">NOVEMBER</h2>
            <div className="space-y-4 flex-1 text-sm leading-relaxed">
              <p>
                <span className="font-medium">November 22:</span> Sun enters Sagittarius. Optimism, exploration, and athirst for knowledge take the lead. It's a great time for travel, higher learning, and pursuing broaderperspectives.
              </p>
            </div>

            <h2 className="text-xl font-semibold mb-4 mt-8 text-stone-800 tracking-wider">DECEMBER</h2>
            <div className="space-y-4 flex-1 text-sm leading-relaxed">
              <p>
                <span className="font-medium">December 21:</span> Sun enters Capricorn (Winter Solstice). The focusshifts to ambition, structure, and long-term goals. It's a time for assessing achievements and settingplans for future success.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}
