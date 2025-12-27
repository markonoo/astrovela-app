import React from "react"
import { Section } from "./base/Section"

interface AstrologyDictionary1Props {
  pageNumber: number
}

export function AstrologyDictionary1({ pageNumber }: AstrologyDictionary1Props) {
  return (
    <div className="h-full bg-gradient-to-br from-indigo-50 to-purple-100 flex flex-col flex-1 relative">
      <Section className="page-light flex flex-col justify-between p-4">
        <div>
          <div className="text-center mb-4">
            <h1 className="text-2xl font-light mb-3 tracking-[0.15em] font-serif text-indigo-800">
              ASTROLOGY DICTIONARY A-C
            </h1>
            <div className="w-24 h-px bg-indigo-600 mx-auto mb-4"></div>
          </div>

          <div className="space-y-3 text-xs leading-relaxed">
            <div className="grid grid-cols-1 gap-2">
              <div className="bg-white/60 p-3 rounded border border-indigo-200">
                <strong className="text-indigo-700">Angular Houses:</strong> The 1st, 4th, 7th, and 10th houses. These represent the four cardinal points of the chart and are considered the most powerful for action and manifestation.
              </div>
              
              <div className="bg-purple-50 p-3 rounded border border-purple-200">
                <strong className="text-purple-700">Ascendant (Rising Sign):</strong> The zodiac sign that was rising on the eastern horizon at the moment of birth. Represents personality, appearance, and how others perceive you.
              </div>
              
              <div className="bg-blue-50 p-3 rounded border border-blue-200">
                <strong className="text-blue-700">Aspect:</strong> The angular relationship between planets in a chart. Major aspects include conjunction (0°), sextile (60°), square (90°), trine (120°), and opposition (180°).
              </div>
              
              <div className="bg-indigo-50 p-3 rounded border border-indigo-200">
                <strong className="text-indigo-700">Cardinal Signs:</strong> Aries, Cancer, Libra, and Capricorn. These signs initiate the seasons and are associated with leadership, action, and new beginnings.
              </div>
              
              <div className="bg-violet-50 p-3 rounded border border-violet-200">
                <strong className="text-violet-700">Cazimi:</strong> When a planet is within 17 minutes of the Sun, said to be "in the heart of the Sun." Traditionally considered very fortunate and strengthening.
              </div>
              
              <div className="bg-pink-50 p-3 rounded border border-pink-200">
                <strong className="text-pink-700">Conjunction:</strong> When two or more planets are close together in the same sign, usually within 8-10 degrees. Combines and intensifies planetary energies.
              </div>
              
              <div className="bg-red-50 p-3 rounded border border-red-200">
                <strong className="text-red-700">Cusp:</strong> The dividing line between houses or signs. The exact degree where one house or sign ends and another begins.
              </div>
              
              <div className="bg-orange-50 p-3 rounded border border-orange-200">
                <strong className="text-orange-700">Decan:</strong> Each zodiac sign is divided into three 10-degree sections called decans, each with its own sub-ruler and modified interpretation.
              </div>
              
              <div className="bg-yellow-50 p-3 rounded border border-yellow-200">
                <strong className="text-yellow-700">Descendant:</strong> The zodiac sign setting on the western horizon at birth, opposite the Ascendant. Represents partnerships and what we seek in others.
              </div>
              
              <div className="bg-green-50 p-3 rounded border border-green-200">
                <strong className="text-green-700">Dignities:</strong> A planet's strength in a particular sign. Includes domicile (rulership), exaltation, triplicity, term, and face.
              </div>
              
              <div className="bg-teal-50 p-3 rounded border border-teal-200">
                <strong className="text-teal-700">Direct Motion:</strong> Normal forward movement of a planet through the zodiac. Opposite of retrograde motion.
              </div>
              
              <div className="bg-cyan-50 p-3 rounded border border-cyan-200">
                <strong className="text-cyan-700">Dispositor:</strong> The ruling planet of the sign another planet occupies. Creates a chain of command in chart interpretation.
              </div>
              
              <div className="bg-blue-50 p-3 rounded border border-blue-200">
                <strong className="text-blue-700">Eclipse:</strong> When the Sun, Moon, and Earth align, creating powerful cosmic events that mark significant beginnings and endings in astrology.
              </div>
              
              <div className="bg-indigo-50 p-3 rounded border border-indigo-200">
                <strong className="text-indigo-700">Elements:</strong> Fire (Aries, Leo, Sagittarius), Earth (Taurus, Virgo, Capricorn), Air (Gemini, Libra, Aquarius), Water (Cancer, Scorpio, Pisces).
              </div>
              
              <div className="bg-purple-50 p-3 rounded border border-purple-200">
                <strong className="text-purple-700">Ephemeris:</strong> Astronomical tables showing planetary positions for specific dates and times, essential for chart calculation.
              </div>
            </div>

            <div className="bg-gradient-to-r from-indigo-100 to-purple-100 p-3 rounded border border-indigo-300">
              <h3 className="font-medium mb-2 text-indigo-700 text-sm">Quick Reference: Essential Terms</h3>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div><strong>Benefic:</strong> Venus & Jupiter (helpful)</div>
                <div><strong>Malefic:</strong> Mars & Saturn (challenging)</div>
                <div><strong>Luminary:</strong> Sun & Moon (lights)</div>
                <div><strong>Personal Planets:</strong> Sun-Mars (inner)</div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}