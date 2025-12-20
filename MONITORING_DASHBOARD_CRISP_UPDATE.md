# Monitoring Dashboard - Crisp Chatbot Status Integration

## Date: December 19, 2025

## Summary

Extended the existing monitoring dashboard (`/dashboard/monitoring`) to include real-time status monitoring for the Crisp live chat widget.

## What Was Added

### 1. Crisp Status State Management
- **Added state**: `crispStatus` to track Crisp widget status
- **Properties tracked**:
  - `loaded`: Whether Crisp script is loaded
  - `active`: Whether chat widget is active
  - `websiteId`: Crisp Website ID (958abb51-98fe-4d1b-980d-401cf8716015)
  - `chatboxOpen`: Whether chatbox is currently open
  - `unreadMessages`: Number of unread messages
  - `error`: Any error messages

### 2. Crisp Status Check Function
- **Function**: `checkCrispStatus()`
- **Purpose**: Checks if Crisp SDK is loaded and active
- **Runs**: On dashboard load and every 30 seconds (auto-refresh)
- **Detection**: Checks for `window.$crisp` and `window.CRISP_WEBSITE_ID`

### 3. New Monitoring Section
**Location**: After Marketing Tracking, before System Health Overview

**Displays**:
1. **Status Overview Cards**:
   - Script Status (Loaded/Not Loaded)
   - Chat Widget Status (Active/Inactive)
   - Website ID (with truncated display)

2. **Configuration Details**:
   - Component location (`CrispChat.tsx`)
   - Integration scope (Site-wide)
   - Available features checklist

3. **Error Display**:
   - Shows any errors if Crisp fails to load
   - Provides troubleshooting hints

4. **Management Links**:
   - Direct link to Crisp Dashboard
   - Quick access to manage conversations

5. **Quick Tips Section**:
   - Best practices for using Crisp
   - Configuration suggestions
   - Notification setup reminders

## Features

### Visual Status Indicators
- ✅ **Green badges**: Crisp loaded and active
- ❌ **Red badges**: Crisp not loaded or inactive
- 🟢 **Active indicator**: Widget is operational
- ⚫ **Inactive indicator**: Widget not operational

### Auto-Refresh
- Status checks every 30 seconds automatically
- Manual refresh button available
- Real-time status updates

### Responsive Design
- Mobile-friendly layout
- Grid system adapts to screen size
- Truncated Website ID for smaller screens

## Technical Implementation

### Files Modified
- `/app/dashboard/monitoring/page.tsx`

### Code Changes
1. Added `crispStatus` state variable
2. Created `checkCrispStatus()` function
3. Integrated Crisp check into `fetchAllData()` pipeline
4. Added new UI section with comprehensive status display

### Dependencies
- No new dependencies added
- Uses existing Crisp integration from `CrispChat.tsx`
- Leverages window object to check Crisp SDK

## How to Use

### Accessing the Dashboard
1. Navigate to `/dashboard/monitoring`
2. Must be logged in as admin
3. Dashboard auto-loads all monitoring data

### Interpreting Crisp Status

**Healthy Status**:
- Script Status: ✅ Loaded (green)
- Chat Widget: 🟢 Active (green)
- No error messages

**Unhealthy Status**:
- Script Status: ❌ Not Loaded (red)
- Chat Widget: ⚫ Inactive (gray/red)
- Error message displayed

### Troubleshooting
If Crisp shows as inactive:
1. Check that `CrispChat.tsx` is in `/components/`
2. Verify it's imported in root `layout.tsx`
3. Check browser console for script loading errors
4. Ensure Website ID is correct
5. Check network tab for blocked requests

## Integration with Other Monitoring

The Crisp status section fits seamlessly with existing monitoring:
- **Shopify E-commerce**: Shows revenue and orders
- **Marketing Tracking**: Shows pixel status
- **Crisp Chatbot**: Shows chat widget status ← NEW
- **System Health**: Shows API health
- **Performance**: Shows load metrics
- **Security**: Shows security events
- **Aura App**: Shows subscription stats
- **PDF Stats**: Shows document generation

## Benefits

1. **Real-time Visibility**: See if chat widget is working
2. **Proactive Monitoring**: Catch issues before customers do
3. **Configuration Verification**: Confirm correct Website ID
4. **Quick Access**: Direct link to Crisp dashboard
5. **Integrated View**: All services in one dashboard

## Next Steps (Optional)

Consider adding:
1. **Conversation Count**: Number of active conversations
2. **Response Time**: Average response time to messages
3. **Online Status**: Whether you're currently available
4. **Message Volume**: Messages received today/week/month
5. **API Integration**: Use Crisp API for deeper insights

Note: These would require Crisp API authentication and additional API calls.

## Maintenance

- No maintenance required for basic status check
- Crisp SDK automatically updates from their CDN
- Dashboard auto-refreshes every 30 seconds
- Status check is lightweight (no API calls)

## Screenshot Reference

The Crisp section appears between Marketing Tracking and System Health Overview with:
- Header: "💬 Crisp Live Chat Status"
- Status badge: GREEN (Active) or RED (Inactive)
- Three status cards showing Script, Widget, and Website ID
- Configuration details grid
- Quick tips section

## Documentation

For more information:
- Crisp Integration: See `CRISP_CHAT_INTEGRATION.md`
- Crisp Dashboard: https://app.crisp.chat
- Crisp Docs: https://docs.crisp.chat
