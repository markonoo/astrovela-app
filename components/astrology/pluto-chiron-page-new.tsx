import React from "react"

export function PlutoChironPageNew({ pageNumber }: { pageNumber: number }) {
  return (
    <div className="h-full bg-black text-amber-200 flex flex-col">
      <div className="flex-1 px-12 py-10 max-w-6xl mx-auto flex items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Pluto */}
          <div className="flex flex-col items-center h-full">
            {/* Pluto image */}
            <div className="w-[134px] h-[134px] mb-6 relative">
              <img src="/pluto-cover.png" alt="Pluto" className="w-full h-full object-cover shadow-2xl" />
            </div>

            {/* Pluto content box */}
            <div className="border border-amber-400 rounded-lg p-5 w-full relative flex flex-col bg-black bg-opacity-40 flex-1">
              {/* Decorative corner elements */}
              <div className="absolute top-4 left-4 w-4 h-4 border-l-2 border-t-2 border-amber-400"></div>
              <div className="absolute top-4 right-4 w-4 h-4 border-r-2 border-t-2 border-amber-400"></div>
              <div className="absolute bottom-4 left-4 w-4 h-4 border-l-2 border-b-2 border-amber-400"></div>
              <div className="absolute bottom-4 right-4 w-4 h-4 border-r-2 border-b-2 border-amber-400"></div>

              <h2 className="text-3xl font-light text-center mb-3 tracking-[0.15em] font-serif">PLUTO</h2>
              
              <div className="flex-1 space-y-2.5 text-amber-100 text-sm leading-relaxed">
                <p>
                  <span className="font-semibold">PLUTO</span> holds the power of transformation, representing the cycle of death and rebirth that is inherent to life. It speaks to the deep, underlying forces that drive massive change, both personally and collectively. Pluto's influence in our chart reveals the areas of life where we'll face our deepest fears, and undergo profound transformations. It governs power dynamics, regeneration, and the subconscious processes that build our drive for control and evolution.
                </p>
                <p>
                  Pluto's stop in one sign varies significantly due to its elliptical orbit, spending 14 to 30 years in a sign. Pluto's transit marks periods of deep transformation, destruction, and rebirth related to power and regeneration.
                </p>
              </div>

              {/* Pluto symbol at bottom */}
              <div className="flex justify-center mt-4">
                <div className="w-8 h-8 border border-amber-400 rounded-full flex items-center justify-center">
                  <div className="text-amber-400 text-sm">♇</div>
                </div>
              </div>
            </div>
          </div>

          {/* Chiron */}
          <div className="flex flex-col items-center h-full">
            {/* Chiron image */}
            <div className="w-[134px] h-[134px] mb-6 relative">
              <img src="/chiron-cover.png" alt="Chiron" className="w-full h-full object-cover shadow-2xl" />
            </div>

            {/* Chiron content box */}
            <div className="border border-amber-400 rounded-lg p-5 w-full relative flex flex-col bg-black bg-opacity-40 flex-1">
              {/* Decorative corner elements */}
              <div className="absolute top-4 left-4 w-4 h-4 border-l-2 border-t-2 border-amber-400"></div>
              <div className="absolute top-4 right-4 w-4 h-4 border-r-2 border-t-2 border-amber-400"></div>
              <div className="absolute bottom-4 left-4 w-4 h-4 border-l-2 border-b-2 border-amber-400"></div>
              <div className="absolute bottom-4 right-4 w-4 h-4 border-r-2 border-b-2 border-amber-400"></div>

              <h2 className="text-3xl font-light text-center mb-3 tracking-[0.15em] font-serif">CHIRON</h2>
              
              <div className="space-y-2.5 text-amber-100 text-xs leading-relaxed">
                <p>
                  <span className="font-semibold">CHIRON</span> Chiron is a unique and significant entity in astrology, often referred to as the "Wounded Healer." It is not a planet but rather a small Solar System body that orbits between Saturn and Uranus. Discovered in 1977, Chiron is classified as both a minor planet and a comet. It has a unique orbit that signifies its role as a bridge between the material, outer planets, and the more transformative, ethereal qualities of the outer planets, embodying the spirit of Saturn's structure and Uranus's revolutionary nature.
                </p>
                <p>
                  The mythological roots of Chiron come from Greek mythology. Chiron was a centaur, different from his barbaric kin, known for his wisdom, kindness, and skills in medicine. Unfortunately, he was accidentally wounded by a poisoned arrow that could not heal, leading to perpetual suffering. His journey through pain led to great insights into healing, until he voluntarily gave up his immortality to be free from his eternal wound. This story underpins the astrological interpretation of Chiron as both the source of our deepest wound and our capacity for healing.
                </p>
                <p>
                  In astrology, Chiron represents our deepest wounds, vulnerabilities, and the aspects of our lives where we feel most insecure or suffer. More importantly, it also points to how we can heal these wounds—both in ourselves and in helping others. The placement of Chiron in a natal chart, by sign and house, indicates themes of our deepest wounds and the keys to unlocking our most profound healing and growth.
                </p>
              </div>

              {/* Chiron symbol at bottom */}
              <div className="flex justify-center mt-4">
                <div className="w-8 h-8 border border-amber-400 rounded-full flex items-center justify-center">
                  <div className="text-amber-400 text-sm">⚷</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Page number */}
      <div className="text-center text-amber-200 text-lg font-light pb-6">
        78
      </div>
    </div>
  )
}
