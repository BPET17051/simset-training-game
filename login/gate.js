// Runs in the game's <head> before CreateJS loads: send not-logged-in visitors to
// /login/ before any game asset downloads. Fails open (see SiconverseAuth.gateDecision).
(function () {
    try {
        if (window.SiconverseAuth &&
            window.SiconverseAuth.gateDecision(window, window.SICONVERSE_LOGIN) === 'redirect') {
            window.location.replace(window.SiconverseAuth.loginUrl(window.location));
        }
    } catch (e) { /* never block the game because of the gate itself */ }
})();
