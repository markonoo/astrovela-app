#!/usr/bin/env node

/**
 * Script to verify all required database tables exist in Supabase
 * This will check for ChartImage, NatalChartInterpretation, and QuizResponse tables
 */

import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load environment variables from .env file
const envPath = join(__dirname, '..', '.env');
dotenv.config({ path: envPath });

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
  console.error('❌ Missing required environment variables:');
  console.error('   NEXT_PUBLIC_SUPABASE_URL:', SUPABASE_URL ? '✅' : '❌');
  console.error('   NEXT_PUBLIC_SUPABASE_ANON_KEY:', SUPABASE_ANON_KEY ? '✅' : '❌');
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

console.log('🔍 Verifying Database Tables...\n');
console.log('Supabase URL:', SUPABASE_URL);
console.log('');

const requiredTables = [
  { name: 'ChartImage', description: 'Stores natal chart images and metadata' },
  { name: 'NatalChartInterpretation', description: 'Stores chart interpretation data' },
  { name: 'QuizResponse', description: 'Stores quiz submission data' },
  { name: 'User', description: 'Stores user accounts' },
  { name: 'AppEntitlement', description: 'Stores app subscription data' }
];

async function verifyTable(tableName, description) {
  try {
    // Try to query the table (will fail if it doesn't exist)
    const { data, error, count } = await supabase
      .from(tableName)
      .select('*', { count: 'exact', head: true });
    
    if (error) {
      // Check if error is because table doesn't exist
      if (error.message.includes('relation') && error.message.includes('does not exist')) {
        console.log(`❌ ${tableName}`);
        console.log(`   Status: MISSING`);
        console.log(`   Description: ${description}`);
        console.log(`   Error: Table does not exist in database`);
        console.log('');
        return { exists: false, name: tableName, description };
      } else if (error.code === 'PGRST116') {
        // PGRST116 = table not found in PostgREST
        console.log(`❌ ${tableName}`);
        console.log(`   Status: NOT EXPOSED`);
        console.log(`   Description: ${description}`);
        console.log(`   Error: Table exists but not exposed via Supabase API`);
        console.log(`   Hint: Enable RLS or make table public in Supabase dashboard`);
        console.log('');
        return { exists: false, name: tableName, description, needsRLS: true };
      } else {
        console.log(`⚠️  ${tableName}`);
        console.log(`   Status: UNKNOWN ERROR`);
        console.log(`   Description: ${description}`);
        console.log(`   Error: ${error.message}`);
        console.log(`   Code: ${error.code}`);
        console.log('');
        return { exists: 'unknown', name: tableName, description, error };
      }
    }
    
    console.log(`✅ ${tableName}`);
    console.log(`   Status: EXISTS`);
    console.log(`   Description: ${description}`);
    console.log(`   Rows: ${count || 0}`);
    console.log('');
    return { exists: true, name: tableName, count, description };
  } catch (err) {
    console.log(`❌ ${tableName}`);
    console.log(`   Status: ERROR`);
    console.log(`   Description: ${description}`);
    console.log(`   Error: ${err.message}`);
    console.log('');
    return { exists: false, name: tableName, description, error: err.message };
  }
}

async function main() {
  const results = [];
  
  for (const table of requiredTables) {
    const result = await verifyTable(table.name, table.description);
    results.push(result);
  }
  
  console.log('\n═══════════════════════════════════════════════════');
  console.log('SUMMARY');
  console.log('═══════════════════════════════════════════════════\n');
  
  const existing = results.filter(r => r.exists === true);
  const missing = results.filter(r => r.exists === false);
  const needsRLS = results.filter(r => r.needsRLS === true);
  const unknown = results.filter(r => r.exists === 'unknown');
  
  console.log(`✅ Existing tables: ${existing.length}/${requiredTables.length}`);
  existing.forEach(r => console.log(`   - ${r.name} (${r.count} rows)`));
  
  if (missing.length > 0) {
    console.log(`\n❌ Missing tables: ${missing.length}`);
    missing.forEach(r => console.log(`   - ${r.name}`));
  }
  
  if (needsRLS.length > 0) {
    console.log(`\n⚠️  Tables needing RLS setup: ${needsRLS.length}`);
    needsRLS.forEach(r => console.log(`   - ${r.name}`));
  }
  
  if (unknown.length > 0) {
    console.log(`\n⚠️  Tables with errors: ${unknown.length}`);
    unknown.forEach(r => console.log(`   - ${r.name}: ${r.error?.message || 'Unknown'}`));
  }
  
  console.log('\n═══════════════════════════════════════════════════');
  
  if (missing.length > 0 || needsRLS.length > 0) {
    console.log('\n📋 REQUIRED ACTIONS:\n');
    
    if (missing.length > 0) {
      console.log('1. Run database migrations:');
      console.log('   cd prisma');
      console.log('   npx prisma migrate deploy');
      console.log('');
      console.log('   OR manually run the SQL from migration files in:');
      console.log('   prisma/migrations/');
      console.log('');
    }
    
    if (needsRLS.length > 0) {
      console.log('2. Setup Row Level Security (RLS):');
      console.log('   Go to: https://supabase.com/dashboard/project/zzkvjfqjojerhwmkfdfn/auth/policies');
      console.log('');
      console.log('   For each table, add a policy:');
      console.log('   - Policy name: "Enable insert for anon users"');
      console.log('   - Policy command: INSERT');
      console.log('   - Target roles: anon');
      console.log('   - USING expression: true');
      console.log('');
      console.log('   OR disable RLS entirely (less secure):');
      console.log('   Go to: https://supabase.com/dashboard/project/zzkvjfqjojerhwmkfdfn/editor');
      console.log('   Click table → RLS → Disable RLS');
      console.log('');
    }
    
    console.log('3. After fixing, run this script again to verify.');
    console.log('');
    
    process.exit(1);
  } else {
    console.log('\n✅ ALL REQUIRED TABLES EXIST AND ARE ACCESSIBLE!\n');
    process.exit(0);
  }
}

main().catch(console.error);
