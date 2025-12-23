import React from "react"
import { Section } from "./base/Section"

interface PalmReadingStepsProps {
  pageNumber: number
}

export function PalmReadingSteps({ pageNumber }: PalmReadingStepsProps) {
  const steps = [
    {
      step: "1",
      title: "Choose the Right Hand",
      description: "Start with the dominant hand (shows current life and choices) then compare with non-dominant hand (shows inherited traits and potential).",
      tip: "Right-handed people: read right hand first. Left-handed: read left hand first."
    },
    {
      step: "2",
      title: "Examine Hand Shape",
      description: "Determine if the hand is Earth (square), Air (rectangular), Fire (long palm, short fingers), or Water (long palm, long fingers).",
      tip: "Hand shape reveals basic personality type and elemental nature."
    },
    {
      step: "3",
      title: "Study the Major Lines",
      description: "Look at the Heart Line (emotions), Head Line (thinking), Life Line (vitality), and Fate Line (career/life direction).",
      tip: "Start with the three main lines that appear on every hand."
    },
    {
      step: "4",
      title: "Analyze the Mounts",
      description: "Examine the fleshy areas under each finger (Jupiter, Saturn, Apollo, Mercury) and the Mount of Venus (thumb area).",
      tip: "Prominent mounts show strong planetary influences and developed qualities."
    },
    {
      step: "5",
      title: "Check Minor Lines",
      description: "Look for secondary lines like Marriage Lines, Travel Lines, Money Lines, and Health Lines for additional insights.",
      tip: "Not everyone has all minor lines - only read what's clearly visible."
    },
    {
      step: "6",
      title: "Note Special Markings",
      description: "Observe crosses, stars, triangles, islands, and breaks in lines. These modify the basic line meanings.",
      tip: "Markings can indicate challenges, talents, or significant life events."
    }
  ]

  return (
    <div className="h-full bg-gradient-to-br from-amber-50 to-orange-50">
      <Section className="page-light max-w-4xl overflow-hidden">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-light mb-6 tracking-[0.15em] font-serif text-amber-800">
            PALM READING STEPS
          </h1>
          <div className="text-sm text-amber-600 mb-8">
            A systematic approach to reading hands
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-white/70 backdrop-blur-sm rounded-lg p-6 shadow-sm border border-amber-200">
            <h2 className="text-xl font-medium mb-4 text-amber-800">The Art of Palm Reading</h2>
            <p className="text-sm leading-relaxed text-amber-900">
              Palm reading is a systematic process that combines observation, intuition, and knowledge 
              of traditional meanings. Each element of the hand tells part of the story - from the 
              overall shape to the finest details of line markings.
            </p>
          </div>

          <div className="space-y-6">
            {steps.map((step, index) => (
              <div key={index} className="bg-white/70 backdrop-blur-sm rounded-lg p-6 shadow-sm border border-amber-200">
                <div className="flex items-start mb-4">
                  <div className="w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold mr-4 mt-1">
                    {step.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-medium text-amber-800 mb-2">{step.title}</h3>
                    <p className="text-sm leading-relaxed text-amber-900 mb-3">{step.description}</p>
                    <p className="text-xs text-amber-700 italic bg-amber-100 p-2 rounded">
                      💡 {step.tip}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-amber-100 to-orange-100 rounded-lg p-6 border border-amber-200">
            <h2 className="text-xl font-medium mb-4 text-amber-800 text-center">Reading Guidelines</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
              <div>
                <h4 className="font-medium text-amber-700 mb-2">Preparation</h4>
                <ul className="space-y-1 text-amber-800">
                  <li>• Good lighting is essential</li>
                  <li>• Clean hands for clear visibility</li>
                  <li>• Relaxed, comfortable setting</li>
                  <li>• Open, respectful attitude</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-amber-700 mb-2">During Reading</h4>
                <ul className="space-y-1 text-amber-800">
                  <li>• Look at both hands</li>
                  <li>• Compare similarities and differences</li>
                  <li>• Trust your intuitive impressions</li>
                  <li>• Focus on overall patterns</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-amber-700 mb-2">Interpretation</h4>
                <ul className="space-y-1 text-amber-800">
                  <li>• Combine all elements</li>
                  <li>• Avoid negative predictions</li>
                  <li>• Focus on guidance and potential</li>
                  <li>• Remember lines can change</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/70 backdrop-blur-sm rounded-lg p-6 shadow-sm border border-amber-200">
              <h3 className="text-lg font-medium mb-3 text-amber-800">What to Look For</h3>
              <div className="space-y-2 text-sm text-amber-900">
                <p>• <strong>Line quality:</strong> Deep, clear, or faint lines</p>
                <p>• <strong>Line length:</strong> How far lines extend</p>
                <p>• <strong>Line direction:</strong> Curved, straight, or branched</p>
                <p>• <strong>Intersections:</strong> Where lines cross or meet</p>
                <p>• <strong>Color:</strong> Pink (healthy) vs pale or dark</p>
              </div>
            </div>

            <div className="bg-white/70 backdrop-blur-sm rounded-lg p-6 shadow-sm border border-amber-200">
              <h3 className="text-lg font-medium mb-3 text-amber-800">Remember</h3>
              <div className="space-y-2 text-sm text-amber-900">
                <p>• Practice makes perfect - start with your own hands</p>
                <p>• Lines reflect tendencies, not fixed fate</p>
                <p>• Changes in life can create new lines</p>
                <p>• Always approach with respect and compassion</p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}