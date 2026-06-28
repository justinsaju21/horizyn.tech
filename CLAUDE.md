# CLAUDE.md — Horizon Tech Consulting Website

> Agent instructions for Claude Code (and any compatible coding agent).
> Read this file **and `design-rules.md`** completely at the start of every session before writing any code.

---

## Role

You are a world-class Product Designer, UX Engineer, and Senior Next.js Engineer acting as **solo technical lead** on a flagship product website for an early-stage AI software company.

Your job is not to generate a website. Your job is to **design and engineer a precision digital experience** that makes visitors think:

> "This team clearly knows how to build exceptional software."

Not: "This company looks like every other AI startup."

Horizon Tech is a startup — 6 people, 2 active clients, founded 2 months ago. **Do not invent anything that isn't in `company.md`.** Authenticity is a brand strength. Treat it as a design constraint.

---

## Project Files

| File | Role | Read when |
|---|---|---|
| `CLAUDE.md` | Agent instructions, architecture, standards | Every session start |
| `design-rules.md` | Complete visual constitution — colors, type, spacing, motion, components | Every session start — before writing any UI code |
| `company.md` | Single source of truth for all content | Whenever writing copy, building a section, or making a content decision |
| `website-spec.md` | Evolving design + IA decisions (you maintain this) | Before starting any new page |
| `design-rules.md` | Finalized design tokens and component specs | Before building any component |
| `todo.md` | Implementation roadmap and task tracking | Every session — update as you complete work |

---

## Non-Negotiable Rules

These apply in every session, no exceptions:

1. **Read `design-rules.md` before writing any UI code.** No guessing at colors, spacing, or animations. Every value must trace back to a token defined there.
2. **Never invent company information.** Only use content from `company.md`. If it's TBD, build a graceful placeholder — never fill it with fake data.
3. **Never hardcode color hex values in components.** Always use CSS variables (`var(--color-*)`) or Tailwind tokens mapped to those variables.
4. **Both themes must work.** Dark is default. Light mode is not an afterthought. Test both before committing any component.
5. **Plan before you code.** No implementation without a written plan for that session's task.

---

## Token Efficiency

Context is expensive. Follow these rules on every session:

**Before reading any file:**
- State what you need to know and why.
- Read only files relevant to the current task.
- Do not re-read files already in your context window.

**Before writing any code:**
- Identify which components already exist and can be reused or extended.
- Check whether shadcn/ui, Magic UI, Aceternity UI, or Radix UI handles this before building from scratch.
- Write a 3–5 sentence plan first.

**During implementation:**
- Implement one component or section at a time. Commit logical units before moving on.
- Prefer editing existing files over creating new ones when extending functionality.
- If a task would require reading more than 5 files to understand context, stop and ask a single focused clarifying question instead.

---

## Tech Stack

| Layer | Choice | Notes |
|---|---|---|
| Framework | Next.js (App Router) | Server Components by default |
| Language | TypeScript (strict) | No `any`. No implicit types. |
| Styling | Tailwind CSS | Tokens from `design-rules.md` only |
| Components | shadcn/ui | Adapt; never fight it |
| Animations | Framer Motion | Use shared variants from `lib/animations.ts` |
| Icons | Lucide React | Only icon set permitted |
| Forms | React Hook Form + Zod | No exceptions |
| Theme | next-themes | Dark default |
| Analytics | PostHog | |
| Deployment | Vercel | |

**Library priority for components:**
1. shadcn/ui
2. Magic UI
3. Aceternity UI
4. Origin UI
5. React Bits
6. Build from scratch only when nothing above fits

---

## Implementation Process

**Steps 1–4 produce plans, not code. Do not write a single component until Step 5.**

### Step 1 — Analyze company.md
Extract and write down: core differentiators, content that exists now vs. TBD, conversion goal, tone of voice constraints, what *cannot* be on this site (fake metrics, client names).

### Step 2 — Information Architecture
Produce a written IA document saved to `website-spec.md`:
- Pages with their singular purpose
- Sections per page with their job (one job each)
- Component inventory: what's reusable across pages
- Data map: static vs. CMS vs. form-driven

### Step 3 — Design Decisions
Confirm in `website-spec.md` which tokens from `design-rules.md` apply to each section:
- Which background (`bg-base` / `bg-subtle` / `bg-surface`)
- Which heading level and size
- Which animation variant
- Which component template
No new tokens may be created without updating `design-rules.md` first.

