import { Section } from "./base/Section"

interface FinalWordsTitleProps {
  pageNumber: number
}

export function FinalWordsTitle({ pageNumber }: FinalWordsTitleProps) {
  return (
    <div className="h-full bg-black flex flex-col flex-1 relative">
      <Section className="page-dark relative flex items-center justify-center"
        style={{
          backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-08-28%20at%2016.43.59-I6NyL5Alahf8EnH63eAmHKhub4dGY5.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="text-center relative z-10">
        {/* Decorative line */}
        <div className="w-32 h-px bg-amber-200 mx-auto mb-8"></div>

        <h1 className="text-7xl md:text-8xl font-light tracking-[0.15em] font-serif text-amber-100 mb-8">
          FINAL
          <br />
          WORDS
        </h1>

        {/* Decorative star */}
        <div className="flex items-center justify-center mb-8">
          <div className="w-16 h-px bg-amber-200"></div>
          <div className="mx-4 text-amber-200 text-xl">✦</div>
          <div className="w-16 h-px bg-amber-200"></div>
        </div>
      </div>
      </Section>
    </div>
  )
}
