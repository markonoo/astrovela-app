"use client"

import { useState } from "react"
import Link from "next/link"
import { PageHeader } from "@/components/shared/page-header"
import { Footer } from "@/components/shared/footer"
import { Star, ChevronRight, Quote } from "lucide-react"
import { StarRating } from "@/components/ui/star-rating"
import { Button } from "@/components/ui/button"
import PremiumBookCover from "@/components/PremiumBookCover" // Assumed component name
import { COLOR_SCHEMES } from "@/utils/constants"

export default function ExampleBookPage() {
  const [selectedColor, setSelectedColor] = useState<string>("green")

  // Define color options from our consolidated utility
  const colorOptions = Object.entries(COLOR_SCHEMES).map(([value, scheme]) => ({
    name: scheme.name,
    value,
    bgColor: scheme.bgColor,
    textColor: scheme.textColor,
  }))

  // Testimonials data
  const testimonials = [
    {
      quote:
        "My personalized astrology book has been a life-changing guide. The insights about my career path were spot-on and helped me make a decision I was struggling with for months.",
      name: "Sarah J.",
      location: "New York",
      rating: 5,
      imageSrc: "/placeholder.svg?height=60&width=60",
    },
    {
      quote:
        "The natal chart analysis was incredibly accurate. I've read many astrology books before, but none as personalized and detailed as this one. I've been recommending it to all my friends!",
      name: "Emily L.",
      location: "London",
      rating: 5,
      imageSrc: "/placeholder.svg?height=60&width=60",
    },
    {
      quote:
        "I was skeptical at first, but the personalized report was surprisingly accurate about my personality traits and tendencies. The relationship compatibility insights helped me understand patterns I never noticed before.",
      name: "Mark T.",
      location: "Toronto",
      rating: 4,
      imageSrc: "/placeholder.svg?height=60&width=60",
    },
  ]

  // Book features
  const bookFeatures = [
    {
      title: "Personalized Birth Chart",
      description: "Your unique cosmic blueprint based on your exact birth date, time, and location",
      icon: "✨",
    },
    {
      title: "Personality Profile",
      description: "Detailed insights into your strengths, challenges, and natural tendencies",
      icon: "🔍",
    },
    {
      title: "Relationship Compatibility",
      description: "Understand how you connect with others and who might be your perfect match",
      icon: "❤️",
    },
    {
      title: "Career & Life Path",
      description: "Discover your natural talents and potential career paths aligned with your stars",
      icon: "🌟",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <PageHeader transparent={true} />

      <div className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-8 text-center">Example Book Preview</h1>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Book preview */}
          <div className="flex-1 flex justify-center">
            <div
              className="w-full max-w-md aspect-[3/4]"
              style={{
                position: "relative",
                zIndex: 1,
                boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
              }}
            >
              <PremiumBookCover // Changed to PremiumBookCover
                name="Olivia"
                birthDate="December 6, 2021"
                birthPlace="Hamburg, Germany"
                colorScheme={selectedColor}
              />
            </div>
          </div>

          {/* Color options */}
          <div className="flex-1">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Customize Your Book</h2>

              <div className="mb-6">
                <h3 className="text-lg font-medium mb-3">Choose a Color</h3>
                <div className="flex flex-wrap gap-3">
                  {colorOptions.map((color) => (
                    <button
                      key={color.value}
                      onClick={() => setSelectedColor(color.value)}
                      className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all ${
                        selectedColor === color.value ? "ring-2 ring-offset-2 ring-blue-500" : ""
                      }`}
                      style={{ backgroundColor: color.bgColor }}
                      aria-label={`Select ${color.name} color`}
                      aria-pressed={selectedColor === color.value}
                    />
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <Button className="w-full">Continue to Checkout</Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">What&apos;s Inside Your Book</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {bookFeatures.map((feature, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="text-3xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">What Our Readers Say</h2>
            <p className="text-center text-gray-600 mb-12">
              Join thousands of satisfied readers who have discovered their cosmic blueprint
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm p-6 relative">
                  <Quote className="absolute top-4 right-4 h-8 w-8 text-yellow-200" />
                  <div className="mb-4">
                    <StarRating rating={testimonial.rating} maxRating={5} className="mb-2" />
                    <p className="text-gray-700 italic">{testimonial.quote}</p>
                  </div>
                  <div className="flex items-center mt-4">
                    <img
                      src={testimonial.imageSrc || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <p className="font-medium">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Overall Rating */}
            <div className="mt-12 text-center">
              <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-sm">
                <div className="flex items-center mr-3">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <span className="text-lg font-medium">4.9/5 from over 2,000 readers</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-900/10 to-purple-900/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Discover Your Cosmic Blueprint?</h2>
            <p className="text-lg text-gray-700 mb-8">
              Take our quick astrology quiz and get your personalized book created just for you.
            </p>
            <Link
              href="/quiz"
              className="inline-flex items-center px-8 py-4 bg-yellow-400 rounded-full text-gray-900 font-medium hover:bg-yellow-500 transition-colors text-lg"
            >
              Start Your Journey
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}