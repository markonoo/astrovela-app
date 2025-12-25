"use client"

import { PageLayout } from "@/components/shared/page-layout"
import { StarRating } from "@/components/ui/star-rating"
import { useState } from "react"

// Sample review data
const reviewsData = [
  {
    id: 1,
    name: "Sarah J.",
    age: 29,
    rating: 5,
    date: "October 15, 2023",
    title: "Life-changing guidance!",
    content:
      "I got astrovela book for my birthday, and it's been an incredible journey of self-discovery since. I use it daily with my friends to really understand what's happening in our lives. The insights about my career path were spot-on and helped me make a decision I was struggling with for months.",
    imageSrc: "/images/reviews/sarah-johnson.jpg",
  },
  {
    id: 2,
    name: "Rachel W.",
    age: 31,
    rating: 5,
    date: "September 8, 2023",
    title: "Total game-changer for my relationships",
    content:
      "Total game-changer. It gave me the understanding I needed about my crush I had for past 5 months. I finally got the hope back that there's a chance. We'll see how it goes. The compatibility insights were incredibly accurate and helped me understand patterns in my relationships I never noticed before.",
    imageSrc: "/images/reviews/rachel-williams.jpg",
  },
  {
    id: 3,
    name: "Mark T.",
    age: 35,
    rating: 4,
    date: "August 22, 2023",
    title: "Impressive accuracy",
    content:
      "I was skeptical at first, but the personalized report was surprisingly accurate about my personality traits and tendencies. The career guidance section was especially helpful as I was considering a job change. Could use more actionable advice, but overall very impressed.",
    imageSrc: "/images/reviews/mark-thompson.jpg",
  },
  {
    id: 4,
    name: "Emily L.",
    age: 27,
    rating: 5,
    date: "November 3, 2023",
    title: "Best astrology book I've ever read",
    content:
      "I've read many astrology books before, but none as personalized and detailed as astrovela. The way it breaks down my birth chart and explains the influences of each planet is incredibly insightful. I've been recommending it to all my friends!",
    imageSrc: "/images/reviews/emily-lopez.jpg",
  },
  {
    id: 5,
    name: "David K.",
    age: 42,
    rating: 4,
    date: "October 30, 2023",
    title: "Great insights for personal growth",
    content:
      "As someone focused on personal development, I found the astrovela book to be a valuable tool. It highlighted areas for growth I wasn't fully aware of and provided strategies tailored to my astrological profile. The only reason for 4 stars instead of 5 is I wish the digital version had more interactive elements.",
    imageSrc: "/images/reviews/david-kumar.jpg",
  },
  {
    id: 6,
    name: "Jessica M.",
    age: 33,
    rating: 5,
    date: "September 17, 2023",
    title: "Uncannily accurate",
    content:
      "I was blown away by how accurately the book described aspects of my personality that even close friends don't know about. The section on how my moon sign affects my emotional responses was particularly eye-opening. Worth every penny!",
    imageSrc: "/images/reviews/jessica-martin.jpg",
  },
]

const categories = ["All", "5 Stars", "4 Stars", "3 Stars", "2 Stars", "1 Star"]

export default function ReviewsPage() {
  const [activeCategory, setActiveCategory] = useState("All")

  // Filter reviews based on the active category
  const filteredReviews =
    activeCategory === "All"
      ? reviewsData
      : reviewsData.filter((review) => {
          const starCount = Number.parseInt(activeCategory.split(" ")[0])
          return review.rating === starCount
        })

  // Calculate overall rating stats
  const avgRating = reviewsData.reduce((sum, review) => sum + review.rating, 0) / reviewsData.length
  const fiveStarCount = reviewsData.filter((r) => r.rating === 5).length
  const fiveStarPercentage = Math.round((fiveStarCount / reviewsData.length) * 100)

  return (
    <PageLayout
      title="Customer Reviews"
      description="See what our community has to say about their astrovela experience"
    >
      {/* Overall Rating Section */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">Overall Rating</h2>
            <div className="flex items-center justify-center md:justify-start">
              <span className="text-4xl font-bold mr-2">{avgRating.toFixed(1)}</span>
              <StarRating rating={avgRating} className="scale-150 origin-left" />
            </div>
            <p className="text-sm text-gray-500 mt-1">Based on {reviewsData.length} reviews</p>
          </div>

          <div className="w-full md:w-auto">
            <div className="flex items-center mb-2">
              <div className="w-28 text-sm">5 stars</div>
              <div className="w-48 bg-gray-200 rounded-full h-2.5 mx-2">
                <div className="bg-yellow-400 h-2.5 rounded-full" style={{ width: `${fiveStarPercentage}%` }}></div>
              </div>
              <div className="text-sm text-gray-500">{fiveStarPercentage}%</div>
            </div>

            {[4, 3, 2, 1].map((stars) => {
              const count = reviewsData.filter((r) => r.rating === stars).length
              const percentage = Math.round((count / reviewsData.length) * 100)

              return (
                <div className="flex items-center mb-2" key={stars}>
                  <div className="w-28 text-sm">{stars} stars</div>
                  <div className="w-48 bg-gray-200 rounded-full h-2.5 mx-2">
                    <div className="bg-yellow-400 h-2.5 rounded-full" style={{ width: `${percentage}%` }}></div>
                  </div>
                  <div className="text-sm text-gray-500">{percentage}%</div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category ? "bg-yellow-400 text-gray-900" : "bg-white text-gray-600 hover:bg-gray-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Reviews List */}
      <div className="space-y-6">
        {filteredReviews.map((review) => (
          <div key={review.id} className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-start">
              <img
                src={review.imageSrc || "/placeholder.svg"}
                alt={`${review.name}'s profile`}
                className="w-12 h-12 rounded-full mr-4"
              />
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <div>
                    <h3 className="font-bold">
                      {review.name}, {review.age}
                    </h3>
                    <StarRating rating={review.rating} />
                  </div>
                  <span className="text-sm text-gray-500">{review.date}</span>
                </div>
                <h4 className="font-semibold text-lg mb-2">{review.title}</h4>
                <p className="text-gray-700">{review.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Write a Review CTA */}
      <div className="bg-yellow-50 rounded-lg p-6 my-8 text-center">
        <h2 className="text-xl font-bold mb-2">Share your experience with astrovela</h2>
        <p className="mb-4">Have you used our personalized astrology book? We'd love to hear your thoughts!</p>
        <button className="px-6 py-3 bg-yellow-400 rounded-full text-gray-900 font-medium hover:bg-yellow-500 transition-colors">
          Write a Review
        </button>
      </div>
    </PageLayout>
  )
}

