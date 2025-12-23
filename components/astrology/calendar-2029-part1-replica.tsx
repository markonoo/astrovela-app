import React from "react"

interface Calendar2029Part1ReplicaProps {
  pageNumber: number
}

export function Calendar2029Part1Replica({ pageNumber }: Calendar2029Part1ReplicaProps) {
  return (
    <div className="h-full bg-stone-100 text-gray-800 flex flex-col flex-1 relative px-12 py-10">
      {/* Year Header */}
      <div className="text-center mb-10">
        <h1 className="text-7xl md:text-8xl font-light tracking-[0.15em] font-serif">2029</h1>
      </div>

      {/* Two Column Layout - Part 1 (Jan-June) */}
      <div className="grid grid-cols-2 gap-x-12 gap-y-7 text-sm leading-relaxed flex-1">
        {/* Left Column */}
        <div className="space-y-7">
          <div>
            <h3 className="font-heading font-semibold text-base mb-3 tracking-wide">JANUARY</h3>
            <p className="mb-2 text-justify"><strong>January 19:</strong> Sun enters Aquarius. This transit encourages a collective focus on innovation, humanitarian efforts, and embracing individuality. It's a time to break free from conventional thinking and explore new ways to contribute to society.</p>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-base mb-3 tracking-wide">FEBRUARY</h3>
            <p className="mb-2 text-justify"><strong>February 1:</strong> Venus enters Aquarius. Relationships take on a more unconventional and intellectually stimulating tone. This is a time for fostering friendships and partnerships rooted in shared ideals and mutual respect.</p>
            <p className="mb-2 text-justify"><strong>February 13:</strong> Mercury enters Aquarius. Communication becomes inventive and forward-thinking. This is an excellent period for brainstorming revolutionary ideas and collaborating on cutting-edge projects.</p>
            <p className="mb-2 text-justify"><strong>February 18:</strong> Sun enters Pisces. The focus shifts to spirituality, compassion, and emotional healing. This is an ideal time for creative pursuits and activities that connect you with your inner self.</p>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-base mb-3 tracking-wide">MARCH</h3>
            <p className="mb-2 text-justify"><strong>March 6:</strong> Mercury enters Pisces. Intuition and imagination guide thoughts and conversations. It's a great time for journaling, poetry, and exploring spiritual concepts in depth.</p>
            <p className="mb-2 text-justify"><strong>March 20:</strong> Sun enters Aries (Spring Equinox). The astrological new year begins, ushering in a wave of bold energy and a desire to take action. This is a time for initiating personal goals and embracing a fresh start.</p>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-7">
          <div>
            <h3 className="font-heading font-semibold text-base mb-3 tracking-wide">MARCH</h3>
            <p className="mb-2 text-justify"><strong>March 21:</strong> Venus enters Aries. Passion and enthusiasm in relationships take center stage. This energy supports directness in love and encourages bold moves in romantic or creative pursuits.</p>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-base mb-3 tracking-wide">APRIL</h3>
            <p className="mb-2 text-justify"><strong>April 7:</strong> Mercury enters Taurus. Thoughts and communication become more practical and grounded. This is an excellent time to plan for financial stability and long-term goals.</p>
            <p className="mb-2 text-justify"><strong>April 14:</strong> Venus enters Taurus. Relationships become more sensual and focused on stability. It's a time to appreciate beauty, comfort, and the pleasures of life.</p>
            <p className="mb-2 text-justify"><strong>April 19:</strong> Sun enters Taurus. Grounded energy encourages focus on material security, persistence, and enjoying simple pleasures. It's a good time to strengthen foundations in personal and professional life.</p>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-base mb-3 tracking-wide">MAY</h3>
            <p className="mb-2 text-justify"><strong>May 8:</strong> Venus enters Gemini. Curiosity and variety become central themes in relationships. Communication plays a significant role in deepening bonds and exploring new connections.</p>
            <p className="mb-2 text-justify"><strong>May 20:</strong> Sun enters Gemini. Social and intellectual pursuits are emphasized. This is a great time for networking, learning new skills, and staying adaptable.</p>
          </div>
        </div>
      </div>

      {/* Page number */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-600 text-base font-serif">
        {pageNumber}
      </div>
    </div>
  )
}











