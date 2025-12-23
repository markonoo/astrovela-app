import React from "react"
import { ZodiacIcon } from "../ui/zodiac-icon"

export function SagittariusVenusContentPage({ pageNumber }: { pageNumber: number }) {
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
              In love, Venus in Sagittarius seeks a partner in adventure. You are drawn to lovers who are not just romantic interests but also fellow explorers, whether that means traveling the world, exploring philosophical quests, or engaging in spirited debates. Your approach to relationships is open and honest, marked by a straightforwardness that can be refreshing yet blunt.
            </p>

            <p>
              The ideal partner for you is someone who is intellectually stimulating, independent, and equally enthusiastic about living a life less ordinary. Your love life is filled with enthusiasm and freedom, and you cherish a partner who can give you the space you need to explore both independently and as a couple. Challenges may arise if you feel confined or bored, as your nature rebels against restrictions and routines.
            </p>

            <p>
              Financially, Venus in Sagittarius can manifest as a somewhat carefree attitude toward money. You see it as a means to an end, not an end in itself. Your spending is often geared towards travel, education, or other experiences that expand your understanding of the world.
            </p>
          </div>

          {/* Right Column */}
          <div className="space-y-4 text-amber-100 text-sm leading-relaxed">
            <p>
              While this can mean that saving isn't always a priority, you have a knack for attracting financial opportunities that allow you to maintain your desired lifestyle.
            </p>

            <p>
              Your sense of beauty is eclectic and often influenced by various cultures and philosophies. You appreciate art that tells a story or captures the essence of a culture, and your artistic tastes are anything but static. In personal style, you may prefer outfits that are practical and comfortable, suitable for your next adventure, often with a touch of the exotic or unconventional.
            </p>

            <p>
              Creatively, Venus in Sagittarius gives you a visionary edge. Whether it's through writing, filmmaking, or painting, your art often explores themes of freedom, travel, and the human spirit's quest for meaning. You are not afraid to tackle big questions in your work, and you often draw inspiration from your travels and interactions with diverse cultures.
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
