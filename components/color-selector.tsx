"use client"

import React from "react"

interface ColorSelectorProps {
  selectedColor: string
  setSelectedColor: (color: string) => void
}

export function ColorSelector({ selectedColor, setSelectedColor }: ColorSelectorProps) {
  // Color options with display colors
  const colorOptions = [
    { id: "black", bgColor: "bg-black border-white" },
    { id: "navy", bgColor: "bg-indigo-950 border-white" },
    { id: "purple", bgColor: "bg-purple-950 border-white" },
    { id: "green", bgColor: "bg-emerald-950 border-white" },
    { id: "burgundy", bgColor: "bg-red-900 border-white" },
    { id: "cream", bgColor: "bg-amber-50 border-black" },
  ]

  return (
    <div className="flex flex-wrap gap-2">
      {colorOptions.map((color) => (
        <button
          key={color.id}
          type="button"
          className={`w-8 h-8 rounded-full border ${color.bgColor} ${
            selectedColor === color.id ? "ring-2 ring-blue-500 ring-offset-1" : ""
          } transition-all`}
          onClick={() => setSelectedColor(color.id)}
          aria-label={`Select ${color.id} color`}
        />
      ))}
    </div>
  )
}
