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
import QuizLayout from "./quiz-layout"
import { useEffect } from "react"
import { isQuizCompleted } from "@/utils/storage"
import { getQuestionByNumber } from "@/utils/quiz-questions"

// Create a component for the layered cover customization step
// import { LayeredBookCover } from "@/components/book-cover/layered-book-cover"
// import { BookCoverDesigner } from "@/components/book-cover-designer"

// New component for BookCoverDesigner in the quiz flow
// function BookCoverDesignerStep() {
//   const { state, nextStep } = useQuiz()
//   
//   // Handle continuing to the next step
//   const handleContinue = () => {
//     nextStep()
//   }
//
//   return (
//     <div className="w-full max-w-5xl mx-auto">
//       <h2 className="text-2xl font-bold mb-6 text-center">Design Your Custom Book Cover</h2>
//       
//       {/* Book cover designer */}
//       <div className="mb-8">
//         <BookCoverDesigner />
//       </div>
//       
//       {/* Continue button */}
//       <div className="flex justify-center mt-12">
//         <button
//           onClick={handleContinue}
//           className="px-8 py-3 bg-yellow-400 text-gray-900 rounded-full hover:bg-yellow-500 transition-colors font-semibold shadow-md"
//         >
//           Continue with Custom Cover
//         </button>
//       </div>
//     </div>
//   )
// }

// Define the 3 parts with names, subtitles, and their steps
const quizParts = [
  {
    name: "Setting Your Intentions",
    subtitle: "Let's get to know you and your goals.",
    steps: [
      { type: "gender" },
      { type: "mainGoals", questionNumber: 1 },
      { type: "relationshipStatus" },
      { type: "loading", message: "Calculating your astrological path..." },
      { type: "testimonial", quote: "This book changed my life!" },
    ],
  },
  {
    name: "Your Cosmic Blueprint",
    subtitle: "We'll use your birth details to reveal your unique astrological story.",
    steps: [
      { type: "birthDate" },
      { type: "zodiacResult" },
      { type: "birthTime" },
      { type: "birthPlace" },
      { type: "loading", message: "Personalizing your book for your zodiac sign..." },
    ],
  },
  {
    name: "Personal Touch & Book Magic",
    subtitle: "Customize your book and add your personal insights.",
    steps: [
      { type: "motivation", questionNumber: 2 },
      { type: "agreeWorry", questionNumber: 3 },
      { type: "optimism", questionNumber: 4 },
      { type: "relationshipQuestion", questionNumber: 5 },
      { type: "additionalTopics", questionNumber: 6 },
      { type: "firstName" },
      { type: "lastName" },
      { type: "coverDesigner" },
      { type: "coverConfirmation" },
      { type: "loading", message: "Finalizing your book..." },
      { type: "email" },
    ],
  },
]

// Flatten quizParts into quizSteps, keeping track of part indices
const quizSteps = quizParts.flatMap((part, partIdx) =>
  part.steps.map((step, stepIdx) => ({ ...step, partIdx }))
)

function getCurrentPart(currentStep: number) {
  // currentStep is 1-based
  let stepCount = 0
  for (let i = 0; i < quizParts.length; i++) {
    stepCount += quizParts[i].steps.length
    if (currentStep <= stepCount) {
      return quizParts[i]
    }
  }
  return null
}

export function QuizController() {
  const { state, nextStep, prevStep } = useQuiz()
  const { currentStep, quizCompleted } = state

  if (quizCompleted || isQuizCompleted()) {
    return <PersonalizedLanding />
  }

  const stepConfig = quizSteps[currentStep - 1] // currentStep is 1-based
  const currentPart = getCurrentPart(currentStep)

  // Auto-advance for loading steps
  // Only run effect if the current step is a loading step
  // Delay: 1.5 seconds (1500 ms)
  useEffect(() => {
    if (stepConfig && stepConfig.type === "loading") {
      const timer = setTimeout(() => {
        nextStep()
      }, 1500)
      return () => clearTimeout(timer)
    }
  }, [stepConfig, nextStep])

  // Map step types to components
  const renderStep = () => {
    if (!stepConfig) return null
    switch (stepConfig.type) {
      case "gender":
        return <GenderSelection />
      case "mainGoals":
        return <GenericQuestion questionNumber={stepConfig.questionNumber ?? -1} questionText="What are your main goals?" options={["Self-growth", "Love", "Career", "Health", "Other"]} />
      case "relationshipStatus":
        return <RelationshipStatusQuestion />
      case "loading":
        return <div className="flex flex-col items-center justify-center min-h-[200px] text-lg font-medium animate-pulse">{stepConfig.message}</div>
      case "testimonial":
        return <div className="flex flex-col items-center justify-center min-h-[200px] text-lg italic">{stepConfig.quote}</div>
      case "birthDate":
        return <CombinedBirthDetails />
      case "zodiacResult":
        return <ZodiacDisplay />
      case "birthTime":
        return null
      case "birthPlace":
        return null
      case "motivation":
        return <GenericQuestion questionNumber={stepConfig.questionNumber ?? -1} questionText="What motivates you?" options={["Achievement", "Connection", "Creativity", "Helping others", "Learning", "Other"]} />
      case "agreeWorry":
        return <GenericQuestion questionNumber={stepConfig.questionNumber ?? -1} questionText="I often worry whether I made the right decisions in life." options={["Strongly agree", "Agree", "Neutral", "Disagree", "Strongly disagree"]} />
      case "optimism":
        return <GenericQuestion questionNumber={stepConfig.questionNumber ?? -1} questionText="Are you a pessimist, optimist, or realist?" options={["Pessimist", "Optimist", "Realist"]} />
      case "relationshipQuestion":
        return <GenericQuestion questionNumber={stepConfig.questionNumber ?? -1} questionText="What do you value most in a relationship?" options={["Trust", "Communication", "Support", "Shared values", "Independence", "Passion"]} />
      case "additionalTopics":
        return <GenericQuestion questionNumber={stepConfig.questionNumber ?? -1} questionText="What additional topics would you like to include in your book? (choose all that apply)" options={["Tarot cards", "Palm reading", "Crystals", "Compatibility/partner"]} />
      case "firstName":
        return <NameCollection />
      case "lastName":
        return <LastNameCollection />
      case "coverDesigner":
        return <CoverCustomization />
      case "coverConfirmation":
        return <BookCoverConfirmation />
      case "email":
        return <EmailQuestion />
      default:
        return <div className="text-center">Unknown step</div>
    }
  }

  return (
    <QuizLayout showBackButton={currentStep > 1 && currentStep <= quizSteps.length}>
      {/* Part header */}
      {currentPart && (
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold mb-2">{currentPart.name}</h2>
          <div className="text-lg text-gray-600">{currentPart.subtitle}</div>
        </div>
      )}
      {renderStep()}
    </QuizLayout>
  )
}

