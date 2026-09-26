import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { runInNewContext } from 'node:vm';

test('login form recovers when credential checking throws synchronously', async () => {
  const html = readFileSync('login/index.html', 'utf8');
  const inlineScript = html.match(/<script>\s*([\s\S]*?)<\/script>/)?.[1];
  assert.ok(inlineScript, 'login form script is present');

  const listeners = {};
  const elements = {
    form: { addEventListener: (type, handler) => { listeners[type] = handler; } },
    username: { value: 'Demo_User' },
    password: { value: 'test12' },
    submit: { disabled: false, textContent: 'เข้าสู่เกม' },
    error: { hidden: true, textContent: '' },
    toggle: { addEventListener() {} },
  };
  const auth = {
    safeNext: () => '/',
    isRemembered: () => false,
    check: () => { throw new Error('check failed before returning a promise'); },
  };
  runInNewContext(inlineScript, {
    window: { SiconverseAuth: auth, SICONVERSE_LOGIN: { hash: 'throw-test' } },
    document: { getElementById: id => elements[id] },
    location: { search: '' },
    URLSearchParams,
  });

  assert.doesNotThrow(() => listeners.submit({ preventDefault() {} }));
  await new Promise(resolve => setImmediate(resolve));
  assert.equal(elements.error.hidden, false);
  assert.equal(elements.error.textContent, 'เบราว์เซอร์นี้ไม่รองรับการเข้าสู่ระบบ กรุณาใช้ Chrome หรือ Safari รุ่นล่าสุด');
  assert.equal(elements.submit.disabled, false);
  assert.equal(elements.submit.textContent, 'เข้าสู่เกม');
});
