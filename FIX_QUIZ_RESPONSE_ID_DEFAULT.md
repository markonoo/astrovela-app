# Fix: QuizResponse ID Default Value

## Problem

Session tracking test failing with error:
```
"null value in column \"id\" of relation \"QuizResponse\" violates not-null constraint"
```

## Root Cause

The `QuizResponse` table's `id` column was defined as:
```prisma
id String @id
```

But it was **missing** the `@default(cuid())` directive, which means:
- Prisma schema expected auto-generation
- Database had no default value configured
- Inserts without explicit `id` failed

## Solution

### 1. Updated Prisma Schema

Changed line 144 in `prisma/schema.prisma`:
```prisma
// BEFORE
id String @id

// AFTER
id String @id @default(cuid())
```

### 2. Database Migration Required

Run the migration SQL to add default value to the database:

**File:** `prisma/migrations/add_default_to_quiz_response_id.sql`

```sql
ALTER TABLE "QuizResponse" 
ALTER COLUMN "id" SET DEFAULT gen_random_uuid()::text;
```

**Note:** Prisma uses `cuid()` on the client side, but for database-level defaults, we use PostgreSQL's `gen_random_uuid()` which is compatible.

## How to Apply

### Option 1: Via Supabase Dashboard

1. Go to Supabase Dashboard → SQL Editor
2. Paste the migration SQL
3. Execute

### Option 2: Via Prisma

```bash
cd AstroBook
npx prisma migrate dev --name add_default_to_quiz_response_id
npx prisma generate
```

### Option 3: Direct SQL

```bash
psql $DATABASE_URL -c "ALTER TABLE \"QuizResponse\" ALTER COLUMN \"id\" SET DEFAULT gen_random_uuid()::text;"
```

## Verification

After applying the migration, test with:

1. Visit: `/api/test-session-tracking`
2. Should see: `"Session data consistency": "PASSED"`
3. Success rate should be: `100%` (5/5 tests passed)

## Files Changed

- ✅ `prisma/schema.prisma` - Added `@default(cuid())`
- ✅ `prisma/migrations/add_default_to_quiz_response_id.sql` - Migration script
- ✅ `FIX_QUIZ_RESPONSE_ID_DEFAULT.md` - This documentation

## Impact

- ✅ Quiz submissions will work without explicit ID
- ✅ Session tracking tests will pass
- ✅ No breaking changes to existing code
- ✅ Existing records unaffected


