import React from "react"
import { Section } from "./base/Section"
import { ZodiacIcon } from "../ui/zodiac-icon"

interface MercuryRetrogradeContinuedReplicaProps {
  pageNumber: number
}

export function MercuryRetrogradeContinuedReplica({ pageNumber }: MercuryRetrogradeContinuedReplicaProps) {
  return (
    <div className="h-full bg-black text-amber-100 flex flex-col flex-1">
      <Section className="page-dark px-8 py-12">
        <div className="grid grid-cols-2 gap-8 max-w-5xl mx-auto h-full">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Leo */}
            <div>
              <div className="flex items-center mb-3">
                <ZodiacIcon sign="leo" size={20} className="text-amber-200 mr-3" />
                <h3 className="text-lg font-medium text-amber-200">LEO</h3>
              </div>
              <p className="text-sm leading-relaxed">
                Creative and romantic expressions may hit a snag. It's an opportunity to 
                refine creative projects and consider how our ego affects our communication. Think about the impact of your 
                words on others.
              </p>
            </div>

            {/* Virgo */}
            <div>
              <div className="flex items-center mb-3">
                <ZodiacIcon sign="virgo" size={20} className="text-amber-200 mr-3" />
                <h3 className="text-lg font-medium text-amber-200">VIRGO</h3>
              </div>
              <p className="text-sm leading-relaxed">
                Another sign ruled by Mercury, Virgo experiences a call to reorganize and 
                reassess daily routines, health, and work habits. Miscommunications at 
                work can arise, urging a clearer delineation of responsibilities and tasks.
              </p>
            </div>

            {/* Libra */}
            <div>
              <div className="flex items-center mb-3">
                <ZodiacIcon sign="libra" size={20} className="text-amber-200 mr-3" />
                <h3 className="text-lg font-medium text-amber-200">LIBRA</h3>
              </div>
              <p className="text-sm leading-relaxed">
                Relationships come under scrutiny during this period. It's time to reflect 
                on partnership dynamics and communication fairness. Avoid making 
                new commitments or signing contracts until the retrograde passes.
              </p>
            </div>

            {/* Scorpio */}
            <div>
              <div className="flex items-center mb-3">
                <ZodiacIcon sign="scorpio" size={20} className="text-amber-200 mr-3" />
                <h3 className="text-lg font-medium text-amber-200">SCORPIO</h3>
              </div>
              <p className="text-sm leading-relaxed">
                Deep, introspective conversations and thoughts emerge. It's a powerful 
                time for transformation through dialogue but beware of becoming too 
                suspicious or delving into conspiracies without cause.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Sagittarius */}
            <div>
              <div className="flex items-center mb-3">
                <ZodiacIcon sign="sagittarius" size={20} className="text-amber-200 mr-3" />
                <h3 className="text-lg font-medium text-amber-200">SAGITTARIUS</h3>
              </div>
              <p className="text-sm leading-relaxed">
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
              <p className="text-sm leading-relaxed">
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
              <p className="text-sm leading-relaxed">
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
              <p className="text-sm leading-relaxed">
                A time of heightened intuition but also potential confusion. Dreams and 
                messages may be more significant now. Avoid making important decisions based on unclear information.
              </p>
            </div>
          </div>
        </div>

        {/* Additional Content Section - split into two columns */}
        <div className="grid grid-cols-2 gap-8 max-w-5xl mx-auto mt-8">
          {/* Tips Section - Left Column */}
          <div className="border border-amber-200/30 p-6 rounded">
            <h3 className="text-lg font-medium text-amber-200 mb-4">Navigating Mercury Retrograde</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <span className="text-amber-300 mr-2">•</span>
                <span>Double-check all communications and contracts</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-300 mr-2">•</span>
                <span>Allow extra time for travel and technology</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-300 mr-2">•</span>
                <span>Revisit, review, and revise past projects</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-300 mr-2">•</span>
                <span>Practice patience in all communications</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-300 mr-2">•</span>
                <span>Back up important data and documents</span>
              </li>
            </ul>
          </div>

          {/* Reflection Questions - Right Column */}
          <div className="border border-amber-200/30 p-6 rounded">
            <h3 className="text-lg font-medium text-amber-200 mb-4">Reflection Questions</h3>
            <div className="space-y-3 text-sm">
              <p className="italic text-amber-300">How can I improve my communication style?</p>
              <p className="italic text-amber-300">What unfinished projects deserve my attention?</p>
              <p className="italic text-amber-300">Where do I need to slow down and reconsider?</p>
              <p className="italic text-amber-300">What messages am I not hearing clearly?</p>
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