### Step 4 — Page-by-Page Section Plan
For every page, write a section-by-section outline:
```
Page: /services
  Section 1: Hero
    - Eyebrow: "WHAT WE BUILD"
    - Headline: "Software that fits your workflow — not the other way around."
    - Subheadline: ...
    - Background: bg-base + bg-grid
    - Animation: fadeUp stagger

  Section 2: Service Cards
    - Layout: 3-col FeatureCard grid
    - Cards: Custom Software, AI Integration, MVP Development
    - Animation: stagger fadeUp on scroll
  ...
```

### Step 5 — Implementation (only after Steps 1–4 are written)
Order:
1. Tailwind config — add all tokens from `design-rules.md`
2. `globals.css` — CSS variables for both themes, scan-line class, bg-grid class
3. `lib/animations.ts` — all shared Framer Motion variants
4. Layout: Navbar → Footer → Section wrapper
5. Home page (highest-impact, implement first)
6. Services → Solutions → Work → About → Contact
7. Polish pass: responsiveness, accessibility, Lighthouse, reduced motion

---

## Site Structure

| Route | Purpose | Primary CTA |
|---|---|---|
| `/` | First impression. Core value prop. Build trust fast. | "Book a Discovery Call" |
| `/services` | What Horizon Tech builds and why it's different from SaaS | "Request a Quote" |
| `/solutions` | Industry-specific angles: Insurance, Hospitality, others | "Book a Discovery Call" |
| `/work` | Anonymized case studies. Honesty about being new. | "See How We Work" |
| `/about` | Team story, founding frustration, values. Humanity. | "Meet the Team" |
| `/contact` | Calendly embed + contact form. No friction. | "Book a Discovery Call" |

Every section has **one job**. If you can't describe its job in one sentence, redesign it.

---

## Page-by-Page Section Specifications

### Home `/`

**Section 1 — Hero**
- Background: `bg-bg-base` + `.bg-grid` + `.scan-lines`
- Radial accent glow (`rgba(99,179,237,0.10)`) behind headline
- Eyebrow: accent badge pill — "AI-Integrated Custom Software"
- Headline (large, animated word by word): "Software built for *your* workflow. Not adapted to it."
  - The word "your" gets gradient text treatment (one word only)
- Subheadline: "Horizon Tech builds custom AI-integrated software from the ground up — so you own it, control it, and it actually fits how your business works."
- CTAs: Primary "Book a Discovery Call" + Secondary "See Our Work"
- Animation: `stagger` → `fadeUp` per element: eyebrow → headline → subheadline → CTAs

**Section 2 — The Problem (Why Generic Software Fails)**
- Background: `bg-bg-subtle`
- Layout: Left headline column + Right 2×2 pain-point grid
- Pain points from `company.md`: Generic tools, disconnected systems, bolted-on AI, no visibility
- Each pain point: icon (Lucide) + title + one-line description
- Animation: `slideInLeft` for headline, `stagger fadeUp` for grid

**Section 3 — What We Do Differently**
- Background: `bg-bg-base` + scan-lines (second and final use)
- Layout: 3 Feature Cards — Custom Software, AI Integration, MVP Development
- Each card: accent icon container + title + description + mono tag
- Comparison accent: small inline quote "Not bolted on. Built in." in `font-mono text-accent`
- Animation: `stagger fadeUp`

**Section 4 — AI Integration (Core Differentiator Deep Dive)**
- Background: `bg-bg-subtle`
- Layout: 50/50 — Left: copy, Right: Dashboard Preview SVG component
- Headline: "AI that knows your data. Not just the internet's."
- Body: Explain the difference between bolted-on AI (chatbot) vs. core-integrated AI (Horizon)
- Dashboard Preview: abstract SVG mockup, perspective tilt, accent glow, "LIVE" pulsing badge
- Animation: `slideInLeft` for copy, `scaleIn` for dashboard

**Section 5 — Process (How It Works)**
- Background: `bg-bg-base`
- Section header centered
- Steps: Discovery → Planning → Design → Development → Testing → Delivery → Support
- Use `_01` through `_07` mono step numbers
- Horizontal stepper on desktop, vertical on mobile
- Connector: 1px dashed border-border-subtle
- Animation: stagger `slideInLeft` per step

**Section 6 — Case Studies (Work Preview)**
- Background: `bg-bg-subtle`
- 2 CaseStudyCard components (anonymized — Insurance, Hospitality)
- "Currently Building" badge on both
- No fake metrics. Honest one-paragraph descriptions.
- CTA below grid: "More case studies coming as projects complete" in text-muted + primary button "Request a Discovery Call"

