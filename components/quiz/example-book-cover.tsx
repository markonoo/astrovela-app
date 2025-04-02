"use client"

import { NatalChart } from "./natal-chart"

interface ExampleBookCoverProps {
  colorScheme?: "purple" | "blue" | "green" | "orange" | "red"
}

export function ExampleBookCover({ colorScheme = "purple" }: ExampleBookCoverProps) {
  // Get color scheme details based on selection
  const getColorScheme = () => {
    const colorSchemes = {
      purple: {
        bgColor: "#2d2a4a",
        textColor: "#ffffff",
        accentColor: "#9d8cff",
      },
      blue: {
        bgColor: "#1a2a42",
        textColor: "#ffffff",
        accentColor: "#64b5f6",
      },
      green: {
        bgColor: "#1a3a2a",
        textColor: "#ffffff",
        accentColor: "#66bb6a",
      },
      orange: {
        bgColor: "#3a2a1a",
        textColor: "#ffffff",
        accentColor: "#ffa726",
      },
      red: {
        bgColor: "#3a1a1a",
        textColor: "#ffffff",
        accentColor: "#ef5350",
      },
    }

    return colorSchemes[colorScheme] || colorSchemes.purple
  }

  const colors = getColorScheme()

  return (
    <div className="flex flex-col items-center">
      <h3 className="text-sm font-medium text-gray-500 mb-2">Professional Example</h3>
      <div
        className="w-64 h-96 rounded-lg shadow-lg overflow-hidden flex flex-col relative"
        style={{ backgroundColor: colors.bgColor }}
      >
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-24 h-24 opacity-10">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="50" fill="white" />
          </svg>
        </div>

        <div className="absolute bottom-0 left-0 w-32 h-32 opacity-10">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="0" cy="100" r="50" fill="white" />
          </svg>
        </div>

        {/* Cover content */}
        <div className="flex-1 flex flex-col items-center justify-between p-6 text-center relative z-10">
          {/* Title */}
          <div className="w-full pt-4">
            <h2 className="text-xl font-bold tracking-wider uppercase" style={{ color: colors.textColor }}>
              EMMA JOHNSON
            </h2>
            <div className="w-16 h-1 mx-auto mt-2" style={{ backgroundColor: colors.accentColor }}></div>
          </div>

          {/* Natal Chart */}
          <div className="w-48 h-48 my-4">
            <NatalChart color={colors.textColor} detailed={true} highResolution={true} />
          </div>

          {/* Birth details */}
          <div className="w-full">
            <p className="text-xs tracking-wider uppercase" style={{ color: colors.textColor }}>
              June 15, 1988
            </p>
            <p className="text-xs tracking-wider uppercase mt-1" style={{ color: colors.textColor }}>
              New York, United States
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

