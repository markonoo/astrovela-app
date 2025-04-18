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

## License

Private project. All rights reserved.