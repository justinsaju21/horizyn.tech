# design-rules.md — Horizon Tech Visual Constitution

> This file is the single source of visual truth for the Horizon Tech website.
> Every color, size, weight, radius, shadow, and animation must come from this file.
> No ad-hoc values. No "close enough." Every pixel must be a deliberate decision.

---

## Theme Personality

Horizon Tech is a **precision engineering company that happens to build software.** The brand is:

- Confident without being loud
- Technical without being cold
- Modern without being trendy
- Premium without being corporate

The visual reference is **scientific instrumentation meets premium developer tooling** — think the aesthetic of a high-end oscilloscope interface crossed with a Vercel dashboard. Monochrome, exact, purposeful. The site should feel like it was made by the same people who build the software.

**The Signature Element:** A recurring motif of **thin horizontal scan lines** (1px, low opacity) layered on hero backgrounds — evoking both technical precision (oscilloscope/radar) and the idea of software "reading" data. Used in the hero and one other section maximum. Not overused. This is the one bold choice; everything else is disciplined.

---

## Theme System

The site is **dark-first**. Both themes must be equally polished — not light mode as an afterthought.

### Dark Theme (default)

```css
/* Backgrounds — layered depth */
--color-bg-base:       #0A0A0B;  /* Page background. Near-absolute black with a hint of cool */
--color-bg-surface:    #111113;  /* Cards, panels, elevated containers */
--color-bg-elevated:   #1A1A1E;  /* Modals, dropdowns, tooltips */
--color-bg-subtle:     #16161A;  /* Alternating section background */

/* Borders */
--color-border-default: rgba(255, 255, 255, 0.07);  /* Standard card/section border */
--color-border-subtle:  rgba(255, 255, 255, 0.04);  /* Hairline dividers */
--color-border-strong:  rgba(255, 255, 255, 0.14);  /* Hover states, active borders */
--color-border-accent:  rgba(99, 179, 237, 0.30);   /* Accent-tinted border on focus/feature cards */

/* Text */
--color-text-primary:   #F0F0F2;  /* Headlines, primary body */
--color-text-secondary: #9B9BA8;  /* Subtitles, descriptors */
--color-text-muted:     #5C5C6B;  /* Captions, timestamps, labels */
--color-text-inverted:  #0A0A0B;  /* Text on accent backgrounds */

/* Accent — Electric Cerulean */
--color-accent:         #63B3ED;  /* Primary accent: links, highlights, CTAs */
--color-accent-dim:     rgba(99, 179, 237, 0.12);   /* Accent background tint */
--color-accent-glow:    rgba(99, 179, 237, 0.20);   /* Hover glow, spotlight */

/* Semantic */
--color-success:        #4ADE80;
--color-warning:        #FACC15;
--color-error:          #F87171;
```

### Light Theme

```css
/* Backgrounds */
--color-bg-base:       #FAFAFA;
--color-bg-surface:    #FFFFFF;
--color-bg-elevated:   #F4F4F6;
--color-bg-subtle:     #F0F0F3;

/* Borders */
--color-border-default: rgba(0, 0, 0, 0.08);
--color-border-subtle:  rgba(0, 0, 0, 0.04);
--color-border-strong:  rgba(0, 0, 0, 0.16);
--color-border-accent:  rgba(49, 130, 206, 0.30);

/* Text */
--color-text-primary:   #0F0F10;
--color-text-secondary: #52526A;
--color-text-muted:     #9090A0;
--color-text-inverted:  #FFFFFF;

/* Accent — same hue, slightly deeper for contrast on light */
--color-accent:         #3182CE;
--color-accent-dim:     rgba(49, 130, 206, 0.10);
--color-accent-glow:    rgba(49, 130, 206, 0.18);
```

### Tailwind Config Mapping

```js
// tailwind.config.ts — extend with these
colors: {
  bg: {
    base:     'var(--color-bg-base)',
    surface:  'var(--color-bg-surface)',
    elevated: 'var(--color-bg-elevated)',
    subtle:   'var(--color-bg-subtle)',
  },
  border: {
    DEFAULT: 'var(--color-border-default)',
    subtle:  'var(--color-border-subtle)',
    strong:  'var(--color-border-strong)',
    accent:  'var(--color-border-accent)',
  },
  text: {
    primary:   'var(--color-text-primary)',
    secondary: 'var(--color-text-secondary)',
    muted:     'var(--color-text-muted)',
    inverted:  'var(--color-text-inverted)',
  },
  accent: {
    DEFAULT: 'var(--color-accent)',
    dim:     'var(--color-accent-dim)',
    glow:    'var(--color-accent-glow)',
  },
}
```

