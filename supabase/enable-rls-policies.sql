-- Enable Row Level Security (RLS) on all public tables
-- This ensures data security while allowing necessary operations

-- ============================================================================
-- 1. ENABLE RLS ON ALL TABLES
-- ============================================================================

ALTER TABLE public."QuizResponse" ENABLE ROW LEVEL SECURITY;
ALTER TABLE public."ChartImage" ENABLE ROW LEVEL SECURITY;
ALTER TABLE public."User" ENABLE ROW LEVEL SECURITY;

-- ============================================================================
-- 2. CREATE POLICIES FOR ANONYMOUS USERS (Quiz Flow)
-- ============================================================================

-- QuizResponse: Allow anonymous users to INSERT their quiz responses
CREATE POLICY "Allow anonymous quiz submission"
ON public."QuizResponse"
FOR INSERT
TO anon
WITH CHECK (true);

-- QuizResponse: Allow users to read their own responses (by session_id or userId)
CREATE POLICY "Users can read own quiz responses"
ON public."QuizResponse"
FOR SELECT
TO authenticated
USING (
  auth.uid()::text = "userId"::text
  OR "session_id" IS NOT NULL
);

-- ChartImage: Allow anonymous users to INSERT chart images
CREATE POLICY "Allow anonymous chart image upload"
ON public."ChartImage"
FOR INSERT
TO anon
WITH CHECK (true);

-- ChartImage: Allow users to read their own chart images (by session_id or userId)
CREATE POLICY "Users can read own chart images"
ON public."ChartImage"
FOR SELECT
TO authenticated
USING (
  auth.uid()::text = "userId"::text
  OR "session_id" IS NOT NULL
);

-- ============================================================================
-- 3. CREATE POLICIES FOR AUTHENTICATED USERS
-- ============================================================================

-- User: Users can read their own profile
CREATE POLICY "Users can read own profile"
ON public."User"
FOR SELECT
TO authenticated
USING (auth.uid()::text = id::text);

-- User: Users can update their own profile
CREATE POLICY "Users can update own profile"
ON public."User"
FOR UPDATE
TO authenticated
USING (auth.uid()::text = id::text)
WITH CHECK (auth.uid()::text = id::text);

-- ============================================================================
-- 4. CREATE POLICIES FOR SERVICE ROLE (Admin/API)
-- ============================================================================

-- QuizResponse: Service role can do everything (for admin dashboard)
CREATE POLICY "Service role has full access to QuizResponse"
ON public."QuizResponse"
FOR ALL
TO service_role
USING (true)
WITH CHECK (true);

-- ChartImage: Service role can do everything (for admin dashboard)
CREATE POLICY "Service role has full access to ChartImage"
ON public."ChartImage"
FOR ALL
TO service_role
USING (true)
WITH CHECK (true);

-- User: Service role can do everything (for admin dashboard)
CREATE POLICY "Service role has full access to User"
ON public."User"
FOR ALL
TO service_role
USING (true)
WITH CHECK (true);

-- ============================================================================
-- 5. ADDITIONAL SECURITY POLICIES
-- ============================================================================

-- NatalChartInterpretation: Allow anonymous INSERT (for quiz flow)
ALTER TABLE public."NatalChartInterpretation" ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow anonymous natal chart interpretation insert"
ON public."NatalChartInterpretation"
FOR INSERT
TO anon
WITH CHECK (true);

CREATE POLICY "Users can read own interpretations"
ON public."NatalChartInterpretation"
FOR SELECT
TO authenticated
USING (
  auth.uid()::text = "userId"::text
  OR "session_id" IS NOT NULL
);

CREATE POLICY "Service role has full access to NatalChartInterpretation"
ON public."NatalChartInterpretation"
FOR ALL
TO service_role
USING (true)
WITH CHECK (true);

-- ============================================================================
-- 6. GRANT USAGE ON SCHEMAS
-- ============================================================================

GRANT USAGE ON SCHEMA public TO anon;
GRANT USAGE ON SCHEMA public TO authenticated;
GRANT USAGE ON SCHEMA public TO service_role;

-- ============================================================================
-- VERIFICATION QUERIES
-- ============================================================================

-- Check RLS status
SELECT schemaname, tablename, rowsecurity 
FROM pg_tables 
WHERE schemaname = 'public' 
AND tablename IN ('QuizResponse', 'ChartImage', 'User', 'NatalChartInterpretation');

-- List all policies
SELECT schemaname, tablename, policyname, permissive, roles, cmd, qual, with_check
FROM pg_policies
WHERE schemaname = 'public'
ORDER BY tablename, policyname;
