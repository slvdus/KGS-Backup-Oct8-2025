# Business Migration Action Plan

## Overview
Migrating Nature's Arsenal website to a new business while maintaining the same structure and design.

## KGS CREW Business Information
- [x] Business name: KGS CREW (Keystone Gun Sales)
- [x] Tagline: "The Best Prices in PA - By Appointment Only"
- [x] Email: KGSCrewInc@gmail.com
- [x] Phone: 717-249-0000
- [x] Address: 10 Vale Road, Newville, PA 17241
- [x] Hours: By Appointment Only (Call or Text)
- [x] About: Family-owned FFL dealer, est. 2020 by Brent Miller & Amber Kane
- [x] Mission: Personalized service, education, no-pressure sales
- [x] Team: Brent Miller (President), Amber Kane (Co-Owner), Bill, Andy
- [x] Social: YouTube (@BrentKGS), Facebook (KeystoneGunSales)
- [x] Website: kgscrewinc.com
- [x] Key Stats: 98% recommendation rate, 94+ reviews
- [x] Special: Appointment-only model for personalized attention

## Files to Update

### 1. Core Business Information
- [ ] Update business name throughout codebase
- [ ] Update meta tags and SEO information
- [ ] Update contact information in all locations

### 2. Product Data (server/storage.ts)
- [ ] Replace all sample products with new products
- [ ] Update product categories
- [ ] Update product specifications
- [ ] Update pricing and inventory

### 3. Frontend Pages
- [ ] **Home Page** (client/src/pages/home.tsx)
  - Hero section text
  - Featured products
  - Business introduction
  - Call-to-action content
  
- [ ] **About Page** (client/src/pages/about.tsx)
  - Company story
  - Mission and values
  - Team information
  - Statistics/achievements
  
- [ ] **Contact Page** (client/src/pages/contact.tsx)
  - Contact information
  - Business hours
  - Location/address
  - Contact form fields (if needed)
  
- [ ] **Catalog Page** (client/src/pages/catalog.tsx)
  - Category filters
  - Product grid display
  
- [ ] **Product Detail Page** (client/src/pages/product-detail.tsx)
  - Product information display
  - Specifications format

### 4. Components
- [ ] **Navbar** (client/src/components/layout/navbar.tsx)
  - Business name/logo
  - Navigation items (if needed)
  
- [ ] **Footer** (client/src/components/layout/footer.tsx)
  - Business info
  - Contact details
  - Social media links
  - Legal links
  - Business hours

### 5. Backend/API
- [ ] Update API endpoints if needed
- [ ] Update contact form handling
- [ ] Update any business-specific logic

### 6. Documentation
- [ ] Update replit.md with new business information
- [ ] Document any business-specific features or requirements

## Migration Steps
1. Receive all business information
2. Update product database
3. Update all static content (about, contact, etc.)
4. Update navigation and footer
5. Update SEO and meta information
6. Test all functionality
7. Final review and adjustments

## Notes
- Maintain the existing dark "noir" theme with glass effects
- Keep all animations and micro-interactions
- Preserve the responsive design
- Ensure all forms and cart functionality remain intact
- Apply Alex Hormozi marketing principles:
  * Lead with value and social proof (98% recommendation)
  * Emphasize exclusivity (appointment-only)
  * Focus on results (best prices, personalized service)
  * Clear CTAs with urgency
  * Problem/solution messaging
- Add Community landing page for Go HighLevel redirect