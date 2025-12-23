import React from "react"

interface InnerCancerPageProps {
  pageNumber: number
}

export function InnerCancerPage({ pageNumber }: InnerCancerPageProps) {
  return (
    <div className="h-full bg-[#F5F1E8] text-gray-800 flex flex-col flex-1 relative">
      {/* Content grid */}
      <div className="flex-1 px-16 py-8 grid grid-cols-2 gap-x-10 gap-y-6 max-w-6xl mx-auto">
        {/* Left column */}
        <div className="space-y-7">
          {/* The Inner Cancer */}
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-3 tracking-wide">THE INNER CANCER</h2>
            <p className="text-sm leading-relaxed text-gray-700">
              On the inside, Cancers possess a depth of emotion and empathy. They have a unique strength that occurs from their emotional intelligence, allowing them to be compassionate. Cancers are deeply loyal and value the security of home and family above all. They are sensitive and can be strongly affected by the emotions and environments around them. Their intuition is a guiding force, often leading them to form deep, meaningful connections.
            </p>
          </div>

          {/* How Others See Cancer */}
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-3 tracking-wide">HOW OTHERS SEE CANCER</h2>
            <p className="text-sm leading-relaxed text-gray-700">
              To others, Cancers appear as compassionate, caring, and highly intuitive. They often serve as emotional support in their relationships. Their loyalty and protective nature make them loved friends and partners. However, their emotional depth can sometimes be perceived as moodiness or oversensitivity. Cancers' ability to create a cozy, welcoming atmosphere is appreciated by their close ones, whom they can provide with warmth and care.
            </p>
          </div>

          {/* Career and Finance */}
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-3 tracking-wide">CAREER AND FINANCE</h2>
            <p className="text-sm leading-relaxed text-gray-700">
              Cancers are nurturing and supportive, qualities that make them excel in professions involving care, like healthcare, education, or social work. They are also good at managing resources, which makes them excellent in administrative or managerial roles. Financial security is a priority for Cancers, and they tend to be conservative with investments, preferring safety over high returns. It's important for them not to let their caution turn into missed opportunities.
            </p>
          </div>
        </div>

        {/* Right column */}
        <div className="space-y-7">
          {/* Health and Diet */}
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-3 tracking-wide">HEALTH AND DIET</h2>
            <p className="text-sm leading-relaxed text-gray-700">
              Cancers should pay particular attention to their emotional well-being, as stress and negative emotions can directly impact their physical health. Practices such as meditation, journaling, or therapy can be beneficial. A diet that supports digestive health, including high-fiber fruits, vegetables, and plenty of water, can help manage stomach sensitivities. Incorporating regular, gentle exercise like walking or swimming can also support both their physical and emotional health.
            </p>
          </div>

          {/* Love and Relationships */}
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-3 tracking-wide">LOVE AND RELATIONSHIPS</h2>
            <p className="text-sm leading-relaxed text-gray-700">
              Ruled by the Moon, Cancers approach love with sensitivity and depth. They seek emotional security and a deep, nurturing connection with their partners. Cancers show love through caring actions, creating a cozy and protective space for the ones they love. They have a strong instinct for the needs of their partners, often going to great lengths to ensure their comfort and happiness.
            </p>
          </div>

          {/* Celebrities with Cancer Sun */}
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-3 tracking-wide">CELEBRITIES WITH CANCER SUN</h2>
            <div className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm text-gray-700">
              <div className="flex flex-col">
                <span className="font-medium">Meryl Streep</span>
                <span className="text-xs text-gray-500">(June 22)</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Kevin Hart</span>
                <span className="text-xs text-gray-500">(July 6)</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Tom Hanks</span>
                <span className="text-xs text-gray-500">(July 9)</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Chris Pratt</span>
                <span className="text-xs text-gray-500">(June 21)</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Princess Diana</span>
                <span className="text-xs text-gray-500">(July 1)</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Lana Del Rey</span>
                <span className="text-xs text-gray-500">(June 21)</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Selena Gomez</span>
                <span className="text-xs text-gray-500">(July 22)</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">George Orwell</span>
                <span className="text-xs text-gray-500">(June 25)</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Nelson Mandela</span>
                <span className="text-xs text-gray-500">(July 18)</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Harrison Ford</span>
                <span className="text-xs text-gray-500">(July 13)</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Robin Williams</span>
                <span className="text-xs text-gray-500">(July 21)</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Liv Tyler</span>
                <span className="text-xs text-gray-500">(July 1)</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Ariana Grande</span>
                <span className="text-xs text-gray-500">(June 26)</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Pamela Anderson</span>
                <span className="text-xs text-gray-500">(July 1)</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Frida Kahlo</span>
                <span className="text-xs text-gray-500">(July 6)</span>
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
