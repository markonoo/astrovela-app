import React from "react"
import { Section } from "./base/Section"
import { PageTitle } from "./base/PageTitle"

export function EnglishTableOfContents() {
  return (
    <div className="h-full canva-toc-page relative">
      {/* Decorative border frame with refined ornate corners */}
      <div className="absolute inset-[50px] border-[1.5px] border-[#8B7355] rounded-[12px]">
        {/* Top left corner ornament */}
        <div className="absolute -top-[18px] -left-[18px]">
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
            <path d="M18 0 C18 0 10 8 0 8 L0 18 C0 18 8 10 8 0 Z" fill="#8B7355" opacity="0.2"/>
            <circle cx="8" cy="8" r="2" fill="#8B7355"/>
            <path d="M0 8 L16 8 M8 0 L8 16" stroke="#8B7355" strokeWidth="1"/>
          </svg>
        </div>
        
        {/* Top right corner ornament */}
        <div className="absolute -top-[18px] -right-[18px] rotate-90">
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
            <path d="M18 0 C18 0 10 8 0 8 L0 18 C0 18 8 10 8 0 Z" fill="#8B7355" opacity="0.2"/>
            <circle cx="8" cy="8" r="2" fill="#8B7355"/>
            <path d="M0 8 L16 8 M8 0 L8 16" stroke="#8B7355" strokeWidth="1"/>
          </svg>
        </div>
        
        {/* Bottom left corner ornament */}
        <div className="absolute -bottom-[18px] -left-[18px] -rotate-90">
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
            <path d="M18 0 C18 0 10 8 0 8 L0 18 C0 18 8 10 8 0 Z" fill="#8B7355" opacity="0.2"/>
            <circle cx="8" cy="8" r="2" fill="#8B7355"/>
            <path d="M0 8 L16 8 M8 0 L8 16" stroke="#8B7355" strokeWidth="1"/>
          </svg>
        </div>
        
        {/* Bottom right corner ornament */}
        <div className="absolute -bottom-[18px] -right-[18px] rotate-180">
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
            <path d="M18 0 C18 0 10 8 0 8 L0 18 C0 18 8 10 8 0 Z" fill="#8B7355" opacity="0.2"/>
            <circle cx="8" cy="8" r="2" fill="#8B7355"/>
            <path d="M0 8 L16 8 M8 0 L8 16" stroke="#8B7355" strokeWidth="1"/>
          </svg>
        </div>
        
        {/* Top decorative ornament */}
        <div className="absolute -top-[10px] left-1/2 transform -translate-x-1/2">
          <svg width="48" height="20" viewBox="0 0 48 20" fill="none">
            <path d="M24 4 L20 0 L16 4 L20 8 L24 4 Z M24 4 L28 0 L32 4 L28 8 L24 4 Z" fill="#8B7355"/>
            <circle cx="24" cy="10" r="2" fill="#8B7355"/>
          </svg>
        </div>
        
        {/* Bottom decorative ornament */}
        <div className="absolute -bottom-[10px] left-1/2 transform -translate-x-1/2">
          <svg width="48" height="20" viewBox="0 0 48 20" fill="none">
            <path d="M24 16 L20 20 L16 16 L20 12 L24 16 Z M24 16 L28 20 L32 16 L28 12 L24 16 Z" fill="#8B7355"/>
            <circle cx="24" cy="10" r="2" fill="#8B7355"/>
          </svg>
        </div>
      </div>

      {/* Content with proper padding to avoid border overlap */}
      <div className="relative z-10 flex flex-col h-full justify-center" style={{ padding: '80px 90px' }}>
        <h1 className="text-[2.5rem] font-serif tracking-[0.3em] text-center text-[#2C2C2C] mb-16 leading-tight font-light">
          TABLE OF<br />CONTENTS
        </h1>

        <div className="grid grid-cols-2 gap-x-20 gap-y-2" style={{ color: '#2C2C2C' }}>
          <div className="space-y-3">
            <div className="pb-3 mb-2">
              <div className="flex items-center justify-between gap-4">
                <span className="font-sans text-[0.9rem] font-medium whitespace-nowrap">YOUR BIRTH CHART</span>
                <div className="flex-grow border-b border-dotted border-[#8B7355] opacity-40 mb-1"></div>
                <span className="font-serif text-[0.9rem] font-light">5</span>
              </div>
            </div>

            <div className="space-y-2.5 ml-6">
              <div className="flex items-center justify-between gap-4">
                <span className="font-sans text-[0.8rem] whitespace-nowrap">Sun Sign</span>
                <div className="flex-grow border-b border-dotted border-[#8B7355] opacity-30 mb-1"></div>
                <span className="font-serif text-[0.8rem] font-light">6</span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <span className="font-sans text-[0.8rem] whitespace-nowrap">Moon Sign</span>
                <div className="flex-grow border-b border-dotted border-[#8B7355] opacity-30 mb-1"></div>
                <span className="font-serif text-[0.8rem] font-light">8</span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <span className="font-sans text-[0.8rem] whitespace-nowrap">Rising Sign</span>
                <div className="flex-grow border-b border-dotted border-[#8B7355] opacity-30 mb-1"></div>
                <span className="font-serif text-[0.8rem] font-light">10</span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <span className="font-sans text-[0.8rem] whitespace-nowrap">Mercury</span>
                <div className="flex-grow border-b border-dotted border-[#8B7355] opacity-30 mb-1"></div>
                <span className="font-serif text-[0.8rem] font-light">12</span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <span className="font-sans text-[0.8rem] whitespace-nowrap">Venus</span>
                <div className="flex-grow border-b border-dotted border-[#8B7355] opacity-30 mb-1"></div>
                <span className="font-serif text-[0.8rem] font-light">14</span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <span className="font-sans text-[0.8rem] whitespace-nowrap">Mars</span>
                <div className="flex-grow border-b border-dotted border-[#8B7355] opacity-30 mb-1"></div>
                <span className="font-serif text-[0.8rem] font-light">16</span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <span className="font-sans text-[0.8rem] whitespace-nowrap">Jupiter</span>
                <div className="flex-grow border-b border-dotted border-[#8B7355] opacity-30 mb-1"></div>
                <span className="font-serif text-[0.8rem] font-light">18</span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <span className="font-sans text-[0.8rem] whitespace-nowrap">Saturn</span>
                <div className="flex-grow border-b border-dotted border-[#8B7355] opacity-30 mb-1"></div>
                <span className="font-serif text-[0.8rem] font-light">20</span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <span className="font-sans text-[0.8rem] whitespace-nowrap">Uranus</span>
                <div className="flex-grow border-b border-dotted border-[#8B7355] opacity-30 mb-1"></div>
                <span className="font-serif text-[0.8rem] font-light">22</span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <span className="font-sans text-[0.8rem] whitespace-nowrap">Neptune</span>
                <div className="flex-grow border-b border-dotted border-[#8B7355] opacity-30 mb-1"></div>
                <span className="font-serif text-[0.8rem] font-light">24</span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <span className="font-sans text-[0.8rem] whitespace-nowrap">Pluto</span>
                <div className="flex-grow border-b border-dotted border-[#8B7355] opacity-30 mb-1"></div>
                <span className="font-serif text-[0.8rem] font-light">26</span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <span className="font-sans text-[0.8rem] whitespace-nowrap">Chiron</span>
                <div className="flex-grow border-b border-dotted border-[#8B7355] opacity-30 mb-1"></div>
                <span className="font-serif text-[0.8rem] font-light">28</span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <span className="font-sans text-[0.8rem] whitespace-nowrap">Compatibility</span>
                <div className="flex-grow border-b border-dotted border-[#8B7355] opacity-30 mb-1"></div>
                <span className="font-serif text-[0.8rem] font-light">30</span>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <div className="pb-3 mb-2">
              <div className="flex items-center justify-between gap-4">
                <span className="font-sans text-[0.9rem] font-medium whitespace-nowrap">DIVINATION & ASTROLOGY</span>
                <div className="flex-grow border-b border-dotted border-[#8B7355] opacity-40 mb-1"></div>
                <span className="font-serif text-[0.9rem] font-light">103</span>
              </div>
            </div>

            <div className="space-y-2.5 ml-6">
              <div className="flex items-center justify-between gap-4">
                <span className="font-sans text-[0.8rem] whitespace-nowrap">How to Interpret Horoscope<br/>Predictions</span>
                <div className="flex-grow border-b border-dotted border-[#8B7355] opacity-30 mb-1"></div>
                <span className="font-serif text-[0.8rem] font-light">104</span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <span className="font-sans text-[0.8rem] whitespace-nowrap">Crystals in Astrology</span>
                <div className="flex-grow border-b border-dotted border-[#8B7355] opacity-30 mb-1"></div>
                <span className="font-serif text-[0.8rem] font-light">109</span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <span className="font-sans text-[0.8rem] whitespace-nowrap">The Mysteries of Palmistry</span>
                <div className="flex-grow border-b border-dotted border-[#8B7355] opacity-30 mb-1"></div>
                <span className="font-serif text-[0.8rem] font-light">125</span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <span className="font-sans text-[0.8rem] whitespace-nowrap">Tarot Cards</span>
                <div className="flex-grow border-b border-dotted border-[#8B7355] opacity-30 mb-1"></div>
                <span className="font-serif text-[0.8rem] font-light">133</span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <span className="font-sans text-[0.8rem] whitespace-nowrap">Numerology</span>
                <div className="flex-grow border-b border-dotted border-[#8B7355] opacity-30 mb-1"></div>
                <span className="font-serif text-[0.8rem] font-light">147</span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <span className="font-sans text-[0.8rem] whitespace-nowrap">Love & Relationships</span>
                <div className="flex-grow border-b border-dotted border-[#8B7355] opacity-30 mb-1"></div>
                <span className="font-serif text-[0.8rem] font-light">153</span>
              </div>
            </div>

            <div className="mt-6 space-y-3">
              <div className="pb-3 mb-2">
                <div className="flex items-center justify-between gap-4">
                  <span className="font-sans text-[0.9rem] font-medium whitespace-nowrap">ASTROLOGER&apos;S LEXICON</span>
                  <div className="flex-grow border-b border-dotted border-[#8B7355] opacity-40 mb-1"></div>
                  <span className="font-serif text-[0.9rem] font-light">157</span>
                </div>
              </div>
              <div className="pb-3 mb-2">
                <div className="flex items-center justify-between gap-4">
                  <span className="font-sans text-[0.9rem] font-medium whitespace-nowrap">ASTROLOGICAL EVENTS</span>
                  <div className="flex-grow border-b border-dotted border-[#8B7355] opacity-40 mb-1"></div>
                  <span className="font-serif text-[0.9rem] font-light">172</span>
                </div>
              </div>
              <div className="pb-3 mb-2">
                <div className="flex items-center justify-between gap-4">
                  <span className="font-sans text-[0.9rem] font-medium whitespace-nowrap">FINAL WORDS</span>
                  <div className="flex-grow border-b border-dotted border-[#8B7355] opacity-40 mb-1"></div>
                  <span className="font-serif text-[0.9rem] font-light">193</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Page number - removed since original doesn't show page number on TOC */}
      </div>
    </div>
  )
}