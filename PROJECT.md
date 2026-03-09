# Nang Thai Massage — Project Overview

A marketing and booking-focused site for **Nang Thai Massage**, a Thai aroma massage studio in **Christianstown, Readypenny, Dundalk, Co. Louth, Ireland**. Single-page React app: Hero, Services, About, Contact, Footer.

---

## What’s in the repo

| Part | Purpose |
|------|--------|
| **React app** (`src/`, `index.html`, Vite) | Single-page site. Run with `npm run dev`. |
| **Favicons** (root) | Favicon package (16×16, 32×32, 180×180, `.ico`) — gold “NTM” on emerald. |

---

## React app

- **Stack:** React 18, TypeScript, Vite, Tailwind CSS 4, Motion (animations), Lucide React (icons).
- **Design:** THAITONE colour palette (เขียวตอง, จำปา, ดินแดง, ขาวผ่อง). Grid-based sections, rounded corners, mobile-first.
- **Sections:**
  - **Hero** — Full-viewport image, headline, “Call to Book” / “WhatsApp to Book” CTAs.
  - **Services** — Three cards: Aroma Oil, Traditional Thai, Deep Relaxation (with prices).
  - **About** — Story, optional image.
  - **Contact** — Address (A91 W582), hours, phone, Google Maps embed.
  - **Footer** — Brand, links, copyright.
  - **BookingBar** (mobile) — Sticky Call / WhatsApp CTAs.

### Run the app

```bash
npm install
npm run dev
```

Then open the URL Vite prints (e.g. `http://localhost:5173`).

### Build for production

```bash
npm run build
```

Output goes to `dist/`. Serve that folder with any static host (e.g. GitHub Pages, nangthaimassage.ie).

### Where to edit

| What | File |
|------|------|
| Hero title, tagline, CTA | `src/app/components/Hero.tsx` |
| Phone number | `src/app/constants.ts`; used in Hero, Contact, Footer |
| Services (titles, descriptions, prices) | `src/app/components/Services.tsx` |
| About text | `src/app/components/About.tsx` |
| Address, hours, map | `src/app/components/Contact.tsx` |
| Nav logo & links | `src/app/components/Navigation.tsx` |
| Global styles, colours, grid | `src/styles/theme.css` |

---

## Favicon package

- **Files (project root):** `favicon-16x16.png`, `favicon-32x32.png`, `apple-touch-icon.png`, `favicon.ico`
- **Design:** Gold “NTM” on emerald background.
- **Source:** `favicon-source.svg`. Regenerate PNGs and ICO with:

```bash
node scripts/generate-favicons.js
```

Requires: `npm install sharp png-to-ico` (or already in the project).

---

## Folder structure (simplified)

```
Nang-Thai-Massage/
├── index.html              # React app entry
├── src/
│   ├── main.tsx
│   ├── app/
│   │   ├── App.tsx
│   │   ├── constants.ts
│   │   └── components/     # Hero, Navigation, Services, About, Contact, Footer, BookingBar
│   └── styles/             # theme.css, tailwind, index.css
├── scripts/
│   └── generate-favicons.js
├── favicon-source.svg
├── favicon-16x16.png
├── favicon-32x32.png
├── favicon.ico
├── apple-touch-icon.png
├── package.json
├── vite.config.ts
└── README.md
```

---

## Summary

- **React app:** Run with `npm run dev`, build with `npm run build`. Deploy `dist/` to any static host or GitHub Pages. For GitHub Pages and custom domain (nangthaimassage.ie), see **DEPLOY.md**.
