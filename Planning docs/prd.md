# PRD — Aditya Khadse Portfolio

## 1. Vision
A single-page, scroll-driven portfolio that reads as a piece of software, not a brochure. The visitor's first ten seconds (the intro sequence, the hero) should do the convincing — the rest of the site earns trust by staying fast, precise, and unshowy. Success looks like a peer developer or hiring manager pausing to ask "how did you build that?"

## 2. Goals
- **Primary:** Get a visitor to understand who Aditya is, what he builds, and how to reach him — inside one scroll, no clicks required to see the core story.
- **Secondary:** Demonstrate technical craft (motion, performance, interaction detail) as evidence of skill, not decoration.
- **Tertiary:** Let the embedded chatbot handle the "tell me more" tail — deeper questions a recruiter or collaborator would otherwise email about.

## 3. Non-goals (for now)
- No CMS or multi-page routing — everything lives on one scroll.
- No blog / writing section unless added later as its own phase.
- No e-commerce, auth, or user accounts.

## 4. Audience
- Recruiters and hiring managers doing a fast credibility scan.
- Fellow developers / designers evaluating craft.
- Potential collaborators or clients sourcing freelance/contract work.

The design and copy should assume a technically literate visitor who's seen a hundred portfolios and is scanning for signal, not a general consumer audience.

## 5. Site Structure
Single-page scroll, five sections, in order:

| # | Section | Purpose |
|---|---------|---------|
| 0 | Intro sequence | Pre-content moment that sets tone before the page is revealed |
| 1 | Home / Hero | First 100vh. Establishes identity and visual language immediately |
| 2 | About | Who Aditya is, working style, background |
| 3 | Work / Projects | Case studies — the actual evidence |
| 4 | Gallery *(tentative)* | Visual/experimental work, decision pending — see Open Questions |
| 5 | Contact | Direct line to reach him |

A floating chatbot widget persists across all sections (bottom corner), independent of scroll position.

## 6. Feature Requirements

### 6.1 Intro Sequence
- Full-viewport animated background on load (LiquidEther, tuned to brand palette), before any homepage content is visible.
- A large counter travels across the bottom of the screen, counting 0 to 100 over exactly 3.5 seconds — sized and positioned per the intro animation prompt (see project prompt library).
- On reaching 100, a circular reveal expands outward from the counter's final position, revealing the homepage underneath.
- Must not block indefinitely — if content isn't ready, the sequence still completes and reveals whatever is there (no hangs).
- Respects `prefers-reduced-motion`.
- Counter size/position must be tuned per breakpoint (desktop/tablet/mobile), not just scaled — see standing responsive rule in `phases.md`.

### 6.2 Nav Bar (persistent, top of Hero)
- Left: signature-style wordmark logo — "Aditya Khadse."
- Center/right: Home | About | Work | Contact links.
- Utility: audio/mic toggle icon, "Let's build" CTA button with arrow.

### 6.3 Home / Hero (first 100vh)
- Large stylized hero wordmark/logotype (sketch-style, artistic — exact letterforms TBD).
- Tagline beneath it (placeholder copy exists, wording still tentative).
- Sets the visual and motion language the rest of the page will follow.

### 6.4 About
- Bio content — placeholder until final copy is compiled.
- Should communicate working style and background, not just a resume dump.

### 6.5 Work / Projects
- Case-study format per project (not just thumbnails) — final structure TBD once real project content is compiled.
- Placeholder content acceptable for early builds; structure should not assume final content shape until case studies exist.

### 6.6 Gallery *(tentative)*
- Placeholder section; keep decoupled enough from the rest of the build that it can be removed without reworking neighboring sections.

### 6.7 Contact
- Form submits via a custom Next.js API route (not a third-party form service).
- Needs clear success/failure states written in the interface's voice (see design principles — errors state what happened, not an apology).

### 6.8 Chatbot
- Floating widget, bottom corner, available from every section.
- Answers questions about Aditya using a to-be-decided data source (see Open Questions).
- Should feel like a natural extension of the site's voice, not a generic support-bot skin.

## 7. Content Strategy
Real content (case studies, bio, resume, images) is planned but not yet written. Build against realistic placeholder content that mirrors the *shape* of the final content (similar length, similar structure) so layout decisions hold up once real content lands. Avoid lorem ipsum — use rough real-sounding placeholder copy in Aditya's likely voice.

## 8. Non-Functional Requirements
- **Responsive:** desktop, tablet (medium), and mobile — each viewport considered explicitly, not just fluidly scaled. This is enforced per phase, not as a final pass: see the standing rule at the top of `phases.md`. Each phase's definition of done includes verified behavior at all three breakpoints before the next phase starts.
- **Performance:** animation must stay smooth (target 60fps) on mid-range hardware; no jank on scroll-triggered effects.
- **Incremental delivery:** built and reviewed section-by-section (by viewport height), not as one big-bang release.
- **Accessibility floor:** visible keyboard focus, reduced-motion support, sensible semantic structure — motion and visual richness shouldn't come at the cost of usability.

## 9. Open Questions
- **Chatbot data source** — static bio/resume JSON? Vector-embedded content? Live API? Not decided.
- **Gallery section** — keep or cut? Pending final content review.
- **Hosting/deployment target** — not decided (Vercel is the natural default for Next.js given zero-config deploys and edge support, but not confirmed).
- **Final hero wordmark letterforms** — still being explored artistically.

## 10. Design References
- [Luke Baffait](https://lukebaffait.fr/) — Creative Developer
- [MONOLOG](https://bymonolog.com/) — Brand and Web Design Studio
- [Cheese & Pixels](https://cheeseandpixels.com/) — Creative Technology Agency