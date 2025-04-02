import type React from "react"
import { memo } from "react"
import { COLOR_SCHEMES, type ColorSchemeKey } from "@/utils/constants"
import NatalChart from "./NatalChart"

interface BookCoverProps {
  name: string
  birthDate: string
  birthPlace: string
  colorScheme: ColorSchemeKey | string
}

const BookCover: React.FC<BookCoverProps> = ({ name, birthDate, birthPlace, colorScheme }) => {
  // Get the color scheme, defaulting to 'default' if not found
  const scheme = COLOR_SCHEMES[colorScheme as ColorSchemeKey] || COLOR_SCHEMES.default

  return (
    <div
      className="w-full h-full relative overflow-hidden rounded-lg shadow-lg"
      style={{ backgroundColor: scheme.bgColor }}
    >
      {/* Book Title */}
      <div className="absolute top-0 left-0 w-full p-6 z-20">
        <h1 className="text-2xl md:text-3xl font-bold text-center" style={{ color: scheme.textColor }}>
          {name.toUpperCase()}
        </h1>
      </div>

      {/* Chart Container */}
      <div
        className="absolute inset-0 z-10 flex items-center justify-center"
        style={{
          height: "60%",
          top: "20%",
        }}
      >
        <div className="w-4/5 h-4/5">
          <NatalChart colorScheme={colorScheme} />
        </div>
      </div>

      {/* Birth Details */}
      <div className="absolute bottom-0 left-0 w-full p-6 text-center z-20">
        <p className="text-sm md:text-base font-medium" style={{ color: scheme.textColor }}>
          {birthDate}
        </p>
        <p className="text-sm md:text-base font-medium" style={{ color: scheme.textColor }}>
          {birthPlace}
        </p>
      </div>
    </div>
  )
}

// Use memo to prevent unnecessary re-renders
export default memo(BookCover)

