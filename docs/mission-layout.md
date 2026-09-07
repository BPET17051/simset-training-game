# All scenes: independent background and foreground

## Expanded request (2026-09-05)

The user has requested removal of grey margins throughout the game and full
viewport playback for all six intro videos, not just the Mission 1 prototype.

Implementation sequence:
1. Use uniform contain scaling for the foreground in every frame. Replace the
   blurred ambient margins with white on text pages and continuous scene artwork
   on illustrated pages. Preserve all original hit targets and training text.
2. Keep room instruction panels separate from their background; extend baked
   scene artwork at its outer edges where the export has no clean background.
   Align gameplay room artwork with the existing hotspot coordinate system.
3. Display intro_video through intro_video6 over a viewport-fixed, muted blurred
   copy with cover fitting. Crop only video edges, never stretch the foreground
   video or crop game controls. Pause both copies when detached.
4. Expand the local harness to inspect all 27 frames, intro transitions and popup
   close behavior; verify several aspect ratios, then commit/push/deploy.

Acceptance: no ambient grey margins at any frame; every foreground coordinate
inside 1280x720 stays visible; each intro covers the viewport and leaves no DOM
overlay after transition. Research consent, scoring and scenario wording remain
unchanged. Portrait rotation guidance is retained. External assets are reused.

Additional touched file: components/video/src/video.js (existing video widget).
The following section records the previous prototype, not the current scope.

## Smooth video opening (2026-09-07)

- Reveal each clip only after its first frame is ready, using short opacity and
  scale transitions that stay on the compositor.
- Keep the full-viewport ambient copy on its first decoded frame. Do not run a
  second live decoder or a full-screen blur while the foreground clip plays.
- Preserve the exported widget transform and close-button placement. Respect
  `prefers-reduced-motion` by revealing immediately without transitions.
- Verify the patient open/close flow and all 27 timeline frames at mobile,
  tablet and desktop sizes before deployment.

Approved direction: fill the viewport with the room background and keep the
instruction panel and START MISSION control at their original proportions.
This first slice converts the Mission 1 instruction screen (timeline frame 4,
zero-based). Other scenes retain their existing presentation and interactions.

## Implementation plan

1. Reproduce the margin at 1917 x 912. Add layout regression tests.
2. Render the existing clean room sprite on a separate, full-viewport canvas.
   Clip the baked Mission 1 sprite to its instruction panel; retain the original
   button and timeline events. Fit the foreground entirely inside the viewport.
3. Verify wide, standard, tablet and mobile landscape sizes, orientation changes,
   START MISSION navigation and the following room's video/close interaction.
   Review, commit and push to the existing Vercel production integration.

## Structure and commands

- `index.html`: production entry, CreateJS/Adobe Animate runtime.
- `Demo5.js`: generated timeline and sprite metadata; only the video-component
  cache key changes so deployed clients fetch the updated widget.
- `mission-layout.js`: isolated layout adapter; ES5 functions and var declarations
  matching the export's style, e.g. `function install(options) { ... }`.
- `tests/mission-layout.test.cjs`: Node built-in tests, no extra dependencies.
- `tests/mission-layout.html`: local browser harness; never navigated by the game.
- Serve: `python -m http.server 8765 --bind 127.0.0.1`
- Test: `node --test tests/mission-layout.test.cjs`
- Syntax: `node --check mission-layout.js`
- Diff: `git diff --check`

## Acceptance and boundaries

- The Mission 1 background covers every viewport edge without grey/blur panels.
- All of the 1280 x 720 foreground remains visible with uniform scaling; the
  original START MISSION button still advances to frame 5.
- Leaving Mission 1 restores legacy layout, canvas opacity and video alignment.
- Keep the mobile portrait rotation prompt. Do not modify training text, scoring,
  consent behavior, videos, generated exports or AGENTS.md.
- Test using the local harness to enter scenes without claiming research consent.
- No new dependencies, services or deployment configuration.

## Verification results (2026-09-05)

- Node: 7/7 layout invariant tests pass; syntax check passes.
- Browser: full-viewport background and contained foreground pass at requested
  1917x912, 2560x1080, 1280x720, 1024x768 and 844x390 viewports (fractional CSS
  pixels from display scaling are allowed within 1px).
- 320x568 shows the existing rotation prompt; rotating back restores the scene.
- Original START MISSION click advances to the room. Patient hotspot opens video;
  the video loads/plays and its close button returns to the room.
- Independent code review found no actionable defects in the scoped adapter.
- Limitation: this converts only the Mission 1 instruction frame. Room gameplay,
  video popups and Mission 2/3 still use their prior presentation.
