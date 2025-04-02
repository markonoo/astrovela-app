// A database of major cities and their countries
// In a real application, this would be a more comprehensive database or API
const cityDatabase: Record<string, string[]> = {
  "new york": ["United States", "USA", "US"],
  "los angeles": ["United States", "USA", "US"],
  chicago: ["United States", "USA", "US"],
  houston: ["United States", "USA", "US"],
  phoenix: ["United States", "USA", "US"],
  philadelphia: ["United States", "USA", "US"],
  "san antonio": ["United States", "USA", "US"],
  "san diego": ["United States", "USA", "US"],
  dallas: ["United States", "USA", "US"],
  "san jose": ["United States", "USA", "US"],
  austin: ["United States", "USA", "US"],
  jacksonville: ["United States", "USA", "US"],
  "fort worth": ["United States", "USA", "US"],
  columbus: ["United States", "USA", "US"],
  indianapolis: ["United States", "USA", "US"],
  charlotte: ["United States", "USA", "US"],
  "san francisco": ["United States", "USA", "US"],
  seattle: ["United States", "USA", "US"],
  denver: ["United States", "USA", "US"],
  washington: ["United States", "USA", "US"],
  boston: ["United States", "USA", "US"],
  "el paso": ["United States", "USA", "US"],
  nashville: ["United States", "USA", "US"],
  detroit: ["United States", "USA", "US"],
  portland: ["United States", "USA", "US"],
  "las vegas": ["United States", "USA", "US"],
  memphis: ["United States", "USA", "US"],
  louisville: ["United States", "USA", "US"],
  baltimore: ["United States", "USA", "US"],
  milwaukee: ["United States", "USA", "US"],
  albuquerque: ["United States", "USA", "US"],
  tucson: ["United States", "USA", "US"],
  fresno: ["United States", "USA", "US"],
  sacramento: ["United States", "USA", "US"],
  "kansas city": ["United States", "USA", "US"],
  miami: ["United States", "USA", "US"],
  london: ["United Kingdom", "UK"],
  birmingham: ["United Kingdom", "UK"],
  manchester: ["United Kingdom", "UK"],
  liverpool: ["United Kingdom", "UK"],
  glasgow: ["United Kingdom", "UK"],
  edinburgh: ["United Kingdom", "UK"],
  leeds: ["United Kingdom", "UK"],
  sheffield: ["United Kingdom", "UK"],
  bristol: ["United Kingdom", "UK"],
  cardiff: ["United Kingdom", "UK"],
  belfast: ["United Kingdom", "UK"],
  leicester: ["United Kingdom", "UK"],
  aberdeen: ["United Kingdom", "UK"],
  cambridge: ["United Kingdom", "UK"],
  oxford: ["United Kingdom", "UK"],
  paris: ["France"],
  marseille: ["France"],
  lyon: ["France"],
  toulouse: ["France"],
  nice: ["France"],
  nantes: ["France"],
  strasbourg: ["France"],
  montpellier: ["France"],
  bordeaux: ["France"],
  lille: ["France"],
  rennes: ["France"],
  reims: ["France"],
  berlin: ["Germany"],
  hamburg: ["Germany"],
  munich: ["Germany"],
  cologne: ["Germany"],
  frankfurt: ["Germany"],
  stuttgart: ["Germany"],
  düsseldorf: ["Germany"],
  leipzig: ["Germany"],
  dortmund: ["Germany"],
  essen: ["Germany"],
  bremen: ["Germany"],
  dresden: ["Germany"],
  hanover: ["Germany"],
  nuremberg: ["Germany"],
  duisburg: ["Germany"],
  tokyo: ["Japan"],
  osaka: ["Japan"],
  kyoto: ["Japan"],
  yokohama: ["Japan"],
  nagoya: ["Japan"],
  sapporo: ["Japan"],
  fukuoka: ["Japan"],
  kobe: ["Japan"],
  kawasaki: ["Japan"],
  saitama: ["Japan"],
  hiroshima: ["Japan"],
  sendai: ["Japan"],
  beijing: ["China"],
  shanghai: ["China"],
  guangzhou: ["China"],
  shenzhen: ["China"],
  chongqing: ["China"],
  tianjin: ["China"],
  wuhan: ["China"],
  dongguan: ["China"],
  chengdu: ["China"],
  nanjing: ["China"],
  "hong kong": ["China"],
  hangzhou: ["China"],
  mumbai: ["India"],
  delhi: ["India"],
  bangalore: ["India"],
  hyderabad: ["India"],
  ahmedabad: ["India"],
  chennai: ["India"],
  kolkata: ["India"],
  surat: ["India"],
  pune: ["India"],
  jaipur: ["India"],
  lucknow: ["India"],
  kanpur: ["India"],
  sydney: ["Australia"],
  melbourne: ["Australia"],
  brisbane: ["Australia"],
  perth: ["Australia"],
  adelaide: ["Australia"],
  "gold coast": ["Australia"],
  canberra: ["Australia"],
  newcastle: ["Australia"],
  wollongong: ["Australia"],
  hobart: ["Australia"],
  toronto: ["Canada"],
  montreal: ["Canada"],
  vancouver: ["Canada"],
  calgary: ["Canada"],
  edmonton: ["Canada"],
  ottawa: ["Canada"],
  "quebec city": ["Canada"],
  winnipeg: ["Canada"],
  hamilton: ["Canada"],
  kitchener: ["Canada"],
  "mexico city": ["Mexico"],
  guadalajara: ["Mexico"],
  monterrey: ["Mexico"],
  puebla: ["Mexico"],
  tijuana: ["Mexico"],
  león: ["Mexico"],
  juárez: ["Mexico"],
  zapopan: ["Mexico"],
  "são paulo": ["Brazil"],
  "rio de janeiro": ["Brazil"],
  brasília: ["Brazil"],
  salvador: ["Brazil"],
  fortaleza: ["Brazil"],
  "belo horizonte": ["Brazil"],
  manaus: ["Brazil"],
  curitiba: ["Brazil"],
  recife: ["Brazil"],
  "porto alegre": ["Brazil"],
  cairo: ["Egypt"],
  alexandria: ["Egypt"],
  giza: ["Egypt"],
  "shubra el-kheima": ["Egypt"],
  "port said": ["Egypt"],
  suez: ["Egypt"],
  luxor: ["Egypt"],
  johannesburg: ["South Africa"],
  "cape town": ["South Africa"],
  durban: ["South Africa"],
  pretoria: ["South Africa"],
  "port elizabeth": ["South Africa"],
  bloemfontein: ["South Africa"],
  lagos: ["Nigeria"],
  abuja: ["Nigeria"],
  kano: ["Nigeria"],
  ibadan: ["Nigeria"],
  kaduna: ["Nigeria"],
  "port harcourt": ["Nigeria"],
  "benin city": ["Nigeria"],
  moscow: ["Russia"],
  "saint petersburg": ["Russia"],
  novosibirsk: ["Russia"],
  yekaterinburg: ["Russia"],
  kazan: ["Russia"],
  omsk: ["Russia"],
  samara: ["Russia"],
  "rostov-on-don": ["Russia"],
  ufa: ["Russia"],
  rome: ["Italy"],
  milan: ["Italy"],
  naples: ["Italy"],
  turin: ["Italy"],
  palermo: ["Italy"],
  genoa: ["Italy"],
  bologna: ["Italy"],
  florence: ["Italy"],
  bari: ["Italy"],
  catania: ["Italy"],
  madrid: ["Spain"],
  barcelona: ["Spain"],
  valencia: ["Spain"],
  seville: ["Spain"],
  zaragoza: ["Spain"],
  málaga: ["Spain"],
  murcia: ["Spain"],
  palma: ["Spain"],
  bilbao: ["Spain"],
  alicante: ["Spain"],
  amsterdam: ["Netherlands"],
  rotterdam: ["Netherlands"],
  "the hague": ["Netherlands"],
  utrecht: ["Netherlands"],
  eindhoven: ["Netherlands"],
  tilburg: ["Netherlands"],
  groningen: ["Netherlands"],
  almere: ["Netherlands"],
  brussels: ["Belgium"],
  antwerp: ["Belgium"],
  ghent: ["Belgium"],
  liège: ["Belgium"],
  bruges: ["Belgium"],
  namur: ["Belgium"],
  vienna: ["Austria"],
  graz: ["Austria"],
  linz: ["Austria"],
  salzburg: ["Austria"],
  innsbruck: ["Austria"],
  klagenfurt: ["Austria"],
  stockholm: ["Sweden"],
  gothenburg: ["Sweden"],
  malmö: ["Sweden"],
  uppsala: ["Sweden"],
  västerås: ["Sweden"],
  örebro: ["Sweden"],
  oslo: ["Norway"],
  bergen: ["Norway"],
  trondheim: ["Norway"],
  stavanger: ["Norway"],
  drammen: ["Norway"],
  copenhagen: ["Denmark"],
  aarhus: ["Denmark"],
  odense: ["Denmark"],
  aalborg: ["Denmark"],
  esbjerg: ["Denmark"],
  helsinki: ["Finland"],
  espoo: ["Finland"],
  tampere: ["Finland"],
  vantaa: ["Finland"],
  oulu: ["Finland"],
  turku: ["Finland"],
  zurich: ["Switzerland"],
  geneva: ["Switzerland"],
  basel: ["Switzerland"],
  bern: ["Switzerland"],
  lausanne: ["Switzerland"],
  winterthur: ["Switzerland"],
  warsaw: ["Poland"],
  kraków: ["Poland"],
  łódź: ["Poland"],
  wrocław: ["Poland"],
  poznań: ["Poland"],
  gdańsk: ["Poland"],
  prague: ["Czech Republic"],
  brno: ["Czech Republic"],
  ostrava: ["Czech Republic"],
  plzeň: ["Czech Republic"],
  liberec: ["Czech Republic"],
  budapest: ["Hungary"],
  debrecen: ["Hungary"],
  szeged: ["Hungary"],
  miskolc: ["Hungary"],
  pécs: ["Hungary"],
  athens: ["Greece"],
  thessaloniki: ["Greece"],
  patras: ["Greece"],
  heraklion: ["Greece"],
  larissa: ["Greece"],
  lisbon: ["Portugal"],
  porto: ["Portugal"],
  amadora: ["Portugal"],
  braga: ["Portugal"],
  coimbra: ["Portugal"],
  dublin: ["Ireland"],
  cork: ["Ireland"],
  limerick: ["Ireland"],
  galway: ["Ireland"],
  waterford: ["Ireland"],
}

