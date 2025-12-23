import { Section } from "./base/Section"

interface FinalConclusionProps {
  pageNumber: number
}

export function FinalConclusion({ pageNumber }: FinalConclusionProps) {
  return (
    <div className="h-full bg-black flex flex-col flex-1 relative">
      <Section className="page-dark relative flex flex-col"
        style={{
          backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-08-28%20at%2016.44.05-Vx64BnAQUYO81OI8oCvMdux6KvfI3j.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-amber-100 leading-relaxed space-y-6 flex-1">
          <div className="flex items-start">
            <span className="text-6xl font-serif mr-4 mt-2 text-amber-200">A</span>
            <p className="text-lg">
              s we close this book, we hope the insights into astrology shared within these pages have provided you withvaluable knowledge and practical guidance. Astrology offers a unique perspective on our lives, helping usto understand deeper personal tendencies and how we interact with the world around us. It encourages us toconsider not just our actions but the timing and context in which we make decisions.
            </p>
          </div>

          <p className="text-lg">
            We invite you to continue exploring the dynamic field of astrology as you move forward. May the tools andconcepts discussed here serve as a foundation for further growth and exploration. Use what you've learned toenhance your understanding of yourself and those around you, and to navigate life's challenges with a moreinformed perspective.
          </p>

          <p className="text-lg">
            Thank you for joining us on this astrological journey. Keep looking up, stay curious, and may your futureendeavors be guided by the profound insights that astrology can offer.
          </p>

          <p className="text-lg font-medium">
            Wishing you clarity and inspiration as you chart your path through the stars!
          </p>
        </div>

        <div className="text-center mt-10">
          <p className="text-amber-200 text-xl font-serif tracking-widest">ASTROVELA TEAM</p>
        </div>
      </div>
      </Section>
    </div>
  )
}
