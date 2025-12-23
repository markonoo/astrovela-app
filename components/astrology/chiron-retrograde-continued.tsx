import React from "react"
import { Section } from "./base/Section"

interface ChironRetrogradeContinuedProps {
  pageNumber: number
}

export function ChironRetrogradeContinued({ pageNumber }: ChironRetrogradeContinuedProps) {
  return (
    <div className="h-full bg-black text-[#D4AF37] flex flex-col flex-1">
      <Section className="page-dark flex flex-col justify-between p-4">
        <div>
          <div className="text-center mb-6">
            <h1 className="text-3xl font-light mb-4 tracking-[0.15em] font-serif text-[#D4AF37]">
              HEALING WITH CHIRON RETROGRADE
            </h1>
            <div className="w-24 h-px bg-[#D4AF37] mx-auto mb-6"></div>
          </div>

          <div className="space-y-6 text-sm leading-relaxed">
            <div>
              <h2 className="text-lg font-medium mb-3 text-[#D4AF37]">Healing Practices During Chiron Retrograde</h2>
              <div className="space-y-3 text-xs text-yellow-100">
                <div className="bg-yellow-900/30 p-3 rounded">
                  <h3 className="font-medium mb-2 text-yellow-300">Inner Child Work</h3>
                  <p>Reconnect with your wounded inner child through meditation, art therapy, or gentle self-nurturing practices.</p>
                </div>
                <div className="bg-amber-900/30 p-3 rounded">
                  <h3 className="font-medium mb-2 text-amber-300">Somatic Healing</h3>
                  <p>Body-based healing like massage, breathwork, or movement therapy to release stored trauma.</p>
                </div>
                <div className="bg-orange-900/30 p-3 rounded">
                  <h3 className="font-medium mb-2 text-orange-300">Sacred Storytelling</h3>
                  <p>Write or share your wound story with trusted healers or in sacred circles to transform pain into wisdom.</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-medium mb-3 text-[#D4AF37]">The Healer's Journey</h2>
              <div className="grid grid-cols-2 gap-4 text-xs text-yellow-100">
                <div>
                  <h3 className="font-medium mb-2 text-yellow-300">Developing Compassion</h3>
                  <ul className="space-y-1">
                    <li>• Self-compassion practices</li>
                    <li>• Forgiveness work</li>
                    <li>• Loving-kindness meditation</li>
                    <li>• Empathy development</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium mb-2 text-amber-300">Sharing Your Gifts</h3>
                  <ul className="space-y-1">
                    <li>• Mentoring others</li>
                    <li>• Healing practice development</li>
                    <li>• Support group leadership</li>
                    <li>• Wisdom sharing</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-medium mb-3 text-[#D4AF37]">Working with Chiron Return</h2>
              <div className="space-y-2 text-xs text-yellow-100">
                <div className="bg-yellow-900/20 p-3 rounded border-l-4 border-yellow-400">
                  <strong className="text-yellow-300">Ages 50-51:</strong> Major healing initiation, master teacher emergence, wound-to-wisdom transformation
                </div>
                <div className="bg-amber-900/20 p-3 rounded border-l-4 border-amber-400">
                  <strong className="text-amber-300">Preparation Years:</strong> Ages 45-50, increasing awareness of life purpose through healing
                </div>
                <div className="bg-orange-900/20 p-3 rounded border-l-4 border-orange-400">
                  <strong className="text-orange-300">Integration Phase:</strong> Ages 52+, sharing wisdom gained through personal healing journey
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-medium mb-3 text-[#D4AF37]">Chiron House Themes</h2>
              <div className="grid grid-cols-3 gap-2 text-xs text-yellow-100">
                <div className="bg-red-900/20 p-2 rounded text-center">
                  <strong className="text-red-300">1st-4th:</strong> Identity & roots
                </div>
                <div className="bg-green-900/20 p-2 rounded text-center">
                  <strong className="text-green-300">5th-8th:</strong> Creativity & transformation
                </div>
                <div className="bg-blue-900/20 p-2 rounded text-center">
                  <strong className="text-blue-300">9th-12th:</strong> Wisdom & spirituality
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-medium mb-3 text-[#D4AF37]">Chiron Retrograde Affirmations</h2>
              <div className="space-y-2 text-xs">
                <div className="bg-yellow-900/30 p-3 rounded italic text-yellow-200">
                  "My wounds are sacred and lead me to my greatest gifts."
                </div>
                <div className="bg-amber-900/30 p-3 rounded italic text-amber-200">
                  "I transform my pain into wisdom and healing for others."
                </div>
                <div className="bg-orange-900/30 p-3 rounded italic text-orange-200">
                  "I embrace both my woundedness and my wholeness."
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-medium mb-3 text-[#D4AF37]">Signs You're Integrating Chiron</h2>
              <div className="space-y-2 text-xs text-yellow-100">
                <div className="bg-gradient-to-r from-yellow-900/40 to-amber-900/40 p-3 rounded">
                  <p>• You can speak about your wound without being re-traumatized</p>
                </div>
                <div className="bg-gradient-to-r from-amber-900/40 to-orange-900/40 p-3 rounded">
                  <p>• Others naturally come to you for healing and guidance</p>
                </div>
                <div className="bg-gradient-to-r from-orange-900/40 to-red-900/40 p-3 rounded">
                  <p>• Your greatest pain has become your greatest source of compassion</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-yellow-900/40 to-black p-4 rounded-lg border border-[#D4AF37]/30">
              <h3 className="font-medium mb-2 text-[#D4AF37]">Sacred Truth</h3>
              <p className="text-xs">Chiron retrograde reminds us that our wounds are not flaws to be hidden, but sacred doorways to our deepest gifts. Embrace the wounded healer within.</p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}