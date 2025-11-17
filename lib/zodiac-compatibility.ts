/**
 * Zodiac compatibility data
 * Simplified compatibility matrix for love compatibility feature
 */

export const compatibilityData: Record<string, Record<string, {
  score: number
  overview: string
  greenFlags: string[]
  redFlags: string[]
  dateIdeas: string[]
}>> = {
  aries: {
    aries: {
      score: 7,
      overview: "Two fire signs create an exciting but potentially volatile match.",
      greenFlags: ["Shared passion and energy", "Mutual respect for independence", "Adventurous together"],
      redFlags: ["Both can be impulsive", "Competitive nature may clash", "Need to manage tempers"],
      dateIdeas: ["Adventure sports", "Competitive games", "Active outdoor activities"],
    },
    leo: {
      score: 9,
      overview: "Fire meets fire - passionate and dynamic partnership.",
      greenFlags: ["Mutual admiration", "Shared enthusiasm", "Great chemistry"],
      redFlags: ["Both need attention", "Ego clashes possible", "Need to share spotlight"],
      dateIdeas: ["Theater or concerts", "Fine dining", "Social events"],
    },
    sagittarius: {
      score: 8,
      overview: "Adventurous spirits unite for exciting journeys together.",
      greenFlags: ["Love of adventure", "Mutual freedom", "Optimistic outlook"],
      redFlags: ["Both can be restless", "Commitment may be slow", "Need for space"],
      dateIdeas: ["Travel planning", "Outdoor adventures", "Learning new things"],
    },
    libra: {
      score: 6,
      overview: "Fire and air create sparks, but need balance.",
      greenFlags: ["Libra brings harmony", "Aries brings action", "Complementary energies"],
      redFlags: ["Different paces", "Aries may be too direct", "Libra may be indecisive"],
      dateIdeas: ["Art galleries", "Balanced activities", "Social gatherings"],
    },
  },
  // Add more combinations as needed - this is a simplified version
  // In production, you'd have all 12x12 combinations
}

// Fallback compatibility generator
export function getCompatibility(sign1: string, sign2: string) {
  const compat = compatibilityData[sign1]?.[sign2]
  if (compat) return compat

  // Generate basic compatibility if not in database
  return {
    score: 6,
    overview: `${sign1} and ${sign2} have potential for a meaningful connection. Understanding and communication are key.`,
    greenFlags: ["Mutual respect", "Open communication", "Shared values"],
    redFlags: ["Different communication styles", "Need for compromise", "Patience required"],
    dateIdeas: ["Coffee dates", "Nature walks", "Cultural events"],
  }
}












