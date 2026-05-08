---
type: concept
domain: tools-platforms
group: developer-tooling-clis
tags:
  - "concept"
  - "usb"
  - "usb-c"
  - "cables"
  - "connectors"
  - "hardware"
  - "reference"
aliases:
  - "USB 3.0"
  - "USB-C"
summary: Overview of USB 3.0 and USB-C cable specifications and compatibility issues.
updated: 2026-05-01
---
# USB 3.0

USB 3.0, officially branded as USB 3.1 Gen 1 and later rebranded as USB 3.2 Gen 1, is a standard for data transfer and power delivery released in 2008. It offers a theoretical maximum bandwidth of 5 Gbps, a significant improvement over [[concepts/usb-20|USB 2.0]]'s 480 Mbps. The standard uses a nine-pin micro connector and supports both power delivery and high-speed data transmission over a single cable.

## USB-C and Compatibility

The introduction of USB-C as a reversible connector standard has created some confusion in the market. While USB 3.0 devices originally used proprietary connectors, modern implementations increasingly combine USB 3.0 speeds with USB-C connectors. This has led to compatibility challenges, as not all USB-C cables support USB 3.0 speeds—some may only carry USB 2.0 data rates while providing power delivery. Users cannot always determine cable capabilities from appearance alone.

## Practical Limitations

Real-world data transfer speeds rarely approach the theoretical 5 Gbps maximum due to protocol overhead and [[concepts/hardware|hardware]] limitations. Environmental factors, cable quality, and device implementation all affect performance. The proliferation of different cable types and connector variants has fragmented the ecosystem, making it difficult for consumers to ensure compatibility between devices and cables without careful verification of specifications.

## Source Notes
- 2026-04-14: "But [[concepts/openclaw|OpenClaw is expensive..."]]