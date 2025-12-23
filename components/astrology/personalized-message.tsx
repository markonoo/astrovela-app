import { Section } from "./base/Section"

interface PersonalizedMessageProps {
  pageNumber: number
}

export function PersonalizedMessage({ pageNumber }: PersonalizedMessageProps) {
  return (
    <div className="h-full flex flex-col flex-1" style={{ backgroundColor: "#4a5d4a" }}>
      <Section className="page-light flex flex-col">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-xl font-serif text-stone-100 mb-8">
          DEAR
          <br />
          <span className="text-xl">CRISTINA,</span>
        </h1>

        <div className="text-stone-100 leading-relaxed space-y-6 flex-1 text-lg">
          <p>
            This book is your personal guide to exploring the mystique of astrology and ancient wisdom. Reveal thesecrets of the stars and the cosmic forces that have shaped your unique path.
          </p>

          <p>
            Using your personalized birth chart as a roadmap, you'll gain a profound understanding of planetaryinfluences and how they impact your life. Learn about crystals, delve into the art of palmistry, anddiscover how the moon's cycles can influence your experiences.
          </p>

          <p>
            Open this book and let the universe guide you toward greater self-understanding and a life filled withharmony.
          </p>
        </div>

        {/* Hand illustration */}
        <div className="mt-10 flex justify-between">
          <div className="relative">
            <svg width="120" height="120" viewBox="0 0 120 120" className="text-amber-200">
              {/* Hand outline */}
              <path d="M40 80 C40 75, 42 70, 45 68 L48 65 C50 63, 52 62, 55 62 L60 62 C62 62, 64 63, 65 65 L68 68 C70 70, 72 75, 72 80 L72 90 C72 95, 70 98, 68 100 L65 103 C63 105, 60 106, 55 106 L50 106 C47 106, 45 105, 43 103 L40 100 C38 98, 37 95, 37 90 L37 80 Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              />

              {/* Fingers */}
              <path d="M45 62 L45 50 C45 48, 46 46, 48 46 C50 46, 51 48, 51 50 L51 62"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path d="M52 62 L52 45 C52 43, 53 41, 55 41 C57 41, 58 43, 58 45 L58 62"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path d="M59 62 L59 47 C59 45, 60 43, 62 43 C64 43, 65 45, 65 47 L65 62"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path d="M66 65 L66 52 C66 50, 67 48, 69 48 C71 48, 72 50, 72 52 L72 65"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              />

              {/* Hanging elements */}
              <g className="text-amber-300">
                {/* String lines */}
                <line x1="48" y1="46" x2="48" y2="35" stroke="currentColor" strokeWidth="0.5" />
                <line x1="55" y1="41" x2="55" y2="28" stroke="currentColor" strokeWidth="0.5" />
                <line x1="62" y1="43" x2="62" y2="30" stroke="currentColor" strokeWidth="0.5" />

                {/* Celestial symbols */}
                <circle cx="48" cy="32" r="2" fill="none" stroke="currentColor" strokeWidth="0.5" />
                <path d="M53 28 L57 28 M55 26 L55 30 M53 26 L57 30 M57 26 L53 30"
                  stroke="currentColor"
                  strokeWidth="0.5"
                />
                <path d="M60 30 C60 28, 62 28, 62 30 C64 30, 64 32, 62 32 C62 34, 60 34, 60 32 C58 32, 58 30, 60 30"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.5"
                />
              </g>
            </svg>
          </div>
        </div>
      </div>
      </Section>
    </div>
  )
}
