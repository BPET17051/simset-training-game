# simset-training-game

Before any work, read `docs/HANDOFF.md` (current state, decisions, next steps)
and `docs/mission-layout.md` (layout/video history).

- Pushing to `main` deploys to production (Vercel). Push, merge or deploy only
  with the owner's explicit approval; use a feature branch + Vercel preview first.
- This repo is public: never commit student data, rosters or secrets.
- Since 2026-09-25 the game (`index.html`, `Demo5.js`, `components/`) is the client's
  original Drive export, byte for byte. Do not modify it without the owner's approval.
- Tests: `node --test tests/ios-smooth.test.cjs tests/performance-assets.test.cjs upload/tests/api.test.js`
