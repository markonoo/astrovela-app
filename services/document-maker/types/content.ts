// Base content section types
export interface BaseSection {
  type: string;
  id?: string;
}

export interface HeadingSection extends BaseSection {
  type: 'heading';
  level: 1 | 2 | 3 | 4 | 5 | 6;
  content: string;
  className?: string;
}

export interface ParagraphSection extends BaseSection {
  type: 'paragraph';
  content: string;
  className?: string;
}

export interface ListSection extends BaseSection {
  type: 'list';
  title?: string;
  items: string[];
  ordered?: boolean;
  className?: string;
}

export interface ImageSection extends BaseSection {
  type: 'image';
  src: string;
  alt: string;
  caption?: string;
  className?: string;
}

export interface TwoColumnSection extends BaseSection {
  type: 'two-column';
  columns: ContentSection[][];
}

export interface TraitsBoxSection extends BaseSection {
  type: 'traits-box';
  title: string;
  traits: Record<string, string>;
}

export interface PreformattedSection extends BaseSection {
  type: 'preformatted';
  content: string;
}

// Union of all section types
export type ContentSection = 
  | HeadingSection 
  | ParagraphSection 
  | ListSection 
  | ImageSection 
  | TwoColumnSection 
  | TraitsBoxSection
  | PreformattedSection;

// Page type definitions
export type PageType = 
  | 'zodiac-overview'
  | 'zodiac-sign' 
  | 'zodiac-inner'
  | 'planet-overview'
  | 'planet-detail'
  | 'illustration'
  | 'general';

// Main page interface
export interface PageData {
  id: string;
  number: number;
  title?: string;
  type: PageType;
  background: string;
  sections: ContentSection[];
  metadata?: {
    zodiacSign?: string;
    planetName?: string;
    dateRange?: string;
    compatibility?: string[];
    celebrities?: string[];
  };
}

// Navigation and state
export interface NavigationState {
  currentPage: number;
  totalPages: number;
  deepLinkingEnabled: boolean;
}

export interface ScrollHeaderProps {
  total: number;
  current: number;
  deepLinkingEnabled: boolean;
  onJump: (pageNumber: number) => void;
}

