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
import { useEffect, useState, useRef } from "react"
import { isQuizCompleted } from "@/utils/storage"
import { getQuestionByNumber } from "@/utils/quiz-questions"
import { BirthDate } from "./birth-date"
import { BirthTime } from "./birth-time"
import { BirthPlace } from "./birth-place"
import { OptionCard } from "./option-card"

// Create a separate loading animation component
function LoadingAnimation({ message }: { message: string }) {
  const [progress, setProgress] = useState(0);
  
  // Animation to gradually increase the progress
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 30); // Update every 30ms to reach 100% in ~3 seconds
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="flex flex-col items-center justify-center min-h-[300px] bg-transparent text-yellow-100 rounded-xl p-8 mx-auto max-w-xl">
      <div className="w-32 h-32 bg-transparent rounded-full mb-4 flex items-center justify-center">
        {/* Circular progress indicator */}
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <circle
            className="text-gray-600 opacity-25"
            cx="50"
            cy="50"
            r="45"
            stroke="currentColor"
            strokeWidth="8"
            fill="none"
          />
          <circle
            className="text-yellow-300"
            cx="50"
            cy="50"
            r="45"
            stroke="currentColor"
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
            strokeDasharray="283"
            strokeDashoffset={283 - (progress / 100) * 283}
            transform="rotate(-90 50 50)"
          />
          <text
            x="50"
            y="50"
            textAnchor="middle"
            dominantBaseline="middle"
            fill="currentColor"
            fontSize="20"
            className="text-yellow-300"
          >
            {progress}%
          </text>
        </svg>
      </div>
      <div className="text-lg font-medium text-yellow-200 text-center">{message}</div>
    </div>
  );
}

