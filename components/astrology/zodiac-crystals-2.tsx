import React from "react"

export function ZodiacCrystals2({ pageNumber }: { pageNumber: number }) {
  const crystals = [
    {
      sign: "LEO",
      crystal: "TIGER'S EYE",
      image: "/tigers-eye.png",
      description:
        "Tiger's Eye reflects Leo's confidence and strength. Its golden bands inspire courage and the right use of power, resonating with Leo's regal nature. This stone promotes clarity of intention and true leadership qualities.",
    },
    {
      sign: "VIRGO",
      crystal: "AMAZONITE",
      image: "/amazonite.png",
      description:
        "Amazonite harmonizes with Virgo's quest for order and purity. It's a stone of truth, communication, and harmony, aiding Virgo in expressing their meticulous thoughts and easing stress related to perfectionism.",
    },
    {
      sign: "LIBRA",
      crystal: "LAPIS LAZULI",
      image: "/lapis-lazuli.png",
      description:
        "Lapis Lazuli's deep blue hues symbolize Libra's search for balance and justice. This stone enhances intellectual ability and communication, helping Libra navigate their relationships with wisdom and truth.",
    },
    {
      sign: "SCORPIO",
      crystal: "OBSIDIAN",
      image: "/obsidian.png",
      description:
        "Obsidian, a powerful protective stone, aligns with Scorpio's depth and intensity. It provides a grounding energy, offering clarity and aiding in the release of negative emotions, thus mirroring Scorpio's transformative power.",
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
