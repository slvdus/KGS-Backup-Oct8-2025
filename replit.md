# Overview

KGS CREW (Keystone Gun Sales) is a sophisticated full-stack web application for a premium firearms retailer featuring Vercel-style UI/UX design and Alex Hormozi-inspired marketing copy. Built as a comprehensive e-commerce platform, it showcases firearms inventory with detailed product information, provides company information, and includes customer contact capabilities with an appointment-only business model. The application features a dark "noir" theme with glass effects, sophisticated micro-interactions, and premium aesthetics that create an outstanding user experience.

# Business Information

- **Company**: KGS CREW Inc. (Keystone Gun Sales)
- **Location**: 10 Vale Road, Newville, PA 17241
- **Phone**: 717-249-0000
- **Email**: KGSCrewInc@gmail.com
- **Website**: kgscrewinc.com
- **Model**: By appointment only for personalized VIP service
- **Key Metric**: 98% customer recommendation rate from 94+ reviews
- **Founded**: April 2020
- **Owners**: Brent Miller (President) & Amber Kane (Co-Owner)
- **Team**: Bill (Sales Specialist), Andy (Founder Emeritus)
- **Social**: Facebook @KeystoneGunSales, YouTube @BrentKGS

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture

The frontend is built using React 18 with TypeScript, utilizing modern React patterns including functional components and hooks. The application uses Wouter for client-side routing, providing a lightweight alternative to React Router. State management is handled through React Query (TanStack Query) for server state and local React state for UI state.

The UI is built with shadcn/ui components enhanced with sophisticated glass effects and micro-interactions, providing a consistent design system based on Radix UI primitives. The styling is implemented with Tailwind CSS using a custom "noir" color palette (blacks, grays, and beige accents) with advanced animations and Vercel-style polish. The application features floating background elements, enhanced product cards with hover effects, sophisticated form animations, and comprehensive micro-interactions throughout. All animations are powered by Framer Motion with custom CSS animations for premium user experience.

## Backend Architecture

The backend follows a REST API pattern built with Express.js and TypeScript. The server implements a clean separation of concerns with dedicated modules for routing, storage abstraction, and Vite integration for development. The application uses an in-memory storage implementation that can be easily swapped for a database-backed solution.

The server includes comprehensive request logging, error handling middleware, and development-specific features like Vite HMR integration. The storage layer implements an interface-based approach, making it easy to switch between different storage backends.

## Data Storage Solutions

Currently implements an in-memory storage solution using Maps for rapid prototyping and development. The system is designed with a storage interface that supports easy migration to PostgreSQL using Drizzle ORM. Database schemas are defined using Drizzle with PostgreSQL dialect, including tables for products and users.

Product data includes comprehensive information like specifications arrays, pricing, inventory levels, and categorization. The schema supports features like low stock warnings and detailed product specifications. The product catalog includes realistic firearms inventory:
- Handguns (Glock, S&W, Sig Sauer, Ruger, Canik)
- Rifles (AR-15, bolt-action, lever-action, .22 rifles)
- Shotguns (tactical and hunting models)
- Ammunition (9mm, 5.56, .22LR, 12GA)
- Accessories (optics, lights, magazines, holsters, cases)
- Youth Rifles (specialty Keystone products)

## Component Architecture

The frontend follows a hierarchical component structure with reusable UI components featuring sophisticated animations and micro-interactions. Layout components (navbar, footer) and page-specific components are enhanced with glass effects and floating animations. Product-related components include advanced hover effects, stock indicators, and smooth transitions. The application uses a comprehensive design system with over 30 UI components covering forms, navigation, feedback, and data display, all enhanced with Vercel-style polish and premium animations.

## Marketing & Content Strategy

The application uses Alex Hormozi-style marketing copy throughout, focusing on:
- **Value Proposition**: "Pennsylvania's Best Prices in Firearms"
- **Social Proof**: "98% of customers recommend us" with 94+ reviews
- **Exclusivity**: Appointment-only model for VIP treatment
- **Urgency**: Limited availability, exclusive member benefits
- **Personal Touch**: Family-owned business treating customers like family
- **Guarantees**: Best price guarantee, personalized service promise

