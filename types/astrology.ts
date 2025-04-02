// Zodiac signs
export type ZodiacSign =
  | "aries"
  | "taurus"
  | "gemini"
  | "cancer"
  | "leo"
  | "virgo"
  | "libra"
  | "scorpio"
  | "sagittarius"
  | "capricorn"
  | "aquarius"
  | "pisces"

// Celestial bodies
export type CelestialBody =
  | "sun"
  | "moon"
  | "mercury"
  | "venus"
  | "mars"
  | "jupiter"
  | "saturn"
  | "uranus"
  | "neptune"
  | "pluto"
  | "chiron"
  | "north_node"
  | "south_node"

// House systems
export type HouseSystem = "placidus" | "koch" | "whole_sign" | "equal_house" | "regiomontanus" | "campanus" | "porphyry"

// Aspect types
export type AspectType =
  | "conjunction"
  | "opposition"
  | "trine"
  | "square"
  | "sextile"
  | "quincunx"
  | "semi_sextile"
  | "semi_square"
  | "sesquiquadrate"
  | "quintile"
  | "biquintile"
  | "septile"
  | "novile"

// Planet position in the chart
export interface PlanetPosition {
  name: CelestialBody
  sign: ZodiacSign
  degree: number
  house: number
  retrograde: boolean
  aspectsToOtherPlanets?: PlanetAspect[]
}

// Aspect between planets
export interface PlanetAspect {
  aspect: AspectType
  planet: CelestialBody
  orb: number
  applying: boolean
}

// House in the chart
export interface House {
  number: number
  sign: ZodiacSign
  degree: number
  cusp: boolean
}

// Angle in the chart (Ascendant, Midheaven, etc.)
export interface Angle {
  sign: ZodiacSign
  degree: number
}

// Complete natal chart
export interface NatalChart {
  planets: PlanetPosition[]
  houses: House[]
  angles: {
    ascendant: Angle
    midheaven: Angle
    descendant: Angle
    imumCoeli: Angle
  }
  aspects: any[]
  birthDetails: {
    date: string
    time: string
    location: {
      latitude: number
      longitude: number
      name: string
    }
  }
}

// Interpretation of a chart element
export interface ChartElementInterpretation {
  title: string
  description: string
  keywords?: string[]
  strength?: number // 0-100
}

// Complete chart interpretation
export interface ChartInterpretation {
  overview: {
    title: string
    description: string
  }
  sunSign: ChartElementInterpretation
  moonSign: ChartElementInterpretation
  ascendantSign: ChartElementInterpretation
  planetPositions: Record<CelestialBody, ChartElementInterpretation>
  houses: Record<number, ChartElementInterpretation>
  aspects: ChartElementInterpretation[]
}

// Add a new interface for daily horoscope
export interface DailyHoroscope {
  sign: ZodiacSign
  date: string
  prediction: string
  lucky_number: string
  lucky_color: string
  mood: string
  compatibility: ZodiacSign
}

