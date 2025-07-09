# Devis

> A minimalist web app for creating estimates—without spreadsheets or paper.  
> **Live Demo**: [https://devis-by-obed.vercel.app/](https://devis-by-obed.vercel.app/)

## Screenshot

![Image 1](static/image-1.png)

## Features

✅ **Automatic calculations** – No math errors.  
📱 **Mobile-first design** – Works smoothly on phones.  
🌐 **Offline support** – Uses IndexedDB (data persists until browser cache is cleared).  
💱 **Multi-currency & language** – Supports English/French/Kinyarwanda.  
📄 **PDF exports** – Merge estimates, no branding.

## Tech Stack

- **Frontend**: SvelteKit (Svelte 5) + Vite
- **UI**: Pico CSS + FontAwesome
- **i18n**: Paraglide.js
- **Storage**: IndexedDB (`idb-keyval`)

## Getting Started

### Run Locally

```bash
git clone https://github.com/obed2025/devis.git
cd devis
npm install  # or `pnpm install` / `bun install` / `deno install`
npm run dev # or `deno task dev`
```

## License

MIT © 2025 NIYOMUGISHA Obed
