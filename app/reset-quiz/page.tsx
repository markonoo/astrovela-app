"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { clearQuizData } from "@/utils/storage"
import { PageLayout } from "@/components/shared/page-layout"
import { useQuiz } from "@/contexts/quiz-context"

export default function ResetQuizPage() {
  const router = useRouter()
  const { resetQuiz } = useQuiz()

  // Reset quiz data and redirect to the quiz page
  useEffect(() => {
    try {
      // Use the context's resetQuiz function to clear both state and localStorage
      resetQuiz()
      console.log("Quiz data has been reset successfully")
      
      // Small delay before redirect to ensure data is cleared
      const redirectTimer = setTimeout(() => {
        router.push('/')
      }, 1500)
      
      return () => clearTimeout(redirectTimer)
    } catch (error) {
      console.error("Error resetting quiz data:", error)
    }
  }, [router, resetQuiz])

  return (
    <PageLayout
      title="Resetting Quiz"
      description="Clearing your previous quiz data..."
    >
      <div className="flex flex-col items-center justify-center py-12">
        <div className="w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full animate-spin mb-8"></div>
        <h2 className="text-xl font-medium text-gray-700 mb-2">Resetting your quiz data...</h2>
        <p className="text-gray-500">You'll be redirected to the home page in a moment.</p>
      </div>
    </PageLayout>
  )
} 