/**
 * Zodiac Compatibility Data
 * 
 * This file contains compatibility descriptions for all zodiac sign combinations.
 * Each combination includes a description of how the two signs interact.
 * 
 * NOTE: This is a starter file. Complete compatibility content for all 144 combinations
 * needs to be added. Currently includes sample data for demonstration.
 * 
 * Future: This data can be stored in Supabase for easy updates and A/B testing.
 */

export type ZodiacSign = 
  | "aries" | "taurus" | "gemini" | "cancer" 
  | "leo" | "virgo" | "libra" | "scorpio" 
  | "sagittarius" | "capricorn" | "aquarius" | "pisces"

export interface CompatibilityData {
  userSign: ZodiacSign
  otherSign: ZodiacSign
  heading: string
  description: string
  score?: number // Optional: 1-10 compatibility score
}

/**
 * Helper function to capitalize sign names
 */
function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

/**
 * Compatibility Database
 * Key format: "userSign-otherSign"
 * 
 * Contains all 144 combinations (12 signs × 12 signs)
 * IMPORTANT: This MUST be declared BEFORE the functions that use it!
 */
const compatibilityDatabase: Record<string, Omit<CompatibilityData, 'userSign' | 'otherSign'>> = {
  // Libra Combinations (Sample - from original content)
  "libra-aries": {
    heading: "LIBRA + ARIES",
    description: "Aries and Libra are directly opposite in the zodiac, which can create a magnetic attraction. Aries' bold, assertive nature contrasts with your love for balance and harmony. Your relationship thrives on differences, each bringing qualities the other lacks. Aries can help you be more decisive and spontaneous, while you can teach Aries the importance of patience and consideration for others. Challenges might arise due to Aries' impulsive tendencies and your indecisiveness. Effective communication and a deep understanding of each other's needs can lead to a dynamic and balanced partnership.",
    score: 7,
  },
  "libra-taurus": {
    heading: "LIBRA + TAURUS",
    description: "Taurus and Libra both have a deep appreciation for the finer things in life and share a ruling planet, Venus, which governs love and beauty. You both enjoy indulging in luxury and comfort. However, Taurus' stubborn nature may clash with your indecisive and diplomatic approach. To make this relationship work, Taurus needs to be more open to change and flexibility, while you should strive to be more decisive. Mutual respect for each other's perspectives and embracing compromise will enhance your connection and help maintain harmony.",
    score: 6,
  },
  "libra-gemini": {
    heading: "LIBRA + GEMINI",
    description: "Gemini and Libra form a highly compatible air sign match, both enjoying intellectual conversation and social interaction. You naturally understand each other's need for communication and are likely to have a vibrant relationship filled with interesting discussions and shared activities. However, you both tend to avoid confrontation, which might lead to unresolved issues. Encouraging open and honest dialogue about your feelings and desires will help you build a stronger and more enduring relationship.",
    score: 9,
  },
  "libra-cancer": {
    heading: "LIBRA + CANCER",
    description: "Cancer's emotional depth and need for security can sometimes overwhelm your airy, intellectual approach to life. You seek balance and harmony in relationships, while Cancer craves emotional connection and nurturing. This combination can work wonderfully if both parties are willing to understand and appreciate each other's differences. Cancer can teach you to be more in touch with your emotions, while you can help Cancer see things from a more objective perspective. Patience, empathy, and consistent communication are key to making this pairing successful.",
    score: 5,
  },
  "libra-leo": {
    heading: "LIBRA + LEO",
    description: "Leo and Libra create a glamorous, socially dynamic partnership. Both signs love beauty, romance, and being admired. Leo's confidence and warmth complement your diplomatic charm perfectly. You appreciate Leo's generosity and creativity, while Leo values your grace and social skills. Challenges may arise from Leo's need for constant attention and your tendency to avoid conflict. However, your shared love of harmony and your ability to see Leo's perspective can create a balanced, loving relationship filled with romance and mutual admiration.",
    score: 8,
  },
  "libra-virgo": {
    heading: "LIBRA + VIRGO",
    description: "Virgo and Libra both seek perfection, though in different ways. Virgo focuses on practical details while you seek aesthetic and relational harmony. Virgo's analytical nature can help ground your sometimes indecisive tendencies, while your diplomatic skills can soften Virgo's critical edge. The key challenge is Virgo's tendency toward criticism conflicting with your need for peace. With mutual respect and understanding, you can create a relationship that balances practicality with beauty, creating a refined and harmonious partnership.",
    score: 6,
  },
  "libra-libra": {
    heading: "LIBRA + LIBRA",
    description: "Two Libras together create an elegant, harmonious partnership filled with beauty, culture, and social grace. You both understand each other's need for balance, fairness, and aesthetic pleasure. However, this pairing can struggle with decision-making, as both of you tend to see all sides of every issue. The relationship may lack direction without someone to take the lead. To thrive, you'll need to work on being more decisive and addressing conflicts directly rather than avoiding them. When balanced, this creates a peaceful, refined, and mutually supportive relationship.",
    score: 7,
  },
  "libra-scorpio": {
    heading: "LIBRA + SCORPIO",
    description: "Scorpio's intensity and depth can both fascinate and overwhelm your lighter, more social nature. Scorpio seeks emotional depth and transformation, while you prefer harmony and balance. This combination requires significant compromise. Scorpio can teach you about emotional depth and commitment, while you can help Scorpio lighten up and see different perspectives. The main challenges are Scorpio's jealousy conflicting with your social nature, and Scorpio's intensity overwhelming your need for peace. With effort, this can be a transformative, passionate partnership.",
    score: 5,
  },
  "libra-sagittarius": {
    heading: "LIBRA + SAGITTARIUS",
    description: "Sagittarius and Libra form an optimistic, adventurous partnership. Both signs love socializing, exploring new ideas, and enjoying life's pleasures. Sagittarius's philosophical nature appeals to your intellectual side, while your diplomatic skills help smooth Sagittarius's sometimes blunt honesty. You both value freedom and independence, creating a relationship with plenty of space to grow. The main challenge is Sagittarius's restlessness conflicting with your need for partnership. Overall, this is a fun, intellectually stimulating, and harmonious match.",
    score: 8,
  },
  "libra-capricorn": {
    heading: "LIBRA + CAPRICORN",
    description: "Capricorn's serious, ambitious nature contrasts with your social, harmony-seeking approach. Capricorn is focused on achievement and status, while you prioritize relationships and balance. This square aspect creates tension but also potential for growth. Capricorn can help you be more decisive and goal-oriented, while you can teach Capricorn about work-life balance and the importance of relationships. Success requires appreciating your different approaches and finding common ground in your shared desire for stability and success.",
    score: 5,
  },
  "libra-aquarius": {
    heading: "LIBRA + AQUARIUS",
    description: "Aquarius and Libra create an intellectually stimulating, socially conscious partnership. Both air signs value communication, ideas, and social connection. Aquarius's innovative thinking fascinates you, while your diplomatic skills help Aquarius navigate social situations. You both value independence and fairness, creating a relationship built on friendship and mutual respect. The challenge is that both signs can be emotionally detached. To deepen the connection, you'll need to work on emotional intimacy. Overall, this is a harmonious, forward-thinking, and mutually supportive match.",
    score: 9,
  },
  "libra-pisces": {
    heading: "LIBRA + PISCES",
    description: "Pisces's dreamy, emotional nature can both enchant and confuse your logical, balanced approach. Pisces seeks deep emotional and spiritual connection, while you prefer intellectual harmony. This combination requires understanding and patience. Pisces can teach you about emotional depth and intuition, while you can help Pisces set boundaries and make decisions. The main challenges are Pisces's emotional intensity overwhelming your need for balance, and your intellectual approach seeming cold to sensitive Pisces. With compassion and effort, this can be a romantic, creative partnership.",
    score: 6,
  },
  
  // ARIES COMBINATIONS
  "aries-aries": {
    heading: "ARIES + ARIES",
    description: "Two Aries together create an explosive, passionate, and highly energetic partnership. You both understand each other's need for independence, action, and excitement. The relationship is never boring, filled with adventure and spontaneity. However, conflicts can be intense as both want to lead and neither wants to compromise. Power struggles and competition may arise. To succeed, you'll need to learn to take turns leading and channel your combined energy toward shared goals rather than against each other. When balanced, this creates a dynamic, exciting, and mutually motivating relationship.",
    score: 7,
  },
  "aries-taurus": {
    heading: "ARIES + TAURUS",
    description: "Aries's impulsive, fast-paced nature clashes with Taurus's steady, deliberate approach. You want immediate action while Taurus prefers to move slowly and carefully. This creates tension but also potential for balance. Taurus can ground your impulsiveness and teach you patience, while you can inspire Taurus to be more spontaneous and take risks. The key challenges are your impatience with Taurus's slowness and Taurus's frustration with your recklessness. With mutual respect and compromise, you can create a relationship that balances action with stability.",
    score: 5,
  },
  "aries-gemini": {
    heading: "ARIES + GEMINI",
    description: "Aries and Gemini create a lively, exciting, and intellectually stimulating partnership. Both signs love variety, adventure, and new experiences. Gemini's quick wit matches your fast pace, creating endless conversation and shared activities. You both value independence and spontaneity, making this a fun, dynamic relationship. The challenge is that both signs can be impatient and easily bored, potentially leading to a lack of depth or commitment. To thrive, you'll need to work on follow-through and emotional connection. Overall, this is an energetic, playful, and mutually inspiring match.",
    score: 8,
  },
  "aries-cancer": {
    heading: "ARIES + CANCER",
    description: "Aries's bold, independent nature conflicts with Cancer's sensitive, nurturing approach. You're direct and assertive while Cancer is emotional and indirect. This square aspect creates significant challenges. Cancer needs security and emotional connection, while you need freedom and action. Your bluntness can hurt sensitive Cancer, while Cancer's moodiness can frustrate your straightforward nature. However, if you can appreciate your differences, Cancer can teach you about emotional depth and caring, while you can help Cancer be more confident and assertive. Success requires patience, empathy, and compromise.",
    score: 4,
  },
  "aries-leo": {
    heading: "ARIES + LEO",
    description: "Aries and Leo create a passionate, dynamic, and highly compatible fire sign partnership. Both signs are confident, enthusiastic, and love being in the spotlight. You admire Leo's warmth and generosity, while Leo appreciates your courage and directness. Together, you create an exciting, adventurous relationship filled with passion and mutual support. The main challenge is that both want to lead and be the center of attention, potentially creating power struggles. To succeed, you'll need to share the spotlight and support each other's goals. When balanced, this is a powerful, inspiring, and deeply passionate match.",
    score: 9,
  },
  "aries-virgo": {
    heading: "ARIES + VIRGO",
    description: "Aries's impulsive, action-oriented nature clashes with Virgo's careful, analytical approach. You want to act immediately while Virgo needs to analyze and plan. This creates friction but also potential for growth. Virgo can help you think before acting and pay attention to details, while you can inspire Virgo to be more spontaneous and confident. The key challenges are your impatience with Virgo's perfectionism and Virgo's criticism of your recklessness. With mutual respect and understanding, you can create a relationship that balances action with wisdom.",
    score: 4,
  },
  "aries-libra": {
    heading: "ARIES + LIBRA",
    description: "Aries and Libra are opposite signs in the zodiac, creating a magnetic attraction and complementary dynamic. Your bold, direct approach contrasts with Libra's diplomatic, balanced nature. You can help Libra be more decisive and assertive, while Libra can teach you about compromise and considering others' perspectives. The challenges are your impatience with Libra's indecisiveness and Libra's frustration with your bluntness. However, opposites attract for a reason - you each have what the other lacks. With communication and compromise, this can be a dynamic, balanced, and mutually enriching partnership.",
    score: 7,
  },
  "aries-scorpio": {
    heading: "ARIES + SCORPIO",
    description: "Aries and Scorpio create an intense, passionate, and potentially volatile partnership. Both signs are powerful, determined, and unafraid of conflict. The attraction is strong and the passion is intense. However, power struggles are inevitable as both want control. Scorpio's emotional depth and need for intimacy can clash with your more straightforward, independent nature. Scorpio may see you as superficial, while you may find Scorpio too intense and controlling. If you can respect each other's strength and channel your combined power toward shared goals, this can be a transformative, passionate relationship.",
    score: 6,
  },
  "aries-sagittarius": {
    heading: "ARIES + SAGITTARIUS",
    description: "Aries and Sagittarius create an adventurous, optimistic, and highly compatible fire sign partnership. Both signs love freedom, adventure, and new experiences. Sagittarius's philosophical nature complements your action-oriented approach, creating a relationship filled with exploration and growth. You both value honesty and independence, making this a fun, exciting relationship. The challenge is that both signs can be impulsive and restless, potentially lacking stability or depth. To thrive, you'll need to work on commitment and follow-through. Overall, this is an energetic, inspiring, and mutually supportive match.",
    score: 9,
  },
  "aries-capricorn": {
    heading: "ARIES + CAPRICORN",
    description: "Aries's impulsive, risk-taking nature conflicts with Capricorn's cautious, strategic approach. You want immediate results while Capricorn is willing to work slowly toward long-term goals. This square aspect creates tension but also potential for achievement. Capricorn can teach you about patience, planning, and perseverance, while you can inspire Capricorn to take more risks and act more quickly. The key challenges are your impatience with Capricorn's slowness and Capricorn's frustration with your recklessness. With mutual respect, you can create a powerful partnership that balances action with strategy.",
    score: 5,
  },
  "aries-aquarius": {
    heading: "ARIES + AQUARIUS",
    description: "Aries and Aquarius create an exciting, innovative, and intellectually stimulating partnership. Both signs value independence, originality, and forward-thinking. Aquarius's unique perspective fascinates you, while your courage and directness inspire Aquarius to act on their ideas. You both need freedom and space, creating a relationship with plenty of room for individual growth. The challenge is that both signs can be emotionally detached and stubborn. To deepen the connection, you'll need to work on emotional intimacy and compromise. Overall, this is a dynamic, progressive, and mutually inspiring match.",
    score: 8,
  },
  "aries-pisces": {
    heading: "ARIES + PISCES",
    description: "Aries's bold, direct nature contrasts sharply with Pisces's sensitive, intuitive approach. You're action-oriented and straightforward while Pisces is emotional and indirect. This creates challenges but also potential for growth. Pisces can teach you about empathy, intuition, and emotional depth, while you can help Pisces be more confident and assertive. The key challenges are your impatience with Pisces's emotional complexity and Pisces's hurt by your bluntness. With compassion and understanding, you can create a relationship that balances strength with sensitivity.",
    score: 5,
  },
  
  // TAURUS COMBINATIONS
  "taurus-aries": {
    heading: "TAURUS + ARIES",
    description: "Taurus's steady, patient nature clashes with Aries's impulsive, fast-paced approach. You prefer stability and routine while Aries craves excitement and change. This creates tension but also potential for balance. You can ground Aries's impulsiveness and provide stability, while Aries can inspire you to be more adventurous and take risks. The key challenges are Aries's impatience with your deliberate pace and your frustration with Aries's recklessness. With mutual respect and compromise, you can create a relationship that balances security with excitement.",
    score: 5,
  },
  "taurus-taurus": {
    heading: "TAURUS + TAURUS",
    description: "Two Tauruses together create a stable, sensual, and deeply comfortable partnership. You both value security, loyalty, and the pleasures of life. You understand each other's need for routine, comfort, and material security. However, this pairing can become too set in its ways, with both partners being stubborn and resistant to change. The relationship may lack excitement or growth without external stimulation. To thrive, you'll need to push each other out of your comfort zones occasionally. When balanced, this creates a peaceful, loyal, and deeply satisfying relationship.",
    score: 7,
  },
  "taurus-gemini": {
    heading: "TAURUS + GEMINI",
    description: "Taurus's need for stability and routine conflicts with Gemini's need for variety and change. You prefer depth and consistency while Gemini seeks breadth and novelty. This creates challenges but also potential for growth. Gemini can help you be more flexible and open to new experiences, while you can teach Gemini about commitment and follow-through. The key challenges are Gemini's restlessness frustrating your need for security and your possessiveness limiting Gemini's freedom. With understanding and compromise, you can create a relationship that balances stability with variety.",
    score: 4,
  },
  "taurus-cancer": {
    heading: "TAURUS + CANCER",
    description: "Taurus and Cancer create a nurturing, stable, and deeply compatible partnership. Both signs value security, home, and family. You provide the material stability Cancer needs, while Cancer provides the emotional nurturing you crave. You both appreciate comfort, loyalty, and building a secure foundation together. The main challenge is that both signs can be possessive and resistant to change, potentially creating a relationship that feels stuck. However, your shared values and mutual understanding create a warm, loving, and enduring partnership.",
    score: 9,
  },
  "taurus-leo": {
    heading: "TAURUS + LEO",
    description: "Taurus's practical, grounded nature conflicts with Leo's dramatic, attention-seeking approach. Both signs are fixed, making you both stubborn and resistant to compromise. You value security and simplicity while Leo craves excitement and admiration. This square aspect creates tension but also potential for mutual appreciation. Leo can help you be more confident and expressive, while you can teach Leo about patience and practicality. The key challenges are power struggles and stubbornness. With mutual respect and willingness to compromise, you can create a loyal, passionate partnership.",
    score: 5,
  },
  "taurus-virgo": {
    heading: "TAURUS + VIRGO",
    description: "Taurus and Virgo create a practical, stable, and highly compatible earth sign partnership. Both signs value security, hard work, and attention to detail. Virgo's analytical nature complements your practical approach, creating a relationship built on mutual respect and shared goals. You both appreciate routine, quality, and building something lasting together. The challenge is that both signs can be overly cautious and critical, potentially lacking spontaneity or passion. To thrive, you'll need to work on being more flexible and emotionally expressive. Overall, this is a stable, supportive, and enduring match.",
    score: 9,
  },
  "taurus-libra": {
    heading: "TAURUS + LIBRA",
    description: "Taurus and Libra both share Venus as their ruling planet, giving you a mutual appreciation for beauty, comfort, and harmony. You both enjoy the finer things in life and value peaceful relationships. However, your approaches differ - you're more practical and possessive while Libra is more intellectual and social. The main challenges are your stubbornness conflicting with Libra's indecisiveness and your possessiveness limiting Libra's social nature. With compromise and appreciation for your shared values, you can create a beautiful, harmonious, and aesthetically pleasing partnership.",
    score: 6,
  },
  "taurus-scorpio": {
    heading: "TAURUS + SCORPIO",
    description: "Taurus and Scorpio are opposite signs, creating intense attraction and complementary dynamics. Both signs are fixed, making you both loyal, determined, and possessive. The sexual chemistry is powerful and the commitment is deep. However, power struggles are inevitable as both want control. Scorpio's emotional intensity can overwhelm your more straightforward nature, while your stubbornness can frustrate Scorpio's need for transformation. If you can respect each other's strength and work through jealousy issues, this can be a deeply passionate, loyal, and transformative partnership.",
    score: 7,
  },
  "taurus-sagittarius": {
    heading: "TAURUS + SAGITTARIUS",
    description: "Taurus's need for security and routine conflicts with Sagittarius's need for freedom and adventure. You prefer stability and predictability while Sagittarius craves variety and exploration. This creates significant challenges. Sagittarius can help you be more adventurous and open-minded, while you can teach Sagittarius about commitment and stability. The key challenges are Sagittarius's restlessness frustrating your need for security and your possessiveness limiting Sagittarius's freedom. Success requires significant compromise and appreciation for your different approaches to life.",
    score: 4,
  },
  "taurus-capricorn": {
    heading: "TAURUS + CAPRICORN",
    description: "Taurus and Capricorn create a stable, ambitious, and highly compatible earth sign partnership. Both signs value security, hard work, and building lasting foundations. Capricorn's ambition complements your practical approach, creating a power couple focused on achievement and stability. You both appreciate loyalty, tradition, and material success. The challenge is that both signs can be overly serious and work-focused, potentially lacking spontaneity or emotional expression. To thrive, you'll need to make time for pleasure and emotional connection. Overall, this is a stable, successful, and enduring match.",
    score: 9,
  },
  "taurus-aquarius": {
    heading: "TAURUS + AQUARIUS",
    description: "Taurus's traditional, security-focused nature conflicts with Aquarius's unconventional, freedom-loving approach. Both signs are fixed, making you both stubborn and resistant to change. You value stability and tradition while Aquarius values innovation and independence. This square aspect creates significant tension. Aquarius can help you be more open-minded and progressive, while you can teach Aquarius about commitment and practicality. The key challenges are your need for security conflicting with Aquarius's need for freedom. Success requires significant compromise and mutual respect.",
    score: 4,
  },
  "taurus-pisces": {
    heading: "TAURUS + PISCES",
    description: "Taurus and Pisces create a gentle, romantic, and complementary partnership. Your practical, grounded nature provides the stability that dreamy Pisces needs, while Pisces adds emotional depth and creativity to your life. You both appreciate beauty, comfort, and emotional connection. Pisces's intuition complements your practicality, creating a balanced relationship. The main challenge is Pisces's emotional complexity sometimes overwhelming your more straightforward nature. With patience and understanding, you can create a nurturing, romantic, and mutually supportive partnership.",
    score: 8,
  },
  
  // GEMINI COMBINATIONS
  "gemini-aries": {
    heading: "GEMINI + ARIES",
    description: "Gemini and Aries create an exciting, dynamic, and intellectually stimulating partnership. Both signs love variety, adventure, and new experiences. Your quick wit and communication skills match Aries's fast pace and enthusiasm. You both value independence and spontaneity, making this a fun, energetic relationship. The challenge is that both signs can be impatient and easily bored, potentially lacking depth or commitment. To thrive, you'll need to work on follow-through and emotional connection. Overall, this is a lively, playful, and mutually inspiring match.",
    score: 8,
  },
  "gemini-taurus": {
    heading: "GEMINI + TAURUS",
    description: "Gemini's need for variety and mental stimulation conflicts with Taurus's need for stability and routine. You crave change and new experiences while Taurus prefers consistency and predictability. This creates tension but also potential for growth. You can help Taurus be more flexible and open to new ideas, while Taurus can teach you about commitment and follow-through. The key challenges are your restlessness frustrating Taurus's need for security and Taurus's possessiveness limiting your freedom. With understanding and compromise, you can create a relationship that balances variety with stability.",
    score: 4,
  },
  "gemini-gemini": {
    heading: "GEMINI + GEMINI",
    description: "Two Geminis together create a lively, intellectually stimulating, and endlessly entertaining partnership. You both understand each other's need for variety, communication, and mental stimulation. The relationship is never boring, filled with conversation, ideas, and shared activities. However, this pairing can lack emotional depth and stability, with both partners avoiding serious commitment or emotional intimacy. The relationship may feel scattered without grounding. To thrive, you'll need to work on follow-through, emotional connection, and creating some routine. When balanced, this is a fun, dynamic, and mutually inspiring relationship.",
    score: 7,
  },
  "gemini-cancer": {
    heading: "GEMINI + CANCER",
    description: "Gemini's intellectual, detached nature conflicts with Cancer's emotional, nurturing approach. You prefer logic and variety while Cancer seeks emotional depth and security. This creates challenges but also potential for growth. Cancer can teach you about emotional intimacy and commitment, while you can help Cancer lighten up and see different perspectives. The key challenges are your restlessness frustrating Cancer's need for security and Cancer's emotional needs overwhelming your need for freedom. Success requires patience, empathy, and willingness to meet each other's different needs.",
    score: 5,
  },
  "gemini-leo": {
    heading: "GEMINI + LEO",
    description: "Gemini and Leo create a fun, social, and mutually admiring partnership. Your wit and communication skills complement Leo's warmth and charisma. You both love socializing, entertainment, and being admired. Leo appreciates your intelligence and versatility, while you admire Leo's confidence and generosity. The main challenge is Leo's need for constant attention and loyalty conflicting with your need for variety and freedom. To succeed, you'll need to reassure Leo of your commitment while maintaining your independence. Overall, this is a playful, exciting, and mutually supportive match.",
    score: 8,
  },
  "gemini-virgo": {
    heading: "GEMINI + VIRGO",
    description: "Gemini and Virgo both share Mercury as their ruling planet, giving you both strong communication skills and intellectual curiosity. However, your approaches differ - you're more scattered and versatile while Virgo is more focused and analytical. Virgo can help you be more organized and practical, while you can help Virgo be more flexible and lighthearted. The key challenges are Virgo's criticism frustrating your free spirit and your inconsistency frustrating Virgo's need for reliability. With mutual respect and understanding, you can create an intellectually stimulating and complementary partnership.",
    score: 6,
  },
  "gemini-libra": {
    heading: "GEMINI + LIBRA",
    description: "Gemini and Libra create a highly compatible, intellectually stimulating, and socially dynamic air sign partnership. Both signs love communication, ideas, and social interaction. You naturally understand each other's need for mental stimulation and variety. The relationship is filled with conversation, shared interests, and mutual understanding. The challenge is that both signs can avoid emotional depth and conflict, potentially lacking intimacy or resolution of issues. To thrive, you'll need to work on emotional connection and addressing problems directly. Overall, this is a harmonious, fun, and mutually inspiring match.",
    score: 9,
  },
  "gemini-scorpio": {
    heading: "GEMINI + SCORPIO",
    description: "Gemini's light, versatile nature conflicts with Scorpio's intense, focused approach. You prefer variety and surface-level connections while Scorpio seeks depth and emotional intensity. This creates significant challenges. Scorpio's jealousy and possessiveness can feel suffocating to your free spirit, while your flirtatiousness and inconsistency can trigger Scorpio's insecurities. However, if you can appreciate your differences, Scorpio can teach you about emotional depth and commitment, while you can help Scorpio lighten up and be more flexible. Success requires significant compromise and trust.",
    score: 4,
  },
  "gemini-sagittarius": {
    heading: "GEMINI + SAGITTARIUS",
    description: "Gemini and Sagittarius are opposite signs, creating a complementary and exciting partnership. Both signs love learning, adventure, and freedom. Sagittarius's philosophical depth complements your intellectual versatility, creating endless conversation and shared exploration. You both value independence and variety, making this a fun, dynamic relationship. The challenges are that both signs can be commitment-phobic and scattered, potentially lacking depth or stability. However, opposites attract for a reason - you each have what the other lacks. With communication and compromise, this can be an adventurous, inspiring, and intellectually rich partnership.",
    score: 8,
  },
  "gemini-capricorn": {
    heading: "GEMINI + CAPRICORN",
    description: "Gemini's playful, changeable nature conflicts with Capricorn's serious, goal-oriented approach. You prefer variety and spontaneity while Capricorn values structure and long-term planning. This creates tension but also potential for balance. Capricorn can help you be more focused and responsible, while you can teach Capricorn to lighten up and be more flexible. The key challenges are Capricorn's seriousness dampening your playful spirit and your inconsistency frustrating Capricorn's need for reliability. Success requires mutual respect and appreciation for your different strengths.",
    score: 4,
  },
  "gemini-aquarius": {
    heading: "GEMINI + AQUARIUS",
    description: "Gemini and Aquarius create an intellectually stimulating, innovative, and highly compatible air sign partnership. Both signs value communication, ideas, and independence. Aquarius's unique perspective and humanitarian focus fascinate you, while your versatility and social skills help Aquarius connect with others. You both need freedom and mental stimulation, creating a relationship with plenty of space for individual growth. The challenge is that both signs can be emotionally detached. To deepen the connection, you'll need to work on emotional intimacy. Overall, this is a progressive, exciting, and mutually inspiring match.",
    score: 9,
  },
  "gemini-pisces": {
    heading: "GEMINI + PISCES",
    description: "Gemini's logical, intellectual nature conflicts with Pisces's emotional, intuitive approach. You prefer facts and variety while Pisces seeks emotional depth and spiritual connection. This square aspect creates challenges but also potential for growth. Pisces can teach you about emotional intelligence and intuition, while you can help Pisces communicate more clearly and see things more objectively. The key challenges are your restlessness overwhelming Pisces's need for emotional security and Pisces's emotional complexity confusing your logical mind. Success requires patience, empathy, and willingness to understand each other's different perspectives.",
    score: 5,
  },
  
  // CANCER COMBINATIONS
  "cancer-aries": {
    heading: "CANCER + ARIES",
    description: "Cancer's sensitive, nurturing nature conflicts with Aries's bold, independent approach. You need emotional security and connection while Aries needs freedom and action. This square aspect creates significant challenges. Aries's directness can hurt your feelings, while your moodiness can frustrate Aries's straightforward nature. However, if you can appreciate your differences, you can teach Aries about emotional depth and caring, while Aries can help you be more confident and assertive. Success requires patience, empathy, and willingness to meet each other's different needs.",
    score: 4,
  },
  "cancer-taurus": {
    heading: "CANCER + TAURUS",
    description: "Cancer and Taurus create a nurturing, stable, and deeply compatible partnership. Both signs value security, home, and loyalty. Taurus provides the material stability you need, while you provide the emotional nurturing Taurus craves. You both appreciate comfort, tradition, and building a secure foundation together. The main challenge is that both signs can be possessive and resistant to change, potentially creating a relationship that feels stuck. However, your shared values and mutual understanding create a warm, loving, and enduring partnership.",
    score: 9,
  },
  "cancer-gemini": {
    heading: "CANCER + GEMINI",
    description: "Cancer's emotional, security-focused nature conflicts with Gemini's intellectual, freedom-loving approach. You seek emotional depth and commitment while Gemini prefers variety and mental stimulation. This creates challenges but also potential for growth. You can teach Gemini about emotional intimacy and commitment, while Gemini can help you lighten up and see different perspectives. The key challenges are Gemini's restlessness frustrating your need for security and your emotional needs overwhelming Gemini's need for freedom. Success requires patience, empathy, and willingness to meet each other's different needs.",
    score: 5,
  },
  "cancer-cancer": {
    heading: "CANCER + CANCER",
    description: "Two Cancers together create a deeply emotional, nurturing, and intuitive partnership. You both understand each other's need for security, emotional connection, and home. The relationship is filled with empathy, care, and mutual understanding. However, this pairing can become overly emotional and moody, with both partners feeding into each other's insecurities. The relationship may lack objectivity or rational perspective. To thrive, you'll need to work on emotional balance and not getting lost in each other's moods. When balanced, this creates a deeply loving, supportive, and emotionally fulfilling relationship.",
    score: 7,
  },
  "cancer-leo": {
    heading: "CANCER + LEO",
    description: "Cancer's private, emotional nature contrasts with Leo's public, dramatic approach. You seek emotional intimacy and security while Leo craves attention and admiration. This creates challenges but also potential for balance. Leo can help you be more confident and outgoing, while you can teach Leo about emotional depth and nurturing. The key challenges are Leo's need for attention conflicting with your need for privacy and Leo's pride clashing with your emotional sensitivity. With mutual respect and understanding, you can create a warm, loving partnership that balances emotional depth with passionate expression.",
    score: 6,
  },
  "cancer-virgo": {
    heading: "CANCER + VIRGO",
    description: "Cancer and Virgo create a nurturing, practical, and complementary partnership. Your emotional intuition complements Virgo's analytical approach, creating a balanced relationship. Virgo appreciates your caring nature and emotional depth, while you value Virgo's practicality and reliability. You both value security, loyalty, and creating a comfortable home. The main challenge is Virgo's criticism sometimes hurting your sensitive feelings. However, with understanding and appreciation for each other's strengths, you can create a supportive, stable, and mutually caring partnership.",
    score: 8,
  },
  "cancer-libra": {
    heading: "CANCER + LIBRA",
    description: "Cancer's emotional, security-focused nature conflicts with Libra's intellectual, social approach. You seek emotional depth and commitment while Libra prefers balance and social harmony. This square aspect creates tension but also potential for growth. Libra can help you see different perspectives and be more objective, while you can teach Libra about emotional depth and intuition. The key challenges are Libra's social nature conflicting with your need for privacy and Libra's indecisiveness frustrating your need for emotional security. Success requires patience, empathy, and willingness to meet each other's different needs.",
    score: 5,
  },
  "cancer-scorpio": {
    heading: "CANCER + SCORPIO",
    description: "Cancer and Scorpio create an intensely emotional, intuitive, and deeply compatible water sign partnership. Both signs understand each other's need for emotional depth, loyalty, and intimacy. Scorpio's intensity matches your emotional depth, creating a powerful bond. You both value privacy, loyalty, and emotional connection. The main challenge is that both signs can be possessive, moody, and hold grudges, potentially creating an overly intense or suffocating relationship. To thrive, you'll need to work on emotional balance and giving each other space. Overall, this is a deeply passionate, loyal, and emotionally fulfilling match.",
    score: 9,
  },
  "cancer-sagittarius": {
    heading: "CANCER + SAGITTARIUS",
    description: "Cancer's need for security and emotional connection conflicts with Sagittarius's need for freedom and adventure. You prefer staying home and building emotional intimacy while Sagittarius craves exploration and independence. This creates significant challenges. Sagittarius can help you be more adventurous and optimistic, while you can teach Sagittarius about emotional depth and commitment. The key challenges are Sagittarius's restlessness frustrating your need for security and your emotional needs feeling suffocating to freedom-loving Sagittarius. Success requires significant compromise and appreciation for your different approaches to life.",
    score: 4,
  },
  "cancer-capricorn": {
    heading: "CANCER + CAPRICORN",
    description: "Cancer and Capricorn are opposite signs, creating a complementary and potentially powerful partnership. Your emotional, nurturing nature balances Capricorn's practical, ambitious approach. You provide the emotional support and home life that Capricorn needs, while Capricorn provides the security and stability you crave. Both signs value family, tradition, and building lasting foundations. The challenges are Capricorn's emotional reserve conflicting with your need for emotional expression and Capricorn's work focus leaving you feeling neglected. With communication and compromise, this can be a stable, successful, and mutually supportive partnership.",
    score: 7,
  },
  "cancer-aquarius": {
    heading: "CANCER + AQUARIUS",
    description: "Cancer's emotional, traditional nature conflicts with Aquarius's intellectual, unconventional approach. You seek emotional intimacy and security while Aquarius values independence and innovation. This creates significant challenges. Aquarius can help you be more open-minded and less emotionally reactive, while you can teach Aquarius about emotional intelligence and nurturing. The key challenges are Aquarius's emotional detachment hurting your feelings and your emotional needs feeling suffocating to independent Aquarius. Success requires significant compromise, patience, and appreciation for your very different approaches to relationships.",
    score: 4,
  },
  "cancer-pisces": {
    heading: "CANCER + PISCES",
    description: "Cancer and Pisces create a deeply emotional, intuitive, and highly compatible water sign partnership. Both signs understand each other's need for emotional connection, empathy, and spiritual depth. Pisces's creativity and compassion complement your nurturing nature perfectly. You both value emotional intimacy, intuition, and creating a safe, loving environment. The main challenge is that both signs can be overly emotional and escapist, potentially lacking practicality or grounding. To thrive, you'll need to work on staying connected to reality and making practical decisions. Overall, this is a deeply romantic, empathetic, and emotionally fulfilling match.",
    score: 9,
  },
  
  // LEO COMBINATIONS
  "leo-aries": {
    heading: "LEO + ARIES",
    description: "Leo and Aries create a passionate, dynamic, and highly compatible fire sign partnership. Both signs are confident, enthusiastic, and love being in the spotlight. Aries's courage and directness complement your warmth and generosity. Together, you create an exciting, adventurous relationship filled with passion and mutual support. The main challenge is that both want to lead and be the center of attention, potentially creating power struggles. To succeed, you'll need to share the spotlight and support each other's goals. When balanced, this is a powerful, inspiring, and deeply passionate match.",
    score: 9,
  },
  "leo-taurus": {
    heading: "LEO + TAURUS",
    description: "Leo's dramatic, attention-seeking nature conflicts with Taurus's practical, grounded approach. Both signs are fixed, making you both stubborn and resistant to compromise. You crave excitement and admiration while Taurus values security and simplicity. This square aspect creates tension but also potential for mutual appreciation. You can help Taurus be more confident and expressive, while Taurus can teach you about patience and practicality. The key challenges are power struggles and stubbornness. With mutual respect and willingness to compromise, you can create a loyal, passionate partnership.",
    score: 5,
  },
  "leo-gemini": {
    heading: "LEO + GEMINI",
    description: "Leo and Gemini create a fun, social, and mutually admiring partnership. Gemini's wit and communication skills complement your warmth and charisma. You both love socializing, entertainment, and being admired. You appreciate Gemini's intelligence and versatility, while Gemini admires your confidence and generosity. The main challenge is your need for constant attention and loyalty conflicting with Gemini's need for variety and freedom. To succeed, Gemini will need to reassure you of their commitment while you allow them independence. Overall, this is a playful, exciting, and mutually supportive match.",
    score: 8,
  },
  "leo-cancer": {
    heading: "LEO + CANCER",
    description: "Leo's public, dramatic nature contrasts with Cancer's private, emotional approach. You crave attention and admiration while Cancer seeks emotional intimacy and security. This creates challenges but also potential for balance. You can help Cancer be more confident and outgoing, while Cancer can teach you about emotional depth and nurturing. The key challenges are your need for attention conflicting with Cancer's need for privacy and your pride clashing with Cancer's emotional sensitivity. With mutual respect and understanding, you can create a warm, loving partnership that balances passionate expression with emotional depth.",
    score: 6,
  },
  "leo-leo": {
    heading: "LEO + LEO",
    description: "Two Leos together create a dramatic, passionate, and highly entertaining partnership. You both understand each other's need for attention, admiration, and creative expression. The relationship is filled with romance, generosity, and mutual appreciation. However, this pairing can struggle with power dynamics, as both want to be the star and neither wants to play a supporting role. Ego clashes and competition for the spotlight are inevitable. To thrive, you'll need to learn to share the stage and celebrate each other's successes. When balanced, this creates a glamorous, passionate, and mutually inspiring relationship.",
    score: 7,
  },
  "leo-virgo": {
    heading: "LEO + VIRGO",
    description: "Leo's dramatic, expressive nature conflicts with Virgo's modest, analytical approach. You crave attention and admiration while Virgo prefers to work behind the scenes. This creates challenges but also potential for balance. Virgo can help you be more practical and detail-oriented, while you can help Virgo be more confident and expressive. The key challenges are Virgo's criticism hurting your pride and your need for attention overwhelming Virgo's modest nature. With mutual respect and appreciation for your different strengths, you can create a relationship that balances creativity with practicality.",
    score: 5,
  },
  "leo-libra": {
    heading: "LEO + LIBRA",
    description: "Leo and Libra create a glamorous, socially dynamic partnership. Both signs love beauty, romance, and being admired. Your confidence and warmth complement Libra's diplomatic charm perfectly. Libra appreciates your generosity and creativity, while you value Libra's grace and social skills. Challenges may arise from your need for constant attention and Libra's tendency to avoid conflict. However, your shared love of harmony and Libra's ability to see your perspective can create a balanced, loving relationship filled with romance and mutual admiration.",
    score: 8,
  },
  "leo-scorpio": {
    heading: "LEO + SCORPIO",
    description: "Leo's expressive, attention-seeking nature conflicts with Scorpio's intense, private approach. Both signs are fixed and powerful, creating potential for both passion and power struggles. You want public admiration while Scorpio prefers private intensity. This square aspect creates tension but also magnetic attraction. Scorpio can teach you about emotional depth and transformation, while you can help Scorpio be more open and expressive. The key challenges are power struggles, jealousy, and stubbornness. With mutual respect and willingness to compromise, you can create an intensely passionate and transformative partnership.",
    score: 6,
  },
  "leo-sagittarius": {
    heading: "LEO + SAGITTARIUS",
    description: "Leo and Sagittarius create an optimistic, adventurous, and highly compatible fire sign partnership. Both signs love fun, adventure, and living life to the fullest. Sagittarius's philosophical nature and sense of humor complement your dramatic flair and warmth. You both value honesty, generosity, and independence, creating a relationship filled with excitement and mutual support. The challenge is that both signs can be self-focused and restless, potentially lacking depth or commitment. To thrive, you'll need to work on emotional intimacy and follow-through. Overall, this is an enthusiastic, inspiring, and joyful match.",
    score: 9,
  },
  "leo-capricorn": {
    heading: "LEO + CAPRICORN",
    description: "Leo's expressive, playful nature conflicts with Capricorn's serious, goal-oriented approach. You crave attention and fun while Capricorn values achievement and status. This creates tension but also potential for mutual respect. Capricorn can help you be more disciplined and strategic, while you can teach Capricorn to lighten up and enjoy life. The key challenges are Capricorn's seriousness dampening your playful spirit and your need for attention conflicting with Capricorn's work focus. With mutual appreciation for each other's strengths, you can create a powerful, successful partnership.",
    score: 5,
  },
  "leo-aquarius": {
    heading: "LEO + AQUARIUS",
    description: "Leo and Aquarius are opposite signs, creating both attraction and tension. You're warm, personal, and crave individual attention while Aquarius is cool, detached, and focused on groups and ideals. This creates challenges but also complementary dynamics. Aquarius can help you see the bigger picture beyond yourself, while you can teach Aquarius about warmth and personal connection. The key challenges are your need for attention conflicting with Aquarius's independence and your pride clashing with Aquarius's rebellious nature. With communication and compromise, this can be a creative, innovative, and mutually enriching partnership.",
    score: 6,
  },
  "leo-pisces": {
    heading: "LEO + PISCES",
    description: "Leo's confident, expressive nature contrasts with Pisces's sensitive, intuitive approach. You're bold and direct while Pisces is gentle and indirect. This creates challenges but also potential for growth. Pisces can teach you about empathy, intuition, and emotional subtlety, while you can help Pisces be more confident and assertive. The key challenges are your boldness overwhelming sensitive Pisces and Pisces's emotional complexity confusing your straightforward nature. With compassion and understanding, you can create a romantic, creative partnership that balances strength with sensitivity.",
    score: 6,
  },
  
  // VIRGO COMBINATIONS
  "virgo-aries": {
    heading: "VIRGO + ARIES",
    description: "Virgo's careful, analytical nature clashes with Aries's impulsive, action-oriented approach. You need to analyze and plan while Aries wants to act immediately. This creates friction but also potential for growth. You can help Aries think before acting and pay attention to details, while Aries can inspire you to be more spontaneous and confident. The key challenges are Aries's impatience with your perfectionism and your criticism of Aries's recklessness. With mutual respect and understanding, you can create a relationship that balances wisdom with action.",
    score: 4,
  },
  "virgo-taurus": {
    heading: "VIRGO + TAURUS",
    description: "Virgo and Taurus create a practical, stable, and highly compatible earth sign partnership. Both signs value security, hard work, and attention to detail. Your analytical nature complements Taurus's practical approach, creating a relationship built on mutual respect and shared goals. You both appreciate routine, quality, and building something lasting together. The challenge is that both signs can be overly cautious and critical, potentially lacking spontaneity or passion. To thrive, you'll need to work on being more flexible and emotionally expressive. Overall, this is a stable, supportive, and enduring match.",
    score: 9,
  },
  "virgo-gemini": {
    heading: "VIRGO + GEMINI",
    description: "Virgo and Gemini both share Mercury as their ruling planet, giving you both strong communication skills and intellectual curiosity. However, your approaches differ - you're more focused and analytical while Gemini is more scattered and versatile. You can help Gemini be more organized and practical, while Gemini can help you be more flexible and lighthearted. The key challenges are your criticism frustrating Gemini's free spirit and Gemini's inconsistency frustrating your need for reliability. With mutual respect and understanding, you can create an intellectually stimulating and complementary partnership.",
    score: 6,
  },
  "virgo-cancer": {
    heading: "VIRGO + CANCER",
    description: "Virgo and Cancer create a nurturing, practical, and complementary partnership. Cancer's emotional intuition complements your analytical approach, creating a balanced relationship. You appreciate Cancer's caring nature and emotional depth, while Cancer values your practicality and reliability. You both value security, loyalty, and creating a comfortable home. The main challenge is your criticism sometimes hurting Cancer's sensitive feelings. However, with understanding and appreciation for each other's strengths, you can create a supportive, stable, and mutually caring partnership.",
    score: 8,
  },
  "virgo-leo": {
    heading: "VIRGO + LEO",
    description: "Virgo's modest, analytical nature conflicts with Leo's dramatic, expressive approach. You prefer to work behind the scenes while Leo craves attention and admiration. This creates challenges but also potential for balance. You can help Leo be more practical and detail-oriented, while Leo can help you be more confident and expressive. The key challenges are your criticism hurting Leo's pride and Leo's need for attention overwhelming your modest nature. With mutual respect and appreciation for your different strengths, you can create a relationship that balances practicality with creativity.",
    score: 5,
  },
  "virgo-virgo": {
    heading: "VIRGO + VIRGO",
    description: "Two Virgos together create a practical, organized, and highly efficient partnership. You both understand each other's need for order, routine, and perfection. The relationship is built on mutual respect, shared values, and attention to detail. However, this pairing can become overly critical and analytical, with both partners focusing on flaws rather than strengths. The relationship may lack spontaneity, passion, or emotional expression. To thrive, you'll need to work on being more accepting, flexible, and emotionally open. When balanced, this creates a stable, supportive, and mutually improving relationship.",
    score: 7,
  },
  "virgo-libra": {
    heading: "VIRGO + LIBRA",
    description: "Virgo and Libra both seek perfection, though in different ways. You focus on practical details while Libra seeks aesthetic and relational harmony. Your analytical nature can help ground Libra's sometimes indecisive tendencies, while Libra's diplomatic skills can soften your critical edge. The key challenge is your tendency toward criticism conflicting with Libra's need for peace. With mutual respect and understanding, you can create a relationship that balances practicality with beauty, creating a refined and harmonious partnership.",
    score: 6,
  },
  "virgo-scorpio": {
    heading: "VIRGO + SCORPIO",
    description: "Virgo and Scorpio create an intense, loyal, and complementary partnership. Your analytical approach complements Scorpio's intuitive depth, creating a powerful combination. You both value loyalty, privacy, and getting to the truth. Scorpio appreciates your reliability and attention to detail, while you admire Scorpio's passion and determination. The main challenge is that both signs can be critical and controlling, potentially creating power struggles. With mutual respect and trust, you can create a deeply committed, transformative, and mutually supportive partnership.",
    score: 8,
  },
  "virgo-sagittarius": {
    heading: "VIRGO + SAGITTARIUS",
    description: "Virgo's practical, detail-oriented nature conflicts with Sagittarius's philosophical, big-picture approach. You focus on facts and precision while Sagittarius seeks meaning and adventure. This square aspect creates tension but also potential for growth. Sagittarius can help you see the bigger picture and be more optimistic, while you can help Sagittarius pay attention to details and be more practical. The key challenges are your criticism dampening Sagittarius's enthusiasm and Sagittarius's restlessness frustrating your need for routine. Success requires mutual respect and appreciation for your different perspectives.",
    score: 5,
  },
  "virgo-capricorn": {
    heading: "VIRGO + CAPRICORN",
    description: "Virgo and Capricorn create a practical, ambitious, and highly compatible earth sign partnership. Both signs value hard work, responsibility, and building lasting foundations. Capricorn's ambition complements your analytical approach, creating a power couple focused on achievement and excellence. You both appreciate loyalty, tradition, and material success. The challenge is that both signs can be overly serious and work-focused, potentially lacking spontaneity or emotional expression. To thrive, you'll need to make time for pleasure and emotional connection. Overall, this is a stable, successful, and enduring match.",
    score: 9,
  },
  "virgo-aquarius": {
    heading: "VIRGO + AQUARIUS",
    description: "Virgo's practical, conventional nature conflicts with Aquarius's innovative, unconventional approach. You value routine and proven methods while Aquarius values experimentation and progress. This creates tension but also potential for innovation. Aquarius can help you be more open-minded and progressive, while you can help Aquarius turn ideas into practical reality. The key challenges are your criticism frustrating Aquarius's creativity and Aquarius's unpredictability unsettling your need for routine. With mutual respect and appreciation for your different strengths, you can create a productive, innovative partnership.",
    score: 5,
  },
  "virgo-pisces": {
    heading: "VIRGO + PISCES",
    description: "Virgo and Pisces are opposite signs, creating complementary dynamics. Your practical, analytical nature balances Pisces's dreamy, intuitive approach. You can help Pisces organize their ideas and stay grounded, while Pisces can teach you about intuition, compassion, and letting go of perfectionism. Both signs are service-oriented and caring, creating a mutually supportive relationship. The challenges are your criticism hurting sensitive Pisces and Pisces's emotional complexity overwhelming your logical mind. With understanding and compassion, this can be a healing, balanced, and mutually enriching partnership.",
    score: 7,
  },
  
  // SCORPIO COMBINATIONS
  "scorpio-aries": {
    heading: "SCORPIO + ARIES",
    description: "Scorpio and Aries create an intense, passionate, and potentially volatile partnership. Both signs are powerful, determined, and unafraid of conflict. The attraction is strong and the passion is intense. However, power struggles are inevitable as both want control. Your emotional depth and need for intimacy can clash with Aries's more straightforward, independent nature. Aries may see you as too intense and controlling, while you may find Aries superficial. If you can respect each other's strength and channel your combined power toward shared goals, this can be a transformative, passionate relationship.",
    score: 6,
  },
  "scorpio-taurus": {
    heading: "SCORPIO + TAURUS",
    description: "Scorpio and Taurus are opposite signs, creating intense attraction and complementary dynamics. Both signs are fixed, making you both loyal, determined, and possessive. The sexual chemistry is powerful and the commitment is deep. However, power struggles are inevitable as both want control. Your emotional intensity can overwhelm Taurus's more straightforward nature, while Taurus's stubbornness can frustrate your need for transformation. If you can respect each other's strength and work through jealousy issues, this can be a deeply passionate, loyal, and transformative partnership.",
    score: 7,
  },
  "scorpio-gemini": {
    heading: "SCORPIO + GEMINI",
    description: "Scorpio's intense, focused nature conflicts with Gemini's light, versatile approach. You seek depth and emotional intensity while Gemini prefers variety and surface-level connections. This creates significant challenges. Your jealousy and possessiveness can feel suffocating to Gemini's free spirit, while Gemini's flirtatiousness and inconsistency can trigger your insecurities. However, if you can appreciate your differences, you can teach Gemini about emotional depth and commitment, while Gemini can help you lighten up and be more flexible. Success requires significant compromise and trust.",
    score: 4,
  },
  "scorpio-cancer": {
    heading: "SCORPIO + CANCER",
    description: "Scorpio and Cancer create an intensely emotional, intuitive, and deeply compatible water sign partnership. Both signs understand each other's need for emotional depth, loyalty, and intimacy. Your intensity matches Cancer's emotional depth, creating a powerful bond. You both value privacy, loyalty, and emotional connection. The main challenge is that both signs can be possessive, moody, and hold grudges, potentially creating an overly intense or suffocating relationship. To thrive, you'll need to work on emotional balance and giving each other space. Overall, this is a deeply passionate, loyal, and emotionally fulfilling match.",
    score: 9,
  },
  "scorpio-leo": {
    heading: "SCORPIO + LEO",
    description: "Scorpio's intense, private nature conflicts with Leo's expressive, attention-seeking approach. Both signs are fixed and powerful, creating potential for both passion and power struggles. You prefer private intensity while Leo wants public admiration. This square aspect creates tension but also magnetic attraction. You can teach Leo about emotional depth and transformation, while Leo can help you be more open and expressive. The key challenges are power struggles, jealousy, and stubbornness. With mutual respect and willingness to compromise, you can create an intensely passionate and transformative partnership.",
    score: 6,
  },
  "scorpio-virgo": {
    heading: "SCORPIO + VIRGO",
    description: "Scorpio and Virgo create an intense, loyal, and complementary partnership. Virgo's analytical approach complements your intuitive depth, creating a powerful combination. You both value loyalty, privacy, and getting to the truth. You appreciate Virgo's reliability and attention to detail, while Virgo admires your passion and determination. The main challenge is that both signs can be critical and controlling, potentially creating power struggles. With mutual respect and trust, you can create a deeply committed, transformative, and mutually supportive partnership.",
    score: 8,
  },
  "scorpio-libra": {
    heading: "SCORPIO + LIBRA",
    description: "Scorpio's intensity and depth can both fascinate and overwhelm Libra's lighter, more social nature. You seek emotional depth and transformation, while Libra prefers harmony and balance. This combination requires significant compromise. You can teach Libra about emotional depth and commitment, while Libra can help you lighten up and see different perspectives. The main challenges are your jealousy conflicting with Libra's social nature, and your intensity overwhelming Libra's need for peace. With effort, this can be a transformative, passionate partnership.",
    score: 5,
  },
  "scorpio-scorpio": {
    heading: "SCORPIO + SCORPIO",
    description: "Two Scorpios together create an intensely passionate, deeply emotional, and powerfully transformative partnership. You both understand each other's need for depth, loyalty, and emotional intensity. The relationship is filled with passion, intuition, and mutual understanding. However, this pairing can become overly intense, with power struggles, jealousy, and emotional manipulation being potential issues. The relationship may lack lightness or objectivity. To thrive, you'll need to work on trust, emotional balance, and not trying to control each other. When balanced, this creates a deeply passionate, loyal, and transformative relationship.",
    score: 7,
  },
  "scorpio-sagittarius": {
    heading: "SCORPIO + SAGITTARIUS",
    description: "Scorpio's intense, focused nature conflicts with Sagittarius's light, freedom-loving approach. You seek emotional depth and commitment while Sagittarius craves adventure and independence. This creates challenges but also potential for growth. Sagittarius can help you be more optimistic and open-minded, while you can teach Sagittarius about emotional depth and commitment. The key challenges are your possessiveness limiting Sagittarius's freedom and Sagittarius's bluntness hurting your feelings. With mutual respect and willingness to compromise, you can create a passionate, adventurous partnership.",
    score: 5,
  },
  "scorpio-capricorn": {
    heading: "SCORPIO + CAPRICORN",
    description: "Scorpio and Capricorn create a powerful, ambitious, and deeply compatible partnership. Both signs are determined, loyal, and focused on long-term goals. Capricorn's ambition complements your intensity, creating a power couple capable of achieving great things. You both value loyalty, privacy, and building lasting foundations. The main challenge is that both signs can be controlling and emotionally reserved, potentially lacking warmth or spontaneity. With trust and emotional openness, you can create a deeply committed, successful, and mutually supportive partnership.",
    score: 9,
  },
  "scorpio-aquarius": {
    heading: "SCORPIO + AQUARIUS",
    description: "Scorpio's emotional, possessive nature conflicts with Aquarius's intellectual, independent approach. Both signs are fixed, making you both stubborn and resistant to compromise. You seek emotional intensity and control while Aquarius values freedom and detachment. This square aspect creates significant tension. Aquarius can help you be more objective and less controlling, while you can teach Aquarius about emotional depth and intimacy. The key challenges are your possessiveness conflicting with Aquarius's need for freedom and Aquarius's detachment hurting your feelings. Success requires significant compromise and mutual respect.",
    score: 4,
  },
  "scorpio-pisces": {
    heading: "SCORPIO + PISCES",
    description: "Scorpio and Pisces create a deeply emotional, intuitive, and highly compatible water sign partnership. Both signs understand each other's need for emotional depth, spiritual connection, and intimacy. Pisces's compassion and creativity complement your intensity perfectly. You both value emotional intimacy, intuition, and transformation. The main challenge is that both signs can be overly emotional and escapist, potentially lacking practicality or boundaries. With grounding and healthy boundaries, you can create a deeply passionate, spiritual, and emotionally fulfilling partnership.",
    score: 9,
  },
  
  // SAGITTARIUS COMBINATIONS
  "sagittarius-aries": {
    heading: "SAGITTARIUS + ARIES",
    description: "Sagittarius and Aries create an adventurous, optimistic, and highly compatible fire sign partnership. Both signs love freedom, adventure, and new experiences. Your philosophical nature complements Aries's action-oriented approach, creating a relationship filled with exploration and growth. You both value honesty and independence, making this a fun, exciting relationship. The challenge is that both signs can be impulsive and restless, potentially lacking stability or depth. To thrive, you'll need to work on commitment and follow-through. Overall, this is an energetic, inspiring, and mutually supportive match.",
    score: 9,
  },
  "sagittarius-taurus": {
    heading: "SAGITTARIUS + TAURUS",
    description: "Sagittarius's need for freedom and adventure conflicts with Taurus's need for security and routine. You crave variety and exploration while Taurus prefers stability and predictability. This creates significant challenges. You can help Taurus be more adventurous and open-minded, while Taurus can teach you about commitment and stability. The key challenges are your restlessness frustrating Taurus's need for security and Taurus's possessiveness limiting your freedom. Success requires significant compromise and appreciation for your different approaches to life.",
    score: 4,
  },
  "sagittarius-gemini": {
    heading: "SAGITTARIUS + GEMINI",
    description: "Sagittarius and Gemini are opposite signs, creating a complementary and exciting partnership. Both signs love learning, adventure, and freedom. Your philosophical depth complements Gemini's intellectual versatility, creating endless conversation and shared exploration. You both value independence and variety, making this a fun, dynamic relationship. The challenges are that both signs can be commitment-phobic and scattered, potentially lacking depth or stability. However, opposites attract for a reason - you each have what the other lacks. With communication and compromise, this can be an adventurous, inspiring, and intellectually rich partnership.",
    score: 8,
  },
  "sagittarius-cancer": {
    heading: "SAGITTARIUS + CANCER",
    description: "Sagittarius's need for freedom and adventure conflicts with Cancer's need for security and emotional connection. You crave exploration and independence while Cancer prefers staying home and building emotional intimacy. This creates significant challenges. You can help Cancer be more adventurous and optimistic, while Cancer can teach you about emotional depth and commitment. The key challenges are your restlessness frustrating Cancer's need for security and Cancer's emotional needs feeling suffocating to freedom-loving you. Success requires significant compromise and appreciation for your different approaches to life.",
    score: 4,
  },
  "sagittarius-leo": {
    heading: "SAGITTARIUS + LEO",
    description: "Sagittarius and Leo create an optimistic, adventurous, and highly compatible fire sign partnership. Both signs love fun, adventure, and living life to the fullest. Your philosophical nature and sense of humor complement Leo's dramatic flair and warmth. You both value honesty, generosity, and independence, creating a relationship filled with excitement and mutual support. The challenge is that both signs can be self-focused and restless, potentially lacking depth or commitment. To thrive, you'll need to work on emotional intimacy and follow-through. Overall, this is an enthusiastic, inspiring, and joyful match.",
    score: 9,
  },
  "sagittarius-virgo": {
    heading: "SAGITTARIUS + VIRGO",
    description: "Sagittarius's philosophical, big-picture approach conflicts with Virgo's practical, detail-oriented nature. You seek meaning and adventure while Virgo focuses on facts and precision. This square aspect creates tension but also potential for growth. You can help Virgo see the bigger picture and be more optimistic, while Virgo can help you pay attention to details and be more practical. The key challenges are Virgo's criticism dampening your enthusiasm and your restlessness frustrating Virgo's need for routine. Success requires mutual respect and appreciation for your different perspectives.",
    score: 5,
  },
  "sagittarius-libra": {
    heading: "SAGITTARIUS + LIBRA",
    description: "Sagittarius and Libra form an optimistic, adventurous partnership. Both signs love socializing, exploring new ideas, and enjoying life's pleasures. Your philosophical nature appeals to Libra's intellectual side, while Libra's diplomatic skills help smooth your sometimes blunt honesty. You both value freedom and independence, creating a relationship with plenty of space to grow. The main challenge is your restlessness conflicting with Libra's need for partnership. Overall, this is a fun, intellectually stimulating, and harmonious match.",
    score: 8,
  },
  "sagittarius-scorpio": {
    heading: "SAGITTARIUS + SCORPIO",
    description: "Sagittarius's light, freedom-loving nature conflicts with Scorpio's intense, focused approach. You crave adventure and independence while Scorpio seeks emotional depth and commitment. This creates challenges but also potential for growth. You can help Scorpio be more optimistic and open-minded, while Scorpio can teach you about emotional depth and commitment. The key challenges are Scorpio's possessiveness limiting your freedom and your bluntness hurting Scorpio's feelings. With mutual respect and willingness to compromise, you can create a passionate, adventurous partnership.",
    score: 5,
  },
  "sagittarius-sagittarius": {
    heading: "SAGITTARIUS + SAGITTARIUS",
    description: "Two Sagittarians together create an adventurous, optimistic, and endlessly exciting partnership. You both understand each other's need for freedom, exploration, and philosophical discussion. The relationship is filled with travel, learning, and shared adventures. However, this pairing can lack stability, commitment, or emotional depth, with both partners avoiding serious responsibility or intimacy. The relationship may feel scattered without grounding. To thrive, you'll need to work on commitment, follow-through, and emotional connection. When balanced, this is an inspiring, joyful, and mutually liberating relationship.",
    score: 7,
  },
  "sagittarius-capricorn": {
    heading: "SAGITTARIUS + CAPRICORN",
    description: "Sagittarius's optimistic, freedom-loving nature conflicts with Capricorn's serious, goal-oriented approach. You crave adventure and spontaneity while Capricorn values structure and long-term planning. This creates tension but also potential for balance. Capricorn can help you be more focused and responsible, while you can teach Capricorn to lighten up and take risks. The key challenges are Capricorn's seriousness dampening your enthusiasm and your restlessness frustrating Capricorn's need for stability. With mutual respect and appreciation for your different strengths, you can create a balanced, successful partnership.",
    score: 5,
  },
  "sagittarius-aquarius": {
    heading: "SAGITTARIUS + AQUARIUS",
    description: "Sagittarius and Aquarius create an innovative, freedom-loving, and highly compatible partnership. Both signs value independence, progressive thinking, and intellectual exploration. Aquarius's unique perspective and humanitarian focus fascinate you, while your philosophical nature and optimism inspire Aquarius. You both need freedom and mental stimulation, creating a relationship with plenty of space for individual growth. The challenge is that both signs can be emotionally detached and commitment-phobic. To deepen the connection, you'll need to work on emotional intimacy. Overall, this is an exciting, progressive, and mutually inspiring match.",
    score: 9,
  },
  "sagittarius-pisces": {
    heading: "SAGITTARIUS + PISCES",
    description: "Sagittarius's logical, freedom-loving nature conflicts with Pisces's emotional, security-seeking approach. You crave adventure and independence while Pisces seeks emotional connection and spiritual depth. This square aspect creates challenges but also potential for growth. Pisces can teach you about emotional intelligence and compassion, while you can help Pisces be more optimistic and confident. The key challenges are your bluntness hurting sensitive Pisces and Pisces's emotional needs feeling limiting to freedom-loving you. Success requires patience, empathy, and willingness to understand each other's different perspectives.",
    score: 5,
  },
  
  // CAPRICORN COMBINATIONS
  "capricorn-aries": {
    heading: "CAPRICORN + ARIES",
    description: "Capricorn's cautious, strategic approach conflicts with Aries's impulsive, risk-taking nature. You're willing to work slowly toward long-term goals while Aries wants immediate results. This square aspect creates tension but also potential for achievement. You can teach Aries about patience, planning, and perseverance, while Aries can inspire you to take more risks and act more quickly. The key challenges are Aries's impatience with your slowness and your frustration with Aries's recklessness. With mutual respect, you can create a powerful partnership that balances strategy with action.",
    score: 5,
  },
  "capricorn-taurus": {
    heading: "CAPRICORN + TAURUS",
    description: "Capricorn and Taurus create a stable, ambitious, and highly compatible earth sign partnership. Both signs value security, hard work, and building lasting foundations. Your ambition complements Taurus's practical approach, creating a power couple focused on achievement and stability. You both appreciate loyalty, tradition, and material success. The challenge is that both signs can be overly serious and work-focused, potentially lacking spontaneity or emotional expression. To thrive, you'll need to make time for pleasure and emotional connection. Overall, this is a stable, successful, and enduring match.",
    score: 9,
  },
  "capricorn-gemini": {
    heading: "CAPRICORN + GEMINI",
    description: "Capricorn's serious, goal-oriented nature conflicts with Gemini's playful, changeable approach. You value structure and long-term planning while Gemini prefers variety and spontaneity. This creates tension but also potential for balance. You can help Gemini be more focused and responsible, while Gemini can teach you to lighten up and be more flexible. The key challenges are your seriousness dampening Gemini's playful spirit and Gemini's inconsistency frustrating your need for reliability. Success requires mutual respect and appreciation for your different strengths.",
    score: 4,
  },
  "capricorn-cancer": {
    heading: "CAPRICORN + CANCER",
    description: "Capricorn and Cancer are opposite signs, creating a complementary and potentially powerful partnership. Cancer's emotional, nurturing nature balances your practical, ambitious approach. Cancer provides the emotional support and home life that you need, while you provide the security and stability Cancer craves. Both signs value family, tradition, and building lasting foundations. The challenges are your emotional reserve conflicting with Cancer's need for emotional expression and your work focus leaving Cancer feeling neglected. With communication and compromise, this can be a stable, successful, and mutually supportive partnership.",
    score: 7,
  },
  "capricorn-leo": {
    heading: "CAPRICORN + LEO",
    description: "Capricorn's serious, goal-oriented nature conflicts with Leo's expressive, playful approach. You value achievement and status while Leo craves attention and fun. This creates tension but also potential for mutual respect. You can help Leo be more disciplined and strategic, while Leo can teach you to lighten up and enjoy life. The key challenges are your seriousness dampening Leo's playful spirit and Leo's need for attention conflicting with your work focus. With mutual appreciation for each other's strengths, you can create a powerful, successful partnership.",
    score: 5,
  },
  "capricorn-virgo": {
    heading: "CAPRICORN + VIRGO",
    description: "Capricorn and Virgo create a practical, ambitious, and highly compatible earth sign partnership. Both signs value hard work, responsibility, and building lasting foundations. Your ambition complements Virgo's analytical approach, creating a power couple focused on achievement and excellence. You both appreciate loyalty, tradition, and material success. The challenge is that both signs can be overly serious and work-focused, potentially lacking spontaneity or emotional expression. To thrive, you'll need to make time for pleasure and emotional connection. Overall, this is a stable, successful, and enduring match.",
    score: 9,
  },
  "capricorn-libra": {
    heading: "CAPRICORN + LIBRA",
    description: "Capricorn's serious, ambitious nature contrasts with Libra's social, harmony-seeking approach. You're focused on achievement and status, while Libra prioritizes relationships and balance. This square aspect creates tension but also potential for growth. You can help Libra be more decisive and goal-oriented, while Libra can teach you about work-life balance and the importance of relationships. Success requires appreciating your different approaches and finding common ground in your shared desire for stability and success.",
    score: 5,
  },
  "capricorn-scorpio": {
    heading: "CAPRICORN + SCORPIO",
    description: "Capricorn and Scorpio create a powerful, ambitious, and deeply compatible partnership. Both signs are determined, loyal, and focused on long-term goals. Your ambition complements Scorpio's intensity, creating a power couple capable of achieving great things. You both value loyalty, privacy, and building lasting foundations. The main challenge is that both signs can be controlling and emotionally reserved, potentially lacking warmth or spontaneity. With trust and emotional openness, you can create a deeply committed, successful, and mutually supportive partnership.",
    score: 9,
  },
  "capricorn-sagittarius": {
    heading: "CAPRICORN + SAGITTARIUS",
    description: "Capricorn's serious, goal-oriented nature conflicts with Sagittarius's optimistic, freedom-loving approach. You value structure and long-term planning while Sagittarius craves adventure and spontaneity. This creates tension but also potential for balance. You can help Sagittarius be more focused and responsible, while Sagittarius can teach you to lighten up and take risks. The key challenges are your seriousness dampening Sagittarius's enthusiasm and Sagittarius's restlessness frustrating your need for stability. With mutual respect and appreciation for your different strengths, you can create a balanced, successful partnership.",
    score: 5,
  },
  "capricorn-capricorn": {
    heading: "CAPRICORN + CAPRICORN",
    description: "Two Capricorns together create an ambitious, disciplined, and highly successful partnership. You both understand each other's need for achievement, status, and long-term security. The relationship is built on mutual respect, shared goals, and practical support. However, this pairing can become overly serious and work-focused, with both partners neglecting emotional intimacy, fun, or spontaneity. The relationship may feel more like a business partnership than a romantic one. To thrive, you'll need to work on emotional expression, playfulness, and work-life balance. When balanced, this creates a powerful, successful, and enduring relationship.",
    score: 7,
  },
  "capricorn-aquarius": {
    heading: "CAPRICORN + AQUARIUS",
    description: "Capricorn's traditional, structured approach conflicts with Aquarius's innovative, unconventional nature. You value tradition and proven methods while Aquarius values progress and experimentation. This creates tension but also potential for innovation. Aquarius can help you be more open-minded and progressive, while you can help Aquarius turn ideas into practical reality. The key challenges are your need for structure conflicting with Aquarius's need for freedom and your traditional values clashing with Aquarius's rebellious nature. With mutual respect, you can create a productive, forward-thinking partnership.",
    score: 5,
  },
  "capricorn-pisces": {
    heading: "CAPRICORN + PISCES",
    description: "Capricorn and Pisces create a complementary partnership that balances practicality with creativity. Your grounded, ambitious nature provides the structure that dreamy Pisces needs, while Pisces adds emotional depth and creativity to your life. You both value loyalty and long-term commitment. Pisces's intuition complements your practicality, creating a balanced relationship. The main challenge is Pisces's emotional complexity sometimes overwhelming your more straightforward nature. With patience and understanding, you can create a nurturing, successful, and mutually supportive partnership.",
    score: 8,
  },
  
  // AQUARIUS COMBINATIONS
  "aquarius-aries": {
    heading: "AQUARIUS + ARIES",
    description: "Aquarius and Aries create an exciting, innovative, and intellectually stimulating partnership. Both signs value independence, originality, and forward-thinking. Your unique perspective fascinates Aries, while Aries's courage and directness inspire you to act on your ideas. You both need freedom and space, creating a relationship with plenty of room for individual growth. The challenge is that both signs can be emotionally detached and stubborn. To deepen the connection, you'll need to work on emotional intimacy and compromise. Overall, this is a dynamic, progressive, and mutually inspiring match.",
    score: 8,
  },
  "aquarius-taurus": {
    heading: "AQUARIUS + TAURUS",
    description: "Aquarius's unconventional, freedom-loving nature conflicts with Taurus's traditional, security-focused approach. Both signs are fixed, making you both stubborn and resistant to change. You value innovation and independence while Taurus values stability and tradition. This square aspect creates significant tension. You can help Taurus be more open-minded and progressive, while Taurus can teach you about commitment and practicality. The key challenges are Taurus's need for security conflicting with your need for freedom. Success requires significant compromise and mutual respect.",
    score: 4,
  },
  "aquarius-gemini": {
    heading: "AQUARIUS + GEMINI",
    description: "Aquarius and Gemini create an intellectually stimulating, innovative, and highly compatible air sign partnership. Both signs value communication, ideas, and independence. Your unique perspective and humanitarian focus fascinate Gemini, while Gemini's versatility and social skills help you connect with others. You both need freedom and mental stimulation, creating a relationship with plenty of space for individual growth. The challenge is that both signs can be emotionally detached. To deepen the connection, you'll need to work on emotional intimacy. Overall, this is a progressive, exciting, and mutually inspiring match.",
    score: 9,
  },
  "aquarius-cancer": {
    heading: "AQUARIUS + CANCER",
    description: "Aquarius's intellectual, unconventional nature conflicts with Cancer's emotional, traditional approach. You value independence and innovation while Cancer seeks emotional intimacy and security. This creates significant challenges. You can help Cancer be more open-minded and less emotionally reactive, while Cancer can teach you about emotional intelligence and nurturing. The key challenges are your emotional detachment hurting Cancer's feelings and Cancer's emotional needs feeling suffocating to independent you. Success requires significant compromise, patience, and appreciation for your very different approaches to relationships.",
    score: 4,
  },
  "aquarius-leo": {
    heading: "AQUARIUS + LEO",
    description: "Aquarius and Leo are opposite signs, creating both attraction and tension. You're cool, detached, and focused on groups and ideals while Leo is warm, personal, and craves individual attention. This creates challenges but also complementary dynamics. You can help Leo see the bigger picture beyond themselves, while Leo can teach you about warmth and personal connection. The key challenges are Leo's need for attention conflicting with your independence and Leo's pride clashing with your rebellious nature. With communication and compromise, this can be a creative, innovative, and mutually enriching partnership.",
    score: 6,
  },
  "aquarius-virgo": {
    heading: "AQUARIUS + VIRGO",
    description: "Aquarius's innovative, unconventional nature conflicts with Virgo's practical, conventional approach. You value experimentation and progress while Virgo values routine and proven methods. This creates tension but also potential for innovation. You can help Virgo be more open-minded and progressive, while Virgo can help you turn ideas into practical reality. The key challenges are Virgo's criticism frustrating your creativity and your unpredictability unsettling Virgo's need for routine. With mutual respect and appreciation for your different strengths, you can create a productive, innovative partnership.",
    score: 5,
  },
  "aquarius-libra": {
    heading: "AQUARIUS + LIBRA",
    description: "Aquarius and Libra create an intellectually stimulating, socially conscious partnership. Both air signs value communication, ideas, and social connection. Your innovative thinking fascinates Libra, while Libra's diplomatic skills help you navigate social situations. You both value independence and fairness, creating a relationship built on friendship and mutual respect. The challenge is that both signs can be emotionally detached. To deepen the connection, you'll need to work on emotional intimacy. Overall, this is a harmonious, forward-thinking, and mutually supportive match.",
    score: 9,
  },
  "aquarius-scorpio": {
    heading: "AQUARIUS + SCORPIO",
    description: "Aquarius's intellectual, independent nature conflicts with Scorpio's emotional, possessive approach. Both signs are fixed, making you both stubborn and resistant to compromise. You value freedom and detachment while Scorpio seeks emotional intensity and control. This square aspect creates significant tension. You can help Scorpio be more objective and less controlling, while Scorpio can teach you about emotional depth and intimacy. The key challenges are Scorpio's possessiveness conflicting with your need for freedom and your detachment hurting Scorpio's feelings. Success requires significant compromise and mutual respect.",
    score: 4,
  },
  "aquarius-sagittarius": {
    heading: "AQUARIUS + SAGITTARIUS",
    description: "Aquarius and Sagittarius create an innovative, freedom-loving, and highly compatible partnership. Both signs value independence, progressive thinking, and intellectual exploration. Your unique perspective and humanitarian focus fascinate Sagittarius, while Sagittarius's philosophical nature and optimism inspire you. You both need freedom and mental stimulation, creating a relationship with plenty of space for individual growth. The challenge is that both signs can be emotionally detached and commitment-phobic. To deepen the connection, you'll need to work on emotional intimacy. Overall, this is an exciting, progressive, and mutually inspiring match.",
    score: 9,
  },
  "aquarius-capricorn": {
    heading: "AQUARIUS + CAPRICORN",
    description: "Aquarius's innovative, unconventional nature conflicts with Capricorn's traditional, structured approach. You value progress and experimentation while Capricorn values tradition and proven methods. This creates tension but also potential for innovation. You can help Capricorn be more open-minded and progressive, while Capricorn can help you turn ideas into practical reality. The key challenges are Capricorn's need for structure conflicting with your need for freedom and Capricorn's traditional values clashing with your rebellious nature. With mutual respect, you can create a productive, forward-thinking partnership.",
    score: 5,
  },
  "aquarius-aquarius": {
    heading: "AQUARIUS + AQUARIUS",
    description: "Two Aquarians together create an innovative, intellectual, and highly independent partnership. You both understand each other's need for freedom, originality, and humanitarian ideals. The relationship is built on friendship, shared values, and mutual respect for independence. However, this pairing can lack emotional intimacy and warmth, with both partners being emotionally detached and focused on ideas rather than feelings. The relationship may feel more like a friendship than a romance. To thrive, you'll need to work on emotional connection and intimacy. When balanced, this creates a progressive, inspiring, and mutually liberating relationship.",
    score: 7,
  },
  "aquarius-pisces": {
    heading: "AQUARIUS + PISCES",
    description: "Aquarius's intellectual, detached nature contrasts with Pisces's emotional, intuitive approach. You value logic and innovation while Pisces seeks emotional connection and spiritual depth. This creates challenges but also potential for growth. Pisces can teach you about emotional intelligence and compassion, while you can help Pisces be more objective and independent. The key challenges are your emotional detachment hurting sensitive Pisces and Pisces's emotional needs feeling overwhelming to independent you. With patience and understanding, you can create a creative, compassionate partnership that balances intellect with emotion.",
    score: 6,
  },
  
  // PISCES COMBINATIONS
  "pisces-aries": {
    heading: "PISCES + ARIES",
    description: "Pisces's sensitive, intuitive nature contrasts sharply with Aries's bold, direct approach. You're emotional and indirect while Aries is action-oriented and straightforward. This creates challenges but also potential for growth. You can teach Aries about empathy, intuition, and emotional depth, while Aries can help you be more confident and assertive. The key challenges are Aries's impatience with your emotional complexity and your hurt by Aries's bluntness. With compassion and understanding, you can create a relationship that balances sensitivity with strength.",
    score: 5,
  },
  "pisces-taurus": {
    heading: "PISCES + TAURUS",
    description: "Pisces and Taurus create a gentle, romantic, and complementary partnership. Taurus's practical, grounded nature provides the stability that dreamy you need, while you add emotional depth and creativity to Taurus's life. You both appreciate beauty, comfort, and emotional connection. Your intuition complements Taurus's practicality, creating a balanced relationship. The main challenge is your emotional complexity sometimes overwhelming Taurus's more straightforward nature. With patience and understanding, you can create a nurturing, romantic, and mutually supportive partnership.",
    score: 8,
  },
  "pisces-gemini": {
    heading: "PISCES + GEMINI",
    description: "Pisces's emotional, intuitive nature conflicts with Gemini's logical, intellectual approach. You seek emotional depth and spiritual connection while Gemini prefers facts and variety. This square aspect creates challenges but also potential for growth. You can teach Gemini about emotional intelligence and intuition, while Gemini can help you communicate more clearly and see things more objectively. The key challenges are Gemini's restlessness overwhelming your need for emotional security and your emotional complexity confusing Gemini's logical mind. Success requires patience, empathy, and willingness to understand each other's different perspectives.",
    score: 5,
  },
  "pisces-cancer": {
    heading: "PISCES + CANCER",
    description: "Pisces and Cancer create a deeply emotional, intuitive, and highly compatible water sign partnership. Both signs understand each other's need for emotional connection, empathy, and spiritual depth. Your creativity and compassion complement Cancer's nurturing nature perfectly. You both value emotional intimacy, intuition, and creating a safe, loving environment. The main challenge is that both signs can be overly emotional and escapist, potentially lacking practicality or grounding. To thrive, you'll need to work on staying connected to reality and making practical decisions. Overall, this is a deeply romantic, empathetic, and emotionally fulfilling match.",
    score: 9,
  },
  "pisces-leo": {
    heading: "PISCES + LEO",
    description: "Pisces's sensitive, intuitive nature contrasts with Leo's confident, expressive approach. You're gentle and indirect while Leo is bold and direct. This creates challenges but also potential for growth. You can teach Leo about empathy, intuition, and emotional subtlety, while Leo can help you be more confident and assertive. The key challenges are Leo's boldness overwhelming your sensitivity and your emotional complexity confusing Leo's straightforward nature. With compassion and understanding, you can create a romantic, creative partnership that balances sensitivity with strength.",
    score: 6,
  },
  "pisces-virgo": {
    heading: "PISCES + VIRGO",
    description: "Pisces and Virgo are opposite signs, creating complementary dynamics. Virgo's practical, analytical nature balances your dreamy, intuitive approach. Virgo can help you organize your ideas and stay grounded, while you can teach Virgo about intuition, compassion, and letting go of perfectionism. Both signs are service-oriented and caring, creating a mutually supportive relationship. The challenges are Virgo's criticism hurting your sensitive feelings and your emotional complexity overwhelming Virgo's logical mind. With understanding and compassion, this can be a healing, balanced, and mutually enriching partnership.",
    score: 7,
  },
  "pisces-libra": {
    heading: "PISCES + LIBRA",
    description: "Pisces's dreamy, emotional nature can both enchant and confuse Libra's logical, balanced approach. You seek deep emotional and spiritual connection, while Libra prefers intellectual harmony. This combination requires understanding and patience. You can teach Libra about emotional depth and intuition, while Libra can help you set boundaries and make decisions. The main challenges are your emotional intensity overwhelming Libra's need for balance, and Libra's intellectual approach seeming cold to sensitive you. With compassion and effort, this can be a romantic, creative partnership.",
    score: 6,
  },
  "pisces-scorpio": {
    heading: "PISCES + SCORPIO",
    description: "Pisces and Scorpio create a deeply emotional, intuitive, and highly compatible water sign partnership. Both signs understand each other's need for emotional depth, spiritual connection, and intimacy. Your compassion and creativity complement Scorpio's intensity perfectly. You both value emotional intimacy, intuition, and transformation. The main challenge is that both signs can be overly emotional and escapist, potentially lacking practicality or boundaries. With grounding and healthy boundaries, you can create a deeply passionate, spiritual, and emotionally fulfilling partnership.",
    score: 9,
  },
  "pisces-sagittarius": {
    heading: "PISCES + SAGITTARIUS",
    description: "Pisces's emotional, security-seeking nature conflicts with Sagittarius's logical, freedom-loving approach. You seek emotional connection and spiritual depth while Sagittarius craves adventure and independence. This square aspect creates challenges but also potential for growth. You can teach Sagittarius about emotional intelligence and compassion, while Sagittarius can help you be more optimistic and confident. The key challenges are Sagittarius's bluntness hurting your sensitive feelings and your emotional needs feeling limiting to freedom-loving Sagittarius. Success requires patience, empathy, and willingness to understand each other's different perspectives.",
    score: 5,
  },
  "pisces-capricorn": {
    heading: "PISCES + CAPRICORN",
    description: "Pisces and Capricorn create a complementary partnership that balances creativity with practicality. Capricorn's grounded, ambitious nature provides the structure that dreamy you need, while you add emotional depth and creativity to Capricorn's life. You both value loyalty and long-term commitment. Your intuition complements Capricorn's practicality, creating a balanced relationship. The main challenge is your emotional complexity sometimes overwhelming Capricorn's more straightforward nature. With patience and understanding, you can create a nurturing, successful, and mutually supportive partnership.",
    score: 8,
  },
  "pisces-aquarius": {
    heading: "PISCES + AQUARIUS",
    description: "Pisces's emotional, intuitive nature contrasts with Aquarius's intellectual, detached approach. You seek emotional connection and spiritual depth while Aquarius values logic and innovation. This creates challenges but also potential for growth. You can teach Aquarius about emotional intelligence and compassion, while Aquarius can help you be more objective and independent. The key challenges are Aquarius's emotional detachment hurting your sensitive feelings and your emotional needs feeling overwhelming to independent Aquarius. With patience and understanding, you can create a creative, compassionate partnership that balances emotion with intellect.",
    score: 6,
  },
  "pisces-pisces": {
    heading: "PISCES + PISCES",
    description: "Two Pisces together create a deeply emotional, intuitive, and spiritually connected partnership. You both understand each other's need for emotional depth, creativity, and spiritual exploration. The relationship is filled with empathy, compassion, and mutual understanding. However, this pairing can become overly emotional and escapist, with both partners avoiding reality, lacking boundaries, or enabling each other's weaknesses. The relationship may lack practicality, direction, or grounding. To thrive, you'll need to work on staying connected to reality, setting boundaries, and making practical decisions. When balanced, this creates a deeply romantic, spiritual, and emotionally fulfilling relationship.",
    score: 7,
  },
}

