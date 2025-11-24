# Document Generator - Complete Code Overview

**Date:** November 17, 2025  
**Status:** Code structure documented

---

## 📁 File Structure

```
AstroBook/
├── app/
│   └── olivialimon-admin/
│       └── preview/
│           └── document-generator/
│               └── page.tsx                    # Main admin preview page
│
├── components/
│   └── document-maker/
│       ├── pages/
│       │   ├── PageRenderer.tsx               # Renders individual pages
│       │   └── ZodiacSignPage.tsx              # Special zodiac sign pages
│       ├── sections/
│       │   └── ContentRenderer.tsx            # Renders content sections
│       └── ui/
│           ├── Page.tsx                        # Page container component
│           ├── ScrollHeader.tsx                # Navigation header
│           └── LazyPage.tsx                    # Lazy loading wrapper
│
├── lib/
│   └── document-maker/
│       ├── content.ts                          # Content loading utilities
│       ├── personalize.ts                     # User data personalization
│       └── cover-colors.ts                    # Cover color utilities
│
├── types/
│   └── document-maker.ts                      # TypeScript type definitions
│
└── data/
    └── document-maker/
        └── pages/
            ├── page-41.json                    # Page data files
            ├── page-42.json
            └── ... (pages 41-73)
```

---

## 🔧 Core Components

### 1. Main Page (`app/olivialimon-admin/preview/document-generator/page.tsx`)

**Purpose:** Admin preview page for document generator

**Key Features:**
- Loads all page data from JSON files
- Personalizes content with sample user data
- Handles scroll tracking and navigation
- Keyboard navigation (Arrow keys, Page Up/Down)
- Deep linking support (URL hash)

**Code Flow:**
```typescript
1. Load page data → loadPagesData(availablePages)
2. Personalize content → personalizePages(pageData, previewUserData)
3. Render pages → pages.map(page => <PageRenderer />)
4. Track scroll → IntersectionObserver
5. Handle navigation → Keyboard events + scroll
```

---

### 2. Page Renderer (`components/document-maker/pages/PageRenderer.tsx`)

**Purpose:** Renders a single page with its content

**Code:**
```typescript
export function PageRenderer({ pageData }: PageRendererProps) {
  return (
    <Page
      id={pageData.id}
      index={pageData.number}
      background={pageData.background}
      className={getPageClassName(pageData.type)}
    >
      <ContentRenderer sections={pageData.sections} />
    </Page>
  );
}
```

**What it does:**
- Wraps content in a `Page` container
- Passes sections to `ContentRenderer`
- Applies page-specific styling based on type

---

### 3. Content Renderer (`components/document-maker/sections/ContentRenderer.tsx`)

**Purpose:** Renders different types of content sections

**Supported Section Types:**
- `heading` - Headings (h1-h6)
- `paragraph` - Text paragraphs
- `list` - Ordered/unordered lists
- `image` - Images with captions
- `two-column` - Two-column layouts
- `traits-box` - Zodiac traits display
- `preformatted` - Preformatted text

**Code:**
```typescript
export function ContentRenderer({ sections }: ContentRendererProps) {
  return (
    <>
      {sections.map((section, index) => (
        <div key={section.id || index}>
          {renderSection(section)}
        </div>
      ))}
    </>
  );
}
```

**Section Rendering:**
```typescript
function renderSection(section: ContentSection) {
  switch (section.type) {
    case 'heading':
      return <h{level}>{content}</h{level}>;
    case 'paragraph':
      return <p>{content}</p>;
    case 'list':
      return <ul/ol>{items}</ul/ol>;
    case 'image':
      return <Image src={src} alt={alt} />;
    case 'two-column':
      return <div className="grid grid-cols-2">{columns}</div>;
    case 'traits-box':
      return <div className="border">{traits}</div>;
    case 'preformatted':
      return <pre>{content}</pre>;
  }
}
```

---

### 4. Page Container (`components/document-maker/ui/Page.tsx`)

**Purpose:** Wrapper component for each page

**Code:**
```typescript
export function Page({ children, id, index, background, className }: PageProps) {
  return (
    <section 
      id={id} 
      className={`page-container scroll-snap-item ${className}`}
      style={{ background }}
    >
      <div className="page-content">
        {children}
      </div>
      <div className="page-number">
        {index}
      </div>
    </section>
  );
}
```

**Features:**
- Sets page ID for navigation
- Applies background color
- Shows page number
- Enables scroll snap

---

### 5. Scroll Header (`components/document-maker/ui/ScrollHeader.tsx`)

**Purpose:** Navigation header with page controls

