---
type: concept
domain: creative-pursuits
tags:
  - "focus-control"
  - "camera-settings"
  - "lens-adjustment"
  - "manual-photography"
  - "autofocus-alternative"
  - "fujifilm-troubleshooting"
aliases:
  - "MF"
  - "Manual Focus Mode"
  - "Lens Focus Adjustment"
  - "Non-Automatic Focus"
  - "AF+MF Conflict"
summary: "Manual focus is the process of adjusting a camera lens's focus manually without automated systems. On Fujifilm cameras, the interaction between Continuous Autofocus (AF-C) and the \"AF+MF\" assist feature can override focus priority, potentially causing unintended focus shifts and blurry images if not managed correctly."
updated: 2026-10-03
group: photography-cameras
generated: { by: "nemoclaw-wiki-ingest/qwen3.6-27b", at: "2026-10-03T00:40:03+00:00" }
---
<!-- domain-nav -->
> domain-badge slug=creative-pursuits name=Creative Pursuits

group: research-practice-sensemaking

# Manual Focus

The process of adjusting a camera lens's focus manually, without [[concepts/automations|automated systems]], enabling precise control over the focal plane. Essential for low-[[concepts/light|light]] conditions, [[concepts/macro-photography|macro photography]], and situations where autofocus systems struggle (e.g., low [[concepts/contrast|contrast]] or fast-[[concepts/moving-subjects|moving subjects]]).

## Fujifilm Camera Integration
- [[entities/fujifilm|Fujifilm]] cameras implement three core autofocus modes: Manual Focus (M), [[concepts/single-autofocus|Single Autofocus]] (AF-S), and [[concepts/continuous-autofocus|Continuous Autofocus]] (AF-C).
- Manual Focus (M) explicitly disables autofocus, requiring full manual lens adjustment.
- The Fujifilm Autofocus Setup Guide details [[concepts/algorithmic-optimization|optimization techniques]] for AF-S, though users must be aware of specific mode interactions.

### Known Issues: AF+MF and Focus Priority
- **[[concepts/afmf|AF+MF]] Override Behavior:** In [[concepts/continuous-autofocus|Continuous Autofocus]] (AF-C) mode, enabling "AF+MF" (Auto Focus + Manual Focus) allows the user to manually override focus while the camera continues to track subjects. However, this can inadvertently override [[concepts/focus-priority|focus priority]].
- **Blurry Photos Risk:** If the camera's "Release/Focus Priority" is set to prioritize [[concepts/deployment|release]] over focus, or if the AF+MF assist engages unexpectedly during a shot, the lens may shift focus away from the intended subject, resulting in blurry images.
- **Troubleshooting:** For detailed analysis of this specific [[concepts/conflict|conflict]], see [[lab-notes/2026-10-03-Fujifilm-AFMF-overrides-Focus-Priority-causing-blurry-ph|Fujifilm AF+MF overrides Focus Priority, causing blurry photos.]].

## References
- [[entities/pal2tech|pal2tech]]. "[[entities/fujifilm|Fujifilm]] Setting That Overrides [[concepts/focus-priority|Focus Priority]]." [Fujifilm AF+MF overrides Focus Priority, causing blurry photos.](https://www.youtube.com/watch?v=Vy6_PWCPiR0)
