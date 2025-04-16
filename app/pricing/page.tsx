"use client"

import { useQuiz } from "@/contexts/quiz-context"
import { useState, useEffect, useRef } from "react"
import { ChevronLeft, Clock } from "lucide-react"
import { useRouter } from "next/navigation"
import { isQuizCompleted } from "@/utils/storage"
import { getZodiacSign } from "@/utils/zodiac"
import { StarRating } from "@/components/ui/star-rating"
import { TestimonialCard } from "@/components/ui/testimonial-card"
import { ProductOption } from "@/components/ui/product-option"
import { PaymentMethods } from "@/components/ui/payment-methods"
import { AccordionItem } from "@/components/ui/accordion-item"
import { BookCoverPreview } from "@/components/book-cover-preview"
import { THEME_COLORS } from "@/components/book-cover-designer"

interface SelectedOptions {
  app: boolean
  paperback: boolean
  ebook: boolean
}

export default function PricingPage() {
  const { state } = useQuiz()
  const router = useRouter()
  const [hasQuizData, setHasQuizData] = useState(false)
  const [zodiacSign, setZodiacSign] = useState<string | null>(null)
  const [termsAccepted, setTermsAccepted] = useState(false)
  const [showTermsWarning, setShowTermsWarning] = useState(false)
  const [countdown, setCountdown] = useState({ minutes: 14, seconds: 54 })
  const [selectedOptions, setSelectedOptions] = useState<SelectedOptions>({
    app: true,
    paperback: true,
    ebook: true
  })
  const [isProcessingOrder, setIsProcessingOrder] = useState(false)
  const [checkoutError, setCheckoutError] = useState<string | null>(null)
  const [orderSuccess, setOrderSuccess] = useState(false)

  const optionsSectionRef = useRef<HTMLDivElement>(null)

  // Calculate total price based on selected options
  const calculateTotalPrice = () => {
    if (selectedOptions.app && selectedOptions.paperback && selectedOptions.ebook) {
      return 79.99 // All options selected
    } else if (selectedOptions.paperback) {
      // Any combination with paperback costs at least the paperback price
      return 55.99
    } else if (selectedOptions.app && selectedOptions.ebook) {
      // App + eBook without paperback
      return 30.99
    } else if (selectedOptions.app) {
      // Just app
      return 30.99
    } else if (selectedOptions.ebook) {
      // Just eBook
      return 30.99
    }
    return 0 // Nothing selected
  }

  const totalPrice = calculateTotalPrice()

  // Handle option selection
  const handleOptionSelect = (option: keyof SelectedOptions) => {
    // Special handling for certain combinations
    if (option === "paperback") {
      // If turning paperback off, don't affect other options
      if (selectedOptions.paperback) {
        setSelectedOptions(prev => ({
          ...prev,
          paperback: false
        }));
      } else {
        // If turning paperback on, keep others as they are
        setSelectedOptions(prev => ({
          ...prev,
          paperback: true
        }));
      }
    } else if (option === "ebook") {
      // Handle ebook toggling
      setSelectedOptions(prev => ({
        ...prev,
        ebook: !prev.ebook
      }));
    } else if (option === "app") {
      // Handle app toggling
      setSelectedOptions(prev => ({
        ...prev,
        app: !prev.app
      }));
    }
  }

  useEffect(() => {
    // Check if we have any quiz data
    if (state.firstName || state.email || state.birthDate.month || isQuizCompleted()) {
      setHasQuizData(true)
    }

    // Get zodiac sign
    if (state.birthDate.month && state.birthDate.day) {
      const sign = getZodiacSign(Number.parseInt(state.birthDate.month), Number.parseInt(state.birthDate.day))
      setZodiacSign(sign)
    }

    // Countdown timer - now synchronized for both timers
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { minutes: prev.minutes - 1, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [state])

  const handleBackClick = () => {
    // Navigate back to the personalized landing page
    router.back()
  }

  const scrollToOptions = () => {
    if (optionsSectionRef.current) {
      optionsSectionRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Toggle terms acceptance
  const toggleTerms = () => {
    setTermsAccepted(!termsAccepted)
    if (showTermsWarning) {
      setShowTermsWarning(false)
    }
  }

  const handleOrderClick = async () => {
    if (!termsAccepted) {
      setShowTermsWarning(true)
      // Highlight the terms checkbox with a shake animation
      const termsElement = document.getElementById("terms-checkbox")
      if (termsElement) {
        termsElement.classList.add("animate-shake")
        setTimeout(() => {
          termsElement.classList.remove("animate-shake")
        }, 500)
      }
    } else {
      try {
        // Reset any previous errors
        setCheckoutError(null)

        // Show loading state
        setIsProcessingOrder(true)

        // Validate required data
        if (!state.email) {
          throw new Error("Email is required to complete your order")
        }

        // Simulate order processing
        await new Promise((resolve) => setTimeout(resolve, 1500))

        // Show success state
        setOrderSuccess(true)
        setIsProcessingOrder(false)

        // Redirect to thank you page after a delay
        setTimeout(() => {
          router.push("/thank-you")
        }, 2000)
      } catch (error) {
        console.error("Checkout error:", error)
        setCheckoutError(
          error instanceof Error ? error.message : "There was an error processing your order. Please try again.",
        )
        setIsProcessingOrder(false)
      }
    }
  }

  // Format countdown time
  const formatCountdown = (time: { minutes: number; seconds: number }) => {
    return `${time.minutes}:${time.seconds < 10 ? "0" : ""}${time.seconds}`
  }

  // Testimonials data
  const testimonials = [
    {
      quote:
        "Total game-changer. It gave me the understanding I needed about my crush I had for past 5 months. I finally got the hope back that there's a chance. We'll see how it goes.",
      name: "Rachel W.",
      age: 31,
      rating: 5,
      imageSrc: "/placeholder.svg?height=200&width=300",
    },
    {
      quote:
        "I got Nordastro book for my birthday, and it's been an incredible journey of self-discovery since. I use it daily with my friends to really understand what's happening in our lives.",
      name: "Sarah J.",
      age: 29,
      rating: 5,
      imageSrc: "/placeholder.svg?height=200&width=300",
    },
  ]

  return (
    <>
      {/* Header with back button */}
      <header className="bg-white py-4 px-4 sticky top-0 z-50 shadow-sm">
        <div className="max-w-lg mx-auto flex justify-between items-center">
          <button onClick={handleBackClick} className="flex items-center text-gray-600 hover:text-gray-900">
            <ChevronLeft size={24} />
          </button>
        </div>
      </header>

      <main className="max-w-lg mx-auto px-4 pb-8">
        {/* Top Section with Discount Timer */}
        <div className="bg-gray-50 p-6 mb-6">
          {/* Discount Timer - Using the synchronized timer */}
          <div className="flex justify-between items-center mb-4">
            <div>
              <p className="text-sm font-medium">50% discount reserved for</p>
              <p className="text-2xl font-bold">{formatCountdown(countdown)}</p>
            </div>
            <button
              onClick={scrollToOptions}
              className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-full font-medium text-sm"
            >
              Order now
            </button>
          </div>

          {/* Main Heading */}
          <h1 className="text-2xl font-bold mb-2 text-center">
            Get the #1 personalized astrology book & transform your life today
          </h1>
          <p className="text-center text-gray-700 mb-4">
            In-depth reading of your unique birth chart to help you achieve self-growth and happy relationships
          </p>

          {/* Social Proof */}
          <div className="flex justify-between items-center mb-6">
            <p className="text-sm">
              Over <span className="font-bold">2,065,847</span> books ordered!
            </p>
            <div className="flex items-center">
              <StarRating rating={4.8} />
              <span className="text-sm ml-1">4.8/5</span>
            </div>
          </div>

          {/* Book Cover - Using the enhanced book cover component */}
          <div className="flex items-center justify-center mb-4 w-full">
            <div className="w-[350px] h-[525px] flex items-center justify-center">
              <BookCoverPreview
                userInfo={{
                  firstName: state.firstName || "FIRST",
                  lastName: state.lastName || "",
                  placeOfBirth: state.birthPlace || "Place of Birth",
                  dateOfBirth: state.birthDate?.year && state.birthDate?.month && state.birthDate?.day
                    ? `${state.birthDate.year}-${state.birthDate.month.padStart(2, "0")}-${state.birthDate.day.padStart(2, "0")}`
                    : "",
                }}
                themeColor={THEME_COLORS[state.coverColorScheme]}
                selectedIcon={"natal-chart"}
              />
            </div>
          </div>
        </div>

        {/* Choose Option Section */}
        <div ref={optionsSectionRef}>
          <h2 className="text-xl font-bold mb-4 text-center" id="options-section">
            Choose your best option
          </h2>
        </div>

        {/* Countdown Bar - Using the synchronized timer */}
        <div className="bg-red-500 text-white rounded-lg p-3 mb-4 flex items-center justify-center">
          <Clock className="mr-2" size={18} />
          <p className="text-sm font-medium">This offer ends in {formatCountdown(countdown)}</p>
        </div>

        {/* Product Options */}
        <ProductOption
          type="app"
          title="Nordastro app"
          features={[
            "Unlimited compatibility reports",
            "New daily horoscopes & astrology content",
            "FREE 1-month trial with ebook or paperback",
          ]}
          price={selectedOptions.paperback ? "FREE" : "$30.99"}
          originalPrice="$30.99"
          priceUnit={!selectedOptions.paperback ? "/month" : ""}
          imageSrc="/placeholder.svg?height=80&width=60"
          isSelected={selectedOptions.app}
          onSelect={() => handleOptionSelect("app")}
        />

        <ProductOption
          type="paperback"
          title="Nordastro paperback"
          features={["Uniquely created just for you", "FREE shipping", "FREE app & ebook included"]}
          price="$55.99"
          originalPrice="$159.97"
          imageSrc="/placeholder.svg?height=80&width=60"
          isSelected={selectedOptions.paperback}
          onSelect={() => handleOptionSelect("paperback")}
          saleTag="SALE 65% OFF"
        />

        <ProductOption
          type="ebook"
          title="Nordastro ebook"
          features={["Digital copy delivered to your email", "FREE app included", "FREE with the paperback"]}
          price={selectedOptions.paperback ? "FREE" : "$30.99"}
          originalPrice="$49.99"
          imageSrc="/placeholder.svg?height=80&width=60"
          isSelected={selectedOptions.ebook}
          onSelect={() => handleOptionSelect("ebook")}
        />

        {/* Total Price Display */}
        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <div className="flex justify-between items-center">
            <span className="font-medium">Total Price:</span>
            <span className="text-xl font-bold">${totalPrice.toFixed(2)}</span>
          </div>
          <p className="text-sm text-gray-500 mt-2">
            {selectedOptions.app && selectedOptions.paperback && selectedOptions.ebook 
              ? "All-inclusive package with best value!" 
              : "Customize your package by selecting options above"}
          </p>
        </div>

        {checkoutError && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            <p>{checkoutError}</p>
          </div>
        )}

        {orderSuccess && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
            <p>Order successful! Redirecting to thank you page...</p>
          </div>
        )}

        {/* Order Button */}
        <button
          onClick={handleOrderClick}
          disabled={isProcessingOrder || orderSuccess}
          className={`w-full bg-yellow-400 text-gray-900 py-4 rounded-full font-bold mb-4 ${
            !termsAccepted || isProcessingOrder || orderSuccess ? "opacity-70" : ""
          }`}
        >
          {isProcessingOrder ? (
            <div className="flex items-center justify-center">
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-900"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Processing...
            </div>
          ) : orderSuccess ? (
            "Order Complete!"
          ) : (
            "Order now"
          )}
        </button>

        {/* Terms Checkbox - Made entire area clickable */}
        <div className="mb-6">
          <div className="flex items-start cursor-pointer" onClick={toggleTerms} id="terms-checkbox">
            <div className="flex-shrink-0 mt-1">
              <div
                className={`w-5 h-5 ${termsAccepted ? "bg-yellow-400" : "border-2 border-gray-300"} flex items-center justify-center transition-all duration-200`}
              >
                {termsAccepted && (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-3 h-3 text-white">
                    <path d="M5 12l5 5L20 7" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </div>
            </div>
            <label className="text-sm text-gray-600 ml-2">
              I agree to the <span className="underline">T&Cs</span> and{" "}
              <span className="underline">Privacy Policy</span>
            </label>
          </div>
          {showTermsWarning && !termsAccepted && (
            <p className="text-red-500 text-sm mt-2">Please accept the Terms and Conditions to continue</p>
          )}
        </div>

        {/* Payment Methods */}
        <div className="mb-4">
          <PaymentMethods />
        </div>

        {/* Subscription Notice */}
        <p className="text-xs text-gray-500 text-center mb-8">
          By clicking "Order Now," I agree that if I do not cancel the app subscription before the end of the free 1
          month trial, Nordastro will automatically charge my payment method the regular price of $30.99 every 1 month
          thereafter until I cancel by contacting us at help@nordastro.com
        </p>

        {/* Benefits Section */}
        <div className="bg-gray-100 rounded-lg p-6 mb-6">
          <div className="text-center mb-6">
            <h2 className="text-xl font-bold mb-4">
              Easily improve relationships, understand yourself better, and reach your personal goals 💛
            </h2>
            <div className="bg-white rounded-lg overflow-hidden mb-6">
              <img
                src="/placeholder.svg?height=200&width=400"
                alt="Book pages showing relationship rituals"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* What's Included Section */}
          <div className="mb-6">
            <h2 className="text-xl font-bold mb-4">What's included?</h2>

            <div className="space-y-4">
              {/* Birth Chart Analysis */}
              <div className="flex">
                <div className="mr-4 mt-1">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-gray-700">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                      <path d="M12 2V12L16 16" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="font-medium">Personalized birth chart analysis</h3>
                  <p className="text-sm text-gray-600">
                    Discover the secrets of your unique astrological blueprint to understand your personality,
                    strengths, and life path.
                  </p>
                </div>
              </div>

              {/* Love & Relationship */}
              <div className="flex">
                <div className="mr-4 mt-1">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-gray-700">
                      <path
                        d="M21 11.5C21 16.75 12 22 12 22C12 22 3 16.75 3 11.5C3 7.02 7.02 3 11.5 3C15.98 3 21 7.02 21 11.5Z"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <circle cx="12" cy="11" r="3" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="font-medium">Love & relationship insights</h3>
                  <p className="text-sm text-gray-600">
                    Understand your zodiac compatibility to find out how you connect with others & who is your perfect
                    partner.
                  </p>
                </div>
              </div>

              {/* Personality Profile */}
              <div className="flex">
                <div className="mr-4 mt-1">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-gray-700">
                      <path
                        d="M20 21V19C20 16.7909 18.2091 15 16 15H8C5.79086 15 4 16.7909 4 19V21"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="font-medium">Personality & life path profile</h3>
                  <p className="text-sm text-gray-600">
                    Learn about your personal traits, strengths, and areas for growth, helping you to better understand
                    and embrace your true self.
                  </p>
                </div>
              </div>

              {/* Career Guidance */}
              <div className="flex">
                <div className="mr-4 mt-1">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-gray-700">
                      <rect x="4" y="5" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
                      <path d="M16 3V7" stroke="currentColor" strokeWidth="2" />
                      <path d="M8 3V7" stroke="currentColor" strokeWidth="2" />
                      <path d="M4 11H20" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="font-medium">Career & success guidance</h3>
                  <p className="text-sm text-gray-600">
                    Enhance your professional life and achieve career goals by uncovering opportunities tailored to your
                    strengths.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Content */}
          <div className="mb-6">
            <h2 className="text-xl font-bold mb-4">Additional content:</h2>
            <ul className="space-y-2">
              {[
                "Divination & Astrology",
                "Beginner's Guide to Palmistry",
                "Tailored Tarot Card Readings",
                "Crystals in Astrology",
                "Intro to Numerology",
                "History of Astrology & Modern Astrology",
                "And more...",
              ].map((item, index) => (
                <li key={index} className="flex items-center">
                  <span className="text-yellow-400 mr-2">★</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Order Button */}
          <button onClick={scrollToOptions} className="w-full bg-yellow-400 text-gray-900 py-4 rounded-full font-bold">
            Order now
          </button>
        </div>

        {/* FAQ Section - Centered text and buttons */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Frequently asked questions</h2>

          <div className="bg-gray-100 rounded-lg overflow-hidden">
            <AccordionItem title="How is Nordastro personalized?">
              <p className="text-gray-600">
                Nordastro is personalized based on your birth details (date, time, and location) which create a unique
                astrological blueprint. Our advanced algorithms analyze your specific planetary positions and aspects to
                generate insights tailored specifically to you.
              </p>
            </AccordionItem>

            <AccordionItem title="What will I find inside my book?">
              <p className="text-gray-600">
                Your book contains a comprehensive analysis of your birth chart, personality traits, relationship
                compatibility, career guidance, and life path insights. It includes detailed explanations of your sun,
                moon, and rising signs, planetary positions, and how these cosmic influences shape your life.
              </p>
            </AccordionItem>

            <AccordionItem title="How long will it take to receive my book?">
              <p className="text-gray-600">
                Digital copies (ebook) are delivered instantly to your email. Physical books (paperback) typically ship
                within 3-5 business days and delivery times depend on your location, usually arriving within 7-14 days
                after shipping.
              </p>
            </AccordionItem>

            <AccordionItem title="I'm new to astrology. Is this book right for me?">
              <p className="text-gray-600">
                Nordastro is designed to be accessible for beginners while also providing depth for those more familiar
                with astrology. The book includes explanations of key concepts and terms, making it easy to understand
                regardless of your prior knowledge.
              </p>
            </AccordionItem>

            <AccordionItem title="Will the book help me with my specific issues and goals?">
              <p className="text-gray-600">
                Yes, your personalized book addresses various life areas including relationships, career, personal
                growth, and challenges. While it can't predict specific outcomes, it provides valuable insights into
                your natural tendencies, strengths, and potential challenges, helping you make more informed decisions
                aligned with your cosmic blueprint.
              </p>
            </AccordionItem>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4 text-center">Real stories from our community</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                quote={testimonial.quote}
                name={testimonial.name}
                age={testimonial.age}
                rating={testimonial.rating}
                imageSrc={testimonial.imageSrc}
              />
            ))}
          </div>
        </div>
      </main>
    </>
  )
}

