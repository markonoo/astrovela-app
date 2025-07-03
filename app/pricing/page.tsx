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
import { Button } from "@/components/ui/button"
import { trackMarketingEvent } from "@/utils/marketing-tracking"

// Force client-side rendering to prevent hydration mismatches
export const dynamic = 'force-dynamic'

// Add version debugging for cache-busting
const PRICING_PAGE_VERSION = "v2.1.1-features-fix"
const LAST_UPDATED = "2025-01-07-hotfix"

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
  app: boolean;
  paperback: boolean;
  ebook: boolean;
}

export default function PricingPage() {
  const { state } = useQuiz()
  const router = useRouter()
  const [isMounted, setIsMounted] = useState(false)
  const [hasQuizData, setHasQuizData] = useState(false)
  const [zodiacSign, setZodiacSign] = useState<string | null>(null)
  const [termsAccepted, setTermsAccepted] = useState(false)
  const [showTermsWarning, setShowTermsWarning] = useState(false)
  const [timeLeft, setTimeLeft] = useState({ minutes: 14, seconds: 28 })
  const [selectedOptions, setSelectedOptions] = useState<SelectedOptions>({
    app: false,
    paperback: false,
    ebook: true
  })
  const [isProcessingOrder, setIsProcessingOrder] = useState(false)
  const [checkoutError, setCheckoutError] = useState<string | null>(null)
  const [orderSuccess, setOrderSuccess] = useState(false)
  const [shopifyProducts, setShopifyProducts] = useState<ShopifyProduct[] | null>(null)
  const [productLoading, setProductLoading] = useState(false)
  const [productError, setProductError] = useState<string | null>(null)

  const optionsSectionRef = useRef<HTMLDivElement>(null)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  // Initialize page logging - runs only once
  useEffect(() => {
    console.log("🛒 Pricing Page Initialized:", {
      version: PRICING_PAGE_VERSION,
      lastUpdated: LAST_UPDATED,
      timestamp: new Date().toISOString(),
      userAgent: typeof window !== 'undefined' ? window.navigator.userAgent : 'Server',
      viewport: typeof window !== 'undefined' ? `${window.innerWidth}x${window.innerHeight}` : 'Unknown',
      cacheTimestamp: Date.now() // Add cache-busting timestamp
    })
    
    setIsMounted(true)
    
    // Debug quiz state - only once on mount
    console.log("🛒 Pricing Page - Quiz State:", {
      isQuizCompleted: isQuizCompleted(),
      firstName: state.firstName,
      lastName: state.lastName,
      email: state.email,
      hasNatalChart: !!state.natalChart,
      hasCustomChartUrl: !!state.customChartUrl,
      sunSign: state.sunSign,
      moonSign: state.moonSign,
      selectedTheme: state.selectedTheme,
      coverDesign: state.coverDesign
    })

    // DEBUG: Check if ProductOption features are properly defined
    console.log("🛒 Pricing Page - Features Debug:", {
      appFeatures: [
        "Unlimited compatibility reports",
        "New daily horoscopes & astrology content", 
        "FREE 1-month trial with ebook or paperback"
      ],
      paperbackFeatures: [
        "Uniquely created just for you",
        "FREE shipping",
        "FREE app & ebook included"
      ],
      ebookFeatures: [
        "Digital copy delivered to your email",
        "FREE app included",
        "FREE with the paperback"
      ],
      timestamp: new Date().toISOString()
    })
  }, []) // Empty dependency array - runs only once

  // Debug selected options only when they change
  useEffect(() => {
    console.log("🛒 Pricing Page - Product Selection:", {
      selectedOptions,
      totalProducts: Object.values(selectedOptions).filter(Boolean).length,
      selectedProductNames: Object.entries(selectedOptions)
        .filter(([, selected]) => selected)
        .map(([name]) => name)
    })
  }, [selectedOptions]) // Only when selectedOptions changes

  // Check if quiz is completed - only run once
  useEffect(() => {
    console.log("🛒 Pricing Page - Access Check:", {
      isQuizCompleted: isQuizCompleted(),
      redirecting: !isQuizCompleted() ? "YES - to /quiz" : "NO - access granted"
    })

    if (!isQuizCompleted()) {
      router.push("/quiz")
      return
    }
    
    // Set quiz data and zodiac sign
    const hasData = isQuizCompleted()
    setHasQuizData(hasData)

    if (hasData && state.birthDate.month && state.birthDate.day) {
      const sign = getZodiacSign(Number.parseInt(state.birthDate.month), Number.parseInt(state.birthDate.day))
      setZodiacSign(sign)
    }
  }, [router, state.birthDate.month, state.birthDate.day]) // Specific dependencies

  // Initialize countdown timer - only once
  useEffect(() => {
    console.log("🛒 Pricing Page - Timer Started:", {
      initialTime: `${timeLeft.minutes}:${timeLeft.seconds.toString().padStart(2, '0')}`,
      startTimestamp: new Date().toISOString()
    })

    timerRef.current = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { minutes: prev.minutes - 1, seconds: 59 }
        } else {
          // Timer expired - reset instead of logging every second
          return { minutes: 14, seconds: 59 }
        }
      })
    }, 1000)

    return () => {
      if (timerRef.current) {
        console.log("🛒 Pricing Page - Timer Cleanup:", {
          cleanupAt: new Date().toISOString()
        })
        clearInterval(timerRef.current)
        timerRef.current = null
      }
    }
  }, []) // Empty dependency array - timer should only be set once

  // Fetch Shopify products on mount - only once
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
  }, []) // Empty dependency array

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

  // Handle option selection with debugging
  const handleOptionSelect = (option: string) => {
    console.log("🛒 Pricing Page - Product Selection Changed:", {
      option,
      previousState: selectedOptions,
      action: selectedOptions[option as keyof typeof selectedOptions] ? "DESELECT" : "SELECT"
    })

    setSelectedOptions(prev => {
      const newState = {
        ...prev,
        [option]: !prev[option as keyof typeof prev]
      }
      
      console.log("🛒 Pricing Page - New Selection State:", {
        newState,
        totalSelected: Object.values(newState).filter(Boolean).length
      })
      
      return newState
    })
  }

  const handleBackClick = () => {
    router.back()
  }

  const scrollToOptions = () => {
    optionsSectionRef.current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    })
  }

  // Handle checkout with fixed analytics tracking
  const handleCheckout = async () => {
    const selectedProducts = Object.entries(selectedOptions)
      .filter(([, selected]) => selected)
      .map(([name]) => name)

    console.log("🛒 Pricing Page - Checkout Initiated:", {
      version: PRICING_PAGE_VERSION,
      selectedProducts,
      productCount: selectedProducts.length,
      userInfo: {
        firstName: state.firstName,
        lastName: state.lastName,
        email: state.email
      },
      timestamp: new Date().toISOString(),
      timeRemaining: `${timeLeft.minutes}:${timeLeft.seconds.toString().padStart(2, '0')}`
    })

    if (selectedProducts.length === 0) {
      console.log("⚠️ Pricing Page - Checkout Error:", {
        error: "No products selected",
        selectedOptions
      })
      alert("Please select at least one product.")
      return
    }

    try {
      // Track analytics with correct function name
      await trackMarketingEvent({
        event_name: 'checkout_initiated',
        value: totalPrice,
        currency: 'EUR',
        content_ids: selectedProducts,
        content_type: 'product',
        custom_data: {
          products: selectedProducts,
          product_count: selectedProducts.length,
          page_version: PRICING_PAGE_VERSION
        }
      })

      console.log("🛒 Pricing Page - Redirecting to Payment:", {
        destination: "/payment",
        selectedProducts,
        analyticsTracked: true
      })

      router.push("/payment")
    } catch (error) {
      console.error("❌ Pricing Page - Checkout Error:", {
        error: error instanceof Error ? error.message : error,
        selectedProducts,
        timestamp: new Date().toISOString()
      })
    }
  }

  // Don't render anything until mounted to prevent hydration issues
  if (!isMounted) {
    return null
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
            
            {/* Countdown Timer in Header */}
            <div className="flex items-center bg-red-500 text-white px-4 py-2 rounded-full text-sm font-medium">
              <Clock className="h-4 w-4 mr-2" />
              <span>50% discount reserved for {timeLeft.minutes}:{timeLeft.seconds.toString().padStart(2, '0')}</span>
              <button 
                onClick={scrollToOptions}
                className="ml-4 bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-xs font-bold hover:bg-yellow-300 transition-colors"
              >
                Order now
              </button>
            </div>
          </div>
        </header>

        <main className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            {/* Main Heading */}
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                Get the #1 personalized astrology<br />book & transform your life today
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-4">
                In-depth reading of your unique birth chart to help you<br />achieve self-growth and happy relationships
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
            {hasQuizData && state.customChartUrl && (
              <div className="flex justify-center mb-12">
                <div className="w-full max-w-md">
                  <BookCoverPreview
                    userInfo={{
                      firstName: state.firstName || "Your Name",
                      lastName: state.lastName || "",
                      placeOfBirth: state.birthPlace || "Your Birth Place", 
                      dateOfBirth: state.birthDate?.year && state.birthDate?.month && state.birthDate?.day
                        ? `${state.birthDate.year}-${state.birthDate.month.padStart(2, '0')}-${state.birthDate.day.padStart(2, '0')}`
                        : ""
                    }}
                    themeColor={THEME_COLORS[state.coverColorScheme] || THEME_COLORS.purple}
                    selectedIcon="custom-natal-chart"
                    customChartUrl={state.customChartUrl}
                    isLoading={false}
                    sunSign={state.sunSign || zodiacSign}
                    moonSign={state.moonSign}
                    formattedDate={state.birthDate?.year && state.birthDate?.month && state.birthDate?.day
                      ? format(
                          new Date(
                            parseInt(state.birthDate.year),
                            parseInt(state.birthDate.month) - 1,
                            parseInt(state.birthDate.day)
                          ),
                          "dd MMMM yyyy"
                        )
                      : ""
                    }
                  />
                </div>
              </div>
            )}

            {/* Choose Your Best Option Section */}
            <div className="text-center mb-8" ref={optionsSectionRef}>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Choose your best option</h2>
              
              {/* Countdown Banner */}
              <div className="bg-red-500 text-white py-3 px-6 rounded-lg mb-6 flex items-center justify-center">
                <Clock className="h-5 w-5 mr-2" />
                <span className="font-medium">This offer ends in {timeLeft.minutes}:{timeLeft.seconds.toString().padStart(2, '0')}</span>
              </div>
              
              <div className="max-w-2xl mx-auto space-y-4">
                {/* App Subscription Option */}
                <ProductOption
                  type="app"
                  title="astrovela app"
                  features={[
                    "Unlimited compatibility reports",
                    "New daily horoscopes & astrology content",
                    "FREE 1-month trial with ebook or paperback"
                  ]}
                  price="FREE"
                  originalPrice="€30.99"
                  imageSrc="/placeholder.svg"
                  isSelected={selectedOptions.app}
                  onSelect={() => handleOptionSelect("app")}
                  saleTag="INCLUDED"
                />

                {/* Paperback Option */}
                <ProductOption
                  type="paperback"
                  title="astrovela paperback"
                  features={[
                    "Uniquely created just for you",
                    "FREE shipping",
                    "FREE app & ebook included"
                  ]}
                  price="€55.99"
                  originalPrice="€169.97"
                  imageSrc="/placeholder.svg"
                  isSelected={selectedOptions.paperback}
                  onSelect={() => handleOptionSelect("paperback")}
                  saleTag="SALE 65% OFF"
                />

                {/* Ebook Option */}
                <ProductOption
                  type="ebook"
                  title="astrovela ebook"
                  features={[
                    "Digital copy delivered to your email",
                    "FREE app included",
                    "FREE with the paperback"
                  ]}
                  price="FREE"
                  originalPrice="€49.99"
                  imageSrc="/placeholder.svg"
                  isSelected={selectedOptions.ebook}
                  onSelect={() => handleOptionSelect("ebook")}
                  saleTag="INCLUDED"
                />
              </div>
            </div>

            {/* Order Summary */}
            <div className="max-w-md mx-auto mb-8 p-6 bg-white rounded-lg border">
              <div className="flex justify-between items-center text-lg font-bold mb-4">
                <span>Total:</span>
                <span>€{totalPrice.toFixed(2)}</span>
              </div>

              {/* Terms and Conditions */}
              <div className="mb-4">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={termsAccepted}
                    onChange={(e) => {
                      setTermsAccepted(e.target.checked)
                      if (e.target.checked) setShowTermsWarning(false)
                    }}
                    className="mt-1 h-4 w-4 text-yellow-400 border-gray-300 rounded focus:ring-yellow-400"
                  />
                  <span className="text-sm text-gray-600">
                    I accept the{" "}
                    <button className="text-yellow-600 hover:underline">
                      Terms & Conditions
                    </button>{" "}
                    and{" "}
                    <button className="text-yellow-600 hover:underline">
                      Privacy Policy
                    </button>
                  </span>
                </label>
                
                {showTermsWarning && (
                  <p className="text-red-500 text-sm mt-2">
                    Please accept the terms and conditions to continue.
                  </p>
                )}
              </div>

              {/* Checkout Error */}
              {checkoutError && (
                <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-700 text-sm">{checkoutError}</p>
                </div>
              )}

              {/* Order Button */}
              <button
                onClick={handleCheckout}
                disabled={isProcessingOrder}
                className="w-full bg-yellow-400 text-gray-900 py-4 rounded-full font-bold text-lg hover:bg-yellow-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isProcessingOrder ? "Processing..." : "Order Now"}
              </button>

              <div className="flex justify-center mt-4">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/only-payment-icons-Tlz7XpXRAYL3RvgV4LWPF2B2J7ck0L.webp"
                  alt="Payment methods"
                  className="h-8 w-auto"
                />
              </div>

              {selectedOptions.app && (
                <p className="text-xs text-gray-500 text-center mt-4">
                  By clicking "Order Now," I agree that if I do not cancel the app subscription before the end of the free 1 month trial, astrovela will automatically charge my payment method the regular price of €30.99 every 1 month thereafter until I cancel by contacting us at help@astrovela.com
                </p>
              )}
            </div>

            {/* "Easily improve relationships" section - simplified */}
            <section className="bg-gray-100 rounded-lg p-8 mb-8">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold mb-4">Easily improve relationships, understand yourself better, and reach your personal goals 💛</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Left side - What's included */}
                <div>
                  <h3 className="text-xl font-bold mb-4">What's included?</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <span className="text-gray-900 font-bold text-sm">1</span>
                      </div>
                      <div>
                        <h4 className="font-medium">Personalized birth chart analysis</h4>
                        <p className="text-sm text-gray-600">Discover the secrets of your unique astrological blueprint to understand your personality, strengths, and life path.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <span className="text-gray-900 font-bold text-sm">2</span>
                      </div>
                      <div>
                        <h4 className="font-medium">Relationship compatibility insights</h4>
                        <p className="text-sm text-gray-600">Learn how to improve your relationships and find your perfect match using astrological wisdom.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <span className="text-gray-900 font-bold text-sm">3</span>
                      </div>
                      <div>
                        <h4 className="font-medium">Personal growth guidance</h4>
                        <p className="text-sm text-gray-600">Unlock your potential and overcome challenges with personalized astrological advice.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right side - Additional content list */}
                <div>
                  <h3 className="text-xl font-bold mb-4">Additional content:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="text-yellow-400 mr-2">★</span>
                      <span>Divination & Astrology</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-yellow-400 mr-2">★</span>
                      <span>Beginner's Guide to Palmistry</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-yellow-400 mr-2">★</span>
                      <span>Tailored Tarot Card Readings</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-yellow-400 mr-2">★</span>
                      <span>Crystals in Astrology</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-yellow-400 mr-2">★</span>
                      <span>Intro to Numerology</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-yellow-400 mr-2">★</span>
                      <span>History of Astrology & Modern Astrology</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-yellow-400 mr-2">★</span>
                      <span>And more...</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="text-center mt-8">
                <button
                  onClick={handleCheckout}
                  className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-500 transition-colors"
                >
                  Order now
                </button>
              </div>
            </section>

            {/* FAQ Section - simplified */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h2>
              <div className="max-w-3xl mx-auto space-y-4">
                <AccordionItem
                  title="How accurate is my personalized astrology book?"
                  content="Your book is created using your exact birth date, time, and location to generate a precise natal chart. This ensures maximum accuracy in your astrological reading."
                />
                <AccordionItem
                  title="When will I receive my book?"
                  content="Digital books are delivered instantly to your email. Physical books are printed and shipped within 3-5 business days, with free worldwide shipping."
                />
                <AccordionItem
                  title="What if I don't know my exact birth time?"
                  content="While knowing your exact birth time provides the most accurate reading, we can still create a meaningful chart with just your birth date and location."
                />
                <AccordionItem
                  title="Can I cancel my app subscription?"
                  content="Yes, you can cancel your app subscription at any time by contacting us at help@astrovela.com before your next billing cycle."
                />
              </div>
            </section>
          </div>
        </main>
      </div>
    </ErrorBoundary>
  )
}

