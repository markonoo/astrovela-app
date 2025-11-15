"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertTriangle, Shield } from "lucide-react"

interface AgeVerificationProps {
  onVerified: (age: number) => void
  onRejected: () => void
}

export function AgeVerification({ onVerified, onRejected }: AgeVerificationProps) {
  const [birthYear, setBirthYear] = useState("")
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    if (!birthYear) {
      setError("Please enter your birth year")
      return
    }

    const year = parseInt(birthYear)
    const currentYear = new Date().getFullYear()
    const age = currentYear - year

    if (isNaN(year) || year < 1900 || year > currentYear) {
      setError("Please enter a valid birth year")
      return
    }

    if (age < 13) {
      setError("You must be at least 13 years old to use this service")
      onRejected()
      return
    }

    if (age < 16) {
      // Require parental consent for 13-15
      setError("Users aged 13-15 require parental consent. Please contact support.")
      onRejected()
      return
    }

    // Age verified (16+)
    onVerified(age)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100 p-6">
      <Card className="w-full max-w-md">
        <CardHeader>
          <div className="flex items-center justify-center mb-4">
            <div className="rounded-full bg-blue-100 p-3">
              <Shield className="w-8 h-8 text-blue-600" />
            </div>
          </div>
          <CardTitle className="text-2xl text-center">Age Verification</CardTitle>
          <CardDescription className="text-center">
            Please verify your age to continue
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Alert className="mb-4">
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>Age Requirement</AlertTitle>
            <AlertDescription>
              You must be at least 16 years old to use this service. 
              Users aged 13-15 require parental consent.
            </AlertDescription>
          </Alert>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="birthYear">What year were you born?</Label>
              <Input
                id="birthYear"
                type="number"
                min="1900"
                max={new Date().getFullYear()}
                value={birthYear}
                onChange={(e) => setBirthYear(e.target.value)}
                placeholder="YYYY"
                required
                className="w-full"
              />
            </div>

            {error && (
              <Alert variant="destructive">
                <AlertTriangle className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            <Button type="submit" className="w-full">
              Verify Age
            </Button>
          </form>

          <p className="text-xs text-gray-500 text-center mt-4">
            We verify age to comply with COPPA and GDPR regulations.
            Your birth year is not stored, only your age verification status.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}






