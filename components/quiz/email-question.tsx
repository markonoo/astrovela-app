"use client"

import type React from "react"

import { useQuiz } from "@/contexts/quiz-context"
import { useState, useEffect } from "react"
import { Mail, Check, AlertCircle } from "lucide-react"

export function EmailQuestion() {
  const { state, setEmail, updateAnswer, nextStep, prevStep, completeQuiz } = useQuiz()
  const [emailInput, setEmailInput] = useState(state.email || "")
  const [error, setError] = useState<string | null>(null)
  const [isValid, setIsValid] = useState(false)
  const [isFocused, setIsFocused] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Load any existing email from state
  useEffect(() => {
    if (state.email) {
      setEmailInput(state.email)
      validateEmail(state.email)
    }
  }, [state.email])

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const isValidFormat = regex.test(email)
    setIsValid(isValidFormat)

    if (!email.trim()) {
      setError("Email is required")
      return false
    }

    if (!isValidFormat) {
      setError("Please enter a valid email address")
      return false
    }

    setError(null)
    return true
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setEmailInput(value)

    // Only validate if user has started typing or previously had an error
    if (isFocused || error) {
      validateEmail(value)
    }
  }

  const handleBlur = () => {
    setIsFocused(false)
    if (emailInput.trim()) {
      validateEmail(emailInput)
    }
  }

  const handleSubmit = () => {
    if (!validateEmail(emailInput)) {
      return
    }

    setIsSubmitting(true)

    // Store the email in both specific email field and in answers
    setEmail(emailInput)
    updateAnswer("question_35", emailInput)

    // Mark the quiz as completed
    completeQuiz()

    // Small delay for visual feedback
    setTimeout(() => {
      nextStep() // Go to personalized landing
      setIsSubmitting(false)
    }, 300)
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
            onChange={handleInputChange}
            onFocus={() => setIsFocused(true)}
            onBlur={handleBlur}
            placeholder="your.email@example.com"
            className={`w-full pl-10 pr-10 py-3 border rounded-lg focus:outline-none focus:ring-2 
              ${error ? "border-red-300 focus:ring-red-200" : isValid && emailInput ? "border-green-300 focus:ring-green-200" : "border-gray-300 focus:ring-yellow-300"}`}
            aria-invalid={error ? "true" : "false"}
            aria-describedby={error ? "email-error" : undefined}
          />

          {/* Status indicator */}
          {emailInput && (
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
              {isValid ? (
                <Check className="h-5 w-5 text-green-500" />
              ) : (
                <AlertCircle className="h-5 w-5 text-red-500" />
              )}
            </div>
          )}
        </div>

        {error && (
          <p id="email-error" className="text-red-500 text-sm flex items-center">
            <AlertCircle className="h-4 w-4 mr-1" />
            {error}
          </p>
        )}

        <div className="flex flex-col space-y-3 pt-2">
          <button
            onClick={handleSubmit}
            disabled={!isValid || isSubmitting}
            className={`w-full py-3 px-4 bg-yellow-300 rounded-full text-gray-900 font-medium 
              transition-all duration-300
              ${!isValid || isSubmitting ? "opacity-50 cursor-not-allowed" : "hover:bg-yellow-400"}`}
          >
            {isSubmitting ? "Completing Quiz..." : "Complete Quiz"}
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

