"use client"
import React from "react"

import { z } from "zod"

export const ReportDataSchema = z.object({
  name: z.string().min(1).default("Cristina"),
  firstName: z.string().default("CRISTINA"), // For cover pages (frontend and backend)
  lastName: z.string().default(""), // Empty by default - user enters their own
  birthDate: z.string().default("March 15, 1990"),
  birthTime: z.string().default("3:30 PM"),
  birthPlace: z.string().default("Los Angeles, California"),
  
  // Zodiac Placements (for dynamic content)
  sunSign: z.string().default("libra"),
  moonSign: z.string().default("pisces"),
  risingSign: z.string().default("sagittarius"),
  mercurySign: z.string().default("libra"),
  venusSign: z.string().default("sagittarius"),
  marsSign: z.string().default("libra"),
  jupiterSign: z.string().default("cancer"),
  saturnSign: z.string().default("capricorn"),
  uranusSign: z.string().default("capricorn"),
  neptuneSign: z.string().default("capricorn"),
  plutoSign: z.string().default("scorpio"),
  chironSign: z.string().default("cancer"),
  
  language: z.enum(["en", "de"]).default("en"),
  coverStyle: z.enum(["default", "sage", "gold", "night"]).default("default"),
  coverColor: z.string().default("#3d5a4a"), // Dynamic cover color (Sage Green default)
  accentColor: z.string().optional(),
  personalMessage: z.string().optional(),
  sections: z.object({
    birthChart: z.boolean().default(true),
    introduction: z.boolean().default(true),
    compatibility: z.boolean().default(true),
    crystals: z.boolean().default(true),
  }).default({ birthChart: true, introduction: true, compatibility: true, crystals: true }),
})

export type ReportData = z.infer<typeof ReportDataSchema>

type ReportDataContextValue = {
  data: ReportData;
  setData: (updater: (prev: ReportData) => ReportData) => void;
  loading: boolean;
}

const ReportDataContext = React.createContext<ReportDataContextValue | undefined>(undefined)

const STORAGE_KEY = "astrovela_report_data_v1"

function parseFromStorage(): ReportData | undefined {
  try {
    const raw = typeof window !== "undefined" ? localStorage.getItem(STORAGE_KEY) : null;
    if (!raw) return undefined;
    const json = JSON.parse(raw);
    const parsed = ReportDataSchema.safeParse(json);
    if (parsed.success) return parsed.data;
  } catch {}
  return undefined
}

function parseFromUrl(): Partial<ReportData> | undefined {
  if (typeof window === "undefined") return undefined;
  const params = new URLSearchParams(window.location.search);
  const payload = params.get("r");
  if (!payload) return undefined;
  try {
    const json = JSON.parse(decodeURIComponent(atob(payload)));
    const parsed = ReportDataSchema.partial().safeParse(json);
    if (parsed.success) return parsed.data;
  } catch {}
  return undefined
}

function writeToUrl(data: ReportData) {
  try {
    const partial = { 
      name: data.name, 
      firstName: data.firstName,
      lastName: data.lastName,
      birthDate: data.birthDate,
      birthTime: data.birthTime,
      birthPlace: data.birthPlace,
      sunSign: data.sunSign,
      moonSign: data.moonSign,
      risingSign: data.risingSign,
      mercurySign: data.mercurySign,
      venusSign: data.venusSign,
      marsSign: data.marsSign,
      jupiterSign: data.jupiterSign,
      saturnSign: data.saturnSign,
      uranusSign: data.uranusSign,
      neptuneSign: data.neptuneSign,
      plutoSign: data.plutoSign,
      chironSign: data.chironSign,
      language: data.language, 
      coverStyle: data.coverStyle, 
      coverColor: data.coverColor, 
      sections: data.sections 
    };
    const encoded = btoa(encodeURIComponent(JSON.stringify(partial)));
    const url = new URL(window.location.href);
    url.searchParams.set("r", encoded);
    window.history.replaceState({}, "", url.toString());
  } catch {}
}

interface ReportDataProviderProps {
  children: React.ReactNode;
  adminMode?: boolean; // Admin mode allows manual data editing for testing
  userId?: string | null; // Optional for admin mode
}

