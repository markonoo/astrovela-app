# 🎨 Color Variant Images Implementation Guide

**Date:** December 27, 2024  
**Status:** ✅ Code Implementation Complete - Images Needed

---

## 📋 Overview

The AstroBook app supports **6 color variants** for both **Paperback** and **Ebook** products. Users select their preferred color during the quiz (Step 33), and the product images dynamically update to show the selected color variant.

---

## 🎨 The 6 Color Variants

| Color ID | Display Name | CSS Class | Border |
|----------|-------------|-----------|---------|
| `black` | Black | `bg-black` | white |
| `navy` | Navy | `bg-indigo-950` | white |
| `purple` | Purple | `bg-purple-950` | white |
| `green` | Green | `bg-emerald-950` | white |
| `burgundy` | Burgundy | `bg-red-900` | white |
| `cream` | Cream | `bg-amber-50` | black |

---

## 📁 Image File Structure

### Required Directory
```
/public/images/products/
```

### Required Files

#### Paperback Images (12 total)
```
paperback-book.jpg                    # Default/fallback image
paperback-book-black.jpg             # Black variant
paperback-book-navy.jpg              # Navy variant
paperback-book-purple.jpg            # Purple variant
paperback-book-green.jpg             # Green variant
paperback-book-burgundy.jpg          # Burgundy variant
paperback-book-cream.jpg             # Cream variant
```

#### Ebook Images (12 total)
```
ebook-digital.jpg                     # Default/fallback image
ebook-digital-black.jpg              # Black variant
ebook-digital-navy.jpg               # Navy variant
ebook-digital-purple.jpg             # Purple variant
ebook-digital-green.jpg              # Green variant
ebook-digital-burgundy.jpg           # Burgundy variant
ebook-digital-cream.jpg              # Cream variant
```

#### App Image (1 total)
```
app-interface.jpg                    # No color variants for app
```

---

## 🖼️ Image Specifications

### Technical Requirements
- **Format:** JPG (JPEG)
- **Aspect Ratio:** Portrait (book cover ratio, ~3:4)
- **Minimum Resolution:** 800 x 1000 pixels
- **Recommended Resolution:** 1200 x 1600 pixels
- **File Size:** < 500KB per image (optimize for web)
- **Color Space:** sRGB

### Visual Requirements
- **Background:** Clean, consistent across all variants
- **Style:** Match existing product image style
- **Cover Color:** Clearly visible and distinguishable from other variants
- **Branding:** Include "AstroVela" branding if applicable
- **Quality:** High-quality, professional product photography

---

## 💻 Code Implementation

### 1. Pricing Page (`app/pricing/page.tsx`)

**Paperback:**
```typescript
<ProductOption
  type="paperback"
  title="astrovela paperback"
  imageSrc={`/images/products/paperback-book-${state.coverColorScheme}.jpg`}
  // ... other props
/>
```

**Ebook:**
```typescript
<ProductOption
  type="ebook"
  title="astrovela ebook"
  imageSrc={`/images/products/ebook-digital-${state.coverColorScheme}.jpg`}
  // ... other props
/>
```

### 2. Color Selector (`components/color-selector.tsx`)

```typescript
const colorOptions = [
  { id: "black", bgColor: "bg-black border-white" },
  { id: "navy", bgColor: "bg-indigo-950 border-white" },
  { id: "purple", bgColor: "bg-purple-950 border-white" },
  { id: "green", bgColor: "bg-emerald-950 border-white" },
  { id: "burgundy", bgColor: "bg-red-900 border-white" },
  { id: "cream", bgColor: "bg-amber-50 border-black" },
]
```

### 3. Quiz Context (`contexts/quiz-context.tsx`)

```typescript
interface QuizState {
  // ... other fields
  coverColorScheme: ColorScheme  // "black" | "navy" | "purple" | "green" | "burgundy" | "cream"
}
```

### 4. Shopify Integration (`services/shopify-service.tsx`)

```typescript
// Color is sent to Shopify checkout as cart attribute
cartAttributes['Cover Color'] = quizState.coverColorScheme;

// For paperback, color variant is passed to getProductVariantId
const paperbackVariantId = await getProductVariantId("paperback", quizState.coverColorScheme);
```

---

## 🔄 User Flow

1. **Quiz Step 33:** User selects a color from 6 options
2. **Book Cover Preview:** Real-time preview updates with selected color
3. **Pricing Page:** Product images dynamically show selected color variant
4. **Checkout:** Color preference is sent to Shopify as "Cover Color" attribute
5. **Order Fulfillment:** Order includes color information for production

