"use client"

import { useQuiz } from "@/contexts/quiz-context"
import { useState } from "react"

export function LastNameCollection() {
  const { state, setLastName, nextStep, prevStep } = useQuiz()
  const [lastNameInput, setLastNameInput] = useState(state.lastName || "")

  const handleSubmit = () => {
    if (lastNameInput.trim()) {
      setLastName(lastNameInput.trim())
    }
    nextStep()
  }

  const handleSkip = () => {
    nextStep()
  }

  return (
    <div className="space-y-6 text-center">
      <h1 className="text-2xl font-semibold text-gray-900">What's your last name?</h1>

      <p className="text-sm text-gray-600 mt-2">
        This helps us personalize your astrological profile. You can skip if you prefer.
      </p>

      <div className="space-y-4 mt-6">
        <div className="space-y-2">
          <input
            type="text"
            value={lastNameInput}
            onChange={(e) => setLastNameInput(e.target.value)}
            placeholder="Enter your last name"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300"
          />
        </div>

        <div className="flex flex-col space-y-3 pt-4">
          <button
            onClick={handleSubmit}
            className="w-full py-3 px-4 bg-yellow-300 rounded-full text-gray-900 font-medium hover:bg-yellow-400 transition-colors"
          >
            Continue
          </button>

          <button
            onClick={handleSkip}
            className="w-full py-3 px-4 bg-white border border-gray-300 rounded-full text-gray-700 font-medium hover:bg-gray-50 transition-colors"
          >
            Skip
          </button>

          <button
            onClick={prevStep}
            className="w-full py-3 px-4 bg-white border border-gray-300 rounded-full text-gray-700 font-medium hover:bg-gray-50 transition-colors"
          >
            Previous Question
          </button>
        </div>
      </div>
    </div>
  )
}

