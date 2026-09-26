# Development handoff: SIMSET training game

Last updated: 2026-09-24 (end of session, home computer). Read this file before
changing anything. It is written so a new Claude Code session can continue with
no access to the previous conversation.

## 0. Update 2026-09-25: game restored to the client's original

After the 2026-09-25 meeting the client asked for the game to match the original
exactly (option "A, 100% original"). The original is Google Drive folder `Demo5`
(id `19-4Qtg4Lbd6QGpWcdMTlKPaun1hUFcKr`, uploaded 2026-09-03), which is identical
to commit `11baa63`.

- `index.html` is now a byte-for-byte copy of the original `Demo5.html`;
  `Demo5.js` and `components/video/src/video.js` are the original files
  (git blob hashes equal to `11baa63`).
- Removed: `mission-layout.js`, `training-ui.js`, their tests
  (`tests/mission-layout.*`, `tests/training-ui.test.cjs`), and the unused
  `images/panel_left.png` / `images/panel_right.png`.
- This drops every game change listed in sections 3-8 below, including known
  fixes of the original: frame 25 no longer auto-advances to frame 26 (end
  screen), the video close button is at x 1123.5 again (can be covered by the
  video), consultation videos are at x 570.8 (off-centre), the end-of-training
  recording notice and the upload link are gone, and there is no loading
  screen, full-bleed layout, rotate prompt or video prefetching. The owner was
  told this before choosing A.
- Kept (not part of the game): `docs/`, `CLAUDE.md`. The `upload/` demo page was
  kept at first and then removed (see 0.2).
- Sections 3-8 below describe the pre-revert state and are kept as history.
  Any future change to the game needs the owner's approval first.

## 0.1 iOS smoothness (2026-09-25)

Preview branch `revert/original-demo5` adds a dependency-free iOS adapter without
editing `Demo5.js`, `components/video/src/video.js`, images or visible game design.
The causes addressed are: C1 retina 3x canvas over-rendering; C2 timeout-based
ticks; C3 mouse-over hit testing on touch; C4 late touch enablement; C5 missing
viewport control; C6 videos not marked for inline playback; and C7 three 1080p
clips tagged above common iPad support (High@5.0).

- `components/sdk/ios-smooth.js` caps reported DPR at 2, uses RAF-synchronised
  CreateJS ticks, disables mouse-over and enables CreateJS touch on touch-only
  devices, marks existing/future videos `playsinline`, and provides an opt-in
  green debug readout. `MAX_RATIO = 2` and `MAX_CANVAS_PIXELS = Infinity` are the
  calibration knobs; do not change the pixel cap without owner approval.
- `index.html` loads the adapter before `Demo5.js` and tunes the stage after its
  original `enableMouseOver()`. The viewport meta tag (fix for C5) was added and
  then **removed** on 2026-09-25: it moved the canvas 52px on iPhone emulation
  (y -69 -> -121), a visible layout change, and keeping it would need a change to
  the original 1280px container. C5 is therefore not addressed. `patient.mp4`, `family.mp4` and `nurse.mp4` were losslessly
  re-tagged High@4.0; decoded-frame MD5s match commit `c31d07a`.
- Slow-network crash (pre-existing in the original, found on production
  2026-09-25): CreateJS gives each file 8 s by default. On a first visit over weak
  mobile data a slow atlas was marked failed, `queue.getResult()` returned
  undefined and `handleComplete` threw `reading 'getContext'` (blank white game).
  `index.html` now sets `createjs.LoadItem.LOAD_TIMEOUT_DEFAULT = 120000` before
  `loadManifest`. No visual change.
- Debug with `<preview URL>/?debug=1`; add `&dpr=1.5` to try a lower backing
  ratio without changing deployed defaults. The box reports CreateJS/RAF fps,
  real/used DPR, canvas/CSS dimensions, hover mode, video readiness/inline state
  and recent JavaScript errors.
- Local Chromium emulation: desktop frame 0 pixel diff was 0 at 1280x720 DPR 1
  and 1920x1080 DPR 2. iPhone emulation reported tick 26.9, RAF 132, real/used
  DPR 3/2, canvas 2076x1168, inline playing video and no game errors. iPad
  reported tick 27.8, RAF 144, DPR 2/2, canvas 2560x1440, inline video and no
  game errors. iPad frame 0 and frame 4 canvas fractions matched `c31d07a`
  exactly: `[0, 0.063687, 1, 0.804469]`.
