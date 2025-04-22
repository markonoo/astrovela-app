"use client"

import { useState } from "react"
import { CreditCard, Lock, Truck, XCircle, Info, Mail } from "lucide-react"
import { PageHeader } from "@/components/shared/page-header"
import { Footer } from "@/components/shared/footer"

export default function PaymentPage() {
  const [selectedMethod, setSelectedMethod] = useState("card")

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <PageHeader />
      <main className="flex-1 flex flex-col items-center justify-center py-8">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-0 overflow-hidden border border-gray-200">
          {/* Offer timer */}
          <div className="bg-yellow-300 text-gray-900 text-lg font-semibold flex items-center justify-between px-6 py-3">
            <span>The offer expires in:</span>
            <span className="text-2xl font-bold tracking-widest">00:00</span>
          </div>

          {/* Logo */}
          <div className="flex flex-col items-center py-6">
            <div className="mb-2">
              <span className="text-3xl text-yellow-400 font-bold">✦</span>
            </div>
            <span className="font-semibold text-lg text-gray-800">astrovela</span>
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
                <img src="/paypal.svg" alt="PayPal" className="h-5" onError={e => e.currentTarget.style.display='none'} />
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
                  <img src="/visa.svg" alt="Visa" className="h-5" onError={e => e.currentTarget.style.display='none'} />
                  <img src="/mastercard.svg" alt="Mastercard" className="h-5" onError={e => e.currentTarget.style.display='none'} />
                </span>
              </button>
            </div>

            {/* Card payment form */}
            {selectedMethod === "card" && (
              <div className="space-y-4 mb-6">
                <button className="w-full flex items-center justify-center gap-2 py-2 rounded-lg border border-gray-200 bg-white font-medium mb-2">
                  <img src="/apple-pay.svg" alt="Apple Pay" className="h-6" onError={e => e.currentTarget.style.display='none'} />
                  <span>Apple Pay</span>
                </button>
                <button className="w-full flex items-center justify-center gap-2 py-2 rounded-lg border border-gray-200 bg-black text-white font-medium mb-2">
                  <img src="/google-pay.svg" alt="Google Pay" className="h-6" onError={e => e.currentTarget.style.display='none'} />
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

            <button className="w-full py-4 rounded-full bg-yellow-400 text-gray-900 font-bold text-lg shadow hover:bg-yellow-500 transition-colors mb-4">
              Submit Secure Payment
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
              <img src="/maestro.svg" alt="Maestro" className="h-6" onError={e => e.currentTarget.style.display='none'} />
              <img src="/mastercard.svg" alt="Mastercard" className="h-6" onError={e => e.currentTarget.style.display='none'} />
              <img src="/visa.svg" alt="Visa" className="h-6" onError={e => e.currentTarget.style.display='none'} />
              <img src="/discover.svg" alt="Discover" className="h-6" onError={e => e.currentTarget.style.display='none'} />
              <img src="/paypal.svg" alt="PayPal" className="h-6" onError={e => e.currentTarget.style.display='none'} />
              <img src="/amex.svg" alt="Amex" className="h-6" onError={e => e.currentTarget.style.display='none'} />
              <img src="/stripe.svg" alt="Stripe" className="h-6" onError={e => e.currentTarget.style.display='none'} />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
} 