# Siconverse login gate (client-side) implementation plan

> **For Codex (executor):** Work on branch `feature/login-gate` (fetch it from `origin`;
> it holds the spec). Do the tasks in order and tick each `- [ ]`. Each task ends with
> a passing test run and a commit. **Do not push until the owner approves this plan**,
> and never push, merge or deploy to `main`. Read `CLAUDE.md` and `docs/HANDOFF.md`
> first. Every code block below was run and tested before this plan was written
> (8/8 tests passing, login flow checked in a browser). Copy the blocks verbatim.

**Goal:** A themed login page with one shared username and password in front of the
game. The check runs in the browser only (owner-accepted limitation). Remember the
login until the credentials change.

**Spec:** `docs/superpowers/specs/2026-09-26-login-gate-design.md` (revision 2).

**Architecture:** Three new static files under `login/` (`auth.js` for the logic,
`gate.js` for the game-page check, `index.html` for the login page), one generated
file (`login/credentials.js`: salt and PBKDF2 hash only), and one owner tool
(`tools/set-login.mjs`). `index.html` (the game page) gets 3 `<script>` tags in
`<head>` before CreateJS. The game code is untouched.

## Global constraints

- **Never write the real username or password** in any file, commit, test, log or
  message. Tests use made-up values (`Demo_User` / `Ab12cd`). The owner generates the
  real `login/credentials.js` (Task 5). Never ask the owner for the password.
- `Demo5.js` keeps git blob `c2015e0e3b6696c74578b27cd11f02e31b98e665`. Do not change
  `components/`, images, videos or any other game file. `index.html` changes only
  by the 3 lines in Task 3.
- Free static hosting only: no middleware, no serverless functions, no
  `package.json`, no new services.
- UI text is in Thai, exactly as in the code blocks.

---

### Task 1: `login/auth.js`, `tools/set-login.mjs`, and tests

**Files:** create `login/auth.js`, `tools/set-login.mjs`, `tests/login.test.mjs`.

- [ ] **Step 1: create `tests/login.test.mjs`**

