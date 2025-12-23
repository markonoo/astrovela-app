"use client"

import { useEffect, useState } from "react"
import { useUser } from "@/contexts/UserContext"
import { Paywall } from "@/components/aura/paywall"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Sparkles, Home } from "lucide-react"
import { zodiacSignsData } from "@/lib/zodiac-data"
import { EntitlementData } from "@/types/api"
import { logger } from "@/utils/logger"

export default function ExplorePage() {
  const { user, loading } = useUser()
  const [entitlement, setEntitlement] = useState<EntitlementData | null>(null)
  const [selectedSign, setSelectedSign] = useState<string>("aries")

  useEffect(() => {
    if (!loading && user) {
      checkAccess()
    }
  }, [user, loading])

  const checkAccess = async () => {
    try {
      const response = await fetch("/api/aura/entitlement")
      if (response.ok) {
        const data = await response.json()
        if (data.hasAccess) {
          setEntitlement(data.entitlement)
        }
      }
    } catch (error) {
      logger.error("Failed to check access", error)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-2 border-white/20 border-t-white"></div>
      </div>
    )
  }

  if (!user || !entitlement) {
    return <Paywall />
  }

  const signs = [
    "aries", "taurus", "gemini", "cancer", "leo", "virgo",
    "libra", "scorpio", "sagittarius", "capricorn", "aquarius", "pisces"
  ]

  const selectedSignData = zodiacSignsData[selectedSign] || zodiacSignsData.aries

  return (
    <div className="px-4 mt-6 space-y-6 mb-24">
      <h1 className="text-[28px] leading-[36px] font-bold text-white mb-6">Explore Astrology</h1>

      <Tabs defaultValue="signs" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8 rounded-apple-md bg-apple-gray-5 p-1">
          <TabsTrigger value="signs" className="rounded-apple-md data-[state=active]:bg-white data-[state=active]:shadow-apple-sm transition-all duration-150">Signs</TabsTrigger>
          <TabsTrigger value="planets" className="rounded-apple-md data-[state=active]:bg-white data-[state=active]:shadow-apple-sm transition-all duration-150">Planets</TabsTrigger>
          <TabsTrigger value="houses" className="rounded-apple-md data-[state=active]:bg-white data-[state=active]:shadow-apple-sm transition-all duration-150">Houses</TabsTrigger>
        </TabsList>

        <TabsContent value="signs">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Sign Selector */}
            <Card className="border-0 shadow-apple-md rounded-apple-lg bg-white hover:shadow-apple-lg transition-shadow duration-250 animate-spring">
              <CardHeader className="px-6 py-5">
                <CardTitle className="text-[20px] leading-[28px] font-semibold text-apple-gray-1">Select a Sign</CardTitle>
              </CardHeader>
              <CardContent className="px-6 py-6">
                <div className="grid grid-cols-3 gap-3">
                  {signs.map((sign) => (
                    <button
                      key={sign}
                      onClick={() => setSelectedSign(sign)}
                      className={`p-3 rounded-apple-md text-[13px] leading-[18px] font-medium transition-all duration-150 hover:scale-[1.02] active:scale-[0.98] ${
                        selectedSign === sign
                          ? "bg-apple-gray-1 text-white shadow-apple-sm"
                          : "bg-apple-gray-5 text-apple-gray-2 hover:bg-apple-gray-4"
                      }`}
                    >
                      {sign.charAt(0).toUpperCase() + sign.slice(1)}
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Sign Details */}
            <Card className="border-0 shadow-apple-md rounded-apple-lg bg-white hover:shadow-apple-lg transition-shadow duration-250 animate-spring">
              <CardHeader className="bg-gradient-to-r from-purple-50 to-violet-50 rounded-t-apple-lg px-6 py-5">
                <CardTitle className="capitalize text-[20px] leading-[28px] font-semibold text-apple-gray-1">{selectedSign}</CardTitle>
                <CardDescription className="text-[15px] leading-[20px] text-apple-gray-2 mt-1">{selectedSignData.element} • {selectedSignData.modality}</CardDescription>
              </CardHeader>
              <CardContent className="px-6 py-6 space-y-5">
                <div>
                  <h3 className="text-[18px] leading-[24px] font-semibold text-apple-gray-1 mb-2">Strengths</h3>
                  <p className="text-[15px] leading-[20px] text-apple-gray-2">{selectedSignData.strengths}</p>
                </div>
                <div>
                  <h3 className="text-[18px] leading-[24px] font-semibold text-apple-gray-1 mb-2">Shadows</h3>
                  <p className="text-[15px] leading-[20px] text-apple-gray-2">{selectedSignData.shadows}</p>
                </div>
                <div>
                  <h3 className="text-[18px] leading-[24px] font-semibold text-apple-gray-1 mb-2">Love Style</h3>
                  <p className="text-[15px] leading-[20px] text-apple-gray-2">{selectedSignData.loveStyle}</p>
                </div>
                <div>
                  <h3 className="text-[18px] leading-[24px] font-semibold text-apple-gray-1 mb-2">Communication Style</h3>
                  <p className="text-[15px] leading-[20px] text-apple-gray-2">{selectedSignData.communication}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="planets">
          <Card className="border-0 shadow-apple-md rounded-apple-lg bg-white hover:shadow-apple-lg transition-shadow duration-250 animate-spring">
            <CardHeader className="px-6 py-5">
              <CardTitle className="text-[20px] leading-[28px] font-semibold text-apple-gray-1">Planets in Signs</CardTitle>
              <CardDescription className="text-[15px] leading-[20px] text-apple-gray-2 mt-1">How each planet expresses through the zodiac signs</CardDescription>
            </CardHeader>
            <CardContent className="px-6 py-6">
              <p className="text-[17px] leading-[24px] text-apple-gray-2 mb-6">
                Each planet represents different aspects of your personality and life. 
                When a planet is in a particular sign, it takes on that sign's qualities.
              </p>
              <div className="space-y-5">
                <div>
                  <h3 className="text-[18px] leading-[24px] font-semibold text-apple-gray-1 mb-2">Sun</h3>
                  <p className="text-[15px] leading-[20px] text-apple-gray-2">Your core identity and life purpose</p>
                </div>
                <div>
                  <h3 className="text-[18px] leading-[24px] font-semibold text-apple-gray-1 mb-2">Moon</h3>
                  <p className="text-[15px] leading-[20px] text-apple-gray-2">Your emotional nature and inner self</p>
                </div>
                <div>
                  <h3 className="text-[18px] leading-[24px] font-semibold text-apple-gray-1 mb-2">Venus</h3>
                  <p className="text-[15px] leading-[20px] text-apple-gray-2">How you love and what you value</p>
                </div>
                <div>
                  <h3 className="text-[18px] leading-[24px] font-semibold text-apple-gray-1 mb-2">Mars</h3>
                  <p className="text-[15px] leading-[20px] text-apple-gray-2">Your drive, energy, and how you take action</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="houses">
          <Card className="border-0 shadow-apple-md rounded-apple-lg bg-white hover:shadow-apple-lg transition-shadow duration-250 animate-spring">
            <CardHeader className="px-6 py-5">
              <CardTitle className="text-[20px] leading-[28px] font-semibold text-apple-gray-1">The 12 Houses</CardTitle>
              <CardDescription className="text-[15px] leading-[20px] text-apple-gray-2 mt-1">Areas of life represented in your birth chart</CardDescription>
            </CardHeader>
            <CardContent className="px-6 py-6">
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { num: 1, name: "Self", desc: "Identity and appearance" },
                  { num: 2, name: "Resources", desc: "Money and possessions" },
                  { num: 3, name: "Communication", desc: "Learning and siblings" },
                  { num: 4, name: "Home", desc: "Family and roots" },
                  { num: 5, name: "Creativity", desc: "Self-expression and children" },
                  { num: 6, name: "Health", desc: "Work and daily routines" },
                  { num: 7, name: "Partnerships", desc: "Relationships and marriage" },
                  { num: 8, name: "Transformation", desc: "Shared resources and rebirth" },
                  { num: 9, name: "Philosophy", desc: "Higher learning and travel" },
                  { num: 10, name: "Career", desc: "Public image and ambition" },
                  { num: 11, name: "Community", desc: "Friends and aspirations" },
                  { num: 12, name: "Subconscious", desc: "Spirituality and hidden matters" },
                ].map((house) => (
                  <div key={house.num} className="border border-apple-gray-4 rounded-apple-md p-4 hover:shadow-apple-sm transition-shadow duration-150">
                    <div className="text-[17px] leading-[24px] font-semibold text-apple-gray-1 mb-1">
                      {house.num}. {house.name} House
                    </div>
                    <div className="text-[13px] leading-[18px] text-apple-gray-2">{house.desc}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
