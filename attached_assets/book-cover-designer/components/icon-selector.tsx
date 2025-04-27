"use client"

import Image from "next/image"

interface IconSelectorProps {
  icons: string[]
  selectedIcon: string
  setSelectedIcon: (icon: string) => void
}

export function IconSelector({ icons, selectedIcon, setSelectedIcon }: IconSelectorProps) {
  // Function to render icon based on name
  const renderIcon = (iconName: string) => {
    if (iconName === "natal-chart") {
      return (
        <div className="relative w-4 h-4">
          <Image src="/images/natal-chart.png" alt="Natal Chart" fill className="object-contain scale-50" />
        </div>
      )
    }

    if (iconName === "zodiac-chart") {
      return (
        <div className="relative w-4 h-4">
          <Image src="/images/zodiac-chart-icon.png" alt="Zodiac Chart" fill className="object-contain scale-50" />
        </div>
      )
    }

    return null
  }

  // Function to get human-readable icon name
  const getIconLabel = (iconName: string) => {
    switch (iconName) {
      case "natal-chart":
        return "Natal Chart"
      case "zodiac-chart":
        return "Zodiac Chart"
      default:
        return iconName
    }
  }

  return (
    <div className="grid grid-cols-2 gap-2">
      {icons.map((icon) => (
        <button
          key={icon}
          className={`flex flex-col items-center justify-center p-1 rounded-md border ${
            selectedIcon === icon ? "border-amber-400 bg-amber-50" : "border-gray-200 hover:bg-gray-50"
          }`}
          onClick={() => setSelectedIcon(icon)}
          aria-label={`Select ${getIconLabel(icon)}`}
        >
          <div className="h-6 flex items-center justify-center mb-1">{renderIcon(icon)}</div>
          <span className="text-xs tracking-wider">{getIconLabel(icon)}</span>
        </button>
      ))}
    </div>
  )
}
