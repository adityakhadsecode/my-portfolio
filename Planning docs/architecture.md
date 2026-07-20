# Architecture — Aditya Khadse Portfolio

## 1. Stack Summary

| Layer | Choice | Notes |
|---|---|---|
| Framework | Next.js (App Router) | File-based routing not really exercised since it's a single scroll page, but App Router gives clean layout composition + route handlers for the contact API |
| Language | TypeScript | Strict mode on |
| Animation | GSAP (+ ScrollTrigger) | Timeline-based sequencing for the intro, scroll-triggered reveals per section |
| Component source | React Bits | Pull in and adapt individual components rather than importing a whole kit — keep bundle lean |
| Styling guardrail | tasteskill (antislop guidelines) | Applied as a review pass on generated UI, not a runtime dependency |
| Dev tooling | 21st dev MCP | Used inside Antigravity for component generation/iteration |
| IDE | Antigravity | — |
| Hosting | TBD (Vercel likely default) | See `prd.md` Open Questions |

## 2. High-Level Structure

```
app/
  layout.tsx              — root layout, wraps children in <Preloader>
  page.tsx                — the single scrolling page, composes all sections
  api/
    contact/route.ts       — POST handler for the contact form
    chatbot/route.ts        — POST handler for chatbot queries (stub until data source is decided)

components/
  intro/
    Preloader.tsx           — the black-screen intro sequence (client component)
    useIntroTimeline.ts      — GSAP timeline hook used by Preloader
  nav/
    NavBar.tsx
    AudioToggle.tsx
  sections/
    Hero.tsx
    About.tsx
    Work.tsx
    Gallery.tsx              — kept isolated so it's a clean cut if dropped
    Contact.tsx
  chatbot/
    ChatWidget.tsx           — floating button + panel
    useChat.ts

lib/
  gsap.ts                    — GSAP registration (ScrollTrigger plugin, defaults) — imported once
  motion-prefs.ts             — prefers-reduced-motion helper shared across components

styles/
  tokens.css                  — design tokens (color, type scale, spacing) as CSS variables
```

## 3. Section Composition Pattern
`app/page.tsx` composes sections top to bottom. Each section is its own component with its own internal GSAP context, so sections can be built, reviewed, and shipped independently — matching the incremental, per-viewport build approach in `phases.md`. No section should depend on another section's DOM or animation state; cross-section communication (e.g., nav active-link tracking) goes through ScrollTrigger callbacks or a small shared observer, not prop drilling.

## 4. Animation System

**Setup**
- `gsap` and `ScrollTrigger` registered once in `lib/gsap.ts`, imported wherever needed.
- Every component that drives animation uses `gsap.context()` scoped to a ref, cleaned up in the component's effect-cleanup — this is the standard pattern to avoid animation leaks across Next.js client-side navigations and React strict-mode double-invokes.
- A single shared `motion-prefs.ts` helper checks `prefers-reduced-motion` once and every timeline branches on it (either skipping straight to end-state or running a shortened, simplified version).

**Intro sequence (`Preloader.tsx`)**
- Owns its own GSAP timeline, independent of page-scroll ScrollTriggers (nothing below it should animate until it hands off).
- Renders as a fixed, full-viewport, top z-index overlay so the homepage can mount underneath it immediately — no artificial delay on the rest of the page's data/content loading.
- Background layer is the `LiquidEther-TS-TW` React Bits component (installed via shadcn CLI), configured with the 3 brand colors from `styles/tokens.css` rather than its defaults.
- On timeline complete, either unmounts itself or sets `pointer-events: none` + `visibility: hidden` after the circular reveal finishes, releases the scroll lock, and disposes the LiquidEther WebGL context (it's canvas-based — leaving it mounted after the intro wastes GPU budget the rest of the site could use).

**Scroll-triggered reveals (per section, later phases)**
- Each section's entrance animation is its own ScrollTrigger instance, `start`/`end` tuned per section rather than copy-pasted defaults.
- Prefer orchestrated, singular moments per section over scattered micro-animations — one clear reveal beats five small ones (per design principles in `design.md`).

## 5. API Layer
- `POST /api/contact` — validates payload server-side, sends via whatever transport is chosen later (Resend/Nodemailer/etc. — not yet decided), returns a typed JSON response the `Contact.tsx` form reads for success/error state.
- `POST /api/chatbot` — stubbed initially; shape of the request/response contract should be decided before `ChatWidget.tsx` is built so the frontend isn't reworked once the data source lands.

## 6. State Management
No global state library needed at this scope. Local component state + React context only where truly cross-cutting (e.g., a `ReducedMotionProvider` if the check needs to be shared broadly, or nav active-section state). Avoid introducing Zustand/Redux unless a real cross-section state need shows up.

## 7. Performance Considerations
- Code-split by section where sections are heavy (e.g., Gallery, if kept, or any WebGL/canvas work) using `next/dynamic`.
- Custom wordmark/signature typography loaded via `next/font` with proper `display: swap` / preload so the hero mark doesn't flash unstyled — this matters more than usual since the hero mark is the signature design element.
- Animation timelines built once and reused; avoid re-creating GSAP timelines on every render (guard with refs/`useLayoutEffect`).

## 8. Accessibility & Responsive Strategy
- Breakpoints considered explicitly for desktop / tablet / mobile — not just one fluid scale (per the project's stated build approach). This is a per-phase gate, not a final QA task: see the standing rule at the top of `phases.md`.
- Visible keyboard focus states on all interactive elements (nav links, CTA, chatbot toggle, contact form).
- `prefers-reduced-motion` respected at the timeline level, not just via CSS `transition` suppression — the intro sequence in particular needs an explicit reduced-motion branch since it's the very first thing rendered.

## 9. Deployment (pending decision)
Vercel is the path of least friction for a Next.js app with an API route (zero-config, edge-ready, preview deployments per branch) — flagged here as the likely default, not yet confirmed. Revisit once contact-form transport and chatbot backend are decided, since those may push toward needing serverless function duration/limits considerations.