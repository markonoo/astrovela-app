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
import { BookCoverPreview } from "@/components/book-cover-preview"
import { THEME_COLORS } from "@/components/book-cover-designer"
import AstrovelaIcon from "@/components/icons/AstrovelaIcon"
import { createShopifyCheckout, getShopifyProducts } from "@/services/shopify-service"
import { ShopifyError } from "@/utils/shopify-error-handler"
import { format } from "date-fns"
import { ErrorBoundary } from "@/components/ErrorBoundary"
import { Button } from "@/components/ui/button"
import { trackMarketingEvent } from "@/utils/marketing-tracking"
import { logger } from "@/utils/logger"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"

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
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  // Initialize page logging - runs only once
  useEffect(() => {
    logger.pricing("Pricing Page Initialized", {
      version: PRICING_PAGE_VERSION,
      lastUpdated: LAST_UPDATED,
      timestamp: new Date().toISOString(),
      userAgent: typeof window !== 'undefined' ? window.navigator.userAgent : 'Server',
      viewport: typeof window !== 'undefined' ? `${window.innerWidth}x${window.innerHeight}` : 'Unknown',
      cacheTimestamp: Date.now() // Add cache-busting timestamp
    })
    
    setIsMounted(true)
    
    // Debug quiz state - only once on mount
  logger.pricing("Pricing Page - Quiz State", {
    isQuizCompleted: isQuizCompleted(),
    firstName: state.firstName,
    lastName: state.lastName,
    email: state.email,
    hasNatalChart: !!state.natalChart,
    hasCustomChartUrl: !!state.customChartUrl,
    sunSign: state.sunSign,
    moonSign: state.moonSign,
      coverColorScheme: state.coverColorScheme
    })

    // DEBUG: Check if ProductOption features are properly defined
    logger.pricing("Pricing Page - Features Debug", {
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
  logger.pricing("Pricing Page - Product Selection", {
    selectedOptions,
    totalProducts: Object.values(selectedOptions).filter(Boolean).length,
    selectedProductNames: Object.entries(selectedOptions)
      .filter(([, selected]) => selected)
      .map(([name]) => name)
  })
  }, [selectedOptions]) // Only when selectedOptions changes

  // Check if quiz is completed - only run once
  useEffect(() => {
    logger.pricing("Pricing Page - Access Check", {
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
    logger.pricing("Pricing Page - Timer Started", {
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
        logger.pricing("Pricing Page - Timer Cleanup", {
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
    logger.pricing("Pricing Page - Product Selection Changed", {
      option,
      previousState: selectedOptions,
      action: selectedOptions[option as keyof typeof selectedOptions] ? "DESELECT" : "SELECT"
    })

    setSelectedOptions(prev => {
      const newState = {
        ...prev,
        [option]: !prev[option as keyof typeof prev]
      }
      
      logger.pricing("Pricing Page - New Selection State", {
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

  // Handle checkout with Shopify headless checkout
  const handleCheckout = async () => {
    const selectedProducts = Object.entries(selectedOptions)
      .filter(([, selected]) => selected)
      .map(([name]) => name)

    logger.pricing("Pricing Page - Checkout Initiated", {
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
      logger.warn("Pricing Page - Checkout Error", {
        error: "No products selected",
        selectedOptions
      })
      setCheckoutError("Please select at least one product.")
      return
    }

    if (!termsAccepted) {
      logger.warn("Pricing Page - Terms Error", {
        error: "Terms not accepted",
        selectedProducts
      })
      setShowTermsWarning(true)
      setCheckoutError("Please accept the terms and conditions to continue.")
      return
    }

    setIsProcessingOrder(true)
    setCheckoutError(null)

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

      logger.pricing("Pricing Page - Creating Shopify Checkout", {
        selectedOptions,
        analyticsTracked: true,
        quizStateEmail: state.email,
        quizStateFirstName: state.firstName,
        quizStateLastName: state.lastName
      })

      // Create Shopify headless checkout
      const checkoutUrl = await createShopifyCheckout({
        selectedOptions,
        quizState: state
      })

      logger.pricing("Pricing Page - Shopify Checkout Success", {
        checkoutUrl,
        checkoutUrlLength: checkoutUrl.length,
        selectedProducts,
        isValidUrl: checkoutUrl.startsWith('https://'),
        checkoutDomain: checkoutUrl.split('/')[2]
      })

      // Redirect to Shopify checkout
      logger.pricing("Pricing Page - Redirecting to Shopify", {
        action: "window.location.href redirect",
        url: checkoutUrl
      })
      
      window.location.href = checkoutUrl

    } catch (error) {
      logger.error("Pricing Page - Shopify Checkout Error", new Error("Shopify checkout failed"), {
        error: error instanceof Error ? error.message : error,
        errorType: error?.constructor?.name,
        errorStack: error instanceof Error ? error.stack : 'No stack',
        selectedProducts,
        selectedOptions,
        quizStateData: {
          email: state.email,
          firstName: state.firstName,
          lastName: state.lastName
        },
        timestamp: new Date().toISOString()
      })
      
      // Detailed error handling
      let errorMessage = "Failed to create checkout. Please try again."
      
      if (error instanceof ShopifyError) {
        errorMessage = error.message
        logger.error("Shopify Error Details", error, {
          code: error.code,
          status: error.status,
          details: error.details
        })
      } else if (error instanceof Error) {
        // Check for specific error types
        if (error.message.includes('fetch')) {
          errorMessage = "Network error. Please check your connection and try again."
        } else if (error.message.includes('validation')) {
          errorMessage = "Please check your information and try again."
        }
      }
      
      setCheckoutError(errorMessage)
      setIsProcessingOrder(false)
      
      // Log that we're NOT redirecting to payment page
      logger.pricing("Pricing Page - Error Handling", {
        action: "Staying on pricing page",
        errorShown: errorMessage,
        willNotRedirectToPayment: true
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
        {/* Header Section - Elegant Design */}
        <header className="bg-white shadow-sm">
          <div className="container mx-auto px-4 py-3">
            <div className="flex items-center justify-between">
              {/* Left side - Back button and logo */}
              <div className="flex items-center">
                <button
                  onClick={handleBackClick}
                  className="mr-3 p-1.5 text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <div className="flex items-center">
                  <span className="text-[#28293d] font-medium text-lg">astrovela</span>
                  <AstrovelaIcon width={24} height={24} className="ml-1" />
                </div>
              </div>
              
              {/* Right side - Timer and button */}
              <div className="flex items-center gap-3">
                {/* Timer */}
                <div className="flex items-center text-red-600 font-medium">
                  <Clock className="h-4 w-4 mr-1.5" />
                  <span className="text-sm">{timeLeft.minutes}:{timeLeft.seconds.toString().padStart(2, '0')}</span>
                </div>
                
                {/* Order button */}
                <button 
                  onClick={scrollToOptions}
                  className="bg-yellow-400 text-gray-900 px-6 py-2 rounded-full text-sm font-semibold hover:bg-yellow-500 transition-colors shadow-sm"
                >
                  Order now
                </button>
              </div>
            </div>
          </div>
        </header>

        <main className="container mx-auto px-4 py-6">
          <div className="max-w-4xl mx-auto">
            {/* Elegant Hero Section */}
            <div className="text-center mb-6">
              {/* Timer Banner */}
              <div className="inline-flex items-center bg-red-50 text-red-600 px-4 py-2 rounded-full text-xs md:text-sm font-medium mb-4 md:mb-6">
                <Clock className="h-4 w-4 mr-2" />
                <span>50% off discount reserved for {timeLeft.minutes}:{timeLeft.seconds.toString().padStart(2, '0')}</span>
              </div>
              {/* Main Heading */}
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                Get the #1 personalized astrology<br />
                book & transform your life today
              </h1>
              <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto mb-6">
                In-depth reading of your unique birth chart to help you achieve self-growth and happy relationships
              </p>
              {/* Social Proof */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-gray-600 text-xs md:text-sm">
                <div className="flex items-center gap-2">
                  <StarRating rating={4.8} />
                  <span className="font-medium">4.8/5</span>
                </div>
                <span className="hidden sm:inline text-gray-400">•</span>
                <span className="font-medium">Over 2,065,847 books ordered!</span>
              </div>
            </div>

            {/* Book Cover Preview */}
            {hasQuizData && (
              <div className="flex justify-center mb-10">
                <div className="w-full max-w-[350px]">
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
                    selectedIcon={state.customChartUrl ? "custom-natal-chart" : "natal-chart"}
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

            {/* Pricing Section Container */}
            <section ref={optionsSectionRef} className="bg-white rounded-2xl shadow-lg border border-gray-100 px-4 md:px-8 py-8 mb-10 mx-auto max-w-2xl flex flex-col items-center">
              <div className="w-full">
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 text-center">Choose your best option</h2>
                <p className="text-gray-600 mb-6 text-sm md:text-base text-center">Get instant access to your personalized astrology insights</p>
                <div className="space-y-4">
                  {/* Paperback Option - Featured */}
                  <div className="relative">
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-gray-900 px-3 py-0.5 rounded-full text-xs font-bold z-10 shadow">
                      MOST POPULAR
                    </div>
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
                  </div>
                  {/* Ebook Option */}
                  <ProductOption
                    type="ebook"
                    title="astrovela ebook"
                    features={[
                      "Digital copy delivered to your email",
                      "FREE app included",
                      "FREE with the paperback"
                    ]}
                    price={getEbookPrice()}
                    originalPrice="€49.99"
                    imageSrc="/placeholder.svg"
                    isSelected={selectedOptions.ebook}
                    onSelect={() => handleOptionSelect("ebook")}
                    saleTag={selectedOptions.paperback ? "INCLUDED" : ""}
                  />
                  {/* App Subscription Option */}
                  <ProductOption
                    type="app"
                    title="astrovela app"
                    features={[
                      "Unlimited compatibility reports",
                      "New daily horoscopes & astrology content",
                      "FREE 1-month trial with ebook or paperback"
                    ]}
                    price={getAppPrice()}
                    originalPrice="€30.99"
                    imageSrc="/placeholder.svg"
                    isSelected={selectedOptions.app}
                    onSelect={() => handleOptionSelect("app")}
                    saleTag={selectedOptions.paperback || selectedOptions.ebook ? "FREE TRIAL" : ""}
                  />
                </div>
                {/* Order Summary */}
                <div className="mt-8 mb-4 p-4 bg-gray-50 rounded-lg border border-gray-100">
                  <div className="flex justify-between items-center text-lg font-bold mb-2">
                    <span>Total:</span>
                    <span className="text-yellow-600">€{totalPrice.toFixed(2)}</span>
                  </div>
                  {/* Terms and Conditions */}
                  <div className="mb-2">
                    <label className="flex items-start gap-2 cursor-pointer text-xs md:text-sm">
                      <input
                        type="checkbox"
                        checked={termsAccepted}
                        onChange={(e) => {
                          setTermsAccepted(e.target.checked)
                          if (e.target.checked) setShowTermsWarning(false)
                        }}
                        className="mt-1 h-4 w-4 text-yellow-400 border-gray-300 rounded focus:ring-yellow-400"
                      />
                      <span className="text-gray-600">
                        I accept the <button className="text-yellow-600 hover:underline">Terms & Conditions</button> and <button className="text-yellow-600 hover:underline">Privacy Policy</button>
                      </span>
                    </label>
                    {showTermsWarning && (
                      <p className="text-red-500 text-xs mt-1">Please accept the terms and conditions to continue.</p>
                    )}
                  </div>
                  {/* Checkout Error */}
                  {checkoutError && (
                    <div className="mb-2 p-2 bg-red-50 border border-red-200 rounded-lg">
                      <p className="text-red-700 text-xs">{checkoutError}</p>
                    </div>
                  )}
                  {/* Order Button */}
                  <button
                    onClick={handleCheckout}
                    disabled={isProcessingOrder}
                    className="w-full bg-yellow-400 text-gray-900 py-3 rounded-full font-bold text-base md:text-lg hover:bg-yellow-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow"
                  >
                    {isProcessingOrder ? "Processing..." : "Order Now"}
                  </button>
                  <div className="flex justify-center mt-2">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/only-payment-icons-Tlz7XpXRAYL3RvgV4LWPF2B2J7ck0L.webp"
                      alt="Payment methods"
                      className="h-7 w-auto"
                    />
                  </div>
                  {selectedOptions.app && (
                    <p className="text-[10px] md:text-xs text-gray-500 text-center mt-2">
                      By clicking "Order Now," I agree that if I do not cancel the app subscription before the end of the free 1 month trial, astrovela will automatically charge my payment method the regular price of €30.99 every 1 month thereafter until I cancel by contacting us at hello@tryastrovela.com
                    </p>
                  )}
                </div>
              </div>
            </section>

            {/* Testimonials Section - NEW */}
            <section className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-center mb-8">What our customers say</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <TestimonialCard
                  name="Sarah M."
                  rating={5}
                  quote="This book completely changed my perspective on life! The personalized insights were incredibly accurate and helped me understand myself better."
                  imageSrc="/placeholder.svg"
                />
                <TestimonialCard
                  name="Michael R."
                  rating={5}
                  quote="I was skeptical at first, but the level of detail in my personalized book blew me away. It's like having a personal astrologer!"
                  imageSrc="/placeholder.svg"
                />
                <TestimonialCard
                  name="Emma L."
                  rating={5}
                  quote="The relationship compatibility section saved my marriage. We finally understand each other's needs and communicate better."
                  imageSrc="/placeholder.svg"
                />
              </div>
              
              <div className="text-center mt-8">
                <button
                  onClick={scrollToOptions}
                  className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-500 transition-colors shadow-lg"
                >
                  Get your personalized book
                </button>
              </div>
            </section>

            {/* "Easily improve relationships" section - Enhanced */}
            <section className="bg-gradient-to-br from-purple-50 to-yellow-50 rounded-2xl p-8 mb-12 shadow-lg">
              <div className="text-center mb-8">
                <h2 className="text-xl md:text-2xl font-bold mb-4">Easily improve relationships, understand yourself better, and reach your personal goals 💛</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">Join over 2 million people who have discovered their true potential through personalized astrology</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-start">
                {/* Left side - What's included */}
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <h3 className="text-lg md:text-xl font-bold mb-6">What's included?</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center mr-4 flex-shrink-0 shadow-md">
                        <span className="text-gray-900 font-bold">1</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-1">Personalized birth chart analysis</h4>
                        <p className="text-sm text-gray-600">Discover the secrets of your unique astrological blueprint to understand your personality, strengths, and life path.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center mr-4 flex-shrink-0 shadow-md">
                        <span className="text-gray-900 font-bold">2</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-1">Relationship compatibility insights</h4>
                        <p className="text-sm text-gray-600">Learn how to improve your relationships and find your perfect match using astrological wisdom.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center mr-4 flex-shrink-0 shadow-md">
                        <span className="text-gray-900 font-bold">3</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-1">Personal growth guidance</h4>
                        <p className="text-sm text-gray-600">Unlock your potential and overcome challenges with personalized astrological advice.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right side - Additional content list */}
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <h3 className="text-lg md:text-xl font-bold mb-6">Additional content:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <span className="text-yellow-400 mr-3 text-xl">★</span>
                      <span className="font-medium">Divination & Astrology</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-yellow-400 mr-3 text-xl">★</span>
                      <span className="font-medium">Beginner's Guide to Palmistry</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-yellow-400 mr-3 text-xl">★</span>
                      <span className="font-medium">Tailored Tarot Card Readings</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-yellow-400 mr-3 text-xl">★</span>
                      <span className="font-medium">Crystals in Astrology</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-yellow-400 mr-3 text-xl">★</span>
                      <span className="font-medium">Intro to Numerology</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-yellow-400 mr-3 text-xl">★</span>
                      <span className="font-medium">History of Astrology & Modern Astrology</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-yellow-400 mr-3 text-xl">★</span>
                      <span className="font-medium">And more...</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="text-center mt-8">
                <button
                  onClick={scrollToOptions}
                  className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-500 transition-colors shadow-lg transform hover:scale-105 transition-transform"
                >
                  Order now - Save 65%
                </button>
              </div>
            </section>

            {/* FAQ Section - Enhanced */}
            <section className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-center mb-8">Frequently Asked Questions</h2>
              <div className="max-w-3xl mx-auto">
                <Accordion type="single" collapsible className="space-y-4">
                  <AccordionItem value="accuracy" className="bg-white rounded-lg shadow-md border-0">
                    <AccordionTrigger className="px-6 py-4 text-lg font-semibold hover:no-underline">
                      How accurate is my personalized astrology book?
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 text-gray-600">
                      Your book is created using your exact birth date, time, and location to generate a precise natal chart. This ensures maximum accuracy in your astrological reading. Our system uses professional-grade astrology calculations trusted by astrologers worldwide.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="delivery" className="bg-white rounded-lg shadow-md border-0">
                    <AccordionTrigger className="px-6 py-4 text-lg font-semibold hover:no-underline">
                      When will I receive my book?
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 text-gray-600">
                      Digital books are delivered instantly to your email. Physical books are printed and shipped within 3-5 business days, with free worldwide shipping. You'll receive tracking information once your order ships.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="birth-time" className="bg-white rounded-lg shadow-md border-0">
                    <AccordionTrigger className="px-6 py-4 text-lg font-semibold hover:no-underline">
                      What if I don't know my exact birth time?
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 text-gray-600">
                      While knowing your exact birth time provides the most accurate reading, we can still create a meaningful chart with just your birth date and location. The book will focus on the aspects that don't require precise timing.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="cancellation" className="bg-white rounded-lg shadow-md border-0">
                    <AccordionTrigger className="px-6 py-4 text-lg font-semibold hover:no-underline">
                      Can I cancel my app subscription?
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 text-gray-600">
                      Yes, you can cancel your app subscription at any time by contacting us at hello@tryastrovela.com before your next billing cycle. The free trial is only available with purchase of an ebook or paperback.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="refunds" className="bg-white rounded-lg shadow-md border-0">
                    <AccordionTrigger className="px-6 py-4 text-lg font-semibold hover:no-underline">
                      What is your refund policy?
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 text-gray-600">
                      We offer a 30-day money-back guarantee. If you're not completely satisfied with your personalized book, contact us for a full refund. No questions asked.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </section>

            {/* Final CTA Section */}
            <section className="text-center py-12 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-2xl shadow-lg">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Ready to transform your life?</h2>
              <p className="text-lg text-gray-800 mb-8 max-w-2xl mx-auto">
                Join millions who have discovered their true potential through personalized astrology
              </p>
              <button
                onClick={scrollToOptions}
                className="bg-gray-900 text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-gray-800 transition-colors shadow-xl transform hover:scale-105 transition-transform"
              >
                Get my personalized book now
              </button>
              <p className="text-sm text-gray-700 mt-4">
                🔒 Secure checkout • 30-day money-back guarantee
              </p>
            </section>
          </div>
        </main>
      </div>
    </ErrorBoundary>
  )
}

