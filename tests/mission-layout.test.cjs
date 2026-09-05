const test = require('node:test');
const assert = require('node:assert/strict');
const { layout } = require('../mission-layout.js');

for (const [width, height] of [[1917, 912], [2560, 1080], [1280, 720], [1024, 768], [844, 390], [320, 568]]) {
  test(`Mission 1 fills ${width}x${height} while keeping the full foreground visible`, () => {
    const result = layout(width, height, true);
    assert.ok(result.left >= -0.001 && result.top >= -0.001);
    assert.ok(result.left + 1280 * result.scale <= width + 0.001);
    assert.ok(result.top + 720 * result.scale <= height + 0.001);
    assert.ok(result.roomWidth >= width && result.roomHeight >= height);
    assert.equal(result.roomLeft, (width - result.roomWidth) / 2);
    assert.equal(result.roomTop, (height - result.roomHeight) / 2);
  });
}

test('leaving Mission 1 restores the existing capped scaling', () => {
  const result = layout(1917, 912, false);
  assert.equal(result.scale, (912 / 720) * 1.06);
});
