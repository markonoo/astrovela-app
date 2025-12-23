import React from "react"
import { Section } from "./base/Section"

interface ElixirPreparationStepsProps {
  pageNumber: number
}

export function ElixirPreparationSteps({ pageNumber }: ElixirPreparationStepsProps) {
  const steps = [
    {
      number: "1",
      title: "Choose Your Crystal",
      description: "Select a crystal based on your intention. Ensure it's safe for water contact (avoid toxic stones like malachite or pyrite)."
    },
    {
      number: "2",
      title: "Cleanse the Crystal",
      description: "Cleanse your crystal using moonlight, sage, or sound. This removes any previous energies and prepares it for your intention."
    },
    {
      number: "3",
      title: "Set Your Intention",
      description: "Hold the crystal and clearly state your intention. Visualize your desired outcome while infusing the stone with your energy."
    },
    {
      number: "4",
      title: "Prepare Pure Water",
      description: "Use filtered or spring water in a clear glass container. The water should be clean and free from chemicals or impurities."
    },
    {
      number: "5",
      title: "Create the Elixir",
      description: "Place the crystal in or near the water (use indirect method for safety). Leave under moonlight or sunlight for 4-8 hours."
    },
    {
      number: "6",
      title: "Preserve and Use",
      description: "Add a small amount of brandy to preserve (optional). Use within a week. Take a few drops daily or use in meditation."
    }
  ]

  return (
    <div className="h-full bg-gradient-to-br from-cyan-50 to-blue-50">
      <Section className="page-light max-w-4xl overflow-hidden">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-light mb-6 tracking-[0.15em] font-serif text-cyan-800">
            CRYSTAL ELIXIR PREPARATION
          </h1>
          <div className="text-sm text-cyan-600 mb-8">
            Sacred steps for creating vibrational waters
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-white/70 backdrop-blur-sm rounded-lg p-6 shadow-sm border border-cyan-200">
            <h2 className="text-xl font-medium mb-4 text-cyan-800">What is a Crystal Elixir?</h2>
            <p className="text-sm leading-relaxed text-cyan-900">
              A crystal elixir is water that has been charged with the vibrational energy of crystals. 
              Also known as gem water or crystal essence, these preparations are used for healing, 
              meditation, and spiritual practices. The water absorbs and holds the energetic properties 
              of the crystal, creating a liquid form of crystal healing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {steps.map((step, index) => (
              <div key={index} className="bg-white/70 backdrop-blur-sm rounded-lg p-6 shadow-sm border border-cyan-200">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-cyan-600 text-white rounded-full flex items-center justify-center font-bold mr-3">
                    {step.number}
                  </div>
                  <h3 className="text-lg font-medium text-cyan-800">{step.title}</h3>
                </div>
                <p className="text-sm leading-relaxed text-cyan-900">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-cyan-100 to-blue-100 rounded-lg p-6 border border-cyan-200">
            <h2 className="text-xl font-medium mb-4 text-cyan-800 text-center">Safety Guidelines</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
              <div>
                <h4 className="font-medium text-cyan-700 mb-2">Safe Crystals for Elixirs</h4>
                <ul className="space-y-1 text-cyan-800">
                  <li>• Clear Quartz - amplification</li>
                  <li>• Rose Quartz - love and healing</li>
                  <li>• Amethyst - spiritual growth</li>
                  <li>• Citrine - abundance and joy</li>
                  <li>• Moonstone - intuition</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-cyan-700 mb-2">Crystals to Avoid</h4>
                <ul className="space-y-1 text-cyan-800">
                  <li>• Malachite (toxic copper)</li>
                  <li>• Pyrite (contains sulfur)</li>
                  <li>• Galena (contains lead)</li>
                  <li>• Cinnabar (contains mercury)</li>
                  <li>• When in doubt, use indirect method</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white/70 backdrop-blur-sm rounded-lg p-6 shadow-sm border border-cyan-200">
            <h2 className="text-xl font-medium mb-4 text-cyan-800 text-center">Indirect Method (Recommended)</h2>
            <p className="text-sm leading-relaxed text-cyan-900 text-center">
              For safety, place your crystal in a small glass bowl, then place that bowl inside a larger 
              container with water. This allows the crystal's energy to charge the water without direct 
              contact, eliminating any risk of toxicity while maintaining the energetic transfer.
            </p>
          </div>
        </div>
      </Section>
    </div>
  )
}