```js
import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { createRequire } from 'node:module';
import { buildCredentials, renderCredentials } from '../tools/set-login.mjs';

const require = createRequire(import.meta.url);
const auth = require('../login/auth.js');
const FAST = { iterations: 1000, salt: 'AAAAAAAAAAAAAAAAAAAAAA==' }; // fast, fixed salt for tests only

function memoryStore() {
  const data = {};
  return { getItem: k => (k in data ? data[k] : null), setItem: (k, v) => { data[k] = String(v); }, removeItem: k => { delete data[k]; } };
}
const blocked = { getItem() { throw new Error('blocked'); }, setItem() { throw new Error('blocked'); }, removeItem() {} };
const win = (local, session) => ({ localStorage: local, sessionStorage: session });

test('derive is deterministic, trims/lower-cases the username, password is case-sensitive', async () => {
  const cfg = await buildCredentials('Demo_User', 'Ab12cd', FAST);
  assert.equal(await auth.check('  demo_user ', 'Ab12cd', cfg), true);
  assert.equal(await auth.check('DEMO_USER', 'Ab12cd', cfg), true);
  assert.equal(await auth.check('demo_user', 'ab12cd', cfg), false);
  assert.equal(await auth.check('other', 'Ab12cd', cfg), false);
  assert.equal(await auth.check('demo_user', '', cfg), false);
});

test('buildCredentials stores no plaintext and a new salt changes the hash', async () => {
  const a = await buildCredentials('Demo_User', 'Ab12cd', { iterations: 1000 });
  const b = await buildCredentials('Demo_User', 'Ab12cd', { iterations: 1000 });
  assert.notEqual(a.salt, b.salt);
  assert.notEqual(a.hash, b.hash);
  const text = renderCredentials(a);
  assert.doesNotMatch(text, /Ab12cd|demo_user/i);
  assert.match(text, /^window\.SICONVERSE_LOGIN = \{"version":1,"iterations":1000,"salt":"[A-Za-z0-9+/=]+","hash":"[A-Za-z0-9+/=]{44}"\};$/m);
  await assert.rejects(buildCredentials('  ', 'x', FAST), /Username/);
  await assert.rejects(buildCredentials('u', '', FAST), /Password/);
});

test('remember/isRemembered, and rotation logs everyone out', async () => {
  const w = win(memoryStore(), memoryStore());
  const cfg1 = await buildCredentials('u', 'p1', FAST);
  assert.equal(auth.isRemembered(w, cfg1), false);
  assert.equal(auth.remember(w, cfg1), true);
  assert.equal(auth.isRemembered(w, cfg1), true);
  const cfg2 = await buildCredentials('u', 'p2', FAST);
  assert.equal(auth.isRemembered(w, cfg2), false);
});

test('falls back to sessionStorage when localStorage is blocked', async () => {
  const w = win(blocked, memoryStore());
  const cfg = await buildCredentials('u', 'p', FAST);
  assert.equal(auth.remember(w, cfg), true);
  assert.equal(auth.isRemembered(w, cfg), true);
});

test('gateDecision redirects only when sure, otherwise fails open', async () => {
  const cfg = await buildCredentials('u', 'p', FAST);
  assert.equal(auth.gateDecision(win(memoryStore(), memoryStore()), cfg), 'redirect');
  const w = win(memoryStore(), memoryStore());
  auth.remember(w, cfg);
  assert.equal(auth.gateDecision(w, cfg), 'allow');
  assert.equal(auth.gateDecision(win(memoryStore(), memoryStore()), undefined), 'allow');
  assert.equal(auth.gateDecision(win(blocked, blocked), cfg), 'allow');
});

test('safeNext only allows same-site paths; loginUrl keeps the full location', () => {
  assert.equal(auth.safeNext('/index.html?x=1#y'), '/index.html?x=1#y');
  for (const bad of ['//evil.com', '/\\evil.com', 'https://evil.com', 'javascript:alert(1)', '', null, undefined]) {
    assert.equal(auth.safeNext(bad), '/', String(bad));
  }
  assert.equal(auth.loginUrl({ pathname: '/', search: '?debug=1', hash: '' }), '/login/?next=%2F%3Fdebug%3D1');
});

test('index.html loads the gate in <head> before CreateJS; the game code is untouched', () => {
  const html = readFileSync('index.html', 'utf8');
  const head = html.slice(0, html.indexOf('</head>'));
  const order = ['login/auth.js', 'login/credentials.js', 'login/gate.js', 'components/sdk/createjs.min.js'].map(s => head.indexOf(s));
  assert.ok(order.every(i => i > 0), 'gate scripts must be in <head>');
  assert.deepEqual([...order].sort((a, b) => a - b), order, 'gate scripts must come before createjs');
  const blob = execFileSync('git', ['hash-object', 'Demo5.js'], { encoding: 'utf8' }).trim();
  assert.equal(blob, 'c2015e0e3b6696c74578b27cd11f02e31b98e665');
});

test('login/credentials.js, if present, has the generated shape only', () => {
  let text;
  try { text = readFileSync('login/credentials.js', 'utf8'); } catch { return; }
  assert.match(text, /^window\.SICONVERSE_LOGIN = \{"version":\d+,"iterations":\d+,"salt":"[A-Za-z0-9+/=]+","hash":"[A-Za-z0-9+/=]{44}"\};$/m);
});
```

- [ ] **Step 2: run it and see it fail**: `node --test tests/login.test.mjs`. Expected:
  `Cannot find module` / `ERR_MODULE_NOT_FOUND` for `../tools/set-login.mjs`.

- [ ] **Step 3: create `login/auth.js`**

