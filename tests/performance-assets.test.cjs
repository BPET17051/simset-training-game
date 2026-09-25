const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const { execFileSync } = require('node:child_process');

const root = path.resolve(__dirname, '..');
const videos = {
  'All_intro_cut.mp4': ['1280x720', '30/1', 15.00, null],
  'M1_into.mp4': ['1280x720', '30/1', 4.73, ['aac', '48000', 2]],
  'patient.mp4': ['1920x1080', '30/1', 24.97, ['aac', '48000', 1]],
  'family.mp4': ['1920x1080', '30/1', 36.00, ['aac', '48000', 1]],
  'nurse.mp4': ['1920x1080', '30/1', 18.00, ['aac', '48000', 1]],
  'computer.mp4': ['720x1280', '30/1', 5.00, null],
  'refer.mp4': ['720x1280', '30/1', 5.00, null],
  'monitor.mp4': ['1280x720', '30/1', 20.00, ['aac', '48000', 1]],
  'M2-info.mp4': ['1280x720', '30/1', 4.90, ['aac', '48000', 2]],
  'M2-into.mp4': ['1280x720', '30/1', 4.90, ['aac', '48000', 2]],
  'M3_info2.mp4': ['1280x720', '25/1', 1.00, ['aac', '48000', 2]],
  'M3-into2.mp4': ['1280x720', '25/1', 5.00, ['aac', '48000', 2]],
};

function probe(name) {
  const raw = execFileSync('ffprobe', [
    '-v', 'error', '-show_entries',
    'format=duration:stream=codec_type,codec_name,width,height,r_frame_rate,sample_rate,channels,level',
    '-of', 'json', path.join(root, 'videos', name),
  ], { encoding: 'utf8' });
  return JSON.parse(raw);
}

test('the page loads CreateJS from the local byte-identical copy', () => {
  const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
  assert.match(html, /<script src="components\/sdk\/createjs\.min\.js"><\/script>/);
  assert.doesNotMatch(html, /code\.createjs\.com/);
  const vendorPath = path.join(root, 'components', 'sdk', 'createjs.min.js');
  const vendorBytes = fs.readFileSync(vendorPath);
  assert.equal(vendorBytes.length, 242_057);
  assert.equal(
    crypto.createHash('sha256').update(vendorBytes).digest('hex'),
    'e439bebf8de2df0582273906d2c1dceff2387c661efb2152ef1c28420ce4e7e5',
  );
  const attributes = fs.readFileSync(path.join(root, '.gitattributes'), 'utf8');
  assert.match(attributes, /^components\/sdk\/createjs\.min\.js -text$/m);
});

test('Vercel caches static media in the browser for one day', () => {
  const config = JSON.parse(fs.readFileSync(path.join(root, 'vercel.json'), 'utf8'));
  const mediaHeader = config.headers.find(entry => /mp4/.test(entry.source));
  assert.ok(mediaHeader, 'media cache route is missing');
  assert.deepEqual(mediaHeader.headers, [
    { key: 'Cache-Control', value: 'public, max-age=86400, stale-while-revalidate=604800' },
  ]);
});

test('the 12 game videos stay compatible while their combined size is below 45 MiB', () => {
  let total = 0;
  for (const [name, [dimensions, fps, duration, audioExpected]] of Object.entries(videos)) {
    const file = path.join(root, 'videos', name);
    total += fs.statSync(file).size;
    const metadata = probe(name);
    const video = metadata.streams.find(stream => stream.codec_type === 'video');
    const audio = metadata.streams.find(stream => stream.codec_type === 'audio');
    assert.equal(video.codec_name, 'h264', name);
    assert.equal(`${video.width}x${video.height}`, dimensions, name);
    assert.equal(video.r_frame_rate, fps, name);
    assert.ok(video.level <= 42, `${name} H.264 level is ${video.level}`);
    assert.ok(Math.abs(Number(metadata.format.duration) - duration) <= 0.08, name);
    if (audioExpected) {
      assert.deepEqual([audio.codec_name, audio.sample_rate, audio.channels], audioExpected, name);
    } else {
      assert.equal(audio, undefined, name);
    }
  }
  assert.ok(total < 45 * 1024 * 1024, `combined size is ${(total / 1024 / 1024).toFixed(2)} MiB`);
});
