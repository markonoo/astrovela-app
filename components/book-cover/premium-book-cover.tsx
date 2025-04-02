
import { useRef, useState, useEffect } from "react"
import { useQuiz } from "@/contexts/quiz-context"
import { NatalChart } from "@/types/astrology"
import { fetchNatalWheelChartSVG } from "@/services/astrology-api-service"

interface PremiumBookCoverProps {
  className?: string
}

export function PremiumBookCover({ className = "" }: PremiumBookCoverProps) {
  const { state } = useQuiz()
  const [chartSvg, setChartSvg] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadChart = async () => {
      if (!state.birthDate || !state.birthTime || !state.birthLocation) return
      
      setIsLoading(true)
      try {
        const formattedDate = `${state.birthDate.year}-${state.birthDate.month.toString().padStart(2, '0')}-${state.birthDate.day.toString().padStart(2, '0')}`
        const svg = await fetchNatalWheelChartSVG(
          formattedDate,
          state.birthTime,
          state.birthLocation.latitude,
          state.birthLocation.longitude
        )
        setChartSvg(svg)
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load chart")
      } finally {
        setIsLoading(false)
      }
    }

    loadChart()
  }, [state.birthDate, state.birthTime, state.birthLocation])

  return (
    <div className={`relative w-full h-full overflow-hidden rounded-lg ${className}`} 
         style={{ backgroundColor: "#0A3B1D" }}>
      {/* Name */}
      <div className="absolute top-8 left-0 w-full text-center">
        <h1 className="text-3xl font-semibold tracking-wider text-[#E6BE67]">
          {state.name?.toUpperCase() || "YOUR NAME"}
        </h1>
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Stars */}
        <div className="absolute inset-0">
          {Array.from({ length: 24 }).map((_, i) => (
            <div
              key={i}
              className="absolute"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                color: "#E6BE67",
                fontSize: `${Math.random() * 12 + 8}px`
              }}
            >
              ★
            </div>
          ))}
        </div>

        {/* Natal Chart */}
        <div className="w-2/3 aspect-square relative">
          {isLoading ? (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="animate-spin h-12 w-12 border-4 border-[#E6BE67] rounded-full border-t-transparent" />
            </div>
          ) : error ? (
            <div className="text-[#E6BE67] text-center">Failed to load chart</div>
          ) : (
            <div 
              className="w-full h-full"
              dangerouslySetInnerHTML={{ 
                __html: chartSvg?.replace(/<svg/, '<svg style="stroke: #E6BE67; fill: none;"') || '' 
              }} 
            />
          )}
        </div>
      </div>

      {/* Birth Details */}
      <div className="absolute bottom-8 left-0 w-full text-center space-y-2">
        <p className="text-[#E6BE67] text-xl">
          {state.birthDate ? 
            `${state.birthDate.month}/${state.birthDate.day}/${state.birthDate.year}` : 
            "BIRTH DATE"
          }
        </p>
        <p className="text-[#E6BE67] text-xl">
          {state.birthPlace || "BIRTH PLACE"}
        </p>
      </div>

      {/* Praying Hands */}
      <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
        <span className="text-[#E6BE67] text-4xl">🙏</span>
      </div>
      <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
        <span className="text-[#E6BE67] text-4xl">🙏</span>
      </div>
    </div>
  )
}
