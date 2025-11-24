-- ========================================
-- CREATE ADMIN TABLES FOR SUPABASE
-- ========================================
-- Run this in Supabase SQL Editor:
-- https://supabase.com/dashboard/project/zzkvjfqjojerhwmkfdfn/sql
-- ========================================

-- Create AdminAuditLog table
CREATE TABLE IF NOT EXISTS "AdminAuditLog" (
    "id" TEXT NOT NULL PRIMARY KEY DEFAULT gen_random_uuid()::text,
    "adminId" TEXT,
    "action" TEXT NOT NULL,
    "resource" TEXT,
    "ipAddress" TEXT,
    "userAgent" TEXT,
    "success" BOOLEAN NOT NULL,
    "details" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Create indexes for AdminAuditLog
CREATE INDEX IF NOT EXISTS "AdminAuditLog_action_idx" ON "AdminAuditLog"("action");
CREATE INDEX IF NOT EXISTS "AdminAuditLog_adminId_idx" ON "AdminAuditLog"("adminId");
CREATE INDEX IF NOT EXISTS "AdminAuditLog_createdAt_idx" ON "AdminAuditLog"("createdAt");
CREATE INDEX IF NOT EXISTS "AdminAuditLog_success_idx" ON "AdminAuditLog"("success");

-- Create AdminRecoveryCode table
CREATE TABLE IF NOT EXISTS "AdminRecoveryCode" (
    "id" TEXT NOT NULL PRIMARY KEY DEFAULT gen_random_uuid()::text,
    "code" TEXT NOT NULL UNIQUE,
    "used" BOOLEAN NOT NULL DEFAULT false,
    "usedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Create index for AdminRecoveryCode
CREATE INDEX IF NOT EXISTS "AdminRecoveryCode_used_idx" ON "AdminRecoveryCode"("used");

-- ========================================
-- VERIFICATION QUERY
-- ========================================
-- Run this after creating tables to verify:
-- SELECT table_name FROM information_schema.tables 
-- WHERE table_schema = 'public' 
-- AND table_name IN ('AdminAuditLog', 'AdminRecoveryCode');
-- ========================================







