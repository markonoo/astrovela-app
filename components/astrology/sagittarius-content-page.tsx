import React from "react"
import { ZodiacIcon } from "../ui/zodiac-icon"

export function SagittariusContentPage({ pageNumber }: { pageNumber: number }) {
  return (
    <div className="h-full bg-black text-amber-200 flex flex-col">
      {/* Sagittarius title with icon */}
      <div className="text-center pt-12 mb-8">
        <div className="text-5xl md:text-6xl font-light tracking-wide mb-6">
          SAGITTARIUS
        </div>
        {/* Zodiac icon */}
        <div className="flex justify-center mb-6">
          <ZodiacIcon sign="sagittarius" size={80} className="text-amber-300" />
        </div>
      </div>

      {/* Two-column content */}
      <div className="flex-1 px-12 pb-16 overflow-auto">
        <div className="grid grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Left Column */}
          <div className="space-y-4 text-amber-100 text-sm leading-relaxed">
            <p>
              You embody an aura of adventure and optimism. As a Sagittarius rising, you are known for your bright, forward-thinking attitude and a constant quest for knowledge and experience. You are seen as the eternal student and traveler of the zodiac, always searching for the bigger picture and higher truth.
            </p>

            <p>
              Your approach to life is characterized by a desire for freedom and expansion. You thrive in open, dynamic environments where you can express your independence and urge for exploration. In social settings, this translates to a generous and inclusive attitude, making others feel welcomed in your quest for new experiences.
            </p>

            <p>
              With a mind as broad as the horizon, you engage others in discussions that explore life's big questions. Your conversations often touch on topics of philosophy, travel, culture, and the meaning of life. Friends may find your perspective refreshing and enlightening, as you help them see beyond their immediate surroundings.
            </p>

            <p>
              Your optimism is infectious. You have a talent for seeing the silver lining and encouraging others to do the same. Your positive outlook and jovial nature make you a sought-after companion in both good times and bad.
            </p>
          </div>

          {/* Right Column */}
          <div className="space-y-4 text-amber-100 text-sm leading-relaxed">
            <p>
              However, your Sagittarius rising can sometimes lead to challenges, particularly your tendency to be overly blunt or to commit to more than you can handle due to your eternal optimism. Balancing your expansive nature with some practical considerations and sensitivity to others' feelings can enhance your relationships and personal growth.
            </p>

            <p>
              For personal growth, embracing a bit of structure and recognizing the value of small, detailed steps can help you achieve your grand visions. Learning to appreciate the journey as much as the destination will add depth to your adventures.
            </p>

            <p>
              In relationships, your love for freedom needs to be balanced with commitment and attentiveness. Ensuring that your quest for independence doesn't overshadow your connections with others will lead to deeper and more meaningful partnerships.
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