---

## Typography

### Typefaces

| Role | Font | Notes |
|---|---|---|
| **Display** | `Geist` (variable) | Headlines, hero text. Tight tracking, confident weight. Loaded via `next/font/google`. |
| **Body** | `Inter` (variable) | All body text, UI, navigation. The industry standard for good reason — don't fight it. |
| **Mono** | `JetBrains Mono` | Code snippets, technical labels, process step numbers, status badges. |

> Geist pairs with Inter to signal: "we think in products." The mono face in non-code contexts (e.g. step numbers like `_01`, tech labels like `NEXT.JS`) is the visual hook that says "engineers made this."

### Type Scale

```css
/* All sizes in rem. Base: 16px */

--text-xs:   0.75rem;   /* 12px — captions, timestamps */
--text-sm:   0.875rem;  /* 14px — secondary labels, nav items */
--text-base: 1rem;      /* 16px — body text */
--text-lg:   1.125rem;  /* 18px — lead paragraph, card descriptions */
--text-xl:   1.25rem;   /* 20px — section subheadlines */
--text-2xl:  1.5rem;    /* 24px — card titles, small headings */
--text-3xl:  1.875rem;  /* 30px — H3 */
--text-4xl:  2.25rem;   /* 36px — H2 */
--text-5xl:  3rem;      /* 48px — H1 on inner pages */
--text-6xl:  3.75rem;   /* 60px — Hero headline on desktop */
--text-7xl:  4.5rem;    /* 72px — Hero headline maximum, large screens */
```

### Weight System

```css
--weight-regular: 400;
--weight-medium:  500;
--weight-semibold: 600;
--weight-bold:    700;
```

### Tracking (Letter Spacing)

```css
--tracking-tight:  -0.04em;  /* Large headlines (6xl, 7xl) */
--tracking-snug:   -0.02em;  /* H2, H3 */
--tracking-normal:  0em;     /* Body text */
--tracking-wide:    0.06em;  /* Eyebrow labels, ALL CAPS tags */
--tracking-widest:  0.12em;  /* Mono technical labels */
```

### Line Height

```css
--leading-none:    1;     /* Large hero display text only */
--leading-tight:   1.2;   /* H1, H2 */
--leading-snug:    1.35;  /* H3, card titles */
--leading-normal:  1.5;   /* Body, descriptions */
--leading-relaxed: 1.65;  /* Long-form prose, FAQ answers */
```

### Typography Rules

- **Eyebrow labels** (section identifiers above headlines): `font-mono text-xs tracking-widest text-accent uppercase` — example: `SERVICES`, `HOW IT WORKS`, `BUILT DIFFERENT`
- **Hero headline**: `font-display text-6xl font-bold tracking-tight leading-tight text-text-primary` on desktop; `text-4xl` on mobile
- **H2 section headline**: `font-display text-4xl font-semibold tracking-snug`
- **H3 card headline**: `font-display text-2xl font-semibold tracking-snug`
- **Body paragraph**: `font-sans text-base leading-normal text-text-secondary`
- **Lead paragraph** (first paragraph of a section): `font-sans text-lg leading-normal text-text-primary`
- **Caption**: `font-sans text-xs text-text-muted`
- **Code / tech label**: `font-mono text-sm text-accent`

---

## Spacing System

Use Tailwind's default spacing scale. Key structural values:

```
Section vertical padding:   py-24 md:py-32 lg:py-40
Section inner max-width:    max-w-7xl mx-auto px-6 md:px-8 lg:px-12
Content max-width (prose):  max-w-2xl
Card padding:               p-6 md:p-8
Card gap in grid:           gap-4 md:gap-6
Section headline gap:       mb-4 (eyebrow → headline), mb-6 (headline → subheadline), mb-16 (subheadline → content)
Navbar height:              h-16
Footer padding:             py-16
```

### Vertical Rhythm Rule

Every section must have its own `py-*`. Never rely on margin from sibling sections. Sections that alternate background (`bg-bg-base` / `bg-bg-subtle`) provide natural visual breathing room without extra spacing tricks.

