/**
 * CSS sanitizer to prevent XSS attacks in dynamically generated styles
 * @param cssContent The CSS content to sanitize
 * @returns Sanitized CSS content safe for injection
 */
export function sanitizeCss(cssContent: string): string {
  if (!cssContent || typeof cssContent !== 'string') {
    return ''
  }

  // Remove potentially dangerous CSS content
  const dangerousPatterns = [
    // JavaScript execution
    /javascript:/gi,
    /expression\s*\(/gi,
    /eval\s*\(/gi,
    /url\s*\(\s*javascript:/gi,
    /vbscript:/gi,
    /@import/gi,
    
    // Data URLs that could contain scripts
    /url\s*\(\s*data:text\/html/gi,
    /url\s*\(\s*data:.*script/gi,
    
    // Behavior and binding (IE specific)
    /behavior\s*:/gi,
    /binding\s*:/gi,
    /-moz-binding/gi,
    
    // Other potentially dangerous constructs
    /expression/gi,
    /mocha:/gi,
    /livescript:/gi
  ]

  let sanitizedCss = cssContent

  // Remove dangerous patterns
  dangerousPatterns.forEach(pattern => {
    sanitizedCss = sanitizedCss.replace(pattern, '')
  })

  // Validate that only safe CSS properties and values remain
  const safeCssPattern = /^[\s\w\-:#.,;()\[\]'"\/\s%]*$/
  if (!safeCssPattern.test(sanitizedCss)) {
    console.warn('Potentially unsafe CSS content detected and removed')
    return ''
  }

  return sanitizedCss
}

/**
 * Sanitizes CSS color values specifically
 * @param color The color value to sanitize
 * @returns Sanitized color value or empty string if invalid
 */
export function sanitizeCssColor(color: string): string {
  if (!color || typeof color !== 'string') {
    return ''
  }

  // Allow common color formats: hex, rgb, rgba, hsl, hsla, named colors
  const colorPattern = /^(#[0-9a-fA-F]{3,8}|rgb\(\s*\d{1,3}\s*,\s*\d{1,3}\s*,\s*\d{1,3}\s*\)|rgba\(\s*\d{1,3}\s*,\s*\d{1,3}\s*,\s*\d{1,3}\s*,\s*[\d.]+\s*\)|hsl\(\s*\d{1,3}\s*,\s*\d{1,3}%\s*,\s*\d{1,3}%\s*\)|hsla\(\s*\d{1,3}\s*,\s*\d{1,3}%\s*,\s*\d{1,3}%\s*,\s*[\d.]+\s*\)|[a-zA-Z]+)$/

  if (colorPattern.test(color.trim())) {
    return color.trim()
  }

  console.warn(`Invalid color value detected: ${color}`)
  return ''
}

/**
 * Sanitizes CSS identifiers (IDs, class names, custom property names)
 * @param identifier The CSS identifier to sanitize
 * @returns Sanitized identifier safe for CSS
 */
export function sanitizeCssIdentifier(identifier: string): string {
  if (!identifier || typeof identifier !== 'string') {
    return ''
  }

  // Remove any characters that aren't alphanumeric, hyphens, or underscores
  return identifier.replace(/[^a-zA-Z0-9\-_]/g, '')
} 