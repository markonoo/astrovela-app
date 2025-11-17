"use client"

import { useEffect, useState } from "react"
import { useUser } from "@/contexts/UserContext"
import { Paywall } from "@/components/aura/paywall"
import { AuraShell } from "@/components/aura/AuraShell"
import { Bot, Send } from "lucide-react"
import { EntitlementData } from "@/types/api"
import { logger } from "@/utils/logger"

interface Message {
  id: string
  role: "user" | "assistant"
  content: string
  timestamp: Date
}

export default function AskAIPage() {
  const { user, loading } = useUser()
  const [entitlement, setEntitlement] = useState<EntitlementData | null>(null)
  const [loadingData, setLoadingData] = useState(true)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content: "Hello! I'm your astrology AI companion. Ask me anything about your chart, transits, or astrology in general.",
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)

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
        } else {
          setLoadingData(false)
        }
      }
    } catch (error) {
      logger.error("Failed to check access", error)
      setLoadingData(false)
    }
  }

  const handleSend = async () => {
    if (!input.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsTyping(true)

    // Simulate AI response (replace with actual API call)
    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: "I understand your question. This is a placeholder response. In the full implementation, I'll analyze your chart and provide personalized insights based on your birth data and current transits.",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, aiMessage])
      setIsTyping(false)
    }, 1500)
  }

  if (loading || loadingData) {
    return (
      <AuraShell title="Ask AI" activeTab="ask-ai">
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-2 border-white/20 border-t-white"></div>
        </div>
      </AuraShell>
    )
  }

  if (!user || !entitlement) {
    return <Paywall />
  }

  return (
    <AuraShell title="Ask AI" activeTab="ask-ai">
      <div className="px-4 mt-6 mb-32 flex flex-col h-[calc(100vh-120px)]">
        {/* Messages */}
        <div className="flex-1 overflow-y-auto space-y-4 mb-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex gap-3 ${message.role === "user" ? "justify-end" : "justify-start"}`}
            >
              {message.role === "assistant" && (
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#7a5bff] to-[#ff4de1] flex items-center justify-center flex-shrink-0">
                  <Bot className="w-4 h-4 text-white" />
                </div>
              )}
              <div
                className={`rounded-2xl px-4 py-3 max-w-[80%] ${
                  message.role === "user"
                    ? "bg-gradient-to-br from-[#7a5bff] to-[#ff4de1] text-white"
                    : "bg-white/6 backdrop-blur-2xl text-white/80"
                }`}
              >
                <p className="text-[15px] leading-[20px]">{message.content}</p>
              </div>
              {message.role === "user" && (
                <div className="w-8 h-8 rounded-full bg-white/8 flex items-center justify-center flex-shrink-0">
                  <span className="text-[14px] text-white">
                    {user.email ? user.email.charAt(0).toUpperCase() : "U"}
                  </span>
                </div>
              )}
            </div>
          ))}
          {isTyping && (
            <div className="flex gap-3 justify-start">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#7a5bff] to-[#ff4de1] flex items-center justify-center flex-shrink-0">
                <Bot className="w-4 h-4 text-white" />
              </div>
              <div className="rounded-2xl px-4 py-3 bg-white/6 backdrop-blur-2xl">
                <div className="flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-white/60 animate-bounce" style={{ animationDelay: "0ms" }} />
                  <div className="w-2 h-2 rounded-full bg-white/60 animate-bounce" style={{ animationDelay: "150ms" }} />
                  <div className="w-2 h-2 rounded-full bg-white/60 animate-bounce" style={{ animationDelay: "300ms" }} />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Input Bar */}
        <div className="fixed bottom-20 left-0 right-0 px-4 safe-area-inset-bottom">
          <div className="rounded-2xl bg-white/6 backdrop-blur-2xl shadow-[0_20px_40px_rgba(0,0,0,0.7)] p-2 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Ask me anything about astrology..."
              className="flex-1 bg-transparent border-none outline-none text-white placeholder-white/40 text-[15px] leading-[20px] px-3"
            />
            <button
              onClick={handleSend}
              disabled={!input.trim() || isTyping}
              className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#7a5bff] to-[#ff4de1] flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>
      </div>
    </AuraShell>
  )
}


