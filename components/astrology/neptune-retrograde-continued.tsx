import React from "react"
import { Section } from "./base/Section"

interface NeptuneRetrogradeContinuedProps {
  pageNumber: number
}

export function NeptuneRetrogradeContinued({ pageNumber }: NeptuneRetrogradeContinuedProps) {
  return (
    <div className="h-full bg-gradient-to-br from-indigo-50 to-purple-100 flex flex-col flex-1 relative">
      <Section className="page-light flex flex-col justify-between p-4">
        <div>
          <div className="text-center mb-6">
            <h1 className="text-3xl font-light mb-4 tracking-[0.15em] font-serif text-indigo-800">
              WORKING WITH NEPTUNE RETROGRADE
            </h1>
            <div className="w-24 h-px bg-indigo-600 mx-auto mb-6"></div>
          </div>

          <div className="space-y-6 text-sm leading-relaxed">
            <div>
              <h2 className="text-lg font-medium mb-3 text-indigo-700">Spiritual Practices</h2>
              <div className="space-y-3 text-xs">
                <div className="bg-white/70 p-3 rounded">
                  <h3 className="font-medium mb-2 text-purple-600">Meditation & Prayer</h3>
                  <p>Deepen your practice with longer sessions. The veil between dimensions is thinner during Neptune retrograde.</p>
                </div>
                <div className="bg-indigo-50 p-3 rounded">
                  <h3 className="font-medium mb-2 text-indigo-600">Dream Work</h3>
                  <p>Keep a dream journal by your bed. Pay attention to recurring symbols and prophetic dreams.</p>
                </div>
                <div className="bg-purple-50 p-3 rounded">
                  <h3 className="font-medium mb-2 text-purple-600">Intuitive Development</h3>
                  <p>Practice divination, energy healing, or psychic exercises. Your sensitivity is heightened.</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-medium mb-3 text-indigo-700">Creative Expression</h2>
              <div className="grid grid-cols-2 gap-4 text-xs">
                <div>
                  <h3 className="font-medium mb-2 text-blue-600">Artistic Pursuits</h3>
                  <ul className="space-y-1">
                    <li>• Music composition or listening</li>
                    <li>• Painting or visual arts</li>
                    <li>• Poetry and creative writing</li>
                    <li>• Dance and movement therapy</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium mb-2 text-violet-600">Healing Arts</h3>
                  <ul className="space-y-1">
                    <li>• Energy healing practices</li>
                    <li>• Crystal therapy work</li>
                    <li>• Aromatherapy and herbs</li>
                    <li>• Sound healing and mantras</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-medium mb-3 text-indigo-700">Avoiding Neptune's Pitfalls</h2>
              <div className="space-y-2 text-xs">
                <div className="bg-red-50 p-3 rounded border-l-4 border-red-300">
                  <strong>Beware:</strong> Deception, self-delusion, and seeing what you want to see rather than reality
                </div>
                <div className="bg-orange-50 p-3 rounded border-l-4 border-orange-300">
                  <strong>Avoid:</strong> Making major financial decisions, signing contracts without careful review
                </div>
                <div className="bg-yellow-50 p-3 rounded border-l-4 border-yellow-300">
                  <strong>Limit:</strong> Escapist behaviors like excessive drinking, drugs, or fantasy
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-medium mb-3 text-indigo-700">Relationship Insights</h2>
              <div className="space-y-2 text-xs">
                <div className="bg-gradient-to-r from-indigo-100 to-purple-100 p-3 rounded">
                  <p><strong>Romantic Relationships:</strong> See partners more clearly, release idealization and fantasy projections</p>
                </div>
                <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-3 rounded">
                  <p><strong>Spiritual Connections:</strong> Attract soul-level relationships based on authentic spiritual compatibility</p>
                </div>
                <div className="bg-gradient-to-r from-blue-100 to-indigo-100 p-3 rounded">
                  <p><strong>Healing Relationships:</strong> Release codependent patterns and develop healthy boundaries</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-medium mb-3 text-indigo-700">Neptune Retrograde Affirmations</h2>
              <div className="space-y-2 text-xs">
                <div className="bg-white/60 p-3 rounded italic text-indigo-800">
                  "I trust my intuition and see through illusions to truth."
                </div>
                <div className="bg-indigo-50 p-3 rounded italic text-purple-800">
                  "I am connected to divine wisdom and spiritual guidance."
                </div>
                <div className="bg-purple-50 p-3 rounded italic text-indigo-800">
                  "I express my creativity from a place of authentic inspiration."
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-indigo-100 to-purple-100 p-4 rounded-lg">
              <h3 className="font-medium mb-2 text-indigo-700">Sacred Reminder</h3>
              <p className="text-xs">Neptune retrograde is a blessing of spiritual awakening. Trust your inner knowing and allow divine truth to emerge.</p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}