import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/lib/prisma'

// NextApiRequest does have a 'method' property; this is a type-safe usage.
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email, answers, birthDate, birthPlace, birthTime, firstName, lastName, gender, coverDesign } = req.body
    try {
      const response = await prisma.quizResponse.create({
        data: { email, answers, birthDate, birthPlace, birthTime, firstName, lastName, gender, coverDesign }
      })
      res.status(201).json(response)
    } catch (error) {
      res.status(500).json({ error: 'Failed to save quiz response', details: error instanceof Error ? error.message : error })
    }
  } else {
    res.setHeader('Allow', ['POST'])
    res.status(405).end('Method Not Allowed')
  }
} 