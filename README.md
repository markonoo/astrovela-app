# AstroVela Aura App

A personal astrology control center that extends static PDF reports with ongoing, personalized astrology content. Built with Next.js 14/15, featuring a beautiful Apple-inspired design system and full mobile responsiveness.

## 🚀 Features

### Core Functionality
- **Daily Astrology Feed** - Personalized daily insights, transits, and action prompts
- **Weekly & Monthly Outlook** - Emotions, relationships, money/career, spiritual themes
- **Zodiac Encyclopedia** - Complete guide to 12 signs, planets, and houses
- **Love & Compatibility** - Sign comparisons, compatibility scoring, timing insights
- **Career & Timing** - Career energy, best days to act, retrograde warnings
- **My Report** - Interactive report viewer with PDF download
- **Quiz Flow** - Comprehensive birth chart quiz with natal chart generation

### Technical Features
- ✅ Next.js 14/15 with App Router
- ✅ TypeScript for type safety
- ✅ TailwindCSS with Apple-inspired design system
- ✅ Supabase for authentication and database
- ✅ Shopify integration for e-commerce
- ✅ PWA-ready (Progressive Web App)
- ✅ Mobile-first responsive design
- ✅ PDF generation with Puppeteer
- ✅ Astrology API integration

## 📋 Prerequisites

- Node.js 18+ 
- npm or pnpm
- PostgreSQL (via Supabase)
- Supabase account
- Shopify store (for e-commerce features)
- AstrologyAPI credentials (optional, has fallbacks)

## 🛠️ Setup

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/astrovela-app.git
cd astrovela-app
```

### 2. Install Dependencies

```bash
npm install
# or
pnpm install
```

### 3. Environment Variables

Copy the environment template and fill in your values:

```bash
cp ENV_TEMPLATE.md .env.local
```

Required environment variables:
- `DATABASE_URL` - Supabase PostgreSQL connection string
- `NEXT_PUBLIC_SUPABASE_URL` - Your Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Supabase anonymous key
- `USER_ID` - AstrologyAPI user ID
- `API_KEY` - AstrologyAPI API key
- Shopify variables (see `ENV_TEMPLATE.md` for full list)

### 4. Database Setup

Run Prisma migrations:

```bash
npx prisma migrate dev
```

### 5. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
AstroBook/
├── app/                    # Next.js App Router pages
│   ├── api/               # API routes
│   ├── aura/              # Aura app pages
│   └── quiz/              # Quiz flow pages
├── components/            # React components
│   ├── aura/              # Aura app components
│   ├── quiz/              # Quiz components
│   └── ui/                # UI components
├── lib/                   # Utility libraries
│   ├── document-maker/    # PDF generation
│   └── entitlements.ts    # Access control
├── contexts/              # React contexts
├── hooks/                 # Custom React hooks
├── types/                 # TypeScript types
├── utils/                 # Utility functions
└── prisma/                # Database schema
```

## 🎨 Design System

The app uses an Apple-inspired design system with:
- SF Pro font family
- Refined color palette
- Soft shadows and smooth animations
- Generous spacing
- iOS-safe area insets for mobile

See `DESIGN_SYSTEM.md` for complete design tokens.

## 📚 Documentation

- `CODEBASE_INVENTORY.md` - Complete codebase overview
- `COMPANION_APP_IMPLEMENTATION.md` - Aura app features
- `DESIGN_SYSTEM.md` - Design tokens and guidelines
- `ENV_TEMPLATE.md` - Environment variables reference
- `REMAINING_TODOS.md` - Known issues and improvements
- `PRODUCTION_CHECKLIST.md` - Deployment checklist

## 🧪 Testing

```bash
# Run linting
npm run lint

# Type checking
npm run type-check

# Build for production
npm run build
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy

### Manual Deployment

```bash
npm run build
npm start
```

## 🔒 Security

- ✅ Environment variables properly secured
- ✅ No hardcoded credentials
- ✅ XSS protection implemented
- ✅ Security headers configured
- ✅ Rate limiting enabled
- ✅ Input validation and sanitization

## 📊 Monitoring

- Error monitoring infrastructure ready (Sentry integration available)
- Performance tracking
- Analytics dashboard at `/dashboard/monitoring`

## 🤝 Contributing

1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Submit a pull request

## 📝 License

Private repository - All rights reserved

## 🆘 Support

For issues or questions, please refer to the documentation files or create an issue in the repository.

---

**Built with ❤️ for astrology enthusiasts**
