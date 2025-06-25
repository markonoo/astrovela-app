/**
 * Debug utilities for development
 * These functions help clear stuck states and reset the application
 */

/**
 * Emergency reset function - clears all local storage and reloads the page
 * Use this in browser console if the app gets stuck: debugHelpers.emergencyReset()
 */
export const emergencyReset = () => {
  if (typeof window !== "undefined") {
    console.log("🚨 Emergency reset initiated...")
    
    // Clear all storage
    localStorage.clear()
    sessionStorage.clear()
    
    // Clear any ongoing timers (simplified approach)
    try {
      const highestTimeoutId = Number(setTimeout(() => {}, 0))
      for (let i = 0; i < highestTimeoutId; i++) {
        clearTimeout(i)
      }
    } catch (e) {
      console.log("Timer cleanup completed")
    }
    
    console.log("✅ Storage cleared, reloading page...")
    window.location.reload()
  }
}

/**
 * Clear only quiz-related data
 */
export const clearQuizData = () => {
  if (typeof window !== "undefined") {
    console.log("🧹 Clearing quiz data...")
    localStorage.removeItem('quizData')
    localStorage.removeItem('quizCompleted')
    console.log("✅ Quiz data cleared")
  }
}

/**
 * Check current quiz state
 */
export const debugQuizState = () => {
  if (typeof window !== "undefined") {
    const quizData = localStorage.getItem('quizData')
    const quizCompleted = localStorage.getItem('quizCompleted')
    
    console.log("📊 Current Quiz State:")
    console.log("Quiz Data:", quizData ? JSON.parse(quizData) : "None")
    console.log("Quiz Completed:", quizCompleted)
    console.log("All localStorage keys:", Object.keys(localStorage))
  }
}

// Make these available globally in development
if (typeof window !== "undefined" && process.env.NODE_ENV === "development") {
  (window as any).debugHelpers = {
    emergencyReset,
    clearQuizData,
    debugQuizState
  }
  
  console.log("🛠️ Debug helpers available globally: debugHelpers.emergencyReset(), debugHelpers.clearQuizData(), debugHelpers.debugQuizState()")
} 