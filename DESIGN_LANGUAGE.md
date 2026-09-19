# Agentic Living — Design Language

> Written: 2026-07-14 | Status: V1 — foundation document for all visual work

---

## The Design Principle

**This is not a tech brand. It is a field journal.**

Every visual decision should feel like it was made by someone documenting a real expedition — not designed by a software team trying to look warm. The aesthetic is earned evidence, not manufactured polish.

The tension that drives every design choice: **precision meets wilderness.** Exactness of thought, roughness of place. Glaciers are precise and ancient. The person on them is messy and alive.

---

## Color System

**Named after geography. Not named after software.**

### Base Palette

| Name | Hex | Use | Origin |
|---|---|---|---|
| **Expedition White** | `#FAF8F4` | Primary background | Aged paper, not sterile white |
| **Patagonian Ink** | `#1C1A17` | Primary text | Dark, warm, not pure black |
| **Fitz Roy** | `#D64E12` | Signal / CTA / Accent | The glow on granite at Fitz Roy at sunrise |
| **Altiplano Sky** | `#1B4FD8` | Secondary accent | Cobalt blue at 3,500m altitude — not tech blue |
| **Steppe** | `#C4A35A` | Warm tertiary | Dry Patagonian grass in summer |
| **Glacier** | `#B8C8D4` | Cool neutral | Blue-grey meltwater |

### Usage Rules

- **Background is always warm white (Expedition White), never pure white, never dark.**
- **Fitz Roy** is used sparingly — it's the signal color. One or two appearances per page max. Overuse kills it.
- **Altiplano Sky** for structural elements (links, hover, key dividers). Not for decorative use.
- **Steppe + Glacier** as supporting tones — texture, borders, secondary text.
- No gradients. No shadows. No glassmorphism. No blur effects.

### The Argentina Coordinates — embedded in design

The GPS coordinates of key locations appear as text elements throughout the brand. Not decorative — functional proof:

```
El Chaltén        −49.3316, −72.8876
Ushuaia           −54.8019, −68.3030
Tilcara           −23.5763, −65.3983
Altafulla         41.1432, 1.3740
```

These appear in small monospace, muted color — like survey markers. They root the brand in physical reality.

---

## Typography

**Three typefaces. Three roles. Each earns its place.**

### 1. Display — "The Statement"
**Recommendation: Druk Wide / Monument Extended / or similar condensed grotesque**

- ALL CAPS, extreme weight, condensed
- Used for hero lines and section headlines only
- Sets the tone: this is serious, physical, uncompromising
- NOT tech. NOT startup. Think: expedition journal cover, sports documentary title card.
- Alternative if licensing is a barrier: free option = **Bebas Neue** (less distinctive) or **Anton**

> Example usage: "LIVE AGENTIC." / "THE EXPERIMENT." / "120 DAYS."

### 2. Body — "The Evidence"
**Recommendation: Freight Text / EB Garamond / or classical editorial serif**

- Mixed case, comfortable reading size (17–19px)
- Long-form text, proof sections, manifestos
- The humanist serif suggests depth and permanence — not trend
- This is where the thinking lives. Give it breathing room.
- Generous line height (1.75). Wide margins. The reading experience should feel deliberate.

> Example usage: All body paragraphs, origin story, principles

### 3. Data — "The Proof"
**JetBrains Mono** (already in the stack)

- Monospace, lowercase, small
- Metrics, GPS coordinates, timestamps, agent logs
- Never styled up — the rawness is the point
- This is the voice of the system, not the human

### The Handwriting Element (NON-NEGOTIABLE)
**This is Enzo's actual handwriting from his reMarkable — photographed or exported as SVG.**

Used for:
- Circling a key number ("120" circled in a proof section)
- Underlining a crucial phrase
- A margin note ("this is where it clicked →")
- Crossing out the old way ("OFFICE JOB" crossed out)
- An arrow pointing to a data point

**Rules:**
- Never use a handwriting font. It must be real or not at all.
- Appears in Patagonian Ink color or Fitz Roy orange
- Slightly rotated, slightly imperfect — that's the point
- Max 2–3 uses per page
- These are SVG overlays on top of typeset content

---

## Form Language

**Not rounded. Not sharp. Purposeful geometry.**

