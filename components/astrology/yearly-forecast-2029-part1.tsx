import { Section } from "./base/Section"

interface YearlyForecast2029Part1Props {
  pageNumber: number
}

export function YearlyForecast2029Part1({ pageNumber }: YearlyForecast2029Part1Props) {
  return (
    <div className="h-full bg-stone-100 flex flex-col flex-1">
      <Section className="page-light max-w-4xl flex flex-col">
        <div className="mb-8">
          <h1 className="text-xl font-serif mb-8 text-stone-800">2029</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-stone-700 flex-1">
          <div>
            <h2 className="text-xl font-semibold mb-4 text-stone-800 tracking-wider">JANUARY</h2>
            <div className="space-y-4 flex-1 text-sm leading-relaxed">
              <p>
                <span className="font-medium">January 19:</span> Sun enters Aquarius. This transit encourages acollective focus on innovation, humanitarian efforts, and embracing individuality. It's a time to breakfree from conventional thinking and explore new ways to contribute to society.
              </p>
            </div>

            <h2 className="text-xl font-semibold mb-4 mt-8 text-stone-800 tracking-wider">FEBRUARY</h2>
            <div className="space-y-4 flex-1 text-sm leading-relaxed">
              <p>
                <span className="font-medium">February 1:</span> Venus enters Aquarius. Relationships take on a moreunconventional and intellectually stimulating tone. This is a time for fostering friendships andpartnerships rooted in shared ideals and mutual respect.
              </p>
              <p>
                <span className="font-medium">February 13:</span> Mercury enters Aquarius. Communication becomesinventive and forward-thinking. This is an excellent period for brainstorming revolutionary ideas andcollaborating on cutting-edge projects.
              </p>
              <p>
                <span className="font-medium">February 18:</span> Sun enters Pisces. The focus shifts to spirituality,
                compassion, and emotional healing. This is an ideal time for creative pursuits and activities thatconnect you with your inner self.
              </p>
            </div>

            <h2 className="text-xl font-semibold mb-4 mt-8 text-stone-800 tracking-wider">MARCH</h2>
            <div className="space-y-4 flex-1 text-sm leading-relaxed">
              <p>
                <span className="font-medium">March 6:</span> Mercury enters Pisces. Intuition and imagination guidethoughts and conversations. It's a great time for journaling, poetry, and exploring spiritual conceptsin depth.
              </p>
              <p>
                <span className="font-medium">March 20:</span> Sun enters Aries (Spring Equinox). The astrological newyear begins, ushering in a wave of bold energy and a desire to take action. This is a time forinitiating personal goals and embracing a fresh start.
              </p>
              <p>
                <span className="font-medium">March 21:</span> Venus enters Aries. Passion and enthusiasm inrelationships take center stage. This energy supports directness in love and encourages bold moves inromantic or creative pursuits.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4 text-stone-800 tracking-wider">APRIL</h2>
            <div className="space-y-4 flex-1 text-sm leading-relaxed">
              <p>
                <span className="font-medium">April 7:</span> Mercury enters Taurus. Thoughts and communication becomemore practical and grounded. This is an excellent time to plan for financial stability and long-termgoals.
              </p>
              <p>
                <span className="font-medium">April 14:</span> Venus enters Taurus. Relationships become more sensualand focused on stability. It's a time to appreciate beauty, comfort, and the pleasures of life.
              </p>
              <p>
                <span className="font-medium">April 19:</span> Sun enters Taurus. Grounded energy encourages focus onmaterial security, persistence, and enjoying simple pleasures. It's a good time to strengthenfoundations in personal and professional life.
              </p>
            </div>

            <h2 className="text-xl font-semibold mb-4 mt-8 text-stone-800 tracking-wider">MAY</h2>
            <div className="space-y-4 flex-1 text-sm leading-relaxed">
              <p>
                <span className="font-medium">May 8:</span> Venus enters Gemini. Curiosity and variety become centralthemes in relationships. Communication plays a significant role in deepening bonds and exploring newconnections.
              </p>
              <p>
                <span className="font-medium">May 20:</span> Sun enters Gemini. Social and intellectual pursuits areemphasized. This is a great time for networking, learning new skills, and staying adaptable.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}
