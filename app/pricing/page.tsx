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

// Force client-side rendering to prevent hydration mismatches
export const dynamic = 'force-dynamic'

export default function PricingPage() {
  const { state } = useQuiz()
  const router = useRouter()
  const [isMounted, setIsMounted] = useState(false)
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

  const calculateTotalPrice = () => {
    let total = 0

    if (selectedOptions.app && !selectedOptions.paperback && !selectedOptions.ebook) {
      // Only app subscription selected
      total += parseFloat(getProductPrice("app-subscription") || "30.99")
    } else if (selectedOptions.ebook && !selectedOptions.paperback && !selectedOptions.app) {
      // Only ebook selected
      total += parseFloat(getProductPrice("ebook") || "49.99")
    } else if (selectedOptions.ebook && selectedOptions.app && !selectedOptions.paperback) {
      // Ebook + app bundle (special pricing)
      total += parseFloat(getProductPrice("ebook") || "49.99")
      // App is free with ebook
    } else if (selectedOptions.paperback) {
      // Paperback selected (app and ebook are free with paperback)
      total += parseFloat(getProductPrice("paperback-book") || "55.99")
    }

    return total
  }

  const totalPrice = calculateTotalPrice()

  // Helper variables for easier conditional checks
  const isOnlyApp = selectedOptions.app && !selectedOptions.paperback && !selectedOptions.ebook
  const isOnlyEbook = selectedOptions.ebook && !selectedOptions.paperback && !selectedOptions.app
  const isPaperback = selectedOptions.paperback
  const isAppAndEbook = selectedOptions.app && selectedOptions.ebook && !selectedOptions.paperback

  // Pricing display logic helpers
  const getEbookPrice = () => {
    if (isPaperback) return "FREE" // Free with paperback
    if (isOnlyEbook) return "€49.99" // Standalone ebook price
    if (isAppAndEbook) return "€49.99" // Bundle price (app is free)
    return "€49.99" // Default price
  }

  const getAppPrice = () => {
    if (isPaperback) return "FREE" // Free with paperback
    if (isAppAndEbook) return "FREE" // Free with ebook
    if (isOnlyApp) return "€30.99" // Standalone app price
    return "€30.99" // Default price
  }

  const handleOptionSelect = (option: keyof SelectedOptions) => {
    setSelectedOptions(prev => ({
      ...prev,
      [option]: !prev[option]
    }))
  }

  // Handle client-side mounting to prevent hydration mismatches
  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Check for quiz completion on mount and set quiz data
  useEffect(() => {
    const checkQuizStatus = async () => {
      try {
        const completed = await isQuizCompleted()
        setHasQuizData(completed)
        
        if (completed && state.birthDate?.day && state.birthDate?.month && state.birthDate?.year) {
          const calculatedZodiacSign = getZodiacSign(
            Number(state.birthDate.month),
            Number(state.birthDate.day)
          )
          setZodiacSign(calculatedZodiacSign)
        }
      } catch (error) {
        console.error("Error checking quiz status:", error)
        setHasQuizData(false)
      }
    }

    if (isMounted) {
      checkQuizStatus()
    }
  }, [isMounted, state.birthDate])

  // Countdown timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { minutes: prev.minutes - 1, seconds: 59 }
        } else {
          // Reset to original time when countdown reaches zero
          return { minutes: 14, seconds: 54 }
        }
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  // Extract zodiac signs for display, using calculated or API values
  const extractedSunSign = useMemo(() => {
    // First try the API fetched sun sign
    if (state.sunSign) return state.sunSign
    
    // If no API data, use calculated zodiac sign
    if (zodiacSign) return zodiacSign
    
    // Fallback calculation if neither is available
    if (state.birthDate?.day && state.birthDate?.month) {
      return getZodiacSign(Number(state.birthDate.month), Number(state.birthDate.day))
    }
    
    return "Virgo"
  }, [state.sunSign, zodiacSign, state.birthDate])

  const extractedMoonSign = useMemo(() => {
    // First try the API fetched moon sign
    if (state.moonSign) return state.moonSign
    
    // If no API data, use a calculated fallback (basic calculation based on birth date)
    if (state.birthDate?.day && state.birthDate?.month) {
      // This is a simplified fallback - normally moon sign requires birth time and location
      const month = Number(state.birthDate.month)
      const day = Number(state.birthDate.day)
      
      // Simple fallback algorithm (not astronomically accurate, just for display)
      const totalDays = (month - 1) * 30 + day
      const moonCycle = totalDays % 12
      const moonSigns = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 
                       'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces']
      return moonSigns[moonCycle].toLowerCase()
    }
    
    return "pisces"
  }, [state.moonSign, state.birthDate])

  const handleBackClick = () => {
    router.back()
  }

  const scrollToOptions = () => {
    optionsSectionRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const toggleTerms = () => {
    setTermsAccepted(!termsAccepted)
    if (showTermsWarning) {
      setShowTermsWarning(false)
    }
  }

  const handleOrderClick = async () => {
    if (!termsAccepted) {
      setShowTermsWarning(true)
      return
    }

    // Clear any previous errors
    setCheckoutError(null)
    setIsProcessingOrder(true)

    try {
      if (!selectedOptions.app && !selectedOptions.paperback && !selectedOptions.ebook) {
        throw new Error("Please select at least one product option.")
      }

      console.log("Creating checkout with selected options:", selectedOptions)

      const checkoutUrl = await createShopifyCheckout({
        selectedOptions,
        quizState: state
      })
      
      if (checkoutUrl) {
        // Redirect to Shopify checkout
        window.location.href = checkoutUrl
      } else {
        throw new Error("Failed to create checkout URL. Please try again.")
      }
    } catch (error) {
      console.error("Checkout error:", error)
      
      if (error instanceof ShopifyError) {
        setCheckoutError(`Checkout Error: ${error.message}`)
      } else {
        setCheckoutError(error instanceof Error ? error.message : "An unexpected error occurred. Please try again.")
      }
    } finally {
      setIsProcessingOrder(false)
    }
  }

  const formatCountdown = (time: { minutes: number; seconds: number }) => {
    return `${time.minutes.toString().padStart(2, "0")}:${time.seconds.toString().padStart(2, "0")}`
  }

  const testimonials = [
    {
      quote:
        "Total game-changer. It gave me the understanding I needed about my crush I had for past 5 months. I finally got the hope back that there's a chance. We'll see how it goes.",
      name: "Rachel W.",
      age: 31,
      rating: 5,
      imageSrc: "/placeholder.svg",
    },
    {
      quote:
        "I got astrovela book for my birthday, and it's been an incredible journey of self-discovery since. I use it daily with my friends to really understand what's happening in our lives.",
      name: "Sarah J.",
      age: 29,
      rating: 5,
      imageSrc: "/placeholder.svg",
    },
  ]

  // Prevent hydration mismatch by ensuring client-side consistency
  if (!isMounted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-yellow-400 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    )
  }

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
            {/* Main Heading */}
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Get your personalized astrology book
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-4">
                Choose your perfect bundle and start your journey of self-discovery
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
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Choose your package</h2>
              
              <div className="max-w-2xl mx-auto space-y-4">
                {/* Paperback Option */}
                <ProductOption
                  type="paperback"
                  title="AstroVela Paperback Book"
                  features={[
                    "Uniquely created just for you",
                    "FREE shipping worldwide",
                    "FREE app & ebook included",
                    "High-quality printing"
                  ]}
                  price={isPaperback ? "€55.99" : "€55.99"}
                  originalPrice="€159.97"
                  imageSrc="/placeholder.svg"
                  isSelected={selectedOptions.paperback}
                  onSelect={() => handleOptionSelect("paperback")}
                  saleTag="SALE 65% OFF"
                />

                {/* Ebook Option */}
                <ProductOption
                  type="ebook"
                  title="AstroVela eBook"
                  features={[
                    "Digital copy delivered to your email",
                    "FREE app included",
                    "FREE with the paperback",
                    "Instant download"
                  ]}
                  price={getEbookPrice()}
                  imageSrc="/placeholder.svg"
                  isSelected={selectedOptions.ebook}
                  onSelect={() => handleOptionSelect("ebook")}
                />

                {/* App Option */}
                <ProductOption
                  type="app"
                  title="AstroVela App Subscription"
                  features={[
                    "Unlimited compatibility reports",
                    "Daily horoscopes & astrology content",
                    "FREE 1-month trial with ebook or paperback",
                    "Regular content updates"
                  ]}
                  price={getAppPrice()}
                  priceUnit="/month"
                  imageSrc="/placeholder.svg"
                  isSelected={selectedOptions.app}
                  onSelect={() => handleOptionSelect("app")}
                />
              </div>

              {/* Order Summary */}
              <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg border">
                <div className="flex justify-between items-center text-lg font-bold mb-4">
                  <span>Total:</span>
                  <span>€{totalPrice.toFixed(2)}</span>
                </div>
                
                {/* Terms and Conditions */}
                <div className="flex items-start gap-3 mb-4">
                  <input
                    type="checkbox"
                    id="terms-checkbox"
                    checked={termsAccepted}
                    onChange={toggleTerms}
                    className={`mt-1 h-4 w-4 text-yellow-400 border-2 rounded focus:ring-yellow-300 ${
                      showTermsWarning ? 'border-red-500 animate-pulse' : 'border-gray-300'
                    }`}
                  />
                  <label htmlFor="terms-checkbox" className="text-sm text-gray-600">
                    I accept the{" "}
                    <a href="/terms" className="text-yellow-600 hover:underline">
                      Terms & Conditions
                    </a>{" "}
                    and{" "}
                    <a href="/privacy" className="text-yellow-600 hover:underline">
                      Privacy Policy
                    </a>
                  </label>
                </div>

                {showTermsWarning && (
                  <div className="text-red-600 text-sm mb-4">
                    Please accept the terms and conditions to continue.
                  </div>
                )}

                {checkoutError && (
                  <div className="text-red-600 text-sm mb-4 p-3 bg-red-50 rounded">
                    {checkoutError}
                  </div>
                )}

                <button
                  onClick={handleOrderClick}
                  disabled={isProcessingOrder}
                  className="w-full bg-yellow-400 text-gray-900 py-3 px-6 rounded-lg font-medium hover:bg-yellow-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  {isProcessingOrder ? "Processing..." : "Order Now"}
                </button>

                <PaymentMethods />
              </div>
            </div>

            {/* Testimonials */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">What our customers say</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {testimonials.map((testimonial, index) => (
                  <TestimonialCard key={index} {...testimonial} />
                ))}
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">Frequently Asked Questions</h2>
              <div className="max-w-2xl mx-auto space-y-4">
                <AccordionItem
                  title="How accurate is my personalized astrology book?"
                >
                  Your book is created using your exact birth data (date, time, and location) to generate a highly accurate natal chart. This ensures the insights are specifically tailored to your unique astrological profile.
                </AccordionItem>
                <AccordionItem
                  title="What's included in the app subscription?"
                >
                  The app includes unlimited compatibility reports, daily personalized horoscopes, monthly forecasts, and regular new astrology content. The first month is free when you purchase the ebook or paperback.
                </AccordionItem>
                <AccordionItem
                  title="How long does shipping take?"
                >
                  Free shipping typically takes 7-14 business days worldwide. You'll receive tracking information once your order ships.
                </AccordionItem>
                <AccordionItem
                  title="Can I get a refund if I'm not satisfied?"
                >
                  Yes, we offer a 30-day money-back guarantee. If you're not completely satisfied with your purchase, contact our support team for a full refund.
                </AccordionItem>
              </div>
            </div>
          </div>
        </main>
      </div>
    </ErrorBoundary>
  )
}

