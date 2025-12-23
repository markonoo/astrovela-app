import React from "react"
import { Section } from "./base/Section"

interface TwelveHousesOverviewProps {
  pageNumber: number
}

export function TwelveHousesOverview({ pageNumber }: TwelveHousesOverviewProps) {
  const houses = [
    { number: 1, name: "House of Self", theme: "Identity, appearance, first impressions", color: "from-red-400 to-red-600" },
    { number: 2, name: "House of Values", theme: "Money, possessions, self-worth", color: "from-green-400 to-green-600" },
    { number: 3, name: "House of Communication", theme: "Learning, siblings, short trips", color: "from-yellow-400 to-yellow-600" },
    { number: 4, name: "House of Home", theme: "Family, roots, emotional foundation", color: "from-blue-400 to-blue-600" },
    { number: 5, name: "House of Creativity", theme: "Romance, children, self-expression", color: "from-orange-400 to-orange-600" },
    { number: 6, name: "House of Service", theme: "Work, health, daily routines", color: "from-purple-400 to-purple-600" },
    { number: 7, name: "House of Partnerships", theme: "Marriage, relationships, open enemies", color: "from-pink-400 to-pink-600" },
    { number: 8, name: "House of Transformation", theme: "Death/rebirth, shared resources, occult", color: "from-gray-400 to-gray-600" },
    { number: 9, name: "House of Philosophy", theme: "Higher learning, travel, beliefs", color: "from-indigo-400 to-indigo-600" },
    { number: 10, name: "House of Career", theme: "Reputation, authority, life direction", color: "from-teal-400 to-teal-600" },
    { number: 11, name: "House of Community", theme: "Friends, groups, hopes and wishes", color: "from-cyan-400 to-cyan-600" },
    { number: 12, name: "House of Spirituality", theme: "Subconscious, karma, hidden enemies", color: "from-violet-400 to-violet-600" }
  ]

  return (
    <div className="h-full bg-gradient-to-br from-slate-900 to-indigo-900 text-white">
      <Section className="page-dark max-w-6xl overflow-hidden">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-light mb-6 tracking-[0.15em] font-serif text-slate-200">
            THE TWELVE HOUSES
          </h1>
          <div className="text-sm text-slate-300 mb-8">
            The complete map of life experiences
          </div>
        </div>

        {/* Circular House Chart */}
        <div className="relative w-80 h-80 mx-auto mb-8">
          <div className="absolute inset-0 border-2 border-slate-400 rounded-full"></div>
          <div className="absolute inset-8 border border-slate-500 rounded-full"></div>
          
          {/* House divisions */}
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i}
              className="absolute w-0.5 h-40 bg-slate-400 origin-bottom"
              style={{
                left: "50%",
                bottom: "50%",
                transform: `translateX(-50%) rotate(${i * 30}deg)`,
              }}
            />
          ))}

          {/* House numbers */}
          {houses.map((house, i) => (
            <div key={i}
              className="absolute w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center text-white text-sm font-bold"
              style={{
                left: "50%",
                top: "50%",
                transform: `translate(-50%, -50%) rotate(${i * 30 + 15}deg) translateY(-9rem) rotate(-${i * 30 + 15}deg)`,
              }}
            >
              {house.number}
            </div>
          ))}
        </div>

        {/* Houses Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {houses.map((house, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 shadow-sm border border-slate-600">
              <div className="flex items-center mb-3">
                <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${house.color} mr-2`}></div>
                <span className="text-lg font-bold text-slate-200">{house.number}</span>
              </div>
              <h3 className="text-sm font-medium text-slate-200 mb-2">{house.name}</h3>
              <p className="text-xs text-slate-300 leading-relaxed">{house.theme}</p>
            </div>
          ))}
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 shadow-sm border border-slate-600 mt-8">
          <h2 className="text-xl font-medium mb-4 text-slate-200 text-center">Understanding House Systems</h2>
          <p className="text-sm leading-relaxed text-slate-300 text-center">
            The houses represent the "where" of astrological influence, while planets represent the "what" 
            and signs represent the "how." Each house governs specific life areas, and planets placed in 
            houses show where your energy is most focused and active.
          </p>
        </div>
      </Section>
    </div>
  )
}