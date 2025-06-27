import Image from "next/image"
import CurvedText from "./CurvedText"
import { Progress } from "./ui/progress"
import React, { useEffect, useMemo, useState } from "react"

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
  sunSign?: string | null
  moonSign?: string | null
  formattedDate: string
}

export function BookCoverPreview({ userInfo, themeColor, selectedIcon, customChartUrl, isLoading, sunSign, moonSign, formattedDate }: BookCoverPreviewProps) {
  // Debug logging
  useEffect(() => {
    console.log("BookCoverPreview - Received props:", {
      sunSign,
      moonSign,
      selectedIcon,
      customChartUrl,
      isLoading,
      userInfo
    })
  }, [sunSign, moonSign, selectedIcon, customChartUrl, isLoading, userInfo?.firstName, userInfo?.lastName, userInfo?.placeOfBirth, userInfo?.dateOfBirth])

  // Dynamic text color based on background
  const textColorValue = useMemo(() => {
    if (themeColor.bg === "bg-amber-50" || themeColor.bg === "bg-gray-100") {
      return "#000"
    }
    return "#fff"
  }, [themeColor.bg])

  const [placeOfBirth, setPlaceOfBirth] = useState(userInfo.placeOfBirth || "")

  useEffect(() => {
    if (userInfo.placeOfBirth) {
      // Clean up place names that are too long
      let cleanedPlace = userInfo.placeOfBirth
      if (cleanedPlace.includes(",")) {
        const parts = cleanedPlace.split(",")
        cleanedPlace = parts.slice(0, 2).join(",").trim()
      }
      if (cleanedPlace.length > 30) {
        cleanedPlace = cleanedPlace.substring(0, 27) + "..."
      }
      setPlaceOfBirth(cleanedPlace)
    }
  }, [userInfo.placeOfBirth])

  const { firstName, lastName } = userInfo
  const hasLastName = lastName && lastName.trim() !== ""

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
              
              {/* Sun and Moon sign circles */}
              <div className="absolute left-0 bottom-0 w-14 aspect-square flex flex-col items-center z-10" style={{ transform: 'translate(-40%, 52%)' }}>
                <span className="text-xs font-normal mb-1" style={{ color: textColorValue }}>Sun</span>
                <div className="w-12 aspect-square rounded-full border flex items-center justify-center bg-transparent shadow" style={{ borderColor: textColorValue }}>
                  {selectedIcon === "custom-natal-chart" && isLoading ? (
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="14" fill="#bbb" /><text x="16" y="21" textAnchor="middle" fontSize="18" fontFamily="Arial" fill="#fff" dominantBaseline="middle" alignmentBaseline="middle">?</text></svg>
                  ) : sunSign ? (
                    <img
                      src={`/images/zodiac/${sunSign.toLowerCase()}.svg`}
                      alt={sunSign}
                      className="w-8 h-8"
                      style={{
                        filter: textColorValue === "#000" ? "brightness(0)" : "brightness(0) invert(1)"
                      }}
                    />
                  ) : (
                    <span className="text-lg" style={{ color: textColorValue }}>☉</span>
                  )}
                </div>
              </div>
              <div className="absolute right-0 bottom-0 w-14 aspect-square flex flex-col items-center z-10" style={{ transform: 'translate(40%, 52%)' }}>
                <span className="text-xs font-normal mb-1" style={{ color: textColorValue }}>Moon</span>
                <div className="w-12 aspect-square rounded-full border flex items-center justify-center bg-transparent shadow" style={{ borderColor: textColorValue }}>
                  {selectedIcon === "custom-natal-chart" && isLoading ? (
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="14" fill="#bbb" /><text x="16" y="21" textAnchor="middle" fontSize="18" fontFamily="Arial" fill="#fff" dominantBaseline="middle" alignmentBaseline="middle">?</text></svg>
                  ) : moonSign ? (
                    <img
                      src={`/images/zodiac/${moonSign.toLowerCase()}.svg`}
                      alt={moonSign}
                      className="w-8 h-8"
                      style={{
                        filter: textColorValue === "#000" ? "brightness(0)" : "brightness(0) invert(1)"
                      }}
                    />
                  ) : (
                    <span className="text-lg" style={{ color: textColorValue }}>☽</span>
                  )}
                </div>
              </div>
              
              {/* Text positioned to curve around the bottom of the chart - shown for both chart types */}
              <div 
                className="absolute w-[330px]"
                style={{ 
                  bottom: "45px"
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
        </div>

        {/* Clean, subtle shadow for depth without 3D effects */}
        <div className="absolute inset-0 shadow-[0_2px_10px_rgba(0,0,0,0.2)] pointer-events-none"></div>
      </div>
    </div>
  )
}
