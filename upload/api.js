(function (global, factory) {
    var api = factory(global);
    if (typeof module !== 'undefined' && module.exports) module.exports = api;
    global.SimsetUploadApi = api;
})(typeof window !== 'undefined' ? window : globalThis, function (global) {
    'use strict';

    var MAX_BYTES = 500 * 1024 * 1024;
    var CHUNK_BYTES = 5 * 1024 * 1024;
    var ALLOWED_EXT = ['mp3', 'm4a', 'wav', 'aac', 'mp4', 'mov', 'webm'];
    // ponytail: placeholder 7-digit rule until the faculty confirms the real student-ID format.
    var STUDENT_ID_RE = /^\d{7}$/;
    var STORAGE_KEY = 'simset-upload-mock-v1';

    var ROSTER = [
        { studentId: '6710001', firstName: 'กมล', lastName: 'ตัวอย่าง' },
        { studentId: '6710002', firstName: 'ขวัญใจ', lastName: 'ทดสอบ' },
        { studentId: '6710003', firstName: 'จิรายุ', lastName: 'สมมติ' },
        { studentId: '6710004', firstName: 'ชนิดา', lastName: 'ตัวอย่าง' },
        { studentId: '6710005', firstName: 'ณัฐพล', lastName: 'ทดสอบ' },
        { studentId: '6710006', firstName: 'ธนพร', lastName: 'สมมติ' },
        { studentId: '6710007', firstName: 'ปวีณ์', lastName: 'ตัวอย่าง' },
        { studentId: '6710008', firstName: 'พิมพ์ชนก', lastName: 'ทดสอบ' }
    ];

    var SEED_SUBMISSIONS = [
        { refNo: 'SIM-20260920-0001-091500', studentId: '6710001', firstName: 'กมล', lastName: 'ตัวอย่าง', fileName: 'consult_audio.m4a', fileSize: 6291456, submittedAt: '2026-09-20T09:15:00+07:00', score: 8, comment: 'สื่อสารครบตามลำดับ ชัดเจนดี' },
        { refNo: 'SIM-20260921-0002-140500', studentId: '6710002', firstName: 'ขวัญใจ', lastName: 'ทดสอบ', fileName: 'recording.mp3', fileSize: 4718592, submittedAt: '2026-09-21T14:05:00+07:00', score: null, comment: '' },
        { refNo: 'SIM-20260922-0004-101000', studentId: '6710004', firstName: 'ชนิดา', lastName: 'ตัวอย่าง', fileName: 'consult.mp4', fileSize: 157286400, submittedAt: '2026-09-22T10:10:00+07:00', score: null, comment: '' }
    ];

    function pad(n) { return String(n).padStart(2, '0'); }
    function clone(value) { return JSON.parse(JSON.stringify(value)); }

    function fileExt(name) {
        var m = /\.([^.]+)$/.exec(name || '');
        return m ? m[1].toLowerCase() : '';
    }

    function validateSubmission(input) {
        var errors = [];
        if (!STUDENT_ID_RE.test(String(input.studentId || '').trim())) errors.push('รหัสนักศึกษาต้องเป็นตัวเลข 7 หลัก');
        if (!String(input.firstName || '').trim()) errors.push('กรุณากรอกชื่อ');
        if (!String(input.lastName || '').trim()) errors.push('กรุณากรอกนามสกุล');
        var file = input.file;
        if (!file) {
            errors.push('กรุณาเลือกไฟล์เสียงหรือวิดีโอ');
        } else {
            if (ALLOWED_EXT.indexOf(fileExt(file.name)) === -1) errors.push('รองรับเฉพาะไฟล์ ' + ALLOWED_EXT.join(', '));
            if (!(file.size > 0)) errors.push('ไฟล์ว่างเปล่า กรุณาเลือกไฟล์ใหม่');
            else if (file.size > MAX_BYTES) errors.push('ไฟล์ใหญ่เกิน 500MB แนะนำให้ส่งเป็นไฟล์เสียงแทน');
        }
        if (input.consent !== true) errors.push('กรุณายืนยันความยินยอมก่อนส่ง');
        return errors;
    }

    function makeRefNo(date, studentId) {
        return 'SIM-' + date.getFullYear() + pad(date.getMonth() + 1) + pad(date.getDate()) +
            '-' + String(studentId).slice(-4) +
            '-' + pad(date.getHours()) + pad(date.getMinutes()) + pad(date.getSeconds());
    }

    function chunkCount(size) {
        return Math.max(1, Math.ceil(size / CHUNK_BYTES));
    }

    function buildRows(roster, submissions) {
        var latest = {};
        var attempts = {};
        submissions.forEach(function (s) {
            attempts[s.studentId] = (attempts[s.studentId] || 0) + 1;
            var cur = latest[s.studentId];
            if (!cur || Date.parse(s.submittedAt) > Date.parse(cur.submittedAt)) latest[s.studentId] = s;
        });
        var byId = {};
        roster.forEach(function (r) { byId[r.studentId] = r; });
        var ids = Object.keys(byId);
        Object.keys(latest).forEach(function (id) { if (!byId[id]) ids.push(id); });
        return ids.sort().map(function (id) {
            var r = byId[id];
            var s = latest[id];
            return {
                studentId: id,
                firstName: s ? s.firstName : r.firstName,
                lastName: s ? s.lastName : r.lastName,
                inRoster: !!r,
                status: !s ? 'pending' : (s.score === null || s.score === undefined ? 'submitted' : 'reviewed'),
                attempts: attempts[id] || 0,
                refNo: s ? s.refNo : null,
                fileName: s ? s.fileName : null,
                fileSize: s ? s.fileSize : null,
                submittedAt: s ? s.submittedAt : null,
                score: s && s.score !== undefined ? s.score : null,
                comment: s ? s.comment || '' : ''
            };
        });
    }

    function summarize(rows) {
        var out = { total: rows.length, submitted: 0, pending: 0, reviewed: 0 };
        rows.forEach(function (r) {
            if (r.status === 'pending') out.pending++;
            else out.submitted++;
            if (r.status === 'reviewed') out.reviewed++;
        });
        return out;
    }

    function safeLocalStorage() {
        try { return global.localStorage || null; } catch (e) { return null; }
    }

    function sleep(ms) {
        return ms ? new Promise(function (resolve) { setTimeout(resolve, ms); }) : Promise.resolve();
    }

    // Same method names and shapes the Apps Script backend will expose. Going live =
    // replace these bodies with google.script.run calls; index.html stays unchanged.
    function createMockApi(options) {
        options = options || {};
        var storage = options.storage !== undefined ? options.storage : safeLocalStorage();
        var delayMs = options.delayMs === undefined ? 80 : options.delayMs;
        var now = options.now || function () { return new Date(); };
        var memory = null;
        var fileUrls = {};

        function load() {
            if (memory) return clone(memory);
            if (storage) {
                try {
                    var raw = storage.getItem(STORAGE_KEY);
                    if (raw) return JSON.parse(raw);
                } catch (e) {}
            }
            return clone(SEED_SUBMISSIONS);
        }

        function save(list) {
            memory = clone(list);
            if (storage) {
                try { storage.setItem(STORAGE_KEY, JSON.stringify(list)); } catch (e) {}
            }
        }

        return {
            lookupStudent: function (studentId) {
                var id = String(studentId || '').trim();
                var hit = ROSTER.filter(function (r) { return r.studentId === id; })[0];
                return sleep(delayMs).then(function () { return hit ? clone(hit) : null; });
            },

            uploadFile: function (meta, file, onProgress) {
                var errors = validateSubmission({
                    studentId: meta.studentId, firstName: meta.firstName, lastName: meta.lastName,
                    consent: meta.consent, file: file
                });
                if (errors.length) return Promise.reject(new Error(errors.join('\n')));
                // ponytail: simulated chunks, 20-40 steps (~1.6-3.2s at 80ms) so small audio files still
                // show a visible bar in a demo and a 500MB file still finishes in seconds.
                var steps = Math.min(Math.max(chunkCount(file.size), 20), 40);
                var p = Promise.resolve();
                for (var i = 1; i <= steps; i++) {
                    (function (step) {
                        p = p.then(function () { return sleep(delayMs); })
                            .then(function () { if (onProgress) onProgress(step / steps); });
                    })(i);
                }
                return p.then(function () {
                    var id = String(meta.studentId).trim();
                    var list = load();
                    var at = new Date(now().getTime());
                    var refNo = makeRefNo(at, id);
                    while (list.some(function (s) { return s.refNo === refNo; })) {
                        at = new Date(at.getTime() + 1000);
                        refNo = makeRefNo(at, id);
                    }
                    var record = {
                        refNo: refNo,
                        studentId: id,
                        firstName: String(meta.firstName).trim(),
                        lastName: String(meta.lastName).trim(),
                        fileName: file.name,
                        fileSize: file.size,
                        submittedAt: at.toISOString(),
                        score: null,
                        comment: ''
                    };
                    list.push(record);
                    save(list);
                    if (typeof Blob !== 'undefined' && file instanceof Blob && global.URL && global.URL.createObjectURL) {
                        fileUrls[record.refNo] = global.URL.createObjectURL(file);
                    }
                    return { refNo: record.refNo, submittedAt: record.submittedAt };
                });
            },

            listSubmissions: function () {
                return sleep(delayMs).then(function () {
                    return buildRows(ROSTER, load()).map(function (row) {
                        row.fileUrl = row.refNo && fileUrls[row.refNo] ? fileUrls[row.refNo] : null;
                        return row;
                    });
                });
            },

            saveReview: function (refNo, review) {
                var score = Number(review.score);
                if (!Number.isInteger(score) || score < 0 || score > 10) {
                    return Promise.reject(new Error('คะแนนต้องเป็นจำนวนเต็ม 0–10'));
                }
                var list = load();
                var target = list.filter(function (s) { return s.refNo === refNo; })[0];
                if (!target) return Promise.reject(new Error('ไม่พบงานที่ส่ง'));
                target.score = score;
                target.comment = String(review.comment || '').trim();
                save(list);
                return sleep(delayMs);
            },

            resetDemo: function () {
                save(clone(SEED_SUBMISSIONS));
                fileUrls = {};
                return Promise.resolve();
            }
        };
    }

    return {
        MAX_BYTES: MAX_BYTES,
        CHUNK_BYTES: CHUNK_BYTES,
        ALLOWED_EXT: ALLOWED_EXT,
        STORAGE_KEY: STORAGE_KEY,
        ROSTER: ROSTER,
        fileExt: fileExt,
        validateSubmission: validateSubmission,
        makeRefNo: makeRefNo,
        chunkCount: chunkCount,
        buildRows: buildRows,
        summarize: summarize,
        createMockApi: createMockApi
    };
});
