# AstroVela Design System - Apple-Inspired

## Design Philosophy

Inspired by Apple's Human Interface Guidelines, focusing on:
- **Clarity**: Clear visual hierarchy and readable typography
- **Deference**: Content is primary, UI supports it
- **Depth**: Layered information with smooth transitions

---

## Typography

### Font Family
```css
font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Helvetica Neue", "Segoe UI", sans-serif;
```

### Type Scale
- **Display Large**: 48px / 56px line-height (Hero headings)
- **Display**: 36px / 44px line-height (Page titles)
- **Headline**: 28px / 36px line-height (Section titles)
- **Title 1**: 22px / 28px line-height (Card titles)
- **Title 2**: 20px / 28px line-height (Subsection titles)
- **Title 3**: 18px / 24px line-height (Small headings)
- **Body**: 17px / 24px line-height (Primary text)
- **Callout**: 16px / 22px line-height (Secondary text)
- **Subhead**: 15px / 20px line-height (Labels)
- **Footnote**: 13px / 18px line-height (Captions)
- **Caption 1**: 12px / 16px line-height (Small captions)
- **Caption 2**: 11px / 14px line-height (Tiny text)

### Font Weights
- **Regular**: 400
- **Medium**: 500
- **Semibold**: 600
- **Bold**: 700

---

## Colors

### Primary Grays (Apple-inspired)
```css
--apple-gray-1: #1d1d1f;      /* Primary text */
--apple-gray-2: #424245;      /* Secondary text */
--apple-gray-3: #86868b;      /* Tertiary text */
--apple-gray-4: #d2d2d7;      /* Borders, dividers */
--apple-gray-5: #f5f5f7;      /* Light backgrounds */
--apple-gray-6: #ffffff;      /* Pure white */
```

### Semantic Colors
```css
/* Primary (AstroVela brand) */
--primary: #28293d;           /* Dark blue-gray */
--primary-light: #3a3b52;     /* Hover state */
--primary-dark: #1a1b2e;      /* Active state */

/* Accent */
--accent: #007aff;            /* Apple blue */
--accent-light: #5ac8fa;      /* Light blue */
--accent-dark: #0051d5;       /* Dark blue */

/* Success */
--success: #34c759;           /* Apple green */
--success-light: #30d158;     /* Light green */

/* Warning */
--warning: #ff9500;           /* Apple orange */
--warning-light: #ffcc00;     /* Light orange */

/* Error */
--error: #ff3b30;             /* Apple red */
--error-light: #ff6961;       /* Light red */
```

### Background Colors
```css
--bg-primary: #ffffff;         /* Main background */
--bg-secondary: #f5f5f7;      /* Secondary background */
--bg-tertiary: #fafafa;       /* Tertiary background */
--bg-overlay: rgba(0, 0, 0, 0.4); /* Modal overlay */
```

---

## Spacing Scale

Apple uses an 8px base grid system:
- **xs**: 4px
- **sm**: 8px
- **md**: 16px
- **lg**: 24px
- **xl**: 32px
- **2xl**: 48px
- **3xl**: 64px
- **4xl**: 96px

### Component Spacing
- **Card Padding**: 24px (lg)
- **Card Gap**: 16px (md)
- **Section Margin**: 32px (xl)
- **Page Padding**: 24px mobile, 32px desktop
- **Button Padding**: 12px vertical, 24px horizontal

---

## Shadows

### Elevation Levels
```css
/* Level 1 - Subtle (Cards) */
--shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.04);

/* Level 2 - Medium (Elevated cards) */
--shadow-md: 0 4px 6px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.06);

/* Level 3 - Large (Modals, dropdowns) */
--shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.08);

/* Level 4 - Extra Large (Floating elements) */
--shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.1), 0 10px 10px rgba(0, 0, 0, 0.04);
```

---

## Border Radius

```css
--radius-sm: 8px;      /* Small elements */
--radius-md: 12px;     /* Cards, buttons */
--radius-lg: 16px;     /* Large cards */
--radius-xl: 20px;     /* Modals */
--radius-full: 9999px; /* Pills, avatars */
```

---

## Animations

### Timing Functions
```css
/* Apple's standard easing */
--ease-in: cubic-bezier(0.4, 0, 1, 1);
--ease-out: cubic-bezier(0, 0, 0.2, 1);
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);

/* Spring animations */
--spring: cubic-bezier(0.68, -0.55, 0.265, 1.55);
--spring-smooth: cubic-bezier(0.34, 1.56, 0.64, 1);
```

### Durations
```css
--duration-fast: 150ms;    /* Micro-interactions */
--duration-normal: 250ms;  /* Standard transitions */
--duration-slow: 350ms;    /* Complex animations */
```

### Transitions
```css
/* Standard transition */
transition: all var(--duration-normal) var(--ease-out);

/* Spring transition */
transition: transform var(--duration-normal) var(--spring-smooth);

/* Hover scale */
transform: scale(1.02);
transition: transform var(--duration-fast) var(--ease-out);
```

---

## Components

### Cards
- **Padding**: 24px
- **Border Radius**: 16px
- **Shadow**: Level 1 (subtle)
- **Background**: White
- **Border**: None (rely on shadow)

### Buttons
- **Padding**: 12px 24px
- **Border Radius**: 12px
- **Font Weight**: 600 (Semibold)
- **Transition**: All 150ms ease-out
- **Hover**: Scale 1.02, slight shadow increase

### Navigation
- **Height**: 64px
- **Background**: White with backdrop blur
- **Blur**: 20px
- **Border**: Subtle bottom border
- **Shadow**: Level 1

### Inputs
- **Padding**: 12px 16px
- **Border Radius**: 12px
- **Border**: 1px solid --apple-gray-4
- **Focus**: 2px solid --accent
- **Transition**: Border 150ms ease-out

---

## Responsive Breakpoints

```css
--breakpoint-sm: 640px;   /* Mobile */
--breakpoint-md: 768px;   /* Tablet */
--breakpoint-lg: 1024px;  /* Desktop */
--breakpoint-xl: 1280px;  /* Large desktop */
--breakpoint-2xl: 1536px; /* Extra large */
```

---

## Accessibility

### Contrast Ratios
- **Text on white**: Minimum 4.5:1 (WCAG AA)
- **Large text**: Minimum 3:1 (WCAG AA)
- **Interactive elements**: Minimum 3:1

### Focus States
- **Outline**: 2px solid --accent
- **Offset**: 2px
- **Border Radius**: Match element radius

---

## Usage Examples

### Card Component
```tsx
<div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-250">
  {/* Content */}
</div>
```

### Button Component
```tsx
<button className="px-6 py-3 bg-[#28293d] text-white rounded-xl font-semibold hover:scale-[1.02] active:scale-[0.98] transition-transform duration-150">
  Click me
</button>
```

### Typography
```tsx
<h1 className="text-[36px] leading-[44px] font-bold text-[#1d1d1f]">
  Title
</h1>
<p className="text-[17px] leading-[24px] text-[#424245]">
  Body text
</p>
```

---

## Implementation Notes

1. **Use system fonts**: Leverage `-apple-system` for native feel
2. **Generous spacing**: More white space than typical web apps
3. **Subtle shadows**: Less is more
4. **Smooth animations**: Spring-like feel, not linear
5. **Consistent radius**: Use design tokens, not arbitrary values
6. **Color hierarchy**: Use gray scale for text, color for accents

---

**Last Updated**: 2025-01-27
**Version**: 1.0.0












