const test = require('node:test');
const assert = require('node:assert/strict');
const api = require('../api.js');

const okInput = () => ({
    studentId: '6710001', firstName: 'กมล', lastName: 'ตัวอย่าง', consent: true,
    file: { name: 'consult.M4A', size: 6 * 1024 * 1024 }
});

test('fileExt lowercases and handles no extension', () => {
    assert.equal(api.fileExt('a.b.MP4'), 'mp4');
    assert.equal(api.fileExt('noext'), '');
    assert.equal(api.fileExt(''), '');
});

test('validateSubmission accepts a valid submission', () => {
    assert.deepEqual(api.validateSubmission(okInput()), []);
});

test('validateSubmission rejects each bad field', () => {
    const cases = [
        [{ studentId: '12345' }, 'รหัสนักศึกษาต้องเป็นตัวเลข 7 หลัก'],
        [{ studentId: '67100a1' }, 'รหัสนักศึกษาต้องเป็นตัวเลข 7 หลัก'],
        [{ firstName: '  ' }, 'กรุณากรอกชื่อ'],
        [{ lastName: '' }, 'กรุณากรอกนามสกุล'],
        [{ consent: false }, 'กรุณายืนยันความยินยอมก่อนส่ง'],
        [{ file: null }, 'กรุณาเลือกไฟล์เสียงหรือวิดีโอ'],
        [{ file: { name: 'x.pdf', size: 10 } }, 'รองรับเฉพาะไฟล์ mp3, m4a, wav, aac, mp4, mov, webm'],
        [{ file: { name: 'x.mp3', size: 0 } }, 'ไฟล์ว่างเปล่า กรุณาเลือกไฟล์ใหม่'],
        [{ file: { name: 'x.mp4', size: api.MAX_BYTES + 1 } }, 'ไฟล์ใหญ่เกิน 500MB แนะนำให้ส่งเป็นไฟล์เสียงแทน']
    ];
    for (const [patch, message] of cases) {
        const errors = api.validateSubmission(Object.assign(okInput(), patch));
        assert.deepEqual(errors, [message], JSON.stringify(patch));
    }
});

test('validateSubmission accepts exactly MAX_BYTES', () => {
    assert.deepEqual(api.validateSubmission(Object.assign(okInput(), { file: { name: 'x.mp4', size: api.MAX_BYTES } })), []);
});

test('makeRefNo is deterministic', () => {
    assert.equal(api.makeRefNo(new Date(2026, 8, 24, 21, 5, 9), '6710003'), 'SIM-20260924-0003-210509');
});

test('chunkCount never returns less than 1', () => {
    assert.equal(api.chunkCount(0), 1);
    assert.equal(api.chunkCount(api.CHUNK_BYTES), 1);
    assert.equal(api.chunkCount(api.CHUNK_BYTES + 1), 2);
});

test('buildRows merges roster and submissions, latest wins', () => {
    const roster = [
        { studentId: '6710002', firstName: 'ข', lastName: 'ทดสอบ' },
        { studentId: '6710001', firstName: 'ก', lastName: 'ตัวอย่าง' }
    ];
    const subs = [
        { refNo: 'R1', studentId: '6710001', firstName: 'ก', lastName: 'ตัวอย่าง', fileName: 'a.mp3', fileSize: 1, submittedAt: '2026-09-20T09:00:00+07:00', score: 7, comment: 'ok' },
        { refNo: 'R2', studentId: '6710001', firstName: 'ก', lastName: 'ตัวอย่าง', fileName: 'b.mp3', fileSize: 2, submittedAt: '2026-09-21T02:00:00Z', score: null, comment: '' },
        { refNo: 'R3', studentId: '6799999', firstName: 'นอก', lastName: 'สมมติ', fileName: 'c.mp3', fileSize: 3, submittedAt: '2026-09-21T02:00:00Z', score: null, comment: '' }
    ];
    const rows = api.buildRows(roster, subs);
    assert.deepEqual(rows.map(r => r.studentId), ['6710001', '6710002', '6799999']);
    assert.equal(rows[0].refNo, 'R2');
    assert.equal(rows[0].status, 'submitted');
    assert.equal(rows[0].attempts, 2);
    assert.equal(rows[1].status, 'pending');
    assert.equal(rows[1].refNo, null);
    assert.equal(rows[2].inRoster, false);
});

test('buildRows marks scored submissions as reviewed, and summarize counts', () => {
    const roster = [{ studentId: '6710001', firstName: 'ก', lastName: 'ตัวอย่าง' }, { studentId: '6710002', firstName: 'ข', lastName: 'ทดสอบ' }];
    const subs = [{ refNo: 'R1', studentId: '6710001', firstName: 'ก', lastName: 'ตัวอย่าง', fileName: 'a.mp3', fileSize: 1, submittedAt: '2026-09-20T09:00:00+07:00', score: 0, comment: '' }];
    const rows = api.buildRows(roster, subs);
    assert.equal(rows[0].status, 'reviewed');
    assert.deepEqual(api.summarize(rows), { total: 2, submitted: 1, pending: 1, reviewed: 1 });
});

function memoryStorage() {
    const data = {};
    return {
        getItem: k => (k in data ? data[k] : null),
        setItem: (k, v) => { data[k] = String(v); },
        removeItem: k => { delete data[k]; }
    };
}
const fixedNow = () => new Date(2026, 8, 24, 21, 5, 9);
const mock = () => api.createMockApi({ storage: memoryStorage(), delayMs: 0, now: fixedNow });

