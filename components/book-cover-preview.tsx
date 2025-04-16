import Image from "next/image"

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

  return (
    <div className="relative w-[350px] max-w-[350px] h-[525px]">
      {/* Clean book cover container without 3D effects */}
      <div className="relative shadow-lg w-full h-full">
        <div
          className={`${themeColor.bg} ${themeColor.text} aspect-[2/3] w-full h-full p-8 flex flex-col items-center relative overflow-hidden font-montserrat`}
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

            {/* Middle section with chart - unified large size for all usages */}
            <div className="flex items-center justify-center w-full h-[300px]">
              {selectedIcon === "natal-chart" ? (
                <div className="relative w-[300px] h-[300px] flex items-center justify-center">
                  <Image src="/images/natal-chart.png" alt="Natal Chart" fill className="object-contain" priority />
                </div>
              ) : (
                <div className="relative w-[300px] h-[300px] flex items-center justify-center">
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

            {/* Date and place of birth - directly below the chart, not absolutely positioned */}
            <div className="text-center w-full mt-2 mb-4">
              <p className="text-sm tracking-wider">{formattedDate}</p>
              <p className="text-sm tracking-wider mt-1">{placeOfBirth || "Place of Birth"}</p>
            </div>
          </div>
        </div>

        {/* Clean, subtle shadow for depth without 3D effects */}
        <div className="absolute inset-0 shadow-[0_2px_10px_rgba(0,0,0,0.2)] pointer-events-none"></div>
      </div>
    </div>
  )
}
