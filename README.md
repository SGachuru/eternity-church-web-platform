This project now runs as a small monorepo with separate frontend and backend services.

- Frontend: [frontend](frontend)
- Backend: [backend](backend)

## Getting Started

Run both together from the project root:

```bash
npm run dev
```

This starts:

- Frontend on http://localhost:3000
- Backend API on http://localhost:4000

## Individual services

```bash
npm run dev:frontend
npm run dev:backend
```

## Build and serve

```bash
npm run build
npm run start
```

## Backend routes

- http://localhost:4000/api/health
- http://localhost:4000/api/site

