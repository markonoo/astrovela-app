import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabaseClient'
import prisma from '@/lib/prisma'

export async function POST(request: Request) {
  try {
    const { chartUrl, userId, birthData, chartType } = await request.json()
    if (!chartUrl || !userId || !birthData) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // Download the image from the provided URL
    const imageRes = await fetch(chartUrl)
    if (!imageRes.ok) {
      return NextResponse.json({ error: 'Failed to download chart image' }, { status: 500 })
    }
    const arrayBuffer = await imageRes.arrayBuffer()
    const buffer = Buffer.from(arrayBuffer)

    // Generate a unique filename
    const fileExt = chartUrl.split('.').pop()?.split('?')[0] || 'png'
    const fileName = `chart_${userId}_${Date.now()}.${fileExt}`

    // Upload to Supabase storage (bucket: 'charts')
    const { data: uploadData, error: uploadError } = await supabase.storage
      .from('charts')
      .upload(fileName, buffer, { contentType: imageRes.headers.get('content-type') || 'image/png' })

    if (uploadError) {
      return NextResponse.json({ error: 'Failed to upload image to storage', details: uploadError.message }, { status: 500 })
    }

    // Get the public URL for the uploaded image
    const { data: publicUrlData } = supabase.storage.from('charts').getPublicUrl(fileName)
    const imageUrl = publicUrlData?.publicUrl
    if (!imageUrl) {
      return NextResponse.json({ error: 'Failed to get public URL for image' }, { status: 500 })
    }

    // Save metadata in the ChartImage table
    const chartImage = await prisma.chartImage.create({
      data: {
        userId: Number(userId),
        imageUrl,
        birthData,
        chartType: chartType || 'natal',
      },
    })

    return NextResponse.json({ success: true, imageUrl, chartImageId: chartImage.id })
  } catch (error) {
    console.error('Error in chart-image API:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
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