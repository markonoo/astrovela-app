# 🚀 Complete Supabase Migration Guide

## Overview

This guide documents the migration from a hybrid Prisma/Supabase setup to a complete Supabase solution for the AstroBook application.

## Current Status

### ✅ **COMPLETED**
- **QuizResponse Table**: Successfully migrated and tested
- **API Route Updates**: `/app/api/chart-image/route.ts` updated to use Supabase
- **NatalChartInterpretation Table**: Already working in Supabase

### 🔄 **IN PROGRESS**
- **User Table**: SQL migration script created, needs execution
- **ChartImage Table**: SQL migration script created, needs execution

## Migration Steps

### Step 1: Execute SQL Migration

Go to your **Supabase Dashboard** → **SQL Editor** → **New Query** and run:

```sql
-- COMPLETE MIGRATION: User and ChartImage tables to Supabase
-- This script creates the remaining tables needed for full Supabase migration

-- =====================================================
-- PART 1: CREATE USER TABLE
-- =====================================================

-- Drop existing User table if it exists (fresh start)
DROP TABLE IF EXISTS public."User" CASCADE;

-- Create User table matching Prisma schema
CREATE TABLE public."User" (
  id SERIAL PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  name TEXT,
  "createdAt" TIMESTAMP WITHOUT TIME ZONE DEFAULT CURRENT_TIMESTAMP NOT NULL
);

-- Disable RLS for User table (same as QuizResponse)
ALTER TABLE public."User" DISABLE ROW LEVEL SECURITY;

-- Grant permissions to anon and authenticated users
GRANT ALL ON public."User" TO anon;
GRANT ALL ON public."User" TO authenticated;
GRANT ALL ON SEQUENCE "User_id_seq" TO anon;
GRANT ALL ON SEQUENCE "User_id_seq" TO authenticated;

-- =====================================================
-- PART 2: CREATE CHARTIMAGE TABLE  
-- =====================================================

-- Drop existing ChartImage table if it exists (fresh start)
DROP TABLE IF EXISTS public."ChartImage" CASCADE;

-- Create ChartImage table matching Prisma schema
CREATE TABLE public."ChartImage" (
  id TEXT PRIMARY KEY DEFAULT uuid_generate_v4()::text,
  "userId" INTEGER REFERENCES public."User"(id),
  "imageUrl" TEXT NOT NULL,
  "birthData" JSONB NOT NULL,
  "chartType" TEXT,
  "createdAt" TIMESTAMP WITHOUT TIME ZONE DEFAULT CURRENT_TIMESTAMP NOT NULL,
  email TEXT,
  session_id TEXT
);

-- Disable RLS for ChartImage table (same as QuizResponse)
ALTER TABLE public."ChartImage" DISABLE ROW LEVEL SECURITY;

-- Grant permissions to anon and authenticated users
GRANT ALL ON public."ChartImage" TO anon;
GRANT ALL ON public."ChartImage" TO authenticated;

-- =====================================================
-- PART 3: CREATE INDEXES FOR PERFORMANCE
-- =====================================================

-- Create indexes to match Prisma schema
CREATE INDEX "ChartImage_userId_idx" ON public."ChartImage"("userId");
CREATE INDEX "ChartImage_session_id_idx" ON public."ChartImage"(session_id);
CREATE INDEX "ChartImage_email_idx" ON public."ChartImage"(email);

-- =====================================================
-- PART 4: TEST THE TABLES (OPTIONAL)
-- =====================================================

-- Test 1: Insert a test user
INSERT INTO public."User" (email, name) 
VALUES ('migration-test@example.com', 'Migration Test User') 
RETURNING id, email, "createdAt";

-- Test 2: Insert a test chart image (referencing the user)
INSERT INTO public."ChartImage" (
  "userId", 
  "imageUrl", 
  "birthData", 
  "chartType",
  email,
  session_id
) VALUES (
  (SELECT id FROM public."User" WHERE email = 'migration-test@example.com'),
  'https://example.com/test-chart.png',
  '{"day": 26, "month": 6, "year": 1990}',
  'natal',
  'migration-test@example.com',
  'test-session-123'
) RETURNING id, "userId", "imageUrl", "createdAt";

-- Test 3: Verify foreign key relationship works
SELECT 
  ci.id as chart_id,
  ci."imageUrl",
  u.email as user_email,
  u.name as user_name
FROM public."ChartImage" ci
JOIN public."User" u ON ci."userId" = u.id
WHERE u.email = 'migration-test@example.com';

-- Clean up test data
DELETE FROM public."ChartImage" WHERE email = 'migration-test@example.com';
DELETE FROM public."User" WHERE email = 'migration-test@example.com';

-- Final success message
SELECT 'SUCCESS: User and ChartImage tables migrated to Supabase!' as migration_status;
```

