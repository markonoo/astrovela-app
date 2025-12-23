import React from "react"
import { Section } from "./base/Section"

export function NumerologyCoreNumbers({ pageNumber }: { pageNumber: number }) {
  return (
    <div className="h-full bg-amber-50 flex flex-col flex-1 relative">
      <Section className="page-light max-w-6xl text-center">
        <p className="text-lg leading-relaxed mb-8 text-amber-800 max-w-3xl mx-auto">
          At the heart of numerology are several key numbers that are derived from your birth date and full name. Thesenumbers include:
        </p>

        {/* Four core numbers in a 2x2 grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 flex-1">
          {/* Life Path Number */}
          <div className="border-2 border-amber-300 rounded-lg p-6 bg-amber-100/50">
            <h3 className="text-xl font-medium text-amber-800 mb-6 tracking-wide">LIFE PATH NUMBER</h3>
            <p className="text-amber-700 mb-6 leading-relaxed">
              The most important number in your numerology profile, calculated from your birth date. It offers insightinto your life's purpose, your natural inclinations, and the challenges you might face.
            </p>
            <div className="bg-amber-200/50 rounded p-4">
              <h4 className="text-lg font-medium text-amber-800 mb-3">HOW TO CALCULATE</h4>
              <p className="text-sm text-amber-700 leading-relaxed">
                Add together all the digits in your birth date until you reach a single digit. For example, if you wereborn on July 22, 1990, you would calculate 7 (for July) + 2 + 2 + 1 + 9 + 9 + 0 = 30, then reducefurther by adding 3 + 0 to arrive at a Life Path Number of 3.
              </p>
            </div>
          </div>

          {/* Destiny Number */}
          <div className="border-2 border-amber-300 rounded-lg p-6 bg-amber-100/50">
            <h3 className="text-xl font-medium text-amber-800 mb-6 tracking-wide">DESTINY NUMBER</h3>
            <p className="text-amber-700 mb-6 leading-relaxed">
              Also known as the expression number, it is derived from the full name you were given at birth. It reflectsyour natural talents, abilities, and challenges in achieving your personal and professional potential.
            </p>
            <div className="bg-amber-200/50 rounded p-4">
              <h4 className="text-lg font-medium text-amber-800 mb-3">HOW TO CALCULATE</h4>
              <p className="text-sm text-amber-700 leading-relaxed">
                Assign each letter of your full birth name a number according to its position in the alphabet (A=1, B=2,
                ... I=9, then repeat with J=1, K=2, etc.). Add all these numbers together and reduce them to a singledigit in the same way as the Life Path Number.
              </p>
            </div>
          </div>

          {/* Personality Number */}
          <div className="border-2 border-amber-300 rounded-lg p-6 bg-amber-100/50">
            <h3 className="text-xl font-medium text-amber-800 mb-6 tracking-wide">PERSONALITY NUMBER</h3>
            <p className="text-amber-700 mb-6 leading-relaxed">
              Coming from the consonants in your name, this number represents the external you, showing how othersperceive you at first meeting.
            </p>
            <div className="bg-amber-200/50 rounded p-4">
              <h4 className="text-lg font-medium text-amber-800 mb-3">HOW TO CALCULATE</h4>
              <p className="text-sm text-amber-700 leading-relaxed">
                Similarly, add only the consonants of your full name and reduce the sum to a single digit.
              </p>
            </div>
          </div>

          {/* Soul Urge Number */}
          <div className="border-2 border-amber-300 rounded-lg p-6 bg-amber-100/50">
            <h3 className="text-xl font-medium text-amber-800 mb-6 tracking-wide">SOUL URGE NUMBER</h3>
            <p className="text-amber-700 mb-6 leading-relaxed">
              Calculated from the vowels in your name, this number exposes your inner self, your deepest desires, andthe motivations behind many of your decisions.
            </p>
            <div className="bg-amber-200/50 rounded p-4">
              <h4 className="text-lg font-medium text-amber-800 mb-3">HOW TO CALCULATE</h4>
              <p className="text-sm text-amber-700 leading-relaxed">
                Using the same number assignments as the Destiny Number, add only the vowels of your full name, andreduce them to a single digit.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}
