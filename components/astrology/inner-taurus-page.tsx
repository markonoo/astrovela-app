import React from "react"

interface InnerTaurusPageProps {
  pageNumber: number
}

export function InnerTaurusPage({ pageNumber }: InnerTaurusPageProps) {
  return (
    <div className="h-full bg-[#F5F1E8] text-gray-800 flex flex-col flex-1 relative">
      {/* Content grid */}
      <div className="flex-1 px-16 py-8 grid grid-cols-2 gap-x-10 gap-y-6 max-w-6xl mx-auto">
        {/* Left column */}
        <div className="space-y-7">
          {/* The Inner Taurus */}
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-3 tracking-wide">THE INNER TAURUS</h2>
            <p className="text-sm leading-relaxed text-gray-700">
              Internally, Taurus are deeply sensitive, loyal, and crave stability in their personal and professional lives. They have an appreciation for beauty and comfort, often expressing themselves through artistic endeavors or by creating aesthetically pleasing environments. Tauruses are also incredibly reliable and practical, making them excellent friends and partners who are always there when needed. Despite their strong external shell, they have a tender heart and value deep, meaningful connections.
            </p>
          </div>

          {/* How Others See Taurus */}
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-3 tracking-wide">HOW OTHERS SEE TAURUS</h2>
            <p className="text-sm leading-relaxed text-gray-700">
              To others, Taureans appear as the epitome of calm and composure, often serving as a stabilizing force in tumultuous situations. Their patience and practical approach to life are admired by many, though some may perceive their resistance to change as stubbornness. Taureans' love for luxury and comfort is also noticeable, showcasing their appreciation for quality and sensory experiences. Their loyalty and reliability make them highly valued friends and colleagues.
            </p>
          </div>

          {/* Career and Finance */}
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-3 tracking-wide">CAREER AND FINANCE</h2>
            <p className="text-sm leading-relaxed text-gray-700">
              Tauruses value stability and comfort, which is reflected in their career choices. They excel in positions where patience and persistence are rewarded, making careers in finance, administration, or luxury goods ideal for them. When it comes to finances, Tauruses are skilled at managing money, often enjoying a good balance between saving and indulging in life's finer things. They should beware of becoming too rigid in their financial planning, which can prevent them from taking advantage of new opportunities.
            </p>
          </div>
        </div>

        {/* Right column */}
        <div className="space-y-7">
          {/* Health and Diet */}
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-3 tracking-wide">HEALTH AND DIET</h2>
            <p className="text-sm leading-relaxed text-gray-700">
              Taurus need to pay attention to their throat and neck, ensuring these areas are protected from strain or illness. A balanced diet that includes throat-soothing foods like honey and herbal teas can be great. Incorporating regular exercise into their routine can help Tauruses maintain their physical health and manage stress. Given their love for culinary pleasures, finding a healthy balance in their diet that still satisfies their taste buds is key.
            </p>
          </div>

          {/* Love and Relationships */}
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-3 tracking-wide">LOVE AND RELATIONSHIPS</h2>
            <p className="text-sm leading-relaxed text-gray-700">
              Venus rules Taurus, providing them with an instinctive appreciation for beauty and sensuality in relationships. Tauruses approach love with a desire for stability and security, valuing consistent gestures of affection. They show love through physical touch and material gifts, creating a comfortable and luxurious environment for their partners. Taurus seeks a relationship that grows over time, deepening into a lasting bond.
            </p>
          </div>

          {/* Celebrities with Taurus Sun */}
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-3 tracking-wide">CELEBRITIES WITH TAURUS SUN</h2>
            <div className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm text-gray-700">
              <div className="flex flex-col">
                <span className="font-medium">Queen Elizabeth II</span>
                <span className="text-xs text-gray-500">(April 21)</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Mark Zuckerberg</span>
                <span className="text-xs text-gray-500">(May 14)</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Dwayne Johnson</span>
                <span className="text-xs text-gray-500">(May 2)</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Kelly Clarkson</span>
                <span className="text-xs text-gray-500">(April 24)</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Adele</span>
                <span className="text-xs text-gray-500">(May 5)</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Penélope Cruz</span>
                <span className="text-xs text-gray-500">(April 28)</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">David Beckham</span>
                <span className="text-xs text-gray-500">(May 2)</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Cher</span>
                <span className="text-xs text-gray-500">(May 20)</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">George Clooney</span>
                <span className="text-xs text-gray-500">(May 6)</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Jessica Alba</span>
                <span className="text-xs text-gray-500">(April 28)</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Audrey Hepburn</span>
                <span className="text-xs text-gray-500">(May 4)</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Jack Nicholson</span>
                <span className="text-xs text-gray-500">(April 22)</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Al Pacino</span>
                <span className="text-xs text-gray-500">(April 25)</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">William Shakespeare</span>
                <span className="text-xs text-gray-500">(April 26)</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Megan Fox</span>
                <span className="text-xs text-gray-500">(May 16)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Page number */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="text-gray-600 text-lg font-light">{pageNumber}</div>
      </div>
    </div>
  )
}
