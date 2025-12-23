"use client"

import { useEffect, useState } from "react"
import { useUser } from "@/contexts/UserContext"
import { Paywall } from "@/components/aura/paywall"
import { AuraShell } from "@/components/aura/AuraShell"
import { logger } from "@/utils/logger"

// Import the new 195-page document system
import { ReportDataProvider } from "@/components/astrology/report-data"
import ReportViewport from "@/components/astrology/report-viewport"
import ReportPage from "@/components/astrology/report-page"

// Import all page components (195 pages)
import { CoverPage } from "@/components/astrology/cover-page"
import { NordastroPage } from "@/components/astrology/nordastro-page"
import { PersonalizedCover } from "@/components/astrology/personalized-cover"
import { EnglishTableOfContents } from "@/components/astrology/english-table-of-contents"
import { AstrologyIntroductionPage5 } from "@/components/astrology/astrology-introduction-page-5"

// Dynamic content pages
import { SunSignPageReplica } from "@/components/astrology/sun-sign-page-replica"
import { DynamicZodiacContentPage } from "@/components/astrology/dynamic-zodiac-content-page"
import { MoonSignPageReplica } from "@/components/astrology/moon-sign-page-replica"
import { RisingSignPageReplica } from "@/components/astrology/rising-sign-page-replica"
import { MercuryPlanetPageReplica } from "@/components/astrology/mercury-planet-page-replica"
import { VenusPlanetPageReplica } from "@/components/astrology/venus-planet-page-replica"
import { MarsPlanetPageReplica } from "@/components/astrology/mars-planet-page-replica"
import { JupiterPlanetPageReplica } from "@/components/astrology/jupiter-planet-page-replica"
import { SaturnPlanetPageReplica } from "@/components/astrology/saturn-planet-page-replica"
import { UranusPlanetPageReplica } from "@/components/astrology/uranus-planet-page-replica"
import { NeptunePlanetPageReplica } from "@/components/astrology/neptune-planet-page-replica"
import { PlutoPlanetPageReplica } from "@/components/astrology/pluto-planet-page-replica"
import { ChironPageReplica } from "@/components/astrology/chiron-page-replica"

// Compatibility pages
import { LibraCompatibilityWheel } from "@/components/astrology/libra-compatibility-wheel"
import { DynamicCompatibilityPage } from "@/components/astrology/dynamic-compatibility-page"

// Guide to Astrology section
import { GuideToAstrologyTitle } from "@/components/astrology/guide-to-astrology-title"
import { ModernAstrologyIntro } from "@/components/astrology/modern-astrology-intro"
import { HistoryOfAstrologyPage } from "@/components/astrology/history-of-astrology-page"
import { AstrologyTypesPage } from "@/components/astrology/astrology-types-page"
import { ModernAstrologyDetails } from "@/components/astrology/modern-astrology-details"
import { ModernWesternAstrology } from "@/components/astrology/modern-western-astrology"
import { AstrologyConcepts } from "@/components/astrology/astrology-concepts"

// Zodiac Signs section
import { ZodiacSignsOverviewPage } from "@/components/astrology/zodiac-signs-overview-page"
import { ElementalClassification } from "@/components/astrology/elemental-classification"
import { ModalitiesPage } from "@/components/astrology/modalities-page"
import { DualityInAstrology } from "@/components/astrology/duality-in-astrology"
import { SignificancePage } from "@/components/astrology/significance-page"
import { AriesDetailsPage } from "@/components/astrology/aries-details-page"
import { InnerAriesPage } from "@/components/astrology/inner-aries-page"
import { TaurusDetailsPage } from "@/components/astrology/taurus-details-page"
import { InnerTaurusPage } from "@/components/astrology/inner-taurus-page"
import { GeminiDetailsPage } from "@/components/astrology/gemini-details-page"
import { InnerGeminiPage } from "@/components/astrology/inner-gemini-page"
import { CancerDetailsPage } from "@/components/astrology/cancer-details-page"
import { InnerCancerPage } from "@/components/astrology/inner-cancer-page"
import { LeoDetailsPage } from "@/components/astrology/leo-details-page"
import { InnerLeoPage } from "@/components/astrology/inner-leo-page"
import { VirgoDetailsPage } from "@/components/astrology/virgo-details-page"
import { InnerVirgoPage } from "@/components/astrology/inner-virgo-page"
import { LibraDetailsPage } from "@/components/astrology/libra-details-page"
import { InnerLibraPage } from "@/components/astrology/inner-libra-page"
import { ScorpioDetailsPage } from "@/components/astrology/scorpio-details-page"
import { InnerScorpioPage } from "@/components/astrology/inner-scorpio-page"
import { SagittariusDetailsPage } from "@/components/astrology/sagittarius-details-page"
import { InnerSagittariusPage } from "@/components/astrology/inner-sagittarius-page"
import { CapricornDetailsPage } from "@/components/astrology/capricorn-details-page"
import { InnerCapricornPage } from "@/components/astrology/inner-capricorn-page"
import { AquariusDetailsPage } from "@/components/astrology/aquarius-details-page"
import { InnerAquariusPage } from "@/components/astrology/inner-aquarius-page"
import { PiscesDetailsPage } from "@/components/astrology/pisces-details-page"
import { InnerPiscesPage } from "@/components/astrology/inner-pisces-page"

// Planets section
import { SolarSystemPageNew } from "@/components/astrology/solar-system-page-new"
import { PlanetsIntroductionNew } from "@/components/astrology/planets-introduction-new"
import { PlanetsSignificance } from "@/components/astrology/planets-significance"
import { LuminariesPageNew } from "@/components/astrology/luminaries-page-new"
import { InnerPlanetsPageNew } from "@/components/astrology/inner-planets-page-new"
import { VenusMarsPageNew } from "@/components/astrology/venus-mars-page-new"
import { SocialPlanetsPageNew } from "@/components/astrology/social-planets-page-new"
import { OuterPlanetsPageNew } from "@/components/astrology/outer-planets-page-new"
import { PlutoChironPageNew } from "@/components/astrology/pluto-chiron-page-new"

