export function PalmistryMysteriesIntro({ pageNumber }: { pageNumber: number }) {
  return (
    <div className="h-full relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/palmistry-mysteries-background.png)' }}
      />
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/70 via-blue-900/70 to-slate-800/70" />

      <div className="relative z-10 h-full flex flex-col justify-center items-center text-amber-100 px-12">
        <div className="text-center max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-light tracking-[0.15em] font-serif text-amber-100 mb-12">
            THE MYSTERIES<br />OF PALMISTRY
          </h1>

          <div className="flex items-start mb-8">
            <div className="text-7xl font-serif text-amber-300 mr-6 leading-none">P</div>
            <p className="text-left text-base leading-relaxed text-amber-50">
              almistry, also known as chiromancy, is one of the most renowned methods for gaining insights into a person's life path. This ancient practice, rooted in the belief that the palm acts as a mirror to the soul, reveals not just our character traits but also foretells our future. Through the study of the palm's lines, shapes, and mounts, palmistry provides a personalized glimpse into an individual's life, encompassing love, health, career, and beyond.
            </p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-amber-200 text-lg z-20">
        {pageNumber}
      </div>
    </div>
  )
}
