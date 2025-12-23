import React from "react"
import { Section } from "./base/Section"

export function LuminariesPage({ pageNumber }: { pageNumber: number }) {
  return (
    <div className="h-full bg-black text-white flex flex-col flex-1">
      <Section className="page-dark max-w-5xl">
        <h1 className="text-5xl md:text-6xl font-light tracking-[0.15em] font-serifr">
          THE
          <br />
          LUMINARIES
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 flex-1 items-stretch">
          {/* Sun */}
          <div className="flex flex-col flex-1 items-center">
            <div className="w-32 h-32 mb-6">
              <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-08-23%20at%2017.54.58-6XOEAyCV0Ws4sLFPBOG1gRbUF3Uqs9.png"
                alt="Sun"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="border border-amber-200 rounded-lg p-6 w-full">
              <h2 className="text-5xl md:text-6xl font-light tracking-[0.15em] font-serifr">SUN</h2>
              <div className="space-y-4 flex-1 text-amber-100">
                <p className="body-copy text-sm">
                  <span className="font-semibold">THE SUN</span> not only symbolizes our ego and will, but it alsoilluminates our creative force, the raw energy that fuels our passions, ambitions, and the pursuit ofour true selves. The Sun's position by sign, house, and aspect in our natal chart is a guide tounderstanding our potential for achievement, leadership, and the way we radiate our power. It shapesour personality, influencing everything from our approach to life's challenges to how we express ourindividuality. The Sun's transit through the sky marks significant cycles, offering opportunities forgrowth, self-expression, and the realization of our deepest desires. The Sun is also the mostwidely-known planet, often associated with the term "Zodiac Sign".
                </p>
                <p className="body-copy text-sm">
                  The Sun usually takes approximately 1 month in each sign. The Sun's journey through the zodiac takesabout a year, symbolizing the cycle of personal growth and evolution over a year.
                </p>
              </div>
              <div className="flex justify-between mt-4">
                <div className="w-8 h-8 border border-amber-200 rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-amber-200 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Moon */}
          <div className="flex flex-col flex-1 items-center">
            <div className="w-32 h-32 mb-6">
              <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-08-23%20at%2017.54.58-6XOEAyCV0Ws4sLFPBOG1gRbUF3Uqs9.png"
                alt="Moon"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="border border-amber-200 rounded-lg p-6 w-full">
              <h2 className="text-5xl md:text-6xl font-light tracking-[0.15em] font-serifr">MOON</h2>
              <div className="space-y-4 flex-1 text-amber-100">
                <p className="body-copy text-sm">
                  <span className="font-semibold">THE MOON</span> reflects the moods and emotions that flow through us.
                  It represents our instinctual self, our memory, and the subconscious layers that are responsible forour habits and attachments. Its placement in our birth chart speaks to our intuitive sense and the waywe seek comfort and security in the world. The Moon's phases, from new to full, symbolize the cyclicalnature of our lives, reminding us of the constant change and the need to adapt emotionally to theworld's rhythms.
                </p>
                <p className="body-copy text-sm">
                  The Moon stays in each sign for approximately 2.5 days. Its rapid movement reflects the changinglandscape of our emotions and moods.
                </p>
              </div>
              <div className="flex justify-between mt-4">
                <div className="w-8 h-8 border border-amber-200 rounded-full flex items-center justify-center">
                  <div className="w-3 h-6 border-l-2 border-amber-200 rounded-l-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}
