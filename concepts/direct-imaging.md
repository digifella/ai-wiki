---
type: concept
domain: cosmology-space
tags:
  - "astronomy"
  - "exoplanets"
  - "direct-imaging"
  - "coronagraphy"
  - "starshades"
  - "optical-telescopes"
  - "contrast-resolution"
  - "wavefront-control"
aliases:
  - "Direct Exoplanet Imaging"
  - "Direct Detection"
  - "Planetary Direct Imaging"
  - "Optical Contrast Imaging"
summary: Direct imaging is an astronomical technique that captures photons directly from exoplanets using advanced optical systems to mitigate stellar glare and achieve high contrast resolution.
updated: 2026-07-11
group: space-systems-exploration-infrastructure
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-11" }
---
<!-- domain-nav -->
> domain-badge slug=cosmology-space name=Cosmology & Space

# Direct Imaging

**Direct imaging** is an astronomical technique used to capture photons directly from Exoplanets, bypassing the indirect methods like Transit Method or Radial Velocity. It requires extreme [[concepts/contrast|contrast]] [[concepts/solution|resolution]] to separate faint planetary light from the blinding glare of their host [[concepts/stellar-objects|stars]].

## Technical Challenges
- **[[concepts/image-contrast|Contrast Ratio]]:** Earth-like planets are ~10 billion times dimmer than their host stars in [[concepts/light|visible light]].
- **Angular Separation:** Planets orbit very close to their stars, requiring diffraction-limited [[concepts/optics|optics]] and advanced Coronagraphy or external occulters.
- **Wavefront Control:** Requires active optical systems to cancel out speckle noise caused by telescope imperfections.

## Key Technologies
### Internal Occultation
- Uses a Coronagraph mask inside the telescope aperture to block starlight while allowing planetary light through.
- Effective for high-contrast imaging but limited by diffraction effects within the instrument.

### External Occultation (Starshades)
- Utilizes a separate, free-flying spacecraft (the starshade) positioned between the telescope and the target star.
- The starshade blocks starlight via destructive interference and physical occlusion, enabling the detection of Earth-twin signals with minimal internal optical constraints.
- See detailed analysis in [[lab-notes/2026-06-06-Starshade-Technology-for-Direct-Imaging-of-Earth-like-Ex|Starshade Technology for Direct Imaging of Earth-like Exoplanets]].

## Current Status & Future Missions
- Over 6,000 exoplanets discovered via indirect means; direct imaging remains reserved for bright, young, wide-orbit gas giants.
- Next-gen missions aim to target habitable zones of nearby stars using combinations of advanced coronagraphs and starshades to search for Biosignatures in atmospheres.
