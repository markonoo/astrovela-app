"use client"

import React, { useState, useEffect, useRef } from "react"
import { cn } from "@/lib/utils"
import { COLOR_SCHEMES, type ColorSchemeKey } from "@/utils/constants"
import { PREMIUM_COLORS, type PremiumColorKey } from "./premium-book-cover"
import { getFallbackChartSVG } from "@/utils/fallback-chart"

// Combined color types
export type AllColorSchemeKeys = ColorSchemeKey | PremiumColorKey

// Default paths for SVG assets
const DEFAULT_COVER_DESIGN_PATH = "/images/cover-design.svg" // This file needs to be uploaded
const DEFAULT_NATAL_CHART_PATH = "/images/fallback-natal-chart.svg"

interface LayeredBookCoverProps {
  // Color scheme selection (base layer)
  colorScheme?: AllColorSchemeKeys
  
  // User input from quiz (top layer)
  name: string
  birthDate: string
  birthPlace: string
  
  // Custom SVG paths (can be overridden)
  coverDesignSvg?: string
  natalChartSvg?: string
  
  // Additional props
  className?: string
  showCoverDesign?: boolean
}

export function LayeredBookCover({
  colorScheme = "cosmic-blue",
  name,
  birthDate,
  birthPlace,
  coverDesignSvg = DEFAULT_COVER_DESIGN_PATH,
  natalChartSvg = DEFAULT_NATAL_CHART_PATH,
  className = "",
  showCoverDesign = true,
}: LayeredBookCoverProps) {
  // References for SVG containers
  const natalChartRef = useRef<HTMLDivElement>(null)
  const coverDesignRef = useRef<HTMLDivElement>(null)
  
  // State for loading status
  const [isLoading, setIsLoading] = useState(true)
  
  // Split name into two parts for better styling
  const [firstName, ...restName] = name.split(' ')
  const lastName = restName.join(' ')

  // Get current colors based on selected scheme
  const colors = isPremiumColor(colorScheme) 
    ? PREMIUM_COLORS[colorScheme as PremiumColorKey] 
    : COLOR_SCHEMES[colorScheme as ColorSchemeKey]

  // Check if it's a premium color
  function isPremiumColor(color: AllColorSchemeKeys): boolean {
    return Object.keys(PREMIUM_COLORS).includes(color as string)
  }
  
  // Load cover design SVG
  useEffect(() => {
    if (!coverDesignRef.current || !showCoverDesign) return;
    
    const loadCoverDesign = async () => {
      try {
        const response = await fetch(coverDesignSvg);
        if (!response.ok) throw new Error('Failed to load cover design');
        
        const svgText = await response.text();
        if (coverDesignRef.current) {
          coverDesignRef.current.innerHTML = svgText;
          
          // Apply color and styling to the SVG elements
          const svgElement = coverDesignRef.current.querySelector('svg');
          if (svgElement) {
            svgElement.setAttribute('width', '100%');
            svgElement.setAttribute('height', '100%');
            svgElement.setAttribute('preserveAspectRatio', 'xMidYMid meet');
            
            // Adjust colors if needed
            const paths = svgElement.querySelectorAll('path');
            paths.forEach(path => {
              // Keep original colors or adjust if needed
              // This is where you can customize the SVG colors to match your theme
            });
          }
        }
      } catch (error) {
        console.error('Error loading cover design:', error);
      }
    };
    
    loadCoverDesign();
  }, [coverDesignSvg, showCoverDesign]);
  
  // Load natal chart SVG
  useEffect(() => {
    if (!natalChartRef.current) return;
    
    const loadNatalChart = async () => {
      try {
        setIsLoading(true);
        
        // Either use the provided SVG or fallback
        const svg = natalChartSvg === DEFAULT_NATAL_CHART_PATH 
          ? getFallbackChartSVG()
          : await (await fetch(natalChartSvg)).text();
          
        if (natalChartRef.current) {
          // Process SVG to apply styling
          const parser = new DOMParser();
          const svgDoc = parser.parseFromString(svg, "image/svg+xml");
          const svgElement = svgDoc.documentElement;
          
          // Set viewBox and scaling
          if (!svgElement.hasAttribute("viewBox")) {
            svgElement.setAttribute("viewBox", "0 0 800 800");
          }
          svgElement.setAttribute("preserveAspectRatio", "xMidYMid meet");
          svgElement.setAttribute("width", "100%");
          svgElement.setAttribute("height", "100%");
          
          // Update colors
          const textElements = svgElement.querySelectorAll("text");
          textElements.forEach((el) => {
            el.setAttribute("fill", colors.textColor);
            el.setAttribute("stroke", "rgba(0,0,0,0.2)");
            el.setAttribute("stroke-width", "0.2");
          });
          
          const pathElements = svgElement.querySelectorAll("path, circle, line");
          pathElements.forEach((el) => {
            if (el.getAttribute("stroke")) {
              el.setAttribute("stroke", colors.textColor);
              el.setAttribute("stroke-width", el.getAttribute("stroke-width") || "1");
            }
          });
          
          natalChartRef.current.innerHTML = svgElement.outerHTML;
        }
      } catch (error) {
        console.error('Error loading natal chart:', error);
      } finally {
        setIsLoading(false);
      }
    };
    
    loadNatalChart();
  }, [natalChartSvg, colors]);

  if (isLoading) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-gray-100 rounded-lg">
        <div className="animate-pulse text-gray-500">Loading book preview...</div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        'relative w-full aspect-[3/4] rounded-lg overflow-hidden',
        className
      )}
      style={{
        background: colors.bgGradient
      }}
    >
      {/* LAYER 1: Base Layer - Background Color */}
      {/* The background color is applied via the style attribute above */}
      
      {/* LAYER 2: Cover Design SVG */}
      {showCoverDesign && (
        <div 
          ref={coverDesignRef} 
          className="absolute inset-0 z-10 pointer-events-none"
          aria-hidden="true"
        />
      )}
      
      {/* LAYER 3: Natal Chart SVG */}
      <div className="absolute inset-0 z-20 flex items-center justify-center">
        <div className="w-3/4 aspect-square animate-fadeIn">
          <div
            ref={natalChartRef}
            className="w-full h-full"
          />
        </div>
      </div>
      
      {/* LAYER 4: User Input - Name, Birth Details */}
      <div className="absolute inset-0 z-30 flex flex-col items-center justify-between p-8 pointer-events-none">
        {/* Name Section */}
        <div className="text-center space-y-2">
          <h1 
            className={cn(
              'font-serif text-4xl tracking-wider animate-slideDown',
              'opacity-0'
            )}
            style={{ 
              color: colors.textColor,
              animationDelay: '0.2s',
              animationFillMode: 'forwards'
            }}
          >
            {firstName}
          </h1>
          {lastName && (
            <h2 
              className={cn(
                'font-serif text-3xl italic animate-slideDown',
                'opacity-0'
              )}
              style={{ 
                color: colors.textColor,
                animationDelay: '0.4s',
                animationFillMode: 'forwards'
              }}
            >
              {lastName}
            </h2>
          )}
        </div>

        {/* Spacer to push birth details to bottom */}
        <div className="flex-grow"></div>

        {/* Birth Details */}
        <div className="text-center space-y-3">
          <div 
            className="font-serif text-lg tracking-wide animate-slideUp opacity-0"
            style={{ 
              color: colors.textColor,
              animationDelay: '0.6s',
              animationFillMode: 'forwards'
            }}
          >
            {birthDate}
          </div>
          <div 
            className="font-serif text-sm italic animate-slideUp opacity-0"
            style={{ 
              color: colors.textColor,
              animationDelay: '0.8s',
              animationFillMode: 'forwards'
            }}
          >
            {birthPlace}
          </div>
        </div>
      </div>
    </div>
  );
} 