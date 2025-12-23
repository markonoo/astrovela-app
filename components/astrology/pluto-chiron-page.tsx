import React from "react"
import { Section } from "./base/Section"

export function PlutoChironPage({ pageNumber }: { pageNumber: number }) {
  return (
    <div className="h-full bg-black text-white flex flex-col flex-1">
      <Section className="page-dark max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 flex-1 items-stretch">
          {/* Pluto */}
          <div className="flex flex-col flex-1 items-center">
            <div className="w-32 h-32 mb-6">
              <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-08-23%20at%2017.55.30-j1SB5FLwKwXMTf3zw6gDH2xxSLF56Q.png"
                alt="Pluto"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="border border-amber-200 rounded-lg p-6 w-full">
              <h2 className="text-5xl md:text-6xl font-light tracking-[0.15em] font-serifr">PLUTO</h2>
              <div className="space-y-4 flex-1 text-amber-100">
                <p className="body-copy text-sm">
                  <span className="font-semibold">PLUTO</span> holds the power of transformation, representing the cycleof death and rebirth that is inherent to life. It speaks to the deep, underlying forces that drivemassive change, both personally and collectively. Pluto's influence in our chart reveals the areas oflife where we'll face our deepest fears, and undergo profound transformations. It governs powerdynamics, regeneration, and the subconscious processes that build our drive for control and evolution.
                </p>
                <p className="body-copy text-sm">
                  Pluto's stop in one sign varies significantly due to its elliptical orbit, spending 14 to 30 years ina sign. Pluto's transit marks periods of deep transformation, destruction, and rebirth related topower and regeneration.
                </p>
              </div>
              <div className="flex justify-between mt-4">
                <div className="w-8 h-8 border border-amber-200 rounded-full flex items-center justify-center">
                  <div className="text-amber-200 text-xs">♇</div>
                </div>
              </div>
            </div>
          </div>

          {/* Chiron */}
          <div className="flex flex-col flex-1 items-center">
            <div className="w-32 h-32 mb-6">
              <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-08-23%20at%2017.55.30-j1SB5FLwKwXMTf3zw6gDH2xxSLF56Q.png"
                alt="Chiron"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="border border-amber-200 rounded-lg p-6 w-full">
              <h2 className="text-5xl md:text-6xl font-light tracking-[0.15em] font-serifr">CHIRON</h2>
              <div className="space-y-4 flex-1 text-amber-100">
                <p className="text-xs leading-relaxed">
                  <span className="font-semibold">CHIRON</span> Chiron is a unique and significant entity in astrology,
                  often referred to as the "Wounded Healer." It is not a planet but rather a small Solar System bodythat orbits between Saturn and Uranus. Discovered in 1977, Chiron is classified as both a minor planetand a comet. It has a unique orbit that signifies its role as a bridge between the material, outerplanets, and the more transformative, ethereal qualities of the outer planets, embodying the spirit ofSaturn's structure and Uranus's revolutionary nature.
                </p>
                <p className="text-xs leading-relaxed">
                  The mythological roots of Chiron come from Greek mythology. Chiron was a centaur, different from hisbarbaric kin, known for his wisdom, kindness, and skills in medicine. Unfortunately, he wasaccidentally wounded by a poisoned arrow that could not heal, leading to perpetual suffering. Hisjourney through pain led to great insights into healing, until he voluntarily gave up his immortalityto be free from his eternal wound. This story underpins the astrological interpretation of Chiron asboth the source of our deepest wound and our capacity for healing.
                </p>
                <p className="text-xs leading-relaxed">
                  In astrology, Chiron represents our deepest wounds, vulnerabilities, and the aspects of our liveswhere we feel most insecure or suffer. More importantly, it also points to how we can heal thesewounds—both in ourselves and in helping others. The placement of Chiron in a natal chart, by sign andhouse, indicates themes of our deepest wounds and the keys to unlocking our most profound healing andgrowth.
                </p>
              </div>
              <div className="flex justify-between mt-4">
                <div className="w-8 h-8 border border-amber-200 rounded-full flex items-center justify-center">
                  <div className="text-amber-200 text-xs">⚷</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}
