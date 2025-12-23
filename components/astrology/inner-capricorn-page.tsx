import React from "react"

interface InnerCapricornPageProps {
  pageNumber: number
}

export function InnerCapricornPage({ pageNumber }: InnerCapricornPageProps) {
  return (
    <div className="h-full bg-[#F5F1E8] text-gray-800 flex flex-col flex-1 relative">
      <div className="flex-1 px-16 py-8 grid grid-cols-2 gap-x-10 gap-y-6 max-w-6xl mx-auto">
        <div className="space-y-7">
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-3 tracking-wide">THE INNER CAPRICORN</h2>
            <p className="text-sm leading-relaxed text-gray-700">
              Capricorns have a strong sense of responsibility and drive towards achievement. They are highly disciplined and have an incredible capacity for hard work and endurance. Capricorns are strategic and pragmatic, often planning their lives and careers with meticulous detail. They have a dry sense of humor and a loyalty to those they care about. Their ambition is for the satisfaction of accomplishing their goals and providing stability.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-3 tracking-wide">HOW OTHERS SEE CAPRICORN</h2>
            <p className="text-sm leading-relaxed text-gray-700">
              Capricorns appear ambitious, disciplined, and reliable. Their dedication and work ethic are admired, though their seriousness can sometimes be seen as distancing or harshness. Capricorns are respected for their wisdom and leadership qualities, often sought after for advice in professional matters. Their ability to navigate challenges with pragmatism and resilience inspires confidence in their capabilities and decisions.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-3 tracking-wide">CAREER AND FINANCE</h2>
            <p className="text-sm leading-relaxed text-gray-700">
              Capricorns are ambitious and disciplined, often finding success in corporate environments or their entrepreneurial ventures. They excel in leadership positions and are very goal-oriented, which translates into financial success. However, they should remember to take breaks and not let their career dominate their life completely, as this can lead to burnout.
            </p>
          </div>
        </div>

        <div className="space-y-7">
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-3 tracking-wide">HEALTH AND DIET</h2>
            <p className="text-sm leading-relaxed text-gray-700">
              Capricorns should pay particular attention to their bones, teeth, and skin. A diet rich in calcium and vitamin D can support bone health, while foods high in omega-3 fatty acids can aid skin health. Regular, moderate exercise that strengthens the skeletal system, like walking or weight-bearing activities, is beneficial. Capricorns should also ensure they manage stress effectively to avoid skin issues and ensure overall well-being, incorporating relaxation techniques into their routine.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-3 tracking-wide">LOVE AND RELATIONSHIPS</h2>
            <p className="text-sm leading-relaxed text-gray-700">
              A Saturn rules Capricorn, influencing a pragmatic and ambitious approach to love. Capricorns value stability, commitment, and hard work in relationships, seeking partners who understand their dedication to their goals. They show loyalty through quality and a willingness to build a lasting foundation together. Capricorns thrive in relationships that respect their need for structure and ambition, finding compatibility with signs that can offer support and appreciate their dry sense of humor.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-3 tracking-wide">CELEBRITIES WITH CAPRICORN SUN</h2>
            <div className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm text-gray-700">
              <div className="flex flex-col">
                <span className="font-medium">Michelle Obama</span>
                <span className="text-xs text-gray-500">(January 17)</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Muhammad Ali</span>
                <span className="text-xs text-gray-500">(January 17)</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Elvis Presley</span>
                <span className="text-xs text-gray-500">(January 8)</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Bradley Cooper</span>
                <span className="text-xs text-gray-500">(January 5)</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Kate Middleton</span>
                <span className="text-xs text-gray-500">(January 9)</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Ellie Goulding</span>
                <span className="text-xs text-gray-500">(December 30)</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">David Bowie</span>
                <span className="text-xs text-gray-500">(January 8)</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Stephen Hawking</span>
                <span className="text-xs text-gray-500">(January 8)</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">LeBron James</span>
                <span className="text-xs text-gray-500">(December 30)</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Jim Carrey</span>
                <span className="text-xs text-gray-500">(January 17)</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Zayn Malik</span>
                <span className="text-xs text-gray-500">(January 12)</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Jeff Bezos</span>
                <span className="text-xs text-gray-500">(January 12)</span>
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
