import React from "react"
import { Section } from "./base/Section"

interface MajorArcana3Props {
  pageNumber: number
}

export function MajorArcana3({ pageNumber }: MajorArcana3Props) {
  return (
    <div className="h-full bg-gradient-to-br from-gray-900 via-purple-900 to-black flex flex-col flex-1 relative">
      <Section className="page-dark flex flex-col justify-between p-4">
        <div>
          <div className="text-center mb-6">
            <h1 className="text-3xl font-light mb-4 tracking-[0.15em] font-serif text-gold-300">
              MAJOR ARCANA XII-XXI
            </h1>
            <div className="w-24 h-px bg-gold-400 mx-auto mb-6"></div>
          </div>

          <div className="space-y-5 text-sm leading-relaxed text-gray-100">
            <div className="grid grid-cols-2 gap-4 text-xs">
              <div className="bg-blue-900/40 p-4 rounded-lg border border-blue-400/30">
                <div className="flex items-center mb-3">
                  <div className="text-2xl mr-3">XII</div>
                  <h3 className="font-medium text-blue-300">THE HANGED MAN</h3>
                </div>
                <p className="mb-2"><strong className="text-blue-200">Keywords:</strong> Surrender, sacrifice, letting go, suspension</p>
                <p className="mb-2"><strong className="text-blue-200">Upright:</strong> New perspective, spiritual growth, patience</p>
                <p><strong className="text-blue-200">Reversed:</strong> Stalling, resistance, martyrdom</p>
              </div>

              <div className="bg-gray-900/60 p-4 rounded-lg border border-gray-400/30">
                <div className="flex items-center mb-3">
                  <div className="text-2xl mr-3">XIII</div>
                  <h3 className="font-medium text-gray-300">DEATH</h3>
                </div>
                <p className="mb-2"><strong className="text-gray-200">Keywords:</strong> Transformation, endings, rebirth, change</p>
                <p className="mb-2"><strong className="text-gray-200">Upright:</strong> Major transformation, new beginnings</p>
                <p><strong className="text-gray-200">Reversed:</strong> Resistance to change, stagnation</p>
              </div>

              <div className="bg-orange-900/40 p-4 rounded-lg border border-orange-400/30">
                <div className="flex items-center mb-3">
                  <div className="text-2xl mr-3">XIV</div>
                  <h3 className="font-medium text-orange-300">TEMPERANCE</h3>
                </div>
                <p className="mb-2"><strong className="text-orange-200">Keywords:</strong> Balance, moderation, patience, healing</p>
                <p className="mb-2"><strong className="text-orange-200">Upright:</strong> Harmony, spiritual guidance, healing</p>
                <p><strong className="text-orange-200">Reversed:</strong> Imbalance, excess, impatience</p>
              </div>

              <div className="bg-red-900/40 p-4 rounded-lg border border-red-400/30">
                <div className="flex items-center mb-3">
                  <div className="text-2xl mr-3">XV</div>
                  <h3 className="font-medium text-red-300">THE DEVIL</h3>
                </div>
                <p className="mb-2"><strong className="text-red-200">Keywords:</strong> Temptation, bondage, materialism, addiction</p>
                <p className="mb-2"><strong className="text-red-200">Upright:</strong> Breaking free, recognizing illusions</p>
                <p><strong className="text-red-200">Reversed:</strong> Freedom, release, spiritual awakening</p>
              </div>

              <div className="bg-yellow-900/40 p-4 rounded-lg border border-yellow-400/30">
                <div className="flex items-center mb-3">
                  <div className="text-2xl mr-3">XVI</div>
                  <h3 className="font-medium text-yellow-300">THE TOWER</h3>
                </div>
                <p className="mb-2"><strong className="text-yellow-200">Keywords:</strong> Sudden change, upheaval, revelation</p>
                <p className="mb-2"><strong className="text-yellow-200">Upright:</strong> Breakthrough, liberation, truth</p>
                <p><strong className="text-yellow-200">Reversed:</strong> Avoiding disaster, personal transformation</p>
              </div>

              <div className="bg-purple-900/40 p-4 rounded-lg border border-purple-400/30">
                <div className="flex items-center mb-3">
                  <div className="text-2xl mr-3">XVII</div>
                  <h3 className="font-medium text-purple-300">THE STAR</h3>
                </div>
                <p className="mb-2"><strong className="text-purple-200">Keywords:</strong> Hope, inspiration, healing, guidance</p>
                <p className="mb-2"><strong className="text-purple-200">Upright:</strong> Renewed faith, spiritual guidance</p>
                <p><strong className="text-purple-200">Reversed:</strong> Despair, lack of faith, disconnection</p>
              </div>

              <div className="bg-indigo-900/40 p-4 rounded-lg border border-indigo-400/30">
                <div className="flex items-center mb-3">
                  <div className="text-2xl mr-3">XVIII</div>
                  <h3 className="font-medium text-indigo-300">THE MOON</h3>
                </div>
                <p className="mb-2"><strong className="text-indigo-200">Keywords:</strong> Illusion, intuition, dreams, subconscious</p>
                <p className="mb-2"><strong className="text-indigo-200">Upright:</strong> Trusting intuition, facing fears</p>
                <p><strong className="text-indigo-200">Reversed:</strong> Clarity, overcoming deception</p>
              </div>

              <div className="bg-gold-900/40 p-4 rounded-lg border border-yellow-400/30">
                <div className="flex items-center mb-3">
                  <div className="text-2xl mr-3">XIX</div>
                  <h3 className="font-medium text-yellow-300">THE SUN</h3>
                </div>
                <p className="mb-2"><strong className="text-yellow-200">Keywords:</strong> Joy, success, vitality, enlightenment</p>
                <p className="mb-2"><strong className="text-yellow-200">Upright:</strong> Happiness, achievement, clarity</p>
                <p><strong className="text-yellow-200">Reversed:</strong> Temporary setbacks, inner joy</p>
              </div>

              <div className="bg-violet-900/40 p-4 rounded-lg border border-violet-400/30">
                <div className="flex items-center mb-3">
                  <div className="text-2xl mr-3">XX</div>
                  <h3 className="font-medium text-violet-300">JUDGEMENT</h3>
                </div>
                <p className="mb-2"><strong className="text-violet-200">Keywords:</strong> Rebirth, inner calling, forgiveness</p>
                <p className="mb-2"><strong className="text-violet-200">Upright:</strong> Spiritual awakening, redemption</p>
                <p><strong className="text-violet-200">Reversed:</strong> Self-doubt, harsh judgment</p>
              </div>

              <div className="bg-white/20 p-4 rounded-lg border border-white/40">
                <div className="flex items-center mb-3">
                  <div className="text-2xl mr-3">XXI</div>
                  <h3 className="font-medium text-white">THE WORLD</h3>
                </div>
                <p className="mb-2"><strong className="text-gray-200">Keywords:</strong> Completion, accomplishment, travel</p>
                <p className="mb-2"><strong className="text-gray-200">Upright:</strong> Success, fulfillment, cosmic consciousness</p>
                <p><strong className="text-gray-200">Reversed:</strong> Incomplete goals, lack of closure</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-900/60 to-gold-900/60 p-4 rounded-lg border border-gold-400/30">
              <h3 className="font-medium mb-2 text-gold-300">The Journey's End</h3>
              <p className="text-xs">Cards XII-XXI represent the final stages of the soul's journey through the Major Arcana, from sacrifice and transformation to ultimate enlightenment and world consciousness.</p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}