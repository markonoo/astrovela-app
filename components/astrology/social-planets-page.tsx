import React from "react"
import { Section } from "./base/Section"

export function SocialPlanetsPage({ pageNumber }: { pageNumber: number }) {
  return (
    <div className="h-full bg-black text-white flex flex-col flex-1">
      <Section className="page-dark max-w-5xl">
        <h1 className="text-7xl md:text-8xl font-light tracking-[0.15em] font-serif text-center">THE SOCIAL<br/>PLANETS</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch [grid-auto-rows:1fr]">
          {/* Jupiter */}
          <div className="card-arch flex flex-col h-full p-6">
            <div className="h-40 flex items-center justify-center mb-4">
              <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-08-23%20at%2017.55.17-q0tfBu6Rb8Tgg9vffs5TnVzDLai6F9.png"
                alt="Jupiter"
                className="max-h-full object-contain"
              />
            </div>
            <h2 className="text-2xl text-amber-100 tracking-[0.15em] font-serif text-center mb-4">JUPITER</h2>
            <div className="body-copy text-sm text-amber-100 flex-1 space-y-4">
              <p>
                  <span className="font-semibold">JUPITER</span> reflects our capacity for joy, growth, and expansion inthe material and spiritual spheres. It is the planet of fortune, which shows where we may find successand abundance in our lives. Jupiter encourages us to reach beyond our current limitations, to learn,
                  grow, find meaning and purpose. It's associated with the law, ethics, and higher learning. Jupiter'stransit through the zodiac can mean times of prosperity, learning, and taking risks.
              </p>
              <p>
                  Jupiter approximately remains 12-13 months in each sign, completing its cycle in 12 years. Jupiter'stransitions bring growth, expansion, and opportunities in the areas it touches.
              </p>
            </div>
            <div className="mt-6 flex justify-center opacity-80"><div className="text-amber-200">♃</div></div>
          </div>

          {/* Saturn */}
          <div className="card-arch flex flex-col h-full p-6">
            <div className="h-40 flex items-center justify-center mb-4">
              <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-08-23%20at%2017.55.17-q0tfBu6Rb8Tgg9vffs5TnVzDLai6F9.png"
                alt="Saturn"
                className="max-h-full object-contain"
              />
            </div>
            <h2 className="text-2xl text-amber-100 tracking-[0.15em] font-serif text-center mb-4">SATURN</h2>
            <div className="body-copy text-sm text-amber-100 flex-1 space-y-4">
              <p>
                  <span className="font-semibold">SATURN</span> embodies the principle of limitation and structure,
                  teaching us the value of discipline, patience, and hard work. It represents time, karma, and thelessons we must learn to mature and grow. Saturn's placement in our chart indicates where we mayencounter obstacles, duties, and responsibilities. In addition, Saturn shows us where we can achieveour greatest accomplishments through perseverance. It governs our ambitions, our fears, and thestructures we build in our lives, including careers, reputations, and roles in society.
              </p>
              <p>
                  In about 2.5 years in each sign, Saturn takes 29.5 years to complete a full cycle. Its movements areassociated with significant life lessons, challenges, and structures we need to build or redefine.
              </p>
            </div>
            <div className="mt-6 flex justify-center opacity-80"><div className="text-amber-200">♄</div></div>
          </div>
        </div>
      </Section>
    </div>
  )
}