// Function to match a city with its country
export function matchCityWithCountry(input: string): { city: string; country: string } | null {
  // Clean and normalize the input
  const normalizedInput = input.trim().toLowerCase()

  // Check if the input already contains a comma (city, country format)
  if (normalizedInput.includes(",")) {
    const [cityPart, countryPart] = normalizedInput.split(",").map((part) => part.trim())

    // Check if the city exists in our database
    const cityKey = Object.keys(cityDatabase).find(
      (city) => cityPart === city || cityPart.includes(city) || city.includes(cityPart),
    )

    if (cityKey) {
      // Check if the provided country matches one of the possible countries for this city
      const possibleCountries = cityDatabase[cityKey]
      const countryMatch = possibleCountries.find(
        (country) =>
          country.toLowerCase() === countryPart.toLowerCase() ||
          country.toLowerCase().includes(countryPart.toLowerCase()) ||
          countryPart.toLowerCase().includes(country.toLowerCase()),
      )

      if (countryMatch) {
        return { city: cityKey.charAt(0).toUpperCase() + cityKey.slice(1), country: countryMatch }
      }
    }

    // If we couldn't validate the city-country pair but both parts exist, return as is
    if (cityPart && countryPart) {
      return {
        city: cityPart.charAt(0).toUpperCase() + cityPart.slice(1),
        country: countryPart.charAt(0).toUpperCase() + countryPart.slice(1),
      }
    }
  }

  // Try to match just the city
  for (const city of Object.keys(cityDatabase)) {
    if (normalizedInput === city || normalizedInput.includes(city) || city.includes(normalizedInput)) {
      return {
        city: city.charAt(0).toUpperCase() + city.slice(1),
        country: cityDatabase[city][0],
      }
    }
  }

  // If no match found, return null
  return null
}