---

## Border & Radius System

```css
--radius-sm:   4px;   /* Badges, small chips */
--radius-md:   8px;   /* Cards, inputs, buttons */
--radius-lg:   12px;  /* Feature cards, panels */
--radius-xl:   16px;  /* Hero inset cards, product preview frames */
--radius-full: 9999px; /* Pill badges, avatar rings */
```

**Tailwind config:**
```js
borderRadius: {
  sm:   '4px',
  DEFAULT: '8px',
  md:   '8px',
  lg:   '12px',
  xl:   '16px',
  full: '9999px',
}
```

### Border Rules

- Standard card: `border border-border rounded-lg`
- Hover card: `border-border-strong` (transition on hover)
- Feature/hero card: `border border-border-accent rounded-xl` with `bg-accent-dim` background
- Section dividers: `border-t border-border-subtle`
- Never use `border-2` or `border-4` — always `border` (1px)

---

## Shadow System

Shadows are used sparingly. Never drop-shadow for decoration.

```css
--shadow-card:   0 1px 3px rgba(0,0,0,0.3), 0 1px 2px rgba(0,0,0,0.2);
--shadow-raised: 0 4px 16px rgba(0,0,0,0.4), 0 1px 4px rgba(0,0,0,0.3);
--shadow-glow:   0 0 24px var(--color-accent-glow);  /* Accent glow on hero CTA only */
```

In Tailwind:
```js
boxShadow: {
  card:   '0 1px 3px rgba(0,0,0,0.3), 0 1px 2px rgba(0,0,0,0.2)',
  raised: '0 4px 16px rgba(0,0,0,0.4), 0 1px 4px rgba(0,0,0,0.3)',
  glow:   '0 0 24px var(--color-accent-glow)',
}
```

---

## Motion System

All animation values are defined here. No inline Framer Motion magic numbers.

### Durations

```ts
// lib/animations.ts
export const duration = {
  instant:  0.08,
  fast:     0.15,
  normal:   0.25,
  slow:     0.40,
  verySlow: 0.70,
}
```

### Easings

```ts
export const ease = {
  out:       [0.0, 0.0, 0.2, 1.0],   // Default for entrances
  in:        [0.4, 0.0, 1.0, 1.0],   // Exits only
  inOut:     [0.4, 0.0, 0.2, 1.0],   // State changes
  spring:    { type: 'spring', stiffness: 300, damping: 30 },
  springGentle: { type: 'spring', stiffness: 120, damping: 20 },
}
```

### Shared Variants (use these everywhere — no custom variants per-component)

```ts
export const fadeUp = {
  hidden:  { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: duration.normal, ease: ease.out } },
}

export const fadeIn = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: duration.normal, ease: ease.out } },
}

export const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
}

export const staggerSlow = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}

export const scaleIn = {
  hidden:  { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1, transition: { duration: duration.normal, ease: ease.out } },
}

export const slideInLeft = {
  hidden:  { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: duration.slow, ease: ease.out } },
}
```

### Hover Interactions

```ts
export const hoverCard = {
  rest:  { scale: 1, borderColor: 'var(--color-border-default)' },
  hover: { scale: 1.015, borderColor: 'var(--color-border-strong)',
           transition: { duration: duration.fast, ease: ease.out } },
}

export const hoverButton = {
  rest:  { scale: 1 },
  hover: { scale: 1.02, transition: { duration: duration.fast } },
  tap:   { scale: 0.98, transition: { duration: duration.instant } },
}
```

### Scroll Trigger Rule

All section content uses `whileInView` with `viewport={{ once: true, margin: '-80px' }}`. Content enters **once** — it does not re-animate on scroll up.

### Reduced Motion

```ts
// Wrap ALL motion components with this check
import { useReducedMotion } from 'framer-motion'

const shouldReduce = useReducedMotion()
const variants = shouldReduce ? {} : fadeUp
```

### What Gets Animated vs. What Doesn't

