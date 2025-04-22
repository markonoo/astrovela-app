"use client"

import AuthForm from "@/components/AuthForm"

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded shadow">
        <h2 className="mt-2 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Please enter your credentials to log in.
        </p>
        <AuthForm />
      </div>
    </div>
  )
} 