# Horizon Tech Website — Implementation Roadmap

## Status Legend
- [x] Done
- [ ] Not started
- [~] In progress

---

## Phase 1 — Foundation (Done)
- [x] Next.js 16 project scaffolded (`/site`)
- [x] Tailwind CSS v4 configured with all design tokens
- [x] CSS variables for dark/light themes
- [x] `lib/animations.ts` — all shared Framer Motion variants
- [x] `lib/utils.ts` — cn() utility
- [x] `lib/constants.ts` — site-wide constants
- [x] Fonts: Geist (display), Inter (body), JetBrains Mono (mono)
- [x] Scan lines CSS, bg-grid CSS, gradient text utility

## Phase 2 — Layout (Done)
- [x] ThemeProvider (next-themes, dark default)
- [x] Navbar (frosted, scroll-aware, mobile drawer, theme toggle)
- [x] Footer (4-col, legal links, "Built with precision." mono tag)
- [x] Section wrapper

## Phase 3 — Shared Components (Done)
- [x] SectionHeader (eyebrow + headline + subheadline)
- [x] FeatureCard (icon container, tag, hover)
- [x] CaseStudyCard (badges, no fake metrics)
- [x] CtaBanner (gradient bg, glow CTA)
- [x] FaqAccordion (AnimatePresence height)
- [x] ProcessTimeline (7 steps, _01 mono numbers)
- [x] DashboardPreview (abstract SVG, perspective tilt, LIVE badge)
- [x] TechGrid (skeleton until data provided)
- [x] ComparisonTable (Horizon vs Generic SaaS)
- [x] ContactForm (Zod validation, loading state)

## Phase 4 — Content Data (Done)
- [x] content/services.ts
- [x] content/process-steps.ts
- [x] content/faqs.ts
- [x] content/case-studies.ts
- [x] content/industries.ts

## Phase 5 — Pages (Done)
- [x] `/` — Home (9 sections)
- [x] `/services` — Services detail + comparison table
- [x] `/solutions` — Industry-specific solutions
- [x] `/work` — Anonymized case studies + honest empty state
- [x] `/about` — Founding story, values, team placeholders, vision
- [x] `/contact` — Form + booking + FAQ
- [x] `/privacy` — Placeholder
- [x] `/terms` — Placeholder

---

## TODO — Before Production

### Content (founder to provide)
- [ ] Team member names, roles, photos (`/about` page)
- [ ] Contact email, phone number (`lib/constants.ts` → `CONTACT_EMAIL`, `CONTACT_PHONE`)
- [ ] Calendly booking URL (`lib/constants.ts` → `BOOKING_URL`)
- [ ] Tech stack used on projects (`content/` → add TechGrid data)
- [ ] Privacy Policy and Terms & Conditions content
- [ ] Domain name (for metadata `openGraph.url`)
- [ ] Social media links (`lib/constants.ts` → `SOCIAL_LINKS`)

### Technical
- [ ] Contact form backend — currently `onSubmit` is a no-op. Integrate with email service (Resend, Formspree, etc.)
- [ ] Replace mock form submission with real API route (`app/api/contact/route.ts`)
- [ ] Calendly embed on `/contact` page (replace placeholder)
- [ ] PostHog analytics integration in `app/layout.tsx`
- [ ] `next/image` optimization — set proper `sizes` props on logo
- [ ] Add `favicon.ico` with HORIZYN logo mark
- [ ] SEO: populate `openGraph.url` and `twitter.site` with real domain
- [ ] Lighthouse audit after production deploy

### Optional Enhancements
- [ ] Add testimonials section once real client feedback exists
- [ ] Full FAQ page (`/faq`) with all 8 questions
- [ ] Tech stack grid once team confirms which tools they use
- [ ] Stats section (when meaningful numbers exist)
