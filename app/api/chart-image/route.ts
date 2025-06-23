import { NextResponse, NextRequest } from 'next/server'
import { supabase } from '@/lib/supabaseClient'
import prisma from '@/lib/prisma'
import { createClient } from '@supabase/supabase-js'

export async function POST(request: Request) {
  try {
    // Parse and validate request body
    const { chartUrl, userId, birthData, chartType, email, session_id } = await request.json()
    if (!chartUrl || !birthData || !chartType) {
      console.error('Missing required fields', { chartUrl, birthData, chartType });
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // Use the public Supabase client for anonymous uploads
    const supabaseAuth = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    )

    // Debug log for chartUrl
    console.log('Processing chart upload:', { chartUrl, userId, chartType })

    // Download the image from the provided URL
    let imageRes;
    try {
      console.log('Fetching chart from URL:', chartUrl)
      imageRes = await fetch(chartUrl)
      if (!imageRes.ok) {
        console.error('Failed to download chart image', imageRes.status, imageRes.statusText)
        return NextResponse.json({ 
          error: 'Failed to download chart image', 
          details: `${imageRes.status} ${imageRes.statusText}` 
        }, { status: 500 })
      }
    } catch (err) {
      console.error('Error fetching SVG from S3:', err)
      return NextResponse.json({ 
        error: 'Failed to fetch chart image', 
        details: err instanceof Error ? err.message : 'Unknown error' 
      }, { status: 500 })
    }

    // Process the image data
    let buffer;
    try {
      const arrayBuffer = await imageRes.arrayBuffer()
      buffer = Buffer.from(arrayBuffer)
      console.log('Successfully processed image data, size:', buffer.length)
    } catch (err) {
      console.error('Error processing image data:', err)
      return NextResponse.json({ 
        error: 'Failed to process image data', 
        details: err instanceof Error ? err.message : 'Unknown error' 
      }, { status: 500 })
    }

    // Generate a unique filename with user ID or session_id as folder
    const folder = userId ? String(userId) : (session_id ? String(session_id) : 'anonymous')
    const fileExt = chartUrl.split('.').pop()?.split('?')[0] || 'png'
    const fileName = `${folder}/chart_${Date.now()}.${fileExt}`
    console.log('Generated filename:', fileName)

    // Upload to Supabase storage (bucket: 'charts')
    let uploadResult;
    try {
      uploadResult = await supabaseAuth.storage
        .from('charts')
        .upload(fileName, buffer, { 
          contentType: imageRes.headers.get('content-type') || 'image/png',
          upsert: true
        })
      
      if (uploadResult.error) {
        console.error('Failed to upload image to storage:', uploadResult.error)
        return NextResponse.json({ 
          error: 'Failed to upload image to storage', 
          details: uploadResult.error.message 
        }, { status: 500 })
      }
      console.log('Successfully uploaded to Supabase storage')
    } catch (err) {
      console.error('Error during Supabase upload:', err)
      return NextResponse.json({ 
        error: 'Failed to upload to storage', 
        details: err instanceof Error ? err.message : 'Unknown error' 
      }, { status: 500 })
    }

    // Get the public URL for the uploaded image
    let imageUrl;
    try {
      const { data: publicUrlData } = supabaseAuth.storage.from('charts').getPublicUrl(fileName)
      imageUrl = publicUrlData?.publicUrl
      if (!imageUrl) {
        throw new Error('Failed to get public URL')
      }
      console.log('Generated public URL:', imageUrl)
    } catch (err) {
      console.error('Error getting public URL:', err)
      // Clean up the uploaded file since we can't get its URL
      await supabaseAuth.storage.from('charts').remove([fileName])
      return NextResponse.json({ 
        error: 'Failed to get public URL for image', 
        details: err instanceof Error ? err.message : 'Unknown error' 
      }, { status: 500 })
    }

    // Save metadata in the ChartImage table
    let chartImage;
    try {
      chartImage = await prisma.chartImage.create({
        data: {
          userId: userId ? Number(userId) : undefined,
          email: email || null,
          session_id: session_id || null,
          imageUrl,
          birthData,
          chartType: chartType || 'natal',
        },
      })
      console.log('Successfully saved chart metadata:', chartImage.id)
    } catch (err) {
      console.error('Error saving chart metadata:', err)
      // Clean up the uploaded file since we couldn't save the metadata
      await supabaseAuth.storage.from('charts').remove([fileName])
      return NextResponse.json({ 
        error: 'Failed to save chart metadata', 
        details: err instanceof Error ? err.message : 'Unknown error' 
      }, { status: 500 })
    }

    return NextResponse.json({ 
      success: true, 
      imageUrl, 
      chartImageId: chartImage.id 
    })
  } catch (error) {
    console.error('Unexpected error in chart-image API:', error)
    return NextResponse.json({ 
      error: 'Internal server error', 
      details: error instanceof Error ? error.message : 'Unknown error' 
    }, { status: 500 })
  }
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const userId = searchParams.get('userId')
    const id = searchParams.get('id')

    if (userId) {
      // Get all chart images for a user
      const images = await prisma.chartImage.findMany({
        where: { userId: Number(userId) },
        orderBy: { createdAt: 'desc' },
      })
      return NextResponse.json(images)
    } else if (id) {
      // Get a specific chart image by id
      const image = await prisma.chartImage.findUnique({ where: { id } })
      if (!image) return NextResponse.json({ error: 'Not found' }, { status: 404 })
      return NextResponse.json(image)
    } else {
      return NextResponse.json({ error: 'Missing userId or id query param' }, { status: 400 })
    }
  } catch (error) {
    console.error('Error in chart-image GET:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function DELETE(request: Request) {
  try {
    const { id, userId } = await request.json()
    if (!id || !userId) {
      return NextResponse.json({ error: 'Missing id or userId' }, { status: 400 })
    }
    // Find the chart image
    const image = await prisma.chartImage.findUnique({ where: { id } })
    if (!image || image.userId !== Number(userId)) {
      return NextResponse.json({ error: 'Not found or unauthorized' }, { status: 404 })
    }
    // Delete from Supabase storage
    const filePath = image.imageUrl.split('/charts/')[1]
    if (filePath) {
      await supabase.storage.from('charts').remove([filePath])
    }
    // Delete from database
    await prisma.chartImage.delete({ where: { id } })
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error in chart-image DELETE:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

// Merge session-to-user endpoint
export async function PUT(request: NextRequest) {
  try {
    const { session_id, userId } = await request.json();
    if (!session_id || !userId) {
      return NextResponse.json({ error: 'Missing session_id or userId' }, { status: 400 });
    }
    // Update all ChartImage records with this session_id and no userId
    const result = await prisma.chartImage.updateMany({
      where: {
        session_id,
        userId: null,
      },
      data: {
        userId: Number(userId),
        session_id: null,
      },
    });
    return NextResponse.json({ success: true, updated: result.count });
  } catch (error) {
    console.error('Error merging session to user:', error);
    return NextResponse.json({ error: 'Failed to merge session to user', details: error instanceof Error ? error.message : 'Unknown error' }, { status: 500 });
  }
} 