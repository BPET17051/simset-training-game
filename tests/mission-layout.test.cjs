const test = require('node:test');
const assert = require('node:assert/strict');
const { layout } = require('../mission-layout.js');

for (const [width, height] of [[1917, 912], [2560, 1080], [1280, 720], [1024, 768], [844, 390], [320, 568], [1365, 767], [853.5, 480.25]]) {
  test(`every scene keeps its full foreground visible at ${width}x${height}`, () => {
    const result = layout(width, height);
    assert.ok(result.scale > 0);
    assert.equal(result.scale, Math.min(width / 1280, height / 720));
    assert.equal(result.left, (width - 1280 * result.scale) / 2);
    assert.equal(result.top, (height - 720 * result.scale) / 2);
    assert.ok(result.left >= -0.001 && result.top >= -0.001);
    assert.ok(result.left + 1280 * result.scale <= width + 0.001);
    assert.ok(result.top + 720 * result.scale <= height + 0.001);
    assert.ok(result.roomWidth >= width - 0.001 && result.roomHeight >= height - 0.001);
    assert.equal(result.roomLeft, (width - result.roomWidth) / 2);
    assert.equal(result.roomTop, (height - result.roomHeight) / 2);
  });
}

test('repeated landscape, portrait and fullscreen size changes do not retain previous sizing', () => {
  const initial = layout(1917, 912);
  for (const [width, height] of [[320, 568], [568, 320], [1920, 1080], [1024, 768], [1917, 912]]) {
    const result = layout(width, height);
    assert.ok(result.left >= -0.001 && result.top >= -0.001);
    assert.ok(result.left + 1280 * result.scale <= width + 0.001);
    assert.ok(result.top + 720 * result.scale <= height + 0.001);
    assert.ok(Math.abs(1280 * result.scale - width) < 0.001 ||
      Math.abs(720 * result.scale - height) < 0.001, 'foreground fills at least one viewport dimension');
  }
  assert.deepEqual(layout(1917, 912), initial);
});
