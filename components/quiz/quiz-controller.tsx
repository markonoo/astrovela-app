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
function LoadingAnimation({ message, isStep12 = false }: { message: string; isStep12?: boolean }) {
  const [progress, setProgress] = useState(0);
  
  // Animation to gradually increase the progress
  useEffect(() => {
    // Reset progress when component mounts or message changes
    setProgress(0);
    
    // For step 12 (API call), make progress slower to match ~6 second duration
    // For other steps, use faster timing for ~3 second duration
    const duration = isStep12 ? 6000 : 3000; // Total duration in ms
    const interval = 50; // Update every 50ms for smooth animation
    const increment = (100 / duration) * interval; // Calculate increment per interval
    
    const timer = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + increment;
        if (newProgress >= 100) {
          clearInterval(timer);
          return 100;
        }
        return newProgress;
      });
    }, interval);
    
    return () => clearInterval(timer);
  }, [isStep12, message]); // Re-run when message changes
  
  return (
    <div className="flex flex-col items-center justify-center min-h-[200px] bg-transparent text-yellow-100 rounded-xl p-4 md:p-6 mx-auto max-w-xl">
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
            style={{ 
              transition: 'stroke-dashoffset 0.1s ease-out',
              willChange: 'stroke-dashoffset'
            }}
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
            {Math.round(progress)}%
          </text>
        </svg>
      </div>
      <div className="text-lg font-medium text-yellow-200 text-center">{message}</div>
    </div>
  );
}

// Create stable components outside of QuizController
function MainGoalsMultiSelect({ stepConfig }: { stepConfig: any }) {
  const { state, updateAnswer, nextStep, prevStep } = useQuiz();
  const questionId = `question_${stepConfig.questionNumber}`;
  const mainGoalsOptions = ["🏆 Self-growth", "❤️ Love", "💼 Career", "🧘‍♂️ Health", "✨ Other"];
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
      
      <div className="space-y-2 mt-3">
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
}

function MotivationMultiSelect({ stepConfig }: { stepConfig: any }) {
  const { state, updateAnswer, nextStep, prevStep } = useQuiz();
  const questionId = `question_${stepConfig.questionNumber}`;
  const motivationOptions = ["🏆 Achievement", "🤝 Connection", "🎨 Creativity", "🫶 Helping others", "📚 Learning", "🔮 Other"];
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
      <h1 className="text-2xl font-semibold text-gray-900">What motivates you most in life?</h1>
      
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
      
      <div className="space-y-2 mt-3">
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
}

function AdditionalTopicsMultiSelect({ stepConfig }: { stepConfig: any }) {
  const { state, updateAnswer, nextStep, prevStep } = useQuiz();
  const questionId = `question_${stepConfig.questionNumber}`;
  const additionalTopicsOptions = ["🔮 Tarot cards", "✋ Palm reading", "💎 Crystals", "💑 Compatibility/partner"];
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
      
      <div className="space-y-2 mt-3">
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
}

