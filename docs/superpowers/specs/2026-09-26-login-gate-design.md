# Siconverse login gate: design (revision 2, client-side)

Date: 2026-09-26. Revision 2 replaces the server-side (Vercel Middleware) design
of the same day at the owner's request. Status: awaiting owner approval, together
with the implementation plan
`docs/superpowers/plans/2026-09-26-login-gate.md`.

## Goal

A login step for **ordinary students** before the SIMSET game at
`https://simset-training-game.vercel.app`: one shared username and password for
the whole cohort, remembered on the device after a successful login.

## Accepted limitation (owner decision, 2026-09-26)

The check runs in the browser. Anyone with technical knowledge can skip the login
page or load the game files directly (the repo and site are public). The owner
explicitly accepted this. The goal of this phase is a normal login step for
ordinary students, not protection against determined users. No server-side
checks, no Vercel Middleware, no paid services, and the repo stays as it is.

## Decisions

| Topic | Decision |
|---|---|
| Mechanism | Client-side check only; static files on the free Vercel plan. |
| Credentials | One shared username and password, set by the teacher about every 6 months. The owner applies them with a local script. |
| Storage of credentials | **Never in plaintext.** The repo holds only `login/credentials.js`, which contains a random salt, the iteration count and a PBKDF2-SHA256 hash of `username + "\n" + password`. The real values are never written to the repo, docs, plans, tests or commits. |
| Username matching | Case-insensitive, ignoring leading and trailing spaces (so students can type in lower case). The password is case-sensitive. |
| Remember login | After a correct login the browser stores the current hash (`localStorage`, falling back to `sessionStorage`). The game checks that the stored value equals the current hash, so **changing the credentials logs everyone out**. There is no expiry otherwise. |
| Game files | `Demo5.js`, `components/`, images and videos are unchanged. `index.html` gets **3 script tags** in `<head>` (the gate). This is necessary, because without it the game URL skips the login. |
| Look | Pixel-art theme matching the game: `Assets/bg.jpg` background, chunky bordered card, blue pixel button, "Siconverse" wordmark (or `login/logo.png` once the ChatGPT-generated logo exists). Thai UI text. Works on phones. |
| Cost | Free: static files only, nothing new on Vercel. |

## Architecture

```
/ (index.html = game)            /login/ (login page)
  <head>                           form ─► SiconverseAuth.check()
    login/auth.js                          ├─ wrong ─► Thai error
    login/credentials.js                   └─ right ─► remember(hash)
    login/gate.js ── not remembered ──►        location.replace(next || "/")
  </head>          location.replace("/login/?next=…")
```

### Units

1. **`login/auth.js`**: a UMD module (`window.SiconverseAuth`, usable from Node
   tests) with pure logic: `derive(username, password, cfg)` (PBKDF2 via Web
   Crypto), `check()`, `isRemembered(cfg)`, `remember(cfg)`, `safeNext(next)`,
   `loginUrl(location)`. It has no DOM access except `location` and storage
   passed in.
2. **`login/credentials.js`**: generated, no plaintext:
   `window.SICONVERSE_LOGIN = {version, iterations, salt, hash}`.
3. **`login/gate.js`**: runs synchronously in the game's `<head>` before CreateJS
   loads. If not remembered, it calls `location.replace(loginUrl)` before any
   game asset starts downloading.
   - Fails **open** if `credentials.js` did not load or storage is unusable in
     this browser. A network hiccup or a privacy mode must never lock students out
     or cause a redirect loop. This is consistent with the accepted limitation.
4. **`login/index.html`**: the themed login page (inline CSS and JS). If the
   device is already remembered it forwards immediately.
5. **`tools/set-login.mjs`**: an owner-run Node script. It asks for the username
   and password interactively (input is not echoed, and nothing is passed as
   command-line arguments that could land in shell history). It generates a new
   random salt and writes `login/credentials.js`, bumping `version`.
6. **`docs/LOGIN-ADMIN-TH.md`**: a Thai guide covering first setup, changing
   credentials every 6 months, and adding the logo.

### Parameters

- PBKDF2-SHA256, 150,000 iterations, 16-byte random salt, 32-byte output,
  base64. This takes about 0.1-0.3 s on a phone, once per login. It slows offline
  guessing of the short password from the public hash. It does not prevent it,
  which is part of the accepted limitation.
- Storage key `siconverse-auth`.
- `safeNext` accepts only same-site paths that start with a single `/` (it
  rejects `//x`, `/\x` and absolute URLs). The default is `/`.

## Login page design

- Full-screen `../Assets/bg.jpg` with a dark overlay, like the game framing.
- Card: white, a 4px dark border, a hard offset shadow, and square pixel corners.
- Wordmark "Siconverse": the pixel display font *Press Start 2P* (Google Fonts)
  with a yellow-to-red gradient, a white outline and a navy shadow, matching the
  game's title art. `login/logo.png` replaces it automatically when present.
- Thai text uses the game's font stack (`'Google Sans', Tahoma, sans-serif`).
- Fields: ชื่อผู้ใช้, รหัสผ่าน (with a show/hide toggle). Button **เข้าสู่เกม**
  (game blue `#1f6fe5`, a thick navy border, and a bottom shadow that presses in).
- States: checking ("กำลังตรวจสอบ..."), error ("ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง"),
  not configured ("ระบบยังไม่พร้อม กรุณาติดต่อผู้ดูแล").
- Helper text: "ติดต่ออาจารย์ผู้สอนเพื่อขอชื่อผู้ใช้และรหัสผ่าน".
- Responsive (the card fits 320 px wide; scrolls on short landscape phones), with
  visible keyboard focus and labelled inputs.

## Testing

- **Unit (`node --test`):** `derive` is deterministic, normalises the username,
  and is case-sensitive for the password; `check` passes and fails correctly; the
  output of `buildCredentials` has no plaintext and changes with the salt;
  `isRemembered` becomes false after rotation; `safeNext` and `loginUrl` cases;
  the gate decision including fail-open cases.
- **Static checks:** `index.html` has the three tags in `<head>` before
  `createjs.min.js`; `Demo5.js` keeps its original hash; `login/credentials.js`
  has the expected shape.
- **Preview (after the owner generates real credentials):** first visit to `/`
  goes to `/login/`; a wrong password shows the error; the right one opens the
  game, and a reload stays in; a lower-case username works; after regenerating
  the credentials the game asks for login again; 375-px phone layout; no console
  errors.
- **Regression:** `tests/ios-smooth.test.cjs` and
  `tests/performance-assets.test.cjs` still pass.

## Rollout

Feature branch `feature/login-gate`, then the owner runs `tools/set-login.mjs`
and commits `login/credentials.js`, then the Vercel preview is checked, then the
owner says **"ขึ้นเว็บจริงได้"**, then `main`.

## Out of scope

Real protection of game files, server-side checks, rate limiting, a private repo,
per-user accounts, logout, tracking, and generating the logo (done separately
with ChatGPT).

## Superseded

Revision 1 (Vercel Routing Middleware, HMAC cookie, firewall rate limit, private
repo) is kept in git history (commit `fb7d654`) in case real protection is needed
later.