// Retrogrades section
import { RetrogradesPageReplica } from "@/components/astrology/retrogrades-page-replica"
import { MercuryRetrogradePageReplica } from "@/components/astrology/mercury-retrograde-page-replica"
import { MercuryRetrogradeContinuedReplica } from "@/components/astrology/mercury-retrograde-continued-replica"
import { VenusRetrogradePageReplica } from "@/components/astrology/venus-retrograde-page-replica"
import { VenusRetrogradeContinuedReplica } from "@/components/astrology/venus-retrograde-continued-replica"
import { MarsRetrogradePageReplica } from "@/components/astrology/mars-retrograde-page-replica"
import { MarsRetrogradeContinuedReplica } from "@/components/astrology/mars-retrograde-continued-replica"
import { JupiterRetrogradePageReplica } from "@/components/astrology/jupiter-retrograde-page-replica"
import { JupiterRetrogradeContinuedReplica } from "@/components/astrology/jupiter-retrograde-continued-replica"
import { SaturnRetrogradePageReplica } from "@/components/astrology/saturn-retrograde-page-replica"
import { SaturnRetrogradeContinuedReplica } from "@/components/astrology/saturn-retrograde-continued-replica"
import { UranusRetrogradePageReplica } from "@/components/astrology/uranus-retrograde-page-replica"
import { UranusRetrogradeContinuedReplica } from "@/components/astrology/uranus-retrograde-continued-replica"
import { NeptuneRetrogradePageReplica } from "@/components/astrology/neptune-retrograde-page-replica"
import { NeptuneRetrogradeContinuedReplica } from "@/components/astrology/neptune-retrograde-continued-replica"
import { PlutoRetrogradePageReplica } from "@/components/astrology/pluto-retrograde-page-replica"
import { PlutoRetrogradeContinuedReplica } from "@/components/astrology/pluto-retrograde-continued-replica"
import { ChironRetrogradePageReplica } from "@/components/astrology/chiron-retrograde-page-replica"
import { ChironRetrogradeContinuedReplica } from "@/components/astrology/chiron-retrograde-continued-replica"

// Houses section
import { HousesIntroductionReplica } from "@/components/astrology/houses-introduction-replica"
import { TwelveHousesOverviewReplica } from "@/components/astrology/twelve-houses-overview-replica"
import { Houses14Replica } from "@/components/astrology/houses-1-4-replica"
import { Houses58Replica } from "@/components/astrology/houses-5-8-replica"
import { Houses912Replica } from "@/components/astrology/houses-9-12-replica"

// Divination section
import { DivinationAstrologyTitleReplica } from "@/components/astrology/divination-astrology-title-replica"
import { HowToInterpretHoroscopesReplica } from "@/components/astrology/how-to-interpret-horoscopes-replica"
import { TheMajorAnglesReplica } from "@/components/astrology/the-major-angles-replica"
import { InterpretingDailyHoroscopesReplica } from "@/components/astrology/interpreting-daily-horoscopes-replica"
import { AdvancedTechniquesReplica } from "@/components/astrology/advanced-techniques-replica"

// Crystals section
import { CrystalFoundationsPageReplica } from "@/components/astrology/crystal-foundations-page-replica"
import { CrystalsInAstrologyReplica } from "@/components/astrology/crystals-in-astrology-replica"
import { HistoryOfCrystalsAstrologyReplica } from "@/components/astrology/history-of-crystals-astrology-replica"
import { CrystalHistory } from "@/components/astrology/crystal-history"
import { ZodiacCrystals1 } from "@/components/astrology/zodiac-crystals-1"
import { ZodiacCrystals2 } from "@/components/astrology/zodiac-crystals-2"
import { ZodiacCrystals3 } from "@/components/astrology/zodiac-crystals-3"
import { PersonalizedCrystalCharts } from "@/components/astrology/personalized-crystal-charts"
import { CrystalCleansingGuide } from "@/components/astrology/crystal-cleansing-guide"
import { CrystalCareSteps } from "@/components/astrology/crystal-care-steps"

// Rituals & Palmistry section
import { AstrologicalRitualsMeditations } from "@/components/astrology/astrological-rituals-meditations"
import { AstrologicalCrystalElixirs } from "@/components/astrology/astrological-crystal-elixirs"
import { ChooseAstrologicalTiming } from "@/components/astrology/choose-astrological-timing"
import { PlanetarySeasonalTiming } from "@/components/astrology/planetary-seasonal-timing"
import { AstrologicalEventsElixirs } from "@/components/astrology/astrological-events-elixirs"
import { AgateMarbleTexture } from "@/components/astrology/agate-marble-texture"
import { PalmistryHandModel } from "@/components/astrology/palmistry-hand-model"
import { PalmistryMysteriesIntro } from "@/components/astrology/palmistry-mysteries-intro"
import { PalmistryHistoryPage } from "@/components/astrology/palmistry-history-page"
import { UnderstandingPalmTypes } from "@/components/astrology/understanding-palm-types"
import { TheMountsPage } from "@/components/astrology/the-mounts-page"
import { FindingMountsSteps } from "@/components/astrology/finding-mounts-steps"
import { TheMajorLinesPage } from "@/components/astrology/the-major-lines-page"
import { PalmistryDetailsPage } from "@/components/astrology/palmistry-details-page"

// Tarot section
import { TarotReadingPhoto } from "@/components/astrology/tarot-reading-photo"
import { TarotCardsIntro } from "@/components/astrology/tarot-cards-intro"
import { MajorArcanaStructure } from "@/components/astrology/major-arcana-structure"
import { MajorArcanaCards1 } from "@/components/astrology/major-arcana-cards-1"
import { MajorArcanaCards2 } from "@/components/astrology/major-arcana-cards-2"
import { UprightReversedCards } from "@/components/astrology/upright-reversed-cards"
import { MinorArcanaSuits } from "@/components/astrology/minor-arcana-suits"
import { ConductingReadingSteps } from "@/components/astrology/conducting-reading-steps"
import { PopularTarotSpreads } from "@/components/astrology/popular-tarot-spreads"
import { CelticCrossSpread } from "@/components/astrology/celtic-cross-spread"
import { LoveSpreadLayout } from "@/components/astrology/love-spread-layout"
import { YesNoSpread } from "@/components/astrology/yes-no-spread"
import { InterpretingTarotTips } from "@/components/astrology/interpreting-tarot-tips"
import { TarotSuperstitions } from "@/components/astrology/tarot-superstitions"

// Numerology section
import { NumerologyMandalaReplica } from "@/components/astrology/numerology-mandala-replica"
import { NumerologyIntroReplica } from "@/components/astrology/numerology-intro-replica"
import { NumerologyCoreNumbersReplica } from "@/components/astrology/numerology-core-numbers-replica"
import { NumerologyEverydayLifeReplica } from "@/components/astrology/numerology-everyday-life-replica"
import { MeaningOfNumbers14Replica } from "@/components/astrology/meaning-of-numbers-1-4-replica"
import { MeaningOfNumbers59Replica } from "@/components/astrology/meaning-of-numbers-5-9-replica"

