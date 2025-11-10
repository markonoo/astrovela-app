import { PageData, ContentSection } from '@/types/document-maker';

interface UserData {
  name?: string;
  firstName?: string;
  lastName?: string;
  birthDate?: string;
  birthTime?: string;
  birthPlace?: string;
  coverColor?: string;
  gender?: string;
  sunSign?: string;
  moonSign?: string;
  risingSign?: string;
  [key: string]: any;
}

/**
 * Personalizes page content by injecting user-specific data
 */
export function personalizePage(page: PageData, userData: UserData): PageData {
  const personalizedSections = page.sections.map(section => 
    personalizeSection(section, userData)
  );

  return {
    ...page,
    sections: personalizedSections,
    metadata: {
      ...page.metadata,
      ...(userData.sunSign && { zodiacSign: userData.sunSign }),
    }
  };
}

/**
 * Personalizes a single content section
 */
function personalizeSection(section: ContentSection, userData: UserData): ContentSection {
  if (section.type === 'paragraph') {
    return {
      ...section,
      content: replacePlaceholders(section.content, userData)
    };
  }

  if (section.type === 'heading') {
    return {
      ...section,
      content: replacePlaceholders(section.content, userData)
    };
  }

  if (section.type === 'list') {
    return {
      ...section,
      items: section.items.map(item => replacePlaceholders(item, userData))
    };
  }

  if (section.type === 'preformatted') {
    return {
      ...section,
      content: replacePlaceholders(section.content, userData)
    };
  }

  // For other section types, return as-is
  return section;
}

/**
 * Replaces placeholders in text with user data
 * Placeholders format: {{name}}, {{sunSign}}, etc.
 */
function replacePlaceholders(text: string, userData: UserData): string {
  let result = text;
  
  // Get full name from firstName/lastName or name
  const fullName = userData.firstName && userData.lastName
    ? `${userData.firstName} ${userData.lastName}`
    : userData.firstName || userData.name || 'you';
  
  // Replace common placeholders
  const placeholders: Record<string, string> = {
    '{{name}}': fullName,
    '{{Name}}': fullName.charAt(0).toUpperCase() + fullName.slice(1),
    '{{NAME}}': fullName.toUpperCase(),
    '{{firstName}}': userData.firstName || userData.name || 'you',
    '{{FirstName}}': userData.firstName ? userData.firstName.charAt(0).toUpperCase() + userData.firstName.slice(1) : (userData.name ? userData.name.charAt(0).toUpperCase() + userData.name.slice(1) : 'You'),
    '{{lastName}}': userData.lastName || '',
    '{{LastName}}': userData.lastName ? userData.lastName.charAt(0).toUpperCase() + userData.lastName.slice(1) : '',
    '{{sunSign}}': userData.sunSign || 'your sign',
    '{{SunSign}}': userData.sunSign || 'Your sign',
    '{{SUNSIGN}}': userData.sunSign?.toUpperCase() || 'YOUR SIGN',
    '{{moonSign}}': userData.moonSign || 'your moon sign',
    '{{MoonSign}}': userData.moonSign || 'Your moon sign',
    '{{risingSign}}': userData.risingSign || 'your rising sign',
    '{{RisingSign}}': userData.risingSign || 'Your rising sign',
    '{{birthDate}}': userData.birthDate || 'your birth date',
    '{{birthPlace}}': userData.birthPlace || 'your birth place',
    '{{birthTime}}': userData.birthTime || 'your birth time',
  };

  Object.entries(placeholders).forEach(([placeholder, value]) => {
    result = result.replace(new RegExp(placeholder, 'g'), value);
  });

  return result;
}

/**
 * Personalizes multiple pages
 */
export function personalizePages(pages: PageData[], userData: UserData): PageData[] {
  return pages.map(page => personalizePage(page, userData));
}

