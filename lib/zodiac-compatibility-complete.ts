/**
 * Complete Zodiac Compatibility Matrix
 * Based on traditional astrology and content from AstroBook PDF
 * 144 combinations (12 signs × 12 signs)
 */

export interface CompatibilityData {
  score: number // 1-10
  element: string
  summary: string
  love: {
    strengths: string[]
    challenges: string[]
  }
  compatibility: {
    emotional: number // 1-10
    physical: number // 1-10
    intellectual: number // 1-10
    overall: number // 1-10
  }
  advice: string
  dateIdeas: string[]
}

type SignName = 
  | 'aries' | 'taurus' | 'gemini' | 'cancer' 
  | 'leo' | 'virgo' | 'libra' | 'scorpio' 
  | 'sagittarius' | 'capricorn' | 'aquarius' | 'pisces'

// Type alias for compatibility with other code
export type ZodiacSign = SignName

export const zodiacCompatibility: Record<SignName, Record<SignName, CompatibilityData>> = {
  aries: {
    aries: {
      score: 7,
      element: "Fire + Fire",
      summary: "Two rams butting heads or charging forward together? Passionate but competitive. When Aries meets Aries, sparks fly in every direction.",
      love: {
        strengths: [
          "Shared passion and enthusiasm for life",
          "Mutual respect for independence and freedom",
          "Exciting and adventurous together",
          "Never a dull moment",
          "Both understand the need for action"
        ],
        challenges: [
          "Both want to lead - power struggles inevitable",
          "Impulsive decisions without discussion",
          "Tempers can flare quickly",
          "Competitiveness may overshadow cooperation",
          "Need to learn patience and compromise"
        ]
      },
      compatibility: {
        emotional: 6,
        physical: 9,
        intellectual: 7,
        overall: 7
      },
      advice: "Set clear boundaries and take turns leading. Channel competitive energy into shared goals rather than competing with each other.",
      dateIdeas: ["Rock climbing", "Escape rooms", "Competitive sports", "Adventure travel", "Action movie marathons"]
    },
    taurus: {
      score: 5,
      element: "Fire + Earth",
      summary: "Fire needs air to burn, but earth can smother. Aries' speed meets Taurus' steady pace. Challenging but growth-oriented match.",
      love: {
        strengths: [
          "Aries brings excitement to Taurus' routine",
          "Taurus provides stability for impulsive Aries",
          "Both are passionate, though differently expressed",
          "Can balance each other's extremes",
          "Strong physical attraction initially"
        ],
        challenges: [
          "Fundamentally different paces - Aries rushes, Taurus delays",
          "Aries finds Taurus too slow; Taurus finds Aries reckless",
          "Financial disagreements likely (spender vs saver)",
          "Taurus stubbornness vs Aries impatience",
          "Conflicting needs for security vs adventure"
        ]
      },
      compatibility: {
        emotional: 4,
        physical: 7,
        intellectual: 5,
        overall: 5
      },
      advice: "Aries should slow down and appreciate Taurus' loyalty. Taurus should try new adventures. Compromise on pace is essential.",
      dateIdeas: ["Upscale dining with adventure activities", "Cooking classes", "Wine tasting", "Nature hikes", "Home renovation projects"]
    },
    gemini: {
      score: 8,
      element: "Fire + Air",
      summary: "Air fans the flames! Dynamic duo with endless conversation. Aries provides action, Gemini provides ideas. Natural partnership.",
      love: {
        strengths: [
          "Mental stimulation keeps both engaged",
          "Shared love of novelty and adventure",
          "Great communication and mutual understanding",
          "Both value independence and freedom",
          "Fun, playful, and spontaneous together"
        ],
        challenges: [
          "Both can be impulsive - who makes the plans?",
          "Gemini's indecisiveness frustrates action-oriented Aries",
          "May lack emotional depth",
          "Both avoid serious commitment initially",
          "Can be superficial if not intentional"
        ]
      },
      compatibility: {
        emotional: 6,
        physical: 8,
        intellectual: 9,
        overall: 8
      },
      advice: "Build emotional intimacy alongside intellectual connection. Aries should give Gemini space to explore, Gemini should appreciate Aries' directness.",
      dateIdeas: ["Comedy shows", "Travel to new cities", "Book clubs", "Trivia nights", "Learning new skills together"]
    },
    cancer: {
      score: 4,
      element: "Fire + Water",
      summary: "Fire evaporates water or water extinguishes fire. Emotional Cancer needs security; independent Aries needs freedom. Requires conscious effort.",
      love: {
        strengths: [
          "Aries protects; Cancer nurtures - complementary roles",
          "Cancer teaches Aries emotional depth",
          "Aries encourages Cancer to take risks",
          "Both are initiators (Cardinal signs)",
          "Passionate in different ways"
        ],
        challenges: [
          "Cancer needs reassurance; Aries needs space",
          "Aries' bluntness hurts sensitive Cancer",
          "Different emotional languages",
          "Cancer clings; Aries bolts",
          "Home vs adventure priorities clash"
        ]
      },
      compatibility: {
        emotional: 4,
        physical: 6,
        intellectual: 5,
        overall: 4
      },
      advice: "Aries must develop sensitivity and reassure Cancer frequently. Cancer should allow Aries independence without taking it personally.",
      dateIdeas: ["Home-cooked dinners", "Beach walks", "Family gatherings", "Movie nights at home", "Weekend staycations"]
    },
    leo: {
      score: 9,
      element: "Fire + Fire",
      summary: "Fire meets fire - explosive! Two natural leaders create passionate, dynamic partnership. Best fire sign pairing. Royal romance.",
      love: {
        strengths: [
          "Mutual admiration and respect",
          "Shared enthusiasm and zest for life",
          "Great chemistry and passion",
          "Both love adventure and excitement",
          "Natural cheerleaders for each other"
        ],
        challenges: [
          "Both need to be the star - ego clashes",
          "Competitive for attention",
          "Need to share the spotlight",
          "Both can be stubborn about being right",
          "Dramatic conflicts when disagreements arise"
        ]
      },
      compatibility: {
        emotional: 8,
        physical: 10,
        intellectual: 8,
        overall: 9
      },
      advice: "Take turns in the spotlight. Aries should appreciate Leo's need for admiration; Leo should respect Aries' need to lead sometimes.",
      dateIdeas: ["Theater performances", "Fine dining", "Dance clubs", "Luxury travel", "Red carpet events"]
    },
    virgo: {
      score: 4,
      element: "Fire + Earth",
      summary: "Impulsive meets methodical. Aries acts; Virgo analyzes. Can work if both appreciate different approaches. Growth through contrast.",
      love: {
        strengths: [
          "Aries inspires Virgo to take risks",
          "Virgo helps Aries think things through",
          "Both are hardworking when motivated",
          "Virgo organizes Aries' scattered energy",
          "Can learn much from each other"
        ],
        challenges: [
          "Virgo criticizes; Aries rebels",
          "Different approaches to everything",
          "Aries finds Virgo too picky",
          "Virgo finds Aries too messy and chaotic",
          "Virgo's caution frustrates Aries' need for action"
        ]
      },
      compatibility: {
        emotional: 5,
        physical: 6,
        intellectual: 6,
        overall: 4
      },
      advice: "Virgo should ease up on criticism; Aries should slow down and plan occasionally. Find middle ground between spontaneity and organization.",
      dateIdeas: ["Fitness classes", "Volunteering", "Farmers markets", "DIY projects", "Health-focused restaurants"]
    },
    libra: {
      score: 6,
      element: "Fire + Air",
      summary: "Opposite signs attract! Aries' directness meets Libra's diplomacy. Can complement or clash. Balance is key.",
      love: {
        strengths: [
          "Aries brings decisiveness; Libra brings harmony",
          "Strong initial attraction of opposites",
          "Libra softens Aries; Aries energizes Libra",
          "Complementary energies when balanced",
          "Both love socializing and fun"
        ],
        challenges: [
          "Aries too direct; Libra too indirect",
          "Aries decides fast; Libra weighs endlessly",
          "Different social styles",
          "Libra's need for peace vs Aries' need for action",
          "Can feel like opposite worlds"
        ]
      },
      compatibility: {
        emotional: 6,
        physical: 7,
        intellectual: 7,
        overall: 6
      },
      advice: "Aries should practice patience with Libra's decision-making. Libra should be more direct. Appreciate that opposites can complete each other.",
      dateIdeas: ["Art galleries", "Wine and paint nights", "Couples dancing", "Balanced activities", "Social gatherings"]
    },
    scorpio: {
      score: 6,
      element: "Fire + Water",
      summary: "Intense! Mars (Aries' ruler) also rules Scorpio. Both passionate but in different ways. Powerful or volatile.",
      love: {
        strengths: [
          "Incredibly passionate and intense",
          "Both fearless and courageous",
          "Mutual respect for strength",
          "Powerful physical chemistry",
          "Neither backs down from challenges"
        ],
        challenges: [
          "Power struggles guaranteed",
          "Aries is open; Scorpio is secretive",
          "Jealousy issues (mainly from Scorpio)",
          "Both stubborn and won't back down",
          "Scorpio's depth vs Aries' surface approach"
        ]
      },
      compatibility: {
        emotional: 7,
        physical: 9,
        intellectual: 6,
        overall: 6
      },
      advice: "Honesty is crucial. Aries should respect Scorpio's need for depth; Scorpio should allow Aries freedom. Channel intensity constructively.",
      dateIdeas: ["Mystery dinners", "Escape rooms", "Intense movies", "Deep conversations", "Adventure sports"]
    },
    sagittarius: {
      score: 8,
      element: "Fire + Fire",
      summary: "Adventurous spirits unite! Both love freedom, exploration, and optimism. Natural travel buddies. Exciting partnership.",
      love: {
        strengths: [
          "Shared love of adventure and travel",
          "Mutual respect for freedom",
          "Optimistic and fun-loving together",
          "Great friends as well as lovers",
          "Both honest and direct"
        ],
        challenges: [
          "Both can be restless - commitment issues",
          "Who plans? Both prefer spontaneity",
          "May lack emotional depth",
          "Too much freedom can mean disconnection",
          "Both need excitement - mundane life suffers"
        ]
      },
      compatibility: {
        emotional: 7,
        physical: 9,
        intellectual: 8,
        overall: 8
      },
      advice: "Build a home base while exploring together. Make time for both adventure and intimacy. Commit to growth together.",
      dateIdeas: ["Travel planning", "Hiking expeditions", "Road trips", "Outdoor concerts", "Learning new sports"]
    },
    capricorn: {
      score: 4,
      element: "Fire + Earth",
      summary: "Pioneer meets planner. Aries leaps; Capricorn climbs methodically. Can work with maturity. Respect is essential.",
      love: {
        strengths: [
          "Both ambitious in different ways",
          "Aries energizes; Capricorn stabilizes",
          "Can build empire together",
          "Both respect determination",
          "Complementary skills"
        ],
        challenges: [
          "Capricorn too cautious for impulsive Aries",
          "Aries too reckless for Capricorn",
          "Different timelines for everything",
          "Capricorn's pessimism vs Aries' optimism",
          "Work-life balance issues"
        ]
      },
      compatibility: {
        emotional: 4,
        physical: 6,
        intellectual: 6,
        overall: 4
      },
      advice: "Find middle ground between risk and caution. Capricorn should lighten up; Aries should plan more. Respect different approaches to success.",
      dateIdeas: ["Business networking events", "Upscale dining", "Goal-setting sessions", "Mountain climbing", "Career development workshops"]
    },
    aquarius: {
      score: 8,
      element: "Fire + Air",
      summary: "Innovative and independent! Both value freedom and originality. Intellectual and exciting. Great friendship foundation.",
      love: {
        strengths: [
          "Both fiercely independent",
          "Intellectual stimulation",
          "Shared humanitarian values",
          "Neither clingy or possessive",
          "Exciting and unconventional together"
        ],
        challenges: [
          "May lack emotional intimacy",
          "Both detached from feelings",
          "Aquarius too aloof for Aries",
          "Can be too independent - disconnected",
          "Need to work on emotional expression"
        ]
      },
      compatibility: {
        emotional: 6,
        physical: 8,
        intellectual: 9,
        overall: 8
      },
      advice: "Build emotional connection alongside intellectual bond. Make time for romance amid independence. Value uniqueness in each other.",
      dateIdeas: ["Tech events", "Activism/protests", "Sci-fi movies", "Group activities", "Innovation workshops"]
    },
    pisces: {
      score: 5,
      element: "Fire + Water",
      summary: "Warrior meets dreamer. Aries grounds Pisces; Pisces softens Aries. Beautiful but requires work. Can be magical or messy.",
      love: {
        strengths: [
          "Aries protects sensitive Pisces",
          "Pisces teaches Aries compassion",
          "Complementary energies",
          "Aries decisive; Pisces adaptable",
          "Can inspire each other's best qualities"
        ],
        challenges: [
          "Aries too harsh for sensitive Pisces",
          "Pisces too passive for active Aries",
          "Different realities (practical vs dreamy)",
          "Pisces martyr complex annoys Aries",
          "Communication styles completely different"
        ]
      },
      compatibility: {
        emotional: 6,
        physical: 7,
        intellectual: 5,
        overall: 5
      },
      advice: "Aries must be gentle; Pisces must be direct. Find balance between action and reflection. Protect the relationship from external chaos.",
      dateIdeas: ["Art museums", "Beach sunsets", "Music concerts", "Spa days", "Creative workshops"]
    }
  },
  // Continue with other signs...
  taurus: {
    aries: {
      score: 5,
      element: "Earth + Fire",
      summary: "Steady Bull meets Charging Ram. Taurus wants security; Aries wants adventure. Growth through differences but requires patience.",
      love: {
        strengths: [
          "Strong physical attraction",
          "Taurus grounds impulsive Aries",
          "Aries energizes steady Taurus",
          "Both passionate in their own ways",
          "Can build solid foundation together"
        ],
        challenges: [
          "Speed mismatch - Aries rushes, Taurus lingers",
          "Spending habits clash (Aries impulsive, Taurus careful)",
          "Stubbornness meets impatience",
          "Taurus needs routine; Aries needs variety",
          "Different life paces cause friction"
        ]
      },
      compatibility: {
        emotional: 4,
        physical: 7,
        intellectual: 5,
        overall: 5
      },
      advice: "Meet in the middle - Taurus try new things, Aries slow down. Financial planning is essential. Appreciate stability AND excitement.",
      dateIdeas: ["Cooking at home then going out", "Garden centers", "Quality restaurants", "Short weekend trips", "Sensory experiences"]
    },
    taurus: {
      score: 7,
      element: "Earth + Earth",
      summary: "Double luxury! Two bulls building a beautiful life together. Stable, sensual, stubborn. Comfortable but may lack excitement.",
      love: {
        strengths: [
          "Shared values and goals",
          "Both love comfort and luxury",
          "Strong loyalty and commitment",
          "Stable and predictable",
          "Excellent physical chemistry",
          "Build wealth together naturally"
        ],
        challenges: [
          "Double stubbornness - conflicts drag on",
          "May become too routine/boring",
          "Both resist change",
          "Can enable each other's indulgences",
          "Need push from outside to grow"
        ]
      },
      compatibility: {
        emotional: 7,
        physical: 9,
        intellectual: 6,
        overall: 7
      },
      advice: "Push each other out of comfort zones occasionally. Don't let stubbornness ruin good things. Stay financially disciplined together.",
      dateIdeas: ["Wine tasting", "Gourmet cooking", "Luxury spas", "Antique shopping", "Garden parties"]
    },
    gemini: {
      score: 4,
      element: "Earth + Air",
      summary: "Stable meets scattered. Taurus seeks security; Gemini seeks variety. Can work if both appreciate differences. Requires flexibility.",
      love: {
        strengths: [
          "Gemini brings fun and variety",
          "Taurus provides grounding",
          "Both enjoy good conversation",
          "Taurus appreciates Gemini's wit",
          "Can learn from different perspectives"
        ],
        challenges: [
          "Taurus needs consistency; Gemini needs change",
          "Gemini's flightiness frustrates steady Taurus",
          "Different social needs",
          "Gemini talks; Taurus acts",
          "Trust issues (Taurus jealous of Gemini's social nature)"
        ]
      },
      compatibility: {
        emotional: 4,
        physical: 6,
        intellectual: 7,
        overall: 4
      },
      advice: "Taurus should embrace flexibility; Gemini should appreciate stability. Create routine that includes variety. Communicate openly about needs.",
      dateIdeas: ["Book clubs", "Casual cafes", "Art galleries", "Weekend markets", "Conversation-focused activities"]
    },
    cancer: {
      score: 9,
      element: "Earth + Water",
      summary: "Perfect nurturing pair! Earth holds water. Both value home, family, security. Natural compatibility. Comfortable, loving bond.",
      love: {
        strengths: [
          "Both prioritize home and family",
          "Emotional and physical security",
          "Cancer nurtures; Taurus provides",
          "Deep loyalty and commitment",
          "Shared traditional values",
          "Comfortable silence together"
        ],
        challenges: [
          "May become too insular",
          "Both can be overly cautious",
          "Cancer's moods vs Taurus' stubbornness",
          "May avoid necessary changes",
          "Can enable each other's fears"
        ]
      },
      compatibility: {
        emotional: 9,
        physical: 8,
        intellectual: 7,
        overall: 9
      },
      advice: "Encourage each other to take calculated risks. Don't isolate from the world. Balance security with growth. Perfect domestic partnership.",
      dateIdeas: ["Home cooking together", "Farmers markets", "Cozy movie nights", "Beach walks", "Antique shopping"]
    },
    leo: {
      score: 5,
      element: "Earth + Fire",
      summary: "Fixed signs lock horns! Taurus practical; Leo dramatic. Both stubborn. Can be powerful alliance or power struggle.",
      love: {
        strengths: [
          "Both loyal and committed",
          "Taurus appreciates Leo's warmth",
          "Leo values Taurus' steadiness",
          "Build impressive life together",
          "Strong physical attraction"
        ],
        challenges: [
          "Both extremely stubborn",
          "Spending conflicts (Leo lavish, Taurus careful)",
          "Leo needs attention; Taurus is reserved",
          "Different social needs",
          "Pride battles"
        ]
      },
      compatibility: {
        emotional: 6,
        physical: 8,
        intellectual: 6,
        overall: 5
      },
      advice: "Compromise on finances and social life. Leo tone down drama; Taurus give Leo attention. Respect each other's strengths.",
      dateIdeas: ["Upscale restaurants", "Theater shows", "Luxury hotels", "Sunset dinners", "VIP experiences"]
    },
    virgo: {
      score: 9,
      element: "Earth + Earth",
      summary: "Practical perfection! Both earth signs value stability, hard work, routine. Excellent compatibility. Build solid life together.",
      love: {
        strengths: [
          "Shared practical values",
          "Both appreciate routine and reliability",
          "Virgo organizes; Taurus builds",
          "Mutual respect and loyalty",
          "Financial compatibility",
          "Comfortable, stable partnership"
        ],
        challenges: [
          "May lack spontaneity",
          "Virgo criticizes; Taurus resists",
          "Can become too routine",
          "Both can be materialistic",
          "Need to remember romance"
        ]
      },
      compatibility: {
        emotional: 8,
        physical: 8,
        intellectual: 8,
        overall: 9
      },
      advice: "Inject fun and spontaneity into the relationship. Virgo ease up on criticism; Taurus be more flexible. Great long-term match.",
      dateIdeas: ["Farmers markets", "Cooking classes", "Organization projects", "Nature walks", "Quality dining"]
    },
    libra: {
      score: 6,
      element: "Earth + Air",
      summary: "Both ruled by Venus! Share love of beauty, art, comfort. Different approaches but same appreciation for finer things.",
      love: {
        strengths: [
          "Both love beauty and harmony",
          "Shared aesthetic values",
          "Venus-ruled romance",
          "Taurus provides stability; Libra provides balance",
          "Appreciate each other's refined tastes"
        ],
        challenges: [
          "Taurus too possessive for social Libra",
          "Libra too indecisive for determined Taurus",
          "Different paces in relationships",
          "Libra's socializing vs Taurus' home preference",
          "Stubbornness vs people-pleasing"
        ]
      },
      compatibility: {
        emotional: 6,
        physical: 8,
        intellectual: 7,
        overall: 6
      },
      advice: "Balance social life with home time. Taurus allow Libra social freedom; Libra give Taurus security. Enjoy beauty together.",
      dateIdeas: ["Art exhibitions", "Elegant dining", "Garden tours", "Music concerts", "Stylish cafes"]
    },
    scorpio: {
      score: 8,
      element: "Earth + Water",
      summary: "Intense and loyal! Earth contains water. Both value loyalty, depth, commitment. Powerful emotional and physical bond.",
      love: {
        strengths: [
          "Deep loyalty and commitment",
          "Intense physical chemistry",
          "Both value security and loyalty",
          "Scorpio's depth meets Taurus' stability",
          "Build strong foundation together",
          "Mutual possessiveness works here"
        ],
        challenges: [
          "Both extremely jealous and possessive",
          "Stubbornness (fixed signs)",
          "Power struggles over control",
          "Scorpio's intensity vs Taurus' calm",
          "Neither backs down easily"
        ]
      },
      compatibility: {
        emotional: 8,
        physical: 10,
        intellectual: 7,
        overall: 8
      },
      advice: "Channel intensity positively. Trust is essential - work through jealousy together. Powerful bond when mature. Respect each other's need for control.",
      dateIdeas: ["Intimate dinners", "Spa weekends", "Private getaways", "Wine tasting", "Mystery activities"]
    },
    sagittarius: {
      score: 4,
      element: "Earth + Fire",
      summary: "Wanderer meets homebody. Sagittarius explores; Taurus stays put. Freedom vs security. Challenging but can grow from differences.",
      love: {
        strengths: [
          "Sagittarius brings adventure",
          "Taurus provides grounding",
          "Both honest and direct",
          "Can balance each other",
          "Learn from different perspectives"
        ],
        challenges: [
          "Fundamental lifestyle differences",
          "Sagittarius needs freedom; Taurus needs commitment",
          "Different spending habits",
          "Travel vs stability priorities",
          "Restlessness vs contentment clash"
        ]
      },
      compatibility: {
        emotional: 4,
        physical: 6,
        intellectual: 5,
        overall: 4
      },
      advice: "Compromise on travel and home time. Taurus be more adventurous; Sagittarius provide stability. Respect different needs for security.",
      dateIdeas: ["Day trips", "Cultural events", "Educational experiences", "Outdoor dining", "Local exploration"]
    },
    capricorn: {
      score: 9,
      element: "Earth + Earth",
      summary: "Power couple! Both ambitious, practical, loyal. Build empire together. Excellent long-term compatibility. Traditional values aligned.",
      love: {
        strengths: [
          "Shared ambition and work ethic",
          "Both value security and stability",
          "Traditional relationship values",
          "Financial compatibility",
          "Long-term vision alignment",
          "Mutual respect and loyalty"
        ],
        challenges: [
          "May prioritize work over romance",
          "Both can be materialistic",
          "Lack spontaneity and fun",
          "Stubborn (Taurus) meets rigid (Capricorn)",
          "Need to remember to enjoy life"
        ]
      },
      compatibility: {
        emotional: 7,
        physical: 8,
        intellectual: 8,
        overall: 9
      },
      advice: "Schedule fun and romance deliberately. Don't become all work. Capricorn lighten up; Taurus inject pleasure. Excellent partnership potential.",
      dateIdeas: ["Business dinners", "Upscale events", "Financial planning", "Mountain resorts", "Career networking"]
    },
    aquarius: {
      score: 4,
      element: "Earth + Air",
      summary: "Traditional meets unconventional. Taurus wants predictability; Aquarius wants revolution. Opposite approaches to life. Requires major adjustment.",
      love: {
        strengths: [
          "Both are fixed signs - loyal when committed",
          "Taurus grounds eccentric Aquarius",
          "Aquarius brings new perspectives",
          "Can learn much from differences",
          "Potential for growth"
        ],
        challenges: [
          "Fundamental value differences",
          "Taurus conventional; Aquarius rebellious",
          "Different social needs",
          "Aquarius detached; Taurus affectionate",
          "Struggle to understand each other's motivations"
        ]
      },
      compatibility: {
        emotional: 3,
        physical: 5,
        intellectual: 6,
        overall: 4
      },
      advice: "Accept that you see the world differently. Taurus be open to new ideas; Aquarius appreciate stability. Find common humanitarian goals.",
      dateIdeas: ["Tech exhibitions", "Social causes", "Unusual experiences", "Group activities", "Innovation showcases"]
    },
    pisces: {
      score: 8,
      element: "Earth + Water",
      summary: "Dreamy and grounded! Earth gives water form. Taurus provides structure for Pisces' dreams. Nurturing, romantic, compatible.",
      love: {
        strengths: [
          "Taurus grounds Pisces' dreams",
          "Pisces softens Taurus' rigidity",
          "Both romantic and affectionate",
          "Emotional and sensual connection",
          "Taurus protects; Pisces inspires",
          "Create beautiful life together"
        ],
        challenges: [
          "Pisces too dreamy for practical Taurus",
          "Taurus too rigid for fluid Pisces",
          "Different approaches to reality",
          "Pisces' escapism vs Taurus' realism",
          "Need to balance fantasy with practicality"
        ]
      },
      compatibility: {
        emotional: 8,
        physical: 9,
        intellectual: 6,
        overall: 8
      },
      advice: "Taurus support Pisces' dreams practically. Pisces help Taurus imagine bigger. Balance fantasy with reality. Very romantic match.",
      dateIdeas: ["Art galleries", "Beachside dinners", "Music festivals", "Spa days", "Creative workshops"]
    }
  },
  
  gemini: {
    aries: {
      score: 8,
      element: "Air + Fire",
      summary: "Fire needs air! Dynamic duo with endless conversation and adventure. Aries provides action, Gemini provides ideas.",
      love: {
        strengths: [
          "Mental stimulation keeps both engaged",
          "Shared love of novelty and adventure",
          "Great communication and understanding",
          "Both value independence",
          "Fun, playful, spontaneous together"
        ],
        challenges: [
          "Both impulsive - who makes plans?",
          "Gemini's indecisiveness frustrates Aries",
          "May lack emotional depth",
          "Both avoid commitment initially",
          "Can be superficial without intention"
        ]
      },
      compatibility: {
        emotional: 6,
        physical: 8,
        intellectual: 9,
        overall: 8
      },
      advice: "Build emotional intimacy alongside intellectual connection. Aries give Gemini space; Gemini appreciate Aries' directness.",
      dateIdeas: ["Comedy shows", "Travel adventures", "Book clubs", "Trivia nights", "Learning together"]
    },
    taurus: {
      score: 4,
      element: "Air + Earth",
      summary: "Scattered meets stable. Gemini seeks variety; Taurus seeks security. Requires major flexibility from both.",
      love: {
        strengths: [
          "Gemini brings fun and variety",
          "Taurus provides grounding",
          "Both enjoy conversation",
          "Taurus appreciates Gemini's wit",
          "Can learn from differences"
        ],
        challenges: [
          "Taurus needs consistency; Gemini needs change",
          "Gemini's flightiness frustrates Taurus",
          "Different social needs",
          "Communication vs action mismatch",
          "Trust issues from Taurus"
        ]
      },
      compatibility: {
        emotional: 4,
        physical: 6,
        intellectual: 7,
        overall: 4
      },
      advice: "Taurus embrace flexibility; Gemini provide reassurance. Create routine with variety built in.",
      dateIdeas: ["Casual cafes", "Book readings", "Art walks", "Market browsing", "Conversation dates"]
    },
    gemini: {
      score: 6,
      element: "Air + Air",
      summary: "Double the chatter! Two butterflies flitting together. Exciting but may lack grounding. Need external stability.",
      love: {
        strengths: [
          "Endless conversation and ideas",
          "Shared intellectual interests",
          "Both adaptable and flexible",
          "Social and fun together",
          "Understand each other's need for variety"
        ],
        challenges: [
          "Who makes decisions?",
          "Both scattered - nothing gets done",
          "May lack emotional depth",
          "Can be too much in your head",
          "Need grounding from outside"
        ]
      },
      compatibility: {
        emotional: 5,
        physical: 7,
        intellectual: 10,
        overall: 6
      },
      advice: "Ground your relationship with routines. Take turns making decisions. Develop emotional depth intentionally.",
      dateIdeas: ["Intellectual debates", "Multiple activities", "Social events", "Quick trips", "Brain games"]
    },
    cancer: {
      score: 5,
      element: "Air + Water",
      summary: "Head meets heart. Gemini thinks; Cancer feels. Can complement or confuse. Requires conscious bridging.",
      love: {
        strengths: [
          "Gemini lightens Cancer's moods",
          "Cancer grounds Gemini emotionally",
          "Both nurturing in different ways",
          "Gemini entertains; Cancer cares",
          "Can teach each other"
        ],
        challenges: [
          "Gemini detached; Cancer emotional",
          "Different communication styles",
          "Cancer needs security; Gemini needs freedom",
          "Gemini's social nature threatens Cancer",
          "Mood swings vs inconsistency"
        ]
      },
      compatibility: {
        emotional: 5,
        physical: 6,
        intellectual: 7,
        overall: 5
      },
      advice: "Gemini reassure Cancer consistently. Cancer give Gemini space. Find balance between social and home life.",
      dateIdeas: ["Home gatherings", "Cooking together", "Movie nights", "Beach walks", "Storytelling"]
    },
    leo: {
      score: 8,
      element: "Air + Fire",
      summary: "Air fans flames! Gemini's wit meets Leo's warmth. Fun, social, exciting. Great friendship and partnership.",
      love: {
        strengths: [
          "Both social and outgoing",
          "Gemini amuses; Leo entertains",
          "Shared love of fun and excitement",
          "Great communication",
          "Playful and affectionate"
        ],
        challenges: [
          "Leo needs attention; Gemini distracted",
          "Gemini's flirtiness may threaten Leo",
          "Leo dramatic; Gemini detached",
          "Both need admiration",
          "May lack depth if not careful"
        ]
      },
      compatibility: {
        emotional: 7,
        physical: 8,
        intellectual: 9,
        overall: 8
      },
      advice: "Gemini give Leo focused attention. Leo let Gemini socialize. Enjoy being the life of the party together.",
      dateIdeas: ["Theater", "Parties", "Social events", "Creative projects", "Entertainment venues"]
    },
    virgo: {
      score: 6,
      element: "Air + Earth",
      summary: "Both Mercury-ruled! Mental connection strong. Virgo analyzes; Gemini explores. Can work with mutual respect.",
      love: {
        strengths: [
          "Both intellectual and communicative",
          "Mercury ruling creates understanding",
          "Gemini inspires; Virgo refines",
          "Good conversation partners",
          "Can solve problems together"
        ],
        challenges: [
          "Virgo criticizes; Gemini deflects",
          "Different organizational styles",
          "Gemini scattered; Virgo precise",
          "Virgo's worry vs Gemini's lightness",
          "May intellectualize emotions"
        ]
      },
      compatibility: {
        emotional: 6,
        physical: 6,
        intellectual: 9,
        overall: 6
      },
      advice: "Virgo ease criticism; Gemini be more focused. Appreciate different approaches to thinking. Build emotional expression.",
      dateIdeas: ["Learning activities", "Health-focused outings", "Bookstores", "Organized adventures", "Problem-solving games"]
    },
    libra: {
      score: 9,
      element: "Air + Air",
      summary: "Air harmony! Both social, intellectual, charming. Natural compatibility. Fun, balanced, communicative partnership.",
      love: {
        strengths: [
          "Effortless communication",
          "Shared social interests",
          "Both intellectual and curious",
          "Libra balances; Gemini entertains",
          "Natural harmony and understanding"
        ],
        challenges: [
          "Both indecisive",
          "May avoid conflict too much",
          "Can be superficial",
          "Both need external push",
          "May lack grounding"
        ]
      },
      compatibility: {
        emotional: 7,
        physical: 8,
        intellectual: 10,
        overall: 9
      },
      advice: "Make decisions together consciously. Develop emotional depth. Balance social life with intimacy. Excellent match overall.",
      dateIdeas: ["Art galleries", "Social gatherings", "Cultural events", "Elegant dining", "Intellectual discussions"]
    },
    scorpio: {
      score: 4,
      element: "Air + Water",
      summary: "Light meets deep. Gemini surfaces; Scorpio dives. Intense attraction but fundamental differences. Challenging.",
      love: {
        strengths: [
          "Initial fascination and mystery",
          "Gemini lightens Scorpio's intensity",
          "Scorpio adds depth to Gemini",
          "Both intelligent in different ways",
          "Can learn much from each other"
        ],
        challenges: [
          "Trust issues - Scorpio possessive, Gemini free",
          "Gemini flighty; Scorpio intense",
          "Different emotional needs",
          "Scorpio secretive; Gemini open",
          "Jealousy vs need for freedom"
        ]
      },
      compatibility: {
        emotional: 3,
        physical: 7,
        intellectual: 6,
        overall: 4
      },
      advice: "Scorpio allow freedom; Gemini provide loyalty. Build trust slowly. This pairing requires major work and maturity.",
      dateIdeas: ["Mystery activities", "Deep conversations", "Intimate settings", "Private adventures", "Psychological movies"]
    },
    sagittarius: {
      score: 8,
      element: "Air + Fire",
      summary: "Freedom lovers unite! Both adventurous, optimistic, curious. Great travel companions. Natural compatibility.",
      love: {
        strengths: [
          "Shared love of freedom and adventure",
          "Both optimistic and fun",
          "Intellectual and philosophical",
          "Great friends and lovers",
          "Respect each other's space"
        ],
        challenges: [
          "Both avoid commitment",
          "May lack emotional depth",
          "Too much freedom = disconnection",
          "Who keeps things practical?",
          "Can be restless together"
        ]
      },
      compatibility: {
        emotional: 6,
        physical: 8,
        intellectual: 9,
        overall: 8
      },
      advice: "Build home base while exploring. Make intentional time for depth. Commit to growth together. Very compatible.",
      dateIdeas: ["Travel", "Outdoor adventures", "Philosophy discussions", "Learning experiences", "Cultural exploration"]
    },
    capricorn: {
      score: 3,
      element: "Air + Earth",
      summary: "Grasshopper meets ant. Gemini plays; Capricorn works. Fundamental lifestyle differences. Very challenging.",
      love: {
        strengths: [
          "Gemini lightens Capricorn up",
          "Capricorn provides structure",
          "Different perspectives can teach",
          "Complementary skills",
          "Potential for balance"
        ],
        challenges: [
          "Completely different priorities",
          "Capricorn serious; Gemini playful",
          "Work vs play conflict",
          "Different social needs",
          "May not understand each other"
        ]
      },
      compatibility: {
        emotional: 3,
        physical: 4,
        intellectual: 6,
        overall: 3
      },
      advice: "Major compromise needed. Capricorn lighten up; Gemini get serious sometimes. Respect very different worldviews.",
      dateIdeas: ["Business networking", "Structured learning", "Goal-oriented activities", "Mixed work-play", "Strategic games"]
    },
    aquarius: {
      score: 9,
      element: "Air + Air",
      summary: "Intellectual soulmates! Both unique, independent, curious. Mental connection extraordinary. Excellent compatibility.",
      love: {
        strengths: [
          "Brilliant mental connection",
          "Both value independence",
          "Shared humanitarian interests",
          "Neither clingy or jealous",
          "Innovative and exciting together"
        ],
        challenges: [
          "May lack emotional intimacy",
          "Both detached from feelings",
          "Can be too cerebral",
          "Need to work on romance",
          "May disconnect without realizing"
        ]
      },
      compatibility: {
        emotional: 6,
        physical: 7,
        intellectual: 10,
        overall: 9
      },
      advice: "Build emotional connection intentionally. Make romance a priority. Perfect mental match - nurture other dimensions.",
      dateIdeas: ["Tech events", "Social causes", "Innovation shows", "Group activities", "Unconventional experiences"]
    },
    pisces: {
      score: 5,
      element: "Air + Water",
      summary: "Thinker meets dreamer. Gemini rationalizes; Pisces imagines. Can inspire or confuse. Mutable flexibility helps.",
      love: {
        strengths: [
          "Both adaptable and flexible",
          "Gemini grounds Pisces' dreams",
          "Pisces softens Gemini's edges",
          "Creative and imaginative together",
          "Can flow with changes"
        ],
        challenges: [
          "Gemini logical; Pisces emotional",
          "Different realities",
          "Pisces needs reassurance; Gemini distracted",
          "Communication challenges",
          "May drift apart without anchoring"
        ]
      },
      compatibility: {
        emotional: 5,
        physical: 6,
        intellectual: 7,
        overall: 5
      },
      advice: "Gemini be more present emotionally. Pisces communicate clearly. Find balance between head and heart.",
      dateIdeas: ["Art museums", "Music venues", "Creative workshops", "Spiritual events", "Imaginative activities"]
    }
  },
  
  cancer: {
    aries: {
      score: 4,
      element: "Water + Fire",
      summary: "Fire evaporates water. Emotional Cancer needs security; independent Aries needs freedom. Cardinal signs clash.",
      love: {
        strengths: [
          "Aries protects; Cancer nurtures",
          "Cancer teaches emotional depth",
          "Aries encourages risk-taking",
          "Both initiators (Cardinal signs)",
          "Passionate in different ways"
        ],
        challenges: [
          "Cancer needs reassurance; Aries needs space",
          "Aries' bluntness hurts Cancer",
          "Different emotional languages",
          "Cancer clings; Aries bolts",
          "Home vs adventure priorities"
        ]
      },
      compatibility: {
        emotional: 4,
        physical: 6,
        intellectual: 5,
        overall: 4
      },
      advice: "Aries develop sensitivity; Cancer allow independence. Major emotional work required for this pairing.",
      dateIdeas: ["Home-cooked dinners", "Beach walks", "Family events", "Movie nights", "Cozy activities"]
    },
    taurus: {
      score: 9,
      element: "Water + Earth",
      summary: "Perfect nurturing pair! Earth holds water. Both value home, family, security. Natural compatibility.",
      love: {
        strengths: [
          "Both prioritize home and family",
          "Emotional and financial security",
          "Cancer nurtures; Taurus provides",
          "Deep loyalty and commitment",
          "Traditional values aligned",
          "Comfortable silence together"
        ],
        challenges: [
          "May become too insular",
          "Both overly cautious",
          "Cancer's moods vs Taurus stubbornness",
          "Avoid necessary changes",
          "Can enable each other's fears"
        ]
      },
      compatibility: {
        emotional: 9,
        physical: 8,
        intellectual: 7,
        overall: 9
      },
      advice: "Encourage calculated risks. Don't isolate. Balance security with growth. Excellent domestic partnership.",
      dateIdeas: ["Home cooking", "Farmers markets", "Movie nights", "Beach walks", "Antique shopping"]
    },
    gemini: {
      score: 5,
      element: "Water + Air",
      summary: "Heart meets head. Cancer feels; Gemini thinks. Can complement or confuse. Conscious bridging needed.",
      love: {
        strengths: [
          "Gemini lightens Cancer's moods",
          "Cancer grounds Gemini emotionally",
          "Nurturing in different ways",
          "Gemini entertains; Cancer cares",
          "Learn from each other"
        ],
        challenges: [
          "Cancer emotional; Gemini detached",
          "Different communication styles",
          "Cancer needs security; Gemini needs freedom",
          "Gemini's social nature threatens Cancer",
          "Mood vs inconsistency"
        ]
      },
      compatibility: {
        emotional: 5,
        physical: 6,
        intellectual: 7,
        overall: 5
      },
      advice: "Gemini provide reassurance. Cancer give space. Balance social and home life carefully.",
      dateIdeas: ["Home gatherings", "Cooking together", "Movie nights", "Beach walks", "Storytelling"]
    },
    cancer: {
      score: 7,
      element: "Water + Water",
      summary: "Double nurturing! Two crabs building fortress together. Deeply emotional. May drown in feelings without grounding.",
      love: {
        strengths: [
          "Deep emotional understanding",
          "Both prioritize home and family",
          "Intuitive connection",
          "Nurture each other beautifully",
          "Shared values and goals",
          "Safe, comfortable bond"
        ],
        challenges: [
          "Double moodiness",
          "May enable each other's insecurities",
          "Can become too isolated",
          "Both passive-aggressive",
          "Need external perspective"
        ]
      },
      compatibility: {
        emotional: 9,
        physical: 8,
        intellectual: 6,
        overall: 7
      },
      advice: "Stay connected to outside world. Manage moods actively. Don't enable fears. Create safe but not isolated space.",
      dateIdeas: ["Home activities", "Family gatherings", "Emotional movies", "Cozy restaurants", "Water activities"]
    },
    leo: {
      score: 5,
      element: "Water + Fire",
      summary: "Moon meets Sun. Cancer nurtures; Leo shines. Can work if Leo provides warmth, Cancer provides support.",
      love: {
        strengths: [
          "Leo warms Cancer's heart",
          "Cancer makes Leo feel cherished",
          "Both loyal and devoted",
          "Cancer supports Leo's dreams",
          "Leo protects Cancer"
        ],
        challenges: [
          "Leo needs attention; Cancer needs security",
          "Different emotional expression",
          "Leo loud; Cancer quiet",
          "Cancer's moods vs Leo's pride",
          "Home vs social life balance"
        ]
      },
      compatibility: {
        emotional: 6,
        physical: 7,
        intellectual: 5,
        overall: 5
      },
      advice: "Leo be more sensitive. Cancer be more expressive. Find balance between spotlight and sanctuary.",
      dateIdeas: ["Upscale home dinners", "Theater then home", "Family celebrations", "Cozy luxury", "Protected adventures"]
    },
    virgo: {
      score: 8,
      element: "Water + Earth",
      summary: "Nurturing meets helping. Both caring, devoted, practical. Can build beautiful life together. Very compatible.",
      love: {
        strengths: [
          "Both nurturing and caring",
          "Shared practical values",
          "Virgo organizes; Cancer nurtures",
          "Deep mutual respect",
          "Create stable home together",
          "Devoted partnership"
        ],
        challenges: [
          "Virgo criticizes; Cancer takes personally",
          "Both worry too much",
          "Can become routine",
          "Need to express affection more",
          "May enable each other's anxieties"
        ]
      },
      compatibility: {
        emotional: 8,
        physical: 7,
        intellectual: 7,
        overall: 8
      },
      advice: "Virgo soften criticism. Cancer don't take things personally. Balance practicality with romance. Strong match.",
      dateIdeas: ["Health-focused activities", "Home improvement", "Nature walks", "Farmers markets", "Cooking classes"]
    },
    libra: {
      score: 4,
      element: "Water + Air",
      summary: "Emotional meets intellectual. Cancer feels deeply; Libra thinks things through. Requires work to bridge.",
      love: {
        strengths: [
          "Libra brings harmony",
          "Cancer brings depth",
          "Both value relationships",
          "Cancer devoted; Libra fair",
          "Can balance each other"
        ],
        challenges: [
          "Cancer emotional; Libra logical",
          "Different social needs",
          "Cancer moody; Libra balanced",
          "Home vs social priorities",
          "Libra's indecision frustrates Cancer"
        ]
      },
      compatibility: {
        emotional: 4,
        physical: 6,
        intellectual: 6,
        overall: 4
      },
      advice: "Libra engage emotionally. Cancer allow social time. Major communication work needed.",
      dateIdeas: ["Art at home", "Balanced activities", "Cultural events", "Intimate gatherings", "Beauty experiences"]
    },
    scorpio: {
      score: 9,
      element: "Water + Water",
      summary: "Deep waters! Both emotional, loyal, intuitive. Intense bond. One of best water sign pairings. Powerful connection.",
      love: {
        strengths: [
          "Deep emotional connection",
          "Intuitive understanding",
          "Both loyal and protective",
          "Intense physical chemistry",
          "Shared need for security",
          "Transform each other"
        ],
        challenges: [
          "Double intensity",
          "Jealousy and possessiveness",
          "Both hold grudges",
          "Can drown in emotions",
          "Need external grounding"
        ]
      },
      compatibility: {
        emotional: 10,
        physical: 9,
        intellectual: 7,
        overall: 9
      },
      advice: "Channel intensity positively. Work through jealousy together. Create safe space for deep emotions. Excellent match.",
      dateIdeas: ["Intimate dinners", "Private getaways", "Deep conversations", "Water activities", "Mystery experiences"]
    },
    sagittarius: {
      score: 4,
      element: "Water + Fire",
      summary: "Homebody meets wanderer. Cancer nests; Sagittarius explores. Fundamental lifestyle clash. Very challenging.",
      love: {
        strengths: [
          "Sagittarius brings adventure",
          "Cancer provides grounding",
          "Both honest (differently)",
          "Can learn from differences",
          "Potential for growth"
        ],
        challenges: [
          "Cancer needs security; Sagittarius needs freedom",
          "Home vs travel priorities",
          "Emotional vs philosophical",
          "Sagittarius blunt; Cancer sensitive",
          "Completely different lifestyles"
        ]
      },
      compatibility: {
        emotional: 3,
        physical: 5,
        intellectual: 5,
        overall: 4
      },
      advice: "Major compromise essential. Cancer allow adventures. Sagittarius provide stability. Very difficult pairing.",
      dateIdeas: ["Short trips from home", "Cultural experiences", "Learning together", "Balanced activities", "Family adventures"]
    },
    capricorn: {
      score: 9,
      element: "Water + Earth",
      summary: "Opposite signs that attract! Both value security, family, tradition. Complementary strengths. Excellent long-term match.",
      love: {
        strengths: [
          "Both value security and stability",
          "Cancer nurtures; Capricorn provides",
          "Traditional relationship values",
          "Build strong foundation",
          "Mutual respect and loyalty",
          "Complement each other perfectly"
        ],
        challenges: [
          "Capricorn emotionally reserved",
          "Cancer may need more affection",
          "Work-life balance issues",
          "Both can be pessimistic",
          "Need to lighten up together"
        ]
      },
      compatibility: {
        emotional: 8,
        physical: 8,
        intellectual: 7,
        overall: 9
      },
      advice: "Capricorn express emotions more. Cancer support ambitions. Balance work and home. Natural compatibility.",
      dateIdeas: ["Quality home time", "Traditional dates", "Family events", "Goal-setting", "Building together"]
    },
    aquarius: {
      score: 3,
      element: "Water + Air",
      summary: "Emotional meets detached. Cancer feels; Aquarius thinks. Opposite needs and approaches. Very difficult.",
      love: {
        strengths: [
          "Cancer humanizes Aquarius",
          "Aquarius broadens Cancer's perspective",
          "Both caring (differently)",
          "Potential for growth",
          "Can learn from contrast"
        ],
        challenges: [
          "Cancer emotional; Aquarius detached",
          "Different intimacy needs",
          "Home vs social priorities",
          "Cancer clingy; Aquarius distant",
          "Rarely understand each other"
        ]
      },
      compatibility: {
        emotional: 2,
        physical: 4,
        intellectual: 5,
        overall: 3
      },
      advice: "Aquarius engage emotionally. Cancer allow freedom. This pairing requires exceptional maturity and work.",
      dateIdeas: ["Humanitarian work", "Group activities", "Innovative experiences", "Balanced social-home", "Unique dates"]
    },
    pisces: {
      score: 9,
      element: "Water + Water",
      summary: "Dreamy waters! Both emotional, intuitive, compassionate. Deep understanding. Romantic, nurturing bond. Beautiful match.",
      love: {
        strengths: [
          "Deep emotional connection",
          "Intuitive understanding",
          "Both romantic and caring",
          "Cancer grounds; Pisces inspires",
          "Create magical world together",
          "Unconditional love and acceptance"
        ],
        challenges: [
          "Both overly emotional",
          "May avoid reality together",
          "Need practical grounding",
          "Can enable escape tendencies",
          "Both passive-aggressive"
        ]
      },
      compatibility: {
        emotional: 10,
        physical: 9,
        intellectual: 6,
        overall: 9
      },
      advice: "Stay grounded in reality. Balance dreams with practicality. Protect each other but don't isolate. Excellent match.",
      dateIdeas: ["Beach sunsets", "Art galleries", "Music venues", "Spiritual retreats", "Creative activities"]
    }
  },
  
  leo: {
    aries: {
      score: 9,
      element: "Fire + Fire",
      summary: "Fire meets fire! Two natural leaders create passionate, dynamic partnership. Best fire sign pairing. Royal romance.",
      love: {
        strengths: [
          "Mutual admiration and respect",
          "Shared enthusiasm for life",
          "Great chemistry and passion",
          "Love adventure and excitement",
          "Natural cheerleaders for each other"
        ],
        challenges: [
          "Both need to be the star",
          "Competitive for attention",
          "Must share spotlight",
          "Both stubborn about being right",
          "Dramatic conflicts"
        ]
      },
      compatibility: {
        emotional: 8,
        physical: 10,
        intellectual: 8,
        overall: 9
      },
      advice: "Take turns in spotlight. Aries respect Leo's need for admiration; Leo respect Aries' need to lead. Excellent match.",
      dateIdeas: ["Theater", "Fine dining", "Dance clubs", "Luxury travel", "Red carpet events"]
    },
    taurus: {
      score: 5,
      element: "Fire + Earth",
      summary: "Fixed signs lock horns! Leo dramatic; Taurus practical. Both stubborn. Can be powerful or power struggle.",
      love: {
        strengths: [
          "Both loyal and committed",
          "Taurus appreciates Leo's warmth",
          "Leo values Taurus' steadiness",
          "Build impressive life",
          "Strong attraction"
        ],
        challenges: [
          "Both extremely stubborn",
          "Spending conflicts (Leo lavish, Taurus careful)",
          "Leo needs attention; Taurus reserved",
          "Different social needs",
          "Pride battles"
        ]
      },
      compatibility: {
        emotional: 6,
        physical: 8,
        intellectual: 6,
        overall: 5
      },
      advice: "Compromise on finances and social life. Leo tone down drama; Taurus give attention.",
      dateIdeas: ["Upscale restaurants", "Theater", "Luxury hotels", "Sunset dinners", "VIP experiences"]
    },
    gemini: {
      score: 8,
      element: "Fire + Air",
      summary: "Air fans flames! Leo's warmth meets Gemini's wit. Fun, social, exciting. Great friendship and romance.",
      love: {
        strengths: [
          "Both social and outgoing",
          "Leo entertains; Gemini amuses",
          "Shared love of fun",
          "Great communication",
          "Playful and affectionate"
        ],
        challenges: [
          "Leo needs attention; Gemini distracted",
          "Gemini's flirtiness threatens Leo",
          "Leo dramatic; Gemini detached",
          "Both need admiration",
          "May lack depth"
        ]
      },
      compatibility: {
        emotional: 7,
        physical: 8,
        intellectual: 9,
        overall: 8
      },
      advice: "Gemini give Leo focused attention. Leo let Gemini socialize. Perfect party couple.",
      dateIdeas: ["Theater", "Parties", "Social events", "Creative projects", "Entertainment"]
    },
    cancer: {
      score: 5,
      element: "Fire + Water",
      summary: "Sun meets Moon. Leo shines; Cancer nurtures. Can work if Leo provides warmth, Cancer provides support.",
      love: {
        strengths: [
          "Leo warms Cancer's heart",
          "Cancer cherishes Leo",
          "Both loyal and devoted",
          "Cancer supports Leo's dreams",
          "Leo protects Cancer"
        ],
        challenges: [
          "Leo needs attention; Cancer needs security",
          "Different emotional expression",
          "Leo loud; Cancer quiet",
          "Cancer's moods vs Leo's pride",
          "Home vs social balance"
        ]
      },
      compatibility: {
        emotional: 6,
        physical: 7,
        intellectual: 5,
        overall: 5
      },
      advice: "Leo be sensitive. Cancer be expressive. Balance spotlight and sanctuary.",
      dateIdeas: ["Upscale home dinners", "Theater then home", "Family celebrations", "Cozy luxury", "Protected adventures"]
    },
    leo: {
      score: 7,
      element: "Fire + Fire",
      summary: "Double royalty! Two lions ruling together. Dramatic, passionate, loyal. Can be amazing or exhausting.",
      love: {
        strengths: [
          "Understand each other's need for admiration",
          "Both loyal and generous",
          "Shared love of luxury",
          "Passionate and affectionate",
          "Create royal life together"
        ],
        challenges: [
          "Both want to be king/queen",
          "Who gets the spotlight?",
          "Double drama and pride",
          "Can be exhausting",
          "Need audience beyond each other"
        ]
      },
      compatibility: {
        emotional: 8,
        physical: 9,
        intellectual: 7,
        overall: 7
      },
      advice: "Share spotlight equally. Support each other's shine. Remember you're on same team.",
      dateIdeas: ["Luxury experiences", "Theater", "Fine dining", "Grand gestures", "VIP events"]
    },
    virgo: {
      score: 4,
      element: "Fire + Earth",
      summary: "Showman meets critic. Leo performs; Virgo analyzes. Very different approaches. Challenging but can learn.",
      love: {
        strengths: [
          "Leo inspires Virgo",
          "Virgo helps Leo improve",
          "Both dedicated when committed",
          "Can complement each other",
          "Virgo appreciates Leo's warmth"
        ],
        challenges: [
          "Virgo criticizes; Leo's ego hurt",
          "Leo dramatic; Virgo practical",
          "Different values",
          "Leo needs praise; Virgo critiques",
          "May not appreciate each other"
        ]
      },
      compatibility: {
        emotional: 4,
        physical: 6,
        intellectual: 6,
        overall: 4
      },
      advice: "Virgo offer praise. Leo accept feedback. Respect very different approaches to life.",
      dateIdeas: ["Service projects", "Quality events", "Organized activities", "Meaningful experiences", "Balanced outings"]
    },
    libra: {
      score: 8,
      element: "Fire + Air",
      summary: "Glamorous pair! Both love beauty, socializing, romance. Natural harmony. Fun, balanced, admired couple.",
      love: {
        strengths: [
          "Both love socializing and beauty",
          "Leo provides passion; Libra provides balance",
          "Romantic and affectionate",
          "Great communication",
          "Create beautiful life together"
        ],
        challenges: [
          "Libra's indecision frustrates Leo",
          "Leo too dominating for Libra",
          "Both need admiration",
          "Can be superficial",
          "Need depth beyond appearances"
        ]
      },
      compatibility: {
        emotional: 7,
        physical: 9,
        intellectual: 8,
        overall: 8
      },
      advice: "Libra be more decisive. Leo allow Libra's input. Build depth alongside beauty. Strong match.",
      dateIdeas: ["Art galleries", "Fine dining", "Social events", "Cultural experiences", "Romantic getaways"]
    },
    scorpio: {
      score: 5,
      element: "Fire + Water",
      summary: "Fixed intensity! Both powerful, passionate, stubborn. Magnetic attraction but power struggles. Volatile.",
      love: {
        strengths: [
          "Intense mutual attraction",
          "Both passionate and loyal",
          "Powerful chemistry",
          "Neither backs down",
          "Transform each other"
        ],
        challenges: [
          "Power struggles guaranteed",
          "Leo open; Scorpio secretive",
          "Jealousy issues",
          "Both want control",
          "Fixed signs = stubborn"
        ]
      },
      compatibility: {
        emotional: 7,
        physical: 10,
        intellectual: 6,
        overall: 5
      },
      advice: "Share power equally. Leo be vulnerable. Scorpio express openly. Channel intensity positively.",
      dateIdeas: ["Intimate luxury", "Mystery experiences", "Private adventures", "Intense activities", "Power couple events"]
    },
    sagittarius: {
      score: 9,
      element: "Fire + Fire",
      summary: "Adventure duo! Both optimistic, enthusiastic, fun-loving. Great compatibility. Exciting, loyal partnership.",
      love: {
        strengths: [
          "Shared optimism and adventure",
          "Both generous and warm",
          "Great sense of humor",
          "Loyal and honest",
          "Fun, exciting life together"
        ],
        challenges: [
          "Leo needs more attention than Sag gives",
          "Sagittarius blunt; Leo sensitive",
          "Both can be self-centered",
          "Need balance between adventure and home",
          "May lack grounding"
        ]
      },
      compatibility: {
        emotional: 8,
        physical: 9,
        intellectual: 8,
        overall: 9
      },
      advice: "Sagittarius give Leo attention. Leo allow Sagittarius freedom. Balance adventure with romance. Excellent match.",
      dateIdeas: ["Travel", "Outdoor adventures", "Sports events", "Cultural experiences", "Grand adventures"]
    },
    capricorn: {
      score: 4,
      element: "Fire + Earth",
      summary: "Star meets CEO. Leo performs; Capricorn works. Different priorities and values. Challenging combination.",
      love: {
        strengths: [
          "Both ambitious",
          "Leo brings warmth; Capricorn brings structure",
          "Can build impressive empire",
          "Mutual respect for success",
          "Complement when mature"
        ],
        challenges: [
          "Leo wants fun; Capricorn wants work",
          "Different values and priorities",
          "Leo dramatic; Capricorn reserved",
          "Capricorn's pessimism dims Leo's light",
          "May not understand each other"
        ]
      },
      compatibility: {
        emotional: 4,
        physical: 6,
        intellectual: 6,
        overall: 4
      },
      advice: "Capricorn lighten up. Leo get serious sometimes. Find middle ground between play and work.",
      dateIdeas: ["Business dinners", "Upscale events", "Success celebrations", "Strategic outings", "Power couple activities"]
    },
    aquarius: {
      score: 8,
      element: "Fire + Air",
      summary: "Opposite signs attract! Leo personal; Aquarius universal. Both fixed and loyal. Can be magical combination.",
      love: {
        strengths: [
          "Complementary opposites",
          "Both loyal and idealistic",
          "Leo warms; Aquarius enlightens",
          "Exciting and unique",
          "Great friendship foundation"
        ],
        challenges: [
          "Leo needs attention; Aquarius detached",
          "Leo dramatic; Aquarius cool",
          "Different emotional needs",
          "Leo personal; Aquarius impersonal",
          "Can feel like different worlds"
        ]
      },
      compatibility: {
        emotional: 6,
        physical: 8,
        intellectual: 9,
        overall: 8
      },
      advice: "Aquarius be more personal. Leo appreciate Aquarius' uniqueness. Balance warmth and coolness.",
      dateIdeas: ["Unique events", "Social causes", "Cultural experiences", "Innovation shows", "Unconventional dates"]
    },
    pisces: {
      score: 5,
      element: "Fire + Water",
      summary: "King meets mystic. Leo rules; Pisces dreams. Different worlds that can inspire or confuse each other.",
      love: {
        strengths: [
          "Leo protects sensitive Pisces",
          "Pisces inspires Leo's creativity",
          "Both romantic",
          "Leo provides confidence; Pisces provides compassion",
          "Can create magic together"
        ],
        challenges: [
          "Leo too demanding for Pisces",
          "Pisces too passive for Leo",
          "Different realities",
          "Leo needs admiration; Pisces needs understanding",
          "Communication challenges"
        ]
      },
      compatibility: {
        emotional: 6,
        physical: 7,
        intellectual: 5,
        overall: 5
      },
      advice: "Leo be gentle. Pisces be direct. Balance strength and sensitivity. Requires patience.",
      dateIdeas: ["Romantic experiences", "Art events", "Music venues", "Luxury escapes", "Creative activities"]
    }
  },
  
  virgo: {
    aries: {
      score: 4,
      element: "Earth + Fire",
      summary: "Impulsive meets methodical. Aries acts; Virgo analyzes. Different approaches can teach or frustrate.",
      love: {
        strengths: [
          "Aries inspires Virgo to take risks",
          "Virgo helps Aries think through",
          "Both hardworking",
          "Virgo organizes Aries' energy",
          "Can learn from each other"
        ],
        challenges: [
          "Virgo criticizes; Aries rebels",
          "Different approaches to everything",
          "Aries finds Virgo too picky",
          "Virgo finds Aries too chaotic",
          "Virgo's caution frustrates Aries"
        ]
      },
      compatibility: {
        emotional: 5,
        physical: 6,
        intellectual: 6,
        overall: 4
      },
      advice: "Virgo ease criticism; Aries slow down and plan. Find middle ground.",
      dateIdeas: ["Fitness classes", "Volunteering", "Farmers markets", "DIY projects", "Health restaurants"]
    },
    taurus: {
      score: 9,
      element: "Earth + Earth",
      summary: "Practical perfection! Both earth signs value stability, hard work, routine. Build solid life together.",
      love: {
        strengths: [
          "Shared practical values",
          "Both appreciate routine",
          "Virgo organizes; Taurus builds",
          "Mutual respect and loyalty",
          "Financial compatibility",
          "Comfortable, stable partnership"
        ],
        challenges: [
          "May lack spontaneity",
          "Virgo criticizes; Taurus resists",
          "Can become too routine",
          "Both materialistic",
          "Need to remember romance"
        ]
      },
      compatibility: {
        emotional: 8,
        physical: 8,
        intellectual: 8,
        overall: 9
      },
      advice: "Inject fun and spontaneity. Virgo ease criticism; Taurus be flexible. Great long-term match.",
      dateIdeas: ["Farmers markets", "Cooking classes", "Organization projects", "Nature walks", "Quality dining"]
    },
    gemini: {
      score: 6,
      element: "Earth + Air",
      summary: "Both Mercury-ruled! Mental connection strong. Virgo analyzes; Gemini explores. Can work with respect.",
      love: {
        strengths: [
          "Both intellectual and communicative",
          "Mercury ruling creates understanding",
          "Gemini inspires; Virgo refines",
          "Good conversation",
          "Solve problems together"
        ],
        challenges: [
          "Virgo criticizes; Gemini deflects",
          "Different organizational styles",
          "Gemini scattered; Virgo precise",
          "Virgo worries; Gemini lightens",
          "May intellectualize emotions"
        ]
      },
      compatibility: {
        emotional: 6,
        physical: 6,
        intellectual: 9,
        overall: 6
      },
      advice: "Virgo ease criticism; Gemini be focused. Appreciate different thinking styles.",
      dateIdeas: ["Learning activities", "Health outings", "Bookstores", "Organized adventures", "Mind games"]
    },
    cancer: {
      score: 8,
      element: "Earth + Water",
      summary: "Nurturing meets helping. Both caring, devoted, practical. Beautiful life together. Very compatible.",
      love: {
        strengths: [
          "Both nurturing and caring",
          "Shared practical values",
          "Virgo organizes; Cancer nurtures",
          "Deep mutual respect",
          "Stable home together",
          "Devoted partnership"
        ],
        challenges: [
          "Virgo criticizes; Cancer takes personally",
          "Both worry too much",
          "Can become routine",
          "Need more affection expression",
          "May enable anxieties"
        ]
      },
      compatibility: {
        emotional: 8,
        physical: 7,
        intellectual: 7,
        overall: 8
      },
      advice: "Virgo soften criticism. Cancer don't personalize. Balance practicality with romance.",
      dateIdeas: ["Health activities", "Home improvement", "Nature walks", "Farmers markets", "Cooking classes"]
    },
    leo: {
      score: 4,
      element: "Earth + Fire",
      summary: "Critic meets showman. Virgo analyzes; Leo performs. Very different. Challenging but can learn.",
      love: {
        strengths: [
          "Virgo appreciates Leo's warmth",
          "Leo inspires Virgo",
          "Both dedicated",
          "Can complement",
          "Virgo helps Leo improve"
        ],
        challenges: [
          "Virgo criticizes; Leo's ego hurt",
          "Leo dramatic; Virgo practical",
          "Different values",
          "Leo needs praise; Virgo critiques",
          "May not appreciate each other"
        ]
      },
      compatibility: {
        emotional: 4,
        physical: 6,
        intellectual: 6,
        overall: 4
      },
      advice: "Virgo offer praise. Leo accept feedback. Respect different approaches.",
      dateIdeas: ["Service projects", "Quality events", "Organized activities", "Meaningful experiences", "Balanced outings"]
    },
    virgo: {
      score: 6,
      element: "Earth + Earth",
      summary: "Double analysis! Two perfectionists together. Practical and organized but may get stuck in details.",
      love: {
        strengths: [
          "Understand each other's standards",
          "Both practical and dedicated",
          "Shared values and goals",
          "Help each other improve",
          "Stable, reliable partnership"
        ],
        challenges: [
          "Double criticism",
          "Both overthink everything",
          "May nitpick each other",
          "Can be too routine",
          "Need to relax together"
        ]
      },
      compatibility: {
        emotional: 6,
        physical: 7,
        intellectual: 9,
        overall: 6
      },
      advice: "Ease up on criticism of each other. Relax and have fun. Don't overanalyze the relationship.",
      dateIdeas: ["Health activities", "Organization projects", "Learning together", "Nature walks", "Quality time"]
    },
    libra: {
      score: 7,
      element: "Earth + Air",
      summary: "Helper meets harmonizer. Both want to improve things. Virgo practical; Libra idealistic. Can balance nicely.",
      love: {
        strengths: [
          "Both want harmony and improvement",
          "Virgo provides practicality; Libra provides balance",
          "Appreciate beauty together",
          "Good communication",
          "Complement each other"
        ],
        challenges: [
          "Virgo criticizes; Libra avoids conflict",
          "Libra indecisive; Virgo impatient",
          "Different social needs",
          "Virgo practical; Libra idealistic",
          "May frustrate each other"
        ]
      },
      compatibility: {
        emotional: 7,
        physical: 7,
        intellectual: 8,
        overall: 7
      },
      advice: "Virgo be less critical. Libra be more decisive. Balance practicality and idealism.",
      dateIdeas: ["Art galleries", "Cultural events", "Quality dining", "Beauty experiences", "Balanced activities"]
    },
    scorpio: {
      score: 8,
      element: "Earth + Water",
      summary: "Deep and dedicated! Both intense, loyal, private. Earth contains water. Strong, transformative bond.",
      love: {
        strengths: [
          "Deep loyalty and commitment",
          "Both private and selective",
          "Virgo grounds; Scorpio deepens",
          "Shared dedication to goals",
          "Transform each other",
          "Strong foundation"
        ],
        challenges: [
          "Virgo analyzes; Scorpio feels",
          "Scorpio intense; Virgo reserved",
          "Different emotional expression",
          "Both can be critical",
          "May be too serious"
        ]
      },
      compatibility: {
        emotional: 8,
        physical: 8,
        intellectual: 9,
        overall: 8
      },
      advice: "Virgo open up emotionally. Scorpio appreciate Virgo's practicality. Strong pairing with work.",
      dateIdeas: ["Intimate dinners", "Mystery experiences", "Private getaways", "Depth activities", "Transformative events"]
    },
    sagittarius: {
      score: 4,
      element: "Earth + Fire",
      summary: "Planner meets wanderer. Virgo organizes; Sagittarius explores. Different lifestyles and values. Challenging.",
      love: {
        strengths: [
          "Sagittarius brings adventure",
          "Virgo provides grounding",
          "Both honest (differently)",
          "Can learn from differences",
          "Complement when mature"
        ],
        challenges: [
          "Virgo needs order; Sagittarius needs freedom",
          "Different lifestyles",
          "Sagittarius sloppy; Virgo neat",
          "Virgo worries; Sagittarius optimistic",
          "May frustrate each other"
        ]
      },
      compatibility: {
        emotional: 4,
        physical: 5,
        intellectual: 7,
        overall: 4
      },
      advice: "Virgo loosen up. Sagittarius be more responsible. Major compromise needed.",
      dateIdeas: ["Educational travel", "Organized adventures", "Learning experiences", "Balanced outings", "Structured exploration"]
    },
    capricorn: {
      score: 9,
      element: "Earth + Earth",
      summary: "Power duo! Both practical, ambitious, dedicated. Build empire together. Excellent compatibility.",
      love: {
        strengths: [
          "Shared work ethic and ambition",
          "Both practical and dedicated",
          "Virgo perfects; Capricorn achieves",
          "Financial compatibility",
          "Long-term vision alignment",
          "Mutual respect"
        ],
        challenges: [
          "May prioritize work over romance",
          "Both can be pessimistic",
          "Lack spontaneity",
          "Need to have fun",
          "Can be too serious"
        ]
      },
      compatibility: {
        emotional: 7,
        physical: 8,
        intellectual: 9,
        overall: 9
      },
      advice: "Schedule fun deliberately. Don't become all work. Remember romance. Excellent match.",
      dateIdeas: ["Business dinners", "Goal-setting", "Quality events", "Career development", "Strategic activities"]
    },
    aquarius: {
      score: 4,
      element: "Earth + Air",
      summary: "Traditional meets unconventional. Virgo practical; Aquarius visionary. Different worldviews. Challenging.",
      love: {
        strengths: [
          "Both intellectual",
          "Virgo grounds Aquarius' ideas",
          "Aquarius inspires Virgo",
          "Can learn from differences",
          "Humanitarian values may align"
        ],
        challenges: [
          "Virgo conventional; Aquarius rebellious",
          "Different priorities",
          "Aquarius detached; Virgo analytical",
          "May not understand each other",
          "Different approaches to life"
        ]
      },
      compatibility: {
        emotional: 4,
        physical: 5,
        intellectual: 7,
        overall: 4
      },
      advice: "Accept different worldviews. Virgo be open; Aquarius be practical sometimes.",
      dateIdeas: ["Tech events", "Social causes", "Innovative experiences", "Learning activities", "Unique outings"]
    },
    pisces: {
      score: 8,
      element: "Earth + Water",
      summary: "Opposite signs attract! Virgo practical; Pisces dreamy. Can beautifully complement with conscious effort.",
      love: {
        strengths: [
          "Virgo grounds Pisces' dreams",
          "Pisces softens Virgo's edges",
          "Complementary opposites",
          "Virgo heals; Pisces inspires",
          "Balance practicality and imagination",
          "Serve each other well"
        ],
        challenges: [
          "Virgo criticizes; Pisces takes personally",
          "Different realities",
          "Virgo logical; Pisces emotional",
          "May frustrate each other",
          "Need conscious bridging"
        ]
      },
      compatibility: {
        emotional: 8,
        physical: 8,
        intellectual: 6,
        overall: 8
      },
      advice: "Virgo be gentle. Pisces be clearer. Balance logic and emotion. Beautiful when it works.",
      dateIdeas: ["Art galleries", "Healing activities", "Music venues", "Spiritual events", "Creative projects"]
    }
  },
  
  libra: {
    aries: {
      score: 6,
      element: "Air + Fire",
      summary: "Opposite signs attract! Aries' directness meets Libra's diplomacy. Complement or clash. Balance is key.",
      love: {
        strengths: [
          "Aries brings decisiveness; Libra brings harmony",
          "Strong initial attraction",
          "Libra softens Aries; Aries energizes Libra",
          "Complementary energies",
          "Both love socializing"
        ],
        challenges: [
          "Aries too direct; Libra too indirect",
          "Aries decides fast; Libra weighs endlessly",
          "Different social styles",
          "Libra's peace vs Aries' action",
          "Opposite worlds"
        ]
      },
      compatibility: {
        emotional: 6,
        physical: 7,
        intellectual: 7,
        overall: 6
      },
      advice: "Aries practice patience. Libra be direct. Opposites complete each other.",
      dateIdeas: ["Art galleries", "Wine and paint", "Couples dancing", "Balanced activities", "Social gatherings"]
    },
    taurus: {
      score: 6,
      element: "Air + Earth",
      summary: "Both Venus-ruled! Share love of beauty, art, comfort. Different approaches but same appreciation for finer things.",
      love: {
        strengths: [
          "Both love beauty and harmony",
          "Shared aesthetic values",
          "Venus-ruled romance",
          "Taurus provides stability; Libra provides balance",
          "Appreciate refined tastes"
        ],
        challenges: [
          "Taurus too possessive for social Libra",
          "Libra too indecisive for Taurus",
          "Different paces",
          "Libra's socializing vs Taurus' home",
          "Stubbornness vs people-pleasing"
        ]
      },
      compatibility: {
        emotional: 6,
        physical: 8,
        intellectual: 7,
        overall: 6
      },
      advice: "Balance social and home time. Taurus allow freedom; Libra provide security.",
      dateIdeas: ["Art exhibitions", "Elegant dining", "Garden tours", "Music concerts", "Stylish cafes"]
    },
    gemini: {
      score: 9,
      element: "Air + Air",
      summary: "Air harmony! Both social, intellectual, charming. Natural compatibility. Fun, balanced, communicative.",
      love: {
        strengths: [
          "Effortless communication",
          "Shared social interests",
          "Both intellectual and curious",
          "Libra balances; Gemini entertains",
          "Natural harmony"
        ],
        challenges: [
          "Both indecisive",
          "May avoid conflict",
          "Can be superficial",
          "Both need external push",
          "May lack grounding"
        ]
      },
      compatibility: {
        emotional: 7,
        physical: 8,
        intellectual: 10,
        overall: 9
      },
      advice: "Make decisions consciously. Develop depth. Balance social with intimacy. Excellent match.",
      dateIdeas: ["Art galleries", "Social gatherings", "Cultural events", "Elegant dining", "Intellectual discussions"]
    },
    cancer: {
      score: 4,
      element: "Air + Water",
      summary: "Intellectual meets emotional. Libra thinks; Cancer feels. Requires work to bridge different natures.",
      love: {
        strengths: [
          "Libra brings harmony",
          "Cancer brings depth",
          "Both value relationships",
          "Cancer devoted; Libra fair",
          "Can balance"
        ],
        challenges: [
          "Cancer emotional; Libra logical",
          "Different social needs",
          "Cancer moody; Libra balanced",
          "Home vs social priorities",
          "Libra's indecision frustrates"
        ]
      },
      compatibility: {
        emotional: 4,
        physical: 6,
        intellectual: 6,
        overall: 4
      },
      advice: "Libra engage emotionally. Cancer allow social time. Major communication work needed.",
      dateIdeas: ["Art at home", "Balanced activities", "Cultural events", "Intimate gatherings", "Beauty experiences"]
    },
    leo: {
      score: 8,
      element: "Air + Fire",
      summary: "Glamorous pair! Both love beauty, socializing, romance. Natural harmony. Fun, balanced couple.",
      love: {
        strengths: [
          "Both love socializing and beauty",
          "Leo provides passion; Libra provides balance",
          "Romantic and affectionate",
          "Great communication",
          "Beautiful life together"
        ],
        challenges: [
          "Libra's indecision frustrates Leo",
          "Leo too dominating",
          "Both need admiration",
          "Can be superficial",
          "Need depth beyond appearances"
        ]
      },
      compatibility: {
        emotional: 7,
        physical: 9,
        intellectual: 8,
        overall: 8
      },
      advice: "Libra be decisive. Leo allow input. Build depth. Strong match.",
      dateIdeas: ["Art galleries", "Fine dining", "Social events", "Cultural experiences", "Romantic getaways"]
    },
    virgo: {
      score: 7,
      element: "Air + Earth",
      summary: "Helper meets harmonizer. Both improve things. Virgo practical; Libra idealistic. Can balance nicely.",
      love: {
        strengths: [
          "Both want harmony",
          "Virgo practical; Libra balanced",
          "Appreciate beauty",
          "Good communication",
          "Complement each other"
        ],
        challenges: [
          "Virgo criticizes; Libra avoids conflict",
          "Libra indecisive; Virgo impatient",
          "Different social needs",
          "Virgo practical; Libra idealistic",
          "May frustrate"
        ]
      },
      compatibility: {
        emotional: 7,
        physical: 7,
        intellectual: 8,
        overall: 7
      },
      advice: "Virgo be less critical. Libra be decisive. Balance practicality and idealism.",
      dateIdeas: ["Art galleries", "Cultural events", "Quality dining", "Beauty experiences", "Balanced activities"]
    },
    libra: {
      score: 7,
      element: "Air + Air",
      summary: "Double harmony! Two diplomats together. Beautiful, balanced, indecisive. Need external push.",
      love: {
        strengths: [
          "Understand each other completely",
          "Shared love of beauty and harmony",
          "Both diplomatic and fair",
          "Great communication",
          "Peaceful partnership"
        ],
        challenges: [
          "Double indecisiveness",
          "Who makes decisions?",
          "May avoid necessary conflict",
          "Can be too passive",
          "Need grounding"
        ]
      },
      compatibility: {
        emotional: 7,
        physical: 8,
        intellectual: 9,
        overall: 7
      },
      advice: "Practice making decisions. Address conflicts directly. Balance harmony with honesty.",
      dateIdeas: ["Art experiences", "Elegant dining", "Cultural events", "Social activities", "Beauty pursuits"]
    },
    scorpio: {
      score: 5,
      element: "Air + Water",
      summary: "Light meets intense. Libra surfaces; Scorpio dives. Attraction but fundamental differences. Challenging.",
      love: {
        strengths: [
          "Initial fascination",
          "Libra lightens Scorpio",
          "Scorpio deepens Libra",
          "Both loyal when committed",
          "Transform each other"
        ],
        challenges: [
          "Scorpio intense; Libra light",
          "Trust issues (Scorpio possessive)",
          "Libra social; Scorpio private",
          "Different emotional needs",
          "May not understand"
        ]
      },
      compatibility: {
        emotional: 5,
        physical: 7,
        intellectual: 6,
        overall: 5
      },
      advice: "Scorpio lighten up. Libra dive deeper. Meet in middle. Requires major work.",
      dateIdeas: ["Intimate settings", "Art galleries", "Deep conversations", "Mystery activities", "Balanced intensity"]
    },
    sagittarius: {
      score: 8,
      element: "Air + Fire",
      summary: "Fun and philosophical! Both social, optimistic, love adventure. Great compatibility. Natural partnership.",
      love: {
        strengths: [
          "Shared love of socializing",
          "Both optimistic and fun",
          "Intellectual connection",
          "Adventure together",
          "Great friendship"
        ],
        challenges: [
          "Both avoid commitment initially",
          "Libra needs more romance than Sag provides",
          "Sagittarius blunt; Libra diplomatic",
          "May lack grounding",
          "Both indecisive about commitment"
        ]
      },
      compatibility: {
        emotional: 7,
        physical: 8,
        intellectual: 9,
        overall: 8
      },
      advice: "Build commitment consciously. Balance adventure and romance. Excellent match.",
      dateIdeas: ["Travel", "Cultural events", "Philosophy discussions", "Outdoor activities", "Social adventures"]
    },
    capricorn: {
      score: 5,
      element: "Air + Earth",
      summary: "Social butterfly meets workaholic. Libra plays; Capricorn works. Different priorities. Challenging.",
      love: {
        strengths: [
          "Libra softens Capricorn",
          "Capricorn provides structure",
          "Both value success",
          "Complement when mature",
          "Balance each other"
        ],
        challenges: [
          "Libra social; Capricorn reserved",
          "Different priorities",
          "Capricorn serious; Libra light",
          "Work-life imbalance",
          "May not understand"
        ]
      },
      compatibility: {
        emotional: 5,
        physical: 6,
        intellectual: 7,
        overall: 5
      },
      advice: "Capricorn socialize more. Libra be serious sometimes. Compromise essential.",
      dateIdeas: ["Business social events", "Upscale dining", "Cultural activities", "Balanced work-play", "Quality time"]
    },
    aquarius: {
      score: 9,
      element: "Air + Air",
      summary: "Intellectual harmony! Both idealistic, social, humanitarian. Excellent compatibility. Perfect mental match.",
      love: {
        strengths: [
          "Brilliant intellectual connection",
          "Shared humanitarian values",
          "Both social and friendly",
          "Libra romantic; Aquarius interesting",
          "Natural understanding"
        ],
        challenges: [
          "May lack emotional depth",
          "Both detached from feelings",
          "Aquarius too unconventional for Libra",
          "Need to work on intimacy",
          "Can be too cerebral"
        ]
      },
      compatibility: {
        emotional: 7,
        physical: 8,
        intellectual: 10,
        overall: 9
      },
      advice: "Build emotional intimacy. Balance intellect with feeling. Excellent air sign match.",
      dateIdeas: ["Cultural events", "Social causes", "Intellectual discussions", "Group activities", "Innovation experiences"]
    },
    pisces: {
      score: 6,
      element: "Air + Water",
      summary: "Thinker meets dreamer. Libra rationalizes; Pisces feels. Can inspire or confuse. Requires bridging.",
      love: {
        strengths: [
          "Both romantic and idealistic",
          "Libra provides clarity; Pisces provides depth",
          "Artistic connection",
          "Both compassionate",
          "Can create beauty"
        ],
        challenges: [
          "Libra logical; Pisces emotional",
          "Different decision-making",
          "Pisces needs more depth than Libra provides",
          "May drift without anchoring",
          "Communication challenges"
        ]
      },
      compatibility: {
        emotional: 6,
        physical: 7,
        intellectual: 7,
        overall: 6
      },
      advice: "Libra engage emotionally. Pisces communicate clearly. Balance head and heart.",
      dateIdeas: ["Art galleries", "Music venues", "Romantic settings", "Creative activities", "Spiritual events"]
    }
  },
  
  scorpio: {
    aries: {
      score: 6,
      element: "Water + Fire",
      summary: "Intense! Both ruled by Mars. Passionate but in different ways. Powerful or volatile. Must channel intensity.",
      love: {
        strengths: [
          "Incredibly passionate",
          "Both fearless",
          "Mutual respect for strength",
          "Powerful chemistry",
          "Neither backs down"
        ],
        challenges: [
          "Power struggles guaranteed",
          "Aries open; Scorpio secretive",
          "Jealousy issues",
          "Both stubborn",
          "Scorpio's depth vs Aries' surface"
        ]
      },
      compatibility: {
        emotional: 7,
        physical: 9,
        intellectual: 6,
        overall: 6
      },
      advice: "Honesty crucial. Aries respect depth; Scorpio allow freedom. Channel intensity constructively.",
      dateIdeas: ["Mystery dinners", "Escape rooms", "Intense movies", "Deep conversations", "Adventure sports"]
    },
    taurus: {
      score: 8,
      element: "Water + Earth",
      summary: "Intense and loyal! Earth contains water. Both value loyalty, depth, commitment. Powerful bond.",
      love: {
        strengths: [
          "Deep loyalty",
          "Intense chemistry",
          "Both value security",
          "Scorpio's depth meets Taurus' stability",
          "Strong foundation",
          "Possessiveness works"
        ],
        challenges: [
          "Both jealous and possessive",
          "Stubbornness (fixed signs)",
          "Power struggles",
          "Scorpio's intensity vs Taurus' calm",
          "Neither backs down"
        ]
      },
      compatibility: {
        emotional: 8,
        physical: 10,
        intellectual: 7,
        overall: 8
      },
      advice: "Channel intensity positively. Trust essential. Powerful when mature.",
      dateIdeas: ["Intimate dinners", "Spa weekends", "Private getaways", "Wine tasting", "Mystery activities"]
    },
    gemini: {
      score: 4,
      element: "Water + Air",
      summary: "Deep meets light. Scorpio dives; Gemini surfaces. Intense attraction but fundamental differences.",
      love: {
        strengths: [
          "Initial fascination",
          "Gemini lightens Scorpio",
          "Scorpio deepens Gemini",
          "Both intelligent",
          "Can learn"
        ],
        challenges: [
          "Trust issues (Scorpio possessive, Gemini free)",
          "Gemini flighty; Scorpio intense",
          "Different emotional needs",
          "Scorpio secretive; Gemini open",
          "Jealousy vs freedom"
        ]
      },
      compatibility: {
        emotional: 3,
        physical: 7,
        intellectual: 6,
        overall: 4
      },
      advice: "Scorpio allow freedom; Gemini provide loyalty. Build trust slowly. Major work required.",
      dateIdeas: ["Mystery activities", "Deep conversations", "Intimate settings", "Private adventures", "Psychological movies"]
    },
    cancer: {
      score: 9,
      element: "Water + Water",
      summary: "Deep waters! Both emotional, loyal, intuitive. Intense bond. Best water sign pairing. Powerful connection.",
      love: {
        strengths: [
          "Deep emotional connection",
          "Intuitive understanding",
          "Both loyal and protective",
          "Intense chemistry",
          "Shared need for security",
          "Transform each other"
        ],
        challenges: [
          "Double intensity",
          "Jealousy and possessiveness",
          "Both hold grudges",
          "Can drown in emotions",
          "Need external grounding"
        ]
      },
      compatibility: {
        emotional: 10,
        physical: 9,
        intellectual: 7,
        overall: 9
      },
      advice: "Channel intensity positively. Work through jealousy. Create safe emotional space. Excellent match.",
      dateIdeas: ["Intimate dinners", "Private getaways", "Deep conversations", "Water activities", "Mystery experiences"]
    },
    leo: {
      score: 5,
      element: "Water + Fire",
      summary: "Fixed intensity! Both powerful, passionate, stubborn. Magnetic attraction but power struggles.",
      love: {
        strengths: [
          "Intense attraction",
          "Both passionate and loyal",
          "Powerful chemistry",
          "Neither backs down",
          "Transform each other"
        ],
        challenges: [
          "Power struggles",
          "Leo open; Scorpio secretive",
          "Jealousy issues",
          "Both want control",
          "Fixed signs = stubborn"
        ]
      },
      compatibility: {
        emotional: 7,
        physical: 10,
        intellectual: 6,
        overall: 5
      },
      advice: "Share power. Leo be vulnerable. Scorpio express openly. Channel intensity positively.",
      dateIdeas: ["Intimate luxury", "Mystery experiences", "Private adventures", "Intense activities", "Power couple events"]
    },
    virgo: {
      score: 8,
      element: "Water + Earth",
      summary: "Deep and dedicated! Both intense, loyal, private. Earth contains water. Strong transformative bond.",
      love: {
        strengths: [
          "Deep loyalty",
          "Both private and selective",
          "Virgo grounds; Scorpio deepens",
          "Shared dedication",
          "Transform each other",
          "Strong foundation"
        ],
        challenges: [
          "Virgo analyzes; Scorpio feels",
          "Scorpio intense; Virgo reserved",
          "Different emotional expression",
          "Both can be critical",
          "May be too serious"
        ]
      },
      compatibility: {
        emotional: 8,
        physical: 8,
        intellectual: 9,
        overall: 8
      },
      advice: "Virgo open emotionally. Scorpio appreciate practicality. Strong pairing with work.",
      dateIdeas: ["Intimate dinners", "Mystery experiences", "Private getaways", "Depth activities", "Transformative events"]
    },
    libra: {
      score: 5,
      element: "Water + Air",
      summary: "Intense meets light. Scorpio dives; Libra surfaces. Attraction but fundamental differences.",
      love: {
        strengths: [
          "Initial fascination",
          "Libra lightens Scorpio",
          "Scorpio deepens Libra",
          "Both loyal when committed",
          "Transform each other"
        ],
        challenges: [
          "Scorpio intense; Libra light",
          "Trust issues",
          "Libra social; Scorpio private",
          "Different emotional needs",
          "May not understand"
        ]
      },
      compatibility: {
        emotional: 5,
        physical: 7,
        intellectual: 6,
        overall: 5
      },
      advice: "Scorpio lighten up. Libra dive deeper. Meet in middle. Major work required.",
      dateIdeas: ["Intimate settings", "Art galleries", "Deep conversations", "Mystery activities", "Balanced intensity"]
    },
    scorpio: {
      score: 8,
      element: "Water + Water",
      summary: "Double intensity! Two scorpions together. Powerful, passionate, transformative. Can be incredible or destructive.",
      love: {
        strengths: [
          "Understand each other's intensity",
          "Deep emotional connection",
          "Passionate and loyal",
          "Transform together",
          "Powerful bond"
        ],
        challenges: [
          "Double jealousy and possessiveness",
          "Power struggles",
          "Both secretive",
          "Can drown in intensity",
          "Need external perspective"
        ]
      },
      compatibility: {
        emotional: 9,
        physical: 10,
        intellectual: 8,
        overall: 8
      },
      advice: "Channel intensity into growth. Work through jealousy. Create healthy boundaries. Powerful match.",
      dateIdeas: ["Private experiences", "Deep exploration", "Transformative activities", "Mystery adventures", "Intense connection"]
    },
    sagittarius: {
      score: 4,
      element: "Water + Fire",
      summary: "Deep meets free. Scorpio intense; Sagittarius light. Different emotional needs. Very challenging.",
      love: {
        strengths: [
          "Sagittarius lightens Scorpio",
          "Scorpio deepens Sagittarius",
          "Both honest (differently)",
          "Passionate",
          "Can learn"
        ],
        challenges: [
          "Scorpio needs depth; Sagittarius needs freedom",
          "Jealousy vs independence",
          "Scorpio intense; Sagittarius casual",
          "Different priorities",
          "Rarely understand each other"
        ]
      },
      compatibility: {
        emotional: 3,
        physical: 7,
        intellectual: 6,
        overall: 4
      },
      advice: "Scorpio allow freedom. Sagittarius provide depth. Major compromise needed. Very difficult.",
      dateIdeas: ["Adventure with depth", "Philosophical discussions", "Travel experiences", "Intense activities", "Balanced exploration"]
    },
    capricorn: {
      score: 9,
      element: "Water + Earth",
      summary: "Power duo! Both ambitious, dedicated, loyal. Scorpio's intensity meets Capricorn's discipline. Excellent match.",
      love: {
        strengths: [
          "Shared ambition and dedication",
          "Both loyal and committed",
          "Scorpio provides passion; Capricorn provides structure",
          "Build empire together",
          "Deep mutual respect",
          "Transform and achieve together"
        ],
        challenges: [
          "Both can be controlling",
          "Work-obsessed together",
          "May lack lightness",
          "Both pessimistic",
          "Need to have fun"
        ]
      },
      compatibility: {
        emotional: 8,
        physical: 9,
        intellectual: 8,
        overall: 9
      },
      advice: "Balance work and intimacy. Lighten up together. Channel intensity into goals. Excellent match.",
      dateIdeas: ["Power dinners", "Strategic planning", "Private luxury", "Goal achievement", "Transformative experiences"]
    },
    aquarius: {
      score: 3,
      element: "Water + Air",
      summary: "Intense meets detached. Scorpio emotional; Aquarius logical. Opposite approaches. Very difficult.",
      love: {
        strengths: [
          "Both loyal when committed",
          "Scorpio humanizes Aquarius",
          "Aquarius broadens Scorpio",
          "Can transform each other",
          "Potential for growth"
        ],
        challenges: [
          "Scorpio emotional; Aquarius detached",
          "Jealousy vs freedom",
          "Scorpio private; Aquarius social",
          "Rarely understand each other",
          "Fundamental differences"
        ]
      },
      compatibility: {
        emotional: 2,
        physical: 5,
        intellectual: 6,
        overall: 3
      },
      advice: "Accept different worldviews. Scorpio detach; Aquarius engage. Exceptional maturity required.",
      dateIdeas: ["Unique experiences", "Intellectual depth", "Social causes", "Innovative activities", "Balanced intensity"]
    },
    pisces: {
      score: 9,
      element: "Water + Water",
      summary: "Mystical waters! Both emotional, intuitive, deep. Scorpio protects; Pisces inspires. Transformative bond.",
      love: {
        strengths: [
          "Deep emotional understanding",
          "Intuitive connection",
          "Scorpio protects; Pisces softens",
          "Both spiritual and deep",
          "Transform each other",
          "Unconditional acceptance"
        ],
        challenges: [
          "Both overly emotional",
          "May escape reality together",
          "Scorpio controlling; Pisces passive",
          "Can enable negative patterns",
          "Need grounding"
        ]
      },
      compatibility: {
        emotional: 10,
        physical: 9,
        intellectual: 7,
        overall: 9
      },
      advice: "Stay grounded. Balance intensity with lightness. Protect but don't isolate. Excellent match.",
      dateIdeas: ["Spiritual retreats", "Water activities", "Art experiences", "Deep exploration", "Mystical events"]
    }
  },
  
  sagittarius: {
    aries: {
      score: 8,
      element: "Fire + Fire",
      summary: "Adventurous spirits unite! Both love freedom, exploration, optimism. Natural travel buddies. Exciting partnership.",
      love: {
        strengths: [
          "Shared love of adventure and travel",
          "Mutual respect for freedom",
          "Optimistic and fun-loving",
          "Great friends and lovers",
          "Both honest and direct"
        ],
        challenges: [
          "Both restless - commitment issues",
          "Who plans? Both prefer spontaneity",
          "May lack emotional depth",
          "Too much freedom = disconnection",
          "Both need excitement - mundane life suffers"
        ]
      },
      compatibility: {
        emotional: 7,
        physical: 9,
        intellectual: 8,
        overall: 8
      },
      advice: "Build home base while exploring together. Make time for both adventure and intimacy. Commit to growth.",
      dateIdeas: ["Travel planning", "Hiking expeditions", "Road trips", "Outdoor concerts", "Learning new sports"]
    },
    taurus: {
      score: 4,
      element: "Fire + Earth",
      summary: "Wanderer meets homebody. Sagittarius explores; Taurus nests. Different priorities and lifestyles. Challenging.",
      love: {
        strengths: [
          "Sagittarius brings adventure",
          "Taurus provides stability",
          "Both honest",
          "Can learn from differences",
          "Taurus grounds Sagittarius' dreams"
        ],
        challenges: [
          "Taurus needs security; Sagittarius needs freedom",
          "Home vs travel priorities",
          "Taurus possessive; Sagittarius independent",
          "Different lifestyles",
          "May frustrate each other"
        ]
      },
      compatibility: {
        emotional: 4,
        physical: 6,
        intellectual: 6,
        overall: 4
      },
      advice: "Major compromise needed. Taurus allow adventures. Sagittarius appreciate home. Very challenging.",
      dateIdeas: ["Short trips", "Outdoor dining", "Cultural events", "Nature activities", "Balanced outings"]
    },
    gemini: {
      score: 8,
      element: "Fire + Air",
      summary: "Freedom lovers unite! Both adventurous, optimistic, curious. Great travel companions. Natural compatibility.",
      love: {
        strengths: [
          "Shared love of freedom and adventure",
          "Both optimistic and fun",
          "Intellectual and philosophical",
          "Great friends and lovers",
          "Respect each other's space"
        ],
        challenges: [
          "Both avoid commitment",
          "May lack emotional depth",
          "Too much freedom = disconnection",
          "Who keeps things practical?",
          "Can be restless together"
        ]
      },
      compatibility: {
        emotional: 6,
        physical: 8,
        intellectual: 9,
        overall: 8
      },
      advice: "Build home base while exploring. Make time for depth. Commit to growth together. Very compatible.",
      dateIdeas: ["Travel", "Outdoor adventures", "Philosophy discussions", "Learning experiences", "Cultural exploration"]
    },
    cancer: {
      score: 4,
      element: "Fire + Water",
      summary: "Wanderer meets homebody. Sagittarius explores; Cancer nests. Fundamental lifestyle clash. Very challenging.",
      love: {
        strengths: [
          "Sagittarius brings adventure",
          "Cancer provides grounding",
          "Both honest (differently)",
          "Can learn from differences",
          "Potential for growth"
        ],
        challenges: [
          "Cancer needs security; Sagittarius needs freedom",
          "Home vs travel priorities",
          "Emotional vs philosophical",
          "Sagittarius blunt; Cancer sensitive",
          "Completely different lifestyles"
        ]
      },
      compatibility: {
        emotional: 3,
        physical: 5,
        intellectual: 5,
        overall: 4
      },
      advice: "Major compromise essential. Cancer allow adventures. Sagittarius provide stability. Very difficult pairing.",
      dateIdeas: ["Short trips from home", "Cultural experiences", "Learning together", "Balanced activities", "Family adventures"]
    },
    leo: {
      score: 9,
      element: "Fire + Fire",
      summary: "Adventure duo! Both optimistic, enthusiastic, fun-loving. Great compatibility. Exciting, loyal partnership.",
      love: {
        strengths: [
          "Shared optimism and adventure",
          "Both generous and warm",
          "Great sense of humor",
          "Loyal and honest",
          "Fun, exciting life together"
        ],
        challenges: [
          "Leo needs more attention than Sag gives",
          "Sagittarius blunt; Leo sensitive",
          "Both can be self-centered",
          "Balance adventure and home",
          "May lack grounding"
        ]
      },
      compatibility: {
        emotional: 8,
        physical: 9,
        intellectual: 8,
        overall: 9
      },
      advice: "Sagittarius give Leo attention. Leo allow Sagittarius freedom. Balance adventure with romance. Excellent.",
      dateIdeas: ["Travel", "Outdoor adventures", "Sports events", "Cultural experiences", "Grand adventures"]
    },
    virgo: {
      score: 4,
      element: "Fire + Earth",
      summary: "Wanderer meets planner. Sagittarius explores; Virgo organizes. Different lifestyles and values. Challenging.",
      love: {
        strengths: [
          "Sagittarius brings adventure",
          "Virgo provides grounding",
          "Both honest (differently)",
          "Can learn from differences",
          "Complement when mature"
        ],
        challenges: [
          "Virgo needs order; Sagittarius needs freedom",
          "Different lifestyles",
          "Sagittarius sloppy; Virgo neat",
          "Virgo worries; Sagittarius optimistic",
          "May frustrate each other"
        ]
      },
      compatibility: {
        emotional: 4,
        physical: 5,
        intellectual: 7,
        overall: 4
      },
      advice: "Virgo loosen up. Sagittarius be responsible. Major compromise needed.",
      dateIdeas: ["Educational travel", "Organized adventures", "Learning experiences", "Balanced outings", "Structured exploration"]
    },
    libra: {
      score: 8,
      element: "Fire + Air",
      summary: "Fun and philosophical! Both social, optimistic, love adventure. Great compatibility. Natural partnership.",
      love: {
        strengths: [
          "Shared love of socializing",
          "Both optimistic and fun",
          "Intellectual connection",
          "Adventure together",
          "Great friendship"
        ],
        challenges: [
          "Both avoid commitment initially",
          "Libra needs more romance",
          "Sagittarius blunt; Libra diplomatic",
          "May lack grounding",
          "Both indecisive about commitment"
        ]
      },
      compatibility: {
        emotional: 7,
        physical: 8,
        intellectual: 9,
        overall: 8
      },
      advice: "Build commitment consciously. Balance adventure and romance. Excellent match.",
      dateIdeas: ["Travel", "Cultural events", "Philosophy discussions", "Outdoor activities", "Social adventures"]
    },
    scorpio: {
      score: 4,
      element: "Fire + Water",
      summary: "Free meets deep. Sagittarius light; Scorpio intense. Different emotional needs. Very challenging.",
      love: {
        strengths: [
          "Sagittarius lightens Scorpio",
          "Scorpio deepens Sagittarius",
          "Both honest (differently)",
          "Passionate",
          "Can learn"
        ],
        challenges: [
          "Scorpio needs depth; Sagittarius needs freedom",
          "Jealousy vs independence",
          "Scorpio intense; Sagittarius casual",
          "Different priorities",
          "Rarely understand each other"
        ]
      },
      compatibility: {
        emotional: 3,
        physical: 7,
        intellectual: 6,
        overall: 4
      },
      advice: "Scorpio allow freedom. Sagittarius provide depth. Major compromise needed. Very difficult.",
      dateIdeas: ["Adventure with depth", "Philosophical discussions", "Travel experiences", "Intense activities", "Balanced exploration"]
    },
    sagittarius: {
      score: 7,
      element: "Fire + Fire",
      summary: "Double adventure! Two explorers together. Exciting but may lack grounding. Need external stability.",
      love: {
        strengths: [
          "Understand each other's need for freedom",
          "Shared love of travel and adventure",
          "Optimistic and fun",
          "Great travel partners",
          "Respect independence"
        ],
        challenges: [
          "Both avoid commitment",
          "Who handles practicalities?",
          "May lack emotional depth",
          "Too much freedom = disconnection",
          "Need grounding from outside"
        ]
      },
      compatibility: {
        emotional: 6,
        physical: 8,
        intellectual: 9,
        overall: 7
      },
      advice: "Build home base together. Make time for depth. Balance freedom with connection. Create structure.",
      dateIdeas: ["World travel", "Adventure sports", "Philosophy discussions", "Cultural immersion", "Outdoor expeditions"]
    },
    capricorn: {
      score: 5,
      element: "Fire + Earth",
      summary: "Free spirit meets workaholic. Sagittarius plays; Capricorn works. Different priorities. Challenging.",
      love: {
        strengths: [
          "Sagittarius lightens Capricorn",
          "Capricorn grounds Sagittarius",
          "Both ambitious (differently)",
          "Can balance each other",
          "Complement when mature"
        ],
        challenges: [
          "Sagittarius needs freedom; Capricorn needs structure",
          "Play vs work priorities",
          "Different lifestyles",
          "Sagittarius optimistic; Capricorn pessimistic",
          "May not understand each other"
        ]
      },
      compatibility: {
        emotional: 5,
        physical: 6,
        intellectual: 7,
        overall: 5
      },
      advice: "Capricorn have more fun. Sagittarius be more responsible. Meet in middle. Requires work.",
      dateIdeas: ["Business travel", "Outdoor activities", "Educational experiences", "Balanced work-play", "Strategic adventures"]
    },
    aquarius: {
      score: 9,
      element: "Fire + Air",
      summary: "Freedom and vision! Both independent, idealistic, adventurous. Excellent compatibility. Exciting partnership.",
      love: {
        strengths: [
          "Shared love of freedom",
          "Both idealistic and humanitarian",
          "Intellectual connection",
          "Respect independence",
          "Adventure and innovation together"
        ],
        challenges: [
          "May lack emotional intimacy",
          "Both detached from feelings",
          "Can be too cerebral",
          "Need to work on romance",
          "May disconnect without realizing"
        ]
      },
      compatibility: {
        emotional: 6,
        physical: 8,
        intellectual: 10,
        overall: 9
      },
      advice: "Build emotional connection intentionally. Balance intellect with feeling. Excellent air-fire match.",
      dateIdeas: ["Innovation events", "Social causes", "Adventure travel", "Intellectual exploration", "Unique experiences"]
    },
    pisces: {
      score: 5,
      element: "Fire + Water",
      summary: "Adventurer meets dreamer. Sagittarius explores outer world; Pisces explores inner world. Different approaches.",
      love: {
        strengths: [
          "Both adaptable and flexible",
          "Sagittarius inspires Pisces to adventure",
          "Pisces adds depth to Sagittarius",
          "Both idealistic",
          "Can grow together"
        ],
        challenges: [
          "Sagittarius blunt; Pisces sensitive",
          "Different realities",
          "Sagittarius needs freedom; Pisces needs connection",
          "May drift apart",
          "Communication challenges"
        ]
      },
      compatibility: {
        emotional: 5,
        physical: 6,
        intellectual: 7,
        overall: 5
      },
      advice: "Sagittarius be gentle. Pisces be direct. Balance freedom with intimacy. Requires conscious work.",
      dateIdeas: ["Spiritual travel", "Art and nature", "Music festivals", "Beach adventures", "Creative exploration"]
    }
  },
  
  capricorn: {
    aries: {
      score: 4,
      element: "Earth + Fire",
      summary: "Pioneer meets planner. Aries leaps; Capricorn climbs methodically. Can work with maturity. Respect essential.",
      love: {
        strengths: [
          "Both ambitious in different ways",
          "Aries inspires; Capricorn stabilizes",
          "Both natural leaders",
          "Can build empire together",
          "Passionate when committed"
        ],
        challenges: [
          "Aries impulsive; Capricorn cautious",
          "Different approaches to everything",
          "Aries needs now; Capricorn plans",
          "Both want control",
          "Cardinal signs = power struggles"
        ]
      },
      compatibility: {
        emotional: 5,
        physical: 7,
        intellectual: 6,
        overall: 4
      },
      advice: "Aries slow down. Capricorn lighten up. Respect different leadership styles. Requires major compromise.",
      dateIdeas: ["Business dinners", "Achievement celebrations", "Strategic activities", "Power couple events", "Goal-oriented outings"]
    },
    taurus: {
      score: 9,
      element: "Earth + Earth",
      summary: "Solid foundation! Both earth signs value stability, tradition, hard work. Build empire together. Excellent match.",
      love: {
        strengths: [
          "Shared practical values",
          "Both ambitious and hardworking",
          "Taurus sensual; Capricorn dedicated",
          "Financial compatibility",
          "Traditional values aligned",
          "Long-term vision"
        ],
        challenges: [
          "Both stubborn",
          "May prioritize work over romance",
          "Can be too serious",
          "Lack spontaneity",
          "Both pessimistic at times"
        ]
      },
      compatibility: {
        emotional: 7,
        physical: 9,
        intellectual: 8,
        overall: 9
      },
      advice: "Schedule fun deliberately. Don't become all work. Remember romance. Excellent long-term match.",
      dateIdeas: ["Upscale dining", "Business events", "Real estate touring", "Investment planning", "Quality experiences"]
    },
    gemini: {
      score: 3,
      element: "Earth + Air",
      summary: "Ant meets grasshopper. Capricorn works; Gemini plays. Fundamental lifestyle differences. Very challenging.",
      love: {
        strengths: [
          "Gemini lightens Capricorn up",
          "Capricorn provides structure",
          "Different perspectives teach",
          "Complementary skills",
          "Potential for balance"
        ],
        challenges: [
          "Completely different priorities",
          "Capricorn serious; Gemini playful",
          "Work vs play conflict",
          "Different social needs",
          "May not understand each other"
        ]
      },
      compatibility: {
        emotional: 3,
        physical: 4,
        intellectual: 6,
        overall: 3
      },
      advice: "Major compromise needed. Capricorn lighten up; Gemini get serious. Respect very different worldviews.",
      dateIdeas: ["Business networking", "Structured learning", "Goal-oriented activities", "Mixed work-play", "Strategic games"]
    },
    cancer: {
      score: 9,
      element: "Earth + Water",
      summary: "Opposite signs attract! Both value security, family, tradition. Complementary strengths. Excellent long-term.",
      love: {
        strengths: [
          "Both value security and stability",
          "Cancer nurtures; Capricorn provides",
          "Traditional relationship values",
          "Build strong foundation",
          "Mutual respect and loyalty",
          "Perfect complement"
        ],
        challenges: [
          "Capricorn emotionally reserved",
          "Cancer may need more affection",
          "Work-life balance issues",
          "Both can be pessimistic",
          "Need to lighten up"
        ]
      },
      compatibility: {
        emotional: 8,
        physical: 8,
        intellectual: 7,
        overall: 9
      },
      advice: "Capricorn express emotions more. Cancer support ambitions. Balance work and home. Natural compatibility.",
      dateIdeas: ["Quality home time", "Traditional dates", "Family events", "Goal-setting", "Building together"]
    },
    leo: {
      score: 4,
      element: "Earth + Fire",
      summary: "CEO meets star. Capricorn works; Leo performs. Different priorities and values. Challenging combination.",
      love: {
        strengths: [
          "Both ambitious",
          "Leo brings warmth; Capricorn brings structure",
          "Can build impressive empire",
          "Mutual respect for success",
          "Complement when mature"
        ],
        challenges: [
          "Leo wants fun; Capricorn wants work",
          "Different values and priorities",
          "Leo dramatic; Capricorn reserved",
          "Capricorn's pessimism dims Leo's light",
          "May not understand each other"
        ]
      },
      compatibility: {
        emotional: 4,
        physical: 6,
        intellectual: 6,
        overall: 4
      },
      advice: "Capricorn lighten up. Leo get serious sometimes. Find middle ground between play and work.",
      dateIdeas: ["Business dinners", "Upscale events", "Success celebrations", "Strategic outings", "Power couple activities"]
    },
    virgo: {
      score: 9,
      element: "Earth + Earth",
      summary: "Power duo! Both practical, ambitious, dedicated. Build empire together. Excellent compatibility.",
      love: {
        strengths: [
          "Shared work ethic and ambition",
          "Both practical and dedicated",
          "Virgo perfects; Capricorn achieves",
          "Financial compatibility",
          "Long-term vision alignment",
          "Mutual respect"
        ],
        challenges: [
          "May prioritize work over romance",
          "Both can be pessimistic",
          "Lack spontaneity",
          "Need to have fun",
          "Can be too serious"
        ]
      },
      compatibility: {
        emotional: 7,
        physical: 8,
        intellectual: 9,
        overall: 9
      },
      advice: "Schedule fun deliberately. Don't become all work. Remember romance. Excellent match.",
      dateIdeas: ["Business dinners", "Goal-setting", "Quality events", "Career development", "Strategic activities"]
    },
    libra: {
      score: 5,
      element: "Earth + Air",
      summary: "Workaholic meets social butterfly. Capricorn works; Libra plays. Different priorities. Challenging.",
      love: {
        strengths: [
          "Libra softens Capricorn",
          "Capricorn provides structure",
          "Both value success",
          "Complement when mature",
          "Balance each other"
        ],
        challenges: [
          "Libra social; Capricorn reserved",
          "Different priorities",
          "Capricorn serious; Libra light",
          "Work-life imbalance",
          "May not understand"
        ]
      },
      compatibility: {
        emotional: 5,
        physical: 6,
        intellectual: 7,
        overall: 5
      },
      advice: "Capricorn socialize more. Libra be serious sometimes. Compromise essential.",
      dateIdeas: ["Business social events", "Upscale dining", "Cultural activities", "Balanced work-play", "Quality time"]
    },
    scorpio: {
      score: 9,
      element: "Earth + Water",
      summary: "Power duo! Both ambitious, dedicated, loyal. Scorpio's intensity meets Capricorn's discipline. Excellent.",
      love: {
        strengths: [
          "Shared ambition and dedication",
          "Both loyal and committed",
          "Scorpio passion; Capricorn structure",
          "Build empire together",
          "Deep mutual respect",
          "Transform and achieve"
        ],
        challenges: [
          "Both can be controlling",
          "Work-obsessed together",
          "May lack lightness",
          "Both pessimistic",
          "Need to have fun"
        ]
      },
      compatibility: {
        emotional: 8,
        physical: 9,
        intellectual: 8,
        overall: 9
      },
      advice: "Balance work and intimacy. Lighten up together. Channel intensity into goals. Excellent match.",
      dateIdeas: ["Power dinners", "Strategic planning", "Private luxury", "Goal achievement", "Transformative experiences"]
    },
    sagittarius: {
      score: 5,
      element: "Earth + Fire",
      summary: "Workaholic meets free spirit. Capricorn works; Sagittarius plays. Different priorities. Challenging.",
      love: {
        strengths: [
          "Sagittarius lightens Capricorn",
          "Capricorn grounds Sagittarius",
          "Both ambitious (differently)",
          "Can balance each other",
          "Complement when mature"
        ],
        challenges: [
          "Sagittarius needs freedom; Capricorn needs structure",
          "Play vs work priorities",
          "Different lifestyles",
          "Sagittarius optimistic; Capricorn pessimistic",
          "May not understand"
        ]
      },
      compatibility: {
        emotional: 5,
        physical: 6,
        intellectual: 7,
        overall: 5
      },
      advice: "Capricorn have fun. Sagittarius be responsible. Meet in middle. Requires work.",
      dateIdeas: ["Business travel", "Outdoor activities", "Educational experiences", "Balanced work-play", "Strategic adventures"]
    },
    capricorn: {
      score: 7,
      element: "Earth + Earth",
      summary: "Double ambition! Two CEOs together. Build impressive empire but may forget to live. Need balance.",
      love: {
        strengths: [
          "Understand each other's ambition",
          "Shared values and goals",
          "Both hardworking and dedicated",
          "Financial compatibility",
          "Build powerful partnership",
          "Mutual respect"
        ],
        challenges: [
          "May become all work, no play",
          "Double pessimism",
          "Who softens whom?",
          "Can be too serious",
          "Need external fun influence"
        ]
      },
      compatibility: {
        emotional: 6,
        physical: 8,
        intellectual: 9,
        overall: 7
      },
      advice: "Schedule fun deliberately. Support each other's humanity. Remember life beyond work. Balance essential.",
      dateIdeas: ["Business ventures", "Goal achievement", "Strategic planning", "Power activities", "Success celebrations"]
    },
    aquarius: {
      score: 5,
      element: "Earth + Air",
      summary: "Traditional meets unconventional. Capricorn builds systems; Aquarius breaks them. Different worldviews.",
      love: {
        strengths: [
          "Both ambitious for change (differently)",
          "Capricorn grounds Aquarius' ideas",
          "Aquarius inspires Capricorn",
          "Can balance each other",
          "Potential for innovative partnership"
        ],
        challenges: [
          "Capricorn traditional; Aquarius rebellious",
          "Different values and priorities",
          "Aquarius detached; Capricorn reserved",
          "May not understand each other",
          "Work vs innovation focus"
        ]
      },
      compatibility: {
        emotional: 4,
        physical: 5,
        intellectual: 7,
        overall: 5
      },
      advice: "Accept different worldviews. Capricorn be open; Aquarius be practical. Requires major flexibility.",
      dateIdeas: ["Innovation events", "Social causes", "Tech conferences", "Strategic planning", "Unique ventures"]
    },
    pisces: {
      score: 8,
      element: "Earth + Water",
      summary: "Builder meets dreamer. Capricorn makes real; Pisces dreams. Complementary when both appreciate differences.",
      love: {
        strengths: [
          "Capricorn grounds Pisces' dreams",
          "Pisces softens Capricorn's edges",
          "Both devoted when committed",
          "Capricorn provides; Pisces inspires",
          "Balance practicality and imagination",
          "Transform each other"
        ],
        challenges: [
          "Capricorn logical; Pisces emotional",
          "Different realities",
          "Capricorn harsh; Pisces sensitive",
          "Work-life balance issues",
          "Need conscious bridging"
        ]
      },
      compatibility: {
        emotional: 8,
        physical: 7,
        intellectual: 6,
        overall: 8
      },
      advice: "Capricorn be gentle. Pisces be clear. Balance logic and emotion. Beautiful when it works.",
      dateIdeas: ["Art galleries", "Spiritual events", "Music venues", "Quality dining", "Creative projects"]
    }
  },
  
  aquarius: {
    aries: {
      score: 8,
      element: "Air + Fire",
      summary: "Innovative duo! Both independent, original, forward-thinking. Great mental connection. Exciting partnership.",
      love: {
        strengths: [
          "Both value independence",
          "Innovative and original together",
          "Aries inspires; Aquarius enlightens",
          "Great friendship foundation",
          "Neither clingy"
        ],
        challenges: [
          "May lack emotional intimacy",
          "Both detached from feelings",
          "Aries personal; Aquarius impersonal",
          "Need to work on warmth",
          "Can be too cerebral"
        ]
      },
      compatibility: {
        emotional: 6,
        physical: 8,
        intellectual: 9,
        overall: 8
      },
      advice: "Build emotional connection. Aries be patient; Aquarius be present. Balance intellect and feeling.",
      dateIdeas: ["Tech events", "Innovation shows", "Social causes", "Adventure activities", "Unique experiences"]
    },
    taurus: {
      score: 3,
      element: "Air + Earth",
      summary: "Fixed square! Taurus traditional; Aquarius rebellious. Fundamental differences. Very challenging.",
      love: {
        strengths: [
          "Both loyal when committed",
          "Aquarius inspires change",
          "Taurus provides stability",
          "Can learn from extreme differences",
          "Both stubborn = commitment potential"
        ],
        challenges: [
          "Taurus needs security; Aquarius needs freedom",
          "Traditional vs unconventional",
          "Taurus possessive; Aquarius detached",
          "Different values completely",
          "Rarely understand each other"
        ]
      },
      compatibility: {
        emotional: 2,
        physical: 4,
        intellectual: 5,
        overall: 3
      },
      advice: "Accept fundamental differences. Taurus allow space; Aquarius provide reassurance. Very difficult pairing.",
      dateIdeas: ["Unique dining", "Art installations", "Tech experiences", "Balanced traditional-modern", "Experimental activities"]
    },
    gemini: {
      score: 9,
      element: "Air + Air",
      summary: "Intellectual soulmates! Both unique, independent, curious. Mental connection extraordinary. Excellent compatibility.",
      love: {
        strengths: [
          "Brilliant mental connection",
          "Both value independence",
          "Shared humanitarian interests",
          "Neither clingy or jealous",
          "Innovative and exciting"
        ],
        challenges: [
          "May lack emotional intimacy",
          "Both detached from feelings",
          "Can be too cerebral",
          "Need to work on romance",
          "May disconnect without realizing"
        ]
      },
      compatibility: {
        emotional: 6,
        physical: 7,
        intellectual: 10,
        overall: 9
      },
      advice: "Build emotional connection intentionally. Make romance priority. Perfect mental match - nurture other dimensions.",
      dateIdeas: ["Tech events", "Social causes", "Innovation shows", "Group activities", "Unconventional experiences"]
    },
    cancer: {
      score: 3,
      element: "Air + Water",
      summary: "Detached meets emotional. Aquarius logical; Cancer emotional. Opposite needs. Very difficult.",
      love: {
        strengths: [
          "Cancer humanizes Aquarius",
          "Aquarius broadens Cancer's perspective",
          "Both caring (differently)",
          "Potential for growth",
          "Can learn from contrast"
        ],
        challenges: [
          "Cancer emotional; Aquarius detached",
          "Different intimacy needs",
          "Home vs social priorities",
          "Cancer clingy; Aquarius distant",
          "Rarely understand each other"
        ]
      },
      compatibility: {
        emotional: 2,
        physical: 4,
        intellectual: 5,
        overall: 3
      },
      advice: "Aquarius engage emotionally. Cancer allow freedom. Exceptional maturity and work required.",
      dateIdeas: ["Humanitarian work", "Group activities", "Innovative experiences", "Balanced social-home", "Unique dates"]
    },
    leo: {
      score: 8,
      element: "Air + Fire",
      summary: "Opposite signs attract! Leo personal; Aquarius universal. Both fixed and loyal. Magical combination.",
      love: {
        strengths: [
          "Complementary opposites",
          "Both loyal and idealistic",
          "Leo warms; Aquarius enlightens",
          "Exciting and unique",
          "Great friendship foundation"
        ],
        challenges: [
          "Leo needs attention; Aquarius detached",
          "Leo dramatic; Aquarius cool",
          "Different emotional needs",
          "Leo personal; Aquarius impersonal",
          "Different worlds"
        ]
      },
      compatibility: {
        emotional: 6,
        physical: 8,
        intellectual: 9,
        overall: 8
      },
      advice: "Aquarius be more personal. Leo appreciate uniqueness. Balance warmth and coolness.",
      dateIdeas: ["Unique events", "Social causes", "Cultural experiences", "Innovation shows", "Unconventional dates"]
    },
    virgo: {
      score: 4,
      element: "Air + Earth",
      summary: "Conventional meets unconventional. Virgo practical; Aquarius visionary. Different worldviews. Challenging.",
      love: {
        strengths: [
          "Both intellectual",
          "Virgo grounds Aquarius' ideas",
          "Aquarius inspires Virgo",
          "Can learn from differences",
          "Humanitarian values may align"
        ],
        challenges: [
          "Virgo conventional; Aquarius rebellious",
          "Different priorities",
          "Aquarius detached; Virgo analytical",
          "May not understand each other",
          "Different approaches to life"
        ]
      },
      compatibility: {
        emotional: 4,
        physical: 5,
        intellectual: 7,
        overall: 4
      },
      advice: "Accept different worldviews. Virgo be open; Aquarius be practical sometimes.",
      dateIdeas: ["Tech events", "Social causes", "Innovative experiences", "Learning activities", "Unique outings"]
    },
    libra: {
      score: 9,
      element: "Air + Air",
      summary: "Intellectual harmony! Both idealistic, social, humanitarian. Excellent compatibility. Perfect mental match.",
      love: {
        strengths: [
          "Brilliant intellectual connection",
          "Shared humanitarian values",
          "Both social and friendly",
          "Libra romantic; Aquarius interesting",
          "Natural understanding"
        ],
        challenges: [
          "May lack emotional depth",
          "Both detached from feelings",
          "Aquarius too unconventional for Libra",
          "Need to work on intimacy",
          "Can be too cerebral"
        ]
      },
      compatibility: {
        emotional: 7,
        physical: 8,
        intellectual: 10,
        overall: 9
      },
      advice: "Build emotional intimacy. Balance intellect with feeling. Excellent air sign match.",
      dateIdeas: ["Cultural events", "Social causes", "Intellectual discussions", "Group activities", "Innovation experiences"]
    },
    scorpio: {
      score: 3,
      element: "Air + Water",
      summary: "Detached meets intense. Aquarius logical; Scorpio emotional. Opposite approaches. Very difficult.",
      love: {
        strengths: [
          "Both loyal when committed",
          "Scorpio humanizes Aquarius",
          "Aquarius broadens Scorpio",
          "Can transform each other",
          "Potential for growth"
        ],
        challenges: [
          "Scorpio emotional; Aquarius detached",
          "Jealousy vs freedom",
          "Scorpio private; Aquarius social",
          "Rarely understand each other",
          "Fundamental differences"
        ]
      },
      compatibility: {
        emotional: 2,
        physical: 5,
        intellectual: 6,
        overall: 3
      },
      advice: "Accept different worldviews. Scorpio detach; Aquarius engage. Exceptional maturity required.",
      dateIdeas: ["Unique experiences", "Intellectual depth", "Social causes", "Innovative activities", "Balanced intensity"]
    },
    sagittarius: {
      score: 9,
      element: "Air + Fire",
      summary: "Freedom and vision! Both independent, idealistic, adventurous. Excellent compatibility. Exciting partnership.",
      love: {
        strengths: [
          "Shared love of freedom",
          "Both idealistic and humanitarian",
          "Intellectual connection",
          "Respect independence",
          "Adventure and innovation"
        ],
        challenges: [
          "May lack emotional intimacy",
          "Both detached from feelings",
          "Can be too cerebral",
          "Need to work on romance",
          "May disconnect without realizing"
        ]
      },
      compatibility: {
        emotional: 6,
        physical: 8,
        intellectual: 10,
        overall: 9
      },
      advice: "Build emotional connection intentionally. Balance intellect with feeling. Excellent air-fire match.",
      dateIdeas: ["Innovation events", "Social causes", "Adventure travel", "Intellectual exploration", "Unique experiences"]
    },
    capricorn: {
      score: 5,
      element: "Air + Earth",
      summary: "Unconventional meets traditional. Aquarius breaks systems; Capricorn builds them. Different worldviews.",
      love: {
        strengths: [
          "Both ambitious for change (differently)",
          "Capricorn grounds Aquarius' ideas",
          "Aquarius inspires Capricorn",
          "Can balance each other",
          "Potential for innovation"
        ],
        challenges: [
          "Capricorn traditional; Aquarius rebellious",
          "Different values and priorities",
          "Aquarius detached; Capricorn reserved",
          "May not understand",
          "Work vs innovation focus"
        ]
      },
      compatibility: {
        emotional: 4,
        physical: 5,
        intellectual: 7,
        overall: 5
      },
      advice: "Accept different worldviews. Capricorn be open; Aquarius be practical. Major flexibility required.",
      dateIdeas: ["Innovation events", "Social causes", "Tech conferences", "Strategic planning", "Unique ventures"]
    },
    aquarius: {
      score: 7,
      element: "Air + Air",
      summary: "Double innovation! Two visionaries together. Brilliant but detached. Need to work on emotional connection.",
      love: {
        strengths: [
          "Understand each other completely",
          "Shared humanitarian values",
          "Both independent and free",
          "Innovative and exciting",
          "Neither clingy"
        ],
        challenges: [
          "Double detachment",
          "Who provides emotional warmth?",
          "Can be too cerebral together",
          "May forget romance",
          "Need grounding from outside"
        ]
      },
      compatibility: {
        emotional: 5,
        physical: 7,
        intellectual: 10,
        overall: 7
      },
      advice: "Work on emotional intimacy intentionally. Create warmth deliberately. Balance intellect with feeling.",
      dateIdeas: ["Tech events", "Social causes", "Group activities", "Innovation experiences", "Intellectual pursuits"]
    },
    pisces: {
      score: 5,
      element: "Air + Water",
      summary: "Logic meets intuition. Aquarius thinks; Pisces feels. Can inspire or confuse. Requires conscious bridging.",
      love: {
        strengths: [
          "Both idealistic and humanitarian",
          "Aquarius provides clarity; Pisces provides depth",
          "Creative and imaginative",
          "Both compassionate",
          "Can inspire each other"
        ],
        challenges: [
          "Aquarius logical; Pisces emotional",
          "Different realities",
          "Pisces needs more warmth than Aquarius gives",
          "May drift apart",
          "Communication challenges"
        ]
      },
      compatibility: {
        emotional: 5,
        physical: 6,
        intellectual: 7,
        overall: 5
      },
      advice: "Aquarius engage emotionally. Pisces communicate clearly. Balance head and heart consciously.",
      dateIdeas: ["Art installations", "Music venues", "Social causes", "Spiritual events", "Creative projects"]
    }
  },
  
  pisces: {
    aries: {
      score: 5,
      element: "Water + Fire",
      summary: "Warrior meets mystic. Aries charges; Pisces flows. Different worlds. Can work with patience and understanding.",
      love: {
        strengths: [
          "Aries protects sensitive Pisces",
          "Pisces softens Aries' edges",
          "Both passionate (differently)",
          "Aries inspires courage; Pisces inspires compassion",
          "Can balance each other"
        ],
        challenges: [
          "Aries too direct for sensitive Pisces",
          "Pisces too passive for Aries",
          "Different realities",
          "Communication challenges",
          "Aries' impatience vs Pisces' pace"
        ]
      },
      compatibility: {
        emotional: 6,
        physical: 7,
        intellectual: 5,
        overall: 5
      },
      advice: "Aries be gentle. Pisces be direct. Balance strength and sensitivity. Requires patience.",
      dateIdeas: ["Beach walks", "Art galleries", "Music venues", "Gentle adventures", "Creative activities"]
    },
    taurus: {
      score: 9,
      element: "Water + Earth",
      summary: "Earth holds water! Both gentle, sensual, devoted. Taurus provides security; Pisces provides inspiration. Beautiful match.",
      love: {
        strengths: [
          "Both gentle and nurturing",
          "Taurus provides stability; Pisces provides depth",
          "Sensual and romantic",
          "Shared appreciation for beauty",
          "Deep emotional connection",
          "Devoted partnership"
        ],
        challenges: [
          "Pisces may be too dreamy for practical Taurus",
          "Taurus stubbornness vs Pisces flexibility",
          "May avoid necessary changes",
          "Need external push sometimes",
          "Can enable each other's escape"
        ]
      },
      compatibility: {
        emotional: 9,
        physical: 9,
        intellectual: 7,
        overall: 9
      },
      advice: "Stay grounded in reality. Balance dreams with practicality. Encourage growth. Excellent match.",
      dateIdeas: ["Art galleries", "Beachside dinners", "Music festivals", "Spa days", "Creative workshops"]
    },
    gemini: {
      score: 5,
      element: "Water + Air",
      summary: "Dreamer meets thinker. Pisces feels; Gemini thinks. Can inspire or confuse. Mutable flexibility helps.",
      love: {
        strengths: [
          "Both adaptable and flexible",
          "Gemini grounds Pisces' dreams",
          "Pisces softens Gemini's edges",
          "Creative and imaginative",
          "Can flow with changes"
        ],
        challenges: [
          "Gemini logical; Pisces emotional",
          "Different realities",
          "Pisces needs reassurance; Gemini distracted",
          "Communication challenges",
          "May drift apart"
        ]
      },
      compatibility: {
        emotional: 5,
        physical: 6,
        intellectual: 7,
        overall: 5
      },
      advice: "Gemini be present emotionally. Pisces communicate clearly. Balance head and heart.",
      dateIdeas: ["Art museums", "Music venues", "Creative workshops", "Spiritual events", "Imaginative activities"]
    },
    cancer: {
      score: 9,
      element: "Water + Water",
      summary: "Dreamy waters! Both emotional, intuitive, compassionate. Deep understanding. Romantic, nurturing bond. Beautiful match.",
      love: {
        strengths: [
          "Deep emotional connection",
          "Intuitive understanding",
          "Both romantic and caring",
          "Cancer grounds; Pisces inspires",
          "Create magical world together",
          "Unconditional love"
        ],
        challenges: [
          "Both overly emotional",
          "May avoid reality together",
          "Need practical grounding",
          "Can enable escape tendencies",
          "Both passive-aggressive"
        ]
      },
      compatibility: {
        emotional: 10,
        physical: 9,
        intellectual: 6,
        overall: 9
      },
      advice: "Stay grounded in reality. Balance dreams with practicality. Protect but don't isolate. Excellent match.",
      dateIdeas: ["Beach sunsets", "Art galleries", "Music venues", "Spiritual retreats", "Creative activities"]
    },
    leo: {
      score: 5,
      element: "Water + Fire",
      summary: "Mystic meets king. Pisces dreams; Leo rules. Different worlds that can inspire or confuse each other.",
      love: {
        strengths: [
          "Leo protects sensitive Pisces",
          "Pisces inspires Leo's creativity",
          "Both romantic",
          "Leo provides confidence; Pisces provides compassion",
          "Can create magic"
        ],
        challenges: [
          "Leo too demanding for Pisces",
          "Pisces too passive for Leo",
          "Different realities",
          "Leo needs admiration; Pisces needs understanding",
          "Communication challenges"
        ]
      },
      compatibility: {
        emotional: 6,
        physical: 7,
        intellectual: 5,
        overall: 5
      },
      advice: "Leo be gentle. Pisces be direct. Balance strength and sensitivity. Requires patience.",
      dateIdeas: ["Romantic experiences", "Art events", "Music venues", "Luxury escapes", "Creative activities"]
    },
    virgo: {
      score: 8,
      element: "Water + Earth",
      summary: "Opposite signs attract! Virgo practical; Pisces dreamy. Can beautifully complement with conscious effort.",
      love: {
        strengths: [
          "Virgo grounds Pisces' dreams",
          "Pisces softens Virgo's edges",
          "Complementary opposites",
          "Virgo heals; Pisces inspires",
          "Balance practicality and imagination",
          "Serve each other well"
        ],
        challenges: [
          "Virgo criticizes; Pisces takes personally",
          "Different realities",
          "Virgo logical; Pisces emotional",
          "May frustrate each other",
          "Need conscious bridging"
        ]
      },
      compatibility: {
        emotional: 8,
        physical: 8,
        intellectual: 6,
        overall: 8
      },
      advice: "Virgo be gentle. Pisces be clearer. Balance logic and emotion. Beautiful when it works.",
      dateIdeas: ["Art galleries", "Healing activities", "Music venues", "Spiritual events", "Creative projects"]
    },
    libra: {
      score: 6,
      element: "Water + Air",
      summary: "Dreamer meets thinker. Pisces feels; Libra rationalizes. Can inspire or confuse. Requires bridging.",
      love: {
        strengths: [
          "Both romantic and idealistic",
          "Libra provides clarity; Pisces provides depth",
          "Artistic connection",
          "Both compassionate",
          "Can create beauty"
        ],
        challenges: [
          "Libra logical; Pisces emotional",
          "Different decision-making",
          "Pisces needs more depth than Libra provides",
          "May drift without anchoring",
          "Communication challenges"
        ]
      },
      compatibility: {
        emotional: 6,
        physical: 7,
        intellectual: 7,
        overall: 6
      },
      advice: "Libra engage emotionally. Pisces communicate clearly. Balance head and heart.",
      dateIdeas: ["Art galleries", "Music venues", "Romantic settings", "Creative activities", "Spiritual events"]
    },
    scorpio: {
      score: 9,
      element: "Water + Water",
      summary: "Mystical waters! Both emotional, intuitive, deep. Scorpio protects; Pisces inspires. Transformative bond.",
      love: {
        strengths: [
          "Deep emotional understanding",
          "Intuitive connection",
          "Scorpio protects; Pisces softens",
          "Both spiritual and deep",
          "Transform each other",
          "Unconditional acceptance"
        ],
        challenges: [
          "Both overly emotional",
          "May escape reality together",
          "Scorpio controlling; Pisces passive",
          "Can enable negative patterns",
          "Need grounding"
        ]
      },
      compatibility: {
        emotional: 10,
        physical: 9,
        intellectual: 7,
        overall: 9
      },
      advice: "Stay grounded. Balance intensity with lightness. Protect but don't isolate. Excellent match.",
      dateIdeas: ["Spiritual retreats", "Water activities", "Art experiences", "Deep exploration", "Mystical events"]
    },
    sagittarius: {
      score: 5,
      element: "Water + Fire",
      summary: "Dreamer meets adventurer. Pisces explores inner world; Sagittarius explores outer world. Different approaches.",
      love: {
        strengths: [
          "Both adaptable and flexible",
          "Sagittarius inspires Pisces to adventure",
          "Pisces adds depth to Sagittarius",
          "Both idealistic",
          "Can grow together"
        ],
        challenges: [
          "Sagittarius blunt; Pisces sensitive",
          "Different realities",
          "Sagittarius needs freedom; Pisces needs connection",
          "May drift apart",
          "Communication challenges"
        ]
      },
      compatibility: {
        emotional: 5,
        physical: 6,
        intellectual: 7,
        overall: 5
      },
      advice: "Sagittarius be gentle. Pisces be direct. Balance freedom with intimacy. Requires conscious work.",
      dateIdeas: ["Spiritual travel", "Art and nature", "Music festivals", "Beach adventures", "Creative exploration"]
    },
    capricorn: {
      score: 8,
      element: "Water + Earth",
      summary: "Dreamer meets builder. Capricorn makes real; Pisces dreams. Complementary when both appreciate differences.",
      love: {
        strengths: [
          "Capricorn grounds Pisces' dreams",
          "Pisces softens Capricorn's edges",
          "Both devoted when committed",
          "Capricorn provides; Pisces inspires",
          "Balance practicality and imagination",
          "Transform each other"
        ],
        challenges: [
          "Capricorn logical; Pisces emotional",
          "Different realities",
          "Capricorn harsh; Pisces sensitive",
          "Work-life balance issues",
          "Need conscious bridging"
        ]
      },
      compatibility: {
        emotional: 8,
        physical: 7,
        intellectual: 6,
        overall: 8
      },
      advice: "Capricorn be gentle. Pisces be clear. Balance logic and emotion. Beautiful when it works.",
      dateIdeas: ["Art galleries", "Spiritual events", "Music venues", "Quality dining", "Creative projects"]
    },
    aquarius: {
      score: 5,
      element: "Water + Air",
      summary: "Intuition meets logic. Pisces feels; Aquarius thinks. Can inspire or confuse. Requires conscious bridging.",
      love: {
        strengths: [
          "Both idealistic and humanitarian",
          "Aquarius provides clarity; Pisces provides depth",
          "Creative and imaginative",
          "Both compassionate",
          "Can inspire each other"
        ],
        challenges: [
          "Aquarius logical; Pisces emotional",
          "Different realities",
          "Pisces needs more warmth than Aquarius gives",
          "May drift apart",
          "Communication challenges"
        ]
      },
      compatibility: {
        emotional: 5,
        physical: 6,
        intellectual: 7,
        overall: 5
      },
      advice: "Aquarius engage emotionally. Pisces communicate clearly. Balance head and heart consciously.",
      dateIdeas: ["Art installations", "Music venues", "Social causes", "Spiritual events", "Creative projects"]
    },
    pisces: {
      score: 7,
      element: "Water + Water",
      summary: "Double dreamy! Two mystics together. Deep, compassionate, creative. May lack grounding. Need external structure.",
      love: {
        strengths: [
          "Profound emotional understanding",
          "Both romantic and spiritual",
          "Creative and artistic together",
          "Unconditional acceptance",
          "Create magical world",
          "Deep soul connection"
        ],
        challenges: [
          "Both overly emotional",
          "Who handles practicalities?",
          "May escape reality together",
          "Need external grounding",
          "Can enable each other's avoidance"
        ]
      },
      compatibility: {
        emotional: 10,
        physical: 9,
        intellectual: 6,
        overall: 7
      },
      advice: "Stay grounded in reality. Handle practical matters. Don't escape together. Seek external structure.",
      dateIdeas: ["Spiritual experiences", "Art immersion", "Music festivals", "Beach retreats", "Creative collaboration"]
    }
  }
}

/**
 * Get compatibility data between two zodiac signs
 */
export function getCompatibility(sign1: ZodiacSign, sign2: ZodiacSign): CompatibilityData | null {
  const data = zodiacCompatibility[sign1.toLowerCase() as Lowercase<ZodiacSign>]
  if (!data) return null
  
  return data[sign2.toLowerCase() as Lowercase<ZodiacSign>] || null
}

/**
 * All zodiac signs in order
 */
export const allSigns: SignName[] = [
  'aries', 'taurus', 'gemini', 'cancer', 'leo', 'virgo',
  'libra', 'scorpio', 'sagittarius', 'capricorn', 'aquarius', 'pisces'
]