function GenericMultiSelect({ stepConfig, question }: { stepConfig: any; question: any }) {
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
      
      <div className="space-y-2 mt-3">
        {question.options.map((option: string, index: number) => (
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
      { type: "agreeWorry", questionNumber: 14 },
      { type: "optimism", questionNumber: 15 },
      { type: "relationshipQuestion", questionNumber: 16 },
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
  const [mounted, setMounted] = useState(false)

  // ALL HOOKS MUST BE CALLED FIRST - BEFORE ANY CONDITIONAL RETURNS
  
  // Track previous step to detect transitions
  const prevStepRef = useRef<number>(currentStep)
  useEffect(() => {
    prevStepRef.current = currentStep
  }, [currentStep])

  // Set mounted to true after hydration
  useEffect(() => {
    setMounted(true)
  }, [])

  // Robust race condition prevention for API calls
  const apiCallState = useRef({
    isExecuting: false,
    lastCallTime: 0,
    requestId: 0,
    abortController: null as AbortController | null
  })

  // Track step transitions to reset API state
  const previousStep = useRef(currentStep)
  
  useEffect(() => {
    // Reset API state when moving away from step 12
    if (previousStep.current === 12 && currentStep !== 12) {
      console.log('🔄 Resetting API state when leaving step 12')
      if (apiCallState.current.abortController) {
        apiCallState.current.abortController.abort()
      }
      apiCallState.current = {
        isExecuting: false,
        lastCallTime: 0,
        requestId: 0,
        abortController: null
      }
    }
    previousStep.current = currentStep
  }, [currentStep])

  // Race-condition protected natal chart fetching
  useEffect(() => {
    // Only proceed if we're on step 12
    if (currentStep !== 12) return

    // Check if we have all required data
    const hasAllData = state.birthDate.year && 
                      state.birthDate.month && 
                      state.birthDate.day &&
                      state.birthTime && 
                      state.birthPlace

    if (!hasAllData || state.customChartUrl || state.isLoadingChart) {
      if (currentStep === 12 && !hasAllData) {
        console.log('❌ Step 12 but missing required data:', {
          hasBirthDate: !!(state.birthDate.year && state.birthDate.month && state.birthDate.day),
          hasTime: !!state.birthTime,
          hasPlace: !!state.birthPlace,
          hasCustomChart: !!state.customChartUrl,
          isCurrentlyLoading: !!state.isLoadingChart
        })
      }
      return
    }

    // Prevent multiple simultaneous calls
    if (apiCallState.current.isExecuting) {
      console.log('⚠️ API call already in progress, skipping duplicate request')
      return
    }

    // Rate limiting check
    const now = Date.now()
    const timeSinceLastCall = now - apiCallState.current.lastCallTime
    const minInterval = 2000 // 2 seconds minimum between calls

    if (timeSinceLastCall < minInterval) {
      console.log(`⏳ Rate limiting: ${minInterval - timeSinceLastCall}ms remaining`)
      return
    }

    // Execute the API call with proper protection
    const executeApiCall = async () => {
      const requestId = ++apiCallState.current.requestId
      apiCallState.current.isExecuting = true
      apiCallState.current.lastCallTime = now
      apiCallState.current.abortController = new AbortController()

      console.log(`🚀 Starting API call #${requestId}`)
      console.log('Birth data:', {
        date: `${state.birthDate.year}-${state.birthDate.month}-${state.birthDate.day}`,
        time: state.birthTime,
        place: state.birthPlace
      })

      try {
        await fetchNatalChart()
        
        // Check if this is still the current request (no newer requests)
        if (requestId === apiCallState.current.requestId) {
          console.log(`✅ API call #${requestId} completed successfully`)
        } else {
          console.log(`🔄 API call #${requestId} completed but superseded by newer request`)
        }
      } catch (error) {
        // Only log error if this is still the current request
        if (requestId === apiCallState.current.requestId) {
          console.error(`❌ API call #${requestId} failed:`, error)
        }
      } finally {
        // Only reset state if this is still the current request
        if (requestId === apiCallState.current.requestId) {
          apiCallState.current.isExecuting = false
          apiCallState.current.abortController = null
        }
      }
    }

    executeApiCall()

  }, [currentStep, state.birthDate.year, state.birthDate.month, state.birthDate.day, state.birthTime, state.birthPlace, state.customChartUrl, state.isLoadingChart, fetchNatalChart])

  // Get stepConfig first (needed for useEffect dependency)
  const stepConfig = quizSteps[currentStep - 1] // currentStep is 1-based
  const currentPart = getCurrentPart(currentStep)

  // Auto-advance for loading steps - FIXED: Always return cleanup function
  useEffect(() => {
    let timer: NodeJS.Timeout | null = null
    
    if (stepConfig && stepConfig.type === "loading") {
      // For step 12 (natal chart loading), wait longer and check if chart is ready
      if (currentStep === 12) {
        // If chart is already loaded or loading is complete, advance quickly
        if (state.customChartUrl || (!state.isLoadingChart && state.natalChart)) {
          timer = setTimeout(() => {
            nextStep()
          }, 1000)
        } else {
          // Give more time for API call to complete
          timer = setTimeout(() => {
            nextStep()
          }, 6000)
        }
      } else {
        // For other loading steps, use normal timing
        timer = setTimeout(() => {
          nextStep()
        }, 3000)
      }
    }
    
    // Always return cleanup function to maintain consistent hook behavior
    return () => {
      if (timer) {
        clearTimeout(timer)
      }
    }
  }, [stepConfig, nextStep, currentStep, state.customChartUrl, state.isLoadingChart, state.natalChart])

  // NOW SAFE TO HAVE CONDITIONAL RETURNS AFTER ALL HOOKS

  // Prevent hydration mismatch by only checking localStorage after mount
  if (!mounted) {
    return <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-yellow-300"></div>
    </div>
  }

  if (quizCompleted || isQuizCompleted()) {
    return <PersonalizedLanding />
  }

  // Count only question steps for progress bar
  const totalQuestionSteps = quizSteps.filter(s => isQuestionStep(s.type)).length
  const currentQuestionStep = quizSteps.slice(0, currentStep).filter(s => isQuestionStep(s.type)).length

  // Map step types to components
  const renderStep = () => {
    // Always return a React element, never null, to avoid hook order issues
    if (!stepConfig) return <div>Loading...</div>;
    switch (stepConfig.type) {
      case "gender":
        return <GenderSelection />
      case "astrologyLevel":
        return <AstrologyLevel />
      case "intro":
        // Greeting/intro step inspired by competitor screenshot
        return (
          <div className="flex flex-col items-center justify-center min-h-[350px] md:min-h-[450px] bg-astro-dark text-white rounded-xl p-4 md:p-8 shadow-lg mx-auto max-w-2xl">
            <h2 className="text-xl md:text-2xl font-bold mb-6 text-yellow-300 text-center">🌟 Welcome to Astrovela</h2>
            <div className="bg-[#041c3c] rounded-lg p-4 md:p-6 mb-6 w-full">
              <h3 className="text-base md:text-lg font-semibold mb-4 text-yellow-200 text-center">Discover your unique path to love, purpose, and self-growth.</h3>
              <p className="text-sm md:text-base mb-4 text-center text-yellow-100">Answer a few questions and unlock insights written in your stars:</p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-yellow-300 text-lg flex-shrink-0 mt-0.5">✨</span>
                  <span className="text-sm md:text-base text-yellow-100 leading-relaxed">Your unique strengths and hidden talents</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-yellow-300 text-lg flex-shrink-0 mt-0.5">✨</span>
                  <span className="text-sm md:text-base text-yellow-100 leading-relaxed">How to create happiness and success</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-yellow-300 text-lg flex-shrink-0 mt-0.5">✨</span>
                  <span className="text-sm md:text-base text-yellow-100 leading-relaxed">Your true life purpose</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-yellow-300 text-lg flex-shrink-0 mt-0.5">✨</span>
                  <span className="text-sm md:text-base text-yellow-100 leading-relaxed">Your ideal partner and compatibility</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-yellow-300 text-lg flex-shrink-0 mt-0.5">✨</span>
                  <span className="text-sm md:text-base text-yellow-100 leading-relaxed">Major life challenges and opportunities</span>
                </div>
              </div>
            </div>
            <button
              onClick={nextStep}
              className="mt-4 px-6 md:px-8 py-3 bg-yellow-300 rounded-full text-gray-900 font-medium hover:bg-yellow-400 transition-colors shadow text-sm md:text-base"
            >
              Let's go!
            </button>
          </div>
        )
      case "mainGoals": 
        return <MainGoalsMultiSelect stepConfig={stepConfig} />
      case "relationshipStatus":
        return <RelationshipStatusQuestion />
      case "loading": {
        return <LoadingAnimation message={stepConfig.message || ""} isStep12={currentStep === 12} />;
      }
      case "testimonial":
        return (
          <div className="flex flex-col items-center justify-center min-h-[30vh] py-3 text-yellow-100">
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
            <div className="text-base text-yellow-200 mb-4">Astrovela Customer</div>
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
      case "motivation": 
        return <MotivationMultiSelect stepConfig={stepConfig} />
      case "agreeWorry": {
        const question = getQuestionByNumber(stepConfig.questionNumber || 14);
        return <GenericQuestion 
          questionNumber={stepConfig.questionNumber || 14} 
          questionText={question?.questionText || "Question about stress and anxiety"} 
          options={question?.options || []} 
        />
      }
      case "optimism": {
        const question = getQuestionByNumber(stepConfig.questionNumber || 4);
        return <GenericQuestion 
          questionNumber={stepConfig.questionNumber || 4} 
          questionText={question?.questionText || "Question about optimism"} 
          options={question?.options || []} 
        />
      }
      case "relationshipQuestion": {
        const question = getQuestionByNumber(stepConfig.questionNumber || 16);
        return <GenericQuestion 
          questionNumber={stepConfig.questionNumber || 16} 
          questionText={question?.questionText || "Question about relationships"} 
          options={question?.options || []} 
        />
      }
      case "additionalTopics":
        return <AdditionalTopicsMultiSelect stepConfig={stepConfig} />
      case "generic": {
        const question = getQuestionByNumber(stepConfig.questionNumber ?? -1);
        const questionNum = stepConfig.questionNumber ?? -1;
        
        // Create direct multi-select implementation for questions 13, 16, and 17
        if ([13, 16, 17].includes(questionNum) && question) {
          return <GenericMultiSelect stepConfig={stepConfig} question={question} />
        }
        
        // For all other generic questions, use the standard component
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