| Element | Animation |
|---|---|
| Hero headline | `fadeUp` + `stagger` per word group |
| Hero subheadline | `fadeUp` with 0.15s delay after headline |
| Hero CTA buttons | `fadeUp` with 0.25s delay |
| Section eyebrow | `fadeIn` on scroll enter |
| Section headline | `fadeUp` on scroll enter |
| Feature cards | `stagger` + `fadeUp` as group |
| Process steps | `slideInLeft` staggered by 0.12s |
| FAQ accordion | Framer Motion `AnimatePresence` height expand |
| Navbar | `fadeIn` on mount (0.3s) |
| Page transitions | `fadeIn` / `fadeOut` on route change |
| Scan line signature | CSS animation (`opacity` pulse 4s infinite, very subtle) |
| Background grid | Static — no animation |
| Testimonial/case study cards | `scaleIn` on scroll enter |
| **Stats / numbers** | `count-up` only if real numbers exist |
| **Decorative elements** | No animation — ever |

---

## The Scan Line Signature

The single bold visual element that makes this site distinctly Horizon Tech.

```css
/* Applied as a pseudo-element on the hero section */
.scan-lines::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: repeating-linear-gradient(
    0deg,
    transparent,
    transparent 3px,
    rgba(255, 255, 255, 0.015) 3px,
    rgba(255, 255, 255, 0.015) 4px
  );
  pointer-events: none;
  z-index: 1;
}
```

Used on: Hero section background, and once on the "AI Integration" feature section.
**Maximum two uses across the entire site.**

---

## Background Grid

Subtle dot grid behind the hero — adds technical depth without noise.

```css
.bg-grid {
  background-image: radial-gradient(
    circle, rgba(255,255,255,0.04) 1px, transparent 1px
  );
  background-size: 32px 32px;
}
```

Fades out at the bottom using:
```css
mask-image: linear-gradient(to bottom, black 0%, transparent 100%);
-webkit-mask-image: linear-gradient(to bottom, black 0%, transparent 100%);
```

---

## Gradient Usage Rules

**Rule: Gradients are structural, not decorative.**

Permitted uses:
1. **Radial glow behind hero headline** — `radial-gradient(ellipse 60% 40% at 50% 0%, rgba(99,179,237,0.10) 0%, transparent 70%)`
2. **Text gradient on one hero keyword** — single word in the main headline gets `bg-gradient-to-r from-accent to-[#90CDF4] bg-clip-text text-transparent`
3. **Bottom fade on background grid** (mask-image, described above)
4. **CTA section background** — `bg-gradient-to-b from-bg-base to-bg-subtle`

**Forbidden:**
- Gradient cards
- Gradient borders on more than 2 components
- Rainbow / multi-color gradients
- Gradient hero backgrounds (use solid + glow instead)
- Gradient text on more than ONE word per page

---

## Component Visual Specifications

### Navbar

```
Height:        h-16 (64px)
Background:    bg-bg-base/80 backdrop-blur-md (with border-b border-border-subtle)
Logo:          Left-aligned. Font-mono, text-sm, tracking-widest, text-text-primary
               Format: "HORIZON" in semibold + "TECH" in text-text-muted weight-normal
Nav links:     text-sm text-text-secondary hover:text-text-primary transition-colors
               Active link: text-text-primary with accent underline (2px, accent color)
CTA button:    "Book a Call" — primary button (see Button spec below)
Mobile:        Hamburger → full-screen drawer with same links + CTA
Scroll state:  On scroll > 20px: border-b becomes border-border-default (slightly more visible)
```

### Footer

```
Background:    bg-bg-subtle border-t border-border-subtle
Padding:       py-16
Layout:        4-column on desktop, 2-column on tablet, stacked on mobile
Col 1:         Logo + one-line pitch + (future) social icons
Col 2:         Pages (Home, Services, Solutions, Work, About)
Col 3:         Company (About, Contact, Book a Call)
Col 4:         Legal (Privacy Policy, Terms & Conditions)
Bottom row:    border-t border-border-subtle pt-8 mt-8
               Left: "© 2026 Horizon Tech Consulting. All rights reserved."
               Right: "Built with precision." in text-muted font-mono text-xs
```

### Button

```
Primary:
  bg:          bg-accent text-text-inverted
  hover:       brightness-110 shadow-glow (subtle)
  size:        px-6 py-3 text-sm font-medium rounded-md
  icon:        optional trailing arrow icon (ArrowRight, 16px)

Secondary:
  bg:          bg-transparent border border-border-strong text-text-primary
  hover:       bg-bg-surface border-border-accent
  size:        same as primary

Ghost:
  bg:          transparent text-text-secondary
  hover:       text-text-primary
  size:        same, no border

Icon Button:
  size:        h-9 w-9 rounded-md
  bg:          bg-bg-surface border border-border-default
  hover:       border-border-strong
```

