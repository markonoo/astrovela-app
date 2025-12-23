import React from "react"
import { Section } from "./base/Section"

interface PalmistryHistoryProps {
  pageNumber: number
}

export function PalmistryHistory({ pageNumber }: PalmistryHistoryProps) {
  return (
    <div className="h-full bg-gradient-to-br from-brown-50 to-amber-100 flex flex-col flex-1 relative">
      <Section className="page-light flex flex-col justify-between p-4">
        <div>
          <div className="text-center mb-6">
            <h1 className="text-3xl font-light mb-4 tracking-[0.15em] font-serif text-brown-800">
              PALMISTRY THROUGH THE AGES
            </h1>
            <div className="w-24 h-px bg-brown-600 mx-auto mb-6"></div>
          </div>

          <div className="space-y-6 text-sm leading-relaxed">
            <div>
              <h2 className="text-lg font-medium mb-3 text-brown-700">Ancient Origins</h2>
              <div className="space-y-3 text-xs">
                <div className="bg-white/60 p-3 rounded">
                  <strong className="text-amber-700">5000 BCE - India:</strong> Earliest palmistry practices recorded in Hindu Vedas and ancient Sanskrit texts.
                </div>
                <div className="bg-amber-50 p-3 rounded">
                  <strong className="text-brown-700">3000 BCE - China:</strong> Chinese palmistry developed alongside Traditional Chinese Medicine and I Ching philosophy.
                </div>
                <div className="bg-yellow-50 p-3 rounded">
                  <strong className="text-orange-700">2000 BCE - Egypt & Babylon:</strong> Palm reading integrated into temple practices and divination systems.
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-medium mb-3 text-brown-700">Classical Civilizations</h2>
              <div className="grid grid-cols-2 gap-4 text-xs">
                <div>
                  <h3 className="font-medium mb-2 text-amber-600">Ancient Greece</h3>
                  <p>Aristotle (384-322 BCE) wrote about palmistry, connecting hand features to personality traits and life outcomes.</p>
                </div>
                <div>
                  <h3 className="font-medium mb-2 text-brown-600">Roman Empire</h3>
                  <p>Romans practiced chiromancy widely, with emperors consulting palm readers for major decisions.</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-medium mb-3 text-brown-700">Medieval & Renaissance Period</h2>
              <div className="space-y-2 text-xs">
                <div className="bg-gradient-to-r from-brown-100 to-amber-100 p-3 rounded">
                  <strong>12th Century:</strong> Islamic scholars translated Greek and Indian palmistry texts, preserving ancient knowledge
                </div>
                <div className="bg-gradient-to-r from-amber-100 to-yellow-100 p-3 rounded">
                  <strong>Renaissance:</strong> Renewed interest in palmistry among European scholars and nobility
                </div>
                <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-3 rounded">
                  <strong>16th Century:</strong> First printed palmistry books appeared, making knowledge more accessible
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-medium mb-3 text-brown-700">Modern Development</h2>
              <div className="grid grid-cols-2 gap-4 text-xs">
                <div>
                  <h3 className="font-medium mb-2 text-orange-600">19th Century</h3>
                  <ul className="space-y-1">
                    <li>• Scientific approach to hand analysis</li>
                    <li>• Photography enabled detailed study</li>
                    <li>• Connection to psychology emerged</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium mb-2 text-red-600">20th Century</h3>
                  <ul className="space-y-1">
                    <li>• Integration with counseling</li>
                    <li>• Dermatoglyphics research</li>
                    <li>• Modern hand analysis systems</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-medium mb-3 text-brown-700">Cultural Variations</h2>
              <div className="grid grid-cols-3 gap-2 text-xs text-center">
                <div className="bg-red-100 p-2 rounded">
                  <strong>Indian</strong><br/>Hasta Samudrika<br/>Spiritual focus
                </div>
                <div className="bg-yellow-100 p-2 rounded">
                  <strong>Chinese</strong><br/>Shou Xiang<br/>Five elements
                </div>
                <div className="bg-blue-100 p-2 rounded">
                  <strong>Western</strong><br/>Chiromancy<br/>Psychological
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-brown-100 to-amber-100 p-4 rounded-lg">
              <h3 className="font-medium mb-2 text-brown-700">Notable Palmists in History</h3>
              <div className="text-xs space-y-1">
                <p>• <strong>Cheiro (1866-1936):</strong> Most famous palmist, read hands of royalty and celebrities</p>
                <p>• <strong>William Benham:</strong> Scientific approach, "Laws of Scientific Hand Reading" (1900)</p>
                <p>• <strong>Julius Spier:</strong> Connected palmistry to psychology and Jungian analysis</p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}