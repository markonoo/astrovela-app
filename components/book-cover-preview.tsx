import Image from "next/image"
import CurvedText from "./CurvedText"

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
}

export function BookCoverPreview({ userInfo, themeColor, selectedIcon }: BookCoverPreviewProps) {
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

  return (
    <div className="relative w-[350px] max-w-[350px] h-[450px]">
      {/* Clean book cover container without 3D effects */}
      <div className="relative shadow-lg w-full h-full">
        <div
          className={`${themeColor.bg} ${themeColor.text} aspect-[2/3] w-full h-full p-8 flex flex-col items-center relative overflow-visible font-montserrat`}
        >
          {/* Design layer SVG overlay */}
          <div className="absolute inset-0 w-full h-full pointer-events-none z-[1]">
            <Image src="/images/design-layer.svg" alt="Design Layer" fill className="object-cover" priority />
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
              <div className="relative w-[280px] h-[280px]">
                  <Image
                  src={selectedIcon === "natal-chart" ? "/images/natal-chart.png" : "/images/zodiac-chart-icon.png"} 
                  alt={selectedIcon === "natal-chart" ? "Natal Chart" : "Zodiac Chart"} 
                    fill
                    className="object-contain"
                    priority
                  />
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
