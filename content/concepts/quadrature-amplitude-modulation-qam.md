---
type: concept
domain: science-physics
group: physics-fundamental-theory
tags:
  - "signal-modulation"
  - "amplitude-modulation"
  - "communications"
  - "digital-modulation"
aliases:
  - "QAM"
  - "quadrature amplitude modulation"
summary: A technical deep dive into the architecture, signal physics, and evolution of SpaceX Starlink from version 1.5 to version 3.
updated: 2026-05-01
---
# Quadrature Amplitude Modulation (QAM)

Quadrature Amplitude Modulation is a digital modulation technique that encodes data by varying both the amplitude and phase of a carrier wave. The method uses two carrier signals that are 90 degrees out of phase (in quadrature), allowing each to carry independent information simultaneously. By manipulating the amplitude of these orthogonal components, QAM transmits multiple bits per symbol, enabling higher data rates than simpler modulation schemes within a given bandwidth.

## Signal Architecture

QAM divides the signal space into a constellation of points, where each point represents a unique combination of amplitude and phase values. The number of constellation points determines the modulation order—for example, 16-QAM uses 16 points and transmits 4 bits per symbol, while [[concepts/256-qam|256-QAM]] uses 256 points and transmits 8 bits per symbol. Higher-order QAM schemes increase spectral efficiency but require more precise signal transmission and reception to maintain adequate separation between constellation points.

## Applications in Satellite Communications

QAM has become standard in satellite systems due to its efficiency in bandwidth utilization. Modern satellite networks, including those used for broadband internet delivery, employ adaptive QAM schemes that adjust modulation order based on channel conditions and signal quality. This allows systems to maximize data throughput during favorable propagation conditions while maintaining reliable communication links during periods of degraded signal quality.

## Source Notes

- 2026-04-14: The Starlink Breakthrough Everyone Missed