---
type: concept
domain: health-wellbeing
tags:
  - "wireless-communication"
  - "short-range-networks"
  - "iot-connectivity"
  - "low-power-devices"
  - "frequency-hopping"
  - "ble"
  - "mesh-networking"
aliases:
  - "BLE"
  - "Bluetooth Low Energy"
  - "Classic Bluetooth"
summary: Bluetooth is a short-range wireless standard using 2.4 GHz UHF radio waves for low-power data exchange between fixed and mobile devices, available in Classic, Low Energy, and Mesh variants.
updated: 2026-07-11
group: health-practice-patient-knowledge
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-11" }
---
<!-- domain-nav -->
> domain-badge slug=health-wellbeing name=Health & Wellbeing

# Bluetooth Technology

Bluetooth is a short-range wireless technology standard for exchanging data between fixed and [[concepts/portable-devices|mobile devices]] over short distances using UHF radio waves in the ISM bands near 2.4–2.485 GHz, specifically the 2400–2483.5 MHz range. It is primarily designed for low-cost, low-power connectivity with a range of approximately 10 meters (Class 2) to 100 meters (Class 1).

## Core Architecture & Protocols
- **Physical Layer (PHY):** Uses Frequency-Hopping Spread Spectrum (FHSS) to mitigate interference and enable simultaneous links.
- **Baseband Protocol:** Handles packet switching, link management, and power saving.
- **Link Manager Protocol (LMP):** Manages [[concepts/connection|connection]] setup, [[concepts/authentication|authentication]], and encryption.
- **Logical Link Control and Adaptation Protocol (L2CAP):** Multiplexes higher-level protocols, handles segmentation/reassembly.

## Versions & Profiles
- **Classic Bluetooth (BR/EDR):** Higher throughput, used for [[concepts/audio-modality|audio]] streaming (A2DP), file transfer (OBEX).
- **Bluetooth Low Energy (BLE):** Ultra-low power consumption, intermittent data transfer, widely used in IoT, [[concepts/internet-of-things|wearables]], and beacons.
- **Bluetooth Mesh:** Enables star topology networks for large-scale IoT deployments.

## Security & Privacy Implications
Bluetooth [[concepts/security|security]] relies on pairing and encryption (AES-CBC-MAC). However, proximity-based tracking via BLE has raised significant [[concepts/privacy|privacy]] concerns regarding surveillance and data [[concepts/secure|protection]].

- **[[concepts/contact-tracing|Contact Tracing]] Integration:** During the [[concepts/covid-19]] pandemic, BLE was utilized for [[concepts/exposure|exposure]] notification systems. Unlike GPS-based tracking, BLE offers better battery efficiency and [[concepts/reduced-precision|reduced precision]], ostensibly protecting location privacy. However, [[concepts/metadata|metadata]] [[concepts/storing|retention]] and cross-referencing risks persist.
- **Regulatory Context:** Implementation varies by jurisdiction, balancing [[concepts/population-health|public health]] needs with regulations like [[concepts/gdpr|GDPR]], [[concepts/hipaa|HIPAA]], and [[concepts/ccpa|CCPA]]. See [[lab-notes/2026-05-26-Bradford---COVID-19-contact-tracing-apps|Bradford - COVID-19 contact tracing apps]] for legal analysis on these implementations.

## Key Use Cases
- Wireless peripherals (mice, keyboards, headphones).
- [[concepts/health|Health]] devices (hearables, fitness trackers).
- Smart home/IoT sensors.
- Payment systems (NFC often builds on or mimics BLE protocols for proximity).

## Related Concepts
- Wi-Fi: Competing wireless standard, higher [[concepts/network-speed|bandwidth]], higher power.
- NFC: Shorter range, specific interaction model.
- Zigbee: Alternative mesh networking protocol.
