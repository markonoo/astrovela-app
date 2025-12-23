import React from "react"
import { Section } from "./base/Section"
import { ZodiacIcon } from "../ui/zodiac-icon"

interface PlutoRetrogradeContinuedReplicaProps {
  pageNumber: number
}

export function PlutoRetrogradeContinuedReplica({ pageNumber }: PlutoRetrogradeContinuedReplicaProps) {
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
                Beliefs, higher learning, and the search for meaning are challenged 
                to evolve. Reflect on your philosophical outlooks and how they 
                might be transformed to align more closely with your deepest truths.
              </p>
            </div>

            {/* Capricorn */}
            <div>
              <div className="flex items-center mb-3">
                <ZodiacIcon sign="capricorn" size={20} className="text-amber-200 mr-3" />
                <h3 className="text-lg font-medium text-amber-200">CAPRICORN</h3>
              </div>
              <p className="text-sm leading-relaxed">
                Career, ambition, and structures of power are called into question. 
                This period demands a reassessment of your goals and the structures 
                you've built, pushing you towards a more authentic expression 
                of power.
              </p>
            </div>

            {/* Aquarius */}
            <div>
              <div className="flex items-center mb-3">
                <ZodiacIcon sign="aquarius" size={20} className="text-amber-200 mr-3" />
                <h3 className="text-lg font-medium text-amber-200">AQUARIUS</h3>
              </div>
              <p className="text-sm leading-relaxed">
                Social circles, ideals, and future visions may undergo radical shifts. 
                Consider how your contributions to society reflect your deepest values 
                and where transformation can lead to more authentic innovations.
              </p>
            </div>

            {/* Pisces */}
            <div>
              <div className="flex items-center mb-3">
                <ZodiacIcon sign="pisces" size={20} className="text-amber-200 mr-3" />
                <h3 className="text-lg font-medium text-amber-200">PISCES</h3>
              </div>
              <p className="text-sm leading-relaxed">
                Spiritual beliefs, the subconscious, and the dissolution of boundaries 
                are areas for deep transformation. Pluto retrograde in Pisces invites 
                you to release old wounds and connect with the collective on a more 
                profound level.
              </p>
            </div>
          </div>

          {/* Right Column - Empty to match the original layout */}
          <div className="space-y-6">
            {/* Empty space to match original design */}
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

