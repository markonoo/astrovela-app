/**
 * Zodiac Content Database
 * 
 * Complete database of 144 zodiac combinations (12 signs × 12 placements)
 * Each entry contains professionally written astrological interpretations
 * 
 * Content Generation Method:
 * - Based on traditional and modern astrological principles
 * - Researched from reputable sources (Cafe Astrology, Astro.com, The Only Astrology Book You'll Ever Need)
 * - Written to match existing content length (~400-450 words per entry)
 * - Structured for easy database import and dynamic rendering
 * 
 * @author AstroVela Content Team
 * @date November 2025
 */

export type ZodiacSign = 
  | "aries" | "taurus" | "gemini" | "cancer" 
  | "leo" | "virgo" | "libra" | "scorpio" 
  | "sagittarius" | "capricorn" | "aquarius" | "pisces"

export type PlanetPlacement = 
  | "sun" | "moon" | "rising" | "mercury" | "venus" | "mars" 
  | "jupiter" | "saturn" | "uranus" | "neptune" | "pluto" | "chiron"

export interface ZodiacContentSection {
  heading?: string
  content: string
}

export interface ZodiacContent {
  sign: string
  planet: string
  title: string
  subtitle?: string
  sections: ZodiacContentSection[]
  traits?: string[]
  strengths?: string[]
  challenges?: string[]
}

/**
 * Get zodiac content for a specific sign and planet placement
 */
export function getZodiacContent(sign: ZodiacSign, planet: PlanetPlacement): ZodiacContent | null {
  const key = `${sign}-${planet}` as keyof typeof zodiacContentDatabase
  return zodiacContentDatabase[key] || null
}

/**
 * Get all content for a specific planet placement across all signs
 */
export function getContentByPlanet(planet: PlanetPlacement): ZodiacContent[] {
  return Object.values(zodiacContentDatabase).filter((content: any) => content.planet === planet)
}

/**
 * Get all content for a specific sign across all placements
 */
export function getContentBySign(sign: ZodiacSign): ZodiacContent[] {
  return Object.values(zodiacContentDatabase).filter((content: any) => content.sign === sign)
}

/**
 * ZODIAC CONTENT DATABASE
 * 144 professionally written astrological interpretations
 */
