# Task 1 report: login auth primitives and credential generator

## Status

DONE

## Files changed

- `tests/login.test.mjs` — added the eight specified login tests, using only the explicit made-up values from the Task 1 brief.
- `login/auth.js` — added username normalization, PBKDF2 verification, storage-backed remember state, fail-open gate decisions, and safe redirect helpers.
- `tools/set-login.mjs` — added an interactive credential generator that persists a salted PBKDF2 hash, never the username or password.

## TDD evidence

1. Added `tests/login.test.mjs` before creating either production file.
2. Ran `node --test tests/login.test.mjs`; it failed as expected with `ERR_MODULE_NOT_FOUND` for `tools/set-login.mjs`.
3. Added `login/auth.js` and `tools/set-login.mjs` from the brief.
4. Ran the full test file. The six auth behavior tests and generated-credentials shape test passed. The one failing test is `index.html loads the gate in <head> before CreateJS; the game code is untouched`, failing at the gate script presence assertion. This is the planned Task 3 wiring test.

## Commands and results

- `node --test tests/login.test.mjs` before implementation — failed as expected: `ERR_MODULE_NOT_FOUND` for `tools/set-login.mjs`.
- `node --test tests/login.test.mjs` after implementation — 8 tests, 7 passed, 1 failed; the only failure is the Task 3 index wiring test described above.
- `node --test --test-name-pattern='derive|buildCredentials|remember|falls back|gateDecision|safeNext|credentials\.js, if present' tests/login.test.mjs` — 7 passed, 0 failed.
- `git diff --check` — passed.

## Self-review

- Production helpers follow the brief’s API and implementation, and tests use only the approved dummy test values.
- The credential generator uses a random 16-byte salt by default, defaults to 150000 PBKDF2 iterations, and renders only version, iteration count, salt, and derived hash in the credentials assignment.
- I did not inspect or generate any real credentials.
- The remaining full-suite failure is the intentionally unimplemented Task 3 index wiring assertion.

## Commit

Required commit message: `feat(login): client-side auth helpers and credential tool`
