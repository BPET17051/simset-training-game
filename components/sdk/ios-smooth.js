(function (global, factory) {
    var api = factory(global);
    if (typeof module !== 'undefined' && module.exports) module.exports = api;
    global.SimsetIOS = api;
    if (typeof window !== 'undefined' && typeof document !== 'undefined') api.autoInstall(window, document);
})(typeof window !== 'undefined' ? window : globalThis, function (global) {
    'use strict';

    // ponytail: calibration knobs, tuned from ?debug=1 readings on real devices (Task 5).
    // MAX_RATIO caps retina scaling (iPhones report 3). MAX_CANVAS_PIXELS caps the canvas
    // backing store for large iPads; Infinity = off. Raising either costs frame rate on iOS.
    var MAX_RATIO = 2;
    var MAX_CANVAS_PIXELS = Infinity;

    function cappedPixelRatio(real, cssW, cssH, maxRatio, maxPixels) {
        var r = Math.min(real || 1, maxRatio);
        if (isFinite(maxPixels) && cssW > 0 && cssH > 0) {
            r = Math.min(r, Math.sqrt(maxPixels / (cssW * cssH)));
        }
        return Math.max(1, r);
    }

    function query(win) {
        try { return new URLSearchParams((win.location && win.location.search) || ''); } catch (e) { return null; }
    }

    function findGetter(win) {
        var o = win;
        while (o) {
            var d = Object.getOwnPropertyDescriptor(o, 'devicePixelRatio');
            if (d) return d.get ? function () { return d.get.call(win); } : function () { return d.value; };
            o = Object.getPrototypeOf(o);
        }
        return function () { return 1; };
    }

    // makeResponsive and the video widget both read window.devicePixelRatio, so capping it
    // here keeps canvas and DOM overlay consistent without editing Demo5.js.
    function installPixelRatioCap(win, opts) {
        opts = opts || {};
        var real = findGetter(win);
        var q = query(win);
        var override = q && q.get('debug') === '1' ? parseFloat(q.get('dpr')) : NaN;
        var maxRatio = opts.maxRatio || MAX_RATIO;
        var maxPixels = opts.maxPixels || MAX_CANVAS_PIXELS;
        function used() {
            if (override > 0) return override;
            return cappedPixelRatio(real(), win.innerWidth, win.innerHeight, maxRatio, maxPixels);
        }
        try {
            Object.defineProperty(win, 'devicePixelRatio', { configurable: true, get: used });
        } catch (e) {
            return null;
        }
        return { real: real, used: used };
    }

    function makeVideosInline(root, ObserverCtor) {
        function fix() {
            var list = root.getElementsByTagName('video');
            for (var i = 0; i < list.length; i++) {
                var v = list[i];
                if (v.playsInline === true) continue;
                v.playsInline = true;
                v.setAttribute('playsinline', '');
                v.setAttribute('webkit-playsinline', '');
            }
        }
        fix();
        var Ctor = ObserverCtor || global.MutationObserver;
        if (Ctor) new Ctor(fix).observe(root, { childList: true, subtree: true });
    }

    function tuneStage(createjs, stage, win) {
        createjs.Ticker.timingMode = createjs.Ticker.RAF_SYNCHED;
        var touchOnly = !!(win.matchMedia && win.matchMedia('(hover: none)').matches);
        if (touchOnly) {
            stage.enableMouseOver(0);
            if (createjs.Touch.isSupported()) createjs.Touch.enable(stage, true, false);
        }
        return { touchMode: touchOnly };
    }

    function installDebug(win, doc, createjs, cap) {
        var q = query(win);
        if (!q || q.get('debug') !== '1') return;
        var box = doc.createElement('pre');
        box.style.cssText = 'position:fixed;left:4px;top:4px;z-index:99999;margin:0;padding:6px 8px;' +
            'background:rgba(0,0,0,.75);color:#0f0;font:11px/1.35 monospace;pointer-events:none;white-space:pre';
        doc.body.appendChild(box);
        var errors = [];
        win.addEventListener('error', function (e) { errors.push(String(e.message)); });
        var frames = 0, last = Date.now(), rafFps = 0;
        (function loop() { frames++; win.requestAnimationFrame(loop); })();
        setInterval(function () {
            var now = Date.now();
            rafFps = Math.round(frames * 1000 / (now - last)); frames = 0; last = now;
            var canvas = doc.getElementById('canvas');
            var vids = Array.prototype.map.call(doc.getElementsByTagName('video'), function (v) {
                var blocked = v.autoplay && v.paused && v.readyState >= 2 && v.currentTime === 0;
                return (v.id || '?') + ' ' + (v.paused ? 'paused' : 'playing') + ' rs=' + v.readyState +
                    ' t=' + v.currentTime.toFixed(1) + (v.muted ? ' muted' : '') +
                    (v.playsInline ? ' inline' : ' NOT-INLINE') + (blocked ? ' AUTOPLAY-BLOCKED?' : '');
            });
            box.textContent = [
                'tick fps ' + (createjs && createjs.Ticker ? createjs.Ticker.getMeasuredFPS().toFixed(1) : '-') + ' | raf fps ' + rafFps,
                'dpr real ' + (cap ? cap.real() : '?') + ' used ' + win.devicePixelRatio,
                'canvas ' + (canvas ? canvas.width + 'x' + canvas.height : '-') + ' css ' + win.innerWidth + 'x' + win.innerHeight,
                'hover:none ' + !!(win.matchMedia && win.matchMedia('(hover: none)').matches),
            ].concat(vids).concat(errors.slice(-3).map(function (m) { return 'ERR ' + m; })).join('\n');
        }, 500);
    }

    function autoInstall(win, doc) {
        var cap = installPixelRatioCap(win);
        function ready() {
            var overlay = doc.getElementById('dom_overlay_container');
            if (overlay) makeVideosInline(overlay);
            installDebug(win, doc, win.createjs, cap);
        }
        if (doc.readyState === 'loading') doc.addEventListener('DOMContentLoaded', ready); else ready();
    }

    return {
        MAX_RATIO: MAX_RATIO,
        MAX_CANVAS_PIXELS: MAX_CANVAS_PIXELS,
        cappedPixelRatio: cappedPixelRatio,
        installPixelRatioCap: installPixelRatioCap,
        makeVideosInline: makeVideosInline,
        tuneStage: tuneStage,
        installDebug: installDebug,
        autoInstall: autoInstall
    };
});