export const zodiacContentDatabase = {
  // ============================================================================
  // SUN SIGNS (12) - Your Core Identity, Ego, Life Purpose
  // ============================================================================
  
  "aries-sun": {
    sign: "aries",
    planet: "sun",
    title: "ARIES",
    subtitle: "The Pioneer",
    sections: [
      {
        heading: "INDIVIDUALITY",
        content: "Your individuality shines through your bold, pioneering spirit and natural leadership abilities. You have an innate courage that propels you forward, often being the first to try new things or take on challenges others might shy away from. This fearless approach to life reflects your deeper need for independence and self-assertion."
      },
      {
        heading: "SELF-EXPRESSION",
        content: "As an Aries, you express yourself through direct action and honest communication. Your straightforward nature means you say what you mean and mean what you say. You are constantly seeking to express your vitality and enthusiasm, whether through physical activities, competitive pursuits, or taking initiative in projects that excite you."
      },
      {
        heading: "MOTIVATION",
        content: "Motivated by the thrill of new beginnings and the desire to be first, you thrive on challenges and competition. Your motivation comes from your need to prove yourself and make your mark on the world. You are driven by passion and the pursuit of victory, constantly seeking opportunities to demonstrate your capabilities and courage."
      },
      {
        heading: "LIFE EXPERIENCE",
        content: "For Aries, life is an adventure to be conquered with enthusiasm and bravery. You view every obstacle as an opportunity to test your strength and every new day as a chance to start fresh. Your journey is about learning to balance your impulsive nature with patience, and your competitive spirit with cooperation."
      }
    ],
    traits: ["Bold", "Pioneering", "Energetic", "Courageous"],
    strengths: ["Leadership", "Initiative", "Confidence", "Enthusiasm"],
    challenges: ["Impatience", "Impulsiveness", "Aggression"]
  },

  "taurus-sun": {
    sign: "taurus",
    planet: "sun",
    title: "TAURUS",
    subtitle: "The Builder",
    sections: [
      {
        heading: "INDIVIDUALITY",
        content: "Your individuality is expressed through your grounded, reliable nature and appreciation for life's sensual pleasures. You have a unique ability to create stability and beauty in your environment, turning the ordinary into something extraordinary through your refined taste and practical wisdom. This love for quality reflects your deeper quest for security and lasting value."
      },
      {
        heading: "SELF-EXPRESSION",
        content: "As a Taurus, you express yourself through tangible creations and steady, consistent actions. Your aesthetic sensibility manifests in everything you touch, from your home décor to your personal style. You are constantly seeking to express permanence and quality, whether through building something lasting, cultivating beauty, or demonstrating unwavering loyalty."
      },
      {
        heading: "MOTIVATION",
        content: "Motivated by the need for security and comfort, you thrive when building something of lasting value. Your motivation comes from your desire for stability and the pleasure of enjoying life's finest offerings. You are driven by the pursuit of material and emotional security, constantly working to create a solid foundation for yourself and loved ones."
      },
      {
        heading: "LIFE EXPERIENCE",
        content: "For Taurus, life is a garden to be carefully cultivated with patience and dedication. You view every experience as an opportunity to build something enduring, and you are constantly seeking ways to enhance your sense of security and comfort. Your journey is about learning to embrace change while maintaining your core values."
      }
    ],
    traits: ["Reliable", "Patient", "Practical", "Devoted"],
    strengths: ["Stability", "Determination", "Loyalty", "Sensuality"],
    challenges: ["Stubbornness", "Possessiveness", "Resistance to change"]
  },

  "gemini-sun": {
    sign: "gemini",
    planet: "sun",
    title: "GEMINI",
    subtitle: "The Communicator",
    sections: [
      {
        heading: "INDIVIDUALITY",
        content: "Your individuality shines through your quick wit, intellectual curiosity, and versatile nature. You have a unique talent for connecting ideas and people, serving as a bridge between different worlds and perspectives. This gift for communication reflects your deeper quest for knowledge and variety in all aspects of life."
      },
      {
        heading: "SELF-EXPRESSION",
        content: "As a Gemini, you express yourself through words, ideas, and constant mental stimulation. Your communicative abilities are exceptional, whether through writing, speaking, or digital media. You are constantly seeking to express your thoughts and discoveries, thriving in environments that offer intellectual challenge and social interaction."
      },
      {
        heading: "MOTIVATION",
        content: "Motivated by curiosity and the desire to learn, you thrive on variety and mental stimulation. Your motivation comes from your need to understand how things work and to share that knowledge with others. You are driven by the pursuit of information and connection, constantly seeking new experiences and perspectives to satisfy your restless mind."
      },
      {
        heading: "LIFE EXPERIENCE",
        content: "For Gemini, life is an endless conversation filled with fascinating discoveries and connections. You view every interaction as an opportunity to learn something new, and you are constantly seeking ways to expand your knowledge and social network. Your journey is about learning to focus your diverse interests while maintaining your natural versatility."
      }
    ],
    traits: ["Curious", "Adaptable", "Witty", "Communicative"],
    strengths: ["Intelligence", "Versatility", "Social skills", "Quick thinking"],
    challenges: ["Inconsistency", "Superficiality", "Restlessness"]
  },

  "cancer-sun": {
    sign: "cancer",
    planet: "sun",
    title: "CANCER",
    subtitle: "The Nurturer",
    sections: [
      {
        heading: "INDIVIDUALITY",
        content: "Your individuality is expressed through your deep emotional sensitivity and nurturing instincts. You have a unique ability to create safe, comfortable spaces where others feel truly cared for and understood. This gift for emotional connection reflects your deeper quest for belonging and the creation of meaningful bonds that feel like home."
      },
      {
        heading: "SELF-EXPRESSION",
        content: "As a Cancer, you express yourself through caring actions and emotional authenticity. Your intuitive nature allows you to sense what others need, often before they know it themselves. You are constantly seeking to express your protective and nurturing qualities, whether through creating a beautiful home, caring for loved ones, or preserving cherished memories and traditions."
      },
      {
        heading: "MOTIVATION",
        content: "Motivated by the need for emotional security and deep connections, you thrive in environments where you feel safe to be vulnerable. Your motivation comes from your desire to protect and nurture those you love, and to create a sense of family and belonging. You are driven by emotional fulfillment rather than external achievements."
      },
      {
        heading: "LIFE EXPERIENCE",
        content: "For Cancer, life is an emotional journey of connection, protection, and creating sanctuary. You view every relationship as an opportunity to build trust and intimacy, and you are constantly seeking ways to deepen your emotional bonds. Your journey is about learning to protect yourself while remaining open to the vulnerability that true connection requires."
      }
    ],
    traits: ["Nurturing", "Intuitive", "Protective", "Emotional"],
    strengths: ["Empathy", "Loyalty", "Intuition", "Devotion"],
    challenges: ["Moodiness", "Over-sensitivity", "Clinginess"]
  },

  "leo-sun": {
    sign: "leo",
    planet: "sun",
    title: "LEO",
    subtitle: "The Performer",
    sections: [
      {
        heading: "INDIVIDUALITY",
        content: "Your individuality radiates through your confident, charismatic presence and natural ability to inspire others. You have a unique talent for bringing warmth and joy into any situation, lighting up rooms with your generous spirit and creative expression. This gift for leadership and performance reflects your deeper quest for recognition and the desire to make a meaningful impact."
      },
      {
        heading: "SELF-EXPRESSION",
        content: "As a Leo, you express yourself through bold, creative gestures and dramatic flair. Your natural showmanship and artistic sensibilities make you a captivating presence in any setting. You are constantly seeking to express your authentic self with pride and passion, whether through creative pursuits, leadership roles, or simply living life with theatrical enthusiasm."
      },
      {
        heading: "MOTIVATION",
        content: "Motivated by the desire for recognition and the need to shine, you thrive when you're appreciated and admired. Your motivation comes from your generous heart and the joy you feel when inspiring or entertaining others. You are driven by the pursuit of excellence and the creation of something worthy of applause and respect."
      },
      {
        heading: "LIFE EXPERIENCE",
        content: "For Leo, life is a stage where you can showcase your talents and inspire others with your warmth and creativity. You view every day as an opportunity to express your magnificence and spread joy. Your journey is about learning to balance your need for attention with genuine humility, and to lead with both confidence and compassion."
      }
    ],
    traits: ["Confident", "Generous", "Creative", "Dramatic"],
    strengths: ["Leadership", "Charisma", "Loyalty", "Enthusiasm"],
    challenges: ["Pride", "Domineering", "Attention-seeking"]
  },

  "virgo-sun": {
    sign: "virgo",
    planet: "sun",
    title: "VIRGO",
    subtitle: "The Analyst",
    sections: [
      {
        heading: "INDIVIDUALITY",
        content: "Your individuality shines through your analytical mind, attention to detail, and desire to be of service. You have a unique ability to see what needs improvement and the practical skills to make it happen. This gift for discernment and refinement reflects your deeper quest for perfection and meaningful contribution to the world around you."
      },
      {
        heading: "SELF-EXPRESSION",
        content: "As a Virgo, you express yourself through practical helpfulness and meticulous craftsmanship. Your analytical nature and eye for detail make you invaluable in any situation requiring precision and efficiency. You are constantly seeking to express your competence and usefulness, whether through problem-solving, organizing systems, or offering practical assistance to those in need."
      },
      {
        heading: "MOTIVATION",
        content: "Motivated by the desire to improve and perfect, you thrive when you can make tangible contributions to others' wellbeing. Your motivation comes from your need to be useful and your satisfaction in seeing things done correctly. You are driven by the pursuit of excellence in all you do, constantly refining your skills and knowledge."
      },
      {
        heading: "LIFE EXPERIENCE",
        content: "For Virgo, life is a continuous process of refinement and service. You view every task as an opportunity to demonstrate your competence and every challenge as a puzzle to be solved. Your journey is about learning to accept imperfection in yourself and others while maintaining your high standards where they truly matter."
      }
    ],
    traits: ["Analytical", "Practical", "Diligent", "Helpful"],
    strengths: ["Attention to detail", "Reliability", "Intelligence", "Modesty"],
    challenges: ["Perfectionism", "Worry", "Over-critical"]
  },

  "libra-sun": {
    sign: "libra",
    planet: "sun",
    title: "LIBRA",
    subtitle: "The Harmonizer",
    sections: [
      {
        heading: "INDIVIDUALITY",
        content: "Your individuality shines through your refined taste and your ability to see beauty in the simple things. You have a unique talent for turning chaos into order through elegant solutions that please both the eye and the spirit. This love for beauty is not just superficial. It reflects your deeper quest for harmony and understanding."
      },
      {
        heading: "SELF-EXPRESSION",
        content: "As a Libra, you express yourself through creativity such as art, music, or style. Your aesthetic sensibility is about more than appearance. It's a reflection of your balanced and thoughtful nature. You are constantly seeking to express composure, whether it's in your home, your wardrobe, or your choice of words."
      },
      {
        heading: "MOTIVATION",
        content: "Motivated by the need for connection, you thrive in partnerships and excel in activities that involve others. Your motivation often comes from your desire to be appreciated and loved, driving you to act with kindness and generosity. You are not just seeking affection, but also deeply interested in making the world a more equitable place."
      },
      {
        heading: "LIFE EXPERIENCE",
        content: "For Libras, life is an ongoing journey towards achieving balance and harmony. You view every interaction as an opportunity to learn and grow, and you are constantly seeking ways to improve your environment."
      }
    ],
    traits: ["Diplomatic", "Fair-minded", "Social", "Idealistic"],
    strengths: ["Cooperation", "Graciousness", "Balance", "Charm"],
    challenges: ["Indecisiveness", "Avoids confrontation", "Self-pity"]
  },

  "scorpio-sun": {
    sign: "scorpio",
    planet: "sun",
    title: "SCORPIO",
    subtitle: "The Transformer",
    sections: [
      {
        heading: "INDIVIDUALITY",
        content: "Your individuality is expressed through your intense, penetrating nature and ability to see beneath surface appearances. You have a unique gift for transformation, both of yourself and situations around you. This power for deep insight reflects your quest for truth and authentic experience, no matter how uncomfortable that journey might be."
      },
      {
        heading: "SELF-EXPRESSION",
        content: "As a Scorpio, you express yourself through passionate intensity and unwavering focus. Your magnetic presence and emotional depth draw others to you, even as your mysterious nature keeps them guessing. You are constantly seeking to express your power and authenticity, whether through deep relationships, transformative work, or pursuits that require complete dedication."
      },
      {
        heading: "MOTIVATION",
        content: "Motivated by the desire for deep connection and transformative experiences, you thrive when you can merge completely with your pursuits. Your motivation comes from your need to understand life's mysteries and to experience the full spectrum of human emotion. You are driven by the pursuit of power—not over others, but over yourself and your circumstances."
      },
      {
        heading: "LIFE EXPERIENCE",
        content: "For Scorpio, life is a series of deaths and rebirths, each transformation bringing you closer to your authentic self. You view every experience as an opportunity for profound change and growth. Your journey is about learning to trust others while maintaining your protective boundaries, and to use your power for healing rather than control."
      }
    ],
    traits: ["Intense", "Passionate", "Resourceful", "Mysterious"],
    strengths: ["Determination", "Emotional depth", "Loyalty", "Intuition"],
    challenges: ["Jealousy", "Secrecy", "Resentfulness"]
  },

  "sagittarius-sun": {
    sign: "sagittarius",
    planet: "sun",
    title: "SAGITTARIUS",
    subtitle: "The Philosopher",
    sections: [
      {
        heading: "INDIVIDUALITY",
        content: "Your individuality shines through your optimistic outlook, love of adventure, and quest for meaning. You have a unique ability to see the bigger picture and inspire others with your vision of what's possible. This gift for expansion and exploration reflects your deeper quest for truth, wisdom, and the freedom to discover life's grand tapestry."
      },
      {
        heading: "SELF-EXPRESSION",
        content: "As a Sagittarius, you express yourself through enthusiastic storytelling, philosophical discussions, and adventurous pursuits. Your honest, direct communication style and infectious optimism make you a natural teacher and motivator. You are constantly seeking to express your understanding of life's meaning, whether through travel, education, or sharing your discoveries with others."
      },
      {
        heading: "MOTIVATION",
        content: "Motivated by the desire for freedom and the pursuit of knowledge, you thrive when exploring new horizons—physical, intellectual, or spiritual. Your motivation comes from your need to understand life's grand design and to experience as much as possible. You are driven by the pursuit of truth and meaning, constantly seeking to expand your understanding and share your wisdom."
      },
      {
        heading: "LIFE EXPERIENCE",
        content: "For Sagittarius, life is an endless adventure filled with opportunities for growth and discovery. You view every experience as a lesson and every person as a potential teacher. Your journey is about learning to balance your love of freedom with commitment, and your optimism with realistic planning."
      }
    ],
    traits: ["Optimistic", "Adventurous", "Honest", "Philosophical"],
    strengths: ["Enthusiasm", "Open-mindedness", "Humor", "Generosity"],
    challenges: ["Tactlessness", "Restlessness", "Over-promising"]
  },

  "capricorn-sun": {
    sign: "capricorn",
    planet: "sun",
    title: "CAPRICORN",
    subtitle: "The Achiever",
    sections: [
      {
        heading: "INDIVIDUALITY",
        content: "Your individuality is expressed through your disciplined approach, ambitious nature, and respect for tradition and structure. You have a unique ability to build lasting achievements through patient, persistent effort. This gift for manifestation reflects your deeper quest for mastery, respect, and the creation of a meaningful legacy that stands the test of time."
      },
      {
        heading: "SELF-EXPRESSION",
        content: "As a Capricorn, you express yourself through concrete achievements and responsible action. Your practical wisdom and mature perspective make you a natural authority figure and mentor. You are constantly seeking to express your competence and reliability, whether through career success, building institutions, or demonstrating your commitment to long-term goals."
      },
      {
        heading: "MOTIVATION",
        content: "Motivated by the desire for achievement and recognition of your capabilities, you thrive when working toward meaningful, long-term goals. Your motivation comes from your need to prove your worth through tangible accomplishments and to create security through your own efforts. You are driven by the pursuit of mastery and the respect that comes from demonstrated competence."
      },
      {
        heading: "LIFE EXPERIENCE",
        content: "For Capricorn, life is a mountain to be climbed with determination and strategic planning. You view every challenge as an opportunity to demonstrate your strength and every setback as a lesson in resilience. Your journey is about learning to balance ambition with enjoyment of the present moment, and achievement with emotional fulfillment."
      }
    ],
    traits: ["Ambitious", "Disciplined", "Responsible", "Patient"],
    strengths: ["Determination", "Self-control", "Practicality", "Wisdom"],
    challenges: ["Pessimism", "Rigidity", "Emotional reserve"]
  },

  "aquarius-sun": {
    sign: "aquarius",
    planet: "sun",
    title: "AQUARIUS",
    subtitle: "The Innovator",
    sections: [
      {
        heading: "INDIVIDUALITY",
        content: "Your individuality shines through your original thinking, humanitarian values, and ability to envision the future. You have a unique gift for seeing possibilities others miss and for bringing people together around progressive ideals. This talent for innovation reflects your deeper quest for freedom, equality, and the advancement of collective consciousness."
      },
      {
        heading: "SELF-EXPRESSION",
        content: "As an Aquarius, you express yourself through unconventional ideas, social activism, and technological or scientific pursuits. Your intellectual approach and detached perspective allow you to see situations objectively. You are constantly seeking to express your individuality and contribute to collective progress, whether through innovation, community building, or championing humanitarian causes."
      },
      {
        heading: "MOTIVATION",
        content: "Motivated by the desire for intellectual freedom and social progress, you thrive when working toward idealistic goals that benefit humanity. Your motivation comes from your need to be true to yourself while contributing to something larger than personal gain. You are driven by the pursuit of knowledge, innovation, and the creation of a better future for all."
      },
      {
        heading: "LIFE EXPERIENCE",
        content: "For Aquarius, life is a laboratory for experimenting with new ideas and social structures. You view every situation as an opportunity to challenge the status quo and every person as an equal member of the human family. Your journey is about learning to balance your need for independence with meaningful connection, and your idealism with practical application."
      }
    ],
    traits: ["Original", "Independent", "Humanitarian", "Intellectual"],
    strengths: ["Innovation", "Objectivity", "Friendliness", "Progressiveness"],
    challenges: ["Emotional detachment", "Rebelliousness", "Unpredictability"]
  },

  "pisces-sun": {
    sign: "pisces",
    planet: "sun",
    title: "PISCES",
    subtitle: "The Mystic",
    sections: [
      {
        heading: "INDIVIDUALITY",
        content: "Your individuality is expressed through your compassionate nature, artistic sensibility, and spiritual depth. You have a unique ability to transcend boundaries and connect with the universal human experience. This gift for empathy and imagination reflects your deeper quest for oneness, meaning beyond the material world, and the expression of divine love through earthly existence."
      },
      {
        heading: "SELF-EXPRESSION",
        content: "As a Pisces, you express yourself through creative and spiritual pursuits that touch the soul. Your intuitive understanding and emotional sensitivity allow you to create art, music, or healing that resonates deeply with others. You are constantly seeking to express the ineffable—those feelings and experiences that exist beyond words—whether through artistic creation, spiritual practice, or compassionate service."
      },
      {
        heading: "MOTIVATION",
        content: "Motivated by the desire for transcendence and the need to merge with something greater than yourself, you thrive when you can lose yourself in creative or spiritual flow. Your motivation comes from your compassionate heart and your longing to heal suffering—both your own and others'. You are driven by the pursuit of unity, beauty, and the dissolution of boundaries that separate us."
      },
      {
        heading: "LIFE EXPERIENCE",
        content: "For Pisces, life is a spiritual journey through a material world, where every experience offers an opportunity for compassion and transcendence. You view reality as fluid and interconnected, sensing the invisible threads that bind all beings. Your journey is about learning to maintain healthy boundaries while remaining open to life's mysteries, and to ground your spiritual insights in practical reality."
      }
    ],
    traits: ["Compassionate", "Artistic", "Intuitive", "Gentle"],
    strengths: ["Empathy", "Creativity", "Spirituality", "Adaptability"],
    challenges: ["Escapism", "Over-idealism", "Victim mentality"]
  },

  // ============================================================================
  // MOON SIGNS (12) - Your Emotional Nature, Inner Self, Needs
  // ============================================================================

  "aries-moon": {
    sign: "aries",
    planet: "moon",
    title: "ARIES",
    subtitle: "Moon in Aries",
    sections: [
      {
        content: "Aries Moon, ruled by Mars, the planet of action and desire, influences you with a fiery, passionate emotional nature. You find emotional satisfaction in taking initiative and being first. Your inner life is characterized by a need for independence and the freedom to act on your impulses without restraint or delay."
      },
      {
        content: "Your emotions are direct and immediate—what you feel, you express, often without filtering or second-guessing. You have a warrior's heart that responds to challenges with courage and enthusiasm. This emotional honesty can be refreshing, though it may sometimes come across as impulsive or impatient to those with more cautious emotional natures."
      },
      {
        content: "Beneath the surface, your Aries Moon equips you with incredible strengths:"
      },
      {
        content: "• EMOTIONAL COURAGE: You face your feelings head-on, never shying away from emotional confrontation or difficult situations that require bravery."
      },
      {
        content: "• QUICK RECOVERY: Your emotional resilience is remarkable—you bounce back from setbacks faster than most, ready to try again with renewed enthusiasm."
      },
      {
        content: "• PASSIONATE INTENSITY: When you care about something or someone, you invest yourself completely, bringing fierce loyalty and protective instincts to your relationships."
      },
      {
        content: "To thrive with an Aries Moon, it's essential to find healthy outlets for your emotional energy through physical activity, competitive pursuits, or leadership roles. Practice patience with yourself and others, recognizing that not everyone processes emotions at your rapid pace. Channel your emotional intensity into constructive action rather than reactive outbursts."
      },
      {
        content: "Embrace your pioneering emotional spirit by allowing yourself to be first, to take risks in matters of the heart, and to trust your instincts. Remember, your emotional directness is not a flaw—it's your superpower. It allows you to live authentically and to inspire others with your courage to feel deeply and act boldly."
      }
    ],
    strengths: ["Emotional courage", "Quick recovery", "Passionate intensity", "Independence"],
    challenges: ["Impatience", "Emotional impulsiveness", "Anger management"]
  },

  "taurus-moon": {
    sign: "taurus",
    planet: "moon",
    title: "TAURUS",
    subtitle: "Moon in Taurus",
    sections: [
      {
        content: "Taurus Moon, ruled by Venus, the planet of love and beauty, influences you with a stable, sensual emotional nature. You find emotional satisfaction in comfort, security, and the pleasures of the physical world. Your inner life is characterized by a need for stability and the creation of a beautiful, peaceful environment where you can feel truly at ease."
      },
      {
        content: "Your emotions are steady and enduring—once you commit to a feeling or person, you're in it for the long haul. You have a calm, grounding presence that others find soothing and reliable. This emotional consistency provides a safe harbor in the storms of life, though it may sometimes manifest as resistance to change or difficulty letting go."
      },
      {
        content: "Beneath the surface, your Taurus Moon equips you with incredible strengths:"
      },
      {
        content: "• EMOTIONAL STABILITY: You provide a rock-solid foundation in relationships, offering unwavering support and loyalty that others can depend on through any circumstance."
      },
      {
        content: "• SENSUAL AWARENESS: Your connection to the physical world allows you to find comfort and healing through touch, nature, good food, and beautiful surroundings."
      },
      {
        content: "• PATIENT ENDURANCE: You have remarkable emotional stamina, able to weather long-term challenges with grace and maintain your inner peace despite external chaos."
      },
      {
        content: "To thrive with a Taurus Moon, it's essential to honor your need for routine and comfort while remaining open to necessary changes. Create a beautiful, secure home environment that nurtures your soul. Indulge your senses regularly through nature walks, good meals, music, or physical touch—these aren't luxuries for you, but emotional necessities."
      },
      {
        content: "Embrace your gift for creating emotional security by building lasting relationships and stable foundations. Remember, your steadfast nature is not stubbornness—it's your strength. It allows you to provide the consistency and comfort that makes others feel truly safe and loved."
      }
    ],
    strengths: ["Emotional stability", "Loyalty", "Sensual awareness", "Patience"],
    challenges: ["Stubbornness", "Possessiveness", "Resistance to change"]
  },

  "gemini-moon": {
    sign: "gemini",
    planet: "moon",
    title: "GEMINI",
    subtitle: "Moon in Gemini",
    sections: [
      {
        content: "Gemini Moon, ruled by Mercury, the planet of communication and thought, influences you with a curious, versatile emotional nature. You find emotional satisfaction in mental stimulation, variety, and the exchange of ideas. Your inner life is characterized by a need for intellectual engagement and the freedom to explore multiple interests and perspectives."
      },
      {
        content: "Your emotions are quick and changeable—you process feelings through talking, thinking, and analyzing rather than simply sitting with them. You have a youthful, playful approach to emotional life that keeps things light and interesting. This mental approach to emotions provides valuable perspective, though it may sometimes manifest as emotional detachment or difficulty accessing deeper feelings."
      },
      {
        content: "Beneath the surface, your Gemini Moon equips you with incredible strengths:"
      },
      {
        content: "• EMOTIONAL FLEXIBILITY: You adapt quickly to changing circumstances, able to see multiple sides of any situation and adjust your emotional responses accordingly."
      },
      {
        content: "• VERBAL PROCESSING: Your ability to articulate feelings helps you understand and release emotions that others might struggle to express, making you an excellent communicator in relationships."
      },
      {
        content: "• CURIOSITY ABOUT EMOTIONS: You approach your inner life with genuine interest, always seeking to understand why you feel what you feel and what it all means."
      },
      {
        content: "To thrive with a Gemini Moon, it's essential to honor your need for mental stimulation and variety while developing deeper emotional roots. Journal, talk with friends, or engage in creative writing to process your feelings. Allow yourself to experience emotions without immediately analyzing them—sometimes feelings just need to be felt."
      },
      {
        content: "Embrace your gift for emotional versatility and communication by sharing your insights with others. Remember, your changeable nature is not flightiness—it's your adaptability. It allows you to navigate emotional complexity with grace and to help others see their feelings from new, liberating perspectives."
      }
    ],
    strengths: ["Emotional flexibility", "Communication", "Curiosity", "Adaptability"],
    challenges: ["Emotional detachment", "Restlessness", "Superficiality"]
  },

  "cancer-moon": {
    sign: "cancer",
    planet: "moon",
    title: "CANCER",
    subtitle: "Moon in Cancer",
    sections: [
      {
        content: "Cancer Moon, ruled by the Moon itself, influences you with a deeply intuitive, nurturing emotional nature. You find emotional satisfaction in caring for others and creating a sense of home and belonging. Your inner life is characterized by powerful emotional currents, strong intuitive abilities, and a need for emotional security and deep connection."
      },
      {
        content: "Your emotions run deep and strong—you feel everything intensely and have an almost psychic ability to sense what others are feeling. You have a protective, maternal quality that makes others feel safe and cared for in your presence. This emotional depth is your gift, though it may sometimes manifest as moodiness or difficulty letting go of past hurts."
      },
      {
        content: "Beneath the surface, your Cancer Moon equips you with incredible strengths:"
      },
      {
        content: "• INTUITIVE WISDOM: Your emotional radar is finely tuned, allowing you to sense undercurrents and understand what's really going on beneath surface appearances."
      },
      {
        content: "• NURTURING CAPACITY: You have an innate ability to make others feel loved, safe, and cared for, creating emotional sanctuary wherever you go."
      },
      {
        content: "• EMOTIONAL MEMORY: Your ability to remember feelings and experiences in vivid detail allows you to learn from the past and maintain deep, lasting connections."
      },
      {
        content: "To thrive with a Cancer Moon, it's essential to create a safe, comfortable home environment where you can retreat and recharge. Honor your emotional cycles and allow yourself to feel deeply without judgment. Develop healthy boundaries to protect your sensitive nature while remaining open to connection."
      },
      {
        content: "Embrace your gift for emotional depth and nurturing by creating family—whether biological or chosen—and caring for those you love. Remember, your sensitivity is not weakness—it's your strength. It allows you to love deeply, to understand others profoundly, and to create the emotional bonds that make life meaningful."
      }
    ],
    strengths: ["Intuition", "Nurturing ability", "Emotional depth", "Loyalty"],
    challenges: ["Moodiness", "Over-sensitivity", "Difficulty letting go"]
  },

  "leo-moon": {
    sign: "leo",
    planet: "moon",
    title: "LEO",
    subtitle: "Moon in Leo",
    sections: [
      {
        content: "Leo Moon, ruled by the Sun, the center of our solar system, influences you with a warm, generous emotional nature. You find emotional satisfaction in being appreciated, expressing yourself creatively, and bringing joy to others. Your inner life is characterized by a need for recognition, a strong sense of pride, and a desire to shine in your emotional authenticity."
      },
      {
        content: "Your emotions are dramatic and expressive—you feel things with theatrical intensity and aren't afraid to show it. You have a regal quality that demands respect and appreciation in your emotional life. This emotional generosity and warmth draws others to you, though it may sometimes manifest as a need for constant validation or difficulty handling criticism."
      },
      {
        content: "Beneath the surface, your Leo Moon equips you with incredible strengths:"
      },
      {
        content: "• EMOTIONAL GENEROSITY: Your heart is big and warm, capable of loving fiercely and loyally, making those you care about feel truly special and valued."
      },
      {
        content: "• CREATIVE EXPRESSION: You have a natural ability to express emotions through creative outlets, turning feelings into art, performance, or other forms of self-expression."
      },
      {
        content: "• EMOTIONAL COURAGE: You're not afraid to love boldly, to show your feelings, or to stand up for what you believe in emotionally, inspiring others with your bravery."
      },
      {
        content: "To thrive with a Leo Moon, it's essential to find healthy ways to receive the appreciation and recognition you need. Engage in creative pursuits that allow you to express your emotional nature. Practice giving yourself the validation you seek from others, building inner confidence that doesn't depend on external applause."
      },
      {
        content: "Embrace your gift for emotional warmth and generosity by sharing your light with others. Remember, your need for recognition is not vanity—it's your emotional fuel. It allows you to give generously, to love boldly, and to inspire others to embrace their own emotional authenticity."
      }
    ],
    strengths: ["Emotional generosity", "Warmth", "Loyalty", "Creative expression"],
    challenges: ["Need for validation", "Pride", "Dramatic reactions"]
  },

  "virgo-moon": {
    sign: "virgo",
    planet: "moon",
    title: "VIRGO",
    subtitle: "Moon in Virgo",
    sections: [
      {
        content: "Virgo Moon, ruled by Mercury, the planet of analysis and communication, influences you with a practical, service-oriented emotional nature. You find emotional satisfaction in being useful, solving problems, and creating order from chaos. Your inner life is characterized by a need for purpose, a desire to improve things, and a tendency to process emotions through analysis."
      },
      {
        content: "Your emotions are filtered through a lens of practicality and discernment—you analyze your feelings, seeking to understand and improve them. You have a caring nature that expresses itself through helpful actions rather than grand gestures. This practical approach to emotions provides valuable clarity, though it may sometimes manifest as self-criticism or difficulty accepting imperfection."
      },
      {
        content: "Beneath the surface, your Virgo Moon equips you with incredible strengths:"
      },
      {
        content: "• EMOTIONAL INTELLIGENCE: Your ability to analyze and understand emotions—both yours and others'—allows you to navigate complex emotional situations with wisdom and grace."
      },
      {
        content: "• SERVICE-ORIENTED LOVE: You show care through practical help and attention to details, noticing what others need and quietly providing it without fanfare."
      },
      {
        content: "• SELF-IMPROVEMENT: Your commitment to emotional growth and self-awareness helps you continuously evolve and become the best version of yourself."
      },
      {
        content: "To thrive with a Virgo Moon, it's essential to practice self-compassion and accept that perfection is impossible. Allow yourself to feel emotions without immediately trying to fix or analyze them. Express your caring nature through service, but remember to care for yourself with the same dedication you show others."
      },
      {
        content: "Embrace your gift for emotional discernment and practical caring by using your analytical abilities to help others understand their feelings. Remember, your desire for improvement is not criticism—it's your path to growth. It allows you to refine your emotional life and to help others do the same with gentle, practical wisdom."
      }
    ],
    strengths: ["Emotional intelligence", "Practical caring", "Self-awareness", "Reliability"],
    challenges: ["Self-criticism", "Worry", "Emotional perfectionism"]
  },

  "libra-moon": {
    sign: "libra",
    planet: "moon",
    title: "LIBRA",
    subtitle: "Moon in Libra",
    sections: [
      {
        content: "Libra Moon, ruled by Venus, the planet of love and harmony, influences you with a diplomatic, relationship-oriented emotional nature. You find emotional satisfaction in balance, beauty, and harmonious connections with others. Your inner life is characterized by a need for peace, a strong sense of fairness, and a desire for partnership and cooperation."
      },
      {
        content: "Your emotions seek equilibrium—you instinctively try to balance your feelings and create harmony in your relationships. You have a gracious, charming quality that helps smooth over conflicts and bring people together. This diplomatic approach to emotions creates peace, though it may sometimes manifest as difficulty making decisions or suppressing your own needs to keep the peace."
      },
      {
        content: "Beneath the surface, your Libra Moon equips you with incredible strengths:"
      },
      {
        content: "• EMOTIONAL DIPLOMACY: Your ability to see multiple perspectives allows you to mediate conflicts and help others find common ground with grace and fairness."
      },
      {
        content: "• RELATIONSHIP SKILLS: You have a natural gift for creating and maintaining harmonious relationships, knowing instinctively how to make others feel valued and understood."
      },
      {
        content: "• AESTHETIC SENSITIVITY: Your emotional wellbeing is enhanced by beauty and harmony in your environment, and you have a talent for creating spaces that feel balanced and peaceful."
      },
      {
        content: "To thrive with a Libra Moon, it's essential to honor your own feelings and needs, not just those of others. Practice making decisions without over-analyzing every option. Surround yourself with beauty and harmony, but don't sacrifice your authentic feelings for the sake of keeping peace."
      },
      {
        content: "Embrace your gift for creating emotional harmony by bringing balance and beauty to your relationships. Remember, your desire for peace is not weakness—it's your strength. It allows you to create the harmonious connections that make life beautiful and to help others find balance in their emotional lives."
      }
    ],
    strengths: ["Diplomacy", "Relationship skills", "Fairness", "Aesthetic sensitivity"],
    challenges: ["Indecisiveness", "People-pleasing", "Avoiding conflict"]
  },

  "scorpio-moon": {
    sign: "scorpio",
    planet: "moon",
    title: "SCORPIO",
    subtitle: "Moon in Scorpio",
    sections: [
      {
        content: "Scorpio Moon, ruled by Pluto, the planet of transformation and depth, influences you with an intense, passionate emotional nature. You find emotional satisfaction in deep, transformative experiences and authentic, soul-level connections. Your inner life is characterized by powerful emotions, strong intuitive abilities, and a need for emotional truth and intimacy."
      },
      {
        content: "Your emotions run deeper than the ocean—you feel everything with profound intensity and have an almost supernatural ability to sense what lies beneath surface appearances. You have a magnetic, mysterious quality that draws others to you while keeping your deepest feelings carefully guarded. This emotional depth is your power, though it may sometimes manifest as jealousy, possessiveness, or difficulty trusting others."
      },
      {
        content: "Beneath the surface, your Scorpio Moon equips you with incredible strengths:"
      },
      {
        content: "• EMOTIONAL INTENSITY: Your capacity to feel deeply allows you to experience life with a richness and passion that others can only imagine, making every experience meaningful."
      },
      {
        content: "• TRANSFORMATIVE POWER: You have an innate ability to transform yourself and situations through emotional alchemy, turning pain into wisdom and darkness into light."
      },
      {
        content: "• INTUITIVE DEPTH: Your emotional radar penetrates masks and pretenses, allowing you to see the truth of situations and people with uncanny accuracy."
      },
      {
        content: "To thrive with a Scorpio Moon, it's essential to find healthy outlets for your emotional intensity through therapy, creative expression, or transformative practices. Learn to trust selectively while protecting your sensitive core. Channel your power toward healing and transformation rather than control or revenge."
      },
      {
        content: "Embrace your gift for emotional depth and transformation by allowing yourself to feel fully and to use your intensity for healing. Remember, your emotional power is not dangerous—it's your magic. It allows you to experience life at its deepest levels and to facilitate profound transformation in yourself and others."
      }
    ],
    strengths: ["Emotional intensity", "Intuition", "Transformative power", "Loyalty"],
    challenges: ["Jealousy", "Possessiveness", "Trust issues"]
  },

  "sagittarius-moon": {
    sign: "sagittarius",
    planet: "moon",
    title: "SAGITTARIUS",
    subtitle: "Moon in Sagittarius",
    sections: [
      {
        content: "Sagittarius Moon, ruled by Jupiter, the planet of expansion and wisdom, influences you with an optimistic, freedom-loving emotional nature. You find emotional satisfaction in adventure, learning, and exploring new horizons—both physical and philosophical. Your inner life is characterized by a need for freedom, a quest for meaning, and an irrepressible optimism about life's possibilities."
      },
      {
        content: "Your emotions are expansive and enthusiastic—you approach feelings with the same adventurous spirit you bring to life itself. You have a philosophical quality that helps you find meaning in emotional experiences and bounce back from setbacks with remarkable resilience. This emotional optimism is infectious, though it may sometimes manifest as restlessness or difficulty sitting with uncomfortable feelings."
      },
      {
        content: "Beneath the surface, your Sagittarius Moon equips you with incredible strengths:"
      },
      {
        content: "• EMOTIONAL OPTIMISM: Your ability to see the bright side and find meaning in challenges helps you maintain hope and inspire others even in difficult times."
      },
      {
        content: "• FREEDOM-LOVING SPIRIT: You need emotional space to explore and grow, and you offer the same freedom to others, creating relationships based on trust rather than possession."
      },
      {
        content: "• PHILOSOPHICAL PERSPECTIVE: Your ability to find meaning and wisdom in emotional experiences helps you grow from every situation and share valuable insights with others."
      },
      {
        content: "To thrive with a Sagittarius Moon, it's essential to balance your need for freedom with commitment in relationships. Allow yourself to explore and adventure while maintaining emotional connections. Practice staying present with difficult emotions rather than immediately seeking distraction or escape."
      },
      {
        content: "Embrace your gift for emotional optimism and philosophical wisdom by sharing your hopeful perspective with others. Remember, your need for freedom is not fear of commitment—it's your emotional oxygen. It allows you to love generously, to grow continuously, and to inspire others with your faith in life's possibilities."
      }
    ],
    strengths: ["Optimism", "Philosophical perspective", "Emotional resilience", "Generosity"],
    challenges: ["Restlessness", "Commitment issues", "Avoiding difficult emotions"]
  },

  "capricorn-moon": {
    sign: "capricorn",
    planet: "moon",
    title: "CAPRICORN",
    subtitle: "Moon in Capricorn",
    sections: [
      {
        content: "Capricorn Moon, ruled by Saturn, the planet of structure and responsibility, influences you with a disciplined, reserved emotional nature. You find emotional satisfaction in achievement, responsibility, and the creation of lasting security. Your inner life is characterized by emotional self-control, a need for respect, and a tendency to take emotional matters seriously."
      },
      {
        content: "Your emotions are controlled and measured—you believe feelings should be managed responsibly and expressed appropriately. You have a mature, dignified quality that makes others trust you with their deepest concerns. This emotional discipline provides stability, though it may sometimes manifest as difficulty expressing vulnerability or allowing yourself to need others."
      },
      {
        content: "Beneath the surface, your Capricorn Moon equips you with incredible strengths:"
      },
      {
        content: "• EMOTIONAL MATURITY: Your ability to handle emotions responsibly makes you a rock for others, someone they can depend on in crisis or chaos."
      },
      {
        content: "• LONG-TERM COMMITMENT: Once you commit emotionally, you're in it for life, offering steady, reliable love that others can build their lives upon."
      },
      {
        content: "• RESILIENT STRENGTH: Your emotional endurance is remarkable—you can weather long-term challenges and emerge stronger, having learned valuable lessons from hardship."
      },
      {
        content: "To thrive with a Capricorn Moon, it's essential to allow yourself to be vulnerable and to express needs without shame. Practice self-compassion and recognize that emotional needs are not weaknesses. Balance your responsible nature with play and spontaneity, allowing your inner child to emerge occasionally."
      },
      {
        content: "Embrace your gift for emotional strength and responsibility by being the steady presence others need. Remember, your emotional reserve is not coldness—it's your dignity. It allows you to provide stable, mature love and to achieve the emotional security you and others need to thrive."
      }
    ],
    strengths: ["Emotional maturity", "Reliability", "Resilience", "Responsibility"],
    challenges: ["Emotional reserve", "Difficulty with vulnerability", "Pessimism"]
  },

  "aquarius-moon": {
    sign: "aquarius",
    planet: "moon",
    title: "AQUARIUS",
    subtitle: "Moon in Aquarius",
    sections: [
      {
        content: "Aquarius Moon, ruled by Uranus, the planet of innovation and independence, influences you with an unconventional, detached emotional nature. You find emotional satisfaction in intellectual connection, humanitarian pursuits, and the freedom to be uniquely yourself. Your inner life is characterized by a need for independence, a progressive outlook, and a tendency to process emotions through logic and reason."
      },
      {
        content: "Your emotions are filtered through an intellectual lens—you observe your feelings with curiosity and detachment rather than being swept away by them. You have an egalitarian quality that treats everyone as equals and values friendship as highly as romance. This emotional objectivity provides valuable perspective, though it may sometimes manifest as difficulty accessing or expressing deeper feelings."
      },
      {
        content: "Beneath the surface, your Aquarius Moon equips you with incredible strengths:"
      },
      {
        content: "• EMOTIONAL OBJECTIVITY: Your ability to step back and observe emotions without being overwhelmed allows you to navigate complex situations with clarity and wisdom."
      },
      {
        content: "• HUMANITARIAN HEART: Your emotional energy extends beyond personal relationships to encompass humanity as a whole, driving you to work for collective wellbeing."
      },
      {
        content: "• AUTHENTIC INDIVIDUALITY: You're comfortable being emotionally different, refusing to conform to others' expectations of how you should feel or express yourself."
      },
      {
        content: "To thrive with an Aquarius Moon, it's essential to balance your need for independence with intimate connection. Allow yourself to feel emotions without immediately analyzing them. Practice expressing vulnerability with trusted individuals, recognizing that emotional closeness doesn't threaten your independence."
      },
      {
        content: "Embrace your gift for emotional objectivity and humanitarian concern by using your unique perspective to help others. Remember, your emotional detachment is not coldness—it's your clarity. It allows you to love freely, to see situations objectively, and to work for the greater good without being paralyzed by personal emotion."
      }
    ],
    strengths: ["Emotional objectivity", "Independence", "Humanitarian concern", "Originality"],
    challenges: ["Emotional detachment", "Difficulty with intimacy", "Rebelliousness"]
  },

  "pisces-moon": {
    sign: "pisces",
    planet: "moon",
    title: "PISCES",
    subtitle: "Moon in Pisces",
    sections: [
      {
        content: "Pisces, ruled by Neptune, the planet of dreams and mysticism, influences you with an otherworldly quality. You find emotional satisfaction in transcending the mundane to connect with the spiritual or the universal. Your inner life is rich with a vivid imagination and an unshakeable sense of compassion for all living beings."
      },
      {
        content: "Your emotions are like the ocean—vast, mysterious, and often influenced by the tides of those around you. You have a unique ability to absorb the feelings of others, which can be both a gift and a burden, as it allows for deep empathy but also leaves you vulnerable to emotional overwhelm."
      },
      {
        content: "Beneath the surface, your Pisces Moon equips you with incredible strengths:"
      },
      {
        content: "• ADAPTABILITY: You are highly adaptable, able to fit yourself into different situations and understand various perspectives with ease."
      },
      {
        content: "• HEALING ABILITIES: You have a natural healing ability, providing comfort and solace to those in distress through your mere presence or through artistic expressions like music or art."
      },
      {
        content: "• SPIRITUAL DEPTH: You possess a deep spiritual reservoir that guides you, often leading you to seek out transcendent experiences in both your personal life and your interactions with the world."
      },
      {
        content: "To thrive with a Pisces Moon, it is essential to create boundaries to protect your emotional well-being. Engage in practices that ground you and help you distinguish your emotions from those of others. Meditation, journaling, or spending time near water can provide the necessary clarity and calm."
      },
      {
        content: "Embrace your creative and intuitive nature by allowing yourself regular outlets for these expressions, whether through art, helping others, or exploring spirituality. Remember, while your capacity to feel deeply is your strength, managing how much you take on from others is crucial for maintaining your health and happiness. If you've ever been described as 'too sensitive' or 'a dreamer,' know that these traits are the very essence of your Pisces Moon's power."
      }
    ],
    strengths: ["Empathy", "Intuition", "Creativity", "Spiritual depth"],
    challenges: ["Emotional boundaries", "Escapism", "Over-sensitivity"]
  },

  // ============================================================================
  // RISING SIGNS (12) - Your Outer Persona, How Others See You, Life Approach
  // ============================================================================

  "aries-rising": {
    sign: "aries",
    planet: "rising",
    title: "ARIES",
    subtitle: "Rising Sign",
    sections: [
      {
        content: "You embody an aura of confidence, energy, and pioneering spirit. As an Aries rising, you are known for your direct approach to life and your willingness to take initiative. You are seen as the trailblazer of the zodiac, always ready to charge forward into new territory with courage and enthusiasm."
      },
      {
        content: "Your approach to life is characterized by a desire for action and independence. You thrive in dynamic environments where you can lead and make quick decisions. In social settings, this translates to a bold, assertive presence that commands attention and respect, though it may sometimes be perceived as impatient or aggressive."
      },
      {
        content: "With a spirit as fierce as fire, you engage others with directness and honesty. Your conversations are straightforward and energetic, often inspiring others to take action. Friends may find your enthusiasm contagious and your courage admirable, as you help them face challenges head-on."
      },
      {
        content: "Your natural leadership abilities make you a go-to person in crisis situations. You have a talent for making quick decisions and taking immediate action. However, your Aries rising can sometimes lead to challenges, particularly your tendency to act before thinking or to come across as overly competitive. Balancing your assertive nature with patience and consideration for others' pace can enhance your relationships and personal growth. For personal development, learning to think before acting and to collaborate rather than always leading will help you achieve your goals more effectively."
      }
    ],
    strengths: ["Leadership", "Courage", "Initiative", "Directness"],
    challenges: ["Impatience", "Impulsiveness", "Competitiveness"]
  },

  "taurus-rising": {
    sign: "taurus",
    planet: "rising",
    title: "TAURUS",
    subtitle: "Rising Sign",
    sections: [
      {
        content: "You embody an aura of calm, stability, and natural grace. As a Taurus rising, you are known for your grounded presence and appreciation for life's pleasures. You are seen as the reliable anchor of the zodiac, someone who brings a sense of peace and permanence to any situation."
      },
      {
        content: "Your approach to life is characterized by patience and a methodical nature. You thrive in stable, comfortable environments where you can build something lasting. In social settings, this translates to a warm, welcoming presence that makes others feel at ease, though it may sometimes be perceived as slow-moving or resistant to change."
      },
      {
        content: "With a demeanor as steady as the earth, you engage others with gentle consistency. Your conversations are thoughtful and practical, often centered on tangible matters and sensory experiences. Friends may find your reliability comforting and your aesthetic sense inspiring, as you help them appreciate life's simple pleasures."
      },
      {
        content: "Your natural ability to create beauty and comfort makes you a valued friend and partner. You have a talent for making spaces feel welcoming and for bringing a sense of calm to chaotic situations. However, your Taurus rising can sometimes lead to challenges, particularly your resistance to change or tendency toward possessiveness. Balancing your need for stability with flexibility and openness to new experiences can enhance your growth. For personal development, learning to embrace change while maintaining your core values will help you navigate life's transitions more gracefully."
      }
    ],
    strengths: ["Reliability", "Patience", "Aesthetic sense", "Groundedness"],
    challenges: ["Stubbornness", "Resistance to change", "Possessiveness"]
  },

  "gemini-rising": {
    sign: "gemini",
    planet: "rising",
    title: "GEMINI",
    subtitle: "Rising Sign",
    sections: [
      {
        content: "You embody an aura of curiosity, wit, and youthful energy. As a Gemini rising, you are known for your quick mind and ability to adapt to any social situation. You are seen as the communicator of the zodiac, always ready with an interesting story or fascinating fact to share."
      },
      {
        content: "Your approach to life is characterized by intellectual curiosity and versatility. You thrive in stimulating environments where you can learn, communicate, and connect with diverse people. In social settings, this translates to a charming, engaging presence that draws others into conversation, though it may sometimes be perceived as scattered or superficial."
      },
      {
        content: "With a mind as quick as the wind, you engage others with clever banter and genuine interest. Your conversations range across multiple topics, keeping interactions lively and entertaining. Friends may find your knowledge impressive and your social connections valuable, as you seem to know someone everywhere you go."
      },
      {
        content: "Your natural communication skills make you an excellent networker and mediator. You have a talent for seeing multiple perspectives and explaining complex ideas in accessible ways. However, your Gemini rising can sometimes lead to challenges, particularly your tendency to spread yourself too thin or to avoid emotional depth. Balancing your intellectual curiosity with emotional connection and focus can enhance your relationships. For personal development, learning to go deep rather than always wide, and to be present in the moment rather than always thinking ahead, will help you form more meaningful connections."
      }
    ],
    strengths: ["Communication", "Adaptability", "Wit", "Curiosity"],
    challenges: ["Restlessness", "Superficiality", "Inconsistency"]
  },

  "cancer-rising": {
    sign: "cancer",
    planet: "rising",
    title: "CANCER",
    subtitle: "Rising Sign",
    sections: [
      {
        content: "You embody an aura of warmth, sensitivity, and protective care. As a Cancer rising, you are known for your nurturing presence and emotional intuition. You are seen as the caregiver of the zodiac, someone who creates a sense of home and belonging wherever you go."
      },
      {
        content: "Your approach to life is characterized by emotional awareness and a desire for security. You thrive in comfortable, familiar environments where you feel safe to be vulnerable. In social settings, this translates to a gentle, empathetic presence that makes others feel cared for, though it may sometimes be perceived as shy or overly cautious."
      },
      {
        content: "With a heart as deep as the ocean, you engage others with genuine emotional connection. Your conversations often touch on personal matters and feelings, creating intimacy and trust. Friends may find your emotional support invaluable and your loyalty unwavering, as you remember details about their lives and check in regularly."
      },
      {
        content: "Your natural nurturing abilities make you a trusted confidant and supportive friend. You have a talent for creating safe spaces where others can express themselves freely. However, your Cancer rising can sometimes lead to challenges, particularly your tendency to be overly protective or to take things personally. Balancing your emotional sensitivity with healthy boundaries and resilience can enhance your wellbeing. For personal development, learning to protect yourself without building walls, and to nurture others without losing yourself, will help you maintain healthy relationships while honoring your caring nature."
      }
    ],
    strengths: ["Empathy", "Nurturing", "Intuition", "Loyalty"],
    challenges: ["Over-sensitivity", "Moodiness", "Defensiveness"]
  },

  "leo-rising": {
    sign: "leo",
    planet: "rising",
    title: "LEO",
    subtitle: "Rising Sign",
    sections: [
      {
        content: "You embody an aura of confidence, warmth, and natural charisma. As a Leo rising, you are known for your magnetic presence and generous spirit. You are seen as the star of the zodiac, someone who lights up any room with your radiant energy and creative flair."
      },
      {
        content: "Your approach to life is characterized by self-expression and a desire to make an impact. You thrive in environments where you can shine and inspire others. In social settings, this translates to a commanding, entertaining presence that draws people to you, though it may sometimes be perceived as attention-seeking or domineering."
      },
      {
        content: "With a spirit as bright as the sun, you engage others with warmth and enthusiasm. Your conversations are animated and often centered on creative ideas or inspiring stories. Friends may find your confidence empowering and your loyalty fierce, as you champion those you care about and celebrate their successes."
      },
      {
        content: "Your natural leadership and creative abilities make you a natural performer and motivator. You have a talent for inspiring others and bringing joy to any situation. However, your Leo rising can sometimes lead to challenges, particularly your need for recognition or tendency toward pride. Balancing your desire to shine with humility and genuine interest in others can enhance your relationships. For personal development, learning to share the spotlight and to find validation from within rather than external applause will help you develop authentic confidence and deeper connections."
      }
    ],
    strengths: ["Charisma", "Confidence", "Generosity", "Leadership"],
    challenges: ["Pride", "Need for attention", "Domineering"]
  },

  "virgo-rising": {
    sign: "virgo",
    planet: "rising",
    title: "VIRGO",
    subtitle: "Rising Sign",
    sections: [
      {
        content: "You embody an aura of competence, modesty, and attention to detail. As a Virgo rising, you are known for your practical approach and helpful nature. You are seen as the perfectionist of the zodiac, someone who brings order, efficiency, and thoughtful analysis to every situation."
      },
      {
        content: "Your approach to life is characterized by discernment and a desire to be useful. You thrive in organized environments where you can apply your analytical skills and improve systems. In social settings, this translates to a modest, observant presence that notices what needs to be done, though it may sometimes be perceived as critical or reserved."
      },
      {
        content: "With a mind as precise as a surgeon's scalpel, you engage others with practical advice and genuine helpfulness. Your conversations often focus on solving problems and sharing useful information. Friends may find your reliability invaluable and your insights helpful, as you notice details others miss and offer practical solutions."
      },
      {
        content: "Your natural analytical abilities make you an excellent problem-solver and organizer. You have a talent for seeing what needs improvement and implementing efficient solutions. However, your Virgo rising can sometimes lead to challenges, particularly your tendency toward perfectionism or excessive self-criticism. Balancing your high standards with self-compassion and acceptance of imperfection can enhance your wellbeing. For personal development, learning to see the forest as well as the trees, and to appreciate what's working rather than only what needs fixing, will help you find more joy and satisfaction in life."
      }
    ],
    strengths: ["Analytical ability", "Helpfulness", "Attention to detail", "Modesty"],
    challenges: ["Perfectionism", "Over-criticism", "Worry"]
  },

  "libra-rising": {
    sign: "libra",
    planet: "rising",
    title: "LIBRA",
    subtitle: "Rising Sign",
    sections: [
      {
        content: "You embody an aura of grace, charm, and diplomatic finesse. As a Libra rising, you are known for your balanced approach and social elegance. You are seen as the harmonizer of the zodiac, someone who brings beauty, fairness, and cooperation to every interaction."
      },
      {
        content: "Your approach to life is characterized by a desire for harmony and aesthetic appreciation. You thrive in beautiful, peaceful environments where you can connect with others in meaningful ways. In social settings, this translates to a charming, gracious presence that puts others at ease, though it may sometimes be perceived as indecisive or people-pleasing."
      },
      {
        content: "With a manner as balanced as the scales, you engage others with diplomatic tact and genuine interest in their perspectives. Your conversations seek common ground and mutual understanding. Friends may find your fairness admirable and your social graces impressive, as you navigate complex social situations with ease and help mediate conflicts."
      },
      {
        content: "Your natural diplomatic abilities make you an excellent mediator and partner. You have a talent for seeing multiple sides of any situation and creating win-win solutions. However, your Libra rising can sometimes lead to challenges, particularly your difficulty making decisions or tendency to suppress your own needs for the sake of harmony. Balancing your desire for peace with authentic self-expression and decisive action can enhance your personal power. For personal development, learning to make choices without endless deliberation and to honor your own needs as much as others' will help you find true balance."
      }
    ],
    strengths: ["Diplomacy", "Charm", "Fairness", "Social grace"],
    challenges: ["Indecisiveness", "People-pleasing", "Avoidance of conflict"]
  },

  "scorpio-rising": {
    sign: "scorpio",
    planet: "rising",
    title: "SCORPIO",
    subtitle: "Rising Sign",
    sections: [
      {
        content: "You embody an aura of intensity, mystery, and magnetic power. As a Scorpio rising, you are known for your penetrating gaze and transformative presence. You are seen as the detective of the zodiac, someone who sees beneath surface appearances and isn't afraid to explore life's depths."
      },
      {
        content: "Your approach to life is characterized by emotional intensity and a desire for authentic experience. You thrive in situations that require depth, focus, and transformation. In social settings, this translates to a powerful, enigmatic presence that intrigues others, though it may sometimes be perceived as intimidating or secretive."
      },
      {
        content: "With a presence as deep as the ocean's trenches, you engage others with piercing insight and emotional honesty. Your conversations go beyond small talk to explore meaningful, sometimes uncomfortable truths. Friends may find your loyalty fierce and your insights profound, as you see through pretenses and offer transformative perspectives."
      },
      {
        content: "Your natural investigative abilities make you an excellent researcher and strategist. You have a talent for uncovering hidden truths and facilitating deep transformation. However, your Scorpio rising can sometimes lead to challenges, particularly your tendency toward suspicion or need for control. Balancing your intensity with trust and vulnerability can enhance your relationships. For personal development, learning to trust others while maintaining healthy boundaries, and to use your power for healing rather than control, will help you form deeper, more authentic connections."
      }
    ],
    strengths: ["Intensity", "Insight", "Loyalty", "Transformative power"],
    challenges: ["Suspicion", "Secretiveness", "Control issues"]
  },

  "sagittarius-rising": {
    sign: "sagittarius",
    planet: "rising",
    title: "SAGITTARIUS",
    subtitle: "Rising Sign",
    sections: [
      {
        content: "You embody an aura of adventure and optimism. As a Sagittarius rising, you are known for your bright, forward-thinking attitude and a constant quest for knowledge and experience. You are seen as the eternal student and traveler of the zodiac, always searching for the bigger picture and higher truth."
      },
      {
        content: "Your approach to life is characterized by a desire for freedom and expansion. You thrive in open, dynamic environments where you can express your independence and urge for exploration. In social settings, this translates to a generous and inclusive attitude, making others feel welcomed in your quest for new experiences."
      },
      {
        content: "With a mind as broad as the horizon, you engage others in discussions that explore life's big questions. Your conversations often touch on topics of philosophy, travel, culture, and the meaning of life. Friends may find your perspective refreshing and enlightening, as you help them see beyond their immediate surroundings."
      },
      {
        content: "Your optimism is infectious. You have a talent for seeing the silver lining and encouraging others to do the same. Your positive outlook and jovial nature make you a sought-after companion in both good times and bad. However, your Sagittarius rising can sometimes lead to challenges, particularly your tendency to be overly blunt or to commit to more than you can handle due to your eternal optimism. Balancing your expansive nature with some practical considerations and sensitivity to others' feelings can enhance your relationships and personal growth. For personal growth, embracing a bit of structure and recognizing the value of small, detailed steps can help you achieve your grand visions."
      }
    ],
    strengths: ["Optimism", "Philosophical perspective", "Honesty", "Adventurous spirit"],
    challenges: ["Tactlessness", "Over-commitment", "Restlessness"]
  },

  "capricorn-rising": {
    sign: "capricorn",
    planet: "rising",
    title: "CAPRICORN",
    subtitle: "Rising Sign",
    sections: [
      {
        content: "You embody an aura of maturity, competence, and quiet authority. As a Capricorn rising, you are known for your professional demeanor and ambitious nature. You are seen as the executive of the zodiac, someone who takes life seriously and approaches every situation with strategic planning and determination."
      },
      {
        content: "Your approach to life is characterized by discipline and a focus on long-term goals. You thrive in structured environments where hard work and dedication are rewarded. In social settings, this translates to a reserved, dignified presence that commands respect, though it may sometimes be perceived as cold or overly serious."
      },
      {
        content: "With a demeanor as solid as mountain stone, you engage others with practical wisdom and measured responses. Your conversations often focus on goals, achievements, and realistic planning. Friends may find your reliability reassuring and your advice valuable, as you offer grounded perspectives and proven strategies for success."
      },
      {
        content: "Your natural organizational abilities make you an excellent leader and manager. You have a talent for building lasting structures and achieving ambitious goals through patient effort. However, your Capricorn rising can sometimes lead to challenges, particularly your tendency to be overly serious or to prioritize work over relationships. Balancing your ambition with playfulness and emotional connection can enhance your life satisfaction. For personal development, learning to enjoy the journey rather than only focusing on the destination, and to show your softer side more freely, will help you build warmer relationships while maintaining your admirable achievements."
      }
    ],
    strengths: ["Discipline", "Ambition", "Reliability", "Strategic thinking"],
    challenges: ["Over-seriousness", "Emotional reserve", "Workaholic tendencies"]
  },

  "aquarius-rising": {
    sign: "aquarius",
    planet: "rising",
    title: "AQUARIUS",
    subtitle: "Rising Sign",
    sections: [
      {
        content: "You embody an aura of originality, independence, and progressive thinking. As an Aquarius rising, you are known for your unique style and humanitarian values. You are seen as the innovator of the zodiac, someone who marches to the beat of their own drum and envisions a better future for all."
      },
      {
        content: "Your approach to life is characterized by intellectual curiosity and a desire for freedom. You thrive in environments that value innovation and equality. In social settings, this translates to a friendly yet detached presence that treats everyone as equals, though it may sometimes be perceived as aloof or eccentric."
      },
      {
        content: "With a perspective as unique as a snowflake, you engage others with original ideas and egalitarian values. Your conversations often explore future possibilities, social issues, and unconventional concepts. Friends may find your open-mindedness refreshing and your ideas inspiring, as you help them see beyond conventional limitations."
      },
      {
        content: "Your natural innovative abilities make you an excellent problem-solver and change agent. You have a talent for seeing what could be rather than what is, and for bringing people together around progressive ideals. However, your Aquarius rising can sometimes lead to challenges, particularly your tendency toward emotional detachment or rebelliousness for its own sake. Balancing your need for independence with intimate connection and your progressive ideals with practical implementation can enhance your effectiveness. For personal development, learning to engage emotionally as well as intellectually, and to work within systems while changing them, will help you manifest your visionary ideas more successfully."
      }
    ],
    strengths: ["Originality", "Open-mindedness", "Humanitarian values", "Innovation"],
    challenges: ["Emotional detachment", "Rebelliousness", "Unpredictability"]
  },

  "pisces-rising": {
    sign: "pisces",
    planet: "rising",
    title: "PISCES",
    subtitle: "Rising Sign",
    sections: [
      {
        content: "You embody an aura of gentleness, compassion, and ethereal beauty. As a Pisces rising, you are known for your dreamy presence and intuitive understanding. You are seen as the mystic of the zodiac, someone who moves through life with fluid grace and deep empathy for all beings."
      },
      {
        content: "Your approach to life is characterized by sensitivity and a desire to transcend the mundane. You thrive in creative, spiritual environments where you can express your imagination and compassion. In social settings, this translates to a soft, adaptable presence that makes others feel understood, though it may sometimes be perceived as vague or overly passive."
      },
      {
        content: "With a presence as fluid as water, you engage others with empathetic listening and intuitive understanding. Your conversations often touch on spiritual matters, creative visions, and emotional truths. Friends may find your compassion healing and your creativity inspiring, as you see the divine in everyday life and help others connect with their deeper selves."
      },
      {
        content: "Your natural empathic abilities make you an excellent healer and artist. You have a talent for sensing what others need and for expressing the ineffable through creative means. However, your Pisces rising can sometimes lead to challenges, particularly your tendency to absorb others' emotions or to escape from harsh realities. Balancing your sensitivity with healthy boundaries and your idealism with practical grounding can enhance your wellbeing. For personal development, learning to distinguish your feelings from others', and to engage with reality while maintaining your spiritual connection, will help you use your gifts without being overwhelmed by them."
      }
    ],
    strengths: ["Empathy", "Creativity", "Intuition", "Adaptability"],
    challenges: ["Boundary issues", "Escapism", "Over-idealization"]
  },

  // ============================================================================
  // MERCURY SIGNS (12) - Communication Style, Thinking, Learning
  // ============================================================================

  "aries-mercury": {
    sign: "aries",
    planet: "mercury",
    title: "ARIES",
    subtitle: "Mercury in Aries",
    sections: [
      {
        content: "With Mercury in Aries, your mind is quick, direct, and pioneering. You think fast, speak boldly, and make decisions with remarkable speed. Your communication style is straightforward and energetic, cutting through complexity to get straight to the point. You have little patience for lengthy explanations or diplomatic hedging—you say what you mean and expect others to do the same."
      },
      {
        content: "Your learning style is active and experiential. You grasp concepts quickly, especially when you can jump in and try things yourself. Traditional, slow-paced learning environments may frustrate you; you prefer to learn by doing, making mistakes, and moving forward rapidly. Your mind is always racing ahead to the next idea, the next challenge, the next debate to win."
      },
      {
        content: "In conversations, you're animated and enthusiastic, often interrupting with your ideas before others finish speaking. You excel at brainstorming, problem-solving under pressure, and making quick decisions. However, you may struggle with patience in discussions, attention to detail, or considering all perspectives before speaking. Your challenge is to slow down enough to truly listen and to think before you speak, especially in sensitive situations."
      }
    ],
    strengths: ["Quick thinking", "Direct communication", "Decisiveness", "Mental courage"],
    challenges: ["Impatience", "Impulsive speech", "Argumentativeness"]
  },

  "taurus-mercury": {
    sign: "taurus",
    planet: "mercury",
    title: "TAURUS",
    subtitle: "Mercury in Taurus",
    sections: [
      {
        content: "With Mercury in Taurus, your mind is practical, methodical, and grounded in reality. You think deliberately, speak carefully, and make decisions only after thorough consideration. Your communication style is calm and measured, preferring substance over flash and proven facts over abstract theories. You have a gift for explaining complex ideas in simple, practical terms that anyone can understand."
      },
      {
        content: "Your learning style is steady and thorough. You need time to absorb information fully, preferring to master one thing completely before moving to the next. You learn best through hands-on experience and concrete examples rather than abstract concepts. Once you've learned something, you retain it permanently—your memory is excellent, especially for practical information and sensory details."
      },
      {
        content: "In conversations, you're patient and thoughtful, taking time to formulate your responses. You excel at practical problem-solving, financial planning, and any thinking that requires persistence and common sense. However, you may struggle with mental flexibility, quick decisions, or abstract thinking. Your challenge is to remain open to new ideas and to speed up your thinking process when situations require quick responses."
      }
    ],
    strengths: ["Practical thinking", "Thorough consideration", "Excellent memory", "Common sense"],
    challenges: ["Mental stubbornness", "Slow processing", "Resistance to new ideas"]
  },

  "gemini-mercury": {
    sign: "gemini",
    planet: "mercury",
    title: "GEMINI",
    subtitle: "Mercury in Gemini",
    sections: [
      {
        content: "With Mercury in Gemini, your mind is versatile, curious, and lightning-fast. You think quickly, speak eloquently, and make connections that others miss. Your communication style is witty, engaging, and adaptable, able to discuss any topic with anyone. You have a natural gift for language, whether written or spoken, and can explain ideas with clarity and charm."
      },
      {
        content: "Your learning style is multifaceted and social. You absorb information rapidly from multiple sources simultaneously, thriving in stimulating environments with variety and interaction. You learn best through conversation, reading, and exploring diverse subjects. Your mind needs constant stimulation—boredom is your enemy. You may have many interests and skills rather than deep expertise in one area."
      },
      {
        content: "In conversations, you're animated and engaging, able to discuss multiple topics in rapid succession. You excel at networking, writing, teaching, and any work requiring communication skills and mental agility. However, you may struggle with focus, depth, or following through on ideas. Your challenge is to develop concentration and to go deep rather than always skimming the surface of knowledge."
      }
    ],
    strengths: ["Mental agility", "Communication skills", "Versatility", "Quick learning"],
    challenges: ["Scattered focus", "Superficiality", "Mental restlessness"]
  },

  "cancer-mercury": {
    sign: "cancer",
    planet: "mercury",
    title: "CANCER",
    subtitle: "Mercury in Cancer",
    sections: [
      {
        content: "With Mercury in Cancer, your mind is intuitive, emotional, and deeply retentive. You think with your feelings, speak from your heart, and make decisions based on emotional resonance as much as logic. Your communication style is gentle and empathetic, naturally attuned to others' feelings and unspoken needs. You have a gift for emotional intelligence and for expressing feelings in ways that create connection and understanding."
      },
      {
        content: "Your learning style is personal and memory-based. You absorb information best when it has emotional significance or connects to your personal experience. You learn through stories, emotional engagement, and creating personal connections to the material. Your memory is exceptional, especially for emotional experiences, conversations, and details about people you care about. You never forget a kindness—or a slight."
      },
      {
        content: "In conversations, you're nurturing and protective, creating safe spaces for others to share their feelings. You excel at counseling, writing about emotions, and any communication requiring empathy and sensitivity. However, you may struggle with objectivity, taking things personally, or letting emotions cloud your judgment. Your challenge is to develop emotional detachment when needed and to communicate clearly even when feelings are involved."
      }
    ],
    strengths: ["Emotional intelligence", "Intuitive understanding", "Excellent memory", "Empathetic communication"],
    challenges: ["Subjective thinking", "Moodiness affecting judgment", "Taking things personally"]
  },

  "leo-mercury": {
    sign: "leo",
    planet: "mercury",
    title: "LEO",
    subtitle: "Mercury in Leo",
    sections: [
      {
        content: "With Mercury in Leo, your mind is creative, confident, and dramatic. You think boldly, speak with authority, and make decisions with conviction. Your communication style is warm, expressive, and commanding, naturally drawing attention and inspiring others. You have a gift for storytelling, public speaking, and expressing ideas with flair and passion that makes people listen and remember."
      },
      {
        content: "Your learning style is creative and performance-based. You absorb information best when you can make it your own, add your personal touch, and share it with others. You learn through teaching, performing, and creative expression. You thrive when you're the center of attention in learning environments and struggle when forced to be passive or anonymous. Your pride in your intelligence motivates you to excel."
      },
      {
        content: "In conversations, you're entertaining and generous, sharing ideas with enthusiasm and warmth. You excel at leadership communication, creative writing, and any speaking that requires confidence and charisma. However, you may struggle with listening to others' ideas, accepting criticism, or sharing the intellectual spotlight. Your challenge is to develop humility in communication and to recognize that others' ideas have value too."
      }
    ],
    strengths: ["Confident communication", "Creative thinking", "Leadership presence", "Inspiring speech"],
    challenges: ["Intellectual pride", "Dominating conversations", "Difficulty accepting criticism"]
  },

  "virgo-mercury": {
    sign: "virgo",
    planet: "mercury",
    title: "VIRGO",
    subtitle: "Mercury in Virgo",
    sections: [
      {
        content: "With Mercury in Virgo, your mind is analytical, precise, and detail-oriented. You think systematically, speak carefully, and make decisions based on thorough analysis. Your communication style is clear, practical, and helpful, naturally focusing on what's useful and what needs improvement. You have a gift for seeing flaws, solving problems, and explaining complex processes with remarkable clarity and precision."
      },
      {
        content: "Your learning style is methodical and perfectionistic. You absorb information best through organized study, detailed notes, and systematic practice. You learn by analyzing, categorizing, and understanding how things work. You excel in subjects requiring precision and attention to detail. Your mind naturally seeks to improve and refine everything it encounters, constantly looking for ways to make things better."
      },
      {
        content: "In conversations, you're helpful and informative, offering practical advice and useful information. You excel at technical writing, editing, analysis, and any communication requiring precision and attention to detail. However, you may struggle with perfectionism, over-criticism, or getting lost in details while missing the big picture. Your challenge is to accept imperfection and to balance your analytical nature with intuition and spontaneity."
      }
    ],
    strengths: ["Analytical ability", "Attention to detail", "Clear communication", "Problem-solving"],
    challenges: ["Over-analysis", "Perfectionism in speech", "Critical thinking becoming criticism"]
  },

  "libra-mercury": {
    sign: "libra",
    planet: "mercury",
    title: "LIBRA",
    subtitle: "Mercury in Libra",
    sections: [
      {
        content: "With Mercury in Libra, your mind is balanced, diplomatic, and aesthetically attuned. You think in terms of relationships and fairness, speak with grace and tact, and make decisions by weighing all perspectives. Your communication style is charming, cooperative, and peace-making, naturally seeking harmony and common ground. You have a gift for seeing multiple viewpoints and for expressing ideas in ways that bring people together rather than dividing them."
      },
      {
        content: "Your learning style is social and comparative. You absorb information best through discussion, debate, and considering multiple perspectives. You learn by comparing ideas, finding patterns, and understanding relationships between concepts. You thrive in collaborative learning environments and struggle when forced to work in isolation. Your mind naturally seeks balance, fairness, and aesthetic beauty in ideas."
      },
      {
        content: "In conversations, you're diplomatic and fair-minded, able to mediate conflicts and find win-win solutions. You excel at negotiation, counseling, and any communication requiring tact and social grace. However, you may struggle with decisiveness, saying what you really think, or taking a firm stand. Your challenge is to develop conviction in your ideas and to speak your truth even when it might create temporary disharmony."
      }
    ],
    strengths: ["Diplomatic communication", "Balanced thinking", "Social intelligence", "Mediation skills"],
    challenges: ["Indecisiveness", "People-pleasing in speech", "Avoiding difficult truths"]
  },

  "scorpio-mercury": {
    sign: "scorpio",
    planet: "mercury",
    title: "SCORPIO",
    subtitle: "Mercury in Scorpio",
    sections: [
      {
        content: "With Mercury in Scorpio, your mind is penetrating, intense, and investigative. You think deeply, speak powerfully, and make decisions based on gut instinct as much as logic. Your communication style is direct, probing, and transformative, cutting through superficiality to get to the heart of matters. You have a gift for research, psychology, and understanding hidden motivations and unspoken truths."
      },
      {
        content: "Your learning style is focused and obsessive. You absorb information best by diving deep into subjects that fascinate you, leaving no stone unturned. You learn through intense study, investigation, and getting to the bottom of mysteries. You have little interest in surface-level knowledge—you want to understand the why behind everything. Your mind is like a detective, always searching for hidden truths and deeper meanings."
      },
      {
        content: "In conversations, you're intense and probing, asking questions that make others uncomfortable but reveal important truths. You excel at research, investigation, psychology, and any communication requiring depth and insight. However, you may struggle with trust, suspicion, or using words as weapons. Your challenge is to use your penetrating insight for healing rather than control, and to communicate with vulnerability as well as power."
      }
    ],
    strengths: ["Deep thinking", "Investigative ability", "Psychological insight", "Powerful communication"],
    challenges: ["Suspicion", "Secretiveness", "Intensity in communication"]
  },

  "sagittarius-mercury": {
    sign: "sagittarius",
    planet: "mercury",
    title: "SAGITTARIUS",
    subtitle: "Mercury in Sagittarius",
    sections: [
      {
        content: "With Mercury in Sagittarius, your mind is expansive, optimistic, and philosophical. You think big-picture, speak honestly, and make decisions based on faith and vision. Your communication style is enthusiastic, direct, and inspiring, naturally seeing possibilities and sharing your vision with infectious optimism. You have a gift for teaching, storytelling, and expressing ideas that expand others' horizons and inspire them to think bigger."
      },
      {
        content: "Your learning style is exploratory and meaning-focused. You absorb information best when you understand the bigger picture and how it connects to life's grand questions. You learn through experience, travel, and exposure to different cultures and philosophies. You have little patience for details or rote memorization—you want to understand the meaning and significance of what you're learning. Your mind is always searching for truth and wisdom."
      },
      {
        content: "In conversations, you're enthusiastic and honest, sometimes brutally so. You excel at teaching, public speaking, and any communication requiring vision and inspiration. However, you may struggle with tact, attention to detail, or exaggeration. Your challenge is to balance your honesty with sensitivity, to pay attention to facts and details, and to recognize that your truth isn't the only truth."
      }
    ],
    strengths: ["Visionary thinking", "Honest communication", "Teaching ability", "Optimistic outlook"],
    challenges: ["Tactlessness", "Exaggeration", "Overlooking details"]
  },

  "capricorn-mercury": {
    sign: "capricorn",
    planet: "mercury",
    title: "CAPRICORN",
    subtitle: "Mercury in Capricorn",
    sections: [
      {
        content: "With Mercury in Capricorn, your mind is strategic, disciplined, and goal-oriented. You think practically, speak with authority, and make decisions based on long-term consequences. Your communication style is professional, structured, and efficient, naturally focusing on what's realistic and achievable. You have a gift for planning, organization, and expressing ideas in ways that command respect and demonstrate competence."
      },
      {
        content: "Your learning style is structured and ambitious. You absorb information best through organized study, clear goals, and understanding how knowledge will help you achieve your ambitions. You learn by building on foundations, mastering basics before advancing, and seeing the practical application of what you're learning. You take education seriously and are willing to work hard for mastery. Your mind naturally thinks in terms of strategy and long-term planning."
      },
      {
        content: "In conversations, you're serious and authoritative, offering practical wisdom and realistic advice. You excel at business communication, strategic planning, and any speaking that requires professionalism and credibility. However, you may struggle with spontaneity, humor, or emotional expression. Your challenge is to lighten up occasionally, to value emotional intelligence alongside practical intelligence, and to communicate with warmth as well as authority."
      }
    ],
    strengths: ["Strategic thinking", "Professional communication", "Organizational ability", "Practical wisdom"],
    challenges: ["Pessimism", "Rigidity in thinking", "Difficulty with emotional expression"]
  },

  "aquarius-mercury": {
    sign: "aquarius",
    planet: "mercury",
    title: "AQUARIUS",
    subtitle: "Mercury in Aquarius",
    sections: [
      {
        content: "With Mercury in Aquarius, your mind is original, innovative, and humanitarian. You think unconventionally, speak progressively, and make decisions based on logic and ideals. Your communication style is unique, intellectual, and forward-thinking, naturally challenging the status quo and envisioning better futures. You have a gift for innovation, technology, and expressing ideas that others haven't yet considered."
      },
      {
        content: "Your learning style is independent and experimental. You absorb information best when you can explore ideas freely, question everything, and make your own connections. You learn through experimentation, technology, and exposure to diverse perspectives. You resist traditional teaching methods and prefer to discover knowledge on your own terms. Your mind naturally thinks in terms of systems, patterns, and future possibilities."
      },
      {
        content: "In conversations, you're intellectually stimulating and egalitarian, treating everyone as equals and sharing revolutionary ideas. You excel at innovation, technology, and any communication requiring original thinking and progressive vision. However, you may struggle with emotional connection, practical application, or being too detached. Your challenge is to connect your brilliant ideas to human emotions and practical realities, and to communicate with warmth as well as intellect."
      }
    ],
    strengths: ["Original thinking", "Innovative ideas", "Objective analysis", "Progressive communication"],
    challenges: ["Emotional detachment", "Rebelliousness", "Impractical ideas"]
  },

  "pisces-mercury": {
    sign: "pisces",
    planet: "mercury",
    title: "PISCES",
    subtitle: "Mercury in Pisces",
    sections: [
      {
        content: "With Mercury in Pisces, your mind is intuitive, imaginative, and spiritually attuned. You think in images and feelings, speak poetically, and make decisions based on intuition as much as logic. Your communication style is gentle, empathetic, and artistic, naturally expressing the ineffable and connecting with others on a soul level. You have a gift for creativity, spirituality, and expressing ideas that touch the heart and inspire the imagination."
      },
      {
        content: "Your learning style is intuitive and holistic. You absorb information best through stories, images, and emotional connection to the material. You learn by absorbing the essence of things rather than memorizing facts, and by understanding how everything connects to everything else. You may struggle with linear, logical subjects but excel in creative, spiritual, or artistic fields. Your mind naturally thinks in metaphors and sees the unity underlying apparent diversity."
      },
      {
        content: "In conversations, you're compassionate and imaginative, able to understand unspoken feelings and express complex emotions. You excel at creative writing, counseling, and any communication requiring empathy and imagination. However, you may struggle with clarity, boundaries, or distinguishing fact from fantasy. Your challenge is to ground your intuitive insights in practical reality and to communicate clearly even when dealing with subtle, spiritual matters."
      }
    ],
    strengths: ["Intuitive thinking", "Creative communication", "Empathetic understanding", "Poetic expression"],
    challenges: ["Vagueness", "Confusion", "Difficulty with logic"]
  },

  // ============================================================================
  // VENUS SIGNS (12) - Love Style, Values, Aesthetics, Relationships
  // ============================================================================

  "aries-venus": {
    sign: "aries",
    planet: "venus",
    title: "ARIES",
    subtitle: "Venus in Aries",
    sections: [
      {
        content: "With Venus in Aries, you love boldly, passionately, and with complete spontaneity. You're attracted to confidence, independence, and the thrill of the chase. Your love style is direct and enthusiastic—when you're interested in someone, you make it known immediately. You value courage, honesty, and excitement in relationships, and you're drawn to partners who can match your energy and keep up with your adventurous spirit."
      },
      {
        content: "You express affection through bold gestures, playful competition, and physical activity. You're not one for subtle hints or playing games—you prefer straightforward expressions of interest and passion. In relationships, you need freedom, excitement, and a partner who appreciates your independence. You fall in love quickly and intensely, though you may lose interest just as fast if the spark fades or if you feel constrained. Your aesthetic preferences lean toward bold, striking, and energetic styles—you appreciate art and beauty that makes a strong, immediate impact."
      },
      {
        content: "Your challenge is to develop patience in love and to appreciate the slower, deeper aspects of relationships beyond the initial excitement. Learning to sustain passion through commitment and to balance your need for independence with intimacy will help you build lasting connections."
      }
    ],
    strengths: ["Passionate", "Direct", "Enthusiastic", "Courageous in love"],
    challenges: ["Impatience", "Selfishness", "Losing interest quickly"]
  },

  "taurus-venus": {
    sign: "taurus",
    planet: "venus",
    title: "TAURUS",
    subtitle: "Venus in Taurus",
    sections: [
      {
        content: "With Venus in Taurus, you love steadily, sensually, and with unwavering loyalty. You're attracted to stability, reliability, and physical beauty. Your love style is patient and devoted—you take your time in relationships, preferring to build something lasting rather than rushing into fleeting connections. You value security, comfort, and sensual pleasure in relationships, and you're drawn to partners who appreciate the finer things in life and can provide emotional and material stability."
      },
      {
        content: "You express affection through physical touch, gifts, creating comfortable environments, and consistent presence. You're a sensual lover who appreciates good food, beautiful surroundings, and physical intimacy. In relationships, you need security, loyalty, and a partner who values commitment as much as you do. You fall in love slowly but deeply, and once committed, you're incredibly loyal and devoted. Your aesthetic preferences lean toward classic, natural, and luxurious styles—you appreciate quality, beauty, and things that engage the senses."
      },
      {
        content: "Your challenge is to remain flexible in relationships and to avoid possessiveness or resistance to change. Learning to appreciate emotional growth alongside stability and to express your feelings verbally as well as physically will deepen your connections."
      }
    ],
    strengths: ["Loyal", "Sensual", "Stable", "Devoted"],
    challenges: ["Possessiveness", "Stubbornness", "Materialism"]
  },

  "gemini-venus": {
    sign: "gemini",
    planet: "venus",
    title: "GEMINI",
    subtitle: "Venus in Gemini",
    sections: [
      {
        content: "With Venus in Gemini, you love intellectually, playfully, and with delightful variety. You're attracted to intelligence, wit, and good conversation. Your love style is light, curious, and communicative—you fall in love with minds as much as bodies. You value mental stimulation, humor, and variety in relationships, and you're drawn to partners who can engage you in interesting conversations and keep you mentally entertained."
      },
      {
        content: "You express affection through words, texts, playful banter, and sharing ideas. You're a flirtatious communicator who enjoys the dance of getting to know someone. In relationships, you need mental stimulation, variety, and a partner who understands your need for social interaction and intellectual freedom. You may have multiple interests in love or struggle with commitment if you feel mentally bored. Your aesthetic preferences lean toward clever, eclectic, and youthful styles—you appreciate art and beauty that engages the mind and tells a story."
      },
      {
        content: "Your challenge is to develop emotional depth in relationships and to commit fully even when the initial mental excitement fades. Learning to appreciate emotional intimacy alongside intellectual connection and to be present rather than always seeking the next interesting conversation will help you build deeper bonds."
      }
    ],
    strengths: ["Communicative", "Playful", "Adaptable", "Intellectually engaging"],
    challenges: ["Superficiality", "Commitment issues", "Emotional detachment"]
  },

  "cancer-venus": {
    sign: "cancer",
    planet: "venus",
    title: "CANCER",
    subtitle: "Venus in Cancer",
    sections: [
      {
        content: "With Venus in Cancer, you love nurturingly, emotionally, and with deep devotion. You're attracted to sensitivity, emotional depth, and the feeling of home. Your love style is caring, protective, and intuitive—you want to create a safe emotional haven for your loved ones. You value emotional security, family, and deep emotional bonds in relationships, and you're drawn to partners who appreciate your nurturing nature and can provide emotional safety in return."
      },
      {
        content: "You express affection through caring actions, cooking, creating comfortable home environments, and emotional support. You're a deeply feeling lover who needs emotional intimacy and security. In relationships, you need trust, emotional reciprocity, and a partner who values family and emotional connection. You fall in love with your whole heart and can be quite vulnerable, which makes you cautious about opening up. Your aesthetic preferences lean toward nostalgic, cozy, and traditional styles—you appreciate beauty that evokes emotion and creates a sense of home."
      },
      {
        content: "Your challenge is to avoid smothering partners with your care and to maintain healthy boundaries in relationships. Learning to express your needs directly rather than expecting others to intuit them, and to balance nurturing others with self-care, will help you build healthier connections."
      }
    ],
    strengths: ["Nurturing", "Emotionally deep", "Loyal", "Intuitive"],
    challenges: ["Moodiness", "Clinginess", "Over-sensitivity"]
  },

  "leo-venus": {
    sign: "leo",
    planet: "venus",
    title: "LEO",
    subtitle: "Venus in Leo",
    sections: [
      {
        content: "With Venus in Leo, you love dramatically, generously, and with regal passion. You're attracted to confidence, creativity, and people who appreciate your magnificence. Your love style is warm, expressive, and romantic—you want grand gestures, passionate declarations, and relationships that feel special and celebrated. You value loyalty, admiration, and romance in relationships, and you're drawn to partners who make you feel like royalty and aren't afraid to show you off."
      },
      {
        content: "You express affection through grand romantic gestures, lavish gifts, public displays of affection, and making your partner feel special. You're a generous, warm-hearted lover who loves to spoil those you care about. In relationships, you need appreciation, loyalty, and a partner who celebrates you and isn't threatened by your need to shine. You fall in love with drama and passion, wanting a love story worthy of the stage. Your aesthetic preferences lean toward bold, luxurious, and dramatic styles—you appreciate beauty that commands attention and expresses creativity."
      },
      {
        content: "Your challenge is to share the spotlight in relationships and to appreciate quiet, everyday expressions of love alongside grand gestures. Learning to give without expecting constant appreciation and to love from a place of security rather than need for validation will deepen your connections."
      }
    ],
    strengths: ["Generous", "Romantic", "Loyal", "Warm-hearted"],
    challenges: ["Need for admiration", "Drama", "Pride"]
  },

  "virgo-venus": {
    sign: "virgo",
    planet: "venus",
    title: "VIRGO",
    subtitle: "Venus in Virgo",
    sections: [
      {
        content: "With Venus in Virgo, you love practically, devotedly, and with careful attention to detail. You're attracted to competence, intelligence, and people who take care of themselves. Your love style is helpful, modest, and service-oriented—you show love through acts of service and attention to your partner's needs. You value reliability, health, and improvement in relationships, and you're drawn to partners who appreciate your practical devotion and share your values of self-improvement."
      },
      {
        content: "You express affection through helpful actions, remembering details, fixing problems, and taking care of practical needs. You're a devoted lover who shows love through service rather than grand gestures. In relationships, you need appreciation for your efforts, intellectual compatibility, and a partner who values your practical approach to love. You may be critical or have high standards, but this comes from your desire for the relationship to be the best it can be. Your aesthetic preferences lean toward clean, natural, and refined styles—you appreciate understated beauty and functional design."
      },
      {
        content: "Your challenge is to accept imperfection in yourself, your partner, and your relationship. Learning to express affection verbally and physically, not just through service, and to appreciate what's working rather than always focusing on what needs improvement will help you build warmer connections."
      }
    ],
    strengths: ["Devoted", "Helpful", "Reliable", "Attentive"],
    challenges: ["Criticism", "Perfectionism", "Difficulty expressing emotion"]
  },

  "libra-venus": {
    sign: "libra",
    planet: "venus",
    title: "LIBRA",
    subtitle: "Venus in Libra",
    sections: [
      {
        content: "With Venus in Libra, you love harmoniously, romantically, and with graceful charm. You're attracted to beauty, balance, and social grace. Your love style is diplomatic, romantic, and partnership-oriented—you're most comfortable in a relationship and excel at creating harmony and beauty in your connections. You value fairness, romance, and aesthetic beauty in relationships, and you're drawn to partners who appreciate art, culture, and the finer things in life."
      },
      {
        content: "You express affection through romantic gestures, creating beautiful experiences, thoughtful gifts, and maintaining harmony. You're a charming, considerate lover who naturally knows how to make partners feel special and appreciated. In relationships, you need balance, romance, and a partner who values partnership as much as you do. You may struggle with being alone or making decisions that might upset the harmony. Your aesthetic preferences lean toward elegant, balanced, and beautiful styles—you have excellent taste and appreciate classical beauty and artistic refinement."
      },
      {
        content: "Your challenge is to maintain your identity within relationships and to address conflicts directly rather than avoiding them for the sake of peace. Learning to be comfortable alone and to make decisions based on your own needs, not just your partner's, will help you build more authentic connections."
      }
    ],
    strengths: ["Charming", "Romantic", "Fair-minded", "Aesthetically refined"],
    challenges: ["Indecisiveness", "People-pleasing", "Losing self in relationships"]
  },

  "scorpio-venus": {
    sign: "scorpio",
    planet: "venus",
    title: "SCORPIO",
    subtitle: "Venus in Scorpio",
    sections: [
      {
        content: "With Venus in Scorpio, you love intensely, deeply, and with transformative passion. You're attracted to depth, mystery, and emotional intensity. Your love style is all-or-nothing, passionate, and deeply committed—you don't do casual or superficial in love. You value loyalty, emotional depth, and transformative connection in relationships, and you're drawn to partners who aren't afraid of emotional intensity and can meet you in the depths."
      },
      {
        content: "You express affection through intense emotional connection, physical passion, loyalty, and merging completely with your partner. You're a deeply passionate lover who wants to know and be known completely. In relationships, you need trust, emotional honesty, and a partner who can handle your intensity and desire for deep connection. You're fiercely loyal but can be jealous or possessive. Your aesthetic preferences lean toward dark, mysterious, and powerful styles—you appreciate beauty with depth and edge."
      },
      {
        content: "Your challenge is to trust without controlling and to allow your partner freedom while maintaining intimacy. Learning to express vulnerability without fear of betrayal and to balance intensity with lightness will help you build healthier, more sustainable connections."
      }
    ],
    strengths: ["Passionate", "Loyal", "Emotionally deep", "Transformative"],
    challenges: ["Jealousy", "Possessiveness", "Intensity"]
  },

  "sagittarius-venus": {
    sign: "sagittarius",
    planet: "venus",
    title: "SAGITTARIUS",
    subtitle: "Venus in Sagittarius",
    sections: [
      {
        content: "With Venus in Sagittarius, you love freely, adventurously, and with optimistic enthusiasm. You're attracted to freedom, adventure, and philosophical minds. Your love style is open, honest, and exploratory—you want a partner who's also a friend and adventure companion. You value freedom, honesty, and growth in relationships, and you're drawn to partners who share your love of exploration, whether physical, intellectual, or spiritual."
      },
      {
        content: "You express affection through shared adventures, honest communication, humor, and encouraging your partner's growth. You're an enthusiastic, optimistic lover who brings fun and expansion to relationships. In relationships, you need freedom, honesty, and a partner who understands that commitment doesn't mean confinement. You may struggle with traditional relationship structures or feel restless if things become too routine. Your aesthetic preferences lean toward eclectic, cultural, and natural styles—you appreciate beauty from different cultures and art that tells stories of adventure."
      },
      {
        content: "Your challenge is to commit fully without feeling trapped and to appreciate the depth that comes from staying rather than always seeking the next adventure. Learning to balance freedom with intimacy and to be tactful in your honesty will help you build deeper connections."
      }
    ],
    strengths: ["Optimistic", "Honest", "Adventurous", "Growth-oriented"],
    challenges: ["Commitment issues", "Tactlessness", "Restlessness"]
  },

  "capricorn-venus": {
    sign: "capricorn",
    planet: "venus",
    title: "CAPRICORN",
    subtitle: "Venus in Capricorn",
    sections: [
      {
        content: "With Venus in Capricorn, you love seriously, loyally, and with long-term commitment. You're attracted to ambition, maturity, and stability. Your love style is reserved, traditional, and goal-oriented—you take relationships seriously and prefer to build something lasting. You value loyalty, respect, and achievement in relationships, and you're drawn to partners who share your ambition and can help you build a secure future together."
      },
      {
        content: "You express affection through actions, commitment, providing security, and helping your partner achieve their goals. You're a devoted, responsible lover who shows love through reliability and building a solid foundation together. In relationships, you need respect, loyalty, and a partner who takes the relationship as seriously as you do. You may be slow to open up emotionally but are deeply committed once you do. Your aesthetic preferences lean toward classic, quality, and timeless styles—you appreciate beauty that lasts and demonstrates good taste."
      },
      {
        content: "Your challenge is to express warmth and affection openly, not just through actions and achievement. Learning to be vulnerable, to play and enjoy the present moment, and to value emotional connection as much as practical partnership will help you build warmer, more fulfilling relationships."
      }
    ],
    strengths: ["Loyal", "Responsible", "Committed", "Stable"],
    challenges: ["Emotional reserve", "Workaholic tendencies", "Difficulty with vulnerability"]
  },

  "aquarius-venus": {
    sign: "aquarius",
    planet: "venus",
    title: "AQUARIUS",
    subtitle: "Venus in Aquarius",
    sections: [
      {
        content: "With Venus in Aquarius, you love unconventionally, intellectually, and with friendly detachment. You're attracted to uniqueness, intelligence, and independence. Your love style is friendship-based, egalitarian, and non-traditional—you want a partner who's also your best friend and intellectual equal. You value freedom, individuality, and mental connection in relationships, and you're drawn to partners who are unique, progressive, and comfortable with an unconventional approach to love."
      },
      {
        content: "You express affection through friendship, intellectual connection, respecting your partner's independence, and supporting their individuality. You're a loyal, accepting lover who values equality and freedom in relationships. In relationships, you need space, intellectual stimulation, and a partner who doesn't try to possess or change you. You may struggle with traditional expressions of romance or emotional intensity. Your aesthetic preferences lean toward modern, unique, and avant-garde styles—you appreciate innovative beauty and art that challenges conventions."
      },
      {
        content: "Your challenge is to develop emotional intimacy alongside intellectual connection and to express feelings, not just ideas. Learning to appreciate traditional romance occasionally and to balance your need for independence with your partner's need for closeness will help you build deeper connections."
      }
    ],
    strengths: ["Accepting", "Loyal", "Intellectually engaging", "Independent"],
    challenges: ["Emotional detachment", "Difficulty with intimacy", "Unconventional to a fault"]
  },

  "pisces-venus": {
    sign: "pisces",
    planet: "venus",
    title: "PISCES",
    subtitle: "Venus in Pisces",
    sections: [
      {
        content: "With Venus in Pisces, you love compassionately, romantically, and with boundless empathy. You're attracted to sensitivity, creativity, and spiritual connection. Your love style is selfless, romantic, and idealistic—you want a soulmate connection that transcends the ordinary. You value compassion, spirituality, and emotional fusion in relationships, and you're drawn to partners who appreciate your romantic, artistic nature and can share in your dreams."
      },
      {
        content: "You express affection through unconditional acceptance, creative gestures, emotional support, and merging with your partner. You're a deeply romantic, empathetic lover who sees the divine in your beloved. In relationships, you need emotional and spiritual connection, romance, and a partner who appreciates your sensitivity and idealism. You may struggle with boundaries or with seeing partners realistically rather than idealistically. Your aesthetic preferences lean toward dreamy, romantic, and artistic styles—you appreciate beauty that touches the soul and evokes emotion."
      },
      {
        content: "Your challenge is to maintain healthy boundaries in love and to see partners as they are, not as you wish them to be. Learning to ground your romantic ideals in reality and to take care of your own needs alongside your partner's will help you build healthier, more sustainable connections."
      }
    ],
    strengths: ["Compassionate", "Romantic", "Empathetic", "Spiritually connected"],
    challenges: ["Boundary issues", "Idealization", "Escapism"]
  },

  // ============================================================================
  // MARS SIGNS (12) - Drive, Action, Desire, Sexuality, Anger
  // ============================================================================

  "aries-mars": {
    sign: "aries",
    planet: "mars",
    title: "ARIES",
    subtitle: "Mars in Aries",
    sections: [
      {
        content: "With Mars in Aries, you take action boldly, directly, and with fearless initiative. Your drive is powerful and immediate—when you want something, you go after it without hesitation. You're a natural warrior and pioneer, thriving on challenges and competition. Your energy is explosive and enthusiastic, making you excellent at starting projects and taking charge in crisis situations."
      },
      {
        content: "Your desires are straightforward and passionate. You know what you want and aren't afraid to pursue it aggressively. In sexuality, you're direct, passionate, and enthusiastic, preferring spontaneity and excitement. When angry, you flare up quickly and intensely, but your anger burns out fast—you don't hold grudges. Your challenge is to develop patience, to think before acting, and to channel your aggressive energy constructively rather than destructively."
      }
    ],
    strengths: ["Courageous", "Direct action", "Quick initiative", "Competitive drive"],
    challenges: ["Impatience", "Aggression", "Impulsiveness"]
  },

  "taurus-mars": {
    sign: "taurus",
    planet: "mars",
    title: "TAURUS",
    subtitle: "Mars in Taurus",
    sections: [
      {
        content: "With Mars in Taurus, you take action steadily, persistently, and with unwavering determination. Your drive is slow to start but unstoppable once committed. You're a builder who prefers to work methodically toward long-term goals rather than seeking quick wins. Your energy is enduring and reliable, making you excellent at sustained effort and bringing projects to completion."
      },
      {
        content: "Your desires are sensual and material. You're motivated by comfort, security, and physical pleasure. In sexuality, you're sensual, patient, and focused on physical satisfaction. When angry, you're slow to provoke but formidable when pushed too far—you have a long fuse but explosive temper. Your challenge is to remain flexible, to speed up when necessary, and to avoid stubborn resistance to change."
      }
    ],
    strengths: ["Persistence", "Reliability", "Endurance", "Practical action"],
    challenges: ["Stubbornness", "Slow to act", "Possessiveness"]
  },

  "gemini-mars": {
    sign: "gemini",
    planet: "mars",
    title: "GEMINI",
    subtitle: "Mars in Gemini",
    sections: [
      {
        content: "With Mars in Gemini, you take action versatilely, mentally, and with quick adaptability. Your drive is intellectual and scattered—you pursue multiple goals simultaneously. You're energized by mental challenges, communication, and variety. Your energy is nervous and restless, making you excellent at multitasking and thinking on your feet."
      },
      {
        content: "Your desires are mental and varied. You're motivated by intellectual stimulation and new experiences. In sexuality, you're playful, communicative, and mentally engaged. When angry, you use words as weapons—you argue, debate, and can be cutting with your wit. Your challenge is to focus your energy, to follow through on projects, and to engage physically as well as mentally."
      }
    ],
    strengths: ["Mental agility", "Versatility", "Quick thinking", "Adaptability"],
    challenges: ["Scattered energy", "Lack of follow-through", "Nervous tension"]
  },

  "cancer-mars": {
    sign: "cancer",
    planet: "mars",
    title: "CANCER",
    subtitle: "Mars in Cancer",
    sections: [
      {
        content: "With Mars in Cancer, you take action protectively, emotionally, and with intuitive timing. Your drive is defensive and nurturing—you're motivated to protect and care for those you love. You're energized by emotional security and family matters. Your energy is cyclical and mood-dependent, making you excellent at acting on intuition and defending what matters most."
      },
      {
        content: "Your desires are emotional and security-oriented. You're motivated by creating safe havens and emotional bonds. In sexuality, you're nurturing, emotionally connected, and need to feel safe. When angry, you're passive-aggressive or retreat into your shell, emerging later with indirect attacks. Your challenge is to assert yourself directly, to act despite fear, and to balance protection with allowing others freedom."
      }
    ],
    strengths: ["Protective drive", "Intuitive action", "Emotional courage", "Tenacity"],
    challenges: ["Passive-aggression", "Moodiness", "Defensive reactions"]
  },

  "leo-mars": {
    sign: "leo",
    planet: "mars",
    title: "LEO",
    subtitle: "Mars in Leo",
    sections: [
      {
        content: "With Mars in Leo, you take action dramatically, confidently, and with creative flair. Your drive is noble and proud—you're motivated by recognition and the desire to shine. You're energized by creative expression and leadership opportunities. Your energy is warm and powerful, making you excellent at inspiring others and taking center stage."
      },
      {
        content: "Your desires are grand and creative. You're motivated by admiration and the chance to express your magnificence. In sexuality, you're passionate, generous, and theatrical. When angry, you're dramatic and proud—you roar like a lion but can forgive if your dignity is respected. Your challenge is to share leadership, to act without needing applause, and to balance confidence with humility."
      }
    ],
    strengths: ["Confident action", "Leadership drive", "Creative energy", "Courage"],
    challenges: ["Pride", "Need for recognition", "Drama"]
  },

  "virgo-mars": {
    sign: "virgo",
    planet: "mars",
    title: "VIRGO",
    subtitle: "Mars in Virgo",
    sections: [
      {
        content: "With Mars in Virgo, you take action precisely, analytically, and with attention to detail. Your drive is perfectionistic and service-oriented—you're motivated by improvement and being useful. You're energized by solving problems and refining systems. Your energy is nervous and focused, making you excellent at detailed work and practical problem-solving."
      },
      {
        content: "Your desires are practical and health-conscious. You're motivated by efficiency and self-improvement. In sexuality, you're attentive, technique-focused, and concerned with pleasing your partner. When angry, you're critical and nitpicky, pointing out flaws with precision. Your challenge is to accept imperfection, to act without over-analyzing, and to balance criticism with appreciation."
      }
    ],
    strengths: ["Precise action", "Analytical drive", "Practical energy", "Problem-solving"],
    challenges: ["Perfectionism", "Over-analysis", "Critical nature"]
  },

  "libra-mars": {
    sign: "libra",
    planet: "mars",
    title: "LIBRA",
    subtitle: "Mars in Libra",
    sections: [
      {
        content: "With Mars in Libra, you take action diplomatically, cooperatively, and with strategic balance. Your drive is relationship-oriented—you're motivated by fairness and partnership. You're energized by collaboration and aesthetic pursuits. Your energy is balanced and indirect, making you excellent at negotiation and achieving goals through cooperation."
      },
      {
        content: "Your desires are partnership-focused and aesthetic. You're motivated by harmony and beauty. In sexuality, you're romantic, balanced, and focused on mutual pleasure. When angry, you're passive-aggressive or overly diplomatic, avoiding direct confrontation. Your challenge is to assert yourself directly, to make decisions without endless deliberation, and to fight for what you want."
      }
    ],
    strengths: ["Diplomatic action", "Strategic thinking", "Cooperative drive", "Balanced energy"],
    challenges: ["Indecisiveness", "Passive-aggression", "Conflict avoidance"]
  },

  "scorpio-mars": {
    sign: "scorpio",
    planet: "mars",
    title: "SCORPIO",
    subtitle: "Mars in Scorpio",
    sections: [
      {
        content: "With Mars in Scorpio, you take action intensely, strategically, and with unwavering focus. Your drive is powerful and transformative—you're motivated by depth and complete mastery. You're energized by challenges that require total commitment. Your energy is controlled and intense, making you excellent at sustained effort and achieving difficult goals."
      },
      {
        content: "Your desires are deep and passionate. You're motivated by power, transformation, and emotional intensity. In sexuality, you're intensely passionate, emotionally connected, and all-consuming. When angry, you're dangerous—you plan revenge and never forget. Your challenge is to forgive, to use your power for healing rather than control, and to balance intensity with lightness."
      }
    ],
    strengths: ["Powerful drive", "Strategic action", "Intense focus", "Determination"],
    challenges: ["Vengeful", "Controlling", "Obsessive"]
  },

  "sagittarius-mars": {
    sign: "sagittarius",
    planet: "mars",
    title: "SAGITTARIUS",
    subtitle: "Mars in Sagittarius",
    sections: [
      {
        content: "With Mars in Sagittarius, you take action adventurously, optimistically, and with expansive vision. Your drive is philosophical and freedom-seeking—you're motivated by exploration and truth. You're energized by adventure and learning. Your energy is enthusiastic and restless, making you excellent at pursuing big goals and inspiring others with your vision."
      },
      {
        content: "Your desires are expansive and freedom-oriented. You're motivated by adventure and meaning. In sexuality, you're enthusiastic, adventurous, and freedom-loving. When angry, you're blunt and preachy, expressing your displeasure with brutal honesty. Your challenge is to follow through on commitments, to consider details, and to balance freedom with responsibility."
      }
    ],
    strengths: ["Adventurous drive", "Optimistic action", "Visionary energy", "Enthusiasm"],
    challenges: ["Restlessness", "Over-promising", "Tactlessness"]
  },

  "capricorn-mars": {
    sign: "capricorn",
    planet: "mars",
    title: "CAPRICORN",
    subtitle: "Mars in Capricorn",
    sections: [
      {
        content: "With Mars in Capricorn, you take action strategically, ambitiously, and with disciplined focus. Your drive is goal-oriented and status-conscious—you're motivated by achievement and recognition. You're energized by climbing mountains and building empires. Your energy is controlled and enduring, making you excellent at long-term planning and achieving ambitious goals."
      },
      {
        content: "Your desires are ambitious and material. You're motivated by success and respect. In sexuality, you're controlled, traditional, and enduring. When angry, you're cold and calculating, using your position and authority as weapons. Your challenge is to balance ambition with enjoyment, to express emotions, and to value the journey as much as the destination."
      }
    ],
    strengths: ["Strategic action", "Disciplined drive", "Ambitious energy", "Endurance"],
    challenges: ["Emotional coldness", "Workaholic tendencies", "Ruthlessness"]
  },

  "aquarius-mars": {
    sign: "aquarius",
    planet: "mars",
    title: "AQUARIUS",
    subtitle: "Mars in Aquarius",
    sections: [
      {
        content: "With Mars in Aquarius, you take action unconventionally, intellectually, and with innovative vision. Your drive is humanitarian and freedom-oriented—you're motivated by progress and equality. You're energized by revolutionary ideas and social causes. Your energy is erratic and original, making you excellent at innovation and challenging the status quo."
      },
      {
        content: "Your desires are unconventional and intellectual. You're motivated by freedom and progressive ideals. In sexuality, you're experimental, detached, and friendship-focused. When angry, you're detached and rebellious, expressing displeasure through withdrawal or revolution. Your challenge is to engage emotionally, to follow through practically, and to balance rebellion with cooperation."
      }
    ],
    strengths: ["Innovative action", "Original drive", "Humanitarian energy", "Independence"],
    challenges: ["Emotional detachment", "Rebelliousness", "Erratic energy"]
  },

  "pisces-mars": {
    sign: "pisces",
    planet: "mars",
    title: "PISCES",
    subtitle: "Mars in Pisces",
    sections: [
      {
        content: "With Mars in Pisces, you take action intuitively, compassionately, and with fluid adaptability. Your drive is spiritual and selfless—you're motivated by ideals and helping others. You're energized by creative and spiritual pursuits. Your energy is diffuse and imaginative, making you excellent at artistic expression and compassionate action."
      },
      {
        content: "Your desires are romantic and transcendent. You're motivated by spiritual connection and creative expression. In sexuality, you're romantic, imaginative, and emotionally merged. When angry, you're passive-aggressive or play the victim, expressing displeasure indirectly. Your challenge is to assert yourself directly, to set boundaries, and to channel your energy into concrete action."
      }
    ],
    strengths: ["Compassionate action", "Intuitive drive", "Creative energy", "Adaptability"],
    challenges: ["Passive-aggression", "Lack of boundaries", "Scattered energy"]
  },

  // ============================================================================
  // JUPITER SIGNS (12) - Growth, Luck, Expansion, Philosophy, Abundance
  // ============================================================================

  "aries-jupiter": {
    sign: "aries",
    planet: "jupiter",
    title: "ARIES",
    subtitle: "Jupiter in Aries",
    sections: [
      {
        content: "With Jupiter in Aries, you grow through courage, initiative, and pioneering new paths. You find luck when you take bold action and trust your instincts. Your philosophy is optimistic and individualistic—you believe in the power of the self and the importance of courage. You expand through leadership, competition, and blazing new trails. Your greatest opportunities come when you're willing to be first, to take risks, and to assert yourself confidently."
      },
      {
        content: "Your challenge is to balance confidence with wisdom, to consider others' perspectives, and to develop patience alongside your natural enthusiasm. You grow most when you channel your pioneering spirit into ventures that benefit others as well as yourself."
      }
    ],
    strengths: ["Courageous growth", "Leadership opportunities", "Pioneering spirit", "Confidence"],
    challenges: ["Overconfidence", "Impatience", "Selfishness"]
  },

  "taurus-jupiter": {
    sign: "taurus",
    planet: "jupiter",
    title: "TAURUS",
    subtitle: "Jupiter in Taurus",
    sections: [
      {
        content: "With Jupiter in Taurus, you grow through patience, stability, and appreciation of beauty. You find luck through practical efforts and sensory pleasures. Your philosophy is grounded and materialistic—you believe in building lasting value and enjoying life's pleasures. You expand through financial growth, artistic appreciation, and creating security. Your greatest opportunities come through steady effort, good taste, and wise investments."
      },
      {
        content: "Your challenge is to avoid materialism and greed, to remain flexible, and to value spiritual growth alongside material success. You grow most when you use your resources to create beauty and security for yourself and others."
      }
    ],
    strengths: ["Financial luck", "Practical wisdom", "Artistic appreciation", "Stability"],
    challenges: ["Materialism", "Stubbornness", "Overindulgence"]
  },

  "gemini-jupiter": {
    sign: "gemini",
    planet: "jupiter",
    title: "GEMINI",
    subtitle: "Jupiter in Gemini",
    sections: [
      {
        content: "With Jupiter in Gemini, you grow through learning, communication, and making connections. You find luck through networking and intellectual pursuits. Your philosophy is curious and open-minded—you believe in the power of information and diverse perspectives. You expand through education, writing, and social connections. Your greatest opportunities come through communication skills, versatility, and your ability to connect people and ideas."
      },
      {
        content: "Your challenge is to develop depth alongside breadth, to follow through on ideas, and to avoid scattering your energy. You grow most when you use your communication gifts to teach, connect, and share wisdom."
      }
    ],
    strengths: ["Communication luck", "Learning opportunities", "Versatility", "Social connections"],
    challenges: ["Superficiality", "Scattered energy", "Inconsistency"]
  },

  "cancer-jupiter": {
    sign: "cancer",
    planet: "jupiter",
    title: "CANCER",
    subtitle: "Jupiter in Cancer",
    sections: [
      {
        content: "With Jupiter in Cancer, you grow through nurturing, emotional connection, and creating family. You find luck through home and family matters. Your philosophy is protective and traditional—you believe in the importance of emotional bonds and heritage. You expand through real estate, family businesses, and caring professions. Your greatest opportunities come through your nurturing abilities and emotional intelligence."
      },
      {
        content: "Your challenge is to avoid smothering others, to venture beyond your comfort zone, and to balance emotional security with growth. You grow most when you create emotional safety for yourself and others while remaining open to new experiences."
      }
    ],
    strengths: ["Emotional wisdom", "Nurturing abundance", "Family luck", "Intuitive growth"],
    challenges: ["Over-protectiveness", "Moodiness", "Clinging to past"]
  },

  "leo-jupiter": {
    sign: "leo",
    planet: "jupiter",
    title: "LEO",
    subtitle: "Jupiter in Leo",
    sections: [
      {
        content: "With Jupiter in Leo, you grow through creative expression, leadership, and generous giving. You find luck through performance and self-expression. Your philosophy is optimistic and noble—you believe in the power of the individual to shine and inspire. You expand through creative ventures, entertainment, and leadership roles. Your greatest opportunities come when you express yourself authentically and generously share your light."
      },
      {
        content: "Your challenge is to avoid arrogance, to share the spotlight, and to give without expecting recognition. You grow most when you use your creative gifts and leadership abilities to inspire and uplift others."
      }
    ],
    strengths: ["Creative abundance", "Leadership luck", "Generous spirit", "Confidence"],
    challenges: ["Arrogance", "Need for recognition", "Extravagance"]
  },

  "virgo-jupiter": {
    sign: "virgo",
    planet: "jupiter",
    title: "VIRGO",
    subtitle: "Jupiter in Virgo",
    sections: [
      {
        content: "With Jupiter in Virgo, you grow through service, improvement, and attention to detail. You find luck through practical skills and helping others. Your philosophy is pragmatic and health-conscious—you believe in the importance of useful work and self-improvement. You expand through healthcare, service industries, and perfecting your craft. Your greatest opportunities come through your analytical abilities and dedication to excellence."
      },
      {
        content: "Your challenge is to avoid perfectionism and criticism, to see the big picture, and to appreciate what's already good. You grow most when you use your skills to serve others and improve systems without losing sight of larger meaning."
      }
    ],
    strengths: ["Practical wisdom", "Service opportunities", "Analytical growth", "Skill development"],
    challenges: ["Perfectionism", "Over-criticism", "Missing big picture"]
  },

  "libra-jupiter": {
    sign: "libra",
    planet: "jupiter",
    title: "LIBRA",
    subtitle: "Jupiter in Libra",
    sections: [
      {
        content: "With Jupiter in Libra, you grow through partnerships, diplomacy, and creating beauty. You find luck through relationships and cooperation. Your philosophy is balanced and fair—you believe in justice, harmony, and the power of partnership. You expand through marriage, business partnerships, and artistic pursuits. Your greatest opportunities come through your ability to create harmony and bring people together."
      },
      {
        content: "Your challenge is to maintain your identity in partnerships, to make decisions, and to act independently when needed. You grow most when you use your diplomatic gifts to create fairness and beauty while maintaining your own center."
      }
    ],
    strengths: ["Partnership luck", "Diplomatic wisdom", "Aesthetic opportunities", "Social grace"],
    challenges: ["Indecisiveness", "Dependence on others", "People-pleasing"]
  },

  "scorpio-jupiter": {
    sign: "scorpio",
    planet: "jupiter",
    title: "SCORPIO",
    subtitle: "Jupiter in Scorpio",
    sections: [
      {
        content: "With Jupiter in Scorpio, you grow through transformation, depth, and facing shadows. You find luck through psychology, research, and shared resources. Your philosophy is intense and transformative—you believe in the power of death and rebirth. You expand through inheritance, investments, and deep psychological work. Your greatest opportunities come through your ability to transform yourself and facilitate transformation in others."
      },
      {
        content: "Your challenge is to avoid obsession and control, to trust others, and to use power wisely. You grow most when you embrace transformation and use your depth to heal rather than manipulate."
      }
    ],
    strengths: ["Transformative growth", "Psychological wisdom", "Financial luck", "Depth"],
    challenges: ["Obsession", "Control issues", "Intensity"]
  },

  "sagittarius-jupiter": {
    sign: "sagittarius",
    planet: "jupiter",
    title: "SAGITTARIUS",
    subtitle: "Jupiter in Sagittarius",
    sections: [
      {
        content: "With Jupiter in Sagittarius, you grow through exploration, philosophy, and seeking truth. You find luck through travel, education, and publishing. Your philosophy is optimistic and expansive—you believe in unlimited possibilities and higher truth. You expand through international ventures, higher education, and spiritual pursuits. Your greatest opportunities come through your vision, optimism, and ability to inspire others with your faith."
      },
      {
        content: "Your challenge is to avoid excess and overconfidence, to pay attention to details, and to ground your vision in reality. You grow most when you share your wisdom and inspire others to expand their horizons."
      }
    ],
    strengths: ["Abundant luck", "Philosophical wisdom", "Travel opportunities", "Optimism"],
    challenges: ["Overconfidence", "Excess", "Dogmatism"]
  },

  "capricorn-jupiter": {
    sign: "capricorn",
    planet: "jupiter",
    title: "CAPRICORN",
    subtitle: "Jupiter in Capricorn",
    sections: [
      {
        content: "With Jupiter in Capricorn, you grow through discipline, ambition, and building structures. You find luck through hard work and strategic planning. Your philosophy is pragmatic and traditional—you believe in earning success through effort. You expand through business, government, and long-term planning. Your greatest opportunities come through your organizational abilities and willingness to work patiently toward ambitious goals."
      },
      {
        content: "Your challenge is to avoid pessimism and rigidity, to enjoy the journey, and to value emotional fulfillment alongside achievement. You grow most when you build structures that serve not just your ambition but the greater good."
      }
    ],
    strengths: ["Career success", "Strategic wisdom", "Organizational luck", "Discipline"],
    challenges: ["Pessimism", "Workaholism", "Rigidity"]
  },

  "aquarius-jupiter": {
    sign: "aquarius",
    planet: "jupiter",
    title: "AQUARIUS",
    subtitle: "Jupiter in Aquarius",
    sections: [
      {
        content: "With Jupiter in Aquarius, you grow through innovation, humanitarian work, and embracing uniqueness. You find luck through technology, groups, and progressive causes. Your philosophy is humanitarian and futuristic—you believe in equality and progress. You expand through social movements, technology, and unconventional paths. Your greatest opportunities come through your originality and commitment to collective advancement."
      },
      {
        content: "Your challenge is to balance detachment with emotional connection, to value tradition alongside innovation, and to ground ideals in practical reality. You grow most when you use your innovative vision to create positive change for humanity."
      }
    ],
    strengths: ["Innovative opportunities", "Humanitarian wisdom", "Social luck", "Originality"],
    challenges: ["Detachment", "Rebelliousness", "Impracticality"]
  },

  "pisces-jupiter": {
    sign: "pisces",
    planet: "jupiter",
    title: "PISCES",
    subtitle: "Jupiter in Pisces",
    sections: [
      {
        content: "With Jupiter in Pisces, you grow through compassion, spirituality, and transcendence. You find luck through artistic and healing pursuits. Your philosophy is mystical and compassionate—you believe in universal love and spiritual truth. You expand through music, art, spirituality, and helping those in need. Your greatest opportunities come through your empathy, creativity, and spiritual connection."
      },
      {
        content: "Your challenge is to maintain boundaries, to ground your ideals, and to avoid escapism. You grow most when you use your spiritual gifts and compassion to heal and inspire while staying grounded in reality."
      }
    ],
    strengths: ["Spiritual wisdom", "Artistic abundance", "Compassionate growth", "Intuition"],
    challenges: ["Escapism", "Boundary issues", "Impracticality"]
  },

  // ============================================================================
  // SATURN SIGNS (12) - Structure, Discipline, Lessons, Karma, Challenges
  // ============================================================================

  "aries-saturn": {
    sign: "aries",
    planet: "saturn",
    title: "ARIES",
    subtitle: "Saturn in Aries",
    sections: [
      {
        heading: "YOUR KARMIC LESSONS",
        content: "With Saturn in Aries, your soul's curriculum involves learning courage, initiative, and authentic self-assertion. You came into this life to master the art of being yourself boldly, taking action despite fear, and leading from authentic power. Your lessons center on overcoming self-doubt, developing genuine confidence, and claiming your right to exist as you are. This placement suggests that in early life, you may have experienced situations where your natural assertiveness was criticized, punished, or blocked, teaching you to hold back when you should step forward. Your karmic work involves reclaiming the courage that is your birthright and learning that true leadership comes from being authentically yourself."
      },
      {
        heading: "THE CHALLENGE & FEAR",
        content: "Your primary challenge is the fear of asserting yourself, taking initiative, or being visible as a leader. You may struggle with feeling blocked when you try to take action, doubting your right to lead, or believing you're not brave enough. This can manifest as hesitation when opportunities arise, letting others go first when you should step up, or suppressing your natural assertiveness. The fear often centers on being judged, criticized, or attacked for being too much, too bold, or too assertive. You may have internalized messages that it's not safe to be yourself, that leadership is for others, or that courage is something you lack. The challenge is learning that these fears are lessons to overcome, not truths about who you are."
      },
      {
        heading: "MASTERY & MATURITY",
        content: "As you work with Saturn in Aries, you gradually develop disciplined courage—the ability to act despite fear, to lead with wisdom, and to assert yourself strategically. You learn that real courage isn't the absence of fear but the willingness to move forward anyway. Through life experience, you discover that authentic leadership comes from being yourself, that initiative requires both boldness and timing, and that self-assertion can be both powerful and respectful. You master the balance between caution and boldness, learning when to push forward and when to wait. Your maturity shows in your ability to take decisive action, to lead without dominating, and to be assertive without being aggressive. You become someone who acts with both courage and wisdom."
      },
      {
        heading: "YOUR EARNED AUTHORITY",
        content: "By your Saturn return and beyond, you can become an authority on courage, leadership, and authentic self-assertion. Your struggles with confidence become your credentials—you understand what it takes to overcome self-doubt because you've done it. You can teach others how to be brave, how to take initiative despite fear, and how to lead authentically. Your earned wisdom is that real courage is developed through facing fear repeatedly, that true leadership serves others, and that the greatest strength is being unapologetically yourself. You become a model of disciplined courage, showing others that confidence is built through action, that leadership can be humble, and that the most powerful assertion is that which honors both self and others."
      }
    ],
    strengths: ["Disciplined courage", "Strategic leadership", "Controlled initiative"],
    challenges: ["Self-doubt", "Blocked action", "Fear of assertion"]
  },

  "taurus-saturn": {
    sign: "taurus",
    planet: "saturn",
    title: "TAURUS",
    subtitle: "Saturn in Taurus",
    sections: [
      {
        heading: "YOUR KARMIC LESSONS",
        content: "With Saturn in Taurus, your soul's curriculum involves learning self-worth, financial responsibility, and the art of building lasting security. You came into this life to master the relationship between value and values, to learn that true security comes from within, and to build material stability through patient effort. Your lessons center on recognizing your inherent worth, developing financial wisdom, and learning to enjoy life's pleasures without guilt. This placement suggests that in early life, you may have experienced material scarcity, instability, or messages that you weren't valuable, teaching you to fear lack and doubt your worth. Your karmic work involves discovering that your value is inherent, not earned, and that real security is built slowly through consistent effort."
      },
      {
        heading: "THE CHALLENGE & FEAR",
        content: "Your primary challenge is the fear of not having enough—whether that's money, resources, or inherent value. You may struggle with scarcity mindset, hoarding resources, or difficulty enjoying what you have. This can manifest as excessive frugality, fear of spending, or working endlessly to feel secure while never feeling safe. The fear often centers on being poor, losing everything, or discovering you're worthless. You may have internalized messages that resources are scarce, that you must earn your worth, or that pleasure is frivolous. The challenge is learning that these fears drive you to build real security, but that true worth is not dependent on what you have or achieve."
      },
      {
        heading: "MASTERY & MATURITY",
        content: "As you work with Saturn in Taurus, you gradually develop financial discipline and unshakeable self-worth. You learn that real security comes from patient building, that wealth is created through consistent effort, and that your value is inherent regardless of your bank account. Through life experience, you discover that frugality and enjoyment can coexist, that resources can be managed wisely while still being enjoyed, and that true wealth includes quality of life. You master the balance between saving and spending, learning when to invest and when to enjoy. Your maturity shows in your ability to create lasting value, to build financial security without anxiety, and to know your worth independent of external validation. You become someone who is both financially wise and able to enjoy life's pleasures."
      },
      {
        heading: "YOUR EARNED AUTHORITY",
        content: "By your Saturn return and beyond, you can become an authority on self-worth, financial wisdom, and building lasting value. Your struggles with scarcity become your credentials—you understand what it takes to build real security because you've done it from a place of fear and learned to transcend it. You can teach others how to manage money wisely, how to build wealth patiently, and how to recognize their inherent value. Your earned wisdom is that real security is both material and internal, that true wealth is built slowly, and that the greatest value is knowing your worth regardless of circumstances. You become a model of patient building, showing others that financial security is possible, that self-worth is inherent, and that life's pleasures are meant to be enjoyed."
      }
    ],
    strengths: ["Financial discipline", "Patience", "Lasting value creation"],
    challenges: ["Scarcity mindset", "Material fear", "Difficulty with pleasure"]
  },

  "gemini-saturn": {
    sign: "gemini",
    planet: "saturn",
    title: "GEMINI",
    subtitle: "Saturn in Gemini",
    sections: [
      {
        heading: "YOUR KARMIC LESSONS",
        content: "With Saturn in Gemini, your soul's curriculum involves learning communication, mental discipline, and the power of focused thought. You came into this life to master the art of clear expression, to develop intellectual authority, and to learn that words have weight and power. Your lessons center on overcoming communication fears, developing mental focus, and learning to think and speak with precision. This placement suggests that in early life, you may have experienced situations where your voice wasn't heard, your ideas were dismissed, or your communication was criticized, teaching you to doubt your intelligence or fear speaking up. Your karmic work involves reclaiming your voice, developing mental discipline, and learning that what you have to say matters."
      },
      {
        heading: "THE CHALLENGE & FEAR",
        content: "Your primary challenge is the fear of being misunderstood, saying the wrong thing, or not being intelligent enough. You may struggle with communication blocks, mental anxiety, or scattered thinking that prevents clear expression. This can manifest as difficulty speaking up, overthinking before you speak, or jumping between topics without depth. The fear often centers on being judged as stupid, being misunderstood, or having your words used against you. You may have internalized messages that you're not smart enough, that your ideas don't matter, or that it's safer to stay quiet. The challenge is learning that these fears are teaching you to communicate with care and precision, not to silence yourself."
      },
      {
        heading: "MASTERY & MATURITY",
        content: "As you work with Saturn in Gemini, you gradually develop disciplined thinking and authoritative communication. You learn that real intelligence comes from depth not just breadth, that effective communication requires both clarity and timing, and that your words carry power when used wisely. Through life experience, you discover that mental focus is developed through practice, that communication improves through feedback, and that intellectual authority is earned through consistent learning. You master the balance between breadth and depth, learning when to explore widely and when to focus deeply. Your maturity shows in your ability to communicate clearly, to think systematically, and to express complex ideas simply. You become someone whose words are both thoughtful and impactful."
      },
      {
        heading: "YOUR EARNED AUTHORITY",
        content: "By your Saturn return and beyond, you can become an authority on communication, education, and focused thinking. Your struggles with expression become your credentials—you understand what it takes to communicate clearly because you've overcome the fear of being misunderstood. You can teach others how to think systematically, how to express themselves clearly, and how to develop intellectual discipline. Your earned wisdom is that real communication creates understanding, that true intelligence includes both breadth and depth, and that the greatest power of words is in their precision and timing. You become a model of disciplined thinking, showing others that mental focus is developed through practice, that communication can be learned, and that everyone's voice matters when expressed with clarity and care."
      }
    ],
    strengths: ["Disciplined thinking", "Authoritative communication", "Mental focus"],
    challenges: ["Communication blocks", "Mental anxiety", "Scattered focus"]
  },

  "cancer-saturn": {
    sign: "cancer",
    planet: "saturn",
    title: "CANCER",
    subtitle: "Saturn in Cancer",
    sections: [
      {
        heading: "YOUR KARMIC LESSONS",
        content: "With Saturn in Cancer, your soul's curriculum involves learning emotional security, healthy nurturing, and the art of creating genuine home. You came into this life to master emotional maturity, to learn to nurture yourself and others wisely, and to heal family wounds that span generations. Your lessons center on developing emotional resilience, learning to receive care as well as give it, and creating the security you may not have received. This placement suggests that in early life, you may have experienced emotional coldness, family burdens, or situations where you had to parent yourself or others too young, teaching you that emotions are unsafe or that you must be the caretaker. Your karmic work involves learning that you deserve nurturing, that emotions are safe to feel, and that real security comes from within."
      },
      {
        heading: "THE CHALLENGE & FEAR",
        content: "Your primary challenge is the fear of emotional vulnerability, being hurt by those you love, or not having a safe home. You may struggle with emotional walls, difficulty receiving care, or carrying family burdens that aren't yours. This can manifest as taking care of everyone else while neglecting yourself, emotional coldness that protects you from hurt, or difficulty trusting that others will be there for you. The fear often centers on abandonment, emotional pain, or discovering that home isn't safe. You may have internalized messages that emotions are weak, that you must be strong for others, or that your needs don't matter. The challenge is learning that these fears are teaching you to create real emotional security, not to wall yourself off from connection."
      },
      {
        heading: "MASTERY & MATURITY",
        content: "As you work with Saturn in Cancer, you gradually develop emotional maturity and the ability to nurture wisely. You learn that real emotional security comes from within, that healthy nurturing includes boundaries, and that you can be both strong and vulnerable. Through life experience, you discover that family wounds can be healed, that you can create the home you didn't have, and that receiving care is as important as giving it. You master the balance between caring for others and caring for yourself, learning when to nurture and when to let others stand on their own. Your maturity shows in your ability to feel deeply while staying grounded, to create genuine security for yourself and others, and to be emotionally available without losing yourself. You become someone who is both strong and tender."
      },
      {
        heading: "YOUR EARNED AUTHORITY",
        content: "By your Saturn return and beyond, you can become an authority on emotional healing, family dynamics, and creating genuine security. Your struggles with emotional coldness and family burdens become your credentials—you understand what it takes to heal because you've done the work. You can teach others how to nurture themselves, how to heal family wounds, and how to create emotional security. Your earned wisdom is that real nurturing includes boundaries, that true security is built from within, and that the greatest home is one where everyone can be emotionally authentic. You become a model of emotional maturity, showing others that feelings can be felt safely, that family patterns can be broken, and that you can become your own loving parent."
      }
    ],
    strengths: ["Emotional maturity", "Responsible nurturing", "Family wisdom"],
    challenges: ["Emotional blocks", "Family burdens", "Difficulty receiving care"]
  },

  "leo-saturn": {
    sign: "leo",
    planet: "saturn",
    title: "LEO",
    subtitle: "Saturn in Leo",
    sections: [
      {
        heading: "YOUR KARMIC LESSONS",
        content: "With Saturn in Leo, your soul's curriculum involves learning authentic self-expression, creative discipline, and humble leadership. You came into this life to master the art of shining without arrogance, creating with both freedom and structure, and leading from genuine confidence rather than ego. Your lessons center on overcoming fear of visibility, developing creative authority, and learning that you deserve to be seen and celebrated. This placement suggests that in early life, you may have experienced situations where your natural radiance was dimmed, your creativity was criticized, or your self-expression was punished, teaching you to hide your light or doubt your specialness. Your karmic work involves reclaiming your right to shine, developing creative mastery, and learning that true leadership serves others."
      },
      {
        heading: "THE CHALLENGE & FEAR",
        content: "Your primary challenge is the fear of being seen, judged, or rejected for being yourself. You may struggle with creative blocks, fear of performing, or oscillating between pride and shame. This can manifest as hiding your talents, downplaying your achievements, or compensating with false confidence that masks deep insecurity. The fear often centers on being judged as too much, not special enough, or being exposed as a fraud. You may have internalized messages that you're not talented, that seeking attention is wrong, or that you must be perfect to be worthy of recognition. The challenge is learning that these fears are teaching you to develop genuine confidence and authentic creative expression, not to hide your gifts."
      },
      {
        heading: "MASTERY & MATURITY",
        content: "As you work with Saturn in Leo, you gradually develop disciplined creativity and humble confidence. You learn that real self-expression comes from authenticity not performance, that creative mastery requires both inspiration and practice, and that true leadership serves rather than dominates. Through life experience, you discover that you can shine without diminishing others, that recognition is earned through consistent creative work, and that genuine confidence is quiet and grounded. You master the balance between ego and humility, learning when to step into the spotlight and when to share it. Your maturity shows in your ability to express yourself authentically, to create with both freedom and discipline, and to lead by inspiring others to shine. You become someone whose presence uplifts rather than overshadows."
      },
      {
        heading: "YOUR EARNED AUTHORITY",
        content: "By your Saturn return and beyond, you can become an authority on creative discipline, authentic self-expression, and humble leadership. Your struggles with visibility and creative blocks become your credentials—you understand what it takes to shine authentically because you've overcome the fear of being seen. You can teach others how to express themselves creatively, how to develop genuine confidence, and how to lead with humility. Your earned wisdom is that real creativity requires discipline, that true confidence is earned through mastery, and that the greatest leadership celebrates others' light. You become a model of authentic radiance, showing others that everyone deserves to shine, that creativity is developed through practice, and that the most powerful presence is one that empowers others to be themselves."
      }
    ],
    strengths: ["Disciplined creativity", "Humble leadership", "Authentic expression"],
    challenges: ["Creative blocks", "Fear of visibility", "Pride or shame"]
  },

  "virgo-saturn": {
    sign: "virgo",
    planet: "saturn",
    title: "VIRGO",
    subtitle: "Saturn in Virgo",
    sections: [
      {
        heading: "YOUR KARMIC LESSONS",
        content: "With Saturn in Virgo, your soul's curriculum involves learning healthy perfectionism, practical mastery, and self-acceptance. You came into this life to master the art of discernment without criticism, to serve wisely without sacrificing yourself, and to pursue excellence while accepting imperfection. Your lessons center on developing practical skills, learning that good enough is often perfect, and discovering that your worth isn't dependent on your productivity. This placement suggests that in early life, you may have experienced situations where nothing you did was good enough, where mistakes were harshly criticized, or where you learned that your value came from being useful, teaching you to be excessively self-critical or to serve others while neglecting yourself. Your karmic work involves learning that you are inherently valuable, that imperfection is part of being human, and that real service includes self-care."
      },
      {
        heading: "THE CHALLENGE & FEAR",
        content: "Your primary challenge is the fear of being imperfect, making mistakes, or being seen as flawed. You may struggle with excessive self-criticism, perfectionism that prevents completion, or health anxiety. This can manifest as obsessing over details, never feeling your work is good enough, or criticizing yourself and others harshly. The fear often centers on being judged as inadequate, making a mistake that proves you're worthless, or your body failing you. You may have internalized messages that you must be perfect to be valuable, that mistakes are unacceptable, or that your worth comes from what you do. The challenge is learning that these fears are teaching you to develop real mastery and discernment, not to punish yourself for being human."
      },
      {
        heading: "MASTERY & MATURITY",
        content: "As you work with Saturn in Virgo, you gradually develop practical mastery and compassionate self-acceptance. You learn that real excellence comes from consistent practice not perfection, that healthy service includes boundaries, and that you can have high standards while accepting imperfection. Through life experience, you discover that mistakes are how you learn, that your body deserves care not criticism, and that true mastery includes knowing when good enough is perfect. You master the balance between improvement and acceptance, learning when to refine and when to let go. Your maturity shows in your ability to work with precision without obsession, to serve others without depleting yourself, and to accept yourself while continuing to grow. You become someone who is both excellent and compassionate."
      },
      {
        heading: "YOUR EARNED AUTHORITY",
        content: "By your Saturn return and beyond, you can become an authority on practical mastery, healthy service, and self-acceptance. Your struggles with perfectionism become your credentials—you understand what it takes to develop real skill because you've done the work without destroying yourself. You can teach others how to pursue excellence without perfectionism, how to serve wisely, and how to accept themselves while improving. Your earned wisdom is that real mastery is built through practice, that true service is sustainable, and that the greatest perfection is accepting imperfection. You become a model of practical wisdom, showing others that excellence is achievable, that self-criticism can be transformed into discernment, and that you can be both skilled and human."
      }
    ],
    strengths: ["Practical mastery", "Disciplined service", "Analytical wisdom"],
    challenges: ["Perfectionism", "Self-criticism", "Health anxiety"]
  },

  "libra-saturn": {
    sign: "libra",
    planet: "saturn",
    title: "LIBRA",
    subtitle: "Saturn in Libra",
    sections: [
      {
        heading: "YOUR KARMIC LESSONS",
        content: "With Saturn in Libra, your soul's curriculum involves learning balanced relationships, fair judgment, and the art of commitment. You came into this life to master partnership without losing yourself, to develop the ability to make decisions independently, and to learn that real fairness sometimes requires difficult choices. Your lessons center on overcoming relationship fears, developing mature partnership skills, and learning that you can be both connected and autonomous. This placement suggests that in early life, you may have experienced relationship disappointments, unfair treatment, or situations where you learned that being alone was unsafe or that relationships required sacrificing yourself, teaching you to fear commitment or to lose yourself in partnership. Your karmic work involves learning that healthy relationships honor both people, that you can commit without losing your identity, and that real partnership is built on equality."
      },
      {
        heading: "THE CHALLENGE & FEAR",
        content: "Your primary challenge is the fear of being alone, making the wrong relationship choice, or being treated unfairly. You may struggle with codependency, indecisiveness, or difficulty committing because no relationship feels perfect. This can manifest as staying in relationships too long out of fear, being unable to make decisions without others' input, or avoiding commitment altogether. The fear often centers on being abandoned, choosing wrong, or discovering that partnership requires losing yourself. You may have internalized messages that you need someone else to be complete, that your judgment can't be trusted, or that fairness means always compromising. The challenge is learning that these fears are teaching you to develop real relationship maturity and independent judgment, not to avoid connection or lose yourself."
      },
      {
        heading: "MASTERY & MATURITY",
        content: "As you work with Saturn in Libra, you gradually develop relationship maturity and fair judgment. You learn that real partnership requires two whole people, that healthy relationships include boundaries, and that you can commit while maintaining your identity. Through life experience, you discover that fairness doesn't always mean equal, that you can make decisions independently, and that mature relationships survive disagreement. You master the balance between connection and autonomy, learning when to compromise and when to stand firm. Your maturity shows in your ability to create partnerships based on equality, to make fair judgments even when they're difficult, and to be both committed and independent. You become someone who can be deeply partnered while remaining whole."
      },
      {
        heading: "YOUR EARNED AUTHORITY",
        content: "By your Saturn return and beyond, you can become an authority on mature relationships, fair judgment, and balanced partnership. Your struggles with codependency and relationship fears become your credentials—you understand what it takes to create healthy partnership because you've learned the hard way. You can teach others how to maintain identity in relationship, how to make fair judgments, and how to commit wisely. Your earned wisdom is that real partnership honors both people, that true fairness sometimes requires difficult choices, and that the greatest relationships are those where both people can be fully themselves. You become a model of relationship maturity, showing others that partnership and autonomy can coexist, that commitment is a choice not a trap, and that healthy relationships are built on equality and respect."
      }
    ],
    strengths: ["Relationship maturity", "Fair judgment", "Diplomatic wisdom"],
    challenges: ["Relationship fears", "Codependency", "Indecisiveness"]
  },

  "scorpio-saturn": {
    sign: "scorpio",
    planet: "saturn",
    title: "SCORPIO",
    subtitle: "Saturn in Scorpio",
    sections: [
      {
        heading: "YOUR KARMIC LESSONS",
        content: "With Saturn in Scorpio, your soul's curriculum involves learning emotional depth, transformation, and the wise use of power. You came into this life to master the art of vulnerability, to learn that real power comes from facing your shadows, and to discover that transformation is the path to freedom. Your lessons center on developing deep trust, learning to surrender control, and understanding that real intimacy requires emotional honesty. This placement suggests that in early life, you may have experienced betrayal, power struggles, or situations where vulnerability led to pain, teaching you that trust is dangerous, that control is safety, and that showing your depths makes you weak. Your karmic work involves learning that real strength includes vulnerability, that true power serves transformation, and that deep trust is earned through facing fear."
      },
      {
        heading: "THE CHALLENGE & FEAR",
        content: "Your primary challenge is the fear of betrayal, losing control, or being destroyed by transformation. You may struggle with trust issues, need for control, or difficulty with emotional vulnerability. This can manifest as keeping secrets, testing others' loyalty, or maintaining emotional walls that prevent real intimacy. The fear often centers on being betrayed, losing power, or being consumed by emotions or change. You may have internalized messages that vulnerability is weakness, that people will hurt you if you let them in, or that control is the only safety. The challenge is learning that these fears are teaching you to develop real emotional strength and transformative power, not to wall yourself off from depth and intimacy."
      },
      {
        heading: "MASTERY & MATURITY",
        content: "As you work with Saturn in Scorpio, you gradually develop emotional depth and transformative wisdom. You learn that real power comes from facing your shadow, that vulnerability is strength, and that transformation is how you evolve. Through life experience, you discover that trust can be rebuilt, that surrender doesn't mean losing yourself, and that real intimacy requires showing your depths. You master the balance between control and surrender, learning when to hold on and when to let go. Your maturity shows in your ability to be emotionally honest, to use power for healing rather than domination, and to embrace transformation as a path to freedom. You become someone who is both powerful and vulnerable, someone who transforms through facing what others avoid."
      },
      {
        heading: "YOUR EARNED AUTHORITY",
        content: "By your Saturn return and beyond, you can become an authority on transformation, emotional depth, and the wise use of power. Your struggles with trust and control become your credentials—you understand what it takes to transform because you've been through the fire. You can teach others how to face their shadows, how to develop deep trust, and how to use power wisely. Your earned wisdom is that real transformation requires facing fear, that true power serves healing, and that the greatest strength is the courage to be vulnerable. You become a model of transformative power, showing others that shadows can be integrated, that trust can be rebuilt, and that the deepest intimacy comes from emotional honesty."
      }
    ],
    strengths: ["Emotional depth", "Transformative power", "Psychological wisdom"],
    challenges: ["Trust issues", "Control needs", "Fear of vulnerability"]
  },

  "sagittarius-saturn": {
    sign: "sagittarius",
    planet: "saturn",
    title: "SAGITTARIUS",
    subtitle: "Saturn in Sagittarius",
    sections: [
      {
        heading: "YOUR KARMIC LESSONS",
        content: "With Saturn in Sagittarius, your soul's curriculum involves learning grounded wisdom, realistic optimism, and disciplined faith. You came into this life to master the art of believing without being dogmatic, to develop philosophy based on experience, and to learn that real freedom includes responsibility. Your lessons center on overcoming cynicism or blind faith, developing earned wisdom, and learning that truth is vast enough to include multiple perspectives. This placement suggests that in early life, you may have experienced situations where your beliefs were challenged, your freedom was restricted, or your optimism was crushed, teaching you to either cling to dogma or reject faith altogether. Your karmic work involves learning that real wisdom is earned through experience, that true faith is tested by reality, and that freedom and responsibility can coexist."
      },
      {
        heading: "THE CHALLENGE & FEAR",
        content: "Your primary challenge is the fear of being trapped, having your beliefs proven wrong, or discovering that life has no meaning. You may struggle with dogmatism that protects your worldview, restricted freedom that makes you feel caged, or cynicism that prevents hope. This can manifest as clinging to rigid beliefs, avoiding commitment because it limits freedom, or oscillating between blind optimism and dark pessimism. The fear often centers on being wrong about everything, losing freedom, or discovering that your philosophy doesn't work in reality. You may have internalized messages that you must have all the answers, that freedom means no commitments, or that hope is naive. The challenge is learning that these fears are teaching you to develop real wisdom and mature faith, not to cling to dogma or reject meaning."
      },
      {
        heading: "MASTERY & MATURITY",
        content: "As you work with Saturn in Sagittarius, you gradually develop grounded wisdom and realistic optimism. You learn that real faith is tested by experience, that true wisdom includes doubt, and that freedom and responsibility enhance each other. Through life experience, you discover that your philosophy must work in reality, that commitment can enhance freedom, and that mature optimism includes acknowledging difficulty. You master the balance between faith and doubt, learning when to believe and when to question. Your maturity shows in your ability to hold beliefs lightly, to commit to a path while remaining open, and to maintain hope while being realistic. You become someone whose wisdom is earned, whose faith is grounded, and whose optimism is mature."
      },
      {
        heading: "YOUR EARNED AUTHORITY",
        content: "By your Saturn return and beyond, you can become an authority on grounded wisdom, mature philosophy, and realistic faith. Your struggles with dogmatism or cynicism become your credentials—you understand what it takes to develop real wisdom because you've tested your beliefs against reality. You can teach others how to believe without being dogmatic, how to maintain optimism while being realistic, and how to find meaning through experience. Your earned wisdom is that real philosophy is lived not just believed, that true freedom includes responsibility, and that the greatest faith is that which survives doubt. You become a model of grounded wisdom, showing others that meaning can be found, that hope can coexist with realism, and that the deepest truth is discovered through lived experience."
      }
    ],
    strengths: ["Grounded wisdom", "Disciplined faith", "Realistic optimism"],
    challenges: ["Dogmatism", "Restricted freedom", "Cynicism"]
  },

  "capricorn-saturn": {
    sign: "capricorn",
    planet: "saturn",
    title: "CAPRICORN",
    subtitle: "Saturn in Capricorn",
    sections: [
      {
        heading: "YOUR KARMIC LESSONS",
        content: "With Saturn in Capricorn, your soul's curriculum involves learning authentic authority, responsible ambition, and the art of building lasting structures. You came into this life to master achievement without losing your humanity, to develop genuine authority earned through integrity, and to learn that real success includes enjoying life. Your lessons center on overcoming fear of failure, developing balanced ambition, and learning that you can be both successful and human. This placement suggests that in early life, you may have experienced heavy responsibilities, pressure to achieve, or situations where you learned that your worth came from accomplishment, teaching you to work endlessly, to fear failure, or to sacrifice everything for success. Your karmic work involves learning that your worth isn't dependent on achievement, that real authority serves others, and that success means nothing without life balance."
      },
      {
        heading: "THE CHALLENGE & FEAR",
        content: "Your primary challenge is the fear of failure, not being good enough, or losing everything you've built. You may struggle with excessive responsibility, workaholism, or emotional coldness that comes from always being strong. This can manifest as working endlessly, taking on too much responsibility, or sacrificing relationships and joy for achievement. The fear often centers on failing, being seen as incompetent, or discovering that all your work was for nothing. You may have internalized messages that you must be perfect, that rest is laziness, or that your worth comes from what you achieve. The challenge is learning that these fears are teaching you to build real success and genuine authority, not to sacrifice your humanity for achievement."
      },
      {
        heading: "MASTERY & MATURITY",
        content: "As you work with Saturn in Capricorn, you gradually develop natural authority and balanced ambition. You learn that real success includes quality of life, that genuine authority is earned through integrity, and that you can achieve greatly while remaining human. Through life experience, you discover that sustainable success requires balance, that true leadership serves others, and that your worth is inherent not earned. You master the balance between ambition and enjoyment, learning when to work and when to rest. Your maturity shows in your ability to build lasting structures, to lead with both strength and compassion, and to achieve success while maintaining relationships and joy. You become someone who is both accomplished and human."
      },
      {
        heading: "YOUR EARNED AUTHORITY",
        content: "By your Saturn return and beyond, you can become an authority on authentic leadership, sustainable success, and building lasting structures. Your struggles with excessive responsibility and fear of failure become your credentials—you understand what it takes to achieve genuinely because you've learned that success without balance is hollow. You can teach others how to build lasting success, how to lead with integrity, and how to achieve without sacrificing humanity. Your earned wisdom is that real authority serves others, that true success includes life balance, and that the greatest achievement is building something that lasts while remaining fully human. You become a model of mature leadership, showing others that ambition and compassion can coexist, that success is sustainable, and that genuine authority is earned through integrity and service."
      }
    ],
    strengths: ["Natural authority", "Disciplined ambition", "Structural wisdom"],
    challenges: ["Excessive responsibility", "Fear of failure", "Emotional coldness"]
  },

  "aquarius-saturn": {
    sign: "aquarius",
    planet: "saturn",
    title: "AQUARIUS",
    subtitle: "Saturn in Aquarius",
    sections: [
      {
        heading: "YOUR KARMIC LESSONS",
        content: "With Saturn in Aquarius, your soul's curriculum involves learning authentic individuality, responsible innovation, and the art of balancing uniqueness with belonging. You came into this life to master being different without being isolated, to develop innovation that serves the collective, and to learn that real community honors individuality. Your lessons center on overcoming fear of rejection, developing genuine uniqueness, and learning that you can be both yourself and part of something larger. This placement suggests that in early life, you may have experienced feeling like an outsider, rejection for being different, or situations where you learned that belonging required conformity, teaching you to either hide your uniqueness or reject community altogether. Your karmic work involves learning that real individuality serves the collective, that true community celebrates differences, and that you can belong while being yourself."
      },
      {
        heading: "THE CHALLENGE & FEAR",
        content: "Your primary challenge is the fear of rejection, being too different, or never truly belonging. You may struggle with feeling like an outsider, detachment that protects you from rejection, or rebelliousness that keeps you isolated. This can manifest as hiding your uniqueness to fit in, rejecting groups before they can reject you, or being so different that connection becomes impossible. The fear often centers on being excluded, discovering you're too weird, or having to choose between being yourself and belonging. You may have internalized messages that you don't fit in, that your ideas are too strange, or that community requires conformity. The challenge is learning that these fears are teaching you to develop authentic individuality and find real community, not to hide yourself or isolate."
      },
      {
        heading: "MASTERY & MATURITY",
        content: "As you work with Saturn in Aquarius, you gradually develop authentic individuality and social responsibility. You learn that real uniqueness serves the collective, that genuine community celebrates differences, and that you can be both individual and connected. Through life experience, you discover that your differences are your gifts, that innovation serves progress, and that true belonging doesn't require conformity. You master the balance between individuality and community, learning when to stand alone and when to collaborate. Your maturity shows in your ability to be authentically yourself while contributing to the collective, to innovate responsibly, and to create community that honors everyone's uniqueness. You become someone who is both individual and connected."
      },
      {
        heading: "YOUR EARNED AUTHORITY",
        content: "By your Saturn return and beyond, you can become an authority on authentic individuality, responsible innovation, and creating inclusive community. Your struggles with feeling like an outsider become your credentials—you understand what it takes to belong while being yourself because you've walked that path. You can teach others how to embrace their uniqueness, how to innovate responsibly, and how to create communities that celebrate differences. Your earned wisdom is that real individuality serves the collective, that true community honors uniqueness, and that the greatest innovation is that which benefits everyone. You become a model of authentic uniqueness, showing others that you can be different and belong, that innovation can serve progress, and that the most powerful communities are those where everyone can be themselves."
      }
    ],
    strengths: ["Disciplined innovation", "Authentic individuality", "Social responsibility"],
    challenges: ["Feeling outcast", "Detachment", "Rebelliousness"]
  },

  "pisces-saturn": {
    sign: "pisces",
    planet: "saturn",
    title: "PISCES",
    subtitle: "Saturn in Pisces",
    sections: [
      {
        heading: "YOUR KARMIC LESSONS",
        content: "With Saturn in Pisces, your soul's curriculum involves learning healthy boundaries, grounded spirituality, and practical compassion. You came into this life to master being spiritual while staying embodied, to develop compassion that includes self-care, and to learn that real service requires boundaries. Your lessons center on overcoming victim mentality, developing spiritual discipline, and learning that you can be both compassionate and boundaried. This placement suggests that in early life, you may have experienced situations where boundaries were violated, where you absorbed others' pain, or where you learned that spirituality meant sacrificing yourself, teaching you to escape reality, to feel like a victim, or to serve others while neglecting yourself. Your karmic work involves learning that real spirituality is grounded, that true compassion includes boundaries, and that you can serve without sacrificing yourself."
      },
      {
        heading: "THE CHALLENGE & FEAR",
        content: "Your primary challenge is the fear of reality, setting boundaries that hurt others, or losing your spiritual connection. You may struggle with victim mentality, escapism through spirituality or substances, or difficulty saying no. This can manifest as absorbing others' emotions, feeling overwhelmed by the world's pain, or escaping into fantasy when reality is hard. The fear often centers on being trapped in harsh reality, hurting others by setting boundaries, or discovering that your spirituality isn't real. You may have internalized messages that boundaries are selfish, that you must save everyone, or that reality is too painful to face. The challenge is learning that these fears are teaching you to develop grounded spirituality and healthy compassion, not to escape or sacrifice yourself."
      },
      {
        heading: "MASTERY & MATURITY",
        content: "As you work with Saturn in Pisces, you gradually develop spiritual discipline and compassionate boundaries. You learn that real spirituality includes embodiment, that healthy compassion requires self-care, and that you can feel deeply while maintaining boundaries. Through life experience, you discover that boundaries protect your ability to serve, that grounded spirituality is more powerful than escapism, and that you can face reality while maintaining faith. You master the balance between compassion and boundaries, learning when to help and when to let others face their own lessons. Your maturity shows in your ability to be spiritual while practical, to serve without depleting yourself, and to maintain hope while facing reality. You become someone who is both deeply compassionate and wisely boundaried."
      },
      {
        heading: "YOUR EARNED AUTHORITY",
        content: "By your Saturn return and beyond, you can become an authority on grounded spirituality, healthy boundaries, and sustainable compassion. Your struggles with victim mentality and escapism become your credentials—you understand what it takes to be spiritual while grounded because you've learned the hard way. You can teach others how to maintain boundaries while being compassionate, how to ground their spirituality, and how to serve sustainably. Your earned wisdom is that real spirituality is embodied, that true compassion includes self-care, and that the greatest service is that which is sustainable. You become a model of grounded spirituality, showing others that you can be deeply spiritual while fully present, that compassion and boundaries enhance each other, and that the most powerful healing comes from those who have healed themselves."
      }
    ],
    strengths: ["Spiritual discipline", "Compassionate boundaries", "Grounded idealism"],
    challenges: ["Victim mentality", "Escapism", "Boundary issues"]
  },

  // ============================================================================
  // URANUS SIGNS (12) - Innovation, Rebellion, Awakening, Generational
  // ============================================================================

  "aries-uranus": {
    sign: "aries",
    planet: "uranus",
    title: "ARIES",
    subtitle: "Uranus in Aries",
    sections: [
      {
        heading: "YOUR REVOLUTIONARY IMPULSE",
        content: "Uranus in Aries (1927-1935, 2010-2019) represents a generation with a revolutionary impulse toward individual freedom, bold leadership, and pioneering action. Your collective awakening centers on the right to be yourself, to lead your own life, and to take initiative without asking permission. This placement brings an electric urge to break free from anything that constrains individual expression, to challenge authority that stifles courage, and to pioneer new territory. Your generation feels called to revolutionize what it means to be an individual, to redefine leadership as authentic self-expression, and to prove that one person can make a difference through bold action."
      },
      {
        heading: "INNOVATION & BREAKTHROUGHS",
        content: "Your generation's innovations focus on personal empowerment, entrepreneurship, and technologies that enable individual action. This manifests as breakthroughs in personal computing, social media for self-expression, startup culture, and tools that let anyone become a creator or leader. You revolutionize by making leadership accessible to all, by creating platforms where anyone can have a voice, and by developing technologies that amplify individual power. Your breakthroughs include new models of self-employment, personal branding, and ways for individuals to bypass traditional gatekeepers. You're innovating how people take initiative, assert themselves, and lead from authenticity rather than authority."
      },
      {
        heading: "REBELLION & FREEDOM",
        content: "Your rebellion is against anything that tells you who to be, how to act, or what you can't do. You challenge traditional authority, hierarchical leadership, and systems that require conformity. Your fight for freedom is personal and immediate—the freedom to be yourself, to take risks, to fail and try again, to lead your own life. However, the shadow includes reckless individualism, impulsive rebellion without purpose, and freedom that becomes isolation. Your generational work involves learning that real freedom includes responsibility, that true rebellion serves something greater than ego, and that the most revolutionary act is being authentically yourself while respecting others' right to do the same."
      },
      {
        heading: "GROUNDING THE REVOLUTION",
        content: "Grounding Uranus in Aries requires channeling revolutionary energy into sustainable change, leading boldly while building something lasting, and pioneering paths that others can follow. Your generation must learn that real revolution requires follow-through, that true innovation needs both inspiration and execution, and that lasting change comes from consistent action not just dramatic gestures. The work involves taking your impulse for freedom and individuality and manifesting it in ways that actually change systems, creating new models of leadership that empower rather than dominate. You're here to show that revolution can be personal and powerful, and that the greatest freedom is the courage to be exactly who you are."
      }
    ],
    strengths: ["Revolutionary leadership", "Pioneering innovation", "Individual freedom"],
    challenges: ["Reckless rebellion", "Excessive individualism", "Impulsive change"]
  },

  "taurus-uranus": {
    sign: "taurus",
    planet: "uranus",
    title: "TAURUS",
    subtitle: "Uranus in Taurus",
    sections: [
      {
        heading: "YOUR REVOLUTIONARY IMPULSE",
        content: "Uranus in Taurus (1935-1942, 2018-2026) represents a generation with a revolutionary impulse toward values, resources, and our relationship with Earth. Your collective awakening centers on redefining what has value, revolutionizing financial systems, and transforming how humanity relates to the natural world. This placement brings an electric urge to break free from old economic models, to challenge materialism while honoring the material, and to create new forms of security. Your generation feels called to revolutionize money itself, to prove that sustainability and prosperity can coexist, and to ground revolutionary ideals in practical reality."
      },
      {
        heading: "INNOVATION & BREAKTHROUGHS",
        content: "Your generation's innovations focus on financial technology, sustainable systems, and practical revolution. This manifests as breakthroughs in cryptocurrency and blockchain, regenerative agriculture, renewable energy, and economic models that value environmental health. You revolutionize by creating alternatives to traditional banking, by developing technologies that work with nature rather than against it, and by proving that security can come from sustainability. Your breakthroughs include new forms of currency, ways to tokenize value, and practical solutions to environmental challenges. You're innovating how humanity relates to money, resources, and Earth itself."
      },
      {
        heading: "REBELLION & FREEDOM",
        content: "Your rebellion is against economic systems that create inequality, values that prioritize profit over planet, and financial structures that serve the few at the expense of the many. You challenge traditional banking, unsustainable consumption, and the belief that security comes from accumulation. Your fight for freedom includes financial freedom through new economic models, freedom from systems that destroy Earth, and the freedom to redefine what has value. However, the shadow includes disruption without stability, resistance to necessary change, and confusing innovation with chaos. Your generational work involves learning that real revolution in the material world requires patience, that true change must be grounded to last, and that the most revolutionary act is creating systems that actually work."
      },
      {
        heading: "GROUNDING THE REVOLUTION",
        content: "Grounding Uranus in Taurus requires building new systems that are both revolutionary and stable, innovating in ways that create lasting value, and revolutionizing resources while respecting natural limits. Your generation must learn that real change in the material world takes time, that true innovation must be practical to be adopted, and that sustainable revolution is more powerful than dramatic disruption. The work involves taking your vision for new economic and environmental systems and manifesting them in reality, creating alternatives that people can actually use and trust. You're here to show that revolution can be practical and grounded, and that the greatest innovation serves both humanity and Earth."
      }
    ],
    strengths: ["Financial innovation", "Sustainable revolution", "Practical change"],
    challenges: ["Resistance to change", "Economic disruption", "Materialism"]
  },

  "gemini-uranus": {
    sign: "gemini",
    planet: "uranus",
    title: "GEMINI",
    subtitle: "Uranus in Gemini",
    sections: [
      {
        heading: "YOUR REVOLUTIONARY IMPULSE",
        content: "Uranus in Gemini (1942-1949) represents a generation with a revolutionary impulse toward communication, information, and how we think. Your collective awakening centers on freedom of information, revolutionary education, and transforming how humanity shares knowledge. This placement brings an electric urge to break free from censorship and propaganda, to challenge traditional education that stifles curiosity, and to create new ways of connecting minds. Your generation feels called to revolutionize media, to prove that information wants to be free, and to transform how people learn and communicate."
      },
      {
        heading: "INNOVATION & BREAKTHROUGHS",
        content: "Your generation's innovations focus on communication technology, information systems, and educational models. This manifests as breakthroughs in computing, early internet concepts, new media forms, and alternative education. You revolutionize by creating technologies that enable instant communication, by developing systems for storing and sharing information, and by challenging the monopoly on knowledge. Your breakthroughs include the foundations of information technology, new forms of journalism, and educational approaches that honor individual learning styles. You're innovating how humanity thinks, communicates, and processes information."
      },
      {
        heading: "REBELLION & FREEDOM",
        content: "Your rebellion is against censorship, propaganda, and systems that control information. You challenge traditional education that treats students as empty vessels, media that manipulates rather than informs, and any attempt to limit free thought and communication. Your fight for freedom includes freedom of speech, freedom of the press, and the freedom to learn in your own way. However, the shadow includes information overload, mental restlessness, and innovation without depth. Your generational work involves learning that real freedom of information requires discernment, that true communication creates understanding not just noise, and that the most revolutionary knowledge is that which can be applied."
      },
      {
        heading: "GROUNDING THE REVOLUTION",
        content: "Grounding Uranus in Gemini requires using communication technology to create real connection, sharing information in ways that enlighten rather than overwhelm, and innovating education that produces wisdom not just knowledge. Your generation must learn that real revolution in communication requires clarity, that true innovation in information serves understanding, and that lasting change comes from depth not just speed. The work involves taking your vision for free and revolutionary communication and manifesting it in systems that actually improve how people think and connect. You're here to show that revolution can be intelligent and communicative, and that the greatest innovation is that which helps humanity understand itself and each other."
      }
    ],
    strengths: ["Communication revolution", "Educational innovation", "Information freedom"],
    challenges: ["Information overload", "Mental restlessness", "Superficial change"]
  },

  "cancer-uranus": {
    sign: "cancer",
    planet: "uranus",
    title: "CANCER",
    subtitle: "Uranus in Cancer",
    sections: [
      {
        heading: "YOUR REVOLUTIONARY IMPULSE",
        content: "Uranus in Cancer (1949-1956) represents a generation with a revolutionary impulse toward family, home, and emotional expression. Your collective awakening centers on redefining what family means, revolutionizing domestic life, and transforming how humanity nurtures and creates belonging. This placement brings an electric urge to break free from traditional family structures, to challenge patriarchal home models, and to create new forms of emotional connection. Your generation feels called to revolutionize motherhood and nurturing, to prove that family can be chosen not just inherited, and to transform how people create home and safety."
      },
      {
        heading: "INNOVATION & BREAKTHROUGHS",
        content: "Your generation's innovations focus on domestic technology, family structures, and emotional awareness. This manifests as breakthroughs in home appliances that freed people from domestic drudgery, new family models including single parents and blended families, and the beginning of emotional intelligence as a concept. You revolutionize by creating technologies that change home life, by proving that family can take many forms, and by bringing emotional awareness into mainstream consciousness. Your breakthroughs include labor-saving devices, alternative family structures, and new approaches to parenting. You're innovating how humanity nurtures, creates belonging, and expresses emotions."
      },
      {
        heading: "REBELLION & FREEDOM",
        content: "Your rebellion is against rigid family structures, traditional gender roles in the home, and the suppression of emotions. You challenge the nuclear family as the only valid model, domestic roles that trap people, and the belief that emotions should be hidden. Your fight for freedom includes freedom to create family in your own way, freedom from domestic servitude, and the freedom to feel and express emotions authentically. However, the shadow includes family disruption, emotional instability, and rootlessness. Your generational work involves learning that real revolution in family requires creating new stability, that true emotional freedom includes the ability to commit, and that the most revolutionary home is one where everyone can be themselves."
      },
      {
        heading: "GROUNDING THE REVOLUTION",
        content: "Grounding Uranus in Cancer requires building new family structures that provide real security, innovating home life in ways that nurture rather than disrupt, and revolutionizing emotions while creating emotional safety. Your generation must learn that real change in family and home requires creating new forms of stability, that true innovation in nurturing serves connection, and that lasting transformation honors the need for belonging. The work involves taking your vision for revolutionary family and emotional life and manifesting it in ways that actually nurture, creating alternative structures that provide the security people need. You're here to show that revolution can be nurturing and emotional, and that the greatest innovation is creating homes where everyone truly belongs."
      }
    ],
    strengths: ["Family innovation", "Emotional revolution", "Domestic change"],
    challenges: ["Family disruption", "Emotional instability", "Rootlessness"]
  },

  "leo-uranus": {
    sign: "leo",
    planet: "uranus",
    title: "LEO",
    subtitle: "Uranus in Leo",
    sections: [
      {
        heading: "YOUR REVOLUTIONARY IMPULSE",
        content: "Uranus in Leo (1956-1962) represents a generation with a revolutionary impulse toward creativity, self-expression, and individual authenticity. Your collective awakening centers on the right to express yourself uniquely, to create without rules, and to shine in your own way. This placement brings an electric urge to break free from conventional art forms, to challenge entertainment that suppresses individuality, and to create new ways of celebrating the self. Your generation feels called to revolutionize creativity itself, to prove that everyone is an artist, and to transform how humanity expresses and celebrates individuality."
      },
      {
        heading: "INNOVATION & BREAKTHROUGHS",
        content: "Your generation's innovations focus on creative expression, entertainment, and celebrating individuality. This manifests as breakthroughs in rock and roll, youth culture, personal style as statement, and the idea that creativity is for everyone not just the elite. You revolutionize by making creativity accessible, by creating new art forms that break all rules, and by proving that self-expression is a birthright. Your breakthroughs include revolutionary music, new forms of performance, and the concept that being yourself is the ultimate creative act. You're innovating how humanity creates, performs, and expresses the unique self."
      },
      {
        heading: "REBELLION & FREEDOM",
        content: "Your rebellion is against conformity in expression, traditional art that follows rules, and systems that suppress individuality. You challenge the establishment's control of culture, the idea that only trained artists can create, and anything that tells you to dim your light. Your fight for freedom includes freedom to express yourself however you want, freedom to create without permission, and the freedom to be celebrated for being unique. However, the shadow includes ego disruption, attention-seeking that becomes narcissism, and drama for drama's sake. Your generational work involves learning that real creative freedom serves authentic expression, that true individuality doesn't require constant performance, and that the most revolutionary art comes from the heart not the ego."
      },
      {
        heading: "GROUNDING THE REVOLUTION",
        content: "Grounding Uranus in Leo requires channeling creative rebellion into lasting art, expressing individuality in ways that inspire rather than just shock, and revolutionizing creativity while developing actual skill. Your generation must learn that real innovation in art requires both freedom and craft, that true self-expression serves beauty and meaning, and that lasting creative change comes from authentic vision not just rebellion. The work involves taking your impulse for creative freedom and manifesting it in art and expression that actually moves people, creating new forms that honor both innovation and excellence. You're here to show that revolution can be creative and joyful, and that the greatest art is that which celebrates authentic individuality."
      }
    ],
    strengths: ["Creative revolution", "Expressive innovation", "Individual freedom"],
    challenges: ["Ego disruption", "Attention-seeking", "Drama"]
  },

  "virgo-uranus": {
    sign: "virgo",
    planet: "uranus",
    title: "VIRGO",
    subtitle: "Uranus in Virgo",
    sections: [
      {
        heading: "YOUR REVOLUTIONARY IMPULSE",
        content: "Uranus in Virgo (1962-1969) represents a generation with a revolutionary impulse toward health, work, and daily life. Your collective awakening centers on transforming healthcare, revolutionizing work structures, and creating new approaches to service and wellness. This placement brings an electric urge to break free from medical systems that treat symptoms not causes, to challenge work that exploits rather than fulfills, and to create new ways of organizing daily life. Your generation feels called to revolutionize health itself, to prove that work can be meaningful service, and to transform how humanity approaches the body, wellness, and practical life."
      },
      {
        heading: "INNOVATION & BREAKTHROUGHS",
        content: "Your generation's innovations focus on holistic health, alternative medicine, and revolutionary work models. This manifests as breakthroughs in natural health, preventive medicine, organic food movement, and new approaches to work-life balance. You revolutionize by creating alternatives to conventional medicine, by developing technologies that improve daily life, and by proving that health is holistic. Your breakthroughs include alternative healing modalities, environmental health awareness, and the concept that work should serve life not consume it. You're innovating how humanity heals, serves, and organizes the practical details of existence."
      },
      {
        heading: "REBELLION & FREEDOM",
        content: "Your rebellion is against medical systems that ignore the whole person, work structures that treat people as machines, and daily routines that serve productivity over wellness. You challenge pharmaceutical dominance, exploitative work conditions, and the belief that health is just absence of disease. Your fight for freedom includes freedom to choose your own healing path, freedom from work that destroys health, and the freedom to organize life in ways that serve wellness. However, the shadow includes health anxiety, work disruption without alternatives, and perfectionism about wellness. Your generational work involves learning that real revolution in health and work creates better systems, that true innovation serves practical needs, and that the most revolutionary daily life is one that honors both productivity and wellbeing."
      },
      {
        heading: "GROUNDING THE REVOLUTION",
        content: "Grounding Uranus in Virgo requires building new health systems that actually work, revolutionizing work in ways that are sustainable, and innovating daily life while maintaining necessary routines. Your generation must learn that real change in health and work requires practical alternatives, that true innovation must be accessible and affordable, and that lasting transformation honors the need for order and routine. The work involves taking your vision for revolutionary health and work and manifesting it in systems people can actually use, creating alternatives that are both innovative and practical. You're here to show that revolution can be practical and healing, and that the greatest innovation is that which improves daily life for everyone."
      }
    ],
    strengths: ["Health innovation", "Work revolution", "Practical change"],
    challenges: ["Health anxiety", "Work disruption", "Perfectionism"]
  },

  "libra-uranus": {
    sign: "libra",
    planet: "uranus",
    title: "LIBRA",
    subtitle: "Uranus in Libra",
    sections: [
      {
        heading: "YOUR REVOLUTIONARY IMPULSE",
        content: "Uranus in Libra (1969-1975) represents a generation with a revolutionary impulse toward relationships, justice, and social equality. Your collective awakening centers on transforming partnership models, revolutionizing justice systems, and creating new forms of relating. This placement brings an electric urge to break free from traditional marriage, to challenge legal systems that perpetuate inequality, and to create new ways of finding balance and fairness. Your generation feels called to revolutionize relationships themselves, to prove that partnership can take many forms, and to transform how humanity creates justice and social harmony."
      },
      {
        heading: "INNOVATION & BREAKTHROUGHS",
        content: "Your generation's innovations focus on alternative relationships, social justice, and new models of partnership. This manifests as breakthroughs in no-fault divorce, open relationships, marriage equality, and legal reforms for social justice. You revolutionize by creating alternatives to traditional marriage, by challenging laws that discriminate, and by proving that justice must evolve. Your breakthroughs include new partnership models, legal protections for equality, and the concept that relationships should be based on choice not obligation. You're innovating how humanity relates, creates fairness, and finds balance between individual and collective needs."
      },
      {
        heading: "REBELLION & FREEDOM",
        content: "Your rebellion is against traditional marriage that traps people, legal systems that perpetuate inequality, and social norms that dictate how people should relate. You challenge patriarchal partnership models, discriminatory laws, and the belief that there's only one right way to be in relationship. Your fight for freedom includes freedom to create relationships on your own terms, freedom from laws that discriminate, and the freedom to find your own balance. However, the shadow includes relationship instability, indecisiveness that prevents commitment, and social disruption without creating new stability. Your generational work involves learning that real revolution in relationships creates new forms of commitment, that true justice serves everyone, and that the most revolutionary partnership is one based on equality and authentic choice."
      },
      {
        heading: "GROUNDING THE REVOLUTION",
        content: "Grounding Uranus in Libra requires building new relationship models that provide real partnership, revolutionizing justice in ways that create actual equality, and innovating social structures while maintaining necessary harmony. Your generation must learn that real change in relationships requires new forms of commitment, that true innovation in justice must be enshrined in law, and that lasting social transformation honors the need for connection and balance. The work involves taking your vision for revolutionary relationships and justice and manifesting it in legal and social structures that actually work, creating alternatives that honor both freedom and connection. You're here to show that revolution can be relational and fair, and that the greatest innovation is creating systems where everyone can relate as equals."
      }
    ],
    strengths: ["Relationship innovation", "Social justice", "Partnership freedom"],
    challenges: ["Relationship instability", "Indecisiveness", "Social disruption"]
  },

  "scorpio-uranus": {
    sign: "scorpio",
    planet: "uranus",
    title: "SCORPIO",
    subtitle: "Uranus in Scorpio",
    sections: [
      {
        heading: "YOUR REVOLUTIONARY IMPULSE",
        content: "Uranus in Scorpio (1975-1981) represents a generation with a revolutionary impulse toward sexuality, power, and psychological transformation. Your collective awakening centers on transforming sexual expression, revolutionizing power structures, and creating new approaches to depth and intimacy. This placement brings an electric urge to break free from sexual repression, to challenge corrupt power systems, and to create new ways of exploring psychological depths. Your generation feels called to revolutionize sexuality itself, to prove that power can be shared, and to transform how humanity approaches intimacy, death, and rebirth."
      },
      {
        heading: "INNOVATION & BREAKTHROUGHS",
        content: "Your generation's innovations focus on sexual freedom, psychological healing, and transforming power. This manifests as breakthroughs in AIDS awareness and safe sex, depth psychology becoming mainstream, exposure of corruption, and new approaches to sexuality and intimacy. You revolutionize by bringing taboos into the light, by creating new models of shared power, and by proving that transformation requires facing shadow. Your breakthroughs include sexual health education, trauma therapy, whistleblowing on abuse, and the concept that real power serves healing. You're innovating how humanity transforms, shares power, and explores the depths of psyche and sexuality."
      },
      {
        heading: "REBELLION & FREEDOM",
        content: "Your rebellion is against sexual repression, corrupt power structures, and the suppression of psychological truth. You challenge taboos that create shame, power systems that abuse, and the avoidance of death and shadow. Your fight for freedom includes freedom to express sexuality authentically, freedom from abusive power, and the freedom to explore psychological depths. However, the shadow includes power struggles, intensity that overwhelms, and obsession with transformation. Your generational work involves learning that real revolution in sexuality and power creates safety, that true transformation respects boundaries, and that the most revolutionary intimacy is that which honors both depth and consent."
      },
      {
        heading: "GROUNDING THE REVOLUTION",
        content: "Grounding Uranus in Scorpio requires transforming sexuality and power in ways that create real safety, revolutionizing psychology while respecting the pace of healing, and innovating intimacy while maintaining healthy boundaries. Your generation must learn that real change in sexuality and power requires creating structures that protect the vulnerable, that true innovation in psychology serves healing, and that lasting transformation honors both depth and integration. The work involves taking your vision for revolutionary sexuality and power and manifesting it in ways that actually heal, creating new approaches that honor both intensity and safety. You're here to show that revolution can be deep and transformative, and that the greatest power is that which serves life and healing."
      }
    ],
    strengths: ["Sexual revolution", "Psychological innovation", "Transformative change"],
    challenges: ["Power struggles", "Intensity", "Obsession"]
  },

  "sagittarius-uranus": {
    sign: "sagittarius",
    planet: "uranus",
    title: "SAGITTARIUS",
    subtitle: "Uranus in Sagittarius",
    sections: [
      {
        heading: "YOUR REVOLUTIONARY IMPULSE",
        content: "Uranus in Sagittarius (1981-1988) represents a generation with a revolutionary impulse toward truth, freedom, and global consciousness. Your collective awakening centers on transforming belief systems, revolutionizing education, and creating new approaches to meaning and exploration. This placement brings an electric urge to break free from dogmatic religion, to challenge educational systems that limit thinking, and to create new ways of seeking truth. Your generation feels called to revolutionize philosophy itself, to prove that truth is vast and evolving, and to transform how humanity explores, learns, and finds meaning."
      },
      {
        heading: "INNOVATION & BREAKTHROUGHS",
        content: "Your generation's innovations focus on global consciousness, alternative education, and philosophical freedom. This manifests as breakthroughs in the internet enabling global connection, alternative spirituality going mainstream, educational technology, and the concept of being a global citizen. You revolutionize by creating technologies that connect the world, by proving that spirituality can be individual, and by developing new ways to learn and explore. Your breakthroughs include online education, spiritual eclecticism, international travel becoming accessible, and the idea that truth is experiential. You're innovating how humanity seeks meaning, explores the world, and connects across cultures."
      },
      {
        heading: "REBELLION & FREEDOM",
        content: "Your rebellion is against dogmatic religion, educational systems that indoctrinate, and borders that separate humanity. You challenge traditional beliefs that claim exclusive truth, institutions that limit exploration, and the idea that meaning comes from authority. Your fight for freedom includes freedom to seek truth in your own way, freedom to explore without borders, and the freedom to create your own philosophy. However, the shadow includes dogmatism about being non-dogmatic, restlessness that prevents depth, and excess that becomes escapism. Your generational work involves learning that real revolution in belief requires wisdom, that true freedom includes commitment to a path, and that the most revolutionary philosophy is one that can be lived."
      },
      {
        heading: "GROUNDING THE REVOLUTION",
        content: "Grounding Uranus in Sagittarius requires seeking truth in ways that create real understanding, revolutionizing education while maintaining rigor, and innovating philosophy while developing actual wisdom. Your generation must learn that real change in belief and education requires depth, that true innovation in meaning-making must be tested by experience, and that lasting philosophical transformation comes from lived wisdom. The work involves taking your vision for revolutionary truth-seeking and manifesting it in educational and philosophical systems that actually work, creating approaches that honor both freedom and depth. You're here to show that revolution can be expansive and wise, and that the greatest freedom is found in truth that sets you free."
      }
    ],
    strengths: ["Philosophical innovation", "Global consciousness", "Educational revolution"],
    challenges: ["Dogmatism", "Restlessness", "Excess"]
  },

  "capricorn-uranus": {
    sign: "capricorn",
    planet: "uranus",
    title: "CAPRICORN",
    subtitle: "Uranus in Capricorn",
    sections: [
      {
        heading: "YOUR REVOLUTIONARY IMPULSE",
        content: "Uranus in Capricorn (1988-1996) represents a generation with a revolutionary impulse toward structures, authority, and systems of governance. Your collective awakening centers on transforming institutions, revolutionizing business and government, and creating new approaches to building and leading. This placement brings an electric urge to break free from corrupt institutions, to challenge authority that serves itself, and to create new ways of organizing society. Your generation feels called to revolutionize the very structures of civilization, to prove that systems can serve people, and to transform how humanity builds, governs, and exercises authority."
      },
      {
        heading: "INNOVATION & BREAKTHROUGHS",
        content: "Your generation's innovations focus on institutional reform, new business models, and revolutionary governance. This manifests as breakthroughs in the fall of the Soviet Union, the rise of the internet changing business, new organizational structures, and challenges to traditional authority. You revolutionize by dismantling systems that don't work, by creating new models of business and governance, and by proving that authority must be earned. Your breakthroughs include the digital revolution in business, new forms of organization, exposure of institutional corruption, and the concept that structures must serve the people. You're innovating how humanity builds, governs, and creates lasting systems."
      },
      {
        heading: "REBELLION & FREEDOM",
        content: "Your rebellion is against corrupt institutions, authority that abuses power, and systems that perpetuate inequality. You challenge traditional hierarchies, business models that exploit, and governments that serve the few. Your fight for freedom includes freedom from institutional oppression, freedom to create new structures, and the freedom to challenge authority. However, the shadow includes disruption without building alternatives, rigidity in your own revolutionary beliefs, and control issues. Your generational work involves learning that real revolution in structures requires building better systems, that true innovation in governance serves stability, and that the most revolutionary authority is that which empowers others."
      },
      {
        heading: "GROUNDING THE REVOLUTION",
        content: "Grounding Uranus in Capricorn requires building new structures that actually work, revolutionizing institutions while maintaining necessary order, and innovating governance in ways that create real stability. Your generation must learn that real change in systems requires patient building, that true innovation in authority serves the collective, and that lasting structural transformation comes from creating alternatives that are more effective than what they replace. The work involves taking your vision for revolutionary structures and manifesting them in institutions and systems that actually serve people, creating new models of governance and business that honor both innovation and responsibility. You're here to show that revolution can be structural and responsible, and that the greatest innovation is building systems that truly serve humanity."
      }
    ],
    strengths: ["Structural innovation", "Authority revolution", "Practical change"],
    challenges: ["Institutional disruption", "Rigidity", "Control issues"]
  },

  "aquarius-uranus": {
    sign: "aquarius",
    planet: "uranus",
    title: "AQUARIUS",
    subtitle: "Uranus in Aquarius",
    sections: [
      {
        heading: "YOUR REVOLUTIONARY IMPULSE",
        content: "Uranus in Aquarius (1996-2003, 2079-2086) represents a generation with a revolutionary impulse toward technology, collective consciousness, and the future itself. Your collective awakening centers on transforming how humanity connects, revolutionizing technology, and creating new approaches to community and innovation. This placement brings an electric urge to break free from old social structures, to challenge systems that divide humanity, and to create new ways of connecting and innovating. Your generation feels called to revolutionize technology itself, to prove that humanity can evolve, and to transform how people connect, collaborate, and create the future together."
      },
      {
        heading: "INNOVATION & BREAKTHROUGHS",
        content: "Your generation's innovations focus on digital technology, social networks, and collective intelligence. This manifests as breakthroughs in social media, smartphones, collaborative platforms, and the concept of global digital citizenship. You revolutionize by creating technologies that connect everyone, by proving that innovation can be collaborative, and by developing new forms of community that transcend geography. Your breakthroughs include social networking, crowdsourcing, open-source collaboration, and the idea that technology can unite humanity. You're innovating how humanity connects, collaborates, and creates collective solutions to global problems."
      },
      {
        heading: "REBELLION & FREEDOM",
        content: "Your rebellion is against systems that isolate people, technologies that divide, and structures that prevent collective progress. You challenge traditional communities that exclude, hierarchies that prevent collaboration, and the belief that we must compete rather than cooperate. Your fight for freedom includes freedom to connect with anyone anywhere, freedom to innovate collectively, and the freedom to create the future together. However, the shadow includes detachment from real human connection, rebellion without purpose, and impractical idealism. Your generational work involves learning that real revolution in technology serves human connection, that true innovation honors both individuality and community, and that the most revolutionary future is one that includes everyone."
      },
      {
        heading: "GROUNDING THE REVOLUTION",
        content: "Grounding Uranus in Aquarius requires using technology to create real connection, revolutionizing community in ways that honor human needs, and innovating for the future while staying grounded in present reality. Your generation must learn that real change through technology requires wisdom, that true innovation serves humanity not just progress, and that lasting transformation comes from balancing innovation with human values. The work involves taking your vision for revolutionary technology and connection and manifesting it in ways that actually improve human life, creating systems that honor both technological possibility and human flourishing. You're here to show that revolution can be innovative and humane, and that the greatest technology is that which brings humanity together."
      }
    ],
    strengths: ["Technological innovation", "Social revolution", "Humanitarian progress"],
    challenges: ["Detachment", "Rebellion", "Impracticality"]
  },

  "pisces-uranus": {
    sign: "pisces",
    planet: "uranus",
    title: "PISCES",
    subtitle: "Uranus in Pisces",
    sections: [
      {
        heading: "YOUR REVOLUTIONARY IMPULSE",
        content: "Uranus in Pisces (2003-2010) represents a generation with a revolutionary impulse toward spirituality, compassion, and universal consciousness. Your collective awakening centers on transforming spiritual practice, revolutionizing compassion, and creating new approaches to oneness and transcendence. This placement brings an electric urge to break free from religious dogma, to challenge spiritual materialism, and to create new ways of connecting to the divine. Your generation feels called to revolutionize spirituality itself, to prove that awakening is possible for everyone, and to transform how humanity expresses compassion and connects to universal consciousness."
      },
      {
        heading: "INNOVATION & BREAKTHROUGHS",
        content: "Your generation's innovations focus on spiritual awakening, artistic revolution, and universal compassion. This manifests as breakthroughs in meditation and mindfulness going mainstream, new forms of spiritual practice, digital art and music, and the concept of global empathy. You revolutionize by making spirituality accessible to all, by creating new art forms that transcend boundaries, and by proving that compassion can be revolutionary. Your breakthroughs include mindfulness apps, spiritual eclecticism, viral compassion through social media, and the idea that awakening is humanity's next evolution. You're innovating how humanity connects spiritually, expresses universal love, and transcends separation."
      },
      {
        heading: "REBELLION & FREEDOM",
        content: "Your rebellion is against religious institutions that limit spirituality, systems that suppress compassion, and boundaries that create separation. You challenge traditional religion that claims exclusive access to God, materialism that denies spirit, and the belief that we are separate from each other. Your fight for freedom includes freedom to connect with the divine in your own way, freedom to feel for all beings, and the freedom to dissolve boundaries that divide. However, the shadow includes escapism into spirituality, confusion about boundaries, and dissolution that prevents grounding. Your generational work involves learning that real revolution in spirituality requires embodiment, that true compassion includes healthy boundaries, and that the most revolutionary awakening is one that serves life on Earth."
      },
      {
        heading: "GROUNDING THE REVOLUTION",
        content: "Grounding Uranus in Pisces requires revolutionizing spirituality while staying embodied, innovating compassion in practical ways, and transforming consciousness while maintaining necessary boundaries. Your generation must learn that real change in spirituality requires integration, that true innovation in compassion serves sustainable service, and that lasting spiritual transformation includes being fully human. The work involves taking your vision for revolutionary spirituality and universal love and manifesting it in ways that actually help people awaken, creating spiritual practices and compassionate systems that honor both transcendence and embodiment. You're here to show that revolution can be spiritual and grounded, and that the greatest awakening is one that serves all beings."
      }
    ],
    strengths: ["Spiritual innovation", "Compassionate revolution", "Artistic breakthroughs"],
    challenges: ["Escapism", "Confusion", "Boundary dissolution"]
  },

  // ============================================================================
  // NEPTUNE SIGNS (12) - Dreams, Spirituality, Illusion, Generational
  // ============================================================================

  "aries-neptune": {
    sign: "aries",
    planet: "neptune",
    title: "ARIES",
    subtitle: "Neptune in Aries",
    sections: [
      {
        heading: "YOUR DREAMS & VISIONS",
        content: "Neptune in Aries (1861-1875) represented a generation that idealized courage, heroism, and the pioneering spirit. Your collective dreams focused on perfect independence, idealized leadership, and the vision of fearless individuality. This placement brought spiritual longing for a world where everyone could be brave, where action was inspired by divine purpose, and where leadership served the highest good. Your generation dissolved old boundaries around what it meant to be a hero, imagining new forms of courageous action that combined spiritual vision with bold initiative. You dreamed of a world where individual will aligned with divine will."
      },
      {
        heading: "SPIRITUAL CONNECTION",
        content: "With Neptune in Aries, your generation's spiritual path involved connecting to the divine through action, courage, and pioneering new territory. There was a collective sense that spirituality could be active rather than passive, that the divine could be found in bold initiative and fearless exploration. This manifested as spiritual warriors, inspired leaders, and the belief that taking action could be a form of prayer. However, the challenge was distinguishing between divinely inspired action and ego-driven impulse, between true courage and reckless aggression. Your generation had to learn that real spiritual action requires both boldness and wisdom."
      },
      {
        heading: "COMPASSION & SACRIFICE",
        content: "The compassionate expression of Neptune in Aries involved fighting for those who couldn't fight for themselves, pioneering new paths for others to follow, and sacrificing personal safety for a greater cause. Your generation understood that sometimes compassion requires courage, that helping others might mean taking risks, and that true service can be active and assertive. However, the shadow included the potential for misguided heroism, for confusing aggression with compassion, and for sacrificing wisely in the name of idealistic causes. Your generational work involved learning that real compassion sometimes requires bold action, but that action must be guided by wisdom not just passion."
      },
      {
        heading: "GROUNDING YOUR VISION",
        content: "Grounding Neptune in Aries required learning to channel inspired action through practical wisdom, to be courageous without being reckless, and to lead with both vision and responsibility. Your generation had to discover that real heroism includes vulnerability, that true pioneering requires planning as well as passion, and that the most inspired action is grounded in reality. The work involved bringing spiritual ideals about courage and leadership into practical manifestation, creating new forms of inspired action that served real needs. You were here to show that spirituality can be active and bold, and that the greatest courage is acting from love rather than fear."
      }
    ],
    strengths: ["Idealized courage", "Spiritual pioneering", "Inspired action"],
    challenges: ["Delusional independence", "Misguided heroism", "Aggressive idealism"]
  },

  "taurus-neptune": {
    sign: "taurus",
    planet: "neptune",
    title: "TAURUS",
    subtitle: "Neptune in Taurus",
    sections: [
      {
        heading: "YOUR DREAMS & VISIONS",
        content: "Neptune in Taurus (1875-1889) represented a generation that idealized material security, natural beauty, and harmony with Earth. Your collective dreams focused on perfect abundance, idealized beauty, and the vision of humanity living in peace with nature. This placement brought spiritual longing for a world where everyone had enough, where beauty was accessible to all, and where the material and spiritual were one. Your generation dissolved old boundaries around materialism, imagining that wealth could be spiritual and that Earth itself was sacred. You dreamed of a world where sensual pleasure and spiritual practice were integrated."
      },
      {
        heading: "SPIRITUAL CONNECTION",
        content: "With Neptune in Taurus, your generation's spiritual path involved connecting to the divine through nature, beauty, and the physical senses. There was a collective sense that spirituality could be found in the body, in the Earth, and in material creation. This manifested as nature mysticism, the Arts and Crafts movement, and the belief that creating beauty was a form of worship. However, the challenge was distinguishing between spiritual materialism and true connection, between appreciating abundance and becoming attached to it. Your generation had to learn that real spiritual connection to Earth honors rather than exploits natural resources."
      },
      {
        heading: "COMPASSION & SACRIFICE",
        content: "The compassionate expression of Neptune in Taurus involved sharing resources, creating beauty for others to enjoy, and protecting the natural world. Your generation understood that compassion could be practical—feeding the hungry, providing shelter, preserving natural spaces. However, the shadow included the potential for enabling dependency, for confusing charity with true help, and for sacrificing sustainability for immediate comfort. Your generational work involved learning that real compassion creates sustainable abundance, that true generosity teaches others to provide for themselves, and that protecting Earth is the ultimate act of service to future generations."
      },
      {
        heading: "GROUNDING YOUR VISION",
        content: "Grounding Neptune in Taurus required learning to create real abundance rather than just dreaming of it, to appreciate beauty without becoming attached to possessions, and to honor Earth through sustainable practices. Your generation had to discover that spiritual ideals about abundance must be manifested through practical work, that true security comes from living within our means, and that real beauty is found in simplicity. The work involved bringing dreams of material-spiritual integration into reality, creating systems that honored both prosperity and sustainability. You were here to show that spirituality can be embodied and practical, and that the greatest abundance comes from gratitude for what we have."
      }
    ],
    strengths: ["Idealized beauty", "Spiritual materialism", "Natural harmony"],
    challenges: ["Material delusion", "Overindulgence", "Greed"]
  },

  "gemini-neptune": {
    sign: "gemini",
    planet: "neptune",
    title: "GEMINI",
    subtitle: "Neptune in Gemini",
    sections: [
      {
        heading: "YOUR DREAMS & VISIONS",
        content: "Neptune in Gemini (1889-1902) represented a generation that idealized communication, knowledge, and universal understanding. Your collective dreams focused on perfect communication, idealized learning, and the vision of humanity connected through shared knowledge. This placement brought spiritual longing for a world where everyone could understand each other, where information flowed freely, and where words could heal. Your generation dissolved old boundaries around communication, imagining new forms of connection that transcended language barriers. You dreamed of a world where thought itself could be spiritual and where communication could bridge all divides."
      },
      {
        heading: "SPIRITUAL CONNECTION",
        content: "With Neptune in Gemini, your generation's spiritual path involved connecting to the divine through words, ideas, and communication. There was a collective sense that spirituality could be found in conversation, in learning, and in the exchange of ideas. This manifested as inspired writing, spiritual education, and the belief that truth could be communicated through multiple perspectives. However, the challenge was distinguishing between inspired communication and confusion, between divine messages and mental noise. Your generation had to learn that real spiritual communication requires clarity, that inspired thought must be grounded in truth, and that not all information is equally valuable."
      },
      {
        heading: "COMPASSION & SACRIFICE",
        content: "The compassionate expression of Neptune in Gemini involved teaching others, translating complex ideas into accessible language, and using communication to heal. Your generation understood that compassion could be intellectual—helping others understand, giving voice to the voiceless, sharing knowledge freely. However, the shadow included the potential for spreading misinformation in the name of help, for confusing people with too many perspectives, and for sacrificing truth for the sake of connection. Your generational work involved learning that real compassion communicates clearly, that true teaching empowers rather than confuses, and that the most helpful information is grounded in reality."
      },
      {
        heading: "GROUNDING YOUR VISION",
        content: "Grounding Neptune in Gemini required learning to communicate clearly rather than mystically, to seek truth rather than just interesting ideas, and to use words to clarify rather than confuse. Your generation had to discover that spiritual ideals about universal understanding must be manifested through clear communication, that real connection requires honest dialogue, and that inspired thought must be tested against reality. The work involved bringing dreams of perfect communication into practical form, creating systems of education and information sharing that served real understanding. You were here to show that spirituality can be communicated clearly, and that the greatest wisdom is that which can be understood by all."
      }
    ],
    strengths: ["Idealized communication", "Spiritual learning", "Inspired thought"],
    challenges: ["Confused thinking", "Misinformation", "Mental fog"]
  },

  "cancer-neptune": {
    sign: "cancer",
    planet: "neptune",
    title: "CANCER",
    subtitle: "Neptune in Cancer",
    sections: [
      {
        heading: "YOUR DREAMS & VISIONS",
        content: "Neptune in Cancer (1902-1916) represented a generation that idealized home, family, and emotional security. Your collective dreams focused on perfect nurturing, idealized family, and the vision of universal belonging. This placement brought spiritual longing for a world where everyone felt safe and loved, where home was sacred, and where emotional needs were met. Your generation dissolved old boundaries around family structure, imagining that everyone could be family and that nurturing could be universal. You dreamed of a world where emotional connection transcended blood ties and where home was wherever love existed."
      },
      {
        heading: "SPIRITUAL CONNECTION",
        content: "With Neptune in Cancer, your generation's spiritual path involved connecting to the divine through family, home, and emotional bonds. There was a collective sense that spirituality could be found in nurturing, in creating safe spaces, and in emotional intimacy. This manifested as the sanctification of motherhood, the idealization of home life, and the belief that caring for others was the highest spiritual practice. However, the challenge was distinguishing between healthy nurturing and smothering, between emotional connection and enmeshment. Your generation had to learn that real spiritual nurturing empowers others to care for themselves."
      },
      {
        heading: "COMPASSION & SACRIFICE",
        content: "The compassionate expression of Neptune in Cancer involved mothering everyone, creating homes for the homeless, and offering unconditional emotional support. Your generation understood that compassion could be nurturing—feeding, sheltering, and emotionally holding others. However, the shadow included the potential for enabling dependence, for sacrificing your own needs to care for others, and for using emotional manipulation in the name of love. Your generational work involved learning that real compassion includes healthy boundaries, that true nurturing teaches independence, and that the most loving act is sometimes letting others struggle and grow."
      },
      {
        heading: "GROUNDING YOUR VISION",
        content: "Grounding Neptune in Cancer required learning to create real emotional security rather than just longing for it, to nurture without smothering, and to build actual homes rather than just dreaming of perfect families. Your generation had to discover that spiritual ideals about family must be manifested through consistent care, that true belonging is created through authentic connection, and that real home is built through daily acts of love. The work involved bringing dreams of universal family into practical form, creating support systems that honored both connection and autonomy. You were here to show that spirituality can be nurturing and practical, and that the greatest home is one where everyone can be themselves."
      }
    ],
    strengths: ["Idealized nurturing", "Spiritual family", "Emotional compassion"],
    challenges: ["Codependency", "Emotional confusion", "Family illusions"]
  },

  "leo-neptune": {
    sign: "leo",
    planet: "neptune",
    title: "LEO",
    subtitle: "Neptune in Leo",
    sections: [
      {
        heading: "YOUR DREAMS & VISIONS",
        content: "Neptune in Leo (1916-1929) represented a generation that idealized creativity, self-expression, and the magic of performance. Your collective dreams focused on perfect artistry, idealized glamour, and the vision of everyone shining their unique light. This placement brought spiritual longing for a world where creativity was sacred, where self-expression was divine, and where everyone could be a star. Your generation dissolved old boundaries around who could create and perform, imagining that art could transform the world and that creative expression was a spiritual practice. You dreamed of a world where everyone's inner child could play freely."
      },
      {
        heading: "SPIRITUAL CONNECTION",
        content: "With Neptune in Leo, your generation's spiritual path involved connecting to the divine through creativity, play, and self-expression. There was a collective sense that spirituality could be found in art, in performance, and in celebrating life. This manifested as the golden age of Hollywood, the romanticization of creative genius, and the belief that entertaining others was a form of service. However, the challenge was distinguishing between authentic creative expression and ego inflation, between inspired artistry and escapist fantasy. Your generation had to learn that real spiritual creativity serves something greater than personal glory."
      },
      {
        heading: "COMPASSION & SACRIFICE",
        content: "The compassionate expression of Neptune in Leo involved entertaining others to lift their spirits, creating beauty to inspire, and helping others find their own creative voice. Your generation understood that compassion could be joyful—making people laugh, creating art that heals, celebrating others' specialness. However, the shadow included the potential for attention-seeking disguised as service, for using creativity to escape rather than heal, and for sacrificing authenticity for applause. Your generational work involved learning that real compassion celebrates others without needing to be the star, that true creativity serves the audience, and that the most inspiring art comes from authentic self-expression."
      },
      {
        heading: "GROUNDING YOUR VISION",
        content: "Grounding Neptune in Leo required learning to create real art rather than just dreaming of being an artist, to express authentically rather than performing for approval, and to channel creative inspiration into tangible form. Your generation had to discover that spiritual ideals about creativity must be manifested through disciplined practice, that true self-expression requires courage not just fantasy, and that real artistry serves beauty not just ego. The work involved bringing dreams of perfect creative expression into reality, developing actual skills while maintaining inspiration. You were here to show that spirituality can be creative and joyful, and that the greatest art is that which comes from the heart and serves the soul."
      }
    ],
    strengths: ["Idealized creativity", "Spiritual expression", "Inspired artistry"],
    challenges: ["Ego delusion", "False glamour", "Creative escapism"]
  },

  "virgo-neptune": {
    sign: "virgo",
    planet: "neptune",
    title: "VIRGO",
    subtitle: "Neptune in Virgo",
    sections: [
      {
        heading: "YOUR DREAMS & VISIONS",
        content: "Neptune in Virgo (1929-1943) represented a generation that idealized service, health, and the perfection of daily life. Your collective dreams focused on perfect healing, idealized service, and the vision of a world where everyone was healthy and useful. This placement brought spiritual longing for a world without illness, where work was meaningful service, and where perfection was achievable. Your generation dissolved old boundaries around who could heal and serve, imagining that medicine could be spiritual and that serving others was the highest calling. You dreamed of a world where body, mind, and spirit were perfectly integrated and healthy."
      },
      {
        heading: "SPIRITUAL CONNECTION",
        content: "With Neptune in Virgo, your generation's spiritual path involved connecting to the divine through service, healing, and attention to detail. There was a collective sense that spirituality could be found in work, in caring for the body, and in being useful. This manifested as holistic health movements, the spiritualization of service, and the belief that perfecting oneself was a form of devotion. However, the challenge was distinguishing between healthy service and martyrdom, between self-improvement and self-criticism. Your generation had to learn that real spiritual service comes from wholeness not woundedness, and that perfection is an illusion that prevents acceptance."
      },
      {
        heading: "COMPASSION & SACRIFICE",
        content: "The compassionate expression of Neptune in Virgo involved healing others, serving tirelessly, and working to improve the world in practical ways. Your generation understood that compassion could be practical—nursing the sick, improving systems, doing the unglamorous work that helps. However, the shadow included the potential for service martyrdom, for sacrificing health in the name of helping, and for using perfectionism as a weapon against self and others. Your generational work involved learning that real compassion includes self-care, that true service is sustainable, and that the most helpful healing recognizes that imperfection is part of being human."
      },
      {
        heading: "GROUNDING YOUR VISION",
        content: "Grounding Neptune in Virgo required learning to serve effectively rather than just dreaming of helping, to pursue health realistically rather than chasing perfect wellness, and to accept imperfection while still working toward improvement. Your generation had to discover that spiritual ideals about service must be manifested through consistent daily practice, that true healing includes accepting what can't be fixed, and that real perfection is found in embracing our humanity. The work involved bringing dreams of perfect health and service into practical reality, creating systems of care that honored both idealism and pragmatism. You were here to show that spirituality can be practical and humble, and that the greatest service is done quietly and consistently."
      }
    ],
    strengths: ["Idealized service", "Spiritual healing", "Compassionate work"],
    challenges: ["Health delusions", "Perfectionism", "Service martyrdom"]
  },

  "libra-neptune": {
    sign: "libra",
    planet: "neptune",
    title: "LIBRA",
    subtitle: "Neptune in Libra",
    sections: [
      {
        heading: "YOUR DREAMS & VISIONS",
        content: "Neptune in Libra (1943-1957) represented a generation that idealized relationships, peace, and perfect harmony. Your collective dreams focused on ideal love, perfect partnerships, and the vision of a world without conflict. This placement brought spiritual longing for universal peace, where everyone got along, where love conquered all, and where beauty and balance reigned. Your generation dissolved old boundaries around who could love whom, imagining that love could transcend all differences and that partnership could be a spiritual path. You dreamed of a world where everyone was in perfect relationship and where justice was beautiful."
      },
      {
        heading: "SPIRITUAL CONNECTION",
        content: "With Neptune in Libra, your generation's spiritual path involved connecting to the divine through relationships, beauty, and the pursuit of harmony. There was a collective sense that spirituality could be found in partnership, in creating peace, and in appreciating beauty. This manifested as the idealization of romantic love, the peace movement, and the belief that relationships could be a form of spiritual practice. However, the challenge was distinguishing between real love and fantasy, between healthy partnership and codependency. Your generation had to learn that real spiritual partnership requires two whole people, and that true peace sometimes requires confronting conflict."
      },
      {
        heading: "COMPASSION & SACRIFICE",
        content: "The compassionate expression of Neptune in Libra involved creating peace, mediating conflicts, and helping others find love and harmony. Your generation understood that compassion could be diplomatic—bringing people together, finding common ground, creating beauty that unifies. However, the shadow included the potential for avoiding necessary conflict in the name of peace, for losing yourself in relationships to keep harmony, and for sacrificing truth for the sake of getting along. Your generational work involved learning that real compassion sometimes requires honest disagreement, that true partnership honors both people equally, and that the most beautiful harmony includes authentic voices, not just agreement."
      },
      {
        heading: "GROUNDING YOUR VISION",
        content: "Grounding Neptune in Libra required learning to create real relationships rather than just dreaming of perfect love, to pursue actual peace rather than just avoiding conflict, and to build genuine harmony that honored differences. Your generation had to discover that spiritual ideals about partnership must be manifested through daily commitment, that true balance requires both people to show up fully, and that real beauty includes imperfection. The work involved bringing dreams of perfect love and peace into reality, creating relationships and systems that honored both idealism and authenticity. You were here to show that spirituality can be relational and beautiful, and that the greatest love is one that sees and accepts the whole person."
      }
    ],
    strengths: ["Idealized love", "Spiritual partnership", "Peace idealism"],
    challenges: ["Relationship delusions", "Codependency", "False harmony"]
  },

  "scorpio-neptune": {
    sign: "scorpio",
    planet: "neptune",
    title: "SCORPIO",
    subtitle: "Neptune in Scorpio",
    sections: [
      {
        heading: "YOUR DREAMS & VISIONS",
        content: "Neptune in Scorpio (1957-1970) represented a generation that idealized transformation, sexual liberation, and psychological depth. Your collective dreams focused on perfect intimacy, idealized power, and the vision of complete transformation. This placement brought spiritual longing for a world where sexuality was sacred, where power was used for healing, and where everyone could face their shadow and emerge transformed. Your generation dissolved old boundaries around sex and taboo, imagining that intimacy could be spiritual and that facing darkness was the path to light. You dreamed of a world where nothing was hidden and where transformation was constant."
      },
      {
        heading: "SPIRITUAL CONNECTION",
        content: "With Neptune in Scorpio, your generation's spiritual path involved connecting to the divine through intensity, sexuality, and psychological exploration. There was a collective sense that spirituality could be found in the depths, in facing shadow, and in transformative experiences. This manifested as the sexual revolution, interest in the occult and psychology, and the belief that confronting darkness was spiritual practice. However, the challenge was distinguishing between healthy intensity and obsession, between sacred sexuality and escapist hedonism. Your generation had to learn that real spiritual transformation requires integration, and that true power serves healing not control."
      },
      {
        heading: "COMPASSION & SACRIFICE",
        content: "The compassionate expression of Neptune in Scorpio involved helping others through crisis, facilitating deep healing, and using power to transform rather than dominate. Your generation understood that compassion could be intense—sitting with others in their darkness, facilitating catharsis, helping people face their shadows. However, the shadow included the potential for violating boundaries in the name of healing, for using intimacy to escape rather than connect, and for sacrificing healthy boundaries for the sake of deep connection. Your generational work involved learning that real compassion respects boundaries, that true transformation can't be forced, and that the most profound healing honors each person's pace and process."
      },
      {
        heading: "GROUNDING YOUR VISION",
        content: "Grounding Neptune in Scorpio required learning to transform realistically rather than chasing constant crisis, to use power responsibly rather than idealizing it, and to integrate shadow rather than just exploring it. Your generation had to discover that spiritual ideals about transformation must be manifested through patient inner work, that true intimacy requires trust built over time, and that real power is used for healing not manipulation. The work involved bringing dreams of perfect transformation into reality, creating approaches to healing that honored both depth and safety. You were here to show that spirituality can be intense and transformative, and that the greatest power is that which serves life and healing."
      }
    ],
    strengths: ["Idealized transformation", "Spiritual depth", "Psychological healing"],
    challenges: ["Sexual delusions", "Power illusions", "Obsessive idealism"]
  },

  "sagittarius-neptune": {
    sign: "sagittarius",
    planet: "neptune",
    title: "SAGITTARIUS",
    subtitle: "Neptune in Sagittarius",
    sections: [
      {
        heading: "YOUR DREAMS & VISIONS",
        content: "Neptune in Sagittarius (1970-1984) represented a generation that idealized freedom, truth-seeking, and global unity. Your collective dreams focused on perfect understanding, idealized philosophy, and the vision of one world united by shared truth. This placement brought spiritual longing for a world without borders, where everyone was free to explore, where all religions led to the same truth, and where meaning was accessible to all. Your generation dissolved old boundaries around belief systems, imagining that spirituality could be eclectic and that truth was vast enough to include all perspectives. You dreamed of a world where everyone was on a spiritual quest and where exploration was sacred."
      },
      {
        heading: "SPIRITUAL CONNECTION",
        content: "With Neptune in Sagittarius, your generation's spiritual path involved connecting to the divine through exploration, philosophy, and the search for meaning. There was a collective sense that spirituality could be found in travel, in studying diverse traditions, and in seeking truth. This manifested as New Age spirituality, interest in Eastern philosophy, and the belief that all paths lead to the same summit. However, the challenge was distinguishing between genuine seeking and spiritual tourism, between open-mindedness and lack of discernment. Your generation had to learn that real spiritual exploration requires depth not just breadth, and that true understanding comes from experience not just belief."
      },
      {
        heading: "COMPASSION & SACRIFICE",
        content: "The compassionate expression of Neptune in Sagittarius involved teaching spiritual truths, helping others find meaning, and creating bridges between cultures and beliefs. Your generation understood that compassion could be expansive—sharing wisdom, inspiring hope, helping people see the bigger picture. However, the shadow included the potential for spiritual bypassing, for using philosophy to escape reality, and for sacrificing groundedness for the sake of endless seeking. Your generational work involved learning that real compassion is grounded in reality, that true teaching honors the student's path, and that the most helpful wisdom is practical and applicable to daily life."
      },
      {
        heading: "GROUNDING YOUR VISION",
        content: "Grounding Neptune in Sagittarius required learning to seek truth practically rather than just philosophically, to find meaning in everyday life rather than only in exotic locations, and to commit to a path rather than endlessly exploring options. Your generation had to discover that spiritual ideals about freedom and truth must be manifested through lived experience, that real understanding comes from depth not just diversity, and that true wisdom is tested by how it works in reality. The work involved bringing dreams of global unity and perfect understanding into practical form, creating approaches to spirituality that honored both expansion and integration. You were here to show that spirituality can be adventurous and grounded, and that the greatest truth is one that can be lived daily."
      }
    ],
    strengths: ["Idealized truth", "Spiritual exploration", "Global idealism"],
    challenges: ["False beliefs", "Escapist travel", "Dogmatic idealism"]
  },

  "capricorn-neptune": {
    sign: "capricorn",
    planet: "neptune",
    title: "CAPRICORN",
    subtitle: "Neptune in Capricorn",
    sections: [
      {
        heading: "YOUR DREAMS & VISIONS",
        content: "Neptune in Capricorn (1984-1998) represented a generation that idealized achievement, structure, and practical spirituality. Your collective dreams focused on perfect systems, idealized success, and the vision of spirituality manifested in material form. This placement brought spiritual longing for a world where structures served the highest good, where achievement was meaningful, and where authority was enlightened. Your generation dissolved old boundaries around what success meant, imagining that business could be spiritual and that building could be sacred. You dreamed of a world where material success and spiritual values were integrated."
      },
      {
        heading: "SPIRITUAL CONNECTION",
        content: "With Neptune in Capricorn, your generation's spiritual path involved connecting to the divine through work, achievement, and building lasting structures. There was a collective sense that spirituality could be practical, that the divine could be found in discipline and responsibility, and that creating in the material world was a form of worship. This manifested as conscious business, spiritual approaches to success, and the belief that manifesting dreams was spiritual practice. However, the challenge was distinguishing between inspired building and material illusion, between true achievement and false success. Your generation had to learn that real spiritual manifestation requires integrity, and that true success serves something greater than ego."
      },
      {
        heading: "COMPASSION & SACRIFICE",
        content: "The compassionate expression of Neptune in Capricorn involved building systems that served others, using authority to empower, and creating structures that supported the collective good. Your generation understood that compassion could be practical and structural—creating organizations that help, building systems that serve, using resources to support others. However, the shadow included the potential for confusing material success with spiritual achievement, for building castles in the air, and for sacrificing integrity for the appearance of success. Your generational work involved learning that real compassion creates sustainable systems, that true authority serves rather than dominates, and that the most helpful structures are built on solid foundations of integrity."
      },
      {
        heading: "GROUNDING YOUR VISION",
        content: "Grounding Neptune in Capricorn required learning to build realistically rather than just dreaming of success, to achieve with integrity rather than chasing illusions of power, and to create structures that actually work rather than just look good. Your generation had to discover that spiritual ideals about manifestation must be grounded in practical reality, that true success is measured by integrity not just results, and that real authority is earned through consistent responsible action. The work involved bringing dreams of enlightened structure into reality, creating systems and organizations that honored both idealism and practicality. You were here to show that spirituality can be practical and structured, and that the greatest achievement is building something that serves the greater good."
      }
    ],
    strengths: ["Idealized achievement", "Spiritual structure", "Practical dreams"],
    challenges: ["Authority delusions", "Material confusion", "False success"]
  },

  "aquarius-neptune": {
    sign: "aquarius",
    planet: "neptune",
    title: "AQUARIUS",
    subtitle: "Neptune in Aquarius",
    sections: [
      {
        heading: "YOUR DREAMS & VISIONS",
        content: "Neptune in Aquarius (1998-2012) represented a generation that idealized technology, equality, and global community. Your collective dreams focused on perfect connection, idealized innovation, and the vision of humanity united through technology. This placement brought spiritual longing for a world where everyone was equal, where technology served humanity, and where individuality and community were perfectly balanced. Your generation dissolved old boundaries around how people connect, imagining that the internet could create global consciousness and that technology could solve social problems. You dreamed of a world where everyone belonged and where innovation served the collective good."
      },
      {
        heading: "SPIRITUAL CONNECTION",
        content: "With Neptune in Aquarius, your generation's spiritual path involved connecting to the divine through technology, community, and humanitarian service. There was a collective sense that spirituality could be found in networks, in collective consciousness, and in working for the greater good. This manifested as online spiritual communities, the idealization of technology, and the belief that global connection was spiritual evolution. However, the challenge was distinguishing between real connection and digital illusion, between authentic community and virtual escapism. Your generation had to learn that real spiritual connection requires presence, and that true innovation serves humanity not just progress."
      },
      {
        heading: "COMPASSION & SACRIFICE",
        content: "The compassionate expression of Neptune in Aquarius involved using technology to help others, creating inclusive communities, and working for humanitarian causes. Your generation understood that compassion could be innovative—using new tools to solve old problems, connecting people across distances, creating systems that served everyone. However, the shadow included the potential for digital addiction disguised as connection, for sacrificing real relationships for virtual ones, and for using technology to escape rather than engage. Your generational work involved learning that real compassion requires human presence, that true community includes face-to-face connection, and that the most helpful innovation enhances rather than replaces human interaction."
      },
      {
        heading: "GROUNDING YOUR VISION",
        content: "Grounding Neptune in Aquarius required learning to use technology wisely rather than idealizing it, to create real community rather than just virtual connection, and to innovate practically rather than chasing utopian fantasies. Your generation had to discover that spiritual ideals about global unity must be manifested through actual human connection, that true equality requires addressing real inequalities, and that innovation must serve human needs not just technological possibility. The work involved bringing dreams of perfect connection into reality, using technology in ways that enhanced rather than replaced human bonds. You were here to show that spirituality can be innovative and connected, and that the greatest technology is that which serves human flourishing."
      }
    ],
    strengths: ["Idealized equality", "Spiritual technology", "Humanitarian dreams"],
    challenges: ["Digital delusions", "Detached idealism", "False utopias"]
  },

  "pisces-neptune": {
    sign: "pisces",
    planet: "neptune",
    title: "PISCES",
    subtitle: "Neptune in Pisces",
    sections: [
      {
        heading: "YOUR DREAMS & VISIONS",
        content: "Neptune in Pisces (2012-2026) represents a generation that idealizes compassion, spirituality, and universal oneness. Your collective dreams focus on perfect love, idealized transcendence, and the vision of all beings united in consciousness. This placement brings spiritual longing for a world without separation, where everyone feels everything, where compassion is universal, and where the material and spiritual are one. Your generation dissolves all boundaries, imagining that we are all connected and that love can heal everything. You dream of a world where everyone awakens to their divine nature and where suffering ends through collective compassion."
      },
      {
        heading: "SPIRITUAL CONNECTION",
        content: "With Neptune in Pisces, your generation's spiritual path involves connecting to the divine through compassion, surrender, and dissolving into oneness. There is a collective sense that spirituality is everywhere, that the divine can be found in all things, and that we are all one consciousness experiencing itself. This manifests as unprecedented spiritual sensitivity, interest in mysticism and meditation, and the belief that awakening is humanity's next evolution. However, the challenge is distinguishing between genuine spiritual experience and escapism, between healthy compassion and boundary dissolution. Your generation must learn that real spiritual connection includes embodiment, and that true oneness honors individuality."
      },
      {
        heading: "COMPASSION & SACRIFICE",
        content: "The compassionate expression of Neptune in Pisces involves feeling others' pain, offering unconditional love, and serving from a place of spiritual unity. Your generation understands that compassion can be universal—feeling for all beings, serving without expectation, loving without condition. However, the shadow includes the potential for victim consciousness, for losing yourself in others' pain, and for sacrificing necessary boundaries in the name of oneness. Your generational work involves learning that real compassion includes healthy boundaries, that true service requires self-care, and that the most helpful love is grounded in reality while reaching toward the divine."
      },
      {
        heading: "GROUNDING YOUR VISION",
        content: "Grounding Neptune in Pisces requires learning to be spiritual while staying embodied, to feel deeply while maintaining boundaries, and to serve from overflow rather than depletion. Your generation must discover that spiritual ideals about oneness must be lived in the material world, that true compassion is sustainable, and that real awakening includes being fully human. The work involves bringing dreams of universal love into practical reality, developing spiritual practices that honor both transcendence and embodiment. You are here to show that spirituality can be both mystical and grounded, and that the greatest compassion is that which serves life on Earth while honoring the divine in all."
      }
    ],
    strengths: ["Idealized compassion", "Spiritual awakening", "Universal love"],
    challenges: ["Escapism", "Boundary dissolution", "Victim mentality"]
  },

  // ============================================================================
  // PLUTO SIGNS (12) - Transformation, Power, Death/Rebirth, Generational
  // ============================================================================

  "aries-pluto": {
    sign: "aries",
    planet: "pluto",
    title: "ARIES",
    subtitle: "Pluto in Aries",
    sections: [
      {
        heading: "WHERE YOU TRANSFORM",
        content: "Pluto in Aries (1823-1853, 2068-2098) represents a generational transformation of identity, leadership, and the expression of individual will. This placement brings profound death and rebirth cycles around selfhood, courage, and assertion. Your generation is tasked with revolutionizing how humanity understands and expresses individuality, transforming outdated models of leadership, and redefining what it means to be brave. You're part of a collective that faces the shadow side of aggression, competition, and self-centeredness, learning to channel raw power into constructive action. This is a pioneering generation that must forge new paths in self-expression and personal empowerment."
      },
      {
        heading: "POWER & INTENSITY",
        content: "With Pluto in Aries, your generation carries intense power around identity and self-assertion. There's a collective compulsion to break free from old constraints, to assert independence, and to claim individual power. This can manifest as revolutionary leadership, but also as power struggles over who gets to be first or best. Your generation must learn to wield personal power without dominating others, to be assertive without being aggressive, and to lead without requiring followers to submit. The intensity of this placement drives your generation to constantly reinvent yourselves, to take bold risks, and to refuse to be controlled by anyone or anything."
      },
      {
        heading: "SHADOW WORK",
        content: "The collective shadow of Pluto in Aries involves unchecked aggression, narcissistic leadership, and the destructive use of power. Your generation must confront the dark side of individualism—the tendency to put self above all else, to use force to get what you want, and to mistake dominance for strength. The shadow also includes the fear of being powerless or invisible, which can drive compulsive self-assertion. Your generational work involves transforming raw aggression into courageous action, healing the wounded masculine archetype, and learning that true power doesn't require overpowering others. You're here to face the question: How can we be powerful individuals without destroying each other?"
      },
      {
        heading: "REGENERATION & REBIRTH",
        content: "Through facing these intense challenges, your generation emerges with transformed understanding of identity and power. You're learning to embody authentic courage—the kind that includes vulnerability, that protects the weak, and that serves something greater than ego. Your generation has the potential to birth new models of leadership that empower rather than dominate, to create a world where individual expression doesn't require conformity from others, and to demonstrate that true strength includes self-awareness. You're here to transform humanity's relationship with power itself, showing that the most revolutionary act is becoming authentically yourself while honoring others' right to do the same."
      }
    ],
    strengths: ["Transformative leadership", "Powerful individuality", "Courageous change"],
    challenges: ["Destructive aggression", "Power struggles", "Reckless transformation"]
  },

  "taurus-pluto": {
    sign: "taurus",
    planet: "pluto",
    title: "TAURUS",
    subtitle: "Pluto in Taurus",
    sections: [
      {
        heading: "WHERE YOU TRANSFORM",
        content: "Pluto in Taurus (1853-1884, 2098-2128) represents a generational transformation of values, resources, material security, and humanity's relationship with Earth. This placement brings profound death and rebirth cycles around economic systems, what we value, and how we use resources. Your generation is tasked with revolutionizing financial structures, transforming our relationship with the natural world, and redefining what constitutes true wealth and security. You're part of a collective that faces the shadow of greed, overconsumption, and environmental destruction, learning to create sustainable abundance. This is a generation that must rebuild the material foundations of civilization."
      },
      {
        heading: "POWER & INTENSITY",
        content: "With Pluto in Taurus, your generation carries intense power around resources, values, and the material world. There's a collective compulsion to transform economic systems, to redefine wealth, and to reclaim humanity's connection to Earth. This can manifest as revolutionary changes in banking, currency, and ownership, but also as power struggles over resources and territory. Your generation must learn to wield economic power responsibly, to value sustainability over endless growth, and to recognize that true security comes from living in harmony with natural limits. The intensity drives your generation to completely remake how humanity produces, consumes, and relates to the physical world."
      },
      {
        heading: "SHADOW WORK",
        content: "The collective shadow of Pluto in Taurus involves greed, materialism, and the destructive exploitation of Earth's resources. Your generation must confront humanity's addiction to consumption, the worship of money and possessions, and the belief that more is always better. The shadow includes resistance to change in financial systems, hoarding resources out of fear, and valuing things over life itself. Your generational work involves transforming scarcity consciousness into sustainable abundance, healing humanity's relationship with the natural world, and learning that real wealth includes clean air, water, and soil. You're here to face the question: What do we truly value, and what are we willing to destroy to get it?"
      },
      {
        heading: "REGENERATION & REBIRTH",
        content: "Through facing these challenges, your generation emerges with transformed understanding of value and security. You're learning to create economic systems that serve life rather than exploit it, to find security in sustainability rather than accumulation, and to recognize that true wealth is measured in well-being, not just money. Your generation has the potential to birth new forms of currency and exchange, to restore humanity's sacred relationship with Earth, and to demonstrate that prosperity and sustainability can coexist. You're here to transform humanity's material foundation, showing that real security comes from living within our means and honoring the resources that sustain us."
      }
    ],
    strengths: ["Transformative values", "Resource power", "Material rebirth"],
    challenges: ["Destructive greed", "Economic collapse", "Material obsession"]
  },

  "gemini-pluto": {
    sign: "gemini",
    planet: "pluto",
    title: "GEMINI",
    subtitle: "Pluto in Gemini",
    sections: [
      {
        heading: "WHERE YOU TRANSFORM",
        content: "Pluto in Gemini (1884-1914) represented a generational transformation of communication, information, education, and how humanity thinks. This placement brought profound death and rebirth of communication technologies, from telegraph to telephone, and revolutionized how information spreads. Your generation was tasked with transforming human thought patterns, creating new ways to share knowledge, and dealing with information overload for the first time. You were part of a collective that faced the shadow of propaganda, misinformation, and the power of words to manipulate. This was a generation that had to learn to think critically and communicate responsibly in an age of rapidly expanding information."
      },
      {
        heading: "POWER & INTENSITY",
        content: "With Pluto in Gemini, your generation carried intense power around words, ideas, and information. There was a collective compulsion to transform how humanity communicates, to question everything, and to spread revolutionary ideas. This manifested as explosive growth in media, journalism, and education, but also as power struggles over who controls information and narrative. Your generation had to learn to wield the power of communication without using it to manipulate, to seek truth without becoming cynical, and to share knowledge without overwhelming others. The intensity drove constant mental stimulation, restless curiosity, and the need to connect and communicate at all costs."
      },
      {
        heading: "SHADOW WORK",
        content: "The collective shadow of Pluto in Gemini involved propaganda, misinformation, mental manipulation, and the weaponization of words. Your generation had to confront humanity's capacity to use communication destructively—to lie, deceive, and control through information. The shadow included information addiction, mental fragmentation, and the loss of deep thinking in favor of superficial knowledge. Your generational work involved learning to discern truth from lies, to communicate with integrity, and to recognize that not all information is valuable. You were here to face the question: How do we use the power of communication to enlighten rather than manipulate?"
      },
      {
        heading: "REGENERATION & REBIRTH",
        content: "Through facing these challenges, your generation emerged with transformed understanding of communication and knowledge. You learned to value truth over sensationalism, depth over breadth, and quality over quantity of information. Your generation birthed new forms of media and communication that would shape the 20th century, demonstrated the power of ideas to change the world, and showed that knowledge must be paired with wisdom. You were here to transform how humanity thinks and communicates, proving that words have the power to both destroy and heal, and that conscious communication can bridge any divide."
      }
    ],
    strengths: ["Transformative communication", "Information power", "Mental rebirth"],
    challenges: ["Destructive information", "Mental manipulation", "Communication breakdown"]
  },

  "cancer-pluto": {
    sign: "cancer",
    planet: "pluto",
    title: "CANCER",
    subtitle: "Pluto in Cancer",
    sections: [
      {
        heading: "WHERE YOU TRANSFORM",
        content: "Pluto in Cancer (1914-1939) represented a generational transformation of family, home, emotional security, and the concept of belonging. This placement brought profound death and rebirth of family structures, with two World Wars destroying and rebuilding the notion of home. Your generation was tasked with transforming how humanity nurtures, creating new family models, and healing deep ancestral wounds. You were part of a collective that faced the shadow of nationalism, tribalism, and the destructive power of collective emotions. This was a generation that experienced the loss of home and security, learning that true belonging must be rebuilt from within."
      },
      {
        heading: "POWER & INTENSITY",
        content: "With Pluto in Cancer, your generation carried intense power around family, emotions, and the need for security. There was a collective compulsion to protect home and family at all costs, to create emotional safety, and to belong to something greater. This manifested as powerful nationalism and family loyalty, but also as power struggles over who belongs and who doesn't. Your generation had to learn that emotional intensity can both bond and destroy, that the need for security can lead to exclusion of others, and that true nurturing doesn't require controlling those we love. The intensity drove deep emotional experiences, fierce protectiveness, and the transformation of what family means."
      },
      {
        heading: "SHADOW WORK",
        content: "The collective shadow of Pluto in Cancer involved toxic nationalism, emotional manipulation, smothering family dynamics, and the dark side of tribalism. Your generation had to confront humanity's tendency to create in-groups and out-groups, to use emotional bonds to control, and to destroy in the name of protecting home and family. The shadow included ancestral trauma, the wounds of war and displacement, and the fear-based need for security that leads to aggression. Your generational work involved healing family wounds, transforming nationalism into healthy belonging, and learning that emotional security comes from within, not from excluding others."
      },
      {
        heading: "REGENERATION & REBIRTH",
        content: "Through facing these challenges, your generation emerged with transformed understanding of family, home, and emotional security. You learned that family can be chosen as well as born, that home is something we carry within us, and that true security comes from emotional resilience rather than external protection. Your generation rebuilt the concept of family after massive destruction, demonstrated the power of emotional healing, and showed that nurturing can be fierce without being smothering. You were here to transform how humanity creates belonging, proving that the deepest security comes from healing our wounds and opening our hearts."
      }
    ],
    strengths: ["Transformative nurturing", "Family healing", "Emotional rebirth"],
    challenges: ["Destructive family patterns", "Emotional manipulation", "Home instability"]
  },

  "leo-pluto": {
    sign: "leo",
    planet: "pluto",
    title: "LEO",
    subtitle: "Pluto in Leo",
    sections: [
      {
        heading: "WHERE YOU TRANSFORM",
        content: "Pluto in Leo (1939-1958) represented a generational transformation of creativity, self-expression, leadership, and the ego. This placement brought profound death and rebirth of how humanity expresses individuality, with the atomic age demonstrating both creative and destructive power. Your generation was tasked with transforming leadership from authoritarian to authentic, revolutionizing creative expression, and redefining what it means to shine. You were part of a collective that faced the shadow of narcissistic leadership and totalitarian power, learning that true leadership serves rather than dominates. This was a generation that had to rebuild the concept of individual expression after witnessing its most destructive forms."
      },
      {
        heading: "POWER & INTENSITY",
        content: "With Pluto in Leo, your generation carried intense power around creativity, leadership, and self-expression. There was a collective compulsion to be seen, to create, to lead, and to express individuality boldly. This manifested as explosive creativity in arts and entertainment, powerful leaders who shaped history, but also as ego battles and the cult of personality. Your generation had to learn that creative power can both inspire and manipulate, that leadership requires humility, and that shining brightly doesn't require dimming others. The intensity drove dramatic self-expression, the need for recognition, and the transformation of what it means to be special."
      },
      {
        heading: "SHADOW WORK",
        content: "The collective shadow of Pluto in Leo involved narcissistic leadership, ego-driven destruction, and the dark side of the need for attention. Your generation had to confront humanity's capacity for authoritarian rule, the worship of charismatic but destructive leaders, and the use of creative power for manipulation. The shadow included the atomic bomb—the ultimate expression of Leo's creative/destructive power—and the realization that humanity could destroy itself. Your generational work involved transforming ego from something to be inflated to something to be integrated, learning that real leadership empowers others, and recognizing that creativity carries responsibility."
      },
      {
        heading: "REGENERATION & REBIRTH",
        content: "Through facing these challenges, your generation emerged with transformed understanding of creativity, leadership, and self-expression. You learned that true power serves life, that authentic leadership inspires rather than dominates, and that the greatest creative act is becoming fully yourself while celebrating others. Your generation birthed rock and roll, civil rights leadership, and new forms of creative expression that would define modern culture. You were here to transform how humanity leads and creates, proving that real power is creative not destructive, and that the brightest light is one that helps others shine."
      }
    ],
    strengths: ["Transformative creativity", "Powerful leadership", "Authentic expression"],
    challenges: ["Destructive ego", "Authoritarian power", "Creative manipulation"]
  },

  "virgo-pluto": {
    sign: "virgo",
    planet: "pluto",
    title: "VIRGO",
    subtitle: "Pluto in Virgo",
    sections: [
      {
        heading: "WHERE YOU TRANSFORM",
        content: "Pluto in Virgo (1958-1972) represented a generational transformation of health, work, service, and daily life. This placement brought profound death and rebirth of healthcare systems, work structures, and how humanity approaches wellness and service. Your generation was tasked with revolutionizing medicine, transforming the workplace, and redefining what it means to serve and be useful. You were part of a collective that faced the shadow of perfectionism, workaholism, and the dehumanization of labor, learning that true service honors both the server and the served. This was a generation that had to heal humanity's relationship with work, health, and the body."
      },
      {
        heading: "POWER & INTENSITY",
        content: "With Pluto in Virgo, your generation carried intense power around health, work, and the drive for improvement. There was a collective compulsion to perfect systems, to heal what's broken, to work tirelessly, and to serve something greater. This manifested as revolutionary changes in medicine and technology, the environmental movement, and new approaches to health, but also as obsessive perfectionism and the worship of productivity. Your generation had to learn that the drive for perfection can become destructive, that constant improvement can prevent acceptance, and that service shouldn't require self-sacrifice. The intensity drove analytical thinking, health consciousness, and the transformation of daily life."
      },
      {
        heading: "SHADOW WORK",
        content: "The collective shadow of Pluto in Virgo involved destructive perfectionism, health anxiety, workaholism, and the dark side of the need to fix and improve everything. Your generation had to confront humanity's tendency to see everything as broken and needing repair, to work ourselves to death, and to use health and purity as weapons of judgment. The shadow included environmental destruction in the name of progress, the dehumanization of workers, and the belief that we're never good enough. Your generational work involved learning that wholeness includes imperfection, that rest is as important as work, and that true healing accepts what is while working toward what could be."
      },
      {
        heading: "REGENERATION & REBIRTH",
        content: "Through facing these challenges, your generation emerged with transformed understanding of health, work, and service. You learned that true wellness is holistic, that meaningful work serves life, and that the best service comes from wholeness not woundedness. Your generation birthed holistic medicine, environmental consciousness, and new models of work that honor human dignity. You were here to transform how humanity heals and serves, proving that real improvement begins with acceptance, that sustainable service requires self-care, and that the goal isn't perfection but integration."
      }
    ],
    strengths: ["Transformative healing", "Work revolution", "Service power"],
    challenges: ["Destructive perfectionism", "Health obsession", "Work manipulation"]
  },

  "libra-pluto": {
    sign: "libra",
    planet: "pluto",
    title: "LIBRA",
    subtitle: "Pluto in Libra",
    sections: [
      {
        heading: "WHERE YOU TRANSFORM",
        content: "Pluto in Libra (1972-1984) represented a generational transformation of relationships, partnerships, justice, and social balance. This placement brought profound death and rebirth of marriage and partnership models, with divorce rates soaring and new relationship structures emerging. Your generation was tasked with revolutionizing how humanity relates, transforming justice systems, and redefining what it means to be in partnership. You were part of a collective that faced the shadow of codependency, power imbalances in relationships, and social injustice, learning that true partnership requires equality and authentic connection. This was a generation that had to rebuild the concept of relationship itself."
      },
      {
        heading: "POWER & INTENSITY",
        content: "With Pluto in Libra, your generation carried intense power around relationships, justice, and the need for balance. There was a collective compulsion to transform partnerships, to fight for equality, and to create fair social structures. This manifested as revolutionary changes in marriage laws, women's rights, and social justice movements, but also as power struggles within relationships and the weaponization of fairness. Your generation had to learn that true partnership requires individual wholeness, that justice must include mercy, and that balance doesn't mean sameness. The intensity drove constant evaluation of relationships, the need for equality, and the transformation of how we relate to each other."
      },
      {
        heading: "SHADOW WORK",
        content: "The collective shadow of Pluto in Libra involved codependency, the loss of self in relationships, and using partnership as a weapon or escape. Your generation had to confront humanity's tendency to seek completion in others, to avoid conflict at all costs, and to use the language of fairness to manipulate. The shadow included the death of traditional marriage without clear alternatives, power struggles disguised as partnership, and the belief that we can't be whole alone. Your generational work involved learning that healthy relationships require two whole people, that real justice includes compassion, and that true balance honors both self and other."
      },
      {
        heading: "REGENERATION & REBIRTH",
        content: "Through facing these challenges, your generation emerged with transformed understanding of relationships and justice. You learned that partnership enhances rather than completes, that equality doesn't require sameness, and that true balance includes honoring differences. Your generation birthed new models of relationship, advanced social justice significantly, and demonstrated that love can be both committed and free. You were here to transform how humanity relates, proving that the strongest partnerships are between two whole individuals, and that real justice serves all, not just some."
      }
    ],
    strengths: ["Transformative relationships", "Justice power", "Partnership rebirth"],
    challenges: ["Destructive relationships", "Power struggles in partnerships", "Social manipulation"]
  },

  "scorpio-pluto": {
    sign: "scorpio",
    planet: "pluto",
    title: "SCORPIO",
    subtitle: "Pluto in Scorpio",
    sections: [
      {
        heading: "WHERE YOU TRANSFORM",
        content: "Pluto in Scorpio (1984-1995) represented a generational transformation of sexuality, power, psychology, and the taboo. This placement brought profound death and rebirth of sexual expression, with the AIDS crisis forcing humanity to confront mortality and intimacy simultaneously. Your generation was tasked with revolutionizing how humanity handles power, transforming our relationship with death and sexuality, and bringing shadow material into consciousness. You were part of a collective that faced the darkest aspects of human nature—abuse, manipulation, and the destructive use of power—learning that true transformation requires facing what we most fear. This was a generation born into intensity, here to heal humanity's deepest wounds."
      },
      {
        heading: "POWER & INTENSITY",
        content: "With Pluto in Scorpio, your generation carries the most intense Pluto placement possible—Pluto in its own sign. There's a collective compulsion to go deep, to uncover truth, to transform completely, and to wield power consciously. This manifests as psychological awareness, sexual openness, and the ability to face darkness, but also as potential for manipulation, control, and destructive intensity. Your generation must learn that real power is transformative not destructive, that intimacy requires vulnerability not control, and that facing shadow doesn't mean becoming it. The intensity drives you to constant transformation, crisis as catalyst, and the complete death and rebirth of identity."
      },
      {
        heading: "SHADOW WORK",
        content: "The collective shadow of Pluto in Scorpio involves the abuse of power, sexual manipulation, and the destructive use of psychological insight. Your generation must confront humanity's capacity for violation, betrayal, and the darkest expressions of power and sexuality. The shadow includes addiction, abuse, and the tendency to destroy what we can't control. Your generational work involves transforming power from something that dominates to something that empowers, healing sexual wounds, and learning that true intimacy requires trust not control. You're here to face the question: How do we wield immense power without destroying ourselves and others?"
      },
      {
        heading: "REGENERATION & REBIRTH",
        content: "Through facing these intense challenges, your generation emerges as powerful healers and transformers. You're learning that real power serves transformation, that sexuality can be sacred, and that facing our shadows is the path to wholeness. Your generation has the potential to heal humanity's deepest wounds around power, sex, and death, to create new models of intimacy based on trust rather than control, and to demonstrate that transformation is possible no matter how dark things get. You're here to be the phoenix generation—showing that from the deepest death comes the most profound rebirth."
      }
    ],
    strengths: ["Transformative power", "Sexual healing", "Psychological depth"],
    challenges: ["Destructive intensity", "Power obsession", "Manipulative control"]
  },

  "sagittarius-pluto": {
    sign: "sagittarius",
    planet: "pluto",
    title: "SAGITTARIUS",
    subtitle: "Pluto in Sagittarius",
    sections: [
      {
        heading: "WHERE YOU TRANSFORM",
        content: "Pluto in Sagittarius (1995-2008) represented a generational transformation of belief systems, education, global consciousness, and the search for truth. This placement brought profound death and rebirth of religious and philosophical structures, with the internet revolutionizing access to information and diverse perspectives. Your generation was tasked with transforming how humanity seeks meaning, globalizing consciousness, and redefining what truth means in a pluralistic world. You were part of a collective that faced the shadow of religious extremism, dogmatic beliefs, and the clash of worldviews, learning that truth is vast enough to include many perspectives. This was a generation born into globalization, here to expand humanity's understanding of meaning and truth."
      },
      {
        heading: "POWER & INTENSITY",
        content: "With Pluto in Sagittarius, your generation carries intense power around beliefs, truth-seeking, and the expansion of consciousness. There's a collective compulsion to explore, to question everything, to seek authentic meaning, and to connect globally. This manifests as unprecedented access to diverse philosophies and cultures, but also as information overload and the weaponization of belief. Your generation must learn that seeking truth doesn't require destroying others' truths, that expansion includes depth, and that freedom requires responsibility. The intensity drives constant exploration, the need for meaning, and the transformation of what it means to believe."
      },
      {
        heading: "SHADOW WORK",
        content: "The collective shadow of Pluto in Sagittarius involves religious extremism, dogmatic beliefs, and the dark side of the search for truth. Your generation must confront humanity's tendency to believe our truth is the only truth, to use philosophy as a weapon, and to explore without grounding. The shadow includes the clash of civilizations, the weaponization of belief, and the loss of meaning in endless seeking. Your generational work involves learning that truth is experiential not just intellectual, that real wisdom includes humility, and that authentic faith doesn't require converting others. You're here to face the question: How do we honor diverse truths while maintaining our own?"
      },
      {
        heading: "REGENERATION & REBIRTH",
        content: "Through facing these challenges, your generation emerges with transformed understanding of truth, meaning, and global consciousness. You're learning that truth is vast and multifaceted, that real wisdom includes many perspectives, and that authentic exploration requires both expansion and depth. Your generation has the potential to birth truly global consciousness, to create new philosophies that honor diversity, and to demonstrate that we can believe deeply while respecting others' beliefs. You're here to transform how humanity seeks truth, proving that the greatest adventure is discovering that truth is bigger than any one perspective."
      }
    ],
    strengths: ["Transformative truth", "Philosophical power", "Global rebirth"],
    challenges: ["Destructive beliefs", "Religious extremism", "Dogmatic transformation"]
  },

  "capricorn-pluto": {
    sign: "capricorn",
    planet: "pluto",
    title: "CAPRICORN",
    subtitle: "Pluto in Capricorn",
    sections: [
      {
        heading: "WHERE YOU TRANSFORM",
        content: "Pluto in Capricorn (2008-2024) represents a generational transformation of structures, institutions, government, and authority. This placement brings profound death and rebirth of economic and political systems, with the 2008 financial crisis marking the beginning of institutional collapse and rebuilding. Your generation is tasked with transforming how humanity governs, restructuring failing institutions, and redefining what authority means. You're part of a collective that faces the shadow of corrupt systems, authoritarian control, and the abuse of institutional power, learning that true authority serves the collective good. This is a generation that must rebuild the foundations of civilization itself."
      },
      {
        heading: "POWER & INTENSITY",
        content: "With Pluto in Capricorn, your generation carries intense power around structures, systems, and the use of authority. There's a collective compulsion to transform institutions, to tear down what no longer serves, and to build sustainable structures for the future. This manifests as revolutionary changes in government, economics, and corporate power, but also as potential for authoritarian control and the destructive collapse of necessary structures. Your generation must learn that real authority serves rather than dominates, that sustainable systems honor both structure and flexibility, and that true power builds rather than destroys. The intensity drives constant restructuring, the need for accountability, and the transformation of how we organize society."
      },
      {
        heading: "SHADOW WORK",
        content: "The collective shadow of Pluto in Capricorn involves corrupt institutions, authoritarian government, and the destructive use of structural power. Your generation must confront humanity's tendency to create systems that serve the few rather than the many, to abuse authority, and to cling to failing structures out of fear. The shadow includes economic collapse, political corruption, and the realization that many of our institutions are built on unsustainable foundations. Your generational work involves learning that real structure serves life, that true authority is earned not taken, and that sustainable systems must be rebuilt from the ground up. You're here to face the question: What structures truly serve humanity, and which must be transformed or released?"
      },
      {
        heading: "REGENERATION & REBIRTH",
        content: "Through facing these challenges, your generation emerges with transformed understanding of structure, authority, and governance. You're learning that real power is responsible, that sustainable systems honor both tradition and innovation, and that true authority serves the collective good. Your generation has the potential to rebuild civilization's foundations, to create new forms of governance and economics that serve all, and to demonstrate that structure can be both strong and flexible. You're here to transform how humanity organizes itself, proving that the strongest structures are those built on integrity, sustainability, and service to the whole."
      }
    ],
    strengths: ["Transformative structure", "Authority rebirth", "Institutional power"],
    challenges: ["Destructive systems", "Authoritarian control", "Economic collapse"]
  },

  "aquarius-pluto": {
    sign: "aquarius",
    planet: "pluto",
    title: "AQUARIUS",
    subtitle: "Pluto in Aquarius",
    sections: [
      {
        heading: "WHERE YOU TRANSFORM",
        content: "Pluto in Aquarius (2024-2044) represents a generational transformation of technology, community, innovation, and collective consciousness. This placement brings profound death and rebirth of how humanity connects, with artificial intelligence and new technologies revolutionizing society. Your generation is tasked with transforming social structures, creating new forms of community, and redefining what it means to be human in a technological age. You're part of a collective that faces the shadow of technological control, digital surveillance, and the loss of humanity in innovation, learning that true progress serves human connection. This is a generation that must navigate the merger of human and machine, individual and collective."
      },
      {
        heading: "POWER & INTENSITY",
        content: "With Pluto in Aquarius, your generation carries intense power around technology, innovation, and collective transformation. There's a collective compulsion to revolutionize everything, to connect globally, to innovate radically, and to transform society at its roots. This manifests as unprecedented technological advancement, new forms of community and governance, but also as potential for digital control and the dehumanization of society. Your generation must learn that real innovation serves humanity, that technology should enhance rather than replace human connection, and that true progress includes everyone. The intensity drives constant innovation, the need for freedom, and the transformation of what it means to be part of the collective."
      },
      {
        heading: "SHADOW WORK",
        content: "The collective shadow of Pluto in Aquarius involves technological control, digital surveillance, and the dark side of innovation. Your generation must confront humanity's tendency to use technology for control rather than liberation, to prioritize progress over people, and to lose our humanity in the pursuit of the future. The shadow includes AI replacing human connection, social media manipulation, and the creation of technology that serves power rather than people. Your generational work involves learning that real innovation is humane, that technology must serve life, and that true freedom includes both individuality and community. You're here to face the question: How do we use technology to enhance humanity rather than replace it?"
      },
      {
        heading: "REGENERATION & REBIRTH",
        content: "Through facing these challenges, your generation emerges with transformed understanding of technology, community, and progress. You're learning that real innovation serves human flourishing, that technology can enhance connection rather than replace it, and that true progress includes everyone. Your generation has the potential to birth new forms of community, to create technology that serves life, and to demonstrate that we can be both highly connected and deeply individual. You're here to transform how humanity innovates and connects, proving that the future can be both technological and humane, and that real progress honors what makes us human."
      }
    ],
    strengths: ["Transformative technology", "Social rebirth", "Collective power"],
    challenges: ["Destructive innovation", "Digital control", "Detached transformation"]
  },

  "pisces-pluto": {
    sign: "pisces",
    planet: "pluto",
    title: "PISCES",
    subtitle: "Pluto in Pisces",
    sections: [
      {
        heading: "WHERE YOU TRANSFORM",
        content: "Pluto in Pisces (2044-2068) will represent a generational transformation of spirituality, compassion, collective consciousness, and the dissolution of boundaries. This placement will bring profound death and rebirth of religious and spiritual systems, with humanity potentially experiencing collective spiritual awakening or crisis. Your generation will be tasked with transforming how humanity relates to the divine, healing collective wounds, and redefining what it means to be compassionate. You'll be part of a collective that faces the shadow of spiritual escapism, victim consciousness, and the dissolution of necessary boundaries, learning that true spirituality is grounded in reality. This will be a generation that must navigate the waters between material and spiritual, individual and universal."
      },
      {
        heading: "POWER & INTENSITY",
        content: "With Pluto in Pisces, your generation will carry intense power around spirituality, compassion, and collective consciousness. There will be a collective compulsion to transcend, to heal, to merge with the divine, and to feel everything. This will manifest as potential spiritual renaissance, collective healing, and unprecedented empathy, but also as escapism, spiritual bypassing, and the loss of individual boundaries. Your generation will need to learn that real spirituality is grounded, that true compassion includes boundaries, and that transcendence doesn't mean escape. The intensity will drive deep spiritual experiences, collective empathy, and the transformation of what it means to be connected to all that is."
      },
      {
        heading: "SHADOW WORK",
        content: "The collective shadow of Pluto in Pisces will involve spiritual manipulation, escapism, victim consciousness, and the dark side of merging. Your generation will need to confront humanity's tendency to escape reality through spirituality, to use compassion as a weapon, and to lose ourselves in the collective. The shadow will include addiction, spiritual bypassing, and the dissolution of necessary boundaries. Your generational work will involve learning that real spirituality is embodied, that true compassion includes discernment, and that we can be connected to all while maintaining healthy boundaries. You'll be here to face the question: How do we transcend without escaping, and how do we merge without losing ourselves?"
      },
      {
        heading: "REGENERATION & REBIRTH",
        content: "Through facing these challenges, your generation will emerge with transformed understanding of spirituality, compassion, and consciousness. You'll learn that real spirituality is grounded in reality, that true compassion includes self-care, and that we can be deeply connected while maintaining healthy boundaries. Your generation will have the potential to birth new forms of spirituality that honor both transcendence and embodiment, to heal collective wounds, and to demonstrate that we can feel everything without drowning in it. You'll be here to transform how humanity relates to the divine, proving that the most profound spirituality is one that serves life on Earth, and that real transcendence includes rather than escapes the material world."
      }
    ],
    strengths: ["Transformative spirituality", "Compassionate power", "Universal rebirth"],
    challenges: ["Destructive escapism", "Spiritual manipulation", "Boundary dissolution"]
  },

  // ============================================================================
  // CHIRON SIGNS (12) - Wounds, Healing, Teaching Gifts
  // ============================================================================

  "aries-chiron": {
    sign: "aries",
    planet: "chiron",
    title: "ARIES",
    subtitle: "Chiron in Aries",
    sections: [
      {
        heading: "YOUR CORE WOUND",
        content: "With Chiron in Aries, your deepest wound centers around your right to exist, assert yourself, and claim your identity. You may have experienced early situations where your natural assertiveness was criticized, punished, or shut down. Perhaps you were told you were too much, too loud, or too aggressive when you were simply being yourself. This created a wound around self-assertion, making you question whether you have the right to take up space, express your desires, or put yourself first. You might struggle with a deep sense of invisibility or feel that your presence doesn't matter."
      },
      {
        heading: "HEALING JOURNEY",
        content: "Your healing path requires you to reclaim your right to exist boldly and unapologetically. This means learning to assert yourself even when it feels uncomfortable, to express anger in healthy ways, and to take action on your own behalf. You must practice putting yourself first without guilt, setting boundaries firmly, and speaking up for what you need. The journey involves recognizing that your assertiveness is not aggression—it's your life force expressing itself. Through therapy, martial arts, leadership roles, or simply practicing saying 'no,' you gradually rebuild your relationship with your own power and presence."
      },
      {
        heading: "YOUR GIFT TO OTHERS",
        content: "Once you've walked through your own fire of self-doubt and reclaimed your identity, you become an extraordinary teacher of courage and self-assertion. You have a unique ability to see when others are dimming their light or holding back their power, and you can help them find their voice. Your own struggle makes you deeply empathetic to those who feel invisible or powerless. You become a champion for the underdog, someone who encourages others to be brave, to take risks, and to claim their rightful place in the world. Your presence alone can inspire others to step into their own power."
      },
      {
        heading: "INTEGRATION & MASTERY",
        content: "Full integration of your Chiron in Aries means embodying authentic courage—not the absence of fear, but the willingness to act despite it. You learn that true strength includes vulnerability, that assertion doesn't require aggression, and that claiming your identity doesn't mean diminishing others. You become comfortable with conflict, able to fight for what matters while respecting others' boundaries. Your wound becomes your wisdom, and you carry yourself with a quiet confidence that comes from having earned your right to be exactly who you are. You inspire others simply by existing fully and unapologetically."
      }
    ],
    strengths: ["Teaching courage", "Identity healing", "Empowering others"],
    challenges: ["Self-doubt", "Invisibility", "Assertion wounds"]
  },

  "taurus-chiron": {
    sign: "taurus",
    planet: "chiron",
    title: "TAURUS",
    subtitle: "Chiron in Taurus",
    sections: [
      {
        heading: "YOUR CORE WOUND",
        content: "With Chiron in Taurus, your deepest wound revolves around self-worth, value, and security. You may have experienced situations where your basic needs weren't met, where you felt you had to earn love through what you could provide, or where your inherent worth was questioned. Perhaps you grew up with financial instability, or you were made to feel that your value depended on your productivity or possessions. This creates a profound insecurity about your worthiness and a fear that you'll never have enough—whether that's money, love, or simple peace of mind. You might struggle with feeling fundamentally undeserving of comfort, pleasure, or abundance."
      },
      {
        heading: "HEALING JOURNEY",
        content: "Your healing path involves separating your worth from external measures and learning that you are valuable simply because you exist. This means practicing self-care without guilt, allowing yourself to receive without feeling you must earn it, and enjoying life's pleasures without shame. You must work on building genuine security from within rather than constantly seeking it externally. This might involve healing your relationship with money, learning to trust in abundance, and recognizing that true security comes from self-acceptance. Practices like body work, spending time in nature, and consciously receiving help from others can support your healing journey."
      },
      {
        heading: "YOUR GIFT TO OTHERS",
        content: "Having walked through the valley of unworthiness and emerged with hard-won self-value, you become a powerful teacher of inherent worth. You have a unique ability to help others recognize their value independent of achievement, possessions, or productivity. You can guide people in building genuine security—not through accumulation, but through self-acceptance and trust. Your own journey makes you deeply compassionate toward those struggling with poverty consciousness or self-worth issues. You teach others that they deserve comfort, that receiving is as important as giving, and that true abundance begins with recognizing one's inherent value."
      },
      {
        heading: "INTEGRATION & MASTERY",
        content: "Full integration means embodying unshakeable self-worth that doesn't fluctuate with external circumstances. You learn to enjoy material comfort without attachment, to value yourself without needing external validation, and to trust in your ability to create security. You become someone who can hold space for both abundance and simplicity, who knows their worth isn't diminished by loss or enhanced by gain. Your wound becomes your greatest asset as you help others build lasting security from the inside out. You model what it means to be truly wealthy—rich in self-acceptance, abundant in peace, and secure in your own value."
      }
    ],
    strengths: ["Teaching self-worth", "Security healing", "Value recognition"],
    challenges: ["Worthlessness", "Material insecurity", "Self-value wounds"]
  },

  "gemini-chiron": {
    sign: "gemini",
    planet: "chiron",
    title: "GEMINI",
    subtitle: "Chiron in Gemini",
    sections: [
      {
        heading: "YOUR CORE WOUND",
        content: "With Chiron in Gemini, your deepest wound centers on communication, being heard, and intellectual validation. You may have experienced situations where your voice was silenced, your ideas were dismissed, or your intelligence was questioned. Perhaps you struggled with a learning difference, were told you talked too much, or felt chronically misunderstood. Maybe you had something important to say but no one would listen, or you were made to feel that your thoughts and words didn't matter. This creates a wound around self-expression, making you doubt your intelligence and question whether anyone truly hears or understands you."
      },
      {
        heading: "HEALING JOURNEY",
        content: "Your healing path involves reclaiming your voice and trusting your intelligence. This means learning to express yourself even when you fear being misunderstood, to share your ideas even when you doubt their value, and to keep communicating even when others don't seem to listen. You must work on developing confidence in your mental abilities and recognizing that your unique way of processing information is valid. Writing, teaching, therapy, or joining discussion groups can help you rebuild trust in your voice. The journey involves understanding that being misunderstood sometimes is part of authentic communication, and that your words have power and value."
      },
      {
        heading: "YOUR GIFT TO OTHERS",
        content: "Having struggled to find and trust your voice, you become an exceptional teacher of communication and authentic expression. You have a rare ability to help others articulate what they're thinking and feeling, to give voice to the voiceless, and to translate complex ideas into understandable language. Your own experience of being misunderstood makes you deeply skilled at truly hearing others and helping them feel understood. You can teach people how to communicate more effectively, how to trust their intelligence, and how to keep speaking their truth even when it feels like no one is listening. You become a bridge between minds, helping people connect through words."
      },
      {
        heading: "INTEGRATION & MASTERY",
        content: "Full integration means trusting your voice completely and communicating with authentic confidence. You learn that your intelligence is valid even when it works differently than others', that being misunderstood doesn't diminish the truth of your message, and that your words have the power to heal and connect. You become comfortable with the full spectrum of communication—speaking and listening, teaching and learning, questioning and answering. Your wound transforms into wisdom as you help others find their voice and trust their minds. You embody the truth that everyone deserves to be heard and that authentic communication can bridge any divide."
      }
    ],
    strengths: ["Teaching communication", "Voice healing", "Expression empowerment"],
    challenges: ["Being misunderstood", "Communication wounds", "Intelligence doubts"]
  },

  "cancer-chiron": {
    sign: "cancer",
    planet: "chiron",
    title: "CANCER",
    subtitle: "Chiron in Cancer",
    sections: [
      {
        heading: "YOUR CORE WOUND",
        content: "With Chiron in Cancer, your deepest wound involves belonging, nurturing, and emotional safety. You may have experienced abandonment, neglect, or a lack of emotional attunement in your early home life. Perhaps your family was physically present but emotionally absent, or you felt like you had to be the caretaker when you needed care yourself. You might have experienced the loss of a parent, felt unwanted, or struggled with a mother wound that left you feeling fundamentally unsafe in the world. This creates a deep fear of abandonment and a difficulty both giving and receiving nurturing. You may overextend yourself caring for others while feeling unable to ask for care yourself."
      },
      {
        heading: "HEALING JOURNEY",
        content: "Your healing path involves learning to nurture yourself and recognizing that you deserve care and belonging. This means developing the ability to self-soothe, to create emotional safety within yourself, and to build chosen family when your family of origin couldn't provide what you needed. You must practice receiving care without feeling guilty or vulnerable, and setting boundaries around your nurturing energy so you don't deplete yourself. The journey often involves reparenting your inner child, grieving what you didn't receive, and learning that it's safe to need and be needed. Creating a true home—whether physical or emotional—becomes part of your healing work."
      },
      {
        heading: "YOUR GIFT TO OTHERS",
        content: "Having walked through the pain of feeling unwanted and unsafe, you become an extraordinary healer of emotional wounds and creator of belonging. You have a profound ability to make others feel safe, seen, and nurtured. Your own experience of not receiving adequate care makes you exquisitely attuned to others' emotional needs. You can teach people how to nurture themselves, how to create family from friends, and how to build genuine emotional security. You become the safe harbor for others that you once needed, and you help people understand that belonging is something we can create, not just something we're born into. Your presence itself can feel like coming home."
      },
      {
        heading: "INTEGRATION & MASTERY",
        content: "Full integration means becoming both the nurturer and the nurtured, able to give and receive care with equal grace. You learn that emotional safety comes from within, that you can belong to yourself even when others reject you, and that true family is built on choice and love rather than obligation. You become comfortable with your own vulnerability and needs, no longer seeing them as weaknesses. Your wound transforms into your greatest strength as you create the kind of emotional sanctuary for others that you once desperately needed. You embody the truth that everyone deserves to belong, to be cared for, and to feel emotionally safe."
      }
    ],
    strengths: ["Teaching nurturing", "Emotional healing", "Creating belonging"],
    challenges: ["Abandonment", "Family wounds", "Emotional safety issues"]
  },

  "leo-chiron": {
    sign: "leo",
    planet: "chiron",
    title: "LEO",
    subtitle: "Chiron in Leo",
    sections: [
      {
        heading: "YOUR CORE WOUND",
        content: "With Chiron in Leo, your deepest wound centers on being seen, celebrated, and recognized for who you truly are. You may have experienced situations where your light was dimmed, your creativity was criticized, or your need for attention was shamed. Perhaps you were told you were showing off, that you weren't special, or that you needed to make yourself smaller so others could shine. Maybe you were overlooked while siblings or peers received praise, or your creative expressions were dismissed as unimportant. This creates a wound around visibility and self-expression, making you fear being seen while simultaneously craving recognition. You might struggle with feeling fundamentally unspecial or unworthy of celebration."
      },
      {
        heading: "HEALING JOURNEY",
        content: "Your healing path involves reclaiming your right to shine and be celebrated. This means learning to express yourself creatively without fear of judgment, to take up space without apologizing, and to receive praise without deflecting it. You must work on recognizing your own specialness—not from a place of ego, but from genuine self-appreciation. The journey involves understanding that your light doesn't diminish others' light, and that the world needs your unique creative expression. Engaging in creative pursuits, performing, or simply practicing being visible in small ways can help you rebuild confidence in your radiance. You learn that seeking healthy attention is not narcissistic—it's human."
      },
      {
        heading: "YOUR GIFT TO OTHERS",
        content: "Having struggled to claim your own light, you become an exceptional champion of others' creativity and self-expression. You have a unique ability to see and celebrate the specialness in everyone, to encourage people to shine, and to help them overcome their fear of visibility. Your own experience of feeling unseen makes you deeply committed to witnessing and honoring others. You can teach people how to express themselves authentically, how to share their gifts without shame, and how to celebrate their uniqueness. You become a spotlight for others, helping them recognize and share their own radiance. Your encouragement can literally change lives by giving people permission to be fully themselves."
      },
      {
        heading: "INTEGRATION & MASTERY",
        content: "Full integration means shining authentically without needing constant validation, and celebrating yourself without diminishing others. You learn that true confidence is quiet, that real specialness doesn't need to prove itself, and that your light is most powerful when it illuminates others too. You become comfortable being visible, able to receive praise gracefully and give it generously. Your wound becomes your gift as you help others step into their own spotlight. You embody the truth that everyone is special in their own way, and that the world is brighter when we all allow ourselves to shine. You inspire others simply by being unapologetically, radiantly yourself."
      }
    ],
    strengths: ["Teaching self-expression", "Creativity healing", "Visibility empowerment"],
    challenges: ["Feeling unspecial", "Creative blocks", "Visibility wounds"]
  },

  "virgo-chiron": {
    sign: "virgo",
    planet: "chiron",
    title: "VIRGO",
    subtitle: "Chiron in Virgo",
    sections: [
      {
        heading: "YOUR CORE WOUND",
        content: "With Chiron in Virgo, your deepest wound revolves around perfection, usefulness, and feeling fundamentally flawed. You may have experienced harsh criticism, impossibly high standards, or situations where nothing you did was ever good enough. Perhaps you were made to feel that your value depended on your productivity, that mistakes were unforgivable, or that you had to be perfect to be lovable. You might have experienced health issues that made you feel broken, or been made to feel that your body or mind was somehow defective. This creates a wound around adequacy, driving you to endless self-improvement while never feeling you've arrived. You may struggle with chronic anxiety about being flawed or useless."
      },
      {
        heading: "HEALING JOURNEY",
        content: "Your healing path involves embracing your humanity and recognizing that imperfection is not only acceptable—it's beautiful. This means learning to accept yourself as you are, mistakes and all, and understanding that your worth isn't determined by your productivity or perfection. You must work on developing self-compassion, treating yourself with the same kindness you'd offer others. The journey involves releasing the need to fix everything, including yourself, and learning that being useful isn't the same as being worthy. Practices like mindfulness, body acceptance work, and learning to rest without guilt can support your healing. You discover that wholeness includes your flaws, not despite them."
      },
      {
        heading: "YOUR GIFT TO OTHERS",
        content: "Having battled perfectionism and emerged with hard-won self-acceptance, you become a powerful teacher of embracing imperfection and finding wholeness. You have a unique ability to help others see that their flaws don't diminish their value, that mistakes are opportunities for growth, and that being human means being imperfect. Your own struggle makes you deeply compassionate toward others' struggles with adequacy. You can teach people how to serve from wholeness rather than woundedness, how to practice self-care without self-criticism, and how to find meaning in being rather than just doing. You help others understand that they are enough, exactly as they are."
      },
      {
        heading: "INTEGRATION & MASTERY",
        content: "Full integration means embodying self-acceptance while maintaining your natural desire for improvement—not from a place of inadequacy, but from love. You learn that true healing isn't about fixing yourself but about accepting yourself, that real service comes from overflow not depletion, and that your imperfections make you relatable and real. You become comfortable with messiness, both in yourself and in life, able to strive for excellence without demanding perfection. Your wound becomes your wisdom as you help others embrace their humanity. You model what it means to be beautifully, perfectly imperfect—whole not despite your flaws, but including them."
      }
    ],
    strengths: ["Teaching self-acceptance", "Healing perfectionism", "Service from wholeness"],
    challenges: ["Never good enough", "Health wounds", "Perfectionism"]
  },

  "libra-chiron": {
    sign: "libra",
    planet: "chiron",
    title: "LIBRA",
    subtitle: "Chiron in Libra",
    sections: [
      {
        heading: "YOUR CORE WOUND",
        content: "With Chiron in Libra, your deepest wound revolves around relationships, being chosen, and feeling lovable. You may have experienced rejection, abandonment, or situations where you felt fundamentally unworthy of love and partnership. Perhaps you witnessed painful relationship dynamics in your family, experienced early rejection that shaped your view of love, or felt you had to sacrifice yourself to be loved. You might have been made to feel that your needs didn't matter in relationships, or that you were only valuable when you were pleasing others. This creates a wound around worthiness in relationships, making you either avoid intimacy or lose yourself completely in partnerships. You may struggle with codependency or a deep fear of being alone."
      },
      {
        heading: "HEALING JOURNEY",
        content: "Your healing path involves learning that you are lovable as you are, and that you can be whole both in and out of relationship. This means developing a strong sense of self that doesn't disappear when you partner with someone, learning to maintain boundaries while staying connected, and recognizing that compromise doesn't mean self-abandonment. You must work on healing your relationship with yourself first, understanding that external partnerships can only be as healthy as your internal relationship. The journey involves learning to choose yourself, to be comfortable alone, and to enter relationships from wholeness rather than neediness. You discover that true partnership enhances rather than completes you."
      },
      {
        heading: "YOUR GIFT TO OTHERS",
        content: "Having navigated the treacherous waters of relationship wounds and emerged with wisdom about healthy partnership, you become an exceptional teacher of balanced relationships. You have a unique ability to help others maintain their identity within partnerships, to recognize codependent patterns, and to create relationships based on mutual respect rather than need. Your own struggle makes you deeply attuned to relationship dynamics and able to see where people are losing themselves or avoiding intimacy. You can teach others how to love without losing themselves, how to be vulnerable without being dependent, and how to create partnerships that honor both individuals. You help people understand that being chosen begins with choosing yourself."
      },
      {
        heading: "INTEGRATION & MASTERY",
        content: "Full integration means embodying the truth that you are complete on your own and that relationships are a choice, not a necessity. You learn to love from overflow rather than emptiness, to maintain your identity while deeply connecting with others, and to be equally comfortable alone or partnered. You become skilled at creating balanced relationships where both people can thrive, where compromise doesn't mean sacrifice, and where love enhances rather than defines you. Your wound becomes your gift as you help others create the kind of healthy, balanced partnerships you've learned to cultivate. You model what it means to be whole within yourself while beautifully connected to another."
      }
    ],
    strengths: ["Teaching relationship health", "Balance healing", "Partnership wisdom"],
    challenges: ["Feeling unlovable", "Relationship wounds", "Codependency"]
  },

  "scorpio-chiron": {
    sign: "scorpio",
    planet: "chiron",
    title: "SCORPIO",
    subtitle: "Chiron in Scorpio",
    sections: [
      {
        heading: "YOUR CORE WOUND",
        content: "With Chiron in Scorpio, your deepest wound involves trust, betrayal, power, and the fear of being truly seen. You may have experienced profound betrayal, violation of trust, or situations where your vulnerability was used against you. Perhaps you were exposed to death, loss, or transformation too early, or you experienced abuse or manipulation that taught you the world isn't safe. You might have been made to feel that your intensity was too much, that your emotions were dangerous, or that intimacy leads to pain. This creates a wound around trust and vulnerability, making you either shut down completely or test others constantly. You may struggle with control issues, fear of intimacy, or difficulty allowing transformation."
      },
      {
        heading: "HEALING JOURNEY",
        content: "Your healing path involves learning that vulnerability is not weakness and that you can trust selectively and wisely. This means developing discernment about who deserves your trust rather than trusting no one or everyone. You must work on releasing the need to control everything as a protection mechanism, and learning to surrender to life's transformative processes. The journey involves facing your own shadow, healing from betrayal without becoming bitter, and recognizing that intimacy requires risk but is worth it. Deep therapy, shadow work, and allowing yourself to be truly seen by safe people can support your healing. You learn that transformation is not something to fear but something to embrace."
      },
      {
        heading: "YOUR GIFT TO OTHERS",
        content: "Having descended into the depths of betrayal and emerged with wisdom about trust and transformation, you become an extraordinary guide through darkness. You have a unique ability to help others heal their deepest wounds, to facilitate profound transformation, and to teach people how to trust again after betrayal. Your own experience of violation makes you exquisitely sensitive to others' pain and able to hold space for their darkest moments. You can teach people how to reclaim their power after abuse, how to transform pain into wisdom, and how to open their hearts again without being naive. You become a powerful healer, helping others through their own death and rebirth processes."
      },
      {
        heading: "INTEGRATION & MASTERY",
        content: "Full integration means embracing both your power and your vulnerability, trusting wisely rather than not at all, and allowing transformation to flow through you. You learn that true power comes from authenticity not control, that intimacy is worth the risk, and that your intensity is a gift not a curse. You become comfortable with life's cycles of death and rebirth, able to release what no longer serves you and embrace what's emerging. Your wound becomes your greatest strength as you help others navigate their own transformations. You embody the truth that what doesn't kill you makes you wiser, and that the deepest wounds can become the source of the most profound healing."
      }
    ],
    strengths: ["Teaching transformation", "Deep healing", "Power reclamation"],
    challenges: ["Betrayal wounds", "Trust issues", "Intimacy fears"]
  },

  "sagittarius-chiron": {
    sign: "sagittarius",
    planet: "chiron",
    title: "SAGITTARIUS",
    subtitle: "Chiron in Sagittarius",
    sections: [
      {
        heading: "YOUR CORE WOUND",
        content: "With Chiron in Sagittarius, your deepest wound involves meaning, faith, and belonging to something greater than yourself. You may have experienced situations where your beliefs were invalidated, your quest for meaning was dismissed, or your faith was shattered. Perhaps you were raised in a dogmatic environment that crushed your natural curiosity, or you experienced a crisis that destroyed your ability to believe in anything. You might have felt like a perpetual outsider, never quite fitting into any philosophy, religion, or worldview. This creates a wound around meaning and purpose, leaving you feeling lost, cynical, or endlessly searching for truth without ever finding it. You may struggle with a sense of meaninglessness or spiritual homelessness."
      },
      {
        heading: "HEALING JOURNEY",
        content: "Your healing path involves discovering that meaning is not found but created, and that faith is a practice rather than a destination. This means learning to trust your own inner wisdom rather than seeking all answers externally, developing your own philosophy of life, and recognizing that your spiritual journey is valid even if it doesn't fit conventional paths. You must work on healing your relationship with belief itself, understanding that faith doesn't require certainty and that questions are as sacred as answers. The journey involves exploring different philosophies and practices while trusting your own experience, and learning that belonging to yourself is more important than belonging to any system. You discover that your wound itself is meaningful."
      },
      {
        heading: "YOUR GIFT TO OTHERS",
        content: "Having wandered through the wilderness of meaninglessness and found your own truth, you become an exceptional guide for others seeking purpose and faith. You have a unique ability to help people find meaning in their suffering, to trust their own spiritual path, and to believe in something greater without losing themselves in dogma. Your own struggle makes you deeply respectful of others' journeys and able to hold space for doubt, questions, and uncertainty. You can teach people how to create their own meaning, how to have faith without certainty, and how to trust that their path is unfolding perfectly even when it feels lost. You help others understand that the journey itself is the destination."
      },
      {
        heading: "INTEGRATION & MASTERY",
        content: "Full integration means embodying faith that's rooted in experience rather than belief, and finding meaning in both the questions and the answers. You learn that truth is personal and evolving, that your spiritual path doesn't need anyone's validation, and that feeling lost is sometimes part of finding your way. You become comfortable with uncertainty, able to hold paradox, and skilled at seeing the sacred in the ordinary. Your wound becomes your wisdom as you help others navigate their own spiritual crises and find their unique truth. You model what it means to be a spiritual seeker who's found home within themselves, carrying faith not as certainty but as trust in the journey."
      }
    ],
    strengths: ["Teaching faith", "Meaning-making", "Truth-finding"],
    challenges: ["Feeling lost", "Faith wounds", "Meaninglessness"]
  },

  "capricorn-chiron": {
    sign: "capricorn",
    planet: "chiron",
    title: "CAPRICORN",
    subtitle: "Chiron in Capricorn",
    sections: [
      {
        heading: "YOUR CORE WOUND",
        content: "With Chiron in Capricorn, your deepest wound involves achievement, authority, respect, and feeling fundamentally unsuccessful. You may have experienced situations where you were made to feel like a failure, where your efforts were never good enough, or where authority figures were harsh, absent, or undermining. Perhaps you had a critical father figure, experienced public humiliation, or felt pressure to achieve that was crushing rather than motivating. You might have been given too much responsibility too young, or felt that love and respect had to be earned through accomplishment. This creates a wound around success and authority, making you either driven to the point of exhaustion or paralyzed by fear of failure. You may struggle with imposter syndrome or feeling you'll never measure up."
      },
      {
        heading: "HEALING JOURNEY",
        content: "Your healing path involves separating your worth from your achievements and learning that true success is measured by integrity, not external markers. This means developing your own definition of success rather than chasing others' approval, learning to rest without guilt, and recognizing that you are enough even when you're not producing. You must work on healing your relationship with authority—both being an authority and relating to authorities—and understanding that respect is earned through authenticity, not perfection. The journey involves learning to build sustainable structures rather than climbing endlessly, and discovering that your humanity is not a weakness to overcome but a strength to embrace. You learn that real mastery includes self-compassion."
      },
      {
        heading: "YOUR GIFT TO OTHERS",
        content: "Having climbed the mountain of achievement while carrying the weight of unworthiness, you become an exceptional teacher of authentic success and sustainable ambition. You have a unique ability to help others achieve their goals without sacrificing their humanity, to build lasting structures from wholeness rather than woundedness, and to claim authority without becoming authoritarian. Your own struggle makes you deeply compassionate toward others' fears of failure and able to see the person behind the achievement. You can teach people how to succeed in ways that honor their values, how to be ambitious without being driven by inadequacy, and how to respect themselves regardless of external accomplishments. You help others understand that true success includes well-being."
      },
      {
        heading: "INTEGRATION & MASTERY",
        content: "Full integration means embodying authentic authority that comes from self-respect rather than external validation, and achieving from wholeness rather than woundedness. You learn that real success is sustainable, that true mastery includes rest, and that your worth is inherent not earned. You become comfortable with both achievement and ordinariness, able to strive for excellence without demanding perfection from yourself or others. Your wound becomes your wisdom as you help others build lives and careers that are both successful and humane. You model what it means to be truly accomplished—respected not just for what you've achieved, but for who you've become in the process."
      }
    ],
    strengths: ["Teaching authentic success", "Authority healing", "Structure from wholeness"],
    challenges: ["Failure wounds", "Authority issues", "Achievement obsession"]
  },

  "aquarius-chiron": {
    sign: "aquarius",
    planet: "chiron",
    title: "AQUARIUS",
    subtitle: "Chiron in Aquarius",
    sections: [
      {
        heading: "YOUR CORE WOUND",
        content: "With Chiron in Aquarius, your deepest wound involves belonging to a group, being accepted for your uniqueness, and feeling fundamentally like an outsider. You may have experienced rejection by your peer group, felt alienated from your community, or been made to feel that your differences made you unacceptable. Perhaps you were bullied for being different, excluded from groups, or made to feel that you had to hide your true self to belong. You might have experienced the pain of being ahead of your time, misunderstood for your innovative ideas, or rejected for refusing to conform. This creates a wound around belonging and acceptance, making you either hide your uniqueness to fit in or embrace your outsider status to the point of isolation. You may struggle with feeling like you'll never truly belong anywhere."
      },
      {
        heading: "HEALING JOURNEY",
        content: "Your healing path involves learning that you can be authentically yourself and still belong, and that true community celebrates rather than suppresses individuality. This means finding or creating your tribe—people who appreciate your uniqueness rather than requiring you to conform. You must work on healing the parts of yourself that believe being different means being wrong, and recognizing that your innovations and unconventional perspectives are gifts to the collective. The journey involves learning to balance your need for independence with your need for connection, and understanding that belonging doesn't require sameness. You discover that your weirdness is your wisdom, and that the right people will love you for exactly who you are."
      },
      {
        heading: "YOUR GIFT TO OTHERS",
        content: "Having walked the lonely path of the outsider and found your way to authentic belonging, you become an exceptional creator of inclusive communities and champion of individuality. You have a unique ability to help other misfits and outsiders find their tribe, to create spaces where everyone can be themselves, and to celebrate diversity in all its forms. Your own experience of rejection makes you deeply committed to ensuring no one else feels excluded or wrong for being different. You can teach people how to embrace their uniqueness, how to find their people, and how to create communities based on authentic connection rather than conformity. You help others understand that being different is not a flaw—it's often a sign of being ahead of your time."
      },
      {
        heading: "INTEGRATION & MASTERY",
        content: "Full integration means embodying your uniqueness fully while feeling genuinely connected to community, and celebrating both your individuality and your belonging. You learn that you don't have to choose between being yourself and being accepted, that your differences are what make you valuable to the collective, and that true friendship honors authenticity. You become comfortable being the bridge between the conventional and the unconventional, able to innovate while staying connected. Your wound becomes your gift as you help create the kind of accepting, diverse communities you once needed. You model what it means to be unapologetically yourself while deeply connected to others—a true individual within a true community."
      }
    ],
    strengths: ["Teaching authentic individuality", "Community healing", "Uniqueness celebration"],
    challenges: ["Outsider wounds", "Rejection fears", "Belonging issues"]
  },

  "pisces-chiron": {
    sign: "pisces",
    planet: "chiron",
    title: "PISCES",
    subtitle: "Chiron in Pisces",
    sections: [
      {
        heading: "YOUR CORE WOUND",
        content: "With Chiron in Pisces, your deepest wound involves boundaries, victimhood, spiritual confusion, and feeling overwhelmed by the suffering of the world. You may have experienced situations where your empathy was exploited, where you absorbed others' pain to your own detriment, or where your sensitivity was seen as weakness. Perhaps you were made to feel responsible for others' emotions, experienced spiritual abuse or confusion, or felt you had to sacrifice yourself to be good or spiritual. You might have struggled with addiction, escapism, or difficulty distinguishing between your feelings and others'. This creates a wound around boundaries and compassion, making you either merge with others' pain or shut down completely. You may struggle with victim consciousness or feeling powerless to help despite your deep desire to heal the world."
      },
      {
        heading: "HEALING JOURNEY",
        content: "Your healing path involves learning that you can be deeply compassionate while maintaining healthy boundaries, and that true service doesn't require self-sacrifice. This means developing the ability to feel with others without taking on their pain, to help without enabling, and to be spiritual without being ungrounded. You must work on distinguishing between empathy and enmeshment, and recognizing that maintaining your own well-being is not selfish—it's necessary for sustainable service. The journey involves healing any victim consciousness, reclaiming your power, and understanding that you can't save everyone and that's okay. You learn that boundaries are not walls but bridges, and that grounded spirituality is more powerful than martyrdom."
      },
      {
        heading: "YOUR GIFT TO OTHERS",
        content: "Having navigated the treacherous waters of boundarylessness and emerged with wisdom about compassionate service, you become an exceptional teacher of healthy empathy and grounded spirituality. You have a unique ability to help others be compassionate without being consumed, to serve without sacrificing themselves, and to stay open-hearted while maintaining boundaries. Your own struggle makes you deeply understanding of those who feel too much or give too much. You can teach people how to be in the world but not of it, how to help others without losing themselves, and how to integrate spirituality with practical reality. You help others understand that the most powerful service comes from wholeness, not woundedness."
      },
      {
        heading: "INTEGRATION & MASTERY",
        content: "Full integration means embodying compassion that includes yourself, maintaining boundaries while staying open-hearted, and being both deeply spiritual and fully grounded. You learn that true service is sustainable, that healthy boundaries actually increase your capacity to help, and that you can feel deeply without drowning in emotion. You become comfortable with your sensitivity as a gift rather than a burden, able to navigate between the spiritual and material worlds with grace. Your wound becomes your greatest strength as you help others find the balance between compassion and self-care. You model what it means to be a wounded healer who's found wholeness—serving from overflow, loving without losing yourself, and bringing heaven to earth rather than escaping earth for heaven."
      }
    ],
    strengths: ["Teaching compassionate boundaries", "Spiritual grounding", "Service from wholeness"],
    challenges: ["Victim wounds", "Boundary issues", "Spiritual confusion"]
  },

}

export type ZodiacContentKey = keyof typeof zodiacContentDatabase

