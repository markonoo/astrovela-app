import type { QuizState } from "@/contexts/quiz-context"

// Keys for storage
const QUIZ_DATA_KEY = "nordastro_quiz_data"
const QUIZ_COMPLETED_KEY = "nordastro_quiz_completed"

/**
 * Save quiz data to local storage
 */
export function saveQuizData(data: QuizState): void {
  try {
    localStorage.setItem(QUIZ_DATA_KEY, JSON.stringify(data))
    localStorage.setItem(QUIZ_COMPLETED_KEY, "true")
  } catch (error) {
    console.error("Failed to save quiz data:", error)
  }
}

/**
 * Retrieve quiz data from local storage
 */
export function getQuizData(): QuizState | null {
  try {
    const data = localStorage.getItem(QUIZ_DATA_KEY)
    return data ? JSON.parse(data) : null
  } catch (error) {
    console.error("Failed to retrieve quiz data:", error)
    return null
  }
}

/**
 * Check if quiz has been completed
 */
export function isQuizCompleted(): boolean {
  try {
    return localStorage.getItem(QUIZ_COMPLETED_KEY) === "true"
  } catch (error) {
    return false
  }
}

/**
 * Clear quiz data from storage
 */
export function clearQuizData(): void {
  try {
    localStorage.removeItem(QUIZ_DATA_KEY)
    localStorage.removeItem(QUIZ_COMPLETED_KEY)
  } catch (error) {
    console.error("Failed to clear quiz data:", error)
  }
}

