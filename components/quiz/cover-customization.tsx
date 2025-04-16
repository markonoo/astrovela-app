"use client"

import { useQuiz } from "@/contexts/quiz-context"
import { useState } from "react"
import { ColorSelector } from "../color-selector"
import { BookCoverPreview } from "../book-cover-preview"
import type { ColorScheme } from "@/contexts/quiz-context"
import { THEME_COLORS } from "../book-cover-designer"

export function CoverCustomization() {
  const { state, setCoverColorScheme, nextStep } = useQuiz()
  const [selectedColor, setSelectedColor] = useState<ColorScheme>(state.coverColorScheme || "cream")

  const handleColorSelect = (color: string) => {
    setSelectedColor(color as ColorScheme)
    setCoverColorScheme(color as ColorScheme)
  }

  const handleContinue = () => {
    setCoverColorScheme(selectedColor)
    nextStep()
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-center">Customize Your Book Cover</h2>

      {/* Book preview */}
      <div className="flex justify-center">
        <div className="max-w-sm aspect-[3/4] relative overflow-hidden rounded-md">
          <BookCoverPreview
            userInfo={{
              firstName: state.firstName || "FIRST",
              lastName: state.lastName || "",
              placeOfBirth: state.birthPlace || "Place of Birth",
              dateOfBirth: state.birthDate?.year && state.birthDate?.month && state.birthDate?.day
                ? `${state.birthDate.year}-${state.birthDate.month.padStart(2, "0")}-${state.birthDate.day.padStart(2, "0")}`
                : "",
            }}
            themeColor={THEME_COLORS[selectedColor]}
            selectedIcon={"natal-chart"}
          />
        </div>
      </div>

      {/* Gap between preview and color buttons */}
      <div className="h-4" />

      {/* Color selection below preview, centered */}
      <div className="flex justify-center">
        <ColorSelector selectedColor={selectedColor} setSelectedColor={handleColorSelect} />
      </div>

      {/* Continue button */}
      <div className="flex justify-center mt-8">
        <button
          onClick={handleContinue}
          className="px-8 py-3 bg-yellow-400 rounded-full text-gray-900 font-medium hover:bg-yellow-500 transition-colors"
        >
          Continue
        </button>
      </div>
    </div>
  )
}