### Card (base)

```
Background:    bg-bg-surface
Border:        border border-border rounded-lg
Padding:       p-6 md:p-8
Hover:         border-border-strong (transition 150ms) + translate-y-[-2px] (subtle lift)
Shadow:        none by default; shadow-card on hover
```

### Feature Card

```
Extends Card base +
  Icon container: w-10 h-10 rounded-md bg-accent-dim flex items-center justify-center
                  Icon: text-accent, 20px
  Title:          text-xl font-semibold text-text-primary mt-4 mb-2
  Description:    text-base text-text-secondary leading-normal
  Optional tag:   top-right badge (see Badge spec)
```

### Badge

```
Default:       bg-bg-elevated border border-border text-text-muted text-xs font-mono px-2.5 py-1 rounded-sm tracking-wide
Accent:        bg-accent-dim border border-border-accent text-accent (same sizing)
Success:       bg-[#4ADE80]/10 border border-[#4ADE80]/20 text-[#4ADE80]
```

### Section Header

```
Layout:        text-center for standalone sections; text-left for two-column layouts
Eyebrow:       font-mono text-xs tracking-widest text-accent uppercase mb-3
Headline:      font-display text-4xl font-semibold tracking-snug text-text-primary mb-4
Subheadline:   text-lg text-text-secondary leading-normal max-w-2xl (centered: mx-auto)
Bottom gap:    mb-16 before section content begins
```

### Hero (Home Page)

```
Background:    bg-bg-base with .bg-grid and .scan-lines pseudo-elements
               Radial accent glow behind headline text
Layout:        Centered, py-32 md:py-40
Eyebrow:       Badge-style pill: "AI-Integrated Custom Software" — accent badge
Headline:      text-6xl md:text-7xl font-bold tracking-tight leading-tight
               One keyword wrapped in gradient text span
Subheadline:   text-xl text-text-secondary max-w-2xl mx-auto mt-6
CTA Row:       mt-10 flex gap-4 justify-center
               Primary: "Book a Discovery Call" + ArrowRight
               Secondary: "See Our Work"
Scroll hint:   Animated chevron-down at bottom, fades out on scroll
```

### Process / Timeline

```
Layout:        Vertical on mobile; horizontal stepper on desktop (5 steps max before vertical)
Step number:   font-mono text-sm text-accent — format: "_01", "_02", "_03"
               (underscore prefix — engineering aesthetic, like a variable name)
Connector:     1px dashed line, border-border-subtle (horizontal on desktop, vertical on mobile)
Step title:    text-xl font-semibold text-text-primary
Step body:     text-base text-text-secondary
Active state:  For interactive timeline: accent border-left + bg-accent-dim on active step
```

### Case Study Card

```
Extends Card +
  Top tag:        Industry badge (accent) + status badge (e.g. "Currently Building")
  Title:          text-2xl font-semibold
  Description:    text-base text-text-secondary
  Tech tags:      Row of mono badges (text-xs font-mono)
  Bottom:         border-t border-border-subtle pt-4 mt-4
                  "View Details →" in text-sm text-accent (only when case study page exists)
```

### FAQ Accordion

```
Container:     divide-y divide-border max-w-2xl mx-auto
Item trigger:  py-5 flex justify-between items-center cursor-pointer
               text-base font-medium text-text-primary
               ChevronDown icon: text-text-muted, rotates 180° on open (Framer AnimatePresence)
Item content:  text-base text-text-secondary leading-relaxed pb-5
               Animated height with overflow-hidden (Framer motion layout)
```

### Comparison Table (Horizon Tech vs. Generic SaaS)

```
Layout:        2 columns: "Generic Software" | "Horizon Tech"
Header row:    bg-bg-subtle; Horizon Tech column has accent-tinted header bg-accent-dim
               + "Recommended" badge
Row items:     py-4 px-6 border-b border-border-subtle text-sm
               Generic col: text-text-muted + X icon (text-error)
               Horizon col: text-text-primary + Check icon (text-success)
Mobile:        Stacked cards (Generic card, then Horizon card)
```

