"use client"

import { useQuiz } from "@/contexts/quiz-context"
import { useState, useEffect } from "react"

export function NameCollection() {
  const { state, setFirstName, nextStep, prevStep } = useQuiz()
  const [firstNameInput, setFirstNameInput] = useState(state.firstName || "")
  const [isValid, setIsValid] = useState(false)

  useEffect(() => {
    setIsValid(firstNameInput.trim().length > 0)
  }, [firstNameInput])

  const handleSubmit = () => {
    if (isValid) {
      setFirstName(firstNameInput.trim())
      nextStep()
    }
  }

  return (
    <div className="space-y-6 text-center">
      <h1 className="text-2xl font-semibold text-gray-900">What's your first name?</h1>

      <div className="space-y-4 mt-6">
        <div className="space-y-2">
          <label htmlFor="firstName" className="block text-sm font-medium text-left text-gray-700">
            First Name <span className="text-red-500">*</span>
          </label>
          <input
            id="firstName"
            type="text"
            value={firstNameInput}
            onChange={(e) => setFirstNameInput(e.target.value)}
            placeholder="Enter your first name"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300"
          />
        </div>

        <div className="flex flex-col space-y-3 pt-4">
          <button
            onClick={handleSubmit}
            disabled={!isValid}
            className="w-full py-3 px-4 bg-yellow-300 rounded-full text-gray-900 font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-yellow-400 transition-colors"
          >
            Continue
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

