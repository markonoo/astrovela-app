import React from "react"
import { Section } from "./base/Section"

interface PlanetPageProps {
  title: string
  image?: string
  description: string
  pageNumber?: number
}

export function PlanetPage({ title, image, description, pageNumber }: PlanetPageProps) {
  return (
    <div className="h-full bg-black text-white flex flex-col flex-1 relative">
      <Section className="page-dark relative overflow-hidden">
        <div className="flex flex-col items-center justify-center h-full">
          {/* Background Image */}
          {image && (
            <div className="absolute inset-0 bg-cover bg-center opacity-60"
              style={{
                backgroundImage: `url('${image}')`,
              }}
            />
          )}
          
          <div className="relative z-10 max-w-4xl text-center">
            <h1 className="text-5xl md:text-6xl font-light tracking-[0.15em] font-serif mb-10 text-[#D4AF37]">
              {title}
            </h1>

            <div className="flex items-start mb-8">
              <div className="text-6xl md:text-8xl font-serif text-[#D4AF37] mr-6 leading-none">
                {title.charAt(0)}
              </div>
              <p className="canva-text-content text-left flex-1 pt-4 text-amber-100 leading-relaxed">
                {description}
              </p>
            </div>

            {/* Decorative Elements */}
            <div className="flex justify-center items-center mt-8 space-x-4">
              <div className="w-16 h-0.5 bg-[#D4AF37]"></div>
              <div className="w-2 h-2 bg-[#D4AF37] rounded-full"></div>
              <div className="w-16 h-0.5 bg-[#D4AF37]"></div>
            </div>
          </div>
        </div>

        {/* Page Number */}
        {pageNumber && (
          <div className="absolute bottom-4 right-6 text-xs tracking-[0.15em] font-serif text-amber-200/70">
            {pageNumber}
          </div>
        )}
      </Section>
    </div>
  )
}