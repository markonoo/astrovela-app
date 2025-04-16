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
        <div className="relative w-8 h-8">
          <Image src="/images/natal-chart.png" alt="Natal Chart" fill className="object-contain" />
        </div>
      )
    }

    if (iconName === "zodiac-chart") {
      return (
        <div className="relative w-8 h-8">
          <Image src="/images/zodiac-chart-icon.png" alt="Zodiac Chart" fill className="object-contain" />
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
    <div className="grid grid-cols-2 gap-4">
      {icons.map((icon) => (
        <button
          key={icon}
          className={`flex flex-col items-center justify-center p-4 rounded-md border ${
            selectedIcon === icon ? "border-amber-400 bg-amber-50" : "border-gray-200 hover:bg-gray-50"
          }`}
          onClick={() => setSelectedIcon(icon)}
          aria-label={`Select ${getIconLabel(icon)}`}
        >
          <div className="h-12 flex items-center justify-center mb-2">{renderIcon(icon)}</div>
          <span className="text-sm tracking-wider">{getIconLabel(icon)}</span>
        </button>
      ))}
    </div>
  )
}
