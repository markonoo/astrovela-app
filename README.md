# astrovela

Astrovela is a private, modern web application for creating personalized astrology books and related services. The platform guides users through a multi-step quiz, offers a book designer, and provides a seamless, mobile-friendly experience.

---

## Project Description

Astrovela helps users discover personalized astrological insights and create custom astrology books. The app features a guided quiz, book design tools, and a streamlined payment flow (UI only, no payment processing yet).

---

## Recent Updates

- **Payment Page UI**:  
  Added a new `/payment` route with a modern, mobile-friendly payment page UI.  
  - Features a timer, payment method selection (PayPal, Card, Apple Pay, Google Pay), card input fields, and a summary.  
  - No payment integration yet—UI only.

- **Drawer Menu Update**:  
  Added a "Payment" link (with a credit card icon) to the DrawerMenu for direct access and testing of the payment page.

---

## Getting Started

1. **Install dependencies**  
   ```bash
   npm install
   ```

2. **Run the development server**  
   ```bash
   npm run dev
   ```

3. **Open the app**  
   Visit [http://localhost:3000](http://localhost:3000) in your browser.

---

## Project Structure

- `/app/payment/page.tsx` — Payment page UI
- `/components/drawer-menu.tsx` — Drawer menu with navigation links
- `/app/pricing` — Pricing page
- `/app/thank-you` — Thank you/confirmation page

---

## Features

- Multi-step quiz for personalized astrology book
- Book designer tool
- Modern navigation drawer with social/auth links
- Payment page UI (no backend integration yet)

---

## API Integration & Backend Storage

- The backend provides endpoints for astrology chart image storage, retrieval, and deletion at `/api/chart-image`.
- Chart images are generated via an external astrology API, then downloaded and stored in a Supabase storage bucket (`charts`).
- Metadata (image URL, birth data, chart type, timestamp) is saved in the database and linked to the user.
- Endpoints:
  - `POST /api/chart-image`: Store a chart image and metadata for a user.
  - `GET /api/chart-image?userId=...`: Retrieve all chart images for a user.
  - `GET /api/chart-image?id=...`: Retrieve a specific chart image by ID.
  - `DELETE /api/chart-image`: Delete a chart image (requires image ID and user ID).

## User Flows

1. User completes the quiz and provides birth data.
2. The frontend requests a chart image from the astrology API.
3. The chart image URL and user info are sent to the backend.
4. The backend downloads, stores, and saves metadata for the image.
5. Users can view, download, or delete their saved charts from their profile/dashboard.

## Security & Privacy Measures

- Chart images are stored in Supabase storage. (Currently public URLs; can be made private for enhanced privacy.)
- Only the user who owns a chart image can delete it via the API.
- Raw birth data is never exposed in URLs or logs.
- All sensitive operations are performed server-side.
- User authentication and authorization should be enforced on all endpoints (future work: add middleware for auth checks).

## Environment Variables

- `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` for Supabase storage.
- `DATABASE_URL` for PostgreSQL/Prisma.
- Astrology API credentials (see `.env.example`).

---

## License

Private project. All rights reserved.