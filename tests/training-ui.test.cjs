const test = require('node:test');
const assert = require('node:assert/strict');
const {
  STORAGE_KEY,
  completionMessage,
  loadProgress,
  saveProgress,
  clearProgress,
} = require('../training-ui.js');

function memoryStorage(initial = {}) {
  const values = new Map(Object.entries(initial));
  return {
    getItem(key) { return values.has(key) ? values.get(key) : null; },
    setItem(key, value) { values.set(key, String(value)); },
    removeItem(key) { values.delete(key); },
  };
}

test('session progress persists only resumable timeline frames', () => {
  const storage = memoryStorage();
  assert.equal(saveProgress(storage, 5), true);
  assert.deepEqual(loadProgress(storage), { frame: 5 });
  assert.equal(saveProgress(storage, 0), false);
  assert.equal(saveProgress(storage, 25), false);
  assert.equal(saveProgress(storage, 26), false);
  assert.deepEqual(loadProgress(storage), { frame: 5 });
});

test('invalid or corrupted session progress is ignored', () => {
  const storage = memoryStorage({ [STORAGE_KEY]: '{broken' });
  assert.equal(loadProgress(storage), null);
  storage.setItem(STORAGE_KEY, JSON.stringify({ frame: 99 }));
  assert.equal(loadProgress(storage), null);
});

test('clearing progress prevents a later resume', () => {
  const storage = memoryStorage();
  saveProgress(storage, 16);
  clearProgress(storage);
  assert.equal(loadProgress(storage), null);
});

test('completion copy matches the completed and declined paths', () => {
  assert.match(completionMessage('completed'), /สิ้นสุดการเรียนรู้แล้ว/);
  assert.match(completionMessage('completed'), /บันทึกเสียง/);
  assert.match(completionMessage('declined'), /ปฏิเสธการเข้าร่วม/);
  assert.doesNotMatch(completionMessage('declined'), /ถ่าย video|บันทึกเสียง/);
});
