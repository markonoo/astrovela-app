export function PalmistryDetailsPage({ pageNumber }: { pageNumber: number }) {
  return (
    <div className="h-full bg-gradient-to-br from-stone-100 to-amber-50 text-gray-900 flex flex-col relative px-16 py-10">
      <div className="grid grid-cols-2 gap-10 max-w-4xl mx-auto flex-1">
        {/* Left Column */}
        <div className="space-y-6">
          <div>
            <h2 className="text-base font-bold text-gray-800 mb-3 tracking-wide">TEXTURE OF THE SKIN</h2>
            <p className="text-sm leading-relaxed text-gray-700 mb-3 font-medium">
              Understanding the skin texture helps in interpreting how a person interacts with their surroundings and how finely tuned their sensory perceptions are.
            </p>
            <div className="space-y-2">
              <p className="text-xs leading-relaxed text-gray-700 font-medium">
                <span className="font-bold italic">Fine Skin:</span> Suggests a sensitive and potentially refined nature, prone to being influenced by the environment.
              </p>
              <p className="text-xs leading-relaxed text-gray-700 font-medium">
                <span className="font-bold italic">Coarse Skin:</span> Indicates resilience and a possibly robust approach to life's challenges.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-base font-bold text-gray-800 mb-3 tracking-wide">FLEXIBILITY OF THE FINGERS</h2>
            <p className="text-sm leading-relaxed text-gray-700 mb-3 font-medium">
              Flexibility relates to adaptability and openness. The degree of flexibility can give clues to how a person might handle complex situations in life, their openness to new ideas, and their general approach to challenges and opportunities.
            </p>
            <div className="space-y-2">
              <p className="text-xs leading-relaxed text-gray-700 font-medium">
                <span className="font-bold italic">Flexible Fingers:</span> Point to an adaptable nature, capable of handling change and diversity in thoughts and actions.
              </p>
              <p className="text-xs leading-relaxed text-gray-700 font-medium">
                <span className="font-bold italic">Stiff Fingers:</span> Suggest a more conservative and possibly resistant approach to change, highlighting stability and persistence.
              </p>
            </div>
          </div>

          <div className="flex justify-center mt-12">
            <img 
              src="/palmistry-accent.png" 
              alt="Palmistry decorative element" 
              className="w-[216px] h-auto object-contain"
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          <div>
            <h2 className="text-base font-bold text-gray-800 mb-3 tracking-wide">IMPORTANCE IN READINGS</h2>
            <p className="text-sm leading-relaxed text-gray-700 mb-4 font-medium">
              Starting with these fundamental observations, a palmist can initially frame an individual's basic nature. Before progressing to more detailed analyses, they examine the lines and mounts on the hands. This method ensures a holistic understanding. Insights from lines—depicting life events, personality developments, and emotional states—are grounded in this foundational knowledge. Similarly, the mounts provide deeper understanding of key life areas influenced by planetary energies. These interpretations are all based on the basic characteristics revealed by the hand's shape, texture, and flexibility.
            </p>
            <p className="text-sm leading-relaxed text-gray-700 font-medium">
              By integrating these observations, a palmist constructs a comprehensive profile that aligns the broader personality and life tendencies with the specific predictions and traits indicated by the more intricate palm features. This makes the reading not only more accurate but also more personalized and relevant to the individual being read.
            </p>
          </div>

          <div>
            <h2 className="text-base font-bold text-gray-800 mb-3 tracking-wide">TIPS FOR ASPIRING PALMISTS</h2>
            <p className="text-sm leading-relaxed text-gray-700 mb-3 font-medium">
              Experience is key in palmistry. Practice reading the palms of friends and family to improve your skills.
            </p>
            <p className="text-sm leading-relaxed text-gray-700 mb-3 font-medium">
              While technical knowledge is important, intuition plays a crucial role in interpreting the lines and shapes on the palm.
            </p>
            <p className="text-sm leading-relaxed text-gray-700 font-medium">
              Palmistry is a vast field. Continuously educate yourself through books, courses, and workshops to deepen your understanding.
            </p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-gray-700 text-lg">
        {pageNumber}
      </div>
    </div>
  )
}
