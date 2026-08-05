---
type: concept
domain: cosmology-space
tags:
  - "electronic-warfare"
  - "gps-interference"
  - "signal-jamming"
  - "gnss-security"
  - "radio-frequency"
  - "critical-infrastructure"
  - "navigation-disruption"
aliases:
  - "GPS Interference"
  - "GNSS Jamming"
  - "Signal Denial"
  - "Electronic Attack on GPS"
summary: GPS jamming is an electronic warfare tactic that disrupts Global Positioning System signals by emitting high-power radio frequency noise, thereby preventing receivers from calculating accurate position, velocity, or time
updated: 2026-07-11
group: space-systems-exploration-infrastructure
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-11" }
---
<!-- domain-nav -->
> domain-badge slug=cosmology-space name=Cosmology & Space

# GPS Jamming

**Definition:** The deliberate emission of radio frequency signals to disrupt or deny Global Positioning System (GPS) signals, preventing receivers from determining accurate position, velocity, or time.

## Overview
GPS jamming is a form of Electronic Warfare (EW) that exploits the [[concepts/vulnerability|vulnerability]] of GPS signals due to their low power upon reaching [[entities/earth|Earth]]. Unlike spoofing, which provides false data, jamming simply drowns out the legitimate signal with noise.

## Recent Developments & Case Studies
- **Europe-wide Incidents (2021–2024):**
	- Significant increase in GPS interference reported across multiple European countries starting in 2021.
	- [[lab-notes/2026-06-05-Europe-wide-GPS-Jamming-Events-Satellite-Source-Investig|Europe-wide GPS Jamming Events: Satellite Source Investigation Summary]] details the investigation led by Professor Todd Humphreys following a tip-off in November 2024.
	- Analysis utilized data from a pan-European network of GPS monitoring stations to trace the source and scope of the interference.

## Technical Characteristics
- **Mechanism:** High-power signal emission on GPS L-band frequencies (L1: 1575.42 MHz, L2: 1227.60 MHz, L5: 1176.45 MHz).
- **Impact:**
	- Civilian navigation disruption.
	- Critical infrastructure timing errors (power [[concepts/grids|grids]], financial networks).
	- Aviation safety risks.
- **Detection:** Requires specialized receivers capable of measuring [[concepts/camera-raw|signal-to-noise ratio]] (C/N0) anomalies.

## Key Entities & Research
- Todd Humphreys: University of Wisconsin-Madison GPS expert leading significant research into GNSS vulnerability and mitigation.
- European GNSS Agency (GSA): Monitors and reports on GNSS interference incidents.

## Related Concepts
- GPS Spoofing
- Electronic Warfare
- Resilient Navigation
- Signal Interference
