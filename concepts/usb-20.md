---
type: concept
domain: tools-platforms-infrastructure
group: apis-integrations-mcp
tags:
  - "concept"
  - "usb"
  - "usb-2.0"
  - "usb-c"
  - "cables"
  - "connectors"
  - "hardware"
aliases:
  - "USB-C cables"
summary: USB 2.0 is a standard for data and power transfer, with related notes on USB-C cable specifications and compatibility issues.
updated: 2026-07-21
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-21" }
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

# USB 2.0

USB 2.0 is a standardized interface for data and power transfer between computers and peripheral devices. Released in 2000, it succeeded USB 1.1 and offered substantially improved performance, supporting data transfer rates up to 480 Mbps. This represented a significant advancement that enabled practical use of higher-bandwidth devices like external hard drives and digital cameras. USB 2.0 became the dominant connection standard throughout the 2000s and 2010s, used for keyboards, mice, printers, and countless other peripherals.

## Technical Specifications

USB 2.0 operates over a four-wire cable configuration, with two wires dedicated to power delivery (typically 5V at up to 500mA) and two for differential data signaling. The standard supports three speed modes: Low Speed (1.5 Mbps), Full Speed (12 Mbps), and High Speed (480 Mbps). Devices remain backward compatible across these modes, allowing older peripherals to function on newer hosts and vice versa, though at reduced speeds when mismatched.

## USB-C and Modern Compatibility

Modern USB 2.0 data connections are frequently implemented through USB Type-C connectors, which provide reversible orientation and improved durability compared to earlier USB-A and USB-B connectors. However, USB-C cables vary in capability; not all USB-C cables support full USB 2.0 speeds or safe power delivery, requiring users to verify cable specifications for intended applications. This proliferation of connector types with inconsistent performance characteristics has created compatibility challenges in practice.

## Source Notes
- 2026-04-14: "But [[concepts/openclaw|OpenClaw is expensive..."]]
