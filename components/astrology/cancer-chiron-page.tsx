import React from "react"
import { ZodiacIcon } from "../ui/zodiac-icon"

interface CancerChironPageProps {
  pageNumber: number
}

export function CancerChironPage({ pageNumber }: CancerChironPageProps) {
  return (
    <div className="h-full bg-black text-white flex flex-col flex-1 relative">
      {/* Decorative corners with healing symbols */}
      <div className="absolute top-8 left-8">
        <div className="w-16 h-16 border border-amber-300 rounded-full flex items-center justify-center">
          <div className="relative">
            <div className="w-6 h-px bg-amber-300"></div>
            <div className="absolute inset-0 w-px h-6 bg-amber-300"></div>
            <div className="absolute inset-0 w-4 h-4 border border-amber-300 rounded-full"></div>
          </div>
        </div>
      </div>
      
      <div className="absolute top-8 right-8">
        <div className="w-16 h-16 border border-amber-300 rounded-full flex items-center justify-center">
          <div className="relative">
            <div className="w-6 h-px bg-amber-300"></div>
            <div className="absolute inset-0 w-px h-6 bg-amber-300"></div>
            <div className="absolute inset-0 w-4 h-4 border border-amber-300 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Main content area with border */}
      <div className="flex-1 mx-16 my-16 border border-amber-300 relative">
        {/* Title with symbol */}
        <div className="text-center mt-8 mb-8">
          <div className="flex justify-center mb-4">
            <ZodiacIcon sign="cancer" size={60} className="text-amber-300" />
          </div>
          <h1 className="text-4xl font-light tracking-wider text-amber-300">CANCER</h1>
        </div>

        {/* Content in two columns */}
        <div className="grid grid-cols-2 gap-8 px-8 text-sm leading-relaxed">
          <div className="space-y-4">
            <p className="text-white">
              When Chiron's shadow casts over you, it exposes vulnerabilities linked to these very strengths. Your typical Chiron wound might revolve around themes of abandonment, unmet emotional needs, or feeling unappreciated for your care. These experiences can stem from early family dynamics where your efforts to nurture were overlooked or where you felt you had to become the caretaker at too young an age.
            </p>

            <p className="text-white">
              Your Chiron wound might manifest as a tendency to overextend yourself emotionally, giving more than you receive to the point of feeling drained. Alternatively, you might swing to the opposite extreme, building walls too high and thick, shielding your true feelings to avoid further hurt. The healing journey for you involves recognizing these patterns and understanding that true nurturing begins with self-care and setting healthy boundaries.
            </p>

            <p className="text-white">
              Healing for you comes through learning that it is not only okay but necessary to ask for and receive the same level of care and affection you so freely give. This process often involves deep inner work, possibly through therapy, meditation, or soul-searching retreats, where you learn to reconnect with your own needs and express them effectively.
            </p>
          </div>

          <div className="space-y-4">
            <p className="text-white">
              As you heal, you often develop an intuitive understanding of emotional wounds, not just in yourself but in others, allowing you to become a powerful healer, counselor, or advocate.
            </p>

            <p className="text-white">
              The transformation under Chiron's influence enhances your inherent empathetic nature. You become adept at helping others navigate their emotional landscapes. Your personal journey through pain and healing equips you with the tools to support others in a way that is both profound and practical. You might find yourself drawn to professions such as psychology, nursing, or social work, where you can use your experiences to empathize deeply and provide comfort.
            </p>

            <p className="text-white">
              In personal relationships you become an even more attentive partner, friend, or family member. You understand the importance of mutual support and are often the ones initiating conversations about feelings, encouraging loved ones to open up and share vulnerabilities in a safe space. Your own healing journey makes you particularly sensitive to the emotional needs of others, and you often possess just the right words or actions to help soothe and heal.
            </p>
          </div>
        </div>

        {/* Bottom decorative corners */}
        <div className="absolute bottom-8 left-8">
          <div className="w-16 h-16 border border-amber-300 rounded-full flex items-center justify-center">
            <div className="relative">
              <div className="w-6 h-px bg-amber-300"></div>
              <div className="absolute inset-0 w-px h-6 bg-amber-300"></div>
              <div className="absolute inset-0 w-4 h-4 border border-amber-300 rounded-full"></div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 right-8">
          <div className="w-16 h-16 border border-amber-300 rounded-full flex items-center justify-center">
            <div className="relative">
              <div className="w-6 h-px bg-amber-300"></div>
              <div className="absolute inset-0 w-px h-6 bg-amber-300"></div>
              <div className="absolute inset-0 w-4 h-4 border border-amber-300 rounded-full"></div>
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
