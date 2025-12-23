import React from "react"
import { Section } from "./base/Section"

export function TarotInterpretationGuide({ pageNumber }: { pageNumber: number }) {
  return (
    <div className="h-full bg-black flex flex-col flex-1 relative">
      <Section className="page-dark flex flex-col justify-between items-center">
      {/* Decorative border */}
      <div className="absolute inset-4 border-2 border-amber-200/30 rounded-lg">
        <div className="absolute -top-2 left-8 w-8 h-4 bg-black"></div>
        <div className="absolute -top-2 right-8 w-8 h-4 bg-black"></div>
        <div className="absolute -bottom-2 left-8 w-8 h-4 bg-black"></div>
        <div className="absolute -bottom-2 right-8 w-8 h-4 bg-black"></div>

        {/* Corner decorations */}
        <div className="absolute -top-1 -left-1 w-6 h-6 border-l-2 border-t-2 border-amber-200/30"></div>
        <div className="absolute -top-1 -right-1 w-6 h-6 border-r-2 border-t-2 border-amber-200/30"></div>
        <div className="absolute -bottom-1 -left-1 w-6 h-6 border-l-2 border-b-2 border-amber-200/30"></div>
        <div className="absolute -bottom-1 -right-1 w-6 h-6 border-r-2 border-b-2 border-amber-200/30"></div>

        {/* Radiating lines */}
        <div className="absolute top-4 left-4">
          <div className="w-8 h-0.5 bg-amber-200/30 rotate-45 origin-left"></div>
          <div className="w-6 h-0.5 bg-amber-200/30 rotate-12 origin-left mt-1"></div>
          <div className="w-4 h-0.5 bg-amber-200/30 -rotate-12 origin-left mt-1"></div>
        </div>
        <div className="absolute top-4 right-4">
          <div className="w-8 h-0.5 bg-amber-200/30 -rotate-45 origin-right"></div>
          <div className="w-6 h-0.5 bg-amber-200/30 -rotate-12 origin-right mt-1"></div>
          <div className="w-4 h-0.5 bg-amber-200/30 rotate-12 origin-right mt-1"></div>
        </div>
        <div className="absolute bottom-4 left-4">
          <div className="w-8 h-0.5 bg-amber-200/30 -rotate-45 origin-left"></div>
          <div className="w-6 h-0.5 bg-amber-200/30 -rotate-12 origin-left mb-1"></div>
          <div className="w-4 h-0.5 bg-amber-200/30 rotate-12 origin-left mb-1"></div>
        </div>
        <div className="absolute bottom-4 right-4">
          <div className="w-8 h-0.5 bg-amber-200/30 rotate-45 origin-right"></div>
          <div className="w-6 h-0.5 bg-amber-200/30 rotate-12 origin-right mb-1"></div>
          <div className="w-4 h-0.5 bg-amber-200/30 -rotate-12 origin-right mb-1"></div>
        </div>
      </div>

      <div className="text-center max-w-5xl z-10">
        <h1 className="text-xl font-light mb-8 text-amber-100 tracking-wide">
          INTERPRETING
          <br />
          TAROT CARDS
        </h1>

        <p className="text-lg leading-relaxed mb-10 text-amber-100/90 max-w-2xl mx-auto">
          Interpreting tarot cards involves understanding their meanings and how they relate to one another in a spread.
          Tips for beginners:
        </p>

        {/* Five tips in a grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto min-h-full flex flex-col flex-1">
          {/* Tip 1 */}
          <div className="text-center">
            <div className="text-6xl font-light text-amber-200/60 mb-4">1</div>
            <h3 className="text-xl font-medium text-amber-200 mb-4 tracking-wide">START WITH INTUITION</h3>
            <p className="text-sm text-amber-100/80 leading-relaxed">
              Look at the card and pay attention to how it makes you feel or what thoughts it brings to mind beforelooking up its meaning.
            </p>
          </div>

          {/* Tip 2 */}
          <div className="text-center">
            <div className="text-6xl font-light text-amber-200/60 mb-4">2</div>
            <h3 className="text-xl font-medium text-amber-200 mb-4 tracking-wide">CONSIDER THE POSITION</h3>
            <p className="text-sm text-amber-100/80 leading-relaxed">
              The meaning of a card can change depending on its position in a spread (e.g., past, present, future).
            </p>
          </div>

          {/* Tip 3 */}
          <div className="text-center">
            <div className="text-6xl font-light text-amber-200/60 mb-4">3</div>
            <h3 className="text-xl font-medium text-amber-200 mb-4 tracking-wide">
              LOOK AT THE
              <br />
              BIG PICTURE
            </h3>
            <p className="text-sm text-amber-100/80 leading-relaxed">
              See how the cards interact with each other. Is there more of a certain suit or number? Do the themes ofthe Major Arcana cards present in the reading offer a broader lesson or challenge?
            </p>
          </div>

          {/* Tip 4 */}
          <div className="text-center">
            <div className="text-6xl font-light text-amber-200/60 mb-4">4</div>
            <h3 className="text-xl font-medium text-amber-200 mb-4 tracking-wide">PRACTICE</h3>
            <p className="text-sm text-amber-100/80 leading-relaxed">
              The more you work with the cards, the more intuitive your readings will become.
            </p>
          </div>

          {/* Tip 5 */}
          <div className="text-center md:col-span-2 lg:col-span-1">
            <div className="text-6xl font-light text-amber-200/60 mb-4">5</div>
            <h3 className="text-xl font-medium text-amber-200 mb-4 tracking-wide">ETHICS IN TAROT</h3>
            <p className="text-sm text-amber-100/80 leading-relaxed">
              Tarot reading comes with a responsibility to handle the querent's questions with sensitivity and care.
              It's crucial to maintain an ethical approach, ensuring confidentiality, avoiding fatalistic predictions,
              and empowering the querent to make their own decisions.
            </p>
          </div>
        </div>
      </div>
      </Section>
    </div>
  )
}