---

## ✅ Implementation Status

### Code Changes (✅ Complete)

| File | Status | Changes |
|------|--------|---------|
| `app/pricing/page.tsx` | ✅ Done | Updated ebook imageSrc to use dynamic color |
| `scripts/update-shopify-products.mjs` | ✅ Done | Added color variant documentation |
| `app/api/shopify/update-products/route.ts` | ✅ Done | Added color variant documentation |
| `components/color-selector.tsx` | ✅ Existing | Already supports 6 colors |
| `contexts/quiz-context.tsx` | ✅ Existing | Already tracks coverColorScheme |
| `services/shopify-service.tsx` | ✅ Existing | Already sends color to checkout |

### Images Needed (⚠️ Pending)

| Image Type | Status | Count |
|-----------|--------|-------|
| Paperback color variants | ⚠️ Need 6 images | 0/6 |
| Ebook color variants | ⚠️ Need 6 images | 0/6 |
| Default images | ✅ Existing | 2/2 |

---

## 🚀 Testing Checklist

After adding the color variant images:

- [ ] **Quiz Flow:** Complete quiz and select each color
- [ ] **Pricing Page:** Verify correct image displays for each color
- [ ] **Image Quality:** Check images load properly (no 404 errors)
- [ ] **Responsive Design:** Test images on mobile, tablet, desktop
- [ ] **Fallback:** Verify default images work if color variant missing
- [ ] **Shopify Integration:** Verify color is sent to Shopify cart
- [ ] **Order Attributes:** Check "Cover Color" appears in Shopify orders

---

## 🎯 Image Creation Workflow

### For Each Color Variant:

1. **Create Base Design**
   - Design book cover with the specified color as primary background
   - Ensure branding and text are clearly visible
   - Maintain consistent layout across all variants

2. **Export Images**
   - Export as JPG at recommended resolution (1200 x 1600px)
   - Optimize file size (compress to < 500KB)
   - Use exact naming convention (e.g., `paperback-book-black.jpg`)

3. **Upload to Project**
   - Place files in `/public/images/products/`
   - Verify file names match exactly (case-sensitive)
   - Check file permissions

4. **Test Implementation**
   - Run development server: `npm run dev`
   - Navigate to quiz and select each color
   - Verify images display correctly on pricing page

---

## 📊 Color Palette Reference

Use these exact color values for consistency with the UI:

| Color | Hex Code | RGB | Tailwind Class |
|-------|----------|-----|----------------|
| Black | `#000000` | 0, 0, 0 | `bg-black` |
| Navy | `#1e1b4b` | 30, 27, 75 | `bg-indigo-950` |
| Purple | `#581c87` | 88, 28, 135 | `bg-purple-950` |
| Green | `#064e3b` | 6, 78, 59 | `bg-emerald-950` |
| Burgundy | `#7f1d1d` | 127, 29, 29 | `bg-red-900` |
| Cream | `#fffbeb` | 255, 251, 235 | `bg-amber-50` |

---

## 🔧 Troubleshooting

### Image Not Displaying

**Symptom:** 404 error or broken image
- **Check:** File name matches exactly (case-sensitive)
- **Check:** File is in correct directory: `/public/images/products/`
- **Check:** File extension is `.jpg` (not `.jpeg` or `.JPG`)

### Wrong Image Showing

**Symptom:** Default image shows instead of color variant
- **Check:** `state.coverColorScheme` has correct value
- **Check:** File name includes color ID (e.g., `-black`, not `-Black`)
- **Check:** Quiz state is properly synced to pricing page

### Image Quality Issues

**Symptom:** Blurry or pixelated images
- **Check:** Image resolution meets minimum (800 x 1000px)
- **Check:** Image hasn't been over-compressed
- **Check:** Original file quality is high

---

## 📞 Support

For questions or issues:
1. Check this documentation first
2. Review code implementation in key files listed above
3. Verify image file names and locations
4. Test with browser DevTools (Network tab for 404s)

---

## 🎉 Success Criteria

✅ All color variant images created and uploaded  
✅ Images display correctly in pricing page  
✅ Color selection in quiz works smoothly  
✅ No 404 errors in browser console  
✅ Images are optimized for web (< 500KB each)  
✅ Color preference is sent to Shopify checkout  
✅ Responsive design works on all devices  

---

**Last Updated:** December 27, 2024  
**Implementation:** Complete (Code) - Pending (Images)  
**Next Steps:** Create and upload 12 color variant images (6 paperback + 6 ebook)
