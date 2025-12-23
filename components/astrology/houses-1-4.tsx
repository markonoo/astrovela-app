import React from "react"
import { Section } from "./base/Section"

interface Houses14Props {
  pageNumber: number
}

export function Houses14({ pageNumber }: Houses14Props) {
  return (
    <div className="h-full bg-black text-amber-100 flex flex-col flex-1">
      <Section className="page-dark max-w-4xl flex flex-col">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-light mb-6 tracking-wide">
            HOUSES 1-4
          </h1>
          <div className="text-sm text-amber-400 mb-8">
            The Houses of Personal Foundation & Identity
          </div>
        </div>

        <div className="space-y-8">
          {/* House 1 */}
          <div className="bg-amber-900/20 backdrop-blur-sm rounded-lg p-6 border border-amber-600/30">
            <h2 className="text-2xl font-medium mb-4 text-amber-200 flex items-center">
              <span className="text-3xl mr-3">1</span>
              The First House - House of Self
            </h2>
            <p className="text-sm leading-relaxed text-amber-100 mb-4">
              The house of self-identity, appearance, and first impressions. This house governs your personality, 
              physical appearance, and how you present yourself to the world. It represents your natural instincts, 
              spontaneous reactions, and the mask you wear in public. This is your personal brand and how others 
              first perceive you.
            </p>
            <div className="text-xs text-amber-300">Keywords: Identity, Appearance, First Impressions, Personality, Self-Image</div>
          </div>

          {/* House 2 */}
          <div className="bg-amber-900/20 backdrop-blur-sm rounded-lg p-6 border border-amber-600/30">
            <h2 className="text-2xl font-medium mb-4 text-amber-200 flex items-center">
              <span className="text-3xl mr-3">2</span>
              The Second House - House of Values
            </h2>
            <p className="text-sm leading-relaxed text-amber-100 mb-4">
              The house of material possessions, money, and personal values. This house governs your relationship 
              with money, material security, and what you value most in life. It represents your earning potential, 
              spending habits, and sense of self-worth. It also rules your personal talents and resources that 
              contribute to your financial well-being.
            </p>
            <div className="text-xs text-amber-300">Keywords: Money, Possessions, Self-Worth, Values, Material Security</div>
          </div>

          {/* House 3 */}
          <div className="bg-amber-900/20 backdrop-blur-sm rounded-lg p-6 border border-amber-600/30">
            <h2 className="text-2xl font-medium mb-4 text-amber-200 flex items-center">
              <span className="text-3xl mr-3">3</span>
              The Third House - House of Communication
            </h2>
            <p className="text-sm leading-relaxed text-amber-100 mb-4">
              The house of communication, learning, and immediate environment. This house governs how you 
              communicate, process information, and interact with your immediate surroundings. It rules 
              siblings, neighbors, short trips, and early education. It represents your mental agility, 
              curiosity, and ability to adapt to new situations.
            </p>
            <div className="text-xs text-amber-300">Keywords: Communication, Learning, Siblings, Short Trips, Mental Agility</div>
          </div>

          {/* House 4 */}
          <div className="bg-amber-900/20 backdrop-blur-sm rounded-lg p-6 border border-amber-600/30">
            <h2 className="text-2xl font-medium mb-4 text-amber-200 flex items-center">
              <span className="text-3xl mr-3">4</span>
              The Fourth House - House of Home
            </h2>
            <p className="text-sm leading-relaxed text-amber-100 mb-4">
              The house of home, family, and emotional foundation. This house governs your roots, ancestry, 
              and the psychological foundation that shapes your sense of security. It represents your 
              relationship with family, your private life, and the emotional support systems that nurture you. 
              It also rules real estate, your physical home, and your connection to the past.
            </p>
            <div className="text-xs text-amber-300">Keywords: Home, Family, Roots, Emotional Foundation, Security</div>
          </div>
        </div>
      </Section>
    </div>
  )
}

