"use client"

import { useEffect, useState } from "react"
import { useUser } from "@/contexts/UserContext"
import { Paywall } from "@/components/companion/paywall"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Heart, Briefcase, Sparkles, Moon } from "lucide-react"
import { EntitlementData, WeeklyDataResponse, MonthlyDataResponse } from "@/types/api"
import { logger } from "@/utils/logger"

export default function WeeklyMonthlyPage() {
  const { user, loading } = useUser()
  const [weeklyData, setWeeklyData] = useState<WeeklyDataResponse | null>(null)
  const [monthlyData, setMonthlyData] = useState<MonthlyDataResponse | null>(null)
  const [entitlement, setEntitlement] = useState<EntitlementData | null>(null)
  const [loadingData, setLoadingData] = useState(true)

  useEffect(() => {
    if (!loading && user) {
      checkAccess()
    }
  }, [user, loading])

  const checkAccess = async () => {
    try {
      const response = await fetch("/api/companion/entitlement")
      if (response.ok) {
        const data = await response.json()
        if (data.hasAccess) {
          setEntitlement(data.entitlement)
          fetchData()
        } else {
          setLoadingData(false)
        }
      }
    } catch (error) {
      logger.error("Failed to check access", error)
      setLoadingData(false)
    }
  }

  const fetchData = async () => {
    try {
      const [weeklyRes, monthlyRes] = await Promise.all([
        fetch("/api/companion/weekly"),
        fetch("/api/companion/monthly"),
      ])
      if (weeklyRes.ok) {
        setWeeklyData(await weeklyRes.json())
      }
      if (monthlyRes.ok) {
        setMonthlyData(await monthlyRes.json())
      }
    } catch (error) {
      logger.error("Failed to fetch weekly/monthly data", error)
    } finally {
      setLoadingData(false)
    }
  }

  if (loading || loadingData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-apple-gray-5 to-apple-gray-6">
        <div className="animate-spin rounded-full h-12 w-12 border-2 border-apple-gray-4 border-t-apple-gray-1"></div>
      </div>
    )
  }

  if (!user || !entitlement?.hasAccess) {
    return <Paywall />
  }

  return (
    <div className="container mx-auto px-6 py-8 md:px-8 md:py-12 md:pt-32">
      <h1 className="text-[36px] leading-[44px] font-bold text-apple-gray-1 mb-10 animate-fadeIn">Outlook</h1>

      <Tabs defaultValue="weekly" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-8 rounded-apple-md bg-apple-gray-5 p-1">
          <TabsTrigger value="weekly" className="rounded-apple-md data-[state=active]:bg-white data-[state=active]:shadow-apple-sm transition-all duration-150">This Week</TabsTrigger>
          <TabsTrigger value="monthly" className="rounded-apple-md data-[state=active]:bg-white data-[state=active]:shadow-apple-sm transition-all duration-150">This Month</TabsTrigger>
        </TabsList>

        <TabsContent value="weekly">
          {weeklyData ? (
            <div className="space-y-4">
              <Card className="border-0 shadow-apple-md rounded-apple-lg bg-white hover:shadow-apple-lg transition-shadow duration-250 animate-spring">
                <CardHeader className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-t-apple-lg px-6 py-5">
                  <div className="flex items-center space-x-3">
                    <Heart className="w-5 h-5 text-pink-500" />
                    <CardTitle className="text-[20px] leading-[28px] font-semibold text-apple-gray-1">Emotions</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="px-6 py-6">
                  <p className="text-[17px] leading-[24px] text-apple-gray-2">{weeklyData.emotions}</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-apple-md rounded-apple-lg bg-white hover:shadow-apple-lg transition-shadow duration-250 animate-spring">
                <CardHeader className="bg-gradient-to-r from-purple-50 to-violet-50 rounded-t-apple-lg px-6 py-5">
                  <div className="flex items-center space-x-3">
                    <Sparkles className="w-5 h-5 text-purple-500" />
                    <CardTitle className="text-[20px] leading-[28px] font-semibold text-apple-gray-1">Relationships</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="px-6 py-6">
                  <p className="text-[17px] leading-[24px] text-apple-gray-2">{weeklyData.relationships}</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-apple-md rounded-apple-lg bg-white hover:shadow-apple-lg transition-shadow duration-250 animate-spring">
                <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-t-apple-lg px-6 py-5">
                  <div className="flex items-center space-x-3">
                    <Briefcase className="w-5 h-5 text-green-500" />
                    <CardTitle className="text-[20px] leading-[28px] font-semibold text-apple-gray-1">Money & Career</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="px-6 py-6">
                  <p className="text-[17px] leading-[24px] text-apple-gray-2">{weeklyData.moneyCareer}</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-apple-md rounded-apple-lg bg-white hover:shadow-apple-lg transition-shadow duration-250 animate-spring">
                <CardHeader className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-t-apple-lg px-6 py-5">
                  <div className="flex items-center space-x-3">
                    <Moon className="w-5 h-5 text-indigo-500" />
                    <CardTitle className="text-[20px] leading-[28px] font-semibold text-apple-gray-1">Spiritual Theme</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="px-6 py-6">
                  <p className="text-[17px] leading-[24px] text-apple-gray-2">{weeklyData.spiritualTheme}</p>
                </CardContent>
              </Card>
            </div>
          ) : (
            <div className="text-center text-[17px] leading-[24px] text-apple-gray-2 py-12">Loading weekly forecast...</div>
          )}
        </TabsContent>

               <TabsContent value="monthly">
                 {monthlyData ? (
                   <div className="space-y-6">
                     <Card className="border-0 shadow-apple-md rounded-apple-lg bg-white hover:shadow-apple-lg transition-shadow duration-250 animate-spring">
                       <CardHeader className="px-6 py-5">
                         <CardTitle className="text-[20px] leading-[28px] font-semibold text-apple-gray-1">Monthly Theme</CardTitle>
                       </CardHeader>
                       <CardContent className="px-6 py-6">
                         <p className="text-[18px] leading-[24px] font-semibold text-apple-gray-1 mb-3">{monthlyData.overview}</p>
                         <p className="text-[17px] leading-[24px] text-apple-gray-2">{monthlyData.overview}</p>
                       </CardContent>
                     </Card>

                     <Card className="border-0 shadow-apple-md rounded-apple-lg bg-white hover:shadow-apple-lg transition-shadow duration-250 animate-spring">
                       <CardHeader className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-t-apple-lg px-6 py-5">
                         <CardTitle className="text-[20px] leading-[28px] font-semibold text-apple-gray-1">Opportunities</CardTitle>
                       </CardHeader>
                       <CardContent className="px-6 py-6">
                         <ul className="space-y-3">
                           {monthlyData.focusAreas.map((area, i) => (
                             <li key={i} className="text-[15px] leading-[20px] text-apple-gray-2">• {area}</li>
                           ))}
                         </ul>
                       </CardContent>
                     </Card>

                     <Card className="border-0 shadow-apple-md rounded-apple-lg bg-white hover:shadow-apple-lg transition-shadow duration-250 animate-spring">
                       <CardHeader className="bg-gradient-to-r from-red-50 to-pink-50 rounded-t-apple-lg px-6 py-5">
                         <CardTitle className="text-[20px] leading-[28px] font-semibold text-apple-gray-1">Challenges</CardTitle>
                       </CardHeader>
                       <CardContent className="px-6 py-6">
                         <ul className="space-y-3">
                           {monthlyData.keyDates.map((date, i) => (
                             <li key={i} className="text-[15px] leading-[20px] text-apple-gray-2">• {date}</li>
                           ))}
                         </ul>
                       </CardContent>
                     </Card>
                   </div>
                 ) : (
                   <div className="text-center text-[17px] leading-[24px] text-apple-gray-2 py-12">Loading monthly forecast...</div>
                 )}
               </TabsContent>
      </Tabs>
    </div>
  )
}

