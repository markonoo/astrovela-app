#!/usr/bin/env node

import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({ path: join(__dirname, '..', '.env') });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

console.log('📊 Checking ChartImage table schema and testing insert...\n');

// First, try to get existing rows to see structure
console.log('1. Fetching sample rows to see schema...');
const { data: sampleData, error: fetchError } = await supabase
  .from('ChartImage')
  .select('*')
  .limit(1);

if (fetchError) {
  console.log('❌ Error fetching sample data:', fetchError);
} else {
  console.log('✅ Sample row structure:');
  console.log(JSON.stringify(sampleData[0], null, 2));
}

// Now try an insert
console.log('\n2. Testing insert with test data...');

const testInsert = {
  id: `test_${Date.now()}`,
  userId: null,
  email: 'test@example.com',
  session_id: 'test_session',
  imageUrl: 'https://example.com/test.png',
  birthData: {
    day: 25,
    month: 12,
    year: 1990
  },
  chartType: 'natal',
  createdAt: new Date().toISOString()
};

console.log('Inserting:', JSON.stringify(testInsert, null, 2));

const { data: insertData, error: insertError } = await supabase
  .from('ChartImage')
  .insert([testInsert])
  .select();

if (insertError) {
  console.log('\n❌ Insert failed!');
  console.log('Error:', insertError.message);
  console.log('Code:', insertError.code);
  console.log('Details:', insertError.details);
  console.log('Hint:', insertError.hint);
  console.log('\nFull error object:');
  console.log(JSON.stringify(insertError, null, 2));
} else {
  console.log('\n✅ Insert successful!');
  console.log('Inserted:', JSON.stringify(insertData, null, 2));
  
  // Clean up - delete the test row
  console.log('\n3. Cleaning up test row...');
  const { error: deleteError } = await supabase
    .from('ChartImage')
    .delete()
    .eq('id', testInsert.id);
  
  if (deleteError) {
    console.log('⚠️  Could not delete test row:', deleteError.message);
  } else {
    console.log('✅ Test row deleted');
  }
}
