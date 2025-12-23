import React from "react"

export function ZodiacCrystals3({ pageNumber }: { pageNumber: number }) {
  const crystals = [
    {
      sign: "SAGITTARIUS",
      crystal: "TURQUOISE",
      image: "/turquoise.png",
      description:
        "Turquoise embodies the adventurous spirit of Sagittarius. This stone offers protection and good fortune on journeys, resonating with the Archer's love for exploration and discovery.",
    },
    {
      sign: "CAPRICORN",
      crystal: "GARNET",
      image: "/garnet.png",
      description:
        "Garnet supports Capricorn's ambition and determination. Its rich, red shades energize Capricorn's steadfast pursuit of its goals, offering additional willpower and stamina.",
    },
    {
      sign: "AQUARIUS",
      crystal: "AMETHYST",
      image: "/amethyst.png",
      description:
        "Amethyst, with its calming and intuitive energy, aligns with Aquarius' innovative and forward-thinking nature. This crystal enhances higher states of consciousness and spirituality, promoting Aquarius' vision for the future.",
    },
    {
      sign: "PISCES",
      crystal: "AQUAMARINE",
      image: "/aquamarine.png",
      description:
        "Aquamarine mirrors Pisces' fluid and compassionate nature. Its soothing energy calms fears and phobias, promoting spiritual awareness and connecting Pisces to their intuitive abilities.",
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