### Step 2: Test the Migration

Run the test script to verify everything works:

```bash
node scripts/simple-migration-test.js
```

### Step 3: Remove Prisma Dependencies (Optional)

After confirming everything works, you can:

1. **Remove Prisma**: `npm uninstall prisma @prisma/client`
2. **Delete Prisma files**: Remove `prisma/` directory
3. **Update imports**: Remove any remaining Prisma imports

## Database Schema Overview

### Tables in Supabase

1. **QuizResponse** ✅
   - Stores quiz submissions
   - Used by `/api/quiz/submit`

2. **User** 🔄 (Being migrated)
   - User accounts
   - Referenced by ChartImage

3. **ChartImage** 🔄 (Being migrated)
   - Chart image metadata
   - Links to User and file storage
   - Used by `/api/chart-image`

4. **NatalChartInterpretation** ✅
   - Astrological interpretations
   - Already working in Supabase

### File Storage

- **Bucket**: `charts`
- **Path structure**: `{userId|sessionId}/chart_{timestamp}.{ext}`
- **Access**: Public read, anonymous write

## Key Changes Made

### API Routes Updated

#### `/app/api/chart-image/route.ts`
- ✅ **POST**: Create chart images using Supabase
- ✅ **GET**: Fetch chart images using Supabase
- ✅ **DELETE**: Remove chart images using Supabase
- ✅ **PUT**: Merge session data using Supabase

### Environment Variables

Required:
- `NEXT_PUBLIC_SUPABASE_URL`: Your Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Your Supabase anonymous key

## Row Level Security (RLS)

**Status**: DISABLED for all tables

We've disabled RLS for maximum compatibility:
- ✅ QuizResponse: RLS disabled
- 🔄 User: RLS will be disabled
- 🔄 ChartImage: RLS will be disabled

## Testing Checklist

After migration, verify:

- [ ] Quiz submissions work (`/quiz` → submit)
- [ ] Chart image creation works (`/book-designer`)
- [ ] Chart image retrieval works
- [ ] User-chart relationships work
- [ ] File uploads to Supabase storage work
- [ ] All API endpoints respond correctly

## Troubleshooting

### Common Issues

1. **Permission Denied**: Ensure RLS is disabled and permissions are granted
2. **Foreign Key Errors**: Check that User table exists before ChartImage
3. **UUID Extension**: Ensure `uuid-ossp` extension is enabled

### Debug Commands

```bash
# Test Supabase connection
node scripts/simple-migration-test.js

# Check environment variables
echo $NEXT_PUBLIC_SUPABASE_URL
echo $NEXT_PUBLIC_SUPABASE_ANON_KEY
```

## Post-Migration Benefits

1. **Single Database**: All data in Supabase
2. **Real-time Features**: Can use Supabase real-time subscriptions
3. **Simplified Architecture**: No more Prisma complexity
4. **Better Performance**: Direct Supabase queries
5. **Built-in Auth**: Can use Supabase Auth in the future

## Support

If you encounter issues:
1. Check Supabase dashboard logs
2. Verify table structures in Database → Tables
3. Test individual queries in SQL Editor
4. Review API route responses in browser dev tools

---

**Migration Status**: Ready for execution ✅
**Last Updated**: Current session
**Files Modified**: 
- `app/api/chart-image/route.ts`
- `scripts/migrate-remaining-tables.sql`
- `scripts/simple-migration-test.js` 