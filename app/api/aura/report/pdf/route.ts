import { NextRequest, NextResponse } from "next/server"
import { supabase } from "@/lib/supabaseClient"
import { hasActiveAccess } from "@/lib/entitlements"
import { prisma } from "@/lib/prisma"
import { loadPagesData, getAvailablePages } from "@/lib/document-maker/content"
import { personalizePages } from "@/lib/document-maker/personalize"
import { getCoverColor, getCoverTextColor } from "@/lib/document-maker/cover-colors"
import { formatBirthDateDisplay } from "@/utils/birth-date"
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

    // Get user data for personalization
    const quizResponse = await prisma.quizResponse.findFirst({
      where: { userId: dbUser.id },
      orderBy: { createdAt: "desc" },
    })

    const chartInterpretation = await prisma.natalChartInterpretation.findFirst({
      where: { userId: dbUser.id },
      orderBy: { created_at: "desc" },
    })

    // Safely extract and format birth date
    const birthDateFormatted = quizResponse?.birthDate
      ? formatBirthDateDisplay(quizResponse.birthDate)
      : null

    const userData = {
      name: dbUser.name || quizResponse?.firstName || user.user_metadata?.name,
      firstName: quizResponse?.firstName || undefined,
      lastName: quizResponse?.lastName || undefined,
      birthDate: birthDateFormatted ?? undefined,
      birthTime: quizResponse?.birthTime || undefined,
      birthPlace: quizResponse?.birthPlace || undefined,
      coverColor: quizResponse?.coverDesign || undefined,
      gender: quizResponse?.gender || undefined,
      sunSign: chartInterpretation?.sun_sign || undefined,
      moonSign: chartInterpretation?.moon_sign || undefined,
      risingSign: undefined,
    }

    // Load and personalize pages
    const availablePages = getAvailablePages()
    const pageData = await loadPagesData(availablePages)
    const personalizedPages = personalizePages(pageData, userData)

    // Generate HTML for PDF
    const html = generateReportHTML(personalizedPages, userData)

    // Generate PDF using Puppeteer
    const pdfBuffer = await generatePDF(html)

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

function generateReportHTML(pages: any[], userData: any): string {
  // Get cover color for first page (cover page)
  const coverColor = getCoverColor(userData.coverColor)
  const coverTextColor = getCoverTextColor(userData.coverColor)
  
  const pagesHTML = pages
    .map((page, index) => {
      const sectionsHTML = page.sections
        .map((section: any) => {
          switch (section.type) {
            case "heading":
              return `<h${section.level} class="${section.className || ""}">${section.content}</h${section.level}>`
            case "paragraph":
              return `<p class="${section.className || ""}">${section.content}</p>`
            case "list":
              const listTag = section.ordered ? "ol" : "ul"
              const items = section.items.map((item: string) => `<li>${item}</li>`).join("")
              return `<div>${section.title ? `<h3>${section.title}</h3>` : ""}<${listTag}>${items}</${listTag}></div>`
            case "preformatted":
              return `<pre class="whitespace-pre-wrap font-serif text-[11pt] leading-[1.6]">${section.content}</pre>`
            default:
              return ""
          }
        })
        .join("")

      // Use cover color for first page, otherwise use page background
      const pageBackground = index === 0 ? coverColor : (page.background || '#ffffff')
      const pageTextColor = index === 0 ? coverTextColor : '#000000'

      return `
        <div class="page" style="width: 210mm; height: 297mm; background: ${pageBackground}; color: ${pageTextColor}; margin: 12px auto; padding: 16mm; box-shadow: 0 2px 8px rgba(0,0,0,0.1); page-break-after: always;">
          ${sectionsHTML}
          <div style="position: absolute; bottom: 10mm; left: 0; right: 0; text-align: center; font-size: 9pt; letter-spacing: 0.08em; color: ${index === 0 ? coverTextColor : '#666'}; opacity: 0.7;">${page.number}</div>
        </div>
      `
    })
    .join("")

  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <style>
          @page {
            size: A4;
            margin: 0;
          }
          body {
            margin: 0;
            padding: 0;
            font-family: Georgia, serif;
            background: #f5f5f5;
          }
          .page {
            box-sizing: border-box;
          }
          h1, h2, h3, h4, h5, h6 {
            margin-top: 0;
          }
          p {
            margin: 0.5em 0;
          }
        </style>
      </head>
      <body>
        ${pagesHTML}
      </body>
    </html>
  `
}

async function generatePDF(html: string): Promise<Buffer> {
  // Try to use Chrome/Chromium from environment or system
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
    ...(process.env.CHROME_PATH && { executablePath: process.env.CHROME_PATH }),
  })

  try {
    const page = await browser.newPage()
    await page.setContent(html, { waitUntil: "networkidle0" })
    
    const pdfBuffer = await page.pdf({
      format: "A4",
      printBackground: true,
      margin: {
        top: "0mm",
        right: "0mm",
        bottom: "0mm",
        left: "0mm",
      },
    })

    return Buffer.from(pdfBuffer)
  } finally {
    await browser.close()
  }
}

