import React, { useMemo } from "react"

interface CurvedTextProps {
  text: string
  radius: number
  fontSize?: number
  color?: string
  width?: number
  height?: number
  fontFamily?: string
  fontWeight?: string | number
}

/**
 * Renders text curved along a simple arc path
 */
const CurvedText: React.FC<CurvedTextProps> = ({
  text,
  radius,
  fontSize = 18,
  color = "#fff",
  width = 300,
  height = 60,
  fontFamily = "Montserrat, Arial, sans-serif",
  fontWeight = 500,
}) => {
  // Generate stable IDs based on the text content
  const pathId = useMemo(() => `curved-text-path-${text.replace(/\s+/g, '-')}`, [text])

  return (
    <svg 
      width={width} 
      height={height} 
      viewBox={`0 0 ${width} ${height}`}
      style={{ 
        overflow: "visible",
        pointerEvents: "none"
      }}
    >
      <defs>
        {/* Arc path that follows the circular shape of the natal chart */}
        <path
          id={pathId}
          d={`M 30,15 C 70,${height*2.5} ${width-70},${height*2.5} ${width-30},15`}
          fill="none"
        />
      </defs>
      <text
        fill={color}
        fontSize={fontSize}
        fontFamily={fontFamily}
        fontWeight={400}
        letterSpacing="0.05em"
        style={{ 
          textTransform: "uppercase"
        }}
      >
        <textPath
          href={`#${pathId}`}
          startOffset="50%"
          textAnchor="middle"
        >
          {text}
        </textPath>
      </text>
    </svg>
  )
}

export default CurvedText 