import React from "react"
import { Section } from "./base/Section"

interface MarsRetrogradePageProps {
  pageNumber: number
}

export function MarsRetrogradePage({ pageNumber }: MarsRetrogradePageProps) {
  return (
    <div className="h-full bg-black text-amber-100 flex flex-col flex-1 relative">
      <Section className="page-dark flex flex-col justify-between items-center">
      {/* Decorative Frame */}
      <div className="max-w-2xl mx-auto mb-8">
        <div className="border border-amber-200/30 rounded-lg p-6 relative">
          {/* Decorative top element */}
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-black px-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 border border-amber-200/50 transform rotate-45"></div>
              <div className="w-2 h-2 border border-amber-200/50 rounded-full"></div>
              <div className="w-3 h-3 border border-amber-200/50 transform rotate-45"></div>
            </div>
          </div>

          <h1 className="text-xl font-serif text-center mb-6 text-amber-200">MARS</h1>

          <p className="text-base leading-relaxed text-center">
            Mars' retrograde can lead to a decrease in our usual levels of energy and assertiveness, making it feel likewe're not making progress or that our efforts are being thwarted. It's a time for internalizing our energyrather than externalizing it, focusing on strategy rather than direct action. This period prompts us toquestion our motivations, desires, and the way we go after what we want in life.
          </p>

          {/* Mars symbol at bottom */}
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-black px-4">
            <div className="w-8 h-8 border border-amber-200/50 rounded-full flex items-center justify-center">
              <span className="text-amber-200 text-lg">♂</span>
            </div>
          </div>
        </div>
      </div>

      {/* Mars Retrograde Through Signs */}
      <div className="max-w-4xl mx-auto min-h-full flex flex-col">
        <h2 className="text-xl font-serif text-center mb-8 text-amber-200 tracking-wider">
          MARS RETROGRADE
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
                  As the ruler of Aries, Mars retrograde in this sign challenges your sense of self-assertion andindependence. It's a period to rethink your approach to leadership and how you initiate actions andprojects. Patience and strategy are key.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <span className="text-amber-200 text-lg mt-1">♊</span>
              <div>
                <h3 className="font-semibold text-amber-200 mb-2">GEMINI</h3>
                <p className="text-sm leading-relaxed">
                  Communication and movement may feel stifled. Plans and projects requiring quick thinking andflexibility might face delays. It's a time to review how you assert your ideas and adapt yourstrategies for better effectiveness.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <span className="text-amber-200 text-lg mt-1">♉</span>
              <div>
                <h3 className="font-semibold text-amber-200 mb-2">TAURUS</h3>
                <p className="text-sm leading-relaxed">
                  Financial initiatives and pursuits of physical pleasures are called into question. You might findyourself reassessing your spending habits and your pursuit of material security. Focus on aligningyour actions with your true values.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <span className="text-amber-200 text-lg mt-1">♋</span>
              <div>
                <h3 className="font-semibold text-amber-200 mb-2">CANCER</h3>
                <p className="text-sm leading-relaxed">
                  Emotional energy and action related to home and family life are in focus. You may need to address pastaggressions or unresolved conflicts in these areas. Reflect on how you protect and assert yourself inyour personal life.
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
                  Creative projects, romance, and how you express your authority are examined. This is a time toreassess your leadership style and creative outputs, ensuring they are structured and aligned withyour authentic self and responsibilities.
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
                  Daily routines, work, and health commitments are scrutinized. Reflect on your methods and routines,
                  ensuring they genuinely contribute to your well-being and productivity. It's a time for meticulousplanning rather than immediate action.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <span className="text-amber-200 text-lg mt-1">♑</span>
              <div>
                <h3 className="font-semibold text-amber-200 mb-2">CAPRICORN</h3>
                <p className="text-sm leading-relaxed">
                  Career ambitions, public reputation, and long-term goals are called into question. As Saturn rulesCapricorn, this retrograde is particularly significant, urging a reassessment of your professionalpath, responsibilities, and the legacy you wish to build.
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
