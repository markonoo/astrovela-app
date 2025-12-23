import React from "react"

interface InnerGeminiPageProps {
  pageNumber: number
}

export function InnerGeminiPage({ pageNumber }: InnerGeminiPageProps) {
  return (
    <div className="h-full bg-[#F5F1E8] text-gray-800 flex flex-col flex-1 relative">
      {/* Content grid */}
      <div className="flex-1 px-16 py-8 grid grid-cols-2 gap-x-10 gap-y-6 max-w-6xl mx-auto">
        {/* Left column */}
        <div className="space-y-7">
          {/* The Inner Gemini */}
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-3 tracking-wide">THE INNER GEMINI</h2>
            <p className="text-sm leading-relaxed text-gray-700">
              Internally, Gemini individuals are complex and often misunderstood. They have a strong sense of curiosity and a desire to explore all that life has to offer. Geminis are thinkers and communicators, always processing information and seeking to share their discoveries with others. Despite their outgoing nature, they have a reflective side that seeks deeper understanding. Geminis crave variety and can often feel restless if bound to routine or monotony.
            </p>
          </div>

          {/* How Others See Gemini */}
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-3 tracking-wide">HOW OTHERS SEE GEMINI</h2>
            <p className="text-sm leading-relaxed text-gray-700">
              To others, Geminis appear as charming, witty, and sociable people who often are the life of the party. This is due to their ability to engage in small talk and adapt to any social setting. However, their changeable nature can sometimes be understood as inconsistency or indecisiveness. Geminis are known for their intellect and asking for advice, however, their ability to see both sides of every issue can make them seem unreliable.
            </p>
          </div>

          {/* Career and Finance */}
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-3 tracking-wide">CAREER AND FINANCE</h2>
            <p className="text-sm leading-relaxed text-gray-700">
              Geminis' versatility and love for variety often lead them to pursue multiple career paths or jobs that involve diverse skills and tasks. They are excellent communicators, which makes them fit for careers in marketing, public relations, or journalism. Financially, Geminis enjoy making money in unconventional ways but need to be wary of their tendency to make impulsive purchases. A balanced budget could help them manage their sometimes erratic earning patterns.
            </p>
          </div>
        </div>

        {/* Right column */}
        <div className="space-y-7">
          {/* Health and Diet */}
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-3 tracking-wide">HEALTH AND DIET</h2>
            <p className="text-sm leading-relaxed text-gray-700">
              Geminis should pay special attention to their respiratory system and mental well-being. Activities like yoga and meditation can help maintain their mental and physical health. A balanced diet rich in omega-3 fatty acids, found in fish and nuts, can support brain health, while antioxidants from fruits and vegetables protect against respiratory issues. Regular social interaction and intellectual challenges are also necessary for maintaining Geminis' mental health.
            </p>
          </div>

          {/* Love and Relationships */}
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-3 tracking-wide">LOVE AND RELATIONSHIPS</h2>
            <p className="text-sm leading-relaxed text-gray-700">
              Gemini, ruled by Mercury, brings a communicative and intellectual dynamic to relationships. They are drawn to partners who can match their wit and curiosity, craving mental stimulation as much as emotional connection. Geminis enjoy variety in their love life, seeking new experiences and learning opportunities within their relationships. They value freedom and space, fearing stagnation above all.
            </p>
          </div>

          {/* Celebrities with Gemini Sun */}
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-3 tracking-wide">CELEBRITIES WITH GEMINI SUN</h2>
            <div className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm text-gray-700">
              <div className="flex flex-col">
                <span className="font-medium">Angelina Jolie</span>
                <span className="text-xs text-gray-500">(June 4)</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Bob Dylan</span>
                <span className="text-xs text-gray-500">(May 24)</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Kanye West</span>
                <span className="text-xs text-gray-500">(June 8)</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Ian McKellen</span>
                <span className="text-xs text-gray-500">(May 25)</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Johnny Depp</span>
                <span className="text-xs text-gray-500">(June 9)</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Naomi Campbell</span>
                <span className="text-xs text-gray-500">(May 22)</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Natalie Portman</span>
                <span className="text-xs text-gray-500">(June 9)</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Helena Bonham Carter</span>
                <span className="text-xs text-gray-500">(May 26)</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Marilyn Monroe</span>
                <span className="text-xs text-gray-500">(June 1)</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Lauryn Hill</span>
                <span className="text-xs text-gray-500">(May 26)</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Paul McCartney</span>
                <span className="text-xs text-gray-500">(June 18)</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Octavia Spencer</span>
                <span className="text-xs text-gray-500">(May 25)</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Nicole Kidman</span>
                <span className="text-xs text-gray-500">(June 20)</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Neil Patrick Harris</span>
                <span className="text-xs text-gray-500">(June 15)</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Prince</span>
                <span className="text-xs text-gray-500">(June 7)</span>
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
