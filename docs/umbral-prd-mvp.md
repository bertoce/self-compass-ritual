# Umbral — MVP Product Requirements Document

**Version:** 1.0
**Status:** Draft
**Date:** March 2026

---

## 1. Problem Statement

People living between two cultural or contextual worlds — immigrants, diaspora, and anyone whose environment has gradually replaced their sense of self — experience a persistent, low-grade disconnection from who they actually are. This drift is hard to name, easy to normalize, and rarely addressed directly. The experience is embodied: it shows up as vague anxiety, a loss of confidence, or a quiet sense that the person you are at home is not the person you are day-to-day.

The problem is not just the gap — it is the invisibility of the gap. Most people cannot clearly articulate who their "Home Self" is, let alone measure how far they've drifted. Existing tools (therapy, journaling, meditation apps) either require significant effort, are too generic to feel personal, or are not designed for cultural identity specifically.

**Who experiences this:** Primarily immigrants and diaspora living abroad, and secondarily anyone navigating a major life context shift (new city, career change, relationship transition). The experience is universal; the metaphor of "crossing back" makes it legible.

**Cost of not solving it:** Continued identity erosion, chronic low-level anxiety, decisions made from the Context Self rather than the Home Self, and the missed opportunity to author one's own life rather than be authored by circumstance.

---

## 2. Goals

### User Goals
1. **Clarity** — Users can name, clearly and specifically, who their Home Self is across 3–5 scientifically grounded dimensions of identity and values.
2. **Honest reflection** — Users can see, without judgment, where their current day-to-day life diverges from that Home Self.
3. **One next step** — Users leave with one concrete, personalized ritual they can act on immediately.
4. **Low barrier** — Users complete the full experience without having to write extended free-form text; the experience meets them at their level of reflection readiness.

### Business Goals
5. **Proof of concept** — Validate that a single guided conversation can reliably produce a meaningful, resonant output for users across diverse cultural backgrounds.
6. **Retention signal** — Measure whether users share the output or return voluntarily, as an early signal of organic growth potential.

### How We Know This Succeeded
- ≥ 70% of users who start the experience complete all three stages.
- ≥ 60% of completers rate the ritual they received as "felt made for me" (4–5 stars on a post-session prompt).
- ≥ 30% of users share or save their output within 24 hours.
- Median time to complete the full experience: 10–15 minutes.

---

## 3. Non-Goals

| Non-Goal | Reason |
|---|---|
| User accounts and persistent profiles | Adds friction at MVP stage; the value proposition must be proven by the session experience alone. |
| Streaks, habit tracking, or push notifications | Gamification mechanics contradict the product's tone and are premature before core value is validated. |
| A dashboard or ongoing gap-tracking over time | The MVP proves a single moment of insight; longitudinal tracking is a v2 ambition. |
| Open-ended journaling or long free-text inputs | Writing is a barrier; the MVP explicitly removes it. Voice input may be explored in v2. |
| Therapist or coach marketplace | Out of scope; the product complements these relationships but does not replace them. |

---

## 4. Scientific Foundation

The personality and values dimensions surfaced in this product are grounded in validated psychological research, not proprietary frameworks. This is a design principle, not a feature.

### Dimensions Used

**Values — Schwartz Basic Human Values (1992)**
The most cross-culturally validated values framework in existence, covering 10 universal motivational values: Self-Direction, Stimulation, Hedonism, Achievement, Power, Security, Conformity, Tradition, Benevolence, and Universalism. Research demonstrates these values are consistent across 80+ countries.

**Relational Orientation — Self-Determination Theory (Deci & Ryan)**
The need for Autonomy, Competence, and Relatedness as core drivers of psychological well-being. Particularly relevant to the immigrant experience, where relatedness needs are most acutely disrupted.

**Contextual Identity — Social Identity Theory (Tajfel & Turner)**
How group membership (cultural, familial, professional) shapes the self-concept, and how shifts in context activate different identity facets.

**Emotional Grounding — Somatic Awareness**
Rather than asking users to analyze themselves, the experience surfaces identity through memory and felt sense — "Where in your body did you feel most yourself?" This aligns with body-based trauma-informed approaches that reduce cognitive barrier to reflection.

### How Science Informs the UX
The three stages of the experience map directly to validated constructs:
- **Stage 1 (Home Self)** → surfaces core values and relational needs via memory and embodied cues
- **Stage 2 (Gap)** → reveals discrepancy between ideal self and contextual self, a well-documented source of psychological distress (Higgins, Self-Discrepancy Theory, 1987)
- **Stage 3 (Ritual)** → grounded in behavioral activation and implementation intentions (Gollwitzer, 1999): small, specific actions that are directly linked to the user's stated values produce higher follow-through than generic advice

