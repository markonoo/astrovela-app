import React from "react"
import { ZodiacIcon } from "../ui/zodiac-icon"

export function CancerChironContentPage({ pageNumber }: { pageNumber: number }) {
  return (
    <div className="h-full bg-black text-amber-200 flex flex-col">
      {/* Cancer title with icon */}
      <div className="text-center pt-12 mb-8">
        <div className="text-5xl md:text-6xl font-light tracking-wide mb-6">
          CANCER
        </div>
        {/* Zodiac icon */}
        <div className="flex justify-center mb-6">
          <ZodiacIcon sign="cancer" size={80} className="text-amber-300" />
        </div>
      </div>

      {/* Two-column content */}
      <div className="flex-1 px-12 pb-16 overflow-auto">
        <div className="grid grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Left Column */}
          <div className="space-y-4 text-amber-100 text-sm leading-relaxed">
            <p>
              When Chiron's shadow casts over you, it exposes vulnerabilities linked to these very strengths. Your typical Chiron wound might revolve around themes of abandonment, unmet emotional needs, or feeling unappreciated for your care. These experiences can stem from early family dynamics where your efforts to nurture were overlooked or where you felt you had to become the caretaker at too young an age.
            </p>

            <p>
              Your Chiron wound might manifest as a tendency to overextend yourself emotionally, giving more than you receive to the point of feeling drained. Alternatively, you might swing to the opposite extreme, building walls too high and thick, shielding your true feelings to avoid further hurt. The healing journey for you involves recognizing these patterns and understanding that true nurturing begins with self-care and setting healthy boundaries.
            </p>

            <p>
              Healing for you comes through learning that it is not only okay but necessary to ask for and receive the same level of care and affection you so freely give. This process often involves deep inner work, possibly through therapy, meditation, or soul-searching retreats, where you learn to reconnect with your own needs and express them effectively.
            </p>
          </div>

          {/* Right Column */}
          <div className="space-y-4 text-amber-100 text-sm leading-relaxed">
            <p>
              As you heal, you often develop an intuitive understanding of emotional wounds, not just in yourself but in others, allowing you to become a powerful healer, counselor, or advocate.
            </p>

            <p>
              The transformation under Chiron's influence enhances your inherent empathetic nature. You become adept at helping others navigate their emotional landscapes. Your personal journey through pain and healing equips you with the tools to support others in a way that is both profound and practical. You might find yourself drawn to professions such as psychology, nursing, or social work, where you can use your experiences to empathize deeply and provide comfort.
            </p>

            <p>
              In personal relationships you become an even more attentive partner, friend, or family member. You understand the importance of mutual support and are often the ones initiating conversations about feelings, encouraging loved ones to open up and share vulnerabilities in a safe space. Your own healing journey makes you particularly sensitive to the emotional needs of others, and you often possess just the right words or actions to help soothe and heal.
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
