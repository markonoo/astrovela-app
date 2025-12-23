import React from "react"
import { Section } from "./base/Section"

interface MajorArcana1Props {
  pageNumber: number
}

export function MajorArcana1({ pageNumber }: MajorArcana1Props) {
  const cards = [
    {
      number: "0",
      name: "The Fool",
      meaning: "New beginnings, innocence, spontaneity, free spirit",
      description: "The Fool represents the beginning of all journeys, both literal and metaphorical. This card signifies a willingness to take risks and embrace the unknown with optimism and trust."
    },
    {
      number: "I",
      name: "The Magician",
      meaning: "Manifestation, resourcefulness, power, inspired action",
      description: "The Magician symbolizes the power to manifest your desires through focused will and action. You have all the tools you need to succeed - the question is how you'll use them."
    },
    {
      number: "II",
      name: "The High Priestess",
      meaning: "Intuition, sacred knowledge, subconscious mind",
      description: "The High Priestess represents inner wisdom, intuition, and the mysteries of the subconscious. She encourages you to trust your inner voice and pay attention to your dreams and instincts."
    },
    {
      number: "III",
      name: "The Empress",
      meaning: "Femininity, beauty, nature, abundance, motherhood",
      description: "The Empress embodies fertility, creation, and nurturing energy. She represents abundance in all forms - whether creative projects, relationships, or material wealth."
    },
    {
      number: "IV",
      name: "The Emperor",
      meaning: "Authority, establishment, structure, father figure",
      description: "The Emperor represents leadership, authority, and the establishment of order. He signifies the need for structure, discipline, and taking control of your life circumstances."
    },
    {
      number: "V",
      name: "The Hierophant",
      meaning: "Spiritual wisdom, religious beliefs, conformity, tradition",
      description: "The Hierophant represents traditional spiritual wisdom and established institutions. He encourages learning from established systems while finding your own spiritual path."
    }
  ]

  return (
    <div className="h-full bg-gradient-to-br from-violet-900 to-purple-900 text-white">
      <Section className="page-dark max-w-5xl overflow-hidden">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-light mb-6 tracking-[0.15em] font-serif text-violet-200">
            MAJOR ARCANA
          </h1>
          <div className="text-sm text-violet-300 mb-8">
            The Fool's Journey - Cards 0-V
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 shadow-sm border border-violet-400/30">
              <div className="flex items-center mb-4">
                <div className="w-12 h-16 bg-gradient-to-br from-violet-600 to-purple-700 rounded-lg flex items-center justify-center mr-4 text-white font-bold">
                  {card.number}
                </div>
                <div>
                  <h2 className="text-lg font-medium text-violet-200">{card.name}</h2>
                  <p className="text-xs text-violet-300">{card.meaning}</p>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-violet-100">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-violet-800/50 to-purple-800/50 rounded-lg p-6 border border-violet-400/30 mt-8">
          <h2 className="text-xl font-medium mb-4 text-violet-200 text-center">The Fool's Journey Begins</h2>
          <p className="text-sm leading-relaxed text-violet-100 text-center">
            These first six cards of the Major Arcana represent the beginning of the soul's journey. 
            From The Fool's innocent beginning through the establishment of earthly and spiritual authority, 
            these cards lay the foundation for all spiritual and material growth that follows.
          </p>
        </div>
      </Section>
    </div>
  )
}