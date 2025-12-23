import React from "react"
import { ZodiacIcon } from "../ui/zodiac-icon"

export function PiscesContentPage({ pageNumber }: { pageNumber: number }) {
  return (
    <div className="h-full bg-black text-amber-200 flex flex-col">
      {/* Pisces title with icon */}
      <div className="text-center pt-12 mb-8">
        <div className="text-5xl md:text-6xl font-light tracking-wide mb-6">
          PISCES
        </div>
        {/* Zodiac icon */}
        <div className="flex justify-center mb-6">
          <ZodiacIcon sign="pisces" size={80} className="text-amber-300" />
        </div>
      </div>

      {/* Two-column content */}
      <div className="flex-1 px-12 pb-16 overflow-auto">
        <div className="grid grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Left Column */}
          <div className="space-y-4 text-amber-100 text-sm leading-relaxed">
            <p>
              Pisces, ruled by Neptune, the planet of dreams and mysticism, influences you with an otherworldly quality. You find emotional satisfaction in transcending the mundane to connect with the spiritual or the universal. Your inner life is rich with a vivid imagination and an unshakeable sense of compassion for all living beings.
            </p>

            <p>
              Your emotions are like the ocean—vast, mysterious, and often influenced by the tides of those around you. You have a unique ability to absorb the feelings of others, which can be both a gift and a burden, as it allows for deep empathy but also leaves you vulnerable to emotional overwhelm.
            </p>

            <p>
              Beneath the surface, your Pisces Moon equips you with incredible strengths:
            </p>

            <p>
              <span className="font-semibold text-amber-200">• ADAPTABILITY:</span> You are highly adaptable, able to fit yourself into different situations and understand various perspectives with ease.
            </p>

            <p>
              <span className="font-semibold text-amber-200">• HEALING ABILITIES:</span> You have a natural healing ability, providing comfort and solace to those in distress through your mere presence or through artistic expressions like music or art.
            </p>
          </div>

          {/* Right Column */}
          <div className="space-y-4 text-amber-100 text-sm leading-relaxed">
            <p>
              <span className="font-semibold text-amber-200">• SPIRITUAL DEPTH:</span> You possess a deep spiritual reservoir that guides you, often leading you to seek out transcendent experiences in both your personal life and your interactions with the world.
            </p>

            <p>
              To thrive with a Pisces Moon, it is essential to create boundaries to protect your emotional well-being. Engage in practices that ground you and help you distinguish your emotions from those of others. Meditation, journaling, or spending time near water can provide the necessary clarity and calm.
            </p>

            <p>
              Embrace your creative and intuitive nature by allowing yourself regular outlets for these expressions, whether through art, helping others, or exploring spirituality. Remember, while your capacity to feel deeply is your strength, managing how much you take on from others is crucial for maintaining your health and happiness.
            </p>

            <p>
              If you've ever been described as "too sensitive" or "a dreamer," know that these traits are the very essence of your Pisces Moon's power. They allow you to experience life not just as a series of events but as a profound emotional and spiritual journey. Embrace your sensitivity and intuition—they do not make you weak; they make you whole.
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
