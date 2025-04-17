import type { QuizState } from "@/contexts/quiz-context"

// Keys for storage
const QUIZ_DATA_KEY = "astrovela_quiz_data"
const QUIZ_COMPLETED_KEY = "astrovela_quiz_completed"

/**
 * Save quiz data to local storage
 */
export function saveQuizData(data: QuizState): void {
  try {
    localStorage.setItem(QUIZ_DATA_KEY, JSON.stringify(data))
    
    // Only set quiz as completed if the quizCompleted flag in the data is true
    if (data.quizCompleted) {
      localStorage.setItem(QUIZ_COMPLETED_KEY, "true")
    }
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
    // Check both the completion flag and the data
    const completedFlag = localStorage.getItem(QUIZ_COMPLETED_KEY) === "true"
    
    // For extra safety, also check the quiz data
    if (completedFlag) {
      const quizData = getQuizData()
      // Only return true if both the flag and the quizCompleted property in the data are true
      return quizData ? quizData.quizCompleted : completedFlag
    }
    
    return false
  } catch (error) {
    return false
  }
}

/**
 * Clear quiz data from storage
 */
export function clearQuizData(): void {
  try {
    // Clear specific quiz keys
    localStorage.removeItem(QUIZ_DATA_KEY)
    localStorage.removeItem(QUIZ_COMPLETED_KEY)
    
    // Clear all localStorage items with astrovela prefix
    Object.keys(localStorage).forEach(key => {
      if (key.startsWith('astrovela')) {
        localStorage.removeItem(key)
      }
    })
    
    // Clear all sessionStorage items with astrovela prefix
    if (typeof sessionStorage !== 'undefined') {
      Object.keys(sessionStorage).forEach(key => {
        if (key.startsWith('astrovela')) {
          sessionStorage.removeItem(key)
        }
      })
    }
    
    // Clear cookies with astrovela prefix
    document.cookie.split(';').forEach(cookie => {
      const cookieName = cookie.split('=')[0].trim()
      if (cookieName.startsWith('astrovela')) {
        document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`
      }
    })
    
    console.log('All quiz data completely cleared from browser storage')
  } catch (error) {
    console.error("Failed to clear quiz data:", error)
  }
}

