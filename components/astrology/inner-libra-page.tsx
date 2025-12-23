import React from "react"

interface InnerLibraPageProps {
  pageNumber: number
}

export function InnerLibraPage({ pageNumber }: InnerLibraPageProps) {
  return (
    <div className="h-full bg-[#F5F1E8] text-gray-800 flex flex-col flex-1 relative">
      {/* Content grid */}
      <div className="flex-1 px-16 py-8 grid grid-cols-2 gap-x-10 gap-y-6 max-w-6xl mx-auto">
        {/* Left column */}
        <div className="space-y-7">
          {/* The Inner Libra */}
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-3 tracking-wide">THE INNER LIBRA</h2>
            <p className="text-sm leading-relaxed text-gray-700">
              Libras possess an understanding of beauty, art, and the importance of relationships. They are inherently social beings, thriving on partnership and cooperation. Despite their peaceful presence, Libras have a strong inner core of determination and fairness. Often being advocates for justice in their inner circles. Their minds are always seeking balance, leading them to weigh every decision carefully, sometimes to the point of indecision.
            </p>
          </div>

          {/* How Others See Libra */}
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-3 tracking-wide">HOW OTHERS SEE LIBRA</h2>
            <p className="text-sm leading-relaxed text-gray-700">
              To others, Libras appear as charming, sociable, and harmonious people. Their diplomatic nature and innate sense of fairness make them beloved friends and partners. However, their aversion to conflict and tendency towards indecision can sometimes be perceived as a lack of direction or commitment. Despite this, Libras' ability to create beauty and harmony is widely admired, making them cherished companions.
            </p>
          </div>

          {/* Career and Finance */}
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-3 tracking-wide">CAREER AND FINANCE</h2>
            <p className="text-sm leading-relaxed text-gray-700">
              Libras thrive in environments that require teamwork and diplomacy, making careers in law, human resources, or public relations great choices for them. They have a knack for balancing competing interests, which also helps them manage their finances effectively. Libras enjoy luxury and can sometimes spend too much on aesthetics, so it's important for them to keep a detailed budget to maintain financial health.
            </p>
          </div>
        </div>

        {/* Right column */}
        <div className="space-y-7">
          {/* Health and Diet */}
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-3 tracking-wide">HEALTH AND DIET</h2>
            <p className="text-sm leading-relaxed text-gray-700">
              Libras should pay particular attention to their kidney health and maintain a balanced diet. Drinking plenty of water and reducing the intake of sodium can help support kidney function. A balanced diet rich in fruits, vegetables, and lean proteins, along with regular exercise, such as aerobic and strength-training components, can support overall health. Libras benefit from aesthetics in their environment, so creating a pleasant and beautiful space for eating and exercising can motivate their health practices.
            </p>
          </div>

          {/* Love and Relationships */}
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-3 tracking-wide">LOVE AND RELATIONSHIPS</h2>
            <p className="text-sm leading-relaxed text-gray-700">
              Venus rules Libra, endowing them with a love for harmony and balance in relationships. Libras seek equality and fairness, desiring partnerships that are built on mutual respect and understanding. They are natural diplomats, navigating conflicts with grace and charm. Libras show love through romantic gestures and a deep appreciation for beauty, often creating aesthetically pleasing environments for their loved ones.
            </p>
          </div>

          {/* Celebrities with Libra Sun */}
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-3 tracking-wide">CELEBRITIES WITH LIBRA SUN</h2>
            <div className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm text-gray-700">
              <div className="flex flex-col">
                <span className="font-medium">Will Smith</span>
                <span className="text-xs text-gray-500">(September 25)</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Gwen Stefani</span>
                <span className="text-xs text-gray-500">(October 3)</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Serena Williams</span>
                <span className="text-xs text-gray-500">(September 26)</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Kate Winslet</span>
                <span className="text-xs text-gray-500">(October 5)</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Mahatma Gandhi</span>
                <span className="text-xs text-gray-500">(October 2)</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Michael Douglas</span>
                <span className="text-xs text-gray-500">(September 25)</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Kim Kardashian</span>
                <span className="text-xs text-gray-500">(October 21)</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Cardi B</span>
                <span className="text-xs text-gray-500">(October 11)</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Oscar Wilde</span>
                <span className="text-xs text-gray-500">(October 16)</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Zac Efron</span>
                <span className="text-xs text-gray-500">(October 18)</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">John Lennon</span>
                <span className="text-xs text-gray-500">(October 9)</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Simon Cowell</span>
                <span className="text-xs text-gray-500">(October 7)</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Eminem</span>
                <span className="text-xs text-gray-500">(October 17)</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Bruno Mars</span>
                <span className="text-xs text-gray-500">(October 8)</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Hugh Jackman</span>
                <span className="text-xs text-gray-500">(October 12)</span>
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
