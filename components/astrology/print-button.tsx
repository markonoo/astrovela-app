"use client"
import React, { useState, useEffect } from "react"
import { Download, Printer, X, Info } from "lucide-react"
import { createPortal } from "react-dom"

export default function PrintButton() {
  const [isDownloading, setIsDownloading] = useState(false)
  const [showInstructions, setShowInstructions] = useState(false)
  const [toolbarContainer, setToolbarContainer] = useState<HTMLElement | null>(null)

  // Find the toolbar container on mount
  useEffect(() => {
    const container = document.getElementById("toolbar-buttons")
    setToolbarContainer(container)
  }, [])

  const handleDownloadPDF = () => {
    setIsDownloading(true)
    
    // Show instructions modal
    setShowInstructions(true)
    
    // Trigger browser print dialog with PDF save option
    // Small delay to let user see the instructions
    setTimeout(() => {
      window.print()
    }, 100)
    
    // Reset state after dialog opens
    setTimeout(() => {
      setIsDownloading(false)
    }, 1000)
  }

  const handleQuickPrint = () => {
    window.print()
  }

  const buttons = (
    <>
      {/* Download PDF Button (Primary) - Apple Style */}
      <button
        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-lg bg-amber-500 text-white hover:bg-amber-600 transition-all shadow-sm font-medium text-sm"
        onClick={handleDownloadPDF}
        disabled={isDownloading}
        title="Download as PDF"
      >
        {isDownloading ? (
          <>
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
            <span>Opening...</span>
          </>
        ) : (
          <>
            <Download className="w-4 h-4" />
            <span>Download</span>
          </>
        )}
      </button>

      {/* Print Button (Secondary) - Apple Style */}
      <button
        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white hover:bg-gray-50 border border-gray-200 transition-all text-gray-700 text-sm font-medium"
        onClick={handleQuickPrint}
        title="Print Document"
      >
        <Printer className="w-4 h-4" />
        <span>Print</span>
      </button>
    </>
  )

  return (
    <>
      {/* Portal buttons to toolbar if container exists, otherwise render in original location */}
      {toolbarContainer ? (
        createPortal(buttons, toolbarContainer)
      ) : (
        <div className="hidden print:hidden md:flex items-center gap-2 fixed right-4 top-4 z-40">
        {buttons}
      </div>
      )}

      {/* Instructions Modal */}
      {showInstructions && (
        <div className="print:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-2xl max-w-md w-full p-6 relative animate-in fade-in zoom-in duration-200">
            {/* Close button */}
            <button
              onClick={() => setShowInstructions(false)}
              className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Content */}
            <div className="flex items-start gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                <Info className="w-5 h-5 text-amber-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  Save as PDF
                </h3>
                <p className="text-sm text-gray-600">
                  The print dialog has opened
                </p>
              </div>
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-2">
                <div className="w-6 h-6 rounded-full bg-amber-600 text-white flex items-center justify-center text-xs font-bold flex-shrink-0">
                  1
                </div>
                <p className="text-sm text-gray-700 pt-0.5">
                  In the print dialog, select <strong>"Save as PDF"</strong> as your printer/destination
                </p>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-6 h-6 rounded-full bg-amber-600 text-white flex items-center justify-center text-xs font-bold flex-shrink-0">
                  2
                </div>
                <p className="text-sm text-gray-700 pt-0.5">
                  Click <strong>"Save"</strong> or <strong>"Print"</strong> button
                </p>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-6 h-6 rounded-full bg-amber-600 text-white flex items-center justify-center text-xs font-bold flex-shrink-0">
                  3
                </div>
                <p className="text-sm text-gray-700 pt-0.5">
                  Choose where to save your PDF file
                </p>
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
              <p className="text-xs text-amber-800">
                <strong>💡 Tip:</strong> The PDF will include all 196 pages of your personalized astrology document.
              </p>
            </div>

            <button
              onClick={() => setShowInstructions(false)}
              className="mt-4 w-full px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors font-medium"
            >
              Got it!
            </button>
          </div>
        </div>
      )}
    </>
  )
}

