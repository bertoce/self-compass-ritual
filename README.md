# Identity Compass

A web app that helps diaspora and people experiencing identity drift reconnect with their Home Self.

## What It Does

A three-stage conversation (no writing required) that:

1. **Home Self** — You select values, felt senses, and relational qualities from a moment you felt most like yourself
2. **The Gap** — You rate how present each dimension is in your daily life today; a radar chart visualises the distance
3. **Ritual** — Claude generates a personalised ritual grounded in Tolle, Thich Nhat Hanh, Sufi dhikr, and ter Kuile

The science foundation draws on Schwartz Basic Human Values (1992), Self-Determination Theory, and Higgins Self-Discrepancy Theory.

## Design Language

Visual concept: Tadao Ando (Naoshima precision) × James Turrell (Ganzfeld color fields).
- Palette: limestone, stone, amber, hairline
- Stage backgrounds shift from mauve-rose → sage-grey → amber gold
- Typography: weight 200–300, generous tracking, four clear hierarchy levels

## Tech Stack

- **Next.js 14** (App Router, TypeScript)
- **Tailwind CSS v4**
- **Anthropic Claude Sonnet** (`claude-sonnet-4-5-20250929`) with retry logic
- **Recharts** RadarChart for gap visualisation
- **Vercel** (deployment target)

## Getting Started

```bash
npm install --include=optional
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

> **Note:** Use `npm run dev` (not `npm run build`) when developing on macOS arm64 — the build step has an EPERM issue with the `.next` folder on mounted volumes.

### Environment

Create `.env.local` in the project root:

```
ANTHROPIC_API_KEY=your_key_here
```

## Repository

[https://github.com/bertoce/self-compass-ritual](https://github.com/bertoce/self-compass-ritual)

```bash
git clone https://github.com/bertoce/self-compass-ritual.git
```

## Project Docs

Product context, PRD, and ritual design reference are in [`docs/`](./docs/).
