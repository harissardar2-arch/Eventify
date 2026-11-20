# Eventify deployment

This project is prepared for a separate frontend (Vercel) and backend (Render) deployment.

## 1. Deploy backend on Render
- Push this project to a GitHub repository.
- In Render, create a new **Web Service** and connect the repository.
- Set Root Directory to `backend`.
- Build Command: `npm install`
- Start Command: `npm start`
- Deploy. Copy the Render service URL (for example `https://eventify-api.onrender.com`).

## 2. Deploy frontend on Vercel
- In Vercel, import the same GitHub repository.
- Set Root Directory to `frontend`.
- Framework preset: Vite.
- Build Command: `npm run build`
- Output Directory: `dist`
- Add Environment Variable: `VITE_API_URL` = the Render backend URL (without a trailing slash).
- Deploy. The Vercel URL is the public Eventify website link.

The backend listens on the hosting platform's `PORT` environment variable. The frontend uses `VITE_API_URL` for the events API and falls back to localhost for local development.

## Current project limitations
- Login and signup are frontend demonstrations only; there is no authentication service or user database yet.
- Ticket bookings are frontend state only and are not stored persistently.
- The `database` folder is currently empty.
