import React from "react"
import { Section } from "./base/Section"
import { ZodiacIcon } from "../ui/zodiac-icon"

interface ChironRetrogradeContinuedReplicaProps {
  pageNumber: number
}

export function ChironRetrogradeContinuedReplica({ pageNumber }: ChironRetrogradeContinuedReplicaProps) {
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
                The focus is on healing through beliefs, exploration, and the search 
                for meaning. During Chiron retrograde, reevaluate your philosophies 
                and prejudices, discovering how expanding your worldview can lead 
                to healing.
              </p>
            </div>

            {/* Capricorn */}
            <div>
              <div className="flex items-center mb-3">
                <ZodiacIcon sign="capricorn" size={20} className="text-amber-200 mr-3" />
                <h3 className="text-lg font-medium text-amber-200">CAPRICORN</h3>
              </div>
              <p className="text-sm leading-relaxed">
                Wounds related to authority, discipline, and ambition are examined. 
                This period encourages you to reassess your goals and the structures of 
                your life, finding ways to heal from overly rigid or authoritarian influ-
                ences.
              </p>
            </div>

            {/* Aquarius */}
            <div>
              <div className="flex items-center mb-3">
                <ZodiacIcon sign="aquarius" size={20} className="text-amber-200 mr-3" />
                <h3 className="text-lg font-medium text-amber-200">AQUARIUS</h3>
              </div>
              <p className="text-sm leading-relaxed">
                Healing in this sign involves community, ideals, and individuality. Chiron 
                retrograde prompts a reflection on alienation and belonging, urging you 
                to find healing in embracing your uniqueness while contributing to the 
                collective.
              </p>
            </div>

            {/* Pisces */}
            <div>
              <div className="flex items-center mb-3">
                <ZodiacIcon sign="pisces" size={20} className="text-amber-200 mr-3" />
                <h3 className="text-lg font-medium text-amber-200">PISCES</h3>
              </div>
              <p className="text-sm leading-relaxed">
                Chiron in Pisces focuses on spiritual wounds, illusions, and the collective 
                unconscious. The retrograde period is a time for dissolving boundaries 
                that separate you from universal love and compassion, finding healing in 
                forgiveness and connection to all.
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

