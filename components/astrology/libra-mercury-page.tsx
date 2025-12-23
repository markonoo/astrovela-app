import React from "react"
import { ZodiacIcon } from "../ui/zodiac-icon"

interface LibraMercuryPageProps {
  pageNumber: number
}

export function LibraMercuryPage({ pageNumber }: LibraMercuryPageProps) {
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
            <ZodiacIcon sign="libra" size={60} className="text-amber-300" />
          </div>
          <h1 className="text-4xl font-light tracking-wider text-amber-300">LIBRA</h1>
        </div>

        {/* Content in two columns */}
        <div className="grid grid-cols-2 gap-8 px-8 text-sm leading-relaxed">
          <div className="space-y-4">
            <p className="text-white">
              <span className="text-amber-300 font-medium">Libra, ruled by Venus, bestows a gracious and considerate quality to the mental processes.</span> You are known for your fair-minded, diplomatic approach to thinking and communicating. This placement fosters a mind that seeks to bridge gaps and find common ground.
            </p>

            <p className="text-white">
              With Mercury in Libra, your communication style is characterized by elegance and charm. You naturally seek harmony in conversations, striving to be polite and considerate. You thrive in situations that require negotiation or mediation, as you can articulate your thoughts in ways that are likely to be accepted and appreciated by all parties involved.
            </p>

            <p className="text-white">
              Your decision-making process is balanced, often weighing all sides of an argument before reaching a conclusion. This can sometimes lead to indecision, especially when the options are equally appealing or when you fear making an unpopular choice. However, this trait also makes you a fair and trusted decision-maker.
            </p>

            <p className="text-white">
              As a Mercury in Libra, you thrive in social learning environments where discussion and cooperation are encouraged.
            </p>
          </div>

          <div className="space-y-4">
            <p className="text-white">
              You prefer learning with others rather than alone, benefiting greatly from group studies or collaborative projects. The exchange of ideas not only stimulates your intellect but also helps refine your viewpoints.
            </p>

            <p className="text-white">
              Your thinking often has a creative, aesthetic dimension, influenced by Venus's love for beauty. You may find yourself drawn to subjects that involve art, design, or any field where aesthetics play a significant role. Your ability to think creatively about balance and form can lead to success in artistic or design-oriented professions.
            </p>

            <p className="text-white">
              One of the challenges of having Mercury in Libra is a natural aversion to conflict and confrontation. You might find it difficult to express dissent or engage in debates that could lead to tension. While this ensures peace, it can sometimes prevent you from expressing your true thoughts or standing up for your ideas when necessary.
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
