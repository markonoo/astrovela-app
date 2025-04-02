"use client"

import { useQuiz } from "@/contexts/quiz-context"
import { GenderSelection } from "./gender-selection"
import { AstrologyLevel } from "./astrology-level"
import { NameCollection } from "./name-collection"
import { LastNameCollection } from "./last-name-collection"
import { BirthDate } from "./birth-date"
import { BirthPlace } from "./birth-place"
import { BirthTime } from "./birth-time"
import { ZodiacDisplay } from "./zodiac-display"
import { CoverCustomization } from "./cover-customization"
import { EmailQuestion } from "./email-question"
import { BookCoverConfirmation } from "./book-cover-confirmation"
import { PersonalizedLanding } from "./personalized-landing"
import { GenericQuestion } from "./generic-question"
import { RelationshipStatusQuestion } from "./relationship-status-question"
import QuizLayout from "./quiz-layout"
import { useEffect } from "react"
import { isQuizCompleted } from "@/utils/storage"
import { getQuestionByNumber } from "@/utils/quiz-questions"

export function QuizController() {
  const { state, nextStep, prevStep } = useQuiz()
  const { currentStep, totalSteps, quizCompleted } = state

  // Check if quiz is completed from storage on initial load
  useEffect(() => {
    const completed = isQuizCompleted()
    if (completed && !quizCompleted) {
      // If quiz is completed in storage but not in state, show the personalized landing
      // This ensures we don't reset the quiz state when navigating
    }
  }, [quizCompleted])

  // Check if gender is already set and we're on step 1, if so, move to step 2
  useEffect(() => {
    if (currentStep === 1 && state.gender) {
      nextStep()
    }
  }, [currentStep, state.gender, nextStep])

  // If quiz is completed, show the personalized landing page
  if (quizCompleted || isQuizCompleted()) {
    return <PersonalizedLanding />
  }

  // Render the appropriate question based on the current step
  const renderQuestion = () => {
    // Show results when quiz is completed
    if (currentStep > totalSteps) {
      return <PersonalizedLanding />
    }

    // Special cases for specific questions
    if (currentStep === 5) {
      return <RelationshipStatusQuestion />
    }

    // Book cover confirmation at question 34
    if (currentStep === 34) {
      return <BookCoverConfirmation />
    }

    // Email collection moved to question 35
    if (currentStep === 35) {
      return <EmailQuestion />
    }

    // Check if the current step has a question from the CSV (except for special cases)
    const csvQuestion = getQuestionByNumber(currentStep)
    if (csvQuestion && currentStep !== 5 && currentStep !== 34 && currentStep !== 35) {
      return (
        <GenericQuestion
          questionNumber={csvQuestion.questionNumber}
          questionText={csvQuestion.questionText}
          options={csvQuestion.options}
        />
      )
    }

    // If not in CSV, use the existing questions
    switch (currentStep) {
      case 1:
        return <GenderSelection />
      case 2:
        return <AstrologyLevel />
      case 3:
        return <NameCollection />
      case 4:
        return <LastNameCollection />
      case 7:
        return <BirthDate />
      case 8:
        // Special case - render the zodiac display directly without the quiz layout
        return <ZodiacDisplay />
      case 9:
        return <BirthTime />
      case 10:
        return <BirthPlace />
      case 33:
        return <CoverCustomization />
      default:
        // For steps that don't have specific components or CSV questions,
        // show a placeholder with navigation buttons
        return (
          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-4">Question {currentStep}</h2>
            <p className="text-gray-600 mb-8">This is a placeholder for question {currentStep}.</p>

            <div className="flex flex-col space-y-3">
              <button
                onClick={nextStep}
                className="w-full py-3 px-4 bg-yellow-300 rounded-full text-gray-900 font-medium hover:bg-yellow-400 transition-colors"
              >
                Continue
              </button>

              {currentStep > 1 && (
                <button
                  onClick={prevStep}
                  className="w-full py-3 px-4 bg-white border border-gray-300 rounded-full text-gray-700 font-medium hover:bg-gray-50 transition-colors"
                >
                  Previous Question
                </button>
              )}
            </div>
          </div>
        )
    }
  }

  // For step 8, we render the zodiac display directly without the quiz layout
  if (currentStep === 8) {
    return renderQuestion()
  }

  return <QuizLayout showBackButton={currentStep > 1 && currentStep <= totalSteps}>{renderQuestion()}</QuizLayout>
}

