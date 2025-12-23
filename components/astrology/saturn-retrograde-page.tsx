import React from "react"
import { Section } from "./base/Section"

interface SaturnRetrogradePageProps {
  pageNumber: number
}

export function SaturnRetrogradePage({ pageNumber }: SaturnRetrogradePageProps) {
  return (
    <div className="h-full bg-black text-amber-100 flex flex-col flex-1 relative">
      <Section className="page-dark flex flex-col justify-between items-center">
      {/* Decorative Frame */}
      <div className="max-w-2xl mx-auto mb-8">
        <div className="border border-amber-200/30 rounded-lg p-6 relative">
          {/* Decorative top element */}
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-black px-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-1 border border-amber-200/50"></div>
              <div className="w-2 h-2 border border-amber-200/50 rounded-full"></div>
              <div className="w-3 h-1 border border-amber-200/50"></div>
            </div>
          </div>

          <h1 className="text-xl font-serif text-center mb-6 text-amber-200">SATURN</h1>

          <p className="text-base leading-relaxed text-center">
            During Saturn retrograde, there is a call to review our commitments, discipline, and the structures thatdefine our lives. It's a period that often feels like a test of our patience and persistence, challenging usto reassess the durability and authenticity of our goals and the methods we use to achieve them. This phaseencourages a consolidation of our efforts, refining our strategies, and perhaps letting go of what no longerserves our highest good.
          </p>

          {/* Saturn symbol at bottom */}
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-black px-4">
            <div className="w-8 h-8 border border-amber-200/50 rounded-full flex items-center justify-center">
              <span className="text-amber-200 text-lg">♄</span>
            </div>
          </div>
        </div>
      </div>

      {/* Saturn Retrograde Through Signs */}
      <div className="max-w-4xl mx-auto min-h-full flex flex-col">
        <h2 className="text-xl font-serif text-center mb-8 text-amber-200 tracking-wider">
          SATURN RETROGRADE
          <br />
          THROUGH THE SIGNS
        </h2>

        <div className="grid grid-cols-2 gap-8 flex-1">
          {/* Left Column */}
          <div className="space-y-6 flex-1">
            <div className="flex items-start space-x-3">
              <span className="text-amber-200 text-lg mt-1">♈</span>
              <div>
                <h3 className="font-semibold text-amber-200 mb-2">ARIES</h3>
                <p className="text-sm leading-relaxed">
                  Challenges to your independence and leadership abilities prompt a reconsideration of how you initiateactions and assert your will. Reflect on the balance between autonomy and responsibility, ensuringyour ambitions are rooted in maturity and realism.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <span className="text-amber-200 text-lg mt-1">♊</span>
              <div>
                <h3 className="font-semibold text-amber-200 mb-2">GEMINI</h3>
                <p className="text-sm leading-relaxed">
                  Communication structures and the way you process and share information are under review. Consider ifyour methods of communication and learning are efficient and responsible, and if they contribute toyour long-term objectives.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <span className="text-amber-200 text-lg mt-1">♉</span>
              <div>
                <h3 className="font-semibold text-amber-200 mb-2">TAURUS</h3>
                <p className="text-sm leading-relaxed">
                  Your approach to material security and values may face scrutiny. It's time to reassess your financialand personal commitments, focusing on building a stable foundation that reflects your true values andlong-term goals.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <span className="text-amber-200 text-lg mt-1">♋</span>
              <div>
                <h3 className="font-semibold text-amber-200 mb-2">CANCER</h3>
                <p className="text-sm leading-relaxed">
                  Emotional security, family responsibilities, and foundational structures are highlighted. Reflect onyour emotional attachments and how they influence your sense of responsibility and discipline. It's aperiod for strengthening your emotional and domestic foundations.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6 flex-1">
            <div className="flex items-start space-x-3">
              <span className="text-amber-200 text-lg mt-1">♌</span>
              <div>
                <h3 className="font-semibold text-amber-200 mb-2">LEO</h3>
                <p className="text-sm leading-relaxed">
                  Creative projects and expressions of your identity could hit roadblocks. This retrograde challengesyou to rethink how you pursue recognition and express your leadership. Rediscover what truly ignitesyour passion and joy.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <span className="text-amber-200 text-lg mt-1">♐</span>
              <div>
                <h3 className="font-semibold text-amber-200 mb-2">SAGITTARIUS</h3>
                <p className="text-sm leading-relaxed">
                  Philosophical and adventurous pursuits might feel less straightforward. It's a period to reassess yourbeliefs and the ways you seek freedom and expansion. Patience in exploration and understanding iscrucial.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <span className="text-amber-200 text-lg mt-1">♍</span>
              <div>
                <h3 className="font-semibold text-amber-200 mb-2">VIRGO</h3>
                <p className="text-sm leading-relaxed">
                  Efforts to organize, analyze, and take practical action may be frustrated. Reflect on your methods androutines, ensuring they genuinely contribute to your well-being and productivity. It's a time formeticulous planning rather than immediate action.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <span className="text-amber-200 text-lg mt-1">♑</span>
              <div>
                <h3 className="font-semibold text-amber-200 mb-2">CAPRICORN</h3>
                <p className="text-sm leading-relaxed">
                  Ambitions and career goals are under scrutiny. You might find that your usual drive to achieve andclimb the ladder requires reevaluation. Focus on strategies that align with your true goals andethics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      </Section>
    </div>
  )
}
