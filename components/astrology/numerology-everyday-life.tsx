import React from "react"
import { Section } from "./base/Section"

export function NumerologyEverydayLife({ pageNumber }: { pageNumber: number }) {
  return (
    <div className="h-full bg-gradient-to-br from-amber-50 to-orange-100 flex flex-col flex-1 relative">
      <Section className="page-light flex flex-col justify-between p-4">
        <div>
          <div className="text-center mb-6">
            <h1 className="text-3xl font-light mb-4 tracking-[0.15em] font-serif text-amber-800">
              NUMEROLOGY IN DAILY LIFE
            </h1>
            <div className="w-24 h-px bg-amber-600 mx-auto mb-6"></div>
          </div>

          <div className="space-y-6 text-sm leading-relaxed">
            <div>
              <h2 className="text-lg font-medium mb-3 text-amber-700">Personal Year Numbers</h2>
              <p className="mb-3">Calculate your Personal Year by adding your birth month and day to the current year, then reducing to a single digit.</p>
              <div className="grid grid-cols-3 gap-4 text-xs">
                <div className="bg-white/60 p-3 rounded">
                  <strong>Year 1:</strong> New beginnings, independence, leadership
                </div>
                <div className="bg-white/60 p-3 rounded">
                  <strong>Year 2:</strong> Cooperation, partnerships, patience
                </div>
                <div className="bg-white/60 p-3 rounded">
                  <strong>Year 3:</strong> Creativity, communication, social expansion
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-medium mb-3 text-amber-700">Decision Making</h2>
              <div className="grid grid-cols-2 gap-4 text-xs">
                <div>
                  <h3 className="font-medium mb-2">Career Choices</h3>
                  <p>Use your Life Path number to guide career decisions. Number 1s excel in leadership, 2s in counseling, 3s in creative fields.</p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Relationship Timing</h3>
                  <p>Compatible numbers create harmony. Calculate both partners' Life Path numbers for compatibility insights.</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-medium mb-3 text-amber-700">Daily Practices</h2>
              <div className="space-y-2 text-xs">
                <p><strong>Morning Affirmations:</strong> Use your Personal Day number for daily guidance and energy focus.</p>
                <p><strong>Address & Phone Numbers:</strong> Choose numbers that resonate with your numerological profile for enhanced energy.</p>
                <p><strong>Important Dates:</strong> Schedule significant events on dates that align with favorable personal numbers.</p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}