```js
(function (global, factory) {
    var api = factory(global);
    if (typeof module !== 'undefined' && module.exports) module.exports = api;
    global.SiconverseAuth = api;
})(typeof window !== 'undefined' ? window : globalThis, function (global) {
    'use strict';

    // Client-side login gate. Owner-accepted limitation (2026-09-26): this only
    // guides ordinary students; anyone technical can bypass it.
    var STORAGE_KEY = 'siconverse-auth';

    function toB64(bytes) {
        var s = '';
        for (var i = 0; i < bytes.length; i++) s += String.fromCharCode(bytes[i]);
        return global.btoa(s);
    }

    function fromB64(text) {
        var s = global.atob(text);
        var out = new Uint8Array(s.length);
        for (var i = 0; i < s.length; i++) out[i] = s.charCodeAt(i);
        return out;
    }

    function normalizeUser(username) {
        return String(username || '').trim().toLowerCase();
    }

    function derive(username, password, cfg) {
        var subtle = global.crypto.subtle;
        var enc = new TextEncoder();
        var material = enc.encode(normalizeUser(username) + '\n' + String(password || ''));
        return subtle.importKey('raw', material, 'PBKDF2', false, ['deriveBits'])
            .then(function (key) {
                return subtle.deriveBits({
                    name: 'PBKDF2', hash: 'SHA-256',
                    salt: fromB64(cfg.salt), iterations: cfg.iterations
                }, key, 256);
            })
            .then(function (bits) { return toB64(new Uint8Array(bits)); });
    }

    function check(username, password, cfg) {
        return derive(username, password, cfg).then(function (hash) { return hash === cfg.hash; });
    }

    function stores(win) {
        var list = [];
        ['localStorage', 'sessionStorage'].forEach(function (name) {
            try {
                var s = win[name];
                s.setItem('__siconverse_probe', '1');
                s.removeItem('__siconverse_probe');
                list.push(s);
            } catch (e) { /* blocked (private mode, disabled storage) */ }
        });
        return list;
    }

    function storageUsable(win) {
        return stores(win).length > 0;
    }

    function isRemembered(win, cfg) {
        return stores(win).some(function (s) {
            try { return s.getItem(STORAGE_KEY) === cfg.hash; } catch (e) { return false; }
        });
    }

    function remember(win, cfg) {
        var saved = false;
        stores(win).forEach(function (s) {
            try { s.setItem(STORAGE_KEY, cfg.hash); saved = true; } catch (e) {}
        });
        return saved;
    }

    function safeNext(next) {
        if (typeof next !== 'string' || next.charAt(0) !== '/') return '/';
        if (next.charAt(1) === '/' || next.charAt(1) === '\\') return '/';
        return next;
    }

    function loginUrl(loc) {
        return '/login/?next=' + encodeURIComponent(loc.pathname + loc.search + loc.hash);
    }

    // What the game page should do. 'redirect' only when we are sure the user is
    // not logged in; any doubt fails open so students are never locked out.
    function gateDecision(win, cfg) {
        if (!cfg || !cfg.hash || !cfg.salt) return 'allow';
        if (!storageUsable(win)) return 'allow';
        return isRemembered(win, cfg) ? 'allow' : 'redirect';
    }

    return {
        STORAGE_KEY: STORAGE_KEY,
        normalizeUser: normalizeUser,
        derive: derive,
        check: check,
        storageUsable: storageUsable,
        isRemembered: isRemembered,
        remember: remember,
        safeNext: safeNext,
        loginUrl: loginUrl,
        gateDecision: gateDecision,
        toB64: toB64,
        fromB64: fromB64
    };
});
```

- [ ] **Step 4: create `tools/set-login.mjs`**

