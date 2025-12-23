import React from "react"

interface InnerScorpioPageProps {
  pageNumber: number
}

export function InnerScorpioPage({ pageNumber }: InnerScorpioPageProps) {
  return (
    <div className="h-full bg-[#F5F1E8] text-gray-800 flex flex-col flex-1 relative">
      <div className="flex-1 px-16 py-8 grid grid-cols-2 gap-x-10 gap-y-6 max-w-6xl mx-auto">
        <div className="space-y-7">
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-3 tracking-wide">THE INNER SCORPIO</h2>
            <p className="text-sm leading-relaxed text-gray-700">
              Scorpios possess a complexity and depth unmatched by any other sign. They are private, often hiding their true feelings and motivations from others. Scorpios have a natural talent for seeing the truth, making them excellent investigators and analysts. They are incredibly emotional and sensitive, offering loyalty and depth to those they trust. Their desire for transformation allows Scorpios to constantly evolve and reinvent themselves.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-3 tracking-wide">HOW OTHERS SEE SCORPIO</h2>
            <p className="text-sm leading-relaxed text-gray-700">
              To others, Scorpios appear as mysterious, magnetic, and often intimidating. Their presence is memorable and they often leave a lasting impression on people. Scorpios are respected for their determination, strength, and resilience, but their intensity and desire for control can sometimes be perceived as overpowering. Their natural charisma and depth make them interesting, drawing others towards them despite the enigmatic aura they project.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-3 tracking-wide">CAREER AND FINANCE</h2>
            <p className="text-sm leading-relaxed text-gray-700">
              Scorpios are intense and focused, often excelling in careers that require deep research and where outcomes are impactful, such as in science or investigative fields. They are also drawn to crisis management roles where their resilience and strategic thinking can shine. Financially, Scorpios are secretive but very capable of managing their finances, often having multiple sources of income. Their challenge is to trust others, which sometimes prevents them from investing where collaboration is required.
            </p>
          </div>
        </div>

        <div className="space-y-7">
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-3 tracking-wide">HEALTH AND DIET</h2>
            <p className="text-sm leading-relaxed text-gray-700">
              Scorpios should pay particular attention to their reproductive health and emotional well-being. A diet rich in zinc (such as pumpkin seeds and oysters) can support reproductive health, while foods high in antioxidants and water can help their emotional balance and detoxification processes. Regular and intense exercise can help manage Scorpio's stress levels, while practices like meditation and journaling can support their emotional depth and need for soul-searching.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-3 tracking-wide">LOVE AND RELATIONSHIPS</h2>
            <p className="text-sm leading-relaxed text-gray-700">
              Pluto-ruled Scorpio approaches love with intensity and passion. They seek deep, transformative relationships, valuing emotional and spiritual connections over superficial encounters. Scorpios are fiercely loyal and protective, offering their full commitment to their partners. However, they can struggle with trust and vulnerability, requiring a partner who is patient and willing to navigate their complex depths.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-3 tracking-wide">CELEBRITIES WITH SCORPIO SUN</h2>
            <div className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm text-gray-700">
              <div className="flex flex-col">
                <span className="font-medium">Leonardo DiCaprio</span>
                <span className="text-xs text-gray-500">(November 11)</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Anne Hathaway</span>
                <span className="text-xs text-gray-500">(November 12)</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Katy Perry</span>
                <span className="text-xs text-gray-500">(October 25)</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Scarlett Johansson</span>
                <span className="text-xs text-gray-500">(November 22)</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Ryan Gosling</span>
                <span className="text-xs text-gray-500">(November 12)</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Pablo Picasso</span>
                <span className="text-xs text-gray-500">(October 25)</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Bill Gates</span>
                <span className="text-xs text-gray-500">(October 28)</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Winona Ryder</span>
                <span className="text-xs text-gray-500">(October 29)</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Hillary Clinton</span>
                <span className="text-xs text-gray-500">(October 26)</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Ciara</span>
                <span className="text-xs text-gray-500">(October 25)</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Julia Roberts</span>
                <span className="text-xs text-gray-500">(October 28)</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Emma Stone</span>
                <span className="text-xs text-gray-500">(November 6)</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Drake</span>
                <span className="text-xs text-gray-500">(October 24)</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Matthew McConaughey</span>
                <span className="text-xs text-gray-500">(November 4)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="text-gray-600 text-lg font-light">{pageNumber}</div>
      </div>
    </div>
  )
}
