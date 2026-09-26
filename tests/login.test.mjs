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
