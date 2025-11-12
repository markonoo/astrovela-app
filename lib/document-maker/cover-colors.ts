/**
 * Cover color mapping utility
 * Maps cover color scheme names to CSS colors for PDF generation
 */

export const COVER_COLOR_MAP: Record<string, string> = {
  black: '#000000',
  navy: '#1e1b4b', // indigo-950
  purple: '#3b0764', // purple-950
  green: '#022c22', // emerald-950
  burgundy: '#7f1d1d', // red-900
  cream: '#fffbeb', // amber-50
};

/**
 * Get CSS color for cover color scheme
 */
export function getCoverColor(coverColorScheme: string | null | undefined): string {
  if (!coverColorScheme) {
    return '#ffffff'; // Default white
  }
  
  return COVER_COLOR_MAP[coverColorScheme.toLowerCase()] || '#ffffff';
}

/**
 * Get text color for cover color scheme (for contrast)
 */
export function getCoverTextColor(coverColorScheme: string | null | undefined): string {
  if (!coverColorScheme) {
    return '#000000'; // Default black
  }
  
  // Dark colors get white text, light colors get black text
  const lightColors = ['cream'];
  return lightColors.includes(coverColorScheme.toLowerCase()) ? '#000000' : '#ffffff';
}




