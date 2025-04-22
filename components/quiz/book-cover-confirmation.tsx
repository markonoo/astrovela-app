"use client"

import { useQuiz } from "@/contexts/quiz-context"
import { useState } from "react"
import { BookCoverPreview } from "../book-cover-preview"
import { THEME_COLORS } from "../book-cover-designer"

export function BookCoverConfirmation() {
  const { state, setCurrentStep, nextStep } = useQuiz()
  const [isTransitioning, setIsTransitioning] = useState(false)

  const handleConfirm = () => {
    setIsTransitioning(true)
    setTimeout(() => {
      nextStep() // Go to question 35 (email collection)
      setIsTransitioning(false)
    }, 300)
  }

  const handleReturn = () => {
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentStep(33) // Go back to question 33 (color selection)
      setIsTransitioning(false)
    }, 300)
  }

  return (
    <div
      className={`space-y-4 text-center transition-opacity duration-300 ${isTransitioning ? "opacity-50" : "opacity-100"}`}
    >
      <h1 className="text-2xl font-semibold text-gray-900">Your Book Cover</h1>

      <p className="text-sm text-gray-600 mt-1">
        Are you satisfied with the generated book cover and ready to proceed, or would you like to return to adjust the
        color?
      </p>

      <div className="flex justify-center mt-4 mb-4">
        <div className="w-80 h-[480px] relative flex items-center justify-center">
          <BookCoverPreview
            userInfo={{
              firstName: state.firstName || "FIRST",
              lastName: state.lastName || "",
              placeOfBirth: state.birthPlace || "Place of Birth",
              dateOfBirth: state.birthDate?.year && state.birthDate?.month && state.birthDate?.day
                ? `${state.birthDate.year}-${state.birthDate.month.padStart(2, "0")}-${state.birthDate.day.padStart(2, "0")}`
                : "",
            }}
            themeColor={THEME_COLORS[state.coverColorScheme]}
            selectedIcon={"natal-chart"}
          />
        </div>
      </div>

      <div className="flex flex-col space-y-2 pt-2">
        <button
          onClick={handleConfirm}
          className="w-full py-3 px-4 bg-yellow-300 rounded-full text-gray-900 font-medium hover:bg-yellow-400 transition-colors flex items-center justify-center"
        >
          I'm satisfied, proceed to next step
        </button>

        <button
          onClick={handleReturn}
          className="w-full py-3 px-4 bg-white border border-gray-300 rounded-full text-gray-700 font-medium hover:bg-gray-50 transition-colors flex items-center justify-center"
        >
          I'd like to adjust the color
        </button>
      </div>
    </div>
  )
}

