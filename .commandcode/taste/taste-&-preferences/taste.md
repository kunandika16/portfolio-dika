# Taste & Preferences
- Prefers to communicate in Bahasa Indonesia (Indonesian), and wants project content/copy written in Indonesian rather than English. Confidence: 0.9
- Wants the assistant to scan and study the existing project structure/codebase before starting implementation work (explore-first workflow). Confidence: 0.8
- Prefers clarifying scope with questions before large content work rather than guessing details (e.g., asked which projects, what format, what language — and answered). Confidence: 0.6
- Does not want build/verification commands run after every change; only run builds (e.g., `npx craco build`) when the user explicitly asks. Confidence: 0.9
- Prefers data-driven architecture: content/case-study data kept in a dedicated data file (e.g., `src/data/caseStudies.js`) keyed by id, with pages made dynamic from route params rather than static/dummy content per page. Confidence: 0.7
- When changing a project's metadata or assets (e.g., company name, cover image), expects the change applied consistently everywhere it appears (data file AND any page that displays it — e.g., homepage and work list), not just one spot. Confidence: 0.75
- For modals/overlays/lightboxes, prefers them rendered via `createPortal` to `document.body` so they are not clipped by parent containers with `filter`/`overflow-hidden` — plain `position: fixed` inside such containers is unacceptable. Confidence: 0.6
- On case-study article pages, image galleries should be shown as thumbnail cards placed at the very bottom (after the Result section), opening a detail/lightbox view only when clicked — not large inline images. Confidence: 0.75
- Prefers article/header hero images to use a fixed 16:9 ratio (`aspect-video`) fitting 1920×1080 at all breakpoints, rather than a responsive multi-ratio (e.g., 16/9 mobile → 21/9 desktop). Confidence: 0.8
