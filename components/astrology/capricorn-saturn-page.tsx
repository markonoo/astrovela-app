import React from "react"
import { ZodiacIcon } from "../ui/zodiac-icon"

interface CapricornSaturnPageProps {
  pageNumber: number
}

export function CapricornSaturnPage({ pageNumber }: CapricornSaturnPageProps) {
  return (
    <div className="h-full bg-black text-white flex flex-col flex-1 relative">
      {/* Main content area with refined decorative border */}
      <div className="flex-1 mx-20 my-20 border-[1.5px] border-amber-300/80 relative rounded-lg">
        {/* Refined corner ornaments */}
        <div className="absolute -top-3 -left-3">
          <div className="w-12 h-12 border-[1.5px] border-amber-300/80 rounded-full flex items-center justify-center bg-black">
            <ZodiacIcon sign="capricorn" size={20} className="text-amber-300" />
          </div>
        </div>
        
        <div className="absolute -top-3 -right-3">
          <div className="w-12 h-12 border-[1.5px] border-amber-300/80 rounded-full flex items-center justify-center bg-black">
            <ZodiacIcon sign="capricorn" size={20} className="text-amber-300" />
          </div>
        </div>
        
        <div className="absolute -bottom-3 -left-3">
          <div className="w-12 h-12 border-[1.5px] border-amber-300/80 rounded-full flex items-center justify-center bg-black">
            <ZodiacIcon sign="capricorn" size={20} className="text-amber-300" />
          </div>
        </div>
        
        <div className="absolute -bottom-3 -right-3">
          <div className="w-12 h-12 border-[1.5px] border-amber-300/80 rounded-full flex items-center justify-center bg-black">
            <ZodiacIcon sign="capricorn" size={20} className="text-amber-300" />
          </div>
        </div>

        {/* Title with symbol */}
        <div className="text-center mt-12 mb-10">
          <div className="flex justify-center mb-5">
            <ZodiacIcon sign="capricorn" size={48} className="text-amber-300" />
          </div>
          <h1 className="text-5xl font-light tracking-[0.15em] text-amber-300 font-serif">CAPRICORN</h1>
        </div>

        {/* Content in two columns with improved typography */}
        <div className="grid grid-cols-2 gap-10 px-12 pb-16 text-[0.9rem] leading-[1.7] text-justify">
          <div className="space-y-5">
            <p className="text-white/90 font-normal">
              For you as a Saturn in Capricorn, life is an ongoing lesson in the art of ambition and the virtue of persistence. Saturn teaches you to value the process as much as the result, guiding you to climb with care and prepare for setbacks as part of the journey to success. If this is your Saturn sign, you likely find that each challenge is a stepping stone and every failure a lesson in disguise, cultivating a resilience that is unmatched.
            </p>

            <p className="text-white/90 font-normal">
              The wisdom imparted by Saturn in Capricorn is tied to time and experience. You learn that true mastery takes years to develop and that shortcuts often lead to unstable foundations. This placement encourages a long-term view where slow and steady not only wins the race but strengthens you along the way. As you age, you become a repository of practical knowledge, able to guide others not just through words but through the example of your own life's structures.
            </p>
          </div>

          <div className="space-y-5">
            <p className="text-white/90 font-normal">
              Discipline in Capricorn involves rigorous self-control and an unyielding focus on end goals. Saturn instills a remarkable fortitude, enabling you to forgo immediate gratifications for future rewards. This disciplined approach often requires making tough decisions that favor duty over desire, shaping a character that is as respectable as it is capable. You become adept at creating strategies and schedules that maximize efficiency, making the most of every resource at your disposal.
            </p>

            <p className="text-white/90 font-normal">
              Saturn ensures that in Capricorn, every act of integrity and every lapse in judgment has long-term implications. Your commitment to doing things right—rather than taking the easy way out—builds a type of karmic credit that manifests as respect, authority, and achievement. Conversely, the consequences of cutting corners or stepping on others to rise higher are equally pronounced, teaching lessons that are hard but fair.
            </p>
          </div>
        </div>
      </div>

      {/* Page number */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <div className="text-amber-300/80 text-base font-light tracking-widest">{pageNumber}</div>
      </div>
    </div>
  )
}
