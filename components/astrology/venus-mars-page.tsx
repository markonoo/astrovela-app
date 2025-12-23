import React from "react"
import { Section } from "./base/Section"

export function VenusMarsPage({ pageNumber }: { pageNumber: number }) {
  return (
    <div className="h-full bg-black text-white flex flex-col flex-1">
      <Section className="page-dark max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 flex-1 items-stretch">
          {/* Venus */}
          <div className="flex flex-col flex-1 items-center">
            <div className="w-32 h-32 mb-6">
              <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-08-23%20at%2017.55.11-npMOxQZ8w9BM8LT0yWI4eqbOdmn4iK.png"
                alt="Venus"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="border border-amber-200 rounded-lg p-6 w-full">
              <h2 className="text-5xl md:text-6xl font-light tracking-[0.15em] font-serifr">VENUS</h2>
              <div className="space-y-4 flex-1 text-amber-100">
                <p className="body-copy text-sm">
                  <span className="font-semibold">VENUS</span> embodies the attraction principle, dictating who, what,
                  and why we love. It represents our taste, sense of beauty, and financial inclinations. It alsoreflects our pursuit of harmony in relationships and environments. Venus's influence extends to oursocial life, the pleasure we derive from our senses, and our native charm. It also touches upon thecreation and appreciation of art, music, and all forms of beauty, highlighting the importance ofbalance, partnership, and the sharing of affection.
                </p>
                <p className="body-copy text-sm">
                  Venus stays about 4-5 weeks in each sign, though its retrograde period can extend its stay to about 4months. Venus governs our love life, pleasures, and finances, with its transitions marking periods ofharmony or reassessment in these areas.
                </p>
              </div>
              <div className="flex justify-between mt-4">
                <div className="w-8 h-8 border border-amber-200 rounded-full flex items-center justify-center">
                  <div className="text-amber-200 text-xs">♀</div>
                </div>
              </div>
            </div>
          </div>

          {/* Mars */}
          <div className="flex flex-col flex-1 items-center">
            <div className="w-32 h-32 mb-6">
              <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-08-23%20at%2017.55.11-npMOxQZ8w9BM8LT0yWI4eqbOdmn4iK.png"
                alt="Mars"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="border border-amber-200 rounded-lg p-6 w-full">
              <h2 className="text-5xl md:text-6xl font-light tracking-[0.15em] font-serifr">MARS</h2>
              <div className="space-y-4 flex-1 text-amber-100">
                <p className="body-copy text-sm">
                  <span className="font-semibold">MARS</span> brings out assertive energy, courage to take risks, and adeep drive to assert individuality and independence. Mars's placement in our chart reveals ourapproach to conflict, competition, and the pursuit of our desires. It speaks to the raw energy thatpushes us forward, the anger that flares, and the sexual drive that seeks satisfaction. Mars is oursurvival instinct, the fight response in case of a challenge, and the determination to overcomeobstacles.
                </p>
                <p className="body-copy text-sm">
                  Mars spends about 6-7 weeks in a sign, however, but can change for up to 8 months if it goesretrograde. Its movement affects our energy levels, passions, and how we assert ourselves.
                </p>
              </div>
              <div className="flex justify-between mt-4">
                <div className="w-8 h-8 border border-amber-200 rounded-full flex items-center justify-center">
                  <div className="text-amber-200 text-xs">♂</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}
