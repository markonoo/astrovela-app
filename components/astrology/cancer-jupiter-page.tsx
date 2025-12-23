import React from "react"
import { ZodiacIcon } from "../ui/zodiac-icon"

interface CancerJupiterPageProps {
  pageNumber: number
}

export function CancerJupiterPage({ pageNumber }: CancerJupiterPageProps) {
  return (
    <div className="h-full bg-black text-white flex flex-col flex-1 relative">
      {/* Decorative corners with Cancer symbols */}
      <div className="absolute top-8 left-8">
        <div className="w-16 h-16 border border-amber-300 rounded-full flex items-center justify-center">
          <ZodiacIcon sign="cancer" size={24} className="text-amber-300" />
        </div>
      </div>
      
      <div className="absolute top-8 right-8">
        <div className="w-16 h-16 border border-amber-300 rounded-full flex items-center justify-center">
          <ZodiacIcon sign="cancer" size={24} className="text-amber-300" />
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
              In the context of Jupiter in Cancer, fortune is intimately tied to the home and family. This could mean physical real estate investments that flourish or a family business that prospers under your care. It might also manifest as creating a home environment that others find healing and enriching, which brings you opportunities and deep satisfaction. Your ability to create comfort and security not only attracts good fortune but also helps you maintain it through stable, long-term channels.
            </p>

            <p className="text-white">
              Your pathway to success is paved with emotional intelligence and intuition. Jupiter in Cancer bestows a keen sense of how to manage and understand emotions, both yours and others'. This emotional acuity enables you to navigate the workplace and personal relationships with a diplomat's grace. Success for you often involves roles that require empathy, like counseling, teaching, or healthcare. You excel in environments where you can use your innate understanding of human emotions to foster growth and harmony.
            </p>
          </div>

          <div className="space-y-4">
            <p className="text-white">
              Generosity, when viewed through the lens of Jupiter in Cancer, is deeply personal and heartfelt. Your form of giving is about ensuring the emotional and physical well-being of those around you. Whether it's providing a shoulder to cry on, cooking a comforting meal, or offering your home as a sanctuary, your acts of kindness are profound and nurturing. This generosity not only endears you to others but also creates a network of goodwill that often circles back to you in unexpected ways.
            </p>

            <p className="text-white">
              With all its benefits, Jupiter in Cancer does pose challenges, mainly in the form of overprotectiveness or emotional oversensitivity. Sometimes, your desire to protect can limit both your own growth and that of others, as you might struggle to let go. Learning to balance your protective instincts with the need to allow independence is a crucial part of leveraging Jupiter's influence positively.
            </p>
          </div>
        </div>

        {/* Bottom decorative corners */}
        <div className="absolute bottom-8 left-8">
          <div className="w-16 h-16 border border-amber-300 rounded-full flex items-center justify-center">
            <ZodiacIcon sign="cancer" size={24} className="text-amber-300" />
          </div>
        </div>
        
        <div className="absolute bottom-8 right-8">
          <div className="w-16 h-16 border border-amber-300 rounded-full flex items-center justify-center">
            <ZodiacIcon sign="cancer" size={24} className="text-amber-300" />
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
