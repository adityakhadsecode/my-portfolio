# Phases — Aditya Khadse Portfolio

Built incrementally, one viewport section at a time, reviewed before moving on. Each phase lists its goal, what ships, and what "done" means.

**Standing rule — responsive ships with every phase, not at the end:** desktop, tablet, and mobile are built and checked together within each phase below. A phase isn't done if it only works on one breakpoint and "will be fixed for mobile later" — that debt compounds. Phase 8 is a full cross-section pass over work that's already responsive, not the first time responsiveness gets checked.

## Phase 0 — Foundation
**Goal:** A blank but correctly configured project to build on top of.
- **Done when:** app boots to an empty page with tokens and fonts loading correctly, no console errors, at desktop, tablet, and mobile viewport widths.

## Phase 1 — Intro Sequence
**Goal:** The pre-content moment
- **Done when:** sequence runs correctly on desktop, tablet, and mobile (text scale/perspective adapts per breakpoint); reduced-motion users get a fallback; no layout shift handing off to homepage; numeral list is complete and correctly ordered 1–100.

## Phase 2 — Hero (first 100vh)
**Goal:** The first thing a visitor sees after the intro exits.
- **Done when:** hero holds up across breakpoints and the handoff from Preloader feels seamless (no flash/jump).

## Phase 3 — About
**Goal:** Establish who Aditya is beyond the hero moment.
- **Done when:** section reads correctly at all breakpoints; ready to swap placeholder copy for final content without layout rework.

## Phase 4 — Work / Projects
**Goal:** The evidence section — case studies.
- **Done when:** layout scales cleanly from 1 placeholder project to several without redesign, verified at desktop, tablet, and mobile.

## Phase 5 — Gallery *(decision gate)*
**Goal:** Resolve the "keep or cut" question from `prd.md`, then build or skip.
- **Done when:** decision is made and reflected in both the site and `prd.md`; if kept, the section is verified at desktop, tablet, and mobile before moving on.

## Phase 6 — Contact
**Goal:** Working contact form backed by a real API route.
- **Done when:** a real message sends end-to-end and both success and failure states have been manually tested at desktop, tablet, and mobile.

## Phase 7 — Chatbot
**Goal:** Floating widget that can answer questions about Aditya.
- `ChatWidget.tsx` — floating button, open/close state, message thread UI.
- **Done when:** widget is reachable from every section, doesn't interfere with section scroll/animation, and answers a basic set of test questions correctly — checked on desktop, tablet, and mobile (touch targets and panel sizing included).

## Phase 8 — Cross-Section QA
**Goal:** Treat the site as a whole, not a stack of independently-approved sections.
- **Done when:** no regressions found in a full top-to-bottom pass on all three breakpoints.

## Phase 9 — Deployment
**Goal:** Ship it.
- **Done when:** production URL is live and the Phase 8 QA pass is repeated against production, not just local/staging.

---
**Notes for future passes:** keep this file updated as phases close — mark what shipped, what changed from plan, and why, so later phases (and future redesigns) aren't starting from zero context.