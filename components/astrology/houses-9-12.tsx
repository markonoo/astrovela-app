import React from "react"
import { Section } from "./base/Section"

interface Houses912Props {
  pageNumber: number
}

export function Houses912({ pageNumber }: Houses912Props) {
  return (
    <div className="h-full bg-black text-amber-100 flex flex-col flex-1">
      <Section className="page-dark max-w-4xl flex flex-col">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-light mb-6 tracking-wide">
            HOUSES 9-12
          </h1>
          <div className="text-sm text-amber-400 mb-8">
            The Houses of Universal Connection & Transcendence
          </div>
        </div>

        <div className="space-y-8">
          {/* House 9 */}
          <div className="bg-amber-900/20 backdrop-blur-sm rounded-lg p-6 border border-amber-600/30">
            <h2 className="text-2xl font-medium mb-4 text-amber-200 flex items-center">
              <span className="text-3xl mr-3">9</span>
              The Ninth House - Higher Learning
            </h2>
            <p className="text-sm leading-relaxed text-amber-100 mb-4">
              The house of philosophy, higher education, long-distance travel, and spiritual beliefs. This house 
              governs your search for meaning, religious or philosophical beliefs, higher learning institutions, 
              foreign cultures, and your quest for wisdom and truth.
            </p>
            <div className="text-xs text-amber-300">Keywords: Philosophy, Higher Education, Travel, Beliefs, Wisdom</div>
          </div>

          {/* House 10 */}
          <div className="bg-amber-900/20 backdrop-blur-sm rounded-lg p-6 border border-amber-600/30">
            <h2 className="text-2xl font-medium mb-4 text-amber-200 flex items-center">
              <span className="text-3xl mr-3">10</span>
              The Tenth House - Career & Reputation
            </h2>
            <p className="text-sm leading-relaxed text-amber-100 mb-4">
              The house of career, public image, reputation, and authority. This house governs your professional 
              life, social status, achievements, and how you're perceived by the public. It also represents 
              your relationship with authority figures and your own authority.
            </p>
            <div className="text-xs text-amber-300">Keywords: Career, Reputation, Authority, Public Image, Achievement</div>
          </div>

          {/* House 11 */}
          <div className="bg-amber-900/20 backdrop-blur-sm rounded-lg p-6 border border-amber-600/30">
            <h2 className="text-2xl font-medium mb-4 text-amber-200 flex items-center">
              <span className="text-3xl mr-3">11</span>
              The Eleventh House - Community & Dreams
            </h2>
            <p className="text-sm leading-relaxed text-amber-100 mb-4">
              The house of friendships, groups, hopes, and wishes. This house governs your social circles, 
              group memberships, humanitarian efforts, and long-term goals. It represents your dreams for 
              the future and your role within larger communities and organizations.
            </p>
            <div className="text-xs text-amber-300">Keywords: Friendships, Groups, Hopes, Social Causes, Dreams</div>
          </div>

          {/* House 12 */}
          <div className="bg-amber-900/20 backdrop-blur-sm rounded-lg p-6 border border-amber-600/30">
            <h2 className="text-2xl font-medium mb-4 text-amber-200 flex items-center">
              <span className="text-3xl mr-3">12</span>
              The Twelfth House - Spirituality & Subconscious
            </h2>
            <p className="text-sm leading-relaxed text-amber-100 mb-4">
              The house of spirituality, subconscious mind, hidden enemies, and self-undoing. This house 
              governs meditation, dreams, intuition, karma, and connection to the divine. It also represents 
              isolation, sacrifice, and the need for spiritual retreat and inner reflection.
            </p>
            <div className="text-xs text-amber-300">Keywords: Spirituality, Subconscious, Dreams, Karma, Sacrifice</div>
          </div>
        </div>
      </Section>
    </div>
  )
}