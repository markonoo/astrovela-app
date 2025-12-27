"use client"

import { useEffect, useState } from "react"
import { AuraShell } from "@/components/aura/AuraShell"
import { useEntitlement } from "@/components/aura/AuraShell"
import { Paywall } from "@/components/aura/paywall"
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

export default function ReportViewerPage() {
  const entitlement = useEntitlement()
  const [hasAccess, setHasAccess] = useState(false)

  useEffect(() => {
    setHasAccess(!!entitlement?.hasReport)
  }, [entitlement?.hasReport])

  if (!hasAccess) {
    return <Paywall />
  }

  const pages = [
    CoverPage,
    NordastroPage,
    PersonalizedCover,
    EnglishTableOfContents,
    AstrologyIntroductionPage5,
    SunSignPageReplica,
    DynamicZodiacContentPage,
    MoonSignPageReplica,
    RisingSignPageReplica,
    MercuryPlanetPageReplica,
    VenusPlanetPageReplica,
    MarsPlanetPageReplica,
    JupiterPlanetPageReplica,
    SaturnPlanetPageReplica,
    UranusPlanetPageReplica,
    NeptunePlanetPageReplica,
    PlutoPlanetPageReplica,
    ChironPageReplica,
    LibraCompatibilityWheel,
    DynamicCompatibilityPage,
    GuideToAstrologyTitle,
    ModernAstrologyIntro,
    HistoryOfAstrologyPage,
    AstrologyTypesPage,
    ModernAstrologyDetails,
    ModernWesternAstrology,
    AstrologyConcepts,
    ZodiacSignsOverviewPage,
    ElementalClassification,
    ModalitiesPage,
    DualityInAstrology,
    SignificancePage,
    AriesDetailsPage,
    InnerAriesPage,
    TaurusDetailsPage,
    InnerTaurusPage,
    GeminiDetailsPage,
    InnerGeminiPage,
    CancerDetailsPage,
    InnerCancerPage,
    LeoDetailsPage,
    InnerLeoPage,
    VirgoDetailsPage,
    InnerVirgoPage,
    LibraDetailsPage,
    InnerLibraPage,
    ScorpioDetailsPage,
    InnerScorpioPage,
    SagittariusDetailsPage,
    InnerSagittariusPage,
    CapricornDetailsPage,
    InnerCapricornPage,
    AquariusDetailsPage,
    InnerAquariusPage,
    PiscesDetailsPage,
    InnerPiscesPage,
    SolarSystemPageNew,
    PlanetsIntroductionNew,
    PlanetsSignificance,
    LuminariesPageNew,
    InnerPlanetsPageNew,
    VenusMarsPageNew,
    SocialPlanetsPageNew,
    OuterPlanetsPageNew,
    PlutoChironPageNew,
    RetrogradesPageReplica,
    MercuryRetrogradePageReplica,
    MercuryRetrogradeContinuedReplica,
    VenusRetrogradePageReplica,
    VenusRetrogradeContinuedReplica,
    MarsRetrogradePageReplica,
    MarsRetrogradeContinuedReplica,
    JupiterRetrogradePageReplica,
    JupiterRetrogradeContinuedReplica,
    SaturnRetrogradePageReplica,
    SaturnRetrogradeContinuedReplica,
    UranusRetrogradePageReplica,
    UranusRetrogradeContinuedReplica,
    NeptuneRetrogradePageReplica,
    NeptuneRetrogradeContinuedReplica,
    PlutoRetrogradePageReplica,
    PlutoRetrogradeContinuedReplica,
    ChironRetrogradePageReplica,
    ChironRetrogradeContinuedReplica,
    HousesIntroductionReplica,
    TwelveHousesOverviewReplica,
    Houses14Replica,
    Houses58Replica,
    Houses912Replica,
    DivinationAstrologyTitleReplica,
    HowToInterpretHoroscopesReplica,
    TheMajorAnglesReplica,
    InterpretingDailyHoroscopesReplica,
    AdvancedTechniquesReplica,
    CrystalFoundationsPageReplica,
    CrystalsInAstrologyReplica,
    HistoryOfCrystalsAstrologyReplica,
    CrystalHistory,
    ZodiacCrystals1,
    ZodiacCrystals2,
    ZodiacCrystals3,
    PersonalizedCrystalCharts,
    CrystalCleansingGuide,
    CrystalCareSteps,
    AstrologicalRitualsMeditations,
    AstrologicalCrystalElixirs,
    ChooseAstrologicalTiming,
    PlanetarySeasonalTiming,
    AstrologicalEventsElixirs,
    AgateMarbleTexture,
    PalmistryHandModel,
    PalmistryMysteriesIntro,
    PalmistryHistoryPage,
    UnderstandingPalmTypes,
    TheMountsPage,
    FindingMountsSteps,
    TheMajorLinesPage,
    PalmistryDetailsPage,
    TarotReadingPhoto,
    TarotCardsIntro,
    MajorArcanaStructure,
    MajorArcanaCards1,
    MajorArcanaCards2,
    UprightReversedCards,
    MinorArcanaSuits,
    ConductingReadingSteps,
    PopularTarotSpreads,
    CelticCrossSpread,
    LoveSpreadLayout,
    YesNoSpread,
    InterpretingDailyHoroscopesReplica,
    TarotSuperstitions,
    NumerologyMandalaReplica,
    NumerologyIntroReplica,
    NumerologyCoreNumbersReplica,
    NumerologyEverydayLifeReplica,
    MeaningOfNumbers14Replica,
    MeaningOfNumbers59Replica,
    LovePotionPhoto,
    LoveRelationshipsIntroReplica,
    AstrologyRelationshipTimingReplica,
    AstrologicalTimingDetailsReplica,
    CrystalsForLoveIntroReplica,
    LoveCrystalsCollectionReplica,
    FengShuiRomanticProsperityReplica,
    FengShuiLoveTipsReplica,
    LoveAffirmationsMantrasReplica,
    MantrasAttractMaintainLoveReplica,
    LoveSpellsRitualsIntroReplica,
    SpellsForAttractingLoveReplica,
    RitualsStrengthenRelationshipsReplica,
    CosmicCoupleStarrySky,
    CosmicNebulaSpace,
    AstrologerLexiconTitleReplica,
    GlossaryACReplica,
    GlossaryEJReplica,
    GlossaryKQReplica,
    GlossaryRZReplica,
  ]

  return (
    <AuraShell title="Your Report" activeTab="ask-ai">
      <div className="px-0 pb-10">
        <ReportDataProvider>
          <ReportViewport>
            {pages.map((PageComponent, index) => (
              <ReportPage key={index} pageNumber={index + 1}>
                <PageComponent pageNumber={index + 1} />
              </ReportPage>
            ))}
          </ReportViewport>
        </ReportDataProvider>
      </div>
    </AuraShell>
  )
}