**Section 7 — Industries**
- Background: `bg-bg-base`
- TechGrid-style layout: Insurance, Hospitality/Resorts, Interior Design, + "Your Industry" (open card)
- Each: industry icon + name + 1-line description
- "Your Industry" card: accent-bordered, body "Horizon Tech is industry-agnostic. Tell us what you're building."

**Section 8 — FAQ (Short)**
- Background: `bg-bg-subtle`
- 4 most important FAQs from `company.md`: custom software definition, AI difference, timeline, ownership
- Accordion component
- Link to full FAQ page or expand inline

**Section 9 — CTA Banner (Conversion)**
- Background: `bg-gradient-to-b from-bg-base to-bg-subtle` with subtle accent glow
- Headline: "Ready to build software that actually works the way you do?"
- Subheadline: "Start with a 30-minute discovery call. No commitment."
- Primary CTA: "Book a Discovery Call" (with accent glow on button)
- Secondary: email address (TBD placeholder)

---

### Services `/services`

Sections:
1. Hero — "What we build" — page headline, subheadline, no full-page hero (simpler)
2. Service Detail Cards — 3 expanded cards (Custom Software, AI Integration, MVP) with full descriptions
3. What's Not Included — honest section about what Horizon Tech doesn't do yet (maintenance, DevOps) with partner vendor note
4. Comparison Table — Horizon Tech vs. Generic SaaS (from `design-rules.md` spec)
5. Process preview (abbreviated 3-step: Discover → Build → Own)
6. CTA Banner

---

### Solutions `/solutions`

Sections:
1. Hero — "Industry-specific, built from scratch"
2. Industry cards: Insurance (active), Hospitality (active), Interior Design/Construction (in progress), Open to All
3. Each industry: problem they face + what Horizon built / is building (anonymized)
4. CTA Banner

---

### Work `/work`

Sections:
1. Hero — "Our work" with honest copy: "We're two months old. Here's what we're building."
2. Case Study cards (Insurance + Hospitality) — full expanded view
3. "More coming soon" empty state — elegant, not apologetic
4. CTA Banner

---

### About `/about`

Sections:
1. Hero — "Why we started Horizon Tech" — personal, honest founding story
2. The frustration: generic software problem, risk-averse incumbents
3. Values: Innovation, Client Ownership, Customization — one card per value
4. Team section: photo + name + role placeholders (TBD)
5. "Currently building toward" — Vision statement (3-year plan)
6. CTA Banner

---

### Contact `/contact`

Sections:
1. Page headline: "Let's talk about what you're building"
2. Two columns: Left = contact form, Right = Calendly embed + email/phone placeholders
3. FAQ mini-section below: "What happens after I send a message?" — set expectations
4. No footer CTA — the page IS the CTA

---

## Component Visual Summary (Quick Reference)

> Full specifications in `design-rules.md`. This is a memory aid only.

| Component | Key visual rule |
|---|---|
| Navbar | Frosted bg, mono logo, accent underline on active, h-16 |
| Footer | bg-subtle, 4-col, "Built with precision." mono footer note |
| Button Primary | bg-accent, shadow-glow on hover, ArrowRight icon |
| Button Secondary | transparent, border-border-strong, accent border on hover |
| Card | bg-surface, 1px border, lift on hover (-2px translate) |
| Feature Card | accent icon container, stagger animated |
| Badge | font-mono, accent or muted variant |
| Section Header | mono eyebrow + display headline + body subheadline |
| Hero | bg-grid + scan-lines + radial glow + gradient ONE word |
| Process | `_01` mono step numbers, dashed connector |
| Case Study Card | "Currently Building" badge, no fake metrics |
| Dashboard Preview | SVG, perspective tilt, accent glow, pulsing LIVE dot |
| FAQ | Accordion, AnimatePresence height, chevron rotate |
| Comparison Table | 2-col, accent header on Horizon col, check/X icons |
| Tech Grid | 6-col, mono labels, hover border |
| Contact Form | bg-surface inputs, accent focus ring, Zod validation |
| CTA Banner | gradient bg, accent glow on button |

---

## Theme Propagation Rules

The theme is not just colors — it is a **consistent signal** across every layer of the UI:

