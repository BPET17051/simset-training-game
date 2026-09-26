# Siconverse login gate: design

Date: 2026-09-26. Status: approved in chat, awaiting written-spec review.

## Goal

Put a single shared login in front of the SIMSET game at
`https://simset-training-game.vercel.app` so that **only people who were given the
credentials can play**. The owner does **not** need to know who plays: no
per-user accounts, no tracking, no stored personal data.

## Decisions (made with the owner, 2026-09-26)

| Topic | Decision |
|---|---|
| Purpose | Keep outsiders out only (no identity, no analytics). |
| Credentials | One shared username + password for the whole cohort. The teacher sets a new pair about every 6 months and asks the owner to apply it. |
| Current values | Chosen by the teacher and given to the owner in person. The password is 6 characters. **Neither the username nor the password may be written in the repo, specs, plans, tests or commits** (the repo is public until step 3 of the rollout). Both live only in Vercel environment variables. |
| Password length | Teacher insists on 6 characters. Compensate with server-side rate limiting on login attempts. |
| Session length | Stay logged in until the password changes (cookie max-age 200 days). Changing the password invalidates every existing session. |
| Mechanism | Vercel Routing Middleware (`middleware.js` at repo root), free on the Hobby plan. Rejected: client-side JS check (a public repo makes it useless) and Vercel Password Protection (paid add-on, no username, cannot be themed). |
| Game files | Unchanged. `index.html`, `Demo5.js`, `components/`, images and videos stay as they are. |
| Login page look | New page, themed like the game using existing assets (`Assets/bg.jpg`, the game's colours and font). App name **Siconverse**. A logo image will be generated separately; until then the name is shown as styled text. |
| Repo visibility | **Must become private before launch.** A public repo lets anyone download and run the whole game without the login. This is an owner action on GitHub (confirmed separately at that step). |

## Architecture

```
browser ──► Vercel edge ──► middleware.js ──► static files (game, login page)
                               │
                               ├─ valid session cookie ─────────► continue
                               ├─ public login assets ──────────► continue
                               ├─ POST /login (form) ───────────► check, set cookie, redirect
                               ├─ page request, no session ─────► 302 /login/?next=<path>
                               └─ asset request, no session ────► 401
```

### Units

1. **`middleware.js`** (repo root, Edge runtime, default export). All request
   handling. It exports small pure helpers (`sessionToken`, `isPublicPath`,
   `safeNext`, `isPageRequest`) so that they can be unit-tested. It depends on
   `next()` from `@vercel/functions`, the documented way to continue a request in
   non-Next.js projects, so a `package.json` is added.
2. **`login/index.html`** (+ optional `login/logo.png`). Static, self-contained
   themed page. A plain `<form method="POST" action="/login">` works without
   JavaScript. A tiny inline script only shows error text and the show-password
   toggle.
3. **Vercel configuration (not code):** environment variables
   `SICONVERSE_USER`, `SICONVERSE_PASS` and `SICONVERSE_SECRET` (a random ≥32-byte
   value, generated once), set for Production and Preview. One Vercel Firewall
   rate-limit rule on `POST /login`.
4. **`docs/LOGIN-ADMIN-TH.md`**: Thai, step-by-step guide for the owner: first
   setup, changing the password every 6 months, the firewall rule, and where to
   put the logo.

### Session token

`token = base64url(HMAC-SHA256(key = SICONVERSE_SECRET, msg = "v1|" + USER + "|" + PASS))`

- Stored in cookie `sc_session`: `HttpOnly; Secure; SameSite=Lax; Path=/; Max-Age=17280000`.
- Verification recomputes the token and compares in constant time. Changing
  USER, PASS or SECRET changes the token, so all old cookies stop working.
- No server-side session storage is needed.

### Request rules

| Request | Result |
|---|---|
| Any path with a valid `sc_session` | continue |
| `GET /login`, `/login/`, `/login/*`, `/Assets/bg.jpg`, `/favicon.ico` | continue (public) |
| `POST /login` with correct username **and** password (constant-time compare) | `Set-Cookie`, `303` to `safeNext(next)` (a same-site path starting with a single `/`, otherwise `/`) |
| `POST /login` wrong | wait ~1 s, `303` to `/login/?e=1&next=…` |
| Unauthenticated page request (`GET`, `Accept` contains `text/html`) | `302` to `/login/?next=<path+query>` |
| Unauthenticated anything else (JS, images, video, range requests) | `401`, `Cache-Control: no-store` |
| Env vars missing | fail closed: `503` with a Thai message; never let traffic through |

Login-page responses and redirects use `Cache-Control: no-store`. The page also
sends `X-Robots-Tag: noindex`.

### Rate limiting (compensates for the 6-character password)

- **Primary:** a Vercel Firewall custom rule: path `/login`, method `POST`,
  action `rate_limit`, key `ip`, about **5 requests per 60 s**, with the excess
  denied for 15 minutes. The implementer must first confirm this is available on
  the project's current (Hobby) plan.
- **If it is not available on Hobby:** stop and ask the owner. The fallback is a
  shared counter in Upstash Redis (free tier via the Vercel Marketplace), which
  needs an extra account and environment variables.
- The ~1 s delay on wrong attempts stays in either case.

## Login page design

- Full-screen `Assets/bg.jpg` (the game's ER room) under a dark translucent
  overlay, like the game's own framing.
- Centred white card with a thick dark border and a hard offset shadow (the
  pixel-UI look of the game), and the game's font **Google Sans** with Tahoma
  fallback.
- Logo slot: `login/logo.png` if it exists. Otherwise the wordmark "Siconverse"
  in a yellow-to-red gradient with a white outline, matching the game's title
  lettering.
- Fields: Username, Password (with a show/hide toggle). Button **เข้าสู่เกม** in
  the game's blue pixel style.
- Thai error "ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง" when `?e=1`. Helper text
  "ติดต่ออาจารย์ผู้สอนเพื่อขอรหัสเข้าใช้งาน".
- Works at phone width (no horizontal scroll), keyboard accessible, visible focus.

## Testing

- **Unit (`node --test`):** token is deterministic and changes when USER, PASS or
  SECRET changes; `safeNext` rejects `//evil.com`, `https://…` and
  `/\evil`; public-path list; page vs asset detection; middleware decisions for
  every row of the request-rules table (build `Request` objects, check status,
  `Location` and `Set-Cookie`, with `next()` detected by its response header);
  missing env gives 503.
- **Preview deployment (env vars set for Preview):**
  - `/` without a cookie redirects to `/login/`.
  - `/Demo5.js` and `/videos/family.mp4` return 401 without a cookie.
  - Wrong login shows the Thai error; right login reaches the game.
  - With the cookie, a `Range: bytes=0-1000` request on a video returns `206`, and
    the game plays through the intro video.
  - Changing `SICONVERSE_PASS` and redeploying forces a new login.
- **Regression:** existing `tests/ios-smooth.test.cjs` and
  `tests/performance-assets.test.cjs` still pass, and `Demo5.js` keeps its
  original blob hash.
- **Usage:** a week after launch, check Vercel Usage (middleware / edge
  requests) against the Hobby quota.

## Rollout

1. Build on branch `feature/login-gate` and verify on the Vercel preview.
2. The owner sets the Production env vars in Vercel (Codex never sees the password).
3. The owner confirms, then the repo is made private
   (`gh repo edit … --visibility private`). Confirm Vercel still deploys, including
   the Git LFS videos.
4. The owner says **"ขึ้นเว็บจริงได้"**, then fast-forward `main` and verify production.
5. Add the firewall rule, then verify that 6 fast wrong attempts get blocked.

## Out of scope

Per-user accounts, logout button, "who played" tracking, password reset flow,
changing the game, and generating the logo (done separately with ChatGPT; the
prompt is in the chat of 2026-09-26).

## Risks and notes

- The Hobby plan is for personal, non-commercial use. The owner or client must
  confirm eligibility with Vercel. This applies to the project whether or not the
  login is built.
- The 6-character password derived from the username is guessable. Rate limiting
  reduces online guessing but does not stop a leaked password; rotation (every
  6 months, or at once if it leaks) is the remedy.
- `package.json` makes Vercel run an install step, so the first preview build
  must succeed before merging.
