import { NextResponse } from "next/server"
import { migrateStorageFiles, updateChartImageUrls, analyzeSessionStorage } from '@/utils/storage-migration'

export async function POST(request: Request) {
  try {
    const { sessionId, userId, action } = await request.json()
    
    if (!sessionId) {
      return NextResponse.json({ error: 'Missing sessionId' }, { status: 400 })
    }
    
    console.log('🧪 Storage Test API:', { sessionId, userId, action })
    
    if (action === 'analyze') {
      // Analyze storage without making changes
      const analysis = await analyzeSessionStorage(sessionId)
      return NextResponse.json({ 
        success: true, 
        action: 'analyze',
        analysis 
      })
    }
    
    if (!userId) {
      return NextResponse.json({ error: 'Missing userId for migration actions' }, { status: 400 })
    }
    
    if (action === 'migrate-files') {
      // Test file migration only
      const migrationResult = await migrateStorageFiles(sessionId, userId)
      return NextResponse.json({ 
        success: migrationResult.errors.length === 0,
        action: 'migrate-files',
        result: migrationResult
      })
    }
    
    if (action === 'update-urls') {
      // Test URL updates only
      const urlResult = await updateChartImageUrls(sessionId, userId)
      return NextResponse.json({ 
        success: urlResult.errors.length === 0,
        action: 'update-urls',
        result: urlResult
      })
    }
    
    if (action === 'full-migration') {
      // Test complete storage migration
      const migrationResult = await migrateStorageFiles(sessionId, userId)
      const urlResult = await updateChartImageUrls(sessionId, userId)
      
      const allErrors = [...migrationResult.errors, ...urlResult.errors]
      
      return NextResponse.json({ 
        success: allErrors.length === 0,
        action: 'full-migration',
        migration: migrationResult,
        urlUpdate: urlResult,
        summary: {
          filesFound: migrationResult.filesFound,
          filesMoved: migrationResult.filesMoved,
          urlsUpdated: urlResult.updated,
          totalErrors: allErrors.length,
          errors: allErrors
        }
      })
    }
    
    return NextResponse.json({ 
      error: 'Invalid action. Use: analyze, migrate-files, update-urls, or full-migration' 
    }, { status: 400 })
    
  } catch (error) {
    console.error("❌ Storage Test API Error:", error)
    return NextResponse.json(
      { 
        success: false,
        error: "Storage migration test failed", 
        details: error instanceof Error ? error.message : error 
      },
      { status: 500 }
    )
  }
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const sessionId = searchParams.get('sessionId')
    
    if (!sessionId) {
      return NextResponse.json({ error: 'Missing sessionId parameter' }, { status: 400 })
    }
    
    console.log('🔍 Storage Analysis API:', sessionId)
    
    const analysis = await analyzeSessionStorage(sessionId)
    
    return NextResponse.json({ 
      success: true, 
      analysis 
    })
    
  } catch (error) {
    console.error("❌ Storage Analysis API Error:", error)
    return NextResponse.json(
      { 
        success: false,
        error: "Storage analysis failed", 
        details: error instanceof Error ? error.message : error 
      },
      { status: 500 }
    )
  }
} 