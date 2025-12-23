import React from "react"

interface InnerSagittariusPageProps {
  pageNumber: number
}

export function InnerSagittariusPage({ pageNumber }: InnerSagittariusPageProps) {
  return (
    <div className="h-full bg-[#F5F1E8] text-gray-800 flex flex-col flex-1 relative">
      <div className="flex-1 px-16 py-8 grid grid-cols-2 gap-x-10 gap-y-6 max-w-6xl mx-auto">
        <div className="space-y-7">
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-3 tracking-wide">THE INNER SAGITTARIUS</h2>
            <p className="text-sm leading-relaxed text-gray-700">
              Sagittariuses have a deep-seated need for freedom and exploration. They are truth-seekers, constantly expanding their understanding of the world and themselves. Sagittariuses are inherently optimistic, viewing life as an adventure to be lived to the fullest. They cherish their independence and philosophical insights, and always aim to share their discoveries and joy with others. Despite their love for exploration, they are deeply loyal, honest, and offer candid yet compassionate advice to those they care for.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-3 tracking-wide">HOW OTHERS SEE SAGITTARIUS</h2>
            <p className="text-sm leading-relaxed text-gray-700">
              Sagittariuses appear vibrant, adventurous, and enthusiastic. They often inspire those around them with their optimism and zest for life. They are appreciated for their honesty and directness, but sometimes their bluntness can be misunderstood. Sagittariuses' love for freedom and exploration makes them seem restless and non-committal, but their lighthearted and philosophical nature makes them beloved companions and engaging conversationalists.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-3 tracking-wide">CAREER AND FINANCE</h2>
            <p className="text-sm leading-relaxed text-gray-700">
              Sagittariuses are adventurers at heart and often find success in travel, education, or any field that allows them to explore and share knowledge appealing. They are not afraid to take financial risks, which usually pay off, but can also lead to financial instability if not managed properly. A balanced approach to finances, mixing adventure with security, will serve them well.
            </p>
          </div>
        </div>

        <div className="space-y-7">
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-3 tracking-wide">HEALTH AND DIET</h2>
            <p className="text-sm leading-relaxed text-gray-700">
              Sagittariuses should pay particular attention to their hips, thighs, and liver. Horseback riding, archery, or hiking, can support their physical health and satisfy their love for adventure. A balanced diet rich in liver-supporting foods, such as leafy greens, and limiting substances that strain the liver, can contribute to overall well-being. Incorporating foods high in antioxidants and staying hydrated will support their active lifestyle.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-3 tracking-wide">LOVE AND RELATIONSHIPS</h2>
            <p className="text-sm leading-relaxed text-gray-700">
              Jupiter governs Sagittarius, introducing a love for freedom and adventure in relationships. Sagittariuses seek partners who are willing to explore the world and philosophies with them. They approach love with optimism and a desire for growth, valuing honesty and independence. Sagittariuses are most compatible with signs that share their adventurous spirit and can respect their need for space and exploration, finding joy in a relationship that is both stimulating and supportive.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-3 tracking-wide">CELEBRITIES WITH SAGITTARIUS SUN</h2>
            <div className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm text-gray-700">
              <div className="flex flex-col">
                <span className="font-medium">Brad Pitt</span>
                <span className="text-xs text-gray-500">(December 18)</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Britney Spears</span>
                <span className="text-xs text-gray-500">(December 2)</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Taylor Swift</span>
                <span className="text-xs text-gray-500">(December 13)</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Tina Turner</span>
                <span className="text-xs text-gray-500">(November 26)</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Walt Disney</span>
                <span className="text-xs text-gray-500">(December 5)</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Bruce Lee</span>
                <span className="text-xs text-gray-500">(November 27)</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Jane Austen</span>
                <span className="text-xs text-gray-500">(December 16)</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Frank Sinatra</span>
                <span className="text-xs text-gray-500">(December 12)</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Mark Twain</span>
                <span className="text-xs text-gray-500">(November 30)</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Nicki Minaj</span>
                <span className="text-xs text-gray-500">(December 8)</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Jimi Hendrix</span>
                <span className="text-xs text-gray-500">(November 27)</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Nia Sommerhalder</span>
                <span className="text-xs text-gray-500">(December 9)</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Miley Cyrus</span>
                <span className="text-xs text-gray-500">(November 23)</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Jamie Foxx</span>
                <span className="text-xs text-gray-500">(December 13)</span>
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
