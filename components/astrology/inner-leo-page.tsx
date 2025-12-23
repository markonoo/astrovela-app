import React from "react"

interface InnerLeoPageProps {
  pageNumber: number
}

export function InnerLeoPage({ pageNumber }: InnerLeoPageProps) {
  return (
    <div className="h-full bg-[#F5F1E8] text-gray-800 flex flex-col flex-1 relative">
      {/* Content grid */}
      <div className="flex-1 px-16 py-8 grid grid-cols-2 gap-x-10 gap-y-6 max-w-6xl mx-auto">
        {/* Left column */}
        <div className="space-y-7">
          {/* The Inner Leo */}
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-3 tracking-wide">THE INNER LEO</h2>
            <p className="text-sm leading-relaxed text-gray-700">
              Internally, Leos possess a profound sense of loyalty, generosity, and a desire to protect those they love. Their hearts are big, and they often seek to express their love and creativity in grand, noticeable ways. Despite their confident exterior, Leos crave validation and appreciation, needing to feel valued and respected. They have an innate artistic flair and often excel in creative endeavors, driven by their desire to leave a lasting impact on the world.
            </p>
          </div>

          {/* How Others See Leo */}
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-3 tracking-wide">HOW OTHERS SEE LEO</h2>
            <p className="text-sm leading-relaxed text-gray-700">
              To others, Leos appear as confident, charismatic, and naturally magnetic people, often drawing attention effortlessly. Their warmth and generosity are very obvious, making them beloved by many. However, their need for admiration and stubbornness can sometimes be perceived as egotistic. Despite this, Leos' ability to inspire, uplift, and lead is widely admired, making them sought-after friends and leaders.
            </p>
          </div>

          {/* Career and Finance */}
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-3 tracking-wide">CAREER AND FINANCE</h2>
            <p className="text-sm leading-relaxed text-gray-700">
              Leos are charismatic and love being in the spotlight, which makes careers in the arts, entertainment, or any field that allows them to showcase their creativity and leadership. They tend to attract wealth and opportunities but need to manage their finances as carefully as they manage their public image. A Leo's financial health is often tied to their career success, so maintaining their reputation is crucial.
            </p>
          </div>
        </div>

        {/* Right column */}
        <div className="space-y-7">
          {/* Health and Diet */}
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-3 tracking-wide">HEALTH AND DIET</h2>
            <p className="text-sm leading-relaxed text-gray-700">
              Leos should pay attention to their heart and spinal health. Engaging in regular cardio exercises like running, swimming, or cycling can help maintain heart health, while yoga and strength training can support spinal integrity. A diet rich in heart-healthy foods, such as omega-3 fatty acids, whole grains, and plenty of fruits and vegetables, is beneficial. Leos should also manage stress through relaxation techniques to protect their heart and overall well-being.
            </p>
          </div>

          {/* Love and Relationships */}
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-3 tracking-wide">LOVE AND RELATIONSHIPS</h2>
            <p className="text-sm leading-relaxed text-gray-700">
              Leo, governed by the Sun, radiates warmth, generosity, and charisma in love. They crave admiration and devotion, seeking partners who will celebrate their strengths and share in their love for drama and romance. Leos are generous lovers, often showering their partners with grand gestures of affection. They thrive in relationships that allow them to express their creativity and passion.
            </p>
          </div>

          {/* Celebrities with Leo Sun */}
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-3 tracking-wide">CELEBRITIES WITH LEO SUN</h2>
            <div className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm text-gray-700">
              <div className="flex flex-col">
                <span className="font-medium">Barack Obama</span>
                <span className="text-xs text-gray-500">(August 4)</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Mick Jagger</span>
                <span className="text-xs text-gray-500">(July 26)</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Madonna</span>
                <span className="text-xs text-gray-500">(August 16)</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Halle Berry</span>
                <span className="text-xs text-gray-500">(August 14)</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Jennifer Lopez</span>
                <span className="text-xs text-gray-500">(July 24)</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Daniel Radcliffe</span>
                <span className="text-xs text-gray-500">(July 23)</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">J.K. Rowling</span>
                <span className="text-xs text-gray-500">(July 31)</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Whitney Houston</span>
                <span className="text-xs text-gray-500">(August 9)</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Sandra Bullock</span>
                <span className="text-xs text-gray-500">(July 26)</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Ben Affleck</span>
                <span className="text-xs text-gray-500">(August 15)</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Roger Federer</span>
                <span className="text-xs text-gray-500">(August 8)</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Meghan Markle</span>
                <span className="text-xs text-gray-500">(August 4)</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Charlize Theron</span>
                <span className="text-xs text-gray-500">(August 7)</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Arnold Schwarzenegger</span>
                <span className="text-xs text-gray-500">(July 30)</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Chris Hemsworth</span>
                <span className="text-xs text-gray-500">(August 11)</span>
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
