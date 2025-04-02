type ZodiacSign =
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

export function getZodiacSign(month: number, day: number): ZodiacSign {
  // Convert string inputs to numbers if needed
  const m = typeof month === "string" ? Number.parseInt(month, 10) : month
  const d = typeof day === "string" ? Number.parseInt(day, 10) : day

  if ((m === 3 && d >= 21) || (m === 4 && d <= 19)) return "aries"
  if ((m === 4 && d >= 20) || (m === 5 && d <= 20)) return "taurus"
  if ((m === 5 && d >= 21) || (m === 6 && d <= 20)) return "gemini"
  if ((m === 6 && d >= 21) || (m === 7 && d <= 22)) return "cancer"
  if ((m === 7 && d >= 23) || (m === 8 && d <= 22)) return "leo"
  if ((m === 8 && d >= 23) || (m === 9 && d <= 22)) return "virgo"
  if ((m === 9 && d >= 23) || (m === 10 && d <= 22)) return "libra"
  if ((m === 10 && d >= 23) || (m === 11 && d <= 21)) return "scorpio"
  if ((m === 11 && d >= 22) || (m === 12 && d <= 21)) return "sagittarius"
  if ((m === 12 && d >= 22) || (m === 1 && d <= 19)) return "capricorn"
  if ((m === 1 && d >= 20) || (m === 2 && d <= 18)) return "aquarius"
  return "pisces" // (m === 2 && d >= 19) || (m === 3 && d <= 20)
}

export const zodiacDescriptions: Record<ZodiacSign, { title: string; description: string }> = {
  aries: {
    title: "Aries",
    description:
      "As a true Aries, you are brave and ambitious, with a dynamic energy that inspires others and a natural leadership ability that drives you to take initiative and conquer new challenges.",
  },
  taurus: {
    title: "Taurus",
    description:
      "As a true Taurus, you are reliable and patient, with a grounded nature that brings stability to those around you and a deep appreciation for beauty and comfort in all aspects of life.",
  },
  gemini: {
    title: "Gemini",
    description:
      "As a true Gemini, you are versatile and curious, with a quick wit that makes you the life of any conversation and an adaptable mind that thrives on learning and sharing ideas.",
  },
  cancer: {
    title: "Cancer",
    description:
      "As a true Cancer, you are nurturing and intuitive, with a deep emotional intelligence that allows you to connect with others and a protective nature that makes people feel safe in your presence.",
  },
  leo: {
    title: "Leo",
    description:
      "As a true Leo, you are generous and warm-hearted, with a natural charisma that draws people to you and a creative spirit that brings joy and inspiration to everything you touch.",
  },
  virgo: {
    title: "Virgo",
    description:
      "As a true Virgo, you are analytical and meticulous, and with a strong attention to detail, you bring order and efficiency to everything you do.",
  },
  libra: {
    title: "Libra",
    description:
      "As a true Libra, you are diplomatic and fair-minded, with a natural sense of harmony that helps you balance relationships and a refined appreciation for beauty and justice in the world.",
  },
  scorpio: {
    title: "Scorpio",
    description:
      "As a true Scorpio, you are passionate and determined, with an emotional depth that gives you powerful insights and a resourceful nature that helps you transform challenges into opportunities.",
  },
  sagittarius: {
    title: "Sagittarius",
    description:
      "As a true Sagittarius, you are optimistic and freedom-loving, with an adventurous spirit that seeks knowledge and truth and an honest approach that inspires others to live authentically.",
  },
  capricorn: {
    title: "Capricorn",
    description:
      "As a true Capricorn, you are responsible and disciplined, with a practical approach to achieving your ambitious goals and a patient persistence that ensures long-term success.",
  },
  aquarius: {
    title: "Aquarius",
    description:
      "As a true Aquarius, you are innovative and humanitarian, with a progressive vision that sees possibilities others miss and an independent mind that isn't afraid to challenge conventions.",
  },
  pisces: {
    title: "Pisces",
    description:
      "As a true Pisces, you are compassionate and artistic, with a gentle intuition that connects you deeply to others and a rich imagination that allows you to see beyond the ordinary.",
  },
}
export type { ZodiacSign }

