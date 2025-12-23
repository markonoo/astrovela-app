import { Section } from "./base/Section"

interface YearTransition2029Props {
  pageNumber: number
}

export function YearTransition2029({ pageNumber }: YearTransition2029Props) {
  return (
    <div className="h-full bg-black flex flex-col flex-1 relative">
      <Section className="page-dark relative flex items-center justify-center"
        style={{
          backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-08-28%20at%2016.43.15-JavX1mVFqaG78u3hMqEGddjo77Nz75.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20" />

      <div className="relative z-10 text-center text-white">
        <div className="mb-8">
          {/* Decorative line */}
          <div className="flex items-center justify-center mb-6">
            <div className="w-24 h-px bg-amber-200/60"></div>
            <div className="mx-4">
              <svg className="w-8 h-8 text-amber-200/80" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z" />
              </svg>
            </div>
            <div className="w-24 h-px bg-amber-200/60"></div>
          </div>
        </div>

        <h1 className="text-7xl md:text-8xl font-light tracking-[0.15em] font-serif text-amber-100/90 mb-8"
          style={{
            textShadow: "0 0 20px rgba(0,0,0,0.3)",
          }}
        >
          2029
        </h1>
      </div>
      </Section>
    </div>
  )
}
