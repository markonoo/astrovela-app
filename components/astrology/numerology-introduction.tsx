import React from "react"
import { Section } from "./base/Section"

export function NumerologyIntroduction({ pageNumber }: { pageNumber: number }) {
  return (
    <div className="h-full bg-black flex flex-col flex-1 relative">
      <Section className="page-dark relative overflow-hidden">
        <div className="text-center">
          <h1 className="text-xl font-light mb-8 tracking-[0.15em] font-serif text-[#D4AF37]">
            NUMEROLOGY INTRODUCTION
          </h1>
          <p className="text-sm leading-relaxed mb-8 text-gray-300">
            Introduction to the ancient science of numerology.
          </p>
        </div>
      </Section>
    </div>
  )
}