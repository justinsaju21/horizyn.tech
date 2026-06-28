# Horizon Tech Consulting — Website

The official website for Horizon Tech Consulting. Built with Next.js 16, Tailwind CSS v4, and Framer Motion.

---

## Prerequisites

| Requirement | Minimum version |
|---|---|
| Node.js | 20.9+ |
| npm | 10+ |

---

## Getting started

### 1. Clone the repository

```bash
git clone <repo-url>
cd horizyn-website
```

### 2. Install dependencies

The Next.js project lives in the `site/` subdirectory.

```bash
cd site
npm install
```

### 3. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Project structure

```
/                          ← Project root (reference docs + assets)
  CLAUDE.md                ← Agent instructions and architecture spec
  company.md               ← Single source of truth for all content
  design-rules.md          ← Visual constitution — colors, type, motion
  todo.md                  ← Implementation roadmap and remaining tasks
  HORIZYN - LOGO/          ← Logo assets (SVG, PNG variants)

/site                      ← Next.js application root
  /app                     ← App Router pages and layouts
    layout.tsx             ← Root layout: fonts, theme provider
    page.tsx               ← Home page
    /services/page.tsx
    /solutions/page.tsx
    /work/page.tsx
    /about/page.tsx
    /contact/page.tsx
    globals.css            ← CSS variables (both themes), utility classes

  /components
    /layout/               ← Navbar, Footer, Section wrapper, ThemeProvider
    /sections/             ← Page-specific assembled sections
    /shared/               ← Reusable components (cards, forms, timeline...)

  /content/                ← Static data (services, FAQs, case studies, etc.)
  /lib/                    ← Utilities, animation variants, constants
  /public/                 ← Logo images and static assets
```

---

## Available commands

All commands are run from the `site/` directory.

| Command | Description |
|---|---|
| `npm run dev` | Start development server at `http://localhost:3000` |
| `npm run build` | Build for production |
| `npm run start` | Start production server (requires build first) |
| `npm run lint` | Run ESLint |

---

## Tech stack

| Layer | Choice |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion |
| Icons | Lucide React |
| Forms | React Hook Form + Zod |
| Theme | next-themes (dark default) |

---

## Before going live

Several fields require real content from the founder. Open `site/lib/constants.ts` and fill in:

```ts
export const CONTACT_EMAIL = "your@email.com";   // currently a placeholder
export const CONTACT_PHONE = "+91 ...";           // currently empty
export const BOOKING_URL   = "https://calendly.com/...";  // currently "#contact"
```

See `todo.md` at the project root for the full pre-launch checklist.

---

## Theme

The site is dark by default. A light mode toggle is in the navbar. Both themes are fully defined — switch with the sun/moon icon in the top-right corner.

---

## License

© 2026 Horizon Tech Consulting. All rights reserved.
