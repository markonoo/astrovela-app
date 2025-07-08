import Image from "next/image"
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

export function BookCoverPreview({ 
  userInfo, 
  themeColor, 
  selectedIcon, 
  customChartUrl, 
  isLoading, 
  sunSign, 
  moonSign, 
  formattedDate 
}: BookCoverPreviewProps) {
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

  // Calculate responsive sizes based on viewport
  const [dimensions, setDimensions] = useState({
    coverWidth: 350,
    coverHeight: 467, // 4:3 aspect ratio
    chartSize: 280,
    fontSize: {
      name: 24,
      curvedText: 11,
      sunMoon: 12
    }
  })

  useEffect(() => {
    const updateDimensions = () => {
      const vw = window.innerWidth
      let coverWidth = 350
      let chartSize = 280
      let nameFontSize = 24
      let curvedFontSize = 11
      let sunMoonFontSize = 12

      if (vw < 640) { // mobile
        coverWidth = Math.min(vw * 0.8, 300)
        chartSize = coverWidth * 0.65
        nameFontSize = coverWidth * 0.055
        curvedFontSize = coverWidth * 0.028
        sunMoonFontSize = coverWidth * 0.03
      } else if (vw < 768) { // tablet
        coverWidth = 320
        chartSize = 240
        nameFontSize = 22
        curvedFontSize = 10
        sunMoonFontSize = 11
      }

      setDimensions({
        coverWidth,
        coverHeight: coverWidth * 1.333, // maintain 3:4 aspect ratio
        chartSize,
        fontSize: {
          name: nameFontSize,
          curvedText: curvedFontSize,
          sunMoon: sunMoonFontSize
        }
      })
    }

    updateDimensions()
    window.addEventListener('resize', updateDimensions)
    return () => window.removeEventListener('resize', updateDimensions)
  }, [])

  // Prepare the curved text
  const curvedTextContent = useMemo(() => {
    const dateText = formattedDate || "Your Birth Date"
    const placeText = placeOfBirth || "Place of Birth"
    return `${dateText.toUpperCase()} · ${placeText.toUpperCase()}`
  }, [formattedDate, placeOfBirth])

  // Calculate dynamic arc path based on text length
  const arcPath = useMemo(() => {
    const textLength = curvedTextContent.length
    const baseRadius = dimensions.chartSize * 0.58
    // Increase radius for longer text to prevent cutoff
    const radius = baseRadius + (textLength > 40 ? 25 : textLength > 30 ? 15 : 5)
    const startAngle = -80 // degrees - wider angle for better visibility
    const endAngle = 80 // degrees
    
    // Convert to radians
    const startRad = (startAngle * Math.PI) / 180
    const endRad = (endAngle * Math.PI) / 180
    
    // Calculate path coordinates
    const centerX = dimensions.coverWidth / 2
    const centerY = dimensions.coverHeight * 0.48 + radius // Adjusted position
    
    const startX = centerX + radius * Math.sin(startRad)
    const startY = centerY - radius * Math.cos(startRad)
    const endX = centerX + radius * Math.sin(endRad)
    const endY = centerY - radius * Math.cos(endRad)
    
    // Create arc path
    return `M ${startX},${startY} A ${radius},${radius} 0 0,1 ${endX},${endY}`
  }, [curvedTextContent, dimensions])

  return (
    <div 
      className="relative w-full max-w-[350px] mx-auto" 
      style={{ 
        width: `${dimensions.coverWidth}px`,
        height: `${dimensions.coverHeight}px`
      }}
    >
      {/* Book cover container */}
      <div className="relative shadow-lg w-full h-full">
        <div
          className={`${themeColor.bg} ${themeColor.text} w-full h-full flex flex-col items-center relative overflow-hidden font-montserrat`}
          style={{ padding: `${dimensions.coverWidth * 0.05}px` }}
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

          {/* Content container */}
          <div className="relative z-[2] w-full h-full flex flex-col items-center justify-between">
            {/* Top section with name */}
            <div className="text-center" style={{ marginTop: `${dimensions.coverHeight * 0.06}px` }}>
              {hasLastName ? (
                <>
                  <h1 
                    className="font-bold tracking-wider"
                    style={{ 
                      fontSize: `${dimensions.fontSize.name}px`,
                      lineHeight: 1.2,
                      marginBottom: `${dimensions.fontSize.name * 0.3}px`
                    }}
                  >
                    {firstName ? firstName.toUpperCase() : "YOUR NAME"}
                  </h1>
                  <h2 
                    className="font-bold tracking-wider"
                    style={{ 
                      fontSize: `${dimensions.fontSize.name}px`,
                      lineHeight: 1.2
                    }}
                  >
                    {lastName.toUpperCase()}
                  </h2>
                </>
              ) : (
                <h1 
                  className="font-bold tracking-wider"
                  style={{ 
                    fontSize: `${dimensions.fontSize.name * 1.2}px`,
                    lineHeight: 1.2
                  }}
                >
                  {firstName ? firstName.toUpperCase() : "YOUR NAME"}
                </h1>
              )}
            </div>

            {/* Chart container - moved up */}
            <div 
              className="absolute flex items-center justify-center"
              style={{
                width: `${dimensions.chartSize}px`,
                height: `${dimensions.chartSize}px`,
                top: `${dimensions.coverHeight * 0.28}px`, // Positioned higher
                left: '50%',
                transform: 'translateX(-50%)'
              }}
            >
              {selectedIcon === "custom-natal-chart" ? (
                isLoading ? (
                  <div className="flex flex-col items-center justify-center w-full h-full">
                    <div className="relative flex items-center justify-center" style={{ width: '70%', height: '70%' }}>
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
                    <span 
                      className="text-gray-400 mt-2"
                      style={{ fontSize: `${dimensions.fontSize.sunMoon}px` }}
                    >
                      Generating chart...
                    </span>
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

            {/* Curved date/place text - positioned below chart */}
            <div 
              className="absolute pointer-events-none"
              style={{
                bottom: `${dimensions.coverHeight * 0.18}px`, // Moved up to be more visible
                left: 0,
                right: 0,
                height: `${dimensions.chartSize * 0.4}px`
              }}
            >
              <svg 
                width={dimensions.coverWidth}
                height={dimensions.chartSize * 0.4}
                viewBox={`0 0 ${dimensions.coverWidth} ${dimensions.chartSize * 0.4}`}
                style={{ 
                  overflow: "visible",
                  pointerEvents: "none"
                }}
              >
                <defs>
                  <path
                    id="book-cover-curve-path"
                    d={arcPath}
                    fill="none"
                  />
                </defs>
                <text
                  fill={textColorValue}
                  fontSize={dimensions.fontSize.curvedText}
                  fontFamily="Montserrat, Arial, sans-serif"
                  fontWeight={400}
                  letterSpacing="0.08em"
                  style={{ 
                    textTransform: "uppercase"
                  }}
                >
                  <textPath
                    href="#book-cover-curve-path"
                    startOffset="50%"
                    textAnchor="middle"
                  >
                    {curvedTextContent}
                  </textPath>
                </text>
              </svg>
            </div>

            {/* Sun and Moon sign circles - moved to very bottom corners */}
            {(sunSign || moonSign) && (
              <>
                {/* Sun sign - bottom left corner */}
                <div 
                  className="absolute flex flex-col items-center z-30"
                  style={{
                    left: `${dimensions.coverWidth * 0.08}px`, // Closer to edge
                    bottom: `${dimensions.coverHeight * 0.03}px` // Very bottom
                  }}
                >
                  <span 
                    className="font-normal mb-1"
                    style={{ 
                      fontSize: `${dimensions.fontSize.sunMoon * 0.9}px`,
                      color: textColorValue 
                    }}
                  >
                    Sun
                  </span>
                  <div 
                    className="aspect-square rounded-full border-2 flex items-center justify-center bg-transparent shadow"
                    style={{ 
                      borderColor: textColorValue,
                      width: `${dimensions.coverWidth * 0.13}px`,
                      height: `${dimensions.coverWidth * 0.13}px`
                    }}
                  >
                    {sunSign ? (
                      <img
                        src={`/images/zodiac/${sunSign.toLowerCase()}.svg`}
                        alt={sunSign}
                        style={{
                          width: '60%',
                          height: '60%',
                          filter: textColorValue === "#000" ? "brightness(0)" : "brightness(0) invert(1)"
                        }}
                      />
                    ) : (
                      <span style={{ 
                        fontSize: `${dimensions.fontSize.name * 0.8}px`,
                        color: textColorValue 
                      }}>☉</span>
                    )}
                  </div>
                </div>

                {/* Moon sign - bottom right corner */}
                <div 
                  className="absolute flex flex-col items-center z-30"
                  style={{
                    right: `${dimensions.coverWidth * 0.08}px`, // Closer to edge
                    bottom: `${dimensions.coverHeight * 0.03}px` // Very bottom
                  }}
                >
                  <span 
                    className="font-normal mb-1"
                    style={{ 
                      fontSize: `${dimensions.fontSize.sunMoon * 0.9}px`,
                      color: textColorValue 
                    }}
                  >
                    Moon
                  </span>
                  <div 
                    className="aspect-square rounded-full border-2 flex items-center justify-center bg-transparent shadow"
                    style={{ 
                      borderColor: textColorValue,
                      width: `${dimensions.coverWidth * 0.13}px`,
                      height: `${dimensions.coverWidth * 0.13}px`
                    }}
                  >
                    {moonSign ? (
                      <img
                        src={`/images/zodiac/${moonSign.toLowerCase()}.svg`}
                        alt={moonSign}
                        style={{
                          width: '60%',
                          height: '60%',
                          filter: textColorValue === "#000" ? "brightness(0)" : "brightness(0) invert(1)"
                        }}
                      />
                    ) : (
                      <span style={{ 
                        fontSize: `${dimensions.fontSize.name * 0.8}px`,
                        color: textColorValue 
                      }}>☽</span>
                    )}
                  </div>
                </div>
              </>
            )}

            {/* Bottom text - astrovela */}
            <div 
              className="absolute text-center"
              style={{
                bottom: `${dimensions.coverHeight * 0.05}px`,
                left: '50%',
                transform: 'translateX(-50%)'
              }}
            >
              <span 
                className="font-medium tracking-wider"
                style={{ 
                  fontSize: `${dimensions.fontSize.sunMoon}px`,
                  color: textColorValue
                }}
              >
                astrovela
              </span>
            </div>
          </div>
        </div>

        {/* Clean shadow for depth */}
        <div className="absolute inset-0 shadow-[0_2px_10px_rgba(0,0,0,0.2)] pointer-events-none rounded-sm"></div>
      </div>
    </div>
  )
}