```js
#!/usr/bin/env node
// Owner tool: set the shared Siconverse username/password (about every 6 months).
// Usage (from the repo root):  node tools/set-login.mjs
// Asks for the values interactively; writes login/credentials.js with a salted
// PBKDF2 hash only. The real username/password are never written anywhere.
import { webcrypto, randomBytes } from 'node:crypto';
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import readline from 'node:readline';

const require = createRequire(import.meta.url);
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
if (!globalThis.crypto) globalThis.crypto = webcrypto;
const auth = require(path.join(root, 'login', 'auth.js'));

export const ITERATIONS = 150000;
export const CREDENTIALS_PATH = path.join(root, 'login', 'credentials.js');

export async function buildCredentials(username, password, opts = {}) {
    if (!auth.normalizeUser(username)) throw new Error('Username must not be empty');
    if (!password) throw new Error('Password must not be empty');
    const cfg = {
        version: opts.version || 1,
        iterations: opts.iterations || ITERATIONS,
        salt: opts.salt || randomBytes(16).toString('base64'),
    };
    cfg.hash = await auth.derive(username, password, cfg);
    return cfg;
}

export function renderCredentials(cfg) {
    return '// Generated by tools/set-login.mjs - do not edit by hand.\n' +
        '// Contains only a salted PBKDF2 hash; the real username/password are not stored here.\n' +
        'window.SICONVERSE_LOGIN = ' + JSON.stringify(cfg) + ';\n';
}

export function readVersion(file = CREDENTIALS_PATH) {
    if (!existsSync(file)) return 0;
    const m = /"version":(\d+)/.exec(readFileSync(file, 'utf8'));
    return m ? Number(m[1]) : 0;
}

function ask(rl, question, hidden) {
    return new Promise(resolve => {
        if (!hidden) return rl.question(question, resolve);
        const write = rl._writeToOutput.bind(rl);
        rl._writeToOutput = s => write(s.includes(question) ? s : '*');
        rl.question(question, answer => { rl._writeToOutput = write; process.stdout.write('\n'); resolve(answer); });
    });
}

async function main() {
    const rl = readline.createInterface({ input: process.stdin, output: process.stdout, terminal: true });
    const username = await ask(rl, 'Username: ', false);
    const password = await ask(rl, 'Password: ', true);
    const again = await ask(rl, 'Password again: ', true);
    rl.close();
    if (password !== again) { console.error('Passwords do not match. Nothing changed.'); process.exit(1); }
    const cfg = await buildCredentials(username, password, { version: readVersion() + 1 });
    writeFileSync(CREDENTIALS_PATH, renderCredentials(cfg));
    console.log(`Wrote login/credentials.js (version ${cfg.version}). Everyone must log in again after deploy.`);
    console.log('Next: git add login/credentials.js && git commit -m "chore: rotate Siconverse login" && git push');
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
    main().catch(err => { console.error(err.message); process.exit(1); });
}
```

- [ ] **Step 5: run the tests.** `node --test tests/login.test.mjs`. Expected: every test
  passes **except** "index.html loads the gate…", which fails until Task 3. The
  "credentials.js, if present" test passes because the file does not exist yet.
- [ ] **Step 6: commit** `feat(login): client-side auth helpers and credential tool`.

---

### Task 2: the game-page gate script

**Files:** create `login/gate.js`.

- [ ] **Step 1: create `login/gate.js`**

```js
// Runs in the game's <head> before CreateJS loads: send not-logged-in visitors to
// /login/ before any game asset downloads. Fails open (see SiconverseAuth.gateDecision).
(function () {
    try {
        if (window.SiconverseAuth &&
            window.SiconverseAuth.gateDecision(window, window.SICONVERSE_LOGIN) === 'redirect') {
            window.location.replace(window.SiconverseAuth.loginUrl(window.location));
        }
    } catch (e) { /* never block the game because of the gate itself */ }
})();
```

- [ ] **Step 2: commit** `feat(login): add game-page gate script`. The gate's
  decision logic (`gateDecision`) is already covered by Task 1's tests.

---

### Task 3: wire the gate into the game page (3 lines)

**Files:** modify `index.html`.

- [ ] **Step 1:** in `index.html`, directly **before** the existing line
  `<script src="components/sdk/createjs.min.js"></script>`, insert:

```html
<script src="login/auth.js?v=1"></script>
<script src="login/credentials.js"></script>
<script src="login/gate.js?v=1"></script>
```

  Change nothing else in `index.html`. `login/credentials.js` has no query string on
  purpose: Vercel serves JS with `max-age=0, must-revalidate`, so a new credentials
  file takes effect on the next page load.
- [ ] **Step 2: run all tests.**
  `node --test tests/login.test.mjs tests/ios-smooth.test.cjs tests/performance-assets.test.cjs`
  All must pass.
- [ ] **Step 3:** update the "Tests:" line in `CLAUDE.md` to the command above.
  Commit `feat(login): gate the game page behind the login`.

---

### Task 4: the login page

