import React from "react"
import { Section } from "./base/Section"
import { ZodiacIcon } from "../ui/zodiac-icon"

interface SaturnRetrogradeContinuedReplicaProps {
  pageNumber: number
}

export function SaturnRetrogradeContinuedReplica({ pageNumber }: SaturnRetrogradeContinuedReplicaProps) {
  return (
    <div className="h-full bg-black text-amber-100 flex flex-col flex-1">
      <Section className="page-dark px-8 py-12">
        <div className="grid grid-cols-2 gap-8 max-w-5xl mx-auto h-full">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Sagittarius */}
            <div>
              <div className="flex items-center mb-3">
                <ZodiacIcon sign="sagittarius" size={20} className="text-amber-200 mr-3" />
                <h3 className="text-lg font-medium text-amber-200">SAGITTARIUS</h3>
              </div>
              <p className="text-sm leading-relaxed">
                Philosophical and adventurous pursuits might feel less straightforward. It's a period to reassess your beliefs 
                and the ways you seek freedom and expansion. Patience in exploration 
                and understanding is crucial.
              </p>
            </div>

            {/* Capricorn */}
            <div>
              <div className="flex items-center mb-3">
                <ZodiacIcon sign="capricorn" size={20} className="text-amber-200 mr-3" />
                <h3 className="text-lg font-medium text-amber-200">CAPRICORN</h3>
              </div>
              <p className="text-sm leading-relaxed">
                Career ambitions, public reputation, and long-term goals are called into 
                question. As Saturn rules Capricorn, this retrograde is particularly significant, urging a reassessment of your 
                professional path, responsibilities, and the legacy you wish to build.
              </p>
            </div>

            {/* Aquarius */}
            <div>
              <div className="flex items-center mb-3">
                <ZodiacIcon sign="aquarius" size={20} className="text-amber-200 mr-3" />
                <h3 className="text-lg font-medium text-amber-200">AQUARIUS</h3>
              </div>
              <p className="text-sm leading-relaxed">
                Social responsibilities, friendships, and future-oriented goals undergo review. 
                Consider if your social and humanitarian efforts are structured effectively 
                and reflect your true aspirations and responsibilities to the collective.
              </p>
            </div>

            {/* Pisces */}
            <div>
              <div className="flex items-center mb-3">
                <ZodiacIcon sign="pisces" size={20} className="text-amber-200 mr-3" />
                <h3 className="text-lg font-medium text-amber-200">PISCES</h3>
              </div>
              <p className="text-sm leading-relaxed">
                Spiritual commitments, the dissolution of boundaries in responsibilities, 
                and hidden or subconscious structures are examined. This period invites 
                you to reflect on the spiritual and psychological foundations of your life, 
                ensuring they support your growth and responsibility.
              </p>
            </div>
          </div>

          {/* Right Column - Additional Content */}
          <div className="space-y-8">
            {/* Discipline & Structure Section */}
            <div className="border border-amber-200/30 p-6 rounded">
              <h3 className="text-lg font-medium text-amber-200 mb-4">Building Authentic Structure</h3>
              <div className="space-y-3 text-sm">
                <p>Saturn retrograde supports:</p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start">
                    <span className="text-amber-300 mr-2">•</span>
                    <span>Reviewing and refining long-term goals</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-300 mr-2">•</span>
                    <span>Strengthening foundations that truly serve you</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-300 mr-2">•</span>
                    <span>Releasing structures that no longer support growth</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-300 mr-2">•</span>
                    <span>Developing mature responsibility and wisdom</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Mastery Questions */}
            <div className="border border-amber-200/30 p-6 rounded">
              <h3 className="text-lg font-medium text-amber-200 mb-4">Questions for Mastery</h3>
              <div className="space-y-3 text-sm">
                <p className="italic text-amber-300">What structures in my life need strengthening?</p>
                <p className="italic text-amber-300">Where am I avoiding necessary responsibility?</p>
                <p className="italic text-amber-300">How can I build something lasting and meaningful?</p>
                <p className="italic text-amber-300">What lessons is life trying to teach me?</p>
              </div>
            </div>
          </div>
        </div>

        {/* Page number */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-amber-200 text-sm">
          {pageNumber}
        </div>
      </Section>
    </div>
  )
}
