"use client"
import React from "react"


type ReportViewportProps = {
  children: React.ReactNode
}

export function ReportViewport({ children }: ReportViewportProps) {
  const [scale, setScale] = React.useState(1)

  const decrease = () => setScale(s => Math.max(0.6, Math.round((s - 0.1) * 10) / 10))
  const increase = () => setScale(s => Math.min(2, Math.round((s + 0.1) * 10) / 10))
  const reset = () => setScale(1)
  const fitWidth = () => {
    const viewport = document.querySelector(".a4-viewport") as HTMLElement | null
    if (!viewport) return
    const vw = viewport.clientWidth - 24 /* padding approx */
    const target = vw / 794
    setScale(Math.max(0.6, Math.min(2, Number(target.toFixed(2)))))
  }

  return (
    <div>
      {/* Apple-style Modern Toolbar */}
      <div className="sticky top-0 z-40 hidden print:!hidden md:flex items-center justify-between gap-3 px-4 py-2.5 bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-sm">
        {/* Left: Edit Button + Zoom Controls */}
        <div className="flex items-center gap-2">
          {/* Edit button placeholder - will be rendered here by CoverDataEditor */}
          <div id="edit-button-container" className="flex items-center"></div>
          
          {/* Divider */}
          <div className="w-px h-6 bg-gray-200 mx-1"></div>
          
          {/* Zoom Controls */}
          <div className="flex items-center gap-1.5 bg-gray-50 rounded-lg p-1 border border-gray-200">
            <button 
              onClick={decrease} 
              className="w-7 h-7 flex items-center justify-center rounded hover:bg-white transition-colors text-gray-700 font-medium text-sm"
            >
              −
            </button>
            <div className="min-w-12 text-center text-xs font-medium text-gray-600">
              {Math.round(scale * 100)}%
            </div>
            <button 
              onClick={increase} 
              className="w-7 h-7 flex items-center justify-center rounded hover:bg-white transition-colors text-gray-700 font-medium text-sm"
            >
              +
            </button>
          </div>
          
          <button 
            onClick={reset} 
            className="px-3 py-1.5 text-xs font-medium text-gray-700 hover:bg-gray-50 rounded-lg border border-gray-200 transition-colors"
          >
            Reset
          </button>
          <button 
            onClick={fitWidth} 
            className="px-3 py-1.5 text-xs font-medium text-gray-700 hover:bg-gray-50 rounded-lg border border-gray-200 transition-colors"
          >
            Fit Width
          </button>
        </div>
        
        {/* Right: Download & Print Buttons */}
        <div id="toolbar-buttons" className="flex items-center gap-2"></div>
      </div>
      
      <div className="a4-viewport" style={{ transform: `scale(${scale})`, transformOrigin: "top center" }}>
        {children}
      </div>
    </div>
  )
}

export default ReportViewport