**Features:**
- Current page indicator
- Page jump input
- Previous/Next buttons
- Progress bar
- Deep linking status

**Code:**
```typescript
export function ScrollHeader({ total, current, deepLinkingEnabled, onJump }: ScrollHeaderProps) {
  return (
    <div className="sticky top-0 z-50 border-b backdrop-blur bg-white/70">
      <div className="flex items-center gap-3 px-4 py-2">
        <strong>Page {current} / {total}</strong>
        <input type="number" value={input} onChange={...} />
        <button onClick={() => onJump(current - 1)}>Prev</button>
        <button onClick={() => onJump(current + 1)}>Next</button>
        <div className="progress-bar" style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}
```

---

## 📚 Data Loading

### Content Loader (`lib/document-maker/content.ts`)

**Functions:**
- `loadPageData(pageNumber)` - Load single page JSON
- `loadPagesData(pageNumbers[])` - Load multiple pages
- `getAvailablePages()` - Get list of available page numbers
- `canUseReplaceStateSafely()` - Check if deep linking is safe

**Code:**
```typescript
export async function loadPageData(pageNumber: number): Promise<PageData | null> {
  try {
    const response = await import(`@/data/document-maker/pages/page-${pageNumber}.json`);
    return response.default as PageData;
  } catch (error) {
    console.warn(`Failed to load page ${pageNumber}:`, error);
    return null;
  }
}

export async function loadPagesData(pageNumbers: number[]): Promise<PageData[]> {
  const promises = pageNumbers.map(loadPageData);
  const results = await Promise.all(promises);
  return results.filter((page): page is PageData => page !== null);
}

export function getAvailablePages(): number[] {
  return [41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73];
}
```

---

## 🎨 Personalization

### Personalize Utility (`lib/document-maker/personalize.ts`)

**Purpose:** Injects user data into page content

**Placeholders Supported:**
- `{{name}}` - Full name
- `{{firstName}}` - First name
- `{{lastName}}` - Last name
- `{{sunSign}}` - Sun sign
- `{{moonSign}}` - Moon sign
- `{{risingSign}}` - Rising sign
- `{{birthDate}}` - Birth date
- `{{birthPlace}}` - Birth place
- `{{birthTime}}` - Birth time

**Code:**
```typescript
export function personalizePages(pages: PageData[], userData: UserData): PageData[] {
  return pages.map(page => personalizePage(page, userData));
}

function personalizePage(page: PageData, userData: UserData): PageData {
  const personalizedSections = page.sections.map(section => 
    personalizeSection(section, userData)
  );
  return { ...page, sections: personalizedSections };
}

function replacePlaceholders(text: string, userData: UserData): string {
  const placeholders: Record<string, string> = {
    '{{name}}': userData.name || 'you',
    '{{sunSign}}': userData.sunSign || 'your sign',
    // ... more placeholders
  };
  
  let result = text;
  Object.entries(placeholders).forEach(([placeholder, value]) => {
    result = result.replace(new RegExp(placeholder, 'g'), value);
  });
  return result;
}
```

---

## 📄 Page Data Structure

### JSON Page Format (`data/document-maker/pages/page-41.json`)

**Example:**
```json
{
  "id": "p-41",
  "number": 41,
  "title": "The Zodiac Signs",
  "type": "zodiac-overview",
  "background": "#efe6d7",
  "sections": [
    {
      "type": "heading",
      "level": 1,
      "content": "THE ZODIAC SIGNS",
      "className": "text-center font-serif text-4xl mb-6"
    },
    {
      "type": "paragraph",
      "content": "Zodiac signs, the celestial coordinates...",
      "className": "max-w-[150mm] mx-auto text-[11pt] leading-[1.75]"
    }
  ]
}
```

**Page Types:**
- `zodiac-overview` - Zodiac overview pages
- `zodiac-sign` - Individual zodiac sign pages
- `zodiac-inner` - Inner zodiac pages
- `planet-overview` - Planet overview pages
- `planet-detail` - Planet detail pages
- `illustration` - Illustration pages
- `general` - General content pages

---

## 🎯 Type Definitions

### TypeScript Types (`types/document-maker.ts`)

**Key Types:**
```typescript
// Content sections
export type ContentSection = 
  | HeadingSection 
  | ParagraphSection 
  | ListSection 
  | ImageSection 
  | TwoColumnSection 
  | TraitsBoxSection
  | PreformattedSection;

// Page data
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

// Page types
export type PageType = 
  | 'zodiac-overview'
  | 'zodiac-sign' 
  | 'zodiac-inner'
  | 'planet-overview'
  | 'planet-detail'
  | 'illustration'
  | 'general';
```

