import React from "react"
import { Section } from "./base/Section"

interface JupiterRetrogradePageProps {
  pageNumber: number
}

export function JupiterRetrogradePage({ pageNumber }: JupiterRetrogradePageProps) {
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
              <div className="w-2 h-2 border border-amber-200/50 rounded-full"></div>
              <div className="w-2 h-2 border border-amber-200/50 rounded-full"></div>
            </div>
          </div>

          <h1 className="text-xl font-serif text-center mb-6 text-amber-200">JUPITER</h1>

          <p className="text-base leading-relaxed text-center">
            Jupiter is the planet of expansion, growth, luck, and our philosophical beliefs. A Jupiter retrograde periodprompts us to reflect on matters of growth, faith, and where we find meaning in life. It's a time forreevaluating our paths to personal development, understanding our beliefs, and reassessing our goals andambitions on a larger scale.
          </p>

          <div className="mt-6 text-sm leading-relaxed text-center">
            During Jupiter's retrograde, there might be a feeling that our usual luck and opportunities for growth areslowed down or less apparent. This phase encourages turning inward, looking at our beliefs, andunderstanding the truth behind our motivations. It's an opportunity to ensure our expansion aligns with ourtrue values and to refine our approach to achieving our goals.
          </div>

          {/* Jupiter symbol at bottom */}
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-black px-4">
            <div className="w-8 h-8 border border-amber-200/50 rounded-full flex items-center justify-center">
              <span className="text-amber-200 text-lg">♃</span>
            </div>
          </div>
        </div>
      </div>

      {/* Jupiter Retrograde Through Signs */}
      <div className="max-w-4xl mx-auto min-h-full flex flex-col">
        <h2 className="text-xl font-serif text-center mb-8 text-amber-200 tracking-wider">
          JUPITER RETROGRADE
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
                  The pursuit of personal growth and new beginnings might feel stalled. Use this time to reassess yourgoals and the initiatives you're passionate about. Reflect on your motivations and ensure they alignwith your true self.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <span className="text-amber-200 text-lg mt-1">♊</span>
              <div>
                <h3 className="font-semibold text-amber-200 mb-2">GEMINI</h3>
                <p className="text-sm leading-relaxed">
                  Learning, communication, and connections may undergo a period of reflection. It's a time to reassessyour approach to acquiring knowledge and sharing it with others. Focus on deepening your understandingand connections rather than spreading yourself too thin.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <span className="text-amber-200 text-lg mt-1">♉</span>
              <div>
                <h3 className="font-semibold text-amber-200 mb-2">TAURUS</h3>
                <p className="text-sm leading-relaxed">
                  Financial growth and personal values are in focus. This period may prompt you to think about thematerial and emotional resources that truly contribute to your sense of security and well-being.
                  Consider what prosperity means to you beyond the material.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <span className="text-amber-200 text-lg mt-1">♋</span>
              <div>
                <h3 className="font-semibold text-amber-200 mb-2">CANCER</h3>
                <p className="text-sm leading-relaxed">
                  Emotional growth and expansion in your personal and family life are highlighted. Reflect on youremotional security and how it supports your growth. Consider the foundations of your life and if theytruly nurture your development.
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
                  Creative and romantic aspects of life, as well as personal expression, may be reconsidered. It's aperiod to realign with what truly brings you joy and fulfillment. Assess the authenticity of yourself-expression and creative outputs.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <span className="text-amber-200 text-lg mt-1">♐</span>
              <div>
                <h3 className="font-semibold text-amber-200 mb-2">SAGITTARIUS</h3>
                <p className="text-sm leading-relaxed">
                  Philosophical beliefs, higher learning, and foreign cultures are in focus. This is a time to reflecton your belief systems and the pursuit of wisdom. Assess whether your quest for truth aligns with yourinner ethics and beliefs.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <span className="text-amber-200 text-lg mt-1">♍</span>
              <div>
                <h3 className="font-semibold text-amber-200 mb-2">VIRGO</h3>
                <p className="text-sm leading-relaxed">
                  Growth in your routines, health, and service to others comes under review. This is a time to refineyour daily practices and the ways you contribute to the well-being of yourself and others. Focus onpractical improvements that align with your larger goals.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <span className="text-amber-200 text-lg mt-1">♑</span>
              <div>
                <h3 className="font-semibold text-amber-200 mb-2">CAPRICORN</h3>
                <p className="text-sm leading-relaxed">
                  Ambitions, career, and public reputation may seem to slow down, offering a chance to ensure your goalsalign with your true purpose. Reflect on the structures you've built and if they facilitate yourgrowth.
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
