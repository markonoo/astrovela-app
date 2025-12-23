import React from "react"
import { Section } from "./base/Section"

export function TarotSpreads({ pageNumber }: { pageNumber: number }) {
  return (
    <div className="h-full bg-black flex flex-col flex-1 relative">
      <Section className="page-dark flex flex-col justify-between items-center">
      {/* Decorative border */}
      <div className="absolute inset-4 border-2 border-amber-200/30 rounded-lg">
        <div className="absolute -top-2 left-8 w-8 h-4 bg-black"></div>
        <div className="absolute -top-2 right-8 w-8 h-4 bg-black"></div>
        <div className="absolute -bottom-2 left-8 w-8 h-4 bg-black"></div>
        <div className="absolute -bottom-2 right-8 w-8 h-4 bg-black"></div>

        {/* Corner decorations */}
        <div className="absolute -top-1 -left-1 w-6 h-6 border-l-2 border-t-2 border-amber-200/30"></div>
        <div className="absolute -top-1 -right-1 w-6 h-6 border-r-2 border-t-2 border-amber-200/30"></div>
        <div className="absolute -bottom-1 -left-1 w-6 h-6 border-l-2 border-b-2 border-amber-200/30"></div>
        <div className="absolute -bottom-1 -right-1 w-6 h-6 border-r-2 border-b-2 border-amber-200/30"></div>

        {/* Radiating lines */}
        <div className="absolute top-4 left-4">
          <div className="w-8 h-0.5 bg-amber-200/30 rotate-45 origin-left"></div>
          <div className="w-6 h-0.5 bg-amber-200/30 rotate-12 origin-left mt-1"></div>
          <div className="w-4 h-0.5 bg-amber-200/30 -rotate-12 origin-left mt-1"></div>
        </div>
        <div className="absolute top-4 right-4">
          <div className="w-8 h-0.5 bg-amber-200/30 -rotate-45 origin-right"></div>
          <div className="w-6 h-0.5 bg-amber-200/30 -rotate-12 origin-right mt-1"></div>
          <div className="w-4 h-0.5 bg-amber-200/30 rotate-12 origin-right mt-1"></div>
        </div>
        <div className="absolute bottom-4 left-4">
          <div className="w-8 h-0.5 bg-amber-200/30 -rotate-45 origin-left"></div>
          <div className="w-6 h-0.5 bg-amber-200/30 -rotate-12 origin-left mb-1"></div>
          <div className="w-4 h-0.5 bg-amber-200/30 rotate-12 origin-left mb-1"></div>
        </div>
        <div className="absolute bottom-4 right-4">
          <div className="w-8 h-0.5 bg-amber-200/30 rotate-45 origin-right"></div>
          <div className="w-6 h-0.5 bg-amber-200/30 rotate-12 origin-right mb-1"></div>
          <div className="w-4 h-0.5 bg-amber-200/30 -rotate-12 origin-right mb-1"></div>
        </div>
      </div>

      <div className="text-center max-w-4xl z-10">
        <div className="text-sm font-light tracking-[0.15em] font-serif text-amber-200/80 mb-8">THE THREE-CARD SPREAD</div>

        <h1 className="text-7xl md:text-8xl font-light tracking-[0.15em] font-serif mb-8 text-amber-100">
          POPULAR
          <br />
          TAROT SPREADS
        </h1>

        <p className="text-lg leading-relaxed mb-10 text-amber-100/90 max-w-2xl mx-auto">
          Represents past influences and experiences related to the question or situation, the current situation,
          potential outcomes and future developments.
        </p>

        {/* Three card layout */}
        <div className="flex justify-between items-center gap-8 mb-10">
          <div className="w-32 h-48 border-2 border-amber-200/40 rounded-lg flex items-center justify-center">
            <span className="text-xl font-light text-amber-200">1</span>
          </div>
          <div className="w-32 h-48 border-2 border-amber-200/40 rounded-lg flex items-center justify-center">
            <span className="text-xl font-light text-amber-200">2</span>
          </div>
          <div className="w-32 h-48 border-2 border-amber-200/40 rounded-lg flex items-center justify-center">
            <span className="text-xl font-light text-amber-200">3</span>
          </div>
        </div>

        <div className="flex justify-between gap-8 text-lg">
          <div className="text-amber-200">Past</div>
          <div className="text-amber-200">Present</div>
          <div className="text-amber-200">Future</div>
        </div>

        {/* Mystical hands illustration */}
        <div className="mt-8 flex justify-between">
          <svg width="120" height="80" viewBox="0 0 120 80" className="text-amber-200/60">
            <path d="M20 40 Q40 20 60 40 Q80 20 100 40" stroke="currentColor" strokeWidth="2" fill="none" />
            <circle cx="30" cy="35" r="3" fill="currentColor" />
            <circle cx="60" cy="25" r="4" fill="currentColor" />
            <circle cx="90" cy="35" r="3" fill="currentColor" />
            <path d="M25 45 Q35 55 45 45" stroke="currentColor" strokeWidth="1.5" fill="none" />
            <path d="M75 45 Q85 55 95 45" stroke="currentColor" strokeWidth="1.5" fill="none" />
          </svg>
        </div>
      </div>
      </Section>
    </div>
  )
}
