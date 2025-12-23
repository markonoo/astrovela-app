import React from "react"
import { ZodiacIcon } from "../ui/zodiac-icon"

export function CapricornSaturnContentPage({ pageNumber }: { pageNumber: number }) {
  return (
    <div className="h-full bg-black text-amber-200 flex flex-col">
      {/* Capricorn title with icon */}
      <div className="text-center pt-12 mb-8">
        <div className="text-5xl md:text-6xl font-light tracking-wide mb-6">
          CAPRICORN
        </div>
        {/* Zodiac icon */}
        <div className="flex justify-center mb-6">
          <ZodiacIcon sign="capricorn" size={80} className="text-amber-300" />
        </div>
      </div>

      {/* Two-column content */}
      <div className="flex-1 px-12 pb-16 overflow-auto">
        <div className="grid grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Left Column */}
          <div className="space-y-4 text-amber-100 text-sm leading-relaxed">
            <p>
              For you as a Saturn in Capricorn, life is an ongoing lesson in the art of ambition and the virtue of persistence. Saturn teaches you to value the process as much as the result, guiding you to climb with care and prepare for setbacks as part of the journey to success. If this is your Saturn sign, you likely find that each challenge is a stepping stone and every failure a lesson in disguise, cultivating a resilience that is unmatched.
            </p>

            <p>
              The wisdom imparted by Saturn in Capricorn is tied to time and experience. You learn that true mastery takes years to develop and that shortcuts often lead to unstable foundations. This placement encourages a long-term view where slow and steady not only wins the race but strengthens you along the way. As you age, you become a repository of practical knowledge, able to guide others not just through words but through the example of your own life's structures.
            </p>
          </div>

          {/* Right Column */}
          <div className="space-y-4 text-amber-100 text-sm leading-relaxed">
            <p>
              Discipline in Capricorn involves rigorous self-control and an unyielding focus on end goals. Saturn instills a remarkable fortitude, enabling you to forgo immediate gratifications for future rewards. This disciplined approach often requires making tough decisions that favor duty over desire, shaping a character that is as respectable as it is capable. You become adept at creating strategies and schedules that maximize efficiency, making the most of every resource at your disposal.
            </p>

            <p>
              Saturn ensures that in Capricorn, every act of integrity and every lapse in judgment has long-term implications. Your commitment to doing things right—rather than taking the easy way out—builds a type of karmic credit that manifests as respect, authority, and achievement. Conversely, the consequences of cutting corners or stepping on others to rise higher are equally pronounced, teaching lessons that are hard but fair.
            </p>
          </div>
        </div>
      </div>

      {/* Page number */}
      <div className="text-center text-amber-200 text-lg font-light pb-8">
        {pageNumber}
      </div>
    </div>
  )
}
