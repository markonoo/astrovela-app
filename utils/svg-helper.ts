/**
 * Prepares an SVG for display by setting proper viewBox and removing fixed dimensions
 * @param svgContent The SVG content as a string
 * @returns The processed SVG content
 */
export function prepareSvgForDisplay(svgContent: string): string {
  try {
    const parser = new DOMParser()
    const svgDoc = parser.parseFromString(svgContent, "image/svg+xml")
    const svgElement = svgDoc.documentElement

    // Set viewBox to ensure the entire chart is visible
    // If the SVG already has a viewBox, use that, otherwise create one
    if (!svgElement.hasAttribute("viewBox")) {
      svgElement.setAttribute("viewBox", "0 0 800 800")
    }

    // Set preserveAspectRatio to ensure the SVG is centered
    svgElement.setAttribute("preserveAspectRatio", "xMidYMid meet")

    // Remove any width/height attributes to allow proper scaling
    svgElement.removeAttribute("width")
    svgElement.removeAttribute("height")

    return svgElement.outerHTML
  } catch (error) {
    console.error("Error processing SVG:", error)
    return svgContent
  }
}

