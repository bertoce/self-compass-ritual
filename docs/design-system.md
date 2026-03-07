# Umbral — Design System

---

## Typography

**Typeface:** Helvetica Neue (system stack)
```
-apple-system, BlinkMacSystemFont, 'Helvetica Neue', Helvetica, Arial, sans-serif
```

No external font dependencies. Renders natively on iOS, macOS, and most desktop systems. Falls back gracefully everywhere else.

### Weight System

Inspired by Tadao Ando's approach to concrete — a single material, differentiated by mass and density, not decoration.

| Weight | Role | Where used |
|--------|------|-----------|
| **100** | Vast space. Arrivals. Opening silence. | Landing H1, Stage 3 arrival ("Here is what you found.") |
| **200** | The asking voice. Light enough to invite. | Stage questions, problem headlines |
| **300** | The reading voice. Body copy. | All body text, descriptions, sublines, ritual body |
| **400** | Running UI. Card labels at rest. | Default card labels, action row labels |
| **500** | The structural bones. | Section labels (uppercase), CTAs, wordmark, nav, selected card states |
| **600** | One concrete wall per screen. | Ritual title only. Used once. Lands hard because everything else is lighter. |

**Rule:** Do not use 400 and 600 for body text. Do not use 100 for navigation or labels. Each weight has a single job.

**Note on heaviness:** Some section titles may benefit from stepping up to 300–400 for additional weight as the product evolves. The current system errs toward restraint — adjust individual elements as needed without breaking the weight hierarchy.

---

## Color

All colors are named for materials and light, not emotions.

| Token | Hex | Use |
|-------|-----|-----|
| `--linen` | `#F8F6F1` | Background, default surface |
| `--stone` | `#1A1713` | Primary text, buttons |
| `--stone-mid` | `#6B6458` | Secondary text, descriptions |
| `--stone-light` | `#C4B9AB` | Tertiary text, placeholders, muted labels |
| `--hairline` | `#D8D0C4` | Dividers, borders, slider track |
| `--amber` | `#B8844A` | Single accent — stage kickers, selected states, ritual |
| `--amber-pale` | `#F4EAD8` | Amber wash, stage backgrounds |
| `--amber-dark` | `#8C5E2A` | Hover amber states |

**Rule:** Amber is used once per screen as a guiding signal. It should not appear more than 2–3 times per view.

---

## Stage Backgrounds (Ganzfeld gradients)

Each stage has a distinct ambient light — a Turrell Ganzfeld field that shifts as you move through the experience.

| Stage | Gradient | Quality |
|-------|----------|---------|
| Landing | `170deg, #EDE0EB → #F5F0EC → #EEE4D4 → #E8D8B8` | Mauve-rose at top, amber gold at base |
| Stage 1 (Home Self) | `radial, #E8D8EB → #F5F0F4 → #F7F4F0` | Soft lavender-violet, memory light |
| Stage 2 (The Gap) | `170deg, #D8E8D4 → #ECF0EA → #F2F0EC` | Sage-green, present-tense, honest |
| Stage 3 (Ritual) | `radial at 50% 55%, #E4C87C → #F0E0B0 → #F5EDD8` | Golden amber, arrival |

---

## Layout

**Content width:** 380px max, centered with `margin: 0 auto`
**Horizontal padding:** `48px left / 32px right` (offset center — intentional breathing room)
**Vertical rhythm:** 48–80px between sections

This two-layer approach ensures consistent centering regardless of screen width:
```
outer: padding: '0 32px 0 48px'
inner: maxWidth: 380, margin: '0 auto'
```

---

## UI Atoms

**Wordmark:** 9px / weight 500 / tracking 0.2em / uppercase
**Section labels:** 8–9px / weight 500 / tracking 0.22–0.26em / uppercase / `--stone-mid` or `--amber`
**Stage kickers:** 9px / weight 500 / tracking 0.22em / uppercase / `--amber`
**CTA buttons:** 11px / weight 500 / tracking 0.22em / uppercase / stone background / linen text
**Body text:** 13–14px / weight 300 / line-height 1.8–1.9
**Card labels (default):** 12px / weight 400 / tracking 0.08em / uppercase
**Card labels (selected):** 12px / weight 500 / amber
**Hairlines:** 1px / `--hairline`
**Amber lines:** 1px / `rgba(184,132,74,0.3)`

---

## Voice

See `docs/voice-and-language.md` for full guide.

**Summary:** Short sentences. Present tense. Few adjectives. No dashes. Warm not soft. Thích Nhất Hạnh meets Toni Morrison.
