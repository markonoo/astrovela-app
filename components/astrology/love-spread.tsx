import React from "react"
import { Section } from "./base/Section"

export function LoveSpread({ pageNumber }: { pageNumber: number }) {
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
        <div className="text-sm font-light tracking-[0.15em] font-serif text-amber-200/80 mb-8">THE LOVE SPREAD</div>

        <p className="text-lg leading-relaxed mb-10 text-amber-100/90 max-w-2xl mx-auto">
          Focuses on the querent's love life, relationships, and emotional connections.
        </p>

        {/* Love spread layout */}
        <div className="flex flex-col flex-1 items-center gap-8">
          {/* Top card */}
          <div className="w-32 h-48 border-2 border-amber-200/40 rounded-lg flex items-center justify-center">
            <span className="text-xl font-light text-amber-200">5</span>
          </div>

          {/* Middle row */}
          <div className="flex justify-between items-center gap-8">
            <div className="w-32 h-48 border-2 border-amber-200/40 rounded-lg flex items-center justify-center">
              <span className="text-xl font-light text-amber-200">1</span>
            </div>
            <div className="w-40 h-24 border-2 border-amber-200/40 rounded-lg flex items-center justify-center">
              <span className="text-xl font-light text-amber-200">3</span>
            </div>
            <div className="w-32 h-48 border-2 border-amber-200/40 rounded-lg flex items-center justify-center">
              <span className="text-xl font-light text-amber-200">2</span>
            </div>
          </div>

          {/* Bottom card */}
          <div className="w-32 h-48 border-2 border-amber-200/40 rounded-lg flex items-center justify-center">
            <span className="text-xl font-light text-amber-200">4</span>
          </div>
        </div>

        {/* Card meanings */}
        <div className="mt-8 text-right text-amber-100/90 leading-relaxed">
          <div className="space-y-1 flex-1 text-sm">
            <div>
              <span className="text-amber-200 font-medium">1.</span> You
            </div>
            <div>
              <span className="text-amber-200 font-medium">2.</span> The Other Person
            </div>
            <div>
              <span className="text-amber-200 font-medium">3.</span> The Relationship
            </div>
            <div>
              <span className="text-amber-200 font-medium">4.</span> The Past
            </div>
            <div>
              <span className="text-amber-200 font-medium">5.</span> The Future
            </div>
          </div>
        </div>
      </div>
      </Section>
    </div>
  )
}
