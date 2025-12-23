import React from "react"

interface TableOfContentsItem {
  title: string; page: number
}

const tableOfContentsData: TableOfContentsItem[] = [
  { title: "IHR GEBURTSHOROSKOP", page: 5 },
  { title: "Sonnenzeichen", page: 6 },
  { title: "Mondzeichen", page: 8 },
  { title: "Aufgehendes Zeichen", page: 10 },
  { title: "Merkur", page: 12 },
  { title: "Venus Mars", page: 14 },
  { title: "Jupiter Saturn", page: 16 },
  { title: "Uranus Neptun", page: 18 },
  { title: "Pluto Chiron", page: 20 },
  { title: "Verträglichkeit", page: 22 },
  { title: "Wegweiser zur Astrologie", page: 34 },
  { title: "Geschichte der Astrologie", page: 36 },
  { title: "Moderne Astrologie", page: 38 },
  { title: "Die Sternzeichen", page: 41 },
  { title: "Die Himmelskörper", page: 71 },
  { title: "Rückläufige Häuser in der Astrologie", page: 98 },
  { title: "WAHRHEITEN & ASTROLOGIE", page: 103 },
  { title: "Wie man Horoskopvorhersagen deuten kann", page: 104 },
  { title: "Kristalle in der Astrologie", page: 109 },
  { title: "Die Mysterien des Handlesens", page: 125 },
  { title: "Tarotkarten", page: 133 },
  { title: "Numerologie Liebe & Beziehungen", page: 147 },
  { title: "ASTROLOGEN-LEXIKON", page: 157 },
  { title: "ASTROLOGISCHE MOMENTE", page: 172 },
  { title: "SCHLUSSWORTE", page: 193 },
]

export function TableOfContents() {
  return (
    <div className="h-full flex flex-col flex-1">
      <div className="page-content w-full max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-light tracking-[0.15em] font-serif font-light text-center mb-10">INHALTSVERZEICHNIS</h1>

        <div className="space-y-6 flex-1">
          {tableOfContentsData.map((item, index) => (
            <div key={index} className="flex justify-between items-center">
              <span className="body-copy text-lg font-medium">{item.title}</span>
              <span className="body-copy text-lg font-light">{item.page}</span>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <div className="inline-flex items-center gap-2">
            <span className="text-primary text-xl font-light">astrovela</span>
            <div className="w-2 h-2 bg-primary rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
