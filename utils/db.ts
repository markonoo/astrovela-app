
import { PrismaClient } from '@prisma/client'
import type { QuizState } from '@/contexts/quiz-context'

const prisma = new PrismaClient()

export async function saveQuizResponse(quizData: QuizState) {
  return prisma.quizResponse.create({
    data: {
      email: quizData.email || '',
      answers: quizData.answers,
      birthDate: quizData.birthDate,
      birthPlace: quizData.birthPlace || '',
      birthTime: quizData.birthTime || '',
      firstName: quizData.firstName || '',
      lastName: quizData.lastName || '',
      gender: quizData.gender || ''
    }
  })
}
