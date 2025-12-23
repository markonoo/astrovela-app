import { Section } from "./base/Section"

interface PlanetaryRetrogrades2029Props {
  pageNumber: number
}

export function PlanetaryRetrogrades2029({ pageNumber }: PlanetaryRetrogrades2029Props) {
  return (
    <div className="h-full bg-stone-100 flex flex-col flex-1">
      <Section className="page-light max-w-4xl flex flex-col">
        <h1 className="text-xl font-serif text-center mb-10 text-stone-800">
          PLANETARY
          <br />
          RETROGRADES
        </h1>

        <div className="grid grid-cols-2 gap-x-16 gap-y-8 text-stone-700 flex-1">
          {/* Left Column */}
          <div className="space-y-6 flex-1">
            {/* Mercury */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-6 h-6 rounded-full border-2 border-stone-400 flex items-center justify-center">
                  <span className="text-xs">☿</span>
                </div>
                <h3 className="font-semibold text-lg">MERCURY RETROGRADE</h3>
              </div>
              <div className="space-y-2 flex-1 text-sm leading-relaxed">
                <p>
                  <strong>January 7, 2029 to January 27, 2029:</strong>
                  <br />
                  Begin in Aquarius, ends in Capricorn
                </p>
                <p>
                  <strong>May 1, 2029 to May 25, 2029:</strong>
                  <br />
                  Entirely in Taurus
                </p>
                <p>
                  <strong>September 2, 2029 to September 25, 2029:</strong>
                  <br />
                  Begins in Libra, ends in Virgo
                </p>
                <p>
                  <strong>December 22, 2029 to January 11, 2030:</strong>
                  <br />
                  Entirely in Capricorn
                </p>
              </div>
            </div>

            {/* Venus */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-6 h-6 rounded-full border-2 border-stone-400 flex items-center justify-center">
                  <span className="text-xs">♀</span>
                </div>
                <h3 className="font-semibold text-lg">VENUS RETROGRADE</h3>
              </div>
              <div className="text-sm leading-relaxed">
                <p>
                  <strong>December 16, 2029 to January 26, 2030:</strong>
                  <br />
                  Entirely in Capricorn
                </p>
              </div>
            </div>

            {/* Mars */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-6 h-6 rounded-full border-2 border-stone-400 flex items-center justify-center">
                  <span className="text-xs">♂</span>
                </div>
                <h3 className="font-semibold text-lg">MARS RETROGRADE</h3>
              </div>
              <div className="text-sm leading-relaxed">
                <p>
                  <strong>February 14, 2029 to May 5, 2030:</strong>
                  <br />
                  Begins in Libra, ends in Virgo
                </p>
              </div>
            </div>

            {/* Jupiter */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-6 h-6 rounded-full border-2 border-stone-400 flex items-center justify-center">
                  <span className="text-xs">♃</span>
                </div>
                <h3 className="font-semibold text-lg">JUPITER RETROGRADE</h3>
              </div>
              <div className="text-sm leading-relaxed">
                <p>
                  <strong>February 10, 2029 to June 13, 2029:</strong>
                  <br />
                  Entirely in Libra
                </p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6 flex-1">
            {/* Saturn */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-6 h-6 rounded-full border-2 border-stone-400 flex items-center justify-center">
                  <span className="text-xs">♄</span>
                </div>
                <h3 className="font-semibold text-lg">SATURN RETROGRADE</h3>
              </div>
              <div className="space-y-2 flex-1 text-sm leading-relaxed">
                <p>
                  <strong>August 22, 2028 to January 5, 2029:</strong>
                  <br />
                  Entirely in Taurus
                </p>
                <p>
                  <strong>September 6, 2029 to January 19, 2030:</strong>
                  <br />
                  Entirely in Taurus
                </p>
              </div>
            </div>

            {/* Uranus */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-6 h-6 rounded-full border-2 border-stone-400 flex items-center justify-center">
                  <span className="text-xs">♅</span>
                </div>
                <h3 className="font-semibold text-lg">URANUS RETROGRADE</h3>
              </div>
              <div className="space-y-2 flex-1 text-sm leading-relaxed">
                <p>
                  <strong>September 19, 2028, to February 16, 2029:</strong>
                  <br />
                  Entirely in Gemini
                </p>
                <p>
                  <strong>September 23, 2029, to February 20, 2030:</strong>
                  <br />
                  Entirely in Gemini
                </p>
              </div>
            </div>

            {/* Neptune */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-6 h-6 rounded-full border-2 border-stone-400 flex items-center justify-center">
                  <span className="text-xs">♆</span>
                </div>
                <h3 className="font-semibold text-lg">NEPTUNE RETROGRADE</h3>
              </div>
              <div className="text-sm leading-relaxed">
                <p>
                  <strong>July 14, 2029 to December 19, 2029:</strong>
                  <br />
                  Entirely in Aries
                </p>
              </div>
            </div>

            {/* Pluto */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-6 h-6 rounded-full border-2 border-stone-400 flex items-center justify-center">
                  <span className="text-xs">♇</span>
                </div>
                <h3 className="font-semibold text-lg">PLUTO RETROGRADE</h3>
              </div>
              <div className="text-sm leading-relaxed">
                <p>
                  <strong>May 11, 2029 to October 21, 2029:</strong>
                  <br />
                  Entirely in Aquarius
                </p>
              </div>
            </div>

            {/* Chiron */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-6 h-6 rounded-full border-2 border-stone-400 flex items-center justify-center">
                  <span className="text-xs">⚷</span>
                </div>
                <h3 className="font-semibold text-lg">CHIRON RETROGRADE</h3>
              </div>
              <div className="space-y-2 flex-1 text-sm leading-relaxed">
                <p>
                  <strong>August 11, 2028, to January 13, 2029:</strong>
                  <br />
                  Entirely in Taurus
                </p>
                <p>
                  <strong>August 16, 2029 to January 17, 2030:</strong>
                  <br />
                  Entirely in Taurus
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}
