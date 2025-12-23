import React from "react"
import { Section } from "./base/Section"

export function NumerologyMandala({ pageNumber }: { pageNumber: number }) {
  return (
    <div className="h-full bg-black flex flex-col flex-1 relative">
      <Section className="page-dark relative overflow-hidden">
      {/* Cosmic background */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-08-28%20at%2011.49.53-bvXSyhqbJLBEnpIusUGdT8kZNzQelc.png')`,
        }}
      />

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Sacred geometry mandala overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <svg width="600" height="600" viewBox="0 0 600 600" className="text-amber-200/60">
          {/* Outer circles */}
          <circle cx="300" cy="300" r="280" stroke="currentColor" strokeWidth="2" fill="none" strokeDasharray="5,5" />
          <circle cx="300" cy="300" r="250" stroke="currentColor" strokeWidth="1" fill="none" />

          {/* Inner geometric patterns */}
          <polygon points="300,50 520,200 520,400 300,550 80,400 80,200"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
          <polygon points="300,100 450,175 450,425 300,500 150,425 150,175"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
          />

          {/* Star patterns */}
          <polygon points="300,150 350,250 300,200 250,250" stroke="currentColor" strokeWidth="1" fill="none" />
          <polygon points="300,450 350,350 300,400 250,350" stroke="currentColor" strokeWidth="1" fill="none" />

          {/* Center circle */}
          <circle cx="300" cy="300" r="80" stroke="currentColor" strokeWidth="2" fill="none" />
          <circle cx="300" cy="300" r="40" stroke="currentColor" strokeWidth="1" fill="none" />

          {/* Numbers positioned around the mandala */}
          <text x="300" y="80" textAnchor="middle" className="fill-amber-200 text-xl font-light">
            5
          </text>
          <text x="480" y="200" textAnchor="middle" className="fill-amber-200 text-xl font-light">
            3
          </text>
          <text x="520" y="310" textAnchor="middle" className="fill-amber-200 text-xl font-light">
            5
          </text>
          <text x="480" y="420" textAnchor="middle" className="fill-amber-200 text-xl font-light">
            3
          </text>
          <text x="300" y="540" textAnchor="middle" className="fill-amber-200 text-xl font-light">
            8
          </text>
          <text x="120" y="420" textAnchor="middle" className="fill-amber-200 text-xl font-light">
            1
          </text>
          <text x="80" y="310" textAnchor="middle" className="fill-amber-200 text-xl font-light">
            2
          </text>
          <text x="120" y="200" textAnchor="middle" className="fill-amber-200 text-xl font-light">
            1
          </text>

          {/* Inner ring numbers */}
          <text x="300" y="180" textAnchor="middle" className="fill-amber-200 text-xl font-light">
            3
          </text>
          <text x="380" y="250" textAnchor="middle" className="fill-amber-200 text-xl font-light">
            4
          </text>
          <text x="380" y="360" textAnchor="middle" className="fill-amber-200 text-xl font-light">
            7
          </text>
          <text x="300" y="430" textAnchor="middle" className="fill-amber-200 text-xl font-light">
            6
          </text>
          <text x="220" y="360" textAnchor="middle" className="fill-amber-200 text-xl font-light">
            9
          </text>
          <text x="220" y="250" textAnchor="middle" className="fill-amber-200 text-xl font-light">
            2
          </text>
        </svg>
      </div>
      </Section>
    </div>
  )
}
