# CampusConnect

A specialized student-to-student marketplace designed specifically for the university environment.

## Overview

CampusConnect aims to solve the unique logistical and financial challenges students face by providing a secure, localized platform for buying and selling essential campus goods. By focusing on a niche community, the app bridges the gap between graduating students looking to declutter and new students seeking affordable resources.

## Core Features & Functionality

The platform is built on a modern Django backend with a high-end, minimal PropTech aesthetic. Key features include:

### Verified Marketplace
A central hub where students can browse items categorized by relevance (e.g., Electronics, Books, Stationery, Furniture).

### AI-Powered Listing (Computer Vision)
Leveraging the Gemini 3 Flash API, the app automatically analyzes uploaded photos to generate professional item descriptions, reducing the friction for sellers.

### Secure Authentication
Integrated login and registration systems that ensure only members of the university community can participate.

### Localized Logistics
Unlike general marketplaces, CampusConnect focuses on specific pickup locations (e.g., "West Campus," "Hostel A") to eliminate shipping costs and safety concerns.

### Mobile-First Design
Optimized for quick access on the go, allowing students to list or buy items between classes.

## Tech Stack

**Frontend:**
- React + TypeScript
- Vite
- Tailwind CSS
- Shadcn/ui components
- React Router
- TanStack Query

**Backend:**
- Django
- Gemini 3 Flash API for AI-powered descriptions

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- Bun or npm/yarn

### Installation

```sh
# Clone the repository
git clone https://github.com/XAIMOH001/ccmarket.git

# Navigate to the frontend directory
cd FrontEnd

# Install dependencies
bun install
# or
npm install

# Start the development server
bun run dev
# or
npm run dev
```

### Available Scripts

- `bun run dev` - Start development server with hot reload
- `bun run build` - Build for production
- `bun run preview` - Preview production build locally
- `bun run lint` - Run ESLint
- `bun run test` - Run tests
- `bun run test:watch` - Run tests in watch mode

## Project Structure

```
src/
├── components/       # Reusable UI components
├── pages/           # Page components
├── layouts/         # Layout wrappers
├── hooks/           # Custom React hooks
├── lib/             # Utility functions and helpers
└── test/            # Test files
```

## License

MIT

## Support

For support, please reach out to the CampusConnect team.
