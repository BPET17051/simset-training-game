# iPhone / iPad smoothness: implementation plan

> **For Codex (executor):** Work in the worktree
> `D:\Jedi_EX_HDX_BAC01\01.Jedi_SIMSET\SIMSET_Project\SIMSET_ERtraining\simset-training-game-revert-original-demo5`
> on branch `revert/original-demo5` (starts at `c31d07a`). Do the tasks in order and tick each
> `- [ ]`. Every task ends with a test run that must pass. Commit per task. You may push this
> branch (it only builds a Vercel **preview**). **Never push, merge or deploy to `main`.**
> Read `CLAUDE.md` and `docs/HANDOFF.md` first.

**Goal:** Stop the reported stutter on iPhone and iPad **without any visible design change** and
without editing `Demo5.js`.

**Why it stutters (found by reading the original export, 2026-09-25):**

| # | Cause | Evidence |
|---|---|---|
| C1 | Retina over-rendering | `AdobeAn.makeResponsive` (in `Demo5.js`) sizes the canvas backing store to `1280 × devicePixelRatio × scale`. iPhones report DPR 3, so the whole 30 fps stage is redrawn at 3x. |
| C2 | Timer-based ticks | `createjs.Ticker` runs in its default `TIMEOUT` mode, which drifts against the display refresh on iOS Safari and shows as uneven motion. |
| C3 | Mouse-over hit testing on touch devices | `index.html` calls `stage.enableMouseOver()` (20 hit-tests per second over the whole display list, including pixel-based hit tests). This is useless on touch screens and costs CPU on every tick. |
| C4 | Late touch handling | `createjs.Touch.enable` is only called on a few frames. Everywhere else, iOS taps go through emulated mouse events. |
| C5 | No `viewport` meta tag | iOS lays the page out at 980 px and zooms. Pinch or double-tap zoom changes `innerWidth`, so every zoom step fires `resize` and makeResponsive re-allocates the full canvas. |
| C6 | Videos not marked inline | The `an.Video` widget never sets `playsinline`. On iPhone, a `<video>` without it may open the native full-screen player instead of playing in the popup. |
| C7 | Re-encoded 1080p clips tagged H.264 level 5.0 | `patient`, `family` and `nurse` (from `c31d07a`) are High@5.0. Apple lists High@4.2 as the supported level for many iPads. The content itself fits level 4.0 (1080p30). |
| R1 | Risk only, measure: memory | The 24 images loaded at start decode to about **387 MB RGBA** (twenty 2048×2048 atlases plus two 1356×6700 artboards). Older iPads may reload the page under memory pressure. |
| R2 | Risk only, measure: autoplay with sound | Clips are `autoplay` with sound, but they attach one tick after the tap. iOS may refuse unmuted autoplay outside the tap, and the clip then sits on its first frame. |

**Architecture:** One new, dependency-free file `components/sdk/ios-smooth.js` exposes
`window.SimsetIOS`. It installs itself when loaded: a pixel-ratio cap before makeResponsive runs,
inline flags for overlay videos, and an opt-in `?debug=1` readout. `index.html` loads it and makes
one extra call after the stage is created. `Demo5.js`, `components/video/src/video.js` and every
image stay byte-identical to the client's original.

