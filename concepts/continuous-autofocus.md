---
type: concept
domain: creative-pursuits
tags:
  - "photography"
  - "autofocus"
  - "tracking"
  - "cameras"
  - "fujifilm"
  - "settings"
  - "action-shots"
  - "af-mf"
  - "focus-priority"
aliases:
  - "AF-C"
  - "Continuous AF"
  - "Autofocus C Mode"
  - "Tracking Focus"
summary: Continuous Autofocus (AF-C) is a camera mode that dynamically adjusts focus to track moving subjects, utilizing predictive algorithms and specific sensor configurations optimized for action photography.
updated: 2026-10-03
generated: { by: "nemoclaw-wiki-ingest/qwen3.6-27b", at: "2026-10-03T00:35:24+00:00" }
group: photography-cameras
---
<!-- domain-nav -->
> domain-badge slug=creative-pursuits name=Creative Pursuits

# Continuous Autofocus

Continuous Autofocus (AF-C) is an [[concepts/autofocus-mode|autofocus mode]] that continuously adjusts focus to track [[concepts/moving-subjects|moving subjects]], essential for action photography (sports, wildlife, children). Unlike [[concepts/single-autofocus]] (AF-S), it dynamically refocuses as subject [[concepts/exercise|movement]] occurs.

## Key Characteristics
- Requires predictive [[concepts/algorithms|algorithms]] to anticipate subject motion
- Uses dedicated focus tracking sensors/processing
- Performance depends on subject [[concepts/speed|speed]], [[concepts/contrast|contrast]], and lighting
- Typically requires higher [[concepts/compute-capacity|processing power]] than AF-S

## Fujifilm Implementation
[[entities/fujifilm|Fujifilm]] cameras implement AF-C as a core mode alongside [[concepts/manual-focus]] and [[concepts/single-autofocus]]. Optimization details from Fujifilm Autofocus Setup Guide include:

- **[[concepts/afmf|AF+MF]] Interaction**: The "AF+MF" (Auto Focus + Manual Focus) setting can override [[concepts/focus-priority|Focus Priority]] settings, potentially causing unexpected blurry photos when the user attempts manual override during tracking.
- **Release/Focus Priority**: Critical to understand the interaction between "Release/Focus Priority" and "AF+MF" to prevent focus hunting or missed shots in dynamic environments.
- **Troubleshooting**: Refer to [[lab-notes/2026-10-03-Fujifilm-AFMF-overrides-Focus-Priority-causing-blurry-ph|Fujifilm AF+MF overrides Focus Priority, causing blurry photos.]] for detailed analysis of this specific behavior.

## References
- [[entities/pal2tech|pal2tech]], "[[entities/fujifilm|Fujifilm]] Setting That Overrides [[concepts/focus-priority|Focus Priority]]", [Fujifilm AF+MF overrides Focus Priority, causing blurry photos.](https://www.youtube.com/watch?v=Vy6_PWCPiR0)
