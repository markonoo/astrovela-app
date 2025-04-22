"use client"

import { useQuiz } from "@/contexts/quiz-context"

interface ProgressBarProps {
  dark?: boolean
}

export function ProgressBar({ dark = false }: ProgressBarProps) {
  const { state } = useQuiz()
  const { currentStep, totalSteps } = state
  const progress = (currentStep / totalSteps) * 100

  return (
    <div className="w-full px-4 py-2">
      <div className="flex items-center justify-between mb-2">
        <span className={`text-sm font-medium ${dark ? "text-yellow-100" : "text-gray-700"}`}>
          Question {currentStep} of {totalSteps}
        </span>
        <span className={`text-sm font-medium ${dark ? "text-yellow-100" : "text-gray-700"}`}>
          {Math.round(progress)}%
        </span>
      </div>
      <div className={`w-full h-2 ${dark ? "bg-[#1a233a]" : "bg-gray-200"} rounded-full overflow-hidden`}>
        <div
          className={`h-full ${dark ? "bg-yellow-300" : "bg-yellow-300"} transition-all duration-300 ease-in-out`}
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  )
} 