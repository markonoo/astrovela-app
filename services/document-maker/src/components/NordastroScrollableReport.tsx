import React, { useEffect, useMemo, useState } from "react";

function canUseReplaceStateSafely(): boolean {
  try {
    if (typeof window === "undefined") return false;
    const ok = typeof window.history?.replaceState === "function";
    const href = window.location?.href || "";
    return ok && !href.startsWith("about:");
  } catch {
    return false;
  }
}

type PageProps = { children: React.ReactNode; bg: string; id: string; index: number };
const Page: React.FC<PageProps> = ({ children, bg, id, index }) => (
  <section id={id} className="relative mx-auto my-3 shadow" style={{ width: "210mm", height: "297mm", background: bg }}>
    <div className="absolute inset-[16mm]">{children}</div>
    <div className="absolute bottom-[10mm] left-0 right-0 text-center text-[9pt] tracking-[.08em]">{index}</div>
  </section>
);

const PageHero: React.FC<{ title: string; caption?: React.ReactNode }> = ({ title, caption }) => (
  <div className="h-full text-[#d9c5a0] text-center">
    <div className="font-serif text-[40pt] tracking-[.12em] leading-none">{title}</div>
    {caption ? <div className="mt-8 max-w-[150mm] mx-auto text-[12pt] leading-[1.6]">{caption}</div> : null}
  </div>
);

const PagePanel: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="h-full text-[#d9c5a0]">
    <div className="absolute inset-[10mm] rounded-[8mm] border-2 border-[#d9c5a0] p-[10mm]">
      <div className="text-center font-serif text-[36pt] tracking-[.12em] mb-4">{title}</div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-[11pt] leading-[1.75]">{children}</div>
    </div>
  </div>
);

const ScrollHeader = ({ total, onJump, current, deepLinkingEnabled }: { total: number; onJump: (n: number) => void; current: number; deepLinkingEnabled: boolean }) => {
  const pct = useMemo(() => Math.round((current / total) * 100), [current, total]);
  const [input, setInput] = useState(current);
  useEffect(() => setInput(current), [current]);
  return (
    <div className="sticky top-0 z-50 border-b backdrop-blur bg-white/70">
      <div className="flex items-center gap-3 px-4 py-2">
        <strong>Page {current} / {total}</strong>
        <span className="text-xs border rounded-full px-2 py-0.5">{deepLinkingEnabled ? "links on" : "links off (sandbox)"}</span>
        <input
          className="w-20 border rounded px-2 py-1"
          type="number"
          min={1}
          max={total}
          value={input}
          onChange={(e) => setInput(parseInt(e.target.value || "1", 10))}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              onJump(Math.min(total, Math.max(1, input)));
            }
          }}
        />
        <button onClick={() => onJump(current - 1)} disabled={current <= 1}>Prev</button>
        <button onClick={() => onJump(current + 1)} disabled={current >= total}>Next</button>
        <div className="ml-auto w-40 h-2 bg-neutral-200 rounded overflow-hidden">
          <div className="h-full bg-black" style={{ width: `${pct}%` }} />
        </div>
      </div>
    </div>
  );
};

