import React from "react"

interface FinalConclusionReplicaProps {
  pageNumber: number
}

export function FinalConclusionReplica({ pageNumber }: FinalConclusionReplicaProps) {
  return (
    <div className="h-full relative overflow-hidden">
      {/* Full-page background image - same as page 192 */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/final-words-night-sky-forest.jpg)' }}
      />
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-slate-900/60" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-16 py-12">
        {/* Decorative A initial */}
        <div className="text-amber-300 font-serif italic mb-8" style={{ fontSize: '80px', lineHeight: '1' }}>
          A
        </div>

        {/* Main text content - narrowed from max-w-4xl to max-w-2xl */}
        <div className="max-w-2xl text-center text-amber-100 leading-relaxed space-y-6">
          <p className="text-base font-medium">
            <strong className="text-amber-200 font-bold">s we close this book, we hope the insights into astrology shared within these pages have provided you with valuable knowledge and practical guidance. Astrology offers a unique perspective on our lives, helping us to understand deeper personal tendencies and how we interact with the world around us. It encourages us to consider not just our actions but the timing</strong> and context in which we make decisions.
          </p>

          <p className="text-base font-medium">
            We invite you to continue exploring the dynamic field of astrology as you move forward. May the tools and concepts discussed here serve as a foundation for further growth and exploration. Use what you've learned to enhance your understanding of yourself and those around you, and to navigate life's challenges with a more informed perspective.
          </p>

          <p className="text-base font-medium">
            Thank you for joining us on this astrological journey. Keep looking up, stay curious, and may your future endeavors be guided by the profound insights that astrology can offer.
          </p>

          <p className="text-base mt-8 font-medium">
            Wishing you clarity and inspiration as you chart your path through the stars!
          </p>

          <p className="text-lg font-semibold text-amber-200 mt-12 tracking-wider">
            ASTROVELA TEAM
          </p>
        </div>
      </div>

      {/* Page number */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-amber-200 text-lg z-20">
        {pageNumber}
      </div>
    </div>
  )
}
