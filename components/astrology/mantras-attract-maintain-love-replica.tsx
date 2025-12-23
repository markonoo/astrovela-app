export function MantrasAttractMaintainLoveReplica({ pageNumber }: { pageNumber: number }) {
  return (
    <div className="h-full bg-gradient-to-br from-rose-950 via-red-950 to-rose-900 text-amber-100 flex flex-col justify-center relative px-16 py-10">
      {/* Decorative stars and hearts background - placeholder */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-amber-400/30 text-xs">
            Background Pattern
          </div>
        </div>
      </div>

      {/* Hand holding heart pendant illustration placeholder */}
      <div className="relative z-10 flex justify-center mb-6">
        <div className="w-32 h-40 border-2 border-dashed border-amber-500 rounded flex items-center justify-center">
          <div className="text-xs text-amber-400/70 text-center">Hand with<br/>Heart Pendant</div>
        </div>
      </div>

      {/* Title and intro */}
      <div className="relative z-10 text-center mb-6">
        <h1 className="text-2xl font-bold text-amber-200 mb-3">
          MANTRAS TO ATTRACT<br />& MAINTAIN LOVE
        </h1>
        <p className="text-sm text-amber-100 max-w-3xl mx-auto mb-6 font-medium">
          Mantras are sacred sounds, words, or phrases repeated during meditation to help focus the mind and align your energy with a specific intention. Here's how to use mantras to attract and maintain love:
        </p>
      </div>

      {/* Numbered steps */}
      <div className="relative z-10 max-w-3xl mx-auto space-y-3">
        <div className="flex items-start">
          <div className="text-6xl font-light text-amber-400/40 mr-4 leading-none">1</div>
          <div className="flex-1 pt-2">
            <p className="text-sm text-amber-100 font-medium">
              <span className="font-bold italic">Choose Your Mantra:</span> Select a mantra that resonates with your intention. For attracting love, you might use traditional Sanskrit mantras like "Om Shree Ganeshaya Namah" (a mantra for removing obstacles) or "Om Kleem" (a mantra for attraction and love).
            </p>
          </div>
        </div>

        <div className="flex items-start">
          <div className="text-6xl font-light text-amber-400/40 mr-4 leading-none">2</div>
          <div className="flex-1 pt-2">
            <p className="text-sm text-amber-100 font-medium">
              <span className="font-bold italic">Find a Quiet Space:</span> Set aside a quiet, comfortable space where you can meditate without interruptions. This helps create a peaceful environment conducive to deep focus and intention setting.
            </p>
          </div>
        </div>

        <div className="flex items-start">
          <div className="text-6xl font-light text-amber-400/40 mr-4 leading-none">3</div>
          <div className="flex-1 pt-2">
            <p className="text-sm text-amber-100 font-medium">
              <span className="font-bold italic">Focus on Your Breath:</span> Begin by taking a few deep breaths to center yourself. Inhale deeply through your nose and exhale slowly through your mouth, releasing any tension.
            </p>
          </div>
        </div>

        <div className="flex items-start">
          <div className="text-6xl font-light text-amber-400/40 mr-4 leading-none">4</div>
          <div className="flex-1 pt-2">
            <p className="text-sm text-amber-100 font-medium">
              <span className="font-bold italic">Repeat Your Mantra:</span> Start repeating your chosen mantra either aloud or silently. You can use a mala (a string of beads) to keep count if you prefer. Aim to repeat the mantra for at least 10-15 minutes.
            </p>
          </div>
        </div>

        <div className="flex items-start">
          <div className="text-6xl font-light text-amber-400/40 mr-4 leading-none">5</div>
          <div className="flex-1 pt-2">
            <p className="text-sm text-amber-100 font-medium">
              <span className="font-bold italic">Visualize Your Intention:</span> As you chant, visualize your desired outcome. Imagine yourself surrounded by love, feeling happy and fulfilled in your ideal relationship. Let this visualization enhance the power of your mantra.
            </p>
          </div>
        </div>

        <div className="flex items-start">
          <div className="text-6xl font-light text-amber-400/40 mr-4 leading-none">6</div>
          <div className="flex-1 pt-2">
            <p className="text-sm text-amber-100 font-medium">
              <span className="font-bold italic">Consistency is Key:</span> Practice your mantra meditation regularly. The more consistently you repeat your mantra, the more powerful its effects will be on your energy and mindset.
            </p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-amber-200 text-lg z-10">
        {pageNumber}
      </div>
    </div>
  )
}
