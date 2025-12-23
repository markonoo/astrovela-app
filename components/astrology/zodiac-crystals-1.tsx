import React from "react"

export function ZodiacCrystals1({ pageNumber }: { pageNumber: number }) {
  const crystals = [
    {
      sign: "ARIES",
      crystal: "CARNELIAN",
      image: "/carnelian.png",
      description:
        "Carnelian embodies the fiery energy of Aries. Its vibrant orange hues ignite courage, vitality, and passion, resonating with Aries' pioneering spirit. This stone stimulates the will to succeed and overcome obstacles, making it a powerful ally for the Ram.",
    },
    {
      sign: "TAURUS",
      crystal: "ROSE QUARTZ",
      image: "/rose-quartz.png",
      description:
        "Rose Quartz, with its gentle pink essence, mirrors Taurus' love for beauty and comfort. Known as the stone of unconditional love, it nurtures Taurus' need for harmony and emotional connection, promoting inner peace and self-acceptance.",
    },
    {
      sign: "GEMINI",
      crystal: "AGATE",
      image: "/agate.png",
      description:
        "Agate's varied layers symbolize Gemini's multifaceted nature. This crystal enhances mental function and communication, supporting Gemini's intellectual curiosity and excellence. Agate brings balance to Gemini's dual nature, fostering stability and grounding.",
    },
    {
      sign: "CANCER",
      crystal: "MOONSTONE",
      image: "/moonstone.png",
      description:
        "Moonstone captures the essence of Cancer's ruling celestial body, the Moon. This crystal enhances intuition and emotional understanding, offering protection and comfort to the sensitive Crab.",
    },
  ]

  return (
    <div className="h-full bg-[#f5f1e8] flex flex-col flex-1 relative px-8 py-12">
      <div className="grid grid-cols-2 gap-x-8 gap-y-10 max-w-5xl mx-auto">
        {crystals.map((item, index) => (
          <div key={index} className="flex flex-col">
            {/* Crystal image - 30% smaller, no container, centered */}
            <div className="flex items-center justify-center mb-4">
              <img 
                src={item.image} 
                alt={item.crystal} 
                className="w-48 h-48 object-contain"
                style={{ maxWidth: '192px', maxHeight: '192px' }}
              />
            </div>

            {/* Text content - centered */}
            <div className="text-center">
              <h3 className="text-xs font-semibold text-gray-600 tracking-widest mb-1">{item.sign}</h3>
              <h2 className="text-xl font-serif text-gray-800 mb-3 tracking-wide">{item.crystal}</h2>
              <p className="text-sm text-gray-700 leading-relaxed font-normal">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Page Number */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-700 text-sm">
        {pageNumber}
      </div>
    </div>
  )
}