// Love & Relationships section
import { LovePotionPhoto } from "@/components/astrology/love-potion-photo"
import { LoveRelationshipsIntroReplica } from "@/components/astrology/love-relationships-intro-replica"
import { AstrologyRelationshipTimingReplica } from "@/components/astrology/astrology-relationship-timing-replica"
import { AstrologicalTimingDetailsReplica } from "@/components/astrology/astrological-timing-details-replica"
import { CrystalsForLoveIntroReplica } from "@/components/astrology/crystals-for-love-intro-replica"
import { LoveCrystalsCollectionReplica } from "@/components/astrology/love-crystals-collection-replica"
import { FengShuiRomanticProsperityReplica } from "@/components/astrology/feng-shui-romantic-prosperity-replica"
import { FengShuiLoveTipsReplica } from "@/components/astrology/feng-shui-love-tips-replica"
import { LoveAffirmationsMantrasReplica } from "@/components/astrology/love-affirmations-mantras-replica"
import { MantrasAttractMaintainLoveReplica } from "@/components/astrology/mantras-attract-maintain-love-replica"
import { LoveSpellsRitualsIntroReplica } from "@/components/astrology/love-spells-rituals-intro-replica"
import { SpellsForAttractingLoveReplica } from "@/components/astrology/spells-for-attracting-love-replica"
import { RitualsStrengthenRelationshipsReplica } from "@/components/astrology/rituals-strengthen-relationships-replica"
import { CosmicCoupleStarrySky } from "@/components/astrology/cosmic-couple-starry-sky"
import { CosmicNebulaSpace } from "@/components/astrology/cosmic-nebula-space"

// Lexicon & Events section
import { AstrologerLexiconTitleReplica } from "@/components/astrology/astrologer-lexicon-title-replica"
import { GlossaryACReplica } from "@/components/astrology/glossary-a-c-replica"
import { GlossaryEJReplica } from "@/components/astrology/glossary-e-j-replica"
import { GlossaryKQReplica } from "@/components/astrology/glossary-k-q-replica"
import { GlossaryRZReplica } from "@/components/astrology/glossary-r-z-replica"
import { AstrologicalEventsIntroReplica } from "@/components/astrology/astrological-events-intro-replica"

// Calendar sections (2025-2029)
import { Calendar2025Part1Replica } from "@/components/astrology/calendar-2025-part1-replica"
import { Calendar2025Part2Replica } from "@/components/astrology/calendar-2025-part2-replica"
import { PlanetaryRetrogrades2025Replica } from "@/components/astrology/planetary-retrogrades-2025-replica"
import { Year2026PhotoReplica } from "@/components/astrology/year-2026-photo-replica"
import { Calendar2026Part1Replica } from "@/components/astrology/calendar-2026-part1-replica"
import { Calendar2026Part2Replica } from "@/components/astrology/calendar-2026-part2-replica"
import { PlanetaryRetrogrades2026Replica } from "@/components/astrology/planetary-retrogrades-2026-replica"
import { Year2027PhotoReplica } from "@/components/astrology/year-2027-photo-replica"
import { Calendar2027Part1Replica } from "@/components/astrology/calendar-2027-part1-replica"
import { Calendar2027Part2Replica } from "@/components/astrology/calendar-2027-part2-replica"
import { PlanetaryRetrogrades2027Replica } from "@/components/astrology/planetary-retrogrades-2027-replica"
import { Year2028PhotoReplica } from "@/components/astrology/year-2028-photo-replica"
import { Calendar2028Part1Replica } from "@/components/astrology/calendar-2028-part1-replica"
import { Calendar2028Part2Replica } from "@/components/astrology/calendar-2028-part2-replica"
import { PlanetaryRetrogrades2028Replica } from "@/components/astrology/planetary-retrogrades-2028-replica"
import { Year2029PhotoReplica } from "@/components/astrology/year-2029-photo-replica"
import { Calendar2029Part1Replica } from "@/components/astrology/calendar-2029-part1-replica"
import { Calendar2029Part2Replica } from "@/components/astrology/calendar-2029-part2-replica"
import { PlanetaryRetrogrades2029Replica } from "@/components/astrology/planetary-retrogrades-2029-replica"

// Final pages
import { CountrysideMilkyWayReplica } from "@/components/astrology/countryside-milky-way-replica"
import { FinalWordsTitleReplica } from "@/components/astrology/final-words-title-replica"
import { FinalConclusionReplica } from "@/components/astrology/final-conclusion-replica"
import { MinimalistHandIllustrationReplica } from "@/components/astrology/minimalist-hand-illustration-replica"
import { PersonalizedMessageReplica } from "@/components/astrology/personalized-message-replica"

