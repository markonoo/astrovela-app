
import { NextResponse } from "next/server"
import { saveQuizResponse } from "@/utils/db"

export async function POST(request: Request) {
  try {
    const quizData = await request.json()
    await saveQuizResponse(quizData)
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error saving quiz data:", error)
    return NextResponse.json(
      { error: "Failed to save quiz data" },
      { status: 500 }
    )
  }
}
