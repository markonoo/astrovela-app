"use client"

import type React from "react"
import { useRef, useEffect } from "react"
import { useZora } from "@zoralabs/nft-hooks"
import { ethers } from "ethers"
import { colors } from "../../styles/colors"

interface PremiumBookCoverProps {
  bookContractAddress: string | undefined
  bookId: string | undefined
}

const PremiumBookCover: React.FC<PremiumBookCoverProps> = ({ bookContractAddress, bookId }) => {
  const svgContainerRef = useRef<HTMLDivElement>(null)
  const zora = useZora()

  useEffect(() => {
    const fetchSVG = async () => {
      if (!bookContractAddress || !bookId) return

      try {
        const provider = zora.provider
        const contract = new ethers.Contract(
          bookContractAddress,
          ["function generateSVG(uint256 tokenId) external view returns (string memory)"],
          provider,
        )

        const svgData = await contract.generateSVG(bookId)

        if (svgContainerRef.current) {
          svgContainerRef.current.innerHTML = svgData

          // Apply additional styling to the SVG element
          const svgElement = svgContainerRef.current.querySelector("svg")
          if (svgElement) {
            svgElement.style.display = "block"
            svgElement.style.margin = "0 auto"
            svgElement.style.maxWidth = "100%"
            svgElement.style.maxHeight = "100%"
            svgElement.style.position = "relative"
            svgElement.style.zIndex = "10"

            // Ensure viewBox is set for proper scaling
            if (!svgElement.hasAttribute("viewBox")) {
              const width = svgElement.getAttribute("width") || "800"
              const height = svgElement.getAttribute("height") || "800"
              svgElement.setAttribute("viewBox", `0 0 ${width} ${height}`)
            }

            // Ensure preserveAspectRatio is set for proper centering
            svgElement.setAttribute("preserveAspectRatio", "xMidYMid meet")
          }
        }
      } catch (error) {
        console.error("Failed to fetch SVG:", error)
        if (svgContainerRef.current) {
          svgContainerRef.current.innerHTML = `<p>Error loading cover.</p>`
        }
      }
    }

    fetchSVG()
  }, [bookContractAddress, bookId, zora.provider])

  return (
    <div
      ref={svgContainerRef}
      className="w-full h-full flex items-center justify-center"
      style={{
        maxHeight: "350px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        transform: "scale(1.05)",
        color: colors.textColor,
        position: "relative",
        zIndex: 10,
        overflow: "visible", // Add this to ensure the SVG isn't clipped
      }}
    />
  )
}

export default PremiumBookCover

