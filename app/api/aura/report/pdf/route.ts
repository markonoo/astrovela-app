import { NextRequest, NextResponse } from "next/server"
import { supabase } from "@/lib/supabaseClient"
import { hasActiveAccess } from "@/lib/entitlements"
import { prisma } from "@/lib/prisma"
import puppeteer from "puppeteer-core"
import { env } from "@/utils/environment"
import { logger } from "@/utils/logger"

export async function GET(request: NextRequest) {
  try {
    const { data: { user } } = await supabase.auth.getUser()
    if (!user || !user.email) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 })
    }

    const dbUser = await prisma.user.findUnique({
      where: { email: user.email },
    })

    if (!dbUser || !(await hasActiveAccess(dbUser.id))) {
      return NextResponse.json({ error: "No active access" }, { status: 403 })
    }

    // Get the base URL for the report viewer
    const protocol = request.headers.get("x-forwarded-proto") || "http"
    const host = request.headers.get("host") || "localhost:3000"
    const baseUrl = `${protocol}://${host}`
    
    // Create auth token for Puppeteer session
    const { data: sessionData } = await supabase.auth.getSession()
    const accessToken = sessionData?.session?.access_token

    if (!accessToken) {
      return NextResponse.json({ error: "No valid session" }, { status: 401 })
    }

    // Generate PDF by rendering the actual report viewer page
    const pdfBuffer = await generatePDFFromViewer(baseUrl, accessToken, dbUser.id.toString())

    return new NextResponse(pdfBuffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="astrovela-report-${Date.now()}.pdf"`,
      },
    })
  } catch (error) {
    logger.error("Failed to generate PDF", error)
    return NextResponse.json(
      { error: "Failed to generate PDF" },
      { status: 500 }
    )
  }
}

async function generatePDFFromViewer(
  baseUrl: string,
  accessToken: string,
  userId: string
): Promise<Buffer> {
  // Launch Puppeteer with headless Chrome
  const browser = await puppeteer.launch({
    headless: true,
    args: [
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--disable-dev-shm-usage",
      "--disable-accelerated-2d-canvas",
      "--disable-gpu",
    ],
    ...(process.env.CHROME_PATH && { executablePath: process.env.CHROME_PATH }),
  })

  try {
    const page = await browser.newPage()

    // Set viewport for consistent rendering
    await page.setViewport({
      width: 794, // A4 width in pixels at 96 DPI (210mm)
      height: 1123, // A4 height in pixels at 96 DPI (297mm)
      deviceScaleFactor: 2, // High DPI for better quality
    })

    // Set authentication cookie
    await page.setCookie({
      name: "sb-access-token",
      value: accessToken,
      domain: new URL(baseUrl).hostname,
      path: "/",
      httpOnly: false,
      secure: baseUrl.startsWith("https"),
    })

    // Navigate to the report viewer
    const viewerUrl = `${baseUrl}/aura/report/viewer`
    logger.info(`Generating PDF from: ${viewerUrl}`)

    await page.goto(viewerUrl, {
      waitUntil: "networkidle0",
      timeout: 60000, // 60 second timeout for large document
    })

    // Wait for the report to fully load
    await page.waitForSelector(".report-page", { timeout: 30000 })

    // Give extra time for images and fonts to load
    await page.evaluate(() => new Promise((resolve) => setTimeout(resolve, 2000)))

    // Generate PDF with high quality settings
    const pdfBuffer = await page.pdf({
      format: "A4",
      printBackground: true,
      preferCSSPageSize: true,
      margin: {
        top: "0mm",
        right: "0mm",
        bottom: "0mm",
        left: "0mm",
      },
      // Enable print media type for better styling
      displayHeaderFooter: false,
    })

    logger.info("PDF generated successfully")
    return Buffer.from(pdfBuffer)
  } catch (error) {
    logger.error("Failed to generate PDF from viewer", error)
    throw error
  } finally {
    await browser.close()
  }
}

