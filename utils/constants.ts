// Update the COLOR_SCHEMES to match the example book cover colors

export type ColorSchemeKey = "default" | "black" | "navy" | "green" | "burgundy" | "pink"

export const COLOR_SCHEMES = {
  default: {
    name: "Default",
    bgColor: "#2d2a4a", // Purple
    textColor: "#ffffff",
    accentColor: "#9d8cff",
  },
  black: {
    name: "Black",
    bgColor: "#121212",
    textColor: "#f0e8da",
    accentColor: "#f7c800",
  },
  navy: {
    name: "Navy",
    bgColor: "#1a2a42",
    textColor: "#f0e8da",
    accentColor: "#64b5f6",
  },
  green: {
    name: "Green",
    bgColor: "#1a3a2a",
    textColor: "#f0e8da",
    accentColor: "#66bb6a",
  },
  burgundy: {
    name: "Burgundy",
    bgColor: "#93384b",
    textColor: "#f0e8da",
    accentColor: "#f7c800",
  },
  pink: {
    name: "Pink",
    bgColor: "#f4c1d7",
    textColor: "#292425",
    accentColor: "#93384b",
  },
}

