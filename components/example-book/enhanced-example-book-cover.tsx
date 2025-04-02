"use client"

import { PremiumBookCover } from "./premium-book-cover"

interface EnhancedExampleBookCoverProps {
  colorScheme?: "purple" | "blue" | "green" | "orange" | "red" | "black" | "navy" | "burgundy" | "pink"
  showGlow?: boolean
}

export function EnhancedExampleBookCover({ colorScheme = "green", showGlow = true }: EnhancedExampleBookCoverProps) {
  // Convert old color scheme to new if needed
  const getNewColorScheme = () => {
    // First check if it's already a new color scheme
    if (["black", "navy", "green", "burgundy", "pink"].includes(colorScheme)) {
      return colorScheme as "black" | "navy" | "green" | "burgundy" | "pink"
    }

    // Otherwise convert old color scheme to new
    switch (colorScheme) {
      case "purple":
        return "navy"
      case "blue":
        return "navy"
      case "orange":
        return "burgundy"
      case "red":
        return "burgundy"
      default:
        return "green"
    }
  }

  const newColorScheme = getNewColorScheme()

  // Get background color for spine
  const getSpineColor = () => {
    switch (newColorScheme) {
      case "black":
        return "#121212"
      case "navy":
        return "#2d3139"
      case "green":
        return "#1a3a2a"
      case "burgundy":
        return "#93384b"
      case "pink":
        return "#f4c1d7"
      default:
        return "#1a3a2a" // Default to green
    }
  }

  // Get text color for spine
  const getSpineTextColor = () => {
    return newColorScheme === "pink" ? "#292425" : "#f0e8da"
  }

  return (
    <div className="w-full h-full relative">
      {/* Book spine */}
      <div
        className="absolute left-0 top-0 bottom-0 w-[20px] rounded-l-lg z-10"
        style={{
          backgroundColor: getSpineColor(),
        }}
      >
        <div className="h-full flex items-center justify-center">
          <div
            className="transform -rotate-90 whitespace-nowrap text-xs tracking-widest uppercase"
            style={{
              color: getSpineTextColor(),
            }}
          >
          </div>
        </div>
      </div>

      {/* 3D effect wrapper */}
      <div className={`w-full h-full transform perspective-1000 rotateY-5 ${showGlow ? "glow" : ""}`}>
        <PremiumBookCover
          colorScheme={newColorScheme}
          name="EMMA JOHNSON"
          birthDate="June 15, 1988"
          birthPlace="New York, United States"
        />
      </div>

      {/* Book shadow */}
      <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-t from-black/20 to-transparent rounded-b-lg"></div>

      {/* Add CSS for 3D book effect */}
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px) rotateY(5deg); }
          50% { transform: translateY(-10px) rotateY(5deg); }
          100% { transform: translateY(0px) rotateY(5deg); }
        }
        
        .rotateY-5 {
          transform: rotateY(5deg);
          animation: float 6s ease-in-out infinite;
        }
        
        .perspective-1000 {
          perspective: 1000px;
        }
        
        .glow {
          animation: pulse 4s infinite;
        }
        
        @keyframes pulse {
          0% { box-shadow: 0 0 20px rgba(247, 200, 0, 0.6); }
          50% { box-shadow: 0 0 40px rgba(247, 200, 0, 0.6); }
          100% { box-shadow: 0 0 20px rgba(247, 200, 0, 0.6); }
        }
      `}</style>
    </div>
  )
}