## Recent UI/UX Enhancements (January 2025)
- **Glass Effects**: Implemented sophisticated glass morphism effects across all components with backdrop blur and subtle borders
- **Hero Sections**: Enhanced all page heroes with floating background elements and gradient animations
- **Product Cards**: Added advanced hover effects, stock indicators, and parallax image animations
- **Form Interactions**: Upgraded contact forms with glass effects and micro-animations
- **Filter Panels**: Enhanced catalog filtering with sophisticated glass panels and smooth transitions
- **Statistics Display**: Added animated stats showcases on About and Catalog pages
- **Micro-interactions**: Comprehensive animation system with staggered delays and smooth transitions
- **Loading States**: Improved skeleton loading with shimmer effects
- **Responsive Design**: All enhancements optimized for mobile and desktop experiences

## Latest Micro-Interactions Implementation (January 2025)
- **Animated Hero Background**: Created sophisticated cross-dotted grid pattern with floating particles, pulsing effects, and moving radial spotlight
- **Navigation Enhancements**: Added magnetic button effects, sliding animations, and hover micro-interactions for all nav links
- **Button Interactions**: Implemented ripple effects, magnetic hover states, and animated arrow reveals for all CTA buttons
- **Product Card Animations**: Enhanced with sophisticated stock indicators, animated borders, and complex hover effects
- **Contact Form Micro-interactions**: Added focus animations, success indicators, and floating background elements
- **Footer Animations**: Staggered reveal animations and enhanced social media button interactions
- **CSS Animation Library**: Created comprehensive micro-interaction system with 15+ animation classes including shimmer, magnetic, ripple, and stagger effects
- **Performance Optimized**: All animations use GPU-accelerated transforms and are optimized for smooth 60fps performance

## Page Structure

1. **Home Page**: Hero with appointment CTA, social proof (98% recommendation), three key value propositions
2. **About Page**: Company story since 2020, team profiles (Brent, Amber, Bill, Andy), values and promises
3. **Catalog Page**: Full inventory with filtering by category, real firearms and accessories
4. **Product Detail**: Comprehensive specifications, stock indicators, add to cart functionality
5. **Contact Page**: Appointment booking form, location (10 Vale Road, Newville), phone/email, social links
6. **Community Page**: Go HighLevel integration landing page, member benefits, exclusive deals messaging
7. **Cart/Checkout**: Standard e-commerce flow with glass effects and animations

## Development Workflow

The application uses Vite for fast development builds and hot module replacement. The build process supports both development and production environments with environment-specific optimizations. TypeScript is configured for strict type checking across the entire codebase with shared types between frontend and backend.

# External Dependencies

## Core Framework Dependencies
- **React 18**: Frontend framework with modern hooks and concurrent features
- **Express.js**: Backend web framework for REST API
- **TypeScript**: Type safety across the entire application
- **Vite**: Build tool and development server

## Database and ORM
- **Drizzle ORM**: Type-safe database ORM with PostgreSQL support
- **@neondatabase/serverless**: Neon database driver for serverless PostgreSQL

## UI and Styling
- **Tailwind CSS**: Utility-first CSS framework
- **shadcn/ui**: Component library built on Radix UI primitives
- **Radix UI**: Unstyled, accessible UI primitives (20+ components)
- **Framer Motion**: Animation library for smooth interactions
- **Lucide React**: Modern icon library

## State Management and Data Fetching
- **TanStack React Query**: Server state management and caching
- **React Hook Form**: Form state management with validation
- **@hookform/resolvers**: Form validation resolvers

## Development and Build Tools
- **@replit/vite-plugin-runtime-error-modal**: Development error handling
- **@replit/vite-plugin-cartographer**: Replit-specific development tools
- **PostCSS**: CSS processing with Autoprefixer
- **ESBuild**: Fast JavaScript bundler for production builds

## Additional Libraries
- **Wouter**: Lightweight client-side routing
- **date-fns**: Date manipulation and formatting
- **class-variance-authority**: Component variant management
- **clsx**: Conditional class name utility
- **cmdk**: Command palette component