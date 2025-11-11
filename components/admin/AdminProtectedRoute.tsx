"use client"

import { useEffect, useState } from "react"
import { useRouter, usePathname } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Lock, Loader2 } from "lucide-react"

interface AdminProtectedRouteProps {
  children: React.ReactNode
}

export function AdminProtectedRoute({ children }: AdminProtectedRouteProps) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    checkAdminSession()
  }, [])

  const checkAdminSession = async () => {
    try {
      // Check localStorage for admin session
      const adminSession = localStorage.getItem("admin_session")
      const expiry = localStorage.getItem("admin_session_expiry")

      if (!adminSession || !expiry) {
        setIsAuthenticated(false)
        setLoading(false)
        return
      }

      // Check if session expired
      const expiryTime = parseInt(expiry, 10)
      if (Date.now() > expiryTime) {
        localStorage.removeItem("admin_session")
        localStorage.removeItem("admin_session_expiry")
        setIsAuthenticated(false)
        setLoading(false)
        return
      }

      // Verify session with server
      const response = await fetch("/api/admin/auth", {
        method: "GET",
        headers: {
          "x-admin-session": adminSession,
        },
      })

      if (response.ok) {
        setIsAuthenticated(true)
      } else {
        localStorage.removeItem("admin_session")
        localStorage.removeItem("admin_session_expiry")
        setIsAuthenticated(false)
      }
    } catch (error) {
      console.error("Admin session check error:", error)
      setIsAuthenticated(false)
    } finally {
      setLoading(false)
    }
  }

  const handleLogin = () => {
    router.push("/admin/login")
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <Loader2 className="w-8 h-8 animate-spin mx-auto mb-4 text-gray-600" />
          <p className="text-gray-600">Verifying admin access...</p>
        </div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
        <Card className="w-full max-w-md">
          <CardHeader>
            <div className="flex items-center justify-center mb-4">
              <div className="rounded-full bg-red-100 p-3">
                <Lock className="w-8 h-8 text-red-600" />
              </div>
            </div>
            <CardTitle className="text-2xl text-center">Admin Access Required</CardTitle>
            <CardDescription className="text-center">
              You need to be authenticated to access this page
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button onClick={handleLogin} className="w-full">
              Go to Admin Login
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return <>{children}</>
}