export default function NordastroScrollableReport() {
  const [current, setCurrent] = useState(61);
  const deepLinkingEnabled = canUseReplaceStateSafely();

  // NOTE: As you supply more pages (101–110, 111–120, ...), append to this array.
  const pages: Array<{ id: string; bg: string; content: React.ReactNode }> = [
    // Placeholder for pages 1–40 from previous content (not included in this sample)
    // ...

    // 41 — The Zodiac Signs (detailed)
    { id: "p-41", bg: "#efe6d7", content: (
      <div className="h-full text-black">
        <div className="text-center font-serif text-[38pt] mb-6">THE ZODIAC SIGNS</div>
        <div className="max-w-[150mm] mx-auto text-[11pt] leading-[1.75] space-y-4">
          <p>
            Zodiac signs, the celestial coordinates that divide the sky into twelve equal parts, are at the heart of astrology’s symbolic language. Each sign represents a unique segment of the ecliptic, complete with its own characteristics, energies, and traits.
          </p>
          <p className="text-neutral-600 italic">(With illustrated circular glyphs of the twelve zodiac signs)</p>
        </div>
      </div>
    )},

    // 42 — The Elemental Classification (detailed)
    { id: "p-42", bg: "#efe6d7", content: (
      <div className="h-full text-black">
        <div className="font-serif text-[30pt] mb-4">THE ELEMENTAL CLASSIFICATION</div>
        <div className="max-w-[150mm] mx-auto text-[11pt] leading-[1.75] space-y-3">
          <p>
            The twelve zodiac signs are categorized into four elements: Fire, Earth, Air, and Water. These elements represent the essential types of energy that manifest in our personalities, life experiences. This categorization reveals the temperament and basic nature of the signs within each element.
          </p>
          <div>
            <div className="font-semibold">Fire Signs (Aries, Leo, Sagittarius)</div>
            <p>Are passionate, dynamic, and energetic. They are known for their enthusiasm, courage, and inspiration. Fire signs are action-oriented, often driven by the desire for self-expression and the pursuit of their passions.</p>
          </div>
          <div>
            <div className="font-semibold">Earth Signs (Taurus, Virgo, Capricorn)</div>
            <p>Are practical, grounded, and reliable. These signs value stability, hard work, and tangible results. Earth signs are focused on material achievements and practicality, embodying resilience and patience.</p>
          </div>
          <div>
            <div className="font-semibold">Air Signs (Gemini, Libra, Aquarius)</div>
            <p>Are intellectual, communicative, and social. They thrive on ideas, information, and interaction. Air signs are known for their curiosity, adaptability, and analytical skills, often seeking to understand and connect with the world through thought and communication.</p>
          </div>
          <div>
            <div className="font-semibold">Water Signs (Cancer, Scorpio, Pisces)</div>
            <p>Are intuitive, emotional, and sensitive. They navigate the world through their feelings, forming deep connections with others. Water signs are known for their empathy, depth, and capacity for healing, often possessing a strong sense of intuition and artistic creativity.</p>
          </div>
        </div>
      </div>
    )},

    // 43 — The Modalities (detailed)
    { id: "p-43", bg: "#efe6d7", content: (
      <div className="h-full text-black">
        <div className="font-serif text-[30pt] mb-4">THE MODALITIES</div>
        <div className="max-w-[150mm] mx-auto text-[11pt] leading-[1.75] space-y-3">
          <p>
            Quadruplicity, or modality, divides the zodiac into three groups of four signs, each group associated with one of the three modalities: Cardinal, Fixed, and Mutable. This classification sheds light on the signs’ approach to change, action, and their way of engaging with the world.
          </p>
          <div>
            <div className="font-semibold">Cardinal Signs (Aries, Cancer, Libra, Capricorn)</div>
            <p>Are initiators, known for their leadership qualities and ability to start new endeavors. They are dynamic, ambitious, and driven, often setting trends and embracing change.</p>
          </div>
          <div>
            <div className="font-semibold">Fixed Signs (Taurus, Leo, Scorpio, Aquarius)</div>
            <p>Are stabilizers, focusing on persistence, reliability, and depth. These signs are known for their determination, resistance to change, and ability to see projects through to completion.</p>
          </div>
          <div>
            <div className="font-semibold">Mutable Signs (Gemini, Virgo, Sagittarius, Pisces)</div>
            <p>Are adaptable, flexible, and versatile. They are the finishers, capable of adjusting to changing circumstances and embracing transformation. Mutable signs are known for their resourcefulness, flexibility, and communicative skills.</p>
          </div>
          <p className="text-neutral-600 italic">“This classification sheds light on the signs’ approach to change, action, and their way of engaging with the world.”</p>
        </div>
      </div>
    )},

    // 44 — Duality in Astrology (detailed)
    { id: "p-44", bg: "#efe6d7", content: (
      <div className="h-full text-black">
        <div className="font-serif text-[30pt] mb-4">DUALITY IN ASTROLOGY</div>
        <div className="max-w-[150mm] mx-auto text-[11pt] leading-[1.75] space-y-3">
          <p>
            Duality, also known as polarity, divides the twelve zodiac signs into two groups: masculine (active) and feminine (passive). This division is not about gender but rather about the yin and yang of the universe, representing a fundamental balance in astrological philosophy.
          </p>
          <div>
            <div className="font-semibold">Masculine Signs (Aries, Gemini, Leo, Libra, Sagittarius, Aquarius)</div>
            <p>Are focused, action-oriented, and confident. They symbolize the yang aspect, associated with extraversion, initiation, and directness. These signs are more inclined towards engaging with the world through action and exploration.</p>
          </div>
          <div>
            <div className="font-semibold">Feminine Signs (Taurus, Cancer, Virgo, Scorpio, Capricorn, Pisces)</div>
            <p>Embodies the yin aspect, focusing on receptivity, introspection, and nurturing. These signs are more about internal processing, intuition, and developing emotional and spiritual depth. They tend to approach life through reflection and absorbing influences from their surroundings.</p>
          </div>
          <p className="text-neutral-600 italic">“Duality in astrology highlights the balance of active and passive energies within the zodiac, emphasizing the need for harmony between taking action and reflection.”</p>
        </div>
      </div>
    )},

    // 45 — 4 – The Significance (detailed)
    { id: "p-45", bg: "#efe6d7", content: (
      <div className="h-full text-black">
        <div className="text-center font-serif text-[32pt] mb-2">4 – The Significance</div>
        <div className="grid place-items-center mb-4">
          <div className="font-serif text-[60pt] leading-none text-neutral-300">4</div>
        </div>
        <div className="max-w-[150mm] mx-auto text-[11pt] leading-[1.75] space-y-3">
          <p>
            Each zodiac sign is ruled by a specific planet, which greatly influences the sign’s characteristics and energy. The planetary ruler adds another layer of depth to the sign’s traits, coloring its expression with the planet’s symbolic qualities.
          </p>
          <p>
            Zodiac signs also play a crucial role in the astrological houses, with each house associated with a specific area of life. The sign that governs a house in a natal chart further defines how the energies of that house are expressed in an individual’s life.
          </p>
          <p className="text-neutral-600 italic">“The sign that governs a house in a natal chart further defines how the energies of that house are expressed in an individual’s life.”</p>
        </div>
      </div>
    )},

    // 46–47 Aries (detailed)
    { id: "p-46", bg: "#000", content: (
      <PagePanel title="ARIES">
        <div>
          <div className="text-[13pt] font-serif mb-2">Fundamental Traits of Aries</div>
          <ul className="space-y-1">
            <li><span className="font-semibold">Duality:</span> Masculine</li>
            <li><span className="font-semibold">Element:</span> Fire</li>
            <li><span className="font-semibold">Quality:</span> Cardinal</li>
            <li><span className="font-semibold">Lucky Day:</span> Tuesday</li>
            <li><span className="font-semibold">Written Symbol:</span> The symbol represents the ram’s horns, signifying assertiveness, initiative, and leadership.</li>
            <li><span className="font-semibold">Symbol:</span> The Ram</li>
            <li><span className="font-semibold">Ruling Planet:</span> Mars. Mars infuses Aries with aggression, courage, and a competitive spirit.</li>
            <li><span className="font-semibold">Dominant Keyword:</span> “I Am”</li>
            <li><span className="font-semibold">Lucky Number:</span> 1, 9, and the combination of these in any form.</li>
            <li><span className="font-semibold">Body Part Ruled:</span> Head</li>
          </ul>
        </div>
        <div>
          <div className="text-[13pt] font-serif mb-2">Description</div>
          <p>
            Aries is the first sign of the zodiac, symbolizing the onset of something energetic and turbulent. Those born under this sign are continuously looking for dynamics, speed, and competition. They are natural leaders, motivated by their strong initiative and determination. Aries possess undeniable courage and confidence that often leads them to take initiative.
          </p>
          <p className="mt-3">
            Their impulsive nature and tendency to jump into challenges without thinking can sometimes put them at risk. Aries are passionate and straightforward, with a love for justice, and they often take on the role of a hero in the lives of others. Their fiery energy and adventurous spirit make them inspiring figures.
          </p>
          <div className="mt-4"><span className="font-semibold">Best Compatible With:</span> Gemini, Leo, Sagittarius, Aquarius</div>
        </div>
      </PagePanel>
    ) },
    { id: "p-47", bg: "#000", content: (
      <PagePanel title="ARIES">
        <div>
          <div className="text-[13pt] font-serif mb-2">The Inner Aries</div>
          <p>
            Aries are a bundle of energy and dynamism. They possess an inherent passion for life that pushes them to pursue their goals with enthusiasm. Aries are natural-born leaders, often finding themselves in positions of authority due to their ability to take initiative and inspire others. Despite their tough exterior, Aries have a childlike innocence and a pure belief in the possibilities life has to offer. They crave adventure and are always on the lookout for new challenges to overcome.
          </p>
          <div className="mt-4">
            <div className="font-semibold">Health and Diet</div>
            <p>Aries need to pay special attention to their head and face, as these are their most vulnerable areas. Engaging in regular physical exercise is crucial for maintaining their high energy levels. A diet rich in iron, such as leafy green vegetables and lean meats, can help fight fatigue. Stress-reducing activities should be incorporated to help with Aries’ tendency toward stress headaches.</p>
          </div>
          <div className="mt-4">
            <div className="font-semibold">How Others See Aries</div>
            <p>To the outside world, Aries appear as confident, passionate, and unstoppable forces of nature. Their courage and willingness to take risks are admired, though sometimes seen as intimidating. Their directness can be perceived as tactless, but their genuine desire to help and lead shines through.</p>
          </div>
        </div>
        <div>
          <div className="mt-0">
            <div className="font-semibold">Love and Relationships</div>
            <p>Aries in love are bold and spontaneous. They pursue romance with passion and often take the lead. They thrive on adventure and need partners who can keep up with their energy. They are passionate lovers, but patience in long-term relationships can be a struggle.</p>
          </div>
          <div className="mt-4">
            <div className="font-semibold">Career and Finance</div>
            <p>Aries are natural leaders who thrive in roles that allow bold action. Careers often include entrepreneurship, sales, or leadership roles. However, they must avoid impulsive financial risks.</p>
          </div>
          <div className="mt-4">
            <div className="font-semibold">Celebrities with Aries Sun</div>
            <p>Lady Gaga (Mar 28), Robert Downey Jr. (Apr 4), Leonardo da Vinci (Apr 15), Elton John (Mar 25), Emma Watson (Apr 15), Jackie Chan (Apr 7), Mariah Carey (Mar 27), Vincent van Gogh (Mar 30), Celine Dion (Mar 30), Russell Crowe (Apr 7), Steven Tyler (Mar 26), Reese Witherspoon (Mar 22), Kiera Knightley (Mar 26), Alec Baldwin (Apr 3), Quentin Tarantino (Mar 27)</p>
          </div>
        </div>
      </PagePanel>
    ) },

    // 48–49 Taurus (detailed)
    { id: "p-48", bg: "#000", content: (
      <PagePanel title="TAURUS">
        <div>
          <div className="text-[13pt] font-serif mb-2">Fundamental Traits of Taurus</div>
          <ul className="space-y-1">
            <li><span className="font-semibold">Duality:</span> Feminine</li>
            <li><span className="font-semibold">Element:</span> Earth</li>
            <li><span className="font-semibold">Quality:</span> Fixed</li>
            <li><span className="font-semibold">Lucky Day:</span> Friday</li>
            <li><span className="font-semibold">Written Symbol:</span> This symbol represents the bull’s head and horns, signifying resilience, determination, and a peaceful yet powerful demeanor.</li>
            <li><span className="font-semibold">Symbol:</span> The Bull</li>
            <li><span className="font-semibold">Ruling Planet:</span> Venus. The planet of love and beauty influences Taurus to appreciate harmony, artistry, and sensory experiences.</li>
            <li><span className="font-semibold">Dominant Keyword:</span> “I Have”</li>
            <li><span className="font-semibold">Lucky Number:</span> 2, 6, and any combination of them.</li>
            <li><span className="font-semibold">Body Part Ruled:</span> Neck & Throat</li>
          </ul>
        </div>
        <div>
          <div className="text-[13pt] font-serif mb-2">Description</div>
          <p>
            Tauruses are loyal and stable, making them excellent friends and partners. They resist change, preferring stability. Their connection to the Earth makes them sensual, grounded, and comforted by consistency. Tauruses are determined, patient, and hardworking, pursuing their goals steadily.
          </p>
          <div className="mt-4"><span className="font-semibold">Best Compatible With:</span> Cancer, Virgo, Capricorn, Pisces</div>
        </div>
      </PagePanel>
    ) },
    { id: "p-49", bg: "#000", content: (
      <PagePanel title="TAURUS">
        <div>
          <div className="text-[13pt] font-serif mb-2">The Inner Taurus</div>
          <p>
            Tauruses are deeply sensitive, loyal, and crave stability. They enjoy beauty and comfort, often expressed through artistic pursuits. They are reliable and practical, making them excellent partners.
          </p>
          <div className="mt-4">
            <div className="font-semibold">Health and Diet</div>
            <p>Taurus needs to pay attention to throat and neck health. Diets with throat-soothing foods (honey, herbal teas) and balanced exercise are essential. Stress management is vital due to Taurus’s love for indulgence.</p>
          </div>
          <div className="mt-4">
            <div className="font-semibold">How Others See Taurus</div>
            <p>Others view them as calm, composed, and reliable. Their patience earns respect, though resistance to change may be seen as stubbornness. Their love for luxury is admired, and loyalty makes them dependable.</p>
          </div>
        </div>
        <div>
          <div className="mt-0">
            <div className="font-semibold">Love and Relationships</div>
            <p>Venus grants Taurus an appreciation for beauty and love. They seek stability and security in love, creating luxurious and consistent relationships.</p>
          </div>
          <div className="mt-4">
            <div className="font-semibold">Career and Finance</div>
            <p>They thrive in finance, administration, or luxury industries. They excel in managing money but must remain adaptable to avoid rigidity.</p>
          </div>
          <div className="mt-4">
            <div className="font-semibold">Celebrities with Taurus Sun</div>
            <p>Queen Elizabeth II (Apr 21), Dwayne Johnson (May 2), Adele (May 5), David Beckham (May 2), George Clooney (May 6), Audrey Hepburn (May 4), Al Pacino (Apr 25), Megan Fox (May 16), Mark Zuckerberg (May 14), Kelly Clarkson (Apr 24), Penélope Cruz (Apr 28), Cher (May 20), Jessica Alba (Apr 28), Jack Nicholson (Apr 22), William Shakespeare (Apr 26)</p>
          </div>
        </div>
      </PagePanel>
    ) },

    // 50–51 Gemini
    { id: "p-50", bg: "#000", content: (
      <PagePanel title="GEMINI">
        <div>
          <div className="text-[13pt] font-serif mb-2">Fundamental Traits of Gemini</div>
          <ul className="space-y-1">
            <li><span className="font-semibold">Duality:</span> Masculine</li>
            <li><span className="font-semibold">Element:</span> Air</li>
            <li><span className="font-semibold">Quality:</span> Mutable</li>
            <li><span className="font-semibold">Lucky Day:</span> Wednesday</li>
            <li><span className="font-semibold">Written Symbol:</span> By representing two pillars united at the top and base, it signifies the connection and communication between dual entities.</li>
            <li><span className="font-semibold">Symbol:</span> The Twins</li>
            <li><span className="font-semibold">Ruling Planet:</span> Mercury. The planet of communication influences Gemini to be curious, expressive, and skilled in expressing their thoughts and ideas.</li>
            <li><span className="font-semibold">Dominant Keyword:</span> “I Think”</li>
            <li><span className="font-semibold">Lucky Number:</span> 5, 7, and any combination of them</li>
            <li><span className="font-semibold">Body Part Ruled:</span> Arms, shoulders, hands, and lungs</li>
          </ul>
        </div>
        <div>
          <p>
            Gemini, an air sign symbolized by the celestial twins, embodies dual aspects of personality, offering a mix of yin and yang energy. This sign is characterized by its vibrant, dynamic, and communicative nature. Geminis are curious and intellectual, with a constant thirst for knowledge and experiences. Their ability to exchange ideas and indulge in conversations makes them excellent communicators and friends.
          </p>
          <p className="mt-3">
            However, their dual nature can sometimes lead to indecisiveness and inconsistency, as they attempt to explore multiple interests simultaneously. Geminis are adaptable and outgoing, often thriving in fast-paced, varied environments. Their wit and humor, combined with their intellectual curiosity, make them fascinating and lively companions.
          </p>
          <p className="mt-3">
            Gemini represents the dual nature and inherent versatility of those born under this sign. They navigate life through communication and are also known for their wit, intellect, and dynamic personalities.
          </p>
          <div className="mt-4">
            <span className="font-semibold">Best Compatible With:</span> Aries, Leo, Libra, Aquarius
          </div>
        </div>
      </PagePanel>
    ) },
    { id: "p-51", bg: "#fff", content: (
      <div className="whitespace-pre-wrap font-serif text-[11pt] leading-[1.6] text-black">
        {`THE INNER GEMINI\nInternally, Gemini individuals are complex and often misunderstood. They have a strong sense of curiosity and a desire to explore all that life has to offer. Geminis are thinkers and communicators, always processing information and seeking to share their discoveries with others. Despite their outgoing nature, they have a reflective side that seeks deeper understanding. Geminis crave variety and can often feel restless if bound to routine or monotony.\n\nHOW OTHERS SEE GEMINI\nTo others, Geminis appear as charming, witty, and sociable people who often are the life of the party. This is due to their ability to engage in small talk and adapt to any social setting. However, their changeable nature can sometimes be understood as inconsistency or indecisiveness. Geminis are known for their intellect and asking for advice, however, their ability to see both sides of every issue can make them seem unreliable.\n\nHEALTH AND DIET\nGeminis should pay special attention to their respiratory system and mental well-being. Activities like yoga and meditation can help maintain their mental and physical health. A balanced diet rich in omega-3 fatty acids, found in fish and nuts, can support brain health, while antioxidants from fruits and vegetables protect against respiratory issues. Regular social interaction and intellectual challenges are also necessary for maintaining Geminis’ mental health.\n\nLOVE AND RELATIONSHIPS\nGemini, ruled by Mercury, brings a communicative and intellectual dynamic to relationships. They are drawn to partners who can match their wit and curiosity, craving mental stimulation as much as emotional connection. Geminis enjoy variety in their love life, seeking new experiences and learning opportunities within their relationships. They value freedom and space, fearing stagnation above all.\n\nCAREER AND FINANCE\nGeminis’ versatility and love for variety often lead them to pursue multiple career paths or jobs that involve diverse skills and tasks. They are excellent communicators, which makes them fit for careers in marketing, public relations, or journalism. Financially, Geminis enjoy making money in unconventional ways but need to be wary of their tendency to make impulsive purchases. A balanced budget could help them manage their sometimes erratic earning patterns.\n\nCELEBRITIES WITH GEMINI SUN\nAngelina Jolie (June 4), Kanye West (June 8), Johnny Depp (June 9), Natalie Portman (June 9), Marilyn Monroe (June 1), Paul McCartney (June 18), Nicole Kidman (June 20), Prince (June 7), Bob Dylan (May 24), Ian McKellen (May 25), Naomi Campbell (May 22), Helena Bonham Carter (May 26), Lauryn Hill (May 26), Octavia Spencer (May 25), Neil Patrick Harris (June 15)`}
      </div>
    ) },

    // 52–53 Cancer
    { id: "p-52", bg: "#fff", content: (
      <div className="whitespace-pre-wrap font-serif text-[11pt] leading-[1.6] text-black">
        {`CANCER (June 21 – July 22)\n\nFundamental Traits of Cancer:\nDuality: Feminine\nElement: Water\nQuality: Cardinal\nLucky Day: Monday\nWritten Symbol: The symbol represents the crab’s claws, signifying Cancer’s ability to hold onto what they cherish.\nSymbol: The Crab\nRuling Planet: Moon. The Moon phases influence Cancer and reflect their fluctuating moods and deep connection to feelings and comfort.\nDominant Keyword: “I Feel”\nLucky Number: 2, 3, and any combination of them.\nBody Part Ruled: Chest, breasts, and stomach\n\nCancers are protective of their loved ones and can be incredibly nurturing, offering warmth and comfort. Their intuition is their guiding force, often understanding the emotional undercurrents of situations without the need for words. However, their sensitivity can lead them to be overly protective or moody, as they internalize the emotions and energies around them. Cancers value security and comfort, creating cozy, safe spaces that serve as their sanctuary from the outside world.\n\nCancers pay more attention to emotions and represent the nurturing essence and the depth of feelings. Known for their empathy, intuition, and protective instincts, those born under the Cancer sun sign navigate life through their hearts and closely held bonds.\n\nBEST COMPATIBLE WITH: Taurus, Virgo, Scorpio, Pisces`}
      </div>
    ) },
    { id: "p-53", bg: "#fff", content: (
      <div className="whitespace-pre-wrap font-serif text-[11pt] leading-[1.6] text-black">
        {`THE INNER CANCER\nOn the inside, Cancers possess a depth of emotion and empathy. They have a unique strength that occurs from their emotional intelligence, allowing them to be compassionate. Cancers are deeply loyal and value the security of home and family above all. They are sensitive and can be strongly affected by the emotions and environments around them. Their intuition is a guiding force, often leading them to form deep, meaningful connections.\n\nHOW OTHERS SEE CANCER\nTo others, Cancers appear as compassionate, caring, and highly intuitive. They often serve as emotional support in their relationships. Their loyalty and protective nature make them beloved friends and partners. However, their emotional depth can sometimes be perceived as moodiness or oversensitivity. Cancers’ ability to create a cozy, welcoming atmosphere is appreciated by their close ones, whom they can provide with warmth and care.\n\nHEALTH AND DIET\nCancers should pay particular attention to their emotional well-being, as stress and negative emotions can directly impact their physical health. Practices such as meditation, journaling, or therapy can be beneficial. A diet that supports digestive health, including high-fiber fruits, vegetables, and plenty of water, can help manage stomach sensitivities. Incorporating regular, gentle exercise like walking or swimming can also support both their physical and emotional health.\n\nLOVE AND RELATIONSHIPS\nRuled by the Moon, Cancers approach love with sensitivity and depth. They seek emotional security and a deep, nurturing connection with their partners. Cancers show love through caring actions, creating a cozy and protective space for the ones they love. They have a strong instinct for the needs of their partners, often going to great lengths to ensure their comfort and happiness.\n\nCAREER AND FINANCE\nCancers are nurturing and supportive, qualities that make them excel in professions involving care, like healthcare, education, or social work. They are also good at managing resources, which makes them excellent in administrative or managerial roles. Financial security is a priority for Cancers, and they tend to be conservative with investments, preferring safety over high returns. It’s important for them not to let their caution turn into missed opportunities.\n\nCELEBRITIES WITH CANCER SUN\nMeryl Streep (June 22), Tom Hanks (July 9), Princess Diana (July 1), Selena Gomez (July 22), Nelson Mandela (July 18), Robin Williams (July 21), Ariana Grande (June 26), Frida Kahlo (July 6), Kevin Hart (July 6), Chris Pratt (June 21), Lana Del Rey (June 21), George Orwell (June 25), Harrison Ford (July 13), Liv Tyler (July 1), Pamela Anderson (July 1)`}
      </div>
    ) },

    // 54–55 Leo
    { id: "p-54", bg: "#fff", content: (
      <div className="whitespace-pre-wrap font-serif text-[11pt] leading-[1.6] text-black">
        {`LEO (July 23 – August 22)\n\nFundamental Traits of Leo:\nDuality: Masculine\nElement: Fire\nQuality: Fixed\nLucky Day: Sunday\nWritten Symbol: Representing the lion’s mane, tail, and the loop of its body, it signifies Leo’s majestic and brave attributes.\nSymbol: The Lion\nRuling Planet: Sun. The Sun represents vitality, ego, and self-expression, influencing Leos to shine brightly and command attention.\nDominant Keyword: “I Will”\nLucky Number: 1, 3, and their combination.\nBody Part Ruled: Heart & spine\n\nLeos are generous, loyal, and highly protective of their loved ones, often going to great lengths to ensure their happiness and well-being. Their creativity and enthusiasm for life inspire those around them, making Leos excellent friends and partners. However, their desire for admiration can sometimes come off as arrogance. Leos thrive on love and affection, seeking to create and share beauty in all areas of their lives.\n\nLeo radiates warmth, charisma, and an undeniable presence. Governed by the heart and ruled by the sun, Leos are born leaders who approach life with a bold, ambitious, and creative spirit.\n\nBEST COMPATIBLE WITH: Aries, Gemini, Libra, Sagittarius`}
      </div>
    ) },
    { id: "p-55", bg: "#fff", content: (
      <div className="whitespace-pre-wrap font-serif text-[11pt] leading-[1.6] text-black">
        {`THE INNER LEO\nInternally, Leos possess a profound sense of loyalty, generosity, and a desire to protect those they love. Their hearts are big, and they often seek to express their love and creativity in grand, noticeable ways. Despite their confident exterior, Leos crave validation and appreciation, needing to feel valued and respected. They have an innate artistic flair and often excel in creative endeavors, driven by their desire to leave a lasting impact on the world.\n\nHOW OTHERS SEE LEO\nTo others, Leos appear as confident, charismatic, and naturally magnetic people, often drawing attention effortlessly. Their warmth and generosity are very obvious, making them beloved by many. However, their need for admiration and stubbornness can sometimes be perceived as egotistic. Despite this, Leos’ ability to inspire, uplift, and lead is widely admired, making them sought-after friends and leaders.\n\nHEALTH AND DIET\nLeos should pay attention to their heart and spinal health. Engaging in regular cardio exercises like running, swimming, or cycling can help maintain heart health, while yoga and strength training can support spinal integrity. A diet rich in heart-healthy foods, such as omega-3 fatty acids, whole grains, and plenty of fruits and vegetables, is beneficial. Leos should also manage stress through relaxation techniques to protect their heart and overall well-being.\n\nLOVE AND RELATIONSHIPS\nLeo, governed by the Sun, radiates warmth, generosity, and charisma in love. They crave admiration and devotion, seeking partners who will celebrate their strengths and share in their love for drama and romance. Leos are generous lovers, often showering their partners with grand gestures of affection. They thrive in relationships that allow them to express their creativity and passion.\n\nCAREER AND FINANCE\nLeos are charismatic and love being in the spotlight, which makes careers in the arts, entertainment, or any field that allows them to showcase their creativity and leadership ideal. They tend to attract wealth and opportunities but need to manage their finances as carefully as they manage their public image. A Leo’s financial health is often tied to their career success, so maintaining their reputation is crucial.\n\nCELEBRITIES WITH LEO SUN\nBarack Obama (August 4), Madonna (August 16), Jennifer Lopez (July 24), J.K. Rowling (July 31), Sandra Bullock (July 26), Roger Federer (August 8), Charlize Theron (August 7), Chris Hemsworth (August 11), Mick Jagger (July 26), Halle Berry (August 14), Daniel Radcliffe (July 23), Whitney Houston (August 9), Simon Cowell (October 7), Meghan Markle (August 4), Arnold Schwarzenegger (July 30)`}
      </div>
    ) },

    // 56–57 Virgo
    { id: "p-56", bg: "#fff", content: (
      <div className="whitespace-pre-wrap font-serif text-[11pt] leading-[1.6] text-black">
        {`VIRGO (August 23 – September 22)\n\nFundamental Traits of Virgo:\nDuality: Feminine\nElement: Earth\nQuality: Mutable\nLucky Day: Wednesday\nWritten Symbol: Representing a maiden carrying a sheaf of wheat, the symbol signifies Virgo’s connection to harvest, symbolizing productivity and the reaping of rewards through hard work.\nSymbol: The Virgin\nRuling Planet: Mercury. The planet of communication and intellect influences Virgos to be thoughtful and detail-oriented in their thoughts and expressions.\nDominant Keyword: “I Analyze”\nLucky Number: 5, 14, and any combination.\nBody Part Ruled: Digestive system\n\nVirgos are deeply compassionate, offering service to others as a key aspect of their personality. They are modest and`}
      </div>
    ) },
    { id: "p-57", bg: "#fff", content: (
      <div className="whitespace-pre-wrap font-serif text-[11pt] leading-[1.6] text-black">
        {`THE INNER VIRGO\nIntelligent, thoughtful, detail-oriented, critical, and service-driven.\n\nHealth & Diet: Care for digestion. High-fiber diet, probiotics, stress-reducing exercises.\nLove: Express affection through service, seek perfection.\nCareer: Thrive in science, healthcare, consulting. Must avoid over-caution.\nCelebrities: Beyoncé, Michael Jackson, Keanu Reeves, Mother Teresa, Stephen King, Freddie Mercury, Amy Poehler, Blake Lively, Chris Pine, Cameron Diaz.`}
      </div>
    ) },

    // 58–59 Libra
    { id: "p-58", bg: "#fff", content: (
      <div className="whitespace-pre-wrap font-serif text-[11pt] leading-[1.6] text-black">
        {`LIBRA (September 23 – October 22)\n\nFundamental Traits of Libra:\nDuality: Masculine\nElement: Air\nQuality: Cardinal\nLucky Day: Friday\nSymbol: The Scales\nRuling Planet: Venus – love, beauty, aesthetics.\nDominant Keyword: “I Balance”\nLucky Number: 6, 15\nBody Part Ruled: Kidneys & lower back\n\nLibras are diplomatic, charming, balanced, and harmony-seeking.`}
      </div>
    ) },
    { id: "p-59", bg: "#fff", content: (
      <div className="whitespace-pre-wrap font-serif text-[11pt] leading-[1.6] text-black">
        {`THE INNER LIBRA\nCharming, fair, indecisive at times. Seek harmony and justice.\n\nHealth & Diet: Care for kidneys. Balanced diet, hydration, exercise.\nLove: Desire harmony, fairness, romantic, graceful.\nCareer: Thrive in law, HR, PR. Must budget carefully.\nCelebrities: Will Smith, Serena Williams, Mahatma Gandhi, Kim Kardashian, Oscar Wilde, John Lennon, Eminem, Hugh Jackman, Gwen Stefani, Kate Winslet.`}
      </div>
    ) },

    // 60 — Scorpio
    { id: "p-60", bg: "#fff", content: (
      <div className="whitespace-pre-wrap font-serif text-[11pt] leading-[1.6] text-black">
        {`SCORPIO (October 23 – November 21)\n\nFundamental Traits of Scorpio:\nDuality: Feminine\nElement: Water\nQuality: Fixed\nLucky Day: Tuesday\nSymbol: The Scorpion\nRuling Planet: Pluto (traditional Mars) – transformation, rebirth, cycles.\nDominant Keyword: “I Desire”\nLucky Number: 8, 17\nBody Part Ruled: Reproductive system & genitals\n\nScorpios are intense, passionate, loyal, secretive, transformative.`}
      </div>
    ) },

    // 61 — Scorpio (inner) detailed
    { id: "p-61", bg: "#fff", content: (
      <div className="whitespace-pre-wrap font-serif text-[11pt] leading-[1.6] text-black">
        {`THE INNER SCORPIO\nScorpios possess a complexity and depth unmatched by any other sign. They are private, often hiding their true feelings and motivations from others. Scorpios have a natural talent for seeing the truth, making them excellent investigators and analysts. They are incredibly emotional and sensitive, offering loyalty and depth to those they trust. Their desire for transformation allows Scorpios to constantly evolve and reinvent themselves.\n\nHOW OTHERS SEE SCORPIO\nTo others, Scorpios appear as mysterious, magnetic, and often intimidating. Their presence is memorable and they often leave a lasting impression on people. Scorpios are respected for their determination, strength, and resilience, but their intensity and desire for control can sometimes be perceived as overpowering. Their natural charisma and depth make them interesting, drawing others towards them despite the enigmatic aura they project.\n\nHEALTH AND DIET\nScorpios should pay particular attention to their reproductive health and emotional well-being. A diet rich in zinc (such as pumpkin seeds and oysters) can support reproductive health, while foods high in antioxidants and water can help their emotional balance and detoxification processes. Regular and intense exercises can help manage Scorpio’s stress levels, while practices like meditation and journaling can support their emotional depth and need for soul-searching.\n\nLOVE AND RELATIONSHIPS\nPluto-ruled Scorpio approaches love with intensity and passion. They seek deep, transformative relationships, valuing emotional and spiritual connections over superficial encounters. Scorpios are fiercely loyal and protective, offering their full commitment to their partners. However, they can struggle with trust and vulnerability, requiring a partner who is patient and willing to navigate their complex depths.\n\nCAREER AND FINANCE\nScorpios are intense and focused, often excelling in careers that require deep research and where outcomes are impactful, such as in science or investigative fields. They are also drawn to crisis management roles where their resilience and strategic thinking can shine. Financially, Scorpios are secretive but very capable of managing their finances, often having multiple sources of income. Their challenge is to trust others, which sometimes prevents them from investing where collaboration is required.\n\nCELEBRITIES WITH SCORPIO SUN\nLeonardo DiCaprio (November 11), Katy Perry (October 25), Ryan Gosling (November 12), Bill Gates (October 28), Hillary Clinton (October 26), Julia Roberts (October 28), Drake (October 24), Whoopi Goldberg (November 13), Anne Hathaway (November 12), Scarlett Johansson (November 22), Pablo Picasso (October 25), Winona Ryder (October 29), Ciara (October 25), Emma Stone (November 6), Matthew McConaughey (November 4)`}
      </div>
    ) },

    // 62 — Sagittarius (traits) detailed
    { id: "p-62", bg: "#fff", content: (
      <div className="whitespace-pre-wrap font-serif text-[11pt] leading-[1.6] text-black">
        {`SAGITTARIUS (November 22 – December 21)\n\nFundamental Traits of Sagittarius:\nDuality: Masculine\nElement: Fire\nQuality: Mutable\nLucky Day: Thursday\nWritten Symbol: Representing the arrow of the archer, it signifies Sagittarius’s direction towards higher understanding and exploration.\nSymbol: The Archer\nRuling Planet: Jupiter. The planet of luck, growth, and philosophy influences Sagittarius to seek knowledge, truth, and expansion in all aspects of life.\nDominant Keyword: “I See”\nLucky Number: 3, 7, and any combination of them.\nBody Part Ruled: Hips, thighs, and liver\n\nSagittariuses are straightforward and honest, with an affection for humor that endears them to others. Their open-mindedness and philosophical outlook inspire those around them to seek their own adventures and truths.\n\nSagittarius embodies the desire for knowledge, adventure, and understanding. Known for their optimistic outlook, love of freedom, and philosophical insights, those born under the Sagittarius sun sign navigate life with enthusiasm and a desire to explore all its dimensions. Let’s explore the defining characteristics of Sagittarius, from its ruling planet to its symbolic traits, and delve into both the internal essence and external perceptions of those born under the Sagittarius sun sign.\n\nBEST COMPATIBLE WITH: Leo, Aries, Aquarius, Libra`}
      </div>
    ) },

    // 63 — Sagittarius (inner) detailed
    { id: "p-63", bg: "#fff", content: (
      <div className="whitespace-pre-wrap font-serif text-[11pt] leading-[1.6] text-black">
        {`THE INNER SAGITTARIUS\nSagittariuses have a deep-seated need for freedom and exploration. They are truth-seekers, constantly expanding their understanding of the world and themselves. Sagittariuses are inherently optimistic, viewing life as an adventure to be lived to the fullest. They cherish their independence and philosophical insights, and always aim to share their discoveries and joy with others. Despite their love for exploration, they are deeply loyal, honest, and offer candid yet compassionate advice to those they care for.\n\nHOW OTHERS SEE SAGITTARIUS\nSagittariuses appear vibrant, adventurous, and enthusiastic. They often inspire those around them with their optimism and zest for life. They are appreciated for their honesty and directness, but sometimes their bluntness can be misunderstood. Sagittariuses’ love for freedom and exploration makes them seem restless and non-committal, but their lighthearted and philosophical nature makes them beloved companions and engaging conversationalists.\n\nHEALTH AND DIET\nSagittariuses should pay particular attention to their hips, thighs, and liver. Horseback riding, archery, or hiking, can support their physical health and satisfy their love for adventure. A balanced diet rich in liver-supporting foods, such as leafy greens, and limiting substances that strain the liver, can contribute to overall well-being. Incorporating foods high in antioxidants and staying hydrated will support their active lifestyle.\n\nLOVE AND RELATIONSHIPS\nJupiter governs Sagittarius, introducing a love for freedom and adventure in relationships. Sagittariuses seek partners who are willing to explore the world and philosophies with them. They approach love with optimism and a desire for growth, valuing honesty and independence. Sagittariuses are most compatible with signs that share their adventurous spirit and can respect their need for space and exploration, finding joy in a relationship that is both stimulating and supportive.\n\nCAREER AND FINANCE\nSagittariuses are adventurers at heart and often find careers in travel, education, or any field that allows them to explore and share knowledge appealing. They are not afraid to take financial risks, which usually pay off, but can also lead to financial instability if not managed properly. A balanced approach to finances, mixing adventure with security, will serve them well.\n\nCELEBRITIES WITH SAGITTARIUS SUN\nBrad Pitt (December 18), Taylor Swift (December 13), Walt Disney (December 5), Jane Austen (December 16), Mark Twain (November 30), Jimi Hendrix (November 27), Miley Cyrus (November 23), Steven Spielberg (December 18), Britney Spears (December 2), Tina Turner (November 26), Bruce Lee (November 27), Frank Sinatra (December 12), Nicki Minaj (December 8), Ian Somerhalder (December 8), Jamie Foxx (December 13)`}
      </div>
    ) },

    // 64 — Capricorn (traits) detailed
    { id: "p-64", bg: "#fff", content: (
      <div className="whitespace-pre-wrap font-serif text-[11pt] leading-[1.6] text-black">
        {`CAPRICORN (December 22 – January 19)\n\nFundamental Traits of Capricorn:\nDuality: Feminine\nElement: Earth\nQuality: Cardinal\nLucky Day: Saturday\nWritten Symbol: Representing the goat’s horned head or the tail of a sea-goat, it signifies Capricorn’s connection to both practical and mystical realms.\nSymbol: The Goat\nRuling Planet: Saturn. The planet of responsibility, discipline, and restrictions influences Capricorns to value structure, hard work, and achievement through perseverance.\nDominant Keyword: “I Use”\nLucky Number: 1, 4, and their combinations.\nBody Part Ruled: Bones (especially the knees), teeth, and skin\n\nCapricorns value tradition and the tangible aspects of success, such as status and material wealth. Despite their hard exterior, they are incredibly loyal and supportive of their loved ones, offering a strong foundation and support.\n\nCapricorn represents structure, ambition, and mastery over the material world. Known for their discipline, patience, and perseverance, people with the Capricorn sun sign navigate life with a pragmatic and goal-oriented approach.\n\nBEST COMPATIBLE WITH: Taurus, Virgo, Scorpio, Pisces`}
      </div>
    ) },

    // 65 — Capricorn (inner) detailed
    { id: "p-65", bg: "#fff", content: (
      <div className="whitespace-pre-wrap font-serif text-[11pt] leading-[1.6] text-black">
        {`THE INNER CAPRICORN\nCapricorns have a strong sense of responsibility and drive towards achievement. They are highly disciplined and have an incredible capacity for hard work and endurance. Capricorns are strategic and pragmatic, often planning their lives and careers with meticulous detail. They have a dry sense of humor and a loyalty to those they care about. Their ambition is for the satisfaction of accomplishing their goals and providing stability.\n\nHOW OTHERS SEE CAPRICORN\nCapricorns appear ambitious, disciplined, and reliable. Their dedication and work ethic are admired, though their seriousness can sometimes be seen as distancing or harshness. Capricorns are respected for their wisdom and leadership qualities, often sought after for advice in professional matters. Their ability to navigate challenges with pragmatism and resilience inspires confidence in their capabilities and decisions.\n\nHEALTH AND DIET\nCapricorns should pay particular attention to their bones, teeth, and skin. A diet rich in calcium and vitamin D can support bone health, while foods high in omega-3 fatty acids can aid skin health. Regular, moderate exercise that strengthens the skeletal system, like walking or weight-bearing activities, is beneficial. Capricorns should also ensure they manage stress effectively to avoid skin issues and ensure overall well-being, incorporating relaxation techniques into their routine.\n\nLOVE AND RELATIONSHIPS\nSaturn rules Capricorn, influencing a pragmatic and ambitious approach to love. Capricorns value stability, commitment, and hard work in relationships, seeking partners who understand their dedication to their goals. They show love through loyalty and a willingness to build a lasting foundation together. Capricorns thrive in relationships that respect their need for structure and ambition, finding compatibility with signs that can offer support and appreciate their dry sense of humor.\n\nCAREER AND FINANCE\nCapricorns are ambitious and disciplined, often finding success in corporate environments or their entrepreneurial ventures. They excel in leadership positions and are very goal-oriented, which translates into financial success. However, they should remember to take breaks and not let their career dominate their life completely, as this can lead to burnout.\n\nCELEBRITIES WITH CAPRICORN SUN\nMichelle Obama (January 17), Elvis Presley (January 8), Kate Middleton (January 9), David Bowie (January 8), LeBron James (December 30), Zayn Malik (January 12), Dolly Parton (January 19), Denzel Washington (December 28), Muhammad Ali (January 17), Bradley Cooper (January 5), Ellie Goulding (December 30), Stephen Hawking (January 8), Jim Carrey (January 17), Jeff Bezos (January 12), Martin Luther King Jr. (January 15)`}
      </div>
    ) },

    // 66 — Aquarius (traits) detailed
    { id: "p-66", bg: "#fff", content: (
      <div className="whitespace-pre-wrap font-serif text-[11pt] leading-[1.6] text-black">
        {`AQUARIUS (January 20 – February 18)\n\nFundamental Traits of Aquarius:\nDuality: Masculine\nElement: Air\nQuality: Fixed\nLucky Day: Saturday\nWritten Symbol: Representing waves of water or electricity, it signifies Aquarius’s connection to innovation, energy, and the collective consciousness.\nSymbol: The Water Bearer\nRuling Planet: Uranus (traditional ruler Saturn). Uranus represents revolution, innovation, and unexpected changes, influencing Aquarians to be original, inventive, and sometimes rebellious. Saturn adds a layer of discipline and responsibility.\nDominant Keyword: “I Know”\nLucky Number: 4, 8, and any combination thereof.\nBody Part Ruled: Ankles and circulatory system\n\nAquarians are intellectual and analytical, with a natural interest in technology and the sciences. However, their focus on the collective can sometimes make them seem detached on a personal level. Their forward-thinking and altruistic nature make them excellent problem-solvers and reformers.`}
      </div>
    ) },

    // 67 — Aquarius (inner) detailed
    { id: "p-67", bg: "#fff", content: (
      <div className="whitespace-pre-wrap font-serif text-[11pt] leading-[1.6] text-black">
        {`THE INNER AQUARIUS\nAquarians have a rich inner world filled with innovative ideas and humanitarian dreams. They are deeply idealistic, often envisioning a better future for humanity. Aquarians are curious and enjoy exploring concepts, philosophies, and technologies that challenge the status quo. Despite their social nature, they need periods of solitude to recharge and contemplate. Their loyalty and commitment to causes they care about run deep, though they express affection in unconventional ways.\n\nHEALTH AND DIET\nAquarians should pay particular attention to their ankles and circulatory system. Engaging in exercises that promote cardiovascular health and strengthen the lower limbs, such as swimming or cycling, is great. A diet rich in omega-3 fatty acids, antioxidants, and foods that support blood circulation can contribute to overall well-being. Aquarians also benefit from regular social interaction and mental stimulation to maintain their mental health.\n\nHOW OTHERS SEE AQUARIUS\nAquarians appear as unique, intellectual, and progressive. Their unconventional approach and visionary ideas can be both inspiring and puzzling. Aquarians are admired for their independence and commitment to social causes. However, sometimes they can be seen as detached or aloof due to their tendency to intellectualize emotions. Their ability to think outside the box and challenge norms makes them valuable innovators and leaders in social change.\n\nLOVE AND RELATIONSHIPS\nUranus influences Aquarius, bringing innovation and a strong sense of individuality to their approach to love. Aquarians value intellectual companionship and shared goals, seeking relationships that challenge societal norms. They show love through acts of friendship and a commitment to personal and collective growth. Aquarians are most compatible with signs that respect their independence and are willing to join them in their quest for social change and innovation.\n\nCAREER AND FINANCE\nAquarians are innovative and eccentric, often drawn to careers in technology, science, or social reform, where they can work on the cutting edge. Financially, they tend to have a futuristic view, investing in new technologies or concepts before they become mainstream. Aquariuses should, however, ensure they have a solid foundation to fall back on, in case some of their more avant-garde investments take time to pay off.\n\nCELEBRITIES WITH AQUARIUS SUN\nOprah Winfrey (January 29), Ellen DeGeneres (January 26), Thomas Edison (February 11), Galileo Galilei (February 15), Alicia Keys (January 25), Christian Bale (January 30), Charles Darwin (February 12), Franklin D. Roosevelt (January 30), Michael Jordan (February 17), Abraham Lincoln (February 12), Ed Sheeran (February 17), Justin Timberlake (January 31), Virginia Woolf (January 25), Harry Styles (February 1), Wolfgang Amadeus Mozart (January 27).`}
      </div>
    ) },

    // 68 — Pisces (traits) detailed
    { id: "p-68", bg: "#fff", content: (
      <div className="whitespace-pre-wrap font-serif text-[11pt] leading-[1.6] text-black">
        {`PISCES (February 19 – March 20)\n\nFundamental Traits of Pisces:\nDuality: Feminine\nElement: Water\nQuality: Mutable\nLucky Day: Thursday\nWritten Symbol: Representing two fish swimming in opposite directions, it signifies Pisces’s duality and the balance between external reality and the inner emotional world.\nSymbol: The Fish\nRuling Planet: Neptune (traditional ruler Jupiter). Neptune represents spirituality, dreams, and illusions, influencing Pisceans to be imaginative, creative, and connected to the divine. Jupiter adds a layer of philosophy, expansion, and the search for meaning.\nDominant Keyword: “I Believe”\nLucky Number: 3, 7 and their combinations.\nBody Part Ruled: Feet, lymphatic system, and immune system\n\nPisces have a rich inner life, filled with dreams and fantasies, which often find expression through creative endeavors. However, their sensitivity can sometimes lead to feelings of vulnerability and a desire to escape reality. Pisces are adaptable and can be the chameleons of the zodiac, reflecting the qualities of those around them. Their empathy and understanding make them deeply connected to the emotional world, offering solace and comfort to those in need.\n\nPisces symbolizes the culmination of all other signs’ experiences, offering wisdom, empathy, and a deep connection. They have an artistic sensibility, intuitive nature, and compassionate demeanor, and navigate life with gentle strength and an open heart.\n\nBest Compatible With: Taurus, Cancer, Scorpio, Capricorn`}
      </div>
    ) },

    // 69 — Pisces (inner) detailed
    { id: "p-69", bg: "#fff", content: (
      <div className="whitespace-pre-wrap font-serif text-[11pt] leading-[1.6] text-black">
        {`THE INNER PISCES\nPisces have a profound sensitivity and a rich inner life, often feeling the emotions of others as intensely as their own. They are deeply compassionate and empathetic, with a natural inclination towards healing and helping. Pisces are imaginative and creative, often finding solace and expression through art, music, and literature. They possess an inner strength that helps them overcome mishaps and are driven by their deep belief in the interconnectedness of all things.\n\nHOW OTHERS SEE PISCES\nPisces appear as kind, artistic, and mystical. Their empathy and intuitive understanding make them cherished friends and confidants. However, their tendency to absorb others’ emotions can sometimes be perceived as vulnerability or a lack of boundaries. Pisces’ creative talents, imaginative insights, and their selfless nature are admired. Their dislike for confrontation and tendency to escape into fantasy can sometimes frustrate more grounded or practical signs.\n\nHEALTH AND DIET\nPisces should pay particular attention to their feet and immune system. Engaging in grounding exercises, such as walking barefoot on natural surfaces or practicing yoga, can help strengthen their physical and energetic connection to the earth. A diet rich in immune-boosting foods, like citrus fruits, garlic, and leafy greens, along with adequate hydration, supports their sensitive systems. Regular relaxation and stress-reduction techniques are vital to maintaining Pisces’s emotional and physical health.\n\nCAREER AND FINANCE\nPisces are empathetic and often drawn to artistic or healing professions, where they can make a difference in people’s lives. They do well in non-traditional settings or roles that require intuition. Financially, Pisces can sometimes be a bit naive, so they need to be cautious with investments and seek professional advice when necessary. A solid financial plan can help them balance their altruism with practicality.\n\nLOVE AND RELATIONSHIPS\nNeptune rules Pisces, infusing their approach to love with empathy, creativity, and a deep sense of intuition. Pisces seek soulful connections, valuing emotional depth and artistic expression in relationships. They are compassionate and selfless lovers, often putting their partner’s needs above their own. Pisces thrive in relationships that allow for emotional vulnerability and spiritual growth, finding compatibility with signs that appreciate their sensitivity and are willing to share in their dreamy and mystical view of love.\n\nCELEBRITIES WITH PISCES SUN\nAlbert Einstein (March 14), Steve Jobs (February 24), Rihanna (February 20), George Harrison (February 25), Elizabeth Taylor (February 27), Kurt Cobain (February 20), Michelangelo (March 6), Justin Bieber (March 1), Victor Hugo (February 26), Bruce Willis (March 19), Drew Barrymore (February 22), Johnny Cash (February 26), Glenn Close (March 19), Daniel Craig (March 2).`}
      </div>
    ) },

    // 70 — Illustration page
    { id: "p-70", bg: "#fff", content: (
      <div className="text-center">
        <img src="/images/page70-planets.png" alt="Planets illustration with the Sun, Saturn, Earth and others" className="inline-block max-w-full rounded shadow" />
        <div className="mt-2 text-[10pt]">Page 70</div>
      </div>
    ) },

    // 71 — The Planets
    { id: "p-71", bg: "#fff", content: (
      <div className="text-black font-serif text-[11pt] leading-[1.6]">
        <div className="text-center font-serif text-[26pt] mb-4">The Planets</div>
        <p>
          Astrology has long fascinated humanity with its promise of insight and understanding into our lives, personalities, and futures. Planets in astrology are considered the primary symbols through which cosmic energies manifest in our lives. The movements and positions of the planets at the time of our birth are believed to shape our character, emotions, and life paths.
        </p>
      </div>
    ) },

    // 72 — The Significance of Planets
    { id: "p-72", bg: "#fff", content: (
      <div className="text-black font-serif text-[11pt] leading-[1.6]">
        <div className="text-center font-serif text-[24pt] mb-3">The Significance of Planets</div>
        <p>
          The planets are the heart of astrology, each one symbolizing different aspects of our being and life experiences. Each of them has their roles, characteristics, and influences. From the Sun, which illuminates our core identity, to Pluto, the bringer of transformation and rebirth, the planets weave a complex narrative of personal growth, challenges, and talents.
        </p>
        <div className="mt-4 font-serif text-[14pt]">The Evolution of Planetary Astrology</div>
        <p className="mt-2">
          Throughout history, the study of astrology has evolved alongside advances in astronomy. The discovery of the outer planets—Uranus, Neptune, and Pluto—in more recent centuries expanded the astrological landscape, adding new dimensions of understanding to astrological interpretations. Each new planet discovered brought with it a shift in astrological practices, reflecting the changing times and expanding our understanding of the human psyche.
        </p>
        <p className="mt-2">
          The importance of the planets in astrology lies not just in their individual meanings but in how they interact with each other and the zodiac signs. These relationships, known as aspects, create a complex and detailed picture of an individual’s life and potential. Astrology, therefore, offers a unique tool for self-discovery and personal growth, bridging the material and the mystical, the earthly and the divine.
        </p>
      </div>
    ) },

    // 73 — The Luminaries (Sun & Moon)
    { id: "p-73", bg: "#fff", content: (
      <div className="text-black font-serif text-[11pt] leading-[1.6]">
        <div className="text-center font-serif text-[24pt] mb-4">The Luminaries</div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="text-center">
              <img src="/images/page73-sun.png" alt="Sun" className="inline-block max-w-full rounded shadow mb-3" />
            </div>
            <div className="font-serif text-[14pt] mb-2">Sun</div>
            <p>
              The Sun not only symbolizes our ego and will, but it also illuminates our creative force, the raw energy that fuels our passions, ambitions, and the pursuit of our true selves. The Sun’s position by sign, house, and aspect in our natal chart is a guide to understanding our potential for achievement, leadership, and the way we radiate our power. It shapes our personality, influencing everything from our approach to life’s challenges to how we express our individuality.
            </p>
            <p className="mt-2">
              The Sun’s transit through the sky marks significant cycles, offering opportunities for growth, self-expression, and the realization of our deepest desires. The Sun is also the most widely-known planet, often associated with the term “Zodiac Sign.” The Sun usually takes approximately 1 month in each sign. The Sun’s journey through the zodiac takes about a year, symbolizing the cycle of personal growth and evolution over a year.
            </p>
          </div>
          <div>
            <div className="text-center">
              <img src="/images/page73-moon.png" alt="Moon" className="inline-block max-w-full rounded shadow mb-3" />
            </div>
            <div className="font-serif text-[14pt] mb-2">Moon</div>
            <p>
              The Moon reflects the moods and emotions that flow through us. It represents our instinctual self, our memory, and the subconscious layers that are responsible for our habits and attachments. Its placement in our birth chart speaks to our intuitive sense and the way we seek comfort and security in the world.
            </p>
            <p className="mt-2">
              The Moon’s phases, from new to full, symbolize the cyclical nature of our lives, reminding us of the constant change and the need to adapt emotionally to the world’s rhythms. The Moon stays in each sign for approximately 2.5 days. Its rapid movement reflects the changing landscape of our emotions and moods.
            </p>
          </div>
        </div>
      </div>
    ) },
  ];

  const total = pages.length;

  useEffect(() => {
    const opts: IntersectionObserverInit = { root: null, rootMargin: "-40% 0px -40% 0px", threshold: 0 };
    const io = new IntersectionObserver((entries) => {
      const hit = entries.find((e) => e.isIntersecting);
      if (!hit) return;
      const n = Number((hit.target as HTMLElement).id.replace("p-", ""));
      setCurrent(n);
      if (deepLinkingEnabled) {
        try { window.history.replaceState(null, "", `#p-${n}`); } catch {}
      }
    }, opts);
    document.querySelectorAll('section[id^="p-"]').forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [deepLinkingEnabled]);

  const jump = (n: number) => {
    const clamped = Math.min(total, Math.max(1, n));
    document.getElementById(`p-${clamped}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "PageDown") jump(current + 1);
      if (e.key === "ArrowLeft" || e.key === "PageUp") jump(current - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [current]);

  return (
    <div className="min-h-screen bg-neutral-100 pb-12">
      <ScrollHeader total={total} onJump={jump} current={current} deepLinkingEnabled={deepLinkingEnabled} />
      <div className="mx-auto max-w-[220mm] px-2">
        {pages.map((p) => {
          const pageNumber = Number(p.id.replace("p-", ""));
          return (
            <Page key={p.id} id={p.id} index={pageNumber} bg={p.bg}>{p.content}</Page>
          );
        })}
      </div>
      <style>{`
        .max-w-\\[220mm\\] { scroll-snap-type: y mandatory; }
        section[id^="p-"] { scroll-snap-align: start; }
      `}</style>
    </div>
  );
}


