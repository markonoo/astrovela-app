# AstroVela Document Creator

A modern, responsive astrology report application built with Next.js 14, TypeScript, and TailwindCSS.

## Features

- **Data-Driven Architecture**: Content separated from presentation logic
- **Performance Optimized**: Lazy loading, virtual scrolling, and image optimization
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Type-Safe**: Full TypeScript support with strict typing
- **SEO Friendly**: Built with Next.js App Router for optimal performance

## Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Install dependencies:**
```bash
npm install
```

2. **Create placeholder images directory:**
```bash
mkdir -p public/images
```

3. **Run development server:**
```bash
npm run dev
```

4. **Open your browser:**
Visit [http://localhost:3000](http://localhost:3000)

## Project Structure

```
├── app/                    # Next.js 14 App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page (redirects to /report)
│   ├── report/            # Report page
│   └── globals.css        # Global styles
├── components/            # Reusable React components
│   ├── ui/               # Basic UI components
│   ├── pages/            # Page-specific components
│   └── sections/         # Content section renderers
├── data/                 # Content data (JSON files)
│   └── pages/           # Individual page content
├── types/               # TypeScript type definitions
├── lib/                # Utility functions
├── hooks/              # Custom React hooks
└── public/             # Static assets
    └── images/         # Page images
```

## Adding New Pages

1. **Create page data file:**
```bash
# Example: data/pages/page-74.json
{
  "id": "p-74",
  "number": 74,
  "title": "Mercury",
  "type": "planet-detail",
  "background": "#fff",
  "sections": [
    {
      "type": "heading",
      "level": 1,
      "content": "Mercury",
      "className": "text-center font-serif text-2xl mb-4"
    }
  ]
}
```

2. **Update available pages:**
```typescript
// lib/content.ts
export function getAvailablePages(): number[] {
  return [41, 42, ..., 74]; // Add your new page number
}
```

## Deployment

### Vercel (Recommended)

1. **Build the project:**
```bash
npm run build
```

2. **Deploy to Vercel:**
```bash
npx vercel --prod
```

Or connect your GitHub repository to Vercel for automatic deployments.

### Other Platforms

The application can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## Performance Features

- **Lazy Loading**: Components load only when needed
- **Image Optimization**: Next.js Image component with WebP/AVIF support
- **Bundle Splitting**: Automatic code splitting by page
- **Caching**: Optimized caching headers for static assets
- **Virtual Scrolling**: Efficient rendering for large page counts

## Contributing

1. Fork the repository
2. Create a feature branch
3. Add your content as JSON files in `/data/pages/`
4. Test locally with `npm run dev`
5. Submit a pull request

## Content Management

### Page Types
- `zodiac-overview`: Overview pages for zodiac concepts
- `zodiac-sign`: Individual zodiac sign pages
- `zodiac-inner`: Detailed inner traits pages
- `planet-overview`: Planet introduction pages
- `planet-detail`: Detailed planet pages
- `illustration`: Image-only pages
- `general`: General content pages

### Section Types
- `heading`: H1-H6 headings
- `paragraph`: Text paragraphs
- `list`: Ordered/unordered lists
- `image`: Images with captions
- `two-column`: Side-by-side layout
- `traits-box`: Zodiac/planet trait boxes
- `preformatted`: Pre-formatted text

## License

MIT License - see LICENSE file for details.