**Files:** create `login/index.html`. The logo assets `login/logo.png` (760x177, transparent) and `login/icon.png` (192x192, used as the favicon and home-screen icon) are **already committed** on this branch; do not regenerate or edit them.

- [ ] **Step 1: create `login/index.html`**

```html
<!DOCTYPE html>
<html lang="th">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex">
<title>Siconverse - เข้าสู่ระบบ</title>
<link rel="icon" type="image/png" href="icon.png">
<link rel="apple-touch-icon" href="icon.png">
<link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Google+Sans:regular,bold&subset=latin">
<style>
  :root {
    --ink:#0b2f6b; --card:#ffffff; --field:#f3f6fb; --text:#1c2733; --muted:#5a6675;
    --blue:#1f6fe5; --blue-dark:#0b3a8c; --red:#d62a1e; --red-soft:#fde4e1;
    --yellow:#ffd000; --orange:#e8261c;
  }
  * { box-sizing:border-box; }
  html, body { height:100%; }
  body {
    margin:0; color:var(--text); font-family:'Google Sans', Tahoma, sans-serif; font-size:16px;
    background:#000 url("../Assets/bg.jpg") center/cover no-repeat fixed;
    display:flex; align-items:center; justify-content:center; padding:24px 16px; overflow:auto;
  }
  body::before { content:""; position:fixed; inset:0; background:rgba(0,0,0,.55); }
  main { position:relative; width:100%; max-width:380px; }
  .brand { text-align:center; margin:0 0 18px; }
  .brand img { display:block; width:100%; max-width:380px; height:auto; margin:0 auto; filter:drop-shadow(0 4px 10px rgba(0,0,0,.5)); }
  .tagline { margin:10px 0 0; color:#fff; font-size:14px; text-shadow:0 2px 0 #000, 0 0 6px #000; }
  .card { background:var(--card); border:4px solid var(--ink); box-shadow:8px 8px 0 rgba(0,0,0,.45); padding:22px 20px 20px; }
  h1 { font-size:20px; margin:0 0 16px; }
  label { display:block; font-weight:bold; margin:14px 0 6px; font-size:15px; }
  .field { position:relative; }
  input[type=text], input[type=password] {
    width:100%; font:inherit; color:var(--text); padding:12px; min-height:48px;
    background:var(--field); border:3px solid var(--ink); border-radius:0;
  }
  #toggle {
    position:absolute; right:6px; top:50%; transform:translateY(-50%); min-height:36px;
    font:inherit; font-size:13px; font-weight:bold; background:#fff; color:var(--ink);
    border:2px solid var(--ink); padding:4px 10px; cursor:pointer;
  }
  input:focus-visible, button:focus-visible { outline:3px solid var(--yellow); outline-offset:2px; }
  #submit {
    width:100%; margin-top:20px; min-height:52px; font:inherit; font-size:17px; font-weight:bold; color:#fff; cursor:pointer;
    background:var(--blue); border:3px solid var(--blue-dark); border-radius:0; box-shadow:0 5px 0 var(--blue-dark);
  }
  #submit:active:not(:disabled) { transform:translateY(4px); box-shadow:0 1px 0 var(--blue-dark); }
  #submit:disabled { opacity:.65; cursor:progress; }
  .msg { margin:14px 0 0; padding:10px 12px; border:2px solid currentColor; font-size:14px; }
  .msg.error { color:var(--red); background:var(--red-soft); }
  .help { margin:16px 0 0; font-size:13px; color:var(--muted); text-align:center; }
  [hidden] { display:none !important; }
  @media (prefers-reduced-motion: reduce) { #submit:active:not(:disabled) { transform:none; } }
</style>
</head>
<body>
<main>
  <div class="brand">
    <img src="logo.png" alt="Siconverse" width="380" height="89">
    <p class="tagline">เกมจำลองสถานการณ์การขอคำปรึกษาทางการแพทย์</p>
  </div>
  <form class="card" id="form" method="post" action="#" novalidate>
    <h1>เข้าสู่ระบบ</h1>
    <label for="username">ชื่อผู้ใช้</label>
    <input id="username" name="username" type="text" autocomplete="username" autocapitalize="none" spellcheck="false" required>
    <label for="password">รหัสผ่าน</label>
    <div class="field">
      <input id="password" name="password" type="password" autocomplete="current-password" required>
      <button type="button" id="toggle" aria-controls="password" aria-pressed="false">แสดง</button>
    </div>
    <p class="msg error" id="error" role="alert" hidden></p>
    <button type="submit" id="submit">เข้าสู่เกม</button>
    <p class="help">ติดต่ออาจารย์ผู้สอนเพื่อขอชื่อผู้ใช้และรหัสผ่าน</p>
  </form>
</main>
<script src="auth.js?v=1"></script>
<script src="credentials.js"></script>
<script>
(function () {
  var Auth = window.SiconverseAuth;
  var cfg = window.SICONVERSE_LOGIN;
  var params = new URLSearchParams(location.search);
  var next = Auth.safeNext(params.get('next'));
  var $ = function (id) { return document.getElementById(id); };

  function showError(text) { var e = $('error'); e.textContent = text; e.hidden = false; }

  if (!cfg || !cfg.hash) { showError('ระบบยังไม่พร้อม กรุณาติดต่อผู้ดูแล'); $('submit').disabled = true; return; }
  if (Auth.isRemembered(window, cfg)) { location.replace(next); return; }

  $('toggle').addEventListener('click', function () {
    var pw = $('password'), show = pw.type === 'password';
    pw.type = show ? 'text' : 'password';
    this.textContent = show ? 'ซ่อน' : 'แสดง';
    this.setAttribute('aria-pressed', String(show));
  });

  $('form').addEventListener('submit', function (e) {
    e.preventDefault();
    var btn = $('submit');
    $('error').hidden = true;
    btn.disabled = true; btn.textContent = 'กำลังตรวจสอบ...';
    Auth.check($('username').value, $('password').value, cfg).then(function (ok) {
      if (ok) { Auth.remember(window, cfg); location.replace(next); return; }
      showError('ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง');
      $('password').value = ''; $('password').focus();
    }).catch(function () {
      showError('เบราว์เซอร์นี้ไม่รองรับการเข้าสู่ระบบ กรุณาใช้ Chrome หรือ Safari รุ่นล่าสุด');
    }).then(function () { btn.disabled = false; btn.textContent = 'เข้าสู่เกม'; });
  });
})();
</script>
</body>
</html>
```

