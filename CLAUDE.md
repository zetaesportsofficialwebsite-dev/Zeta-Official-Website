# ZeTa Esport

## Purpose

Esport club website template for ZeTa Esport — showcases team, roster, matches, and news.

## Mandatory Pipeline

Every task in this project follows the global 3-phase pipeline — no exceptions:

1. **Plan** — enter plan mode, explore codebase, get approval before any file edits
2. **Research** — spawn parallel agents (`claude-sonnet-4-6` / `claude-haiku-4-5`) to investigate patterns, APIs, design refs; synthesize with `claude-opus-4-8` before proceeding
3. **Develop** — implement with `claude-opus-4-8`; improvements restart the full cycle

At the end of every session, run `/update-dashboard` to sync progress to the business dashboard.

## Commands

```bash
# No build step — open index.html directly in a browser
# Or serve with: npx serve .
```

## Key Files

- `index.html` — homepage
- `css/` — stylesheets
- `js/` — scripts
- `assets/` — images and media

## Architecture Notes

Plain HTML/CSS/JS static site. No framework, no build step. Real client data (Kelab Sukan Elektronik ZeTa — a Bintulu, Sarawak esports event organizer, not a competing team) lives in `Clubs Background/` (`notes` + the two org-chart images) and drives every page: committee.html renders the real org chart and hierarchy, events.html lists the 8 real 2025-2026 tournaments/events, partners.html lists the real sponsors/partners sourced from those events. Gold (`--gold` in `css/global.css`) is the brand accent, matching the real ZT crest logo. Personal phone numbers from event posters are intentionally excluded from the site — contact routes through the club email/socials instead.

## Environment Variables

None — static site with no server-side logic.
