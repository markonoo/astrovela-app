import React from "react"
import { Section } from "./base/Section"

interface NumerologyNumberMeanings1Props {
  pageNumber: number
}

export function NumerologyNumberMeanings1({ pageNumber }: NumerologyNumberMeanings1Props) {
  return (
    <div className="h-full bg-gradient-to-br from-indigo-50 to-purple-100 flex flex-col flex-1 relative">
      <Section className="page-light flex flex-col justify-between p-4">
        <div>
          <div className="text-center mb-6">
            <h1 className="text-3xl font-light mb-4 tracking-[0.15em] font-serif text-indigo-800">
              NUMBERS 1-5 MEANINGS
            </h1>
            <div className="w-24 h-px bg-indigo-600 mx-auto mb-6"></div>
          </div>

          <div className="space-y-5 text-sm leading-relaxed">
            <div className="bg-white/60 p-4 rounded-lg">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-bold mr-3">1</div>
                <h2 className="text-lg font-medium text-red-700">THE LEADER</h2>
              </div>
              <div className="text-xs space-y-2">
                <p><strong>Positive:</strong> Independent, pioneering, assertive, confident, original</p>
                <p><strong>Negative:</strong> Selfish, bossy, impatient, aggressive</p>
                <p><strong>Career:</strong> Entrepreneur, executive, inventor, manager</p>
              </div>
            </div>

            <div className="bg-white/60 p-4 rounded-lg">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold mr-3">2</div>
                <h2 className="text-lg font-medium text-orange-700">THE COOPERATOR</h2>
              </div>
              <div className="text-xs space-y-2">
                <p><strong>Positive:</strong> Diplomatic, sensitive, cooperative, peaceful, supportive</p>
                <p><strong>Negative:</strong> Overly sensitive, indecisive, dependent</p>
                <p><strong>Career:</strong> Counselor, mediator, teacher, diplomat</p>
              </div>
            </div>

            <div className="bg-white/60 p-4 rounded-lg">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 bg-yellow-500 text-white rounded-full flex items-center justify-center font-bold mr-3">3</div>
                <h2 className="text-lg font-medium text-yellow-700">THE COMMUNICATOR</h2>
              </div>
              <div className="text-xs space-y-2">
                <p><strong>Positive:</strong> Creative, expressive, optimistic, inspiring, artistic</p>
                <p><strong>Negative:</strong> Scattered, superficial, gossipy</p>
                <p><strong>Career:</strong> Writer, performer, artist, speaker</p>
              </div>
            </div>

            <div className="bg-white/60 p-4 rounded-lg">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold mr-3">4</div>
                <h2 className="text-lg font-medium text-green-700">THE BUILDER</h2>
              </div>
              <div className="text-xs space-y-2">
                <p><strong>Positive:</strong> Practical, reliable, hardworking, methodical, loyal</p>
                <p><strong>Negative:</strong> Stubborn, narrow-minded, repressive</p>
                <p><strong>Career:</strong> Engineer, accountant, builder, organizer</p>
              </div>
            </div>

            <div className="bg-white/60 p-4 rounded-lg">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold mr-3">5</div>
                <h2 className="text-lg font-medium text-blue-700">THE ADVENTURER</h2>
              </div>
              <div className="text-xs space-y-2">
                <p><strong>Positive:</strong> Freedom-loving, adventurous, progressive, versatile</p>
                <p><strong>Negative:</strong> Restless, irresponsible, self-indulgent</p>
                <p><strong>Career:</strong> Travel, sales, journalism, entertainment</p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}