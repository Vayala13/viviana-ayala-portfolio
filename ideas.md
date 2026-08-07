# Viviana Ayala Portfolio — Design Brief

## Three Stylistic Approaches

### 1. Terminal Brutalism (probability: 0.07)
Raw, monospaced, command-line aesthetic. Everything looks like a terminal output.

### 2. Architectural Void (probability: 0.06)
Stark Swiss-grid minimalism with extreme whitespace and razor-sharp typography.

### 3. Bioluminescent Grid — **CHOSEN** (probability: 0.08)
Dark void backgrounds with neon green data-network motifs. Feels like a living system.

---

## Chosen Approach: Bioluminescent Grid

**Design Movement:** Dark Systems UI — inspired by network topology diagrams and terminal dashboards, but elevated into editorial design.

**Core Principles:**
1. Black as the absolute canvas — #0a0a0a, never softened to gray
2. Neon green (#00ff88) as the single accent — used sparingly for maximum impact
3. Slate gray (#1e2433) for surface elevation — cards, borders, dividers
4. Monospaced type for code/labels; humanist sans for body copy

**Color Philosophy:**
- Background: #0a0a0a (near-black)
- Surface: #111827 (dark slate)
- Border: #1e2d3d (subtle blue-slate)
- Accent: #00ff88 (neon green — the brand color)
- Text Primary: #e2e8f0 (cool off-white)
- Text Secondary: #64748b (slate gray)
- Muted: #1e2433

**Layout Paradigm:** Asymmetric left-anchored layout. Navigation is a slim left rail on desktop. Content flows in a wide right column with deliberate negative space. Section breaks use thin horizontal rules and section numbers (01, 02, 03...).

**Signature Elements:**
1. Section numbering in neon green monospace (01 / HERO, 02 / PROJECTS...)
2. Thin 1px neon green left-border accent on highlighted items
3. Subtle scanline/grid overlay on hero background

**Interaction Philosophy:** Interactions are precise and immediate. Hover states reveal neon green underlines. Cards lift with a subtle green border glow. No bouncy animations — everything is crisp and deliberate.

**Animation:** Entrance animations use opacity + translateY(20px) → 0, 400ms ease-out, staggered 60ms per item. Hover transitions: 150ms ease-out. No looping animations except a subtle cursor blink.

**Typography System:**
- Display: Space Grotesk 700 — bold, geometric, modern
- Body: Space Grotesk 400 — readable, consistent
- Code/Labels: JetBrains Mono 400/500 — authentic developer aesthetic
- Scale: 12/14/16/20/24/32/48/64px

**Brand Essence:** The portfolio of a developer who builds systems that think — for engineers, recruiters, and collaborators who value depth over flash.
Personality: Precise. Methodical. Quietly ambitious.

**Brand Voice:** Headlines are declarative and confident. CTAs are action-first. No filler copy.
Example headlines: "Systems that scale. Code that ships." / "Open source by default."

**Wordmark:** "MC" rendered in JetBrains Mono with a neon green geometric bracket symbol.

**Signature Brand Color:** #00ff88 — Phosphor Green

## Style Decisions
- Use `border-l-2 border-[#00ff88]` for active/highlighted items
- Section labels use `font-mono text-[#00ff88] text-xs tracking-widest uppercase`
- Cards use `bg-[#111827] border border-[#1e2d3d] hover:border-[#00ff88]/50` transition
- All skill bars animate on scroll intersection
