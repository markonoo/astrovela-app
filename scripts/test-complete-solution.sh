#!/bin/bash

# 🧪 Complete Session Tracking & Storage Migration Test Script
# This script tests the entire flow from session creation to user registration with storage migration

echo "🚀 Starting Complete Session Tracking & Storage Migration Test"
echo "=============================================================="

# Configuration
BASE_URL="http://localhost:3000"
SESSION_ID="session_$(date +%s)_test"
USER_ID=42
EMAIL="test@example.com"

echo "📝 Test Configuration:"
echo "  Session ID: $SESSION_ID"
echo "  User ID: $USER_ID"
echo "  Email: $EMAIL"
echo ""

# Step 1: Test session tracking API
echo "1️⃣ Testing Session Tracking API..."
curl -s "$BASE_URL/api/test-session-tracking" | jq '.'
echo ""

# Step 2: Analyze initial storage state (should be empty)
echo "2️⃣ Analyzing Initial Storage State..."
curl -s "$BASE_URL/api/test-storage-migration?sessionId=$SESSION_ID" | jq '.'
echo ""

# Step 3: Preview session data (should be empty initially)
echo "3️⃣ Previewing Session Data..."
curl -s "$BASE_URL/api/session-merge?sessionId=$SESSION_ID" | jq '.'
echo ""

# Step 4: Test storage migration analysis
echo "4️⃣ Testing Storage Migration Analysis..."
curl -s -X POST "$BASE_URL/api/test-storage-migration" \
  -H "Content-Type: application/json" \
  -d "{\"sessionId\": \"$SESSION_ID\", \"action\": \"analyze\"}" | jq '.'
echo ""

# Step 5: Test full session merge (with storage migration)
echo "5️⃣ Testing Full Session Merge..."
curl -s -X POST "$BASE_URL/api/session-merge" \
  -H "Content-Type: application/json" \
  -d "{
    \"sessionId\": \"$SESSION_ID\",
    \"userId\": $USER_ID,
    \"email\": \"$EMAIL\"
  }" | jq '.'
echo ""

# Step 6: Test storage migration independently
echo "6️⃣ Testing Storage Migration (Full)..."
curl -s -X POST "$BASE_URL/api/test-storage-migration" \
  -H "Content-Type: application/json" \
  -d "{
    \"sessionId\": \"$SESSION_ID\", 
    \"userId\": $USER_ID, 
    \"action\": \"full-migration\"
  }" | jq '.'
echo ""

echo "✅ Complete Test Finished!"
echo ""
echo "🔍 What to check next:"
echo "  1. Check your server logs for detailed migration output"
echo "  2. Verify database records have correct session_id and userId"
echo "  3. Check Supabase Storage for proper file organization"
echo "  4. Test the actual quiz flow with these session IDs"
echo ""
echo "📚 For more details, see SESSION_TRACKING_IMPLEMENTATION.md" 