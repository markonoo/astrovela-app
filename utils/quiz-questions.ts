// This file contains the questions from the CSV file

export interface QuizQuestion {
  questionNumber: number
  questionText: string
  options: string[]
  type: "multiple-choice" | "text-input" | "date-picker"
}

export const quizQuestions: QuizQuestion[] = [
  {
    questionNumber: 5,
    questionText: "What's your relationship status?",
    options: ["Single", "In a relationship", "Married", "It's complicated", "Divorced", "Widowed"],
    type: "multiple-choice",
  },
  {
    questionNumber: 6,
    questionText: "What are you looking for in your love life?",
    options: [
      "Finding a soulmate",
      "Improving current relationship",
      "Understanding past relationships",
      "Taking a break from relationships",
      "Just curious",
    ],
    type: "multiple-choice",
  },
  {
    questionNumber: 11,
    questionText: "What's your biggest challenge in life right now?",
    options: [
      "Career & finances",
      "Love & relationships",
      "Family issues",
      "Health concerns",
      "Personal growth",
      "Finding purpose",
    ],
    type: "multiple-choice",
  },
  {
    questionNumber: 12,
    questionText: "Which area would you like to improve most?",
    options: [
      "Self-confidence",
      "Communication skills",
      "Work-life balance",
      "Financial stability",
      "Emotional well-being",
      "Physical health",
    ],
    type: "multiple-choice",
  },
  {
    questionNumber: 13,
    questionText: "How would you describe your sleep quality?",
    options: [
      "Excellent - I sleep deeply and wake refreshed",
      "Good - I usually sleep well",
      "Average - It varies night to night",
      "Poor - I often have trouble sleeping",
      "Terrible - I struggle with insomnia",
    ],
    type: "multiple-choice",
  },
  {
    questionNumber: 14,
    questionText: "How often do you feel stressed or anxious?",
    options: ["Rarely or never", "Occasionally", "Several times a week", "Almost daily", "Constantly"],
    type: "multiple-choice",
  },
  {
    questionNumber: 15,
    questionText: "What's your approach to making important decisions?",
    options: [
      "I follow my intuition",
      "I analyze all options logically",
      "I seek advice from others",
      "I consider emotional impact",
      "I look for signs or guidance",
    ],
    type: "multiple-choice",
  },
  {
    questionNumber: 16,
    questionText: "How would you describe your social life?",
    options: [
      "Very active - large social circle",
      "Balanced - close friends and occasional gatherings",
      "Selective - few close relationships",
      "Minimal - prefer my own company",
      "Seeking more connection",
    ],
    type: "multiple-choice",
  },
  {
    questionNumber: 17,
    questionText: "What's your biggest strength?",
    options: [
      "Creativity and imagination",
      "Analytical thinking",
      "Empathy and understanding",
      "Determination and resilience",
      "Adaptability and flexibility",
      "Leadership and inspiration",
    ],
    type: "multiple-choice",
  },
  {
    questionNumber: 18,
    questionText: "What do you value most in life?",
    options: [
      "Family and relationships",
      "Personal growth and learning",
      "Career success and achievement",
      "Freedom and independence",
      "Health and wellbeing",
      "Spiritual fulfillment",
    ],
    type: "multiple-choice",
  },
  {
    questionNumber: 19,
    questionText: "What's your last name or nickname?",
    options: [],
    type: "text-input",
  },
  {
    questionNumber: 20,
    questionText: "What's your relationship with money?",
    options: [
      "I'm a careful saver",
      "I enjoy spending on experiences",
      "I invest for the future",
      "I struggle with financial management",
      "I'm working on improving my finances",
      "Money isn't a priority for me",
    ],
    type: "multiple-choice",
  },
  {
    questionNumber: 21,
    questionText: "How would you describe your career satisfaction?",
    options: [
      "Very satisfied - I love what I do",
      "Satisfied - It's fulfilling overall",
      "Neutral - It's just a job",
      "Unsatisfied - Seeking something better",
      "Very unsatisfied - Need a major change",
      "Not applicable (student, retired, etc.)",
    ],
    type: "multiple-choice",
  },
  {
    questionNumber: 22,
    questionText: "What's your biggest career goal?",
    options: [
      "Advancement and promotion",
      "Financial success",
      "Work-life balance",
      "Making a difference",
      "Starting my own business",
      "Finding my true calling",
      "Stability and security",
    ],
    type: "multiple-choice",
  },
  {
    questionNumber: 23,
    questionText: "How important is spirituality in your life?",
    options: [
      "Extremely important - central to my identity",
      "Important - I practice regularly",
      "Somewhat important - I'm curious but not committed",
      "Not very important - I'm more practical/scientific",
      "Not important at all",
    ],
    type: "multiple-choice",
  },
  {
    questionNumber: 24,
    questionText: "Do you believe in fate or that we create our own destiny?",
    options: [
      "Completely fate - everything is predetermined",
      "Mostly fate with some free will",
      "Equal balance of fate and free will",
      "Mostly free will with some fate",
      "Completely free will - we create our own path",
    ],
    type: "multiple-choice",
  },
  {
    questionNumber: 25,
    questionText: "How do you feel about your life purpose?",
    options: [
      "I know my purpose and am living it",
      "I have some idea but still exploring",
      "I'm actively searching for my purpose",
      "I'm confused about my purpose",
      "I don't believe in a specific life purpose",
    ],
    type: "multiple-choice",
  },
  {
    questionNumber: 26,
    questionText: "What's your relationship with your family like?",
    options: [
      "Very close and supportive",
      "Generally positive with some challenges",
      "Complicated but important to me",
      "Distant or estranged",
      "I consider friends as my family",
    ],
    type: "multiple-choice",
  },
  {
    questionNumber: 27,
    questionText: "How do you handle conflict in relationships?",
    options: [
      "I address issues directly and calmly",
      "I try to find compromise and middle ground",
      "I sometimes avoid confrontation",
      "I tend to accommodate others' needs first",
      "I can be defensive or emotional",
    ],
    type: "multiple-choice",
  },
  {
    questionNumber: 28,
    questionText: "What quality do you value most in relationships?",
    options: [
      "Trust and honesty",
      "Communication",
      "Emotional support",
      "Shared values and goals",
      "Independence and space",
      "Passion and excitement",
    ],
    type: "multiple-choice",
  },
  {
    questionNumber: 29,
    questionText: "How do you recharge when feeling drained?",
    options: [
      "Alone time and solitude",
      "Socializing with friends",
      "Physical activity or exercise",
      "Creative pursuits",
      "Nature and outdoors",
      "Rest and relaxation",
    ],
    type: "multiple-choice",
  },
  {
    questionNumber: 30,
    questionText: "What's your biggest fear or worry?",
    options: [
      "Failure or inadequacy",
      "Rejection or abandonment",
      "Uncertainty about the future",
      "Loss of loved ones",
      "Not living authentically",
      "Financial insecurity",
    ],
    type: "multiple-choice",
  },
  {
    questionNumber: 31,
    questionText: "What brings you the most joy?",
    options: [
      "Meaningful relationships",
      "Achieving goals",
      "Learning and growth",
      "Creative expression",
      "Helping others",
      "Simple pleasures and experiences",
    ],
    type: "multiple-choice",
  },
  {
    questionNumber: 32,
    questionText: "How would you like to be remembered?",
    options: [
      "For my kindness and compassion",
      "For my achievements and success",
      "For my wisdom and insight",
      "For my creativity and originality",
      "For my courage and strength",
      "For the difference I made in others' lives",
    ],
    type: "multiple-choice",
  },
  // Question 34 is now handled by the BookCoverConfirmation component
  // Question 35 is now the email collection (moved from 34)
  {
    questionNumber: 35,
    questionText: "What's your email address?",
    options: [],
    type: "text-input",
  },
]

// Helper function to get a question by number
export function getQuestionByNumber(number: number): QuizQuestion | undefined {
  return quizQuestions.find((q) => q.questionNumber === number)
}

// Helper function to check if a question number exists in our questions
export function hasQuestion(number: number): boolean {
  return quizQuestions.some((q) => q.questionNumber === number)
}