- [ ] **Step 2: local browser check** with made-up credentials. Do **not** commit these.
  1. Generate a throwaway `login/credentials.js` from Node:
     `node --input-type=module -e 'import {buildCredentials,renderCredentials} from "./tools/set-login.mjs"; import {writeFileSync} from "node:fs"; writeFileSync("login/credentials.js", renderCredentials(await buildCredentials("Demo_User","test12",{})));'`
  2. `python -m http.server 8790`, then in a fresh profile check each of these:
     - `/` redirects to `/login/?next=%2F`.
     - A wrong password shows `ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง` and clears the password field.
     - `demo_user` / `test12` (lower-case username) opens the game at `/`.
     - Reloading `/` stays in the game.
     - Opening `/login/` while logged in forwards to `/`.
     - Regenerating the credentials with a different password, then reloading `/`,
       sends you back to `/login/`.
     - At a 375-px width there is no horizontal scroll and the card fits.
     - No console errors.
  3. Delete the throwaway file: `git status` must not list `login/credentials.js`.
- [ ] **Step 3: commit** `feat(login): themed Siconverse login page`.

---

### Task 5: real credentials (owner step), then the preview

- [ ] Ask the owner, in Thai, to run this in the repo root on their own machine:
  `node tools/set-login.mjs`. It asks for the username and password (input is
  hidden), then they commit `login/credentials.js`
  (`git add login/credentials.js && git commit -m "chore: set Siconverse login"`).
  **Wait. Do not generate real credentials yourself.**
- [ ] After the owner approves pushing, push `feature/login-gate` and wait for the
  Vercel preview status (`gh api repos/BPET17051/simset-training-game/commits/<sha>/status`).
- [ ] Give the owner the Task 4 checklist to repeat on the preview with the real
  credentials, on a computer and a phone.
