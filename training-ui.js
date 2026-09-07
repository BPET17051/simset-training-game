(function (global, factory) {
    var api = factory(global);
    if (typeof module !== 'undefined' && module.exports) module.exports = api;
    global.SimsetTrainingUI = api;
})(typeof window !== 'undefined' ? window : globalThis, function (global) {
    var STORAGE_KEY = 'simset-training-progress-v1';

    function resumableFrame(frame) {
        return Number.isInteger(frame) && frame >= 1 && frame <= 24;
    }

    function session(storage) {
        if (storage) return storage;
        try { return global.sessionStorage; } catch (error) { return null; }
    }

    function loadProgress(storage) {
        storage = session(storage);
        if (!storage) return null;
        try {
            var saved = JSON.parse(storage.getItem(STORAGE_KEY));
            return saved && resumableFrame(saved.frame) ? { frame: saved.frame } : null;
        } catch (error) {
            return null;
        }
    }

    function saveProgress(storage, frame) {
        storage = session(storage);
        if (!storage || !resumableFrame(frame)) return false;
        try {
            storage.setItem(STORAGE_KEY, JSON.stringify({ frame: frame }));
            return true;
        } catch (error) {
            return false;
        }
    }

    function clearProgress(storage) {
        storage = session(storage);
        if (!storage) return;
        try { storage.removeItem(STORAGE_KEY); } catch (error) {}
    }

    function completionMessage(reason) {
        if (reason === 'declined') {
            return 'บันทึกการปฏิเสธการเข้าร่วมเรียบร้อยแล้ว ขอบคุณสำหรับเวลาของท่าน';
        }
        return 'สิ้นสุดการเรียนรู้แล้ว กรุณาถ่าย video หรือบันทึกเสียงของการขอคำปรึกษาจากโจทย์ที่แนบให้ ด้วยโทรศัพท์หรือกล้องของท่านเอง ให้ได้ยินเสียงของการปรึกษา แต่ไม่เห็นใบหน้าหรือสิ่งใดที่จะระบุตัวตนของท่าน';
    }

    function accept(root, storage) {
        root._simsetConsentAccepted = true;
        root._simsetEndReason = null;
        saveProgress(storage, 1);
    }

    function decline(root, storage) {
        root._simsetConsentAccepted = false;
        root._simsetEndReason = 'declined';
        clearProgress(storage);
    }

    function complete(root, storage) {
        root._simsetEndReason = 'completed';
        clearProgress(storage);
    }

    function restart(root, storage) {
        root._simsetConsentAccepted = false;
        root._simsetEndReason = null;
        clearProgress(storage);
    }

    function install(options) {
        var root = options.root;
        var ticker = options.ticker;
        var storage = session(options.storage);
        var lastFrame = -1;

        function sync() {
            var frame = root.currentFrame;
            if (frame === lastFrame) return;
            lastFrame = frame;
            if (root._simsetConsentAccepted) saveProgress(storage, frame);
        }

        // ponytail: no auto-jump to a saved frame on load - team wants every page
        // load to start at frame 0 like the original, matching what a click
        // actually did rather than a stale sessionStorage entry from a prior visit.
        if (ticker && ticker.addEventListener) ticker.addEventListener('tick', sync);
        sync();
    }

    return {
        STORAGE_KEY: STORAGE_KEY,
        completionMessage: completionMessage,
        loadProgress: loadProgress,
        saveProgress: saveProgress,
        clearProgress: clearProgress,
        accept: accept,
        decline: decline,
        complete: complete,
        restart: restart,
        install: install
    };
});
