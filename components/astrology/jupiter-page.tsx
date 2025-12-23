import React from "react"

interface JupiterPageProps {
  pageNumber: number
}

export function JupiterPage({ pageNumber }: JupiterPageProps) {
  return (
    <div className="h-full bg-black text-white flex flex-col flex-1 relative">
      {/* Title */}
      <div className="text-center mt-16 mb-12">
        <h1 className="text-7xl md:text-8xl font-light tracking-[0.15em] font-serif text-amber-300 mb-8">JUPITER</h1>
      </div>

      {/* Jupiter image with border */}
      <div className="flex justify-center mb-12">
        <div className="relative">
          <div className="w-80 h-80 border-2 border-amber-300">
            <img 
              src="/jupiter-planet-new.png" 
              alt="Jupiter" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Description text */}
      <div className="max-w-4xl mx-auto px-8 text-center">
        <p className="text-white text-lg leading-relaxed">
          Jupiter symbolizes growth, expansion, and optimism, influencing how you seek knowledge, experience success, and explore philosophical or spiritual beliefs.
        </p>
      </div>

      {/* Page number */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="text-amber-300 text-lg font-light">{pageNumber}</div>
      </div>
    </div>
  )
}
