import React from "react"
import { Section } from "./base/Section"

interface StarryTransitionProps {
  pageNumber: number
}

export function StarryTransition({ pageNumber }: StarryTransitionProps) {
  return (
    <div className="h-full bg-gradient-to-br from-indigo-900 via-purple-900 to-black text-white flex flex-col flex-1 relative">
      <Section className="page-dark relative overflow-hidden">
        {/* Animated Stars */}
        {Array.from({ length: 30 }).map((_, i) => (
          <div key={i}
            className="absolute text-white opacity-60 animate-pulse"
            style={{
              left: `${Math.random() * 90 + 5}%`,
              top: `${Math.random() * 80 + 10}%`,
              fontSize: `${Math.random() * 12 + 6}px`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          >
            ✦
          </div>
        ))}

        {/* Constellation Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-30">
          <line x1="20%" y1="30%" x2="40%" y2="20%" stroke="white" strokeWidth="1" />
          <line x1="40%" y1="20%" x2="60%" y2="35%" stroke="white" strokeWidth="1" />
          <line x1="60%" y1="35%" x2="80%" y2="25%" stroke="white" strokeWidth="1" />
          <line x1="30%" y1="60%" x2="50%" y2="70%" stroke="white" strokeWidth="1" />
          <line x1="50%" y1="70%" x2="70%" y2="60%" stroke="white" strokeWidth="1" />
        </svg>

        <div className="flex flex-col items-center justify-center h-full text-center relative z-10">
          {/* Central Cosmic Symbol */}
          <div className="mb-8">
            <div className="w-32 h-32 border-2 border-white rounded-full flex items-center justify-center relative animate-spin" style={{animationDuration: '20s'}}>
              <div className="text-white text-5xl">✧</div>
              {/* Orbiting elements */}
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i}
                  className="absolute w-2 h-2 bg-white rounded-full"
                  style={{
                    left: "50%",
                    top: "50%",
                    transform: `translate(-50%, -50%) rotate(${i * 45}deg) translateY(-4rem)`,
                  }}
                />
              ))}
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-light mb-6 tracking-[0.15em] font-serif text-white">
            COSMIC JOURNEY
          </h1>
          
          <div className="w-32 h-0.5 bg-white mb-8 opacity-70"></div>

          <div className="space-y-6 max-w-2xl">
            <p className="text-lg leading-relaxed text-purple-200">
              As we traverse the celestial pathways of knowledge, each star guides us 
              deeper into the mysteries of existence.
            </p>

            <p className="text-sm leading-relaxed text-purple-300">
              The cosmos speaks in symbols and synchronicities, revealing the 
              interconnected nature of all things through the eternal dance of 
              planets, stars, and consciousness.
            </p>
          </div>

          {/* Floating Elements */}
          <div className="flex items-center justify-center mt-12 space-x-8">
            <div className="w-3 h-3 bg-white rounded-full opacity-60 animate-bounce" style={{animationDelay: '0s'}}></div>
            <div className="w-3 h-3 bg-white rounded-full opacity-60 animate-bounce" style={{animationDelay: '0.5s'}}></div>
            <div className="w-3 h-3 bg-white rounded-full opacity-60 animate-bounce" style={{animationDelay: '1s'}}></div>
          </div>
        </div>

      </Section>
    </div>
  )
}