---
type: concept
domain: creative-pursuits
tags:
  - "fujifilm"
  - "camera-settings"
  - "autofocus"
  - "manual-focus"
  - "focus-priority"
  - "blurry-photos"
  - "afmf"
aliases:
  - "Auto Focus + Manual Focus"
summary: "AF+MF is a Fujifilm setting allowing manual focus override that can bypass Focus Priority safety nets and cause blurry photos."
updated: 2026-10-03
generated: { by: "nemoclaw-wiki-ingest/qwen3.6-27b", at: "2026-10-03T00:30:19+00:00" }
group: photography-cameras
---
<!-- domain-nav -->
> domain-badge slug=creative-pursuits name=Creative Pursuits

# AF+MF

**AF+MF** (Auto Focus + [[concepts/manual-focus|Manual Focus]]) is a [[entities/fujifilm|Fujifilm]] camera setting that allows the user to manually override autofocus by rotating the focus ring. While useful for precise manual [[concepts/adjustments|adjustments]], it interacts critically with the [[concepts/focus-priority]] setting.

## Key Behavior & Risks

*   **Override Mechanism:** When AF+MF is enabled, rotating the focus ring shifts the focus point to the manual position, regardless of the current autofocus status.
*   **Interaction with Focus Priority:**
    *   If [[Release/Focus Priority]] is set to **Focus Priority**, the camera prioritizes achieving focus before releasing the shutter.
    *   However, if the user engages manual focus via the ring while in AF+MF mode, the camera may still attempt to [[concepts/deployment|release]] the shutter if the focus distance is deemed "close enough" or if the AF system is confused by the manual intervention, potentially resulting in **blurry photos**.
    *   This override can bypass the safety net of Focus Priority, leading to missed focus if the manual adjustment is not deliberate.
*   **Common Pitfall:** Users expecting strict focus confirmation may find the shutter fires prematurely when manually adjusting focus, especially in dynamic shooting [[concepts/scenarios|scenarios]].

## References

*   [[lab-notes/2026-10-03-Fujifilm-AFMF-overrides-Focus-Priority-causing-blurry-ph|Fujifilm AF+MF overrides Focus Priority, causing blurry photos.]]
*   [[entities/pal2tech|pal2tech]], "[[entities/fujifilm|Fujifilm]] Setting That Overrides [[concepts/focus-priority|Focus Priority]]," [YouTube](https://www.youtube.com/watch?v=Vy6_PWCPiR0), 2026-10-03.
