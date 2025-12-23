import { Section } from "./base/Section"

interface CountrysideTransitionProps {
  pageNumber: number
}

export function CountrysideTransition({ pageNumber }: CountrysideTransitionProps) {
  return (
    <div className="h-full bg-black flex flex-col flex-1 relative">
      <Section className="page-dark relative flex items-center justify-center"
        style={{
          backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-08-28%20at%2016.43.47-xm2DgEsiFWrLbng2IbnhIefIYL9Qpz.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20"></div>

      <div className="text-center text-stone-100 mt-10 relative z-10">
        <div className="text-sm">{pageNumber}</div>
      </div>
      </Section>
    </div>
  )
}
