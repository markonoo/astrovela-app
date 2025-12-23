import React from "react"

interface InnerVirgoPageProps {
  pageNumber: number
}

export function InnerVirgoPage({ pageNumber }: InnerVirgoPageProps) {
  return (
    <div className="h-full bg-[#F5F1E8] text-gray-800 flex flex-col flex-1 relative">
      {/* Content grid */}
      <div className="flex-1 px-16 py-8 grid grid-cols-2 gap-x-10 gap-y-6 max-w-6xl mx-auto">
        {/* Left column */}
        <div className="space-y-7">
          {/* The Inner Virgo */}
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-3 tracking-wide">THE INNER VIRGO</h2>
            <p className="text-sm leading-relaxed text-gray-700">
              Virgos possess a depth of thoughtfulness and a constant drive for self-improvement. Their minds are always active, analyzing and assessing their surroundings to make sense of the world. Virgos are helpful, often finding satisfaction in assisting others and improving systems. Despite their critical nature, they are driven by a genuine desire for perfection, not only for themselves but for those around them. Their work ethic is core to their being, and they often prefer to work behind the scenes.
            </p>
          </div>

          {/* How Others See Virgo */}
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-3 tracking-wide">HOW OTHERS SEE VIRGO</h2>
            <p className="text-sm leading-relaxed text-gray-700">
              To others, Virgos appear as intelligent, cautious, and reliable people. Their ability to notice details that others overlook makes them invaluable in any project requiring precision. However, their critical eye and high standards can sometimes be seen as nitpicky or overly critical by those who don't understand their true intentions. Virgos' practical and modest approach to life, coupled with their willingness to serve, often binds them with those who appreciate their depth and dedication.
            </p>
          </div>

          {/* Career and Finance */}
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-3 tracking-wide">CAREER AND FINANCE</h2>
            <p className="text-sm leading-relaxed text-gray-700">
              Virgos are thorough and analytical, making them well-suited for careers in science, healthcare, or analysis where attention to detail is needed. They are also excellent problem solvers, which can lead them into consulting roles. Financially, Virgos are careful and always have a plan for their money, which helps them build secure financial futures. They should, however, avoid being overly cautious and sometimes take calculated risks to maximize their returns.
            </p>
          </div>
        </div>

        {/* Right column */}
        <div className="space-y-7">
          {/* Health and Diet */}
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-3 tracking-wide">HEALTH AND DIET</h2>
            <p className="text-sm leading-relaxed text-gray-700">
              Virgos should pay special attention to their digestive health, as stress and anxiety can directly impact their digestive system. A diet high in fiber and low in processed foods can help maintain a healthy gut. Incorporating probiotics and digestive enzymes into their diet may also be beneficial. Regular exercise, particularly routines that promote stress reduction such as yoga or Pilates, can help manage Virgo's tendency towards worry and overthinking, supporting overall well-being.
            </p>
          </div>

          {/* Love and Relationships */}
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-3 tracking-wide">LOVE AND RELATIONSHIPS</h2>
            <p className="text-sm leading-relaxed text-gray-700">
              Mercury-ruled Virgo brings a strict and thoughtful approach to love. They express affection through acts of service, paying attention to the small details of their partner's needs. Virgos seek perfection in relationships, which can sometimes lead to unrealistic expectations. However, their ideal partner appreciates their dedication and willingness to work towards a flawless union. Virgos thrive in relationships that value open communication and shared goals.
            </p>
          </div>

          {/* Celebrities with Virgo Sun */}
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-3 tracking-wide">CELEBRITIES WITH VIRGO SUN</h2>
            <div className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm text-gray-700">
              <div className="flex flex-col">
                <span className="font-medium">Beyoncé</span>
                <span className="text-xs text-gray-500">(September 4)</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Chris Pine</span>
                <span className="text-xs text-gray-500">(August 26)</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Michael Jackson</span>
                <span className="text-xs text-gray-500">(August 29)</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Cameron Diaz</span>
                <span className="text-xs text-gray-500">(August 30)</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Keanu Reeves</span>
                <span className="text-xs text-gray-500">(September 2)</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Richard Gere</span>
                <span className="text-xs text-gray-500">(August 31)</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Mother Teresa</span>
                <span className="text-xs text-gray-500">(August 26)</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Zendaya</span>
                <span className="text-xs text-gray-500">(September 1)</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Stephen King</span>
                <span className="text-xs text-gray-500">(September 21)</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Agatha Christie</span>
                <span className="text-xs text-gray-500">(September 15)</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Freddie Mercury</span>
                <span className="text-xs text-gray-500">(September 5)</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Prince Harry</span>
                <span className="text-xs text-gray-500">(September 15)</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Amy Poehler</span>
                <span className="text-xs text-gray-500">(September 16)</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Greta Garbo</span>
                <span className="text-xs text-gray-500">(September 18)</span>
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