---

## 🔄 Data Flow

### Complete Flow Diagram:

```
1. User visits /olivialimon-admin/preview/document-generator
   ↓
2. Page component loads
   ↓
3. loadPagesData([41, 42, 43, ...]) called
   ↓
4. Each page JSON file imported dynamically
   ↓
5. personalizePages() injects user data
   ↓
6. Pages rendered: pages.map(page => <PageRenderer />)
   ↓
7. PageRenderer wraps content in <Page>
   ↓
8. ContentRenderer renders sections
   ↓
9. IntersectionObserver tracks scroll
   ↓
10. ScrollHeader updates current page
```

---

## 🎨 Styling

### CSS Classes Used:

**Page Container:**
```css
.page-container {
  width: 100%;
  max-width: 210mm;        /* A4 width */
  height: auto;
  min-height: 297mm;       /* A4 height */
  aspect-ratio: 210 / 297;
  margin: 12px auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}
```

**Scroll Snap:**
```css
.scroll-snap-container {
  scroll-snap-type: y mandatory;
  -webkit-overflow-scrolling: touch;
}

section[id^="p-"] {
  scroll-snap-align: start;
}
```

---

## 🐛 Common Issues & Fixes

### Issue 1: Pages Not Loading

**Symptoms:** Blank page or "Failed to load pages" error

**Causes:**
- JSON files missing in `data/document-maker/pages/`
- Incorrect page numbers in `getAvailablePages()`
- Import path issues

**Fix:**
```typescript
// Check available pages match actual files
export function getAvailablePages(): number[] {
  return [41, 42, 43, ...]; // Must match actual JSON files
}
```

---

### Issue 2: Personalization Not Working

**Symptoms:** Placeholders like `{{name}}` not replaced

**Causes:**
- `personalizePages()` not called
- User data missing required fields
- Placeholder format incorrect

**Fix:**
```typescript
// Ensure personalizePages is called
const personalizedPages = personalizePages(pageData, previewUserData);

// Check user data has required fields
const previewUserData = {
  name: "Alex Johnson",
  firstName: "Alex",
  sunSign: "Pisces",
  // ... other fields
};
```

---

### Issue 3: Scroll Navigation Not Working

**Symptoms:** Can't navigate between pages

**Causes:**
- IntersectionObserver not set up
- Page IDs don't match
- Scroll snap CSS missing

**Fix:**
```typescript
// Ensure page IDs match format: p-{number}
<section id={`p-${pageData.number}`}>

// Check IntersectionObserver setup
useEffect(() => {
  const io = new IntersectionObserver(...);
  document.querySelectorAll('section[id^="p-"]').forEach(el => io.observe(el));
}, [pages]);
```

---

## 📝 Adding New Pages

### Step 1: Create JSON File

Create `data/document-maker/pages/page-74.json`:
```json
{
  "id": "p-74",
  "number": 74,
  "title": "New Page Title",
  "type": "general",
  "background": "#efe6d7",
  "sections": [
    {
      "type": "heading",
      "level": 1,
      "content": "Page Title",
      "className": "text-center"
    },
    {
      "type": "paragraph",
      "content": "Page content here...",
      "className": "text-[11pt]"
    }
  ]
}
```

### Step 2: Update Available Pages

In `lib/document-maker/content.ts`:
```typescript
export function getAvailablePages(): number[] {
  return [41, 42, 43, ..., 73, 74]; // Add 74
}
```

### Step 3: Test

Visit `/olivialimon-admin/preview/document-generator` and verify page 74 loads.

---

## 🚀 Next Steps

### To Fix Document Generator:

1. **Verify JSON Files Exist:**
   ```bash
   ls data/document-maker/pages/
   ```

2. **Check Available Pages:**
   - Open `lib/document-maker/content.ts`
   - Verify `getAvailablePages()` includes all page numbers

3. **Test Page Loading:**
   - Visit `/olivialimon-admin/preview/document-generator`
   - Check browser console for errors
   - Verify pages render correctly

4. **Test Personalization:**
   - Check that placeholders are replaced
   - Verify user data is passed correctly

5. **Test Navigation:**
   - Try keyboard navigation (Arrow keys)
   - Try scroll navigation
   - Try page jump input

---

## 📚 Related Files

- **Admin Preview:** `app/olivialimon-admin/preview/document-generator/page.tsx`
- **User Report Viewer:** `app/companion/report/viewer/page.tsx` (if exists)
- **PDF Generation:** `app/api/companion/report/pdf/route.ts` (if exists)

---

**Status:** Code structure documented ✅  
**Next:** Fix any issues found in the code review


