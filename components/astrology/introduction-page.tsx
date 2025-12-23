import React from "react"
import { Section } from "./base/Section"

export function IntroductionPage() {
  return (
    <div className="h-full">
      <Section className="page-light max-w-4xl">
        {/* Mystical Sun-Moon Symbol */}
        <div className="text-center mb-12">
          <div className="inline-block relative">
            <div className="w-32 h-32 border-2 border-primary rounded-full flex items-center justify-center">
              <div className="text-primary text-5xl md:text-6xl">☉</div>
              <div className="absolute -right-4 -bottom-4 text-primary text-4xl md:text-5xl">☽</div>
            </div>
            {/* Sun rays */}
            {Array.from({ length: 16 }).map((_, i) => (
              <div key={i}
                className="absolute w-0.5 h-6 bg-primary origin-bottom"
                style={{
                  left: "50%",
                  top: "50%",
                  transform: `translate(-50%, -50%) rotate(${i * 22.5}deg) translateY(-4rem)`,
                }}
              />
            ))}
          </div>
        </div>

        <div className="space-y-6 flex-1 text-center">
          <p className="canva-text-content text-lg">
            <span className="canva-text-content">
              Der Einfluss der Sterne und Planeten auf das menschliche Leben
            </span>
          </p>

          <h2 className="text-5xl md:text-6xl font-light tracking-[0.15em] font-serif">Astrologie ist eine uralte Kunst, die deuten</h2>

          <p className="canva-text-content max-w-2xl mx-auto">
            Angelegenheiten. Ein Geburtshoroskop, auch unter dem Namen Natalchart bekannt.
          </p>

          <p className="canva-text-content max-w-2xl mx-auto">
            Die Himmelskörper standen zum Zeitpunkt Ihrer Geburt in einer einzigartigen Konstellation. Jede Positionträgt eine besondere Bedeutung, die unterschiedliche Facetten Ihres Lebens prägen kann.
          </p>

          {/* Decorative divider */}
          <div className="flex items-center justify-center my-8">
            <div className="w-16 h-0.5 bg-primary"></div>
            <div className="w-2 h-2 bg-primary rounded-full mx-4"></div>
            <div className="w-16 h-0.5 bg-primary"></div>
          </div>

          <p className="canva-text-content max-w-2xl mx-auto">
            In diesem Abschnitt tauchen wir tief in die Geheimnisse jedes Planeten Ihres Geburtshoroskops ein. Wirenthüllen die Bedeutung jedes Ihrer Himmelskörper, beginnend mit der strahlenden Sonne, gefolgt von Mond,
            Aszendent, Merkur, Venus, Mars, Jupiter, Saturn, Uranus, Neptun bis hin zu Pluto und Chiron. Jeder dieserHimmelskörper erzählt eine einzigartige Geschichte über Sie. Ob die leidenschaftliche Widder-Sonne, derbedachte Jungfrau-Merkur oder die verträumte Fische-Venus – jede Position hat einen tiefgreifenden Einflussauf Ihre Persönlichkeit und Ihre Interaktion mit der Welt.
          </p>

          <p className="canva-text-content max-w-2xl mx-auto">
            Dies ist ein Schlüssel zu Ihrer persönlichen Reflexion und Ihrem Wachstum. Indem Sie die Feinheiten IhresGeburtshoroskops erfassen, können Sie die Dynamik Ihrer Persönlichkeit, Ihre idealen Interaktionen mitanderen und Ihre verborgenen Potenziale besser erkennen. Wir wünschen uns, dass dieser Abschnitt Ihnenwertvolle Einsichten und ein klareres Bild Ihres Lebensweges eröffnet.
          </p>
        </div>
      </Section>
    </div>
  )
}
