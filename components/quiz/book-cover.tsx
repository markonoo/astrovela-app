interface BookCoverProps {
  name: string
  birthDate: string
  birthPlace: string
  className?: string
}

export function BookCover({ name, birthDate, birthPlace, className = "" }: BookCoverProps) {
  return (
    <div
      className={`w-64 h-80 bg-[#2d2d3f] rounded-lg flex flex-col items-center justify-between p-4 relative ${className}`}
    >
      <div className="text-center z-10 mt-4">
        <p className="text-sm uppercase tracking-wider text-white">{name}</p>
      </div>
      <div className="flex-1 flex items-center justify-center z-10">
        <div className="w-40 h-40 border border-[#4d4d60] rounded-full flex items-center justify-center">
          <div className="w-36 h-36 border border-[#4d4d60] rounded-full flex items-center justify-center">
            <div className="w-28 h-28 border border-[#4d4d60] rounded-full"></div>
          </div>
        </div>
      </div>
      <div className="text-center z-10 mb-4">
        <p className="text-[10px] uppercase tracking-wider text-white">{birthDate}</p>
        <p className="text-[10px] uppercase tracking-wider text-white">{birthPlace}</p>
      </div>
    </div>
  )
}

