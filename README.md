# Devis

> A minimalist web app for creating estimates—without spreadsheets or paper.  
> **Live Demo**: [https://devis-by-obed.vercel.app/](https://devis-by-obed.vercel.app/)

## Features

✅ **Automatic calculations** – No math errors.  
📱 **Mobile-first design** – Works smoothly on phones.  
🌐 **Offline support** – Uses IndexedDB (data persists until browser cache is cleared).  
💱 **Multi-currency & language** – Supports English/French/Kinyarwanda.  
📄 **PDF exports** – Merge estimates, no branding.  
🔐 **Authentication** - Optional.

## Tech Stack

- **Frontend**: SvelteKit (Svelte 5)
- **UI**: Pico CSS + FontAwesome
- **i18n**: Paraglide.js
- **Storage**: IndexedDB (`idb-keyval`) + MongoDB
- **Auth**: Better Auth

## Getting Started

### Run Locally

```bash
git clone https://github.com/obed2025/devis.git
cd devis
npm install  # or `pnpm install` / `bun install` / `deno install`
npm run dev # or `deno task dev`
```

**Note**: Remember to create .env file with the following variables:

- BETTER_AUTH_SECRET
- BETTER_AUTH_URL = http://localhost:5173
- MONGODB_CONNECTION_STRING
- GOOGLE_CLIENT_ID
- GOOGLE_CLIENT_SECRET

## License

MIT © 2025 NIYOMUGISHA Obed
