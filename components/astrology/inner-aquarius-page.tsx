import React from "react"

interface InnerAquariusPageProps {
  pageNumber: number
}

export function InnerAquariusPage({ pageNumber }: InnerAquariusPageProps) {
  return (
    <div className="h-full bg-[#F5F1E8] text-gray-800 flex flex-col flex-1 relative">
      <div className="flex-1 px-16 py-8 grid grid-cols-2 gap-x-10 gap-y-6 max-w-6xl mx-auto">
        <div className="space-y-7">
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-3 tracking-wide">THE INNER AQUARIUS</h2>
            <p className="text-sm leading-relaxed text-gray-700">
              Aquarians have a rich inner world filled with innovative ideas and humanitarian dreams. They are deeply idealistic, often envisioning a better future for humanity. Aquarians are curious and enjoy exploring concepts, philosophies, and technologies that challenge the status quo. Despite their social nature, they need periods of solitude to recharge and contemplate. Their loyalty and commitment to causes they care about run deep, though they express affection in unconventional ways.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-3 tracking-wide">HOW OTHERS SEE AQUARIUS</h2>
            <p className="text-sm leading-relaxed text-gray-700">
              Aquarians appear as unique, intellectual, and progressive. Their unconventional approach and visionary ideas can be both inspiring and puzzling. Aquarians are admired for their independence and commitment to social causes. However, sometimes they can be seen as detached or aloof due to their tendency to intellectualize emotions. Their ability to think outside the box and challenge norms makes them valuable innovators and leaders in social change.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-3 tracking-wide">CAREER AND FINANCE</h2>
            <p className="text-sm leading-relaxed text-gray-700">
              Aquarians are innovative and eccentric, often drawn to careers in technology, science, or social reform, where they can work on the cutting edge. Financially, they tend to have a futuristic view, investing in new technologies or concepts before they become mainstream. Aquariuses should, however, ensure they have a solid foundation to fall back on, in case some of their more avant-garde investments take time to pay off.
            </p>
          </div>
        </div>

        <div className="space-y-7">
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-3 tracking-wide">HEALTH AND DIET</h2>
            <p className="text-sm leading-relaxed text-gray-700">
              Aquarians should pay particular attention to their ankles and circulatory system. Engaging in exercises that promote cardiovascular health and strengthen the lower limbs, such as swimming or cycling, is great. A diet rich in omega-3 fatty acids, antioxidants, and foods that support blood circulation can contribute to overall well-being. Aquarians also benefit from regular social interaction and mental stimulation to maintain their mental health.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-3 tracking-wide">LOVE AND RELATIONSHIPS</h2>
            <p className="text-sm leading-relaxed text-gray-700">
              Uranus influences Aquarius, bringing innovation and a strong sense of individuality to their approach to love. Aquarians value intellectual companionship and shared goals, seeking relationships that challenge societal norms. They show love through acts of friendship and a commitment to personal and collective growth. Aquarians are most compatible with signs that respect their independence and are willing to join them in their quest for social change and innovation.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-3 tracking-wide">CELEBRITIES WITH AQUARIUS SUN</h2>
            <div className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm text-gray-700">
              <div className="flex flex-col">
                <span className="font-medium">Oprah Winfrey</span>
                <span className="text-xs text-gray-500">(January 29)</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Michael Jordan</span>
                <span className="text-xs text-gray-500">(February 17)</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Ellen DeGeneres</span>
                <span className="text-xs text-gray-500">(January 26)</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Abraham Lincoln</span>
                <span className="text-xs text-gray-500">(February 12)</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Thomas Edison</span>
                <span className="text-xs text-gray-500">(February 11)</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Ed Sheeran</span>
                <span className="text-xs text-gray-500">(February 17)</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Galileo Galilei</span>
                <span className="text-xs text-gray-500">(February 15)</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Justin Timberlake</span>
                <span className="text-xs text-gray-500">(January 31)</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Alicia Keys</span>
                <span className="text-xs text-gray-500">(January 25)</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Virginia Woolf</span>
                <span className="text-xs text-gray-500">(January 25)</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Christian Bale</span>
                <span className="text-xs text-gray-500">(January 30)</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Harry Styles</span>
                <span className="text-xs text-gray-500">(February 1)</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Chris Rock</span>
                <span className="text-xs text-gray-500">(February 7)</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Wolfgang Amadeus Mozart</span>
                <span className="text-xs text-gray-500">(January 27)</span>
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
