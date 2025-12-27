"use client"

import { useEffect, useMemo, useState } from "react"
import { useUser } from "@/contexts/UserContext"
import { AuraShell } from "@/components/aura/AuraShell"
import { AuraCard } from "@/components/aura/AuraCard"
import { PageHeader } from "@/components/aura/PageHeader"
import { PillBadge } from "@/components/aura/PillBadge"
import { Bot, Send } from "lucide-react"

interface Message {
  id: string
  role: "user" | "assistant"
  content: string
  timestamp: Date
}

export default function AskAIPage() {
  const { user } = useUser()
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content: "Hello! I'm your astrology AI assistant. Ask me anything about your chart, transits, or astrology in general.",
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const userInitial = useMemo(() => user?.email?.charAt(0).toUpperCase() ?? "U", [user?.email])

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

  return (
    <AuraShell title="Ask AI" activeTab="ask-ai">
      <div className="px-4 pb-24 flex flex-col h-[calc(100vh-120px)] space-y-4">
        <PageHeader
          title="Ask Aura Guide"
          subtitle="Quick answers from your personal coach"
          badge={<PillBadge tone="teal">Beta</PillBadge>}
        />

        <AuraCard title="Conversation" className="flex-1 flex flex-col">
          <div className="flex-1 overflow-y-auto space-y-4 mb-4 pr-1">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-3 ${message.role === "user" ? "justify-end" : "justify-start"}`}
              >
                {message.role === "assistant" && (
                  <div className="w-9 h-9 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center flex-shrink-0">
                    <Bot className="w-4 h-4" />
                  </div>
                )}
                <div
                  className={`rounded-2xl px-4 py-3 max-w-[80%] text-sm ${
                    message.role === "user"
                      ? "bg-[#0d9488] text-white"
                      : "bg-slate-100 text-slate-800"
                  }`}
                >
                  <p className="leading-6">{message.content}</p>
                </div>
                {message.role === "user" && (
                  <div className="w-9 h-9 rounded-full bg-slate-200 text-slate-700 flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-semibold">{userInitial}</span>
                  </div>
                )}
              </div>
            ))}
            {isTyping && (
              <div className="flex gap-3 justify-start">
                <div className="w-9 h-9 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center flex-shrink-0">
                  <Bot className="w-4 h-4" />
                </div>
                <div className="rounded-2xl px-4 py-3 bg-slate-100">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-2 h-2 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-2 h-2 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="sticky bottom-0 left-0 right-0 pt-2 bg-white">
            <div className="rounded-xl border border-slate-200 bg-white p-2 flex gap-2 shadow-sm">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Ask me anything about astrology..."
              className="flex-1 bg-transparent border-none outline-none text-sm text-slate-800 placeholder-slate-400 px-3"
            />
            <button
              onClick={handleSend}
              disabled={!input.trim() || isTyping}
              className="w-10 h-10 rounded-lg bg-[#0d9488] text-white flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
        </AuraCard>
      </div>
    </AuraShell>
  )
}
