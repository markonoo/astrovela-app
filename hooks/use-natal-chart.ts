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
    
    // Create birth details object for API call
    const birthDetails = { 
      birthDate, 
      birthTime, 
      latitude, 
      longitude 
    };
    
    console.log("Fetching natal chart with details:", birthDetails);

    try {
      // Call the API to get chart data
      const response = await fetch('/api/astrology', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(birthDetails)
      });

      if (!response.ok) {
        throw new Error(`API error: ${response.status} ${response.statusText}`);
      }

      const chart = await response.json();
      console.log("Received chart data:", chart);
      
      // Process and format the chart data
      const formattedChart = {
        ...chart,
        planets: Array.isArray(chart.planets) ? chart.planets : [],
        houses: Array.isArray(chart.houses) ? chart.houses : [],
        aspects: Array.isArray(chart.aspects) ? chart.aspects : [],
        birthDetails: birthDetails
      };
      
      setNatalChart(formattedChart);
      return formattedChart;
    } catch (err) {
      console.error("Error fetching natal chart:", err);
      const error = err instanceof Error ? err : new Error(String(err));
      setError(error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  }

  return {
    natalChart,
    isLoading,
    error,
    getNatalChart,
  }
}