- The emulation numbers above were taken with the viewport tag still present.
  Real Safari testing is still required for G1 (iPad tick below 24), G2 (autoplay
  blocked/frozen first frame) and G3 (Safari reload from decoded-image memory).

## 0.2 Upload / recording-submission system removed (2026-09-25)

The owner cancelled the post-game recording upload feature and the planned
Google Apps Script backend. Removed from the repo and the site: `upload/`
(`index.html`, `api.js`, `tests/api.test.js`) and `images/logo_title.png` (only
that page and the old loading screen used it; it is not in the original export).
`/upload/` no longer exists on production. **Sections 2-10 below describe that
removed feature and are kept only as history; do not act on their next steps.**
The standalone claude.ai Artifact mockup (section 1) and the home-computer
`upload-mockup/` folder are outside this repo and were not touched.

## 0.3 Siconverse login (2026-09-26)

A shared-credential login page in front of the game, branch `feature/login-gate`.

- **Client-side only, by owner decision.** Technical users can bypass it (skip the
  page or load game files directly). It exists as a login step for ordinary
  students. There is no server-side check, no Vercel Middleware, no paid services,
  and the repo stays public. The server-side design (revision 1) is kept in commit
  `fb7d654` in case real protection is needed later.
- Files: `login/auth.js` (logic, PBKDF2 via Web Crypto), `login/gate.js` (runs in
  the game `<head>` and redirects to `/login/` if not remembered; fails open),
  `login/index.html` (themed page with `login/logo.png` and `login/icon.png`),
  `login/credentials.js` (generated: version, iterations, salt and hash only),
  `tools/set-login.mjs` (owner tool). `index.html` has 3 added `<script>` tags
  before CreateJS; `Demo5.js` is unchanged.
- **Credentials are never stored in plaintext** in any file, commit or doc. The
  teacher sets them about every 6 months; the owner runs
  `node tools/set-login.mjs`, then commits `login/credentials.js`. Changing them
  logs everyone out. The username is case-insensitive; the password is
  case-sensitive. The Thai guide is `docs/LOGIN-ADMIN-TH.md`.
- Spec: `docs/superpowers/specs/2026-09-26-login-gate-design.md` (rev 2). Plan:
  `docs/superpowers/plans/2026-09-26-login-gate.md`.
- Tests: `tests/login.test.mjs`, `tests/login-page.test.mjs` (a synchronous
  Web Crypto failure must not freeze the button, commit `809e3c4`).
- The logo art came from ChatGPT as RGB with a baked-in checkerboard; its
  background was removed before resizing. Replacements must be real transparent
  PNGs.
- Working copy: `C:\Users\Apisit Tangla\.codex\worktrees\simset-training-game-login-gate`.
  Codex reported filesystem corruption on drive D (2026-09-26), so do not use the
  old clones on D.

## 1. Where things are

| What | Where |
| --- | --- |
| Game source (this repo) | `github.com/BPET17051/simset-training-game`, branch `main`. **Repo is public.** |
| Production | `https://simset-training-game.vercel.app` (Vercel project `simset-training-game`, team scope `jedis-projects-c5af893d`). Every push to `main` auto-deploys to production. |
| Standalone mockup (feature cancelled) | Private-by-default claude.ai Artifact, shared publicly by the owner: `https://claude.ai/artifact/S2XC8mse6oxtWYHmF4Qcjw`. Its source is **not in this repo** (see section 9). |

The repo carries ~1 GB of video/.fla. For code-only work, a blobless sparse clone
is enough and takes seconds:

```bash
git clone --filter=blob:none --no-checkout https://github.com/BPET17051/simset-training-game.git
cd simset-training-game
git sparse-checkout set --no-cone "*.js" "*.html" "*.md" "tests/" "docs/"
git checkout main
```

On Git Bash for Windows, do not start sparse patterns with `/` (MSYS rewrites
them to `C:/Program Files/Git/...`). To serve the game locally you need the full
assets (full clone, or a copy of the Drive export).

## 2. Goal of the 2026-09-24 session

After the game ends, learners must record the consultation from an attached
case (audio or video, voice audible, no face or identifying detail) and send the
file. Teachers must then be able to review and score each submission. The
session delivered a clickable demo of that whole flow, put it on the live site
for a presentation on 2026-09-25, and chose the real backend.

## 3. What was done (commit `467117f`, live on `main`)

`feat: link the end screen to a demo upload page, and keep the notice on-screen at any size`

