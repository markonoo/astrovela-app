import React from "react"
import { Section } from "./base/Section"

interface ImagePlaceholderProps {
  pageNumber: number
}

export function ImagePlaceholder({ pageNumber }: ImagePlaceholderProps) {
  return (
    <div className="h-full bg-gradient-to-br from-slate-50 to-slate-100 flex flex-col flex-1 relative">
      <Section className="page-light relative">
        <div className="text-center">
          <h1 className="text-xl font-light mb-8 tracking-wide">
            Image Placeholder
          </h1>
          <p className="text-sm leading-relaxed mb-8">
            Component content for ImagePlaceholder.
          </p>
        </div>
      </Section>
    </div>
  )
}