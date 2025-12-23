import React from "react"

interface InnerAriesPageProps {
  pageNumber: number
}

export function InnerAriesPage({ pageNumber }: InnerAriesPageProps) {
  return (
    <div className="h-full bg-[#F5F1E8] text-gray-800 flex flex-col flex-1 relative">
      {/* Content grid */}
      <div className="flex-1 px-16 py-8 grid grid-cols-2 gap-x-10 gap-y-6 max-w-6xl mx-auto">
        {/* Left column */}
        <div className="space-y-7">
          {/* The Inner Aries */}
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-3 tracking-wide">THE INNER ARIES</h2>
            <p className="text-sm leading-relaxed text-gray-700">
              Aries are a bundle of energy and dynamism. They possess an intrinsic passion for life that pushes them to pursue their goals with enthusiasm. Aries are natural-born leaders, often finding themselves in positions of authority due to their ability to take initiative and inspire others. Despite their tough exterior, Aries have a childlike innocence and a pure belief in the possibilities that life has to offer. They crave adventure and are always on the lookout for new challenges to overcome.
            </p>
          </div>

          {/* How Others See Aries */}
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-3 tracking-wide">HOW OTHERS SEE ARIES</h2>
            <p className="text-sm leading-relaxed text-gray-700">
              To the outside world, Aries appear as confident, passionate, and responsible forces of nature. Their courage and willingness to take risks are admired by many, though some may find their directness and impulsive actions intimidating. Aries' honesty and straightforwardness can be perceived as a lack of tact, but their genuine desire to lead and help others shines through, earning them respect and admiration from peers.
            </p>
          </div>

          {/* Career and Finance */}
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-3 tracking-wide">CAREER AND FINANCE</h2>
            <p className="text-sm leading-relaxed text-gray-700">
              Aries are natural leaders, often thriving in environments that allow them to take charge and exhibit their boldness. Their careers are often marked by a series of bold moves and ambitious climbs up the corporate ladder. Financially, they do well in roles involving high energy and risk-taking, such as entrepreneurship or sales. However, Aries must be cautious not to make impulsive financial decisions, which can lead to unnecessary risks or losses.
            </p>
          </div>
        </div>

        {/* Right column */}
        <div className="space-y-7">
          {/* Health and Diet */}
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-3 tracking-wide">HEALTH AND DIET</h2>
            <p className="text-sm leading-relaxed text-gray-700">
              Aries need to pay special attention to their head and face, as these are their most vulnerable areas. Engaging in regular physical exercise is crucial for maintaining their high energy levels and ensuring overall well-being. A diet rich in iron, such as lean green vegetables and lean meats, can help fight the fatigue that sometimes accompanies their active lifestyle. Aries should also incorporate stress-reducing activities into their routine to lighten their sensitivity to stress-related headaches.
            </p>
          </div>

          {/* Love and Relationships */}
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-3 tracking-wide">LOVE AND RELATIONSHIPS</h2>
            <p className="text-sm leading-relaxed text-gray-700">
              Aries in love is a mix of boldness and spontaneity. Governed by Mars, Aries pursue their romantic interests with the fervor of a warrior. They are direct and straightforward in their affections, often taking the lead in initiating relationships.
            </p>
            <p className="text-sm leading-relaxed text-gray-700 mt-3">
              Aries thrive on adventure and require a partner who can match their energy. They are passionate lovers who enjoy the thrill of the chase but may struggle with patience in slow-developing situations.
            </p>
          </div>

          {/* Celebrities with Aries Sun */}
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-3 tracking-wide">CELEBRITIES WITH ARIES SUN</h2>
            <div className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm text-gray-700">
              <div className="flex flex-col">
                <span className="font-medium">Lady Gaga</span>
                <span className="text-xs text-gray-500">(March 28)</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Vincent van Gogh</span>
                <span className="text-xs text-gray-500">(March 30)</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Robert Downey Jr.</span>
                <span className="text-xs text-gray-500">(April 4)</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Celine Dion</span>
                <span className="text-xs text-gray-500">(March 30)</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Leonardo da Vinci</span>
                <span className="text-xs text-gray-500">(April 15)</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Russell Crowe</span>
                <span className="text-xs text-gray-500">(April 7)</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Reese Witherspoon</span>
                <span className="text-xs text-gray-500">(March 22)</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Kiera Knightley</span>
                <span className="text-xs text-gray-500">(March 26)</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Elton John</span>
                <span className="text-xs text-gray-500">(March 25)</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Alec Baldwin</span>
                <span className="text-xs text-gray-500">(April 3)</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Emma Watson</span>
                <span className="text-xs text-gray-500">(April 15)</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Steven Tyler</span>
                <span className="text-xs text-gray-500">(March 26)</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Jackie Chan</span>
                <span className="text-xs text-gray-500">(April 7)</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Quentin Tarantino</span>
                <span className="text-xs text-gray-500">(March 27)</span>
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
