---
type: concept
domain: creative-pursuits
tags:
  - "color-correction"
  - "white-balance"
  - "temperature-tint"
  - "post-processing"
  - "lightroom"
  - "adobe-camera-raw"
  - "color-grading"
aliases:
  - "WB adjustment"
  - "color temperature correction"
  - "neutral white reference"
summary: White balance is the process of removing color casts from images by adjusting red, green, and blue channel intensity to match the light source's color temperature and tint.
updated: 2026-07-09
group: lightroom-color-workflows
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-09" }
---
<!-- domain-nav -->
> domain-badge slug=creative-pursuits name=Creative Pursuits

# White Balance Adjustments

**White Balance (WB)** is the process of removing unnatural [[concepts/color-casts|color casts]] from images, ensuring that white objects appear truly white under different lighting conditions. It involves adjusting the relative intensity of red, green, and blue channels to match the color temperature (measured in **Kelvin**) and tint of the [[concepts/light|light]] source.

## Core Principles
- **Color Temperature**: Cool (blue) vs. Warm (amber) shifts.
- **Tint**: Green vs. Magenta shifts.
- **Neutral Reference**: Establishing a baseline where RGB values are equal for neutral surfaces.

## Implementation & Tools
- **[[concepts/camera-settings|Camera Settings]]**: In-camera WB presets (Daylight, Cloudy, Tungsten, etc.) or custom Kelvin input.
- **Post-Processing**:
  - Global [[concepts/adjustments|adjustments]] via Temperature/Tint sliders.
  - [[concepts/eyedropper-tool|Eyedropper tool]] selection of neutral areas.
  - Split-toning for artistic [[concepts/photo-tonal-adjustments|color grading]].

## Recent Developments
Recent [[concepts/software-updates|updates]] in [[entities/adobe|Adobe]] ecosystems have expanded WB capabilities beyond global adjustments, introducing more [[concepts/granular-control|granular control]] options. See [[lab-notes/2026-05-22-Adobe-Camera-Raw-Updates-Enhanced-Masking-Local-Color-Gr|Adobe Camera Raw Updates: Enhanced Masking, Local Color Grading, White Balance]] for details on:
- **Extended White Balance Controls**: Improved [[concepts/algorithms|algorithms]] for handling complex mixed lighting [[concepts/scenarios|scenarios]].
- **[[concepts/local-color-grading|Local Color Grading]]**: Ability to apply specific WB corrections to masked regions rather than the entire frame.
- **Enhanced [[concepts/layer-masks|Masking]] Integration**: Tighter coupling between subject/sky masks and white balance adjustments for targeted correction.
