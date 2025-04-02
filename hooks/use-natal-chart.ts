"use client"

import { useState } from "react"
import type { NatalChart } from "@/types/astrology"

//This function is added based on the provided changes, replacing the original getNatalChart function.  It's assumed that this function is intended to fetch the natal chart data.
const fetchNatalWheelChart = async (birthDetails: any) => { //Added birthDetails as a parameter based on context.
  if (!birthDetails ) return null;

  try {
    const response = await fetch('/api/astrology', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(birthDetails)
    });

    if (!response.ok) throw new Error('Chart fetch failed');
    return await response.json();
  } catch (error) {
    // setError(error); //This line is commented out because setError is not accessible in this context.  Error handling should be implemented in the calling function.
    console.error("Error fetching natal chart:", error); // Added error logging for debugging.
    return null;
  }
};


export function useNatalChart() {
  const [natalChart, setNatalChart] = useState<NatalChart | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  const getNatalChart = async (birthDate: string, birthTime: string, latitude: number, longitude: number) => {
    setIsLoading(true)
    setError(null)
    const birthDetails = { birthDate, birthTime, latitude, longitude }; // Created birthDetails object

    try {
      const chart = await fetchNatalWheelChart(birthDetails); // Calling the new function
      setNatalChart(chart)
      return chart
    } catch (err) {
      console.error("Error fetching natal chart:", err)
      const error = err instanceof Error ? err : new Error(String(err))
      setError(error)
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  return {
    natalChart,
    isLoading,
    error,
    getNatalChart,
  }
}