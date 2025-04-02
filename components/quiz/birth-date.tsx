"use client"

import { useQuiz } from "@/contexts/quiz-context"
import { useState, useEffect } from "react"
import { ChevronDown } from "lucide-react"

export function BirthDate() {
  const { state, setBirthDate, nextStep, prevStep } = useQuiz()
  const [isValid, setIsValid] = useState(false)

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]

  const days = Array.from({ length: 31 }, (_, i) => i + 1)

  // Generate years from 1940 to current year
  const currentYear = new Date().getFullYear()
  const years = Array.from({ length: currentYear - 1939 }, (_, i) => currentYear - i)

  useEffect(() => {
    // Check if month, day, and year are all selected
    setIsValid(!!state.birthDate.month && !!state.birthDate.day && !!state.birthDate.year)
  }, [state.birthDate])

  const handleContinue = () => {
    if (isValid) {
      nextStep()
    }
  }

  return (
    <div className="space-y-6 text-center">
      <h1 className="text-2xl font-semibold text-gray-900">What's your date of birth?</h1>

      <p className="text-sm text-gray-600 mt-2">
        We need this to determine planetary placements at
        <br />
        the time of your birth.
      </p>

      <div className="space-y-4 mt-6">
        <div className="relative">
          <select
            value={state.birthDate.month || ""}
            onChange={(e) => setBirthDate("month", e.target.value)}
            className="w-full p-3 pr-10 border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-yellow-300"
          >
            <option value="" disabled>
              Month
            </option>
            {months.map((month, index) => (
              <option key={month} value={String(index + 1)}>
                {month}
              </option>
            ))}
          </select>
          <ChevronDown
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
            size={16}
          />
        </div>

        <div className="relative">
          <select
            value={state.birthDate.day || ""}
            onChange={(e) => setBirthDate("day", e.target.value)}
            className="w-full p-3 pr-10 border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-yellow-300"
          >
            <option value="" disabled>
              Day
            </option>
            {days.map((day) => (
              <option key={day} value={String(day)}>
                {day}
              </option>
            ))}
          </select>
          <ChevronDown
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
            size={16}
          />
        </div>

        <div className="relative">
          <select
            value={state.birthDate.year || ""}
            onChange={(e) => setBirthDate("year", e.target.value)}
            className="w-full p-3 pr-10 border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-yellow-300"
          >
            <option value="" disabled>
              Year
            </option>
            {years.map((year) => (
              <option key={year} value={String(year)}>
                {year}
              </option>
            ))}
          </select>
          <ChevronDown
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
            size={16}
          />
        </div>

        <div className="flex flex-col space-y-3">
          <button
            onClick={handleContinue}
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

