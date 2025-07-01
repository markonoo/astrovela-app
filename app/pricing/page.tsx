"use client"

import { useQuiz } from "@/contexts/quiz-context"
import { useState, useEffect, useRef, useMemo } from "react"
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
import AstrovelaIcon from "@/components/icons/AstrovelaIcon"
import { createShopifyCheckout, getShopifyProducts } from "@/services/shopify-service"
import { ShopifyError } from "@/utils/shopify-error-handler"
import { format } from "date-fns"
import { ErrorBoundary } from "@/components/ErrorBoundary"

// Type definition for ShopifyProduct
interface ShopifyProduct {
  id: string;
  title: string;
  handle: string;
  description: string;
  priceRange: {
    minVariantPrice: {
      amount: string;
      currencyCode: string;
    };
    maxVariantPrice: {
      amount: string;
      currencyCode: string;
    };
  };
  variants: Array<{
    id: string;
    title: string;
    price: string;
    compareAtPrice: string | null;
    availableForSale: boolean;
  }>;
  images: Array<{
    id: string;
    url: string;
    altText: string | null;
  }>;
}

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
  const [shopifyProducts, setShopifyProducts] = useState<ShopifyProduct[] | null>(null)
  const [productLoading, setProductLoading] = useState(false)
  const [productError, setProductError] = useState<string | null>(null)

  const optionsSectionRef = useRef<HTMLDivElement>(null)

  // Fetch Shopify products on mount
  useEffect(() => {
    setProductLoading(true)
    getShopifyProducts()
      .then(products => {
        setShopifyProducts(products)
        setProductLoading(false)
      })
      .catch(error => {
        setProductError(error.message || "Failed to load product data.")
        setProductLoading(false)
      })
  }, [])

  // Helper to get product price by handle
  const getProductPrice = (handle: string) => {
    if (!shopifyProducts) return null
    const product = shopifyProducts.find(p => p.handle === handle)
    if (!product) return null
    return product.priceRange.minVariantPrice.amount
  }

  // Calculate total price based on selected options
  const calculateTotalPrice = () => {
    // Only ebook
    if (selectedOptions.ebook && !selectedOptions.app && !selectedOptions.paperback) {
      return 49.99;
    }
    // Only app
    if (selectedOptions.app && !selectedOptions.ebook && !selectedOptions.paperback) {
      return 30.99;
    }
    // Paperback selected (with or without others)
    if (selectedOptions.paperback) {
      return 55.99;
    }
    // App + ebook (no paperback)
    if (selectedOptions.app && selectedOptions.ebook && !selectedOptions.paperback) {
      return 49.99;
    }
    return 0;
  }

  const totalPrice = calculateTotalPrice()

  // Helper for price display logic
  const isOnlyEbook = selectedOptions.ebook && !selectedOptions.app && !selectedOptions.paperback;
  const isOnlyApp = selectedOptions.app && !selectedOptions.ebook && !selectedOptions.paperback;
  const isPaperback = selectedOptions.paperback;
  const isAppAndEbook = selectedOptions.app && selectedOptions.ebook && !selectedOptions.paperback;

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

  // Extract sun and moon signs - using useMemo to prevent infinite re-renders
  const { extractedSunSign, extractedMoonSign } = useMemo(() => {
    console.log("🔍 PricingPage - state.sunSign:", state.sunSign, "state.moonSign:", state.moonSign)
    
    // First, try to get from stored state (API interpretation data)
    if (state.sunSign && state.moonSign) {
      console.log("✅ PricingPage - Using stored signs:", state.sunSign, state.moonSign)
      return {
        extractedSunSign: state.sunSign,
        extractedMoonSign: state.moonSign
      }
    }

    // Second, try to get from natal chart data
    if (state.natalChart?.planets) {
      const sunPlanet = state.natalChart.planets.find((p) => p.name === "sun")
      const moonPlanet = state.natalChart.planets.find((p) => p.name === "moon")
      
      if (sunPlanet && moonPlanet) {
        console.log("⚡ PricingPage - Using natal chart signs:", sunPlanet.sign, moonPlanet.sign)
        return {
          extractedSunSign: sunPlanet.sign,
          extractedMoonSign: moonPlanet.sign
        }
      }
    }

    // Third, if no natal chart data, calculate sun sign from birth date and use fallback moon sign
    if (state.birthDate?.month && state.birthDate?.day) {
      const calculatedSunSign = getZodiacSign(
        Number.parseInt(state.birthDate.month), 
        Number.parseInt(state.birthDate.day)
      )
      
      // Use a contrasting moon sign as fallback
      const zodiacSigns = ["aries", "taurus", "gemini", "cancer", "leo", "virgo", 
                          "libra", "scorpio", "sagittarius", "capricorn", "aquarius", "pisces"]
      const sunIndex = zodiacSigns.indexOf(calculatedSunSign)
      const moonIndex = sunIndex !== -1 ? (sunIndex + 6) % 12 : 0
      
      console.log("🔄 PricingPage - Using calculated fallback signs:", calculatedSunSign, zodiacSigns[moonIndex])
      return {
        extractedSunSign: calculatedSunSign,
        extractedMoonSign: zodiacSigns[moonIndex]
      }
    }

    // Ultimate fallback
    console.log("❌ PricingPage - Using ultimate fallback")
    return {
      extractedSunSign: null,
      extractedMoonSign: null
    }
  }, [state.sunSign, state.moonSign, state.natalChart, state.birthDate])

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

        // Create Shopify checkout
        const checkoutUrl = await createShopifyCheckout({
          selectedOptions,
          quizState: state,
        })

        // Redirect to Shopify checkout
        window.location.href = checkoutUrl
      } catch (error) {
        console.error("Checkout error:", error)
        
        // Handle specific error types
        if (error instanceof ShopifyError) {
          switch (error.code) {
            case 'VALIDATION_ERROR':
              setCheckoutError(error.message)
              break
            case 'NETWORK_ERROR':
              setCheckoutError('Network error. Please check your internet connection and try again.')
              break
            case 'PRODUCT_NOT_FOUND':
            case 'VARIANT_NOT_FOUND':
              setCheckoutError('Product configuration error. Please try again later.')
              break
            case 'CHECKOUT_CREATION_FAILED':
              setCheckoutError('Unable to create checkout. Please try again.')
              break
            default:
              setCheckoutError('An unexpected error occurred. Please try again.')
          }
        } else {
          setCheckoutError('An unexpected error occurred. Please try again.')
        }
        
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
        "I got astrovela book for my birthday, and it's been an incredible journey of self-discovery since. I use it daily with my friends to really understand what's happening in our lives.",
      name: "Sarah J.",
      age: 29,
      rating: 5,
      imageSrc: "/placeholder.svg?height=200&width=300",
    },
  ]

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-gray-50">
        {/* Header Section */}
        <header className="bg-white border-b border-gray-200">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center">
              <button
                onClick={handleBackClick}
                className="mr-4 p-2 text-gray-600 hover:text-gray-900"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <div className="flex items-center">
                <span className="text-[#28293d] font-medium">astrovela</span>
                <AstrovelaIcon width={20} height={20} className="ml-1" />
              </div>
            </div>
          </div>
        </header>

        <main className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            {/* Countdown and Discount Header */}
            <div className="text-center mb-6">
              <div className="text-sm text-gray-600 mb-2">
                50% discount reserved for
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-4">
                {formatCountdown(countdown)}
              </div>
              <button 
                onClick={scrollToOptions}
                className="bg-yellow-300 text-gray-900 px-6 py-2 rounded-full font-medium hover:bg-yellow-400 transition-colors"
              >
                Order now
              </button>
            </div>

            {/* Main Heading */}
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Get the #1 personalized astrology<br />
                book & transform your life today
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-4">
                In-depth reading of your unique birth chart to help you achieve self-growth and happy relationships
              </p>
              <div className="flex items-center justify-center gap-4 text-sm text-gray-600">
                <span>Over 2,065,847 books ordered!</span>
                <div className="flex items-center gap-1">
                  <StarRating rating={4.8} />
                  <span>4.8/5</span>
                </div>
              </div>
            </div>

            {/* Book Cover Preview */}
            <div className="flex justify-center mb-12">
              <div className="w-80 h-96">
                <BookCoverPreview
                  userInfo={{
                    firstName: state.firstName || "Your Name",
                    lastName: state.lastName || "",
                    dateOfBirth: state.birthDate.day && state.birthDate.month && state.birthDate.year
                      ? format(new Date(Number(state.birthDate.year), Number(state.birthDate.month) - 1, Number(state.birthDate.day)), "dd.MM.yyyy")
                      : "01.07-14:10",
                    placeOfBirth: state.birthPlace || "HAMBURG, GERMANY"
                  }}
                  themeColor={THEME_COLORS[state.coverColorScheme] || THEME_COLORS.cream}
                  selectedIcon="natal-chart"
                  sunSign={extractedSunSign || "Virgo"}
                  moonSign={extractedMoonSign || "Pisces"}
                  formattedDate={state.birthDate.day && state.birthDate.month && state.birthDate.year
                    ? format(new Date(Number(state.birthDate.year), Number(state.birthDate.month) - 1, Number(state.birthDate.day)), "dd.MM.yyyy")
                    : "01.07-14:10"}
                />
              </div>
            </div>

            {/* Product Selection */}
            <div className="text-center mb-8" ref={optionsSectionRef}>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Choose your best option</h2>
              
              {/* Countdown Timer */}
              <div className="max-w-md mx-auto mb-6 bg-red-50 border border-red-200 rounded-lg p-3 text-center">
                <div className="flex items-center justify-center gap-2 text-red-700 mb-1">
                  <Clock className="h-4 w-4" />
                  <span className="text-sm font-medium">This offer ends in {formatCountdown(countdown)}</span>
                </div>
              </div>

              {/* Product Cards */}
              <div className="space-y-4 max-w-2xl mx-auto">
                {/* App Option */}
                <div className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
                  selectedOptions.app ? 'border-yellow-400 bg-yellow-50' : 'border-gray-200'
                }`} onClick={() => handleOptionSelect("app")}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-6 h-6 rounded border-2 flex items-center justify-center ${
                        selectedOptions.app ? 'border-yellow-400 bg-yellow-400' : 'border-gray-300'
                      }`}>
                        {selectedOptions.app && (
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        )}
                      </div>
                      <div className="text-left">
                        <h3 className="font-semibold text-gray-900">astrovela app</h3>
                        <ul className="text-sm text-gray-600 mt-1">
                          <li>• Unlimited compatibility reports</li>
                          <li>• New daily horoscopes & astrology content</li>
                          <li>• FREE 1-month trial with ebook or paperback</li>
                        </ul>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-green-600">
                        {isPaperback || (selectedOptions.ebook && selectedOptions.app && !selectedOptions.paperback) ? 'FREE' : '€30.99'}
                      </div>
                      {(isPaperback || (selectedOptions.ebook && selectedOptions.app && !selectedOptions.paperback)) && (
                        <div className="text-sm text-gray-500 line-through">€30.99</div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Paperback Option */}
                <div className={`border-2 rounded-lg p-4 cursor-pointer transition-all relative ${
                  selectedOptions.paperback ? 'border-yellow-400 bg-yellow-50' : 'border-gray-200'
                }`} onClick={() => handleOptionSelect("paperback")}>
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <span className="bg-yellow-400 text-gray-900 text-xs font-bold px-3 py-1 rounded-full">
                      SALE 65% OFF
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-6 h-6 rounded border-2 flex items-center justify-center ${
                        selectedOptions.paperback ? 'border-yellow-400 bg-yellow-400' : 'border-gray-300'
                      }`}>
                        {selectedOptions.paperback && (
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        )}
                      </div>
                      <div className="text-left">
                        <h3 className="font-semibold text-gray-900">astrovela paperback</h3>
                        <ul className="text-sm text-gray-600 mt-1">
                          <li>• Uniquely created just for you</li>
                          <li>• FREE shipping</li>
                          <li>• FREE app & ebook included</li>
                        </ul>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-green-600">€55.99</div>
                      <div className="text-sm text-gray-500 line-through">€159.97</div>
                    </div>
                  </div>
                </div>

                {/* Ebook Option */}
                <div className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
                  selectedOptions.ebook ? 'border-yellow-400 bg-yellow-50' : 'border-gray-200'
                }`} onClick={() => handleOptionSelect("ebook")}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-6 h-6 rounded border-2 flex items-center justify-center ${
                        selectedOptions.ebook ? 'border-yellow-400 bg-yellow-400' : 'border-gray-300'
                      }`}>
                        {selectedOptions.ebook && (
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        )}
                      </div>
                      <div className="text-left">
                        <h3 className="font-semibold text-gray-900">astrovela ebook</h3>
                        <ul className="text-sm text-gray-600 mt-1">
                          <li>• Digital copy delivered to your email</li>
                          <li>• FREE app included</li>
                          <li>• FREE with the paperback</li>
                        </ul>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-green-600">
                        {isPaperback || (selectedOptions.ebook && selectedOptions.app && !selectedOptions.paperback) ? 'FREE' : '€49.99'}
                      </div>
                      {(isPaperback || (selectedOptions.ebook && selectedOptions.app && !selectedOptions.paperback)) && (
                        <div className="text-sm text-gray-500 line-through">€49.99</div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Terms and Conditions Checkbox */}
            <div className="max-w-md mx-auto mb-8">
              <div className="flex items-start gap-3 p-4 bg-white rounded-lg border">
                <div className="relative">
                  <input
                    type="checkbox"
                    id="terms-checkbox"
                    checked={termsAccepted}
                    onChange={toggleTerms}
                    className={`h-5 w-5 text-yellow-400 border-2 rounded focus:ring-yellow-300 ${
                      showTermsWarning ? 'border-red-500 animate-pulse' : 'border-gray-300'
                    }`}
                  />
                </div>
                <label htmlFor="terms-checkbox" className="text-sm text-gray-700 cursor-pointer">
                  I agree to the{" "}
                  <a
                    href="/terms"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-yellow-600 hover:text-yellow-700 underline"
                  >
                    Terms & Conditions
                  </a>{" "}
                  and{" "}
                  <a
                    href="/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-yellow-600 hover:text-yellow-700 underline"
                  >
                    Privacy Policy
                  </a>
                </label>
              </div>
              {showTermsWarning && (
                <p className="text-red-500 text-sm mt-2 text-center animate-shake">
                  Please accept the Terms & Conditions and Privacy Policy to continue
                </p>
              )}
            </div>

            {/* Order Button */}
            <div className="text-center mb-12">
              <button
                onClick={handleOrderClick}
                disabled={isProcessingOrder}
                className={`px-8 py-3 rounded-full font-medium transition-colors ${
                  isProcessingOrder
                    ? 'bg-gray-400 text-gray-600 cursor-not-allowed'
                    : 'bg-yellow-300 text-gray-900 hover:bg-yellow-400'
                }`}
              >
                {isProcessingOrder ? 'Processing...' : 'Order Now'}
              </button>
              {checkoutError && (
                <p className="text-red-500 text-sm mt-2">{checkoutError}</p>
              )}
            </div>

            {/* Payment Methods */}
            <div className="max-w-md mx-auto mb-12">
              <PaymentMethods />
            </div>

            {/* Testimonials */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
                What Our Customers Say
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {testimonials.map((testimonial, index) => (
                  <TestimonialCard key={index} {...testimonial} />
                ))}
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
                Frequently Asked Questions
              </h2>
              <div className="max-w-3xl mx-auto space-y-4">
                <AccordionItem title="What makes AstroVela different from other astrology apps?">
                  AstroVela provides deeply personalized insights based on your complete birth chart, not just your sun sign. Our advanced algorithms analyze over 50 astrological factors to create a truly unique experience for you.
                </AccordionItem>
                <AccordionItem title="How accurate are the predictions?">
                  Our predictions are based on traditional astrological principles combined with modern data analysis. While astrology is not scientifically proven, thousands of users report finding value and accuracy in their personalized readings.
                </AccordionItem>
                <AccordionItem title="Can I cancel my subscription anytime?">
                  Yes, you can cancel your app subscription at any time through your account settings. Your access will continue until the end of your current billing period.
                </AccordionItem>
                <AccordionItem title="What if I'm not satisfied with my book?">
                  We offer a 30-day money-back guarantee. If you're not completely satisfied with your personalized astrology book, contact our support team for a full refund.
                </AccordionItem>
              </div>
            </div>
          </div>
        </main>
      </div>
    </ErrorBoundary>
  )
}

