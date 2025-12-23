import React from "react"
import { Section } from "./base/Section"

interface TarotReadingGuideProps {
  pageNumber: number
}

export function TarotReadingGuide({ pageNumber }: TarotReadingGuideProps) {
  const steps = [
    {
      number: "1",
      title: "Prepare Your Space",
      description: "Create a quiet, sacred space. Light candles, burn incense, or play soft music to enhance the mystical atmosphere."
    },
    {
      number: "2",
      title: "Clear Your Mind",
      description: "Take a few deep breaths and center yourself. Release any distracting thoughts and focus on your question or intention."
    },
    {
      number: "3",
      title: "Shuffle the Cards",
      description: "While holding your question in mind, shuffle the deck thoroughly. Trust your intuition to know when to stop."
    },
    {
      number: "4",
      title: "Draw Your Cards",
      description: "Cut the deck or fan out the cards face down. Choose the cards that feel right to you - trust your intuition."
    },
    {
      number: "5",
      title: "Layout the Spread",
      description: "Place cards in your chosen spread pattern. Each position has specific meaning related to your question."
    },
    {
      number: "6",
      title: "Interpret the Messages",
      description: "Look at each card's meaning, but also trust your intuitive response. Notice symbols, colors, and feelings."
    }
  ]

  return (
    <div className="h-full bg-gradient-to-br from-purple-900 to-indigo-900 text-white">
      <Section className="page-dark max-w-4xl overflow-hidden">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-light mb-6 tracking-[0.15em] font-serif text-purple-200">
            TAROT READING GUIDE
          </h1>
          <div className="text-sm text-purple-300 mb-8">
            Step-by-step guide to reading the cards
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 shadow-sm border border-purple-400/30">
            <h2 className="text-xl font-medium mb-4 text-purple-200">Before You Begin</h2>
            <p className="text-sm leading-relaxed text-purple-100">
              Tarot reading is a sacred practice that requires respect, intention, and an open mind. 
              The cards serve as a mirror to your subconscious, offering guidance and insight. 
              Approach each reading with reverence and trust in your intuitive abilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {steps.map((step, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 shadow-sm border border-purple-400/30">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold mr-3">
                    {step.number}
                  </div>
                  <h3 className="text-lg font-medium text-purple-200">{step.title}</h3>
                </div>
                <p className="text-sm leading-relaxed text-purple-100">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-purple-800/50 to-indigo-800/50 rounded-lg p-6 border border-purple-400/30">
            <h2 className="text-xl font-medium mb-4 text-purple-200 text-center">Types of Questions</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div>
                <h4 className="font-medium text-purple-200 mb-2">Open-Ended</h4>
                <p className="text-purple-300">"What do I need to know about...?" "How can I improve...?"</p>
              </div>
              <div>
                <h4 className="font-medium text-purple-200 mb-2">Guidance</h4>
                <p className="text-purple-300">"What should I focus on?" "What energy surrounds...?"</p>
              </div>
              <div>
                <h4 className="font-medium text-purple-200 mb-2">Avoid</h4>
                <p className="text-purple-300">Yes/No questions, health/legal advice, specific timing</p>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 shadow-sm border border-purple-400/30">
            <h2 className="text-xl font-medium mb-4 text-purple-200 text-center">Reading Tips</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
              <div>
                <h4 className="font-medium text-purple-200 mb-2">Trust Your Intuition</h4>
                <p className="text-purple-100">Your first impression is often the most accurate. Notice what you feel when you see each card.</p>
              </div>
              <div>
                <h4 className="font-medium text-purple-200 mb-2">Look for Patterns</h4>
                <p className="text-purple-100">Notice repeated suits, numbers, or themes across the spread. These patterns carry important messages.</p>
              </div>
              <div>
                <h4 className="font-medium text-purple-200 mb-2">Consider Reversed Cards</h4>
                <p className="text-purple-100">Upside-down cards can indicate blocked energy, internal issues, or a need for reflection.</p>
              </div>
              <div>
                <h4 className="font-medium text-purple-200 mb-2">Tell a Story</h4>
                <p className="text-purple-100">Connect the cards to create a narrative. How do they relate to each other and your question?</p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}