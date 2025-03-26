# Installation Guide

## Prerequisites

- Node.js (> 20)
- npm or yarn or pnpm (prefer using pnpm)

## Tech Stack

**Core Framework:**

- React + TypeScript + Vite

**Styling & UI:**

- Tailwind CSS
- shadcn/ui
- Radix UI

**State & Form:**

- Redux Toolkit
- React Hook Form + Zod

**Development:**

- ESLint + Prettier
- pnpm (package manager)

## Project Structure (Vite + React + TypeScript)

```
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── constants/
│   ├── contexts/
│   ├── elements/
│   ├── hooks/
│   ├── lib/
│   ├── providers/
│   ├── services/
│   ├── stores/
│   ├── styles/
│   ├── utils/
│   ├── App.tsx
│   ├── main.tsx
│   └── vite-env.d.ts
├── index.html
├── components.json
├── package.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
└── README.md
```

## Project Setup

1. Create a `.env` file in the root directory:
   - Copy `.env.example` file to `.env`
   - Update the environment variables according to your setup

> ⚠️ **Environment Variables**
>
> The project requires the following environment variables:
>
> - `VITE_APP_API_PUBLIC_URL`: Your public API URL
> - `VITE_APP_API_BASE_URL`: Your base API URL
>
> Make sure to:
>
> - Never commit `.env` file to version control
> - Use different values for development and production environments
> - Create `.env.production` for production builds

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```