---

## 5. User Stories

### Core Flow

**As an immigrant living abroad,** I want to identify who I am when I feel most myself — not my professional self — so that I have a clear, named reference point to orient from.

**As someone who has been pushing away deep reflection,** I want to move through the experience without having to write paragraphs, so that the barrier to starting feels low enough to actually begin.

**As a user at Stage 1,** I want to see the system reflect back what it heard in my responses — naming the values and qualities embedded in my memory — so that I feel seen and not analyzed.

**As a user at Stage 2,** I want to understand the gap between my Home Self and my current life as a neutral observation, not a verdict, so that I can sit with it honestly rather than defensively.

**As a user completing Stage 3,** I want to receive a ritual so specific to what I shared that it could not have been written for anyone else, so that it lands as real rather than generic.

**As a user who completed the full experience,** I want to be able to save or share my Home Self summary and ritual so that I can return to it and share it with someone close to me.

### Edge Cases

**As a user who finds Stage 1 difficult,** I want the system to offer a gentler alternative prompt (e.g., a guided image selection or a memory from childhood), so that I am not blocked by the first question.

**As a user who skips or rushes a stage,** I want the system to still generate a ritual rather than fail, so that I always leave with something — even if the ritual is more general.

**As a user using the product in Spanish,** I want the full experience — prompts, reflections, and ritual — in my native language, so that the most important identity questions are asked in the language I think about myself in.

---

## 6. Requirements

### P0 — Must Have (MVP Cannot Ship Without These)

#### 6.1 Interactive, Low-Friction Input Mechanics
The experience must NOT rely primarily on free-text entry. Instead:
- **Card selection** — Users choose from illustrated or text-based cards representing values, feelings, or relational qualities (e.g., "Which of these feels most like home?")
- **Sliders** — For gap measurement (e.g., "How far does this feel from your daily life?")
- **Image/scene selection** — Users select from a curated set of scenes or textures that evoke their Home Self (visual metaphor reduces cognitive load)
- **Optional short text** — A small, optional field for a single word or phrase if the user wants to add nuance; never required

*Acceptance criteria:*
- [ ] User can complete all three stages without typing a single word
- [ ] At least two input modalities are available per stage
- [ ] No stage requires a written response longer than one optional sentence

#### 6.2 Stage 1 — Home Self Mapping
- Prompt the user to recall a specific memory where they felt most themselves
- Offer an alternative guided path for users who find this abstract (scene selection, a "which of these feelings" card sort)
- After input: generate a **Home Self Summary** — 3–5 sentences naming the values, relational qualities, and textures embedded in what the user shared
- The summary must feel specific to this person, not generic

*Acceptance criteria:*
- [ ] The system reflects back at least 3 named dimensions (e.g., a value, a relational quality, a felt sense)
- [ ] The summary uses the user's own words or selected cards, not boilerplate language
- [ ] The user can edit or correct the summary before proceeding

#### 6.3 Stage 2 — Gap Visualization
- Ask the user to assess their current life against each Home Self dimension surfaced in Stage 1
- Use sliders or card-based gap rating per dimension (not a single global slider)
- Visualize the gap as a **compass or radar chart** — the Home Self is "north," the current self is plotted against it
- The visual must be immediately readable and emotionally neutral in tone

*Acceptance criteria:*
- [ ] At least 3 dimensions from Stage 1 are rated individually
- [ ] The gap visualization is rendered in-session and exportable
- [ ] No dimension is labeled "bad" or "broken" — language is neutral and observational

#### 6.4 Stage 3 — Personalized Ritual
- Generate one ritual based specifically on the user's Home Self summary and gap data
- The ritual must be:
  - **Small** — achievable tomorrow, not a life overhaul
  - **Specific** — references the user's actual memory, scene, or stated value, not a generic wellness tip
  - **Connected** — directly traceable back to one of their named Home Self dimensions

*Acceptance criteria:*
- [ ] The ritual references at least one specific element from the user's Stage 1 input
- [ ] The ritual can be completed within one week without purchasing anything or traveling
- [ ] "Mindfulness" or generic wellness language is never used as the primary suggestion
- [ ] The user can regenerate the ritual once if it doesn't resonate

#### 6.5 Output Card — Shareable Summary
- After Stage 3, generate a single visual output card containing:
  - The user's Home Self summary (3 key qualities)
  - Their gap visualization (simplified compass)
  - Their ritual
- The card must be saveable as an image and shareable via link

