import React from "react"
import { ZodiacIcon } from "../ui/zodiac-icon"

export function CancerJupiterContentPage({ pageNumber }: { pageNumber: number }) {
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
              In the context of Jupiter in Cancer, fortune is intimately tied to the home and family. This could mean physical real estate investments that flourish or a family business that prospers under your care. It might also manifest as creating a home environment that others find healing and enriching, which brings you opportunities and deep satisfaction. Your ability to create comfort and security not only attracts good fortune but also helps you maintain it through stable, long-term channels.
            </p>

            <p>
              Your pathway to success is paved with emotional intelligence and intuition. Jupiter in Cancer bestows a keen sense of how to manage and understand emotions, both yours and others'. This emotional acuity enables you to navigate the workplace and personal relationships with a diplomat's grace. Success for you often involves roles that require empathy, like counseling, teaching, or healthcare. You excel in environments where you can use your innate understanding of human emotions to foster growth and harmony.
            </p>
          </div>

          {/* Right Column */}
          <div className="space-y-4 text-amber-100 text-sm leading-relaxed">
            <p>
              Generosity, when viewed through the lens of Jupiter in Cancer, is deeply personal and heartfelt. Your form of giving is about ensuring the emotional and physical well-being of those around you. Whether it's providing a shoulder to cry on, cooking a comforting meal, or offering your home as a sanctuary, your acts of kindness are profound and nurturing. This generosity not only endears you to others but also creates a network of goodwill that often circles back to you in unexpected ways.
            </p>

            <p>
              With all its benefits, Jupiter in Cancer does pose challenges, mainly in the form of overprotectiveness or emotional oversensitivity. Sometimes, your desire to protect can limit both your own growth and that of others, as you might struggle to let go. Learning to balance your protective instincts with the need to allow independence is a crucial part of leveraging Jupiter's influence positively.
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
