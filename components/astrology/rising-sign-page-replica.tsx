import React from "react"

export function RisingSignPageReplica({ pageNumber }: { pageNumber: number }) {
  return (
    <div className="h-full bg-black flex flex-col text-amber-200">
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center w-full px-12">
          {/* Title */}
          <h1 className="text-7xl md:text-8xl font-light tracking-[0.15em] mb-20 font-serif">
            RISING SIGN
          </h1>

          {/* Eclipse/Rising image in frame - increased by 10%, centered */}
          <div className="mx-auto mb-16 relative flex items-center justify-center" style={{ width: '552px', height: '552px' }}>
            {/* Background container box - visible border */}
            <div className="absolute inset-0 border-[2px] border-amber-300/70 pointer-events-none z-0"></div>
            {/* Image - 10% larger, centered */}
            <img src="/rising-sign-cover.png" alt="Rising Sign" className="relative z-10 object-contain" style={{ width: '660px', height: '660px' }} />
          </div>

          {/* Description - centered properly */}
          <div className="w-full flex justify-center">
            <p className="text-base leading-relaxed font-medium tracking-[0.15em] font-serif text-center">
              The rising sign represents your social<br />
              personality, outward demeanor, and the<br />
              initial impression you make on others.
            </p>
          </div>
        </div>
      </div>

      {/* Page number */}
      <div className="text-center text-amber-200/80 text-base font-light pb-10 tracking-widest">
        {pageNumber}
      </div>
    </div>
  )
}
