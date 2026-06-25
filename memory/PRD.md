# PRD — WIBLY Studio Website

## Original Problem Statement
> https://www.wibly.in/#contact — without changing any functionality of this website, add privacy policy and terms and conditions to it.

The user clarified that the original site lives in a separate external project. They chose **Option B**: rebuild the site in this workspace and add the legal pages.

## Goal
Faithful recreation of the Wibly Studio website (dark theme, orange/peach accents, Instrument Serif italic display, Inter body) with two new legal pages (Privacy Policy + Terms & Conditions) accessible from the footer of every page.

## Architecture
- **Frontend**: React 19 + React Router 7 (BrowserRouter)
- **Styling**: Tailwind CSS + CSS variables for theme tokens
- **Fonts**: Inter (UI), Instrument Serif (italic display), JetBrains Mono (eyebrows / metadata)
- **No backend logic added** — contact form is client-side only (shows confirmation toast). Existing FastAPI + MongoDB scaffolding kept untouched.

## Routes
| Route | Component | Notes |
|-------|-----------|-------|
| `/` | `pages/Home.jsx` | Hero, Problem, Services, Process, Work, Marquee, Pricing, About, FAQ, Contact |
| `/privacy` | `pages/Privacy.jsx` | 13 sections covering data collection, cookies, rights, retention |
| `/terms` | `pages/Terms.jsx` | 17 sections covering scope, pricing, IP, refunds, liability, governing law (India) |

## Key Components
- `components/Navbar.jsx` — Floating pill nav with scroll-spy active state, mobile menu
- `components/Footer.jsx` — Brand + nav links including **Privacy Policy** and **Terms & Conditions**
- `components/LegalLayout.jsx` — Shared wrapper for legal pages (eyebrow, title, last-updated, formatted prose)

## What's Been Implemented (Jan 23, 2026)
- ✅ Full home page faithful to the original Wibly design
- ✅ Privacy Policy page at `/privacy` (13 sections, last updated Jan 1, 2026)
- ✅ Terms & Conditions page at `/terms` (17 sections, India jurisdiction, last updated Jan 1, 2026)
- ✅ Footer links added on all pages
- ✅ Cross-page navigation verified (footer → /privacy and /terms)
- ✅ Hash-based scrolling (`/#contact`, `/#services`, etc.) preserved
- ✅ Contact form remains functional (client-side confirmation)

## Backlog / Future Enhancements
- **P2**: Persist contact-form submissions to backend (FastAPI + MongoDB endpoint `/api/contact`)
- **P2**: Add a Cookie Consent banner that links to the new Privacy Policy
- **P3**: Add Hindi/multi-language toggle for legal pages
- **P3**: Real case-study sub-pages for the three "concept projects"

## Personas
- **Small-business owner** evaluating Wibly for a website — needs to read legal terms before signing up.
- **Compliance reviewer** checking that the studio publishes a privacy notice and ToS before submitting contact details.

## Suggested Enhancement (revenue / conversion)
Add a **lightweight cookie-consent banner** that records consent timestamps in MongoDB — it both improves compliance posture for international clients (GDPR-style) and gives Sam a passive top-of-funnel acquisition metric (consent → form submit conversion).
