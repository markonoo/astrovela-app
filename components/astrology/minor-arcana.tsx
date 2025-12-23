import React from "react"
import { Section } from "./base/Section"

interface MinorArcanaProps {
  pageNumber: number
}

export function MinorArcana({ pageNumber }: MinorArcanaProps) {
  return (
    <div className="h-full bg-gradient-to-br from-indigo-900 via-purple-900 to-black flex flex-col flex-1 relative">
      <Section className="page-dark flex flex-col justify-between p-4">
        <div>
          <div className="text-center mb-6">
            <h1 className="text-3xl font-light mb-4 tracking-[0.15em] font-serif text-indigo-300">
              MINOR ARCANA GUIDE
            </h1>
            <div className="w-24 h-px bg-indigo-400 mx-auto mb-6"></div>
            <p className="text-lg italic text-indigo-200 font-light mb-6">
              "The Daily Journey Through Life's Four Elements"
            </p>
          </div>

          <div className="space-y-6 text-sm leading-relaxed text-gray-100">
            <div>
              <h2 className="text-lg font-medium mb-3 text-indigo-300">The Four Suits</h2>
              <div className="grid grid-cols-2 gap-4 text-xs">
                <div className="bg-red-900/40 p-4 rounded-lg border border-red-400/30">
                  <div className="flex items-center mb-3">
                    <div className="text-2xl mr-3">♥</div>
                    <h3 className="font-medium text-red-300">CUPS (HEARTS)</h3>
                  </div>
                  <p className="mb-2"><strong className="text-red-200">Element:</strong> Water</p>
                  <p className="mb-2"><strong className="text-red-200">Themes:</strong> Emotions, relationships, spirituality, intuition</p>
                  <p><strong className="text-red-200">Keywords:</strong> Love, feelings, creativity, subconscious</p>
                </div>

                <div className="bg-yellow-900/40 p-4 rounded-lg border border-yellow-400/30">
                  <div className="flex items-center mb-3">
                    <div className="text-2xl mr-3">♠</div>
                    <h3 className="font-medium text-yellow-300">SWORDS (SPADES)</h3>
                  </div>
                  <p className="mb-2"><strong className="text-yellow-200">Element:</strong> Air</p>
                  <p className="mb-2"><strong className="text-yellow-200">Themes:</strong> Thoughts, communication, conflict, intellect</p>
                  <p><strong className="text-yellow-200">Keywords:</strong> Mind, ideas, challenges, truth</p>
                </div>

                <div className="bg-green-900/40 p-4 rounded-lg border border-green-400/30">
                  <div className="flex items-center mb-3">
                    <div className="text-2xl mr-3">♦</div>
                    <h3 className="font-medium text-green-300">PENTACLES (DIAMONDS)</h3>
                  </div>
                  <p className="mb-2"><strong className="text-green-200">Element:</strong> Earth</p>
                  <p className="mb-2"><strong className="text-green-200">Themes:</strong> Material world, money, career, health</p>
                  <p><strong className="text-green-200">Keywords:</strong> Resources, manifestation, security</p>
                </div>

                <div className="bg-orange-900/40 p-4 rounded-lg border border-orange-400/30">
                  <div className="flex items-center mb-3">
                    <div className="text-2xl mr-3">♣</div>
                    <h3 className="font-medium text-orange-300">WANDS (CLUBS)</h3>
                  </div>
                  <p className="mb-2"><strong className="text-orange-200">Element:</strong> Fire</p>
                  <p className="mb-2"><strong className="text-orange-200">Themes:</strong> Action, passion, creativity, career</p>
                  <p><strong className="text-orange-200">Keywords:</strong> Energy, ambition, growth, inspiration</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-medium mb-3 text-indigo-300">Card Number Meanings</h2>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="space-y-2">
                  <div className="bg-white/10 p-2 rounded">
                    <strong>Ace:</strong> New beginnings, potential, gifts
                  </div>
                  <div className="bg-white/10 p-2 rounded">
                    <strong>Two:</strong> Balance, choices, partnerships
                  </div>
                  <div className="bg-white/10 p-2 rounded">
                    <strong>Three:</strong> Creation, growth, collaboration
                  </div>
                  <div className="bg-white/10 p-2 rounded">
                    <strong>Four:</strong> Stability, foundation, structure
                  </div>
                  <div className="bg-white/10 p-2 rounded">
                    <strong>Five:</strong> Challenge, conflict, change
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="bg-white/10 p-2 rounded">
                    <strong>Six:</strong> Harmony, healing, moving forward
                  </div>
                  <div className="bg-white/10 p-2 rounded">
                    <strong>Seven:</strong> Reflection, assessment, choices
                  </div>
                  <div className="bg-white/10 p-2 rounded">
                    <strong>Eight:</strong> Movement, action, mastery
                  </div>
                  <div className="bg-white/10 p-2 rounded">
                    <strong>Nine:</strong> Completion, fulfillment, wisdom
                  </div>
                  <div className="bg-white/10 p-2 rounded">
                    <strong>Ten:</strong> Culmination, full cycle, endings
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-medium mb-3 text-indigo-300">Court Cards Personalities</h2>
              <div className="grid grid-cols-4 gap-2 text-xs text-center">
                <div className="bg-purple-900/40 p-2 rounded">
                  <strong className="text-purple-300">PAGE</strong><br/>
                  Student, messenger, new energy
                </div>
                <div className="bg-blue-900/40 p-2 rounded">
                  <strong className="text-blue-300">KNIGHT</strong><br/>
                  Action-taker, extreme energy
                </div>
                <div className="bg-pink-900/40 p-2 rounded">
                  <strong className="text-pink-300">QUEEN</strong><br/>
                  Mastery, nurturing, receptive
                </div>
                <div className="bg-gold-900/40 p-2 rounded">
                  <strong className="text-yellow-300">KING</strong><br/>
                  Authority, mastery, leadership
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-medium mb-3 text-indigo-300">Reading Minor Arcana</h2>
              <div className="space-y-2 text-xs">
                <div className="bg-gradient-to-r from-indigo-900/60 to-purple-900/60 p-3 rounded">
                  <strong>Daily Life:</strong> Minor Arcana represents everyday situations, people, and events
                </div>
                <div className="bg-gradient-to-r from-purple-900/60 to-pink-900/60 p-3 rounded">
                  <strong>Timing:</strong> Generally indicates immediate to near-future events (days to months)
                </div>
                <div className="bg-gradient-to-r from-pink-900/60 to-red-900/60 p-3 rounded">
                  <strong>Practical Guidance:</strong> Offers specific, actionable advice for current situations
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-medium mb-3 text-indigo-300">Elemental Combinations</h2>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div>
                  <h4 className="font-medium mb-2 text-red-300">Fire + Water (Wands + Cups)</h4>
                  <p>Passionate creativity, emotional drive, inspired action</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2 text-green-300">Earth + Air (Pentacles + Swords)</h4>
                  <p>Practical thinking, material planning, grounded communication</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2 text-blue-300">Water + Earth (Cups + Pentacles)</h4>
                  <p>Emotional security, practical love, manifesting dreams</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2 text-yellow-300">Fire + Air (Wands + Swords)</h4>
                  <p>Quick action, mental energy, communication about goals</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-indigo-900/60 to-purple-900/60 p-4 rounded-lg border border-indigo-400/30">
              <h3 className="font-medium mb-2 text-indigo-300">Reading Tips</h3>
              <div className="text-xs space-y-1">
                <p>• Notice which suits dominate your reading for overall themes</p>
                <p>• Court cards often represent actual people in your life</p>
                <p>• Reversed Minor Arcana suggest internal work or delays</p>
                <p>• Aces indicate new opportunities in their respective areas</p>
                <p>• Multiple cards of same number suggest emphasis on that life stage</p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}