# AstroBook Backend & Security Documentation

## API Integration, Backend Storage, and User Flows

### API Integration

- **Astrology API**: Used to generate natal charts and interpretations. Credentials are securely stored in environment variables (`USER_ID`, `API_KEY`). The API is called server-side to avoid exposing secrets.
- **Shopify Admin & Storefront APIs**: Used for product management, checkout, and analytics. Credentials are stored in environment variables and only used server-side.
- **Supabase**: Used for database (Postgres) and file storage (buckets). All quiz responses, user data, and chart images are stored here.

#### Key Endpoints
- `POST /api/quiz/submit`: Stores quiz responses in Supabase, including session/user linkage.  
  _See: `app/api/quiz/submit/route.ts`_
- `POST /api/chart-image`: Stores chart images and metadata.  
  _See: `app/api/chart-image/route.ts`_
- `GET /api/chart-image?userId=...`: Retrieves all chart images for a user.
- `DELETE /api/chart-image`: Deletes a chart image (requires image ID and user ID).
- `POST /api/session-merge`: Merges anonymous session data with a registered user, including storage migration.  
  _See: `app/api/session-merge/route.ts`_
- `/api/shopify/*`: Handles Shopify analytics, product, and connection endpoints.  
  _See: `app/api/shopify/`_

### Backend Storage

- **Database**: All user data, quiz responses, and chart metadata are stored in Supabase Postgres. Session tracking is used to link anonymous and registered user data.  
  _Schema: see `prisma/schema.prisma` and Supabase migrations._
- **File Storage**: Chart images are stored in Supabase Storage buckets, organized by session or user ID. On registration, files are migrated from session folders to user folders.  
  _See: `utils/storage-migration.ts`_

### User Flows

1. **Anonymous User**: Takes quiz, generates chart, all data linked by session ID.
2. **User Registers/Logs In**: Session data is merged into the user account, including database records and storage files.
3. **Registered User**: Can access all previous quiz responses, charts, and interpretations.

---

## Security and Privacy Measures

- **Environment Variables**: All sensitive credentials (API keys, tokens) are stored in environment variables and never exposed to the client.  
  _See: `utils/environment.ts`_
- **Server-side Operations**: All sensitive API calls and data mutations are performed server-side.
- **Session/User Data Linking**: Session IDs are used to link data before registration; on registration, all data is merged and linked to the user account.  
  _See: `SESSION_TRACKING_IMPLEMENTATION.md`_
- **File Access**: Chart images are stored in public buckets for now, but can be made private for enhanced privacy.
- **Data Minimization**: Only necessary data is stored; raw birth data is never exposed in URLs or logs.
- **Planned Improvements**:
  - Add API authentication and rate limiting.
  - Sanitize all user inputs.
  - Implement data deletion endpoints and privacy controls.
  - Document data retention policies.

---

### References
- `README.md` — Project overview, API, and storage summary
- `SESSION_TRACKING_IMPLEMENTATION.md` — Session/user data flow
- `SUPABASE_MIGRATION_GUIDE.md` — Database migration details
- `MONITORING_IMPLEMENTATION.md` — Monitoring and analytics
- `PRODUCTION_CHECKLIST.md` — Security and privacy checklist
- `utils/environment.ts` — Environment variable management
- `utils/storage-migration.ts` — Storage migration utilities
- `app/api/quiz/submit/route.ts` — Quiz submission API
- `app/api/session-merge/route.ts` — Session merge API
- `app/api/chart-image/route.ts` — Chart image API 