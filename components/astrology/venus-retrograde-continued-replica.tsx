import React from "react"
import { Section } from "./base/Section"
import { ZodiacIcon } from "../ui/zodiac-icon"

interface VenusRetrogradeContinuedReplicaProps {
  pageNumber: number
}

export function VenusRetrogradeContinuedReplica({ pageNumber }: VenusRetrogradeContinuedReplicaProps) {
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
                Intense emotional connections and shared resources come under scrutiny. Deep bonds may be tested, 
                urging you to consider the power dynamics in your relationships and 
                your deeper desires.
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
                Beliefs and experiences that shape your understanding of love and beauty are revisited. Travel or educational 
                plans related to love or finance might be delayed or reconsidered, prompting 
                you to reflect on what you truly cherish and value on a philosophical level.
              </p>
            </div>

            {/* Capricorn */}
            <div>
              <div className="flex items-center mb-3">
                <ZodiacIcon sign="capricorn" size={20} className="text-amber-200 mr-3" />
                <h3 className="text-lg font-medium text-amber-200">CAPRICORN</h3>
              </div>
              <p className="text-xs leading-relaxed">
                Career and public reputation's influence on your relationships and finances are examined. You might reconsider 
                how your ambitions align with your values, potentially redefining success 
                in terms of personal fulfillment and relationships.
              </p>
            </div>

            {/* Aquarius */}
            <div>
              <div className="flex items-center mb-3">
                <ZodiacIcon sign="aquarius" size={20} className="text-amber-200 mr-3" />
                <h3 className="text-lg font-medium text-amber-200">AQUARIUS</h3>
              </div>
              <p className="text-xs leading-relaxed">
                Friendships and community involvement undergo a period of reevaluation. Reflect on how your social circles 
                reflect your values and contribute to your sense of belonging and support 
                in pursuing your dreams and goals.
              </p>
            </div>

            {/* Pisces */}
            <div>
              <div className="flex items-center mb-3">
                <ZodiacIcon sign="pisces" size={20} className="text-amber-200 mr-3" />
                <h3 className="text-lg font-medium text-amber-200">PISCES</h3>
              </div>
              <p className="text-xs leading-relaxed">
                Spiritual and unconditional love are themes, with a focus on dissolving 
                boundaries and reconnecting with universal love. Financial or romantic 
                fantasies may be challenged, encouraging a more grounded approach to 
                your dreams and ideals.
              </p>
            </div>
          </div>
        </div>

        {/* Additional Content Section - split into two columns */}
        <div className="grid grid-cols-2 gap-6 max-w-5xl mx-auto mt-6">
          {/* Love & Relationships - Left Column */}
          <div className="space-y-4">
            {/* Love & Relationships Section */}
            <div className="border border-amber-200/30 p-4 rounded">
              <h3 className="text-lg font-medium text-amber-200 mb-4">Love & Relationships</h3>
              <div className="space-y-3 text-sm">
                <p>Venus retrograde often brings:</p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start">
                    <span className="text-amber-300 mr-2">•</span>
                    <span>Past lovers or unresolved relationship issues resurfacing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-300 mr-2">•</span>
                    <span>Reevaluation of current partnership dynamics</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-300 mr-2">•</span>
                    <span>Clarity about what you truly value in relationships</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-300 mr-2">•</span>
                    <span>Second chances for healing and reconciliation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Financial Wisdom - Right Column */}
          <div className="border border-amber-200/30 p-4 rounded">
            <h3 className="text-lg font-medium text-amber-200 mb-4">Financial Wisdom</h3>
            <div className="space-y-3 text-sm">
              <p>During Venus retrograde, consider:</p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start">
                  <span className="text-amber-300 mr-2">•</span>
                  <span>Reviewing and reassessing your budget and spending habits</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-300 mr-2">•</span>
                  <span>Avoiding major purchases or financial commitments</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-300 mr-2">•</span>
                  <span>Reconnecting with your core values around money</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-300 mr-2">•</span>
                  <span>Seeking sustainable approaches to wealth and security</span>
                </li>
              </ul>
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
