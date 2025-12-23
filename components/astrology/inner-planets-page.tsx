import React from "react"
import { Section } from "./base/Section"

export function InnerPlanetsPage({ pageNumber }: { pageNumber: number }) {
  return (
    <div className="h-full bg-black text-white flex flex-col flex-1">
      <Section className="page-dark max-w-5xl">
        <h1 className="text-7xl md:text-8xl font-light tracking-[0.15em] font-serif text-center">THE INNER<br/>PLANETS</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch [grid-auto-rows:1fr]">
          <div className="card-arch flex flex-col h-full p-6">
            <div className="h-40 flex items-center justify-center mb-4">
              <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-08-23%20at%2017.55.03-UtK4zSfEdx5UzkVtWKS6CYGqbU5Wdp.png" alt="Mercury" className="max-h-full object-contain"/>
            </div>
            <h2 className="text-2xl text-amber-100 tracking-[0.15em] font-serif text-center mb-4">MERCURY</h2>
            <div className="body-copy text-sm text-amber-100 flex-1 space-y-4">
              <p><span className="font-semibold">MERCURY</span> is responsible not only for how we communicate with words but also for our ability to perceive and process the world around us. It manages logical thinking, as well as our curiosity and capacity to learn. Mercury also influences our non-verbal communication, the way we gesture, write, and think. It's also the ruler of technology and travel, which helps the exchange of ideas and information. The sign Mercury occupies influences whether our communication style is assertive, passive, detailed, or big-picture-oriented, affecting everything from our humor to our negotiation skills.</p>
              <p>Mercury approximately stays 3–4 weeks in each sign. However, due to its retrograde motion, it can stay in a single sign for up to 8 weeks. Mercury's transitions influence shifts in our thinking and communication.</p>
            </div>
            <div className="mt-6 flex justify-center opacity-80"><div className="text-amber-200">☿</div></div>
          </div>
          {/* Placeholder for next inner planet card if/when added */}
          <div className="card-arch flex flex-col h-full p-6"></div>
        </div>
      </Section>
    </div>
  )
}
