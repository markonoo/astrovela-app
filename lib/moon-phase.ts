/**
 * Moon Phase Calculator
 * Simple astronomical calculation for current moon phase
 * No external dependencies required
 */

export interface MoonPhase {
  name: string
  emoji: string
  illumination: number // 0-100
  phase: number // 0-1 (0 = new moon, 0.5 = full moon)
  energy: string
  description: string
}

/**
 * Calculate current moon phase
 * Uses synodic month calculation from known new moon reference point
 */
export function getMoonPhase(date: Date = new Date()): MoonPhase {
  // Known new moon: January 6, 2000, 18:14 UTC
  const knownNewMoon = new Date('2000-01-06 18:14:00 UTC')
  const synodicMonth = 29.53058867 // days (average lunar cycle)
  
  // Calculate days since known new moon
  const diffMs = date.getTime() - knownNewMoon.getTime()
  const diffDays = diffMs / (1000 * 60 * 60 * 24)
  
  // Calculate current phase position (0-1)
  const phase = (diffDays % synodicMonth) / synodicMonth
  
  // Define phase ranges and properties
  const phases = [
    {
      name: 'New Moon',
      emoji: '🌑',
      range: [0, 0.03],
      energy: 'New Beginnings',
      description: 'Perfect time to set intentions and start fresh. The slate is clean, plant seeds for the future.'
    },
    {
      name: 'Waxing Crescent',
      emoji: '🌒',
      range: [0.03, 0.22],
      energy: 'Growth & Action',
      description: 'Time to take action on intentions. Build momentum and make plans concrete.'
    },
    {
      name: 'First Quarter',
      emoji: '🌓',
      range: [0.22, 0.28],
      energy: 'Decision Point',
      description: 'Face challenges and make decisions. Overcome obstacles with determination.'
    },
    {
      name: 'Waxing Gibbous',
      emoji: '🌔',
      range: [0.28, 0.47],
      energy: 'Refinement',
      description: 'Fine-tune and adjust your approach. Perfect your plans before culmination.'
    },
    {
      name: 'Full Moon',
      emoji: '🌕',
      range: [0.47, 0.53],
      energy: 'Culmination',
      description: 'Peak energy and emotions. Time for harvest, celebration, and revelation. What you started comes to fruition.'
    },
    {
      name: 'Waning Gibbous',
      emoji: '🌖',
      range: [0.53, 0.72],
      energy: 'Gratitude & Sharing',
      description: 'Share wisdom and express gratitude. Teach what you\'ve learned. Give back.'
    },
    {
      name: 'Last Quarter',
      emoji: '🌗',
      range: [0.72, 0.78],
      energy: 'Release & Let Go',
      description: 'Release what no longer serves. Forgive, let go, and make space for new.'
    },
    {
      name: 'Waning Crescent',
      emoji: '🌘',
      range: [0.78, 1.0],
      energy: 'Rest & Reflection',
      description: 'Time to rest, reflect, and recharge. Go within. Prepare for the new cycle ahead.'
    }
  ]
  
  // Find current phase
  const currentPhase = phases.find(p => phase >= p.range[0] && phase < p.range[1]) || phases[0]
  
  // Calculate illumination percentage
  // Illumination peaks at 100% during full moon (phase = 0.5)
  const illumination = Math.round(
    phase <= 0.5 
      ? phase * 200  // Waxing: 0% to 100%
      : (1 - phase) * 200  // Waning: 100% to 0%
  )
  
  return {
    name: currentPhase.name,
    emoji: currentPhase.emoji,
    illumination: Math.max(0, Math.min(100, illumination)),
    phase: phase,
    energy: currentPhase.energy,
    description: currentPhase.description
  }
}

/**
 * Calculate approximate moon sign (which zodiac sign the moon is in)
 * Moon changes signs approximately every 2.5 days
 * This is a simplified calculation - for precise results, use an ephemeris
 */
export function getApproximateMoonSign(date: Date = new Date()): string {
  // Known moon position: Jan 1, 2000, moon was at 0° Aries
  const knownMoonDate = new Date('2000-01-01 00:00:00 UTC')
  const synodicMonth = 27.321661 // sidereal month (moon's orbital period)
  
  const diffMs = date.getTime() - knownMoonDate.getTime()
  const diffDays = diffMs / (1000 * 60 * 60 * 24)
  
  // Moon completes zodiac every ~27.3 days
  const zodiacProgress = (diffDays / synodicMonth) % 1
  const signIndex = Math.floor(zodiacProgress * 12)
  
  const signs = [
    'Aries', 'Taurus', 'Gemini', 'Cancer',
    'Leo', 'Virgo', 'Libra', 'Scorpio',
    'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'
  ]
  
  return signs[signIndex]
}

/**
 * Check if moon is void of course (simplified check)
 * True void of course requires ephemeris data
 * This returns false as a placeholder for future enhancement
 */
