"use client"

import { useState, useEffect } from "react"
import { CreditCard, Lock, Truck, XCircle, Info, Mail } from "lucide-react"
import { PageHeader } from "@/components/shared/page-header"
import { Footer } from "@/components/shared/footer"
import { useRouter } from "next/navigation"
import AstrovelaIcon from "@/components/icons/AstrovelaIcon"
import { ErrorBoundary } from "@/components/ErrorBoundary"

export default function PaymentPage() {
  const [selectedMethod, setSelectedMethod] = useState("card")
  const [isProcessing, setIsProcessing] = useState(false)
  const router = useRouter()
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search)
      const min = parseInt(params.get("min") || "0", 10)
      const sec = parseInt(params.get("sec") || "0", 10)
      if (!isNaN(min) && !isNaN(sec)) {
        setMinutes(min)
        setSeconds(sec)
      } else {
        setMinutes(14)
        setSeconds(54)
      }
    }
  }, [])

  useEffect(() => {
    if (minutes === 0 && seconds === 0) return
    const timer = setInterval(() => {
      if (seconds > 0) {
        setSeconds((s) => s - 1)
      } else if (minutes > 0) {
        setMinutes((m) => m - 1)
        setSeconds(59)
      }
    }, 1000)
    return () => clearInterval(timer)
  }, [minutes, seconds])

  const handlePaymentSubmit = () => {
    setIsProcessing(true)
    // Simulate payment processing
    setTimeout(() => {
      // Redirect to thank you page
      router.push("/thank-you")
    }, 1500)
  }

  return (
    <ErrorBoundary>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <PageHeader />
        <main className="flex-1 flex flex-col items-center justify-center py-8">
          <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-0 overflow-hidden border border-gray-200">
            {/* Offer timer */}
            <div className="bg-yellow-300 text-gray-900 text-lg font-semibold flex items-center justify-between px-6 py-3">
              <span>The offer expires in:</span>
              <span className="text-2xl font-bold tracking-widest">{minutes.toString().padStart(2, "0")}:{seconds.toString().padStart(2, "0")}</span>
            </div>

            {/* Centered Logo */}
            <div className="flex flex-col items-center py-6">
              <AstrovelaIcon width={48} height={48} className="mb-2" />
              <span className="font-normal text-2xl md:text-3xl text-[#28293d]" style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}>astrovela</span>
            </div>

            {/* Payment method selection */}
            <div className="px-6 pb-6">
              <h2 className="text-xl font-bold mb-4">Select a secure payment method</h2>

              <div className="space-y-3 mb-6">
                <button
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-lg border ${selectedMethod === "paypal" ? "border-yellow-400 bg-yellow-50" : "border-gray-200 bg-gray-50"}`}
                  onClick={() => setSelectedMethod("paypal")}
                >
                  <span className="flex items-center gap-2">
                    <span className="inline-block w-5 h-5 rounded-full border-2 border-yellow-400 flex items-center justify-center mr-2">
                      {selectedMethod === "paypal" && <span className="w-3 h-3 bg-yellow-400 rounded-full block"></span>}
                    </span>
                    Paypal
                  </span>
                  <img src="/images/paypal-icon.png" alt="PayPal" className="h-5" onError={e => e.currentTarget.src='/placeholder.svg'} />
                </button>
                <button
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-lg border ${selectedMethod === "card" ? "border-yellow-400 bg-yellow-50" : "border-gray-200 bg-gray-50"}`}
                  onClick={() => setSelectedMethod("card")}
                >
                  <span className="flex items-center gap-2">
                    <span className="inline-block w-5 h-5 rounded-full border-2 border-yellow-400 flex items-center justify-center mr-2">
                      {selectedMethod === "card" && <span className="w-3 h-3 bg-yellow-400 rounded-full block"></span>}
                    </span>
                    Credit or Debit Card
                  </span>
                  <span className="flex gap-1">
                    <img src="/images/visa-icon.png" alt="Visa" className="h-5" onError={e => e.currentTarget.src='/placeholder.svg'} />
                    <img src="/images/mastercard-icon.png" alt="Mastercard" className="h-5" onError={e => e.currentTarget.src='/placeholder.svg'} />
                  </span>
                </button>
              </div>

              {/* Card payment form */}
              {selectedMethod === "card" && (
                <div className="space-y-4 mb-6">
                  <button className="w-full flex items-center justify-center gap-2 py-2 rounded-lg border border-gray-200 bg-white font-medium mb-2">
                    <img src="/images/apple_pay-icon.png" alt="Apple Pay" className="h-6" onError={e => e.currentTarget.src='/placeholder.svg'} />
                    <span>Apple Pay</span>
                  </button>
                  <button className="w-full flex items-center justify-center gap-2 py-2 rounded-lg border border-gray-200 bg-black text-white font-medium mb-2">
                    <img src="/images/google_pay-icon.png" alt="Google Pay" className="h-6" onError={e => e.currentTarget.src='/placeholder.svg'} />
                    <span>Buy with Google Pay</span>
                  </button>
                  <div>
                    <label className="block text-sm font-medium mb-1">Card number</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-yellow-300 font-mono" placeholder="1234 1234 1234 1234" />
                  </div>
                  <div className="flex gap-2">
                    <div className="flex-1">
                      <label className="block text-sm font-medium mb-1">Expiry (MM/YY)</label>
                      <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-yellow-300 font-mono" placeholder="MM/YY" />
                    </div>
                    <div className="flex-1">
                      <label className="block text-sm font-medium mb-1">CVV</label>
                      <input type="password" className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-yellow-300 font-mono" placeholder="•••" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Name on card</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-yellow-300" placeholder="Full name" />
                  </div>
                </div>
              )}

              <button 
                className="w-full py-4 rounded-full bg-yellow-400 text-gray-900 font-bold text-lg shadow hover:bg-yellow-500 transition-colors mb-4" 
                onClick={handlePaymentSubmit}
                disabled={isProcessing}
              >
                {isProcessing ? (
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
                ) : (
                  "Submit Secure Payment"
                )}
              </button>

              <div className="flex justify-between items-center mb-2">
                <span className="font-semibold text-lg">Total:</span>
                <span className="font-bold text-xl text-gray-900">EUR 73.99</span>
              </div>

              {/* Info/instructions box */}
              <div className="bg-gray-100 rounded-lg p-4 text-sm text-gray-700 mb-4 space-y-2">
                <div className="flex items-start gap-2">
                  <Info className="w-5 h-5 text-yellow-500 mt-0.5" />
                  <span>Follow the instructions on the screen to complete your purchase securely.</span>
                </div>
                <div className="flex items-start gap-2">
                  <Info className="w-5 h-5 text-yellow-500 mt-0.5" />
                  <span>Payments are charged in EUR. App plan automatically renews until cancelled. EUR 28.99 will be charged monthly.</span>
                </div>
                <div className="flex items-start gap-2">
                  <Mail className="w-5 h-5 text-yellow-500 mt-0.5" />
                  <span>You may cancel your subscription at any time by dropping us an email at <a href="mailto:help@astrovela.com" className="underline">help@astrovela.com</a></span>
                </div>
              </div>

              {/* Features and payment icons */}
              <div className="flex justify-between items-center text-xs text-gray-600 mb-4">
                <div className="flex flex-col items-center">
                  <Truck className="w-6 h-6 mb-1 text-yellow-500" />
                  <span>Free shipping</span>
                </div>
                <div className="flex flex-col items-center">
                  <XCircle className="w-6 h-6 mb-1 text-yellow-500" />
                  <span>Cancel anytime</span>
                </div>
                <div className="flex flex-col items-center">
                  <Lock className="w-6 h-6 mb-1 text-yellow-500" />
                  <span>Secure transaction</span>
                </div>
              </div>
              <div className="flex flex-wrap justify-center gap-2 mb-2">
                <img src="/images/mastercard-icon.png" alt="Mastercard" className="h-6" onError={e => e.currentTarget.style.display='none'} />
                <img src="/images/visa-icon.png" alt="Visa" className="h-6" onError={e => e.currentTarget.style.display='none'} />
                <img src="/images/paypal-icon.png" alt="PayPal" className="h-6" onError={e => e.currentTarget.style.display='none'} />
                <img src="/images/apple_pay-icon.png" alt="Apple Pay" className="h-6" onError={e => e.currentTarget.style.display='none'} />
                <img src="/images/google_pay-icon.png" alt="Google Pay" className="h-6" onError={e => e.currentTarget.style.display='none'} />
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </ErrorBoundary>
  )
} 