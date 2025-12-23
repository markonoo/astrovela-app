import React from "react"
import { ZodiacIcon } from "../ui/zodiac-icon"

interface LibraMarsPageProps {
  pageNumber: number
}

export function LibraMarsPage({ pageNumber }: LibraMarsPageProps) {
  return (
    <div className="h-full bg-black text-white flex flex-col flex-1 relative">
      {/* Decorative corners with arrow symbols */}
      <div className="absolute top-8 left-8">
        <div className="w-16 h-16 border border-amber-300 rounded-full flex items-center justify-center">
          <div className="relative">
            <div className="w-6 h-px bg-amber-300"></div>
            <div className="absolute right-0 top-0 w-2 h-2 border-r-2 border-t-2 border-amber-300 transform rotate-45 -translate-y-1"></div>
          </div>
        </div>
      </div>
      
      <div className="absolute top-8 right-8">
        <div className="w-16 h-16 border border-amber-300 rounded-full flex items-center justify-center">
          <div className="relative">
            <div className="w-6 h-px bg-amber-300"></div>
            <div className="absolute right-0 top-0 w-2 h-2 border-r-2 border-t-2 border-amber-300 transform rotate-45 -translate-y-1"></div>
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
              For you as Mars in Libra, action is often motivated by the pursuit of justice, balance, and fairness. You are not one to rush headlong into situations. Instead, you consider the implications of your actions on your relationships and social harmony. This makes you exceptionally good at strategizing and planning in a way that accommodates all parties involved. Your actions are typically measured and often aimed at creating or restoring equilibrium, whether at work, in your personal relationships, or in your broader community.
            </p>

            <p className="text-white">
              Assertiveness for Mars in Libra individuals is exercised with grace and tact. You possess an innate ability to assert yourself in ways that are not abrasive but rather persuasive and charming. You have a talent for making others feel included and understood, which often leads them to be more receptive to your viewpoints. However, this can sometimes lead to a tendency to compromise too much or avoid taking a stand in order to maintain peace. It is important for you to remember that true harmony sometimes requires confronting uncomfortable truths and making tough decisions.
            </p>

            <p className="text-white">
              In conflict, your approach is one of mediation and peacekeeping. Mars in Libra detests unnecessary strife and seeks to
            </p>
          </div>

          <div className="space-y-4">
            <p className="text-white">
              resolve disputes through diplomacy and fair negotiations. You are adept at seeing multiple perspectives, which enables you to craft solutions that are acceptable to all involved. This can make you an excellent negotiator in both personal and professional settings. However, the challenge lies in ensuring that this desire for peace does not lead to avoiding necessary confrontations that require a firmer hand.
            </p>

            <p className="text-white">
              Sexually, Mars in Libra brings a desire for an intellectual and emotional connection that is just as strong as the physical one. You view sex as an extension of partnership and communication, and you seek a dynamic where there is mutual respect and affection. Your sexual drive is intertwined with the aesthetic and romantic aspects of intimacy; therefore, ambiance and setting play a significant role in your sexual fulfillment. You are attentive and considerate lovers, always mindful of your partner's desires, striving to maintain balance and harmony in your intimate relationships.
            </p>

            <p className="text-white">
              To maximize the benefits of Mars in Libra, embrace your natural diplomatic skills while also developing the courage to assert yourself when necessary. Recognize that conflict is not always negative if handled constructively - it can lead to growth and better understanding. Balancing your peacekeeping tendencies with assertiveness will not only lead to greater personal satisfaction but also empower you to effect positive change in your surroundings.
            </p>
          </div>
        </div>

        {/* Bottom decorative corners */}
        <div className="absolute bottom-8 left-8">
          <div className="w-16 h-16 border border-amber-300 rounded-full flex items-center justify-center">
            <div className="relative">
              <div className="w-6 h-px bg-amber-300"></div>
              <div className="absolute right-0 top-0 w-2 h-2 border-r-2 border-t-2 border-amber-300 transform rotate-45 -translate-y-1"></div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 right-8">
          <div className="w-16 h-16 border border-amber-300 rounded-full flex items-center justify-center">
            <div className="relative">
              <div className="w-6 h-px bg-amber-300"></div>
              <div className="absolute right-0 top-0 w-2 h-2 border-r-2 border-t-2 border-amber-300 transform rotate-45 -translate-y-1"></div>
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
