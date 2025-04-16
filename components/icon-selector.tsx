"use client"

import Image from "next/image"

interface IconSelectorProps {
  icons: string[]
  selectedIcon: string
  setSelectedIcon: (icon: string) => void
}

export function IconSelector({ icons, selectedIcon, setSelectedIcon }: IconSelectorProps) {
  // Map of icon paths
  const iconPaths: Record<string, string> = {
    "natal-chart": "/images/natal-chart.png",
    "zodiac-chart": "/images/zodiac-chart-icon.png",
  }

  return (
    <div className="grid grid-cols-2 gap-4">
      {icons.map((icon) => {
        const isSelected = selectedIcon === icon
        return (
          <button
            key={icon}
            type="button"
            onClick={() => setSelectedIcon(icon)}
            className={`relative flex flex-col items-center p-3 border rounded-lg transition-all ${
              isSelected
                ? "bg-amber-50 border-amber-400 shadow-sm"
                : "bg-white border-gray-200 hover:border-amber-300"
            }`}
            aria-pressed={isSelected}
          >
            <div className="relative w-full aspect-square mb-2 overflow-hidden">
              <Image
                src={iconPaths[icon]}
                alt={icon}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 200px"
              />
            </div>
            <span
              className={`text-sm font-medium tracking-wider capitalize ${
                isSelected ? "text-amber-800" : "text-gray-700"
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
