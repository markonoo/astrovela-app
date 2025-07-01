import { QuizProvider } from "@/contexts/quiz-context"
import { QuizController } from "@/components/quiz/quiz-controller"
import { ErrorBoundary } from "@/components/ErrorBoundary"

export default function QuizPage() {
  return (
    <QuizProvider>
      <ErrorBoundary>
        <QuizController />
      </ErrorBoundary>
    </QuizProvider>
  )
}

