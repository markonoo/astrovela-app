import React from "react"
import { Section } from "./base/Section"
import { ZodiacIcon } from "../ui/zodiac-icon"

interface JupiterRetrogradeContinuedReplicaProps {
  pageNumber: number
}

export function JupiterRetrogradeContinuedReplica({ pageNumber }: JupiterRetrogradeContinuedReplicaProps) {
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
                Philosophical beliefs, higher learning, and foreign cultures are in focus. This is a time to reflect on your 
                belief systems and the pursuit of wisdom. Assess whether your quest 
                for truth aligns with your inner ethics and beliefs.
              </p>
            </div>

            {/* Capricorn */}
            <div>
              <div className="flex items-center mb-3">
                <ZodiacIcon sign="capricorn" size={20} className="text-amber-200 mr-3" />
                <h3 className="text-lg font-medium text-amber-200">CAPRICORN</h3>
              </div>
              <p className="text-sm leading-relaxed">
                Ambitions, career, and public reputation may seem to slow down, offering a chance to ensure your goals 
                align with your true purpose. Reflect on the structures you've built and if 
                they facilitate your growth.
              </p>
            </div>

            {/* Aquarius */}
            <div>
              <div className="flex items-center mb-3">
                <ZodiacIcon sign="aquarius" size={20} className="text-amber-200 mr-3" />
                <h3 className="text-lg font-medium text-amber-200">AQUARIUS</h3>
              </div>
              <p className="text-sm leading-relaxed">
                Social ideals, community involvement, and your vision for the future 
                undergo reflection. Consider if your contributions to society reflect your 
                true ideals and how you can authentically work towards a better future.
              </p>
            </div>

            {/* Pisces */}
            <div>
              <div className="flex items-center mb-3">
                <ZodiacIcon sign="pisces" size={20} className="text-amber-200 mr-3" />
                <h3 className="text-lg font-medium text-amber-200">PISCES</h3>
              </div>
              <p className="text-sm leading-relaxed">
                Spiritual growth and the dissolution of boundaries for expansion 
                are themes. This period invites deep reflection on your spiritual journey 
                and how it aligns with your inner truth. Focus on connecting with the 
                universal and transcending the ego.
              </p>
            </div>
          </div>

          {/* Right Column - Additional Content */}
          <div className="space-y-8">
            {/* Expansion & Growth Section */}
            <div className="border border-amber-200/30 p-6 rounded">
              <h3 className="text-lg font-medium text-amber-200 mb-4">Spiritual Expansion</h3>
              <div className="space-y-3 text-sm">
                <p>Jupiter retrograde encourages:</p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start">
                    <span className="text-amber-300 mr-2">•</span>
                    <span>Inner philosophical growth and wisdom seeking</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-300 mr-2">•</span>
                    <span>Reevaluation of belief systems and values</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-300 mr-2">•</span>
                    <span>Focus on authentic rather than external success</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-300 mr-2">•</span>
                    <span>Integration of spiritual teachings into daily life</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Wisdom Questions */}
            <div className="border border-amber-200/30 p-6 rounded">
              <h3 className="text-lg font-medium text-amber-200 mb-4">Questions for Inner Growth</h3>
              <div className="space-y-3 text-sm">
                <p className="italic text-amber-300">What do I truly believe, beyond external influences?</p>
                <p className="italic text-amber-300">How can I expand my understanding compassionately?</p>
                <p className="italic text-amber-300">Where do I seek meaning in my life experiences?</p>
                <p className="italic text-amber-300">What wisdom have I gained that I can share?</p>
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