// Function to suggest city completions based on input
export function suggestCities(input: string, limit = 5): Array<{ city: string; country: string }> {
  if (!input || input.length < 2) return []

  const normalizedInput = input.trim().toLowerCase()
  const suggestions: Array<{ city: string; country: string }> = []
  const exactMatches: Array<{ city: string; country: string }> = []
  const startsWithMatches: Array<{ city: string; country: string }> = []
  const containsMatches: Array<{ city: string; country: string }> = []

  // First check if input contains a comma (user might be typing a country)
  if (normalizedInput.includes(",")) {
    const [cityPart, countryPart] = normalizedInput.split(",").map((part) => part.trim())

    // If user is typing a country, filter cities by that country
    if (countryPart && cityPart) {
      for (const city of Object.keys(cityDatabase)) {
        const countries = cityDatabase[city]
        const matchingCountry = countries.find((country) => country.toLowerCase().includes(countryPart))

        if (matchingCountry && city.includes(cityPart)) {
          const formattedCity = city.charAt(0).toUpperCase() + city.slice(1)

          if (city === cityPart) {
            exactMatches.push({ city: formattedCity, country: matchingCountry })
          } else if (city.startsWith(cityPart)) {
            startsWithMatches.push({ city: formattedCity, country: matchingCountry })
          } else {
            containsMatches.push({ city: formattedCity, country: matchingCountry })
          }
        }
      }
    }
  } else {
    // User is just typing a city
    for (const city of Object.keys(cityDatabase)) {
      const country = cityDatabase[city][0]
      const formattedCity = city.charAt(0).toUpperCase() + city.slice(1)

      if (city === normalizedInput) {
        exactMatches.push({ city: formattedCity, country })
      } else if (city.startsWith(normalizedInput)) {
        startsWithMatches.push({ city: formattedCity, country })
      } else if (city.includes(normalizedInput)) {
        containsMatches.push({ city: formattedCity, country })
      }
    }
  }

  // Combine matches in order of relevance
  suggestions.push(...exactMatches, ...startsWithMatches, ...containsMatches)

  // Return limited number of suggestions
  return suggestions.slice(0, limit)
}

// Calculate similarity score between two strings (for fuzzy matching)
export function calculateSimilarity(str1: string, str2: string): number {
  const s1 = str1.toLowerCase()
  const s2 = str2.toLowerCase()

  // Exact match
  if (s1 === s2) return 1

  // One string starts with the other
  if (s1.startsWith(s2) || s2.startsWith(s1)) {
    const ratio = Math.min(s1.length, s2.length) / Math.max(s1.length, s2.length)
    return 0.8 * ratio
  }

  // One string contains the other
  if (s1.includes(s2) || s2.includes(s1)) {
    const ratio = Math.min(s1.length, s2.length) / Math.max(s1.length, s2.length)
    return 0.6 * ratio
  }

  // Calculate character overlap
  let matches = 0
  for (let i = 0; i < s1.length; i++) {
    if (s2.includes(s1[i])) matches++
  }

  return (matches / Math.max(s1.length, s2.length)) * 0.4
}

