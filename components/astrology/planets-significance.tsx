import React from "react"
import { Section } from "./base/Section"

export function PlanetsSignificance({ pageNumber }: { pageNumber: number }) {
  return (
    <div className="h-full bg-black text-white flex flex-col flex-1 relative">
      <Section className="page-dark max-w-2xl overflow-hidden mx-auto mt-[10%]">
        <h1 className="text-5xl md:text-6xl font-light tracking-[0.15em] font-serif">
          THE SIGNIFICANCE<br />OF PLANETS
        </h1>

        <div className="mb-10">
          <p className="canva-text-content mb-6">
            The planets are the heart of astrology, each one symbolizing different aspects of our being and life experiences. Each of them has their roles, characteristics, and influences. From the Sun, which illuminates our core identity, to Pluto, the bringer of transformation and rebirth, the planets weave a complex narrative of personal growth, challenges, and talents.
          </p>
        </div>

        <div className="mb-10">
          <h2 className="text-5xl md:text-6xl font-light tracking-[0.15em] font-serif">
            THE EVOLUTION OF<br />PLANETARY ASTROLOGY
          </h2>

          <p className="canva-text-content mb-6">
            Throughout history, the study of astrology has evolved alongside advances in astronomy. The discovery of the outer planets—Uranus, Neptune, and Pluto—in more recent centuries expanded the astrological landscape, adding new dimensions of understanding to astrological interpretations. Each new planet discovered brought with it a shift in astrological practices, reflecting the changing times and expanding our understanding of the human psyche.
          </p>

          <p className="canva-text-content">
            The importance of the planets in astrology lies not just in their individual meanings but in how they interact with each other and the zodiac signs. These relationships, known as aspects, create a complex and detailed picture of an individual's life and potential. Astrology, therefore, offers a unique tool for self-discovery and personal growth, bridging the material and the mystical, the earthly and the divine.
          </p>
        </div>
      </Section>

      {/* Page number */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-amber-200 text-lg font-light">
        {pageNumber}
      </div>
    </div>
  )
}
