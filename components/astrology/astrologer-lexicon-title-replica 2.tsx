import React from "react"

interface AstrologerLexiconTitleReplicaProps {
  pageNumber: number
}

export function AstrologerLexiconTitleReplica({ pageNumber }: AstrologerLexiconTitleReplicaProps) {
  return (
    <div className="h-full relative overflow-hidden flex items-center justify-center">
      {/* Full-page cosmic background image */}
      <img 
        src="/astrologer-lexicon-cosmic-bg.png" 
        alt="Cosmic nebula background" 
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Content overlay */}
      <div className="relative z-10 text-center px-12">
        <h1 className="text-7xl md:text-8xl font-light tracking-[0.15em] font-serif text-amber-200 mb-8" style={{
          textShadow: '2px 2px 8px rgba(0,0,0,0.8)'
        }}>
          ASTROLOGER'S<br />LEXICON
        </h1>

        {/* Decorative "A" initial */}
        <div className="flex justify-center mb-8">
          <div className="text-amber-400 font-serif italic" style={{ 
            fontSize: '120px', 
            lineHeight: '1',
            textShadow: '2px 2px 6px rgba(0,0,0,0.7)'
          }}>
            A
          </div>
        </div>

        {/* Description text */}
        <div className="max-w-2xl mx-auto text-base leading-relaxed text-amber-100">
          <p className="mb-4 font-medium" style={{
            textShadow: '1px 1px 4px rgba(0,0,0,0.8)'
          }}>
            <span className="font-bold">strology has many terms and symbols that might seem confusing at first. This dictionary is a helpful guide, explaining these words in a simple way. It helps you understand astrology better, whether you're just starting to learn about it or looking to deepen your knowledge.</span>
          </p>
        </div>
      </div>

      {/* Page number */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-amber-200 text-lg z-10" style={{
        textShadow: '1px 1px 4px rgba(0,0,0,0.8)'
      }}>
        {pageNumber}
      </div>
    </div>
  )
}
