import React from "react"

interface ArtOfDivinationReplicaProps {
  pageNumber: number
}

export function ArtOfDivinationReplica({ pageNumber }: ArtOfDivinationReplicaProps) {
  return (
    <div className="h-full bg-gradient-to-br from-purple-50 to-pink-50 text-gray-800 flex flex-col flex-1 relative p-12">
      {/* Title section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-light tracking-[0.15em] font-serif text-purple-700 mb-3">
          THE ART OF DIVINATION
        </h1>
        <p className="text-sm text-purple-600 tracking-wide">
          Ancient practices for seeking guidance and insight
        </p>
      </div>

      {/* Main content */}
      <div className="flex-1 space-y-8">
        {/* What is Divination? */}
        <div className="bg-white/70 backdrop-blur-sm rounded-lg p-6 border border-purple-200">
          <h2 className="text-xl font-semibold mb-4 text-purple-800">What is Divination?</h2>
          <p className="text-sm leading-relaxed text-gray-700">
            Divination is the practice of seeking knowledge of the future or the unknown through supernatural or intuitive means. Throughout history, humans have developed numerous methods to glimpse beyond the veil of ordinary perception and connect with higher wisdom.
          </p>
        </div>

        {/* Grid of divination methods */}
        <div className="grid grid-cols-2 gap-6">
          {/* Tarot Cards */}
          <div className="bg-white/70 backdrop-blur-sm rounded-lg p-5 border border-purple-200">
            <h3 className="text-lg font-semibold mb-3 text-purple-800">Tarot Cards</h3>
            <p className="text-sm leading-relaxed text-gray-700">
              A deck of 78 cards used for gaining insight into past, present, and future situations through symbolic interpretation and intuitive guidance.
            </p>
          </div>

          {/* Astrology */}
          <div className="bg-white/70 backdrop-blur-sm rounded-lg p-5 border border-purple-200">
            <h3 className="text-lg font-semibold mb-3 text-purple-800">Astrology</h3>
            <p className="text-sm leading-relaxed text-gray-700">
              The study of celestial movements and their influence on human affairs and natural phenomena, providing cosmic guidance for life decisions.
            </p>
          </div>

          {/* Numerology */}
          <div className="bg-white/70 backdrop-blur-sm rounded-lg p-5 border border-purple-200">
            <h3 className="text-lg font-semibold mb-3 text-purple-800">Numerology</h3>
            <p className="text-sm leading-relaxed text-gray-700">
              The mystical study of numbers and their significance in our lives, revealing patterns and meanings through mathematical relationships.
            </p>
          </div>

          {/* Palmistry */}
          <div className="bg-white/70 backdrop-blur-sm rounded-lg p-5 border border-purple-200">
            <h3 className="text-lg font-semibold mb-3 text-purple-800">Palmistry</h3>
            <p className="text-sm leading-relaxed text-gray-700">
              The art of reading the lines, shapes, and features of the hands to gain insight into personality, life path, and potential future events.
            </p>
          </div>
        </div>

        {/* The Purpose of Divination */}
        <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg p-6 border border-purple-200">
          <h2 className="text-xl font-semibold mb-4 text-purple-800 text-center">
            The Purpose of Divination
          </h2>
          <p className="text-sm leading-relaxed text-gray-700 text-center">
            Divination serves not to predict a fixed future, but to illuminate possibilities, provide guidance during times of uncertainty, and help us connect with our deeper intuition and the wisdom of the universe. It is a tool for self-reflection and spiritual growth.
          </p>
        </div>
      </div>

      {/* Page number */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="text-purple-600 text-sm font-medium">{pageNumber}</div>
      </div>
    </div>
  )
}

