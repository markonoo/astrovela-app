import React from "react"
import { Section } from "./base/Section"

interface TarotIntroductionProps {
  pageNumber: number
}

export function TarotIntroduction({ pageNumber }: TarotIntroductionProps) {
  return (
    <div className="h-full bg-gradient-to-br from-purple-900 to-indigo-900 text-white">
      <Section className="page-dark max-w-4xl overflow-hidden">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-light mb-6 tracking-[0.15em] font-serif text-purple-200">
            THE TAROT
          </h1>
          <div className="text-sm text-purple-300 mb-8">
            A journey through the mysteries of the cards
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 shadow-sm border border-purple-400/30">
            <h2 className="text-2xl font-medium mb-4 text-purple-200">Ancient Wisdom in 78 Cards</h2>
            <p className="text-sm leading-relaxed text-purple-100">
              The Tarot is a powerful system of divination and self-reflection, consisting of 78 cards 
              divided into the Major Arcana (22 cards) and Minor Arcana (56 cards). Each card carries 
              symbolic meanings that speak to the depths of human experience and the journey of the soul.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 shadow-sm border border-purple-400/30">
              <h3 className="text-xl font-medium mb-3 text-purple-200">Major Arcana</h3>
              <p className="text-sm leading-relaxed text-purple-100">
                The 22 Major Arcana cards represent life's spiritual lessons and karmic influences. 
                From The Fool's innocent beginning to The World's completion, these cards tell the 
                story of the soul's evolution through major life experiences.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 shadow-sm border border-purple-400/30">
              <h3 className="text-xl font-medium mb-3 text-purple-200">Minor Arcana</h3>
              <p className="text-sm leading-relaxed text-purple-100">
                The 56 Minor Arcana cards reflect daily life experiences and practical matters. 
                Divided into four suits - Cups (emotions), Wands (creativity), Swords (thoughts), 
                and Pentacles (material world) - they guide us through everyday challenges.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-800/50 to-indigo-800/50 rounded-lg p-6 border border-purple-400/30">
            <h2 className="text-xl font-medium mb-4 text-purple-200 text-center">The Four Suits</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div className="text-center">
                <div className="text-2xl mb-2">♥</div>
                <h4 className="font-medium text-purple-200 mb-1">Cups</h4>
                <p className="text-purple-300">Emotions, love, relationships, intuition</p>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">⚔</div>
                <h4 className="font-medium text-purple-200 mb-1">Swords</h4>
                <p className="text-purple-300">Thoughts, communication, conflict, clarity</p>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">🌱</div>
                <h4 className="font-medium text-purple-200 mb-1">Wands</h4>
                <p className="text-purple-300">Creativity, passion, career, growth</p>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">⛁</div>
                <h4 className="font-medium text-purple-200 mb-1">Pentacles</h4>
                <p className="text-purple-300">Material world, money, health, security</p>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 shadow-sm border border-purple-400/30">
            <h2 className="text-xl font-medium mb-4 text-purple-200 text-center">Reading the Cards</h2>
            <p className="text-sm leading-relaxed text-purple-100 text-center">
              Tarot reading is both an art and an intuitive practice. The cards serve as mirrors, 
              reflecting our inner wisdom and helping us gain clarity on life's questions. Whether 
              used for daily guidance or deep spiritual insight, the Tarot offers a pathway to 
              understanding our past, present, and potential future.
            </p>
          </div>
        </div>
      </Section>
    </div>
  )
}