| File | Change |
| --- | --- |
| `upload/index.html` | New. Three views switched by URL hash: `#end` (mock end screen), `#upload` (student form: student ID, first/last name, audio/video file, PDPA consent, progress bar, reference number), `#review` (teacher dashboard: totals, filter, search, playback, score 0-10, comment). Game-matched theme (tile background, blue pixel buttons, ER green `#006A49`), fonts Kanit + Sarabun. Reuses `../images/logo_title.png` and `../Assets/bg.jpg`. A "โหมดสาธิต · ข้อมูลสมมติ" bar marks it as a demo. |
| `upload/api.js` | New. Pure helpers plus `createMockApi()`. All data is fake and lives in the viewer's `localStorage` (`simset-upload-mock-v1`). |
| `upload/tests/api.test.js` | New. 17 Node tests for `upload/api.js`. |
| `Demo5.js` (`frame_26`) | End notice now ends with `และส่งไฟล์ไปยัง` + a clickable link `หน้าส่งงาน SIMSET` (`target=_blank`) + `ขอบพระคุณที่ให้ความร่วมมือ`, only for learners who completed (declined learners keep their own message). Notice changed from `pointer-events:none` to `auto`. **Bug fix:** the notice was laid out in fixed 1280x720 stage px while `dom_overlay_container` is resized to the screen, so it was off-screen on windows smaller than 1280x720 and misplaced on larger ones. `placeEndNotice()` now re-maps position and scale on load and on every `resize`. |
| `training-ui.js` | New export `UPLOAD_URL = 'upload/#upload'` (single place to switch to the real backend URL). |
| `index.html` | Cache-busting query strings bumped: `Demo5.js?20260925-upload-link`, `training-ui.js?v=20260925-upload-link`. |

### Mock API contract (the future backend must keep these shapes)

```text
lookupStudent(studentId)                 -> Promise<{studentId, firstName, lastName} | null>
uploadFile(meta, file, onProgress)       -> Promise<{refNo, submittedAt}>   (rejects with Thai validation messages)
   meta = {studentId, firstName, lastName, consent}
listSubmissions()                        -> Promise<Row[]>  Row = {studentId, firstName, lastName, inRoster,
                                            status:'pending'|'submitted'|'reviewed', attempts, refNo, fileName,
                                            fileSize, submittedAt, score, comment, fileUrl}
saveReview(refNo, {score, comment})      -> Promise<void>   (score = integer 0-10)
resetDemo()                              -> Promise<void>   (demo only)
```

Validation rules (in `validateSubmission`): student ID `/^\d{7}$/` (placeholder),
first and last name required, consent required, extensions
`mp3 m4a wav aac mp4 mov webm`, max 500 MB, non-empty. Reference number format
`SIM-YYYYMMDD-<last 4 of ID>-HHMMSS` (local time, de-duplicated within a second).
The latest submission per student is the one reviewed; resubmission is allowed.

## 4. Decisions already made (do not re-open without the owner)

- **Backend = Google Apps Script** (not Vercel functions): teachers log in with
  Google accounts, a Google Sheet is the database, files go to Google Drive.
  Chosen because the teacher review step matters most.
- **Files go to the project owner's own Google Drive** (100 GB plan, about 34 GB
  free on 2026-09-24).
- Learners identify with **student ID + first name + last name**; the recording
  itself must not show a face.
- **Audio is recommended** (5-10 MB); video is still accepted. Large files must
  be uploaded in chunks (resumable upload) with progress and retry.
- The end-screen link must be really clickable and open in a new tab so the
  game stays open.
- The upload UI matches the game's look. No university or faculty logo or name
  on the upload pages.
- Delivery flow used this session: push a feature branch, check the Vercel
  preview, then fast-forward `main` only after the owner approves.

## 5. Tests and checks run

| Check | Result |
| --- | --- |
| `node --test upload/tests/api.test.js` | 17/17 pass |
| `node --test tests/training-ui.test.cjs` | 4/4 pass |
| `node --test tests/mission-layout.test.cjs` | 9/9 pass |
| `node --check Demo5.js` | OK |
| Browser, local, upload demo: all 13 manual checks (empty-form errors, roster lookup, PDF rejection, real WAV upload + playback, score validation, filter/search, two-tap reset, reload persistence, 375 px layout, keyboard-only flow, no console errors) | Pass |
| Browser, local, game jumped to end frame: notice position at 1024x576, 1024x768, 1280x720, 1920x1080, including live resize | Inside the stage at all sizes, below the restart button |
| Production after deploy: new `Demo5.js`/`training-ui.js` served, `/upload/` 200, end notice visible with link `.../upload/#upload`, logo loads, no console errors | Pass |
| Owner, manually: Artifact mockup on desktop and phone | "No problems" |

