"use client"

import Image from "next/image"

interface IconSelectorProps {
  icons: string[]
  selectedIcon: string
  setSelectedIcon: (icon: string) => void
  disabledIcons?: string[]
}

export function IconSelector({ icons, selectedIcon, setSelectedIcon, disabledIcons = [] }: IconSelectorProps) {
  // Map of icon paths
  const iconPaths: Record<string, string> = {
    "natal-chart": "/images/natal-chart.png",
    "zodiac-chart": "/images/zodiac-chart-icon.png",
    "custom-natal-chart": "/images/natal-chart.png",
  }

  return (
    <div className="grid grid-cols-2 gap-1">
      {icons.map((icon) => {
        const isSelected = selectedIcon === icon
        const isDisabled = disabledIcons.includes(icon)
        return (
          <button
            key={icon}
            type="button"
            onClick={() => !isDisabled && setSelectedIcon(icon)}
            className={`relative flex flex-col items-center p-1 border rounded-lg transition-all ${
              isSelected
                ? "bg-amber-50 border-amber-400 shadow-sm"
                : isDisabled
                  ? "bg-gray-100 border-gray-200 opacity-50 cursor-not-allowed"
                  : "bg-white border-gray-200 hover:border-amber-300"
            }`}
            aria-pressed={isSelected}
            disabled={isDisabled}
          >
            <div className="relative w-1/3 aspect-square mb-1 overflow-hidden mx-auto">
              <Image
                src={iconPaths[icon]}
                alt={icon}
                fill
                className="object-contain scale-50"
                sizes="(max-width: 768px) 100vw, 200px"
              />
            </div>
            <span
              className={`text-xs font-medium tracking-wider capitalize ${
                isSelected ? "text-amber-800" : isDisabled ? "text-gray-400" : "text-gray-700"
              }`}
            >
              {icon.replace("-", " ")}
            </span>
          </button>
        )
      })}
    </div>
  )
}
