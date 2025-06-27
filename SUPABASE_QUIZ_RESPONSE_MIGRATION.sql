-- Migration: Add session_id and userId to QuizResponse table for consistent user tracking
-- This ensures all tables (QuizResponse, ChartImage, NatalChartInterpretation) have consistent user identification

-- =====================================================
-- PART 1: ADD COLUMNS TO QUIZRESPONSE TABLE
-- =====================================================

-- Add session_id and userId columns to QuizResponse
ALTER TABLE public."QuizResponse" 
ADD COLUMN IF NOT EXISTS "session_id" TEXT,
ADD COLUMN IF NOT EXISTS "userId" INTEGER;

-- =====================================================
-- PART 2: ADD FOREIGN KEY CONSTRAINT
-- =====================================================

-- Add foreign key constraint to link QuizResponse to User table
ALTER TABLE public."QuizResponse" 
ADD CONSTRAINT "QuizResponse_userId_fkey" 
FOREIGN KEY ("userId") REFERENCES public."User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- =====================================================
-- PART 3: CREATE INDEXES FOR PERFORMANCE
-- =====================================================

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS "QuizResponse_session_id_idx" ON public."QuizResponse"("session_id");
CREATE INDEX IF NOT EXISTS "QuizResponse_userId_idx" ON public."QuizResponse"("userId");

-- =====================================================
-- PART 4: TEST THE MIGRATION (OPTIONAL)
-- =====================================================

-- Test: Insert a test quiz response with session tracking
INSERT INTO public."QuizResponse" (
  email,
  answers,
  "birthDate",
  "birthPlace",
  "birthTime",
  "firstName",
  "lastName",
  gender,
  "coverDesign",
  "session_id",
  "userId"
) VALUES (
  'migration-test-quiz@example.com',
  '{"test": "data"}',
  '{"day": 26, "month": 8, "year": 1990}',
  'Test City',
  '12:00',
  'Migration',
  'Test',
  'other',
  'cream',
  'test-session-migration-123',
  NULL
) RETURNING id, email, "session_id", "userId", "createdAt";

-- Test: Verify the new columns exist and work
SELECT 
  id,
  email,
  "firstName",
  "session_id",
  "userId",
  "createdAt"
FROM public."QuizResponse" 
WHERE email = 'migration-test-quiz@example.com';

-- Clean up test data
DELETE FROM public."QuizResponse" WHERE email = 'migration-test-quiz@example.com';

-- Final success message
SELECT 'SUCCESS: QuizResponse table updated with session_id and userId tracking!' as migration_status;

-- =====================================================
-- PART 5: VERIFY CONSISTENT SCHEMA ACROSS ALL TABLES
-- =====================================================

-- Show columns for all tables to verify consistency
SELECT 
  'QuizResponse' as table_name,
  column_name,
  data_type,
  is_nullable
FROM information_schema.columns 
WHERE table_name = 'QuizResponse' 
  AND table_schema = 'public'
  AND column_name IN ('session_id', 'userId', 'email')
ORDER BY column_name;

SELECT 
  'ChartImage' as table_name,
  column_name,
  data_type,
  is_nullable
FROM information_schema.columns 
WHERE table_name = 'ChartImage' 
  AND table_schema = 'public'
  AND column_name IN ('session_id', 'userId', 'email')
ORDER BY column_name;

SELECT 
  'NatalChartInterpretation' as table_name,
  column_name,
  data_type,
  is_nullable
FROM information_schema.columns 
WHERE table_name = 'NatalChartInterpretation' 
  AND table_schema = 'public'
  AND column_name IN ('session_id', 'userId')
ORDER BY column_name; 