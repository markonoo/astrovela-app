import React from "react"
import { Section } from "./base/Section"
import { ZodiacIcon } from "../ui/zodiac-icon"

interface MarsRetrogradeContinuedReplicaProps {
  pageNumber: number
}

export function MarsRetrogradeContinuedReplica({ pageNumber }: MarsRetrogradeContinuedReplicaProps) {
  return (
    <div className="h-full bg-black text-amber-100 flex flex-col flex-1">
      <Section className="page-dark px-8 py-6">
        <div className="grid grid-cols-2 gap-6 max-w-5xl mx-auto h-full">
          {/* Left Column */}
          <div className="space-y-4">
            {/* Leo */}
            <div>
              <div className="flex items-center mb-3">
                <ZodiacIcon sign="leo" size={20} className="text-amber-200 mr-3" />
                <h3 className="text-lg font-medium text-amber-200">LEO</h3>
              </div>
              <p className="text-xs leading-relaxed">
                Creative expression and romance are under review. Old flames may rekindle, or you might question the joy in 
                your current hobbies and relationships. It's a period to rediscover what 
                truly brings you pleasure and how you express love.
              </p>
            </div>

            {/* Virgo */}
            <div>
              <div className="flex items-center mb-3">
                <ZodiacIcon sign="virgo" size={20} className="text-amber-200 mr-3" />
                <h3 className="text-lg font-medium text-amber-200">VIRGO</h3>
              </div>
              <p className="text-xs leading-relaxed">
                Practical aspects of love and finance are in focus. Reassess your routines 
                and how they contribute to your relationships and financial health. Simplifying your daily life could lead to a 
                clearer understanding of your values.
              </p>
            </div>

            {/* Libra */}
            <div>
              <div className="flex items-center mb-3">
                <ZodiacIcon sign="libra" size={20} className="text-amber-200 mr-3" />
                <h3 className="text-lg font-medium text-amber-200">LIBRA</h3>
              </div>
              <p className="text-xs leading-relaxed">
                Relationships are especially important during this retrograde, as Libra 
                is also ruled by Venus. It's a time for evaluating your partnerships, seeking 
                balance, and understanding your role in maintaining harmony. Reflect 
                on fairness and reciprocity in your connections.
              </p>
            </div>

            {/* Scorpio */}
            <div>
              <div className="flex items-center mb-3">
                <ZodiacIcon sign="scorpio" size={20} className="text-amber-200 mr-3" />
                <h3 className="text-lg font-medium text-amber-200">SCORPIO</h3>
              </div>
              <p className="text-xs leading-relaxed">
                As the traditional ruler of Scorpio, Mars retrograde here amplifies themes of 
                death, rebirth, and personal transformation. It's a powerful time for 
                self-discovery, confronting fears, and embracing the true essence 
                of change.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            {/* Sagittarius */}
            <div>
              <div className="flex items-center mb-3">
                <ZodiacIcon sign="sagittarius" size={20} className="text-amber-200 mr-3" />
                <h3 className="text-lg font-medium text-amber-200">SAGITTARIUS</h3>
              </div>
              <p className="text-xs leading-relaxed">
                Plans for travel and education may face delays. It's a period for philosophical introspection and revisiting 
                belief systems. Keep an open mind and be prepared to adjust your viewpoints.
              </p>
            </div>

            {/* Capricorn */}
            <div>
              <div className="flex items-center mb-3">
                <ZodiacIcon sign="capricorn" size={20} className="text-amber-200 mr-3" />
                <h3 className="text-lg font-medium text-amber-200">CAPRICORN</h3>
              </div>
              <p className="text-xs leading-relaxed">
                Career and long-term goals are in focus. You may question your career 
                path or the structures you've built. Use this time to plan rather than 
                initiate new ventures.
              </p>
            </div>

            {/* Aquarius */}
            <div>
              <div className="flex items-center mb-3">
                <ZodiacIcon sign="aquarius" size={20} className="text-amber-200 mr-3" />
                <h3 className="text-lg font-medium text-amber-200">AQUARIUS</h3>
              </div>
              <p className="text-xs leading-relaxed">
                This retrograde affects social networks, friendships, and your role 
                within groups. Technological glitches are more common. Reevaluate your 
                hopes and dreams, considering how your social connections support or 
                hinder them.
              </p>
            </div>

            {/* Pisces */}
            <div>
              <div className="flex items-center mb-3">
                <ZodiacIcon sign="pisces" size={20} className="text-amber-200 mr-3" />
                <h3 className="text-lg font-medium text-amber-200">PISCES</h3>
              </div>
              <p className="text-xs leading-relaxed">
                Spiritual and creative pursuits may feel blocked or require deeper introspection. Mars retrograde in Pisces 
                asks you to consider the ways you sacrifice for others and whether 
                your actions are in line with your spiritual beliefs.
              </p>
            </div>
          </div>
        </div>

        {/* Additional Content Section - split into two columns */}
        <div className="grid grid-cols-2 gap-8 max-w-5xl mx-auto mt-8">
          {/* Energy & Action - Left Column */}
          <div className="space-y-8">
            {/* Energy & Action Section */}
            <div className="border border-amber-200/30 p-6 rounded">
              <h3 className="text-lg font-medium text-amber-200 mb-4">Working with Mars Retrograde Energy</h3>
              <div className="space-y-3 text-sm">
                <p>Mars retrograde offers opportunities for:</p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start">
                    <span className="text-amber-300 mr-2">•</span>
                    <span>Reassessing goals and motivations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-300 mr-2">•</span>
                    <span>Developing patience and strategic thinking</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-300 mr-2">•</span>
                    <span>Redirecting energy toward internal growth</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-300 mr-2">•</span>
                    <span>Healing past wounds related to aggression or anger</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Reflection Questions - Right Column */}
          <div className="border border-amber-200/30 p-6 rounded">
            <h3 className="text-lg font-medium text-amber-200 mb-4">Reflection Questions</h3>
            <div className="space-y-3 text-sm">
              <p className="italic text-amber-300">Where am I forcing outcomes instead of allowing flow?</p>
              <p className="italic text-amber-300">What motivates my actions - fear or authentic desire?</p>
              <p className="italic text-amber-300">How can I channel my energy more constructively?</p>
              <p className="italic text-amber-300">What patterns of aggression need healing?</p>
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
