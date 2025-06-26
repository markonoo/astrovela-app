import { NextResponse, NextRequest } from 'next/server'
import { supabase } from '@/lib/supabaseClient'
import { createClient } from '@supabase/supabase-js'
import { env, devLog, devError } from '@/utils/environment'

export async function POST(request: Request) {
  try {
    // Parse and validate request body
    const body = await request.json()
    const { 
      chartUrl, 
      chart_url, 
      userId, 
      birthData, 
      birth_data,
      chartType, 
      email, 
      session_id 
    } = body
    
    // Handle both chartUrl and chart_url formats for backward compatibility
    const finalChartUrl = chartUrl || chart_url
    const finalBirthData = birthData || birth_data
    const finalChartType = chartType || 'natal'
    
    if (!finalChartUrl || !finalBirthData) {
      devError('Missing required fields', { chartUrl: finalChartUrl, birthData: finalBirthData });
      return NextResponse.json({ error: 'Missing required fields: chart_url and birth_data' }, { status: 400 })
    }

    // Use the public Supabase client for anonymous uploads
    const supabaseAuth = createClient(
      env.NEXT_PUBLIC_SUPABASE_URL,
      env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    )

    // Debug log for chartUrl
    devLog('Processing chart upload:', { chartUrl: finalChartUrl, userId, chartType: finalChartType })

    // Download the image from the provided URL
    let imageRes;
    try {
      devLog('Fetching chart from URL:', finalChartUrl)
      imageRes = await fetch(finalChartUrl)
      if (!imageRes.ok) {
        devError('Failed to download chart image', imageRes.status, imageRes.statusText)
        return NextResponse.json({ 
          error: 'Failed to download chart image', 
          details: `${imageRes.status} ${imageRes.statusText}` 
        }, { status: 500 })
      }
    } catch (err) {
      devError('Error fetching SVG from S3:', err)
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
      devLog('Successfully processed image data, size:', buffer.length)
    } catch (err) {
      devError('Error processing image data:', err)
      return NextResponse.json({ 
        error: 'Failed to process image data', 
        details: err instanceof Error ? err.message : 'Unknown error' 
      }, { status: 500 })
    }

    // Generate a unique filename with user ID or session_id as folder
    const folder = userId ? String(userId) : (session_id ? String(session_id) : 'anonymous')
    const fileExt = finalChartUrl.split('.').pop()?.split('?')[0] || 'png'
    const fileName = `${folder}/chart_${Date.now()}.${fileExt}`
    devLog('Generated filename:', fileName)

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
        devError('Failed to upload image to storage:', uploadResult.error)
        return NextResponse.json({ 
          error: 'Failed to upload image to storage', 
          details: uploadResult.error.message 
        }, { status: 500 })
      }
      devLog('Successfully uploaded to Supabase storage')
    } catch (err) {
      devError('Error during Supabase upload:', err)
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
      devLog('Generated public URL:', imageUrl)
    } catch (err) {
      devError('Error getting public URL:', err)
      // Clean up the uploaded file since we can't get its URL
      await supabaseAuth.storage.from('charts').remove([fileName])
      return NextResponse.json({ 
        error: 'Failed to get public URL for image', 
        details: err instanceof Error ? err.message : 'Unknown error' 
      }, { status: 500 })
    }

    // Save metadata in the ChartImage table using Supabase instead of Prisma
    let chartImage;
    try {
      const chartImageData = {
        userId: userId ? Number(userId) : null,
        email: email || null,
        session_id: session_id || null,
        imageUrl,
        birthData: finalBirthData,
        chartType: finalChartType,
        createdAt: new Date().toISOString(),
      }
      
      const { data, error } = await supabaseAuth
        .from('ChartImage')
        .insert([chartImageData])
        .select()
        .single()
      
      if (error) {
        devError('Error saving chart metadata to Supabase:', error)
        throw error
      }
      
      chartImage = data
      devLog('Successfully saved chart metadata:', chartImage.id)
    } catch (err) {
      devError('Error saving chart metadata:', err)
      // Clean up the uploaded file since we couldn't save the metadata
      await supabaseAuth.storage.from('charts').remove([fileName])
      return NextResponse.json({ 
        error: 'Failed to save chart metadata', 
        details: err instanceof Error ? err.message : 'Unknown error' 
      }, { status: 500 })
    }

    // Initialize sign variables
    let sunSign: string | null = null;
    let moonSign: string | null = null;

    // --- Generate and store interpretation in Supabase (with error handling) ---
    try {
      devLog('Processing interpretation for birthData:', finalBirthData);
      
      let day, month, year, hour, min, lat, lon, tzone;
      
      // Handle both formats: book-designer format and quiz format
      if (finalBirthData.dateOfBirth && finalBirthData.geo) {
        // Book-designer format
        day = Number(finalBirthData.dateOfBirth.split("-")[2]);
        month = Number(finalBirthData.dateOfBirth.split("-")[1]);
        year = Number(finalBirthData.dateOfBirth.split("-")[0]);
        hour = Number((finalBirthData.timeOfBirth || "12:00").split(":")[0]);
        min = Number((finalBirthData.timeOfBirth || "12:00").split(":")[1]);
        lat = finalBirthData.geo.latitude;
        lon = finalBirthData.geo.longitude;
        tzone = 0; // UTC, you may want to improve this
      } else if (finalBirthData.day && finalBirthData.lat) {
        // Quiz format
        day = finalBirthData.day;
        month = finalBirthData.month;
        year = finalBirthData.year;
        hour = finalBirthData.hour;
        min = finalBirthData.min;
        lat = finalBirthData.lat;
        lon = finalBirthData.lon;
        tzone = finalBirthData.tzone || 0;
      } else {
        devLog('Unknown birth data format:', finalBirthData);
        throw new Error('Invalid birth data format');
      }
      
      devLog('Extracted birth data:', { day, month, year, hour, min, lat, lon, tzone });
      
      if (day && month && year && hour !== undefined && min !== undefined && lat !== undefined && lon !== undefined) {
        devLog('Calling getNatalChartInterpretationFromAPI...');
        
        try {
          const { getNatalChartInterpretationFromAPI } = await import("@/services/astrology-api-service");
          const interp = await getNatalChartInterpretationFromAPI({ day, month, year, hour, min, lat, lon, tzone });
          
          devLog('Interpretation API response:', interp);
          
          // Extract sun and moon signs from the planets array
          const sunPlanet = interp?.planets?.find((p: any) => p.name === 'Sun');
          const moonPlanet = interp?.planets?.find((p: any) => p.name === 'Moon');
          
          sunSign = sunPlanet?.sign || null;
          moonSign = moonPlanet?.sign || null;
          
          devLog('Extracted signs:', { sunSign, moonSign, sunPlanet, moonPlanet });
          
          if (session_id && interp) {
            devLog('Inserting comprehensive interpretation into Supabase for session:', session_id);
            
            // Prepare comprehensive interpretation data
            const interpretationData = {
              session_id,
              chartImageId: chartImage.id,
              sun_sign: sunSign,
              moon_sign: moonSign,
              planets: interp.planets || null,
              houses: interp.houses || null,
              ascendant: interp.ascendant || null,
              midheaven: interp.midheaven || null,
              vertex: interp.vertex || null,
              lilith: interp.lilith || null,
              aspects: interp.aspects || null,
              moon_phase_name: interp.moon_phase?.moon_phase_name || null,
              moon_phase_description: interp.moon_phase?.moon_phase_description || null,
              hemisphere_east_west: interp.hemisphere?.east_west || null,
              hemisphere_north_south: interp.hemisphere?.north_south || null,
              elements: interp.elements || null,
              elements_description: interp.elements?.description || null,
              modes: interp.modes || null,
              modes_description: interp.modes?.description || null,
              dominant_sign: interp.dominant_sign || null,
              created_at: new Date().toISOString(),
            };
            
            devLog('Prepared interpretation data fields:', Object.keys(interpretationData));
            
            const { error: supaError } = await supabaseAuth
              .from('NatalChartInterpretation')
              .insert([interpretationData]);
              
            if (supaError) {
              devError('Error inserting comprehensive interpretation into Supabase:', supaError)
            } else {
              devLog('Successfully inserted comprehensive interpretation data into Supabase')
            }
          } else {
            devLog('No session_id or interpretation data found to insert')
          }
        } catch (apiError) {
          devError('Astrology API error:', apiError)
          // Continue without sun/moon signs if API fails
        }
      } else {
        devLog('Invalid birth data values:', { day, month, year, hour, min, lat, lon })
      }
    } catch (err) {
      devError('Error generating or saving chart interpretation:', err)
      // Continue without interpretation if this fails
    }

    return NextResponse.json({ 
      success: true, 
      imageUrl, 
      chartImageId: chartImage.id,
      sunSign,
      moonSign
    })
  } catch (error) {
    devError('Unexpected error in chart-image API:', error)
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

    // Use Supabase client
    const supabaseAuth = createClient(
      env.NEXT_PUBLIC_SUPABASE_URL,
      env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    )

    if (userId) {
      // Get all chart images for a user using Supabase
      const { data: images, error } = await supabaseAuth
        .from('ChartImage')
        .select('*')
        .eq('userId', Number(userId))
        .order('createdAt', { ascending: false })
      
      if (error) {
        devError('Error fetching chart images for user:', error)
        return NextResponse.json({ error: 'Failed to fetch chart images' }, { status: 500 })
      }
      
      return NextResponse.json(images)
    } else if (id) {
      // Get a specific chart image by id using Supabase
      const { data: image, error } = await supabaseAuth
        .from('ChartImage')
        .select('*')
        .eq('id', id)
        .single()
      
      if (error) {
        devError('Error fetching chart image by id:', error)
        return NextResponse.json({ error: 'Not found' }, { status: 404 })
      }
      
      return NextResponse.json(image)
    } else {
      return NextResponse.json({ error: 'Missing userId or id query param' }, { status: 400 })
    }
  } catch (error) {
    devError('Error in chart-image GET:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function DELETE(request: Request) {
  try {
    const { id, userId } = await request.json()
    if (!id || !userId) {
      return NextResponse.json({ error: 'Missing id or userId' }, { status: 400 })
    }

    // Use Supabase client
    const supabaseAuth = createClient(
      env.NEXT_PUBLIC_SUPABASE_URL,
      env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    )

    // Find the chart image using Supabase
    const { data: image, error: fetchError } = await supabaseAuth
      .from('ChartImage')
      .select('*')
      .eq('id', id)
      .single()
    
    if (fetchError || !image || image.userId !== Number(userId)) {
      return NextResponse.json({ error: 'Not found or unauthorized' }, { status: 404 })
    }

    // Delete from Supabase storage
    const filePath = image.imageUrl.split('/charts/')[1]
    if (filePath) {
      await supabaseAuth.storage.from('charts').remove([filePath])
    }

    // Delete from database using Supabase
    const { error: deleteError } = await supabaseAuth
      .from('ChartImage')
      .delete()
      .eq('id', id)
    
    if (deleteError) {
      devError('Error deleting chart image:', deleteError)
      return NextResponse.json({ error: 'Failed to delete chart image' }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    devError('Error in chart-image DELETE:', error)
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

    // Use Supabase client
    const supabaseAuth = createClient(
      env.NEXT_PUBLIC_SUPABASE_URL,
      env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    )

    // Update all ChartImage records with this session_id and no userId using Supabase
    const { data, error } = await supabaseAuth
      .from('ChartImage')
      .update({
        userId: Number(userId),
        session_id: null,
      })
      .eq('session_id', session_id)
      .is('userId', null)
      .select()
    
    if (error) {
      devError('Error merging session to user:', error)
      return NextResponse.json({ 
        error: 'Failed to merge session to user', 
        details: error.message 
      }, { status: 500 })
    }

    return NextResponse.json({ success: true, updated: data?.length || 0 });
  } catch (error) {
    devError('Error merging session to user:', error);
    return NextResponse.json({ 
      error: 'Failed to merge session to user', 
      details: error instanceof Error ? error.message : 'Unknown error' 
    }, { status: 500 });
  }
} 