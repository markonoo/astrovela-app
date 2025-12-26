#!/usr/bin/env node

/**
 * Test script to reproduce the chart-image API error
 */

import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import dotenv from 'dotenv';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load environment variables
const envPath = join(__dirname, '..', '.env');
dotenv.config({ path: envPath });

console.log('🧪 Testing /api/chart-image endpoint...\n');

const testData = {
  chart_url: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSI0MCIgZmlsbD0iYmx1ZSIvPjwvc3ZnPg==",
  birth_data: {
    day: 25,
    month: 12,
    year: 1990,
    hour: 12,
    min: 30,
    lat: 51.5074,
    lon: -0.1278,
    tzone: 0
  },
  session_id: `test_session_${Date.now()}`,
  email: "test@example.com"
};

const apiUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
const endpoint = `${apiUrl}/api/chart-image`;

console.log('Testing endpoint:', endpoint);
console.log('Request data:', JSON.stringify(testData, null, 2));
console.log('\n Sending request...\n');

try {
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(testData)
  });
  
  console.log('Response status:', response.status, response.statusText);
  console.log('Response headers:', Object.fromEntries(response.headers.entries()));
  
  const responseText = await response.text();
  console.log('\nResponse body (raw):');
  console.log('═'.repeat(80));
  console.log(responseText);
  console.log('═'.repeat(80));
  
  try {
    const responseJson = JSON.parse(responseText);
    console.log('\nResponse body (parsed):');
    console.log(JSON.stringify(responseJson, null, 2));
  } catch (e) {
    console.log('\n⚠️  Could not parse response as JSON');
  }
  
  if (!response.ok) {
    console.log('\n❌ API call failed!');
    console.log(`Status: ${response.status}`);
    
    // Try to extract error details
    try {
      const errorData = JSON.parse(responseText);
      console.log('\nError details:');
      console.log('  Error:', errorData.error);
      console.log('  Details:', errorData.details);
      console.log('  Hint:', errorData.hint);
      if (errorData.supabaseError) {
        console.log('  Supabase Error:', errorData.supabaseError);
      }
    } catch (e) {
      // Ignore
    }
    
    process.exit(1);
  } else {
    console.log('\n✅ API call successful!');
    process.exit(0);
  }
} catch (error) {
  console.error('\n❌ Request failed:');
  console.error(error.message);
  console.error('\nStack trace:');
  console.error(error.stack);
  process.exit(1);
}
