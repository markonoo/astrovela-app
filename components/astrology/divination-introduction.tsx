import React from "react"
import { Section } from "./base/Section"

interface DivinationIntroductionProps {
  pageNumber: number
}

export function DivinationIntroduction({ pageNumber }: DivinationIntroductionProps) {
  return (
    <div className="h-full bg-gradient-to-br from-purple-50 to-violet-50">
      <Section className="page-light max-w-4xl overflow-hidden">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-light mb-6 tracking-[0.15em] font-serif text-purple-800">
            THE ART OF DIVINATION
          </h1>
          <div className="text-sm text-purple-600 mb-8">
            Ancient practices for seeking guidance and insight
          </div>
        </div>

        <div className="space-y-8 text-purple-900">
          <div className="bg-white/70 backdrop-blur-sm rounded-lg p-6 shadow-sm border border-purple-200">
            <h2 className="text-2xl font-medium mb-4 text-purple-800">What is Divination?</h2>
            <p className="text-sm leading-relaxed">
              Divination is the practice of seeking knowledge of the future or the unknown through supernatural 
              or intuitive means. Throughout history, humans have developed numerous methods to glimpse beyond 
              the veil of ordinary perception and connect with higher wisdom.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/70 backdrop-blur-sm rounded-lg p-6 shadow-sm border border-purple-200">
              <h3 className="text-lg font-medium mb-3 text-purple-800">Tarot Cards</h3>
              <p className="text-sm leading-relaxed">
                A deck of 78 cards used for gaining insight into past, present, and future situations 
                through symbolic interpretation and intuitive guidance.
              </p>
            </div>

            <div className="bg-white/70 backdrop-blur-sm rounded-lg p-6 shadow-sm border border-purple-200">
              <h3 className="text-lg font-medium mb-3 text-purple-800">Astrology</h3>
              <p className="text-sm leading-relaxed">
                The study of celestial movements and their influence on human affairs and natural 
                phenomena, providing cosmic guidance for life decisions.
              </p>
            </div>

            <div className="bg-white/70 backdrop-blur-sm rounded-lg p-6 shadow-sm border border-purple-200">
              <h3 className="text-lg font-medium mb-3 text-purple-800">Numerology</h3>
              <p className="text-sm leading-relaxed">
                The mystical study of numbers and their significance in our lives, revealing 
                patterns and meanings through mathematical relationships.
              </p>
            </div>

            <div className="bg-white/70 backdrop-blur-sm rounded-lg p-6 shadow-sm border border-purple-200">
              <h3 className="text-lg font-medium mb-3 text-purple-800">Palmistry</h3>
              <p className="text-sm leading-relaxed">
                The art of reading the lines, shapes, and features of the hands to gain 
                insight into personality, life path, and potential future events.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-100 to-violet-100 rounded-lg p-6 border border-purple-200">
            <h2 className="text-xl font-medium mb-4 text-purple-800 text-center">The Purpose of Divination</h2>
            <p className="text-sm leading-relaxed text-center">
              Divination serves not to predict a fixed future, but to illuminate possibilities, provide 
              guidance during times of uncertainty, and help us connect with our deeper intuition and 
              the wisdom of the universe. It is a tool for self-reflection and spiritual growth.
            </p>
          </div>
        </div>
      </Section>
    </div>
  )
}