## 6. Not tested yet

- A real phone against production (only emulated widths were checked).
- Safari / iOS in general.
- Playing the whole game naturally to the end. The end frame was reached with
  `exportRoot._simsetConsentAccepted=true; exportRoot.gotoAndStop(25);` in the console.
- Clicking the end link on production and seeing the new tab open (the test
  browser does not show popups; the `href`/`target` were verified).

## 7. Known issues and limits

- The upload page is a **demo**: nothing leaves the browser. Each viewer sees
  their own fake data. A file uploaded in one tab can only be played back in the
  same tab (in-memory blob URL).
- Deferred minor items: reset during an in-flight upload is not cancelled; blob
  URLs are not revoked on reset; a very long unbroken file name may overflow at
  375 px.
- `upload/tests/` is deployed with the site (harmless, static).
- Simulated progress always shows 20-40 steps so small files still show a bar.

## 8. Be careful with

- **Public repo**: never commit real student data, rosters, emails of learners,
  or Apps Script secrets/keys.
- Pushing to `main` deploys to production immediately. Rollback: Vercel
  dashboard → Deployments → previous production deployment → Instant Rollback.
- When `Demo5.js` or `training-ui.js` changes, bump their query strings in
  `index.html`, or returning browsers keep the old file.
- Anything in `dom_overlay_container` is in 1280x720 stage coordinates but is not
  scaled by the export; follow the `placeEndNotice()` pattern for new overlay UI.
- `Demo5.js` is an Adobe Animate export (CRLF). Keep edits surgical; re-exporting
  from `Demo5.fla` would overwrite hand edits in `frame_*` functions.
- Research consent wording, scoring and scenario text in the game are not to be
  changed without the owner.
- Remote branch `feature/upload-demo` points at the same commit as `main` and can
  be deleted when no longer needed.

## 9. Work that lives outside this repo (will not arrive with `git pull`)

On the home computer, folder `D:\Jedi_EX_HDX_BAC01\01.Jedi_SIMSET\SIMSET_Project\SIMSET_ERtraining\`
(not a git repo):

- `upload-mockup/`: standalone version of the upload demo (source of the
  Artifact). `upload/` in this repo supersedes it; only needed to republish the Artifact.
- `docs/superpowers/plans/2026-09-24-simset-upload-mockup.md`: the plan Codex
  executed. **Outdated** (before the progress-bar and reset fixes). Do not
  re-run it.
- `.superpowers/sdd/.../progress.md`: Codex's execution ledger.
- `Demo-20260524T083227Z-3-001/`: Google Drive export of the game. Its
  `simset-training-game-drive-upload-*` folder matched production before
  `467117f`; it does not include this session's changes.
- `simset-training-game/`: a full clone of this repo still at `d1d56f1`
  (one commit behind `main`); run `git pull` before using it.
- Claude Code memory for that folder (`~/.claude/projects/.../memory/`) is local
  to the home computer; everything important from it is in this file.

## 10. Next steps, in order

1. **Collect answers from the 2026-09-25 meeting** (owner is asking):
   student roster as a Sheet (student ID, first name, last name, optional group);
   real student-ID format and examples; teacher Google emails and who reviews
   whom; scoring rubric (single 0-10 or per-section such as SBAR); submission
   window, late and resubmission policy; how learners receive the "attached
   case" and whether the upload page must show it; approved consent/PDPA wording
   and retention period; blind review or not; audio-only or video too, expected
   length; whether learners see scores; receipt by screen or e-mail; Excel export
   columns; pilot group and go-live date; support contact.
2. **Write a plan for the Apps Script backend** (then implement): `doGet` +
   `HtmlService` page reusing `upload/index.html`; replace `createMockApi()`
   with `google.script.run` calls of the same names (section 3 contract);
   chunked resumable upload to a Drive folder (files named
   `<studentId>_<timestamp>.<ext>`); Sheet rows for roster, submissions and
   reviews; teacher view restricted to an allowlist of Google accounts; Drive
   folder and Sheet shared only with teachers.
3. Agree with the owner/client how learners reach the upload page now that the
   game is the unmodified original (e.g. a link given outside the game, or an
   approved change to the original end screen). `training-ui.js` and its
   `UPLOAD_URL` were removed on 2026-09-25.
4. Remove the demo bar, the `#end` mock view and `resetDemo` from the real page.
5. Pilot with 3-5 learners and a teacher before opening to everyone.
