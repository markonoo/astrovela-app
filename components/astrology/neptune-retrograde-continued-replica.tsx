import React from "react"
import { Section } from "./base/Section"
import { ZodiacIcon } from "../ui/zodiac-icon"

interface NeptuneRetrogradeContinuedReplicaProps {
  pageNumber: number
}

export function NeptuneRetrogradeContinuedReplica({ pageNumber }: NeptuneRetrogradeContinuedReplicaProps) {
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
                Creative expression and romance could face a period of confusion 
                or inspiration. Neptune retrograde asks you to explore the authenticity of your creative outputs and the spiritual connection in your romantic relationships.
              </p>
            </div>

            {/* Virgo */}
            <div>
              <div className="flex items-center mb-3">
                <ZodiacIcon sign="virgo" size={20} className="text-amber-200 mr-3" />
                <h3 className="text-lg font-medium text-amber-200">VIRGO</h3>
              </div>
              <p className="text-sm leading-relaxed">
                Daily routines and health practices might require a reevaluation of their 
                spiritual significance. Reflect on how your everyday actions align with your 
                higher self and incorporate spiritual practices into your daily life.
              </p>
            </div>

            {/* Libra */}
            <div>
              <div className="flex items-center mb-3">
                <ZodiacIcon sign="libra" size={20} className="text-amber-200 mr-3" />
                <h3 className="text-lg font-medium text-amber-200">LIBRA</h3>
              </div>
              <p className="text-sm leading-relaxed">
                Relationships and your pursuit of harmony and balance are examined 
                for underlying illusions. Seek deeper, spiritual connections in partnerships, 
                looking beyond the superficial to the soul-level bonds.
              </p>
            </div>

            {/* Scorpio */}
            <div>
              <div className="flex items-center mb-3">
                <ZodiacIcon sign="scorpio" size={20} className="text-amber-200 mr-3" />
                <h3 className="text-lg font-medium text-amber-200">SCORPIO</h3>
              </div>
              <p className="text-sm leading-relaxed">
                Intimacy, transformation, and shared resources are areas for profound 
                spiritual introspection. This retrograde challenges you to explore the 
                spiritual dimensions of closeness and change, uncovering deeper truths.
              </p>
            </div>

            {/* Sagittarius */}
            <div>
              <div className="flex items-center mb-3">
                <ZodiacIcon sign="sagittarius" size={20} className="text-amber-200 mr-3" />
                <h3 className="text-lg font-medium text-amber-200">SAGITTARIUS</h3>
              </div>
              <p className="text-sm leading-relaxed">
                Beliefs, ethics, and higher learning are scrutinized for illusions or 
                misguidance. Neptune retrograde encourages a quest for spiritual 
                truth and a reevaluation of your philosophical outlook.
              </p>
            </div>

            {/* Capricorn */}
            <div>
              <div className="flex items-center mb-3">
                <ZodiacIcon sign="capricorn" size={20} className="text-amber-200 mr-3" />
                <h3 className="text-lg font-medium text-amber-200">CAPRICORN</h3>
              </div>
              <p className="text-sm leading-relaxed">
                Career and public image may undergo a period of disillusionment, 
                prompting a search for spiritual purpose in your professional life. 
                Reflect on how your career aligns with your soul's mission.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Aquarius */}
            <div>
              <div className="flex items-center mb-3">
                <ZodiacIcon sign="aquarius" size={20} className="text-amber-200 mr-3" />
                <h3 className="text-lg font-medium text-amber-200">AQUARIUS</h3>
              </div>
              <p className="text-sm leading-relaxed">
                Community involvement and future visions are examined for their 
                spiritual integrity. This retrograde invites you to ensure your ideals 
                and dreams are rooted in a deeper, universal truth.
              </p>
            </div>

            {/* Pisces */}
            <div>
              <div className="flex items-center mb-3">
                <ZodiacIcon sign="pisces" size={20} className="text-amber-200 mr-3" />
                <h3 className="text-lg font-medium text-amber-200">PISCES</h3>
              </div>
              <p className="text-sm leading-relaxed">
                As Neptune rules Pisces, this retrograde is particularly potent, urging 
                a deep dive into the self, spirituality, and creative expression. It's a time 
                to shed illusions and connect more authentically with the universal and 
                your innermost dreams.
              </p>
            </div>

            {/* Spiritual Clarity Section */}
            <div className="border border-amber-200/30 p-6 rounded mt-8">
              <h3 className="text-lg font-medium text-amber-200 mb-4">Dissolving Illusions</h3>
              <div className="space-y-3 text-sm">
                <p>Neptune retrograde supports:</p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start">
                    <span className="text-amber-300 mr-2">•</span>
                    <span>Seeing through deceptions and false beliefs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-300 mr-2">•</span>
                    <span>Connecting with authentic spiritual practices</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-300 mr-2">•</span>
                    <span>Developing discernment between fantasy and intuition</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-300 mr-2">•</span>
                    <span>Embracing compassionate understanding</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Clarity Questions */}
            <div className="border border-amber-200/30 p-6 rounded">
              <h3 className="text-lg font-medium text-amber-200 mb-4">Questions for Clarity</h3>
              <div className="space-y-3 text-sm">
                <p className="italic text-amber-300">Where am I deceiving myself or others?</p>
                <p className="italic text-amber-300">What is my authentic spiritual path?</p>
                <p className="italic text-amber-300">How can I serve from a place of love?</p>
                <p className="italic text-amber-300">What dreams need grounding in reality?</p>
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
