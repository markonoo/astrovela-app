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
    <div className="space-y-3 text-center">
      <h1 className="text-2xl font-semibold text-gray-900">Customize Your Book Cover</h1>

      <p className="text-xs text-gray-600 mt-1 mb-2">
        Choose the color for your personalized book cover
      </p>

      {/* Book preview - aligned with step 23 */}
      <div className="flex justify-center">
        <div className="w-[350px] h-[450px] relative flex items-center justify-center mb-2">
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

      {/* Color selection below preview, centered */}
      <div className="flex justify-center mt-2">
        <ColorSelector selectedColor={selectedColor} setSelectedColor={handleColorSelect} />
      </div>

      {/* Continue button */}
      <div className="mt-4">
        <button
          onClick={handleContinue}
          className="w-full py-3 px-4 bg-yellow-400 rounded-full text-gray-900 font-medium hover:bg-yellow-500 transition-colors"
        >
          Continue
        </button>
      </div>
    </div>
  )
}