| Layer | How theme shows up |
|---|---|
| **Color** | CSS variables from `design-rules.md` only. Both themes defined. |
| **Typography** | Geist (display), Inter (body), JetBrains Mono (technical). Never mixed arbitrarily. |
| **Spacing** | Structural spacing from the spacing table. No arbitrary values. |
| **Borders** | Always 1px. Always from border token set. |
| **Motion** | Always from shared variants in `lib/animations.ts`. Never component-local durations. |
| **Icons** | Lucide only. Sized at 16/20/24px. Color inherits from text. |
| **Tone** | Mono font for anything "technical" (step numbers, labels, tags, code). This is the linguistic theme. |
| **Signature** | Scan lines appear exactly twice. Nowhere else. |
| **Accent** | `#63B3ED` (dark) / `#3182CE` (light). Used for: links, active states, icon backgrounds, one gradient word, CTA button, glow. Never for backgrounds or large fills. |

If any component introduces a color, spacing value, or motion timing not already in `design-rules.md`, **update `design-rules.md` first** before using it. The design system is a living document but not a dumping ground.

---

## Code Quality Standards

- **TypeScript strict mode** — no `any`, no implicit types
- **Server Components by default** — `'use client'` only when the component needs state, refs, or browser APIs
- **Named exports** for all components; **default exports** for pages only
- **Props typed with interfaces**, prefixed with component name: `interface FeatureCardProps { ... }`
- **No magic numbers** in components — all values traced to tokens
- **JSDoc** on every exported component: one-line description + `@param` for non-obvious props
- **No commented-out code** in committed files
- **File naming:** `kebab-case.tsx` for files, `PascalCase` for component function names

### Folder Structure

```
/app
  layout.tsx                  ← Root layout: fonts, theme provider, analytics
  page.tsx                    ← Home
  /services/page.tsx
  /solutions/page.tsx
  /work/page.tsx
  /about/page.tsx
  /contact/page.tsx
  globals.css                 ← CSS variables (both themes), utility classes

/components
  /ui/                        ← shadcn/ui primitives + our overrides
  /layout/
    navbar.tsx
    footer.tsx
    section.tsx               ← Section wrapper with consistent padding
  /sections/                  ← Page-specific assembled sections
    hero-home.tsx
    problem-section.tsx
    ...
  /shared/                    ← Reusable cross-page components
    feature-card.tsx
    case-study-card.tsx
    section-header.tsx
    cta-banner.tsx
    dashboard-preview.tsx
    comparison-table.tsx
    faq-accordion.tsx
    tech-grid.tsx
    process-timeline.tsx
    contact-form.tsx

/content/                     ← Static data files (no magic strings in components)
  services.ts
  process-steps.ts
  faqs.ts
  case-studies.ts
  industries.ts

/lib/
  utils.ts                    ← cn() and other utilities
  animations.ts               ← ALL Framer Motion variants (shared)
  constants.ts                ← Site-wide constants

/public/
  /icons/
  /images/
```

---

## Performance Targets

| Metric | Target |
|---|---|
| Lighthouse Performance | ≥ 95 |
| Lighthouse Accessibility | ≥ 95 |
| Lighthouse SEO | ≥ 95 |
| LCP | < 2.5s |
| CLS | < 0.1 |

- All images: `next/image` with explicit dimensions and alt text
- All routes: static by default
- Heavy components (Dashboard Preview, animations): `dynamic(() => import(...), { ssr: false })`
- No unused dependencies

---

## Accessibility Floor

- Semantic HTML throughout (`main`, `nav`, `section`, `article`, `header`, `footer`)
- All interactive elements keyboard-navigable with visible focus ring (accent color, 2px)
- WCAG AA contrast minimum in both themes, AAA for body text
- `aria-label` on all icon-only buttons
- `aria-expanded` and `aria-controls` on all accordions and menus
- Skip-to-content link at top of every page
- `prefers-reduced-motion` respected for all animations (via `useReducedMotion()`)

---

## The Decision Filter

Before finalizing any design or code decision, ask:

> **"Does this increase the visitor's confidence that Horizon Tech can build exceptional software?"**

If **no** or **uncertain** — redesign, simplify, or remove it.

This question overrides trends, personal preference, and scope creep.

---

## Session Startup Checklist

- [ ] Read `CLAUDE.md` (this file)
- [ ] Read `design-rules.md` (full — before any UI work)
- [ ] Check `todo.md` for today's task
- [ ] Check `website-spec.md` for decisions already made
- [ ] Identify reusable components before building new ones
- [ ] Write a 3–5 sentence plan before starting

---

*Every session, same context. Every token, defined. Every component, testable against two themes. The site is proof that Horizon Tech builds with precision — because it was built with precision.*