*Acceptance criteria:*
- [ ] Output renders correctly on mobile and desktop
- [ ] User can save to camera roll or copy a shareable link
- [ ] No account required to generate or save the card

#### 6.6 No Signup Required
- The full experience is accessible without creating an account
- If the user wants to return to their results later, they are offered an optional email capture at the end — never before

*Acceptance criteria:*
- [ ] Landing page → Stage 3 completion requires zero authentication steps
- [ ] Email capture appears only after the experience is complete
- [ ] Declining email capture does not remove access to the output card

---

### P1 — Nice to Have (High-Priority Fast Follows)

- **Spanish language support** — Given the primary audience, this should be near-MVP but is not a launch blocker if the localization requires additional time.
- **Voice input option** — Allow users to speak their Stage 1 memory instead of selecting cards; transcription is processed and fed into the same pipeline.
- **Ritual library preview** — Show the user 2–3 ritual options at Stage 3 to choose from, increasing sense of agency.
- **Progress persistence** — Store session state in localStorage so users can resume if they close the browser mid-experience.

---

### P2 — Future Considerations (v2+)

- Longitudinal gap tracking: Return after 2 weeks and re-rate the dimensions to see movement.
- Community layer: Anonymous, opt-in sharing of Home Self summaries across the diaspora community.
- Therapist mode: A version of the output formatted for sharing with a therapist or coach.
- Integration with journaling apps (Day One, Notion) to export rituals and summaries.

---

## 7. Success Metrics

| Metric | Target | Measurement Window | Tool |
|---|---|---|---|
| Stage completion rate | ≥ 70% complete all 3 stages | First 30 days post-launch | Analytics event tracking |
| Ritual resonance rating | ≥ 60% rate 4–5 stars | First 30 days post-launch | Post-session 1-question prompt |
| Share / save rate | ≥ 30% of completers | First 30 days post-launch | Share click event |
| Time to complete | Median 10–15 min | First 30 days post-launch | Session duration |
| Return visit rate | ≥ 20% return within 7 days | First 60 days post-launch | Return session tracking |
| Email capture opt-in | ≥ 25% of completers | First 30 days post-launch | Form submission event |

### Failure Conditions
- If < 40% of users complete Stage 1, the input friction is too high → revisit input modality design.
- If ritual resonance < 40%, the personalization pipeline is too generic → revisit Stage 3 generation logic.
- If median time to complete > 20 min, the experience is too long for the stated promise → cut or compress stages.

---

## 8. Open Questions

| Question | Owner | Blocking? |
|---|---|---|
| What is the minimum number of Schwartz values cards needed to produce a meaningful Home Self profile without overwhelming the user? | Design + Research | Yes — needed before Stage 1 card set is finalized |
| Should the radar/compass visualization be animated or static? Does animation add meaning or distraction? | Design | No — can be tested in prototype |
| What AI model and prompting approach produces rituals that feel specific enough? What's the evaluation rubric? | Engineering + Product | Yes — needed before Stage 3 is built |
| Is Spanish localization required at launch given the primary audience, or acceptable as a week-1 follow? | Stakeholder | Yes |
| What is the data retention policy for session inputs if no account is created? Are inputs stored at all? | Legal / Engineering | Yes — privacy policy must be clear before launch |
| Should the output card include the gap visualization, or is that too clinical for a first impression? | Design | No — can be A/B tested post-launch |

---

## 9. Timeline Considerations

This PRD describes the **thin slice** MVP. The principle is: prove the core loop works before building around it.

**Suggested phasing:**

| Phase | Scope | Goal |
|---|---|---|
| **Phase 0 — Prototype** | Wizard-of-Oz version: card inputs, manual ritual generation, static output card | Validate that users feel seen and that rituals resonate; no full AI pipeline needed |
| **Phase 1 — MVP Launch** | Full interactive flow, AI-generated reflections and rituals, shareable output card | Validate completion rates and ritual resonance at scale |
| **Phase 2 — Retention** | Email follow-up, return-visit flow, Spanish localization | Validate whether users return and whether the ritual creates behavior change |
| **Phase 3 — Expansion** | Longitudinal tracking, additional identity dimensions, community layer | Validate long-term product value |

**Hard constraint:** The Phase 0 prototype should be testable with real users within 2 weeks. Learning from those sessions should directly inform Phase 1 scope before any significant engineering investment is made.

---

*This PRD serves the three core jobs defined in the Umbral context document: articulate the Home Self, make the gap visible, and offer one specific path forward. Every requirement should be evaluated against these three jobs. If a requirement doesn't serve at least one of them, it doesn't belong in this version.*
