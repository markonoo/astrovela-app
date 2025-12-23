import React from "react"

interface NeptunePageProps {
  pageNumber: number
}

export function NeptunePage({ pageNumber }: NeptunePageProps) {
  return (
    <div className="h-full bg-black text-white flex flex-col flex-1 relative">
      {/* Title */}
      <div className="text-center mt-16 mb-12">
        <h1 className="text-7xl md:text-8xl font-light tracking-[0.15em] font-serif text-amber-300 mb-8">NEPTUNE</h1>
      </div>

      {/* Neptune image with border */}
      <div className="flex justify-center mb-12">
        <div className="relative">
          <div className="w-80 h-80 border-2 border-amber-300">
            <img 
              src="/neptune-planet-final.png" 
              alt="Neptune" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Description text */}
      <div className="max-w-4xl mx-auto px-8 text-center">
        <p className="text-white text-lg leading-relaxed">
          Neptune governs dreams, illusions, and spirituality, influences how you connect with your inner intuition, experience transcendence, and encounter the mystical or elusive aspects of life.
        </p>
      </div>

      {/* Page number */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="text-amber-300 text-lg font-light">{pageNumber}</div>
      </div>
    </div>
  )
}
