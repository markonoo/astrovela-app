import { QuizProvider } from "@/contexts/quiz-context"
import { QuizController } from "@/components/quiz/quiz-controller"

export default function QuizPage() {
  return (
    <QuizProvider>
      <QuizController />
    </QuizProvider>
  )
}

