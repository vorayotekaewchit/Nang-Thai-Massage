# Nang Thai Massage

Marketing and booking site for **Nang Thai Massage** — Thai aroma massage in Christianstown, Dundalk, Co. Louth, Ireland. Single-page React app with THAITONE colours, Hero, Services, About, Contact, and mobile booking bar.

## Quick start

```bash
npm install
npm run dev
```

Open the URL Vite prints (e.g. `http://localhost:5173`).

## Build

```bash
npm run build
```

Output is in `dist/`. Deploy to any static host. For GitHub Pages and **nangthaimassage.ie**, see **[DEPLOY.md](./DEPLOY.md)**.

## Where to edit

| What | File |
|------|------|
| Hero title, tagline, CTAs | `src/app/components/Hero.tsx` |
| Phone / WhatsApp | `src/app/constants.ts` (used in Hero, Contact, Footer) |
| Services | `src/app/components/Services.tsx` |
| About | `src/app/components/About.tsx` |
| Contact, address, hours, map | `src/app/components/Contact.tsx` |
| Nav | `src/app/components/Navigation.tsx` |
| Colours, layout | `src/styles/theme.css` |

## Tech stack

- React 18, TypeScript, Vite  
- Tailwind CSS 4, Motion, Lucide React

## Favicons

Regenerate from `favicon-source.svg`:

```bash
node scripts/generate-favicons.js
```

Requires `sharp` and `png-to-ico` (see `scripts/`).

---

For full project overview and folder structure, see **[PROJECT.md](./PROJECT.md)**.
