import React from "react"
import { Section } from "./base/Section"

interface ModernAstrologyPageProps {
  pageNumber: number
}

export function ModernAstrologyPage({ pageNumber }: ModernAstrologyPageProps) {
  return (
    <div className="h-full bg-gradient-to-br from-slate-900 to-gray-900 text-white flex flex-col flex-1 relative">
      <Section className="page-dark relative overflow-hidden">
        {/* Modern geometric background */}
        <div className="absolute inset-0 opacity-20">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i}
              className="absolute border border-slate-400 rounded-full"
              style={{
                width: `${100 + i * 50}px`,
                height: `${100 + i * 50}px`,
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-8">
          <div className="text-center mb-10">
            <h1 className="text-5xl md:text-6xl font-light mb-6 tracking-[0.15em] font-serif text-slate-200">
              MODERN ASTROLOGY
            </h1>
            <div className="text-sm text-slate-400 mb-8">
              Contemporary applications of ancient wisdom
            </div>
          </div>

          <div className="space-y-10">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 md:p-8 shadow-sm border border-slate-600">
              <h2 className="text-xl font-medium mb-4 text-slate-200">Astrology Today</h2>
              <p className="text-sm leading-relaxed text-slate-300">
                Modern astrology has evolved far beyond simple fortune-telling to become a sophisticated tool 
                for self-understanding, personal growth, and psychological insight. Today's astrologers combine 
                ancient wisdom with contemporary knowledge of psychology, astronomy, and human development.
              </p>
            </div>

            <div className="relative">
              {/* decorative connectors */}
              <div className="pointer-events-none absolute inset-0 hidden md:block">
                <svg width="100%" height="100%" viewBox="0 0 1200 600" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="conn" x1="0" x2="1" y1="0" y2="0">
                      <stop offset="0%" stopColor="rgba(148,163,184,0.25)" />
                      <stop offset="50%" stopColor="rgba(148,163,184,0.4)" />
                      <stop offset="100%" stopColor="rgba(148,163,184,0.25)" />
                    </linearGradient>
                  </defs>
                  <path d="M 200 170 Q 600 240 1000 170" stroke="url(#conn)" strokeWidth="2" strokeDasharray="6 6" fill="none" />
                  <path d="M 200 430 Q 600 360 1000 430" stroke="url(#conn)" strokeWidth="2" strokeDasharray="6 6" fill="none" />
                </svg>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 shadow-sm border border-slate-600">
                <h3 className="text-lg font-medium mb-3 text-slate-200">Therapeutic Applications</h3>
                <p className="text-sm leading-relaxed text-slate-300">
                  Astrology is increasingly used in therapeutic settings to explore personality patterns, 
                  relationship dynamics, and life transitions, offering clients new perspectives on their experiences.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 shadow-sm border border-slate-600">
                <h3 className="text-lg font-medium mb-3 text-slate-200">Business & Timing</h3>
                <p className="text-sm leading-relaxed text-slate-300">
                  Electional astrology helps with timing important decisions, while business astrology provides 
                  insights into market cycles, team dynamics, and optimal timing for ventures.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 shadow-sm border border-slate-600">
                <h3 className="text-lg font-medium mb-3 text-slate-200">Relationship Counseling</h3>
                <p className="text-sm leading-relaxed text-slate-300">
                  Synastry and composite charts help couples understand their dynamics, while family astrology 
                  explores generational patterns and parent-child relationships.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 shadow-sm border border-slate-600">
                <h3 className="text-lg font-medium mb-3 text-slate-200">Scientific Integration</h3>
                <p className="text-sm leading-relaxed text-slate-300">
                  Modern astrology increasingly incorporates astronomical accuracy, statistical research, 
                  and evidence-based practices while maintaining its symbolic and archetypal foundations.
                </p>
              </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}