// Define the 3 parts with names, subtitles, and their steps
const quizParts = [
  {
    name: "Setting Your Intentions",
    subtitle: "Let's get to know you and your goals.",
    steps: [
      { type: "gender" },
      { type: "astrologyLevel" },
      { type: "intro" },
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
      { type: "birthTime" },
      { type: "birthPlace" },
      { type: "zodiacResult" },
      { type: "loading", message: "Personalizing your book for your zodiac sign..." },
    ],
  },
  {
    name: "Personal Touch & Book Magic",
    subtitle: "Customize your book and add your personal insights.",
    steps: [
      { type: "motivation", questionNumber: 8 },
      { type: "agreeWorry", questionNumber: 3 },
      { type: "optimism", questionNumber: 4 },
      { type: "relationshipQuestion", questionNumber: 5 },
      { type: "additionalTopics", questionNumber: 6 },
      { type: "generic", questionNumber: 17 },
      { type: "giftOrSelf" },
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

// Helper to determine if a step is a question step
function isQuestionStep(type: string) {
  return [
    "gender",
    "astrologyLevel",
    "mainGoals",
    "relationshipStatus",
    "motivation",
    "agreeWorry",
    "optimism",
    "relationshipQuestion",
    "additionalTopics",
    "firstName",
    "lastName",
    "coverDesigner",
    "coverConfirmation",
    "email",
    // Add more if needed
  ].includes(type)
}

export function QuizController() {
  const { state, nextStep, prevStep, fetchNatalChart } = useQuiz()
  const { currentStep, quizCompleted } = state

  // Track previous step to detect transitions
  const prevStepRef = useRef<number>(currentStep)
  useEffect(() => {
    prevStepRef.current = currentStep
  }, [currentStep])

  // Trigger fetchNatalChart after birthPlace step (step 10) is completed
  useEffect(() => {
    // Step 10 is birthPlace, step 11 is zodiacResult
    if (
      prevStepRef.current === 10 && currentStep === 11 &&
      state.birthDate.year && state.birthDate.month && state.birthDate.day &&
      state.birthTime && state.birthPlace &&
      !state.isLoadingChart && !state.customChartUrl
    ) {
      fetchNatalChart()
    }
  }, [currentStep, state.birthDate, state.birthTime, state.birthPlace, state.isLoadingChart, state.customChartUrl, fetchNatalChart])

  if (quizCompleted || isQuizCompleted()) {
    return <PersonalizedLanding />
  }

  const stepConfig = quizSteps[currentStep - 1] // currentStep is 1-based
  const currentPart = getCurrentPart(currentStep)

  // Auto-advance for loading steps
  useEffect(() => {
    if (stepConfig && stepConfig.type === "loading") {
      const timer = setTimeout(() => {
        nextStep()
      }, 3000) // Increased to 3 seconds for more noticeable effect
      return () => clearTimeout(timer)
    }
  }, [stepConfig, nextStep])

  // Count only question steps for progress bar
  const totalQuestionSteps = quizSteps.filter(s => isQuestionStep(s.type)).length
  const currentQuestionStep = quizSteps.slice(0, currentStep).filter(s => isQuestionStep(s.type)).length

  // Map step types to components
  const renderStep = () => {
    if (!stepConfig) return null
    switch (stepConfig.type) {
      case "gender":
        return <GenderSelection />
      case "astrologyLevel":
        return <AstrologyLevel />
      case "intro":
        // Greeting/intro step inspired by competitor screenshot
        return (
          <div className="flex flex-col items-center justify-center min-h-[400px] bg-astro-dark text-white rounded-xl p-8 shadow-lg mx-auto max-w-xl">
            <h2 className="text-2xl font-bold mb-4 text-yellow-300 text-center">Welcome{state.firstName ? `, ${state.firstName}` : ""}!</h2>
            <div className="bg-[#041c3c] rounded-lg p-6 mb-6 w-full">
              <h3 className="text-lg font-semibold mb-4 text-yellow-200 text-center">Answer questions about life, relationships, and self-growth with Astrovela</h3>
              <ul className="text-base space-y-2 text-left">
                <li>✨ What are my unique strengths and talents?</li>
                <li>✨ How can I use my personal traits to achieve happiness & success?</li>
                <li>✨ What's my true life purpose?</li>
                <li>✨ What type of people am I compatible with?</li>
                <li>✨ Who is my perfect partner?</li>
                <li>✨ Who will I marry? When?</li>
                <li>✨ What life challenges will I face?</li>
              </ul>
            </div>
            <button
              onClick={nextStep}
              className="mt-6 px-8 py-3 bg-yellow-300 rounded-full text-gray-900 font-medium hover:bg-yellow-400 transition-colors shadow"
            >
              Let's go!
            </button>
          </div>
        )
      case "mainGoals": {
        // Explicitly create a custom GenericQuestion with forced multi-select
        const mainGoalsOptions = ["🏆 Self-growth", "❤️ Love", "💼 Career", "🧘‍♂️ Health", "✨ Other"];
        const CustomMultiSelect = () => {
          const { state, updateAnswer, nextStep, prevStep } = useQuiz();
          const questionId = `question_${stepConfig.questionNumber}`;
          const [selected, setSelected] = useState<string[]>(
            Array.isArray(state.answers[questionId]) ? state.answers[questionId] : []
          );
          
          const handleSelect = (option: string) => {
            let updated = [...selected];
            if (updated.includes(option)) {
              updated = updated.filter((o) => o !== option);
            } else {
              updated.push(option);
            }
            setSelected(updated);
            updateAnswer(questionId, updated);
          };
          
          return (
            <div className="space-y-3 text-center">
              <h1 className="text-2xl font-semibold text-gray-900">What are your main goals?</h1>
              
              <div>
                <p className="text-sm text-gray-600 mt-1 mb-2 font-medium">
                  Select all that apply
                </p>
                {selected.length > 0 && (
                  <p className="text-xs text-green-600 mb-2">
                    You selected: {selected.join(", ")}
                  </p>
                )}
              </div>
              
              <div className="space-y-2 mt-4">
                {mainGoalsOptions.map((option, index) => (
                  <OptionCard
                    key={index}
                    selected={selected.includes(option)}
                    onClick={() => handleSelect(option)}
                    className="hover:shadow-md transition-shadow cursor-pointer"
                    isMultiSelect={true}
                  >
                    <span className="text-lg font-normal flex items-center gap-2">{option}</span>
                  </OptionCard>
                ))}
              </div>
              
              <button
                onClick={nextStep}
                disabled={selected.length === 0}
                className={`w-full py-3 px-4 rounded-full font-medium transition-colors ${
                  selected.length > 0
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
          );
        };
        
        return <CustomMultiSelect />;
      }
      case "relationshipStatus":
        return <RelationshipStatusQuestion />
      case "loading": {
        return <LoadingAnimation message={stepConfig.message || ""} />;
      }
      case "testimonial":
        return (
          <div className="flex flex-col items-center justify-center min-h-[40vh] py-6 text-yellow-100">
            {/* Large square photo placeholder - increased by 2x */}
            <div className="flex items-center justify-center mb-4">
              <div className="w-96 h-96 rounded-xl border-4 border-yellow-300 bg-gray-200 flex items-center justify-center overflow-hidden shadow-lg">
                <img
                  src="/placeholder.svg"
                  alt="Testimonial placeholder"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            {/* Star rating */}
            <div className="flex space-x-1 mb-2">
              <span className="text-yellow-300 text-2xl">★★★★★</span>
            </div>
            <div className="text-xl italic text-yellow-100 mb-2 font-medium max-w-xl text-center">{stepConfig.quote || "This book changed my life! The astrological insights were incredibly accurate and have helped me understand myself better."}</div>
            <div className="text-base text-yellow-200 mb-4">Astrovela Reader</div>
            <button
              onClick={nextStep}
              className="px-12 py-4 bg-yellow-300 rounded-full text-gray-900 font-medium text-lg hover:bg-yellow-400 transition-colors shadow"
            >
              Continue
            </button>
          </div>
        )
      case "birthDate":
        return <BirthDate />
      case "birthTime":
        return <BirthTime />
      case "birthPlace":
        return <BirthPlace />
      case "zodiacResult":
        return <ZodiacDisplay />
      case "motivation": {
        const motivationOptions = ["🏆 Achievement", "🤝 Connection", "🎨 Creativity", "🫶 Helping others", "📚 Learning", "🔮 Other"];
        
        // Create a custom multi-select component for motivation question
        const CustomMultiSelect = () => {
          const { state, updateAnswer, nextStep, prevStep } = useQuiz();
          const questionId = `question_${stepConfig.questionNumber}`;
          const [selected, setSelected] = useState<string[]>(
            Array.isArray(state.answers[questionId]) ? state.answers[questionId] : []
          );
          
          const handleSelect = (option: string) => {
            let updated = [...selected];
            if (updated.includes(option)) {
              updated = updated.filter((o) => o !== option);
            } else {
              updated.push(option);
            }
            setSelected(updated);
            updateAnswer(questionId, updated);
          };
          
          return (
            <div className="space-y-3 text-center">
              <h1 className="text-2xl font-semibold text-gray-900">What motivates you?</h1>
              
              <div>
                <p className="text-sm text-gray-600 mt-1 mb-2 font-medium">
                  Select all that apply
                </p>
                {selected.length > 0 && (
                  <p className="text-xs text-green-600 mb-2">
                    You selected: {selected.join(", ")}
                  </p>
                )}
              </div>
              
              <div className="space-y-2 mt-4">
                {motivationOptions.map((option, index) => (
                  <OptionCard
                    key={index}
                    selected={selected.includes(option)}
                    onClick={() => handleSelect(option)}
                    className="hover:shadow-md transition-shadow cursor-pointer"
                    isMultiSelect={true}
                  >
                    <span className="text-lg font-normal flex items-center gap-2">{option}</span>
                  </OptionCard>
                ))}
              </div>
              
              <button
                onClick={nextStep}
                disabled={selected.length === 0}
                className={`w-full py-3 px-4 rounded-full font-medium transition-colors ${
                  selected.length > 0
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
          );
        };
        
        return <CustomMultiSelect />;
      }
      case "agreeWorry":
        return <GenericQuestion questionNumber={stepConfig.questionNumber ?? -1} questionText="I often worry whether I made the right decisions in life." options={["😟 Strongly agree", "🙁 Agree", "😐 Neutral", "🙂 Disagree", "😊 Strongly disagree"]} />
      case "optimism": {
        const optimismOptions = ["😞 Pessimist", "😊 Optimist", "😐 Realist"];
        
        // Create a custom single-choice component for the optimism question
        const SingleChoiceQuestion = () => {
          const { state, updateAnswer, nextStep, prevStep } = useQuiz();
          const questionId = `question_${stepConfig.questionNumber}`;
          const [selected, setSelected] = useState<string | null>(
            state.answers[questionId] || null
          );
          
          const handleSelect = (option: string) => {
            setSelected(option);
            updateAnswer(questionId, option);
          };
          
          return (
            <div className="space-y-3 text-center">
              <h1 className="text-2xl font-semibold text-gray-900">Are you a pessimist, optimist, or realist?</h1>
              
              <div className="space-y-2 mt-4">
                {optimismOptions.map((option, index) => (
                  <OptionCard
                    key={index}
                    selected={selected === option}
                    onClick={() => handleSelect(option)}
                    className="hover:shadow-md transition-shadow cursor-pointer"
                    isMultiSelect={false}
                  >
                    <span className="text-lg font-normal flex items-center gap-2">{option}</span>
                  </OptionCard>
                ))}
              </div>
              
              <button
                onClick={nextStep}
                disabled={!selected}
                className={`w-full py-3 px-4 rounded-full font-medium transition-colors ${
                  selected
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
          );
        };
        
        return <SingleChoiceQuestion />;
      }
      case "relationshipQuestion": {
        const relationshipOptions = ["🤝 Trust", "💬 Communication", "🛡️ Support", "💑 Shared values", "🦅 Independence", "🔥 Passion"];
        
        // Create a custom multi-select component for relationship values question
        const CustomMultiSelect = () => {
          const { state, updateAnswer, nextStep, prevStep } = useQuiz();
          const questionId = `question_${stepConfig.questionNumber}`;
          const [selected, setSelected] = useState<string[]>(
            Array.isArray(state.answers[questionId]) ? state.answers[questionId] : []
          );
          
          const handleSelect = (option: string) => {
            let updated = [...selected];
            if (updated.includes(option)) {
              updated = updated.filter((o) => o !== option);
            } else {
              updated.push(option);
            }
            setSelected(updated);
            updateAnswer(questionId, updated);
          };
          
          return (
            <div className="space-y-3 text-center">
              <h1 className="text-2xl font-semibold text-gray-900">What do you value most in a relationship?</h1>
              
              <div>
                <p className="text-sm text-gray-600 mt-1 mb-2 font-medium">
                  Select all that apply
                </p>
                {selected.length > 0 && (
                  <p className="text-xs text-green-600 mb-2">
                    You selected: {selected.join(", ")}
                  </p>
                )}
              </div>
              
              <div className="space-y-2 mt-4">
                {relationshipOptions.map((option, index) => (
                  <OptionCard
                    key={index}
                    selected={selected.includes(option)}
                    onClick={() => handleSelect(option)}
                    className="hover:shadow-md transition-shadow cursor-pointer"
                    isMultiSelect={true}
                  >
                    <span className="text-lg font-normal flex items-center gap-2">{option}</span>
                  </OptionCard>
                ))}
              </div>
              
              <button
                onClick={nextStep}
                disabled={selected.length === 0}
                className={`w-full py-3 px-4 rounded-full font-medium transition-colors ${
                  selected.length > 0
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
          );
        };
        
        return <CustomMultiSelect />;
      }
      case "additionalTopics": {
        const additionalTopicsOptions = ["🔮 Tarot cards", "✋ Palm reading", "💎 Crystals", "💑 Compatibility/partner"];
        
        // Create a custom multi-select component for additionalTopics
        const CustomMultiSelect = () => {
          const { state, updateAnswer, nextStep, prevStep } = useQuiz();
          const questionId = `question_${stepConfig.questionNumber}`;
          const [selected, setSelected] = useState<string[]>(
            Array.isArray(state.answers[questionId]) ? state.answers[questionId] : []
          );
          
          const handleSelect = (option: string) => {
            let updated = [...selected];
            if (updated.includes(option)) {
              updated = updated.filter((o) => o !== option);
            } else {
              updated.push(option);
            }
            setSelected(updated);
            updateAnswer(questionId, updated);
          };
          
          return (
            <div className="space-y-3 text-center">
              <h1 className="text-2xl font-semibold text-gray-900">What additional topics would you like to include in your book?</h1>
              
              <div>
                <p className="text-sm text-gray-600 mt-1 mb-2 font-medium">
                  Select all that apply
                </p>
                {selected.length > 0 && (
                  <p className="text-xs text-green-600 mb-2">
                    You selected: {selected.join(", ")}
                  </p>
                )}
              </div>
              
              <div className="space-y-2 mt-4">
                {additionalTopicsOptions.map((option, index) => (
                  <OptionCard
                    key={index}
                    selected={selected.includes(option)}
                    onClick={() => handleSelect(option)}
                    className="hover:shadow-md transition-shadow cursor-pointer"
                    isMultiSelect={true}
                  >
                    <span className="text-lg font-normal flex items-center gap-2">{option}</span>
                  </OptionCard>
                ))}
              </div>
              
              <button
                onClick={nextStep}
                disabled={selected.length === 0}
                className={`w-full py-3 px-4 rounded-full font-medium transition-colors ${
                  selected.length > 0
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
          );
        };
        
        return <CustomMultiSelect />;
      }
      case "generic": {
        const question = getQuestionByNumber(stepConfig.questionNumber ?? -1);
        const questionNum = stepConfig.questionNumber ?? -1;
        
        // Create direct multi-select implementation for questions 13, 16, and 17
        if ([13, 16, 17].includes(questionNum) && question) {
          // Create a custom multi-select component for these specific questions
          const CustomMultiSelect = () => {
            const { state, updateAnswer, nextStep, prevStep } = useQuiz();
            const questionId = `question_${questionNum}`;
            const [selected, setSelected] = useState<string[]>(
              Array.isArray(state.answers[questionId]) ? state.answers[questionId] : []
            );
            
            const handleSelect = (option: string) => {
              let updated = [...selected];
              if (updated.includes(option)) {
                updated = updated.filter((o) => o !== option);
              } else {
                updated.push(option);
              }
              setSelected(updated);
              updateAnswer(questionId, updated);
            };
            
            return (
              <div className="space-y-3 text-center">
                <h1 className="text-2xl font-semibold text-gray-900">{question.questionText}</h1>
                
                <div>
                  <p className="text-sm text-gray-600 mt-1 mb-2 font-medium">
                    Select all that apply
                  </p>
                  {selected.length > 0 && (
                    <p className="text-xs text-green-600 mb-2">
                      You selected: {selected.join(", ")}
                    </p>
                  )}
                </div>
                
                <div className="space-y-2 mt-4">
                  {question.options.map((option, index) => (
                    <OptionCard
                      key={index}
                      selected={selected.includes(option)}
                      onClick={() => handleSelect(option)}
                      className="hover:shadow-md transition-shadow cursor-pointer"
                      isMultiSelect={true}
                    >
                      <span className="text-lg font-normal flex items-center gap-2">{option}</span>
                    </OptionCard>
                  ))}
                </div>
                
                <button
                  onClick={nextStep}
                  disabled={selected.length === 0}
                  className={`w-full py-3 px-4 rounded-full font-medium transition-colors ${
                    selected.length > 0
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
            );
          };
          
          return <CustomMultiSelect />;
        }
        
        // For all other generic questions, use the standard component
        const isMultiSelectQuestion = [13, 16, 17].includes(questionNum);
        const questionTextModified = question?.questionText;
        
        return (
          <GenericQuestion
            questionNumber={questionNum}
            questionText={questionTextModified || `Question ${questionNum}`}
            options={question?.options || []}
          />
        );
      }
      case "firstName":
        return <NameCollection />
      case "lastName":
        return <LastNameCollection />
      case "giftOrSelf":
        return <GenericQuestion questionNumber={99} questionText="Is this book for yourself or as a gift for someone else?" options={["🧑 For myself", "🎁 As a gift for someone else"]} />
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

  const darkSteps = ["testimonial", "loading", "zodiacResult"];
  const isDarkStep = darkSteps.includes(stepConfig?.type);

  return (
    <QuizLayout
      showBackButton={currentStep > 1 && currentStep <= quizSteps.length}
      className={isDarkStep ? "astro-theme-bg" : "bg-[#f7f7f7]"}
    >
      {renderStep()}
    </QuizLayout>
  )
}