**Tech stack:** Vanilla JS (UMD like the repo's other helpers), Node 22 `node:test`, ffmpeg
bitstream filter (lossless), Playwright's already-installed Chromium for local emulation.

## Global constraints

- **No visible design change.** Same layout, positions, colours, fonts, images and timing. The
  only visible difference allowed is canvas sharpness on screens above 2x DPR, plus the debug
  box, which appears only with `?debug=1`.
- `Demo5.js` must keep git blob `c2015e0e3b6696c74578b27cd11f02e31b98e665`, and
  `components/video/src/video.js` must keep blob `5418f36e3165618ea112ccfd0b6c777fec586e50`.
  Add a test for both (Task 1).
- Desktop (hover-capable pointer, DPR ≤ 2) must behave exactly as today: mouse-over stays on at
  CreateJS' default frequency, and the pixel ratio is unchanged.
- No new dependencies and no build step. Do not download new browsers (for example
  `playwright install webkit`) without asking the owner first.
- Anything that would need a visible change (a tap-to-play button, lower image resolution,
  splitting atlases) is **out of scope**: report it to the owner instead (Task 5 gates).

---

### Task 1: `components/sdk/ios-smooth.js` with unit tests

**Files:** create `components/sdk/ios-smooth.js`, `tests/ios-smooth.test.cjs`.

**Produces (on `window.SimsetIOS` / `module.exports`):**
- `cappedPixelRatio(real, cssW, cssH, maxRatio, maxPixels) -> number` (≥ 1)
- `installPixelRatioCap(win, opts?) -> {real(), used()} | null`
- `makeVideosInline(root, MutationObserverCtor?) -> void`
- `tuneStage(createjs, stage, win) -> {touchMode: boolean}`
- `installDebug(win, doc, createjs)` (no-op unless `?debug=1`)
- Constants `MAX_RATIO = 2`, `MAX_CANVAS_PIXELS = Infinity` (calibration knobs)

- [ ] **Step 1: write the failing tests**, `tests/ios-smooth.test.cjs`:

```js
const test = require('node:test');
const assert = require('node:assert/strict');
const { execFileSync } = require('node:child_process');
const ios = require('../components/sdk/ios-smooth.js');

test('original game files stay byte-identical', () => {
  const blob = p => execFileSync('git', ['hash-object', p], { encoding: 'utf8' }).trim();
  assert.equal(blob('Demo5.js'), 'c2015e0e3b6696c74578b27cd11f02e31b98e665');
  assert.equal(blob('components/video/src/video.js'), '5418f36e3165618ea112ccfd0b6c777fec586e50');
});

test('cappedPixelRatio caps retina and optional canvas area, never below 1', () => {
  assert.equal(ios.cappedPixelRatio(3, 844, 390, 2, Infinity), 2);
  assert.equal(ios.cappedPixelRatio(2, 1366, 1024, 2, Infinity), 2);
  assert.equal(ios.cappedPixelRatio(1, 1920, 1080, 2, Infinity), 1);
  assert.equal(ios.cappedPixelRatio(undefined, 800, 600, 2, Infinity), 1);
  const r = ios.cappedPixelRatio(2, 1366, 1024, 2, 4e6);
  assert.ok(r < 2 && Math.abs(1366 * 1024 * r * r - 4e6) < 1e4);
  assert.equal(ios.cappedPixelRatio(2, 5000, 5000, 2, 1e6), 1);
});

function fakeWindow(realDpr, search) {
  const proto = {};
  Object.defineProperty(proto, 'devicePixelRatio', { configurable: true, get() { return realDpr; } });
  const win = Object.create(proto);
  win.innerWidth = 844; win.innerHeight = 390;
  win.location = { search: search || '' };
  return win;
}

test('installPixelRatioCap makes window.devicePixelRatio report the capped value', () => {
  const win = fakeWindow(3);
  const cap = ios.installPixelRatioCap(win);
  assert.equal(win.devicePixelRatio, 2);
  assert.equal(cap.real(), 3);
  assert.equal(cap.used(), 2);
});

test('installPixelRatioCap leaves DPR 1-2 screens untouched', () => {
  const win = fakeWindow(2);
  ios.installPixelRatioCap(win);
  assert.equal(win.devicePixelRatio, 2);
});

test('?debug=1&dpr=1.5 overrides the ratio for on-device tuning only in debug mode', () => {
  const win = fakeWindow(3, '?debug=1&dpr=1.5');
  ios.installPixelRatioCap(win);
  assert.equal(win.devicePixelRatio, 1.5);
  const plain = fakeWindow(3, '?dpr=1');
  ios.installPixelRatioCap(plain);
  assert.equal(plain.devicePixelRatio, 2);
});

test('makeVideosInline flags existing and future videos', () => {
  const made = [];
  const video = () => { const v = { attrs: {}, setAttribute(k, val) { this.attrs[k] = val; } }; made.push(v); return v; };
  const list = [video()];
  const root = { getElementsByTagName: () => list };
  let callback;
  function FakeObserver(cb) { callback = cb; }
  FakeObserver.prototype.observe = function () {};
  ios.makeVideosInline(root, FakeObserver);
  list.push(video());
  callback();
  for (const v of made) {
    assert.equal(v.playsInline, true);
    assert.equal(v.attrs.playsinline, '');
    assert.equal(v.attrs['webkit-playsinline'], '');
  }
});

function fakeCreatejs(touchSupported) {
  const calls = [];
  return {
    calls,
    Ticker: { RAF_SYNCHED: 'synched', timingMode: 'timeout' },
    Touch: { isSupported: () => touchSupported, enable: (...a) => calls.push(['touch', ...a]) },
  };
}
const stageWith = calls => ({ enableMouseOver: f => calls.push(['mouseover', f]) });
const winWithHover = canHover => ({ matchMedia: q => ({ matches: q === '(hover: none)' ? !canHover : false }) });

test('tuneStage on touch-only devices: RAF ticks, no mouse-over, touch on', () => {
  const cjs = fakeCreatejs(true);
  const stage = stageWith(cjs.calls);
  const res = ios.tuneStage(cjs, stage, winWithHover(false));
  assert.equal(cjs.Ticker.timingMode, 'synched');
  assert.deepEqual(cjs.calls, [['mouseover', 0], ['touch', stage, true, false]]);
  assert.equal(res.touchMode, true);
});

test('tuneStage on desktop: RAF ticks, mouse-over left as the original set it', () => {
  const cjs = fakeCreatejs(false);
  const res = ios.tuneStage(cjs, stageWith(cjs.calls), winWithHover(true));
  assert.equal(cjs.Ticker.timingMode, 'synched');
  assert.deepEqual(cjs.calls, []);
  assert.equal(res.touchMode, false);
});
```

- [ ] **Step 2: run and see it fail**, `node --test tests/ios-smooth.test.cjs`. Expected: fails with
  `Cannot find module '../components/sdk/ios-smooth.js'`.

- [ ] **Step 3: implement** `components/sdk/ios-smooth.js`:

```js
(function (global, factory) {
    var api = factory(global);
    if (typeof module !== 'undefined' && module.exports) module.exports = api;
    global.SimsetIOS = api;
    if (typeof window !== 'undefined' && typeof document !== 'undefined') api.autoInstall(window, document);
})(typeof window !== 'undefined' ? window : globalThis, function (global) {
    'use strict';

    // ponytail: calibration knobs, tuned from ?debug=1 readings on real devices (Task 5).
    // MAX_RATIO caps retina scaling (iPhones report 3). MAX_CANVAS_PIXELS caps the canvas
    // backing store for large iPads; Infinity = off. Raising either costs frame rate on iOS.
    var MAX_RATIO = 2;
    var MAX_CANVAS_PIXELS = Infinity;

    function cappedPixelRatio(real, cssW, cssH, maxRatio, maxPixels) {
        var r = Math.min(real || 1, maxRatio);
        if (isFinite(maxPixels) && cssW > 0 && cssH > 0) {
            r = Math.min(r, Math.sqrt(maxPixels / (cssW * cssH)));
        }
        return Math.max(1, r);
    }

    function query(win) {
        try { return new URLSearchParams((win.location && win.location.search) || ''); } catch (e) { return null; }
    }

    function findGetter(win) {
        var o = win;
        while (o) {
            var d = Object.getOwnPropertyDescriptor(o, 'devicePixelRatio');
            if (d) return d.get ? function () { return d.get.call(win); } : function () { return d.value; };
            o = Object.getPrototypeOf(o);
        }
        return function () { return 1; };
    }

    // makeResponsive and the video widget both read window.devicePixelRatio, so capping it
    // here keeps canvas and DOM overlay consistent without editing Demo5.js.
    function installPixelRatioCap(win, opts) {
        opts = opts || {};
        var real = findGetter(win);
        var q = query(win);
        var override = q && q.get('debug') === '1' ? parseFloat(q.get('dpr')) : NaN;
        var maxRatio = opts.maxRatio || MAX_RATIO;
        var maxPixels = opts.maxPixels || MAX_CANVAS_PIXELS;
        function used() {
            if (override > 0) return override;
            return cappedPixelRatio(real(), win.innerWidth, win.innerHeight, maxRatio, maxPixels);
        }
        try {
            Object.defineProperty(win, 'devicePixelRatio', { configurable: true, get: used });
        } catch (e) {
            return null;
        }
        return { real: real, used: used };
    }

    function makeVideosInline(root, ObserverCtor) {
        function fix() {
            var list = root.getElementsByTagName('video');
            for (var i = 0; i < list.length; i++) {
                var v = list[i];
                if (v.playsInline === true) continue;
                v.playsInline = true;
                v.setAttribute('playsinline', '');
                v.setAttribute('webkit-playsinline', '');
            }
        }
        fix();
        var Ctor = ObserverCtor || global.MutationObserver;
        if (Ctor) new Ctor(fix).observe(root, { childList: true, subtree: true });
    }

    function tuneStage(createjs, stage, win) {
        createjs.Ticker.timingMode = createjs.Ticker.RAF_SYNCHED;
        var touchOnly = !!(win.matchMedia && win.matchMedia('(hover: none)').matches);
        if (touchOnly) {
            stage.enableMouseOver(0);
            if (createjs.Touch.isSupported()) createjs.Touch.enable(stage, true, false);
        }
        return { touchMode: touchOnly };
    }

    function installDebug(win, doc, createjs, cap) {
        var q = query(win);
        if (!q || q.get('debug') !== '1') return;
        var box = doc.createElement('pre');
        box.style.cssText = 'position:fixed;left:4px;top:4px;z-index:99999;margin:0;padding:6px 8px;' +
            'background:rgba(0,0,0,.75);color:#0f0;font:11px/1.35 monospace;pointer-events:none;white-space:pre';
        doc.body.appendChild(box);
        var errors = [];
        win.addEventListener('error', function (e) { errors.push(String(e.message)); });
        var frames = 0, last = Date.now(), rafFps = 0;
        (function loop() { frames++; win.requestAnimationFrame(loop); })();
        setInterval(function () {
            var now = Date.now();
            rafFps = Math.round(frames * 1000 / (now - last)); frames = 0; last = now;
            var canvas = doc.getElementById('canvas');
            var vids = Array.prototype.map.call(doc.getElementsByTagName('video'), function (v) {
                var blocked = v.autoplay && v.paused && v.readyState >= 2 && v.currentTime === 0;
                return (v.id || '?') + ' ' + (v.paused ? 'paused' : 'playing') + ' rs=' + v.readyState +
                    ' t=' + v.currentTime.toFixed(1) + (v.muted ? ' muted' : '') +
                    (v.playsInline ? ' inline' : ' NOT-INLINE') + (blocked ? ' AUTOPLAY-BLOCKED?' : '');
            });
            box.textContent = [
                'tick fps ' + (createjs && createjs.Ticker ? createjs.Ticker.getMeasuredFPS().toFixed(1) : '-') + ' | raf fps ' + rafFps,
                'dpr real ' + (cap ? cap.real() : '?') + ' used ' + win.devicePixelRatio,
                'canvas ' + (canvas ? canvas.width + 'x' + canvas.height : '-') + ' css ' + win.innerWidth + 'x' + win.innerHeight,
                'hover:none ' + !!(win.matchMedia && win.matchMedia('(hover: none)').matches),
            ].concat(vids).concat(errors.slice(-3).map(function (m) { return 'ERR ' + m; })).join('\n');
        }, 500);
    }

    function autoInstall(win, doc) {
        var cap = installPixelRatioCap(win);
        function ready() {
            var overlay = doc.getElementById('dom_overlay_container');
            if (overlay) makeVideosInline(overlay);
            installDebug(win, doc, win.createjs, cap);
        }
        if (doc.readyState === 'loading') doc.addEventListener('DOMContentLoaded', ready); else ready();
    }

    return {
        MAX_RATIO: MAX_RATIO,
        MAX_CANVAS_PIXELS: MAX_CANVAS_PIXELS,
        cappedPixelRatio: cappedPixelRatio,
        installPixelRatioCap: installPixelRatioCap,
        makeVideosInline: makeVideosInline,
        tuneStage: tuneStage,
        installDebug: installDebug,
        autoInstall: autoInstall
    };
});
```

- [ ] **Step 4: run and pass**, `node --test tests/ios-smooth.test.cjs`, all tests passing.
- [ ] **Step 5: commit** `perf(ios): add ios-smooth helper (dpr cap, inline video, touch tuning, debug readout)`.

---

### Task 2: wire it into `index.html` (3 small edits, no visual change)

**Files:** modify `index.html`; update `CLAUDE.md` (test command).

- [ ] **Step 1: viewport meta** (fixes C5). After `<meta name="authoring-tool" content="Adobe_Animate_CC">` add:
  ```html
  <meta name="viewport" content="width=device-width, initial-scale=1">
  ```
  Do **not** add `user-scalable=no` (accessibility).
- [ ] **Step 2: load the helper** immediately after
  `<script src="components/sdk/createjs.min.js"></script>`, before `Demo5.js`:
  ```html
  <script src="components/sdk/ios-smooth.js?v=20260925"></script>
  ```
- [ ] **Step 3: tune the stage** (fixes C2-C4). Directly after the existing line
  `stage.enableMouseOver();` in `handleComplete`, add:
  ```js
  	SimsetIOS.tuneStage(createjs, stage, window);
  ```
  Leave every other line of `index.html` unchanged. `makeResponsive` needs no edit because the
  cap is already installed.
- [ ] **Step 4: tests**: add an assertion to `tests/ios-smooth.test.cjs` that `index.html`
  contains the viewport meta, the script tag (before `Demo5.js?`), and `SimsetIOS.tuneStage(`
  right after `stage.enableMouseOver();`. Run
  `node --test tests/ios-smooth.test.cjs tests/performance-assets.test.cjs upload/tests/api.test.js`.
  All must pass.
- [ ] **Step 5**: update `CLAUDE.md` so the "Tests:" line lists all three files. Commit
  `perf(ios): load ios-smooth and tune the CreateJS stage for touch devices`.

---

### Task 3: re-tag the three 1080p clips to H.264 level 4.0 (lossless, fixes C7)

**Files:** `videos/patient.mp4`, `videos/family.mp4`, `videos/nurse.mp4` (Git LFS),
`tests/performance-assets.test.cjs`.

- [ ] **Step 1: test first.** In the video test loop of `tests/performance-assets.test.cjs`,
  include `level` in the ffprobe `stream=` entries and assert `video.level <= 42` for every clip.
  Run it and expect a FAIL on patient/family/nurse (`50`).
- [ ] **Step 2: rewrite the level only**. This is a bitstream filter with no re-encode, so the
  pixels are identical:
  ```bash
  for f in patient family nurse; do
    ffmpeg -v error -y -i videos/$f.mp4 -c copy -bsf:v h264_metadata=level=4.0 -movflags +faststart videos/$f.tmp.mp4 && mv videos/$f.tmp.mp4 videos/$f.mp4
  done
  ```
- [ ] **Step 3: prove it is lossless**: for each clip,
  `ffmpeg -v error -i videos/$f.mp4 -map 0:v -f md5 -` must equal the same command run on the
  `c31d07a` version (`git show c31d07a:videos/$f.mp4` goes through LFS, so use
  `git lfs smudge` or check out that file into a temp path). Then run the performance test. It
  must pass.
- [ ] **Step 4: commit** `perf(ios): tag 1080p clips as H.264 level 4.0 (bitstream only)`.

---

### Task 4: local verification (Chromium emulation, what can be checked without an iPhone)

Serve the worktree (`python -m http.server 8790`) and use Playwright with the **already
installed** Chromium (`%LOCALAPPDATA%\ms-playwright\chromium-*`).

- [ ] **Desktop must be pixel-identical.** At 1280×720, DPR 1, take a screenshot of frame 0 on
  `c31d07a` (serve `git worktree add` of that commit on another port) and on your branch.
  Pixel diff must be 0. Repeat at 1920×1080 with DPR 2.
- [ ] **iPhone emulation** (Playwright `devices['iPhone 13 landscape']`, DPR 3,
  `hasTouch`, `isMobile`): open `/?debug=1`. The debug box must show `dpr real 3 used 2`, a canvas
  width equal to `round(css width × 2)` of the stage, and `hover:none true`. There must be no
  console errors. Tap "ใช่" on the consent screen (use `page.touchscreen.tap`). The game must
  advance, and the intro `<video>` must have `playsinline` and `webkit-playsinline`
  (`page.$eval('video', v => v.playsInline)`).
- [ ] **Viewport width check (seen in a quick pre-check, 2026-09-25).** In a 375-px-wide phone
  emulation with the new meta tag, `innerWidth` came back as **1280**, not 375. The original
  `#animation_container` starts with an inline `width:1280px`, which can make mobile browsers
  shrink-to-fit before makeResponsive runs. In landscape iPhone and iPad emulation, the debug
  box's `css` width must equal the device's CSS width (for example 844 or 1194). If it shows 1280,
  report it and try `<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">`
  (Safari-only hint) before anything else. Do not change the container's inline style without
  the owner's OK.
- [ ] **iPad emulation** (`devices['iPad Pro 11 landscape']`, DPR 2): `dpr used 2`, same checks.
- [ ] **Layout unchanged on touch.** Compare iPad-emulation screenshots of frame 0 and of the
  hotspot screen (jump with `exportRoot.gotoAndStop(4)` in the console) between `c31d07a` and
  your branch. Expected: identical layout. With the viewport meta the page is no longer zoomed
  out, so compare element **positions** (canvas bounding box as a fraction of the viewport), not
  raw pixels. Report any shift.
- [ ] Record all numbers in the report (Task 6).

Chromium is not WebKit, so this proves wiring and layout but **not** iOS smoothness. Task 5
decides that.

---

### Task 5: push the preview and hand the owner a real-device checklist (decision gates)

- [ ] `node --test tests/ios-smooth.test.cjs tests/performance-assets.test.cjs upload/tests/api.test.js`
  passes. Then push `revert/original-demo5` and wait for the Vercel preview (`gh api
  repos/BPET17051/simset-training-game/commits/<sha>/status`).
- [ ] Give the owner this checklist (in Thai) to run on **one iPhone and one iPad**, in Safari,
  opening `<preview URL>/?debug=1`. For every step, write down the numbers from the green box:
  1. After loading: note `tick fps`, `raf fps`, `dpr`, and `canvas`.
  2. Press start, then the intro video: does it play **inside the popup** (not full screen), with
     sound? Is `AUTOPLAY-BLOCKED?` shown?
  3. Mission 1 hotspot screen: tap the patient, family, nurse and monitor clips. Note the fps
     while a clip plays and whether any clip stays frozen on its first frame.
  4. Play through to the end. Did Safari ever reload the page or show "A problem repeatedly
     occurred"?
  5. Open the same URL **without** `?debug=1` and confirm the look is the same as on a computer.
- [ ] **Decision gates.** Stop and report to the owner. Do not implement without their written OK:
  - **G1** `tick fps` below 24 on the iPad: set `MAX_CANVAS_PIXELS = 4e6`, re-deploy the preview,
    and repeat step 1. The owner can try values first with `?debug=1&dpr=1.5`. This only lowers
    canvas sharpness on that iPad, so it still needs the owner's OK.
  - **G2** `AUTOPLAY-BLOCKED?` or a frozen first frame: iOS blocks unmuted autoplay after the tap.
    The fix needs a visible element (for example a play button) or muted playback, and both are
    design changes. Report and wait.
  - **G3** Safari reloads the page: memory (R1, about 387 MB of decoded images). The fixes change
    assets (downscaled atlases) and need approval. Report and wait.

---

### Task 6: docs and report

- [ ] Add a short "iOS smoothness (2026-09-25)" section to `docs/HANDOFF.md`: causes C1-C7, what
  changed, the knobs in `components/sdk/ios-smooth.js`, how to use `?debug=1`, and the device
  results or which gates are still open.
- [ ] Commit, push the branch (preview only), and report to the owner: the commits, test output,
  Task 4 numbers, the preview link and the Task 5 checklist.
  **Do not merge to `main`**; the owner says "ขึ้นเว็บจริงได้" when ready.

## Out of scope

Editing `Demo5.js` or `video.js`; changing images or atlases; tap-to-play or any new visible UI
(except the `?debug=1` box); re-encoding video quality; prefetching videos (the owner chose not to,
item 4 on 2026-09-25); anything on `main`.
