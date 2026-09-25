const test = require('node:test');
const assert = require('node:assert/strict');
const { execFileSync } = require('node:child_process');
const { readFileSync } = require('node:fs');
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

test('index wires viewport, helper load order, and stage tuning', () => {
  const html = readFileSync('index.html', 'utf8');
  assert.match(html, /<meta name="authoring-tool" content="Adobe_Animate_CC">\s*<meta name="viewport" content="width=device-width, initial-scale=1">/);
  assert.match(html, /<script src="components\/sdk\/createjs\.min\.js"><\/script>\s*<script src="components\/sdk\/ios-smooth\.js\?v=20260925"><\/script>[\s\S]*?<script src="Demo5\.js\?/);
  assert.match(html, /stage\.enableMouseOver\(\);\s*SimsetIOS\.tuneStage\(createjs, stage, window\);/);
});
