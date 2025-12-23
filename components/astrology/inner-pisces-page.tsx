import React from "react"

interface InnerPiscesPageProps {
  pageNumber: number
}

export function InnerPiscesPage({ pageNumber }: InnerPiscesPageProps) {
  return (
    <div className="h-full bg-[#F5F1E8] text-gray-800 flex flex-col flex-1 relative">
      <div className="flex-1 px-16 py-8 grid grid-cols-2 gap-x-10 gap-y-6 max-w-6xl mx-auto">
        <div className="space-y-7">
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-3 tracking-wide">THE INNER PISCES</h2>
            <p className="text-sm leading-relaxed text-gray-700">
              Pisces have a profound sensitivity and a rich inner life, often feeling the emotions of others as intensely as their own. They are deeply compassionate and empathetic, with a natural inclination towards healing and helping. Pisces are imaginative and creative, often finding solace and expression through art, music, and literature. They possess an inner strength that helps them overcome mishaps and are driven by their deep belief in the interconnectedness of all things.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-3 tracking-wide">HOW OTHERS SEE PISCES</h2>
            <p className="text-sm leading-relaxed text-gray-700">
              Pisces appear as kind, artistic, and mystical. Their empathy and intuitive understanding make them cherished friends and confidants. However, their tendency to absorb others' emotions can sometimes be perceived as vulnerability or a lack of boundaries. Pisces' creative talents, imaginative insights, and their selfless nature are admired. Their dislike for confrontation and tendency to escape into fantasy can sometimes frustrate more grounded or practical signs.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-3 tracking-wide">CAREER AND FINANCE</h2>
            <p className="text-sm leading-relaxed text-gray-700">
              Pisces are empathetic and often drawn to artistic or healing professions, where they can make a difference in people's lives. They do well in non-traditional settings or roles that require intuition. Financially, Pisces can sometimes be a bit naive, so they need to be cautious with investments and seek professional advice when necessary. A solid financial plan can help them balance their altruism with practicality.
            </p>
          </div>
        </div>

        <div className="space-y-7">
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-3 tracking-wide">HEALTH AND DIET</h2>
            <p className="text-sm leading-relaxed text-gray-700">
              Pisces should pay particular attention to their feet and immune system. Engaging in grounding exercises, such as walking barefoot on natural surfaces or practicing yoga, can help strengthen their physical and energetic connection to the earth. A diet rich in immune-boosting foods, like citrus fruits, garlic, and leafy greens, along with adequate hydration, supports their sensitive systems. Regular relaxation and stress-reduction techniques are vital to maintaining Pisces's emotional and physical health.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-3 tracking-wide">LOVE AND RELATIONSHIPS</h2>
            <p className="text-sm leading-relaxed text-gray-700">
              Neptune rules Pisces, infusing their approach to love with empathy, creativity, and a deep sense of intuition. Pisces seek soulful connections, valuing emotional depth and artistic expression in relationships. They are compassionate and selfless lovers, often putting their partner's needs above their own. Pisces thrive in relationships that allow for emotional vulnerability and spiritual growth, finding compatibility with signs that appreciate their sensitivity and are willing to share in their dreamy and mystical view of love.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-3 tracking-wide">CELEBRITIES WITH PISCES SUN</h2>
            <div className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm text-gray-700">
              <div className="flex flex-col">
                <span className="font-medium">Albert Einstein</span>
                <span className="text-xs text-gray-500">(March 14)</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Victor Hugo</span>
                <span className="text-xs text-gray-500">(February 26)</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Steve Jobs</span>
                <span className="text-xs text-gray-500">(February 24)</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Bruce Willis</span>
                <span className="text-xs text-gray-500">(March 19)</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Rihanna</span>
                <span className="text-xs text-gray-500">(February 20)</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Drew Barrymore</span>
                <span className="text-xs text-gray-500">(February 22)</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">George Harrison</span>
                <span className="text-xs text-gray-500">(February 25)</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Johnny Cash</span>
                <span className="text-xs text-gray-500">(February 26)</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Elizabeth Taylor</span>
                <span className="text-xs text-gray-500">(February 27)</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Albert Einstein</span>
                <span className="text-xs text-gray-500">(March 14)</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Kurt Cobain</span>
                <span className="text-xs text-gray-500">(February 20)</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Glenn Close</span>
                <span className="text-xs text-gray-500">(March 19)</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Michelangelo</span>
                <span className="text-xs text-gray-500">(March 6)</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Daniel Craig</span>
                <span className="text-xs text-gray-500">(March 2)</span>
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
