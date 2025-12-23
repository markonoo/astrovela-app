import React from "react"
import { ZodiacIcon } from "../ui/zodiac-icon"

export function LibraMarsContentPage({ pageNumber }: { pageNumber: number }) {
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
      <div className="flex-1 px-12 pb-16">
        <div className="grid grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Left Column */}
          <div className="space-y-4 text-amber-100 text-sm leading-relaxed">
            <p>
              For you as Mars in Libra, action is often motivated by the pursuit of justice, balance, and fairness. You are not one to rush headlong into situations. Instead, you consider the implications of your actions on your relationships and social harmony. This makes you exceptionally good at strategizing and planning in a way that accommodates all parties involved. Your actions are typically measured and often aimed at creating or restoring equilibrium, whether at work, in your personal relationships, or in your broader community.
            </p>

            <p>
              Assertiveness for Mars in Libra individuals is exercised with grace and tact. You possess an innate ability to assert yourself in ways that are not abrasive but rather persuasive and charming. You have a talent for making others feel included and understood, which often leads them to be more receptive to your viewpoints. However, this can sometimes lead to a tendency to compromise too much or avoid taking a stand in order to maintain peace. It is important for you to remember that true harmony sometimes requires confronting uncomfortable truths and making tough decisions.
            </p>

            <p>
              In conflict, your approach is one of mediation and peacekeeping. Mars in Libra detests unnecessary strife and seeks to resolve disputes through diplomacy and fair negotiations. You are adept at seeing multiple perspectives, which enables you to craft solutions that are acceptable to all involved.
            </p>
          </div>

          {/* Right Column */}
          <div className="space-y-4 text-amber-100 text-sm leading-relaxed">
            <p>
              This can make you an excellent negotiator in both personal and professional settings. However, the challenge lies in ensuring that this desire for peace does not lead to avoiding necessary confrontations that require a firmer hand.
            </p>

            <p>
              Sexually, Mars in Libra brings a desire for an intellectual and emotional connection that is just as strong as the physical one. You view sex as an extension of partnership and communication, and you seek a dynamic where there is mutual respect and affection. Your sexual drive is intertwined with the aesthetic and romantic aspects of intimacy; therefore, ambiance and setting play a significant role in your sexual fulfillment. You are attentive and considerate lovers, always mindful of your partner's desires, striving to maintain balance and harmony in your intimate relationships.
            </p>

            <p>
              To maximize the benefits of Mars in Libra, embrace your natural diplomatic skills while also developing the courage to assert yourself when necessary. Recognize that conflict is not always negative if handled constructively - it can lead to growth and better understanding. Balancing your peacekeeping tendencies with assertiveness will not only lead to greater personal satisfaction but also empower you to effect positive change in your surroundings.
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
