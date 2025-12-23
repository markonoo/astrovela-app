import React from "react"

export function PlutoPlanetPageReplica({ pageNumber }: { pageNumber: number }) {
  return (
    <div className="h-full bg-black flex flex-col text-amber-200">
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center w-full px-12">
          {/* Title */}
          <h1 className="text-7xl md:text-8xl font-light tracking-[0.15em] mb-20 font-serif">
            PLUTO
          </h1>

          {/* Pluto image - increased by 10%, centered */}
          <div className="mx-auto mb-16 relative flex items-center justify-center" style={{ width: '589px', height: '589px' }}>
            {/* Image - 10% larger, centered */}
            <img src="/pluto-cover.png" alt="Pluto" className="relative z-10 object-contain" style={{ width: '706px', height: '706px' }} />
          </div>

          {/* Description - centered properly */}
          <div className="w-full flex justify-center">
            <p className="text-base leading-relaxed font-medium tracking-[0.15em] font-serif text-center">
              Pluto represents transformation, power, and regenera-<br />
              tion, influences how you experience deep change, han-<br />
              dle power dynamics, and confront the subconscious or<br />
              hidden aspects of life.
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
