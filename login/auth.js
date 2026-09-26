(function (global, factory) {
    var api = factory(global);
    if (typeof module !== 'undefined' && module.exports) module.exports = api;
    global.SiconverseAuth = api;
})(typeof window !== 'undefined' ? window : globalThis, function (global) {
    'use strict';

    // Client-side login gate. Owner-accepted limitation (2026-09-26): this only
    // guides ordinary students; anyone technical can bypass it.
    var STORAGE_KEY = 'siconverse-auth';

    function toB64(bytes) {
        var s = '';
        for (var i = 0; i < bytes.length; i++) s += String.fromCharCode(bytes[i]);
        return global.btoa(s);
    }

    function fromB64(text) {
        var s = global.atob(text);
        var out = new Uint8Array(s.length);
        for (var i = 0; i < s.length; i++) out[i] = s.charCodeAt(i);
        return out;
    }

    function normalizeUser(username) {
        return String(username || '').trim().toLowerCase();
    }

    function derive(username, password, cfg) {
        var subtle = global.crypto.subtle;
        var enc = new TextEncoder();
        var material = enc.encode(normalizeUser(username) + '\n' + String(password || ''));
        return subtle.importKey('raw', material, 'PBKDF2', false, ['deriveBits'])
            .then(function (key) {
                return subtle.deriveBits({
                    name: 'PBKDF2', hash: 'SHA-256',
                    salt: fromB64(cfg.salt), iterations: cfg.iterations
                }, key, 256);
            })
            .then(function (bits) { return toB64(new Uint8Array(bits)); });
    }

    function check(username, password, cfg) {
        return derive(username, password, cfg).then(function (hash) { return hash === cfg.hash; });
    }

    function stores(win) {
        var list = [];
        ['localStorage', 'sessionStorage'].forEach(function (name) {
            try {
                var s = win[name];
                s.setItem('__siconverse_probe', '1');
                s.removeItem('__siconverse_probe');
                list.push(s);
            } catch (e) { /* blocked (private mode, disabled storage) */ }
        });
        return list;
    }

    function storageUsable(win) {
        return stores(win).length > 0;
    }

    function isRemembered(win, cfg) {
        return stores(win).some(function (s) {
            try { return s.getItem(STORAGE_KEY) === cfg.hash; } catch (e) { return false; }
        });
    }

    function remember(win, cfg) {
        var saved = false;
        stores(win).forEach(function (s) {
            try { s.setItem(STORAGE_KEY, cfg.hash); saved = true; } catch (e) {}
        });
        return saved;
    }

    function safeNext(next) {
        if (typeof next !== 'string' || next.charAt(0) !== '/') return '/';
        if (next.charAt(1) === '/' || next.charAt(1) === '\\') return '/';
        return next;
    }

    function loginUrl(loc) {
        return '/login/?next=' + encodeURIComponent(loc.pathname + loc.search + loc.hash);
    }

    // What the game page should do. 'redirect' only when we are sure the user is
    // not logged in; any doubt fails open so students are never locked out.
    function gateDecision(win, cfg) {
        if (!cfg || !cfg.hash || !cfg.salt) return 'allow';
        if (!storageUsable(win)) return 'allow';
        return isRemembered(win, cfg) ? 'allow' : 'redirect';
    }

    return {
        STORAGE_KEY: STORAGE_KEY,
        normalizeUser: normalizeUser,
        derive: derive,
        check: check,
        storageUsable: storageUsable,
        isRemembered: isRemembered,
        remember: remember,
        safeNext: safeNext,
        loginUrl: loginUrl,
        gateDecision: gateDecision,
        toB64: toB64,
        fromB64: fromB64
    };
});
