import React from "react"

interface RisingSignPageProps {
  pageNumber: number
}

export function RisingSignPage({ pageNumber }: RisingSignPageProps) {
  return (
    <div className="h-full bg-black text-white flex flex-col flex-1 relative">
      {/* Title */}
      <div className="text-center mt-16 mb-12">
        <h1 className="text-7xl md:text-8xl font-light tracking-[0.15em] font-serif text-amber-300 mb-8">RISING SIGN</h1>
      </div>

      {/* Eclipse/Rising image with border */}
      <div className="flex justify-center mb-12">
        <div className="relative">
          <div className="w-80 h-80 border-2 border-amber-300 bg-black flex items-center justify-center">
            {/* Eclipse effect */}
            <div className="relative">
              <div className="w-60 h-60 bg-gradient-radial from-transparent via-transparent to-black rounded-full relative">
                <div className="absolute inset-4 bg-gradient-radial from-amber-200 via-amber-400 to-transparent rounded-full opacity-80"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-black rounded-full"></div>
                <div className="absolute top-1/2 left-3/4 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-radial from-amber-200 to-transparent rounded-full opacity-60"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Description text */}
      <div className="max-w-4xl mx-auto px-8 text-center">
        <p className="text-white text-lg leading-relaxed">
          The rising sign represents your social personality, outward demeanor, and the initial impression you make on others.
        </p>
      </div>

      {/* Page number */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="text-amber-300 text-lg font-light">{pageNumber}</div>
      </div>
    </div>
  )
}