export default function ReportViewerPage() {
  const { user, loading } = useUser()
  const [hasAccess, setHasAccess] = useState(false)
  const [loadingAccess, setLoadingAccess] = useState(true)

  // Check if user has access (entitlement check)
  useEffect(() => {
    async function checkAccess() {
      if (!user) {
        setLoadingAccess(false)
        return
      }

      try {
        const response = await fetch("/api/aura/entitlement")
        if (response.ok) {
          const data = await response.json()
          setHasAccess(data.hasAccess)
        }
      } catch (error) {
        logger.error("Failed to check access", error)
      } finally {
        setLoadingAccess(false)
      }
    }

    if (!loading) {
      checkAccess()
    }
  }, [user, loading])

  // Loading state
  if (loading || loadingAccess) {
    return (
      <AuraShell title="Your Report" activeTab="horoscope">
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-2 border-white/20 border-t-white mx-auto"></div>
            <p className="mt-4 text-[17px] leading-[24px] text-white/60">
              Loading your astrology report...
            </p>
          </div>
        </div>
      </AuraShell>
    )
  }

  // Show paywall if no access
  if (!user || !hasAccess) {
    return <Paywall />
  }

  // Render 195-page document with user data from Supabase
  return (
    <AuraShell title="Your Report" activeTab="horoscope">
      <div className="w-full min-h-screen">
        <ReportDataProvider userId={user.id} adminMode={false}>
          <ReportViewport>
            {/* Page 1: Cover */}
            <ReportPage id="cover" pageNumber={1}>
              <CoverPage />
            </ReportPage>

            {/* Page 2: Nordastro Cream Page */}
            <ReportPage id="nordastro" pageNumber={2}>
              <NordastroPage />
            </ReportPage>

            {/* Page 3: Personalized Cover (Dynamic - auto-populated with user data!) */}
            <ReportPage id="personalized-cover" pageNumber={3}>
              <PersonalizedCover pageNumber={3} />
            </ReportPage>

            {/* Page 4: Table of Contents */}
            <ReportPage id="toc" pageNumber={4}>
              <EnglishTableOfContents />
            </ReportPage>

            {/* Page 5: Astrology Introduction */}
            <ReportPage id="astrology-introduction-5" pageNumber={5}>
              <AstrologyIntroductionPage5 pageNumber={5} />
            </ReportPage>

            {/* Page 6: Sun Sign */}
            <ReportPage id="sun-sign-replica" pageNumber={6}>
              <SunSignPageReplica pageNumber={6} />
            </ReportPage>

            {/* Page 7: Sun Sign Content (Dynamic - personalized!) */}
            <ReportPage id="sun-sign-content" pageNumber={7}>
              <DynamicZodiacContentPage planet="sun" pageNumber={7} />
            </ReportPage>

            {/* Page 8: Moon Sign */}
            <ReportPage id="moon-sign-replica" pageNumber={8}>
              <MoonSignPageReplica pageNumber={8} />
            </ReportPage>

            {/* Page 9: Moon Sign Content (Dynamic) */}
            <ReportPage id="moon-sign-content" pageNumber={9}>
              <DynamicZodiacContentPage planet="moon" pageNumber={9} />
            </ReportPage>

            {/* Page 10: Rising Sign */}
            <ReportPage id="rising-sign-replica" pageNumber={10}>
              <RisingSignPageReplica pageNumber={10} />
            </ReportPage>

            {/* Page 11: Rising Sign Content (Dynamic) */}
            <ReportPage id="rising-sign-content" pageNumber={11}>
              <DynamicZodiacContentPage planet="rising" pageNumber={11} />
            </ReportPage>

            {/* Page 12: Mercury Planet */}
            <ReportPage id="mercury-replica" pageNumber={12}>
              <MercuryPlanetPageReplica pageNumber={12} />
            </ReportPage>

            {/* Page 13: Mercury Sign Content (Dynamic) */}
            <ReportPage id="mercury-sign-content" pageNumber={13}>
              <DynamicZodiacContentPage planet="mercury" pageNumber={13} />
            </ReportPage>

            {/* Page 14: Venus Planet */}
            <ReportPage id="venus-replica" pageNumber={14}>
              <VenusPlanetPageReplica pageNumber={14} />
            </ReportPage>

            {/* Page 15: Venus Sign Content (Dynamic) */}
            <ReportPage id="venus-sign-content" pageNumber={15}>
              <DynamicZodiacContentPage planet="venus" pageNumber={15} />
            </ReportPage>

            {/* Page 16: Mars Planet */}
            <ReportPage id="mars-replica" pageNumber={16}>
              <MarsPlanetPageReplica pageNumber={16} />
            </ReportPage>

            {/* Page 17: Mars Sign Content (Dynamic) */}
            <ReportPage id="mars-sign-content" pageNumber={17}>
              <DynamicZodiacContentPage planet="mars" pageNumber={17} />
            </ReportPage>

            {/* Page 18: Jupiter Planet */}
            <ReportPage id="jupiter-replica" pageNumber={18}>
              <JupiterPlanetPageReplica pageNumber={18} />
            </ReportPage>

            {/* Page 19: Jupiter Sign Content (Dynamic) */}
            <ReportPage id="jupiter-sign-content" pageNumber={19}>
              <DynamicZodiacContentPage planet="jupiter" pageNumber={19} />
            </ReportPage>

            {/* Page 20: Saturn Planet */}
            <ReportPage id="saturn-replica" pageNumber={20}>
              <SaturnPlanetPageReplica pageNumber={20} />
            </ReportPage>

            {/* Page 21: Saturn Sign Content (Dynamic) */}
            <ReportPage id="saturn-sign-content" pageNumber={21}>
              <DynamicZodiacContentPage planet="saturn" pageNumber={21} />
            </ReportPage>

            {/* Page 22: Uranus Planet */}
            <ReportPage id="uranus-replica" pageNumber={22}>
              <UranusPlanetPageReplica pageNumber={22} />
            </ReportPage>

            {/* Page 23: Uranus Sign Content (Dynamic) */}
            <ReportPage id="uranus-sign-content" pageNumber={23}>
              <DynamicZodiacContentPage planet="uranus" pageNumber={23} />
            </ReportPage>

            {/* Page 24: Neptune Planet */}
            <ReportPage id="neptune-replica" pageNumber={24}>
              <NeptunePlanetPageReplica pageNumber={24} />
            </ReportPage>

            {/* Page 25: Neptune Sign Content (Dynamic) */}
            <ReportPage id="neptune-sign-content" pageNumber={25}>
              <DynamicZodiacContentPage planet="neptune" pageNumber={25} />
            </ReportPage>

            {/* Page 26: Pluto Planet */}
            <ReportPage id="pluto-replica" pageNumber={26}>
              <PlutoPlanetPageReplica pageNumber={26} />
            </ReportPage>

            {/* Page 27: Pluto Sign Content (Dynamic) */}
            <ReportPage id="pluto-sign-content" pageNumber={27}>
              <DynamicZodiacContentPage planet="pluto" pageNumber={27} />
            </ReportPage>

            {/* Page 28: Chiron */}
            <ReportPage id="chiron-replica" pageNumber={28}>
              <ChironPageReplica pageNumber={28} />
            </ReportPage>

            {/* Page 29: Chiron Sign Content (Dynamic) */}
            <ReportPage id="chiron-sign-content" pageNumber={29}>
              <DynamicZodiacContentPage planet="chiron" pageNumber={29} />
            </ReportPage>

            {/* Page 30: Compatibility Wheel (Dynamic) */}
            <ReportPage id="compatibility-wheel" pageNumber={30}>
              <LibraCompatibilityWheel pageNumber={30} />
            </ReportPage>

            {/* Page 31-33: Compatibility Parts (Dynamic - 12 pairings total) */}
            <ReportPage id="compatibility-1" pageNumber={31}>
              <DynamicCompatibilityPage pageNumber={31} pairingsPerPage={4} startIndex={0} />
            </ReportPage>

            <ReportPage id="compatibility-2" pageNumber={32}>
              <DynamicCompatibilityPage pageNumber={32} pairingsPerPage={4} startIndex={4} />
            </ReportPage>

            <ReportPage id="compatibility-3" pageNumber={33}>
              <DynamicCompatibilityPage pageNumber={33} pairingsPerPage={4} startIndex={8} />
            </ReportPage>

            {/* Page 34: Guide to Astrology Title */}
            <ReportPage id="guide-to-astrology-title" pageNumber={34}>
              <GuideToAstrologyTitle pageNumber={34} />
            </ReportPage>

            {/* Page 35-40: Astrology Guide */}
            <ReportPage id="modern-astrology-intro" pageNumber={35}>
              <ModernAstrologyIntro pageNumber={35} />
            </ReportPage>

            <ReportPage id="history-of-astrology" pageNumber={36}>
              <HistoryOfAstrologyPage pageNumber={36} />
            </ReportPage>

            <ReportPage id="astrology-types" pageNumber={37}>
              <AstrologyTypesPage pageNumber={37} />
            </ReportPage>

            <ReportPage id="modern-astrology-details" pageNumber={38}>
              <ModernAstrologyDetails pageNumber={38} />
            </ReportPage>

            <ReportPage id="modern-western-astrology" pageNumber={39}>
              <ModernWesternAstrology pageNumber={39} />
            </ReportPage>

            <ReportPage id="astrology-concepts-replica" pageNumber={40}>
              <AstrologyConcepts pageNumber={40} />
            </ReportPage>

            {/* Page 41-69: Zodiac Signs Section */}
            <ReportPage id="zodiac-signs-overview" pageNumber={41}>
              <ZodiacSignsOverviewPage pageNumber={41} />
            </ReportPage>

            <ReportPage id="elemental-classification" pageNumber={42}>
              <ElementalClassification pageNumber={42} />
            </ReportPage>

            <ReportPage id="modalities" pageNumber={43}>
              <ModalitiesPage pageNumber={43} />
            </ReportPage>

            <ReportPage id="duality" pageNumber={44}>
              <DualityInAstrology pageNumber={44} />
            </ReportPage>

            <ReportPage id="significance" pageNumber={45}>
              <SignificancePage pageNumber={45} />
            </ReportPage>

            {/* Aries (46-47) */}
            <ReportPage id="detailed-sign-aries" pageNumber={46}>
              <AriesDetailsPage pageNumber={46} />
            </ReportPage>

            <ReportPage id="sign-details-aries" pageNumber={47}>
              <InnerAriesPage pageNumber={47} />
            </ReportPage>

            {/* Taurus (48-49) */}
            <ReportPage id="detailed-sign-taurus" pageNumber={48}>
              <TaurusDetailsPage pageNumber={48} />
            </ReportPage>

            <ReportPage id="sign-details-taurus" pageNumber={49}>
              <InnerTaurusPage pageNumber={49} />
            </ReportPage>

            {/* Gemini (50-51) */}
            <ReportPage id="detailed-sign-gemini" pageNumber={50}>
              <GeminiDetailsPage pageNumber={50} />
            </ReportPage>

            <ReportPage id="sign-details-gemini" pageNumber={51}>
              <InnerGeminiPage pageNumber={51} />
            </ReportPage>

            {/* Cancer (52-53) */}
            <ReportPage id="detailed-sign-cancer" pageNumber={52}>
              <CancerDetailsPage pageNumber={52} />
            </ReportPage>

            <ReportPage id="sign-details-cancer" pageNumber={53}>
              <InnerCancerPage pageNumber={53} />
            </ReportPage>

            {/* Leo (54-55) */}
            <ReportPage id="detailed-sign-leo" pageNumber={54}>
              <LeoDetailsPage pageNumber={54} />
            </ReportPage>

            <ReportPage id="sign-details-leo" pageNumber={55}>
              <InnerLeoPage pageNumber={55} />
            </ReportPage>

            {/* Virgo (56-57) */}
            <ReportPage id="detailed-sign-virgo" pageNumber={56}>
              <VirgoDetailsPage pageNumber={56} />
            </ReportPage>

            <ReportPage id="sign-details-virgo" pageNumber={57}>
              <InnerVirgoPage pageNumber={57} />
            </ReportPage>

            {/* Libra (58-59) */}
            <ReportPage id="detailed-sign-libra" pageNumber={58}>
              <LibraDetailsPage pageNumber={58} />
            </ReportPage>

            <ReportPage id="sign-details-libra" pageNumber={59}>
              <InnerLibraPage pageNumber={59} />
            </ReportPage>

            {/* Scorpio (60-61) */}
            <ReportPage id="detailed-sign-scorpio" pageNumber={60}>
              <ScorpioDetailsPage pageNumber={60} />
            </ReportPage>

            <ReportPage id="sign-details-scorpio" pageNumber={61}>
              <InnerScorpioPage pageNumber={61} />
            </ReportPage>

            {/* Sagittarius (62-63) */}
            <ReportPage id="detailed-sign-sagittarius" pageNumber={62}>
              <SagittariusDetailsPage pageNumber={62} />
            </ReportPage>

            <ReportPage id="sign-details-sagittarius" pageNumber={63}>
              <InnerSagittariusPage pageNumber={63} />
            </ReportPage>

            {/* Capricorn (64-65) */}
            <ReportPage id="detailed-sign-capricorn" pageNumber={64}>
              <CapricornDetailsPage pageNumber={64} />
            </ReportPage>

            <ReportPage id="sign-details-capricorn" pageNumber={65}>
              <InnerCapricornPage pageNumber={65} />
            </ReportPage>

            {/* Aquarius (66-67) */}
            <ReportPage id="detailed-sign-aquarius" pageNumber={66}>
              <AquariusDetailsPage pageNumber={66} />
            </ReportPage>

            <ReportPage id="sign-details-aquarius" pageNumber={67}>
              <InnerAquariusPage pageNumber={67} />
            </ReportPage>

            {/* Pisces (68-69) */}
            <ReportPage id="detailed-sign-pisces" pageNumber={68}>
              <PiscesDetailsPage pageNumber={68} />
            </ReportPage>

            <ReportPage id="sign-details-pisces" pageNumber={69}>
              <InnerPiscesPage pageNumber={69} />
            </ReportPage>

            {/* Page 70-78: Planets Section */}
            <ReportPage id="solarsystem-70" pageNumber={70}>
              <SolarSystemPageNew pageNumber={70} />
            </ReportPage>

            <ReportPage id="planetsintroduction-71" pageNumber={71}>
              <PlanetsIntroductionNew pageNumber={71} />
            </ReportPage>

            <ReportPage id="planetssignificance-72" pageNumber={72}>
              <PlanetsSignificance pageNumber={72} />
            </ReportPage>

            <ReportPage id="luminaries-73" pageNumber={73}>
              <LuminariesPageNew pageNumber={73} />
            </ReportPage>

            <ReportPage id="innerplanets-74" pageNumber={74}>
              <InnerPlanetsPageNew pageNumber={74} />
            </ReportPage>

            <ReportPage id="venusmars-75" pageNumber={75}>
              <VenusMarsPageNew pageNumber={75} />
            </ReportPage>

            <ReportPage id="socialplanets-76" pageNumber={76}>
              <SocialPlanetsPageNew pageNumber={76} />
            </ReportPage>

            <ReportPage id="outerplanets-77" pageNumber={77}>
              <OuterPlanetsPageNew pageNumber={77} />
            </ReportPage>

            <ReportPage id="plutochiron-78" pageNumber={78}>
              <PlutoChironPageNew pageNumber={78} />
            </ReportPage>

            {/* Page 79-97: Retrogrades Section */}
            <ReportPage id="retrogrades-79" pageNumber={79}>
              <RetrogradesPageReplica pageNumber={79} />
            </ReportPage>

            <ReportPage id="mercury-retrograde-80" pageNumber={80}>
              <MercuryRetrogradePageReplica pageNumber={80} />
            </ReportPage>

            <ReportPage id="mercury-retrograde-continued-81" pageNumber={81}>
              <MercuryRetrogradeContinuedReplica pageNumber={81} />
            </ReportPage>

            <ReportPage id="venus-retrograde-82" pageNumber={82}>
              <VenusRetrogradePageReplica pageNumber={82} />
            </ReportPage>

            <ReportPage id="venus-retrograde-continued-83" pageNumber={83}>
              <VenusRetrogradeContinuedReplica pageNumber={83} />
            </ReportPage>

            <ReportPage id="mars-retrograde-84" pageNumber={84}>
              <MarsRetrogradePageReplica pageNumber={84} />
            </ReportPage>

            <ReportPage id="mars-retrograde-continued-85" pageNumber={85}>
              <MarsRetrogradeContinuedReplica pageNumber={85} />
            </ReportPage>

            <ReportPage id="jupiter-retrograde-86" pageNumber={86}>
              <JupiterRetrogradePageReplica pageNumber={86} />
            </ReportPage>

            <ReportPage id="jupiter-retrograde-continued-87" pageNumber={87}>
              <JupiterRetrogradeContinuedReplica pageNumber={87} />
            </ReportPage>

            <ReportPage id="saturn-retrograde-88" pageNumber={88}>
              <SaturnRetrogradePageReplica pageNumber={88} />
            </ReportPage>

            <ReportPage id="saturn-retrograde-continued-89" pageNumber={89}>
              <SaturnRetrogradeContinuedReplica pageNumber={89} />
            </ReportPage>

            <ReportPage id="uranus-retrograde-90" pageNumber={90}>
              <UranusRetrogradePageReplica pageNumber={90} />
            </ReportPage>

            <ReportPage id="uranus-retrograde-continued-91" pageNumber={91}>
              <UranusRetrogradeContinuedReplica pageNumber={91} />
            </ReportPage>

            <ReportPage id="neptune-retrograde-92" pageNumber={92}>
              <NeptuneRetrogradePageReplica pageNumber={92} />
            </ReportPage>

            <ReportPage id="neptune-retrograde-continued-93" pageNumber={93}>
              <NeptuneRetrogradeContinuedReplica pageNumber={93} />
            </ReportPage>

            <ReportPage id="pluto-retrograde-94" pageNumber={94}>
              <PlutoRetrogradePageReplica pageNumber={94} />
            </ReportPage>

            <ReportPage id="pluto-retrograde-continued-95" pageNumber={95}>
              <PlutoRetrogradeContinuedReplica pageNumber={95} />
            </ReportPage>

            <ReportPage id="chiron-retrograde-96" pageNumber={96}>
              <ChironRetrogradePageReplica pageNumber={96} />
            </ReportPage>

            <ReportPage id="chiron-retrograde-continued-97" pageNumber={97}>
              <ChironRetrogradeContinuedReplica pageNumber={97} />
            </ReportPage>

            {/* Page 98-101: Houses Section */}
            <ReportPage id="houses-introduction-98" pageNumber={98}>
              <HousesIntroductionReplica pageNumber={98} />
            </ReportPage>

            <ReportPage id="twelve-houses-overview-99" pageNumber={99}>
              <TwelveHousesOverviewReplica pageNumber={99} />
            </ReportPage>

            <ReportPage id="houses-5-8-100" pageNumber={100}>
              <Houses58Replica pageNumber={100} />
            </ReportPage>

            <ReportPage id="houses-9-12-101" pageNumber={101}>
              <Houses912Replica pageNumber={101} />
            </ReportPage>

            {/* Page 102-109: Divination & Crystals */}
            <ReportPage id="divination-astrology-title-102" pageNumber={102}>
              <DivinationAstrologyTitleReplica pageNumber={102} />
            </ReportPage>

            <ReportPage id="how-to-interpret-horoscopes-103" pageNumber={103}>
              <HowToInterpretHoroscopesReplica pageNumber={103} />
            </ReportPage>

            <ReportPage id="the-major-angles-104" pageNumber={104}>
              <TheMajorAnglesReplica pageNumber={104} />
            </ReportPage>

            <ReportPage id="interpreting-daily-horoscopes-105" pageNumber={105}>
              <InterpretingDailyHoroscopesReplica pageNumber={105} />
            </ReportPage>

            <ReportPage id="advanced-techniques-106" pageNumber={106}>
              <AdvancedTechniquesReplica pageNumber={106} />
            </ReportPage>

            <ReportPage id="crystal-foundations-107" pageNumber={107}>
              <CrystalFoundationsPageReplica pageNumber={107} />
            </ReportPage>

            <ReportPage id="crystals-in-astrology-108" pageNumber={108}>
              <CrystalsInAstrologyReplica pageNumber={108} />
            </ReportPage>

            <ReportPage id="history-crystals-astrology-109" pageNumber={109}>
              <HistoryOfCrystalsAstrologyReplica pageNumber={109} />
            </ReportPage>

            {/* Page 110-116: Crystal Pages */}
            <ReportPage id="crystal-history-110" pageNumber={110}>
              <CrystalHistory pageNumber={110} />
            </ReportPage>

            <ReportPage id="zodiac-crystals-1-111" pageNumber={111}>
              <ZodiacCrystals1 pageNumber={111} />
            </ReportPage>

            <ReportPage id="zodiac-crystals-2-112" pageNumber={112}>
              <ZodiacCrystals2 pageNumber={112} />
            </ReportPage>

            <ReportPage id="zodiac-crystals-3-113" pageNumber={113}>
              <ZodiacCrystals3 pageNumber={113} />
            </ReportPage>

            <ReportPage id="personalized-crystal-charts-114" pageNumber={114}>
              <PersonalizedCrystalCharts pageNumber={114} />
            </ReportPage>

            <ReportPage id="crystal-cleansing-guide-115" pageNumber={115}>
              <CrystalCleansingGuide pageNumber={115} />
            </ReportPage>

            <ReportPage id="crystal-care-steps-116" pageNumber={116}>
              <CrystalCareSteps pageNumber={116} />
            </ReportPage>

            {/* Page 117-131: Rituals & Palmistry */}
            <ReportPage id="astrological-rituals-meditations-117" pageNumber={117}>
              <AstrologicalRitualsMeditations pageNumber={117} />
            </ReportPage>

            <ReportPage id="astrological-crystal-elixirs-118" pageNumber={118}>
              <AstrologicalCrystalElixirs pageNumber={118} />
            </ReportPage>

            <ReportPage id="choose-astrological-timing-119" pageNumber={119}>
              <ChooseAstrologicalTiming pageNumber={119} />
            </ReportPage>

            <ReportPage id="planetary-seasonal-timing-120" pageNumber={120}>
              <PlanetarySeasonalTiming pageNumber={120} />
            </ReportPage>

            <ReportPage id="astrological-events-elixirs-121" pageNumber={121}>
              <AstrologicalEventsElixirs pageNumber={121} />
            </ReportPage>

            <ReportPage id="agate-marble-texture-122" pageNumber={122}>
              <AgateMarbleTexture pageNumber={122} />
            </ReportPage>

            <ReportPage id="palmistry-hand-model-123" pageNumber={123}>
              <PalmistryHandModel pageNumber={123} />
            </ReportPage>

            <ReportPage id="palmistry-mysteries-intro-125" pageNumber={125}>
              <PalmistryMysteriesIntro pageNumber={125} />
            </ReportPage>

            <ReportPage id="palmistry-history-page-126" pageNumber={126}>
              <PalmistryHistoryPage pageNumber={126} />
            </ReportPage>

            <ReportPage id="understanding-palm-types-127" pageNumber={127}>
              <UnderstandingPalmTypes pageNumber={127} />
            </ReportPage>

            <ReportPage id="the-mounts-page-128" pageNumber={128}>
              <TheMountsPage pageNumber={128} />
            </ReportPage>

            <ReportPage id="finding-mounts-steps-129" pageNumber={129}>
              <FindingMountsSteps pageNumber={129} />
            </ReportPage>

            <ReportPage id="the-major-lines-page-130" pageNumber={130}>
              <TheMajorLinesPage pageNumber={130} />
            </ReportPage>

            <ReportPage id="palmistry-details-page-131" pageNumber={131}>
              <PalmistryDetailsPage pageNumber={131} />
            </ReportPage>

            {/* Page 132-145: Tarot Section */}
            <ReportPage id="tarot-reading-photo-132" pageNumber={132}>
              <TarotReadingPhoto pageNumber={132} />
            </ReportPage>

            <ReportPage id="tarot-cards-intro-133" pageNumber={133}>
              <TarotCardsIntro pageNumber={133} />
            </ReportPage>

            <ReportPage id="major-arcana-structure-134" pageNumber={134}>
              <MajorArcanaStructure pageNumber={134} />
            </ReportPage>

            <ReportPage id="major-arcana-cards-1-135" pageNumber={135}>
              <MajorArcanaCards1 pageNumber={135} />
            </ReportPage>

            <ReportPage id="major-arcana-cards-2-136" pageNumber={136}>
              <MajorArcanaCards2 pageNumber={136} />
            </ReportPage>

            <ReportPage id="upright-reversed-cards-137" pageNumber={137}>
              <UprightReversedCards pageNumber={137} />
            </ReportPage>

            <ReportPage id="minor-arcana-suits-138" pageNumber={138}>
              <MinorArcanaSuits pageNumber={138} />
            </ReportPage>

            <ReportPage id="conducting-reading-steps-139" pageNumber={139}>
              <ConductingReadingSteps pageNumber={139} />
            </ReportPage>

            <ReportPage id="popular-tarot-spreads-140" pageNumber={140}>
              <PopularTarotSpreads pageNumber={140} />
            </ReportPage>

            <ReportPage id="celtic-cross-spread-141" pageNumber={141}>
              <CelticCrossSpread pageNumber={141} />
            </ReportPage>

            <ReportPage id="love-spread-layout-142" pageNumber={142}>
              <LoveSpreadLayout pageNumber={142} />
            </ReportPage>

            <ReportPage id="yes-no-spread-143" pageNumber={143}>
              <YesNoSpread pageNumber={143} />
            </ReportPage>

            <ReportPage id="interpreting-tarot-tips-144" pageNumber={144}>
              <InterpretingTarotTips pageNumber={144} />
            </ReportPage>

            <ReportPage id="tarot-superstitions-145" pageNumber={145}>
              <TarotSuperstitions pageNumber={145} />
            </ReportPage>

            {/* Page 146-151: Numerology Section */}
            <ReportPage id="numerology-mandala-replica-146" pageNumber={146}>
              <NumerologyMandalaReplica pageNumber={146} />
            </ReportPage>

            <ReportPage id="numerology-intro-replica-147" pageNumber={147}>
              <NumerologyIntroReplica pageNumber={147} />
            </ReportPage>

            <ReportPage id="numerology-core-numbers-replica-148" pageNumber={148}>
              <NumerologyCoreNumbersReplica pageNumber={148} />
            </ReportPage>

            <ReportPage id="numerology-everyday-life-replica-149" pageNumber={149}>
              <NumerologyEverydayLifeReplica pageNumber={149} />
            </ReportPage>

            <ReportPage id="meaning-of-numbers-1-4-replica-150" pageNumber={150}>
              <MeaningOfNumbers14Replica pageNumber={150} />
            </ReportPage>

            <ReportPage id="meaning-of-numbers-5-9-replica-151" pageNumber={151}>
              <MeaningOfNumbers59Replica pageNumber={151} />
            </ReportPage>

            {/* Page 152-166: Love & Relationships Section */}
            <ReportPage id="love-potion-photo-152" pageNumber={152}>
              <LovePotionPhoto pageNumber={152} />
            </ReportPage>

            <ReportPage id="love-relationships-intro-replica-153" pageNumber={153}>
              <LoveRelationshipsIntroReplica pageNumber={153} />
            </ReportPage>

            <ReportPage id="astrology-relationship-timing-replica-154" pageNumber={154}>
              <AstrologyRelationshipTimingReplica pageNumber={154} />
            </ReportPage>

            <ReportPage id="astrological-timing-details-replica-155" pageNumber={155}>
              <AstrologicalTimingDetailsReplica pageNumber={155} />
            </ReportPage>

            <ReportPage id="crystals-for-love-intro-replica-156" pageNumber={156}>
              <CrystalsForLoveIntroReplica pageNumber={156} />
            </ReportPage>

            <ReportPage id="love-crystals-collection-replica-157" pageNumber={157}>
              <LoveCrystalsCollectionReplica pageNumber={157} />
            </ReportPage>

            <ReportPage id="feng-shui-romantic-prosperity-replica-158" pageNumber={158}>
              <FengShuiRomanticProsperityReplica pageNumber={158} />
            </ReportPage>

            <ReportPage id="feng-shui-love-tips-replica-159" pageNumber={159}>
              <FengShuiLoveTipsReplica pageNumber={159} />
            </ReportPage>

            <ReportPage id="love-affirmations-mantras-replica-160" pageNumber={160}>
              <LoveAffirmationsMantrasReplica pageNumber={160} />
            </ReportPage>

            <ReportPage id="mantras-attract-maintain-love-replica-161" pageNumber={161}>
              <MantrasAttractMaintainLoveReplica pageNumber={161} />
            </ReportPage>

            <ReportPage id="love-spells-rituals-intro-replica-162" pageNumber={162}>
              <LoveSpellsRitualsIntroReplica pageNumber={162} />
            </ReportPage>

            <ReportPage id="spells-for-attracting-love-replica-163" pageNumber={163}>
              <SpellsForAttractingLoveReplica pageNumber={163} />
            </ReportPage>

            <ReportPage id="rituals-strengthen-relationships-replica-164" pageNumber={164}>
              <RitualsStrengthenRelationshipsReplica pageNumber={164} />
            </ReportPage>

            <ReportPage id="cosmic-couple-starry-sky-165" pageNumber={165}>
              <CosmicCoupleStarrySky pageNumber={165} />
            </ReportPage>

            <ReportPage id="cosmic-nebula-space-166" pageNumber={166}>
              <CosmicNebulaSpace pageNumber={166} />
            </ReportPage>

            {/* Page 167-171: Astrologer's Lexicon */}
            <ReportPage id="astrologer-lexicon-title-replica-167" pageNumber={167}>
              <AstrologerLexiconTitleReplica pageNumber={167} />
            </ReportPage>

            <ReportPage id="glossary-a-c-replica-168" pageNumber={168}>
              <GlossaryACReplica pageNumber={168} />
            </ReportPage>

            <ReportPage id="glossary-e-j-replica-169" pageNumber={169}>
              <GlossaryEJReplica pageNumber={169} />
            </ReportPage>

            <ReportPage id="glossary-k-q-replica-170" pageNumber={170}>
              <GlossaryKQReplica pageNumber={170} />
            </ReportPage>

            <ReportPage id="glossary-r-z-replica-171" pageNumber={171}>
              <GlossaryRZReplica pageNumber={171} />
            </ReportPage>

            {/* Page 172-191: Astrological Events (Calendars 2025-2029) */}
            <ReportPage id="astrological-events-intro-replica-172" pageNumber={172}>
              <AstrologicalEventsIntroReplica pageNumber={172} />
            </ReportPage>

            <ReportPage id="calendar-2025-part1-173" pageNumber={173}>
              <Calendar2025Part1Replica pageNumber={173} />
            </ReportPage>

            <ReportPage id="calendar-2025-part2-174" pageNumber={174}>
              <Calendar2025Part2Replica pageNumber={174} />
            </ReportPage>

            <ReportPage id="planetary-retrogrades-2025-replica-175" pageNumber={175}>
              <PlanetaryRetrogrades2025Replica pageNumber={175} />
            </ReportPage>

            <ReportPage id="year-2026-photo-replica-176" pageNumber={176}>
              <Year2026PhotoReplica pageNumber={176} />
            </ReportPage>

            <ReportPage id="calendar-2026-part1-177" pageNumber={177}>
              <Calendar2026Part1Replica pageNumber={177} />
            </ReportPage>

            <ReportPage id="calendar-2026-part2-178" pageNumber={178}>
              <Calendar2026Part2Replica pageNumber={178} />
            </ReportPage>

            <ReportPage id="planetary-retrogrades-2026-replica-179" pageNumber={179}>
              <PlanetaryRetrogrades2026Replica pageNumber={179} />
            </ReportPage>

            <ReportPage id="year-2027-photo-replica-180" pageNumber={180}>
              <Year2027PhotoReplica pageNumber={180} />
            </ReportPage>

            <ReportPage id="calendar-2027-part1-181" pageNumber={181}>
              <Calendar2027Part1Replica pageNumber={181} />
            </ReportPage>

            <ReportPage id="calendar-2027-part2-182" pageNumber={182}>
              <Calendar2027Part2Replica pageNumber={182} />
            </ReportPage>

            <ReportPage id="year-2028-photo-replica-183" pageNumber={183}>
              <Year2028PhotoReplica pageNumber={183} />
            </ReportPage>

            <ReportPage id="calendar-2028-part1-184" pageNumber={184}>
              <Calendar2028Part1Replica pageNumber={184} />
            </ReportPage>

            <ReportPage id="calendar-2028-part2-185" pageNumber={185}>
              <Calendar2028Part2Replica pageNumber={185} />
            </ReportPage>

            <ReportPage id="planetary-retrogrades-2027-replica-186" pageNumber={186}>
              <PlanetaryRetrogrades2027Replica pageNumber={186} />
            </ReportPage>

            <ReportPage id="planetary-retrogrades-2028-replica-187" pageNumber={187}>
              <PlanetaryRetrogrades2028Replica pageNumber={187} />
            </ReportPage>

            <ReportPage id="year-2029-photo-replica-188" pageNumber={188}>
              <Year2029PhotoReplica pageNumber={188} />
            </ReportPage>

            <ReportPage id="calendar-2029-part1-189" pageNumber={189}>
              <Calendar2029Part1Replica pageNumber={189} />
            </ReportPage>

            <ReportPage id="calendar-2029-part2-190" pageNumber={190}>
              <Calendar2029Part2Replica pageNumber={190} />
            </ReportPage>

            <ReportPage id="planetary-retrogrades-2029-replica-191" pageNumber={191}>
              <PlanetaryRetrogrades2029Replica pageNumber={191} />
            </ReportPage>

            {/* Page 192-196: Final Pages */}
            <ReportPage id="countryside-milky-way-replica-192" pageNumber={192}>
              <CountrysideMilkyWayReplica pageNumber={192} />
            </ReportPage>

            <ReportPage id="final-words-title-replica-193" pageNumber={193}>
              <FinalWordsTitleReplica pageNumber={193} />
            </ReportPage>

            <ReportPage id="final-conclusion-replica-194" pageNumber={194}>
              <FinalConclusionReplica pageNumber={194} />
            </ReportPage>

            <ReportPage id="minimalist-hand-illustration-replica-195" pageNumber={195}>
              <MinimalistHandIllustrationReplica pageNumber={195} />
            </ReportPage>

            <ReportPage id="personalized-message-replica-196" pageNumber={196}>
              <PersonalizedMessageReplica pageNumber={196} />
            </ReportPage>
          </ReportViewport>
        </ReportDataProvider>
      </div>
    </AuraShell>
  )
}
