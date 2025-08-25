# Overview

This is a full-stack business financing website for Boreal Financial, built with a modern React frontend and Express.js backend architecture. The application serves as a marketing and information platform showcasing various business financing services including lines of credit, equipment financing, media financing, and more. The site uses a clean, professional design with shadcn/ui components and includes dedicated pages for each financing service with detailed information and call-to-action elements.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **Routing**: Wouter for lightweight client-side routing
- **UI Library**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with CSS variables for theming
- **State Management**: TanStack Query (React Query) for server state management
- **Component Structure**: Page-based architecture with dedicated service pages (home, business-line-of-credit, media-financing, etc.)

## Backend Architecture
- **Framework**: Express.js with TypeScript
- **Development Server**: Custom Vite integration for hot module replacement in development
- **Storage Interface**: Abstracted storage layer with in-memory implementation (MemStorage class)
- **API Structure**: RESTful API design with /api prefix for all routes
- **Build Process**: esbuild for production builds with ES modules

## Database Schema
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema**: Users table with id (UUID), username, and password fields
- **Validation**: Zod schemas for type-safe data validation
- **Migration**: Drizzle Kit for database migrations

## Styling and Design System
- **Design Tokens**: CSS custom properties for colors, spacing, and typography
- **Component Variants**: Class Variance Authority (CVA) for component styling variants
- **Responsive Design**: Mobile-first approach with Tailwind CSS breakpoints
- **Icons**: Lucide React icon library
- **Fonts**: Inter font family with Google Fonts integration

# External Dependencies

## Core Dependencies
- **@neondatabase/serverless**: Neon database driver for PostgreSQL connections
- **drizzle-orm**: Type-safe ORM for database operations
- **@tanstack/react-query**: Server state management and caching
- **wouter**: Lightweight React router

## UI and Styling
- **@radix-ui**: Comprehensive set of unstyled, accessible UI primitives
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Utility for creating component variants
- **clsx**: Conditional className utility
- **lucide-react**: Icon library

## Development Tools
- **vite**: Build tool and development server
- **typescript**: Type checking and compilation
- **@replit/vite-plugin-runtime-error-modal**: Replit-specific development enhancements
- **tsx**: TypeScript execution for Node.js

## Form and Validation
- **react-hook-form**: Form state management
- **@hookform/resolvers**: Validation resolvers for react-hook-form
- **zod**: Schema validation library

## Utilities
- **date-fns**: Date manipulation utilities
- **nanoid**: Unique ID generation
- **connect-pg-simple**: PostgreSQL session store for Express