# Development handoff: post-game recording upload

Last updated: 2026-09-24 (end of session, home computer). Read this file before
changing anything. It is written so a new Claude Code session can continue with
no access to the previous conversation.

## 1. Where things are

| What | Where |
| --- | --- |
| Game source (this repo) | `github.com/BPET17051/simset-training-game`, branch `main`. **Repo is public.** |
| Production | `https://simset-training-game.vercel.app` (Vercel project `simset-training-game`, team scope `jedis-projects-c5af893d`). Every push to `main` auto-deploys to production. |
| Upload page (demo) | `https://simset-training-game.vercel.app/upload/` (`#upload` student form, `#review` teacher dashboard, `#end` mock end screen) |
| Standalone mockup | Private-by-default claude.ai Artifact, shared publicly by the owner: `https://claude.ai/artifact/S2XC8mse6oxtWYHmF4Qcjw`. Its source is **not in this repo** (see section 9). |

The repo carries ~1 GB of video/.fla. For code-only work, a blobless sparse clone
is enough and takes seconds:

```bash
git clone --filter=blob:none --no-checkout https://github.com/BPET17051/simset-training-game.git
cd simset-training-game
git sparse-checkout set --no-cone "*.js" "*.html" "*.md" "tests/" "docs/" "upload/"
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
3. Point `SimsetTrainingUI.UPLOAD_URL` in `training-ui.js` at the deployed Apps
   Script URL, bump the query string, preview, then release.
4. Remove the demo bar, the `#end` mock view and `resetDemo` from the real page.
5. Pilot with 3-5 learners and a teacher before opening to everyone.
