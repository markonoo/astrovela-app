import Image from "next/image"

export function TheMountsPage({ pageNumber }: { pageNumber: number }) {
  return (
    <div className="h-full bg-gradient-to-br from-stone-100 to-amber-50 text-gray-900 flex flex-col relative px-10 py-8">
      <div className="text-center mb-6">
        <h1 className="text-4xl font-light tracking-[0.15em] font-serif text-gray-800">THE MOUNTS</h1>
      </div>

      <div className="grid grid-cols-2 gap-8 max-w-6xl mx-auto flex-1">
        {/* Left: Hand Diagram - Palmistry Mounts Image */}
        <div className="flex flex-col justify-center">
          <div className="relative w-full max-w-sm mx-auto">
            <Image
              src="/palmistry-mounts-hand.png"
              alt="Palmistry hand diagram showing the mounts of the palm"
              width={400}
              height={533}
              className="w-full h-auto object-contain"
              priority
            />
          </div>
        </div>

        {/* Right: Descriptions - moved down by 10% */}
        <div className="space-y-4 text-sm mt-[10%]">
          <div>
            <h3 className="font-bold text-gray-800 mb-1 tracking-wide">MOUNT OF SATURN</h3>
            <p className="text-xs leading-relaxed text-gray-700">
              Positioned at the base of the middle finger, it signifies wisdom, responsibility, and a solitary nature.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-gray-800 mb-1 tracking-wide">MOUNT OF APOLLO</h3>
            <p className="text-xs leading-relaxed text-gray-700">
              Located at the base of the ring finger, it reflects creativity, joy, and success.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-gray-800 mb-1 tracking-wide">MOUNT OF JUPITER</h3>
            <p className="text-xs leading-relaxed text-gray-700">
              Found at the base of the index finger, it denotes ambition, leadership, and self-confidence.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-gray-800 mb-1 tracking-wide">MOUNT OF MERCURY</h3>
            <p className="text-xs leading-relaxed text-gray-700">
              Found at the base of the little finger, it represents communication, intellect, and business acumen.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-gray-800 mb-1 tracking-wide">MOUNT OF VENUS</h3>
            <p className="text-xs leading-relaxed text-gray-700">
              Located at the base of the thumb, it represents love, beauty, and sensuality.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-gray-800 mb-1 tracking-wide">MOUNT OF MARS</h3>
            <p className="text-xs leading-relaxed text-gray-700">
              Divided into two areas, the Inner Mars (between the thumb and the Mount of Venus) and Outer Mars (between the Mount of Luna and the base of the palm). Inner Mars represents temperament and courage, while Outer Mars is about resistance and stamina.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-gray-800 mb-1 tracking-wide">MOUNT OF LUNA</h3>
            <p className="text-xs leading-relaxed text-gray-700">
              Situated on the opposite side of the hand from the thumb, it symbolizes imagination, intuition, and psychic abilities.
            </p>
          </div>
        </div>
      </div>

      <p className="text-xs text-gray-600 text-center max-w-4xl mx-auto mt-4 mb-[10%]">
        The palm is home to several raised areas, known as mounts, each named after a celestial body and indicating different facets of personality, potential, and life path. Each mount is associated with a specific planet, and its prominence, development, and features offer insights into different aspects of an individual's traits and life experiences. Here's a breakdown of what each of the major mounts in palmistry represents.
      </p>

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-gray-700 text-lg">
        {pageNumber}
      </div>
    </div>
  )
}
