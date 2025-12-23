import React from "react"
import { Section } from "./base/Section"
import { PageTitle } from "./base/PageTitle"

export function NordastroPage() {
  return (
    <div className="h-full canva-toc-page">
      <div className="h-full flex items-center justify-center">
        <div className="text-center">
          <img 
            src="/nordastro-logo.png" 
            alt="AstroVela Logo" 
            className="mx-auto w-35 h-35 object-contain"
          />
        </div>
      </div>
    </div>
  )
}

