# Overview

Nature's Arsenal is a modern full-stack web application for a firearms retailer. Built as a comprehensive e-commerce platform, it showcases firearms inventory with detailed product information, provides company information, and includes customer contact capabilities. The application features a dark "noir" theme design with premium aesthetics suitable for a professional firearms business.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture

The frontend is built using React 18 with TypeScript, utilizing modern React patterns including functional components and hooks. The application uses Wouter for client-side routing, providing a lightweight alternative to React Router. State management is handled through React Query (TanStack Query) for server state and local React state for UI state.

The UI is built with shadcn/ui components, providing a consistent design system based on Radix UI primitives. The styling is implemented with Tailwind CSS using a custom "noir" color palette (blacks, grays, and beige accents) to create a premium, professional aesthetic. The application is fully responsive and includes smooth animations powered by Framer Motion.

## Backend Architecture

The backend follows a REST API pattern built with Express.js and TypeScript. The server implements a clean separation of concerns with dedicated modules for routing, storage abstraction, and Vite integration for development. The application uses an in-memory storage implementation that can be easily swapped for a database-backed solution.

The server includes comprehensive request logging, error handling middleware, and development-specific features like Vite HMR integration. The storage layer implements an interface-based approach, making it easy to switch between different storage backends.

## Data Storage Solutions

Currently implements an in-memory storage solution using Maps for rapid prototyping and development. The system is designed with a storage interface that supports easy migration to PostgreSQL using Drizzle ORM. Database schemas are defined using Drizzle with PostgreSQL dialect, including tables for products and users.

Product data includes comprehensive information like specifications arrays, pricing, inventory levels, and categorization. The schema supports features like low stock warnings and detailed product specifications.

## Component Architecture

The frontend follows a hierarchical component structure with reusable UI components, layout components (navbar, footer), and page-specific components. Product-related components are modularized for easy reuse across different views. The application uses a comprehensive design system with over 30 UI components covering forms, navigation, feedback, and data display.

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