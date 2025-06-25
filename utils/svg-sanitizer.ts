/**
 * Enhanced SVG sanitizer to prevent XSS attacks
 * @param svgContent The SVG content to sanitize
 * @returns Sanitized SVG content safe for rendering
 */
export function sanitizeSvg(svgContent: string): string {
  if (typeof window === "undefined" || !svgContent) {
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
      return "" // Return empty string if parsing failed
    }

    const svgElement = svgDoc.documentElement

    // Remove potentially dangerous elements
    const dangerousElements = [
      'script', 'object', 'embed', 'iframe', 'link', 'meta', 
      'style', 'foreignObject', 'animation', 'animateTransform'
    ]
    
    dangerousElements.forEach(tagName => {
      const elements = svgDoc.querySelectorAll(tagName)
      elements.forEach(el => el.remove())
    })

    // Remove dangerous attributes
    const dangerousAttributes = [
      'onload', 'onerror', 'onclick', 'onmouseover', 'onmouseout',
      'onanimationend', 'onanimationiteration', 'onanimationstart',
      'ontransitionend', 'href', 'xlink:href'
    ]

    const allElements = svgDoc.querySelectorAll('*')
    allElements.forEach(el => {
      dangerousAttributes.forEach(attr => {
        if (el.hasAttribute(attr)) {
          el.removeAttribute(attr)
        }
      })
    })

    // Fix invalid attributes - specifically the "hidden" attribute
    const elementsWithHidden = svgDoc.querySelectorAll("[hidden]")
    elementsWithHidden.forEach((el) => {
      el.removeAttribute("hidden")
      el.setAttribute("visibility", "hidden")
    })

    // Ensure proper SVG structure
    if (!svgElement.hasAttribute("viewBox")) {
      const width = svgElement.getAttribute("width") || "800"
      const height = svgElement.getAttribute("height") || "800"
      svgElement.setAttribute("viewBox", `0 0 ${width} ${height}`)
    }

    if (!svgElement.hasAttribute("preserveAspectRatio")) {
      svgElement.setAttribute("preserveAspectRatio", "xMidYMid meet")
    }

    // Ensure it's actually an SVG element
    if (svgElement.tagName.toLowerCase() !== 'svg') {
      throw new Error('Invalid SVG: root element is not an SVG tag')
    }

    return svgElement.outerHTML
  } catch (error) {
    console.error("Error sanitizing SVG:", error)
    return "" // Return empty string if an error occurred to prevent XSS
  }
}

/**
 * Validates that SVG content is safe before sanitization
 */
export function validateSvg(svgContent: string): boolean {
  if (!svgContent || typeof svgContent !== 'string') {
    return false
  }

  // Basic checks for obviously malicious content
  const dangerousPatterns = [
    /<script/i,
    /javascript:/i,
    /data:text\/html/i,
    /vbscript:/i,
    /on\w+\s*=/i,
    /<iframe/i,
    /<object/i,
    /<embed/i
  ]

  return !dangerousPatterns.some(pattern => pattern.test(svgContent))
}

