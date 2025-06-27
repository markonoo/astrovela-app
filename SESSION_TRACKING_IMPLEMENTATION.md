# 🔄 Session Tracking Implementation

## Overview

This document outlines the implementation of consistent user identification across all database tables using session IDs. The solution addresses the critical issue where user data was scattered across tables without a reliable way to link records from the same user session.

## Problem Solved

### Before Implementation ❌
- **QuizResponse**: Only had `email` field for identification
- **ChartImage**: Had `session_id` and `userId` but QuizResponse couldn't be linked
- **NatalChartInterpretation**: Had `session_id` and `userId` but QuizResponse couldn't be linked
- **Result**: No way to reliably link a user's quiz answers to their chart and interpretation data

### After Implementation ✅
- **All tables** now have consistent `session_id` and `userId` fields
- **Complete user journey tracking** from quiz → chart → interpretation
- **Session merging** capability when users register
- **Data integrity** with proper foreign key relationships
- **Storage file accessibility** maintained after user registration

## Database Schema Changes

### 1. QuizResponse Table Updates

```sql
-- Added fields
ALTER TABLE public."QuizResponse" 
ADD COLUMN IF NOT EXISTS "session_id" TEXT,
ADD COLUMN IF NOT EXISTS "userId" INTEGER;

-- Added foreign key constraint
ALTER TABLE public."QuizResponse" 
ADD CONSTRAINT "QuizResponse_userId_fkey" 
FOREIGN KEY ("userId") REFERENCES public."User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- Added indexes for performance
CREATE INDEX IF NOT EXISTS "QuizResponse_session_id_idx" ON public."QuizResponse"("session_id");
CREATE INDEX IF NOT EXISTS "QuizResponse_userId_idx" ON public."QuizResponse"("userId");
```

### 2. Updated Prisma Schema

```prisma
model QuizResponse {
  id          String   @id @default(cuid())
  email       String
  answers     Json
  birthDate   Json
  birthPlace  String?
  birthTime   String?
  firstName   String?
  lastName    String?
  gender      String?
  createdAt   DateTime @default(now())
  coverDesign String?
  session_id  String?  // ✅ NEW
  userId      Int?     // ✅ NEW
  user        User?    @relation(fields: [userId], references: [id]) // ✅ NEW

  @@index([session_id])
  @@index([userId])
}

model User {
  id                       Int                        @id @default(autoincrement())
  email                    String                     @unique
  name                     String?
  createdAt                DateTime                   @default(now())
  chartImages              ChartImage[]
  NatalChartInterpretation NatalChartInterpretation[]
  quizResponses            QuizResponse[]             // ✅ NEW
}
```

## Files Changed

### Core Implementation
- ✅ `prisma/schema.prisma` - Added session_id and userId to QuizResponse
- ✅ `SUPABASE_QUIZ_RESPONSE_MIGRATION.sql` - Database migration script
- ✅ `app/api/quiz/submit/route.ts` - Updated to include session_id
- ✅ `contexts/quiz-context.tsx` - Updated quiz submission with session_id

### New Utilities
- ✅ `utils/session-merge.ts` - Session merge functionality
- ✅ `app/api/session-merge/route.ts` - Session merge API endpoint
- ✅ `app/api/test-session-tracking/route.ts` - Testing endpoint

### Documentation
- ✅ `SESSION_TRACKING_IMPLEMENTATION.md` - This documentation

## Usage Flow

### 1. Anonymous User Journey

1. **User visits site** → Session ID created and stored in `sessionStorage`
2. **User takes quiz** → `QuizResponse` created with `session_id`
3. **User generates chart** → `ChartImage` created with same `session_id`
4. **Chart interpretation** → `NatalChartInterpretation` created with same `session_id`

**Result**: All data linked by `session_id`, no `userId` yet

### 2. User Registration/Login

1. **User registers/logs in** → `User` record created with `userId`
2. **Session merge triggered** → All records with `session_id` updated to include `userId`
3. **Session ID cleared** → `session_id` set to `null` to prevent duplicates

**Result**: All data now properly linked to user account

## Testing

### 1. Database Migration
First, run the SQL migration in your Supabase dashboard:
```sql
-- Copy and paste content from SUPABASE_QUIZ_RESPONSE_MIGRATION.sql
```

### 2. Test Session Tracking
```bash
# Test that all tables have proper session tracking fields
curl http://localhost:3000/api/test-session-tracking
```

### 3. Test Session Merge
```bash
# Preview what data would be merged for a session
curl "http://localhost:3000/api/session-merge?sessionId=session_1234567890_abc123"

# Actually merge session data with user
curl -X POST http://localhost:3000/api/session-merge \
  -H "Content-Type: application/json" \
  -d '{
    "sessionId": "session_1234567890_abc123",
    "userId": 1,
    "email": "user@example.com"
  }'
```

## Next Steps

### 1. Run the Database Migration
Execute the SQL in `SUPABASE_QUIZ_RESPONSE_MIGRATION.sql` in your Supabase SQL Editor.

### 2. Test the Implementation
1. Complete a quiz flow and check the logs for session IDs
2. Verify that all three tables have records with the same session ID
3. Test the session merge API

### 3. Integrate with User Registration
When users register or log in, call the session merge API to link their anonymous data to their account.

## Benefits

✅ **Complete User Journey Tracking** - Link quiz answers to charts to interpretations  
✅ **Data Integrity** - No orphaned records, consistent identification  
✅ **User Experience** - Seamless transition from anonymous to registered user  
✅ **Analytics** - Track complete user journeys and conversion rates  
✅ **Future-Proof** - Easy to add new tables with consistent session tracking  

