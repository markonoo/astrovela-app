import Image from "next/image"
import CurvedText from "./CurvedText"
import { Progress } from "./ui/progress"
import React from "react"

interface BookCoverPreviewProps {
  userInfo: {
    firstName: string
    lastName: string
    placeOfBirth: string
    dateOfBirth: string
  }
  themeColor: {
    bg: string
    text: string
    border: string
    className: string
  }
  selectedIcon: string
  customChartUrl?: string | null
  isLoading?: boolean
  sunSign?: string
  moonSign?: string
}

// Mapping from sign name to SVG path
const zodiacSVGs: Record<string, string> = {
  Aries: "/images/zodiac/aries.svg",
  Taurus: "/images/zodiac/taurus.svg",
  Gemini: "/images/zodiac/gemini.svg",
  Cancer: "/images/zodiac/cancer.svg",
  Leo: "/images/zodiac/leo.svg",
  Virgo: "/images/zodiac/virgo.svg",
  Libra: "/images/zodiac/libra.svg",
  Scorpio: "/images/zodiac/scorpio.svg",
  Sagittarius: "/images/zodiac/sagittarius.svg",
  Capricorn: "/images/zodiac/capricorn.svg",
  Aquarius: "/images/zodiac/aquarius.svg",
  Pisces: "/images/zodiac/pisces.svg",
};

