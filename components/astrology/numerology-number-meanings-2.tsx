import React from "react"
import { Section } from "./base/Section"

interface NumerologyNumberMeanings2Props {
  pageNumber: number
}

export function NumerologyNumberMeanings2({ pageNumber }: NumerologyNumberMeanings2Props) {
  return (
    <div className="h-full bg-gradient-to-br from-purple-50 to-pink-100 flex flex-col flex-1 relative">
      <Section className="page-light flex flex-col justify-between p-4">
        <div>
          <div className="text-center mb-6">
            <h1 className="text-3xl font-light mb-4 tracking-[0.15em] font-serif text-purple-800">
              NUMBERS 6-9 MEANINGS
            </h1>
            <div className="w-24 h-px bg-purple-600 mx-auto mb-6"></div>
          </div>

          <div className="space-y-5 text-sm leading-relaxed">
            <div className="bg-white/60 p-4 rounded-lg">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 bg-pink-500 text-white rounded-full flex items-center justify-center font-bold mr-3">6</div>
                <h2 className="text-lg font-medium text-pink-700">THE NURTURER</h2>
              </div>
              <div className="text-xs space-y-2">
                <p><strong>Positive:</strong> Caring, responsible, family-oriented, healing, compassionate</p>
                <p><strong>Negative:</strong> Interfering, worrying, self-righteous</p>
                <p><strong>Career:</strong> Healthcare, teaching, counseling, hospitality</p>
              </div>
            </div>

            <div className="bg-white/60 p-4 rounded-lg">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 bg-violet-500 text-white rounded-full flex items-center justify-center font-bold mr-3">7</div>
                <h2 className="text-lg font-medium text-violet-700">THE SEEKER</h2>
              </div>
              <div className="text-xs space-y-2">
                <p><strong>Positive:</strong> Analytical, spiritual, intuitive, mysterious, intellectual</p>
                <p><strong>Negative:</strong> Aloof, secretive, pessimistic, critical</p>
                <p><strong>Career:</strong> Research, analysis, spiritual work, technology</p>
              </div>
            </div>

            <div className="bg-white/60 p-4 rounded-lg">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center font-bold mr-3">8</div>
                <h2 className="text-lg font-medium text-emerald-700">THE ACHIEVER</h2>
              </div>
              <div className="text-xs space-y-2">
                <p><strong>Positive:</strong> Ambitious, practical, goal-oriented, powerful, successful</p>
                <p><strong>Negative:</strong> Materialistic, demanding, workaholic</p>
                <p><strong>Career:</strong> Business, finance, real estate, politics</p>
              </div>
            </div>

            <div className="bg-white/60 p-4 rounded-lg">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold mr-3">9</div>
                <h2 className="text-lg font-medium text-amber-700">THE HUMANITARIAN</h2>
              </div>
              <div className="text-xs space-y-2">
                <p><strong>Positive:</strong> Generous, compassionate, wise, universal love, artistic</p>
                <p><strong>Negative:</strong> Moody, impractical, financially careless</p>
                <p><strong>Career:</strong> Philanthropy, arts, healing, global work</p>
              </div>
            </div>

            <div className="bg-white/60 p-4 rounded-lg">
              <div className="flex items-center mb-3">
                <div className="w-12 h-8 bg-gradient-to-r from-gold-400 to-yellow-500 text-white rounded-full flex items-center justify-center font-bold mr-3 text-xs">11</div>
                <h2 className="text-lg font-medium text-yellow-700">THE ILLUMINATOR</h2>
              </div>
              <div className="text-xs space-y-2">
                <p><strong>Master Number:</strong> Intuitive, inspirational, idealistic, visionary</p>
                <p><strong>Career:</strong> Teaching, healing, spiritual leadership, invention</p>
              </div>
            </div>

            <div className="bg-white/60 p-4 rounded-lg">
              <div className="flex items-center mb-3">
                <div className="w-12 h-8 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-full flex items-center justify-center font-bold mr-3 text-xs">22</div>
                <h2 className="text-lg font-medium text-red-700">THE MASTER BUILDER</h2>
              </div>
              <div className="text-xs space-y-2">
                <p><strong>Master Number:</strong> Practical idealist, large-scale vision, material mastery</p>
                <p><strong>Career:</strong> International business, architecture, large organizations</p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}