- [ ] **Stop.** Production only after the owner says **"ขึ้นเว็บจริงได้"** (then
  fast-forward `main` and verify `/` redirects to `/login/` on production).

---

### Task 6: docs

**Files:** create `docs/LOGIN-ADMIN-TH.md`; modify `docs/HANDOFF.md`.

- [ ] Create `docs/LOGIN-ADMIN-TH.md` with exactly:

```markdown
# คู่มือผู้ดูแล: ระบบเข้าสู่ระบบ Siconverse

ระบบนี้ให้นักศึกษาทุกคนใช้ **ชื่อผู้ใช้และรหัสผ่านชุดเดียวกัน** ก่อนเข้าเล่นเกม
เข้าสู่ระบบสำเร็จแล้ว เครื่องนั้นจะจำไว้จนกว่าจะเปลี่ยนรหัส

> ข้อจำกัดที่ยอมรับแล้ว: ระบบตรวจรหัสบนเบราว์เซอร์ ผู้ที่มีความรู้ด้านเทคนิคสามารถข้ามได้
> ระบบนี้มีไว้เป็นขั้นตอนเข้าสู่ระบบสำหรับนักศึกษาทั่วไปเท่านั้น

## เปลี่ยนชื่อผู้ใช้/รหัสผ่าน (ทุก 6 เดือน หรือเมื่ออาจารย์แจ้ง)

1. เปิด Terminal ที่โฟลเดอร์ repo `simset-training-game` แล้วดึงงานล่าสุด:
   `git pull`
2. รันคำสั่ง:
   `node tools/set-login.mjs`
3. พิมพ์ชื่อผู้ใช้ใหม่ แล้วพิมพ์รหัสผ่านใหม่ 2 ครั้ง (ตอนพิมพ์รหัสจะไม่แสดงบนจอ)
4. บันทึกและส่งขึ้นเว็บ:
   `git add login/credentials.js`
   `git commit -m "chore: rotate Siconverse login"`
   `git push`
5. รอ Vercel deploy ประมาณ 1–2 นาที แล้วลองเปิดเว็บ ทุกคนจะต้องเข้าสู่ระบบใหม่ด้วยรหัสใหม่

ข้อควรระวัง
- ห้ามพิมพ์ชื่อผู้ใช้หรือรหัสผ่านจริงลงในไฟล์ใด ๆ ใน repo, ใน commit message หรือในแชต
  ไฟล์ `login/credentials.js` เก็บเฉพาะค่าที่เข้ารหัสแล้ว
- ชื่อผู้ใช้ไม่สนตัวพิมพ์เล็ก/ใหญ่ ส่วนรหัสผ่านต้องพิมพ์ให้ตรงทุกตัว
- ถ้ารหัสหลุดออกไป ให้เปลี่ยนทันทีด้วยขั้นตอนเดียวกัน

## เปลี่ยนโลโก้ (ถ้ามีโลโก้ใหม่)

1. เตรียมไฟล์ PNG พื้นหลังโปร่งใสจริง (ระวังรูปจาก AI ที่มีลายตารางหมากรุกติดมาในภาพ ซึ่งไม่ใช่พื้นหลังโปร่งใส)
2. แทนที่ไฟล์ `login/logo.png` (แนะนำกว้าง 760px) และ `login/icon.png` (192x192px)
3. commit และ push ตามปกติ (ผ่าน Preview ก่อนขึ้นเว็บจริง)
```

- [ ] In `docs/HANDOFF.md`, add a section "0.3 Siconverse login (2026-09-26)" that
  covers: the client-side design and its accepted limitation, the files, the owner
  tool, the fact that credentials are never stored in plaintext, where the spec and
  this plan live, and that revision 1 (server-side) is in commit `fb7d654`.
- [ ] Commit `docs: Siconverse login admin guide and handoff`.

## Out of scope

Server-side protection, rate limiting, a private repo, logout, per-user accounts,
tracking. The logo is done: `login/logo.png` and `login/icon.png` were made from the teacher-approved ChatGPT artwork (baked-in checkerboard removed, trimmed, resized).