/**
 * Get compatibility description for two zodiac signs
 * @param userSign - The user's zodiac sign
 * @param otherSign - The sign to compare with
 * @returns Compatibility data object
 */
export function getCompatibility(userSign: ZodiacSign, otherSign: ZodiacSign): CompatibilityData {
  // Normalize signs to lowercase and trim whitespace
  const normalizedUserSign = userSign.toLowerCase().trim()
  const normalizedOtherSign = otherSign.toLowerCase().trim()
  const key = `${normalizedUserSign}-${normalizedOtherSign}`
  
  // Check if we have specific data for this combination
  const data = compatibilityDatabase[key]
  
  if (data) {
    return {
      userSign: normalizedUserSign as ZodiacSign,
      otherSign: normalizedOtherSign as ZodiacSign,
      heading: data.heading,
      description: data.description,
      score: data.score,
    }
  }
  
  // Fallback: Generate a placeholder
  return {
    userSign: normalizedUserSign as ZodiacSign,
    otherSign: normalizedOtherSign as ZodiacSign,
    heading: `${capitalize(normalizedUserSign)} + ${capitalize(normalizedOtherSign)}`,
    description: `Compatibility content for ${capitalize(normalizedUserSign)} and ${capitalize(normalizedOtherSign)} is being prepared. This pairing offers unique dynamics worth exploring.`,
    score: undefined,
  }
}

/**
 * Get all 12 compatibility combinations for a given sign
 * Returns in a specific order (can be customized)
 */
export function getAllCompatibilities(userSign: ZodiacSign): CompatibilityData[] {
  const allSigns: ZodiacSign[] = [
    "aries", "taurus", "gemini", "cancer",
    "leo", "virgo", "libra", "scorpio",
    "sagittarius", "capricorn", "aquarius", "pisces"
  ]
  
  return allSigns.map(otherSign => getCompatibility(userSign, otherSign))
}

/**
 * Export for use in components
 */
export { compatibilityDatabase }

/**
 * IMPLEMENTATION NOTES FOR FUTURE SUPABASE INTEGRATION:
 * 
 * 1. Create a table: zodiac_compatibility
 *    Columns: id, user_sign, other_sign, heading, description, score, created_at
 * 
 * 2. Query example:
 *    SELECT * FROM zodiac_compatibility 
 *    WHERE user_sign = $1 AND other_sign = $2
 * 
 * 3. Cache results in this file for performance
 * 
 * 4. Allow easy content updates without deploying code
 */

