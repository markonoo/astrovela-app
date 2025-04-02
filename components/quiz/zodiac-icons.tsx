import type { ZodiacSign } from "@/utils/zodiac"

interface ZodiacIconProps {
  sign: ZodiacSign
  className?: string
}

export function ZodiacIcon({ sign, className = "w-32 h-32" }: ZodiacIconProps) {
  const iconColor = "text-yellow-300"

  const icons: Record<ZodiacSign, JSX.Element> = {
    aries: (
      <svg className={`${className} ${iconColor}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12 2L12 19M12 19C10 19 6 17.5 6 13M12 19C14 19 18 17.5 18 13"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    taurus: (
      <svg className={`${className} ${iconColor}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12 8C16.4183 8 20 11.5817 20 16V22M12 8C7.58172 8 4 11.5817 4 16V22M12 8V2"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    gemini: (
      <svg className={`${className} ${iconColor}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M8 2V22M16 2V22M5 12H11M13 12H19"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    cancer: (
      <svg className={`${className} ${iconColor}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5 3C5 3 7 5 7 8C7 11 5 13 5 13"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M19 3C19 3 17 5 17 8C17 11 19 13 19 13"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    leo: (
      <svg className={`${className} ${iconColor}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12 8C12 8 12 2 16 2C20 2 20 8 20 8M12 8C12 8 12 14 8 14C4 14 4 8 4 8M12 8V22"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    virgo: (
      <svg className={`${className} ${iconColor}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M10 4V20M10 16C10 18.2091 8.20914 20 6 20C3.79086 20 2 18.2091 2 16V10C2 7.79086 3.79086 6 6 6C8.20914 6 10 7.79086 10 10M14 4V20M14 16C14 18.2091 15.7909 20 18 20C20.2091 20 22 18.2091 22 16V10C22 7.79086 20.2091 6 18 6C15.7909 6 14 7.79086 14 10"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    libra: (
      <svg className={`${className} ${iconColor}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M4 12H20M4 19H20M8 5C8 5 8 9 12 9C16 9 16 5 16 5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    scorpio: (
      <svg className={`${className} ${iconColor}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M4 12H14M14 12C14 12 14 6 18 6C22 6 22 12 22 12M14 12V20M18 16L20 18L22 16"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    sagittarius: (
      <svg className={`${className} ${iconColor}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M4 20L20 4M20 4H10M20 4V14M8 8L16 16"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    capricorn: (
      <svg className={`${className} ${iconColor}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M4 4V14C4 17.3137 6.68629 20 10 20C13.3137 20 16 17.3137 16 14M16 14V4M16 14C16 17.3137 18.6863 20 22 20"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    aquarius: (
      <svg className={`${className} ${iconColor}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M3 10C5 10 5 14 7 14C9 14 9 10 11 10C13 10 13 14 15 14C17 14 17 10 19 10C21 10 21 14 23 14M3 6C5 6 5 10 7 10C9 10 9 6 11 6C13 6 13 10 15 10C17 10 17 6 19 6C21 6 21 10 23 10M3 14C5 14 5 18 7 18C9 18 9 14 11 14C13 14 13 18 15 18C17 18 17 14 19 14C21 14 21 18 23 18"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    pisces: (
      <svg className={`${className} ${iconColor}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M4 12H20M8 4C8 4 8 12 8 20M16 4C16 4 16 12 16 20"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  }

  return icons[sign] || null
}

