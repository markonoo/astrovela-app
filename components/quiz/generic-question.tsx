"use client"

import { useQuiz } from "@/contexts/quiz-context"
import { OptionCard } from "./option-card"
import { useState, useEffect } from "react"

interface GenericQuestionProps {
  questionNumber: number
  questionText: string
  options: string[]
}

export function GenericQuestion({ questionNumber, questionText, options }: GenericQuestionProps) {
  const { state, updateAnswer, nextStep, prevStep } = useQuiz()
  const [selectedOption, setSelectedOption] = useState<string | null>(
    state.answers[`question_${questionNumber}`] || null,
  )
  const [isTransitioning, setIsTransitioning] = useState(false)

  // Load any existing answer from state
  useEffect(() => {
    const savedAnswer = state.answers[`question_${questionNumber}`]
    if (savedAnswer) {
      setSelectedOption(savedAnswer)
    }
  }, [state.answers, questionNumber])

  const handleSelect = (option: string) => {
    // Set the selected option in local state
    setSelectedOption(option)

    // Update the quiz context with the answer
    updateAnswer(`question_${questionNumber}`, option)

    // Visual feedback before moving to next question
    setIsTransitioning(true)

    // Small delay for visual feedback before moving to next question
    setTimeout(() => {
      nextStep()
      setIsTransitioning(false)
    }, 300)
  }

  return (
    <div
      className={`space-y-6 text-center transition-opacity duration-300 ${isTransitioning ? "opacity-50" : "opacity-100"}`}
    >
      <h1 className="text-2xl font-semibold text-gray-900">{questionText}</h1>

      <div className="space-y-3 mt-8">
        {options.map((option, index) => (
          <OptionCard
            key={index}
            selected={selectedOption === option}
            onClick={() => handleSelect(option)}
            className="hover:shadow-md transition-shadow"
          >
            <span>{option}</span>
          </OptionCard>
        ))}
      </div>

      <button
        onClick={prevStep}
        className="mt-6 w-full py-3 px-4 bg-white border border-gray-300 rounded-full text-gray-700 font-medium hover:bg-gray-50 transition-colors"
      >
        Previous Question
      </button>
    </div>
  )
}

