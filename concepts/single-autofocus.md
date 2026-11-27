---
type: concept
domain: creative-pursuits
tags:
  - "autofocus"
  - "camera-settings"
  - "photography-technique"
  - "fujifilm"
  - "af-s"
  - "stationary-subjects"
  - "af-mf"
  - "focus-priority"
aliases:
  - "AF-S"
  - "One-Shot AF"
  - "Single Servo AF"
  - "Autofocus Single"
summary: Single Autofocus is a camera mode that focuses once upon half-pressing the shutter button and locks focus for stationary subjects.
updated: 2026-10-03
group: photography-cameras
generated: { by: "nemoclaw-wiki-ingest/qwen3.6-27b", at: "2026-10-03T00:33:20+00:00" }
---
<!-- domain-nav -->
> domain-badge slug=creative-pursuits name=Creative Pursuits

# Single Autofocus

[[concepts/autofocus-mode|Autofocus mode]] where the camera focuses **once** upon half-pressing the shutter button and locks focus until the image is captured. Ideal for [[concepts/stationary-subjects|stationary subjects]]. Commonly labeled as **AF-S** (Autofocus Single) or **One-Shot AF**.

## Key Characteristics
- Focuses **only once**; does not adjust for [[concepts/moving-subjects|moving subjects]]
- Requires subject to be stationary or photographer to recompose after focus
- Provides highest accuracy for static scenes (landscapes, portraits, still life)

## Fujifilm Implementation
- Designated as **AF-S** in [[entities/fujifilm|Fujifilm]] camera menus
- Optimized via Fujifilm Autofocus Setup Guide:
  - Selects Autofocus Area Mode (Center/Zone/Wide) based on subject
  - Adjusts Autofocus [[concepts/speed|Speed]] for balance between responsiveness and [[concepts/accuracy|precision]]
  - Configures [[concepts/focus-priority|Focus Priority]] to prevent shutter [[concepts/deployment|release]] without focus

## Known Issues & Overrides
- **[[concepts/afmf|AF+MF]] Interaction**: On [[entities/fujifilm|Fujifilm]] cameras, enabling **AF+MF** (Auto Focus + [[concepts/manual-focus|Manual Focus]]) can override **Focus Priority** settings, potentially causing blurry photos if the user manually adjusts focus while the shutter is half-pressed [[lab-notes/2026-10-03-Fujifilm-AFMF-overrides-Focus-Priority-causing-blurry-ph|Fujifilm AF+MF overrides Focus Priority, causing blurry photos.]]
- Verify **Release/Focus Priority** settings when using AF-S to ensure [[concepts/focus-lock|focus lock]] is maintained as intended.

## References
- [Fujifilm AF+MF overrides Focus Priority, causing blurry photos.](https://www.youtube.com/watch?v=Vy6_PWCPiR0)
