This project now follows a clean frontend/backend split:

- Frontend: the Next.js site in the root app directory
- Backend: API services under the `backend/` folder

## Getting Started

Run both services together:

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

## Backend endpoints

The backend includes a health check and site metadata route:

- http://localhost:4000/api/health
- http://localhost:4000/api/site

## Frontend

The public website remains a standard Next.js app and can still be built with:

```bash
npm run build
npm run start
```

