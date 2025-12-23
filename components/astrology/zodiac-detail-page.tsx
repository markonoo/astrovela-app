import React from "react"
import { Section } from "./base/Section"

interface ZodiacDetailPageProps {
  title: string
  symbol: string
  content: string[]
  pageNumber: number
}

export function ZodiacDetailPage({ title, symbol, content, pageNumber }: ZodiacDetailPageProps) {
  return (
    <div className="h-full bg-gradient-to-br from-purple-900 to-indigo-900 text-white flex flex-col flex-1 relative">
      <Section className="page-dark relative">
        <div className="text-center mb-8">
          <div className="text-6xl md:text-8xl text-amber-300 mb-4">
            {symbol}
          </div>
          <h1 className="text-3xl md:text-4xl font-light mb-6 tracking-[0.15em] font-serif text-amber-100">
            {title}
          </h1>
        </div>

        <div className="space-y-6 text-amber-100">
          {content.map((paragraph, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 shadow-sm">
              <p className="text-sm leading-relaxed">
                {paragraph}
              </p>
            </div>
          ))}
        </div>

        {/* Decorative Elements */}
        <div className="flex justify-center items-center mt-8 space-x-4">
          <div className="w-16 h-0.5 bg-amber-300"></div>
          <div className="w-2 h-2 bg-amber-300 rounded-full"></div>
          <div className="w-16 h-0.5 bg-amber-300"></div>
        </div>
      </Section>
    </div>
  )
}