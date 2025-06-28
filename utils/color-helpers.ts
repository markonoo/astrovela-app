import { COLOR_SCHEMES, type ColorSchemeKey } from "./constants"

export function getColorSchemeDetails(colorScheme: string | ColorSchemeKey = "green") {
  const scheme = colorScheme as ColorSchemeKey
  return COLOR_SCHEMES[scheme] || COLOR_SCHEMES.green
}

