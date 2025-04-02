/**
 * Sanitizes SVG content to fix common issues like invalid attributes
 * @param svgContent The SVG content to sanitize
 * @returns Sanitized SVG content
 */
export function sanitizeSvg(svgContent: string): string {
  if (typeof window === "undefined") {
    // Server-side - return as is since we can't use DOMParser
    return svgContent
  }

  try {
    const parser = new DOMParser()
    const svgDoc = parser.parseFromString(svgContent, "image/svg+xml")

    // Check for parsing errors
    const parserError = svgDoc.querySelector("parsererror")
    if (parserError) {
      console.error("SVG parsing error:", parserError.textContent)
      return svgContent // Return original if parsing failed
    }

    const svgElement = svgDoc.documentElement

    // Fix invalid attributes - specifically the "hidden" attribute
    const elementsWithHidden = svgDoc.querySelectorAll("[hidden]")
    elementsWithHidden.forEach((el) => {
      const hiddenValue = el.getAttribute("hidden")
      if (hiddenValue === "" || hiddenValue === null) {
        // Set a valid value for the hidden attribute
        el.setAttribute("hidden", "true")
      }
    })

    // Ensure viewBox is set
    if (!svgElement.hasAttribute("viewBox")) {
      // Try to get dimensions from width/height
      const width = svgElement.getAttribute("width") || "800"
      const height = svgElement.getAttribute("height") || "800"
      svgElement.setAttribute("viewBox", `0 0 ${width} ${height}`)
    }

    // Ensure preserveAspectRatio is set
    if (!svgElement.hasAttribute("preserveAspectRatio")) {
      svgElement.setAttribute("preserveAspectRatio", "xMidYMid meet")
    }

    return svgElement.outerHTML
  } catch (error) {
    console.error("Error sanitizing SVG:", error)
    return svgContent // Return original if an error occurred
  }
}

