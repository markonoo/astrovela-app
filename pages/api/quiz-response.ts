import type { NextApiRequest, NextApiResponse } from 'next'
import { createClient } from '@supabase/supabase-js'
import { env } from '@/utils/environment'

const supabase = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.NEXT_PUBLIC_SUPABASE_ANON_KEY)

// NextApiRequest does have a 'method' property; this is a type-safe usage.
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email, answers, birthDate, birthPlace, birthTime, firstName, lastName, gender, coverDesign } = req.body
    
    console.log('📝 Quiz Response Submission to Supabase:', {
      email,
      firstName,
      lastName,
      birthPlace,
      hasAnswers: !!answers,
      coverDesign
    })
    
    try {
      const { data, error } = await supabase
        .from('QuizResponse')
        .insert({
          email,
          answers,
          birthDate,
          birthPlace,
          birthTime,
          firstName,
          lastName,
          gender,
          coverDesign
        })
        .select()
      
      if (error) {
        console.error('❌ Supabase quiz response error:', error)
        throw error
      }
      
      console.log('✅ Quiz response stored successfully in Supabase:', data)
      res.status(201).json(data[0])
    } catch (error) {
      console.error('❌ Failed to save quiz response:', error)
      res.status(500).json({ 
        error: 'Failed to save quiz response', 
        details: error instanceof Error ? error.message : error 
      })
    }
  } else {
    res.setHeader('Allow', ['POST'])
    res.status(405).end('Method Not Allowed')
  }
} 