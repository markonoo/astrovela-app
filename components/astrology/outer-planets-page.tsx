import React from "react"
import { Section } from "./base/Section"

export function OuterPlanetsPage({ pageNumber }: { pageNumber: number }) {
  return (
    <div className="h-full bg-black text-white flex flex-col flex-1">
      <Section className="page-dark max-w-5xl">
        <h1 className="text-7xl md:text-8xl font-light tracking-[0.15em] font-serif text-center">THE OUTER<br/>PLANETS</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch [grid-auto-rows:1fr]">
          {/* Uranus */}
          <div className="card-arch flex flex-col h-full p-6">
            <div className="h-40 flex items-center justify-center mb-4">
              <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-08-23%20at%2017.55.23-ohRrFApypZcwnQRgNVLu4hRPLyBFEX.png"
                alt="Uranus"
                className="max-h-full object-contain"
              />
            </div>
            <h2 className="text-2xl text-amber-100 tracking-[0.15em] font-serif text-center mb-4">URANUS</h2>
            <div className="body-copy text-sm text-amber-100 flex-1 space-y-4">
              <p>
                  <span className="font-semibold">URANUS</span> brings disruption with its energy of innovation,
                  revolution, and change. It symbolizes the breaking of boundaries, the spark of genius, and the suddenchanges that change our paths. Uranus points to where we seek freedom and individuality, often throughunconventional means. It governs technology, originality, and the collective movements that shapechanges in society. Uranus's transits can bring unexpected events, awakening us to new possibilitiesand realities.
              </p>
              <p>
                  Uranus spends around 7 years in each sign, taking 84 years to orbit the Sun. Its transitions signalmajor shifts in consciousness, innovation, and revolutions in the aspects of life it influences.
              </p>
            </div>
            <div className="mt-6 flex justify-center opacity-80"><div className="text-amber-200">♅</div></div>
          </div>

          {/* Neptune */}
          <div className="card-arch flex flex-col h-full p-6">
            <div className="h-40 flex items-center justify-center mb-4">
              <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-08-23%20at%2017.55.23-ohRrFApypZcwnQRgNVLu4hRPLyBFEX.png"
                alt="Neptune"
                className="max-h-full object-contain"
              />
            </div>
            <h2 className="text-2xl text-amber-100 tracking-[0.15em] font-serif text-center mb-4">NEPTUNE</h2>
            <div className="body-copy text-sm text-amber-100 flex-1 space-y-4">
              <p>
                  <span className="font-semibold">NEPTUNE</span> Neptune invites us into the ethereal side, wheredreams, illusions, and mysticism come to life. It represents our connection to the universalconsciousness, our empathy, and our capacity for self-sacrifice. Neptune's placement in the charthighlights areas where we wish to connect with something greater than ourselves through artisticexpression, spirituality, or the pursuit of ideals. It protects our dreams, our delusions, and theplaces we escape to, challenging us to navigate between inspiration and illusion.
              </p>
              <p>
                  With roughly 14 years in each sign, Neptune completes its cycle in about 165 years. Neptune's slowmovement brings gradual but profound changes in spirituality, creativity, and collective trends.
              </p>
            </div>
            <div className="mt-6 flex justify-center opacity-80"><div className="text-amber-200">♆</div></div>
          </div>
        </div>
      </Section>
    </div>
  )
}