export function ReportDataProvider({ 
  children, 
  adminMode = false,
  userId = null 
}: ReportDataProviderProps) {
  const [data, setDataState] = React.useState<ReportData | null>(null);
  const [loading, setLoading] = React.useState(true);

  // For admin mode, allow localStorage/URL overrides
  const adminInitial = React.useMemo(() => {
    if (!adminMode) return null;
    const fromUrl = parseFromUrl();
    const fromStorage = parseFromStorage();
    const base: ReportData = {
      name: "Cristina",
      firstName: "CRISTINA",
      lastName: "RODRIGUEZ",
      birthDate: "March 15, 1990",
      birthTime: "3:30 PM",
      birthPlace: "Los Angeles, California",
      sunSign: "libra",
      moonSign: "pisces",
      risingSign: "sagittarius",
      mercurySign: "libra",
      venusSign: "sagittarius",
      marsSign: "libra",
      jupiterSign: "cancer",
      saturnSign: "capricorn",
      uranusSign: "capricorn",
      neptuneSign: "capricorn",
      plutoSign: "scorpio",
      chironSign: "cancer",
      language: "en",
      coverStyle: "default",
      coverColor: "#3d5a4a",
      accentColor: undefined,
      personalMessage: undefined,
      sections: { birthChart: true, introduction: true, compatibility: true, crystals: true },
    };
    const merged = { ...base, ...(fromStorage ?? {}), ...(fromUrl ?? {}) };
    return ReportDataSchema.parse(merged);
  }, [adminMode])

  // Fetch data from Supabase API (production mode)
  React.useEffect(() => {
    if (adminMode && adminInitial) {
      // Admin mode: use localStorage/URL data
      setDataState(adminInitial);
      setLoading(false);
      return;
    }

    // Production mode: fetch from Supabase
    async function fetchUserData() {
      try {
        const response = await fetch('/api/aura/report');
        if (!response.ok) {
          throw new Error('Failed to fetch report data');
        }
        
        const supabaseData = await response.json();
        
        // Map Supabase data → ReportData structure
        const reportData: ReportData = {
          // Personal info
          firstName: supabaseData.firstName?.toUpperCase() || "USER",
          lastName: supabaseData.lastName?.toUpperCase() || "",
          name: `${supabaseData.firstName || "User"} ${supabaseData.lastName || ""}`.trim(),
          
          // Birth data
          birthDate: supabaseData.birthDate || "January 1, 1990",
          birthTime: supabaseData.birthTime || "12:00 PM",
          birthPlace: supabaseData.birthPlace || "Unknown Location",
          
          // Zodiac placements from API (with fallbacks)
          sunSign: supabaseData.chartSummary?.sunSign?.toLowerCase() || "aries",
          moonSign: supabaseData.chartSummary?.moonSign?.toLowerCase() || "aries",
          risingSign: supabaseData.chartSummary?.risingSign?.toLowerCase() || "aries",
          
          // Planet signs - using fallbacks until API is extended
          // TODO: Extend API to return all planet placements from natalChartInterpretation
          mercurySign: supabaseData.chartSummary?.mercury?.toLowerCase() || "aries",
          venusSign: supabaseData.chartSummary?.venus?.toLowerCase() || "aries",
          marsSign: supabaseData.chartSummary?.mars?.toLowerCase() || "aries",
          jupiterSign: supabaseData.chartSummary?.jupiter?.toLowerCase() || "sagittarius",
          saturnSign: supabaseData.chartSummary?.saturn?.toLowerCase() || "capricorn",
          uranusSign: supabaseData.chartSummary?.uranus?.toLowerCase() || "aquarius",
          neptuneSign: supabaseData.chartSummary?.neptune?.toLowerCase() || "pisces",
          plutoSign: supabaseData.chartSummary?.pluto?.toLowerCase() || "scorpio",
          chironSign: supabaseData.chartSummary?.chiron?.toLowerCase() || "aries",
          
          // Styling
          coverColor: supabaseData.coverColor || "#3d5a4a",
          language: "en",
          coverStyle: "default",
          accentColor: undefined,
          personalMessage: undefined,
          sections: { 
            birthChart: true, 
            introduction: true, 
            compatibility: true, 
            crystals: true 
          },
        };
        
        setDataState(reportData);
      } catch (error) {
        console.error('Failed to fetch user data:', error);
        // Fallback to default data on error
        setDataState(ReportDataSchema.parse({}));
      } finally {
        setLoading(false);
      }
    }

    fetchUserData();
  }, [adminMode, adminInitial, userId]);

  const setData = React.useCallback((updater: (prev: ReportData) => ReportData) => {
    setDataState(prev => {
      if (!prev) return prev;
      const next = updater(prev);
      
      // Only save to localStorage/URL in admin mode
      if (adminMode) {
        try {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
          writeToUrl(next);
        } catch {}
      }
      
      return next;
    })
  }, [adminMode])

  // Show loading state
  if (loading || !data) {
    return (
      <ReportDataContext.Provider value={{ data: data || ReportDataSchema.parse({}), setData, loading: true }}>
        {children}
      </ReportDataContext.Provider>
    );
  }

  return (
    <ReportDataContext.Provider value={{ data, setData, loading: false }}>
      {children}
    </ReportDataContext.Provider>
  )
}

export function useReportData() {
  const ctx = React.useContext(ReportDataContext)
  if (!ctx) throw new Error("useReportData must be used within ReportDataProvider")
  return ctx
}