test('lookupStudent finds roster entries only', async () => {
    const m = mock();
    assert.deepEqual(await m.lookupStudent(' 6710003 '), { studentId: '6710003', firstName: 'จิรายุ', lastName: 'สมมติ' });
    assert.equal(await m.lookupStudent('6799999'), null);
});

test('listSubmissions starts from seed data', async () => {
    const rows = await mock().listSubmissions();
    assert.deepEqual(api.summarize(rows), { total: 8, submitted: 3, pending: 5, reviewed: 1 });
});

test('uploadFile reports progress, returns refNo, and shows up as submitted', async () => {
    const m = mock();
    const progress = [];
    const res = await m.uploadFile(
        { studentId: '6710003', firstName: 'จิรายุ', lastName: 'สมมติ', consent: true },
        { name: 'voice.m4a', size: 12 * 1024 * 1024 },
        r => progress.push(r)
    );
    assert.equal(res.refNo, 'SIM-20260924-0003-210509');
    // At least 20 visible steps even for small audio files, so the bar is seen during a demo.
    assert.equal(progress.length, 20);
    assert.equal(progress[0], 1 / 20);
    assert.equal(progress[19], 1);
    const row = (await m.listSubmissions()).find(r => r.studentId === '6710003');
    assert.equal(row.status, 'submitted');
    assert.equal(row.fileName, 'voice.m4a');
    assert.equal(row.fileUrl, null);
});

test('uploadFile rejects invalid input without saving', async () => {
    const m = mock();
    await assert.rejects(
        m.uploadFile({ studentId: '1', firstName: 'a', lastName: 'b', consent: true }, { name: 'a.mp3', size: 5 }),
        /รหัสนักศึกษาต้องเป็นตัวเลข 7 หลัก/
    );
    assert.equal(api.summarize(await m.listSubmissions()).submitted, 3);
});

test('saveReview marks reviewed and validates score', async () => {
    const m = mock();
    await m.saveReview('SIM-20260921-0002-140500', { score: 9, comment: '  ดีมาก ' });
    const row = (await m.listSubmissions()).find(r => r.studentId === '6710002');
    assert.equal(row.status, 'reviewed');
    assert.equal(row.score, 9);
    assert.equal(row.comment, 'ดีมาก');
    await assert.rejects(m.saveReview('SIM-20260921-0002-140500', { score: 11 }), /0–10/);
    await assert.rejects(m.saveReview('SIM-20260921-0002-140500', { score: 7.5 }), /0–10/);
    await assert.rejects(m.saveReview('NOPE', { score: 5 }), /ไม่พบงานที่ส่ง/);
});

test('data persists through storage and resetDemo restores seed', async () => {
    const storage = memoryStorage();
    const a = api.createMockApi({ storage, delayMs: 0, now: fixedNow });
    await a.uploadFile({ studentId: '6710005', firstName: 'ณัฐพล', lastName: 'ทดสอบ', consent: true }, { name: 'x.mp3', size: 10 });
    const b = api.createMockApi({ storage, delayMs: 0, now: fixedNow });
    assert.equal(api.summarize(await b.listSubmissions()).submitted, 4);
    await b.resetDemo();
    assert.equal(api.summarize(await b.listSubmissions()).submitted, 3);
});

test('works with no storage at all', async () => {
    const m = api.createMockApi({ storage: null, delayMs: 0, now: fixedNow });
    await m.uploadFile({ studentId: '6710006', firstName: 'ธนพร', lastName: 'สมมติ', consent: true }, { name: 'x.wav', size: 10 });
    assert.equal(api.summarize(await m.listSubmissions()).submitted, 4);
});

test('keeps successful writes visible when storage setItem fails', async () => {
    const seedOnlyStorage = {
        getItem: () => JSON.stringify([
            { refNo: 'SIM-20260921-0002-140500', studentId: '6710002', firstName: 'ขวัญใจ', lastName: 'ทดสอบ', fileName: 'recording.mp3', fileSize: 1, submittedAt: '2026-09-21T14:05:00+07:00', score: null, comment: '' }
        ]),
        setItem: () => { throw new Error('quota'); }
    };
    const m = api.createMockApi({ storage: seedOnlyStorage, delayMs: 0, now: fixedNow });
    await m.uploadFile({ studentId: '6710003', firstName: 'จิรายุ', lastName: 'สมมติ', consent: true }, { name: 'x.mp3', size: 10 });
    const row = (await m.listSubmissions()).find(r => r.studentId === '6710003');
    assert.equal(row.status, 'submitted');
});

test('same-second uploads receive unique refs and latest review targets latest submission', async () => {
    const m = mock();
    const meta = { studentId: '6710003', firstName: 'จิรายุ', lastName: 'สมมติ', consent: true };
    const first = await m.uploadFile(meta, { name: 'first.mp3', size: 10 });
    const second = await m.uploadFile(meta, { name: 'second.mp3', size: 10 });
    assert.notEqual(second.refNo, first.refNo);
    await m.saveReview(second.refNo, { score: 9, comment: 'latest' });
    const row = (await m.listSubmissions()).find(r => r.studentId === '6710003');
    assert.equal(row.fileName, 'second.mp3');
    assert.equal(row.status, 'reviewed');
    assert.equal(row.score, 9);
});
