export function NumerologyCoreNumbersReplica({ pageNumber }: { pageNumber: number }) {
  return (
    <div className="h-full bg-gradient-to-br from-slate-800 via-blue-900 to-indigo-950 text-amber-100 flex flex-col justify-center relative px-16 py-10">
      <div className="text-center mb-6">
        <p className="text-sm text-amber-200 mb-3 font-medium max-w-3xl mx-auto">At the heart of numerology are several key numbers that are derived from your birth date and full name. These numbers include:</p>
      </div>

      {/* Four-quadrant grid */}
      <div className="flex-1 grid grid-cols-2 gap-6 max-w-4xl mx-auto">
        {/* Life Path Number - Top Left */}
        <div className="border-2 border-dashed border-amber-400 rounded-lg p-5 bg-blue-900/20">
          <img 
            src="/numerology-frame.png" 
            alt="Decorative Frame"
            className="w-full h-6 object-cover mb-3"
          />
          <h3 className="text-lg font-bold text-amber-200 mb-3">LIFE PATH NUMBER</h3>
          <p className="text-sm leading-relaxed text-amber-100 mb-4 font-medium">
            The most important number in your numerology profile, calculated from your birth date. It offers insight into your life's purpose, your natural inclinations, and the challenges you might face.
          </p>
          <div className="bg-blue-950/40 border border-amber-400/30 rounded p-3 mt-4">
            <h4 className="text-xs font-bold text-amber-200 mb-2">HOW TO CALCULATE</h4>
            <p className="text-xs leading-relaxed text-amber-100 font-medium">
              Add together all the digits in your birth date until you reach a single digit. For example, if you were born on July 22, 1990, you would calculate 7 (for July) + 2 + 2 + 1 + 9 + 9 + 0 = 30, then reduce further by adding 3 + 0 to arrive at a Life Path Number of 3.
            </p>
          </div>
        </div>

        {/* Destiny Number - Top Right */}
        <div className="border-2 border-dashed border-amber-400 rounded-lg p-5 bg-blue-900/20">
          <img 
            src="/numerology-frame.png" 
            alt="Decorative Frame"
            className="w-full h-6 object-cover mb-3"
          />
          <h3 className="text-lg font-bold text-amber-200 mb-3">DESTINY NUMBER</h3>
          <p className="text-sm leading-relaxed text-amber-100 mb-4 font-medium">
            Also known as the expression number, it is derived from the full name you were given at birth. It reflects your natural talents, abilities, and challenges in achieving your personal and professional potential.
          </p>
          <div className="bg-blue-950/40 border border-amber-400/30 rounded p-3 mt-4">
            <h4 className="text-xs font-bold text-amber-200 mb-2">HOW TO CALCULATE</h4>
            <p className="text-xs leading-relaxed text-amber-100 font-medium">
              Assign each letter of your full birth name a number according to its position in the alphabet (A=1, B=2, ..., I=9, then repeat with J=1, K=2, etc.). Add all these numbers together and reduce them to a single digit in the same way as the Life Path Number.
            </p>
          </div>
        </div>

        {/* Personality Number - Bottom Left */}
        <div className="border-2 border-dashed border-amber-400 rounded-lg p-5 bg-blue-900/20">
          <img 
            src="/numerology-frame.png" 
            alt="Decorative Frame"
            className="w-full h-6 object-cover mb-3"
          />
          <h3 className="text-lg font-bold text-amber-200 mb-3">PERSONALITY NUMBER</h3>
          <p className="text-sm leading-relaxed text-amber-100 mb-4 font-medium">
            Coming from the consonants in your name, this number represents the external you, showing how others perceive you at first meeting.
          </p>
          <div className="bg-blue-950/40 border border-amber-400/30 rounded p-3 mt-4">
            <h4 className="text-xs font-bold text-amber-200 mb-2">HOW TO CALCULATE</h4>
            <p className="text-xs leading-relaxed text-amber-100 font-medium">
              Similarly, add only the consonants of your full name and reduce the sum to a single digit.
            </p>
          </div>
        </div>

        {/* Soul Urge Number - Bottom Right */}
        <div className="border-2 border-dashed border-amber-400 rounded-lg p-5 bg-blue-900/20">
          <img 
            src="/numerology-frame.png" 
            alt="Decorative Frame"
            className="w-full h-6 object-cover mb-3"
          />
          <h3 className="text-lg font-bold text-amber-200 mb-3">SOUL URGE NUMBER</h3>
          <p className="text-sm leading-relaxed text-amber-100 mb-4 font-medium">
            Calculated from the vowels in your name, this number exposes your inner self, your deepest desires, and the motivations behind many of your decisions.
          </p>
          <div className="bg-blue-950/40 border border-amber-400/30 rounded p-3 mt-4">
            <h4 className="text-xs font-bold text-amber-200 mb-2">HOW TO CALCULATE</h4>
            <p className="text-xs leading-relaxed text-amber-100 font-medium">
              Using the same number assignments as the Destiny Number, add only the vowels of your full name, and reduce them to a single digit.
            </p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-amber-200 text-lg">
        {pageNumber}
      </div>
    </div>
  )
}
