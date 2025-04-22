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
  // For question 17, allow multiple selection
  const isMultiSelect = questionNumber === 17;
  const initialValue = state.answers[`question_${questionNumber}`] || (isMultiSelect ? [] : null);
  const [selectedOption, setSelectedOption] = useState<any>(initialValue);
  const [isTransitioning, setIsTransitioning] = useState(false)

  // Load any existing answer from state
  useEffect(() => {
    const savedAnswer = state.answers[`question_${questionNumber}`]
    if (savedAnswer) {
      setSelectedOption(savedAnswer)
    }
  }, [state.answers, questionNumber])

  const handleSelect = (option: string) => {
    if (isMultiSelect) {
      let updated: string[] = Array.isArray(selectedOption) ? [...selectedOption] : [];
      if (updated.includes(option)) {
        updated = updated.filter((o) => o !== option);
      } else {
        updated.push(option);
      }
      setSelectedOption(updated);
      updateAnswer(`question_${questionNumber}`, updated);
    } else {
      setSelectedOption(option);
      updateAnswer(`question_${questionNumber}`, option);
    }
    setIsTransitioning(true);
    setTimeout(() => {
      setIsTransitioning(false);
    }, 300);
  }
  
  const handleContinue = () => {
    // Only proceed if an option is selected (or at least one for multi)
    if ((isMultiSelect && selectedOption && selectedOption.length > 0) || (!isMultiSelect && selectedOption)) {
      setIsTransitioning(true)
      setTimeout(() => {
        nextStep()
        setIsTransitioning(false)
      }, 300)
    }
  }

  return (
    <div
      className={`space-y-3 text-center transition-opacity duration-300 ${isTransitioning ? "opacity-50" : "opacity-100"}`}
    >
      <h1 className="text-2xl font-semibold text-gray-900">{questionText}</h1>

      <div className="space-y-2 mt-4">
        {options.map((option, index) => (
          <OptionCard
            key={index}
            selected={isMultiSelect ? (Array.isArray(selectedOption) && selectedOption.includes(option)) : selectedOption === option}
            onClick={() => handleSelect(option)}
            className={`hover:shadow-md transition-shadow ${isMultiSelect ? 'cursor-pointer' : ''}`}
          >
            <span className="text-lg font-normal flex items-center gap-2">{option}</span>
          </OptionCard>
        ))}
      </div>
      
      {/* Continue button - only active when an option is selected */}
      <button
        onClick={handleContinue}
        disabled={isMultiSelect ? !(selectedOption && selectedOption.length > 0) : !selectedOption}
        className={`w-full py-3 px-4 rounded-full font-medium transition-colors ${
          (isMultiSelect ? (selectedOption && selectedOption.length > 0) : !!selectedOption)
            ? "bg-yellow-300 text-gray-900 hover:bg-yellow-400"
            : "bg-gray-200 text-gray-500 cursor-not-allowed"
        }`}
      >
        Continue
      </button>

      <button
        onClick={prevStep}
        className="mt-2 w-full py-3 px-4 bg-white border border-gray-300 rounded-full text-gray-700 font-medium hover:bg-gray-50 transition-colors"
      >
        Previous Question
      </button>
    </div>
  )
}

