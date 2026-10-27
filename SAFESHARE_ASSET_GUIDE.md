# SafeShare · Screenshot Protection — Portfolio production guide

**Case study route:** `/projects/meta-image-privacy` (existing URL retained for stable links)
**Visible project title:** Screenshot Protection
**Concept name:** SafeShare

## Upload these four user-approved source visuals first

All four assets were provided by the portfolio owner. Keep their visual content unchanged. The matching website component uses these exact filenames:

| Figma/Source image | GitHub path | Original dimensions | Display location |
|---|---|---|---|
| Hero.png | `public/safeshare/hero.webp` | 2048 × 1280 | Introductory case-study hero |
| Problem & Quote.png | `public/safeshare/problem.webp` | 2048 × 853 | The challenge / problem section |
| User Persona.png | `public/safeshare/persona.webp` | 1228 × 2048 | Primary user section |
| UI Flow.png | `public/safeshare/ui-flow.webp` | 2048 × 1280 | Proposed interaction flow section |

The corresponding optimized WebP files are supplied in the portfolio assets ZIP available in ChatGPT. **Upload the extracted four files** to `public/safeshare` on this pull request branch before merging. The page currently shows an explicit, designed placeholder if one of these image files is missing.

## Next design deliverables — Figma specs

1. **Design explorations (highest priority):** Create two authentic directions at **390 × 844px** per mobile frame: (A) dedicated screenshot-protection toggle; (B) existing audience/sharing controls. Present at **1440 × 900px**, 2× image export. Write actual pros, limitations, and rationale. Do not claim testing that was not performed.
2. **Core UI screens:** Export separately, **390 × 844px** each at **2× (780 × 1688px)**: new post with enabled toggle; explanation bottom sheet; recipient restriction/feedback state. Avoid crop around phone UI. Include states for on/off or dismissal if available.
3. **Interaction storyboard / movie:** Export **1920 × 1080px**, MP4 (H.264), 16:9, around 15–30 seconds; create a matching **1280 × 720px** poster. Demonstrate a proposed interaction rather than imply working capture prevention.
4. **Icon studies:** Show strongest **3–4 icons** in a **1200 × 450px** presentation frame, with consistent strokes, small-size samples (24/32/48px), and a one-sentence explanation of trade-offs.
5. **Poster / project image:** Once the source designs are refined, create a dedicated composite **1440 × 900px** hero image for the project card and first fold.
6. **Real iteration notes:** Capture specific alternative designs, stakeholder feedback if externally shareable, and what you personally recommended. Distinguish historical iterations from portfolio-only improvements.

## Writing guardrails

- Credits: owner created UI designs and concept video; broader framing/feasibility work was collaborative. Do not silently assign sole ownership of the entire product initiative.
- Status: concept/not publicly launched; don't invent shipped functionality, metrics, validation, or research participants.
- The persona is a design artifact; do not imply independently verified interviews.
- UI drafts sometimes say screenshot blocking is guaranteed or that a user was notified. On the site, label these as **proposed behavior subject to platform feasibility**.
- Use `#0072FC`, white backgrounds, dark typography, and accessible hover/reduced-motion patterns.

## Portfolio refinement after assets

- Replace the comparison schematics and individual-screen placeholders with actual screenshots.
- Embed the concept video with captions and a poster.
- Add one honest **decision/outcome** callout showing what options were weighed, what was selected (if known), and what remains unvalidated.
- Test the mobile and desktop rendering, keyboard focus, performance, and password-protected recruitment workflow.

## Approved design exploration update

- Upload `design-exploration.webp` (2048 × 1564px) to `public/safeshare/` on branch `safeshare-approved-design-exploration`.
- This updates section 04, replacing the generic comparison schematic with the owner's annotated A/B exploration.
- Keep the original Figma frames editable. When revising next, make sure the `Learn more` label has independent spacing from the icon and identify the state of the selected toggle.
- The new code displays a graceful fallback until the image is uploaded. Please upload before merging.