### Technology Grid

```
Layout:        6-col grid on desktop, 3-col on tablet, 2-col on mobile
Item:          bg-bg-surface border border-border rounded-md p-4
               Centered: logo/icon (24px) + text-sm font-mono text-text-muted label below
Hover:         border-border-strong + text-text-primary
               No animation — just color transition (150ms)
```

### Contact Form

```
Fields:        Name, Company (optional), Email, Project Description (textarea), Budget range (select)
Label:         text-sm font-medium text-text-secondary mb-1.5
Input:         bg-bg-surface border border-border rounded-md px-4 py-3 text-text-primary
               placeholder:text-text-muted
               focus:ring-1 focus:ring-accent focus:border-accent (outline: none)
               transition-colors 150ms
Error state:   border-error text-error (label + message)
Submit:        Full-width primary button "Send Message"
               Loading state: spinner icon replaces ArrowRight, button disabled
```

### Dashboard Preview (abstract UI mockup)

```
Purpose:       Abstract SVG representation of a software dashboard — no real data
Style:         Dark panel (bg-bg-elevated), thin borders, grid of mock charts/tables
               Accent-colored sparklines and status indicators
               "LIVE" badge with pulsing dot (accent color, CSS animation)
Scale:         Rendered at ~800px wide, displayed at ~600px, slight perspective tilt
               (transform: perspective(1000px) rotateX(8deg) rotateY(-4deg))
Border:        border border-border-accent rounded-xl overflow-hidden
Glow:          box-shadow: 0 20px 80px rgba(99,179,237,0.15)
Animation:     Entrance: scaleIn + slight translateY on scroll enter
               Idle: none — static is more trustworthy than fake-animated data
```

---

## Layout Grid

```
Max content width:  1280px (max-w-7xl)
Page gutter:        px-6 (mobile), px-8 (md), px-12 (lg)
Column grid:        12-column CSS grid for complex layouts
Standard sections:  Single-column centered (prose/headline sections)
Feature grids:      2-col (tablet), 3-col (desktop), 1-col (mobile)
Two-column splits:  60/40 or 50/50 depending on content weight
```

---

## Icon Rules

- All icons from **Lucide React** only. No mixing icon sets.
- Size: `16px` inline, `20px` feature icons, `24px` nav/standalone
- Color: inherit from parent text color (do not hardcode icon colors)
- Icon-only buttons must have `aria-label`
- Decorative icons: `aria-hidden="true"`

---

## Forbidden Patterns

The following are explicitly banned. If you find one in the codebase, remove it.

| Pattern | Why |
|---|---|
| `glassmorphism` (backdrop-blur on colored surface) | Overused, feels 2021 |
| `border-2` or thicker | Too heavy for the precision aesthetic |
| Multiple gradient directions on one page | Visual noise |
| Drop shadows on text (`text-shadow`) | Never |
| Animated background gradients (shifting colors) | Flashy, not premium |
| Fake testimonials or fake metrics | Brand integrity violation |
| Stock photography | Off-brand |
| Emoji in UI (outside copywriting) | Unprofessional in this context |
| `!important` in CSS | Structural failure |
| Inline style attributes (outside dynamic values) | Unmaintainable |
| `rounded-full` on cards or large containers | Too bubbly for the brand |
| `text-white` directly (use `text-text-primary`) | Breaks light mode |
| Hardcoded hex values outside `design-rules.md` | Breaks theme system |
| `overflow-x: hidden` on body/html | Breaks position:sticky |
| Z-index > 50 without a comment explaining why | Creates stacking context bugs |

---

## Theme Application Checklist

Before shipping any component:

- [ ] All colors reference CSS variables, not hardcoded hex
- [ ] Both dark and light themes render correctly
- [ ] Text meets WCAG AA contrast in both themes
- [ ] All interactive states (hover, focus, active, disabled) are defined
- [ ] Reduced motion variant is implemented
- [ ] Component renders correctly at 375px, 768px, 1280px, 1440px
- [ ] No forbidden patterns present
- [ ] Animations use shared variants from `lib/animations.ts`
- [ ] All font sizes use the defined scale (no arbitrary Tailwind values like `text-[17px]`)

---

*Every visual decision on this site should reinforce one thing: Horizon Tech is an engineering-first company that executes with precision. The design itself is proof of that claim.*