This implementation provides a robust foundation for consistent user identification across your astrology application, enabling better user experience, data integrity, and business insights.

---

# 📁 Storage Migration Solution

## Critical Storage Problem Identified

After implementing session tracking, we discovered a critical issue with file accessibility in Supabase Storage:

### The Problem
```
Before Session Merge:
Database: [session_id: "session_123", userId: null] ↔ Storage: ["session_123/chart.svg"] ✅

After Session Merge:
Database: [session_id: null, userId: 42] ↔ Storage: ["session_123/chart.svg"] ❌

Users lose access to their files because:
- Database looks for files in folder "42/" 
- Files remain in folder "session_123/"
```

### The Solution
Enhanced session merge process that includes:
1. **File Migration**: Move files from session folder to user folder
2. **URL Updates**: Update ChartImage URLs to point to new locations
3. **Complete Migration**: Both storage and database stay in sync

## Implementation

### 1. Storage Migration Utilities

**New File**: `utils/storage-migration.ts`
- `migrateStorageFiles()` - Moves files from session folder to user folder
- `updateChartImageUrls()` - Updates database URLs to point to new locations
- `analyzeSessionStorage()` - Debug tool to analyze storage issues

### 2. Enhanced Session Merge

**Updated**: `utils/session-merge.ts`
- Added storage migration as Step 4 of session merge process
- Returns storage migration results in response
- Handles storage errors gracefully

### 3. Storage Testing API

**New File**: `app/api/test-storage-migration/route.ts`
- Test storage migration independently
- Analyze storage without making changes
- Debug storage issues

## Usage Examples

### Test Storage Analysis
```bash
# Analyze storage for a session (no changes made)
curl "http://localhost:3000/api/test-storage-migration?sessionId=session_123"

# Or via POST
curl -X POST http://localhost:3000/api/test-storage-migration \
  -H "Content-Type: application/json" \
  -d '{"sessionId": "session_123", "action": "analyze"}'
```

### Test File Migration
```bash
# Test just file migration
curl -X POST http://localhost:3000/api/test-storage-migration \
  -H "Content-Type: application/json" \
  -d '{
    "sessionId": "session_123", 
    "userId": 42, 
    "action": "migrate-files"
  }'

# Test just URL updates
curl -X POST http://localhost:3000/api/test-storage-migration \
  -H "Content-Type: application/json" \
  -d '{
    "sessionId": "session_123", 
    "userId": 42, 
    "action": "update-urls"
  }'

# Test complete storage migration
curl -X POST http://localhost:3000/api/test-storage-migration \
  -H "Content-Type: application/json" \
  -d '{
    "sessionId": "session_123", 
    "userId": 42, 
    "action": "full-migration"
  }'
```

### Full Session Merge (with Storage)
```bash
# Complete session merge now includes storage migration
curl -X POST http://localhost:3000/api/session-merge \
  -H "Content-Type: application/json" \
  -d '{
    "sessionId": "session_123",
    "userId": 42,
    "email": "user@example.com"
  }'

# Response now includes storage information:
{
  "success": true,
  "totalMerged": 3,
  "breakdown": { "quizResponses": 1, "chartImages": 1, "interpretations": 1 },
  "storage": {
    "filesFound": 2,
    "filesMoved": 2,
    "urlsUpdated": 1,
    "storageErrors": []
  }
}
```

## How Storage Migration Works

### 1. File Migration Process
```
1. List files in session folder: session_123/
   - chart.svg
   - thumbnail.png

2. For each file:
   - Download from: session_123/chart.svg
   - Upload to: 42/chart.svg
   - Delete old: session_123/chart.svg

3. Result: Files moved to user folder
```

### 2. URL Update Process
```
1. Find ChartImage records with session_id: "session_123"

2. Update imageUrl fields:
   - Old: "https://...storage.../charts/session_123/chart.svg"
   - New: "https://...storage.../charts/42/chart.svg"

3. Result: Database URLs point to new file locations
```

### 3. Complete Migration Flow
```
Session Merge Process:
1. Update QuizResponse records ✅
2. Update ChartImage records ✅
3. Update NatalChartInterpretation records ✅
4. Migrate storage files ✅ (NEW)
5. Update ChartImage URLs ✅ (NEW)

Result: Complete data + file migration
```

## Files Added/Modified

### New Files
- ✅ `utils/storage-migration.ts` - Storage migration utilities
- ✅ `app/api/test-storage-migration/route.ts` - Storage testing API

### Modified Files  
- ✅ `utils/session-merge.ts` - Added storage migration to merge process
- ✅ `app/api/session-merge/route.ts` - Updated to return storage results

## Benefits of Storage Migration

✅ **File Accessibility**: Users can access their files after registration  
✅ **Data Consistency**: Storage structure matches database records  
✅ **Clean Organization**: Files organized by user ID, not temporary session ID  
✅ **Error Handling**: Graceful handling of storage errors  
✅ **Debugging Tools**: Easy to analyze and test storage issues  
✅ **Future-Proof**: Works with any number of files per session  

## Testing Checklist

1. **Before Migration**:
   - [ ] Verify session has files in storage
   - [ ] Verify ChartImage records point to session folder

2. **Run Migration**:
   - [ ] Test storage analysis first
   - [ ] Run full migration
   - [ ] Check for errors in response

3. **After Migration**:
   - [ ] Verify files moved to user folder
   - [ ] Verify old session folder is empty
   - [ ] Verify ChartImage URLs updated
   - [ ] Test file accessibility in UI

This storage migration solution ensures users never lose access to their generated charts when transitioning from anonymous sessions to registered accounts. 