import React from "react"
export function BrandPage() {
  return (
    <div className="h-full bg-cream flex flex-col flex-1">
      <div className="page-content w-full max-w-4xl mx-auto text-center">
        <div className="flex-1 flex items-center justify-center">
          <div className="space-y-8">
            <div>
              <svg className="w-16 h-16 text-sage mx-auto" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M32 8 L32 16" />
                <path d="M32 48 L32 56" />
                <path d="M8 32 L16 32" />
                <path d="M48 32 L56 32" />
                <path d="M13.5 13.5 L19.5 19.5" />
                <path d="M44.5 44.5 L50.5 50.5" />
                <path d="M13.5 50.5 L19.5 44.5" />
                <path d="M44.5 19.5 L50.5 13.5" />
                <circle cx="32" cy="32" r="4" fill="currentColor" />
              </svg>
            </div>
            <h1 className="heading-display text-4xl font-sans text-sage">astrovela</h1>
          </div>
        </div>
      </div>
    </div>
  )
}
