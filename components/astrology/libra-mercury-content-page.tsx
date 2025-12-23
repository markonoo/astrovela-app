import React from "react"
import { ZodiacIcon } from "../ui/zodiac-icon"

export function LibraMercuryContentPage({ pageNumber }: { pageNumber: number }) {
  return (
    <div className="h-full bg-black text-amber-200 flex flex-col">
      {/* Libra title with icon */}
      <div className="text-center pt-12 mb-8">
        <div className="text-5xl md:text-6xl font-light tracking-wide mb-6">
          LIBRA
        </div>
        {/* Zodiac icon */}
        <div className="flex justify-center mb-6">
          <ZodiacIcon sign="libra" size={80} className="text-amber-300" />
        </div>
      </div>

      {/* Two-column content */}
      <div className="flex-1 px-12 pb-16 overflow-auto">
        <div className="grid grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Left Column */}
          <div className="space-y-4 text-amber-100 text-sm leading-relaxed">
            <p>
              Libra, ruled by Venus, bestows a gracious and considerate quality to the mental processes. You are known for your fair-minded, diplomatic approach to thinking and communicating. This placement fosters a mind that seeks to bridge gaps and find common ground.
            </p>

            <p>
              With Mercury in Libra, your communication style is characterized by elegance and charm. You naturally seek harmony in conversations, striving to be polite and considerate. You thrive in situations that require negotiation or mediation, as you can articulate your thoughts in ways that are likely to be accepted and appreciated by all parties involved.
            </p>

            <p>
              Your decision-making process is balanced, often weighing all sides of an argument before reaching a conclusion. This can sometimes lead to indecision, especially when the options are equally appealing or when you fear making an unpopular choice. However, this trait also makes you a fair and trusted decision-maker.
            </p>
          </div>

          {/* Right Column */}
          <div className="space-y-4 text-amber-100 text-sm leading-relaxed">
            <p>
              As a Mercury in Libra, you thrive in social learning environments where discussion and cooperation are encouraged. You prefer learning with others rather than alone, benefiting greatly from group studies or collaborative projects. The exchange of ideas not only stimulates your intellect but also helps refine your viewpoints.
            </p>

            <p>
              Your thinking often has a creative, aesthetic dimension, influenced by Venus's love for beauty. You may find yourself drawn to subjects that involve art, design, or any field where aesthetics play a significant role. Your ability to think creatively about balance and form can lead to success in artistic or design-oriented professions.
            </p>

            <p>
              One of the challenges of having Mercury in Libra is a natural aversion to conflict and confrontation. You might find it difficult to express dissent or engage in debates that could lead to tension. While this ensures peace, it can sometimes prevent you from expressing your true thoughts or standing up for your ideas when necessary.
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
