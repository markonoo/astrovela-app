import { COLOR_SCHEMES, type ColorSchemeKey } from "./constants"

export function getColorSchemeDetails(colorScheme: string | ColorSchemeKey = "default") {
  const scheme = colorScheme as ColorSchemeKey
  return COLOR_SCHEMES[scheme] || COLOR_SCHEMES.default
}

