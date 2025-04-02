"use client"

import { useQuiz } from "@/contexts/quiz-context"
import { useState } from "react"
import { Clock } from "lucide-react"

export function BirthTime() {
  const { state, setBirthTime, nextStep, prevStep } = useQuiz()
  const [birthTimeInput, setBirthTimeInput] = useState(state.birthTime || "")

  const handleSubmit = () => {
    if (birthTimeInput.trim()) {
      setBirthTime(birthTimeInput.trim())
    }
    nextStep()
  }

  const handleSkip = () => {
    nextStep()
  }

  return (
    <div className="space-y-6 text-center">
      <h1 className="text-2xl font-semibold text-gray-900">What time were you born?</h1>

      <p className="text-sm text-gray-600 mt-2">
        This helps us calculate your ascendant and house placements.
        <br />
        You can skip this if you don't know your birth time.
      </p>

      <div className="space-y-4 mt-6">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Clock className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="time"
            value={birthTimeInput}
            onChange={(e) => setBirthTimeInput(e.target.value)}
            className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300"
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

