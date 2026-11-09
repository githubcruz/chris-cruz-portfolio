# Portfolio — recruiter-ready launch checklist

Status: in progress. The homepage, navigation, About page, online resume, custom cursor, password-gate code, and SafeShare case-study narrative are in the repository. Do not describe partially filled case studies as finished.

## 1. Fast release blockers

- [ ] **SafeShare final persona**: upload `public/safeshare/persona-final.webp` (approved 2048 × 1194 landscape). This is required by the case-study update PR before merge.
- [ ] **Portfolio access test**: check `PORTFOLIO_PASSWORD` and `PORTFOLIO_SESSION_SECRET` are present in Vercel Production (and Preview for preview links). Test the intended password in a private browsing session, followed by a direct nested case-study link.
- [ ] **Desktop/mobile QA**: review homepage navigation, project cards, SafeShare reading experience, About portrait, resume page, mailto and LinkedIn links, all at desktop and ~390px mobile.
- [ ] **Recruiter share package**: send a working password and one or two links to relevant case studies, rather than only the homepage.

## 2. Highest-value content to complete

### SafeShare / Screenshot Protection

- [x] Approved Design Exploration image and A/B decision rationale.
- [ ] Final Alex Ruiz persona (image prepared).
- [ ] Polish **hero** two-phone composition, 2048 × 1280px; maintain real UI.
- [ ] Refine **problem/quote** composition, 2048 × 853px; headline concise, notification legible.
- [ ] Tighten **UI flow**, 2048 × 1280px; proposed detection, protection choice, feedback.
- [ ] Export **3 individual high-resolution screens**, 390 × 844px design at 2× PNG or WebP.
- [ ] Concept motion video if permitted, 1920 × 1080 MP4 with 1280 × 720 poster.
- [ ] Replace remaining UI / motion placeholders only with approved artifacts.

### Meta Blueprint (priority for design-system / creative-direction interviews)

- [ ] One **hero** screenshot/composition, 1600 × 900px.
- [ ] Show before/after course examples, two images 1200 × 750px each if available.
- [ ] Reusable Figma component board, 1600 × 900px.
- [ ] One example of motion or multilingual production, 1600 × 900px or MP4.
- [ ] Verify and explain any production time savings / engagement figures, and attribute claims accurately.

### BART fare gates (priority for user-research interviews)

- [ ] Context / existing gate photo or approved sketch 1600 × 900px.
- [ ] Research findings and user journey 1600 × 900px.
- [ ] Before/after gate interactions or design recommendations 1600 × 900px.
- [ ] State research methods, sample and metrics *only* if supported by the original materials.

### Motion & Visual Design

- [ ] Add a concise showreel or select actual projects. Remove speculative examples before sharing.
- [ ] If no approved assets are available, temporarily de-emphasize or hide the unfinished collection, not invent examples.

## 3. Last checks

- [ ] No unreleased claims presented as shipped, no invented user research, no misleading metric attribution.
- [ ] Text remains readable at mobile sizes and animations respect reduced-motion preferences.
- [ ] Hero and project cards load without large layout shifts.
- [ ] Password access works for a recruiter without instructions beyond the password.
- [ ] Site communicates **Senior Visual & Product Designer** positioning with visible project evidence above the fold.
