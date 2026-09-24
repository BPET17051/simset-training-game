# simset-training-game

Before any work, read `docs/HANDOFF.md` (current state, decisions, next steps)
and `docs/mission-layout.md` (layout/video history).

- Pushing to `main` deploys to production (Vercel). Push, merge or deploy only
  with the owner's explicit approval; use a feature branch + Vercel preview first.
- This repo is public: never commit student data, rosters or secrets.
- Tests: `node --test tests/training-ui.test.cjs tests/mission-layout.test.cjs upload/tests/api.test.js`
- After editing `Demo5.js` or `training-ui.js`, bump their query strings in `index.html`.
