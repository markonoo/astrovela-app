"use client"

import { useQuiz } from "@/contexts/quiz-context"
import { OptionCard } from "./option-card"
import { useState } from "react"

export function RelationshipStatusQuestion() {
  const { state, updateAnswer, nextStep, prevStep } = useQuiz()
  const [selectedOption, setSelectedOption] = useState<string | null>(state.answers["question_5"] || null)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const options = [
    { label: "Single", icon: "🧑‍💼" },
    { label: "In a relationship", icon: "💑" },
    { label: "Married", icon: "💍" },
    { label: "It's complicated", icon: "🤔" },
    { label: "Divorced", icon: "💔" },
    { label: "Widowed", icon: "🕊️" },
  ]

  const handleSelect = (option: string) => {
    setSelectedOption(option)
    updateAnswer("question_5", option)
  }

  const handleContinue = () => {
    if (selectedOption) {
      setIsTransitioning(true)
      setTimeout(() => {
        nextStep()
        setIsTransitioning(false)
      }, 300)
    }
  }

  return (
    <div
      className={`space-y-6 text-center transition-opacity duration-300 ${isTransitioning ? "opacity-50" : "opacity-100"}`}
    >
      <h1 className="text-2xl font-semibold text-gray-900">What's your relationship status?</h1>

      <div className="space-y-3 mt-4">
        {options.map((option, index) => (
          <OptionCard
            key={index}
            selected={selectedOption === option.label}
            onClick={() => handleSelect(option.label)}
            className="hover:shadow-md transition-shadow"
          >
            <span className="text-lg font-normal flex items-center gap-2"><span>{option.icon}</span> {option.label}</span>
          </OptionCard>
        ))}
      </div>

      <button
        onClick={handleContinue}
        disabled={!selectedOption}
        className={`w-full py-3 px-4 rounded-full font-medium transition-colors ${
          selectedOption
            ? "bg-yellow-300 text-gray-900 hover:bg-yellow-400"
            : "bg-gray-200 text-gray-500 cursor-not-allowed"
        }`}
      >
        Continue
      </button>

      <button
        onClick={prevStep}
        className="mt-6 w-full py-3 px-4 bg-white border border-gray-300 rounded-full text-gray-700 font-medium hover:bg-gray-50 transition-colors"
      >
        Previous Question
      </button>
    </div>
  )
}

