---
type: concept
tags:
  - "signal-modulation"
  - "amplitude-modulation"
  - "communications"
  - "digital-modulation"
  - "rf-filters"
  - "ham-radio"
  - "history-of-technology"
updated: 2026-07-22
domain: science-physics-research
group: physics-fundamental-theory
aliases:
  - "QAM"
  - "quadrature amplitude modulation"
summary: A technical deep dive into the architecture, signal physics, and evolution of SpaceX Starlink from version 1.5 to version 3.
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-22" }
---
<!-- domain-nav -->
> domain-badge slug=science-physics-research name=Science, Physics & Research

# Amplitude Modulation

Amplitude Modulation (AM) is a signal modulation technique where the amplitude of a high-frequency carrier wave is varied in proportion to the instantaneous amplitude of the message signal. While Quadrature Amplitude Modulation (QAM) and other complex schemes dominate modern digital communications, AM remains foundational for understanding spectral efficiency and [[concepts/signal-processing|signal processing]].

## Signal Construction and Symbol Mapping

In QAM systems, data [[concepts/classical-bits|bits]] are grouped and mapped to points on a constellation diagram, where each point represents a unique combination of amplitude and [[concepts/phase|phase]] values. The in-phase (I) component modulates the cosine carrier while the quadrature (Q) component modulates the sine carrier, giving the technique its name. At the receiver, the composite signal is demodulated using synchronized local oscillat

## Historical Evolution and Filter Technology

The development of efficient amplitude modulation techniques was driven by the need to conserve [[concepts/network-speed|bandwidth]] and power. A critical milestone in this evolution was the refinement of [[concepts/single-sideband|Single Sideband]] Modulation (SSB), which eliminates the redundant carrier and one sideband to improve spectral efficiency.

*   **Origins in Ham Radio:** The technology behind modern RF filters originated from problems faced by radio hobbyists in the 1950s who sought to optimize transmission [[concepts/clarity-slider|clarity]] and bandwidth.
*   **Transition to [[concepts/consumer-grade-hardware|Consumer Electronics]]:** The specific filter architectures developed for these amateur radio applications became essential components in modern smartphones, enabling compact and efficient signal processing.
*   **Technical Impact:** This evolution highlights the transition of niche [[concepts/diy|hobbyist engineering]] into critical infrastructure for global mobile communications.

For a detailed account of this technological [[concepts/evolutionary-lineage|lineage]], see [[lab-notes/2026-07-22-Ham-Radios-Single-Sideband-Filter-From-Hobby-to-Smartpho|Ham Radio's Single Sideband Filter: From Hobby to Smartphone Essential]].

## References

[Ham Radio's Single Sideband Filter: From Hobby to Smartphone Essential](https://www.youtube.com/watch?v=uOvgS_HvOcw)
