# Design DNA — bymonolog.com

> Extracted from [bymonolog.com](https://bymonolog.com/) on 2026-07-22.
> MONOLOG — Brand and Web Design Studio founded by Huy (By Huy) Nguyen.
> "Refuse to be underestimated."

---

## Meta

```json
{
  "meta": {
    "name": "MONOLOG Studio",
    "description": "Award-winning brand and web design studio. Dark, cinematic, editorial single-page experience built on Webflow with GSAP, Lenis smooth scroll, Three.js footer, and custom cursor interactions. Designed for founder-led creative brands.",
    "source_references": [
      "https://bymonolog.com/",
      "https://cdn.prod.website-files.com/68b652bbd6c64a44c8fe3e5e/css/bym0n0l0g.webflow.shared.e9a9b6790.min.css"
    ],
    "created_at": "2026-07-22"
  }
}
```

---

## 1. Design System (Dimension 1: Structural / Measurable)

### 1.1 Color

```json
{
  "color": {
    "palette_type": "monochromatic",
    "primary": {
      "hex": "#080807",
      "role": "Page background — near-black with a warm undertone (--swatch--black-400)"
    },
    "secondary": {
      "hex": "#e8e8e3",
      "role": "Primary brand text / headings — warm off-white (--swatch--beige-100)"
    },
    "accent": {
      "hex": "#8c8c73",
      "role": "Muted olive-green accent for secondary elements, heading accents, and dividers (--swatch--beige-600)"
    },
    "neutral": {
      "scale": [
        { "token": "--swatch--black-400", "hex": "#080807", "usage": "Primary background" },
        { "token": "--swatch--black-300", "hex": "#393632", "usage": "Elevated surfaces, subtle borders" },
        { "token": "--swatch--black-200", "hex": "#524d47", "usage": "Hover states, text-link hover borders" },
        { "token": "--swatch--black-100", "hex": "#6b645c", "usage": "Tertiary text, muted labels" },
        { "token": "--swatch--black-50", "hex": "#938f8a", "usage": "Disabled / placeholder text" },
        { "token": "--swatch--beige-400", "hex": "#bfbfb1", "usage": "Button backgrounds, medium borders" },
        { "token": "--swatch--beige-300", "hex": "#d1d1c7", "usage": "Selection background, light theme bg" },
        { "token": "--swatch--beige-200", "hex": "#ddddd5", "usage": "Light surface tint" },
        { "token": "--swatch--beige-100", "hex": "#e8e8e3", "usage": "Primary text on dark bg" },
        { "token": "--swatch--card-bg", "hex": "#181715", "usage": "Card background — slightly lighter than page bg" }
      ],
      "usage": "Warm neutral ramp from near-black to warm off-white with olive undertones"
    },
    "semantic": {
      "success": "Not explicitly defined — neutral palette dominates",
      "warning": "Not explicitly defined",
      "error": "Not explicitly defined",
      "info": "Not explicitly defined"
    },
    "surface": {
      "background": "#080807 (--swatch--black-400)",
      "card": "#181715 (--swatch--card-bg)",
      "elevated": "#393632 (--swatch--black-300)"
    },
    "contrast_strategy": "High contrast — warm off-white (#e8e8e3) text on near-black (#080807) background. Secondary text uses graduated opacity through the neutral scale. The palette is deliberately desaturated to let project imagery dominate."
  }
}
```

### 1.2 Typography

```json
{
  "typography": {
    "type_scale": {
      "display": {
        "size": "clamp(5rem, 5rem + ((9.25 - 5) / 80) * 100vw, 9.25rem) — ~148px at 1600px",
        "weight": "500 (--_typography---font--tertiary-medium)",
        "line_height": "0.9 (--_typography---line-height--0-90)",
        "tracking": "-0.03em (--_typography---letter-spacing--0-03em)"
      },
      "heading_1": {
        "size": "clamp(5rem, fluid, 6rem) — ~96px at 1600px",
        "weight": "500",
        "line_height": "1.0",
        "tracking": "-0.03em"
      },
      "heading_2": {
        "size": "clamp(3rem, fluid, 4.75rem) — ~76px at 1600px",
        "weight": "500",
        "line_height": "1.0",
        "tracking": "-0.03em"
      },
      "heading_3": {
        "size": "clamp(2rem, fluid, 3.5rem) — ~56px at 1600px",
        "weight": "500",
        "line_height": "1.0",
        "tracking": "-0.03em"
      },
      "body": {
        "size": "clamp(1rem, fluid, 1.125rem) — ~18px at 1600px",
        "weight": "500",
        "line_height": "1.3",
        "tracking": "-0.01em"
      },
      "body_small": {
        "size": "clamp(0.875rem, fluid, 1rem) — ~16px at 1600px",
        "weight": "500",
        "line_height": "1.3",
        "tracking": "-0.01em"
      },
      "caption": {
        "size": "clamp(0.65rem, fluid, 0.75rem) — ~12px at 1600px",
        "weight": "500",
        "line_height": "1.3",
        "tracking": "-0.01em"
      },
      "overline": {
        "size": "clamp(0.6rem, fluid, 0.65rem) — ~10.4px at 1600px (text-micro)",
        "weight": "400 (mono weight)",
        "line_height": "1.3",
        "tracking": "normal (mono default)"
      }
    },
    "font_families": {
      "heading": "Khteka, Arial, sans-serif — Primary font family used for all headings and body",
      "body": "Khteka, Arial, sans-serif — Same as heading; unified type voice",
      "mono": "Suisse Mono, Arial, sans-serif — Used for labels, dates, counters, and eyebrow text"
    },
    "font_style_notes": "Khteka is a geometric-humanist sans-serif with medium weight (500) used universally for both headings and body. The display scale is extremely large (up to 9.25rem / ~148px) creating a bold editorial statement. Animo (secondary font) appears in specific accent/display contexts. Suisse Intl Mono handles all utilitarian labels. Fluid clamp() sizing creates seamless responsiveness from 20rem (320px) to 100rem (1600px) viewport width. Line-height trim (::before/::after margin-bottom hack) is used for precise vertical rhythm. Text-wrap: balance is applied to headings."
  }
}
```

### 1.3 Spacing

```json
{
  "spacing": {
    "base_unit": "1rem (16px)",
    "scale": [
      { "token": "space-1", "value": "clamp(0.375rem, fluid, 0.5rem)" },
      { "token": "space-2", "value": "clamp(0.625rem, fluid, 0.75rem)" },
      { "token": "space-3", "value": "clamp(0.875rem, fluid, 1rem)" },
      { "token": "space-4", "value": "clamp(1.25rem, fluid, 1.5rem)" },
      { "token": "space-5", "value": "clamp(1.75rem, fluid, 2rem)" },
      { "token": "space-6", "value": "clamp(2rem, fluid, 2.5rem)" },
      { "token": "space-7", "value": "clamp(2.25rem, fluid, 3rem)" },
      { "token": "space-8", "value": "clamp(2.5rem, fluid, 4rem)" }
    ],
    "content_density": "spacious — Generous whitespace between sections, breathing room around content blocks. The design uses extreme vertical spacing to let each section occupy full or near-full viewport height.",
    "section_rhythm": "Four tiers: none (0), small (clamp 3rem–5rem), main (clamp 4rem–7rem), large (clamp 5.5rem–10rem), page-top (clamp 7rem–14rem). This creates a dramatic pace that alternates between tight content blocks and expansive empty space."
  }
}
```

### 1.4 Layout

```json
{
  "layout": {
    "grid_system": "Custom CSS Grid with breakout pattern: [full-start] minmax(0, 1fr) [content-start] repeat(12, minmax(0, var(--site--column-width))) [content-end] minmax(0, 1fr) [full-end]. Pre-computed column-width and column-margin variables for 1–12 column spans.",
    "max_content_width": "100rem (1600px) — var(--max-width--main)",
    "columns": "12-column grid (--site--column-count: 12)",
    "gutter": "1rem (--site--gutter)",
    "breakpoints": {
      "viewport_min": "20rem (320px) — fluid type/spacing floor",
      "viewport_max": "100rem (1600px) — fluid type/spacing ceiling",
      "medium": "991px (Webflow medium breakpoint)",
      "small": "767px (Webflow small breakpoint)",
      "tiny": "479px (Webflow tiny breakpoint)"
    },
    "alignment_tendency": "Asymmetric — Hero uses oversized type with left offset stats panel. Success stories use split 50/50 image/text cards. Services list is left-aligned with staggered text sizes. The layout favors dynamic asymmetry over rigid grid alignment."
  }
}
```

### 1.5 Shape

```json
{
  "shape": {
    "border_radius": {
      "small": "0.15rem (~2.4px) — var(--radius--small)",
      "medium": "0.35rem (~5.6px) — var(--radius--medium)",
      "large": "1rem (16px) — var(--radius--main)",
      "pill": "100vw — var(--radius--round)"
    },
    "border_usage": "Subtle 1px — var(--border-width--main: 0.094rem). Used sparingly for dividers between FAQ items and project card separators. Most containers rely on spatial separation rather than borders.",
    "divider_style": "Thin horizontal lines (0.094rem) in --swatch--beige-400 between accordion items and footer links. No heavy borders anywhere."
  }
}
```

### 1.6 Elevation

```json
{
  "elevation": {
    "shadow_style": "none — The design relies on color contrast, spatial separation, and layered z-index rather than box-shadows.",
    "levels": {
      "low": "No shadow — differentiation via background color shift (#181715 card-bg vs #080807 page-bg)",
      "medium": "No shadow — z-index layering for overlays and modals",
      "high": "No shadow — the grain overlay and cursor bubble use clip-path and opacity"
    },
    "depth_cues": "Color intensity and overlapping layers — Parallax text behind imagery, grain overlay at full-page z-index, custom cursor above all content. No traditional shadow-based depth."
  }
}
```

### 1.7 Iconography

```json
{
  "iconography": {
    "style": "Minimal custom SVG — Arrow icons (diagonal arrow for CTAs), braille-dot decorative patterns, and award platform logos rendered as small SVG icons.",
    "stroke_weight": "Filled paths — no stroke-based icons. Arrow icon uses solid path fills.",
    "size_scale": "12×12px for inline arrows, 100% width for decorative braille SVGs",
    "preferred_set": "Custom SVG — no icon library. Each icon is purpose-built and inline."
  }
}
```

### 1.8 Motion

```json
{
  "motion": {
    "easing": {
      "primary": "cubic-bezier(0.83, 0, 0.17, 1) — smooth ease-in-out (--animation-primary)",
      "secondary": "cubic-bezier(0.31, 0.75, 0.22, 1) — soft deceleration (--animation-secondary)",
      "expo_out": "cubic-bezier(0.2, 1, 0.36, 1) — dramatic expo-out (--animation-expo-out)",
      "cursor_ease": "cubic-bezier(0.16, 1, 0.3, 1) — snappy spring for cursor bubble"
    },
    "duration_scale": {
      "micro": "0.2s — cursor text opacity, hover states",
      "normal": "0.45s (--duration-fast) — cursor clip-path, general transitions",
      "macro": "0.5s–1.2s — GSAP scroll-driven section reveals, text splits"
    },
    "entrance_pattern": "Clip-path reveal from left (inset wipe), fade-up with translateY, line-by-line text reveal",
    "exit_pattern": "Clip-path collapse (inset closes), opacity fade-out",
    "philosophy": "Cinematic — Every interaction feels deliberate and theatrical. Heavy use of GSAP ScrollTrigger for scroll-driven choreography. Lenis provides buttery smooth scrolling. Animations are staggered and layered to create narrative rhythm."
  }
}
```

### 1.9 Components

```json
{
  "components": {
    "button_style": "Ghost button with 0.094rem border, pill radius (100vw), small text + arrow icon aside. On hover: background fills with --theme-text color, text inverts to --theme-background. The aside (arrow) has its own background reveal animation. CTA: 'Start a project' with diagonal arrow.",
    "input_style": "Not prominently featured on the homepage. Contact routes to external cal.com booking.",
    "card_style": "Success story cards: full-bleed image on left (50%), text/stats on right with light background (#fafaf9-ish). Cards use no border-radius, sharp edges. Progress counter (01/05) with navigation arrows.",
    "navigation_pattern": "Fixed top navbar with logo left, nav links center (About, Work, Services, Process), sound toggle + 'Start a project' CTA right. Mobile: hamburger → full-screen overlay menu with large typography links.",
    "modal_style": "About modal slides in from right (translateX), full-height panel with scrollable content. Close button (ESC label) in top-right. Uses clip-path reveal animation.",
    "list_style": "FAQ accordion: simple text questions with thin divider lines. Expand/collapse with toggle indicator. Footer links: large h3-size text with arrow indicators.",
    "component_notes": "The site uses Webflow's component system with data attributes (data-animate, data-split, data-hover-highlight, data-cursor-text) to drive GSAP animations. Cursor bubble uses clip-path inset animation for reveal. All interactive elements have hover states driven by data-hover-heading and data-hover-highlight attributes."
  }
}
```

---

## 2. Design Style (Dimension 2: Qualitative / Perceptual)

### 2.1 Aesthetic

```json
{
  "aesthetic": {
    "mood": ["cinematic", "authoritative", "refined", "intimate", "provocative"],
    "visual_metaphor": "A gallery opening at night — dark walls that make the work glow. The site positions itself as a curated exhibition space where each project is a masterwork. The brand name 'MONOLOG' (one voice) reinforces singular creative vision.",
    "era_influence": "2020s editorial web meets late-modernist Swiss typography. References the typographic boldness of Emigre magazine, the cinematic pacing of film title sequences, and the spatial drama of contemporary art galleries.",
    "genre": "Luxury creative studio — premium editorial portfolio",
    "personality_traits": ["confident", "obsessive", "deliberate", "provocative", "intimate"],
    "adjectives": ["dark", "cinematic", "editorial", "warm-toned", "monolithic", "theatrical"]
  }
}
```

### 2.2 Visual Language

```json
{
  "visual_language": {
    "complexity": "rich — Multiple animation layers, scroll-driven choreography, custom cursor, grain overlay, Three.js footer. However, the visual complexity serves a minimalist aesthetic — fewer elements, more impact per element.",
    "ornamentation": "Subtle accents — Braille dot patterns as decorative SVGs, noise grain overlay, halftone print-inspired footer texture. Ornamentation is textural rather than decorative.",
    "whitespace_usage": "Dramatic — Full-viewport-height sections with single focal elements. The 'WE CLOSE THAT GAP' marquee is surrounded by black void. Philosophy text has generous margins. Whitespace is the primary compositional tool.",
    "visual_weight_distribution": "Bottom-heavy per section — Large display text anchors the bottom of each viewport, with context labels and navigation floating above. The overall page weight increases towards the footer with the Three.js canvas.",
    "focal_strategy": "Progressive reveal — The hero draws attention through oversized typography, then each scroll-triggered section reveals a new focal point. The site uses scroll as a narrative device, revealing information in a deliberate sequence.",
    "contrast_level": "High — Near-maximum contrast between #e8e8e3 text and #080807 background (~16:1 ratio). Reduced contrast for secondary text through the neutral scale creates typographic hierarchy.",
    "texture_usage": "Noise grain overlay (CSS animation with background-image translate, 0.5s steps(6) loop) covers the entire page. The Three.js footer adds halftone/organic print texture. Project imagery provides photographic texture contrast."
  }
}
```

### 2.3 Composition

```json
{
  "composition": {
    "hierarchy_method": "Scale contrast — Display text (9.25rem) dwarfs body text (1.125rem), creating an 8:1 ratio. Size alone establishes what matters. Secondary hierarchy through opacity/color gradation in the neutral scale.",
    "balance_type": "Asymmetric — Hero has left-aligned stats panel against right-aligned body text. Project cards alternate image/text sides. The marquee scrolls horizontally creating dynamic asymmetry. The overall composition avoids centered symmetry.",
    "flow_direction": "Top-to-bottom scroll-driven narrative with horizontal marquee interruptions. The page flows: Hero → Philosophy → Marquee → Services → Projects → Process → FAQ → Footer. Horizontal scrolling marquee ('WE CLOSE THAT GAP') creates rhythm breaks.",
    "grouping_strategy": "Section-based with eyebrow labels — Each major section has a dot + text eyebrow marker (e.g., '● FAQs', '● Success Stories'). Content is grouped by narrative function rather than grid logic.",
    "negative_space_role": "Protagonist — The black background is not empty but deliberate. It creates the cinematic feel, makes text glow, and gives project imagery maximum impact. Sections use negative space to control pacing and create dramatic pauses."
  }
}
```

### 2.4 Imagery

```json
{
  "imagery": {
    "photo_treatment": "Full-bleed, high-quality project photography. No filters or overlays on project images — they appear as-is against the dark background. The founder's image appears in testimonial sections and FAQ area as a personal touch. Project photos use object-fit: cover in fixed-ratio containers.",
    "illustration_style": "None — The site uses photography and typography exclusively. No illustrations or custom graphics beyond SVG icons.",
    "graphic_elements": "Braille-dot SVG patterns (decorative), diagonal arrow icons (functional), numbered counters (01/05) for project navigation, dot indicators for eyebrow labels. All graphic elements are minimal and typographic in nature.",
    "pattern_usage": "Grain noise overlay (full-page), halftone print texture in Three.js footer canvas. The grain adds film-like warmth and prevents the dark background from feeling flat/digital.",
    "image_shape": "Rectangular with sharp edges — No border-radius on images. Project cards use full-bleed rectangles. The only rounded element is the founder's portrait in testimonials."
  }
}
```

### 2.5 Interaction Feel

```json
{
  "interaction_feel": {
    "feedback_style": "Immediate visual — Hover states trigger cursor bubble text changes, button background fills, and text highlight animations. All feedback is visible within 200ms.",
    "hover_behavior": "Rich and theatrical — Hovering on navigation links triggers text-highlight effects. Project cards show cursor bubble with contextual text. Buttons reveal arrow animations. Footer links show arrow slide-in. Hover on CTA fills background color.",
    "transition_personality": "Smooth glide with theatrical timing — GSAP-driven clip-path reveals, expo-out easing curves. Nothing snaps; everything flows. The cursor bubble uses a spring-like ease for a premium feel.",
    "loading_style": "Preloader with transition screen (div.transition_screen) — Page loads behind an overlay that wipes away. No skeleton screens or spinners.",
    "microinteraction_density": "High — Custom cursor with contextual text, hover-highlight on every link, scroll-triggered text splits, counter animations, marquee text, accordion toggles. Nearly every element has a unique interaction."
  }
}
```

### 2.6 Brand Voice in UI

```json
{
  "brand_voice_in_ui": {
    "tone": "Provocative and intimate — 'Refuse to be underestimated.' Copywriting challenges the visitor and speaks directly to their ambition. The voice is personal (first-person founder narrative) but assertive.",
    "formality": "Professional-casual — Not corporate, not slangy. The copy reads like a confident creative director speaking at a dinner party: 'Great founders changing the world deserve a presence as powerful as what they're building.'",
    "cta_style": "Direct imperative — 'Start a project' (primary CTA). Clean, action-oriented. The diagonal arrow reinforces forward momentum. Secondary CTAs use text links with arrow indicators.",
    "empty_state_approach": "Not applicable — single-page portfolio with curated content.",
    "error_tone": "Not observable on the homepage."
  }
}
```

---

## 3. Visual Effects (Dimension 3: Special Rendering / Visual Wizardry)

### 3.1 Overview

```json
{
  "overview": {
    "effect_intensity": "heavy-immersive — Custom cursor, GSAP scroll choreography, Three.js WebGL footer, grain overlay animation, text splitting, marquee scrolling, clip-path reveals. This is a highly animated site.",
    "performance_tier": "heavy (WebGL, Three.js, GSAP, Lenis) — The Three.js footer causes screenshot timeouts due to continuous WebGL render loops. Multiple concurrent animation systems (GSAP timelines, Lenis scroll, requestAnimationFrame for cursor).",
    "fallback_strategy": "Disable cursor effects on touch devices (@media (hover: none) and (pointer: coarse) → .cursor_wrap { display: none }). Lenis smooth scroll disabled on touch. Reduced motion preferences not explicitly handled in observed CSS.",
    "primary_technology": "GSAP (ScrollTrigger, SplitText) + Lenis + Three.js + Custom Cursor JS"
  }
}
```

### 3.2 Background Effects

```json
{
  "background_effects": {
    "type": "noise-field",
    "description": "Full-page grain noise overlay covering the entire viewport. A semi-transparent noise texture image is animated using CSS keyframes with step-based translation, creating a film grain effect. The overlay sits at a fixed position above all content with pointer-events: none.",
    "technology": "CSS animation (@keyframes grain-animation) + background-image",
    "params": {
      "color_palette": "Monochrome noise — matches dark background",
      "speed": "0.5s per cycle with steps(6) — creates 12fps film-grain flicker",
      "density": "Full viewport coverage — .g_grain_overlay with position fixed",
      "opacity": "Low (~5-10%) — barely perceptible but adds warmth",
      "blend_mode": "Normal — overlay on top with low opacity"
    }
  }
}
```

### 3.3 Particle Systems

```json
{
  "particle_systems": {
    "enabled": false,
    "type": "none",
    "description": "No traditional particle system. The Three.js footer may use particle-like elements but is classified under 3D elements."
  }
}
```

### 3.4 3D Elements

```json
{
  "3d_elements": {
    "enabled": true,
    "type": "scene-bg",
    "description": "The footer section contains a Three.js WebGL canvas rendering an organic, flowing halftone-style landscape. It creates a black-and-white topographic/fluid texture that fills the bottom portion of the page. The MONOLOG logo sits over this canvas with the tagline 'Refuse to be underestimated.'",
    "technology": "Three.js (WebGL)",
    "params": {
      "renderer": "WebGL — Full-width canvas element in footer section",
      "lighting": "Not clearly observable — appears to use flat/unlit materials or emissive textures",
      "camera": "Likely orthographic or fixed-perspective — the effect reads as 2.5D rather than full 3D",
      "materials": "Black and white halftone/organic texture — resembles topographic map or fluid simulation",
      "geometry": "Plane or mesh with displacement — creates rolling landscape effect",
      "post_processing": "Halftone/stipple effect — dots vary in density to create tonal gradation",
      "interaction_model": "Likely responds to mouse movement or scroll position — effect changes as user reaches footer"
    }
  }
}
```

### 3.5 Shader Effects

```json
{
  "shader_effects": {
    "enabled": true,
    "type": "custom-GLSL",
    "description": "The Three.js footer likely uses custom GLSL shaders to produce the halftone/topographic effect. The organic flow suggests noise-based vertex displacement or fragment-level dot rendering.",
    "technology": "Three.js + GLSL shaders",
    "params": {
      "uniforms": "Time (animation), mouse position (interaction), scroll progress",
      "vertex_manipulation": "Possible displacement based on noise functions for the rolling landscape",
      "fragment_output": "Halftone dot pattern — black and white with varying dot density",
      "noise_type": "Likely perlin or simplex — creates organic, flowing topology",
      "distortion": "Smooth rolling — no harsh distortion, fluid organic movement"
    }
  }
}
```

### 3.6 Scroll Effects

#### 3.6.1 Parallax

```json
{
  "parallax": {
    "enabled": true,
    "layers": "2–3 layers — Hero background text ('MONOLOG') moves at different speed than foreground content. Marquee section ('WE CLOSE THAT GAP') scrolls horizontally while page scrolls vertically.",
    "depth_range": "Subtle — parallax is used for depth hint, not dramatic separation",
    "speed_curve": "Controlled via GSAP ScrollTrigger — likely linear scrub with custom ease"
  }
}
```

#### 3.6.2 Scroll-Triggered Animations

```json
{
  "scroll_triggered_animations": {
    "enabled": true,
    "trigger_points": "Each major section acts as a trigger zone — text reveals, counter animations, and layout transitions fire as sections enter the viewport",
    "animation_type": "clip-reveal (text lines revealed via clip-path or opacity), fade-up (elements translate up and fade in), counter (statistics animate from 0 to target value)",
    "scrub_behavior": "Mix of scrub (pinned sections, marquee) and trigger-once (text reveals, counter animations). The marquee section scrubs horizontally with vertical scroll."
  }
}
```

#### 3.6.3 Scroll Morphing

```json
{
  "scroll_morphing": {
    "enabled": true,
    "description": "The hero section text and background evolve as user scrolls. Large MONOLOG wordmark in background fades/scales. Services section text sizes decrease progressively (Website Strategy → Website Design → Website Development → 3D Development) creating a morphing hierarchy."
  }
}
```

### 3.7 Text Effects

```json
{
  "text_effects": {
    "type": "split-letter-animate",
    "description": "Body text in the philosophy section uses line-by-line reveal with gradient opacity — text starts fully visible at top and fades to transparent at the bottom, with scroll position controlling which lines are 'lit'. Display headings use line-split animation with staggered reveal. Data attributes: [data-split='heading'], [data-highlight-text], [data-split-reveal='lines'].",
    "technology": "GSAP SplitText + ScrollTrigger",
    "params": {
      "split_strategy": "by-line (lines-split class with padding-bottom: 0.025em compensation)",
      "animation_per_unit": "Each line animates independently with opacity and translateY",
      "stagger": "Progressive — earlier lines complete before later lines begin (staggered reveal)",
      "effect_style": "Opacity gradient from 1 to 0, creating a reading-spotlight effect that 'illuminates' text as you scroll. Heading splits use clip-path or mask reveals."
    }
  }
}
```

### 3.8 Cursor Effects

```json
{
  "cursor_effects": {
    "enabled": true,
    "type": "custom-cursor",
    "description": "Custom cursor bubble that follows the mouse position. The bubble is a rounded label container that appears on hover over interactive elements, displaying contextual text (e.g., project names, action labels). The bubble uses clip-path inset animation to wipe open left-to-right. An edge-detection variant flips the bubble to the left side when near the viewport edge.",
    "params": {
      "shape": "Rounded rectangle (clip-path: inset with 6px border-radius)",
      "size": "Dynamic — sized to content text",
      "blend_mode": "Normal — solid background with text",
      "trail": "None — cursor follows with smooth interpolation but no trail",
      "interaction_zone": "Global — [data-cursor] wrapper with [data-cursor-text-target] for text. Activates via data-cursor='active' attribute toggle. Edge variant: data-cursor='active-edge' flips anchor."
    }
  }
}
```

### 3.9 Image Effects

```json
{
  "image_effects": {
    "type": "reveal-clip",
    "description": "Project images in the success stories section reveal via scroll-triggered clip-path or opacity animation. The horizontal marquee includes a small portrait image that animates alongside the text. Process step videos auto-play inline as the section enters view.",
    "technology": "GSAP ScrollTrigger",
    "params": {
      "filter_pipeline": "None — images are unfiltered",
      "hover_transform": "Cursor bubble appears with contextual text on project card hover",
      "reveal_animation": "Clip-path reveal or opacity fade-in triggered by scroll position",
      "distortion_type": "None — clean, undistorted imagery"
    }
  }
}
```

### 3.10 Glassmorphism / Neumorphism

```json
{
  "glassmorphism_neumorphism": {
    "enabled": false,
    "style": "none",
    "params": {
      "blur_radius": "N/A",
      "transparency": "N/A",
      "border_treatment": "N/A",
      "shadow_type": "N/A",
      "light_source_angle": "N/A"
    }
  }
}
```

### 3.11 Canvas Drawings

```json
{
  "canvas_drawings": {
    "enabled": true,
    "type": "generative-lines",
    "description": "The Three.js canvas in the footer renders generative organic forms with halftone stipple effect. This is a continuously animated canvas element that creates an abstract landscape/fluid texture.",
    "technology": "Three.js (WebGL Canvas)",
    "params": {
      "draw_method": "WebGL render loop — continuous requestAnimationFrame",
      "animation_loop": "Continuous — organic movement that never settles",
      "color_scheme": "Black and white with halftone dot density variation",
      "responsiveness": "Full-width canvas that scales with viewport",
      "interaction": "Likely mouse-reactive — position affects flow direction or intensity"
    }
  }
}
```

### 3.12 SVG Animations

```json
{
  "svg_animations": {
    "enabled": false,
    "type": "none",
    "description": "Decorative SVGs (braille dots) are static. The arrow icons may have hover-triggered CSS transforms but are not animated SVG paths.",
    "params": {
      "animation_method": "N/A",
      "path_morphing": false,
      "stroke_animation": false,
      "filter_effects": "none"
    }
  }
}
```

### 3.13 Composite Notes

```
The site layers multiple visual systems simultaneously:

1. **Base layer**: Solid black background (#080807) with CSS grain animation overlay
2. **Content layer**: GSAP-driven text reveals, line-by-line illumination, counter animations
3. **Interaction layer**: Custom cursor bubble with clip-path wipe, hover-highlight system
4. **Scroll layer**: Lenis smooth scroll drives GSAP ScrollTrigger timelines — horizontal marquee, parallax, pinned sections
5. **WebGL layer**: Three.js footer canvas with halftone shader — renders continuously, causes heavy GPU load

Performance trade-offs:
- The Three.js footer creates persistent GPU load even when not in viewport
- Screenshot capture times out at the hero (WebGL-adjacent) and footer sections
- Grain animation uses CSS steps() to limit repaints to 12fps
- Lenis and GSAP share scroll position data, with Lenis managing the actual scroll and GSAP reading position for animation timing

Key CSS architecture insight: The site uses Webflow's variable system extensively with nested custom properties (e.g., --_theme---text references --swatch--beige-100). This creates a theming layer that allows dark/light mode switching. The current implementation is dark-mode-first with warm neutral tones throughout.

The sound toggle in the navbar suggests the site may have ambient audio or sound design — not captured in visual analysis.

The site also uses Barba.js (data-barba="wrapper") for page transitions between routes, suggesting other pages have smooth transition animations.
```

---

## Summary

| Dimension | Key Signature |
|-----------|--------------|
| **Design System** | 12-col grid, warm monochromatic palette (#080807 → #e8e8e3), Khteka/Suisse Mono type stack, fluid clamp() sizing, 0.094rem borders, no shadows |
| **Design Style** | Cinematic editorial luxury, asymmetric composition, dramatic whitespace, provocative brand voice, high microinteraction density |
| **Visual Effects** | GSAP + Lenis scroll orchestration, Three.js halftone footer, custom cursor bubble with clip-path reveal, film grain overlay, text line-by-line illumination |
