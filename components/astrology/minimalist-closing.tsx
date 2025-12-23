import { Section } from "./base/Section"

interface MinimalistClosingProps {
  pageNumber: number
}

export function MinimalistClosing({ pageNumber }: MinimalistClosingProps) {
  return (
    <div className="h-full bg-stone-100 flex flex-col flex-1">
      <Section className="page-light flex items-center justify-center">
      <div className="text-center">
        <svg width="150" height="150" viewBox="0 0 150 150" className="text-amber-600 mx-auto">
          {/* Hand outline */}
          <path d="M50 100 C50 95, 52 90, 55 88 L58 85 C60 83, 62 82, 65 82 L70 82 C72 82, 74 83, 75 85 L78 88 C80 90, 82 95, 82 100 L82 110 C82 115, 80 118, 78 120 L75 123 C73 125, 70 126, 65 126 L60 126 C57 126, 55 125, 53 123 L50 120 C48 118, 47 115, 47 110 L47 100 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />

          {/* Fingers */}
          <path d="M55 82 L55 70 C55 68, 56 66, 58 66 C60 66, 61 68, 61 70 L61 82"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />
          <path d="M62 82 L62 65 C62 63, 63 61, 65 61 C67 61, 68 63, 68 65 L68 82"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />
          <path d="M69 82 L69 67 C69 65, 70 63, 72 63 C74 63, 75 65, 75 67 L75 82"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />
          <path d="M76 85 L76 72 C76 70, 77 68, 79 68 C81 68, 82 70, 82 72 L82 85"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />

          {/* Hanging elements */}
          <g className="text-amber-500">
            {/* String lines */}
            <line x1="58" y1="66" x2="58" y2="50" stroke="currentColor" strokeWidth="0.5" />
            <line x1="65" y1="61" x2="65" y2="43" stroke="currentColor" strokeWidth="0.5" />
            <line x1="72" y1="63" x2="72" y2="47" stroke="currentColor" strokeWidth="0.5" />

            {/* Moon phases */}
            <circle cx="58" cy="47" r="2.5" fill="currentColor" />
            <circle cx="65" cy="40" r="2.5" fill="none" stroke="currentColor" strokeWidth="0.5" />
            <path d="M65 37.5 A2.5 2.5 0 0 1 65 42.5 A1.5 1.5 0 0 0 65 37.5" fill="currentColor" />

            {/* Star */}
            <g transform="translate(72, 44)">
              <path d="M0 -3 L0.9 -0.9 L3 -0.9 L1.2 0.6 L1.8 2.7 L0 1.5 L-1.8 2.7 L-1.2 0.6 L-3 -0.9 L-0.9 -0.9 Z"
                fill="currentColor"
              />
            </g>
          </g>
        </svg>
      </div>
      </Section>
    </div>
  )
}
