import React from 'react';

export type ZodiacSign = 
  | 'aquarius' | 'pisces' | 'aries' | 'taurus' 
  | 'gemini' | 'cancer' | 'leo' | 'virgo'
  | 'libra' | 'scorpio' | 'capricorn' | 'sagittarius';

interface ZodiacIconProps {
  sign: ZodiacSign;
  size?: number;
  className?: string;
}

export function ZodiacIcon({ sign, size = 24, className = "" }: ZodiacIconProps) {
  // SVG content for each zodiac sign - using currentColor for theming
  const iconPaths: Record<ZodiacSign, JSX.Element> = {
    aquarius: (
      <>
        <path d="M3 8c2 0 2-2 4-2s2 2 4 2 2-2 4-2 2 2 4 2 2-2 3-2" />
        <path d="M3 14c2 0 2-2 4-2s2 2 4 2 2-2 4-2 2 2 4 2 2-2 3-2" />
      </>
    ),
    pisces: (
      <>
        <path d="M12 3v18" />
        <path d="M6 8c-2 2-2 6 0 8" />
        <path d="M18 8c2 2 2 6 0 8" />
      </>
    ),
    aries: (
      <>
        <path d="M12 21v-8" />
        <path d="M8 9c0-2.2 1.8-4 4-4s4 1.8 4 4" />
        <path d="M8 9c-2.2 0-4-1.8-4-4" />
        <path d="M16 9c2.2 0 4-1.8 4-4" />
      </>
    ),
    taurus: (
      <>
        <circle cx="12" cy="13" r="6" />
        <path d="M8 7c0-2.2 1.8-4 4-4s4 1.8 4 4" />
        <path d="M8 7c-2 0-4-2-4-4" />
        <path d="M16 7c2 0 4-2 4-4" />
      </>
    ),
    gemini: (
      <>
        <path d="M8 4v16" />
        <path d="M16 4v16" />
        <path d="M4 8h16" />
        <path d="M4 16h16" />
      </>
    ),
    cancer: (
      <>
        <path d="M12 21c-3 0-6-2-6-6 0-3 2-6 6-6" />
        <path d="M12 3c3 0 6 2 6 6 0 3-2 6-6 6" />
        <circle cx="8" cy="9" r="2" />
        <circle cx="16" cy="15" r="2" />
      </>
    ),
    leo: (
      <>
        <circle cx="9" cy="10" r="4" />
        <path d="M13 10c0 4 2 8 6 8" />
        <circle cx="15" cy="6" r="2" />
      </>
    ),
    virgo: (
      <>
        <path d="M6 3v13c0 2.2 1.8 4 4 4" />
        <path d="M10 3v13" />
        <path d="M14 3v13" />
        <path d="M14 16c0 2.2 1.8 4 4 4h2" />
        <path d="M18 18v2" />
      </>
    ),
    libra: (
      <>
        <path d="M12 3c-3.3 0-6 2.7-6 6" />
        <path d="M18 9c0-3.3-2.7-6-6-6" />
        <path d="M4 15h16" />
        <path d="M6 19h12" />
      </>
    ),
    scorpio: (
      <>
        <path d="M6 3v13c0 2.2 1.8 4 4 4" />
        <path d="M10 3v13" />
        <path d="M14 3v9" />
        <path d="M14 12l4 4" />
        <path d="M16 14l2-2" />
      </>
    ),
    sagittarius: (
      <>
        <path d="M7 17L17 7" />
        <path d="M12 7h5v5" />
        <path d="M8 12l-2 2" />
        <path d="M12 8l-2 2" />
      </>
    ),
    capricorn: (
      <>
        <path d="M8 3v13c0 2.2 1.8 4 4 4" />
        <path d="M8 9c0-3.3 2.7-6 6-6s6 2.7 6 6v4" />
        <circle cx="18" cy="17" r="2" />
      </>
    ),
  };

  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      stroke="currentColor" 
      fill="none" 
      strokeWidth="1.75" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      width={size}
      height={size}
      className={className}
      role="img"
      aria-label={`${sign} zodiac sign`}
    >
      {iconPaths[sign]}
    </svg>
  );
}
