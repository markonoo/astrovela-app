import { NextResponse } from "next/server"
import { createClient } from '@supabase/supabase-js'
import { env } from '@/utils/environment'

const supabase = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.NEXT_PUBLIC_SUPABASE_ANON_KEY)

export async function GET() {
  try {
    console.log('🧪 Testing session tracking consistency across all tables...')
    
    const testResults = {
      timestamp: new Date().toISOString(),
      tests: [] as any[],
      summary: {
        totalTests: 0,
        passed: 0,
        failed: 0
      }
    }

    // Test 1: Check QuizResponse table structure
    console.log('📋 Test 1: QuizResponse table structure')
    try {
      const { data: quizColumns, error: quizError } = await supabase
        .from('QuizResponse')
        .select('id, session_id, userId, email')
        .limit(1)

      if (quizError) {
        testResults.tests.push({
          test: 'QuizResponse table structure',
          status: 'FAILED',
          error: quizError.message,
          details: 'Unable to query QuizResponse with session_id and userId columns'
        })
        testResults.summary.failed++
      } else {
        testResults.tests.push({
          test: 'QuizResponse table structure',
          status: 'PASSED',
          details: 'QuizResponse table has session_id and userId columns'
        })
        testResults.summary.passed++
      }
    } catch (error) {
      testResults.tests.push({
        test: 'QuizResponse table structure',
        status: 'FAILED',
        error: error instanceof Error ? error.message : 'Unknown error',
        details: 'Exception during QuizResponse table test'
      })
      testResults.summary.failed++
    }
    testResults.summary.totalTests++

    // Test 2: Check ChartImage table structure
    console.log('📊 Test 2: ChartImage table structure')
    try {
      const { data: chartColumns, error: chartError } = await supabase
        .from('ChartImage')
        .select('id, session_id, userId, email')
        .limit(1)

      if (chartError) {
        testResults.tests.push({
          test: 'ChartImage table structure',
          status: 'FAILED',
          error: chartError.message,
          details: 'Unable to query ChartImage with session_id and userId columns'
        })
        testResults.summary.failed++
      } else {
        testResults.tests.push({
          test: 'ChartImage table structure',
          status: 'PASSED',
          details: 'ChartImage table has session_id and userId columns'
        })
        testResults.summary.passed++
      }
    } catch (error) {
      testResults.tests.push({
        test: 'ChartImage table structure',
        status: 'FAILED',
        error: error instanceof Error ? error.message : 'Unknown error',
        details: 'Exception during ChartImage table test'
      })
      testResults.summary.failed++
    }
    testResults.summary.totalTests++

    // Test 3: Check NatalChartInterpretation table structure
    console.log('🌟 Test 3: NatalChartInterpretation table structure')
    try {
      const { data: interpColumns, error: interpError } = await supabase
        .from('NatalChartInterpretation')
        .select('id, session_id, userId')
        .limit(1)

      if (interpError) {
        testResults.tests.push({
          test: 'NatalChartInterpretation table structure',
          status: 'FAILED',
          error: interpError.message,
          details: 'Unable to query NatalChartInterpretation with session_id and userId columns'
        })
        testResults.summary.failed++
      } else {
        testResults.tests.push({
          test: 'NatalChartInterpretation table structure',
          status: 'PASSED',
          details: 'NatalChartInterpretation table has session_id and userId columns'
        })
        testResults.summary.passed++
      }
    } catch (error) {
      testResults.tests.push({
        test: 'NatalChartInterpretation table structure',
        status: 'FAILED',
        error: error instanceof Error ? error.message : 'Unknown error',
        details: 'Exception during NatalChartInterpretation table test'
      })
      testResults.summary.failed++
    }
    testResults.summary.totalTests++

    // Test 4: Create test session data and verify consistency
    console.log('🔗 Test 4: Session data consistency')
    const testSessionId = `test_session_${Date.now()}`
    const testEmail = 'session-test@example.com'
    
    try {
      // Insert test QuizResponse
      const { data: quizInsert, error: quizInsertError } = await supabase
        .from('QuizResponse')
        .insert({
          email: testEmail,
          answers: { test: 'session tracking' },
          birthDate: { day: '1', month: '1', year: '2000' },
          firstName: 'Session',
          lastName: 'Test',
          session_id: testSessionId,
          userId: null
        })
        .select('id, session_id')

      if (quizInsertError) throw new Error(`QuizResponse insert failed: ${quizInsertError.message}`)

      // Insert test ChartImage
      const { data: chartInsert, error: chartInsertError } = await supabase
        .from('ChartImage')
        .insert({
          imageUrl: 'https://example.com/test-chart.svg',
          birthData: { day: 1, month: 1, year: 2000 },
          chartType: 'natal',
          email: testEmail,
          session_id: testSessionId,
          userId: null
        })
        .select('id, session_id')

      if (chartInsertError) throw new Error(`ChartImage insert failed: ${chartInsertError.message}`)

      // Insert test NatalChartInterpretation
      const { data: interpInsert, error: interpInsertError } = await supabase
        .from('NatalChartInterpretation')
        .insert({
          sun_sign: 'Test',
          moon_sign: 'Test',
          session_id: testSessionId,
          userId: null
        })
        .select('id, session_id')

      if (interpInsertError) throw new Error(`NatalChartInterpretation insert failed: ${interpInsertError.message}`)

      // Verify all records have the same session_id
      const allHaveSameSession = 
        quizInsert?.[0]?.session_id === testSessionId &&
        chartInsert?.[0]?.session_id === testSessionId &&
        interpInsert?.[0]?.session_id === testSessionId

      if (allHaveSameSession) {
        testResults.tests.push({
          test: 'Session data consistency',
          status: 'PASSED',
          details: `All test records created with session_id: ${testSessionId}`,
          data: {
            quizResponseId: quizInsert?.[0]?.id,
            chartImageId: chartInsert?.[0]?.id,
            interpretationId: interpInsert?.[0]?.id
          }
        })
        testResults.summary.passed++
      } else {
        testResults.tests.push({
          test: 'Session data consistency',
          status: 'FAILED',
          details: 'Not all records have the same session_id',
          data: {
            quizSession: quizInsert?.[0]?.session_id,
            chartSession: chartInsert?.[0]?.session_id,
            interpSession: interpInsert?.[0]?.session_id
          }
        })
        testResults.summary.failed++
      }

      // Clean up test data
      await supabase.from('QuizResponse').delete().eq('session_id', testSessionId)
      await supabase.from('ChartImage').delete().eq('session_id', testSessionId)
      await supabase.from('NatalChartInterpretation').delete().eq('session_id', testSessionId)

    } catch (error) {
      testResults.tests.push({
        test: 'Session data consistency',
        status: 'FAILED',
        error: error instanceof Error ? error.message : 'Unknown error',
        details: 'Exception during session consistency test'
      })
      testResults.summary.failed++

      // Attempt cleanup even if test failed
      try {
        await supabase.from('QuizResponse').delete().eq('session_id', testSessionId)
        await supabase.from('ChartImage').delete().eq('session_id', testSessionId)
        await supabase.from('NatalChartInterpretation').delete().eq('session_id', testSessionId)
      } catch (cleanupError) {
        console.error('Failed to cleanup test data:', cleanupError)
      }
    }
    testResults.summary.totalTests++

    // Test 5: Query existing session data for analysis
    console.log('📈 Test 5: Existing session data analysis')
    try {
      // Get sessions with data across multiple tables
      const { data: sessionAnalysis, error: analysisError } = await supabase
        .from('QuizResponse')
        .select('session_id')
        .not('session_id', 'is', null)

      if (analysisError) throw new Error(`Session analysis failed: ${analysisError.message}`)

      const sessionIds = [...new Set(sessionAnalysis?.map(r => r.session_id) || [])]
      
      testResults.tests.push({
        test: 'Existing session data analysis',
        status: 'PASSED',
        details: `Found ${sessionIds.length} unique sessions in QuizResponse table`,
        data: {
          uniqueSessions: sessionIds.length,
          sampleSessions: sessionIds.slice(0, 3) // Show first 3 as sample
        }
      })
      testResults.summary.passed++

    } catch (error) {
      testResults.tests.push({
        test: 'Existing session data analysis',
        status: 'FAILED',
        error: error instanceof Error ? error.message : 'Unknown error',
        details: 'Exception during session data analysis'
      })
      testResults.summary.failed++
    }
    testResults.summary.totalTests++

    // Final summary
    const successRate = (testResults.summary.passed / testResults.summary.totalTests) * 100
    console.log(`🏁 Session tracking tests completed: ${testResults.summary.passed}/${testResults.summary.totalTests} passed (${successRate.toFixed(1)}%)`)

    return NextResponse.json({
      success: testResults.summary.failed === 0,
      message: `Session tracking test completed: ${testResults.summary.passed}/${testResults.summary.totalTests} passed`,
      successRate: `${successRate.toFixed(1)}%`,
      ...testResults
    })

  } catch (error) {
    console.error("❌ Fatal error during session tracking test:", error)
    return NextResponse.json(
      { 
        success: false,
        error: "Failed to run session tracking tests", 
        details: error instanceof Error ? error.message : error 
      },
      { status: 500 }
    )
  }
} 