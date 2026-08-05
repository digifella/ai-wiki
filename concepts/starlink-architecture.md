---
type: concept
domain: cosmology-space
tags:
  - "concept"
  - "satellite-internet"
  - "spacex"
  - "starlink"
  - "telecommunications"
  - "orbital-architecture"
  - "signal-physics"
aliases:
  - "Starlink V3"
  - "SpaceX Starlink Network"
summary: Technical documentation of SpaceX's Starlink satellite internet architecture evolution from V1.5 through V3, covering signal physics and system design.
updated: 2026-07-12
group: space-systems-exploration-infrastructure
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-12" }
---
<!-- domain-nav -->
> domain-badge slug=cosmology-space name=Cosmology & Space

# Starlink Architecture

Starlink is [[entities/spacex|SpaceX]]'s [[concepts/satellite-internet|satellite internet]] constellation designed to provide global broadband coverage through [[concepts/low-earth-orbit-leo|low Earth orbit (LEO)]] satellites. The system operates at approximately 550 kilometers altitude, enabling significantly lower latency than traditional geostationary satellite internet services. The constellation maintains continuous coverage across geographic regions through multiple orbital planes containing hundreds of satellites in coordinated trajectories.

## Orbital Configuration

The constellation is distributed across multiple orbital planes inclined at 53.05 degrees to the equator, with satellites spaced to ensure overlapping coverage and redundancy. This configuration allows the system to serve high-latitude regions more effectively than geostationary alternatives while maintaining relatively consistent signal propagation characteristics across service areas. Ground stations coordinate satellite handoffs as orbital mechanics rotate coverage zones, maintaining user connections through automated switching protocols.

## Technical Evolution

Starlink's architecture has progressed through several hardware iterations, from the V1.5 design through V2 and V3 variants, each introducing improvements to transmit power, antenna efficiency, and thermal management. Signal transmission operates across multiple frequency bands including Ku-band and Ka-band allocations, with phased array antennas aboard each satellite enabling targeted beam steering toward ground terminals. The user terminals employ reciprocal antenna designs to receive the same signal characteristics transmitted by the satellites, establishing symmetric communication links with typical latencies ranging from 25 to 50 milliseconds.

Later generation satellites incorporated increased payload capacity and inter-satellite link capabilities, allowing data routing between satellites in orbit rather than requiring ground station intermediaries for all traffic. This reduces round-trip distances for certain communication paths and improves overall network [[concepts/resilience|resilience]].
## Source Notes
- 2026-04-14: The Starlink Breakthrough Everyone Missed
