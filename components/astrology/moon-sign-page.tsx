import React from "react"

interface MoonSignPageProps {
  pageNumber: number
}

export function MoonSignPage({ pageNumber }: MoonSignPageProps) {
  return (
    <div className="h-full bg-black text-white flex flex-col flex-1 relative">
      {/* Title */}
      <div className="text-center mt-16 mb-12">
        <h1 className="text-7xl md:text-8xl font-light tracking-[0.15em] font-serif text-amber-300 mb-8">MOON SIGN</h1>
      </div>

      {/* Moon image with border */}
      <div className="flex justify-center mb-12">
        <div className="relative">
          <div className="w-80 h-80 border-2 border-amber-300">
            <img 
              src="/images/moon-mystical.jpg" 
              alt="Moon" 
              className="w-full h-full object-cover filter grayscale"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='400' height='400' viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='moon-pattern' patternUnits='userSpaceOnUse' width='40' height='40'%3E%3Ccircle cx='20' cy='20' r='15' fill='%23888' /%3E%3Ccircle cx='15' cy='15' r='3' fill='%23666' /%3E%3Ccircle cx='25' cy='25' r='2' fill='%23666' /%3E%3C/pattern%3E%3C/defs%3E%3Ccircle cx='200' cy='200' r='180' fill='%23999' /%3E%3Ccircle cx='200' cy='200' r='170' fill='url(%23moon-pattern)' /%3E%3C/svg%3E")`,
                backgroundSize: 'cover'
              }}
            />
          </div>
        </div>
      </div>

      {/* Description text */}
      <div className="max-w-4xl mx-auto px-8 text-center">
        <p className="text-white text-lg leading-relaxed">
          The Moon governs your emotional landscape, instincts, and subconscious, reflecting moods, feelings, and nurturing tendencies.
        </p>
      </div>

      {/* Page number */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="text-amber-300 text-lg font-light">{pageNumber}</div>
      </div>
    </div>
  )
}