export function isMoonVoidOfCourse(date: Date = new Date()): boolean {
  // This would require real-time ephemeris data
  // Placeholder for future implementation
  return false
}

/**
 * Get moon phase energy for daily guidance
 */
export function getMoonPhaseGuidance(date: Date = new Date()): {
  doThis: string[]
  avoidThis: string[]
} {
  const moonPhase = getMoonPhase(date)
  
  const guidance: Record<string, { doThis: string[]; avoidThis: string[] }> = {
    'New Moon': {
      doThis: [
        'Set new intentions',
        'Start new projects',
        'Plant seeds (literal or metaphorical)',
        'Meditate on desires',
        'Journal about goals'
      ],
      avoidThis: [
        'Major decisions without reflection',
        'Forcing outcomes',
        'Overcommitting'
      ]
    },
    'Waxing Crescent': {
      doThis: [
        'Take action on new intentions',
        'Network and reach out',
        'Build momentum',
        'Learn new skills',
        'Make plans concrete'
      ],
      avoidThis: [
        'Giving up too soon',
        'Waiting for perfect conditions',
        'Procrastination'
      ]
    },
    'First Quarter': {
      doThis: [
        'Face challenges head-on',
        'Make important decisions',
        'Push through obstacles',
        'Course-correct if needed',
        'Take bold action'
      ],
      avoidThis: [
        'Avoiding conflict',
        'Taking the easy way out',
        'Giving up'
      ]
    },
    'Waxing Gibbous': {
      doThis: [
        'Refine and perfect',
        'Adjust your approach',
        'Prepare for culmination',
        'Focus on details',
        'Build anticipation'
      ],
      avoidThis: [
        'Major new beginnings',
        'Rushing to finish',
        'Perfectionism paralysis'
      ]
    },
    'Full Moon': {
      doThis: [
        'Celebrate achievements',
        'Express gratitude',
        'Release and let go',
        'Have important conversations',
        'Trust your intuition'
      ],
      avoidThis: [
        'Making impulsive decisions',
        'Suppressing emotions',
        'Ignoring gut feelings'
      ]
    },
    'Waning Gibbous': {
      doThis: [
        'Share what you\'ve learned',
        'Teach others',
        'Give back to community',
        'Express gratitude',
        'Distribute the harvest'
      ],
      avoidThis: [
        'Hoarding knowledge or resources',
        'Starting major new projects',
        'Keeping insights to yourself'
      ]
    },
    'Last Quarter': {
      doThis: [
        'Release what\'s not working',
        'Forgive and let go',
        'Clear out clutter',
        'End toxic situations',
        'Make space for new'
      ],
      avoidThis: [
        'Clinging to the past',
        'Starting new commitments',
        'Avoiding necessary endings'
      ]
    },
    'Waning Crescent': {
      doThis: [
        'Rest and recharge',
        'Reflect on lessons learned',
        'Meditate and journal',
        'Tie up loose ends',
        'Prepare for new beginnings'
      ],
      avoidThis: [
        'Overextending yourself',
        'Major social obligations',
        'Starting new projects'
      ]
    }
  }
  
  return guidance[moonPhase.name] || guidance['New Moon']
}

/**
 * Format moon phase for display
 */
export function formatMoonPhase(moonPhase: MoonPhase): string {
  return `${moonPhase.emoji} ${moonPhase.name} (${moonPhase.illumination}% illuminated)`
}

/**
 * Get next significant moon phase
 */
export function getNextMoonPhase(currentDate: Date = new Date()): {
  phase: string
  date: Date
  daysUntil: number
} {
  const current = getMoonPhase(currentDate)
  const synodicMonth = 29.53058867
  
  // Calculate days until next new or full moon
  let daysUntilNew, daysUntilFull
  
  if (current.phase < 0.5) {
    // Before full moon
    daysUntilFull = (0.5 - current.phase) * synodicMonth
    daysUntilNew = (1.0 - current.phase) * synodicMonth
  } else {
    // After full moon
    daysUntilNew = (1.0 - current.phase) * synodicMonth
    daysUntilFull = (0.5 + (1.0 - current.phase)) * synodicMonth
  }
  
  // Return whichever is sooner
  if (daysUntilFull < daysUntilNew) {
    const fullMoonDate = new Date(currentDate.getTime() + daysUntilFull * 24 * 60 * 60 * 1000)
    return {
      phase: 'Full Moon',
      date: fullMoonDate,
      daysUntil: Math.round(daysUntilFull)
    }
  } else {
    const newMoonDate = new Date(currentDate.getTime() + daysUntilNew * 24 * 60 * 60 * 1000)
    return {
      phase: 'New Moon',
      date: newMoonDate,
      daysUntil: Math.round(daysUntilNew)
    }
  }
}
