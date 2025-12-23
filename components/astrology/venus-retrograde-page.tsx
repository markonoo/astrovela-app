import React from "react"
import { Section } from "./base/Section"

interface VenusRetrogradePageProps {
  pageNumber: number
}

export function VenusRetrogradePage({ pageNumber }: VenusRetrogradePageProps) {
  return (
    <div className="h-full bg-black text-amber-100 flex flex-col flex-1 relative">
      <Section className="page-dark flex flex-col justify-between items-center">
      {/* Decorative Frame */}
      <div className="max-w-2xl mx-auto mb-8">
        <div className="border border-amber-200/30 rounded-lg p-6 relative">
          {/* Decorative top element */}
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-black px-4">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 border border-amber-200/50 rounded-full"></div>
              <div className="w-3 h-3 border border-amber-200/50"></div>
              <div className="w-2 h-2 border border-amber-200/50 rounded-full"></div>
            </div>
          </div>

          <h1 className="text-xl font-serif text-center mb-6 text-amber-200">VENUS</h1>

          <p className="text-base leading-relaxed text-center">
            Venus governs love, beauty, pleasure, and finances. When Venus goes retrograde, it's a period forreevaluating our relationships, personal values, financial situations, and the things that bring us joy andcomfort. It can lead to past lovers reappearing, financial reviews, and a reassessment of what we find trulyvaluable and beautiful in our lives. This retrograde asks us to find balance and realign with our corevalues and desires in these areas.
          </p>

          {/* Venus symbol at bottom */}
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-black px-4">
            <div className="w-8 h-8 border border-amber-200/50 rounded-full flex items-center justify-center">
              <span className="text-amber-200 text-lg">♀</span>
            </div>
          </div>
        </div>
      </div>

      {/* Venus Retrograde Through Signs */}
      <div className="max-w-4xl mx-auto min-h-full flex flex-col">
        <h2 className="text-xl font-serif text-center mb-8 text-amber-200 tracking-wider">
          VENUS RETROGRADE
          <br />
          THROUGH THE SIGNS
        </h2>

        <div className="grid grid-cols-2 gap-8 flex-1">
          {/* Left Column */}
          <div className="space-y-6 flex-1">
            <div className="flex items-start space-x-3">
              <span className="text-amber-200 text-lg mt-1">♈</span>
              <div>
                <h3 className="font-semibold text-amber-200 mb-2">ARIES</h3>
                <p className="text-sm leading-relaxed">
                  A time to reconsider your approach to love and assertiveness in relationships. Impulsive spending ordecisions in love may come up for review. Reflect on how you pursue what you desire.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <span className="text-amber-200 text-lg mt-1">♊</span>
              <div>
                <h3 className="font-semibold text-amber-200 mb-2">GEMINI</h3>
                <p className="text-sm leading-relaxed">
                  Communication in relationships is highlighted. Misunderstandings may lead to reevaluating how youconnect with others. It's an opportunity to listen more closely to your partners and friends andreassess your social interactions.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <span className="text-amber-200 text-lg mt-1">♉</span>
              <div>
                <h3 className="font-semibold text-amber-200 mb-2">TAURUS</h3>
                <p className="text-sm leading-relaxed">
                  With Taurus ruled by Venus, this retrograde can significantly impact your sense of security andmaterial possessions. Reevaluate your spending habits and what value in life, seeking a deeperconnection to your sense of self-worth.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <span className="text-amber-200 text-lg mt-1">♋</span>
              <div>
                <h3 className="font-semibold text-amber-200 mb-2">CANCER</h3>
                <p className="text-sm leading-relaxed">
                  Home and emotional security take center stage. You may find yourself reflecting on your livingsituation or your emotional investments in relationships. Consider what truly makes you feel at homeand nurtured.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6 flex-1">
            <div className="flex items-start space-x-3">
              <span className="text-amber-200 text-lg mt-1">♌</span>
              <div>
                <h3 className="font-semibold text-amber-200 mb-2">LEO</h3>
                <p className="text-sm leading-relaxed">
                  Creative expression and romance are under review. Old flames may rekindle, or you might question thejoy in your current hobbies and relationships. It's a period to rediscover what truly brings youpleasure and how you express love.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <span className="text-amber-200 text-lg mt-1">♐</span>
              <div>
                <h3 className="font-semibold text-amber-200 mb-2">SAGITTARIUS</h3>
                <p className="text-sm leading-relaxed">
                  Beliefs and experiences that shape your understanding of love and beauty are revisited. Travel oreducational plans related to love or finance might be delayed or reconsidered, prompting you toreflect on what you truly cherish and value on a philosophical level.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <span className="text-amber-200 text-lg mt-1">♍</span>
              <div>
                <h3 className="font-semibold text-amber-200 mb-2">VIRGO</h3>
                <p className="text-sm leading-relaxed">
                  Practical aspects of love and finance are in focus. Reassess your routines and how they contribute toyour relationships and financial health. Simplifying your daily life could lead to a clearerunderstanding of your values.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <span className="text-amber-200 text-lg mt-1">♑</span>
              <div>
                <h3 className="font-semibold text-amber-200 mb-2">CAPRICORN</h3>
                <p className="text-sm leading-relaxed">
                  Career and public reputation's influence on your relationships and finances are examined. You mightreconsider how your ambitions align with your values, potentially redefining success in terms ofpersonal fulfillment and relationships.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      </Section>
    </div>
  )
}
