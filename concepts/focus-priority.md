---
type: concept
domain: creative-pursuits
tags:
  - "camera-settings"
  - "autofocus"
  - "shutter-release"
  - "focus-priority"
  - "release-priority"
  - "afmf"
  - "fujifilm"
aliases:
  - "Focus Priority Setting"
  - "Shutter Release Priority"
summary: Focus Priority is a camera configuration that controls whether the shutter activates only upon confirmed focus or immediately upon half-press, balancing image sharpness against capture speed.
updated: 2026-10-03
generated: { by: "nemoclaw-wiki-ingest/qwen3.6-27b", at: "2026-10-03T00:26:20+00:00" }
group: photography-cameras
---
<!-- domain-nav -->
> domain-badge slug=creative-pursuits name=Creative Pursuits

# Focus Priority

**Focus Priority** is a camera setting that determines whether the shutter [[concepts/deployment|release]] is activated only when the subject is in focus (Focus Priority) or regardless of focus status (Release Priority). It is a critical configuration for balancing shot [[concepts/speed|speed]] against [[concepts/sharpness|sharpness]].

## Key Concepts
- **Focus Priority**: Shutter fires only when autofocus confirms focus. Prevents blurry images but may cause missed moments.
- **Release Priority**: Shutter fires immediately upon half-press, regardless of focus. Faster but risks out-of-focus shots.
- **[[concepts/afmf|AF+MF]] (Auto Focus + [[concepts/manual-focus|Manual Focus]])**: A mode allowing manual override of autofocus.

## Known Issues & Interactions
- **Fujifilm AF+MF Override**: On [[entities/fujifilm|Fujifilm cameras]], enabling AF+MF can override standard Focus Priority settings, leading to unexpected blurry photos when the user attempts manual adjustment.
  - See detailed analysis: [[lab-notes/2026-10-03-Fujifilm-AFMF-overrides-Focus-Priority-causing-blurry-ph|Fujifilm AF+MF overrides Focus Priority, causing blurry photos.]]
  - This behavior is documented in technical reviews such as [Fujifilm AF+MF overrides Focus Priority, causing blurry photos.](https://www.youtube.com/watch?v=Vy6_PWCPiR0)

## Best Practices
- Verify Focus Priority settings when switching to AF+MF modes.
- Test shutter response in low-[[concepts/contrast|contrast]] [[concepts/scenarios|scenarios]] where autofocus may struggle.
- Use Focus Priority for [[concepts/stationary-subjects|static subjects]]; [[concepts/release-priority]] for fast-moving action.
