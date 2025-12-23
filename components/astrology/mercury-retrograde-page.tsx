import React from "react"
import { Section } from "./base/Section"

interface MercuryRetrogradePageProps {
  pageNumber: number
}

export function MercuryRetrogradePage({ pageNumber }: MercuryRetrogradePageProps) {
  return (
    <div className="h-full bg-black text-amber-100 flex flex-col flex-1 relative">
      <Section className="page-dark flex flex-col justify-between items-center">
      {/* Decorative Frame */}
      <div className="max-w-2xl mx-auto mb-8">
        <div className="border border-amber-200/30 rounded-lg p-6 relative">
          {/* Decorative top element */}
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-black px-4">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 border border-amber-200/50 rounded-full"></div>
              <div className="w-3 h-3 border border-amber-200/50 transform rotate-45"></div>
              <div className="w-2 h-2 border border-amber-200/50 rounded-full"></div>
            </div>
          </div>

          <h1 className="text-xl font-serif text-center mb-6 text-amber-200">MERCURY</h1>

          <p className="text-base leading-relaxed text-center">
            Retrograding Mercury, the planet of communication, intellect, and travel often signals a time forreevaluation of how we express ourselves, process information, and move from one place to another. Thisperiod is notorious for creating confusion, delays, and frustration in communication and technology.
            However, it also offers an opportunity for reflection, reassessment, and revisiting old conversations orprojects.
          </p>

          {/* Mercury symbol at bottom */}
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-black px-4">
            <div className="w-8 h-8 border border-amber-200/50 rounded-full flex items-center justify-center">
              <span className="text-amber-200 text-lg">☿</span>
            </div>
          </div>
        </div>
      </div>

      {/* Mercury Retrograde Through Signs */}
      <div className="max-w-4xl mx-auto min-h-full flex flex-col">
        <h2 className="text-xl font-serif text-center mb-8 text-amber-200 tracking-wider">
          MERCURY RETROGRADE
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
                  When Mercury retrogrades in Aries, it prompts a reconsideration of your assertiveness and directnessin communication. There may be a tendency for discussions to become debates, so it's essential tothink before speaking and act with patience.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <span className="text-amber-200 text-lg mt-1">♊</span>
              <div>
                <h3 className="font-semibold text-amber-200 mb-2">GEMINI</h3>
                <p className="text-sm leading-relaxed">
                  Being ruled by Mercury, Gemini feels the effects keenly. Misunderstandings and communicationbreakdowns are more likely. It's a period to review how we share information and to listen moreattentively.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <span className="text-amber-200 text-lg mt-1">♉</span>
              <div>
                <h3 className="font-semibold text-amber-200 mb-2">TAURUS</h3>
                <p className="text-sm leading-relaxed">
                  This retrograde phase calls for a slowdown in making financial decisions and expressing personalvalues. It's a time to reassess what truly matters to us on a material and emotional level,
                  encouraging a more deliberate approach to communication and spending.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <span className="text-amber-200 text-lg mt-1">♋</span>
              <div>
                <h3 className="font-semibold text-amber-200 mb-2">CANCER</h3>
                <p className="text-sm leading-relaxed">
                  Focus turns to the home and emotional communication. Misinterpretations with family members arepossible. Reflect on your emotional needs and how you express your care and concern for others.
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
                  Creative and romantic expressions may hit a snag. It's an opportunity to refine creative projects andconsider how our ego affects our communication. Think about the impact of your words on others.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <span className="text-amber-200 text-lg mt-1">♐</span>
              <div>
                <h3 className="font-semibold text-amber-200 mb-2">SAGITTARIUS</h3>
                <p className="text-sm leading-relaxed">
                  Plans for travel and education may face delays. It's a period for philosophical introspection andrevisiting belief systems. Keep an open mind and be prepared to adjust your viewpoints.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <span className="text-amber-200 text-lg mt-1">♍</span>
              <div>
                <h3 className="font-semibold text-amber-200 mb-2">VIRGO</h3>
                <p className="text-sm leading-relaxed">
                  Another sign ruled by Mercury, Virgo experiences a call to reorganize and reassess daily routines,
                  health, and work habits. Miscommunications at work can arise, urging a clearer delineation ofresponsibilities and tasks.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <span className="text-amber-200 text-lg mt-1">♑</span>
              <div>
                <h3 className="font-semibold text-amber-200 mb-2">CAPRICORN</h3>
                <p className="text-sm leading-relaxed">
                  Career and long-term goals are in focus. You may question your career path or the structures you'vebuilt. Use this time to plan rather than initiate new ventures.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Page Number */}
      </Section>
    </div>
  )
}
