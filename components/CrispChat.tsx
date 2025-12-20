"use client"

import { useEffect } from "react"

declare global {
  interface Window {
    $crisp: any[]
    CRISP_WEBSITE_ID: string
  }
}

export default function CrispChat() {
  useEffect(() => {
    // Set Crisp Website ID
    window.$crisp = []
    window.CRISP_WEBSITE_ID = "958abb51-98fe-4d1b-980d-401cf8716015"

    // Load Crisp script
    const script = document.createElement("script")
    script.src = "https://client.crisp.chat/l.js"
    script.async = true
    document.head.appendChild(script)

    return () => {
      // Cleanup script on unmount
      if (script.parentNode) {
        script.parentNode.removeChild(script)
      }
    }
  }, [])

  return null
}
