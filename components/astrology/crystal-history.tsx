import React from "react"

export function CrystalHistory({ pageNumber }: { pageNumber: number }) {
  return (
    <div className="h-full bg-gradient-to-br from-stone-100 to-stone-200 text-gray-800 flex flex-col flex-1 relative p-12">
      {/* Title Section */}
      <div className="text-center mb-8">
        <h1 className="text-2xl font-semibold tracking-wider text-gray-800 mb-2">
          THE HISTORY OF CRYSTALS
        </h1>
        <p className="text-sm text-gray-600">
          From Ancient Civilizations to Modern Healing
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Ancient Origins */}
        <div className="bg-white/40 rounded-lg p-5 shadow-sm">
          <h2 className="text-lg font-semibold mb-4 text-gray-800 text-center">
            Ancient Origins & Civilizations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <h3 className="font-semibold text-gray-700 mb-2 text-sm">Ancient Egypt (3000 BCE)</h3>
              <p className="text-xs text-gray-700 leading-relaxed">
                Egyptians were among the first to use crystals for protection, healing, and spiritual purposes.
                Lapis lazuli was prized for its deep blue color and associated with the goddess Isis.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-700 mb-2 text-sm">Mesopotamia (2000 BCE)</h3>
              <p className="text-xs text-gray-700 leading-relaxed">
                Early Sumerians used crystals in healing rituals and believed they contained divine energy.
                Carnelian was used for courage and protection in battle.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-700 mb-2 text-sm">Ancient Greece & Rome</h3>
              <p className="text-xs text-gray-700 leading-relaxed">
                Greek philosophers like Plato studied crystals. Romans used amethyst for sobriety and
                clear quartz for divination and spiritual insight.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-700 mb-2 text-sm">Indigenous Cultures</h3>
              <p className="text-xs text-gray-700 leading-relaxed">
                Native American tribes used crystals in ceremonies, turquoise for protection and
                communication with the spirit world.
              </p>
            </div>
          </div>
        </div>

        {/* Crystal Healing Renaissance */}
        <div className="bg-white/40 rounded-lg p-5 shadow-sm">
          <h2 className="text-lg font-semibold mb-4 text-gray-800 text-center">
            The Modern Crystal Healing Movement
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <h3 className="font-semibold text-gray-700 mb-2 text-sm">19th Century Revival</h3>
              <p className="text-xs text-gray-700 leading-relaxed">
                Crystal healing gained popularity in Europe during the spiritualist movement.
                Books like "The Occult" by Helena Blavatsky brought crystals into modern consciousness.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-700 mb-2 text-sm">20th Century Research</h3>
              <p className="text-xs text-gray-700 leading-relaxed">
                Scientists began studying crystal properties. Marcel Vogel's work on quartz crystals
                and their interaction with human energy fields influenced modern crystal healing.
              </p>
            </div>
          </div>
        </div>

        {/* Contemporary Use */}
        <div className="bg-white/40 rounded-lg p-5 shadow-sm">
          <h2 className="text-lg font-semibold mb-4 text-gray-800 text-center">
            Crystals in Contemporary Spirituality
          </h2>
          <p className="text-xs text-gray-700 leading-relaxed mb-4">
            Today, crystals are used worldwide for healing, meditation, protection, and spiritual growth.
            Modern crystal healers combine ancient wisdom with contemporary understanding of energy and vibration.
          </p>
          <div className="flex flex-wrap justify-center gap-2 text-xs text-gray-700">
            <span className="bg-gray-200 px-3 py-1 rounded-full">Energy Healing</span>
            <span className="bg-gray-200 px-3 py-1 rounded-full">Meditation</span>
            <span className="bg-gray-200 px-3 py-1 rounded-full">Protection</span>
            <span className="bg-gray-200 px-3 py-1 rounded-full">Manifestation</span>
            <span className="bg-gray-200 px-3 py-1 rounded-full">Chakra Balancing</span>
          </div>
        </div>
      </div>

      {/* Page Number */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-800 text-sm">
        {pageNumber}
      </div>
    </div>
  )
}
