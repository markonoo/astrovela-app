import React from "react"
import { Section } from "./base/Section"
import { ZodiacIcon } from "../ui/zodiac-icon"

interface UranusRetrogradeContinuedReplicaProps {
  pageNumber: number
}

export function UranusRetrogradeContinuedReplica({ pageNumber }: UranusRetrogradeContinuedReplicaProps) {
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
                Creative expression and romance may be areas where you seek more 
                freedom and excitement. This retrograde challenges you to explore 
                new forms of creativity and ways to express your unique self in 
                relationships.
              </p>
            </div>

            {/* Virgo */}
            <div>
              <div className="flex items-center mb-3">
                <ZodiacIcon sign="virgo" size={20} className="text-amber-200 mr-3" />
                <h3 className="text-lg font-medium text-amber-200">VIRGO</h3>
              </div>
              <p className="text-sm leading-relaxed">
                Work routines and health practices might be subject to sudden shifts. 
                Consider innovative approaches to your daily habits and how you 
                can introduce more freedom and uniqueness into your routines.
              </p>
            </div>

            {/* Libra */}
            <div>
              <div className="flex items-center mb-3">
                <ZodiacIcon sign="libra" size={20} className="text-amber-200 mr-3" />
                <h3 className="text-lg font-medium text-amber-200">LIBRA</h3>
              </div>
              <p className="text-sm leading-relaxed">
                Relationships and your approach to harmony and balance are examined. Uranus retrograde asks you to 
                consider where you may need more independence in partnerships and 
                embrace unconventional dynamics.
              </p>
            </div>

            {/* Scorpio */}
            <div>
              <div className="flex items-center mb-3">
                <ZodiacIcon sign="scorpio" size={20} className="text-amber-200 mr-3" />
                <h3 className="text-lg font-medium text-amber-200">SCORPIO</h3>
              </div>
              <p className="text-sm leading-relaxed">
                Deep transformative changes are possible, especially in areas concerning intimacy and shared resources. Reflect on your desire for freedom 
                in close bonds and how embracing change can lead to growth.
              </p>
            </div>

            {/* Sagittarius */}
            <div>
              <div className="flex items-center mb-3">
                <ZodiacIcon sign="sagittarius" size={20} className="text-amber-200 mr-3" />
                <h3 className="text-lg font-medium text-amber-200">SAGITTARIUS</h3>
              </div>
              <p className="text-sm leading-relaxed">
                Beliefs, higher learning, and exploration are areas for innovation. This 
                retrograde challenges you to break free from outdated philosophies 
                and to seek unique paths to wisdom and expansion.
              </p>
            </div>

            {/* Capricorn */}
            <div>
              <div className="flex items-center mb-3">
                <ZodiacIcon sign="capricorn" size={20} className="text-amber-200 mr-3" />
                <h3 className="text-lg font-medium text-amber-200">CAPRICORN</h3>
              </div>
              <p className="text-sm leading-relaxed">
                Career and long-term goals may experience sudden shifts. Reflect on 
                how you can innovate in your professional life and where you need 
                more autonomy and freedom to express your unique contributions.
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
                As the sign ruled by Uranus, this retrograde is particularly impactful, 
                urging a reevaluation of your ideals, friendships, and future goals. Consider how you can foster community 
                while maintaining your individuality.
              </p>
            </div>

            {/* Pisces */}
            <div>
              <div className="flex items-center mb-3">
                <ZodiacIcon sign="pisces" size={20} className="text-amber-200 mr-3" />
                <h3 className="text-lg font-medium text-amber-200">PISCES</h3>
              </div>
              <p className="text-sm leading-relaxed">
                Spiritual insights and the dissolution of boundaries are themes. 
                Uranus retrograde invites you to explore new spiritual territories and 
                embrace the freedom that comes with letting go of the past.
              </p>
            </div>

            {/* Innovation & Change Section */}
            <div className="border border-amber-200/30 p-6 rounded mt-8">
              <h3 className="text-lg font-medium text-amber-200 mb-4">Embracing Revolutionary Change</h3>
              <div className="space-y-3 text-sm">
                <p>Uranus retrograde encourages:</p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start">
                    <span className="text-amber-300 mr-2">•</span>
                    <span>Breaking free from limiting patterns and structures</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-300 mr-2">•</span>
                    <span>Embracing your authentic, unconventional nature</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-300 mr-2">•</span>
                    <span>Finding innovative solutions to old problems</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-300 mr-2">•</span>
                    <span>Balancing independence with meaningful connections</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Freedom Questions */}
            <div className="border border-amber-200/30 p-6 rounded">
              <h3 className="text-lg font-medium text-amber-200 mb-4">Questions for Liberation</h3>
              <div className="space-y-3 text-sm">
                <p className="italic text-amber-300">Where do I feel most restricted or confined?</p>
                <p className="italic text-amber-300">How can I honor both freedom and responsibility?</p>
                <p className="italic text-amber-300">What unique gifts am I meant to share?</p>
                <p className="italic text-amber-300">How can I contribute to positive change?</p>
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
