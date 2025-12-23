import React from "react"
import { Section } from "./base/Section"

interface MajorArcana2Props {
  pageNumber: number
}

export function MajorArcana2({ pageNumber }: MajorArcana2Props) {
  return (
    <div className="h-full bg-gradient-to-br from-purple-900 via-indigo-900 to-black flex flex-col flex-1 relative">
      <Section className="page-dark flex flex-col justify-between p-4">
        <div>
          <div className="text-center mb-6">
            <h1 className="text-3xl font-light mb-4 tracking-[0.15em] font-serif text-purple-300">
              MAJOR ARCANA VI-XI
            </h1>
            <div className="w-24 h-px bg-purple-400 mx-auto mb-6"></div>
          </div>

          <div className="space-y-5 text-sm leading-relaxed text-gray-100">
            <div className="grid grid-cols-2 gap-4 text-xs">
              <div className="bg-purple-900/40 p-4 rounded-lg border border-purple-400/30">
                <div className="flex items-center mb-3">
                  <div className="text-2xl mr-3">VI</div>
                  <h3 className="font-medium text-purple-300">THE LOVERS</h3>
                </div>
                <p className="mb-2"><strong className="text-purple-200">Keywords:</strong> Love, choices, relationships, harmony</p>
                <p className="mb-2"><strong className="text-purple-200">Upright:</strong> True love, soul connections, important decisions</p>
                <p><strong className="text-purple-200">Reversed:</strong> Disharmony, poor choices, relationship troubles</p>
              </div>

              <div className="bg-yellow-900/40 p-4 rounded-lg border border-yellow-400/30">
                <div className="flex items-center mb-3">
                  <div className="text-2xl mr-3">VII</div>
                  <h3 className="font-medium text-yellow-300">THE CHARIOT</h3>
                </div>
                <p className="mb-2"><strong className="text-yellow-200">Keywords:</strong> Victory, control, determination, willpower</p>
                <p className="mb-2"><strong className="text-yellow-200">Upright:</strong> Success through effort, overcoming obstacles</p>
                <p><strong className="text-yellow-200">Reversed:</strong> Lack of control, aggression, defeat</p>
              </div>

              <div className="bg-green-900/40 p-4 rounded-lg border border-green-400/30">
                <div className="flex items-center mb-3">
                  <div className="text-2xl mr-3">VIII</div>
                  <h3 className="font-medium text-green-300">STRENGTH</h3>
                </div>
                <p className="mb-2"><strong className="text-green-200">Keywords:</strong> Inner strength, courage, patience, compassion</p>
                <p className="mb-2"><strong className="text-green-200">Upright:</strong> Gentle power, overcoming fear, self-control</p>
                <p><strong className="text-green-200">Reversed:</strong> Weakness, self-doubt, lack of discipline</p>
              </div>

              <div className="bg-blue-900/40 p-4 rounded-lg border border-blue-400/30">
                <div className="flex items-center mb-3">
                  <div className="text-2xl mr-3">IX</div>
                  <h3 className="font-medium text-blue-300">THE HERMIT</h3>
                </div>
                <p className="mb-2"><strong className="text-blue-200">Keywords:</strong> Introspection, guidance, soul searching</p>
                <p className="mb-2"><strong className="text-blue-200">Upright:</strong> Inner wisdom, spiritual quest, guidance</p>
                <p><strong className="text-blue-200">Reversed:</strong> Isolation, stubbornness, withdrawal</p>
              </div>

              <div className="bg-indigo-900/40 p-4 rounded-lg border border-indigo-400/30">
                <div className="flex items-center mb-3">
                  <div className="text-2xl mr-3">X</div>
                  <h3 className="font-medium text-indigo-300">WHEEL OF FORTUNE</h3>
                </div>
                <p className="mb-2"><strong className="text-indigo-200">Keywords:</strong> Fate, cycles, luck, karma, destiny</p>
                <p className="mb-2"><strong className="text-indigo-200">Upright:</strong> Good fortune, positive change, destiny</p>
                <p><strong className="text-indigo-200">Reversed:</strong> Bad luck, lack of control, breaking cycles</p>
              </div>

              <div className="bg-red-900/40 p-4 rounded-lg border border-red-400/30">
                <div className="flex items-center mb-3">
                  <div className="text-2xl mr-3">XI</div>
                  <h3 className="font-medium text-red-300">JUSTICE</h3>
                </div>
                <p className="mb-2"><strong className="text-red-200">Keywords:</strong> Fairness, truth, cause and effect, law</p>
                <p className="mb-2"><strong className="text-red-200">Upright:</strong> Justice served, accountability, balance</p>
                <p><strong className="text-red-200">Reversed:</strong> Injustice, dishonesty, unfairness</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-900/60 to-indigo-900/60 p-4 rounded-lg border border-purple-400/30">
              <h3 className="font-medium mb-3 text-purple-300">Reading Tips for Cards VI-XI</h3>
              <div className="grid grid-cols-2 gap-4 text-xs">
                <div>
                  <h4 className="font-medium mb-2 text-purple-200">In Love Readings</h4>
                  <p>These cards often represent relationship milestones, choices, and the balance between passion and wisdom.</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2 text-indigo-200">In Career Readings</h4>
                  <p>Focus on determination, inner strength, and the karmic consequences of professional decisions.</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-indigo-900/60 to-purple-900/60 p-4 rounded-lg border border-indigo-400/30">
              <h3 className="font-medium mb-2 text-indigo-300">Astrological Correspondences</h3>
              <div className="text-xs space-y-1">
                <p><strong>The Lovers:</strong> Gemini ♊ - Communication, duality, choices</p>
                <p><strong>The Chariot:</strong> Cancer ♋ - Emotional drive, protection, movement</p>
                <p><strong>Strength:</strong> Leo ♌ - Courage, heart-centered power, confidence</p>
                <p><strong>The Hermit:</strong> Virgo ♍ - Analysis, service, inner wisdom</p>
                <p><strong>Wheel of Fortune:</strong> Jupiter ♃ - Expansion, luck, higher purpose</p>
                <p><strong>Justice:</strong> Libra ♎ - Balance, relationships, fairness</p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}