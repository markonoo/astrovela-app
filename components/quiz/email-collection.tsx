"use client"

import * as React from "react"
import { useQuiz } from "@/contexts/quiz-context"
import { useState } from "react"
import { Mail } from "lucide-react"

export function EmailCollection() {
  const { state, setEmail, nextStep, prevStep, completeQuiz } = useQuiz()
  const [emailInput, setEmailInput] = useState(state.email || "")
  const [error, setError] = useState<string | null>(null)

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regex.test(email)
  }

  const handleSubmit = async () => {
    if (!emailInput.trim()) {
      setError("Email is required")
      return
    }

    if (!validateEmail(emailInput)) {
      setError("Please enter a valid email address")
      return
    }

    setError(null)
    setEmail(emailInput)

    try {
      // Mark the quiz as completed and save data (this will handle the single submission)
      await completeQuiz()

      // Move to the next step (personalized landing)
      nextStep()
    } catch (error) {
      console.error('Error completing quiz:', error)
      setError('Failed to complete quiz. Please try again.')
    }
  }

  return (
    <div className="space-y-6 text-center">
      <h1 className="text-2xl font-semibold text-gray-900">What's your email address?</h1>

      <p className="text-sm text-gray-600 mt-2">We'll send your personalized astrology reading to this email.</p>

      <div className="space-y-4 mt-6">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Mail className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="email"
            value={emailInput}
            onChange={(e) => {
              setEmailInput(e.target.value)
              if (error) setError(null)
            }}
            placeholder="your.email@example.com"
            className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300"
          />
        </div>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <div className="flex flex-col space-y-3">
          <button
            onClick={handleSubmit}
            className="w-full py-3 px-4 bg-yellow-300 rounded-full text-gray-900 font-medium hover:bg-yellow-400 transition-colors"
          >
            Complete Quiz
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

