# Changelog

---

## [2026-03-06] — Full MVP Build + UI Redesign

### Accomplished
- Scaffolded complete Next.js 14 app (App Router, TypeScript, Tailwind CSS v4) from scratch
- Built three-stage experience: Home Self (card selection) → The Gap (sliders + radar chart) → Ritual (AI-generated)
- Integrated Anthropic Claude Sonnet API with retry logic (3 attempts, 1.5s backoff, 529 detection)
- Built `CompassChart` using Recharts RadarChart — Home Self (dashed) vs Current Self (filled amber)
- Built `SelectCard` component: full-width horizontal bands, hairline borders, amber selection state
- Implemented full Ando × Turrell visual redesign:
  - Palette: limestone (#F8F6F1), stone (#1A1713), amber (#B8844A), hairline (#D8D0C4)
  - Ganzfeld stage backgrounds: mauve-rose (Stage 1) → sage-grey (Stage 2) → amber gold (Stage 3)
  - 2.5s cubic-bezier background transitions between stages
  - Loading state: single amber vertical line with luminous pulse animation
  - Typography: weight 200–300, four clear hierarchy levels, tracked uppercase labels
- Wrote diaspora-first landing page with four tight sections and Turrell gradient
- Aligned all pages to consistent centered layout (maxWidth 380, asymmetric padding 48px left / 32px right)
- Moved product docs (context, PRD, ritual foundations) into `docs/` and updated README

### Decisions Made
- **Claude Sonnet over Opus permanently** — Opus was causing 529 overload errors; Sonnet is faster, cheaper, and performs equally well for this use case
- **`npm run dev` only, not `npm run build`** — build step hits EPERM on `.next` folder in macOS mounted volumes; dev server works fine for local iteration
- **`npm install --include=optional`** — required to pull in `lightningcss.darwin-arm64.node` native module for macOS arm64 compatibility
- **`stream: false` on `client.messages.create`** — resolves TypeScript union type narrowing issue (`Message | Stream`)
- **Asymmetric padding (48px left, 32px right)** — Ando structural line; "inner breathing room" variant chosen over flush-left architectural approach
- **No writing, no emoji, no icons** — all cards are horizontal text bands; reduces friction and maintains visual discipline
- **Docs moved into `identity-compass/docs/`** — brings context, PRD, and ritual foundations under version control

### Learnings
- lightningcss native module must be installed with `--include=optional` on macOS arm64; Linux VM installs won't work when running on the host machine
- Turrell Ganzfeld gradients need genuine color (mauve-rose, sage-grey, amber gold) — subtle stone gradients read as "Ando only" without the color field quality
- Landing page centering (`padding` on outer + `maxWidth/margin:auto` on inner) vs experience page centering (`max-w-sm mx-auto` on main itself) created visually inconsistent content widths (380px vs ~304px); unified by matching the two-layer approach everywhere

### Files Changed
- `app/page.tsx` — landing page with diaspora-first copy, Turrell gradient, four sections, CTA
- `app/experience/page.tsx` — stage orchestrator; Ganzfeld backgrounds, sticky header, loading state; layout aligned to landing page
- `app/globals.css` — full design system: palette, animations (stageEnter, riseIntoLight, luminousPulse), slider styles
- `app/layout.tsx` — Geist font, Identity Compass metadata
- `app/api/reflect/route.ts` — Claude Sonnet reflection endpoint with retry logic
- `app/api/ritual/route.ts` — Claude Sonnet ritual generation endpoint; parses TITLE:/RITUAL: format
- `components/stages/Stage1.tsx` — card selection (values + felt sense + relational), optional word input
- `components/stages/Stage2.tsx` — sliders with presence labels, compass chart reveal
- `components/stages/Stage3.tsx` — Home Self summary, ritual display, save/share actions
- `components/ui/SelectCard.tsx` — horizontal band card, amber selection indicator
- `components/ui/CompassChart.tsx` — Recharts RadarChart, Home Self vs Current Self
- `lib/types.ts` — TypeScript interfaces for all stage data
- `lib/values.ts` — Schwartz value cards, felt sense cards (Tolle-grounded), relational cards (SDT-grounded)
- `lib/prompts.ts` — reflection and ritual prompt builders; four-tradition ritual language
- `README.md` — replaced default Next.js README with project-specific documentation
- `CHANGELOG.md` — created (this file)
- `docs/identity-compass-context.md` — moved from parent folder
- `docs/identity-compass-prd-mvp.md` — moved from parent folder
- `docs/ritual-foundations.md` — moved from parent folder
