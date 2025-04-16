// Update the COLOR_SCHEMES to match the example book cover colors

export type ColorSchemeKey = "black" | "navy" | "green" | "burgundy" | "pink"

export const COLOR_SCHEMES = {
  black: {
    name: "Black",
    bgGradient: "linear-gradient(to bottom right, #0A0A0A 0%, #121212 50%, #1A1A1A 100%)",
    overlayOpacity: 0.85,
    textColor: "#FFD700",
    accentColor: "#FFD700",
  },
  navy: {
    name: "Navy",
    bgGradient: "linear-gradient(to bottom right, #0B1339 0%, #1B1147 50%, #2C0B39 100%)",
    overlayOpacity: 0.85,
    textColor: "#FFD700",
    accentColor: "#FFD700",
  },
  green: {
    name: "Green",
    bgGradient: "linear-gradient(to bottom right, #0F2E1A 0%, #1A3A2A 50%, #25463A 100%)",
    overlayOpacity: 0.85,
    textColor: "#FFD700",
    accentColor: "#FFD700",
  },
  burgundy: {
    name: "Burgundy",
    bgGradient: "linear-gradient(to bottom right, #3A0F1F 0%, #4A1526 50%, #5A1B2D 100%)",
    overlayOpacity: 0.85,
    textColor: "#FFD700",
    accentColor: "#FFD700",
  },
  pink: {
    name: "Pink",
    bgGradient: "linear-gradient(to bottom right, #4A1B35 0%, #5A2642 50%, #6A314F 100%)",
    overlayOpacity: 0.85,
    textColor: "#FFD700",
    accentColor: "#FFD700",
  },
}