export function BookCoverPreview({ userInfo, themeColor, selectedIcon, customChartUrl, isLoading, sunSign, moonSign }: BookCoverPreviewProps) {
  const { firstName, lastName, placeOfBirth, dateOfBirth } = userInfo
  const hasLastName = lastName && lastName.trim() !== ""

  // Format date if provided
  const formattedDate = dateOfBirth
    ? new Date(dateOfBirth).toLocaleDateString("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : "Date of Birth"
    
  // Determine text color based on background
  const textColorValue = themeColor.bg === "bg-amber-50" ? "#000000" : "#ffffff"

  const [progress, setProgress] = React.useState(0)
  React.useEffect(() => {
    let start: number | null = null
    let frame: number
    function animate(ts: number) {
      if (!start) start = ts
      const elapsed = ts - start
      const percent = Math.min((elapsed / 4000) * 100, 100)
      setProgress(percent)
      if (percent < 100) {
        frame = requestAnimationFrame(animate)
      }
    }
    if (isLoading && selectedIcon === "custom-natal-chart") {
      setProgress(0)
      frame = requestAnimationFrame(animate)
      return () => cancelAnimationFrame(frame)
    } else if (!isLoading) {
      setProgress(0)
    }
  }, [isLoading, selectedIcon])

  return (
    <div className="relative w-[350px] max-w-[350px] h-[450px]">
      {/* Clean book cover container without 3D effects */}
      <div className="relative shadow-lg w-full h-full">
        <div
          className={`${themeColor.bg} ${themeColor.text} aspect-[2/3] w-full h-full p-8 flex flex-col items-center relative overflow-visible font-montserrat`}
        >
          {/* Design layer SVG overlay */}
          <div className="absolute inset-0 w-full h-full pointer-events-none z-[1]">
            <Image
              src={themeColor.bg === "bg-amber-50" ? "/images/design-layer.svg" : "/images/design-layer-light.svg"}
              alt="Design Layer"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Content container - ensure it's above the design layer */}
          <div className="relative z-[2] w-full h-full flex flex-col items-center">
            {/* Top section with name - dynamic sizing based on whether lastName exists */}
            <div className="text-center mt-2 mb-2 h-[60px] flex flex-col justify-center">
              {hasLastName ? (
                <>
                  <h1 className="text-2xl font-bold tracking-wider mb-1">
                    {firstName ? firstName.toUpperCase() : "YOUR NAME"}
                  </h1>
                  <h2 className="text-2xl font-bold tracking-wider">{lastName.toUpperCase()}</h2>
                </>
              ) : (
                <h1 className="text-3xl font-bold tracking-wider">{firstName ? firstName.toUpperCase() : "YOUR NAME"}</h1>
              )}
            </div>

            {/* Chart container */}
            <div className="relative w-full h-[300px] flex justify-center">
              {/* Chart Image based on selection */}
              <div className="relative w-[280px] h-[280px] flex items-center justify-center">
                {selectedIcon === "custom-natal-chart" ? (
                  isLoading ? (
                    <div className="flex flex-col items-center justify-center w-full h-full">
                      <div className="w-52 h-52 relative flex items-center justify-center">
                        <svg className="w-full h-full" viewBox="0 0 100 100">
                          <circle
                            className="text-gray-300 opacity-30"
                            cx="50"
                            cy="50"
                            r="45"
                            stroke="currentColor"
                            strokeWidth="8"
                            fill="none"
                          />
                          <circle
                            className="text-yellow-400"
                            cx="50"
                            cy="50"
                            r="45"
                            stroke="currentColor"
                            strokeWidth="8"
                            fill="none"
                            strokeLinecap="round"
                            strokeDasharray="283"
                            strokeDashoffset={283 - (progress / 100) * 283}
                            transform="rotate(-90 50 50)"
                          />
                          <text
                            x="50"
                            y="54"
                            textAnchor="middle"
                            dominantBaseline="middle"
                            fill="#f7c800"
                            fontSize="20"
                            fontWeight="bold"
                          >
                            {Math.round(progress)}%
                          </text>
                        </svg>
                      </div>
                      <span className="text-xs text-gray-400 mt-2">Generating chart...</span>
                    </div>
                  ) : customChartUrl ? (
                    <img
                      src={customChartUrl}
                      alt="Custom Natal Chart"
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gray-100 rounded-full border border-dashed border-gray-300 opacity-60">
                      <span className="text-gray-400">No Chart</span>
                    </div>
                  )
                ) : (
                  <Image
                    src={selectedIcon === "natal-chart" ? "/images/natal-chart.png" : "/images/zodiac-chart-icon.png"}
                    alt={selectedIcon === "natal-chart" ? "Natal Chart" : "Zodiac Chart"}
                    fill
                    className="object-contain"
                    priority
                  />
                )}
              </div>
              
              {/* Text positioned to curve around the bottom of the chart - shown for both chart types */}
              <div 
                className="absolute w-[330px]"
                style={{ 
                  bottom: "49px"
                }}
              >
                <CurvedText
                  text={`${formattedDate} · ${placeOfBirth || "Place of Birth"}`}
                  fontSize={13}
                  color={textColorValue}
                  width={330}
                  height={50}
                  fontFamily="Montserrat, Arial, sans-serif"
                  fontWeight={400}
                  radius={150} // Not used in new implementation but kept for API compatibility
                />
            </div>
            </div>
          </div>

          {/* Sun sign SVG at bottom left */}
          {sunSign && zodiacSVGs[sunSign] && (
            <div className="absolute left-[4%] bottom-2 flex flex-col items-center z-[3]" style={{ height: 58, width: 48, position: 'absolute' }}>
              <div style={{ position: 'relative', width: 38, height: 38 }}>
                <img
                  src={zodiacSVGs[sunSign]}
                  alt={`${sunSign} symbol`}
                  className="w-[38px] h-[38px]"
                  style={{ filter: themeColor.bg === "bg-amber-50" ? "none" : "invert(1)", position: 'absolute', top: 11, left: 0 }}
                />
              </div>
              <span className="text-[7.5px] mt-[5px] mb-0 font-normal whitespace-nowrap" style={{ color: textColorValue, fontFamily: 'Montserrat, Arial, sans-serif', fontWeight: 400 }}>
                SUN SIGN
              </span>
            </div>
          )}
          {/* Moon sign SVG at bottom right */}
          {moonSign && zodiacSVGs[moonSign] && (
            <div className="absolute bottom-2 flex flex-col items-center z-[3]" style={{ height: 58, width: 48, position: 'absolute', right: 'calc(4% + 2px)' }}>
              <div style={{ position: 'relative', width: 38, height: 38 }}>
                <img
                  src={zodiacSVGs[moonSign]}
                  alt={`${moonSign} symbol`}
                  className="w-[38px] h-[38px]"
                  style={{ filter: themeColor.bg === "bg-amber-50" ? "none" : "invert(1)", position: 'absolute', top: 11, left: 0 }}
                />
              </div>
              <span className="text-[7.5px] mt-[5px] mb-0 font-normal whitespace-nowrap" style={{ color: textColorValue, fontFamily: 'Montserrat, Arial, sans-serif', fontWeight: 400 }}>
                MOON SIGN
              </span>
            </div>
          )}
        </div>

        {/* Clean, subtle shadow for depth without 3D effects */}
        <div className="absolute inset-0 shadow-[0_2px_10px_rgba(0,0,0,0.2)] pointer-events-none"></div>
      </div>
    </div>
  )
}