### What We Don't Do
- No rounded corners on cards (that's every SaaS product ever)
- No drop shadows
- No glassmorphism
- No floating elements that look weightless
- No icons that look like they came from a free icon pack

### What We Do

**Thin horizontal rules** — hairlines (0.5–1px) in Glacier or Steppe. Like the lines of a field notebook. Used to separate content sections, never as decoration.

**Full-bleed text blocks** — text runs edge to edge within its column with no border or card framing. The words carry the weight, not the container.

**Numbers as sculpture** — large metric numbers (120, 27, 49) displayed at enormous scale, as structural page elements. Not in a card — raw, overlapping other content slightly.

**Topographic texture** — contour lines from Patagonian maps used as background texture at very low opacity (3–5%). Not a pattern — actual map data. Source: OpenTopography data for the Fitz Roy area. Used in hero sections only.

**Single-column editorial layout** — max content width 680px on desktop. No multi-column content grids. This is a journal, not a dashboard.

**Asymmetric pull quotes** — important quotes break out of the column, run wider, are set in larger type with a thin left border in Fitz Roy orange. They interrupt the flow intentionally.

---

## Photography Style

**The Visual Test (from the Brand Manifesto):**
> "Does this image look like it was taken during a real experiment, or does it look like an ad? Only the first is allowed."

### Treatment
- **High altitude contrast** — increase contrast, reduce warmth slightly
- **Desaturated except one color moment** — e.g. the orange of a Hoka shoe against grey Patagonian rock
- **Slightly underexposed** — not the overlit Instagram outdoor look
- **No people smiling at cameras** — if there's a person, they're doing something
- **Timestamp overlays** — small monospace date/time in corner, like a field camera (optional)
- **No stock photography. Ever.**

### The "Evidence Frame"
Key photos get a thin border (1px, Glacier color) and a small monospace caption below:
```
Day 43 — El Chaltén. Agents handled 3 client calls while I was here.
```

---

## Motion & Interaction

**Minimal. Earned. Never decorative.**

- **No scroll animations** that are purely aesthetic
- **One allowed motion:** a slow fade-in (400ms, ease) when content enters viewport — like eyes adjusting to altitude light
- **Hover states:** underlines grow, not colors shift. Text-based, not box-based.
- **The handwriting elements** can have a drawing animation (they "write" into view at 600ms) — this is the one exception where animation earns its place

---

## What Makes This Visually Different

### The 5 Differences

**1. Bright ≠ clean**
Most brands go dark for "serious" or clean white for "premium." Agentic Living uses warm, slightly imperfect expedition white — the color of a notebook that's been in a backpack at altitude. It signals: this was lived, not designed.

**2. Typography tension**
Giant condensed grotesque (brutal, physical) + classical editorial serif (thoughtful, permanent) + raw monospace (the system behind it). Three voices that shouldn't go together — but they represent the three dimensions of the life: body, mind, machine.

**3. Real handwriting as brand element**
No other tech or lifestyle brand uses actual founder handwriting as a design element. Enzo's reMarkable notes — circling, underlining, annotating — become the brand's human fingerprint. It's proof that this was thought through by a person.

**4. Geography as identity**
GPS coordinates, topographic textures, named colors from real places. The brand is geographically anchored in a way that no AI brand, no productivity tool, and no lifestyle brand currently does. You know where this came from.

**5. The Anti-Hero Layout**
Single column, generous whitespace, no cards, no grids, no UI patterns. It reads like a long piece in The Atlantic, not like a SaaS landing page. That's the category redefinition: Agentic Living is not software. It's a documented way of living.

---

## The Brand Mark (TBD)

**Direction, not final:**

Option A: The coordinate mark
```
−54° S
AGENTIC LIVING
```
The southernmost race as the origin point. Simple. Geographic. Unmistakable.

Option B: The reMarkable page
A scan of the actual first notes Enzo took when the concept crystallized — reduced to a mark. Imperfect, hand-drawn, specific.

Option C: Pure typography
"AGENTIC LIVING" in display grotesque, all caps, no icon. The words are the mark. Confident enough not to need a symbol.

→ Recommendation: Option C as primary, Option A as a secondary location mark (used on event materials, photo timestamps, etc.)

---

## What We NEVER Do

- Dark backgrounds (that's Trillion Initiative, not Agentic Living)
- Purple or teal (AI startup cliché)
- Abstract geometric icons
- "Empowering" stock photography
- Animated gradient backgrounds
- Rounded pill buttons
- The words "leverage", "unlock", "streamline", "seamlessly"
- Confetti, sparkles, or celebration UI
- Sans-serif only (one-dimensional)
- Anything that could have been designed by Midjourney

---

*This document is the brief for every designer, developer, and agent that touches this brand.*
