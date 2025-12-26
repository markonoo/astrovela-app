"use client"

import { Lock, Sparkles } from "lucide-react"
import Link from "next/link"
import { useUser } from "@/contexts/UserContext"

interface PaywallProps {
  daysRemaining?: number
}

export function Paywall({ daysRemaining }: PaywallProps) {
  const { user } = useUser()

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-12 bg-gradient-to-b from-apple-gray-5 to-apple-gray-6">
      <div className="max-w-md w-full bg-white rounded-apple-xl shadow-apple-lg p-10 text-center animate-spring">
        <div className="flex justify-center mb-8">
          <div className="relative">
            <Lock className="w-16 h-16 text-apple-gray-1" />
            <Sparkles className="w-8 h-8 text-apple-orange-DEFAULT absolute -top-2 -right-2 animate-twinkle" />
          </div>
        </div>

        <h1 className="text-[28px] leading-[36px] font-bold text-apple-gray-1 mb-4">
          Unlock Your Astrology aura
        </h1>

        {daysRemaining !== undefined && daysRemaining > 0 ? (
          <p className="text-[17px] leading-[24px] text-apple-gray-2 mb-8">
            Your free trial has ended. Continue your journey with personalized daily insights.
          </p>
        ) : (
          <p className="text-[17px] leading-[24px] text-apple-gray-2 mb-8">
            Get unlimited access to daily horoscopes, weekly forecasts, love compatibility, and career guidance.
          </p>
        )}

        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-apple-lg p-6 mb-8">
          <h2 className="text-[18px] leading-[24px] font-semibold text-apple-gray-1 mb-4">What you'll get:</h2>
          <ul className="text-left space-y-3 text-[15px] leading-[20px] text-apple-gray-2">
            <li className="flex items-start">
              <span className="text-apple-orange-DEFAULT mr-3 text-lg">✨</span>
              Daily personalized horoscopes
            </li>
            <li className="flex items-start">
              <span className="text-apple-orange-DEFAULT mr-3 text-lg">📅</span>
              Weekly & monthly forecasts
            </li>
            <li className="flex items-start">
              <span className="text-apple-orange-DEFAULT mr-3 text-lg">💕</span>
              Love compatibility insights
            </li>
            <li className="flex items-start">
              <span className="text-apple-orange-DEFAULT mr-3 text-lg">💼</span>
              Career timing guidance
            </li>
            <li className="flex items-start">
              <span className="text-apple-orange-DEFAULT mr-3 text-lg">📚</span>
              Zodiac encyclopedia access
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          {user ? (
            <>
              <Link
                href="/aura/billing"
                className="block w-full py-3.5 px-6 bg-apple-gray-1 text-white rounded-apple-md text-[17px] leading-[24px] font-semibold hover:bg-apple-gray-2 hover:scale-[1.02] active:scale-[0.98] transition-all duration-150 shadow-apple-sm"
              >
                Subscribe Now - €14.99/month
              </Link>
              <p className="text-[13px] leading-[18px] text-apple-gray-3">
                Cancel anytime. No commitment.
              </p>
            </>
          ) : (
            <>
              <Link
                href="/login?redirect=/aura"
                className="block w-full py-3.5 px-6 bg-apple-gray-1 text-white rounded-apple-md text-[17px] leading-[24px] font-semibold hover:bg-apple-gray-2 hover:scale-[1.02] active:scale-[0.98] transition-all duration-150 shadow-apple-sm"
              >
                Sign In to Continue
              </Link>
              <p className="text-[13px] leading-[18px] text-apple-gray-3">
                Already purchased? Sign in to access your free trial.
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

