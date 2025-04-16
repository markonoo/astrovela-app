"use client"

import { useQuiz } from "@/contexts/quiz-context"
import { GenderSelection } from "./gender-selection"
import { AstrologyLevel } from "./astrology-level"
import { NameCollection } from "./name-collection"
import { LastNameCollection } from "./last-name-collection"
import { CombinedBirthDetails } from "./combined-birth-details"
import { ZodiacDisplay } from "./zodiac-display"
import { CoverCustomization } from "./cover-customization"
import { EmailQuestion } from "./email-question"
import { BookCoverConfirmation } from "./book-cover-confirmation"
import { PersonalizedLanding } from "./personalized-landing"
import { GenericQuestion } from "./generic-question"
import { RelationshipStatusQuestion } from "./relationship-status-question"
import { PremiumCoverCustomization } from "@/components/book-cover/premium-cover-customization"
import QuizLayout from "./quiz-layout"
import { useEffect } from "react"
import { isQuizCompleted } from "@/utils/storage"
import { getQuestionByNumber } from "@/utils/quiz-questions"

// Create a component for the layered cover customization step
import { LayeredBookCover } from "@/components/book-cover/layered-book-cover"
import { BookCoverDesigner } from "@/components/book-cover-designer"

function LayeredCoverCustomization() {
  const { state, setCoverColorScheme, nextStep } = useQuiz()
  
  // Format the birth date and place
  const formattedDate = state.birthDate?.year && state.birthDate?.month && state.birthDate?.day 
    ? `${state.birthDate.month}/${state.birthDate.day}/${state.birthDate.year}` 
    : "01/01/2000"
  
  const birthPlace = state.birthLocation?.name || "Unknown Location"
  
  const handleContinue = () => {
    nextStep()
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center">Layered Book Cover Preview</h2>

      {/* Book cover preview */}
      <div className="mb-8">
        <div className="w-full aspect-[3/4] max-w-md mx-auto rounded-lg overflow-hidden shadow-lg">
          <LayeredBookCover
            name={state.firstName || "Your Name"}
            birthDate={formattedDate}
            birthPlace={birthPlace}
            colorScheme="cosmic-blue"
          />
        </div>
      </div>

      {/* Explanation */}
      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h3 className="text-lg font-medium mb-2">Layered Book Cover Design</h3>
        <p className="text-gray-700 mb-4">
          Your personalized book features a layered design with your information elegantly 
          displayed over a cosmic background. The natal chart at the center represents your 
          unique astrological profile.
        </p>
        <ul className="space-y-2 text-sm text-gray-600">
          <li>• Decorative astrological elements</li>
          <li>• Precisely placed natal chart</li>
          <li>• Your name and birth details</li>
          <li>• Premium design elements</li>
        </ul>
      </div>

      {/* Continue button */}
      <div className="flex justify-center mt-8">
        <button
          onClick={handleContinue}
          className="px-8 py-3 bg-purple-500 text-white rounded-full hover:bg-purple-600 transition-colors font-medium"
        >
          Continue with Layered Cover
        </button>
      </div>
    </div>
  )
}

// New component for BookCoverDesigner in the quiz flow
function BookCoverDesignerStep() {
  const { state, nextStep } = useQuiz()
  
  // Handle continuing to the next step
  const handleContinue = () => {
    nextStep()
  }

  return (
    <div className="w-full max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center">Design Your Custom Book Cover</h2>
      
      {/* Book cover designer */}
      <div className="mb-8">
        <BookCoverDesigner />
      </div>
      
      {/* Continue button */}
      <div className="flex justify-center mt-12">
        <button
          onClick={handleContinue}
          className="px-8 py-3 bg-yellow-400 text-gray-900 rounded-full hover:bg-yellow-500 transition-colors font-semibold shadow-md"
        >
          Continue with Custom Cover
        </button>
      </div>
    </div>
  )
}

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
        return <CombinedBirthDetails />
      case 8:
        // Special case - render the zodiac display directly without the quiz layout
        return <ZodiacDisplay />
      case 33:
        // Allow user to choose between standard, premium, and layered cover
        return <CoverCustomization showPremiumOption={true} showLayeredOption={true} showDesignerOption={true} />
      case 36:
        // Premium cover customization (after email collection)
        return <PremiumCoverCustomization />
      case 37:
        // Layered cover customization
        return <LayeredCoverCustomization />
      case 38:
        // Advanced book cover designer
        return <BookCoverDesignerStep />
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

