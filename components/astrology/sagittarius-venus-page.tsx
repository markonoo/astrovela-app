import React from "react"
import { ZodiacIcon } from "../ui/zodiac-icon"

interface SagittariusVenusPageProps {
  pageNumber: number
}

export function SagittariusVenusPage({ pageNumber }: SagittariusVenusPageProps) {
  return (
    <div className="h-full bg-black text-white flex flex-col flex-1 relative">
      {/* Decorative corners with cross/X symbols */}
      <div className="absolute top-8 left-8">
        <div className="w-16 h-16 border border-amber-300 rounded-full flex items-center justify-center">
          <div className="relative">
            <div className="w-8 h-px bg-amber-300 transform rotate-45"></div>
            <div className="absolute inset-0 w-8 h-px bg-amber-300 transform -rotate-45"></div>
          </div>
        </div>
      </div>
      
      <div className="absolute top-8 right-8">
        <div className="w-16 h-16 border border-amber-300 rounded-full flex items-center justify-center">
          <div className="relative">
            <div className="w-8 h-px bg-amber-300 transform rotate-45"></div>
            <div className="absolute inset-0 w-8 h-px bg-amber-300 transform -rotate-45"></div>
          </div>
        </div>
      </div>

      {/* Main content area with border */}
      <div className="flex-1 mx-16 my-16 border border-amber-300 relative">
        {/* Title with symbol */}
        <div className="text-center mt-8 mb-8">
          <div className="flex justify-center mb-4">
            <ZodiacIcon sign="sagittarius" size={60} className="text-amber-300" />
          </div>
          <h1 className="text-4xl font-light tracking-wider text-amber-300">SAGITTARIUS</h1>
        </div>

        {/* Content in two columns */}
        <div className="grid grid-cols-2 gap-8 px-8 text-sm leading-relaxed">
          <div className="space-y-4">
            <p className="text-white">
              In love, Venus in Sagittarius seeks a partner in adventure. You are drawn to lovers who are not just romantic interests but also fellow explorers, whether that means traveling the world, exploring philosophical quests, or engaging in spirited debates. Your approach to relationships is open and honest, marked by a straightforwardness that can be refreshing yet blunt.
            </p>

            <p className="text-white">
              The ideal partner for you is someone who is intellectually stimulating, independent, and equally enthusiastic about living a life less ordinary. Your love life is filled with enthusiasm and freedom, and you cherish a partner who can give you the space you need to explore both independently and as a couple. Challenges may arise if you feel confined or bored, as your nature rebels against restrictions and routines.
            </p>

            <p className="text-white">
              Financially, Venus in Sagittarius can manifest as a somewhat carefree attitude toward money. You see it as a means to an end, not an end in itself. Your spending is often geared towards travel, education, or other experiences that expand your understanding of the world.
            </p>
          </div>

          <div className="space-y-4">
            <p className="text-white">
              While this can mean that saving isn't always a priority, you have a knack for attracting financial opportunities that allow you to maintain your desired lifestyle.
            </p>

            <p className="text-white">
              Your sense of beauty is eclectic and often influenced by various cultures and philosophies. You appreciate art that tells a story or captures the essence of a culture, and your artistic tastes are anything but static. In personal style, you may prefer outfits that are practical and comfortable, suitable for your next adventure, often with a touch of the exotic or unconventional.
            </p>

            <p className="text-white">
              Creatively, Venus in Sagittarius gives you a visionary edge. Whether it's through writing, filmmaking, or painting, your art often explores themes of freedom, travel, and the human spirit's quest for meaning. You are not afraid to tackle big questions in your work, and you often draw inspiration from your travels and interactions with diverse cultures.
            </p>
          </div>
        </div>

        {/* Bottom decorative corners */}
        <div className="absolute bottom-8 left-8">
          <div className="w-16 h-16 border border-amber-300 rounded-full flex items-center justify-center">
            <div className="relative">
              <div className="w-8 h-px bg-amber-300 transform rotate-45"></div>
              <div className="absolute inset-0 w-8 h-px bg-amber-300 transform -rotate-45"></div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 right-8">
          <div className="w-16 h-16 border border-amber-300 rounded-full flex items-center justify-center">
            <div className="relative">
              <div className="w-8 h-px bg-amber-300 transform rotate-45"></div>
              <div className="absolute inset-0 w-8 h-px bg-amber-300 transform -rotate-45"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Page number */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="text-amber-300 text-lg font-light">{pageNumber}</div>
      </div>
    </div>
  )
}
