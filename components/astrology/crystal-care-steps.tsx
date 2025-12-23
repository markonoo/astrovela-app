import React from "react"

export function CrystalCareSteps({ pageNumber }: { pageNumber: number }) {
  const steps = [
    {
      number: "3",
      title: "PERFORM THE CLEANSING",
      icon: (
        <svg viewBox="0 0 64 64" className="w-full h-full text-white fill-current opacity-50">
          <circle cx="32" cy="32" r="20" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <path d="M32 12v40M12 32h40" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="32" cy="32" r="4" fill="currentColor" />
        </svg>
      ),
      description:
        "Once you've chosen your method and prepared your crystals, proceed with the cleansing process. For example, if you're using smudging, light your smudge stick and gently waft the smoke over the crystals. If you're using water, either run them under tap water or immerse them in a bowl of water for a few minutes.",
    },
    {
      number: "4",
      title: "DISPOSE OF THE CLEANSING ELEMENTS PROPERLY",
      icon: (
        <svg viewBox="0 0 64 64" className="w-full h-full text-white fill-current opacity-50">
          <path d="M16 20l32 0 -4 32 -24 0z" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <path d="M12 16h40" stroke="currentColor" strokeWidth="2" />
          <path d="M24 16v-4h16v4" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <circle cx="28" cy="32" r="1" fill="currentColor" />
          <circle cx="36" cy="32" r="1" fill="currentColor" />
        </svg>
      ),
      description:
        "If you use materials like salt water or smudge sticks, dispose of or store these elements properly after use. For example, let the smudge stick burn out safely in a fireproof container, and pour salt water back into the earth respectfully if possible.",
    },
    {
      number: "5",
      title: "CHARGE YOUR CRYSTALS",
      icon: (
        <svg viewBox="0 0 64 64" className="w-full h-full text-white fill-current opacity-50">
          <circle cx="32" cy="32" r="16" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <path d="M32 16l4 8-4 8-4-8z" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <path d="M16 32l8 4 8-4 8 4" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="32" cy="32" r="2" fill="currentColor" />
        </svg>
      ),
      description:
        "After cleansing, it's beneficial to charge your crystals to enhance their healing properties. This can be done by placing them in moonlight or sunlight for a few hours, burying them in the earth, or using other crystals like selenite or quartz known for their charging properties.",
    },
    {
      number: "6",
      title: "SET INTENTIONS",
      icon: (
        <svg viewBox="0 0 64 64" className="w-full h-full text-white fill-current opacity-50">
          <path d="M32 8l8 16-8 32-8-32z" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <circle cx="32" cy="24" r="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <path d="M28 40l8 0" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="24" cy="20" r="1" fill="currentColor" />
          <circle cx="40" cy="28" r="1" fill="currentColor" />
        </svg>
      ),
      description:
        "Once your crystals are cleansed and charged, hold each crystal, feel its energy, and set your intentions for how you want it to help you. This aligns the crystal's energy with your own. Regular cleansing of your crystals ensures they remain powerful and vibrant tools for energy work, healing, and personal growth.",
    },
  ]

  return (
    <div className="h-full bg-gradient-to-br from-[#b89968] via-[#c4a484] to-[#b89968] flex flex-col flex-1 relative px-16 py-10">
      <div className="grid grid-cols-2 gap-x-10 gap-y-10 max-w-4xl mx-auto flex-1">
        {steps.map((step, index) => (
          <div key={index} className="text-center flex flex-col">
            <div className="flex items-center justify-center mb-5">
              <div className="text-7xl font-serif text-white/50 mr-6">{step.number}</div>
              <div className="w-16 h-16 relative">{step.icon}</div>
            </div>

            <h2 className="text-xl font-serif text-white tracking-wider mb-5">{step.title}</h2>

            <p className="text-white text-sm leading-relaxed font-medium">{step.description}</p>
          </div>
        ))}
      </div>

      {/* Page Number */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white text-sm">
        {pageNumber}
      </div>
    </div>
  )
}
