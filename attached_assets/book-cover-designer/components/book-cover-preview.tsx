import Image from "next/image"
import CurvedText from "../../../components/CurvedText"

interface BookCoverPreviewProps {
  userInfo: {
    firstName: string
    lastName: string
    placeOfBirth: string
    dateOfBirth: string
    sunSign?: string
    moonSign?: string
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
    ? new Date(dateOfBirth).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      })
    : "Date of Birth"

  return (
    <div className="relative w-full max-w-[350px]">
      {/* Clean book cover container without 3D effects */}
      <div className="relative shadow-lg">
        <div
          className={`${themeColor.bg} ${themeColor.text} aspect-[2/3] p-8 flex flex-col items-center relative overflow-hidden font-montserrat`}
        >
          {/* Design layer SVG overlay */}
          <div className="absolute inset-0 w-full h-full pointer-events-none z-10">
            <Image src="/images/design-layer.svg" alt="Design Layer" fill className="object-cover" priority />
          </div>

          {/* Content container - ensure it's above the design layer */}
          <div className="relative z-20 w-full h-full flex flex-col items-center">
            {/* Top section with name - dynamic sizing based on whether lastName exists */}
            <div className="text-center mt-4 mb-6 h-[60px] flex flex-col justify-center">
              {hasLastName ? (
                <>
                  <h1 className="text-2xl font-bold tracking-wider mb-1">
                    {firstName ? firstName.toUpperCase() : "FIRST"}
                  </h1>
                  <h2 className="text-2xl font-bold tracking-wider">{lastName.toUpperCase()}</h2>
                </>
              ) : (
                <h1 className="text-3xl font-bold tracking-wider">{firstName ? firstName.toUpperCase() : "FIRST"}</h1>
              )}
            </div>

            {/* Middle section with chart - fixed height container to ensure consistent spacing */}
            <div className="flex items-center justify-center w-full h-[300px] relative">
              {selectedIcon === "natal-chart" ? (
                <div className="relative w-[300px] h-[280px] flex items-center justify-center">
                  <Image src="/images/natal-chart.png" alt="Natal Chart" fill className="object-contain" priority />
                  {/* Curved birth details */}
                  <div
                    className="absolute left-1/2 top-1/2 pointer-events-none"
                    style={{
                      transform: "translate(-50%, -50%)",
                      zIndex: 20,
                      width: 280,
                      height: 280,
                    }}
                  >
                    <CurvedText
                      text={`${formattedDate} · ${placeOfBirth || "Place of Birth"}`}
                      radius={115}
                      fontSize={15}
                      color={themeColor.text}
                      width={280}
                      height={280}
                      fontFamily="Montserrat, Arial, sans-serif"
                      fontWeight={600}
                    />
                  </div>
                </div>
              ) : (
                <div className="relative w-[300px] h-[280px] flex items-center justify-center">
                  <Image
                    src="/images/zodiac-chart-icon.png"
                    alt="Zodiac Chart"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              )}
            </div>

            {/* Bottom section with place and date - fixed position from bottom */}
            {/* Removed straight text birth details, now shown as curved text above */}

            {/* Add sun and moon sign icons in the corners, color matches themeColor.text */}
            <div className={`absolute top-4 left-4 flex flex-col items-center z-30 ${themeColor.text}`}>
              <span className="text-xs mb-1">Sun</span>
              <img src={`/images/zodiac/${userInfo.sunSign || 'sun'}.svg`} alt="Sun Sign" className="w-8 h-8" />
            </div>
            <div className={`absolute top-4 right-4 flex flex-col items-center z-30 ${themeColor.text}`}>
              <span className="text-xs mb-1">Moon</span>
              <img src={`/images/zodiac/${userInfo.moonSign || 'moon'}.svg`} alt="Moon Sign" className="w-8 h-8" />
            </div>
          </div>
        </div>

        {/* Clean, subtle shadow for depth without 3D effects */}
        <div className="absolute inset-0 shadow-[0_2px_10px_rgba(0,0,0,0.2)] pointer-events-none"></div>
      </div>
    </div>
  )
}
